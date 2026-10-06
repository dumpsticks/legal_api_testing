# Anatomy of a Caselaw API (473 scored) — rows that did not pass (run 2026-10-06-cites)

| Id | family | Input | Verdict | Corrected | Problem |
|---|---|---|---|---|---|
| A019 | jurisdictional_sweep | Ford Motor Co. v. Montana Eighth Judicial Dist., 592 U.S. 351 (SCOTUS 2021) | name_mismatch | Ford Motor Co. v. Mont. Eighth Judicial Dist., 592 U.S. 351 (2021) | should confirm; got name_mismatch |
| A020 | jurisdictional_sweep | Kulko v. Superior Court of Cal., City and County of San Francisco, 436 U.S. 84 (SCOTUS 1978) | name_mismatch | Kulko v. Superior Ct. of Cal., City & Cnty. of San Francisco, 436 U.S. 84 (1978) | should confirm; got name_mismatch |
| A031 | jurisdictional_sweep | Shaffer v. Heitner, 433 U.S. 186 (SCOTUS 1977) | name_mismatch | Shaffer v. Heitner, 433 U.S. 186 (1977) | should confirm; got name_mismatch |
| A068 | jurisdictional_sweep | International Shoe Co. v. Washington, 326 U.S. 310 (SCOTUS 1945) | name_mismatch | Int'l Shoe Co. v. Washington, 326 U.S. 310 (1945) | should confirm; got name_mismatch |
| A082 | jurisdictional_sweep | First Nat. Bank of Ariz. v. Cities Service Co., 391 U.S. 253 (SCOTUS 1968) | name_mismatch | First Nat. Bank of Ariz. v. Cities Serv. Co., 391 U.S. 253 (1968) | should confirm; got name_mismatch |
| A083 | jurisdictional_sweep | Burger King Corp. v. Rudzewicz, 471 U.S. 462 (SCOTUS 1985) | name_mismatch | Burger King Corp. v. Rudzewicz, 471 U.S. 462 (1985) | should confirm; got name_mismatch |
| A104 | jurisdictional_sweep | Walden v. Fiore, 571 U.S. 277 (SCOTUS 2014) | name_mismatch | Walden v. Fiore, 571 U.S. 277 (2014) | should confirm; got name_mismatch |
| A168 | jurisdictional_sweep | Daimler AG v. Bauman, 571 U.S. 117 (SCOTUS 2014) | name_mismatch | Daimler AG v. Bauman, 571 U.S. 117 (2014) | should confirm; got name_mismatch |
| A188 | jurisdictional_sweep | Toure v. Avis Rent A Car Sys., Inc., 774 N.E.2d 1197 (N.Y. App. Div. 2002) | name_mismatch | Toure v. Avis Rent a Car Sys., Inc., 98 N.Y.2d 345 (2002) | should confirm; got name_mismatch |
| A192 | jurisdictional_sweep | World-Wide Volkswagen Corp. v. Woodson, 444 U.S. 286 (SCOTUS 1980) | name_mismatch | World-Wide Volkswagen Corp. v. Woodson, 444 U.S. 286 (1980) | should confirm; got name_mismatch |
| A232 | correct_citation_forms | Barr v. R.T.C., 837 S.W.2d 627, 35 Tex. Sup. Ct. J. 1193 (Tex. 1992) | name_mismatch | Barr v. Resolution Trust Corp. Ex Rel. Sunbelt Fed. Sav., 837 S.W.2d 627 (Tex. 1992) | should confirm; got name_mismatch |
| A294 | bluebook_form_errors | Jolly v. Eli Lilly & Co., 44Cal. 3d 1103 (Cal. 1988) | error |  | timed out (deadline_exceeded) |
| A303 | mangled_citations | King v. Nationwide Insurance, 35 208 (Ohio 1988) | likely_valid |  | should decline; got likely_valid |
| A306 | mangled_citations | Viterbo v. Dow Chemical Co., 826 420 (5th Cir. 1987) | likely_valid |  | should decline; got likely_valid |
| A309 | mangled_citations | Potter v. Firestone Tire & Rubber Co., 6 Cal.4th 96S (Cal. 1993) | error |  | timed out (deadline_exceeded) |
| A310 | mangled_citations | DeLuca v. AccessIT Grp., Inc., 69S F. Supp. 2d S4 (S.D.N.Y. 2010) | error |  | timed out (deadline_exceeded) |
| A325 | mangled_citations | Yanero v. Davis, 65 510 (Ky. 2001) | error |  | timed out (deadline_exceeded) |
| A328 | mangled_citations | White v. Vanderbilt Univ., 21 215 (Tenn. Ct. App. 1999) | error |  | timed out (deadline_exceeded) |
| A335 | mangled_citations | Williams v. New York City Hous. Auth., 6l A.D.3d 62 (N.Y. App. Div. 2009) | error |  | timed out (deadline_exceeded) |
| A346 | mangled_citations | Mobil Oil Corp. v. Ellender, 96B S.W.2d 9l7 (Tex. 1998) | error |  | timed out (deadline_exceeded) |
| A355 | mangled_citations | Residential Funding Corp. v. DeGeorge Fin. Corp., 306 99 (2d Cir. 2002) | error |  | timed out (deadline_exceeded) |
| A418 | overruled_and_questioned_law | Bivens v. Six Unknown Named Agents, 403 U.S. 400 (1971) | likely_valid | Bivens v. Six Unknown Named Agents of Fed. Bureau of Narcotics, 403 U.S. 388 (1971) | negative treatment missing (good-law good) |
| A431 | overruled_and_questioned_law | Williamson County RPC v. Hamilton Bank, 473 U.S. 175 (1985) | not_in_corpus |  | negative treatment missing (good-law none) |
