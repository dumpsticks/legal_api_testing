/**
 * Send citation lists to POST /api/v1/citecheck/cite in batches and keep the
 * fields the law-firm graders need. Resumable.
 *
 *   node scripts/law-firm/run-cites.mjs --suite=bluebook-control|bluebook|goodlaw|carried-cites [--run=2026-10-05] [--batch=10]
 *
 * Raw output: runs/law-firm/<run>/raw/cites-<suite>.jsonl (one line per input row)
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { apiKey, call, pool, stats } from './lib/http.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', new Date().toISOString().slice(0, 10));
const SUITE = arg('suite');
const BATCH = Number(arg('batch', 10));
const RAW = resolve(ROOT, 'runs/law-firm', RUN, 'raw');
mkdirSync(RAW, { recursive: true });
const OUT = resolve(RAW, `cites-${SUITE}.jsonl`);
const key = apiKey(ROOT);
const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));

let rows;
if (SUITE === 'bluebook-control') rows = load('datasets/law-firm/bluebook-offcite-1000/sources.json').rows.map((r) => ({ id: r.id, citation: r.cite }));
else if (SUITE === 'bluebook') rows = load('datasets/law-firm/bluebook-offcite-1000/inputs.json').rows;
else if (SUITE === 'goodlaw') rows = load('datasets/law-firm/goodlaw-1000/inputs.json').rows;
else if (SUITE === 'carried-cites') rows = load('datasets/law-firm/carried-forward/citecheck/inputs.json').rows;
else throw new Error('--suite=bluebook-control|bluebook|goodlaw|carried-cites');

const done = new Set();
if (existsSync(OUT)) for (const l of readFileSync(OUT, 'utf8').split('\n')) if (l) try { const j = JSON.parse(l); if (j.verdict !== 'error' && j.httpStatus === 200) done.add(j.id); } catch {}
const todo = rows.filter((r) => !done.has(r.id));
console.log(`${SUITE}: ${rows.length} rows, ${done.size} done, ${todo.length} to send`);

const trimCand = (c) =>
  c && {
    caseId: c.caseId,
    caseName: c.caseName,
    bluebookCitation: c.bluebookCitation,
    citation: c.citation,
    parallelCitations: c.parallelCitations,
    knownCitations: (c.knownCitations ?? []).map((k) => ({ cite: k.cite, kind: k.kind, preferred: k.preferred, matched: k.matched })),
    court: c.court,
    courtAbbreviation: c.courtAbbreviation,
    jurisdiction: c.jurisdiction,
    year: c.year,
    dateFiled: c.dateFiled,
    published: c.published,
    goodLaw: c.goodLaw,
    matchedBy: c.matchedBy,
    confidence: c.confidence,
  };

function toRecord(row, units, meta) {
  const mine = units.filter((u) => u.inputIndex === row._i);
  const primary = mine.find((u) => u.role === 'primary') ?? mine[0] ?? null;
  return {
    id: row.id,
    input: row.citation,
    httpStatus: meta.status,
    requestId: meta.requestId,
    ms: meta.ms,
    units: mine.length,
    verdict: primary?.verdict ?? (meta.status === 200 ? 'missing' : 'error'),
    lookupStatus: primary?.lookupStatus ?? null,
    correctedCitation: primary?.correctedCitation ?? null,
    explanation: primary?.explanation ?? null,
    fieldMatches: primary?.fieldMatches ?? null,
    inputParsed: primary?.inputParsed ?? null,
    candidates: (primary?.candidates ?? []).slice(0, 3).map(trimCand),
    error: meta.error ?? null,
  };
}

const batches = [];
for (let i = 0; i < todo.length; i += BATCH) batches.push(todo.slice(i, i + BATCH));

async function send(batch) {
  const body = { citations: batch.map((r) => r.citation) };
  const r = await call(key, 'POST', '/citecheck/cite', { body, timeoutMs: 90_000 });
  const units = Array.isArray(r.json?.results) ? r.json.results : [];
  return { r, units };
}

await pool(
  batches,
  async (batch) => {
    batch.forEach((row, i) => (row._i = i));
    let { r, units } = await send(batch);
    const recs = batch.map((row) => toRecord(row, units, { status: r.status, requestId: r.json?.requestId, ms: r.ms, error: r.ok ? null : r.error ?? JSON.stringify(r.json?.error ?? '') }));
    // soft-deadline rows: retry one at a time
    for (let k = 0; k < recs.length; k++) {
      if (recs[k].verdict === 'error' || recs[k].verdict === 'missing') {
        const row = { ...batch[k], _i: 0 };
        const again = await send([row]);
        recs[k] = { ...toRecord(row, again.units, { status: again.r.status, requestId: again.r.json?.requestId, ms: again.r.ms }), retried: true };
      }
    }
    for (const rec of recs) appendFileSync(OUT, JSON.stringify(rec) + '\n');
  },
  { concurrency: 3, onProgress: (n, t) => (n % 10 === 0 || n === t) && console.log(`${SUITE} batches ${n}/${t} calls=${stats.calls} 429=${stats.http429}`) },
);
console.log('done', stats);
