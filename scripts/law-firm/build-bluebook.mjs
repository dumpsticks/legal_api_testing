/**
 * Step 3 of the Bluebook off-cite suite: knock each source slightly off in one
 * of 20 ways and record the Bluebook form a cite-checker should hand back.
 *
 *   node scripts/law-firm/build-bluebook.mjs [--run=2026-10-05]
 *
 * Needs runs/law-firm/<run>/raw/cites-bluebook-control.jsonl (the clean
 * lookup of each source, used only for court and year).
 *
 * Writes datasets/law-firm/bluebook-offcite-1000/{inputs,answer-key}.json
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { assemble, bluebookCaseName, expectedCourtParen, parseCite, reporterInfo, T6 } from './lib/bluebook.mjs';
import { classifyCourt, STATES } from './lib/courts.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
function readControl() {
  const p = resolve(HERE, '../..', 'runs/law-firm', RUN, 'raw/cites-bluebook-control.jsonl');
  return existsSync(p) ? readFileSync(p, 'utf8') : gunzipSync(readFileSync(`${p}.gz`)).toString('utf8');
}
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', '2026-10-05');
const DIR = resolve(ROOT, 'datasets/law-firm/bluebook-offcite-1000');
const PER_TYPE = 50;

let seed = 1234;
const rnd = () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const pick = (a) => a[Math.floor(rnd() * a.length)];
const shuffle = (a) => a.map((x) => [rnd(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

const sources = JSON.parse(readFileSync(resolve(DIR, 'sources.json'), 'utf8')).rows;
const control = new Map(
  readControl()
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l))
    .map((r) => [r.id, r]),
);

// ------------------------------------------------- expected Bluebook form
const usable = [];
const excluded = [];
for (const s of sources) {
  const c = control.get(s.id);
  const src = parseCite(s.cite);
  const cand = c?.candidates?.[0];
  if (!c || !cand) {
    excluded.push({ id: s.id, cite: s.cite, why: `control lookup returned no candidate (verdict ${c?.verdict ?? 'none'})` });
    continue;
  }
  const cp = parseCite(`X, ${cand.citation} (${cand.year})`);
  const squash = (x) => String(x).replace(/\s+/g, '');
  const parallels = [...(cand.parallelCitations ?? []), ...(cand.knownCitations ?? []).map((x) => x.cite)];
  let alt = null;
  if (!cp || `${cp.vol} ${cp.reporter} ${cp.page}` !== s.locator) {
    // official-reporter source whose case the corpus files under the regional
    // reporter: both are correct locators; T1 prefers the regional one.
    if (cp?.reporter && parallels.some((x) => squash(x) === squash(s.locator))) alt = cp;
    else {
      excluded.push({ id: s.id, cite: s.cite, why: `control candidate locator ${cand.citation} differs from source ${s.locator}` });
      continue;
    }
  }
  const cls = classifyCourt(cand.court, cand.jurisdiction, cand.courtAbbreviation);
  const courtParen = expectedCourtParen(src.reporter, cls.bb, cls.level);
  if (courtParen === null || courtParen === undefined) {
    excluded.push({ id: s.id, cite: s.cite, why: `court not mapped to a Bluebook abbreviation: ${cand.court}` });
    continue;
  }
  const year = String(cand.year ?? cand.dateFiled?.slice(0, 4) ?? '');
  // dual-reporter dates are scrape dates, not decision years: trust the corpus year there
  if (s.origin !== 'dual-reporter' && src.year && year && src.year !== year) {
    excluded.push({ id: s.id, cite: s.cite, why: `source year ${src.year} vs corpus year ${year}`, dataConflict: true, caseId: cand.caseId });
    continue;
  }
  const name = s.nameIsBluebook ? src.name : bluebookCaseName(cand.caseName, cls.state);
  const E = { name, vol: src.vol, reporter: src.reporter, page: src.page, court: courtParen, year };
  const E2 = alt ? { name, vol: alt.vol, reporter: alt.reporter, page: alt.page, court: expectedCourtParen(alt.reporter, cls.bb, cls.level), year } : null;
  usable.push({
    s,
    cand,
    cls,
    E,
    E2,
    expected: assemble(E),
    expectedAlt: E2 ? assemble(E2) : null,
    fullCaption: cand.caseName,
  });
}

// --------------------------------------------------------------- mangles
const REV_T6 = Object.fromEntries(Object.entries(T6).map(([full, ab]) => [ab, full]));
const spacedReporter = (r) => r.replace(/\s+/g, '');
const addSpaces = (r) => r.replace(/\.(?=[A-Z0-9])/g, '. ');
const isGov = (n) => /^(State|United States|People|Commonwealth)\b/.test(n) || / v\. (State|United States|People|Commonwealth)$/.test(n);

const TYPES = [
  {
    id: 'reporter_spacing',
    what: 'Reporter abbreviation spaced wrong (T1 / Rule 6.1(a)).',
    ok: (u) => spacedReporter(u.E.reporter) !== u.E.reporter || addSpaces(u.E.reporter) !== u.E.reporter,
    make: (u) => {
      const r = u.E.reporter;
      const bad = /\s/.test(r) ? spacedReporter(r) : addSpaces(r);
      return assemble({ ...u.E, reporter: bad });
    },
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'ordinal_form',
    what: 'Series written "2nd"/"3rd" instead of "2d"/"3d".',
    ok: (u) => /\b(2d|3d)\b|\d(2d|3d)$/.test(u.E.reporter),
    make: (u) => assemble({ ...u.E, reporter: u.E.reporter.replace(/2d\b/, '2nd').replace(/3d\b/, '3rd') }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'reporter_no_periods',
    what: 'Reporter typed without periods.',
    ok: (u) => /\./.test(u.E.reporter),
    make: (u) => assemble({ ...u.E, reporter: u.E.reporter.replace(/\./g, '') }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'reporter_lowercase',
    what: 'Reporter typed in lower case.',
    ok: (u) => /[A-Z]/.test(u.E.reporter),
    make: (u) => assemble({ ...u.E, reporter: u.E.reporter.toLowerCase() }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'v_form',
    what: '"vs." / "v" / "versus" instead of "v."',
    ok: (u) => / v\. /.test(u.E.name),
    make: (u) => assemble({ ...u.E, name: u.E.name.replace(' v. ', pick([' vs. ', ' v ', ' versus ', ' VS '])) }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'no_parenthetical',
    what: 'Court-and-year parenthetical left off.',
    ok: () => true,
    make: (u) => `${u.E.name}, ${u.E.vol} ${u.E.reporter} ${u.E.page}`,
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'year_off_by_one',
    what: 'Decision year off by one.',
    ok: () => true,
    make: (u) => assemble({ ...u.E, year: String(Number(u.E.year) + (rnd() < 0.5 ? -1 : 1)) }),
    accept: ['valid', 'name_mismatch'], partial: ['likely_valid', 'page_mismatch'],
  },
  {
    id: 'court_missing',
    what: 'Year only; the court the reporter does not identify is missing.',
    ok: (u) => u.E.court !== '',
    make: (u) => assemble({ ...u.E, court: '' }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'court_nonbluebook',
    what: 'Court abbreviated the way practitioners type it, not the T1/T7 form.',
    ok: (u) => u.E.court !== '' && nonBluebookCourt(u) !== null,
    make: (u) => assemble({ ...u.E, court: nonBluebookCourt(u) }),
    accept: ['valid'], partial: ['likely_valid', 'name_mismatch'],
  },
  {
    id: 'full_date',
    what: 'Exact decision date in the parenthetical of a reported case (Rule 10.5 wants the year).',
    ok: (u) => /^\d{4}-\d{2}-\d{2}$/.test(u.cand.dateFiled ?? ''),
    make: (u) => {
      const [y, m, d] = u.cand.dateFiled.split('-');
      const mon = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'][Number(m) - 1];
      return `${u.E.name}, ${u.E.vol} ${u.E.reporter} ${u.E.page} (${u.E.court ? `${u.E.court} ` : ''}${mon} ${Number(d)}, ${y})`;
    },
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 't6_spelled_out',
    what: 'Case-name words that T6 abbreviates are spelled out.',
    ok: (u) => Object.keys(REV_T6).some((ab) => u.E.name.includes(ab)),
    make: (u) => {
      let n = u.E.name;
      for (const [ab, full] of Object.entries(REV_T6)) n = n.split(ab).join(full);
      return assemble({ ...u.E, name: n });
    },
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'full_caption',
    what: 'Full caption (all parties, roles, given names) instead of the Rule 10.2.1 short name.',
    ok: (u) => u.fullCaption && u.fullCaption.length > u.E.name.length + 6,
    make: (u) => assemble({ ...u.E, name: u.fullCaption }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'all_caps_name',
    what: 'Case name typed in capitals.',
    ok: (u) => /[a-z]/.test(u.E.name),
    make: (u) => assemble({ ...u.E, name: u.E.name.toUpperCase().replace(' V. ', ' v. ') }),
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'pin_as_first_page',
    what: 'A pin page given as if it were the first page.',
    ok: () => true,
    make: (u) => assemble({ ...u.E, page: String(Number(u.E.page) + 2 + Math.floor(rnd() * 5)) }),
    accept: ['page_mismatch', 'valid'], partial: ['likely_valid'],
  },
  {
    id: 'punctuation',
    what: 'Missing comma before the volume, or a stray period/space.',
    ok: () => true,
    make: (u) => {
      const f = pick([
        () => `${u.E.name} ${u.E.vol} ${u.E.reporter} ${u.E.page} (${[u.E.court, u.E.year].filter(Boolean).join(' ')})`,
        () => `${u.E.name},${u.E.vol} ${u.E.reporter} ${u.E.page} (${[u.E.court, u.E.year].filter(Boolean).join(' ')})`,
        () => `${u.E.name}, ${u.E.vol} ${u.E.reporter} ${u.E.page}, (${[u.E.court, u.E.year].filter(Boolean).join(' ')}).`,
        () => `${u.E.name},  ${u.E.vol}  ${u.E.reporter}  ${u.E.page} ( ${[u.E.court, u.E.year].filter(Boolean).join(' ')} )`,
      ]);
      return f();
    },
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'vendor_cite',
    what: 'Westlaw number cited although the case is in a print reporter (Rule 10.3.1).',
    ok: (u) => Boolean(u.s.wlCite),
    make: (u) => `${u.E.name}, ${u.s.wlCite} (${[u.E.court, u.E.year].filter(Boolean).join(' ')})`,
    accept: ['valid', 'page_mismatch'], partial: ['likely_valid'],
  },
  {
    id: 'parallel_only',
    what: 'Supreme Court case cited only to S. Ct. or L. Ed. (T1 prefers U.S.).',
    ok: (u) => u.E.reporter === 'U.S.' && (u.cand.parallelCitations ?? []).some((p) => /S\. Ct\.|L\. Ed\./.test(p)),
    make: (u) => {
      const par = (u.cand.parallelCitations ?? []).find((p) => /S\. Ct\./.test(p)) ?? u.cand.parallelCitations.find((p) => /L\. Ed\./.test(p));
      return `${u.E.name}, ${par} (${u.E.year})`;
    },
    accept: ['valid'], partial: ['likely_valid', 'page_mismatch'],
  },
  {
    id: 'government_long_form',
    what: '"State of X" / "United States of America" / "People of the State of" in the case name (Rule 10.2.1(f)).',
    ok: (u) => isGov(u.E.name),
    make: (u) => {
      const st = u.cls.state ? STATES[u.cls.state].name : 'California';
      const n = u.E.name
        .replace(/\bUnited States\b/, 'United States of America')
        .replace(/(^|v\. )State\b/, `$1State of ${st}`)
        .replace(/(^|v\. )People\b/, `$1People of the State of ${st}`)
        .replace(/(^|v\. )Commonwealth\b/, `$1Commonwealth of ${st}`);
      return assemble({ ...u.E, name: n });
    },
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'redundant_court',
    what: 'Court named although the reporter already identifies it (Rule 10.4(b)).',
    ok: (u) => u.E.court === '' && Boolean(reporterInfo(u.E.reporter)?.implies),
    make: (u) => {
      const imp = reporterInfo(u.E.reporter).implies;
      return assemble({ ...u.E, court: imp === 'SCOTUS' ? 'U.S.' : imp });
    },
    accept: ['valid'], partial: ['likely_valid'],
  },
  {
    id: 'page_typo',
    what: 'One-digit typo in the first page (adjacent digits transposed).',
    ok: (u) => u.E.page.length >= 3 && u.E.page.at(-1) !== u.E.page.at(-2),
    make: (u) => {
      const p = u.E.page;
      return assemble({ ...u.E, page: p.slice(0, -2) + p.at(-1) + p.at(-2) });
    },
    accept: ['name_mismatch', 'page_mismatch', 'valid'], partial: ['likely_valid'],
  },
];

function nonBluebookCourt(u) {
  const c = u.E.court;
  const lvl = u.cls.level;
  if (lvl === 'circuit') {
    if (c === 'D.C. Cir.') return 'DC Circuit';
    if (c === 'Fed. Cir.') return 'Federal Circuit';
    return c.replace('Cir.', 'Circuit').replace('2d', '2nd').replace('3d', '3rd');
  }
  if (lvl === 'district') return c.replace(/\./g, '').replace(/\s+/g, '');
  if (lvl === 'bankruptcy') return c.replace('Bankr. ', 'Bankr.Ct. ');
  if (c === 'Fla. Dist. Ct. App.') return 'Fla. App.';
  if (c === 'Cal. Ct. App.') return 'Cal. App.';
  if (c === 'Tex. App.') return 'Tex. Ct. App.';
  if (c === 'Pa. Super. Ct.') return 'Pa. Super.';
  if (c === 'N.Y. App. Div.') return 'App. Div.';
  if (/Ct\. App\.$/.test(c)) return c.replace(' Ct. App.', ' App.');
  if (lvl === 'supreme' && u.cls.state) return `${STATES[u.cls.state].bb} Sup. Ct.`;
  return null;
}

const rows = [];
const key = [];
const usage = new Map();
for (const T of TYPES) {
  const elig = shuffle(usable.filter((u) => {
    try {
      return T.ok(u);
    } catch {
      return false;
    }
  }));
  // prefer sources not yet used, then reuse
  elig.sort((a, b) => (usage.get(a.s.id) ?? 0) - (usage.get(b.s.id) ?? 0));
  let k = 0;
  for (const u of elig) {
    if (k >= PER_TYPE) break;
    const input = T.make(u);
    if (!input || input === u.expected) continue;
    usage.set(u.s.id, (usage.get(u.s.id) ?? 0) + 1);
    const id = `LF-BB-${String(rows.length + 1).padStart(4, '0')}`;
    rows.push({ id, citation: input, defect: T.id });
    key.push({
      id,
      defect: T.id,
      what: T.what,
      input,
      sourceId: u.s.id,
      sourceOrigin: u.s.origin,
      expected: u.expected,
      expectedParts: u.E,
      ...(u.E2 ? { expectedAlt: u.expectedAlt, expectedAltParts: u.E2, altNote: 'T1 prefers the regional reporter; either locator is accepted.' } : {}),
      expectedCaseId: u.cand.caseId,
      courtLevel: u.cls.level,
      accept: T.accept,
      partial: T.partial,
    });
    k++;
  }
  if (k < PER_TYPE) console.warn(`type ${T.id}: only ${k} eligible`);
}

mkdirSync(DIR, { recursive: true });
writeFileSync(resolve(DIR, 'inputs.json'), JSON.stringify({ suite: 'law-firm/bluebook-offcite-1000', builtAt: new Date().toISOString(), count: rows.length, rows }, null, 1) + '\n');
writeFileSync(
  resolve(DIR, 'answer-key.json'),
  JSON.stringify(
    {
      suite: 'law-firm/bluebook-offcite-1000',
      count: key.length,
      request: 'POST /api/v1/citecheck/cite { citations: [...] } — grade correctedCitation',
      perfect:
        'correctedCitation present AND same volume, T1 reporter (exact spacing), first page AND same year AND equivalent court parenthetical AND a case name with no Bluebook lint issue (Rule 10.2.1 / T6 / T10) whose first party on each side matches.',
      expectedNote: 'expected is built independently (lib/bluebook.mjs) from the case caption, court and year. The case caption, court and year come from the clean control lookup; the form rules do not.',
      excludedSources: excluded,
      rows: key,
    },
    null,
    1,
  ) + '\n',
);
const by = key.reduce((m, r) => ((m[r.defect] = (m[r.defect] ?? 0) + 1), m), {});
console.log('usable sources', usable.length, 'excluded', excluded.length, 'rows', rows.length, by);
console.log('excluded reasons', excluded.reduce((m, e) => ((m[e.why.split(':')[0].split(' ').slice(0, 4).join(' ')] = (m[e.why.split(':')[0].split(' ').slice(0, 4).join(' ')] ?? 0) + 1), m), {}));
