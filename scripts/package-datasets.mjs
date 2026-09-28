/**
 * Copy published test banks into this repo and derive
 * case-name / citation retrieval views from the same answer keys.
 *
 * Source of truth remains the casediver repo. Re-run from anywhere:
 *   node scripts/package-datasets.mjs
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const SRC = resolve(ROOT, '../casediver');

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

function copy(fromRel, toRel) {
  const from = resolve(SRC, fromRel);
  const to = resolve(ROOT, toRel);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
}

copy('docs/5000citechecktest.json', 'datasets/citechecker/5300/inputs.json');
copy('docs/5000citechecktest-ANSWER-KEY.json', 'datasets/citechecker/5300/answer-key.json');
copy('docs/5000citechecktest.md', 'datasets/citechecker/5300/inputs.md');
copy('docs/5000citechecktest-ANSWER-KEY.md', 'datasets/citechecker/5300/answer-key.md');
copy('docs/5000citechecktest-CATEGORY-SCOREBOARD.md', 'datasets/citechecker/5300/prior-product-scoreboard.md');
copy('docs/overruled-100-citechecktest.json', 'datasets/citechecker/overruled-100/inputs.json');
copy('docs/overruled-100-citechecktest-ANSWER-KEY.json', 'datasets/citechecker/overruled-100/answer-key.json');
copy('docs/overruled-100-citechecktest.md', 'datasets/citechecker/overruled-100/inputs.md');
copy('docs/overruled-100-citechecktest-ANSWER-KEY.md', 'datasets/citechecker/overruled-100/answer-key.md');
copy('docs/citecheck-test-bank.json', 'datasets/citechecker/state-1006/bank.json');
copy('docs/citecheck-test-bank.md', 'datasets/citechecker/state-1006/bank.md');
copy('docs/search_samples/phrase-1000/queries.json', 'datasets/search/phrase-1000/queries.json');
copy('docs/search_samples/realworld-1000/queries.json', 'datasets/search/realworld-1000/queries.json');
copy('docs/search_samples/everyman-1000/queries.json', 'datasets/search/everyman-1000/queries.json');
copy('packages/server/src/services/caselawSearch/eval/goldenSet.json', 'datasets/search/golden-set/queries.json');
copy('packages/server/src/services/caselawSearch/eval/heldOutRealworld.json', 'datasets/search/held-out-realworld/queries.json');

const landmarkMod = await import(
  pathToFileURL(resolve(SRC, 'packages/server/src/scripts/caselawSearch/phraseEval/landmarkExpectations.ts')).href
);
const realworldMod = await import(
  pathToFileURL(resolve(SRC, 'packages/server/src/scripts/caselawSearch/phraseEval/realWorldExpectations.ts')).href
);

function exportExpectations(list) {
  return list.map((row) => ({
    query: row.query,
    wantCaseName: row.want.source,
    wantFlags: row.want.flags,
    federalOnly: Boolean(row.federalOnly),
    homeStates: row.homeStates ?? null,
    stateLandmarksOnly: Boolean(row.stateLandmarksOnly),
  }));
}

writeJson(
  resolve(ROOT, 'datasets/search/phrase-1000/answer-key.json'),
  {
    suite: 'search-phrase-1000',
    note: 'Only queries with one defensible controlling authority are keyed. Match wantCaseName (regex) against returned case names. Skip federalOnly rows when the request scope is a single state. Skip stateLandmarksOnly rows when the scope is federal-only. Skip homeStates rows when the scope is a different single state.',
    count: landmarkMod.LANDMARK_EXPECTATIONS.length,
    rows: exportExpectations(landmarkMod.LANDMARK_EXPECTATIONS),
  },
);
writeJson(
  resolve(ROOT, 'datasets/search/realworld-1000/answer-key.json'),
  {
    suite: 'search-realworld-1000',
    note: 'Same landmark idea as the phrase bank, keyed to this bank\'s exact query strings. Most lay questions have no single correct case and are absent on purpose.',
    count: realworldMod.REALWORLD_EXPECTATIONS.length,
    rows: exportExpectations(realworldMod.REALWORLD_EXPECTATIONS),
  },
);

const citeKey = readJson(resolve(ROOT, 'datasets/citechecker/5300/answer-key.json'));

/** How a case-retrieval API should treat each cite-check family. */
const RETRIEVAL = {
  perfect: ['exact_citation', 'hit'],
  valid_exact: ['exact_citation', 'hit'],
  bare_reporter: ['exact_citation', 'hit'],
  good_law: ['exact_citation', 'hit'],
  overruled: ['exact_citation', 'hit_and_flag_negative_treatment'],
  bluebook_variant: ['form_variant', 'hit'],
  secondary_form: ['form_variant', 'hit'],
  parallel_cite: ['form_variant', 'hit'],
  parallel_trap: ['form_variant', 'hit'],
  short_form: ['form_variant', 'hit'],
  caption_trap: ['caption_normalization', 'hit_as_written'],
  string_cite: ['string_cite', 'hit_primary_only'],
  compound_history: ['subsequent_history', 'hit_primary_only'],
  mild_mangle: ['hard_mangle', 'do_not_silent_confirm'],
  severe_mangle: ['hard_mangle', 'do_not_silent_confirm'],
  page_mismatch: ['pin_or_page', 'do_not_silent_confirm'],
  transposed_volume: ['hard_mangle', 'do_not_silent_confirm'],
  structural: ['near_miss', 'do_not_silent_confirm'],
  close_hallucination: ['wrong_identity', 'reject_asserted_caption'],
  name_mismatch: ['wrong_identity', 'reject_asserted_caption'],
  real_neighbor_page: ['wrong_identity', 'reject_asserted_caption'],
  year_court_mismatch: ['wrong_identity', 'reject_asserted_caption'],
  wrong_state_regional: ['wrong_identity', 'reject_asserted_caption'],
  bad_law: ['defective_or_treated', 'see_why'],
  outright_hallucination: ['no_such_case', 'no_hit'],
  implausible: ['no_such_case', 'no_hit'],
  fabricated_series: ['no_such_case', 'no_hit'],
  federal_fabrication: ['no_such_case', 'no_hit'],
  vendor_cite: ['vendor_or_fake', 'no_confident_hit'],
  garbage_input: ['not_a_citation', 'no_hit'],
  id_supra: ['needs_antecedent', 'no_hit'],
  statute: ['non_case', 'not_an_opinion'],
  statute_fabricated: ['non_case', 'no_hit'],
  constitution_rule: ['non_case', 'not_an_opinion'],
  tax_authority: ['non_case', 'not_an_opinion'],
  immigration_authority: ['non_case', 'not_an_opinion'],
  ip_authority: ['non_case', 'not_an_opinion'],
};

const NAME_OK = new Set([
  'perfect',
  'valid_exact',
  'good_law',
  'overruled',
  'bluebook_variant',
  'secondary_form',
  'parallel_cite',
  'caption_trap',
]);

function parseCaptionCite(cite) {
  const m = String(cite).match(/^(.*?)\s+(v\.|vs\.|versus)\s+(.+?),\s+(\d+)\s+(.+)$/i);
  if (!m) return null;
  let tail = m[5];
  const paren = tail.indexOf('(');
  let locBody = (paren >= 0 ? tail.slice(0, paren) : tail).trim();
  locBody = locBody.replace(/,\s*\d+\s*$/, '').trim();
  if (!locBody || locBody.length > 80) return null;
  const caption = `${m[1].trim()} ${m[2]} ${m[3].trim()}`.replace(/\s+/g, ' ');
  const locator = `${m[4]} ${locBody}`.replace(/\s+/g, ' ');
  if (caption.length < 5 || caption.length > 240) return null;
  return { caption, locator, connector: m[2].toLowerCase() };
}

const citeRows = [];
const nameCandidates = [];
const familyCounts = {};

for (const row of citeKey.cases) {
  familyCounts[row.family] = (familyCounts[row.family] || 0) + 1;
  const mapped = RETRIEVAL[row.family] ?? ['unclassified', 'see_why'];
  const parsed = parseCaptionCite(row.cite);
  citeRows.push({
    id: row.id,
    query: row.cite,
    family: row.family,
    stance: row.stance,
    retrievalClass: mapped[0],
    outcome: mapped[1],
    locator: parsed?.locator ?? null,
    assertedCaption: parsed?.caption ?? null,
    correctAnswer: row.correctAnswer,
    why: row.why,
    accept: row.accept,
    partial: row.partial,
    reject: row.reject,
  });
  if (parsed && NAME_OK.has(row.family)) {
    nameCandidates.push({
      id: row.id,
      query: parsed.caption,
      connector: parsed.connector,
      family: row.family,
      locator: parsed.locator,
      stance: row.stance,
      why: row.why,
      sourceCite: row.cite,
    });
  }
}

const nameByKey = new Map();
for (const row of nameCandidates) {
  const key = `${row.query.toLowerCase()}|${row.locator.toLowerCase()}`;
  const prev = nameByKey.get(key);
  if (!prev || (prev.family !== 'perfect' && row.family === 'perfect')) nameByKey.set(key, row);
}
const nameRows = [...nameByKey.values()].sort((a, b) => a.id.localeCompare(b.id));

const golden = readJson(resolve(ROOT, 'datasets/search/golden-set/queries.json'));
const goldenNames = golden.queries.filter((q) => q.kind === 'name');
const goldenCites = golden.queries.filter((q) => q.kind === 'citation');

writeJson(resolve(ROOT, 'datasets/citation-retrieval/inputs.json'), {
  suite: 'citation-retrieval',
  source: 'datasets/citechecker/5300/answer-key.json',
  requestShape: { query: '<row.query>' },
  count: citeRows.length,
  rows: citeRows.map((r) => ({ id: r.id, query: r.query })),
});
writeJson(resolve(ROOT, 'datasets/citation-retrieval/answer-key.json'), {
  suite: 'citation-retrieval',
  count: citeRows.length,
  rows: citeRows,
});
writeJson(resolve(ROOT, 'datasets/citation-retrieval/golden-inputs.json'), {
  suite: 'citation-retrieval-golden',
  note: 'Small landmark slice from the search golden set. Grade 3 means the labeled reporter cite must appear on the first page of results, or as the retrieved case.',
  count: goldenCites.length,
  rows: goldenCites.map((q) => ({ id: q.id, query: q.query })),
});
writeJson(resolve(ROOT, 'datasets/citation-retrieval/golden-answer-key.json'), {
  suite: 'citation-retrieval-golden',
  count: goldenCites.length,
  rows: goldenCites,
});

writeJson(resolve(ROOT, 'datasets/case-name-retrieval/inputs.json'), {
  suite: 'case-name-retrieval',
  source: 'Captions parsed from confirmed cites in the 5300 cite-check key. One row per distinct caption + locator.',
  requestShape: { query: '<row.query>' },
  count: nameRows.length,
  rows: nameRows.map((r) => ({ id: r.id, query: r.query })),
});
writeJson(resolve(ROOT, 'datasets/case-name-retrieval/answer-key.json'), {
  suite: 'case-name-retrieval',
  count: nameRows.length,
  rows: nameRows.map((r) => ({
    id: r.id,
    query: r.query,
    outcome: r.family === 'overruled' ? 'hit_and_flag_negative_treatment' : r.family === 'caption_trap' ? 'hit_as_written' : 'hit',
    family: r.family,
    connector: r.connector,
    expectLocator: r.locator,
    why: r.why,
    sourceCite: r.sourceCite,
  })),
});
writeJson(resolve(ROOT, 'datasets/case-name-retrieval/golden-inputs.json'), {
  suite: 'case-name-retrieval-golden',
  note: 'Informal lowercase captions from the search golden set.',
  count: goldenNames.length,
  rows: goldenNames.map((q) => ({ id: q.id, query: q.query })),
});
writeJson(resolve(ROOT, 'datasets/case-name-retrieval/golden-answer-key.json'), {
  suite: 'case-name-retrieval-golden',
  count: goldenNames.length,
  rows: goldenNames,
});

const stateBank = readJson(resolve(ROOT, 'datasets/citechecker/state-1006/bank.json'));
const aspectCounts = {};
const stateInputs = [];
for (const section of stateBank.sections) {
  for (const c of section.cases) {
    aspectCounts[c.aspect] = (aspectCounts[c.aspect] || 0) + 1;
    stateInputs.push({
      id: c.id,
      query: c.input,
      section: section.slug,
      aspect: c.aspect,
      difficulty: c.difficulty,
    });
  }
}
writeJson(resolve(ROOT, 'datasets/citechecker/state-1006/inputs.json'), {
  suite: 'citechecker-state-1006',
  requestShape: { citation: '<row.query>' },
  count: stateInputs.length,
  rows: stateInputs.map((r) => ({ id: r.id, query: r.query })),
});

const classCounts = {};
for (const row of citeRows) classCounts[row.retrievalClass] = (classCounts[row.retrievalClass] || 0) + 1;

const manifest = {
  packagedAt: new Date().toISOString(),
  sourceRepo: 'dumpsticks/casediver',
  citechecker5300: citeKey.count,
  citecheckerFamilies: familyCounts,
  citationRetrievalClasses: classCounts,
  caseNameRetrieval: nameRows.length,
  state1006Aspects: aspectCounts,
  searchExpectations: {
    phrase: landmarkMod.LANDMARK_EXPECTATIONS.length,
    realworld: realworldMod.REALWORLD_EXPECTATIONS.length,
  },
  golden: { citation: goldenCites.length, name: goldenNames.length, total: golden.queries.length },
};
writeJson(resolve(ROOT, 'datasets/manifest.json'), manifest);
console.log(JSON.stringify(manifest, null, 2));
