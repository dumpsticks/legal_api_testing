# Legal API testing

Input datasets and answer keys for testing a legal research API, or any product that checks citations, searches case law, or retrieves a case by name or citation.

These sets were already used against [LawDiver](https://lawdiver.com). They are copied here so a test harness can live on its own. The originals remain in [`dumpsticks/casediver`](https://github.com/dumpsticks/casediver).

Every suite splits **inputs** (what you send) from **answer keys** (what a correct product returns). Do not send the answer-key files to the system under test.

| Suite | What you send | Cases | Answer key |
|---|---|---:|---|
| [Cite checker](datasets/citechecker/README.md) | A citation string | 5,300 + 1,006 + 100 | Verdict, and why |
| [Search](datasets/search/README.md) | A research query | 3,000 + 77 graded | Landmark case, when one exists |
| [Case-name retrieval](datasets/case-name-retrieval/README.md) | A case caption | 1,461 + 6 landmarks | The reporter locator of that case |
| [Citation retrieval](datasets/citation-retrieval/README.md) | A citation string | 5,300 + 8 landmarks | Hit, corrected hit, or no hit |
| [CLR bulk repair](datasets/clr-bulk-repair/README.md) | A cite, a case name, or a research query | 16 in each list | The reporter cite the bulk file omitted |

Counts and family totals are in [`datasets/manifest.json`](datasets/manifest.json).

## How to send a row

The datasets are product-agnostic. LawDiver's public API is one concrete mapping. Swap the URL if you are testing something else. The field you send is always `query` (or `citation` for cite check).

**Cite check** — `datasets/citechecker/5300/inputs.json`

```http
POST /api/v1/citecheck/cite
Content-Type: application/json

{ "citations": ["Gray v. Morley, 460 Mich. 738 (Mich. 1999)"] }
```

Score the returned verdict against `accept` / `partial` / `reject` on the matching `id` in `answer-key.json`.

**Search** — `datasets/search/phrase-1000/queries.json` (same shape for `realworld-1000` and `everyman-1000`)

```http
POST /api/v1/search
Content-Type: application/json

{
  "query": "summary judgment genuine dispute of material fact",
  "searchType": "auto",
  "limit": 10,
  "jurisdiction": { "type": "all_federal" }
}
```

**Case name or citation retrieval** — `datasets/case-name-retrieval/inputs.json` or `datasets/citation-retrieval/inputs.json`

```http
POST /api/v1/cases/retrieve
Content-Type: application/json

{ "query": "Gray v. Morley" }
```

A hit should name that case and carry the locator in the answer key (`460 Mich. 738`). A did-you-mean list is a hit only when the expected case is on it. A confident hit on a different case is a miss.

## What each suite is for

They are not copies of the same test.

- **Cite checker** asks "is this citation accurate, and what is wrong with it?" A perfect Bluebook cite, a real cite with a typo, a real locator wearing the wrong caption, an overruled case, and a fabricated case are different questions. Confirming an overruled case without saying it was overruled is a failure even though the locator is real.
- **Search** asks "given a legal question, did the right cases come back?" The three banks of 1,000 use the same jurisdiction mix and change only the wording: clean doctrine, boolean connectors, lay questions, and typos.
- **Case-name retrieval** asks "which opinion is *Gray v. Morley*?" The query is a caption, not a research topic.
- **Citation retrieval** asks "which opinion is *460 Mich. 738*?" The query is a reporter cite. Many rows are the same strings as the cite checker, graded on whether the case comes back, not on the cite-check verdict vocabulary.
- **CLR bulk repair** asks "did this vendor repair the CourtListener bulk download, or serve it raw?" Each row is a cite LawDiver added because it was missing or mislabeled in that dump. Finding the opinion under a docket, a party name, or a cite the dump already had is a fail. The repaired reporter cite has to be on the case.

## Provenance

Packaged 2026-09-28 from `dumpsticks/casediver`. Rebuild the derived views with:

```powershell
cd ..\casediver\packages\server
npx tsx ..\..\..\legal_api_testing\scripts\package-datasets.mjs
```

That script only copies and reshapes existing banks. It does not invent new cases.
