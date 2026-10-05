/**
 * Step 1 of the Bluebook off-cite suite: collect source cases (correct
 * citations) that the mangler will knock slightly off.
 *
 *   node scripts/law-firm/build-bluebook-sources.mjs
 *   -> datasets/law-firm/bluebook-offcite-1000/sources.json
 *
 * Step 2 is run-cites.mjs --suite=bluebook-control (one clean lookup per
 * source to learn the court and year), step 3 is build-bluebook.mjs.
 */
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCite } from './lib/bluebook.mjs';
import { REVERSED_BELOW, SCOTUS_GOOD, SCOTUS_OVERRULED, STATE_GOOD, STATE_OVERRULED } from './lib/goodlaw-truth.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = resolve(ROOT, 'datasets/law-firm/bluebook-offcite-1000');
const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));

let seed = 7;
const rnd = () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const shuffle = (a) => a.map((x) => [rnd(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

const sources = [];
const seen = new Set();
function add(cite, origin, extra = {}) {
  // single-reporter cites only (the mangler works on one locator)
  if (/\(\d+ (Pet|Cranch|Wheat|Wall|How|Dall)\.\)/.test(cite)) return;
  const p = parseCite(cite);
  if (!p || !p.reporter || !p.year) return;
  const k = `${p.vol} ${p.reporter} ${p.page}`;
  if (seen.has(k)) return;
  seen.add(k);
  sources.push({ cite, origin, locator: k, ...extra });
}

for (const t of [...SCOTUS_GOOD, ...SCOTUS_OVERRULED, ...REVERSED_BELOW, ...STATE_GOOD, ...STATE_OVERRULED]) {
  // REVERSED_BELOW rows with two reporters: keep first locator only
  add(t.cite.replace(/^(.*?, \d+ [^,]+? \d+), \d+ [^()]+? \d+ (\(.*\))$/, '$1 $2'), 'curated-bluebook', { nameIsBluebook: true });
}
const bank = load('datasets/citechecker/5300/answer-key.json').cases;
for (const c of shuffle(bank.filter((c) => ['perfect', 'valid_exact', 'good_law'].includes(c.family) && /^(SEED|ANAT|BANK|TRICK)-/.test(c.id)))) {
  add(c.cite, '5300-curated', { sourceId: c.id });
}
const st = load('datasets/citechecker/state-1006/bank.json');
for (const c of st.sections.flatMap((s) => s.cases).filter((c) => c.aspect === 'valid_exact')) add(c.input, 'state-1006', { sourceId: c.id });

// federal circuit / district with a Westlaw twin (for the vendor-cite mangle)
const lines = execSync(`zcat "${resolve(ROOT, '../casediver/docs/dual-reporter-wl-cites-2010-2019.jsonl.gz')}" | sed -n '20001,60000p'`, { maxBuffer: 256 * 1024 * 1024 })
  .toString()
  .split('\n')
  .filter(Boolean)
  .map((l) => JSON.parse(l));
let n = 0;
for (const d of shuffle(lines)) {
  if (n >= 420) break;
  if (!/^\d+ (F\.3d|F\.4th|F\. Supp\. 2d|F\. Supp\. 3d) \d+$/.test(d.reporterCite)) continue;
  if (d.caseName.length > 120) continue;
  const before = sources.length;
  add(`${d.caseName}, ${d.reporterCite} (${d.dateFiled.slice(0, 4)})`, 'dual-reporter', { wlCite: d.wlCite, sourceId: `dual-reporter:${d.opinionId}` });
  if (sources.length > before) n++;
}

sources.forEach((s, i) => (s.id = `LF-BBS-${String(i + 1).padStart(4, '0')}`));
mkdirSync(OUT, { recursive: true });
writeFileSync(resolve(OUT, 'sources.json'), JSON.stringify({ suite: 'law-firm/bluebook-offcite-1000 (sources)', builtAt: new Date().toISOString(), count: sources.length, rows: sources }, null, 1) + '\n');
console.log('sources', sources.length, sources.reduce((m, s) => ((m[s.origin] = (m[s.origin] ?? 0) + 1), m), {}));
