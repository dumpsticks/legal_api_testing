/**
 * Run the law-firm boolean search bank (and the carried-forward realworld
 * boolean rows) against POST /api/v1/search. Resumable: rows already in the
 * raw JSONL are skipped.
 *
 *   LAWDIVER_API_KEY=ld_live_... node scripts/law-firm/run-search.mjs [--run=2026-10-05] [--limit=50] [--suite=bank|carried|all]
 *
 * Raw output: runs/law-firm/<run>/raw/search.jsonl (one line per query)
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { satisfies } from './lib/boolean.mjs';
import { apiKey, call, pool, stats } from './lib/http.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', new Date().toISOString().slice(0, 10));
const LIMIT = Number(arg('limit', 0)) || null;
const SUITE = arg('suite', 'all');
const RAW = resolve(ROOT, 'runs/law-firm', RUN, 'raw');
mkdirSync(RAW, { recursive: true });
const OUT = resolve(RAW, 'search.jsonl');
const key = apiKey(ROOT);

const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));
const items = [];
if (SUITE !== 'carried') {
  const q = load('datasets/law-firm/boolean-search-5000/queries.json').rows;
  const k = new Map(load('datasets/law-firm/boolean-search-5000/answer-key.json').rows.map((r) => [r.id, r]));
  for (const r of q) items.push({ suite: 'bank', row: r, key: k.get(r.id) });
}
if (SUITE !== 'bank') {
  const q = load('datasets/law-firm/carried-forward/realworld-boolean/queries.json').rows;
  const k = new Map(load('datasets/law-firm/carried-forward/realworld-boolean/answer-key.json').rows.map((r) => [r.id, r]));
  for (const r of q) items.push({ suite: 'carried', row: { ...r, searchType: 'auto', limit: 10 }, key: k.get(r.id) });
}
const done = new Set();
if (existsSync(OUT)) {
  for (const line of readFileSync(OUT, 'utf8').split('\n')) {
    if (!line) continue;
    try {
      const j = JSON.parse(line);
      if (j.httpStatus === 200) done.add(j.id);
    } catch {}
  }
}
let todo = items.filter((i) => !done.has(i.row.id));
if (LIMIT) todo = todo.slice(0, LIMIT);
console.log(`run ${RUN}: ${items.length} queries, ${done.size} done, ${todo.length} to send`);

const trimHit = (h) => ({
  caseId: h.caseId,
  caseName: h.caseName,
  citation: h.citation,
  bluebookCitation: h.bluebookCitation,
  court: h.court,
  courtAbbreviation: h.courtAbbreviation,
  jurisdiction: h.jurisdiction,
  dateFiled: h.dateFiled,
  year: h.year,
  published: h.published,
  opinionType: h.opinionType,
  goodLaw: h.goodLaw?.status ?? null,
  snippet: (h.snippet ?? '').slice(0, 300),
  snippetSource: h.snippetSource,
});

async function fullText(caseId) {
  let body = '';
  let offset = 0;
  for (let page = 0; page < 3; page++) {
    const r = await call(key, 'GET', `/cases/${encodeURIComponent(caseId)}/text${offset ? `?offset=${offset}` : ''}`);
    if (!r.ok || !r.json?.opinion) return { ok: false, status: r.status, body };
    body += r.json.opinion.body ?? '';
    if (!r.json.opinion.truncated || !r.json.opinion.nextOffset) return { ok: true, body, totalChars: r.json.opinion.totalChars };
    offset = r.json.opinion.nextOffset;
  }
  return { ok: true, body, partial: true };
}

const t0 = Date.now();
await pool(
  todo,
  async ({ suite, row, key: k }) => {
    const body = {
      query: row.query,
      searchType: row.searchType ?? 'auto',
      limit: row.limit ?? 10,
      jurisdiction: row.jurisdiction,
      include: { goodLawReport: false },
      ...(row.filters ? { filters: row.filters } : {}),
    };
    const r = await call(key, 'POST', '/search', { body });
    const j = r.json ?? {};
    const results = Array.isArray(j.results) ? j.results : [];
    const rec = {
      id: row.id,
      suite,
      at: new Date().toISOString(),
      httpStatus: r.status,
      ms: r.ms,
      requestId: j.requestId ?? r.headers?.['x-request-id'] ?? null,
      error: j.error ?? (r.ok ? undefined : r.error),
      total: j.total ?? null,
      totalAvailable: j.totalAvailable ?? null,
      degraded: j.degraded ?? null,
      warning: j.warning ?? null,
      suggestion: j.suggestion ?? null,
      searchInfo: j.searchInfo
        ? {
            enginesUsed: j.searchInfo.enginesUsed,
            jurisdictionLabel: j.searchInfo.jurisdictionLabel,
            liftedPhrases: j.searchInfo.liftedPhrases,
            citationsDetected: j.searchInfo.citationsDetected,
            engineErrors: j.searchInfo.engineErrors,
            bodyTextSearchUnavailable: j.searchInfo.bodyTextSearchUnavailable,
            latencyMs: j.searchInfo.latencyMs,
          }
        : null,
      results: results.map(trimHit),
    };
    if (k?.verifyBooleanText && results.length) {
      rec.booleanCheck = [];
      for (const h of results.slice(0, 3)) {
        const ft = await fullText(h.caseId);
        if (!ft.ok) {
          rec.booleanCheck.push({ caseId: h.caseId, textStatus: ft.status ?? 'error' });
          continue;
        }
        const s = satisfies(row.query, ft.body);
        rec.booleanCheck.push({ caseId: h.caseId, caseName: h.caseName, hit: s.hit, negPresent: s.negPresent, words: s.wordCount, partial: Boolean(ft.partial) });
      }
    }
    appendFileSync(OUT, JSON.stringify(rec) + '\n');
  },
  {
    onProgress: (n, total) => {
      if (n % 50 === 0 || n === total) {
        const rate = n / ((Date.now() - t0) / 60000);
        console.log(`${n}/${total}  ${rate.toFixed(1)}/min  calls=${stats.calls} retries=${stats.retries} 429=${stats.http429}`);
      }
    },
  },
);
console.log('done', stats);
