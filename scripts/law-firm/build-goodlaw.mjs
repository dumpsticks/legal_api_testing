/**
 * Build the law-firm good-law suite: 1,000 state and federal cases.
 *
 *   node scripts/law-firm/build-goodlaw.mjs
 *
 * truthSource:
 *   independent         subsequent history written from the published reports (lib/goodlaw-truth.mjs)
 *   prior-bank          carried forward from datasets/citechecker (overruled-100, 5300 good_law/bad_law)
 *   presumed-good       random reported cases from the 5300 bank with no known negative history;
 *                       a negative flag on one of these is queued for human review, not scored wrong.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCite } from './lib/bluebook.mjs';
import { REVERSED_BELOW, SCOTUS_GOOD, SCOTUS_OVERRULED, STATE_GOOD, STATE_OVERRULED } from './lib/goodlaw-truth.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = resolve(ROOT, 'datasets/law-firm/goodlaw-1000');
const TARGET = 1000;
const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));

let seed = 99;
const rnd = () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const shuffle = (a) => a.map((x) => [rnd(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

const FED_REPORTERS = /^(U\.S\.|S\. Ct\.|F\.|F\.2d|F\.3d|F\.4th|F\. Supp\.|F\. Supp\. 2d|F\. Supp\. 3d|B\.R\.|F\.R\.D\.|Fed\. Cl\.)$/;
const HARD = new Set(['overruled', 'reversed', 'vacated', 'superseded']);
const rows = [];
const seen = new Set();
const norm = (c) => {
  const p = parseCite(c);
  return p ? `${p.vol} ${p.reporter ?? p.reporterRaw} ${p.page}`.toLowerCase() : c.toLowerCase();
};
function add(r) {
  const k = norm(r.cite);
  if (seen.has(k)) return false;
  seen.add(k);
  rows.push(r);
  return true;
}
function tierOf(cite) {
  const p = parseCite(cite);
  if (!p) return 'unknown';
  return FED_REPORTERS.test(p.reporter ?? '') ? 'federal' : 'state';
}

// 1) independent truth
for (const [list, group] of [
  [SCOTUS_OVERRULED, 'scotus-overruled'],
  [REVERSED_BELOW, 'reversed-below'],
  [STATE_OVERRULED, 'state-overruled'],
  [SCOTUS_GOOD, 'scotus-good'],
  [STATE_GOOD, 'state-good'],
]) {
  for (const t of list) {
    add({
      cite: t.cite,
      group,
      tier: tierOf(t.cite),
      truthSource: 'independent',
      expect: t.expect,
      severity: t.expect === 'negative' ? (HARD.has(t.how) ? 'hard' : 'soft') : null,
      how: t.how ?? null,
      by: t.by ?? null,
      byRe: t.byRe ?? null,
    });
  }
}

// 2) prior banks
const ovr = load('datasets/citechecker/overruled-100/answer-key.json').cases;
for (const c of ovr) {
  add({
    cite: c.cite,
    group: 'overruled-100',
    tier: ['state', 'federal'].includes(c.tier) ? c.tier : tierOf(c.cite),
    usps: c.usps ?? null,
    truthSource: 'prior-bank',
    expect: 'negative',
    severity: 'hard',
    how: c.expectedGoodLawStatus ?? 'overruled',
    by: c.goodLawBasis ?? null,
    byRe: null,
    priorOpinionId: c.opinionId ?? null,
  });
}
const bank5300 = load('datasets/citechecker/5300/answer-key.json').cases;
for (const c of bank5300) {
  if (c.family === 'bad_law' || (c.family === 'good_law' && /overruled|negative/i.test(c.why))) {
    const m = c.why.match(/good-law status "(\w+)"/);
    add({
      cite: c.cite,
      group: `5300-${c.family}`,
      tier: tierOf(c.cite),
      truthSource: 'prior-bank',
      expect: 'negative',
      severity: m?.[1] === 'overruled' || /overruled/i.test(c.why) ? 'hard' : 'soft',
      how: m?.[1] ?? 'negative',
      by: c.why,
      byRe: null,
    });
  }
}

// 3) presumed good: reported cases with a clean cite from the 5300 bank
const pool = shuffle(
  bank5300.filter((c) => ['perfect', 'valid_exact'].includes(c.family) && /^(SEED|ANAT|BANK|REP|JUR)-/.test(c.id)),
).filter((c) => {
  const p = parseCite(c.cite);
  return p && p.reporter && p.year && Number(p.year) >= 1900 && !/[A-Z]{4,}/.test(p.name.replace(/\b(LLC|USA|INC|CORP|STATE)\b/g, ''));
});
const need = TARGET - rows.length;
const wantFed = Math.round(need / 2);
let fed = 0;
let state = 0;
for (const c of pool) {
  if (rows.length >= TARGET) break;
  const tier = tierOf(c.cite);
  if (tier === 'federal' && fed >= wantFed) continue;
  if (tier === 'state' && state >= need - wantFed) continue;
  if (add({ cite: c.cite, group: 'presumed-good', tier, truthSource: 'presumed-good', expect: 'good', severity: null, how: null, by: null, byRe: null, sourceId: c.id })) {
    if (tier === 'federal') fed++;
    else state++;
  }
}

// 4) federal fill from the dual-reporter sample (reported F./F. Supp. cases with a WL twin)
if (rows.length < TARGET) {
  const { execSync } = await import('node:child_process');
  const src = resolve(ROOT, '../casediver/docs/dual-reporter-wl-cites-2010-2019.jsonl.gz');
  const lines = execSync(`zcat "${src}" | head -n 20000`, { maxBuffer: 64 * 1024 * 1024 }).toString().split('\n').filter(Boolean);
  const cand = shuffle(lines.map((l) => JSON.parse(l))).filter((d) => /^\d+ (F\.3d|F\.4th|F\. Supp\. [23]d|B\.R\.) \d+$/.test(d.reporterCite) && d.caseName.length < 80);
  for (const d of cand) {
    if (rows.length >= TARGET) break;
    const cite = `${d.caseName}, ${d.reporterCite} (${d.dateFiled.slice(0, 4)})`;
    add({ cite, group: 'presumed-good', tier: 'federal', truthSource: 'presumed-good', expect: 'good', severity: null, how: null, by: null, byRe: null, sourceId: `dual-reporter:${d.opinionId}` });
  }
}

rows.forEach((r, i) => (r.id = `LF-GL-${String(i + 1).padStart(4, '0')}`));
mkdirSync(OUT, { recursive: true });
const inputs = rows.map((r) => ({ id: r.id, citation: r.cite, tier: r.tier }));
writeFileSync(resolve(OUT, 'inputs.json'), JSON.stringify({ suite: 'law-firm/goodlaw-1000', builtAt: new Date().toISOString(), count: inputs.length, rows: inputs }, null, 1) + '\n');
writeFileSync(
  resolve(OUT, 'answer-key.json'),
  JSON.stringify(
    {
      suite: 'law-firm/goodlaw-1000',
      count: rows.length,
      flow: [
        'POST /citecheck/cite (batches of 10) -> candidate caseId',
        'GET /cases/:id/good-law',
        'GET /cases/:id/goodlaw-check?limit=10&order=negative',
      ],
      scoring: {
        negative_hard: 'Status must be negative (negative: true, or overruled/reversed/vacated/questioned family). Bonus: the later decision (byRe) surfaced in negativeCitations or goodlaw-check rows.',
        negative_soft: 'Partial-overruling, abrogation, limitation, repudiation: any negative or questioned signal passes; a clean "good" is a miss.',
        good: 'Must not be negative. "unknown" is partial (no clean bill of health, but no false alarm).',
        presumed_good: 'Negative flags are listed for human review, not scored as wrong.',
      },
      rows,
    },
    null,
    1,
  ) + '\n',
);
const by = (f) => rows.reduce((m, r) => ((m[f(r)] = (m[f(r)] ?? 0) + 1), m), {});
console.log('rows', rows.length, by((r) => r.group), by((r) => r.tier), by((r) => r.expect));
