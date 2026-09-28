# Case search

Send a research question. The product should return opinions that answer it. These banks never ask for a reporter cite or an `X v. Y` caption lookup. Those are the retrieval suites.

Three banks of 1,000 share one jurisdiction mix (federal, Supreme Court, each circuit, and every state plus its federal courts). The only thing that changes is how the question is worded, so a gap between banks is a wording failure rather than a scope failure.

| Bank | Queries | Graded rows | What the wording is |
|---|---:|---:|---|
| [`phrase-1000`](phrase-1000/queries.json) | 1,000 | [74](phrase-1000/answer-key.json) | Clean doctrine phrases, the way a treatise index would write them. |
| [`realworld-1000`](realworld-1000/queries.json) | 1,000 | [212](realworld-1000/answer-key.json) | Boolean connectors, practitioner questions, lay questions, and realistic typos. |
| [`everyman-1000`](everyman-1000/queries.json) | 1,000 | none | Further down-market. No query string overlaps the first two banks. |
| [`golden-set`](golden-set/queries.json) | 77 | all 77 | Small graded ranking set. Includes cites and captions on purpose. |
| [`held-out-realworld`](held-out-realworld/queries.json) | 200 | none | Frozen slice of real-world queries. Do not tune a ranker on these. |

## Request

```http
POST /api/v1/search
{
  "query": "summary judgment genuine dispute of material fact",
  "searchType": "auto",
  "limit": 10,
  "jurisdiction": { "type": "all_federal" }
}
```

Copy `query` and `jurisdiction` off the row. Leave `searchType` at `auto` unless you are deliberately testing keyword versus semantic. `limit` 10 matches the runs these banks were built for.

`jurisdiction.type` is one of:

| Type | Meaning |
|---|---|
| `all_federal` | Every federal court. |
| `us_supreme_court` | Supreme Court only. |
| `federal_circuit` | One circuit. The row also has `circuit`. |
| `one_state_plus_federal` | One state and the federal courts that sit on it. The row also has `state`. |

## Phrase bank — clean doctrine

[`phrase-1000/queries.json`](phrase-1000/queries.json). No `style` field. Eighteen subject categories, heaviest on civil procedure, criminal procedure, torts, contracts, real estate, employment, family, and constitutional law.

This is the best-case input. A product that fails here is failing on ranking or coverage, not on parsing.

### Answer key

[`phrase-1000/answer-key.json`](phrase-1000/answer-key.json) lists the 74 queries where one case, or a small set of co-equal cases, is the answer a competent lawyer expects. Example: `summary judgment genuine dispute of material fact` expects a caption matching `celotex|liberty lobby|matsushita`.

`wantCaseName` is a regular expression over the returned case name, with `wantFlags` (usually `i`). A pass is that pattern appearing in the top 10. Rank 1 and mean reciprocal rank are the quality measures. Being anywhere on the page is recall.

Do not grade a row against the wrong scope:

- `federalOnly` — skip when the request is a single state. *Celotex* will not appear in a Kansas-only search, and that is correct.
- `stateLandmarksOnly` — skip when the scope is federal-only. A California landmark cannot come back from an all-federal page.
- `homeStates` — skip when the scope is a different single state. Premises-liability duty reform is *Rowland* (California) and *Basso* (New York). Asking Montana for *Greenman* measures the grader.

Broad state-law topics (adverse possession, promissory estoppel) are absent from the key. There is no one right case nationwide.

## Real-world bank — four input styles

[`realworld-1000/queries.json`](realworld-1000/queries.json). Same jurisdiction slots as the phrase bank. Each row has `style`:

| Style | Rows | What it is | What it breaks when it fails |
|---|---:|---|---|
| `boolean` | 286 | Westlaw and Lexis muscle memory: quoted phrases, `AND` / `OR` / `NOT`, proximity `/s`, `/p`, `w/n`, and `#` unstemmed. | The lexer or boolean parser. The phrase bank never touches those. |
| `practitioner` | 181 | A correctly spelled research question the way an associate dictates it. | Natural-language ranking, not parsing. |
| `layperson` | 337 | What a non-lawyer types. High-volume questions (probate, minimum wage, alimony, eviction, DUI, debt). | Vocabulary gap between lay words and judicial words. |
| `misspelled` | 196 | The same intent with realistic typos (`statue of limitations`, `subpeona`, `promisory estopel`). `intended` is the corrected spelling. | Spell correction. Some typos are in a normal legal dictionary. Many are there because they miss it. |

### Answer key

[`realworld-1000/answer-key.json`](realworld-1000/answer-key.json) has 212 keyed queries. The expected case is the same case the clean phrase should find. `"summary judgment" /s "genuine dispute" AND "material fact"` still wants *Celotex*. Score by style. If boolean misses a landmark that the practitioner wording finds, the defect is the connector parser. If only the misspelled rows miss it, the defect is correction.

Most lay questions ("how much is my case worth") have no landmark and are not in the key. Roughly a third of this bank is gradable. That is deliberate. Grade the rest by hand or with an LLM on relevance, emptiness, and whether the court matches the requested jurisdiction. Do not invent a single required case for them.

## Everyman bank — no single right case

[`everyman-1000/queries.json`](everyman-1000/queries.json). Zero query-string overlap with the first two banks (compared case- and punctuation-insensitively when the bank was built).

| Style | Rows | How it differs from real-world |
|---|---:|---|
| `layperson` | 517 | Run-on, conversational. "my ex wont let me see my kids what are my rights." Heavy on protective orders, paternity, adoption, probation, bail, drug possession, guns, DUI, hit-and-run, rideshare, eviction, squatters, and small estates. |
| `misspelled` | 152 | Typos that miss a normal dictionary (`restraning order`, `dui chekpoints`). `intended` holds the correction. |
| `boolean` | 176 | New connector strings. None repeat the real-world catalog. |
| `practitioner` | 155 | Full issue statements, the way a memo frames the question, longer than the real-world practitioner lines. |

There is no answer-key file. Everyday questions do not have one controlling authority. Useful automatic checks:

- Empty result rate, by style and by jurisdiction.
- Transport and timeout errors, excluded from quality.
- Whether a state-scoped query stays inside that state plus its federal courts.
- For `misspelled`, whether the top results match `intended` better than the typo.

## Golden set — ranking labels

[`golden-set/queries.json`](golden-set/queries.json). 77 queries. Every row has `kind`, `scope`, and `labels`. A label's `grade` runs from 0 to 3. Grade 3 means that reporter cite must appear on page 1.

| Kind | Rows | What it is |
|---|---:|---|
| `citation` | 8 | A reporter cite (`384 U.S. 436`). Also copied into [citation retrieval](../citation-retrieval/README.md). |
| `name` | 6 | A lowercase caption (`miranda v. arizona`). Also copied into [case-name retrieval](../case-name-retrieval/README.md). |
| `boolean` | 12 | Connector syntax, with a scope (sometimes one state). |
| `phrase` | 5 | Short doctrine phrases. |
| `nl` | 36 | Natural-language questions, national and state-scoped. |
| `landmark_issue` | 10 | Issue statements whose landmark is not in dispute. |

Resolve `labels[].citation` against your own corpus at grade time. The key identifies the opinion by reporter cite, not by an internal id, so it survives a different database.

## Held-out real-world slice

[`held-out-realworld/queries.json`](held-out-realworld/queries.json). 200 queries frozen 2026-09-27 from the real-world bank (55 boolean, 45 misspelled, 74 layperson, 26 practitioner). Report this slice. Do not use it to author ranking overrides or retune weights. Tune against the golden set, then look here to see whether you overfit.
