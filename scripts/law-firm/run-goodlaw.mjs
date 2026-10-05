/**
 * Good-law suite, step 2: for every case the cite check resolved, pull the
 * good-law detail and the goodlaw-check citing-case list (negative first).
 *
 *   node scripts/law-firm/run-cites.mjs --suite=goodlaw     (step 1: resolve)
 *   node scripts/law-firm/run-goodlaw.mjs [--run=2026-10-05]
 *
 * Raw output: runs/law-firm/<run>/raw/goodlaw.jsonl
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { apiKey, call, pool, stats } from './lib/http.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', new Date().toISOString().slice(0, 10));
const RAW = resolve(ROOT, 'runs/law-firm', RUN, 'raw');
mkdirSync(RAW, { recursive: true });
const OUT = resolve(RAW, 'goodlaw.jsonl');
const key = apiKey(ROOT);

const resolved = readFileSync(resolve(RAW, 'cites-goodlaw.jsonl'), 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((l) => JSON.parse(l));
const done = new Set(existsSync(OUT) ? readFileSync(OUT, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l).id) : []);
const todo = resolved.filter((r) => r.candidates?.[0]?.caseId && !done.has(r.id));
console.log(`goodlaw: ${resolved.length} resolved rows, ${done.size} done, ${todo.length} to check`);

const t0 = Date.now();
await pool(
  todo,
  async (r) => {
    const caseId = r.candidates[0].caseId;
    const gl = await call(key, 'GET', `/cases/${caseId}/good-law`);
    const gc = await call(key, 'GET', `/cases/${caseId}/goodlaw-check?limit=10&order=negative`);
    appendFileSync(
      OUT,
      JSON.stringify({
        id: r.id,
        caseId,
        goodLaw: gl.ok
          ? {
              status: gl.json.status,
              negative: gl.json.negative,
              unknown: gl.json.unknown,
              negativeTreatmentCount: gl.json.negativeTreatmentCount,
              basis: gl.json.basis,
              stale: gl.json.stale,
              clusterId: gl.json.clusterId,
              negativeCitations: (gl.json.negativeCitations ?? []).slice(0, 15).map((n) => ({
                caseName: n.citingCaseName ?? n.caseName ?? null,
                citation: n.citation ?? null,
                treatment: n.treatment ?? n.status ?? null,
                rationale: (n.treatmentRationale ?? '').slice(0, 200) || null,
                dateFiled: n.dateFiled ?? null,
                citingCaseId: n.citingOpinionId ?? n.citingCaseId ?? null,
              })),
            }
          : { httpStatus: gl.status, error: gl.json?.error ?? gl.error },
        check: gc.ok
          ? {
              total: gc.json.total,
              citingCases: (gc.json.citingCases ?? []).map((c) => ({ caseName: c.caseName, citation: c.citation, dateFiled: c.dateFiled, status: c.status, pin: c.pin ?? null, citingCaseId: c.citingCaseId })),
            }
          : { httpStatus: gc.status, error: gc.json?.error ?? gc.error },
      }) + '\n',
    );
  },
  { concurrency: 4, onProgress: (n, t) => n % 50 === 0 && console.log(`goodlaw ${n}/${t} ${(n / ((Date.now() - t0) / 60000)).toFixed(1)}/min calls=${stats.calls} 429=${stats.http429}`) },
);
console.log('done', stats);
