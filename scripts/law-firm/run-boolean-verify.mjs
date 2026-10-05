/**
 * Full-text boolean verification for keyword-mode rows. The main run checks
 * every 12th row, which all happen to be searchType "auto"; this pass checks
 * the row right after each of those (searchType "keyword") so both modes are
 * measured on the same topics.
 *
 *   node scripts/law-firm/run-boolean-verify.mjs [--run=2026-10-05]
 *
 * Reads raw/search.jsonl; writes raw/boolean-verify.jsonl
 */
import { appendFileSync, existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { satisfies } from './lib/boolean.mjs';
import { apiKey, call, pool, stats } from './lib/http.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', new Date().toISOString().slice(0, 10));
const RAW = resolve(ROOT, 'runs/law-firm', RUN, 'raw');
const OUT = resolve(RAW, 'boolean-verify.jsonl');
const key = apiKey(ROOT);
const q = new Map(JSON.parse(readFileSync(resolve(ROOT, 'datasets/law-firm/boolean-search-5000/queries.json'), 'utf8')).rows.map((r) => [r.id, r]));
const searched = new Map(readFileSync(resolve(RAW, 'search.jsonl'), 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l)).map((r) => [r.id, r]));
const done = new Set(existsSync(OUT) ? readFileSync(OUT, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l).id) : []);
const todo = [...q.values()].filter((r) => Number(r.id.slice(-4)) % 24 === 1 && r.searchType === 'keyword' && searched.get(r.id)?.results?.length && !done.has(r.id));
console.log(`boolean-verify: ${todo.length} keyword rows to check`);

async function fullText(caseId) {
  let body = '';
  let offset = 0;
  for (let page = 0; page < 3; page++) {
    const r = await call(key, 'GET', `/cases/${encodeURIComponent(caseId)}/text${offset ? `?offset=${offset}` : ''}`);
    if (!r.ok || !r.json?.opinion) return { ok: false, status: r.status, body };
    body += r.json.opinion.body ?? '';
    if (!r.json.opinion.truncated || !r.json.opinion.nextOffset) return { ok: true, body };
    offset = r.json.opinion.nextOffset;
  }
  return { ok: true, body, partial: true };
}

await pool(
  todo,
  async (row) => {
    const res = searched.get(row.id).results.slice(0, 3);
    const out = [];
    for (const h of res) {
      const ft = await fullText(h.caseId);
      if (!ft.ok) {
        out.push({ caseId: h.caseId, textStatus: ft.status ?? 'error' });
        continue;
      }
      const s = satisfies(row.query, ft.body);
      out.push({ caseId: h.caseId, caseName: h.caseName, hit: s.hit, negPresent: s.negPresent, words: s.wordCount, partial: Boolean(ft.partial) });
    }
    appendFileSync(OUT, JSON.stringify({ id: row.id, booleanCheck: out }) + '\n');
  },
  { concurrency: 3, onProgress: (n, t) => n % 25 === 0 && console.log(`verify ${n}/${t} calls=${stats.calls}`) },
);
console.log('done', stats);
