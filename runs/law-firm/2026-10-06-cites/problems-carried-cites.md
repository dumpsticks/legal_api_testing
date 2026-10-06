# Cite check (carried forward) — per-cite problems

Run `2026-10-06-cites`. 26 of 657 graded rows have at least one problem. Every row below names what is wrong with *that* case.

| Id | Family | Input | Verdict | Output | Problems |
|---|---|---|---|---|---|
| BANK-NY-05 | page_mismatch | People v. Danielson, 9 N.Y.3d 345 (2007) | likely_valid | People v. Danielson, 9 N.Y.3d 342 (2007) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| SEED-TX-M1 | mild_mangle | City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 884 (Tex. 2005) | likely_valid | City of Keller v. Wilson, 168 S.W.3d 802 (Tex. 2005) | **partial_verdict**: likely_valid; key: DECLINE — preferred verdict: page_mismatch |
| BANK-LA-05 | page_mismatch | State Ex Rel. Glover v. State, 660 So. 2d 1192 (1995) | likely_valid | State Ex Rel. Glover v. State, 660 So. 2d 1189 (La. 1995) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| BANK-OK-14 | statute | Okla. Stat. tit. 12, § 95 | not_in_corpus |  | **partial_verdict**: not_in_corpus; key: CONFIRM as valid (or likely_valid) |
| SEED-LA-M1 | mild_mangle | State Ex Rel. Glover v. State, 660 So. 2d 1198 (La. 1995) | likely_valid | State Ex Rel. Glover v. State, 660 So. 2d 1189 (La. 1995) | **partial_verdict**: likely_valid; key: DECLINE — preferred verdict: page_mismatch |
| BANK-VT-06 | page_mismatch | Robertson v. Mylan Laboratories, Inc., 176 Vt. 359 (2004) | not_in_corpus |  | **verdict**: not_in_corpus; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| BANK-IA-05 | page_mismatch | In Re P.L., 778 N.W.2d 36 (2010) | likely_valid | In re P.L., 778 N.W.2d 33 (Iowa 2010) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| BANK-MO-11 | string_cite | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (1993); Marbury v. Quillon, 88888 S.W.2d 9 (1995) | valid | ITT Commercial Fin. Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Mo. 1993) | **corrected_form**: t6_unabbreviated |
| BANK-MO-12 | compound_history | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (1993), aff'd, 999 F.3d 1 (11th Cir. 1996) | valid | ITT Commercial Fin. Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Mo. 1993) | **corrected_form**: t6_unabbreviated |
| TRICK-041 | bluebook_variant | W. Cas. & Sur. Co. v. Brochu, 475 N.E.2d 872 (Ill. 1985) | name_mismatch | W. Cas. & Sur. Co. v. Brochu, 105 Ill. 2d 486 (1985) | **partial_verdict**: name_mismatch; key: CONFIRM as valid (or likely_valid) |
| BANK-TX-06 | page_mismatch | City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 851 (2005) | likely_valid | City of Keller v. Wilson, 168 S.W.3d 802 (Tex. 2005) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| ANAT-A294 | bluebook_variant | Jolly v. Eli Lilly & Co., 44Cal. 3d 1103 (Cal. 1988) | error |  | **verdict**: error; key: OPEN / capability-dependent — preferred when supported: likely_valid |
| BANK-MS-05 | page_mismatch | Bush v. State, 895 So. 2d 839 (2005) | likely_valid | Bush v. State, 895 So. 2d 836 (Miss. 2005) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| SEED-IA-M1 | mild_mangle | In Re P.L., 778 N.W.2d 44 (Iowa 2010) | likely_valid | In re P.L., 778 N.W.2d 33 (Iowa 2010) | **partial_verdict**: likely_valid; key: DECLINE — preferred verdict: page_mismatch |
| BANK-NY-13 | statute | N.Y. C.P.L.R. 3211 | unverified |  | **partial_verdict**: unverified; key: CONFIRM as valid (or likely_valid) |
| BANK-IL-06 | page_mismatch | People v. Enoch, 122 Ill. 2d 179 (1988) | likely_valid | People v. Enoch, 122 Ill. 2d 176 (1988) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| BANK-PA-14 | statute | 42 Pa. Cons. Stat. § 5524 | not_in_corpus | Pa. Cons. Stat. § 5524 | **partial_verdict**: not_in_corpus; key: CONFIRM as valid (or likely_valid) |
| BANK-FL-05 | page_mismatch | State v. DiGuilio, 491 So. 2d 1132 (1986) | likely_valid | State v. DiGuilio, 491 So. 2d 1129 (Fla. 1986) | **partial_verdict**: likely_valid; key: OPEN / capability-dependent — preferred when supported: page_mismatch |
| SEED-MO-V1 | bluebook_variant | ITT Commercial Finance Corp. vs. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Mo. 1993) | valid | ITT Commercial Fin. Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Mo. 1993) | **corrected_form**: t6_unabbreviated |
| BANK-ME-14 | statute | Me. Rev. Stat. Ann. tit. 14, § 752 | unverified |  | **partial_verdict**: unverified; key: CONFIRM as valid (or likely_valid) |
| BANK-IL-14 | statute | 735 Ill. Comp. Stat. 5/2-615 | not_in_corpus |  | **partial_verdict**: not_in_corpus; key: CONFIRM as valid (or likely_valid) |
| BANK-FL-03 | secondary_form | State v. DiGuilio, 11 Fla. L. Weekly 339 | name_mismatch | Restaurant v. State, Dep't of Bus. Regulation, Div. of Alcoholic Beverages & Tobacco, 483 So. 2d 463 (Fla. Dist. Ct. App. 1986) | **verdict**: name_mismatch; key: CONFIRM as valid (or likely_valid)<br>**corrected_form**: t6_unabbreviated |
| SEED-MS-M1 | mild_mangle | Bush v. State, 895 So. 2d 863 (Miss. 2005) | likely_valid | Bush v. State, 895 So. 2d 836 (Miss. 2005) | **partial_verdict**: likely_valid; key: DECLINE — preferred verdict: page_mismatch |
| TRICK-004 | bluebook_variant | Harner v. Soc. Sec. Admin., Comm'r, 38 F.4th 892 (11th Cir. 2022) | valid | Harner v. Soc. Sec. Administration, Commissioner, 38 F.4th 892 (11th Cir. 2022) | **corrected_form**: t6_unabbreviated |
| BANK-MO-05 | page_mismatch | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 374 (1993) | page_mismatch | ITT Commercial Fin. Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Mo. 1993) | **corrected_form**: t6_unabbreviated |
| BANK-MO-03 | secondary_form | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 1993 Mo. LEXIS 45 | valid | ITT Commercial Fin. Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Mo. 1993) | **corrected_form**: t6_unabbreviated |
