/**
 * Build the law-firm boolean search bank: 5,000 terms-and-connectors queries,
 * each with a specific jurisdictional scope, plus the carried-forward boolean
 * rows of realworld-1000.
 *
 *   node scripts/law-firm/build-search.mjs
 *
 * Writes datasets/law-firm/boolean-search-5000/{queries,answer-key}.json
 *        datasets/law-firm/carried-forward/realworld-boolean/{queries,answer-key}.json
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CIRCUITS, STATES } from './lib/courts.mjs';
import { TOPICS } from './lib/topics.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = resolve(ROOT, 'datasets/law-firm/boolean-search-5000');
const N = 5000;

// deterministic RNG
let seed = 20261005;
const rnd = () => {
  // mulberry32
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const pick = (a) => a[Math.floor(rnd() * a.length)];

const TEMPLATES = [
  { id: 'wl-sentence', syntax: 'westlaw', f: (t) => `${t.A} /s ${t.B}` },
  { id: 'wl-para-and', syntax: 'westlaw', f: (t) => `${t.A} /p ${t.B} & ${t.C}` },
  { id: 'wl-or-group', syntax: 'westlaw', f: (t) => `(${t.A} OR ${t.S}) /s ${t.B}` },
  { id: 'wl-root-para', syntax: 'westlaw', f: (t) => `${t.R} /p ${t.B}` },
  { id: 'wl-but-not', syntax: 'westlaw', f: (t) => `${t.A} & ${t.B} % ${t.X}` },
  { id: 'and-not', syntax: 'generic', f: (t) => `${t.A} AND ${t.B} AND NOT ${t.X}` },
  { id: 'wl-numeric', syntax: 'westlaw', f: (t) => `${t.A} /10 ${t.B}` },
  { id: 'lx-w-s', syntax: 'lexis', f: (t) => `${t.A} w/s ${t.B}` },
  { id: 'lx-w-p-and', syntax: 'lexis', f: (t) => `${t.A} w/p ${t.B} and ${t.C}` },
  { id: 'lx-w-n', syntax: 'lexis', f: (t) => `${t.A} w/15 (${t.B} or ${t.C})` },
  { id: 'wl-ordered', syntax: 'westlaw', f: (t) => `${t.A} +s ${t.B}` },
  { id: 'wl-root-near', syntax: 'westlaw', f: (t) => `${t.R} /25 ${t.C}` },
  { id: 'three-and', syntax: 'generic', f: (t) => `${t.A} AND ${t.B} AND ${t.C}` },
  { id: 'or-and-not', syntax: 'generic', f: (t) => `(${t.A} OR ${t.S}) AND ${t.C} NOT ${t.X}` },
];

const USPS = Object.keys(STATES);
const BIG = ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'MI', 'NJ', 'GA', 'MA', 'WA'];
const STATE_WEIGHTED = [...USPS, ...BIG, ...BIG];

const DATE_WINDOWS = [
  { label: 'since-2015', filters: { dateFrom: '2015-01-01' } },
  { label: 'since-2020', filters: { dateFrom: '2020-01-01' } },
  { label: '2000s', filters: { dateFrom: '2000-01-01', dateTo: '2009-12-31' } },
  { label: 'pre-2000', filters: { dateTo: '1999-12-31' } },
  { label: 'since-2023', filters: { dateFrom: '2023-01-01' } },
  { label: '1990-2010', filters: { dateFrom: '1990-01-01', dateTo: '2010-12-31' } },
];

function scopeFor(topic) {
  const lm = topic.landmark;
  const r = rnd();
  if (topic.scope === 'state') {
    if (lm?.kind === 'state' && r < 0.3) return rnd() < 0.6 ? { type: 'one_state', state: lm.state } : { type: 'one_state_plus_federal', state: lm.state };
    if (r < 0.62) return { type: 'one_state', state: pick(STATE_WEIGHTED) };
    if (r < 0.88) return { type: 'one_state_plus_federal', state: pick(STATE_WEIGHTED) };
    if (r < 0.96) return { type: 'all_states' };
    return { type: 'all_states_and_federal' };
  }
  if (topic.scope === 'federal') {
    if (lm?.kind === 'circuit' && r < 0.45) return { type: 'federal_circuit', circuit: lm.circuit };
    if (r < 0.40) return { type: 'federal_circuit', circuit: pick(CIRCUITS) };
    if (r < 0.58) return { type: 'federal_district', districtState: pick(STATE_WEIGHTED) };
    if (r < 0.72) return { type: 'all_federal' };
    if (r < 0.82 && lm?.kind === 'scotus') return { type: 'us_supreme_court' };
    if (r < 0.95) return { type: 'one_state_plus_federal', state: pick(STATE_WEIGHTED) };
    return { type: 'all_states_and_federal' };
  }
  // both
  if (r < 0.30) return { type: 'one_state', state: pick(STATE_WEIGHTED) };
  if (r < 0.48) return { type: 'one_state_plus_federal', state: pick(STATE_WEIGHTED) };
  if (r < 0.66) return { type: 'federal_circuit', circuit: pick(CIRCUITS) };
  if (r < 0.74) return { type: 'federal_district', districtState: pick(STATE_WEIGHTED) };
  if (r < 0.84) return { type: 'all_federal' };
  if (r < 0.91 && lm?.kind === 'scotus') return { type: 'us_supreme_court' };
  if (r < 0.96) return { type: 'all_states' };
  return { type: 'all_states_and_federal' };
}

/** Can a correctly scoped search return this landmark at all? */
function landmarkGradable(lm, j, filters) {
  if (!lm) return false;
  if (filters?.dateFrom && Number(filters.dateFrom.slice(0, 4)) > lm.year) return false;
  if (filters?.dateTo) return false; // multi-case patterns span years; do not guess
  const t = j.type;
  if (lm.kind === 'scotus') return ['all_federal', 'us_supreme_court', 'federal_circuit', 'one_state_plus_federal', 'all_states_and_federal'].includes(t);
  if (lm.kind === 'circuit') {
    if (t === 'federal_circuit') return j.circuit === lm.circuit;
    if (t === 'one_state_plus_federal') return STATES[j.state].circuit === lm.circuit;
    return t === 'all_federal';
  }
  if (lm.kind === 'state') {
    if (t === 'one_state' || t === 'one_state_plus_federal') return j.state === lm.state;
    return t === 'all_states' || t === 'all_states_and_federal';
  }
  return false;
}

function scopeLabel(j) {
  switch (j.type) {
    case 'one_state': return `${j.state} state courts`;
    case 'one_state_plus_federal': return `${j.state} + federal`;
    case 'federal_circuit': return `${j.circuit === 'dc' ? 'D.C.' : j.circuit === 'federal' ? 'Fed.' : j.circuit} Cir.`;
    case 'federal_district': return `D. ${j.districtState}`;
    default: return j.type;
  }
}

const rows = [];
const key = [];
const seen = new Set();
let guard = 0;
while (rows.length < N && guard++ < N * 20) {
  const topic = TOPICS[Math.floor(rnd() * TOPICS.length)];
  const tpl = TEMPLATES[Math.floor(rnd() * TEMPLATES.length)];
  const jurisdiction = scopeFor(topic);
  const dr = rnd();
  const date = dr < 0.30 ? pick(DATE_WINDOWS) : null;
  const pr = rnd();
  const pub = pr < 0.05 ? { includeUnpublished: true } : pr < 0.10 ? { publishedOnly: true } : null;
  const filters = { ...(date?.filters ?? {}), ...(pub ?? {}) };
  const query = tpl.f(topic);
  const sig = `${query}|${JSON.stringify(jurisdiction)}|${JSON.stringify(filters)}`;
  if (seen.has(sig)) continue;
  seen.add(sig);
  const id = `LF-BS-${String(rows.length + 1).padStart(4, '0')}`;
  const row = {
    id,
    topic: topic.id,
    area: topic.area,
    template: tpl.id,
    syntax: tpl.syntax,
    query,
    searchType: rows.length % 2 === 0 ? 'keyword' : 'auto',
    limit: 10,
    jurisdiction,
    scopeLabel: scopeLabel(jurisdiction),
    ...(Object.keys(filters).length ? { filters } : {}),
    ...(date ? { dateWindow: date.label } : {}),
  };
  rows.push(row);
  const lm = topic.landmark;
  key.push({
    id,
    // every row: all results must sit inside the requested scope and filters
    mustBeInScope: true,
    mustRespectDates: Boolean(date),
    mustBePublished: !pub?.includeUnpublished,
    // boolean: returned opinions must satisfy the query (checked on a sample with full text)
    verifyBooleanText: rows.length % 12 === 0,
    wantCaseName: landmarkGradable(lm, jurisdiction, filters) ? lm.re : null,
    wantFlags: 'i',
    landmarkKind: lm?.kind ?? null,
  });
}

mkdirSync(OUT, { recursive: true });
const meta = {
  suite: 'law-firm/boolean-search-5000',
  builtAt: new Date().toISOString(),
  count: rows.length,
  request: 'POST /api/v1/search { query, searchType, limit, jurisdiction, filters }',
  note: 'Even rows send searchType "keyword" (boolean engine forced); odd rows send "auto" (what a user gets by default). Both must honor the connectors.',
};
writeFileSync(resolve(OUT, 'queries.json'), JSON.stringify({ ...meta, rows }, null, 1) + '\n');
writeFileSync(
  resolve(OUT, 'answer-key.json'),
  JSON.stringify(
    {
      suite: meta.suite,
      count: key.length,
      scoring: {
        inScope: 'Every result court must sit inside jurisdiction (see README for the federal-court rules per scope).',
        dates: 'Every result dateFiled must fall inside filters.dateFrom/dateTo.',
        published: 'Unless includeUnpublished, every result must be published.',
        boolean: 'On verifyBooleanText rows, each of the top 3 opinions (full text) must satisfy the terms-and-connectors query.',
        landmark: 'When wantCaseName is set, a top-10 case name must match it (RegExp, wantFlags).',
      },
      rows: key,
    },
    null,
    1,
  ) + '\n',
);

// ---- stats
const by = (f) => rows.reduce((m, r) => ((m[f(r)] = (m[f(r)] ?? 0) + 1), m), {});
console.log('rows', rows.length);
console.log('scope types', by((r) => r.jurisdiction.type));
console.log('syntax', by((r) => r.syntax));
console.log('templates', by((r) => r.template));
console.log('date windows', by((r) => r.dateWindow ?? 'none'));
console.log('landmark-graded', key.filter((k) => k.wantCaseName).length, 'boolean-verified', key.filter((k) => k.verifyBooleanText).length);

// ---- carried forward: realworld-1000 boolean rows
const rwQ = JSON.parse(readFileSync(resolve(ROOT, 'datasets/search/realworld-1000/queries.json'), 'utf8'));
const rwK = JSON.parse(readFileSync(resolve(ROOT, 'datasets/search/realworld-1000/answer-key.json'), 'utf8')).rows;
const rwBool = rwQ.filter((r) => r.style === 'boolean');
const keyByQuery = new Map(rwK.map((k) => [k.query, k]));
const cfDir = resolve(ROOT, 'datasets/law-firm/carried-forward/realworld-boolean');
mkdirSync(cfDir, { recursive: true });
writeFileSync(resolve(cfDir, 'queries.json'), JSON.stringify({ suite: 'law-firm/carried-forward/realworld-boolean', source: 'datasets/search/realworld-1000 (style=boolean)', count: rwBool.length, rows: rwBool }, null, 1) + '\n');
const cfKey = rwBool.map((r) => {
  const k = keyByQuery.get(r.query);
  const j = r.jurisdiction;
  let want = k?.wantCaseName ?? null;
  if (k && k.federalOnly && (j.type === 'one_state' || j.type === 'all_states')) want = null;
  if (k && k.stateLandmarksOnly && ['all_federal', 'federal_circuit', 'us_supreme_court', 'federal_district'].includes(j.type)) want = null;
  if (k?.homeStates && (j.type === 'one_state' || j.type === 'one_state_plus_federal') && !k.homeStates.includes(j.state)) want = null;
  return { id: r.id, mustBeInScope: true, mustRespectDates: false, mustBePublished: true, verifyBooleanText: false, wantCaseName: want, wantFlags: k?.wantFlags ?? 'i' };
});
writeFileSync(resolve(cfDir, 'answer-key.json'), JSON.stringify({ suite: 'law-firm/carried-forward/realworld-boolean', count: cfKey.length, rows: cfKey }, null, 1) + '\n');
console.log('carried-forward realworld boolean', rwBool.length, 'keyed', cfKey.filter((k) => k.wantCaseName).length);
