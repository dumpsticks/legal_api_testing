/**
 * Grade a law-firm run and write the report.
 *
 *   node scripts/law-firm/grade.mjs [--run=2026-10-05]
 *
 * Reads runs/law-firm/<run>/raw/*.jsonl and the datasets; writes
 *   runs/law-firm/<run>/REPORT.md               headline, general fixes, per-suite summaries
 *   runs/law-firm/<run>/problems-<suite>.md      every imperfect row, with what is wrong
 *   runs/law-firm/<run>/graded-<suite>.json      machine-readable per-row grades
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bluebookCaseName, courtEquivalent, lintCitation, normCite, parseCite } from './lib/bluebook.mjs';
import { classifyCourt, inScope } from './lib/courts.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', '2026-10-05');
const RUN_DIR = resolve(ROOT, 'runs/law-firm', RUN);
const RAW = resolve(RUN_DIR, 'raw');
const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));
const jsonl = (f) => {
  const p = resolve(RAW, f);
  const text = existsSync(p) ? readFileSync(p, 'utf8') : existsSync(`${p}.gz`) ? gunzipSync(readFileSync(`${p}.gz`)).toString('utf8') : '';
  return text.split('\n').filter(Boolean).map((l) => JSON.parse(l));
};
const lastById = (arr) => {
  const m = new Map();
  for (const r of arr) m.set(r.id, r);
  return m;
};
const pct = (a, b) => (b ? `${((100 * a) / b).toFixed(1)}%` : 'n/a');
const inc = (m, k, by = 1) => m.set(k, (m.get(k) ?? 0) + by);
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

// General-fix ledger: code -> { title, count, examples[] }
const FIXES = new Map();
function fix(code, title, example, area) {
  const f = FIXES.get(code) ?? { code, title, area, count: 0, examples: [] };
  f.count++;
  if (f.examples.length < 8 && example) f.examples.push(example);
  FIXES.set(code, f);
}

// ======================================================================
// 1. SEARCH
// ======================================================================
function gradeSearch() {
  const bankQ = load('datasets/law-firm/boolean-search-5000/queries.json').rows;
  const bankK = new Map(load('datasets/law-firm/boolean-search-5000/answer-key.json').rows.map((r) => [r.id, r]));
  const cfQ = load('datasets/law-firm/carried-forward/realworld-boolean/queries.json').rows.map((r) => ({ ...r, searchType: 'auto' }));
  const cfK = new Map(load('datasets/law-firm/carried-forward/realworld-boolean/answer-key.json').rows.map((r) => [r.id, r]));
  const raw = lastById(jsonl('search.jsonl'));
  for (const v of jsonl('boolean-verify.jsonl')) {
    const r = raw.get(v.id);
    if (r && !r.booleanCheck) r.booleanCheck = v.booleanCheck;
  }
  // re-evaluations (e.g. after stripping star-page markers) override earlier verdicts
  for (const v of jsonl('boolean-recheck.jsonl')) {
    const b = raw.get(v.id)?.booleanCheck?.find((x) => x.caseId === v.caseId);
    if (b) Object.assign(b, { hit: v.hit, negPresent: v.negPresent, words: v.words, rechecked: true });
  }
  const graded = [];
  const unclassified = new Map();
  const lint = new Map();
  for (const [suite, Q, K] of [['bank', bankQ, bankK], ['carried', cfQ, cfK]]) {
    for (const q of Q) {
      const k = K.get(q.id);
      const r = raw.get(q.id);
      const g = { id: q.id, suite, query: q.query, scope: q.jurisdiction, searchType: raw.get(q.id)?.searchType ?? q.searchType, template: q.template ?? q.style, topic: q.topic ?? q.category, filters: q.filters ?? null, problems: [] };
      graded.push(g);
      if (!r) {
        g.status = 'not_run';
        continue;
      }
      g.requestId = r.requestId;
      g.ms = r.ms;
      if (r.httpStatus !== 200) {
        g.problems.push({ code: 'http_error', detail: `${r.httpStatus} ${JSON.stringify(r.error ?? '').slice(0, 160)}` });
        fix('search_http_error', 'Search request failed (non-200).', `${q.id} ${r.httpStatus}`, 'search');
        g.status = 'fail';
        continue;
      }
      const res = r.results ?? [];
      g.count = res.length;
      g.engines = r.searchInfo?.enginesUsed ?? null;
      if (r.degraded) {
        g.problems.push({ code: 'degraded', detail: JSON.stringify(r.searchInfo?.engineErrors ?? r.warning ?? '').slice(0, 160) });
        fix('search_degraded', 'Search came back degraded (an engine failed or timed out).', `${q.id}`, 'search');
      }
      if (g.searchType === 'keyword' && (g.engines ?? []).some((e) => e !== 'keyword')) {
        g.problems.push({ code: 'keyword_mode_ran_other_engines', detail: g.engines.join(',') });
        fix('search_keyword_mode_mixed', 'searchType "keyword" still blended semantic/topic engines into a terms-and-connectors query.', `${q.id} engines=${g.engines.join('+')}`, 'search');
      }
      if (!res.length) {
        g.problems.push({ code: 'empty', detail: 'no results' });
        const broad = ['all_federal', 'all_states', 'all_states_and_federal'].includes(q.jurisdiction.type);
        if (broad && !q.filters?.dateFrom && !q.filters?.dateTo && suite === 'bank') {
          g.problems.push({ code: 'empty_broad_scope', detail: `nothing in ${q.jurisdiction.type} for a mainstream doctrine query` });
          fix(q.template === 'wl-but-not' ? 'search_empty_but_not' : 'search_empty_broad', q.template === 'wl-but-not' ? 'Westlaw "%" (BUT NOT) query returns nothing in a nationwide scope — the % operator is not parsed (the same exclusion written "AND NOT" returns results).' : 'Nationwide-scope boolean query on a mainstream doctrine returns an empty page.', `${q.id} [${g.searchType}] ${q.query.slice(0, 80)}`, 'search');
        }
      }
      // scope / dates / published / duplicates / lint
      const ids = new Set();
      const cites = new Set();
      res.forEach((h, i) => {
        const cls = classifyCourt(h.court, h.jurisdiction, h.courtAbbreviation);
        const sc = inScope(cls, q.jurisdiction);
        if (sc.ok === false) {
          g.problems.push({ code: 'out_of_scope', detail: `#${i + 1} ${h.caseName?.slice(0, 60)} — ${h.court ?? 'null court'} (${sc.why})` });
          fix(`scope_${q.jurisdiction.type}_${sc.why.replace(/_[A-Z]{2}$|_\d+$|_dc$|_federal$/, '')}`, `Scope "${q.jurisdiction.type}" returned ${sc.why.replace(/_[A-Z]{2}$|_\d+$|_dc$|_federal$/, '').replace(/_/g, ' ')}.`, `${q.id}: ${h.court} — ${h.caseName?.slice(0, 50)}`, 'search');
        } else if (sc.ok === null) {
          inc(unclassified, `${h.court} | ${h.jurisdiction}`);
          if (!h.court) {
            g.problems.push({ code: 'result_missing_court', detail: `#${i + 1} ${h.caseName?.slice(0, 60)} (${h.citation ?? 'no cite'})` });
            fix('result_missing_court', 'Search hit has no court (court field null), so a firm cannot tell where it was decided and scope cannot be enforced.', `${q.id}: ${h.caseName?.slice(0, 60)} ${h.caseId}`, 'data');
          }
        }
        const f = q.filters ?? {};
        if (f.dateFrom && h.dateFiled && h.dateFiled < f.dateFrom) {
          g.problems.push({ code: 'before_dateFrom', detail: `#${i + 1} ${h.dateFiled} < ${f.dateFrom}` });
          fix('search_date_filter', 'Result outside the requested date window.', `${q.id}: ${h.dateFiled} vs ${f.dateFrom}–${f.dateTo ?? ''}`, 'search');
        }
        if (f.dateTo && h.dateFiled && h.dateFiled > f.dateTo) {
          g.problems.push({ code: 'after_dateTo', detail: `#${i + 1} ${h.dateFiled} > ${f.dateTo}` });
          fix('search_date_filter', 'Result outside the requested date window.', `${q.id}: ${h.dateFiled} vs ${f.dateFrom ?? ''}–${f.dateTo}`, 'search');
        }
        if (!f.includeUnpublished && h.published === false) {
          g.problems.push({ code: 'unpublished_leak', detail: `#${i + 1} ${h.caseName?.slice(0, 60)}` });
          fix('search_unpublished_leak', 'Unpublished opinion returned although unpublished are excluded by default.', `${q.id}: ${h.caseName?.slice(0, 60)}`, 'search');
        }
        if (ids.has(h.caseId) || (h.citation && cites.has(h.citation))) {
          g.problems.push({ code: 'duplicate_hit', detail: `#${i + 1} ${h.caseName?.slice(0, 60)} ${h.citation ?? ''}` });
          fix('search_duplicate_hit', 'Same opinion (same id or same reporter cite) twice on one results page — duplicate records.', `${q.id}: ${h.caseName?.slice(0, 60)} ${h.citation ?? ''}`, 'data');
        }
        ids.add(h.caseId);
        if (h.citation) cites.add(h.citation);
        if (h.bluebookCitation) for (const iss of lintCitation(h.bluebookCitation)) inc(lint, iss.code);
        else inc(lint, 'missing_bluebookCitation');
      });
      // landmark
      if (k?.wantCaseName) {
        const re = new RegExp(k.wantCaseName, k.wantFlags ?? 'i');
        const rank = res.findIndex((h) => re.test(h.caseName ?? ''));
        g.landmark = { want: k.wantCaseName, rank: rank >= 0 ? rank + 1 : null };
        if (rank < 0) {
          g.problems.push({ code: 'landmark_missing', detail: `wanted /${k.wantCaseName}/ in top 10` });
          fix(`landmark_missing_${suite}`, suite === 'bank' ? 'Controlling landmark for the doctrine not in the top 10 of an in-scope boolean search.' : 'Carried-forward realworld boolean row lost its landmark.', `${q.id} [${q.scopeLabel ?? q.jurisdiction.type}] ${q.query.slice(0, 70)} → want ${k.wantCaseName.slice(0, 40)}`, 'search');
        }
      }
      // boolean full-text verification
      if (r.booleanCheck?.length) {
        const checked = r.booleanCheck.filter((b) => typeof b.hit === 'boolean');
        const bad = checked.filter((b) => !b.hit);
        g.boolean = { checked: checked.length, failed: bad.length };
        for (const b of bad) {
          const why = b.negPresent?.length ? `contains excluded term(s): ${b.negPresent.join(', ')}` : 'required terms/proximity not met in full text';
          g.problems.push({ code: b.negPresent?.length ? 'boolean_not_violated' : 'boolean_unsatisfied', detail: `${b.caseName?.slice(0, 60)} — ${why}` });
          fix(b.negPresent?.length ? `boolean_not_${q.template}` : `boolean_unsatisfied_${q.template}`, b.negPresent?.length ? `NOT / % / AND NOT exclusion ignored (template ${q.template}).` : `Returned opinion does not satisfy the connectors (template ${q.template}).`, `${q.id}: ${q.query.slice(0, 70)} → ${b.caseName?.slice(0, 40)}`, 'search');
        }
      }
      const hard = g.problems.filter((p) => p.code !== 'empty');
      g.status = hard.length ? 'fail' : res.length ? 'perfect' : k?.wantCaseName ? 'fail' : 'empty';
      if (!res.length && k?.wantCaseName) fix('search_empty_keyed', 'Empty result page for an in-scope doctrine query that has a controlling landmark.', `${q.id} [${q.scopeLabel ?? q.jurisdiction.type}] ${q.query.slice(0, 80)}`, 'search');
    }
  }
  return { graded, unclassified, lint };
}

// ======================================================================
// 2. GOOD LAW
// ======================================================================
const NEG_STATUS = new Set(['overruled', 'reversed', 'vacated', 'abrogated', 'superseded', 'questioned', 'negative', 'criticized', 'limited', 'overruled_in_part', 'bad', 'red', 'yellow', 'caution']);
function isNeg(st, negative) {
  return negative === true || NEG_STATUS.has(String(st ?? '').toLowerCase());
}
function gradeGoodlaw() {
  const key = load('datasets/law-firm/goodlaw-1000/answer-key.json').rows;
  const cites = lastById(jsonl('cites-goodlaw.jsonl'));
  const gl = lastById(jsonl('goodlaw.jsonl'));
  const graded = [];
  for (const k of key) {
    const c = cites.get(k.id);
    const d = gl.get(k.id);
    const g = { id: k.id, cite: k.cite, group: k.group, tier: k.tier, truthSource: k.truthSource, expect: k.expect, severity: k.severity, by: k.by, problems: [] };
    graded.push(g);
    if (!c) {
      g.status = 'not_run';
      continue;
    }
    const cand = c.candidates?.[0];
    g.verdict = c.verdict;
    g.caseId = cand?.caseId ?? null;
    g.resolvedName = cand?.caseName ?? null;
    if (!cand) {
      g.status = 'unresolved';
      g.problems.push({ code: 'unresolved', detail: `verdict ${c.verdict}: ${(c.explanation ?? '').slice(0, 140)}` });
      fix(`goodlaw_unresolved_${k.truthSource}`, `Good-law input could not be resolved to a case (${k.truthSource}).`, `${k.id} ${k.cite.slice(0, 70)} → ${c.verdict}`, 'goodlaw');
      continue;
    }
    const want = parseCite(k.cite);
    // compare in Bluebook form so "Nat'l" == "National", "State Of Iowa" == "State"
    const surnames = (s) => bluebookCaseName(String(s ?? '')).toLowerCase().split(/\s+v\.\s+/).map((side) => side.replace(/^(in re|ex parte)\s+/, '').split(/[\s,]+/).filter((w) => w.length > 2 && !/^(the|of|and|state|people|commonwealth|united|states)$/.test(w)).map((w) => w.replace(/[^a-z0-9]/g, '')));
    const ws = want ? surnames(want.name).flat() : [];
    const cs = new Set(surnames(cand.caseName).flat());
    if (ws.length && cs.size && !ws.some((w) => cs.has(w))) {
      if (c.verdict === 'name_mismatch' && k.truthSource !== 'independent') {
        // the API rightly refused the caption; the good-law answer would be for another case
        g.status = 'excluded';
        g.problems.push({ code: 'excluded_caption_mismatch', detail: `input caption does not match ${cand.caseName?.slice(0, 60)} (${cand.citation}); API said name_mismatch` });
        continue;
      }
      g.problems.push({ code: 'resolved_other_case', detail: `${c.verdict}: ${cand.caseName?.slice(0, 70)} (${cand.citation})` });
      fix('goodlaw_resolved_other_case', c.verdict === 'valid' ? 'Cite confirmed "valid" while the matched case has a different caption than the one cited.' : 'Correct citation to a known case resolves to a different case in the corpus (reporter locator attached to the wrong opinion).', `${k.id} ${k.cite.slice(0, 60)} → ${c.verdict} ${cand.caseName?.slice(0, 50)}`, 'goodlaw');
    }
    const s1 = cand.goodLaw?.status ?? null;
    const s2 = d?.goodLaw?.status ?? null;
    const n2 = d?.goodLaw?.negative ?? null;
    g.citecheckStatus = s1;
    g.goodLawStatus = s2;
    g.negativeCitations = (d?.goodLaw?.negativeCitations ?? []).map((n) => `${n.caseName?.slice(0, 50)} (${n.treatment})`);
    const checkRows = d?.check?.citingCases ?? [];
    const checkNeg = checkRows.filter((r) => NEG_STATUS.has(String(r.status).toLowerCase()));
    g.checkNegative = checkNeg.map((r) => `${r.caseName?.slice(0, 50)} (${r.status})`);
    const anyNeg = isNeg(s2, n2) || isNeg(s1, cand.goodLaw?.negative);
    if (s1 && s2 && s1 !== s2) {
      g.problems.push({ code: 'status_inconsistent', detail: `cite check says ${s1}, good-law says ${s2}` });
      fix('goodlaw_status_inconsistent', 'Cite check and /good-law disagree on status for the same case.', `${k.id} ${cand.caseName?.slice(0, 40)}: ${s1} vs ${s2}`, 'goodlaw');
    }
    if (checkNeg.some((r) => /overrul|revers|vacat|abrogat|supersed/.test(r.status)) && !isNeg(s2, n2)) {
      g.problems.push({ code: 'check_shows_reversal_status_clean', detail: `goodlaw-check lists ${checkNeg[0].caseName?.slice(0, 50)} (${checkNeg[0].status}) but status is ${s2}` });
      fix('goodlaw_check_reversal_but_clean', 'goodlaw-check lists an overruling/reversing citing case while /good-law still reports the case as clean.', `${k.id} ${cand.caseName?.slice(0, 40)}: ${checkNeg[0].caseName?.slice(0, 40)} (${checkNeg[0].status}) vs ${s2}`, 'goodlaw');
    }
    if (k.expect === 'negative') {
      const soft = k.severity === 'soft';
      const ok = anyNeg || (soft && /below_threshold/.test(String(s2)));
      if (!ok) {
        g.problems.push({ code: soft ? 'missed_soft_negative' : 'missed_negative', detail: `status ${s2 ?? s1}; expected ${k.how}${k.by && k.truthSource === 'independent' ? ` by ${k.by}` : ''}` });
        fix(`goodlaw_missed_${soft ? 'soft' : 'hard'}_${k.group}`, soft ? 'Partially overruled / abrogated / limited case reported as clean good law.' : 'Overruled or reversed case reported as clean good law (false clean bill of health).', `${k.id} ${k.cite.slice(0, 60)} → ${s2 ?? s1}${k.truthSource === 'independent' ? ` [${k.how} by ${k.by?.slice(0, 50)}]` : ''}`, 'goodlaw');
      }
      if (ok && k.byRe) {
        const re = new RegExp(k.byRe, 'i');
        const surfaced = (d?.goodLaw?.negativeCitations ?? []).some((n) => re.test(n.caseName ?? '')) || checkNeg.some((r) => re.test(r.caseName ?? ''));
        g.authoritySurfaced = surfaced;
        if (!surfaced) {
          g.problems.push({ code: 'negative_authority_not_named', detail: `flagged ${s2}, but ${k.by} is not among the negative citations` });
          fix('goodlaw_authority_not_named', 'Case is flagged negative but the overruling / reversing decision is not named in the treatment evidence.', `${k.id} ${k.cite.slice(0, 50)} — want ${k.by?.slice(0, 50)}`, 'goodlaw');
        }
      }
      if (ok && /overrul|revers|vacat/.test(k.how ?? '') && k.severity === 'hard' && /questioned|negative_below_threshold|criticized|distinguished/.test(String(s2))) {
        g.problems.push({ code: 'understated_treatment', detail: `status ${s2} understates "${k.how}"` });
        fix('goodlaw_understated', 'Overruled/reversed case shown only as "questioned"/below-threshold instead of overruled/reversed.', `${k.id} ${k.cite.slice(0, 60)} → ${s2}`, 'goodlaw');
      }
    } else {
      if (anyNeg) {
        if (k.truthSource === 'presumed-good') {
          g.review = true;
          g.problems.push({ code: 'review_negative_flag', detail: `flagged ${s2 ?? s1}: ${g.negativeCitations.slice(0, 2).join('; ') || g.checkNegative.slice(0, 2).join('; ')}` });
        } else {
          g.problems.push({ code: 'false_negative_flag', detail: `good law flagged ${s2 ?? s1}: ${g.negativeCitations.slice(0, 2).join('; ') || g.checkNegative.slice(0, 2).join('; ')}` });
          fix('goodlaw_false_alarm', 'Good law (landmark still in force) flagged as negative.', `${k.id} ${k.cite.slice(0, 60)} → ${s2 ?? s1}: ${(g.negativeCitations[0] ?? g.checkNegative[0] ?? '').slice(0, 60)}`, 'goodlaw');
        }
      } else if (/unknown/.test(String(s2)) || d?.goodLaw?.unknown) {
        g.problems.push({ code: 'unknown_status', detail: 'status unknown' });
        fix('goodlaw_unknown', 'No good-law determination ("unknown") for a reported case.', `${k.id} ${k.cite.slice(0, 60)}`, 'goodlaw');
      }
    }
    if (d?.goodLaw?.negativeCitations?.some((n) => /audit|api audit|F-\d+/i.test(n.rationale ?? ''))) {
      g.problems.push({ code: 'internal_note_exposed', detail: d.goodLaw.negativeCitations.find((n) => /audit/i.test(n.rationale ?? '')).rationale });
      fix('goodlaw_internal_rationale', 'Internal audit note exposed as the treatment rationale (e.g. "Landmark overruling (API audit F-02)").', `${k.id} ${cand.caseName?.slice(0, 40)}`, 'goodlaw');
    }
    const hard = g.problems.filter((p) => !['review_negative_flag'].includes(p.code));
    g.status = hard.length ? (hard.every((p) => ['unknown_status', 'negative_authority_not_named', 'status_inconsistent'].includes(p.code)) ? 'partial' : 'fail') : g.review ? 'review' : 'perfect';
  }
  return { graded };
}

// ======================================================================
// 3. BLUEBOOK OFF-CITES
// ======================================================================
const firstToken = (side) =>
  String(side ?? '')
    .replace(/^(in re|ex parte)\s+/i, '')
    .split(/[\s,]+/)
    .find((w) => w.length > 1 && !/^(the|of|and)$/i.test(w))
    ?.toLowerCase()
    .replace(/[^a-z0-9']/g, '') ?? '';
function gradeBluebook() {
  const key = load('datasets/law-firm/bluebook-offcite-1000/answer-key.json');
  const raw = lastById(jsonl('cites-bluebook.jsonl'));
  const graded = [];
  for (const k of key.rows) {
    const r = raw.get(k.id);
    const g = { id: k.id, defect: k.defect, input: k.input, expected: k.expected, problems: [] };
    graded.push(g);
    if (!r) {
      g.status = 'not_run';
      continue;
    }
    g.verdict = r.verdict;
    g.output = r.correctedCitation ?? null;
    g.candidate = r.candidates?.[0]?.bluebookCitation ?? null;
    if (!k.accept.includes(r.verdict) && !k.partial.includes(r.verdict)) {
      g.problems.push({ code: 'verdict', detail: `${r.verdict} (accept ${k.accept.join('/')})` });
      fix(`bluebook_verdict_${k.defect}`, `Wrong verdict on a slightly-off cite (${k.defect}).`, `${k.id} "${k.input.slice(0, 70)}" → ${r.verdict}`, 'bluebook');
    }
    if (r.candidates?.[0]?.caseId && k.expectedCaseId && r.candidates[0].caseId !== k.expectedCaseId) {
      g.problems.push({ code: 'different_case', detail: `${r.candidates[0].caseName?.slice(0, 60)} (${r.candidates[0].citation})` });
    }
    const out = g.output;
    if (!out) {
      g.problems.push({ code: 'no_corrected_citation', detail: `verdict ${r.verdict}; no correctedCitation` });
      fix(`bluebook_no_correction_${k.defect}`, `No corrected citation returned for a recoverable off-cite (${k.defect}).`, `${k.id} "${k.input.slice(0, 70)}" → ${r.verdict}`, 'bluebook');
      g.status = 'fail';
      continue;
    }
    const o = parseCite(out);
    // either locator is right when the corpus files the case under the regional reporter
    const E = k.expectedAltParts && o && o.vol === k.expectedAltParts.vol && o.reporter === k.expectedAltParts.reporter ? k.expectedAltParts : k.expectedParts;
    if (!o) {
      g.problems.push({ code: 'output_unparseable', detail: out });
      g.status = 'fail';
      continue;
    }
    if (o.vol !== E.vol || o.reporter !== E.reporter || o.page !== E.page) {
      g.problems.push({ code: 'locator', detail: `${o.vol} ${o.reporterRaw} ${o.page} ≠ ${E.vol} ${E.reporter} ${E.page}` });
      fix(`bluebook_locator_${k.defect}`, `Corrected cite carries the wrong volume/reporter/page (${k.defect}).`, `${k.id} "${k.input.slice(0, 60)}" → ${out.slice(0, 90)}`, 'bluebook');
    } else if (o.reporterRaw !== E.reporter) {
      g.problems.push({ code: 'reporter_form', detail: `${o.reporterRaw} → ${E.reporter}` });
      fix('bluebook_reporter_form', 'Reporter abbreviation in corrected cite not in T1 form.', `${k.id} ${o.reporterRaw} vs ${E.reporter}`, 'bluebook');
    }
    if (o.parallels?.length) {
      g.problems.push({ code: 'parallel_cites_in_output', detail: o.parallels.join('; ') });
      fix('bluebook_parallel_string', 'Corrected cite strings parallel reporters together ("98 N.Y.2d 345, 746 N.Y.S.2d 865, 774 N.E.2d 1197 (2002)"); Bluebook Rule 10.3.1 wants one reporter unless a local rule asks for parallels, and then the court still belongs in the parenthetical for the regional cite.', `${k.id} → ${out.slice(0, 110)}`, 'bluebook');
    }
    if (o.year !== E.year) {
      g.problems.push({ code: 'year', detail: `${o.year ?? '(none)'} ≠ ${E.year}` });
      fix(`bluebook_year_${k.defect}`, `Corrected cite has the wrong or no year (${k.defect}).`, `${k.id} "${k.input.slice(0, 60)}" → ${out.slice(0, 90)}`, 'bluebook');
    }
    if (!courtEquivalent(o.court, E.court)) {
      const code = !E.court && o.court ? 'court_redundant' : E.court && !o.court ? 'court_missing' : 'court_form';
      g.problems.push({ code, detail: `"${o.court}" ≠ "${E.court}"` });
      const titles = {
        court_redundant: 'Court named in the parenthetical although the reporter already identifies it (Rule 10.4(b)) — e.g. "(U.S. 1986)", "(Cal. 1975)".',
        court_missing: 'Court omitted from the parenthetical where the reporter does not identify it (Rule 10.4).',
        court_form: 'Court abbreviation in the parenthetical is not the T1/T7 form.',
      };
      fix(`bluebook_${code}`, titles[code], `${k.id} → "(${o.paren})" want "(${[E.court, E.year].filter(Boolean).join(' ')})"`, 'bluebook');
    }
    const issues = lintCitation(out).filter((i) => !['reporter_spacing', 'no_year', 'local_rule_court_form'].includes(i.code));
    for (const i of issues) {
      g.problems.push({ code: `name_${i.code}`, detail: i.detail.slice(0, 120) });
      fix(`bluebook_name_${i.code}`, NAME_TITLES[i.code] ?? `Case name: ${i.code}`, `${k.id} → ${out.slice(0, 100)}`, 'bluebook');
    }
    if (/\bDCA\b/.test(o.court) && E.court === 'Fla. Dist. Ct. App.') {
      g.notes = [...(g.notes ?? []), 'Florida "Fla. 1st DCA" form (Fla. R. App. P. 9.800) accepted; Bluebook T1 form is "Fla. Dist. Ct. App."'];
    }
    // Given names / prefixes: the expected first party word appears later in
    // the output's party instead of first. (If it does not appear at all the
    // generator and the API simply disagree on the caption: not scored.)
    const [eL, eR] = E.name.split(/\s+v\.\s+/);
    const [oL, oR] = o.name.split(/\s+v\.\s+/);
    for (const [es, os] of [[eL, oL], [eR, oR]]) {
      if (!es || !os) continue;
      const want = firstToken(es);
      const got = firstToken(os);
      const toks = String(os).replace(/^(in re|ex parte)\s+/i, '').toLowerCase().split(/[\s,]+/).map((w) => w.replace(/[^a-z0-9']/g, ''));
      if (want && got !== want && toks.indexOf(want) > toks.indexOf(got)) {
        g.problems.push({ code: 'name_given_names_or_prefix', detail: `"${os.slice(0, 70)}" — Bluebook party is "${es}"` });
        fix('bluebook_name_given_names', 'Individual parties keep given names / extra words before the surname (Rule 10.2.1(g): surname only).', `${k.id} "${os.slice(0, 60)}" want "${es}"`, 'bluebook');
      }
    }
    g.exact = [k.expected, k.expectedAlt].filter(Boolean).some((x) => normCite(out).replace(/,\s*\d+(?=\s*\()/, '') === normCite(x));
    g.status = g.problems.length ? 'fail' : 'perfect';
  }
  return { graded, excludedSources: key.excludedSources };
}
const NAME_TITLES = {
  et_al: 'Case name keeps "et al." (Rule 10.2.1(a)).',
  party_role_in_name: 'Case name keeps party-role words (Plaintiff, Appellant, Respondent…) (Rule 10.2.1).',
  descriptive_phrase_in_name: 'Case name keeps descriptive phrases ("Administratrix of the Estate of…", "as Trustee", "individually") (Rule 10.2.1(a)).',
  multiple_parties: 'Case name lists more than the first party on a side (Rule 10.2.1(a)).',
  v_form: 'Case name uses "vs."/"v" instead of "v."',
  all_caps_name: 'Case name in capitals.',
  t6_unabbreviated: 'Case-name words that T6 abbreviates are spelled out (Company, Corporation, Department, Insurance, Association…) (Rule 10.2.2).',
  t10_unabbreviated: 'Geographic words inside a longer party name not abbreviated per T10 (Rule 10.2.2).',
  and_not_ampersand: '"and" in a case name not replaced by "&" (Rule 10.2.1(c)).',
  usa_long_form: '"United States of America" not shortened to "United States" (Rule 10.2.1(f)).',
  state_long_form: '"State of X" / "People of the State of X" / "Commonwealth of X" not shortened (Rule 10.2.1(f)).',
  leading_the: 'Leading "The" kept in a party name (Rule 10.2.1(c)).',
  full_date_on_reported_case: 'Exact date in the parenthetical of a reported case (Rule 10.5: year only).',
  name_too_long: 'Case name over 90 characters — not a citation short form.',
  unparseable: 'Citation does not parse as a case citation.',
  no_locator: 'Citation line has no reporter, public-domain, WL/Lexis, or docket locator — just "Name (Court Year)" (Rule 10.8.1 needs a docket number and database/slip-op date for unreported cases).',
  reporter_not_t1: 'Reporter abbreviation not in T1.',
};

// ======================================================================
// 4. CARRIED-FORWARD CITE CHECK
// ======================================================================
function gradeCarriedCites() {
  const key = load('datasets/law-firm/carried-forward/citecheck/answer-key.json').rows;
  const raw = lastById(jsonl('cites-carried-cites.jsonl'));
  const graded = [];
  for (const k of key) {
    const r = raw.get(k.id);
    const g = { id: k.id, family: k.family, input: k.cite, problems: [] };
    graded.push(g);
    if (!r) {
      g.status = 'not_run';
      continue;
    }
    g.verdict = r.verdict;
    g.output = r.correctedCitation;
    if (k.accept.includes(r.verdict)) g.status = 'perfect';
    else if ((k.partial ?? []).includes(r.verdict)) {
      g.status = 'partial';
      g.problems.push({ code: 'partial_verdict', detail: `${r.verdict}; key: ${k.correctAnswer}` });
    } else {
      g.status = 'fail';
      g.problems.push({ code: 'verdict', detail: `${r.verdict}; key: ${k.correctAnswer}` });
      fix(`carried_${k.family}`, `Carried-forward cite-check family "${k.family}" regressed or still wrong.`, `${k.id} "${k.cite.slice(0, 70)}" → ${r.verdict}`, 'citecheck');
    }
    if (r.correctedCitation && (k.accept.includes('valid') || k.family === 'page_mismatch')) {
      const lint = lintCitation(r.correctedCitation).filter((i) => ['et_al', 'party_role_in_name', 'descriptive_phrase_in_name', 'multiple_parties', 'all_caps_name', 't6_unabbreviated'].includes(i.code));
      if (lint.length) g.problems.push({ code: 'corrected_form', detail: lint.map((i) => i.code).join(', ') });
    }
  }
  return { graded };
}

// ======================================================================
// 5. OPINION OUTPUT
// ======================================================================
function gradeOpinions() {
  const raw = jsonl('opinions.jsonl');
  const graded = [];
  for (const r of raw) {
    const g = { id: r.id, caseId: r.caseId, group: r.group, caseName: r.meta?.caseName, citation: r.meta?.bluebookCitation, problems: [] };
    graded.push(g);
    const P = (code, detail, title) => {
      g.problems.push({ code, detail });
      fix(`opinion_${code}`, title, `${r.id} ${r.caseId} ${String(r.meta?.caseName ?? '').slice(0, 50)}${detail ? ` — ${String(detail).slice(0, 80)}` : ''}`, 'opinion');
    };
    if (r.meta?.status !== 200) P('metadata_error', `HTTP ${r.meta?.status}`, 'GET /cases/:id failed.');
    for (const l of r.meta?.lint ?? []) if (!['local_rule_court_form'].includes(l)) P(`bluebook_${l}`, r.meta?.bluebookCitation, `Opinion header citation fails Bluebook: ${NAME_TITLES[l] ?? l}`);
    const t = r.text ?? {};
    if (t.status !== 200 || !t.chars) P('text_missing', `HTTP ${t.status}`, 'Opinion text endpoint returned no body.');
    else {
      if (t.chars < 1500) P('text_short', `${t.chars} chars`, 'Opinion text under 1,500 characters (stub, syllabus only, or truncated).');
      if (t.midSentenceBreaksPer1k > 2) P('hard_wrapped_text', `${t.midSentenceBreaksPer1k} mid-sentence paragraph breaks per 1k words`, 'Opinion text keeps PDF line wraps as paragraph breaks (blank line mid-sentence) — text pastes badly into a brief.');
      if (t.htmlLeak > 0) P('html_leak', `${t.htmlLeak} tags/entities`, 'HTML tags or entities (&amp;, <p>) leak into opinion text.');
      if (t.bareNumberLines > 3 || t.pageHeaderLines > 2) P('page_furniture', `${t.bareNumberLines} bare page-number lines, ${t.pageHeaderLines} running headers`, 'Slip-opinion page numbers / running headers left in the opinion body.');
      if (t.hyphenSplitsPer1k > 1) P('hyphen_splits', `${t.hyphenSplitsPer1k} per 1k words`, 'End-of-line hyphenation not rejoined ("negli- gence").');
      if (t.replacementChars > 0) P('mojibake', `${t.replacementChars}`, 'Encoding damage (�, â€) in opinion text.');
      if (t.dupParas > 1 || t.wholeRepeat) P('duplicated_text', `${t.dupParas} repeated paragraphs${t.wholeRepeat ? ', whole opinion repeats' : ''}`, 'Opinion text repeats paragraphs or the whole opinion.');
      if (!t.starPages) P('no_star_paging', '', 'No star paging (*page markers) — a firm cannot pin-cite the reporter from this text.');
      if (t.truncatedAtEnd) P('text_truncated', '', 'Opinion text still truncated after 6 pages of /text.');
    }
    const p = r.pdf ?? {};
    if (p.status !== 200 || p.notPdf) P('pdf_error', `HTTP ${p.status}`, 'PDF endpoint failed or returned non-PDF.');
    else if (p.parseError) P('pdf_unparseable', p.parseError, 'PDF could not be parsed.');
    else {
      if (p.lawtoolsBrand) P('pdf_old_brand', 'header reads "LAWTOOLS · LAWTOOLS.AI"', 'PDF header still carries the old LawTools brand instead of LawDiver.');
      if (p.hasCitation === false) P('pdf_no_citation', '', 'PDF does not show the reporter citation.');
      if (p.hasCourt === false) P('pdf_no_court', '', 'PDF does not name the court.');
      if (p.bodyCoverage !== null && p.bodyCoverage < 0.8) P('pdf_truncated', `PDF text ${p.bodyCoverage}× the /text body`, 'PDF holds noticeably less text than the opinion (truncated or dropped sections).');
      if (p.middleProbeOccurrences > 1) P('pdf_duplicated', `${p.middleProbeOccurrences} copies of a mid-opinion passage`, 'PDF prints part of the opinion more than once.');
      if (p.middleProbeOccurrences === 0 && p.bodyCoverage >= 0.8) g.problems.push({ code: 'pdf_text_differs', detail: 'a mid-opinion passage from /text not found verbatim in PDF' });
      if (p.captionRunOn) P('pdf_caption_runon', '', 'PDF collapses the caption block (court, parties, docket, "Appellant", "v.") into one run-on paragraph.');
    }
    if (r.clusterIdMismatch) P('cluster_id_mismatch', `cases/:id ${r.meta?.clusterId} vs good-law ${r.goodLaw?.clusterId}`, '/cases/:id and /good-law report different clusterIds for the same opinion.');
    if (r.meta?.goodLaw && r.goodLaw?.status && r.meta.goodLaw !== r.goodLaw.status) P('goodlaw_mismatch', `${r.meta.goodLaw} vs ${r.goodLaw.status}`, '/cases/:id good-law status differs from /good-law.');
    const hard = g.problems.filter((x) => !['no_star_paging', 'pdf_text_differs'].includes(x.code));
    g.status = hard.length ? 'fail' : g.problems.length ? 'partial' : 'perfect';
  }
  return { graded };
}

// ======================================================================
// REPORT
// ======================================================================
const S = gradeSearch();
const G = gradeGoodlaw();
const B = gradeBluebook();
const C = gradeCarriedCites();
const O = gradeOpinions();

const count = (arr, f) => arr.filter(f).length;
function tally(arr, by) {
  const m = new Map();
  for (const r of arr) inc(m, by(r));
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
}
const ran = (arr) => arr.filter((r) => r.status !== 'not_run' && r.status !== 'excluded');

for (const [n, v] of Object.entries({ search: S.graded, goodlaw: G.graded, bluebook: B.graded, 'carried-cites': C.graded, opinions: O.graded })) {
  writeFileSync(resolve(RUN_DIR, `graded-${n}.json`), JSON.stringify(v, null, 1) + '\n');
}

function problemsMd(title, rows, cols) {
  const bad = rows.filter((r) => r.problems?.length);
  let md = `# ${title}\n\nRun \`${RUN}\`. ${bad.length} of ${ran(rows).length} graded rows have at least one problem. Every row below names what is wrong with *that* case.\n\n`;
  md += `| ${cols.map((c) => c[0]).join(' | ')} | Problems |\n|${cols.map(() => '---').join('|')}|---|\n`;
  for (const r of bad) md += `| ${cols.map((c) => esc(c[1](r))).join(' | ')} | ${esc(r.problems.map((p) => `**${p.code}**${p.detail ? `: ${p.detail}` : ''}`).join('<br>'))} |\n`;
  return md;
}

// --- search summary
const sR = ran(S.graded);
const sBank = sR.filter((r) => r.suite === 'bank');
const sCf = sR.filter((r) => r.suite === 'carried');
const searchRows = (rows) => {
  const keyed = rows.filter((r) => r.landmark);
  const bools = rows.filter((r) => r.boolean);
  return {
    n: rows.length,
    perfect: count(rows, (r) => r.status === 'perfect'),
    empty: count(rows, (r) => !r.count),
    oos: count(rows, (r) => r.problems.some((p) => p.code === 'out_of_scope')),
    oosHits: rows.reduce((a, r) => a + r.problems.filter((p) => p.code === 'out_of_scope').length, 0),
    hits: rows.reduce((a, r) => a + (r.count ?? 0), 0),
    dates: count(rows, (r) => r.problems.some((p) => /dateFrom|dateTo/.test(p.code))),
    unpub: count(rows, (r) => r.problems.some((p) => p.code === 'unpublished_leak')),
    dup: count(rows, (r) => r.problems.some((p) => p.code === 'duplicate_hit')),
    keyed: keyed.length,
    lmTop10: count(keyed, (r) => r.landmark.rank),
    lmTop1: count(keyed, (r) => r.landmark.rank === 1),
    mrr: keyed.length ? (keyed.reduce((a, r) => a + (r.landmark.rank ? 1 / r.landmark.rank : 0), 0) / keyed.length).toFixed(3) : 'n/a',
    boolChecked: bools.reduce((a, r) => a + r.boolean.checked, 0),
    boolFailed: bools.reduce((a, r) => a + r.boolean.failed, 0),
    degraded: count(rows, (r) => r.problems.some((p) => p.code === 'degraded')),
    errors: count(rows, (r) => r.problems.some((p) => p.code === 'http_error')),
    avgMs: Math.round(rows.reduce((a, r) => a + (r.ms ?? 0), 0) / (rows.length || 1)),
  };
};
const sb = searchRows(sBank);
const sc = searchRows(sCf);

// --- goodlaw summary
const gR = ran(G.graded);
const negRows = gR.filter((r) => r.expect === 'negative' && r.status !== 'unresolved');
const goodRows = gR.filter((r) => r.expect === 'good' && r.status !== 'unresolved');
const caught = (rows) => count(rows, (r) => !r.problems.some((p) => /missed_/.test(p.code)));

// --- bluebook summary
const bR = ran(B.graded);
const C_R = ran(C.graded);
const oR = ran(O.graded);

let md = `# Law-firm test series — run ${RUN}\n\n`;
md += `System under test: LawDiver API v1 (\`https://lawdiver.com/api/v1\`). Datasets: \`datasets/law-firm/\`. Harness: \`scripts/law-firm/\`. A row is **perfect** only when every check on it passes; everything else is listed by case in the \`problems-*.md\` files next to this report.\n\n`;
md += `## Headline\n\n| Suite | Rows run | Perfect | Notes |\n|---|---:|---:|---|\n`;
md += `| Boolean search, jurisdiction-scoped (new) | ${sb.n} | ${sb.perfect} (${pct(sb.perfect, sb.n)}) | out-of-scope hits on ${sb.oos} queries; landmark top-10 ${sb.lmTop10}/${sb.keyed}; boolean full-text check ${sb.boolChecked - sb.boolFailed}/${sb.boolChecked} opinions satisfy the query |\n`;
md += `| Boolean search, realworld carried forward | ${sc.n} | ${sc.perfect} (${pct(sc.perfect, sc.n)}) | landmark top-10 ${sc.lmTop10}/${sc.keyed} |\n`;
md += `| Good-law check (state + federal) | ${gR.length} | ${count(gR, (r) => r.status === 'perfect')} (${pct(count(gR, (r) => r.status === 'perfect'), gR.length)}) | negative history caught ${caught(negRows)}/${negRows.length}; good law kept clean ${count(goodRows, (r) => !r.problems.some((p) => ['false_negative_flag', 'review_negative_flag'].includes(p.code)))}/${goodRows.length}; unresolved ${count(gR, (r) => r.status === 'unresolved')} |\n`;
md += `| Bluebook form from slightly-off cites | ${bR.length} | ${count(bR, (r) => r.status === 'perfect')} (${pct(count(bR, (r) => r.status === 'perfect'), bR.length)}) | exact string match to expected ${count(bR, (r) => r.exact)} |\n`;
md += `| Cite check, carried forward | ${C_R.length} | ${count(C_R, (r) => r.status === 'perfect')} (${pct(count(C_R, (r) => r.status === 'perfect'), C_R.length)}) | partial ${count(C_R, (r) => r.status === 'partial')} |\n`;
const SYSTEMIC = new Set(['pdf_old_brand', 'cluster_id_mismatch', 'no_star_paging', 'pdf_text_differs']);
const cleanButSystemic = count(oR, (r) => r.problems.every((p) => SYSTEMIC.has(p.code)));
md += `| Opinion output (text + PDF) | ${oR.length} | ${count(oR, (r) => r.status === 'perfect')} (${pct(count(oR, (r) => r.status === 'perfect'), oR.length)}) | old LawTools PDF header on ${count(oR, (r) => r.problems.some((p) => p.code === 'pdf_old_brand'))}; clusterId mismatch on ${count(oR, (r) => r.problems.some((p) => p.code === 'cluster_id_mismatch'))}; apart from header, clusterId and star paging, ${cleanButSystemic} (${pct(cleanButSystemic, oR.length)}) are clean |\n\n`;
const excl = count(G.graded, (r) => r.status === 'excluded');
if (excl) md += `Good law: ${excl} of 1,000 rows are excluded from scoring — presumed-good inputs whose caption (taken from older banks) does not match the case at that locator; the API correctly answered \`name_mismatch\`, so there is no good-law answer to grade for the case intended. They are listed in \`problems-goodlaw.md\`.\n\n`;

// general fixes
const fixes = [...FIXES.values()].sort((a, b) => b.count - a.count);
md += `## General fixes (ranked by rows affected)\n\nEach line is one root cause seen across many cases. Examples are row ids from this run; the full per-case list is in the matching \`problems-*.md\`.\n\n`;
for (const area of ['search', 'goodlaw', 'bluebook', 'citecheck', 'opinion', 'data']) {
  const fs = fixes.filter((f) => f.area === area);
  if (!fs.length) continue;
  md += `### ${{ search: 'Search', goodlaw: 'Good law', bluebook: 'Bluebook output', citecheck: 'Cite check (carried forward)', opinion: 'Opinion output', data: 'Corpus data' }[area]}\n\n| Rows | Fix | Examples |\n|---:|---|---|\n`;
  for (const f of fs) md += `| ${f.count} | ${esc(f.title)} \`${f.code}\` | ${esc(f.examples.slice(0, 3).join('<br>'))} |\n`;
  md += '\n';
}

// search detail
md += `## Boolean search detail\n\n| Measure | New bank | Realworld carried |\n|---|---:|---:|\n`;
for (const [label, k] of [['Queries run', 'n'], ['Perfect', 'perfect'], ['HTTP errors', 'errors'], ['Degraded', 'degraded'], ['Empty pages', 'empty'], ['Queries with an out-of-scope hit', 'oos'], ['Out-of-scope hits / all hits', null], ['Date-filter violations (queries)', 'dates'], ['Unpublished leaks (queries)', 'unpub'], ['Duplicate hit on a page (queries)', 'dup'], ['Landmark keyed', 'keyed'], ['Landmark in top 10', 'lmTop10'], ['Landmark at rank 1', 'lmTop1'], ['Landmark MRR', 'mrr'], ['Avg latency ms', 'avgMs']]) {
  md += `| ${label} | ${k ? sb[k] : `${sb.oosHits}/${sb.hits}`} | ${k ? sc[k] : `${sc.oosHits}/${sc.hits}`} |\n`;
}
md += `\n**Full-text boolean verification** (top 3 opinions on every 12th query, evaluated with \`lib/boolean.mjs\`): ${sb.boolChecked} opinions checked, ${sb.boolFailed} do not satisfy the query.\n\n`;
const byScope = tally(sBank, (r) => r.scope.type);
md += `### By scope\n\n| Scope | Queries | Perfect | Any out-of-scope hit | Empty |\n|---|---:|---:|---:|---:|\n`;
for (const [t] of byScope) {
  const rs = sBank.filter((r) => r.scope.type === t);
  md += `| ${t} | ${rs.length} | ${pct(count(rs, (r) => r.status === 'perfect'), rs.length)} | ${pct(count(rs, (r) => r.problems.some((p) => p.code === 'out_of_scope')), rs.length)} | ${pct(count(rs, (r) => !r.count), rs.length)} |\n`;
}
md += `\n### By connector template\n\n| Template | Queries | Perfect | Empty | Opinions failing full-text check |\n|---|---:|---:|---:|---:|\n`;
for (const [t] of tally(sBank, (r) => r.template)) {
  const rs = sBank.filter((r) => r.template === t);
  const bc = rs.filter((r) => r.boolean);
  md += `| ${t} | ${rs.length} | ${pct(count(rs, (r) => r.status === 'perfect'), rs.length)} | ${pct(count(rs, (r) => !r.count), rs.length)} | ${bc.reduce((a, r) => a + r.boolean.failed, 0)}/${bc.reduce((a, r) => a + r.boolean.checked, 0)} |\n`;
}
md += `\n### keyword vs auto\n\n| searchType | Queries | Perfect | Empty | Landmark top-10 | Opinions failing full-text boolean check |\n|---|---:|---:|---:|---:|---:|\n`;
for (const st of ['keyword', 'auto']) {
  const rs = sBank.filter((r) => r.searchType === st);
  const kk = rs.filter((r) => r.landmark);
  const bc = rs.filter((r) => r.boolean);
  md += `| ${st} | ${rs.length} | ${pct(count(rs, (r) => r.status === 'perfect'), rs.length)} | ${pct(count(rs, (r) => !r.count), rs.length)} | ${count(kk, (r) => r.landmark.rank)}/${kk.length} | ${bc.reduce((a, r) => a + r.boolean.failed, 0)}/${bc.reduce((a, r) => a + r.boolean.checked, 0)} |\n`;
}
md += `\n### Bluebook lint on search-result citation lines\n\n| Issue | Hits |\n|---|---:|\n`;
for (const [k, v] of [...S.lint.entries()].sort((a, b) => b[1] - a[1])) md += `| ${k} | ${v} |\n`;
if (S.unclassified.size) {
  md += `\n### Courts the grader could not place (scope not graded for these hits)\n\n| Court \\| jurisdiction | Hits |\n|---|---:|\n`;
  for (const [k, v] of [...S.unclassified.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25)) md += `| ${esc(k)} | ${v} |\n`;
}

// goodlaw detail
md += `\n## Good-law detail\n\n| Group | Rows | Truth | Perfect | Caught / kept clean | Unresolved |\n|---|---:|---|---:|---:|---:|\n`;
for (const [grp] of tally(gR, (r) => r.group)) {
  const rs = gR.filter((r) => r.group === grp);
  const res = rs.filter((r) => r.status !== 'unresolved');
  const ok = rs[0].expect === 'negative' ? caught(res) : count(res, (r) => !r.problems.some((p) => ['false_negative_flag', 'review_negative_flag'].includes(p.code)));
  md += `| ${grp} | ${rs.length} | ${rs[0].truthSource} | ${count(rs, (r) => r.status === 'perfect')} | ${ok}/${res.length} | ${count(rs, (r) => r.status === 'unresolved')} |\n`;
}
md += `\nStatus values seen: ${tally(gR.filter((r) => r.goodLawStatus), (r) => r.goodLawStatus).map(([k, v]) => `${k} ${v}`).join(', ')}.\n`;
md += `\nPresumed-good cases the API flags negative (${count(gR, (r) => r.review)}) are listed in \`problems-goodlaw.md\` with the negative citation it relied on, for a lawyer to confirm.\n`;

// bluebook detail
md += `\n## Bluebook off-cite detail\n\n| Defect | Rows | Perfect | Verdict wrong | No correction | Locator | Year | Court | Case name |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|\n`;
for (const [d] of tally(bR, (r) => r.defect)) {
  const rs = bR.filter((r) => r.defect === d);
  const has = (re) => count(rs, (r) => r.problems.some((p) => re.test(p.code)));
  md += `| ${d} | ${rs.length} | ${count(rs, (r) => r.status === 'perfect')} | ${has(/^verdict$/)} | ${has(/^no_corrected/)} | ${has(/^locator$|^reporter_form$/)} | ${has(/^year$/)} | ${has(/^court_/)} | ${has(/^name_/)} |\n`;
}
md += `\nSources excluded before mangling (control lookup could not give a clean court/year): ${B.excludedSources.length}. Year conflicts between a curated source cite and the corpus: ${B.excludedSources.filter((e) => e.dataConflict).length} (listed in the answer key under \`excludedSources\`).\n`;

// carried + opinions
md += `\n## Cite check, carried forward\n\n| Family | Rows | Perfect | Partial | Fail |\n|---|---:|---:|---:|---:|\n`;
for (const [f] of tally(C_R, (r) => r.family)) {
  const rs = C_R.filter((r) => r.family === f);
  md += `| ${f} | ${rs.length} | ${count(rs, (r) => r.status === 'perfect')} | ${count(rs, (r) => r.status === 'partial')} | ${count(rs, (r) => r.status === 'fail')} |\n`;
}
md += `\n## Opinion output detail\n\n| Check | Opinions failing |\n|---|---:|\n`;
for (const [code, n] of tally(oR.flatMap((r) => r.problems), (p) => p.code)) md += `| ${code} | ${n} |\n`;
md += `\nBy court group: ${tally(oR, (r) => r.group).map(([g, n]) => `${g} ${count(oR.filter((r) => r.group === g), (r) => r.status === 'perfect')}/${n} perfect`).join(' · ')}.\n`;

writeFileSync(resolve(RUN_DIR, 'REPORT.md'), md);
writeFileSync(resolve(RUN_DIR, 'general-fixes.json'), JSON.stringify(fixes, null, 1) + '\n');
writeFileSync(resolve(RUN_DIR, 'problems-search.md'), problemsMd('Search — per-query problems', S.graded, [['Id', (r) => r.id], ['Scope', (r) => `${r.scope.type}${r.scope.state ? ` ${r.scope.state}` : ''}${r.scope.circuit ? ` ${r.scope.circuit}` : ''}${r.scope.districtState ? ` ${r.scope.districtState}` : ''}${r.filters?.dateFrom || r.filters?.dateTo ? ` ${r.filters.dateFrom ?? ''}–${r.filters.dateTo ?? ''}` : ''}`], ['Type', (r) => r.searchType], ['Query', (r) => r.query]]));
writeFileSync(resolve(RUN_DIR, 'problems-goodlaw.md'), problemsMd('Good law — per-case problems', G.graded, [['Id', (r) => r.id], ['Cite', (r) => r.cite], ['Truth', (r) => `${r.expect}${r.severity ? `/${r.severity}` : ''} (${r.truthSource})`], ['API status', (r) => r.goodLawStatus ?? r.citecheckStatus ?? r.verdict]]));
writeFileSync(resolve(RUN_DIR, 'problems-bluebook.md'), problemsMd('Bluebook off-cites — per-cite problems', B.graded, [['Id', (r) => r.id], ['Defect', (r) => r.defect], ['Input', (r) => r.input], ['LawDiver output', (r) => r.output ?? `(none; ${r.verdict})`], ['Expected', (r) => r.expected]]));
writeFileSync(resolve(RUN_DIR, 'problems-carried-cites.md'), problemsMd('Cite check (carried forward) — per-cite problems', C.graded, [['Id', (r) => r.id], ['Family', (r) => r.family], ['Input', (r) => r.input], ['Verdict', (r) => r.verdict], ['Output', (r) => r.output ?? '']]));
writeFileSync(resolve(RUN_DIR, 'problems-opinions.md'), problemsMd('Opinion output — per-opinion problems', O.graded, [['Id', (r) => r.id], ['Case', (r) => r.citation ?? r.caseName], ['Group', (r) => r.group]]));
console.log(md.split('## General fixes')[0]);
console.log('fix codes', fixes.length);
