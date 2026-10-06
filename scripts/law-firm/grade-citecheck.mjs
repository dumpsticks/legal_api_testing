/**
 * Grade every cite-check bank in one run directory against its own answer key.
 *
 *   node scripts/law-firm/grade-citecheck.mjs --run=2026-10-06-cites [--compare=<earlier run>]
 *
 * Banks (raw files written by run-cites.mjs):
 *   cites-5300.jsonl          datasets/citechecker/5300           accept / partial / reject
 *   cites-overruled-100.jsonl datasets/citechecker/overruled-100  accept + GoodLaw must be negative
 *   cites-state-1006.jsonl    datasets/citechecker/state-1006     accept / partial / reject + expected case name / corrected text
 *   cites-anatomy-480.jsonl   casediver scripts/anatomy-caselaw-api  confirm / decline / implausible / negative treatment
 * The law-firm Bluebook and carried-forward cites are graded by grade.mjs.
 *
 * Writes CITECHECK-REPORT.md, problems-citecheck-<bank>.md, graded-citecheck.json
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lintCitation } from './lib/bluebook.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run');
const COMPARE = arg('compare', null);
const DIR = resolve(ROOT, 'runs/law-firm', RUN);
const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));
function raw(run, f) {
  const p = resolve(ROOT, 'runs/law-firm', run, 'raw', f);
  const t = existsSync(p) ? readFileSync(p, 'utf8') : existsSync(`${p}.gz`) ? gunzipSync(readFileSync(`${p}.gz`)).toString() : '';
  const m = new Map();
  for (const l of t.split('\n').filter(Boolean)) {
    const j = JSON.parse(l);
    m.set(j.id, j);
  }
  return m;
}
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const pct = (a, b) => (b ? `${((100 * a) / b).toFixed(1)}%` : 'n/a');
const NEG = new Set(['overruled', 'reversed', 'vacated', 'abrogated', 'superseded', 'questioned', 'negative', 'criticized', 'limited', 'overruled_in_part']);
const negGL = (c) => c?.goodLaw?.negative === true || NEG.has(String(c?.goodLaw?.status ?? '').toLowerCase());
const CONFIRM = new Set(['valid', 'likely_valid']);
const DECLINE = new Set(['name_mismatch', 'page_mismatch', 'implausible', 'not_in_corpus', 'not_covered', 'unverified']);
const FORM_CODES = new Set(['et_al', 'party_role_in_name', 'descriptive_phrase_in_name', 'multiple_parties', 'all_caps_name', 't6_unabbreviated', 't10_unabbreviated', 'and_not_ampersand', 'usa_long_form', 'state_long_form', 'leading_the', 'v_form', 'reporter_spacing', 'full_date_on_reported_case', 'redundant_business_designation']);

function verdictGrade(r, accept, partial, reject) {
  if (!r) return 'not_run';
  if (r.verdict === 'error' || r.verdict === 'missing') return 'timeout';
  if (accept.includes(r.verdict)) return 'pass';
  if ((partial ?? []).includes(r.verdict)) return 'partial';
  return 'fail';
}

const banks = [];

// ---- 5300
{
  const key = load('datasets/citechecker/5300/answer-key.json').cases;
  const R = raw(RUN, 'cites-5300.jsonl');
  const rows = key.map((k) => {
    const r = R.get(k.id);
    const g = { id: k.id, family: k.family, input: k.cite, verdict: r?.verdict, output: r?.correctedCitation ?? null, expect: k.correctAnswer, status: verdictGrade(r, k.accept, k.partial, k.reject), problems: [] };
    if (g.status === 'timeout') g.problems.push(`timed out (${r?.lookupStatus ?? 'error'})`);
    if (g.status === 'fail') g.problems.push(`verdict ${r?.verdict}; key: ${k.correctAnswer}`);
    if (g.status === 'partial') g.problems.push(`partial: ${r?.verdict}; key: ${k.correctAnswer}`);
    if (r && ['overruled', 'bad_law'].includes(k.family) && CONFIRM.has(r.verdict) && !negGL(r.candidates?.[0])) {
      g.problems.push(`overruled authority confirmed with good-law ${r.candidates?.[0]?.goodLaw?.status ?? 'none'}`);
      if (g.status === 'pass') g.status = 'partial';
    }
    return g;
  });
  banks.push({ name: '5300', title: 'Cite-check bank (5,300)', rows, groupBy: 'family' });
}

// ---- overruled-100
{
  const key = load('datasets/citechecker/overruled-100/answer-key.json').cases;
  const R = raw(RUN, 'cites-overruled-100.jsonl');
  const rows = key.map((k) => {
    const r = R.get(k.id);
    const c = r?.candidates?.[0];
    const g = { id: k.id, family: k.tier ?? 'state', input: k.cite, verdict: r?.verdict, output: r?.correctedCitation ?? null, goodLaw: c?.goodLaw?.status ?? null, status: verdictGrade(r, k.accept, k.partial, k.reject), problems: [] };
    if (g.status === 'fail') g.problems.push(`verdict ${r?.verdict}; key: ${k.correctAnswer}`);
    if (g.status === 'timeout') return g;
    if (r && k.requireGoodLawNegative && !negGL(c)) {
      g.problems.push(`GoodLaw ${c?.goodLaw?.status ?? 'none'} — must flag ${k.expectedGoodLawStatus ?? 'negative'}`);
      g.status = g.status === 'fail' ? 'fail' : 'fail';
    }
    return g;
  });
  banks.push({ name: 'overruled-100', title: 'Overruled authorities (100)', rows, groupBy: 'family' });
}

// ---- state-1006
{
  const key = load('datasets/citechecker/state-1006/bank.json').sections.flatMap((s) => s.cases);
  const R = raw(RUN, 'cites-state-1006.jsonl');
  const rows = key.map((k) => {
    const r = R.get(k.id);
    const c = r?.candidates?.[0];
    const g = { id: k.id, family: k.aspect, input: k.input, verdict: r?.verdict, output: r?.correctedCitation ?? null, expect: k.groundTruth, status: verdictGrade(r, k.accept, k.partial, k.reject), problems: [] };
    if (g.status === 'timeout') { g.problems.push(`timed out (${r?.lookupStatus ?? 'error'})`); return g; }
    if (g.status === 'fail') g.problems.push(`verdict ${r?.verdict}; truth: ${k.groundTruth}`);
    if (g.status === 'partial') g.problems.push(`partial: ${r?.verdict}`);
    if (r && k.expectCandidateName && CONFIRM.has(r.verdict) && !String(c?.caseName ?? '').toLowerCase().includes(k.expectCandidateName.toLowerCase().split(' v. ')[0])) {
      g.problems.push(`confirmed a different case: ${c?.caseName ?? '(none)'} — want ${k.expectCandidateName}`);
      g.status = 'fail';
    }
    if (r && k.expectCorrectedContains && r.correctedCitation && !r.correctedCitation.includes(k.expectCorrectedContains)) {
      g.problems.push(`corrected cite lacks "${k.expectCorrectedContains}": ${r.correctedCitation}`);
      if (g.status === 'pass') g.status = 'partial';
    }
    return g;
  });
  banks.push({ name: 'state-1006', title: 'State bank (1,006)', rows, groupBy: 'family' });
}

// ---- anatomy-480
{
  const p = resolve(ROOT, '../casediver/scripts/anatomy-caselaw-api/data/anatomy-caselaw-api.json');
  if (existsSync(p)) {
    const key = JSON.parse(readFileSync(p, 'utf8')).cases;
    const R = raw(RUN, 'cites-anatomy-480.jsonl');
    const rows = key
      .filter((k) => !k.excluded)
      .map((k) => {
        const r = R.get(k.id);
        const c = r?.candidates?.[0];
        const g = { id: k.id, family: k.blockName, input: k.input, verdict: r?.verdict, output: r?.correctedCitation ?? null, expect: `baseline ${k.baselineVerdict}`, status: r ? 'pass' : 'not_run', problems: [] };
        if (!r) return g;
        if (r.verdict === 'error' || r.verdict === 'missing') {
          g.status = 'timeout';
          g.problems.push(`timed out (${r.lookupStatus ?? 'error'})`);
          return g;
        }
        if (k.expectConfirm === true && !CONFIRM.has(r.verdict)) g.problems.push(`should confirm; got ${r.verdict}`);
        if (k.expectDecline === true && CONFIRM.has(r.verdict)) g.problems.push(`should decline; got ${r.verdict}`);
        if (k.expectImplausible === true && r.verdict !== 'implausible' && CONFIRM.has(r.verdict)) g.problems.push(`fabrication confirmed: ${r.verdict}`);
        if (k.expectNegativeTreatment === true && !negGL(c)) g.problems.push(`negative treatment missing (good-law ${c?.goodLaw?.status ?? 'none'})`);
        if (g.problems.length) g.status = 'fail';
        else if (k.baselineVerdict && r.verdict !== String(k.baselineVerdict).toLowerCase().replace(/\s+/g, '_')) g.verdictDrift = `${k.baselineVerdict} → ${r.verdict}`;
        return g;
      });
    banks.push({ name: 'anatomy-480', title: 'Anatomy of a Caselaw API (473 scored)', rows, groupBy: 'family' });
  }
}

// ---- Bluebook lint on every confirmed corrected citation across banks
const lint = new Map();
let linted = 0;
for (const b of banks) {
  for (const g of b.rows) {
    if (!g.output || !CONFIRM.has(g.verdict)) continue;
    linted++;
    const issues = lintCitation(g.output).filter((i) => FORM_CODES.has(i.code));
    for (const i of issues) lint.set(i.code, (lint.get(i.code) ?? 0) + 1);
    if (issues.length) g.formIssues = issues.map((i) => i.code);
  }
}

// ---- comparison
let prev = null;
if (COMPARE && existsSync(resolve(ROOT, 'runs/law-firm', COMPARE, 'graded-citecheck.json'))) {
  prev = JSON.parse(readFileSync(resolve(ROOT, 'runs/law-firm', COMPARE, 'graded-citecheck.json'), 'utf8'));
}

let md = `# Cite check — all banks, run ${RUN}\n\nEvery cite-check bank sent to \`POST /api/v1/citecheck/cite\` (batches of 10) and scored against its own answer key. **Pass** = verdict in the key's accept list (and, where the key demands it, the right case and a negative good-law flag). **Partial** = verdict in the key's partial list. The law-firm Bluebook off-cite and carried-forward suites are scored in \`REPORT.md\`.\n\n`;
md += `## Headline\n\nTimeouts (LawDiver returned \`error\` / \`deadline_exceeded\` even when the cite was re-sent alone) are counted separately and left out of Scored.\n\n| Bank | Scored | Pass | Partial | Fail | Timeout |${prev ? ' Pass (previous) |' : ''}\n|---|---:|---:|---:|---:|---:|${prev ? '---:|' : ''}\n`;
for (const b of banks) {
  const to = b.rows.filter((r) => r.status === 'timeout').length;
  const rs = b.rows.filter((r) => r.status !== 'not_run' && r.status !== 'timeout');
  const pass = rs.filter((r) => r.status === 'pass').length;
  const p0 = prev?.[b.name]?.filter((r) => r.status !== 'not_run');
  md += `| ${b.title} | ${rs.length} | ${pass} (${pct(pass, rs.length)}) | ${rs.filter((r) => r.status === 'partial').length} | ${rs.filter((r) => r.status === 'fail').length} | ${to} |${prev ? ` ${p0 ? pct(p0.filter((r) => r.status === 'pass').length, p0.length) : 'n/a'} |` : ''}\n`;
}
md += `\nBluebook form of confirmed corrected citations (${linted} checked): ${[...lint.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(', ') || 'no issues'}.\n`;

for (const b of banks) {
  const rs = b.rows.filter((r) => r.status !== 'not_run' && r.status !== 'timeout');
  const groups = [...new Set(rs.map((r) => r[b.groupBy]))];
  md += `\n## ${b.title} — by ${b.groupBy}\n\n| ${b.groupBy} | Rows | Pass | Partial | Fail |\n|---|---:|---:|---:|---:|\n`;
  for (const gname of groups.sort((x, y) => rs.filter((r) => r[b.groupBy] === y && r.status !== 'pass').length - rs.filter((r) => r[b.groupBy] === x && r.status !== 'pass').length)) {
    const gr = rs.filter((r) => r[b.groupBy] === gname);
    md += `| ${gname} | ${gr.length} | ${gr.filter((r) => r.status === 'pass').length} | ${gr.filter((r) => r.status === 'partial').length} | ${gr.filter((r) => r.status === 'fail').length} |\n`;
  }
  const bad = b.rows.filter((r) => r.status !== 'pass' && r.status !== 'not_run');
  let pm = `# ${b.title} — rows that did not pass (run ${RUN})\n\n| Id | ${b.groupBy} | Input | Verdict | Corrected | Problem |\n|---|---|---|---|---|---|\n`;
  for (const r of bad) pm += `| ${r.id} | ${esc(r[b.groupBy])} | ${esc(r.input)} | ${r.verdict ?? ''} | ${esc(r.output ?? '')} | ${esc(r.problems.join('; '))} |\n`;
  writeFileSync(resolve(DIR, `problems-citecheck-${b.name}.md`), pm);
}
writeFileSync(resolve(DIR, 'CITECHECK-REPORT.md'), md);
writeFileSync(resolve(DIR, 'graded-citecheck.json'), JSON.stringify(Object.fromEntries(banks.map((b) => [b.name, b.rows])), null, 1) + '\n');
console.log(md.split('\n## ')[0]);
