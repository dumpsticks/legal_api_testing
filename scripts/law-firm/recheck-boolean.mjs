/**
 * Re-evaluate opinions that failed the full-text boolean check, fetching
 * their text again and evaluating with the current lib/boolean.mjs (e.g.
 * after a text-format change on the API side). Rewrites booleanCheck entries
 * in raw/boolean-recheck.jsonl, which grade.mjs applies over earlier checks.
 *
 *   node scripts/law-firm/recheck-boolean.mjs --run=2026-10-05-r2
 */
import { appendFileSync, existsSync, readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { satisfies } from './lib/boolean.mjs';
import { apiKey, call, pool, stats } from './lib/http.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const RUN = process.argv.find((a) => a.startsWith('--run='))?.split('=')[1];
const RAW = resolve(ROOT, 'runs/law-firm', RUN, 'raw');
const key = apiKey(ROOT);
const read = (f) => {
  const p = resolve(RAW, f);
  const t = existsSync(p) ? readFileSync(p, 'utf8') : existsSync(`${p}.gz`) ? gunzipSync(readFileSync(`${p}.gz`)).toString() : '';
  return t.split('\n').filter(Boolean).map((l) => JSON.parse(l));
};
const queries = new Map();
for (const f of ['datasets/law-firm/boolean-search-5000/queries.json', 'datasets/law-firm/carried-forward/realworld-boolean/queries.json']) {
  for (const r of JSON.parse(readFileSync(resolve(ROOT, f), 'utf8')).rows) queries.set(r.id, r.query);
}
const checks = new Map();
for (const r of read('search.jsonl')) if (r.booleanCheck) checks.set(r.id, r.booleanCheck);
for (const r of read('boolean-verify.jsonl')) if (!checks.has(r.id)) checks.set(r.id, r.booleanCheck);
const todo = [];
for (const [id, bc] of checks) for (const b of bc) if (b.hit === false) todo.push({ id, caseId: b.caseId, caseName: b.caseName });
console.log(`recheck: ${todo.length} failing opinions`);
const OUT = resolve(RAW, 'boolean-recheck.jsonl');
await pool(todo, async (t) => {
  let body = '';
  let offset = 0;
  for (let i = 0; i < 3; i++) {
    const r = await call(key, 'GET', `/cases/${t.caseId}/text${offset ? `?offset=${offset}` : ''}`);
    if (!r.ok || !r.json?.opinion) break;
    body += r.json.opinion.body ?? '';
    if (!r.json.opinion.truncated || !r.json.opinion.nextOffset) break;
    offset = r.json.opinion.nextOffset;
  }
  if (!body) return;
  const s = satisfies(queries.get(t.id), body);
  appendFileSync(OUT, JSON.stringify({ id: t.id, caseId: t.caseId, caseName: t.caseName, hit: s.hit, negPresent: s.negPresent, words: s.wordCount }) + '\n');
}, { concurrency: 6, onProgress: (n, total) => n % 50 === 0 && console.log(`${n}/${total} calls=${stats.calls}`) });
console.log('done', stats);
