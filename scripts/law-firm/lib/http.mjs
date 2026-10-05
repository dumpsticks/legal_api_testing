/**
 * Rate-limited LawDiver API client shared by every law-firm suite.
 * One process, one key, one limiter: the key allows 60 requests/minute.
 *
 *   LAWDIVER_API_KEY=ld_live_...   (required; never commit it)
 *   LAWDIVER_API_BASE=https://lawdiver.com/api/v1
 *   LAWFIRM_RPM=56                 (requests per minute the limiter allows)
 *   LAWFIRM_CONCURRENCY=6
 */
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const BASE = process.env.LAWDIVER_API_BASE ?? 'https://lawdiver.com/api/v1';

export function apiKey(root) {
  const fromEnv = process.env.LAWDIVER_API_KEY || process.env.LAWTOOLS_API_KEY;
  if (fromEnv?.trim()) return fromEnv.trim();
  const envPath = resolve(root, '.env');
  if (existsSync(envPath)) {
    const m = readFileSync(envPath, 'utf8').match(/(?:ld|lt)_live_[A-Za-z0-9_-]+/);
    if (m) return m[0];
  }
  throw new Error('Set LAWDIVER_API_KEY (or put an ld_live_ key in .env). Never commit the key.');
}

let RPM = Number(process.env.LAWFIRM_RPM ?? 56);
// Several suites can share one key: point them at one file holding the
// per-process budget and change it while they run.
const RPM_FILE = process.env.LAWFIRM_RPM_FILE;
let rpmReadAt = 0;
function refreshRpm() {
  if (!RPM_FILE || Date.now() - rpmReadAt < 10_000) return;
  rpmReadAt = Date.now();
  try {
    const v = Number(readFileSync(RPM_FILE, 'utf8').trim());
    if (v > 0) RPM = v;
  } catch {}
}
const CONCURRENCY = Number(process.env.LAWFIRM_CONCURRENCY ?? 6);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// sliding-window limiter
const stamps = [];
let inFlight = 0;
const waiters = [];
async function acquire() {
  for (;;) {
    refreshRpm();
    const now = Date.now();
    while (stamps.length && now - stamps[0] > 60_000) stamps.shift();
    if (stamps.length < RPM && inFlight < CONCURRENCY) {
      stamps.push(now);
      inFlight++;
      return;
    }
    const wait = stamps.length >= RPM ? 60_000 - (now - stamps[0]) + 25 : 50;
    await sleep(Math.max(25, wait));
  }
}
function release() {
  inFlight--;
}

export const stats = { calls: 0, retries: 0, http429: 0, errors: 0 };

/**
 * Call the API. Returns { ok, status, json, buf, headers, ms, error }.
 * Retries 429 (honouring Retry-After) and 5xx / network errors up to 4 times.
 */
export async function call(key, method, path, { body, binary = false, timeoutMs = 120_000 } = {}) {
  let attempt = 0;
  for (;;) {
    attempt++;
    await acquire();
    const t0 = Date.now();
    let res;
    let timer;
    try {
      const ctrl = new AbortController();
      timer = setTimeout(() => ctrl.abort(), timeoutMs);
      res = await fetch(BASE + path, {
        method,
        headers: {
          Authorization: `Bearer ${key}`,
          'User-Agent': 'legal-api-testing/law-firm-series',
          ...(body ? { 'Content-Type': 'application/json' } : {}),
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: ctrl.signal,
      });
      stats.calls++;
      const ms = Date.now() - t0;
      const headers = Object.fromEntries(res.headers.entries());
      if (res.status === 429 || res.status >= 500) {
        clearTimeout(timer);
        release();
        if (res.status === 429) stats.http429++;
        if (attempt <= 4) {
          stats.retries++;
          const ra = Number(res.headers.get('retry-after')) || 2 ** attempt * 2;
          await sleep(Math.min(90, ra) * 1000);
          continue;
        }
        const text = await res.text().catch(() => '');
        return { ok: false, status: res.status, json: safeJson(text), ms, headers, error: text.slice(0, 300) };
      }
      if (binary) {
        const buf = Buffer.from(await res.arrayBuffer());
        clearTimeout(timer);
        release();
        return { ok: res.ok, status: res.status, buf, ms, headers };
      }
      const text = await res.text();
      clearTimeout(timer);
      release();
      const json = safeJson(text);
      return { ok: res.ok, status: res.status, json, ms, headers, error: json ? undefined : text.slice(0, 300) };
    } catch (e) {
      clearTimeout(timer);
      release();
      stats.errors++;
      if (attempt <= 4) {
        stats.retries++;
        await sleep(2 ** attempt * 1000);
        continue;
      }
      return { ok: false, status: null, json: null, ms: Date.now() - t0, error: String(e?.message ?? e) };
    }
  }
}

function safeJson(t) {
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}

/** Run tasks with the shared limiter; tasks are async fns. */
export async function pool(items, fn, { concurrency = CONCURRENCY, onProgress } = {}) {
  let i = 0;
  let done = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    for (;;) {
      const idx = i++;
      if (idx >= items.length) return;
      await fn(items[idx], idx);
      done++;
      onProgress?.(done, items.length);
    }
  });
  await Promise.all(workers);
}
