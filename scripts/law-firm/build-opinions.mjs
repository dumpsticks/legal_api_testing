/**
 * Select the 200 opinions for the output-format suite from cases the clean
 * Bluebook control lookup resolved: Supreme Court (many with separate
 * opinions), circuits, district courts, and state high and intermediate courts.
 *
 *   node scripts/law-firm/build-opinions.mjs [--run=2026-10-05]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyCourt } from './lib/courts.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
function readControl() {
  const p = resolve(HERE, '../..', 'runs/law-firm', RUN, 'raw/cites-bluebook-control.jsonl');
  return existsSync(p) ? readFileSync(p, 'utf8') : gunzipSync(readFileSync(`${p}.gz`)).toString('utf8');
}
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', '2026-10-05');
const OUT = resolve(ROOT, 'datasets/law-firm/opinion-format-200');

const recs = readControl()
  .split('\n')
  .filter(Boolean)
  .map((l) => JSON.parse(l))
  .filter((r) => r.candidates?.[0]?.caseId);
const QUOTA = { scotus: 60, circuit: 45, district: 30, 'state-supreme': 40, 'state-intermediate': 25 };
const got = Object.fromEntries(Object.keys(QUOTA).map((k) => [k, []]));
const seen = new Set();
for (const r of recs) {
  const c = r.candidates[0];
  if (seen.has(c.caseId)) continue;
  const cls = classifyCourt(c.court, c.jurisdiction, c.courtAbbreviation);
  const g = cls.level === 'scotus' ? 'scotus' : cls.level === 'circuit' ? 'circuit' : ['district', 'bankruptcy'].includes(cls.level) ? 'district' : cls.system === 'state' && cls.level === 'supreme' ? 'state-supreme' : cls.system === 'state' && cls.level === 'intermediate' ? 'state-intermediate' : null;
  if (!g || got[g].length >= QUOTA[g]) continue;
  seen.add(c.caseId);
  got[g].push({ caseId: c.caseId, caseName: c.caseName, citation: c.citation, court: c.court, year: c.year, group: g, sourceId: r.id });
}
const rows = Object.values(got).flat().map((r, i) => ({ id: `LF-OP-${String(i + 1).padStart(3, '0')}`, ...r }));
mkdirSync(OUT, { recursive: true });
writeFileSync(
  resolve(OUT, 'inputs.json'),
  JSON.stringify(
    {
      suite: 'law-firm/opinion-format-200',
      builtAt: new Date().toISOString(),
      count: rows.length,
      calls: ['GET /cases/:id', 'GET /cases/:id/text (all pages)', 'GET /cases/:id/pdf', 'GET /cases/:id/good-law'],
      checks: {
        bluebookLine: 'Metadata and PDF citation line pass the Bluebook lint (Rule 10.2.1, T6, T10, T1 court forms).',
        cleanText: 'No mid-sentence paragraph breaks, HTML/entity leakage, page-number or running-header lines, hyphenation splits, mojibake.',
        noDuplication: 'No paragraph or whole opinion printed twice.',
        pinCites: 'Star paging (*123) present so a firm can pin-cite the reporter.',
        pdf: 'Valid PDF; shows case name, reporter cite, court and date; whole opinion present (coverage ≥ 0.8 of the text endpoint); LawDiver branding; caption not collapsed into one run-on line.',
        ids: 'cases/:id and good-law agree on clusterId.',
      },
      rows,
    },
    null,
    1,
  ) + '\n',
);
console.log('opinion rows', rows.length, Object.fromEntries(Object.entries(got).map(([k, v]) => [k, v.length])));
