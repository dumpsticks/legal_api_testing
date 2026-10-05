# Law-firm test series

What a litigation firm actually asks a caselaw API to do, every day, at volume:

1. Run **terms-and-connectors searches inside a specific jurisdiction** and get only cases from that jurisdiction, inside the date window, that satisfy the connectors.
2. **Check whether a case is still good law** — state and federal, with the overruling or reversing decision named.
3. **Turn a slightly-off citation into proper Bluebook form.**
4. **Pull an opinion in a form you can quote, pin-cite and file** (clean text, a usable PDF).

Plus the earlier banks' rows that test the same work, carried forward.

| Suite | Rows | What you send | Answer key |
|---|---:|---|---|
| [`boolean-search-5000`](boolean-search-5000/queries.json) | 5,000 | `POST /search` with a Westlaw/Lexis connector query, a jurisdiction, and sometimes a date window | [scope, dates, published, boolean, landmark](boolean-search-5000/answer-key.json) |
| [`goodlaw-1000`](goodlaw-1000/inputs.json) | 1,000 | A citation (resolve, then `GET /cases/:id/good-law` and `/goodlaw-check`) | [negative or good, with the later decision](goodlaw-1000/answer-key.json) |
| [`bluebook-offcite-1000`](bluebook-offcite-1000/inputs.json) | 1,000 | A citation knocked slightly off in one of 20 ways | [the Bluebook form to hand back](bluebook-offcite-1000/answer-key.json) |
| [`opinion-format-200`](opinion-format-200/inputs.json) | 200 | An opinion id (`/cases/:id`, `/text`, `/pdf`, `/good-law`) | formatting checks in the inputs file |
| [`carried-forward/realworld-boolean`](carried-forward/realworld-boolean/queries.json) | 286 | The boolean rows of `search/realworld-1000` | landmark key, re-scoped |
| [`carried-forward/citecheck`](carried-forward/citecheck/inputs.json) | 657 | The 5,300-bank families a firm hits daily (Bluebook variants, mild mangles, pin-as-first-page, parallel, vendor, history, string cites, caption/year/court traps, statutes) | original accept/partial/reject |

Do not send answer-key files to the system under test.

## 1. Boolean search, jurisdiction-scoped

Built by [`scripts/law-firm/build-search.mjs`](../../scripts/law-firm/build-search.mjs) from a 147-topic practice library ([`lib/topics.mjs`](../../scripts/law-firm/lib/topics.mjs)): civil procedure, torts, contracts, insurance, real property, landlord-tenant, family, probate, employment, civil rights, criminal procedure, evidence, administrative, IP, securities, bankruptcy, tax, immigration, antitrust, constitutional.

Fourteen connector templates, Westlaw and Lexis forms: `/s`, `/p`, `/n`, `+s`, `w/s`, `w/p`, `w/n`, `&`, `OR`, `%` (BUT NOT), `AND NOT`, `NOT`, root expander `!`, parentheses, quoted phrases.

Scopes (every row has one): `one_state` (1,725), `one_state_plus_federal` (1,110), `federal_circuit` (751), `federal_district` (385), `all_federal` (338), `all_states` (260), `us_supreme_court` (224), `all_states_and_federal` (207). 1,546 rows add a date window; 10% set `includeUnpublished` or `publishedOnly`. Even rows force `searchType: "keyword"`; odd rows send `"auto"` — both must honour the connectors.

**Graded on every row**

- Every hit's court is inside the scope. `one_state` = that state's courts only. `one_state_plus_federal` = that state's courts, the federal district courts in the state, its circuit, and the Supreme Court. `federal_circuit` = that circuit, the district courts in it, and the Supreme Court. `federal_district` = federal trial courts sitting in that state. `us_supreme_court` = the Supreme Court only.
- Every hit's `dateFiled` is inside the date window.
- No unpublished opinion unless `includeUnpublished`.
- No duplicate opinion on a page.

**Graded where it applies**

- `wantCaseName`: the controlling landmark (e.g. *Celotex*, *Polaroid* in the Second Circuit, *Li v. Yellow Cab* in California) must appear in the top 10. Only set when the scope can contain that court and no date window excludes it (1,362 rows).
- `verifyBooleanText` (every 12th row, 416 rows — these are all `auto` rows; `run-boolean-verify.mjs` adds the matching `keyword` rows): the top 3 opinions' full text is pulled from `/cases/:id/text` and evaluated against the query with [`lib/boolean.mjs`](../../scripts/law-firm/lib/boolean.mjs). `/s` = same sentence or within 60 words, `/p` = same paragraph or within 250 words (opinion text often carries hard line breaks that make real sentence/paragraph boundaries unreliable), `/n` = within n words, `+` and `pre/` ordered, `!` and `*` expand, NOT terms must be absent.

## 2. Good law, state and federal

Built by [`scripts/law-firm/build-goodlaw.mjs`](../../scripts/law-firm/build-goodlaw.mjs). Every row says where its truth comes from:

| Group | Rows | Truth | Expect |
|---|---:|---|---|
| `scotus-overruled` | 81 | independent — written from the reports, with the overruling decision | negative (hard: overruled; soft: overruled in part, abrogated, limited, repudiated) |
| `reversed-below` | 44 | independent — circuit/state decisions the Supreme Court (or the state high court) reversed or vacated | negative |
| `state-overruled` | 8 | independent | negative |
| `scotus-good` | 169 | independent — landmarks still in force | good |
| `state-good` | 22 | independent | good |
| `overruled-100` | 78 | prior bank (`citechecker/overruled-100`) | negative |
| `5300-bad_law` / `5300-good_law` | 55 | prior bank | negative |
| `presumed-good` | 543 | reported state and federal cases with no known negative history | good — a negative flag is queued for review, not scored wrong |

Flow: `POST /citecheck/cite` → candidate `caseId` → `GET /cases/:id/good-law` → `GET /cases/:id/goodlaw-check?limit=10&order=negative`.

A row is perfect when the cite resolves to that case, the status matches, the overruling/reversing decision is named in the treatment evidence (when we know it), and the cite-check status, `/good-law` and `/goodlaw-check` agree.

## 3. Bluebook from slightly-off cites

Three steps: [`build-bluebook-sources.mjs`](../../scripts/law-firm/build-bluebook-sources.mjs) gathers ~1,150 correct citations (curated Supreme Court and state landmarks, the curated rows of the 5,300 bank, and federal circuit/district cases with a Westlaw twin); a clean control lookup records each case's court and year; [`build-bluebook.mjs`](../../scripts/law-firm/build-bluebook.mjs) knocks each source off in one way and records the expected Bluebook form.

Twenty defects, 50 rows each: `reporter_spacing`, `ordinal_form`, `reporter_no_periods`, `reporter_lowercase`, `v_form`, `no_parenthetical`, `year_off_by_one`, `court_missing`, `court_nonbluebook`, `full_date`, `t6_spelled_out`, `full_caption`, `all_caps_name`, `pin_as_first_page`, `punctuation`, `vendor_cite`, `parallel_only`, `government_long_form`, `redundant_court`, `page_typo`.

The expected form is built by [`lib/bluebook.mjs`](../../scripts/law-firm/lib/bluebook.mjs), independent of the system under test: Rule 10.2.1 case names (first party per side, no roles, no "et al.", surnames for individuals, "State"/"United States"), T6 and T10 abbreviations and "&", T1 reporters with Rule 6.1(a) spacing, and the Rule 10.4 parenthetical (court omitted when the reporter names it). The case caption, court and year are taken from the control lookup; the form rules are not.

**Perfect** = `correctedCitation` present; same volume, T1 reporter (exact spacing) and first page; same year; equivalent court (Florida's `Fla. 1st DCA` local form is accepted alongside T1 `Fla. Dist. Ct. App.`; Texas and New York may add district/department); a case name with no Rule 10.2.1/T6/T10 lint issue whose first party on each side matches; verdict in the row's `accept`/`partial` lists.

## 4. Opinion output

[`build-opinions.mjs`](../../scripts/law-firm/build-opinions.mjs) picks 200 opinions the control lookup resolved — 60 Supreme Court, 45 circuit, 30 district/bankruptcy, 40 state high court, 25 state intermediate. [`run-opinions.mjs`](../../scripts/law-firm/run-opinions.mjs) measures (and stores no opinion text):

- the header citation passes the Bluebook lint;
- text: mid-sentence paragraph breaks, HTML/entity leakage, page numbers and running headers, unjoined hyphenation, mojibake, repeated paragraphs or a repeated opinion, star paging for pin cites, truncation;
- PDF: valid, names the case, cite, court and date; covers the whole opinion; LawDiver (not old LawTools) branding; caption not collapsed into a run-on paragraph; no repeated passages;
- `/cases/:id` and `/good-law` agree on cluster id and status.

## Latest run

[`runs/law-firm/2026-10-05/FINDINGS.md`](../../runs/law-firm/2026-10-05/FINDINGS.md) — LawDiver API v1 on 2026-10-05.

## Running

```bash
export LAWDIVER_API_KEY=ld_live_...      # never commit it
node scripts/law-firm/run-search.mjs --run=YYYY-MM-DD
node scripts/law-firm/run-cites.mjs --suite=bluebook-control --run=YYYY-MM-DD
node scripts/law-firm/build-bluebook.mjs --run=YYYY-MM-DD       # only when re-authoring the bank
node scripts/law-firm/run-cites.mjs --suite=bluebook --run=YYYY-MM-DD
node scripts/law-firm/run-cites.mjs --suite=goodlaw --run=YYYY-MM-DD
node scripts/law-firm/run-goodlaw.mjs --run=YYYY-MM-DD
node scripts/law-firm/run-cites.mjs --suite=carried-cites --run=YYYY-MM-DD
node scripts/law-firm/run-opinions.mjs --run=YYYY-MM-DD
node scripts/law-firm/run-boolean-verify.mjs --run=YYYY-MM-DD   # after run-search: full-text check on keyword-mode rows
node scripts/law-firm/grade.mjs --run=YYYY-MM-DD
```

The key allows 60 requests a minute. Every runner shares one limiter per process (`LAWFIRM_RPM`, default 56); to run several suites at once, give each a share and point `LAWFIRM_RPM_FILE` at a file holding that share (it is re-read every 10 s). Runners are resumable — re-run the same command to finish.

Results land in [`runs/law-firm/<date>/`](../../runs/law-firm/): `FINDINGS.md` (what is broken, why, where to fix), `REPORT.md` (headline and general fixes), `problems-*.md` (every imperfect row and what is wrong with it), `graded-*.json`, and the raw responses (`raw/*.jsonl.gz`).
