# Search — per-query problems

Run `2026-10-05-r2`. 1510 of 5286 graded rows have at least one problem. Every row below names what is wrong with *that* case.

| Id | Scope | Type | Query | Problems |
|---|---|---|---|---|
| LF-BS-0003 | one_state MD 2020-01-01– | keyword | homestead /p devise & "surviving spouse" | **empty**: no results |
| LF-BS-0011 | one_state_plus_federal CA | keyword | ("second amendment" OR "keep and bear arms") /s "historical tradition" | **landmark_missing**: wanted /bruen\|heller\|mcdonald\|rahimi/ in top 10 |
| LF-BS-0013 | federal_circuit 1 1990-01-01–2010-12-31 | keyword | apprendi /s jury | **after_dateTo**: #10 2013-06-17 > 2010-12-31 |
| LF-BS-0019 | federal_circuit 4 | keyword | (retaliation OR "protected activity") /s "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0024 | one_state_plus_federal NY | auto | (brady OR "exculpatory evidence") AND suppress! NOT civil | **boolean_not_violated**: Strickler v. Greene — contains excluded term(s): civil |
| LF-BS-0028 | federal_circuit 9 | auto | ("likelihood of confusion" OR "sleekcraft factors") /s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-0031 | federal_circuit 5 | keyword | "economic substance" & "business purpose" % criminal | **empty**: no results<br>**landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-0035 | one_state MT 2000-01-01–2009-12-31 | keyword | religio! /25 burden | **duplicate_hit**: #3 Hofer v. DPHHS 2005 MT 302 |
| LF-BS-0036 | us_supreme_court | auto | "actual malice" w/s "public figure" | **boolean_unsatisfied**: New York Times Co. v. Sullivan — required terms/proximity not met in full text |
| LF-BS-0047 | one_state_plus_federal CA 2020-01-01– | keyword | "dog bite" +s "strict liability" | **empty**: no results |
| LF-BS-0048 | one_state NY 2000-01-01–2009-12-31 | auto | "equitable distribution" AND "nonmarital" AND NOT criminal | **boolean_unsatisfied**: Cassara v. Cassara — required terms/proximity not met in full text |
| LF-BS-0049 | federal_circuit 5 | keyword | ("mcdonnell douglas" OR "burden-shifting") /s pretext | **landmark_missing**: wanted /mcdonnell douglas\|burdine\|st\. mary\|reeves v\. sanderson/ in top 10<br>**boolean_unsatisfied**: Medina v. Univ of Mississippi — required terms/proximity not met in full text |
| LF-BS-0054 | federal_circuit 4 | auto | "automatic stay" w/s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-0055 | one_state_plus_federal OH | keyword | jeopard! /25 "multiple punishments" | **landmark_missing**: wanted /blockburger\|united states v\. dixon\|gamble\|brown v\. ohio/ in top 10 |
| LF-BS-0057 | one_state DE | keyword | "business judgment rule" & "duty of care" % criminal | **empty**: no results<br>**landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-0060 | one_state_plus_federal FL –1999-12-31 | auto | "vacate the arbitration award" & "exceeded their powers" % criminal | **boolean_unsatisfied**: At&T Technologies, Inc. v. Workers — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Seifert v. US Home Corp. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Prima Paint Corp. v. Flood & Conklin Mfg. Co. — required terms/proximity not met in full text |
| LF-BS-0071 | one_state OR –1999-12-31 | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results |
| LF-BS-0072 | one_state_plus_federal AZ | auto | ("ineffective assistance of counsel" OR "deficient performance") AND "reasonable probability" NOT civil | **boolean_not_violated**: Strickland v. Washington — contains excluded term(s): civil |
| LF-BS-0073 | us_supreme_court –1999-12-31 | keyword | "personal jurisdiction" AND "minimum contacts" AND NOT divorce | **boolean_unsatisfied**: International Shoe Co. v. Washington — required terms/proximity not met in full text |
| LF-BS-0079 | federal_district FL 2000-01-01–2009-12-31 | keyword | "excited utterance" w/p hearsay and "startling event" | **empty**: no results |
| LF-BS-0083 | one_state_plus_federal ND | keyword | "cell-site location" /s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-0089 | one_state_plus_federal NC | keyword | "quiet title" & deed % criminal | **empty**: no results |
| LF-BS-0096 | one_state WY | auto | "market share liability" w/p des and manufacturer | **boolean_unsatisfied**: McLaughlin v. Michelin Tire Corp. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Schneider National, Inc. v. Holland Hitch Co. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Chrysler Corp. v. Todorovich — required terms/proximity not met in full text |
| LF-BS-0097 | federal_circuit dc | keyword | ("respondeat superior" OR "vicarious liability") AND employer NOT patent | **boolean_unsatisfied**: Jett v. Dallas Independent School District — required terms/proximity not met in full text |
| LF-BS-0101 | one_state_plus_federal FL | keyword | consen! /p "totality of the circumstances" | **landmark_missing**: wanted /schneckloth\|bumper\|georgia v\. randolph\|illinois v\. rodriguez/ in top 10 |
| LF-BS-0105 | federal_circuit dc 2000-01-01–2009-12-31 | keyword | plausib! /25 "factual allegations" | **empty**: no results |
| LF-BS-0108 | all_states | auto | "social host" w/p intoxicat! and "guest" | **landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-0119 | one_state MT | keyword | "forum non conveniens" w/p "private interest" and "public interest" | **empty**: no results |
| LF-BS-0120 | us_supreme_court 1990-01-01–2010-12-31 | auto | "fair use" +s copyright | **boolean_unsatisfied**: New York Times Co. v. Tasini — required terms/proximity not met in full text |
| LF-BS-0133 | one_state_plus_federal CA | keyword | "age discrimination" +s "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10<br>**boolean_unsatisfied**: Browning v. United States — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Cambra v. Exploration — required terms/proximity not met in full text<br>**boolean_unsatisfied**: 47 Fair empl.prac.cas. 865, 43 Empl. Prac. Dec. P 37,062, 23 — required terms/proximity not met in full text |
| LF-BS-0141 | one_state DE | keyword | "business judgment rule" /10 "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-0144 | federal_circuit 2 | auto | "free exercise" & "neutral and generally applicable" % contract | **landmark_missing**: wanted /employment div\|smith\|lukumi\|fulton\|kennedy v\. bremerton\|tandon\|masterpiece\|hobby lobby/ in top 10<br>**boolean_not_violated**: Nicosia v. Amazon.com, Inc. — contains excluded term(s): contract<br>**boolean_not_violated**: Sveen v. Melin — contains excluded term(s): contract<br>**boolean_not_violated**: Meyer v. Uber Technologies, Inc. — contains excluded term(s): contract |
| LF-BS-0146 | federal_circuit 3 | auto | nonmov! /p "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-0148 | all_states_and_federal 2020-01-01– | auto | "force majeure" /10 frustration | **result_missing_court**: #2 CEC Entertainment, Inc. (no cite) |
| LF-BS-0151 | one_state VA 1990-01-01–2010-12-31 | keyword | ("intentional infliction of emotional distress" OR "outrageous conduct") /s "extreme and outrageous" | **empty**: no results |
| LF-BS-0155 | one_state MA | keyword | intoxica! /25 "driving under the influence" | **empty**: no results |
| LF-BS-0156 | one_state NJ | auto | "attorney-client privilege" & waiv! % immigration | **boolean_unsatisfied**: In re Kozlov — required terms/proximity not met in full text |
| LF-BS-0159 | all_federal | keyword | "qualified immunity" & "constitutional right" % contract | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /harlow\|pearson v\. callahan\|al-kidd\|saucier\|anderson v\. creighton\|kisela\|mullenix\|district of columbia v\. wesby/ in top 10 |
| LF-BS-0170 | all_states_and_federal | auto | "diversity jurisdiction" /10 "amount in controversy" | **result_missing_court**: #2 Crawford v. Ford Motor Company (no cite)<br>**landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-0171 | us_supreme_court | keyword | obvious! /25 "ordinary skill" | **empty**: no results<br>**landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-0180 | all_states –1999-12-31 | auto | "open and obvious" w/15 (invitee or "duty to warn") | **boolean_unsatisfied**: Rowland v. Christian — required terms/proximity not met in full text |
| LF-BS-0191 | one_state OH | keyword | interfer! /25 justif! | **empty**: no results |
| LF-BS-0192 | federal_district TX 2000-01-01–2009-12-31 | auto | retaliation w/15 ("materially adverse" or "causal connection") | **boolean_unsatisfied**: Miller v. Wachovia Bank, N.A. — required terms/proximity not met in full text |
| LF-BS-0193 | one_state AK 2000-01-01–2009-12-31 | keyword | foreclos! /25 "holder of the note" | **empty**: no results |
| LF-BS-0194 | one_state_plus_federal FL 1990-01-01–2010-12-31 | auto | "confrontation clause" /p testimonial & cross-examin! | **after_dateTo**: #1 2011-02-28 > 2010-12-31 |
| LF-BS-0204 | federal_circuit 1 | auto | retaliation w/15 ("materially adverse" or "causal connection") | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0207 | us_supreme_court | keyword | "claim construction" /p specification & "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-0209 | federal_circuit 6 | keyword | "age discrimination" & "but-for" % criminal | **empty**: no results<br>**landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-0213 | all_states_and_federal | keyword | "malicious prosecution" AND "probable cause" AND NOT contract | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-0215 | federal_circuit 2 –1999-12-31 | keyword | "mcdonnell douglas" & pretext % criminal | **empty**: no results |
| LF-BS-0217 | all_federal –1999-12-31 | keyword | "vacate the arbitration award" /p "exceeded their powers" & "evident partiality" | **boolean_unsatisfied**: Globe Transport & Trading Ltd. v. Guthrie Latex, Inc. — required terms/proximity not met in full text |
| LF-BS-0223 | all_states_and_federal | keyword | "proportional to the needs of the case" & discovery % habeas | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-0228 | one_state CA | auto | "bad faith" /s insurer | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10 |
| LF-BS-0229 | one_state MI 2000-01-01–2009-12-31 | keyword | "transitory foreign substance" /s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-0230 | federal_circuit dc | auto | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-0231 | all_federal | keyword | condemn! /p "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-0233 | all_federal | keyword | "cell-site location" +s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-0237 | all_federal | keyword | "prior bad acts" w/p "other crimes" and propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-0240 | all_states | auto | "duty to warn" /p psychotherapist & "identifiable victim" | **landmark_missing**: wanted /tarasoff/ in top 10<br>**boolean_unsatisfied**: Thompson v. County of Alameda — required terms/proximity not met in full text |
| LF-BS-0241 | us_supreme_court | keyword | "ineffective assistance of counsel" & prejudice % civil | **empty**: no results<br>**landmark_missing**: wanted /strickland\|hill v\. lockhart\|padilla\|lafler\|missouri v\. frye\|harrington v\. richter/ in top 10 |
| LF-BS-0256 | all_federal | auto | erisa w/15 ("abuse of discretion" or "arbitrary and capricious") | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-0259 | federal_district NY | keyword | "preferential transfer" +s "ordinary course" | **empty**: no results |
| LF-BS-0264 | one_state WA | auto | relocat! /25 "best interests of the child" | **boolean_unsatisfied**: In re Dependency of K.W. — required terms/proximity not met in full text |
| LF-BS-0271 | one_state CA 2000-01-01–2009-12-31 | keyword | "market share liability" +s des | **empty**: no results |
| LF-BS-0273 | all_states | keyword | invitee +s trespasser | **landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-0275 | us_supreme_court 2020-01-01– | keyword | ("collateral estoppel" OR "issue preclusion") AND "full and fair opportunity" NOT patent | **empty**: no results |
| LF-BS-0276 | us_supreme_court | auto | "loss causation" /p "inflated price" & "economic loss" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10<br>**boolean_unsatisfied**: Leegin Creative Leather Products, Inc. v. PSKS, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Matsushita Electric Industrial Co., Ltd. v. Zenith Radio Cor — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Hanover Shoe, Inc. v. United Shoe MacHinery Corp. — required terms/proximity not met in full text |
| LF-BS-0283 | federal_district CA | keyword | "res judicata" & "final judgment" % criminal | **empty**: no results |
| LF-BS-0287 | one_state OH 2020-01-01– | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-0290 | federal_circuit 9 | auto | "likelihood of confusion" /s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-0295 | one_state MA | keyword | "promissory estoppel" w/p "clear and definite promise" and reliance | **empty**: no results |
| LF-BS-0300 | federal_district NH | auto | "fair use" w/p copyright and "market harm" | **boolean_unsatisfied**: InSync Training, LLC v. American Society for Training and De — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Coach, Inc. v. Sapatis — required terms/proximity not met in full text<br>**boolean_unsatisfied**: D’Pergo Custom Guitars, Inc v. P Sweetwater Sound, Inc. — required terms/proximity not met in full text |
| LF-BS-0301 | all_states_and_federal | keyword | "reasonable suspicion" +s frisk | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-0303 | federal_district AL | keyword | "economic substance" /s "business purpose" | **empty**: no results |
| LF-BS-0306 | all_federal | auto | "arbitrary and capricious" w/15 (agency or "administrative record") | **landmark_missing**: wanted /state farm\|motor vehicle mfrs\|overton park\|dhs v\. regents\|fcc v\. fox\|encino/ in top 10 |
| LF-BS-0312 | one_state TX | auto | capaci! /25 "natural objects of his bounty" | **boolean_unsatisfied**: Diaz, Jimmy — required terms/proximity not met in full text |
| LF-BS-0313 | one_state NJ 1990-01-01–2010-12-31 | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-0315 | all_federal | keyword | cramdown +s "absolute priority rule" | **landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-0319 | one_state TX 2020-01-01– | keyword | "preliminary injunction" w/p "irreparable harm" and "likelihood of success" | **empty**: no results |
| LF-BS-0322 | one_state CA | auto | "social host" +s intoxicat! | **empty**: no results |
| LF-BS-0324 | one_state MN 2020-01-01– | auto | "restrictive covenant" w/15 ("homeowners association" or enforc!) | **empty**: no results |
| LF-BS-0339 | federal_district ID | keyword | "second amendment" & "historical tradition" % contract | **empty**: no results |
| LF-BS-0347 | one_state_plus_federal MO | keyword | ("prior bad acts" OR "404(b)") /s "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-0350 | all_states_and_federal | auto | "informed consent" /s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-0359 | one_state OH | keyword | "creditor's claim" & "personal representative" % criminal | **empty**: no results |
| LF-BS-0364 | one_state VT | auto | "social host" /10 intoxicat! | **empty**: no results |
| LF-BS-0368 | one_state LA | auto | liquidat! /p penalty | **empty**: no results |
| LF-BS-0372 | one_state_plus_federal KY | auto | "malicious prosecution" w/s "probable cause" | **boolean_unsatisfied**: Illinois v. Gates — required terms/proximity not met in full text |
| LF-BS-0373 | one_state_plus_federal CO 1990-01-01–2010-12-31 | keyword | "underinsured motorist" AND stacking AND policy | **boolean_unsatisfied**: Pacheco v. Shelter Mutual Insurance — required terms/proximity not met in full text |
| LF-BS-0374 | federal_circuit 9 | auto | "likelihood of confusion" /s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-0375 | one_state_plus_federal RI 2020-01-01– | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-0376 | one_state_plus_federal CA | auto | ("informed consent" OR "lack of informed consent") /s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-0379 | one_state FL | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-0381 | one_state CA | keyword | "duty to warn" AND psychotherapist AND "identifiable victim" | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-0389 | one_state_plus_federal IL | keyword | "trade secret" & "reasonable measures" % criminal | **empty**: no results |
| LF-BS-0391 | one_state_plus_federal GA 2000-01-01–2009-12-31 | keyword | "dog bite" w/s "strict liability" | **empty**: no results |
| LF-BS-0397 | one_state WV | keyword | "loss of consortium" w/p spouse and derivative | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results |
| LF-BS-0403 | one_state_plus_federal MS | keyword | "fair labor standards act" w/15 (exempt! or "regular rate") | **landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-0405 | all_federal | keyword | nondischargeab! /p "false pretenses" & debtor | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-0407 | all_federal | keyword | "motion to compel arbitration" +s unconscionab! | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-0414 | federal_circuit 3 | auto | "likelihood of confusion" AND trademark AND NOT criminal | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-0417 | one_state_plus_federal PA 2020-01-01– | keyword | insur! /p insurer | **empty**: no results |
| LF-BS-0419 | one_state MD 1990-01-01–2010-12-31 | keyword | "general jurisdiction" w/s "at home" | **empty**: no results |
| LF-BS-0420 | one_state_plus_federal TX | auto | "equitable distribution" w/s "nonmarital" | **boolean_unsatisfied**: Bradshaw v. Bradshaw — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Stafford v. Stafford — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Moroch v. Collins — required terms/proximity not met in full text |
| LF-BS-0432 | all_federal | auto | "qualified immunity" AND "constitutional right" AND NOT contract | **boolean_not_violated**: Siegert v. Gilley — contains excluded term(s): contract |
| LF-BS-0433 | federal_district ID | keyword | "diversity jurisdiction" /10 "amount in controversy" | **boolean_unsatisfied**: Self Storage Advisors, LLC v. SE Boise Boat — required terms/proximity not met in full text |
| LF-BS-0436 | one_state AZ | auto | ("liquidated damages" OR "liquidated damages clause") AND "reasonable forecast" NOT criminal | **duplicate_hit**: #5 MECHANICAL AIR ENGINEER. v. Totem Const. 801 P.2d 426 |
| LF-BS-0439 | one_state NY 2023-01-01– | keyword | "forum non conveniens" & "private interest" % arbitration | **empty**: no results |
| LF-BS-0440 | all_federal | auto | estop! /25 "full and fair opportunity" | **landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-0443 | one_state AR 2023-01-01– | keyword | "pierce the corporate veil" AND undercapitaliz! AND "corporate form" | **empty**: no results |
| LF-BS-0444 | one_state MT | auto | "second amendment" & "historical tradition" % contract | **boolean_unsatisfied**: State v. Fadness — required terms/proximity not met in full text |
| LF-BS-0445 | one_state PA | keyword | "force majeure" +s frustration | **empty**: no results |
| LF-BS-0447 | one_state CA | keyword | "market share liability" /10 des | **landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-0449 | federal_circuit 7 | keyword | scienter w/p "rule 10b-5" and pslra | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0450 | all_states_and_federal | auto | "automatic stay" /p "section 362" & debtor | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-0452 | all_states_and_federal | auto | disclos! /25 physician | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-0455 | all_states_and_federal | keyword | abstention +s "pending state" | **result_missing_court**: #6 Lowe v. City of Brookfield, Joshua Schaber, Brandon Schulz,  (no cite)<br>**landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-0456 | one_state WV | auto | ("rule 11" OR "frivolous") AND "reasonable inquiry" NOT habeas | **boolean_unsatisfied**: Committee on Legal Ethics of the West Virginia State Bar v.  — required terms/proximity not met in full text |
| LF-BS-0457 | federal_circuit 11 | keyword | monell +s "policy or custom" | **landmark_missing**: wanted /monell\|city of canton\|connick\|pembaur\|bd\. of cnty\|board of county/ in top 10 |
| LF-BS-0458 | one_state_plus_federal WI | auto | "bad faith" AND insurer AND "failure to settle" | **duplicate_hit**: #9 TRANSPORT v. Liberty Mut. Ins. Co. 2010 WI 49 |
| LF-BS-0462 | all_states_and_federal | auto | "intentional infliction of emotional distress" w/15 ("extreme and outrageous" or "severe emotional distress") | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-0468 | one_state_plus_federal NJ 2020-01-01– | auto | "free exercise" +s "neutral and generally applicable" | **boolean_unsatisfied**: United States v. Sineneng-Smith — required terms/proximity not met in full text |
| LF-BS-0473 | one_state_plus_federal MN | keyword | "reasonable accommodation" /s "interactive process" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-0475 | one_state WV | keyword | guardianship w/p ward and "least restrictive" | **empty**: no results |
| LF-BS-0477 | federal_district NJ 1990-01-01–2010-12-31 | keyword | obviousness & "prior art" % criminal | **empty**: no results |
| LF-BS-0480 | one_state DC | auto | homestead AND devise AND "surviving spouse" | **boolean_unsatisfied**: Murphy v. McCloud — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Sarbacher v. McNamara — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Rockler v. Sevareid — required terms/proximity not met in full text |
| LF-BS-0482 | all_federal | auto | nondischargeab! AND "false pretenses" AND debtor | **landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-0492 | one_state_plus_federal KY –1999-12-31 | auto | ("reasonable accommodation" OR "undue hardship") /s "interactive process" | **boolean_unsatisfied**: Trans World Airlines, Inc. v. Hardison — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Smith v. Publishing — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Cehrs v. Northeast Ohio Alzheimer's Research Center and Wind — required terms/proximity not met in full text |
| LF-BS-0495 | one_state NH –1999-12-31 | keyword | "proportional to the needs of the case" +s discovery | **empty**: no results |
| LF-BS-0497 | one_state_plus_federal NY 2015-01-01– | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-0499 | federal_circuit 6 | keyword | "motion to dismiss" w/p plausib! and "factual allegations" | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-0503 | federal_circuit 3 2023-01-01– | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-0504 | federal_circuit 7 2000-01-01–2009-12-31 | auto | substan! /25 commissioner | **boolean_unsatisfied**: Skarbek, Norbert v. Barnhart, Jo Anne — required terms/proximity not met in full text |
| LF-BS-0506 | federal_circuit federal 2015-01-01– | auto | municipal! /25 "deliberate indifference" | **empty**: no results |
| LF-BS-0510 | one_state MI | auto | ("wrongful death" OR "survival action") /s damages | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}] |
| LF-BS-0511 | all_states_and_federal | keyword | "crime involving moral turpitude" AND "categorical approach" AND NOT contract | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-0516 | one_state IL | auto | homestead AND devise AND NOT criminal | **boolean_unsatisfied**: First National Bank & Trust Co. v. Sandifer — required terms/proximity not met in full text |
| LF-BS-0517 | one_state NJ 2000-01-01–2009-12-31 | keyword | "testamentary capacity" +s testator | **empty**: no results |
| LF-BS-0519 | federal_district DC 2023-01-01– | keyword | "trade secret" /s "reasonable measures" | **empty**: no results |
| LF-BS-0522 | federal_circuit 10 –1999-12-31 | auto | "age discrimination" w/s "but-for" | **duplicate_hit**: #10 62 Fair empl.prac.cas. 1289, 62 Empl. Prac. Dec. P 42,536 He 3 F.3d 1419 |
| LF-BS-0529 | all_states_and_federal | keyword | "punitive damages" /s "due process" | **landmark_missing**: wanted /state farm mut\|bmw of n\|gore\|exxon shipping\|pacific mut/ in top 10 |
| LF-BS-0533 | federal_circuit 2 | keyword | deference & "statutory ambiguity" % criminal | **empty**: no results<br>**landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-0535 | federal_district RI 1990-01-01–2010-12-31 | keyword | "regulatory taking" /10 "investment-backed expectations" | **empty**: no results |
| LF-BS-0539 | federal_circuit 11 –1999-12-31 | keyword | "punitive damages" & "due process" % patent | **empty**: no results |
| LF-BS-0540 | us_supreme_court | auto | "procedural due process" AND "property interest" AND deprivat! | **boolean_unsatisfied**: Mullane v. Central Hanover Bank & Trust Co. — required terms/proximity not met in full text |
| LF-BS-0541 | one_state_plus_federal PA 2020-01-01– | keyword | "design defect" /10 "consumer expectations" | **boolean_unsatisfied**: Deskevich v. Spirit Fabs, Inc. — required terms/proximity not met in full text |
| LF-BS-0542 | federal_circuit 7 | auto | "loss causation" /10 "inflated price" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0547 | federal_circuit 1 | keyword | erisa +s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-0552 | all_states | auto | ("design defect" OR "strict liability") /s "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10<br>**boolean_unsatisfied**: Greenman v. Yuba Power Products, Inc. — required terms/proximity not met in full text |
| LF-BS-0553 | federal_district MO 2000-01-01–2009-12-31 | keyword | "qualified immunity" & "constitutional right" % contract | **empty**: no results |
| LF-BS-0559 | all_federal | keyword | erisa /10 "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-0561 | one_state ND 2015-01-01– | keyword | "comparative negligence" & "contributory negligence" % contract | **empty**: no results |
| LF-BS-0569 | federal_district WY | keyword | cramdown w/15 ("absolute priority rule" or "fair and equitable") | **empty**: no results |
| LF-BS-0571 | federal_circuit 7 | keyword | "loss causation" w/s "inflated price" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0573 | one_state_plus_federal GA | keyword | "cohabitation" /p "express contract" & implied | **empty**: no results |
| LF-BS-0580 | federal_circuit federal | auto | retaliation /10 "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0581 | all_federal | keyword | "collateral estoppel" w/p "actually litigated" and "full and fair opportunity" | **landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-0587 | one_state WY | keyword | "pierce the corporate veil" w/s undercapitaliz! | **empty**: no results |
| LF-BS-0593 | one_state NY | keyword | "trade secret" /p "reasonable measures" & "independent economic value" | **empty**: no results |
| LF-BS-0594 | all_federal | auto | "age discrimination" /10 "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-0599 | one_state IL | keyword | "comparative negligence" & "contributory negligence" % contract | **empty**: no results<br>**landmark_missing**: wanted /alvis v\. ribar/ in top 10 |
| LF-BS-0607 | one_state AL 2000-01-01–2009-12-31 | keyword | "non-compete" /10 "legitimate business interest" | **empty**: no results |
| LF-BS-0609 | one_state NY 2000-01-01–2009-12-31 | keyword | homestead /p devise & "surviving spouse" | **empty**: no results |
| LF-BS-0611 | one_state AZ | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-0612 | one_state MA 2015-01-01– | auto | defen! /p "potential for coverage" | **boolean_unsatisfied**: Mount Vernon Fire Insurance Co. v. VisionAid, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Clear Blue Specialty Insurance Company v. R-Svp — required terms/proximity not met in full text |
| LF-BS-0617 | one_state NC | keyword | "consent to search" & "totality of the circumstances" % civil | **empty**: no results |
| LF-BS-0621 | one_state DE 2023-01-01– | keyword | "pierce the corporate veil" w/p undercapitaliz! and "corporate form" | **empty**: no results |
| LF-BS-0623 | federal_circuit 5 | keyword | eligib! /p "section 101" | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-0628 | federal_circuit 9 | auto | "economic substance" /10 "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-0631 | federal_circuit 8 | keyword | "intentional infliction of emotional distress" w/15 ("extreme and outrageous" or "severe emotional distress") | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-0633 | federal_district SD | keyword | firearm! /p "historical tradition" | **empty**: no results |
| LF-BS-0637 | us_supreme_court –1999-12-31 | keyword | ("public forum" OR "traditional public forum") /s "content-based" | **boolean_unsatisfied**: Cornelius v. Defense — required terms/proximity not met in full text |
| LF-BS-0641 | one_state RI | keyword | "proximate cause" /s foreseeab! | **empty**: no results |
| LF-BS-0643 | one_state_plus_federal OK | keyword | "statute of limitations" /p "equitable tolling" & "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-0644 | one_state FL | auto | ("comparative negligence" OR "comparative fault") AND apportion! NOT contract | **landmark_missing**: wanted /hoffman v\. jones/ in top 10 |
| LF-BS-0647 | all_federal 2023-01-01– | keyword | utteran! /25 "startling event" | **empty**: no results |
| LF-BS-0649 | one_state_plus_federal CA | keyword | habitab! /25 rent | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-0650 | one_state_plus_federal UT | auto | "attorney-client privilege" +s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-0657 | one_state_plus_federal KS –1999-12-31 | keyword | "loss causation" /10 "inflated price" | **empty**: no results |
| LF-BS-0665 | all_federal | keyword | (abstention OR "younger abstention") AND "comity" NOT patent | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-0667 | federal_circuit 3 | keyword | confus! /25 "strength of the mark" | **empty**: no results<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-0672 | federal_district NH | auto | "fraudulent joinder" /10 remand | **boolean_unsatisfied**: Jackson v. Morse — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Jenner v. CVS, Inc. — required terms/proximity not met in full text |
| LF-BS-0673 | all_states_and_federal 2023-01-01– | keyword | "informed consent" /s "material risk" | **result_missing_court**: #6 In re Maughan (549 P.3d 1134)<br>**result_missing_court**: #7 Slaughter v. Board of Professional Responsibility of the Sup (no cite) |
| LF-BS-0674 | all_federal 2000-01-01–2009-12-31 | auto | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-0682 | one_state DC | auto | therap! /p psychotherapist | **empty**: no results |
| LF-BS-0684 | one_state NY 2000-01-01–2009-12-31 | auto | "modification of the trust" w/p settlor and beneficiar! | **boolean_unsatisfied**: In re the Estate of Hunter — required terms/proximity not met in full text<br>**boolean_unsatisfied**: In re the Estate of Stralem — required terms/proximity not met in full text<br>**boolean_unsatisfied**: In re the Proceeding to Remove Mergenhagen as Trustee of the — required terms/proximity not met in full text |
| LF-BS-0686 | one_state CA | auto | "duty to warn" w/15 (psychotherapist or "identifiable victim") | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-0687 | one_state TX 2020-01-01– | keyword | "transitory foreign substance" /s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-0688 | one_state NJ | auto | guardianship /s ward | **duplicate_hit**: #7 DS v. East Brunswick Tp. Bd. of Ed. 458 A.2d 129 |
| LF-BS-0689 | all_federal | keyword | "statute of limitations" /p "equitable tolling" & "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-0691 | one_state NY | keyword | foresee! /p foreseeab! | **empty**: no results<br>**landmark_missing**: wanted /palsgraf/ in top 10 |
| LF-BS-0697 | federal_circuit dc | keyword | "parallel conduct" /s conspira! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-0701 | federal_circuit federal | keyword | "forum non conveniens" +s "private interest" | **empty**: no results<br>**landmark_missing**: wanted /piper aircraft\|gulf oil\|sinochem\|atlantic marine/ in top 10 |
| LF-BS-0703 | one_state AZ | keyword | ("pierce the corporate veil" OR "alter ego") /s undercapitaliz! | **empty**: no results |
| LF-BS-0707 | one_state MO 2023-01-01– | keyword | ("parol evidence rule" OR "parol evidence") /s integrat! | **empty**: no results |
| LF-BS-0708 | one_state DE | auto | "business judgment rule" w/p "duty of care" and director! | **boolean_unsatisfied**: Gantler v. Stephens — required terms/proximity not met in full text |
| LF-BS-0713 | one_state SD | keyword | "restrictive covenant" & "homeowners association" % criminal | **empty**: no results |
| LF-BS-0717 | all_federal | keyword | "qualified immunity" +s "constitutional right" | **landmark_missing**: wanted /harlow\|pearson v\. callahan\|al-kidd\|saucier\|anderson v\. creighton\|kisela\|mullenix\|district of columbia v\. wesby/ in top 10 |
| LF-BS-0719 | one_state CA | keyword | "warranty of habitability" & tenant % criminal | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-0721 | federal_district OH –1999-12-31 | keyword | "economic substance" w/p "business purpose" and commissioner | **empty**: no results |
| LF-BS-0723 | one_state_plus_federal MD 2020-01-01– | keyword | "underinsured motorist" +s stacking | **empty**: no results |
| LF-BS-0726 | all_federal | auto | "likelihood of confusion" w/15 (trademark or "strength of the mark") | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-0729 | one_state LA 2000-01-01–2009-12-31 | keyword | "non-compete" +s "legitimate business interest" | **empty**: no results |
| LF-BS-0732 | all_states | auto | "prior bad acts" w/s "other crimes" | **boolean_unsatisfied**: Thomas v. Commonwealth — required terms/proximity not met in full text |
| LF-BS-0741 | one_state IL | keyword | indemni! /p contribution | **empty**: no results |
| LF-BS-0745 | federal_circuit dc 2015-01-01– | keyword | ("hostile work environment" OR "sexual harassment") /s "severe or pervasive" | **boolean_unsatisfied**: Ortiz-Diaz v. United States Department of Housing & Urban De — required terms/proximity not met in full text |
| LF-BS-0747 | one_state_plus_federal AZ 2020-01-01– | keyword | "child support" +s imput! | **empty**: no results |
| LF-BS-0751 | federal_circuit 9 | keyword | "claim construction" w/p specification and "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-0753 | one_state_plus_federal MA 2020-01-01– | keyword | "bad faith" w/p insurer and "failure to settle" | **empty**: no results |
| LF-BS-0755 | us_supreme_court 2023-01-01– | keyword | abstention AND "pending state" AND NOT patent | **empty**: no results |
| LF-BS-0756 | one_state ME 2000-01-01–2009-12-31 | auto | "design defect" w/15 ("consumer expectations" or "risk-utility") | **empty**: no results |
| LF-BS-0757 | one_state CA | keyword | "non-compete" AND "legitimate business interest" AND reasonabl! | **boolean_unsatisfied**: Howard v. Babcock — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Robinson v. U-Haul Co. of California — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Alliant Insurance Services, Inc. v. Gaddy — required terms/proximity not met in full text |
| LF-BS-0759 | one_state DC | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results |
| LF-BS-0762 | us_supreme_court 2020-01-01– | auto | cramdown +s "absolute priority rule" | **empty**: no results |
| LF-BS-0764 | us_supreme_court | auto | substan! /p "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-0769 | us_supreme_court | keyword | retaliation /10 "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10<br>**boolean_unsatisfied**: Northern v. White — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Houston Community College System v. Wilson — required terms/proximity not met in full text |
| LF-BS-0775 | federal_circuit 5 | keyword | "vacate the arbitration award" & "exceeded their powers" % criminal | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-0780 | all_federal | auto | "second amendment" AND "historical tradition" AND NOT contract | **boolean_not_violated**: District of Columbia v. Heller — contains excluded term(s): contract |
| LF-BS-0782 | all_federal | auto | "motion to dismiss" w/15 (plausib! or "factual allegations") | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-0783 | one_state_plus_federal NJ 2000-01-01–2009-12-31 | keyword | ("social host" OR "dram shop") /s intoxicat! | **empty**: no results |
| LF-BS-0785 | one_state_plus_federal OR | keyword | foresee! /p foreseeab! | **empty**: no results |
| LF-BS-0794 | one_state_plus_federal HI 1990-01-01–2010-12-31 | auto | habitab! /25 rent | **empty**: no results |
| LF-BS-0796 | us_supreme_court | auto | classif! /25 classification | **landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-0801 | federal_district IN | keyword | "punitive damages" w/p "due process" and ratio | **empty**: no results |
| LF-BS-0805 | all_federal | keyword | "attorney-client privilege" +s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10<br>**boolean_unsatisfied**: Gomez v. Vernon — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Jablonski v. Special Counsel, Inc. — required terms/proximity not met in full text |
| LF-BS-0807 | one_state PA | keyword | ("design defect" OR "strict liability") AND "risk-utility" NOT contract | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-0811 | one_state RI | keyword | "creditor's claim" w/15 ("personal representative" or "barred") | **empty**: no results |
| LF-BS-0812 | all_federal | auto | retaliat! /p "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0813 | one_state_plus_federal CO | keyword | "fraudulent joinder" & remand % patent | **empty**: no results |
| LF-BS-0815 | federal_circuit 11 | keyword | pretext! /p pretext | **landmark_missing**: wanted /mcdonnell douglas\|burdine\|st\. mary\|reeves v\. sanderson/ in top 10 |
| LF-BS-0821 | one_state CA | keyword | habitab! /p tenant | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-0823 | federal_circuit 6 | keyword | "deliberate indifference" & prison! % contract | **empty**: no results<br>**landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-0826 | federal_circuit 3 | auto | pretext! /p pretext | **landmark_missing**: wanted /mcdonnell douglas\|burdine\|st\. mary\|reeves v\. sanderson/ in top 10 |
| LF-BS-0829 | all_states_and_federal | keyword | "modification of the trust" w/s settlor | **result_missing_court**: #2 In re Estate of Brown (87 Va. Cir. 353)<br>**boolean_unsatisfied**: In re Elizabeth Beck Hoisington Living Trust — required terms/proximity not met in full text |
| LF-BS-0833 | one_state_plus_federal RI | keyword | privileg! /p waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-0835 | one_state OR | keyword | "pollution exclusion" /s irritant | **empty**: no results |
| LF-BS-0838 | all_states_and_federal | auto | "prescriptive easement" w/p servient and dominant | **result_missing_court**: #8 Aizpitarte v. Minear (508 P.3d 1260) |
| LF-BS-0839 | all_federal | keyword | abstention w/15 ("pending state" or "comity") | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-0846 | one_state_plus_federal NC | auto | "statute of limitations" w/p "equitable tolling" and "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-0851 | all_states_and_federal | keyword | "fair use" /10 copyright | **landmark_missing**: wanted /campbell\|acuff-rose\|warhol\|google llc v\. oracle\|harper & row\|sony corp/ in top 10 |
| LF-BS-0852 | one_state TN | auto | "fraudulent inducement" AND "justifiable reliance" AND NOT criminal | **boolean_unsatisfied**: Brungard v. Caprice Records, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Brown v. Raines — required terms/proximity not met in full text |
| LF-BS-0853 | federal_circuit dc | keyword | ("mcdonnell douglas" OR "burden-shifting") /s pretext | **boolean_unsatisfied**: Trans World Airlines, Inc. v. Thurston — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Gross v. FBL Financial Services, Inc. — required terms/proximity not met in full text |
| LF-BS-0855 | federal_district CA 2000-01-01–2009-12-31 | keyword | "mcdonnell douglas" +s pretext | **empty**: no results |
| LF-BS-0857 | one_state MA 2020-01-01– | keyword | "equitable distribution" w/15 ("nonmarital" or commingl!) | **empty**: no results |
| LF-BS-0859 | federal_circuit 2 | keyword | "summary judgment" w/s "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-0864 | one_state_plus_federal MO | auto | ("modification of the trust" OR "trust modification") AND beneficiar! NOT criminal | **boolean_unsatisfied**: In the Matter of the H. Boone Porter Trust created under the — required terms/proximity not met in full text |
| LF-BS-0865 | one_state_plus_federal AZ | keyword | "diversity jurisdiction" AND "amount in controversy" AND NOT bankruptcy | **boolean_unsatisfied**: Gaus v. Miles, Inc. — required terms/proximity not met in full text |
| LF-BS-0869 | federal_circuit 11 | keyword | deference & "statutory ambiguity" % criminal | **empty**: no results<br>**landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-0876 | federal_circuit 3 | auto | monell w/s "policy or custom" | **boolean_unsatisfied**: Monell v. New York City Dept. of Social Servs. — required terms/proximity not met in full text |
| LF-BS-0877 | federal_circuit 7 | keyword | prosecut! /p "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10<br>**boolean_unsatisfied**: Ybarra v. Illinois — required terms/proximity not met in full text |
| LF-BS-0879 | one_state_plus_federal WI | keyword | "transitory foreign substance" /s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-0887 | one_state LA 2000-01-01–2009-12-31 | keyword | "fraudulent inducement" /10 "justifiable reliance" | **empty**: no results |
| LF-BS-0888 | all_states | auto | impractic! /p frustration | **boolean_unsatisfied**: McGlinchey v. Aetna Casualty & Surety Co. — required terms/proximity not met in full text |
| LF-BS-0889 | one_state NV 2020-01-01– | keyword | (guardianship OR "incapacitated person") /s ward | **empty**: no results |
| LF-BS-0900 | one_state_plus_federal MI | auto | daubert w/p reliab! and "rule 702" | **boolean_unsatisfied**: Daubert v. Merrell Dow Pharmaceuticals, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: General Electric Co. v. Joiner — required terms/proximity not met in full text |
| LF-BS-0904 | federal_circuit 6 | auto | confirm! /p "absolute priority rule" | **landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-0907 | all_federal 2020-01-01– | keyword | "ineffective assistance of counsel" & prejudice % civil | **empty**: no results |
| LF-BS-0910 | us_supreme_court | auto | (retaliation OR "protected activity") AND "causal connection" NOT criminal | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0925 | one_state DE | keyword | "eminent domain" w/15 ("just compensation" or taking) | **out_of_scope**: #5 Jacobs v. Nether Providence Township — Pennsylvania Court of Common Pleas, Delaware County (other_state_PA)<br>**boolean_unsatisfied**: City of Wilmington Ex Rel. Water Department v. Lord — required terms/proximity not met in full text |
| LF-BS-0936 | one_state_plus_federal DE | auto | "business judgment rule" /p "duty of care" & director! | **boolean_unsatisfied**: Gantler v. Stephens — required terms/proximity not met in full text |
| LF-BS-0937 | all_states_and_federal 2015-01-01– | keyword | "force majeure" /p frustration & unforeseeab! | **result_missing_court**: #1 CEC Entertainment, Inc. (no cite)<br>**result_missing_court**: #9 TEC Olmos, LLC v. ConocoPhillips Co. (555 S.W.3d 176)<br>**result_missing_court**: #10 SVAP III Poway Crossings, LLC v. Fitness Internat., LLC (no cite) |
| LF-BS-0943 | federal_circuit 2 | keyword | daubert & reliab! % criminal | **landmark_missing**: wanted /daubert\|kumho\|joiner/ in top 10 |
| LF-BS-0945 | one_state_plus_federal CA | keyword | negligen! /p "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-0947 | one_state CT | keyword | "modification of the trust" /p settlor & beneficiar! | **empty**: no results |
| LF-BS-0949 | one_state MO | keyword | ("comparative negligence" OR "comparative fault") AND apportion! NOT contract | **boolean_not_violated**: Lippard v. Houdaille Industries, Inc. — contains excluded term(s): contract |
| LF-BS-0950 | one_state CO | auto | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **duplicate_hit**: #10 Connolly v. Englewood Post No. 322 Veterans of Foreign Wars  139 P.3d 639 |
| LF-BS-0951 | one_state_plus_federal WA | keyword | "ineffective assistance of counsel" /10 prejudice | **landmark_missing**: wanted /strickland\|hill v\. lockhart\|padilla\|lafler\|missouri v\. frye\|harrington v\. richter/ in top 10 |
| LF-BS-0954 | federal_district AL | auto | "default judgment" /s "excusable neglect" | **degraded**: [{"engine":"semantic","code":"unknown","message":"The search engine failed."}] |
| LF-BS-0957 | one_state_plus_federal WV 2023-01-01– | keyword | "underinsured motorist" +s stacking | **empty**: no results |
| LF-BS-0959 | one_state MT 2023-01-01– | keyword | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **empty**: no results |
| LF-BS-0961 | one_state CA | keyword | "equitable distribution" & "nonmarital" % criminal | **empty**: no results |
| LF-BS-0965 | federal_circuit 3 | keyword | "eminent domain" & "just compensation" % criminal | **empty**: no results<br>**landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-0975 | one_state_plus_federal RI | keyword | "pierce the corporate veil" /s undercapitaliz! | **empty**: no results |
| LF-BS-0977 | one_state_plus_federal TX | keyword | "motion to compel arbitration" /p unconscionab! & delegation | **empty**: no results<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-0981 | all_states_and_federal | keyword | ("regulatory taking" OR "inverse condemnation") AND "economically viable" NOT criminal | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-0989 | one_state_plus_federal CT 2000-01-01–2009-12-31 | keyword | "business judgment rule" & "duty of care" % criminal | **empty**: no results |
| LF-BS-0996 | one_state NV | auto | "open and obvious" +s invitee | **boolean_unsatisfied**: Humphries v. Eighth Judicial District Court of Nevada ex rel — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Abbott v. City of Henderson — required terms/proximity not met in full text<br>**boolean_unsatisfied**: HUMPHRIES VS. NEW YORK-NEW YORK HOTEL & CASINO, LLC — required terms/proximity not met in full text |
| LF-BS-1002 | one_state OH 2000-01-01–2009-12-31 | auto | capaci! /25 "natural objects of his bounty" | **empty**: no results |
| LF-BS-1007 | all_federal | keyword | ("statute of limitations" OR "limitations period") /s "equitable tolling" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-1009 | federal_circuit 2 2015-01-01– | keyword | "summary judgment" & "genuine dispute" % patent | **empty**: no results |
| LF-BS-1011 | all_states_and_federal | keyword | "parol evidence rule" & integrat! % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1015 | federal_circuit 9 | keyword | ("motion to dismiss" OR "failure to state a claim") /s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1021 | one_state AR 2015-01-01– | keyword | subrog! /p insurer | **boolean_unsatisfied**: Ark. Cmty. Corr. v. Barnes — required terms/proximity not met in full text |
| LF-BS-1023 | us_supreme_court 2015-01-01– | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-1027 | all_states_and_federal | keyword | "prenuptial agreement" w/s "full disclosure" | **result_missing_court**: #2 Kelly v. Kelly (898 So. 2d 1096) |
| LF-BS-1034 | one_state_plus_federal MI | auto | "patent eligible" w/15 ("section 101" or "inventive concept") | **landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-1035 | federal_circuit 7 | keyword | "class certification" /10 commonality | **landmark_missing**: wanted /wal-mart\|dukes\|comcast\|amchem\|tyson foods\|falcon/ in top 10 |
| LF-BS-1039 | one_state NJ 2020-01-01– | keyword | ("vacate the arbitration award" OR "manifest disregard") /s "exceeded their powers" | **empty**: no results |
| LF-BS-1044 | federal_circuit 4 | auto | "hostile work environment" /s "severe or pervasive" | **boolean_unsatisfied**: Meritor Savings Bank v. Vinson — required terms/proximity not met in full text |
| LF-BS-1046 | federal_circuit 7 | auto | abstention w/p "pending state" and "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-1048 | us_supreme_court 2015-01-01– | auto | "loss causation" w/p "inflated price" and "economic loss" | **empty**: no results |
| LF-BS-1049 | one_state TX | keyword | foreclos! /25 "holder of the note" | **empty**: no results |
| LF-BS-1053 | one_state OH | keyword | "proximate cause" /10 foreseeab! | **empty**: no results |
| LF-BS-1054 | federal_circuit 2 | auto | "excited utterance" /10 hearsay | **duplicate_hit**: #3 Michigan v. Bryant 562 U.S. 344 |
| LF-BS-1056 | federal_district ND –1999-12-31 | auto | "general jurisdiction" /10 "at home" | **empty**: no results |
| LF-BS-1057 | one_state OH 2020-01-01– | keyword | "tortious interference" /p "business relationship" & justif! | **boolean_unsatisfied**: Hamm v. Coal — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Hanneman Family Funeral Home v. Orians — required terms/proximity not met in full text |
| LF-BS-1061 | all_states | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-1063 | federal_district DE 2023-01-01– | keyword | "intentional infliction of emotional distress" & "extreme and outrageous" % patent | **empty**: no results |
| LF-BS-1068 | one_state NJ | auto | "deceptive and unfair trade practices" w/s consumer | **boolean_unsatisfied**: Liberty Mutual Insurance v. Land — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Gennari v. Weichert Co. Realtors — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Lowe v. Audet — required terms/proximity not met in full text |
| LF-BS-1073 | one_state_plus_federal CO –1999-12-31 | keyword | alcohol! /p intoxicat! | **empty**: no results |
| LF-BS-1077 | federal_circuit 8 | keyword | "summary judgment" w/p "genuine dispute" and "material fact" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-1080 | federal_circuit 6 | auto | "hostile work environment" AND "severe or pervasive" AND NOT criminal | **boolean_not_violated**: Meritor Savings Bank v. Vinson — contains excluded term(s): criminal |
| LF-BS-1083 | all_states | keyword | "double jeopardy" & blockburger % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-1085 | one_state_plus_federal KY | keyword | "undue influence" & testator % criminal | **empty**: no results |
| LF-BS-1099 | federal_district ND 2015-01-01– | keyword | spoliation w/p "adverse inference" and sanction! | **empty**: no results |
| LF-BS-1104 | federal_circuit 8 | auto | ("qualified immunity" OR "clearly established") AND officer NOT contract | **boolean_not_violated**: Pearson v. Callahan — contains excluded term(s): contract |
| LF-BS-1108 | all_states | auto | negligen! /25 "last clear chance" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-1116 | one_state AL 2015-01-01– | auto | ("modification of the trust" OR "trust modification") /s settlor | **boolean_unsatisfied**: Bradley v. Spivey — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Ex parte Steve Marshall, in his official capacity as Attorne — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Ex parte Steve Marshall, in his official capacity as Attorne — required terms/proximity not met in full text |
| LF-BS-1119 | federal_district WA 2015-01-01– | keyword | cramdown & "absolute priority rule" % criminal | **empty**: no results |
| LF-BS-1125 | all_states | keyword | defect! /p "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-1128 | all_states_and_federal | auto | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10<br>**boolean_unsatisfied**: Chaparro v. Carnival Corp. — required terms/proximity not met in full text |
| LF-BS-1129 | one_state_plus_federal TX | keyword | alimony & modif! % criminal | **boolean_not_violated**: Ankenbrandt Ex Rel. L. R. v. Richards — contains excluded term(s): criminal<br>**boolean_not_violated**: Waldrop v. Waldrop — contains excluded term(s): criminal<br>**boolean_not_violated**: In re Green — contains excluded term(s): criminal |
| LF-BS-1131 | federal_circuit 9 | keyword | "class certification" /s commonality | **landmark_missing**: wanted /wal-mart\|dukes\|comcast\|amchem\|tyson foods\|falcon/ in top 10 |
| LF-BS-1133 | one_state IA –1999-12-31 | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-1134 | one_state AK 1990-01-01–2010-12-31 | auto | ("joint and several liability" OR "several liability") /s tortfeasor! | **duplicate_hit**: #10 State Farm Mutual Automobile Insurance Co. v. Wilson 199 P.3d 581 |
| LF-BS-1140 | one_state IN | auto | "prenuptial agreement" w/p "full disclosure" and unconscionab! | **boolean_unsatisfied**: Perrill v. Perrill — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Fetters v. Fetters — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Buskirk v. Buskirk — required terms/proximity not met in full text |
| LF-BS-1141 | one_state MN 2000-01-01–2009-12-31 | keyword | "force majeure" w/p frustration and unforeseeab! | **empty**: no results |
| LF-BS-1152 | all_states | auto | consorti! /p spouse | **boolean_unsatisfied**: Watts v. State — required terms/proximity not met in full text |
| LF-BS-1159 | one_state NC | keyword | "deceptive and unfair trade practices" /s consumer | **empty**: no results |
| LF-BS-1161 | one_state MS 2020-01-01– | keyword | statut! /p "class of persons" | **empty**: no results |
| LF-BS-1167 | federal_circuit 7 | keyword | "attorney-client privilege" +s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-1175 | one_state_plus_federal SD | keyword | "transitory foreign substance" w/p "actual or constructive knowledge" and premises | **empty**: no results |
| LF-BS-1176 | one_state_plus_federal OH 2020-01-01– | auto | impractic! /p frustration | **boolean_unsatisfied**: State v. Coffman — required terms/proximity not met in full text<br>**boolean_unsatisfied**: McIntosh v. United States — required terms/proximity not met in full text |
| LF-BS-1177 | one_state MD | keyword | "child support" w/15 (imput! or underemploy!) | **boolean_unsatisfied**: In re: Marriage of Houser — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Prince George's Cnty. Office of Child Support Enforcement v. — required terms/proximity not met in full text |
| LF-BS-1179 | one_state_plus_federal MD | keyword | "vacate the arbitration award" +s "exceeded their powers" | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-1188 | all_states_and_federal | auto | nondischargeab! AND "false pretenses" AND debtor | **landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-1191 | one_state AZ | keyword | trust! /p settlor | **duplicate_hit**: #8 Matter of Marital Trust 819 P.2d 1029 |
| LF-BS-1193 | one_state PA | keyword | "prenuptial agreement" w/p "full disclosure" and unconscionab! | **empty**: no results |
| LF-BS-1200 | us_supreme_court 2023-01-01– | auto | scienter & "rule 10b-5" % criminal | **empty**: no results |
| LF-BS-1201 | all_federal | keyword | "summary judgment" /10 "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-1205 | one_state CA | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1207 | one_state TN –1999-12-31 | keyword | "duty to warn" w/15 (psychotherapist or "identifiable victim") | **empty**: no results |
| LF-BS-1211 | federal_circuit 11 | keyword | "parallel conduct" /10 conspira! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-1221 | federal_district WA | keyword | confus! /p trademark | **empty**: no results |
| LF-BS-1225 | one_state_plus_federal CA –1999-12-31 | keyword | "strict liability" & "design defect" % contract | **empty**: no results |
| LF-BS-1231 | all_federal | keyword | "procedural due process" /10 "property interest" | **landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-1236 | one_state MI | auto | "pierce the corporate veil" AND undercapitaliz! AND NOT criminal | **boolean_unsatisfied**: Gallagher v. Persha — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Glenn v. TPI Petroleum, Inc. — required terms/proximity not met in full text |
| LF-BS-1243 | one_state_plus_federal PA | keyword | "joint and several liability" & tortfeasor! % contract | **empty**: no results |
| LF-BS-1250 | all_states_and_federal | auto | (scienter OR "strong inference") /s "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1251 | all_states_and_federal | keyword | nondischargeab! w/15 ("false pretenses" or debtor) | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-1252 | one_state_plus_federal UT | auto | retaliation w/s "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-1253 | one_state MI | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-1257 | one_state_plus_federal AR –1999-12-31 | keyword | classif! /25 classification | **empty**: no results |
| LF-BS-1260 | one_state MS 2023-01-01– | auto | "medical malpractice" /10 "standard of care" | **boolean_unsatisfied**: Singing River Health System v. Brand — required terms/proximity not met in full text |
| LF-BS-1261 | one_state UT 2015-01-01– | keyword | "negligence per se" +s "class of persons" | **empty**: no results |
| LF-BS-1266 | all_federal | auto | prosecut! /25 "fourth amendment" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-1269 | one_state_plus_federal KY 2000-01-01–2009-12-31 | keyword | ("business judgment rule" OR "duty of loyalty") AND director! NOT criminal | **duplicate_hit**: #9 United States ex rel. Rural Utilities Service of the Departm 355 F.3d 415 |
| LF-BS-1272 | one_state_plus_federal IL | auto | retaliation w/15 ("materially adverse" or "causal connection") | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10<br>**boolean_unsatisfied**: Drake v. Minnesota Mining & Manufacturing Company — required terms/proximity not met in full text |
| LF-BS-1281 | all_states_and_federal | keyword | "social host" w/p intoxicat! and "guest" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-1284 | all_states | auto | "implied covenant of good faith and fair dealing" AND discretion AND NOT criminal | **boolean_unsatisfied**: Kirke La Shelle Co. v. Paul Armstrong Co. — required terms/proximity not met in full text |
| LF-BS-1287 | one_state GA | keyword | "equitable distribution" w/s "nonmarital" | **empty**: no results |
| LF-BS-1289 | one_state MS | keyword | "non-compete" /10 "legitimate business interest" | **empty**: no results |
| LF-BS-1293 | one_state VA 2023-01-01– | keyword | "parol evidence rule" w/p integrat! and ambigu! | **empty**: no results |
| LF-BS-1299 | one_state CA | keyword | "testamentary capacity" & testator % criminal | **empty**: no results |
| LF-BS-1303 | us_supreme_court | keyword | "motion to dismiss" /10 plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1308 | one_state AL | auto | "rule 11" & sanction! % habeas | **boolean_unsatisfied**: Ex parte Hankook Tire America Corporation and Hankook Tire & — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Honea v. Raymond James Fin. Servs., Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Northstar Anesthesia of Alabama, LLC v. Noble — required terms/proximity not met in full text |
| LF-BS-1314 | one_state_plus_federal IN | auto | "intentional infliction of emotional distress" w/p "extreme and outrageous" and "severe emotional distress" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-1319 | all_federal | keyword | "consent to search" /10 "totality of the circumstances" | **landmark_missing**: wanted /schneckloth\|bumper\|georgia v\. randolph\|illinois v\. rodriguez/ in top 10 |
| LF-BS-1320 | federal_circuit 9 | auto | asylum & persecution % contract | **boolean_not_violated**: Department of Homeland Security v. Thuraissigiam — contains excluded term(s): contract |
| LF-BS-1321 | one_state PA 2015-01-01– | keyword | "proximate cause" w/p foreseeab! and "intervening cause" | **empty**: no results |
| LF-BS-1332 | one_state WY | auto | proportional! /p discovery | **boolean_unsatisfied**: Requejo v. State — required terms/proximity not met in full text |
| LF-BS-1335 | one_state CA | keyword | "informed consent" AND "material risk" AND physician | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-1339 | one_state MS | keyword | "proximate cause" +s foreseeab! | **empty**: no results |
| LF-BS-1340 | all_federal | auto | apprendi /10 jury | **duplicate_hit**: #9 Alleyne v. United States 570 U.S. 99 |
| LF-BS-1341 | one_state AL | keyword | "promissory estoppel" w/p "clear and definite promise" and reliance | **empty**: no results |
| LF-BS-1345 | one_state NY | keyword | support! /p imput! | **boolean_unsatisfied**: Ifrah v. Utschig — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Village of Honeoye Falls v. Town of Mendon Zoning Board of A — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Orchards Associates v. Planning Board of Town of North Salem — required terms/proximity not met in full text |
| LF-BS-1349 | one_state_plus_federal SD | keyword | "pollution exclusion" AND irritant AND contaminant | **duplicate_hit**: #9 State Cement Plant Comm. v. Wausau Und. Ins. Co. 2000 SD 116 |
| LF-BS-1352 | federal_circuit 2 | auto | "likelihood of confusion" w/15 (trademark or "strength of the mark") | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1357 | all_states_and_federal 2020-01-01– | keyword | "design defect" w/s "consumer expectations" | **result_missing_court**: #7 Bruce v. Igloo Products Corp. (no cite) |
| LF-BS-1363 | all_states_and_federal | keyword | ("rule of reason" OR "per se") /s "anticompetitive effects" | **result_missing_court**: #10 Sidibe v. Health (no cite)<br>**landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-1370 | all_federal | auto | asylum AND persecution AND "particular social group" | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1375 | one_state_plus_federal NV | keyword | ("non-compete" OR "covenant not to compete") /s "legitimate business interest" | **empty**: no results |
| LF-BS-1379 | federal_circuit 9 –1999-12-31 | keyword | "patent eligible" w/s "section 101" | **empty**: no results |
| LF-BS-1402 | all_federal | auto | (asylum OR "well-founded fear") AND "particular social group" NOT contract | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1405 | all_federal | keyword | ("age discrimination" OR adea) AND pretext NOT criminal | **boolean_unsatisfied**: Gross v. FBL Financial Services, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Kimel v. Florida Board of Regents — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Gilmer v. Interstate/Johnson Lane Corp. — required terms/proximity not met in full text |
| LF-BS-1406 | federal_circuit 11 | auto | "automatic stay" w/p "section 362" and debtor | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1407 | one_state MI | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1409 | one_state_plus_federal DE | keyword | ("business judgment rule" OR "duty of loyalty") /s "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-1416 | one_state_plus_federal MT | auto | "cohabitation" w/s "express contract" | **boolean_unsatisfied**: Georgia v. Randolph — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Flood v. Kalinyaprak — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Estate of Shapiro v. United States — required terms/proximity not met in full text |
| LF-BS-1418 | federal_circuit 3 2020-01-01– | auto | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-1423 | one_state WY 2020-01-01– | keyword | "joint and several liability" AND tortfeasor! AND NOT contract | **empty**: no results |
| LF-BS-1427 | one_state_plus_federal MO | keyword | "ineffective assistance of counsel" /s prejudice | **landmark_missing**: wanted /strickland\|hill v\. lockhart\|padilla\|lafler\|missouri v\. frye\|harrington v\. richter/ in top 10 |
| LF-BS-1435 | one_state SD | keyword | "demand futility" AND "demand excused" AND NOT criminal | **empty**: no results |
| LF-BS-1439 | one_state_plus_federal GA | keyword | "parol evidence rule" w/p integrat! and ambigu! | **empty**: no results |
| LF-BS-1441 | one_state_plus_federal MD | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-1443 | one_state AZ 2023-01-01– | keyword | "tortious interference" /10 "business relationship" | **empty**: no results |
| LF-BS-1445 | one_state NV 2015-01-01– | keyword | "prenuptial agreement" +s "full disclosure" | **empty**: no results |
| LF-BS-1447 | one_state_plus_federal CA | keyword | "informed consent" & "material risk" % patent | **empty**: no results<br>**landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-1449 | federal_circuit 9 | keyword | indiffer! /25 "eighth amendment" | **landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-1452 | federal_circuit 9 2000-01-01–2009-12-31 | auto | "patent eligible" w/p "section 101" and "inventive concept" | **empty**: no results |
| LF-BS-1455 | all_states_and_federal | keyword | relocat! /25 "best interests of the child" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1456 | federal_circuit 2 | auto | "likelihood of confusion" AND trademark AND NOT criminal | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1458 | one_state AZ 1990-01-01–2010-12-31 | auto | (guardianship OR "incapacitated person") /s ward | **duplicate_hit**: #3 Kelly v. Elliston 910 P.2d 665<br>**duplicate_hit**: #8 Fiduciary Services, Inc. v. Shano 869 P.2d 1203 |
| LF-BS-1465 | all_federal | keyword | "prevailing party" /10 lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10<br>**boolean_unsatisfied**: Bank of America, N.A. v. Mobile — required terms/proximity not met in full text |
| LF-BS-1469 | all_states | keyword | relian! /p "clear and definite promise" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-1471 | all_federal | keyword | "forum non conveniens" w/15 ("private interest" or "public interest") | **landmark_missing**: wanted /piper aircraft\|gulf oil\|sinochem\|atlantic marine/ in top 10 |
| LF-BS-1473 | all_federal | keyword | monell & "policy or custom" % contract | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /monell\|city of canton\|connick\|pembaur\|bd\. of cnty\|board of county/ in top 10 |
| LF-BS-1483 | federal_circuit 7 2015-01-01– | keyword | plausib! /p plausib! | **empty**: no results |
| LF-BS-1484 | one_state_plus_federal NV | auto | abstention +s "pending state" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-1486 | all_federal | auto | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1487 | one_state NV | keyword | relian! /p "clear and definite promise" | **empty**: no results |
| LF-BS-1489 | federal_circuit dc | keyword | "class certification" & commonality % arbitration | **empty**: no results<br>**landmark_missing**: wanted /wal-mart\|dukes\|comcast\|amchem\|tyson foods\|falcon/ in top 10 |
| LF-BS-1493 | one_state OK | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results |
| LF-BS-1495 | one_state_plus_federal IA 2023-01-01– | keyword | pierc! /p undercapitaliz! | **empty**: no results |
| LF-BS-1497 | us_supreme_court | keyword | "economic substance" AND "business purpose" AND NOT criminal | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-1499 | federal_circuit dc | keyword | ("arbitrary and capricious" OR "reasoned decisionmaking") /s agency | **landmark_missing**: wanted /state farm\|motor vehicle mfrs\|overton park\|dhs v\. regents\|fcc v\. fox\|encino/ in top 10 |
| LF-BS-1506 | federal_circuit 2 | auto | "likelihood of confusion" AND trademark AND "strength of the mark" | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1511 | us_supreme_court | keyword | "reasonable accommodation" /10 "interactive process" | **empty**: no results<br>**landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-1513 | all_states_and_federal | keyword | "restrictive covenant" /p "homeowners association" & enforc! | **result_missing_court**: #8 Pandharipande v. FSD Corporation (no cite)<br>**boolean_unsatisfied**: Alum Cliff Industries, L.L.C. v. Hickory Woods Home Owners'  — required terms/proximity not met in full text |
| LF-BS-1515 | federal_district AL | keyword | nondischargeab! +s "false pretenses" | **empty**: no results |
| LF-BS-1518 | us_supreme_court | auto | tak! /p "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-1523 | one_state_plus_federal MI | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1524 | one_state_plus_federal NH | auto | "child support" & imput! % criminal | **boolean_not_violated**: Noddin v. Noddin — contains excluded term(s): criminal<br>**boolean_unsatisfied**: In re Jerome — required terms/proximity not met in full text |
| LF-BS-1527 | one_state HI 1990-01-01–2010-12-31 | keyword | "informed consent" /10 "material risk" | **empty**: no results |
| LF-BS-1529 | one_state_plus_federal MA | keyword | preclu! /25 "same cause of action" | **empty**: no results<br>**landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-1531 | one_state NJ | keyword | "proximate cause" /s foreseeab! | **empty**: no results |
| LF-BS-1532 | federal_circuit 4 2020-01-01– | auto | "excessive force" & "fourth amendment" % contract | **empty**: no results |
| LF-BS-1533 | one_state SC | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-1535 | one_state AK | keyword | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-1543 | one_state_plus_federal ID –1999-12-31 | keyword | "parol evidence rule" /s integrat! | **empty**: no results |
| LF-BS-1547 | one_state_plus_federal KS | keyword | constru! /25 "intrinsic evidence" | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-1551 | us_supreme_court | keyword | "statute of limitations" AND "equitable tolling" AND "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-1557 | one_state AL | keyword | "second amendment" w/s "historical tradition" | **empty**: no results |
| LF-BS-1560 | one_state MA 2015-01-01– | auto | "pollution exclusion" /10 irritant | **empty**: no results |
| LF-BS-1563 | all_federal | keyword | "crime involving moral turpitude" /10 "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-1565 | federal_circuit 8 | keyword | "claim construction" w/p specification and "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-1577 | one_state TX 2000-01-01–2009-12-31 | keyword | exculpat! /25 suppress! | **empty**: no results |
| LF-BS-1581 | one_state CT –1999-12-31 | keyword | "economic loss rule" AND "purely economic" AND NOT criminal | **empty**: no results |
| LF-BS-1583 | all_states_and_federal | keyword | ("automobile exception" OR "vehicle search") AND warrantless NOT civil | **landmark_missing**: wanted /carroll\|california v\. acevedo\|arizona v\. gant\|collins v\. virginia\|chambers v\. maroney/ in top 10 |
| LF-BS-1584 | federal_circuit 11 | auto | persecut! /25 "particular social group" | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1586 | us_supreme_court | auto | citizen! /25 remov! | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-1587 | all_states_and_federal | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1589 | federal_district CO 2023-01-01– | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results |
| LF-BS-1596 | federal_district FL | auto | "excessive force" /10 "fourth amendment" | **boolean_unsatisfied**: Rosete v. City of Homestead — required terms/proximity not met in full text |
| LF-BS-1603 | one_state FL 2020-01-01– | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") AND "close relationship" NOT contract | **empty**: no results |
| LF-BS-1609 | us_supreme_court | keyword | "motion to dismiss" w/s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1615 | one_state_plus_federal GA | keyword | ("automatic stay" OR "relief from stay") /s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1623 | one_state_plus_federal AZ | keyword | scienter w/s "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1631 | one_state NJ | keyword | hir! /p "negligent supervision" | **empty**: no results |
| LF-BS-1633 | one_state NC | keyword | tortfeas! /25 apportion! | **boolean_unsatisfied**: Medical Mutual Ins. Co. of NC v. Mauldin — required terms/proximity not met in full text |
| LF-BS-1635 | federal_circuit federal | keyword | classif! /25 classification | **landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-1640 | one_state_plus_federal NJ 1990-01-01–2010-12-31 | auto | "social host" & intoxicat! % contract | **empty**: no results |
| LF-BS-1643 | federal_district SC 2000-01-01–2009-12-31 | keyword | nonmov! /p "genuine dispute" | **empty**: no results |
| LF-BS-1644 | one_state_plus_federal MA | auto | "automobile exception" AND "probable cause" AND warrantless | **boolean_unsatisfied**: Chambers v. Maroney — required terms/proximity not met in full text |
| LF-BS-1656 | one_state LA –1999-12-31 | auto | "security deposit" AND tenant AND landlord | **boolean_unsatisfied**: Woodery v. Smith — required terms/proximity not met in full text |
| LF-BS-1659 | one_state NC | keyword | guardianship +s ward | **duplicate_hit**: #3 FIRST NAT. BANK OF CATAWBA COUNTY v. Edens 286 S.E.2d 818 |
| LF-BS-1665 | one_state_plus_federal MS | keyword | "cell-site location" /s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-1668 | all_federal | auto | "diversity jurisdiction" +s "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10<br>**boolean_unsatisfied**: Kan v. General Motors LLC — required terms/proximity not met in full text |
| LF-BS-1669 | one_state MT | keyword | "transitory foreign substance" +s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-1674 | all_federal | auto | "likelihood of confusion" +s trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1675 | federal_circuit 9 | keyword | scienter /p "rule 10b-5" & pslra | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1677 | all_federal | keyword | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-1678 | one_state_plus_federal CA | auto | consorti! /p spouse | **empty**: no results |
| LF-BS-1681 | one_state HI | keyword | "double jeopardy" & blockburger % civil | **empty**: no results |
| LF-BS-1688 | one_state CA | auto | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1689 | one_state_plus_federal FL | keyword | "motion to compel arbitration" /p unconscionab! & delegation | **empty**: no results<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-1692 | one_state_plus_federal CA | auto | disclos! /25 physician | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-1693 | us_supreme_court –1999-12-31 | keyword | ("second amendment" OR "keep and bear arms") /s "historical tradition" | **empty**: no results |
| LF-BS-1695 | one_state_plus_federal NH 1990-01-01–2010-12-31 | keyword | "duty to warn" w/p psychotherapist and "identifiable victim" | **empty**: no results |
| LF-BS-1699 | federal_circuit 6 | keyword | confirm! /25 "fair and equitable" | **duplicate_hit**: #9 RFC v. Denver & RGWR Co. 328 U.S. 495<br>**landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-1703 | one_state CA | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results |
| LF-BS-1704 | one_state_plus_federal NY | auto | "anticipatory repudiation" w/p repudiat! and "adequate assurance" | **boolean_unsatisfied**: DiFolco v. MSNBC Cable L.L.C. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Audthan v. Nick & Duke — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Extended CHHA Acquisition, LLC v. Mahoney — required terms/proximity not met in full text |
| LF-BS-1705 | federal_circuit 2 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results<br>**landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1707 | all_states_and_federal | keyword | "fair labor standards act" /10 exempt! | **result_missing_court**: #10 Opinion No. (1985) (no cite)<br>**landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-1709 | all_states_and_federal | keyword | "deceptive and unfair trade practices" & consumer % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1711 | all_states_and_federal | keyword | "personal jurisdiction" /p "minimum contacts" & "fair play" | **landmark_missing**: wanted /international shoe\|world-wide volkswagen\|burger king\|daimler\|goodyear\|ford motor\|bristol-myers\|walden/ in top 10 |
| LF-BS-1713 | all_federal | keyword | "prevailing party" w/p lodestar and "reasonable hourly rate" | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1716 | all_states 2015-01-01– | auto | "implied warranty of merchantability" & disclaim! % criminal | **boolean_unsatisfied**: Accettura v. Vacationland, Inc. — required terms/proximity not met in full text |
| LF-BS-1719 | one_state_plus_federal ME | keyword | "summary judgment" /p "genuine dispute" & "material fact" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-1725 | one_state GA 2020-01-01– | keyword | "modification of the trust" AND settlor AND NOT criminal | **empty**: no results |
| LF-BS-1735 | one_state IL | keyword | "creditor's claim" /s "personal representative" | **empty**: no results |
| LF-BS-1739 | one_state_plus_federal CA | keyword | "personal jurisdiction" w/s "minimum contacts" | **landmark_missing**: wanted /international shoe\|world-wide volkswagen\|burger king\|daimler\|goodyear\|ford motor\|bristol-myers\|walden/ in top 10 |
| LF-BS-1740 | all_states 2023-01-01– | auto | defen! /p "potential for coverage" | **boolean_unsatisfied**: Negrón Castro y otros v. Soler Bernardini y otros — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Serrano Picón v. Multinational Life Insurance Company — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Birriel Colón v. Supermercado Los Colobos (Econo Rial, Inc.) — required terms/proximity not met in full text |
| LF-BS-1745 | all_states | keyword | "comparative negligence" /p "contributory negligence" & "last clear chance" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-1751 | one_state UT | keyword | "cohabitation" w/s "express contract" | **empty**: no results |
| LF-BS-1752 | one_state_plus_federal TN –1999-12-31 | auto | tortfeas! /p tortfeasor! | **after_dateTo**: #4 2004-05-03 > 1999-12-31 |
| LF-BS-1756 | all_federal 2023-01-01– | auto | standing & "injury in fact" % divorce | **empty**: no results |
| LF-BS-1757 | all_states_and_federal | keyword | asylum w/15 (persecution or "particular social group") | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1759 | one_state GA | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-1761 | one_state_plus_federal GA | keyword | "cohabitation" AND "express contract" AND implied | **empty**: no results |
| LF-BS-1764 | one_state IL 2000-01-01–2009-12-31 | auto | "economic loss rule" /10 "purely economic" | **boolean_unsatisfied**: Mars, Inc. v. Heritage Builders of Effingham, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: First Midwest Bank v. Stewar Title Company — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Illinois Bell Telephone Co. v. Plote, Inc. — required terms/proximity not met in full text |
| LF-BS-1765 | one_state FL 1990-01-01–2010-12-31 | keyword | "preliminary injunction" /10 "irreparable harm" | **boolean_unsatisfied**: State, Department of Transportation v. Kountry Kitchen of Ke — required terms/proximity not met in full text |
| LF-BS-1769 | one_state WY 2015-01-01– | keyword | "respondeat superior" w/s "scope of employment" | **empty**: no results |
| LF-BS-1774 | all_states_and_federal 2020-01-01– | auto | retaliation AND "materially adverse" AND NOT criminal | **result_missing_court**: #6 Wilson v. District of Columbia (no cite) |
| LF-BS-1781 | federal_circuit 4 | keyword | "claim construction" & specification % criminal | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-1787 | all_states | keyword | "design defect" AND "consumer expectations" AND NOT contract | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-1789 | one_state KS 2023-01-01– | keyword | "creditor's claim" /s "personal representative" | **empty**: no results |
| LF-BS-1793 | one_state_plus_federal AK | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-1795 | one_state_plus_federal KS | keyword | "promissory estoppel" +s "clear and definite promise" | **empty**: no results |
| LF-BS-1797 | us_supreme_court | keyword | "patent eligible" & "section 101" % criminal | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-1799 | one_state_plus_federal OH | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1809 | one_state_plus_federal GA | keyword | "prior bad acts" w/p "other crimes" and propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-1812 | one_state FL | auto | "proportional to the needs of the case" w/15 (discovery or "undue burden") | **boolean_unsatisfied**: Bretherick v. Florida — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Bainter v. League of Women Voters of Florida — required terms/proximity not met in full text |
| LF-BS-1813 | one_state RI 2000-01-01–2009-12-31 | keyword | ("liquidated damages" OR "liquidated damages clause") AND "reasonable forecast" NOT criminal | **empty**: no results |
| LF-BS-1820 | one_state_plus_federal CA | auto | invit! /p trespasser | **landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-1827 | one_state_plus_federal NJ | keyword | confirm! /25 "fair and equitable" | **duplicate_hit**: #8 RFC v. Denver & RGWR Co. 328 U.S. 495<br>**landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-1831 | one_state CA | keyword | defect! /25 "unreasonably dangerous" | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-1833 | all_states_and_federal | keyword | "business judgment rule" +s "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-1835 | one_state CA | keyword | "equitable distribution" w/15 ("nonmarital" or commingl!) | **empty**: no results |
| LF-BS-1837 | one_state_plus_federal MI 2015-01-01– | keyword | "negligent infliction of emotional distress" /10 "zone of danger" | **empty**: no results |
| LF-BS-1838 | one_state_plus_federal IL | auto | ("intentional infliction of emotional distress" OR "outrageous conduct") /s "extreme and outrageous" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-1841 | federal_district WY 2020-01-01– | keyword | "age discrimination" w/p "but-for" and pretext | **empty**: no results |
| LF-BS-1848 | one_state NH 1990-01-01–2010-12-31 | auto | "implied consent" & refus! % civil | **boolean_unsatisfied**: State v. Livingston — required terms/proximity not met in full text<br>**boolean_not_violated**: State v. Johnson — contains excluded term(s): civil<br>**boolean_unsatisfied**: State v. Watson — required terms/proximity not met in full text |
| LF-BS-1849 | one_state MT | keyword | consorti! /25 derivative | **empty**: no results |
| LF-BS-1851 | all_federal | keyword | "arbitrary and capricious" /s agency | **landmark_missing**: wanted /state farm\|motor vehicle mfrs\|overton park\|dhs v\. regents\|fcc v\. fox\|encino/ in top 10 |
| LF-BS-1853 | one_state_plus_federal AZ | keyword | "personal jurisdiction" /s "minimum contacts" | **landmark_missing**: wanted /international shoe\|world-wide volkswagen\|burger king\|daimler\|goodyear\|ford motor\|bristol-myers\|walden/ in top 10 |
| LF-BS-1854 | one_state WV 2020-01-01– | auto | "social host" AND intoxicat! AND "guest" | **empty**: no results |
| LF-BS-1857 | one_state CT | keyword | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **empty**: no results |
| LF-BS-1859 | one_state_plus_federal IL | keyword | bystand! /p "zone of danger" | **empty**: no results |
| LF-BS-1860 | one_state_plus_federal ID | auto | "cell-site location" w/p warrant and "reasonable expectation of privacy" | **boolean_unsatisfied**: Katz v. United States — required terms/proximity not met in full text |
| LF-BS-1861 | one_state_plus_federal NY | keyword | "proximate cause" /p foreseeab! & "intervening cause" | **empty**: no results<br>**landmark_missing**: wanted /palsgraf/ in top 10 |
| LF-BS-1865 | all_states_and_federal | keyword | "market share liability" w/s des | **result_missing_court**: #9 Mellon v. Barre-National Drug Co. (1993 Pa. Dist. & Cnty. Dec. LEXIS 197)<br>**landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-1867 | all_states_and_federal | keyword | ("preliminary injunction" OR "temporary restraining order") AND "likelihood of success" NOT divorce | **result_missing_court**: #8 Mesa v. City of Mesa (no cite)<br>**landmark_missing**: wanted /winter v\. n\|winter v\. natural\|ebay\|munaf\|nken/ in top 10 |
| LF-BS-1869 | federal_circuit 5 | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1870 | federal_circuit 10 | auto | "crime involving moral turpitude" /p "categorical approach" & removab! | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-1873 | one_state LA | keyword | "design defect" w/s "consumer expectations" | **empty**: no results |
| LF-BS-1874 | all_states_and_federal 2023-01-01– | auto | vacat! /25 "evident partiality" | **result_missing_court**: #9 The Matter of TCR Sports Broadcasting Holding v. Partner (no cite) |
| LF-BS-1878 | us_supreme_court | auto | ("automatic stay" OR "relief from stay") /s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1879 | all_federal | keyword | "procedural due process" +s "property interest" | **landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-1885 | federal_circuit 11 | keyword | "regulatory taking" +s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10<br>**boolean_unsatisfied**: Swisher International, Inc. v. Schafer — required terms/proximity not met in full text |
| LF-BS-1887 | one_state CO 1990-01-01–2010-12-31 | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1888 | federal_circuit dc | auto | prosecut! /p "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-1896 | one_state_plus_federal TX | auto | "rule of reason" /s "anticompetitive effects" | **boolean_unsatisfied**: Eastman Kodak Co. v. Image Technical Services, Inc. — required terms/proximity not met in full text |
| LF-BS-1897 | one_state NH | keyword | "duty to defend" AND "potential for coverage" AND insurer | **empty**: no results |
| LF-BS-1901 | one_state GA –1999-12-31 | keyword | "prevailing party" /s lodestar | **empty**: no results |
| LF-BS-1905 | one_state_plus_federal MI | keyword | "modification of the trust" /10 settlor | **empty**: no results |
| LF-BS-1908 | all_federal | auto | (abstention OR "younger abstention") /s "pending state" | **boolean_unsatisfied**: Younger v. Harris — required terms/proximity not met in full text |
| LF-BS-1909 | all_federal | keyword | obviousness +s "prior art" | **landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-1915 | one_state MO | keyword | "security deposit" & tenant % criminal | **empty**: no results |
| LF-BS-1917 | one_state OK | keyword | "prescriptive easement" /s servient | **empty**: no results |
| LF-BS-1920 | one_state_plus_federal CT –1999-12-31 | auto | "procedural due process" /10 "property interest" | **boolean_unsatisfied**: Mullane v. Central Hanover Bank & Trust Co. — required terms/proximity not met in full text |
| LF-BS-1921 | all_states | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1925 | all_federal | keyword | retaliat! /25 "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-1927 | one_state MA | keyword | "prenuptial agreement" w/s "full disclosure" | **empty**: no results |
| LF-BS-1931 | federal_circuit 8 | keyword | utteran! /p hearsay | **empty**: no results |
| LF-BS-1932 | one_state_plus_federal PA 1990-01-01–2010-12-31 | auto | "deceptive and unfair trade practices" +s consumer | **duplicate_hit**: #4 J & R Ice Cream Corp. v. California Smoothie Licensing Corp. 31 F.3d 1259 |
| LF-BS-1933 | us_supreme_court | keyword | deprivat! /p "property interest" | **empty**: no results<br>**landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-1934 | federal_circuit 2 2015-01-01– | auto | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-1935 | one_state_plus_federal WY | keyword | ("anticipatory repudiation" OR "anticipatory breach") /s repudiat! | **empty**: no results |
| LF-BS-1939 | federal_circuit 5 2023-01-01– | keyword | "motion to compel arbitration" w/s unconscionab! | **empty**: no results |
| LF-BS-1945 | one_state MA 2020-01-01– | keyword | "cohabitation" /s "express contract" | **empty**: no results |
| LF-BS-1946 | federal_circuit 11 | auto | "crime involving moral turpitude" /s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-1951 | one_state NE 2015-01-01– | keyword | "proportional to the needs of the case" w/p discovery and "undue burden" | **empty**: no results |
| LF-BS-1952 | all_federal | auto | "loss causation" +s "inflated price" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1956 | federal_circuit 3 | auto | "likelihood of confusion" +s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-1957 | one_state ME | keyword | interrogat! /p custody | **empty**: no results |
| LF-BS-1958 | one_state CA | auto | manufactur! /25 manufacturer | **landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-1959 | all_federal | keyword | "prevailing party" +s lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1961 | all_states_and_federal | keyword | "equal protection" /s "strict scrutiny" | **landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-1973 | one_state NJ | keyword | pollut! /p irritant | **duplicate_hit**: #6 BRONZE v. Commerce & Ind. 611 A.2d 667 |
| LF-BS-1979 | one_state MA 2015-01-01– | keyword | "prenuptial agreement" +s "full disclosure" | **empty**: no results |
| LF-BS-1994 | all_states_and_federal | auto | "prevailing party" /p lodestar & "reasonable hourly rate" | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1995 | federal_circuit 9 | keyword | "eminent domain" & "just compensation" % criminal | **empty**: no results<br>**landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-2003 | one_state_plus_federal DC | keyword | "vacate the arbitration award" /p "exceeded their powers" & "evident partiality" | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-2007 | federal_district MI | keyword | "parallel conduct" & conspira! % criminal | **empty**: no results |
| LF-BS-2009 | one_state_plus_federal WI | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results |
| LF-BS-2010 | one_state_plus_federal ND | auto | ("intentional infliction of emotional distress" OR "outrageous conduct") /s "extreme and outrageous" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2016 | one_state_plus_federal RI 2000-01-01–2009-12-31 | auto | "design defect" w/15 ("consumer expectations" or "risk-utility") | **boolean_unsatisfied**: Punsoda-Diaz v. Ford Motor Company — required terms/proximity not met in full text |
| LF-BS-2017 | one_state_plus_federal MO | keyword | premis! /25 "duty to warn" | **boolean_unsatisfied**: Shell v. Missouri Pacific Railroad Company v. Robert M. Shel — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Robinson v. Brandtjen & Kluge, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Murphy v. L & J Press Corporation — required terms/proximity not met in full text |
| LF-BS-2019 | federal_district MN | keyword | "regulatory taking" /p "investment-backed expectations" & "economically viable" | **empty**: no results |
| LF-BS-2021 | one_state_plus_federal RI | keyword | "prior bad acts" +s "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2023 | all_states_and_federal 2020-01-01– | keyword | "cohabitation" & "express contract" % criminal | **empty**: no results |
| LF-BS-2025 | one_state_plus_federal IL 2023-01-01– | keyword | "adverse possession" w/s "open and notorious" | **empty**: no results |
| LF-BS-2027 | one_state_plus_federal HI | keyword | "excited utterance" & hearsay % contract | **empty**: no results |
| LF-BS-2028 | one_state AZ | auto | "economic loss rule" /s "purely economic" | **duplicate_hit**: #2 HUGHES CUSTOM BLDG, LLC v. Davey 212 P.3d 865 |
| LF-BS-2031 | one_state CA | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-2033 | one_state_plus_federal TX 2020-01-01– | keyword | retaliat! /p "materially adverse" | **empty**: no results |
| LF-BS-2034 | one_state OH –1999-12-31 | auto | enrich! /p benefit | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results |
| LF-BS-2043 | all_states | keyword | "preliminary injunction" AND "irreparable harm" AND NOT divorce | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-2044 | us_supreme_court | auto | "fair use" +s copyright | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results<br>**landmark_missing**: wanted /campbell\|acuff-rose\|warhol\|google llc v\. oracle\|harper & row\|sony corp/ in top 10 |
| LF-BS-2045 | federal_circuit 4 | keyword | ("reasonable accommodation" OR "undue hardship") /s "interactive process" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-2046 | federal_circuit 1 | auto | monell AND "policy or custom" AND NOT contract | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results<br>**landmark_missing**: wanted /monell\|city of canton\|connick\|pembaur\|bd\. of cnty\|board of county/ in top 10 |
| LF-BS-2047 | all_states_and_federal 2015-01-01– | keyword | ("reasonable accommodation" OR "undue hardship") AND "qualified individual" NOT criminal | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results |
| LF-BS-2049 | federal_circuit 9 | keyword | "hostile work environment" w/p "severe or pervasive" and employer | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results<br>**landmark_missing**: wanted /meritor\|harris v\. forklift\|faragher\|burlington indus\|ellerth\|oncale\|vance/ in top 10 |
| LF-BS-2050 | one_state_plus_federal OH | auto | homestead & devise % criminal | **degraded**: [{"engine":"keyword","code":"timeout","message":"The search engine timed out."}]<br>**empty**: no results |
| LF-BS-2052 | one_state SC 2000-01-01–2009-12-31 | auto | "implied covenant of good faith and fair dealing" /10 discretion | **boolean_unsatisfied**: RoTec Services, Inc. v. Encompass Services, Inc. — required terms/proximity not met in full text |
| LF-BS-2060 | one_state ND | auto | ("summary judgment" OR "judgment as a matter of law") /s "genuine dispute" | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}] |
| LF-BS-2061 | federal_circuit 1 | keyword | "second amendment" & "historical tradition" % contract | **empty**: no results<br>**landmark_missing**: wanted /bruen\|heller\|mcdonald\|rahimi/ in top 10 |
| LF-BS-2062 | federal_circuit 5 | auto | ("automatic stay" OR "relief from stay") /s "section 362" | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}]<br>**landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2071 | all_federal | keyword | erisa /p "abuse of discretion" & "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-2076 | one_state_plus_federal AL | auto | "vacate the arbitration award" /10 "exceeded their powers" | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}]<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10<br>**boolean_unsatisfied**: Managed Health Care Admin., Inc. v. Cross — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Anderton v. The Practice-Monroeville, P.C. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Locklear Auto. Grp., Inc. v. Hubbard — required terms/proximity not met in full text |
| LF-BS-2077 | federal_district MO | keyword | "confrontation clause" +s testimonial | **boolean_unsatisfied**: Frairson v. Falkenrath — required terms/proximity not met in full text |
| LF-BS-2079 | one_state AK | keyword | "duty to defend" /s "potential for coverage" | **empty**: no results |
| LF-BS-2087 | federal_circuit 2 | keyword | retaliation +s "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2089 | one_state VT 1990-01-01–2010-12-31 | keyword | "non-compete" AND "legitimate business interest" AND reasonabl! | **empty**: no results |
| LF-BS-2100 | one_state OK –1999-12-31 | auto | convenien! /p "private interest" | **boolean_unsatisfied**: Burk v. K-Mart Corp. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Keel v. Titan Construction Corp. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Hinson v. Cameron — required terms/proximity not met in full text |
| LF-BS-2103 | one_state_plus_federal MA | keyword | miranda +s custody | **landmark_missing**: wanted /miranda\|berghuis\|edwards v\. ariz\|j\.d\.b\.\|rhode island v\. innis\|dickerson/ in top 10 |
| LF-BS-2111 | one_state_plus_federal WI | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-2112 | federal_circuit dc | auto | "hostile work environment" w/s "severe or pervasive" | **boolean_unsatisfied**: Meritor Savings Bank v. Vinson — required terms/proximity not met in full text |
| LF-BS-2113 | one_state_plus_federal SD | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-2125 | one_state GA | keyword | convenien! /25 "public interest" | **empty**: no results |
| LF-BS-2129 | one_state SD 1990-01-01–2010-12-31 | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **empty**: no results |
| LF-BS-2137 | one_state LA | keyword | homestead! /p devise | **boolean_unsatisfied**: Wessel v. Union Savings & Loan Ass'n — required terms/proximity not met in full text<br>**boolean_unsatisfied**: In re Tulane Homestead Ass'n — required terms/proximity not met in full text |
| LF-BS-2143 | one_state_plus_federal GA | keyword | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2146 | all_states_and_federal | auto | defect! /25 "risk-utility" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-2151 | us_supreme_court | keyword | causat! /p "inflated price" | **empty**: no results<br>**landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2153 | one_state AL | keyword | "dog bite" AND "strict liability" AND NOT contract | **empty**: no results |
| LF-BS-2155 | one_state_plus_federal IN | keyword | asylum w/p persecution and "particular social group" | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-2159 | all_states | keyword | "parol evidence rule" w/s integrat! | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-2161 | all_federal | keyword | "age discrimination" /p "but-for" & pretext | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-2167 | us_supreme_court | keyword | "reasonable suspicion" /10 frisk | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-2169 | federal_circuit 6 2023-01-01– | keyword | substan! /p "business purpose" | **empty**: no results |
| LF-BS-2173 | federal_circuit 11 2000-01-01–2009-12-31 | keyword | pretext! /p pretext | **boolean_unsatisfied**: Baldwin v. Reese — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Rumsfeld v. Padilla — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Georgia v. Randolph — required terms/proximity not met in full text |
| LF-BS-2181 | one_state_plus_federal CA | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-2185 | all_federal | keyword | "automobile exception" & "probable cause" % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /carroll\|california v\. acevedo\|arizona v\. gant\|collins v\. virginia\|chambers v\. maroney/ in top 10 |
| LF-BS-2188 | one_state AZ 2023-01-01– | auto | "implied warranty of merchantability" w/s disclaim! | **empty**: no results |
| LF-BS-2193 | all_federal | keyword | "intentional infliction of emotional distress" /10 "extreme and outrageous" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2197 | one_state_plus_federal ND 2015-01-01– | keyword | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-2205 | one_state_plus_federal MS 2023-01-01– | keyword | "comparative negligence" +s "contributory negligence" | **empty**: no results |
| LF-BS-2208 | federal_circuit 9 | auto | "likelihood of confusion" & trademark % criminal | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-2211 | one_state_plus_federal MD 2023-01-01– | keyword | ("economic substance" OR "sham transaction") AND commissioner NOT criminal | **empty**: no results |
| LF-BS-2219 | one_state NE 2015-01-01– | keyword | ("anticipatory repudiation" OR "anticipatory breach") /s repudiat! | **empty**: no results |
| LF-BS-2221 | us_supreme_court | keyword | abstention /p "pending state" & "comity" | **boolean_unsatisfied**: Huffman v. Pursue, Ltd. — required terms/proximity not met in full text |
| LF-BS-2225 | federal_circuit 7 | keyword | privileg! /25 confidential! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-2239 | one_state_plus_federal IL 2015-01-01– | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-2243 | all_states_and_federal | keyword | "statute of limitations" w/15 ("equitable tolling" or "discovery rule") | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-2245 | federal_district NY | keyword | "procedural due process" & "property interest" % contract | **empty**: no results |
| LF-BS-2251 | one_state IL | keyword | "additional insured" /s "arising out of" | **duplicate_hit**: #5 State Auto. Mut. v. Development 364 Ill. App. 3d 946<br>**duplicate_hit**: #8 Casualty Insurance v. North-Brook Property & Casualty Insura 150 Ill. App. 3d 472 |
| LF-BS-2253 | one_state_plus_federal NM | keyword | hir! /p "negligent supervision" | **empty**: no results |
| LF-BS-2259 | all_states_and_federal | keyword | "open and obvious" w/p invitee and "duty to warn" | **landmark_missing**: wanted /kandil-elsayed\|lugo v\. ameritech/ in top 10 |
| LF-BS-2261 | federal_circuit 7 | keyword | scienter /s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2262 | one_state_plus_federal IL | auto | guardianship w/15 (ward or "least restrictive") | **duplicate_hit**: #2 Mabry v. Roberts 281 Ill. App. 3d 76 |
| LF-BS-2267 | one_state DC | keyword | "force majeure" +s frustration | **empty**: no results |
| LF-BS-2269 | one_state OH | keyword | ("demand futility" OR "derivative action") /s "demand excused" | **empty**: no results |
| LF-BS-2273 | us_supreme_court | keyword | scienter & "rule 10b-5" % criminal | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2277 | one_state_plus_federal NJ | keyword | "social host" /s intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-2281 | federal_circuit 8 | keyword | persecut! /25 "particular social group" | **empty**: no results<br>**landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-2293 | one_state_plus_federal MA | keyword | ("mcdonnell douglas" OR "burden-shifting") /s pretext | **boolean_unsatisfied**: Trans World Airlines, Inc. v. Thurston — required terms/proximity not met in full text |
| LF-BS-2295 | one_state NC | keyword | "medical malpractice" & "standard of care" % patent | **empty**: no results |
| LF-BS-2299 | one_state DE | keyword | "social host" /s intoxicat! | **empty**: no results |
| LF-BS-2303 | one_state_plus_federal ND | keyword | "duty to warn" w/15 (psychotherapist or "identifiable victim") | **empty**: no results |
| LF-BS-2304 | federal_district IN | auto | "rule of reason" AND "anticompetitive effects" AND "relevant market" | **boolean_unsatisfied**: DIXON v. NATIONAL HOT ROD ASSOCIATION — required terms/proximity not met in full text |
| LF-BS-2305 | one_state NY | keyword | "prescriptive easement" w/15 (servient or dominant) | **boolean_unsatisfied**: Koziatek v. SJB Dev. Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Bekkering v. Christiana — required terms/proximity not met in full text |
| LF-BS-2309 | federal_circuit 3 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2313 | one_state AZ 2023-01-01– | keyword | "implied consent" +s refus! | **empty**: no results |
| LF-BS-2316 | one_state WY | auto | ("underinsured motorist" OR "uninsured motorist") AND policy NOT criminal | **boolean_not_violated**: State Farm Mutual Automobile Insurance Co. v. Shrader — contains excluded term(s): criminal |
| LF-BS-2317 | one_state_plus_federal SD | keyword | "attorney-client privilege" w/15 (waiv! or confidential!) | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-2319 | all_federal | keyword | obviousness & "prior art" % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-2323 | federal_circuit 3 | keyword | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2336 | federal_circuit 9 | auto | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-2337 | one_state SD 1990-01-01–2010-12-31 | keyword | "constructive eviction" w/p tenant and abandon! | **empty**: no results |
| LF-BS-2342 | federal_circuit 3 | auto | retaliat! /25 "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2350 | federal_circuit 7 2020-01-01– | auto | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-2352 | one_state_plus_federal MD | auto | "testamentary capacity" & testator % criminal | **boolean_not_violated**: Calder v. Bull — contains excluded term(s): criminal<br>**boolean_not_violated**: Zook v. Pesce — contains excluded term(s): criminal |
| LF-BS-2357 | one_state IL | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-2365 | all_states_and_federal | keyword | easement! /p servient | **result_missing_court**: #9 Thar v. Edwin N. Moran Revocable Trust (905 P.2d 413) |
| LF-BS-2366 | one_state_plus_federal VA | auto | "cell-site location" /s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-2369 | one_state ME | keyword | "duty to warn" & psychotherapist % contract | **empty**: no results |
| LF-BS-2371 | federal_circuit 6 –1999-12-31 | keyword | "crime involving moral turpitude" /10 "categorical approach" | **empty**: no results |
| LF-BS-2374 | one_state KS 2020-01-01– | auto | "unjust enrichment" AND benefit AND "express contract" | **empty**: no results |
| LF-BS-2377 | one_state NE | keyword | "anticipatory repudiation" /p repudiat! & "adequate assurance" | **empty**: no results |
| LF-BS-2379 | one_state DE | keyword | "business judgment rule" /10 "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-2380 | one_state NV 1990-01-01–2010-12-31 | auto | "res ipsa loquitur" w/p inference and negligence | **after_dateTo**: #5 2013-04-25 > 2010-12-31 |
| LF-BS-2381 | one_state_plus_federal MS | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-2383 | one_state WY | keyword | "trade secret" w/p "reasonable measures" and "independent economic value" | **empty**: no results |
| LF-BS-2391 | one_state_plus_federal FL | keyword | "transitory foreign substance" & "actual or constructive knowledge" % medical | **empty**: no results |
| LF-BS-2393 | one_state CA 2015-01-01– | keyword | "equitable distribution" /p "nonmarital" & commingl! | **empty**: no results |
| LF-BS-2394 | all_states_and_federal | auto | "malicious prosecution" +s "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-2400 | one_state NJ | auto | "negligence per se" /s "class of persons" | **boolean_unsatisfied**: Townsend v. Noah Pierre (072357) — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Nisivoccia v. Glass Gardens, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Qian v. Toll Brothers, Inc. (073982) — required terms/proximity not met in full text |
| LF-BS-2409 | federal_circuit 3 2023-01-01– | keyword | "summary judgment" & "genuine dispute" % patent | **empty**: no results |
| LF-BS-2410 | federal_circuit 11 | auto | abstention w/15 ("pending state" or "comity") | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-2413 | federal_district TX | keyword | removab! /25 removab! | **boolean_unsatisfied**: Oche v. Robert Cerna et al. — required terms/proximity not met in full text |
| LF-BS-2419 | all_states_and_federal –1999-12-31 | keyword | "parallel conduct" /s conspira! | **empty**: no results |
| LF-BS-2420 | all_federal | auto | "intentional infliction of emotional distress" w/15 ("extreme and outrageous" or "severe emotional distress") | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2421 | federal_circuit 8 2020-01-01– | keyword | locat! /25 "reasonable expectation of privacy" | **empty**: no results |
| LF-BS-2424 | one_state_plus_federal NY | auto | "reasonable suspicion" +s frisk | **boolean_unsatisfied**: Terry v. Ohio — required terms/proximity not met in full text |
| LF-BS-2425 | federal_circuit 1 2023-01-01– | keyword | "class certification" w/p commonality and predominance | **boolean_unsatisfied**: Nightingale v. National Grid USA Service Company Inc. — required terms/proximity not met in full text |
| LF-BS-2426 | us_supreme_court 2023-01-01– | auto | "personal jurisdiction" & "minimum contacts" % divorce | **empty**: no results |
| LF-BS-2427 | federal_circuit 7 | keyword | ("procedural due process" OR "notice and an opportunity to be heard") /s "property interest" | **landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-2430 | all_federal | auto | nonmov! /p "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-2435 | federal_district SC | keyword | deference +s "statutory ambiguity" | **empty**: no results |
| LF-BS-2437 | federal_circuit 11 | keyword | propensit! /25 propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2443 | federal_circuit 8 | keyword | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-2448 | one_state OR 2015-01-01– | auto | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **boolean_unsatisfied**: Vukanovich v. Kine — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Wall Street Management & Capital, Inc. v. Crites — required terms/proximity not met in full text |
| LF-BS-2449 | one_state_plus_federal ID | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **duplicate_hit**: #5 Rivera v. Passenger 331 F.3d 1074 |
| LF-BS-2451 | us_supreme_court | keyword | "motion to dismiss" +s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2452 | one_state_plus_federal PA | auto | confront! /25 cross-examin! | **landmark_missing**: wanted /crawford v\. washington\|davis v\. washington\|melendez-diaz\|bullcoming\|ohio v\. clark\|smith v\. arizona/ in top 10 |
| LF-BS-2453 | all_federal | keyword | "intentional infliction of emotional distress" & "extreme and outrageous" % patent | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2455 | federal_district AK | keyword | (asylum OR "well-founded fear") /s persecution | **empty**: no results |
| LF-BS-2458 | federal_circuit 6 1990-01-01–2010-12-31 | auto | "consent to search" & "totality of the circumstances" % civil | **empty**: no results |
| LF-BS-2461 | one_state_plus_federal WA | keyword | "free exercise" /s "neutral and generally applicable" | **boolean_unsatisfied**: State v. Arlene's Flowers, Inc. — required terms/proximity not met in full text |
| LF-BS-2464 | federal_circuit 7 | auto | scient! /p "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2465 | federal_district NC 2020-01-01– | keyword | interrogat! /25 waiv! | **empty**: no results |
| LF-BS-2467 | one_state NE | keyword | "fraudulent inducement" /10 "justifiable reliance" | **empty**: no results |
| LF-BS-2473 | federal_district NJ 2015-01-01– | keyword | ("economic substance" OR "sham transaction") AND commissioner NOT criminal | **boolean_unsatisfied**: Securities & Exchange Commission v. Cooper — required terms/proximity not met in full text |
| LF-BS-2481 | all_states | keyword | "quiet title" & deed % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-2483 | one_state_plus_federal VA | keyword | ("res judicata" OR "claim preclusion") /s "final judgment" | **landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-2487 | federal_circuit 1 | keyword | "respondeat superior" & "scope of employment" % patent | **empty**: no results |
| LF-BS-2489 | one_state FL | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-2494 | one_state_plus_federal VT | auto | preclu! /25 "same cause of action" | **landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-2496 | us_supreme_court | auto | scienter & "rule 10b-5" % criminal | **boolean_not_violated**: Skilling v. United States — contains excluded term(s): criminal<br>**boolean_not_violated**: Ernst & Ernst v. Hochfelder — contains excluded term(s): criminal |
| LF-BS-2498 | one_state_plus_federal CA | auto | "claim construction" & specification % criminal | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-2501 | one_state OK | keyword | "prenuptial agreement" /p "full disclosure" & unconscionab! | **empty**: no results |
| LF-BS-2502 | all_states_and_federal | auto | "attorney-client privilege" w/15 (waiv! or confidential!) | **result_missing_court**: #6 White v. NYLIFE Securities, LLC (no cite)<br>**landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-2505 | federal_district NM 2023-01-01– | keyword | nondischargeab! /10 "false pretenses" | **empty**: no results |
| LF-BS-2508 | federal_district NM –1999-12-31 | auto | "crime involving moral turpitude" & "categorical approach" % contract | **boolean_unsatisfied**: United States v. Martinez — required terms/proximity not met in full text<br>**boolean_not_violated**: National Civil Service League v. City of Santa Fe, NM — contains excluded term(s): contract |
| LF-BS-2515 | one_state_plus_federal CA | keyword | habitab! /p tenant | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-2517 | all_states | keyword | "open and obvious" AND invitee AND "duty to warn" | **landmark_missing**: wanted /kandil-elsayed\|lugo v\. ameritech/ in top 10 |
| LF-BS-2520 | one_state_plus_federal SC | auto | "personal jurisdiction" w/15 ("minimum contacts" or "fair play") | **boolean_unsatisfied**: International Shoe Co. v. Washington — required terms/proximity not met in full text |
| LF-BS-2521 | one_state_plus_federal UT –1999-12-31 | keyword | erisa & "abuse of discretion" % criminal | **empty**: no results |
| LF-BS-2523 | one_state_plus_federal OH | keyword | ("procedural due process" OR "notice and an opportunity to be heard") /s "property interest" | **landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-2525 | federal_circuit 6 | keyword | "summary judgment" w/s "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-2527 | federal_circuit 9 | keyword | abstain! /25 "comity" | **duplicate_hit**: #7 31 Collier bankr.cas.2d 890, Bankr. L. Rep. P 75,965 in Re V 27 F.3d 406<br>**landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-2532 | federal_circuit 5 2015-01-01– | auto | "claim construction" /s specification | **boolean_unsatisfied**: OPTRONIC SCIENCES LLC v. BOE Technology Group Co., Ltd. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: NEC Corporation v. Anker Innovations Technology Co., Ltd. — required terms/proximity not met in full text |
| LF-BS-2533 | all_states | keyword | "respondeat superior" /s "scope of employment" | **boolean_unsatisfied**: Bates v. CRSD — required terms/proximity not met in full text |
| LF-BS-2537 | one_state_plus_federal ND 1990-01-01–2010-12-31 | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results |
| LF-BS-2540 | all_states_and_federal | auto | capaci! /25 "natural objects of his bounty" | **result_missing_court**: #1 Kashef v. BNP Paribas SA (no cite) |
| LF-BS-2543 | federal_circuit 10 | keyword | daubert +s reliab! | **landmark_missing**: wanted /daubert\|kumho\|joiner/ in top 10 |
| LF-BS-2544 | all_states_and_federal | auto | "motion to dismiss" +s plausib! | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2545 | federal_circuit 6 | keyword | monell AND "policy or custom" AND NOT contract | **boolean_not_violated**: Monell v. New York City Dept. of Social Servs. — contains excluded term(s): contract |
| LF-BS-2546 | one_state MD 2023-01-01– | auto | "design defect" /10 "consumer expectations" | **empty**: no results |
| LF-BS-2550 | federal_circuit 2 | auto | retaliation /p "materially adverse" & "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2553 | federal_district FL 2000-01-01–2009-12-31 | keyword | "reasonable suspicion" w/s frisk | **empty**: no results |
| LF-BS-2559 | federal_circuit 11 | keyword | indiffer! /p prison! | **landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-2563 | us_supreme_court | keyword | condemn! /p "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-2565 | one_state MI –1999-12-31 | keyword | "liquidated damages" & penalty % criminal | **empty**: no results |
| LF-BS-2567 | one_state_plus_federal CA | keyword | invit! /25 "duty of care" | **landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-2569 | one_state NJ | keyword | apprendi & jury % civil | **boolean_not_violated**: State v. Harris — contains excluded term(s): civil<br>**boolean_not_violated**: State v. Pomianek — contains excluded term(s): civil |
| LF-BS-2577 | one_state FL 2015-01-01– | keyword | "promissory estoppel" w/s "clear and definite promise" | **empty**: no results |
| LF-BS-2580 | all_states_and_federal | auto | "medical malpractice" /p "standard of care" & "expert testimony" | **boolean_unsatisfied**: Daubert v. Merrell Dow Pharmaceuticals, Inc. — required terms/proximity not met in full text |
| LF-BS-2587 | federal_circuit 11 | keyword | "crime involving moral turpitude" +s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-2588 | us_supreme_court | auto | "automatic stay" /10 "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2592 | us_supreme_court | auto | "malicious prosecution" AND "probable cause" AND NOT contract | **boolean_not_violated**: Albright v. Oliver — contains excluded term(s): contract |
| LF-BS-2601 | one_state_plus_federal WA | keyword | "economic substance" AND "business purpose" AND commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-2606 | federal_circuit 8 | auto | plausib! /25 "factual allegations" | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2609 | one_state KS | keyword | "vacate the arbitration award" /p "exceeded their powers" & "evident partiality" | **empty**: no results |
| LF-BS-2613 | all_federal | keyword | eligib! /p "section 101" | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-2617 | federal_circuit 11 | keyword | "hostile work environment" & "severe or pervasive" % criminal | **empty**: no results<br>**landmark_missing**: wanted /meritor\|harris v\. forklift\|faragher\|burlington indus\|ellerth\|oncale\|vance/ in top 10 |
| LF-BS-2619 | one_state ME 2015-01-01– | keyword | "child support" /10 imput! | **empty**: no results |
| LF-BS-2620 | one_state VT | auto | "social host" w/s intoxicat! | **empty**: no results |
| LF-BS-2623 | one_state MI –1999-12-31 | keyword | "economic loss rule" AND "purely economic" AND NOT criminal | **empty**: no results |
| LF-BS-2626 | all_states_and_federal 2000-01-01–2009-12-31 | auto | conspir! /25 "sherman act" | **result_missing_court**: #6 Opinion Number (no cite) |
| LF-BS-2628 | federal_circuit 2 | auto | asylum AND persecution AND NOT contract | **boolean_not_violated**: Lin v. United States Department of Justice — contains excluded term(s): contract |
| LF-BS-2637 | one_state_plus_federal IL | keyword | retaliat! /p "materially adverse" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2642 | us_supreme_court 2020-01-01– | auto | erisa & "abuse of discretion" % criminal | **empty**: no results |
| LF-BS-2643 | federal_circuit federal | keyword | "procedural due process" & "property interest" % contract | **empty**: no results<br>**landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-2645 | one_state SD | keyword | "anticipatory repudiation" AND repudiat! AND NOT criminal | **empty**: no results |
| LF-BS-2664 | all_federal | auto | "age discrimination" /s "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-2667 | one_state TX | keyword | "pierce the corporate veil" AND undercapitaliz! AND "corporate form" | **empty**: no results |
| LF-BS-2668 | one_state_plus_federal LA | auto | "regulatory taking" /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-2669 | federal_circuit 2 | keyword | "economic substance" /10 "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-2673 | one_state_plus_federal MS 1990-01-01–2010-12-31 | keyword | "open and obvious" w/p invitee and "duty to warn" | **duplicate_hit**: #4 Hill v. International Paper Company 121 F.3d 168 |
| LF-BS-2678 | all_federal | auto | citizen! /p "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-2679 | federal_circuit 11 | keyword | immun! /p "constitutional right" | **landmark_missing**: wanted /harlow\|pearson v\. callahan\|al-kidd\|saucier\|anderson v\. creighton\|kisela\|mullenix\|district of columbia v\. wesby/ in top 10 |
| LF-BS-2680 | us_supreme_court 2023-01-01– | auto | "parallel conduct" w/s conspira! | **empty**: no results |
| LF-BS-2687 | one_state CO | keyword | "promissory estoppel" /s "clear and definite promise" | **empty**: no results |
| LF-BS-2689 | one_state WA 2020-01-01– | keyword | expert! /25 "rule 702" | **empty**: no results |
| LF-BS-2708 | one_state_plus_federal DE | auto | locat! /p warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-2710 | all_states_and_federal | auto | "prior bad acts" & "other crimes" % contract | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2712 | us_supreme_court | auto | "malicious prosecution" w/s "probable cause" | **boolean_unsatisfied**: Illinois v. Gates — required terms/proximity not met in full text |
| LF-BS-2717 | federal_circuit 2 | keyword | "likelihood of confusion" /p trademark & "strength of the mark" | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-2723 | one_state_plus_federal NJ | keyword | alcohol! /p intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-2724 | federal_circuit 11 | auto | nondischargeab! & "false pretenses" % criminal | **boolean_unsatisfied**: Brown v. Felsen — required terms/proximity not met in full text |
| LF-BS-2736 | one_state MT | auto | "fraudulent inducement" /p "justifiable reliance" & misrepresent! | **boolean_unsatisfied**: Morrow v. Bank of America, N.A. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Fossen v. Fossen — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Hinderman v. Krivor — required terms/proximity not met in full text |
| LF-BS-2739 | one_state CA | keyword | "comparative negligence" /10 "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-2744 | federal_circuit 5 | auto | "diversity jurisdiction" /s "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-2746 | one_state_plus_federal CA | auto | "bad faith" /s insurer | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10 |
| LF-BS-2747 | one_state FL 1990-01-01–2010-12-31 | keyword | (guardianship OR "incapacitated person") /s ward | **duplicate_hit**: #7 In re Guardianship of Gechtman 719 So. 2d 960<br>**duplicate_hit**: #8 Public Trustee of Stewart House v. First Union National Bank 639 So. 2d 60 |
| LF-BS-2748 | one_state SD | auto | "fraudulent inducement" & "justifiable reliance" % criminal | **boolean_not_violated**: State v. Morse — contains excluded term(s): criminal<br>**boolean_not_violated**: State v. Klaudt — contains excluded term(s): criminal<br>**boolean_not_violated**: State v. Jackson — contains excluded term(s): criminal |
| LF-BS-2751 | all_states_and_federal | keyword | "reasonable suspicion" /s frisk | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-2760 | federal_district WI | auto | confus! /25 "strength of the mark" | **boolean_unsatisfied**: H-D U.S.A., LLC v. SunFrog, LLC — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Wolf Appliance, Inc. v. Viking Range Corp. — required terms/proximity not met in full text |
| LF-BS-2761 | us_supreme_court 2000-01-01–2009-12-31 | keyword | "parallel conduct" +s conspira! | **empty**: no results |
| LF-BS-2773 | all_federal | keyword | anticompetit! /25 "relevant market" | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10<br>**boolean_unsatisfied**: Bassett v. National Collegiate Athletic Ass'n — required terms/proximity not met in full text |
| LF-BS-2777 | one_state DE | keyword | "motion to compel arbitration" +s unconscionab! | **empty**: no results |
| LF-BS-2779 | one_state_plus_federal CA | keyword | disclos! /p "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-2785 | one_state CA | keyword | "force majeure" +s frustration | **boolean_unsatisfied**: Casitas v. Swing House Stages CA2/5 — required terms/proximity not met in full text |
| LF-BS-2789 | federal_circuit dc 1990-01-01–2010-12-31 | keyword | "parallel conduct" /p conspira! & "sherman act" | **empty**: no results |
| LF-BS-2791 | one_state TX –1999-12-31 | keyword | "transitory foreign substance" w/p "actual or constructive knowledge" and premises | **empty**: no results |
| LF-BS-2794 | one_state NJ | auto | "social host" /10 intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-2796 | one_state_plus_federal MI | auto | "malicious prosecution" /s "probable cause" | **boolean_unsatisfied**: Illinois v. Gates — required terms/proximity not met in full text |
| LF-BS-2800 | federal_circuit federal 2015-01-01– | auto | "statute of limitations" & "equitable tolling" % patent | **empty**: no results |
| LF-BS-2809 | federal_circuit 3 | keyword | "likelihood of confusion" /p trademark & "strength of the mark" | **duplicate_hit**: #10 Card v. Jpmorgan Chase & Co. Chase Manhattan Bank Usa, N.A.  432 F.3d 463<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2811 | all_federal | keyword | outrage! /25 "severe emotional distress" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2817 | all_federal | keyword | retaliation /p "materially adverse" & "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2819 | one_state AZ 2015-01-01– | keyword | "constructive eviction" & tenant % criminal | **empty**: no results |
| LF-BS-2820 | all_federal | auto | "cell-site location" w/p warrant and "reasonable expectation of privacy" | **boolean_unsatisfied**: Katz v. United States — required terms/proximity not met in full text |
| LF-BS-2823 | federal_circuit dc | keyword | "summary judgment" AND "genuine dispute" AND "material fact" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-2832 | one_state_plus_federal NJ | auto | "loss of consortium" & spouse % patent | **boolean_unsatisfied**: Long v. Landy — required terms/proximity not met in full text |
| LF-BS-2833 | all_federal 2015-01-01– | keyword | asylum & persecution % contract | **boolean_not_violated**: Department of Homeland Security v. Thuraissigiam — contains excluded term(s): contract |
| LF-BS-2841 | all_federal | keyword | monell +s "policy or custom" | **landmark_missing**: wanted /monell\|city of canton\|connick\|pembaur\|bd\. of cnty\|board of county/ in top 10 |
| LF-BS-2847 | all_federal | keyword | "public forum" & "content-based" % contract | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /reed v\. town\|perry educ\|mccullen\|ward v\. rock\|cornelius\|pleasant grove/ in top 10 |
| LF-BS-2849 | one_state UT | keyword | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **empty**: no results |
| LF-BS-2851 | federal_circuit 2 | keyword | "prevailing party" w/s lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-2855 | federal_circuit 2 | keyword | "consent to search" w/p "totality of the circumstances" and coerc! | **landmark_missing**: wanted /schneckloth\|bumper\|georgia v\. randolph\|illinois v\. rodriguez/ in top 10 |
| LF-BS-2856 | one_state CA | auto | "negligent infliction of emotional distress" /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10<br>**boolean_unsatisfied**: Thing v. Chusa — required terms/proximity not met in full text |
| LF-BS-2858 | one_state_plus_federal WA –1999-12-31 | auto | "attorney-client privilege" w/15 (waiv! or confidential!) | **duplicate_hit**: #9 27 Collier bankr.cas.2d 1442, Bankr. L. Rep. P 75,016 978 F.2d 1159 |
| LF-BS-2859 | one_state_plus_federal OH | keyword | ("pierce the corporate veil" OR "alter ego") /s undercapitaliz! | **empty**: no results |
| LF-BS-2861 | one_state_plus_federal MA | keyword | ("regulatory taking" OR "inverse condemnation") /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-2865 | one_state_plus_federal IA | keyword | "loss of consortium" & spouse % patent | **empty**: no results |
| LF-BS-2868 | one_state TX | auto | "free exercise" w/15 ("neutral and generally applicable" or burden) | **boolean_unsatisfied**: Children of the Kingdom v. Central Appraisal District of Tay — required terms/proximity not met in full text |
| LF-BS-2869 | all_federal 2023-01-01– | keyword | "crime involving moral turpitude" & "categorical approach" % contract | **empty**: no results |
| LF-BS-2875 | all_states 1990-01-01–2010-12-31 | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-2880 | all_states | auto | "bad faith" +s insurer | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10<br>**boolean_unsatisfied**: U.S. Acute Care Solutions, L.L.C. v. Doctors Co. Risk Retent — required terms/proximity not met in full text |
| LF-BS-2887 | one_state MA | keyword | "anticipatory repudiation" w/s repudiat! | **empty**: no results |
| LF-BS-2889 | all_federal | keyword | "regulatory taking" /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-2891 | one_state WV 2023-01-01– | keyword | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-2892 | one_state_plus_federal PA | auto | locat! /25 "reasonable expectation of privacy" | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10<br>**boolean_unsatisfied**: Katz v. United States — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Commonwealth v. Duncan — required terms/proximity not met in full text<br>**boolean_unsatisfied**: United States v. Katzin — required terms/proximity not met in full text |
| LF-BS-2895 | one_state LA | keyword | "implied covenant of good faith and fair dealing" & discretion % criminal | **empty**: no results |
| LF-BS-2901 | one_state TX | keyword | "transitory foreign substance" & "actual or constructive knowledge" % medical | **empty**: no results |
| LF-BS-2904 | one_state_plus_federal GA –1999-12-31 | auto | premis! /25 "duty to warn" | **boolean_unsatisfied**: Ice v. Pece — required terms/proximity not met in full text |
| LF-BS-2905 | us_supreme_court | keyword | "ineffective assistance of counsel" w/s prejudice | **boolean_unsatisfied**: Perry v. Leeke — required terms/proximity not met in full text |
| LF-BS-2911 | all_states | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-2912 | federal_circuit federal | auto | "statute of limitations" w/p "equitable tolling" and "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-2913 | one_state_plus_federal TN | keyword | benefit! /25 "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-2914 | all_federal | auto | ("statute of limitations" OR "limitations period") AND "discovery rule" NOT patent | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-2915 | all_states_and_federal | keyword | ("collateral estoppel" OR "issue preclusion") /s "actually litigated" | **result_missing_court**: #6 Malfatti v. Bank of America, N.A. (99 So. 3d 1221)<br>**landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-2924 | all_states | auto | "informed consent" /s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-2925 | all_states_and_federal –1999-12-31 | keyword | "cohabitation" w/s "express contract" | **result_missing_court**: #8 Champion v. Frazier (977 S.W.2d 61) |
| LF-BS-2927 | one_state MT 2015-01-01– | keyword | "fraudulent inducement" w/p "justifiable reliance" and misrepresent! | **empty**: no results |
| LF-BS-2932 | federal_circuit 9 | auto | retaliation /10 "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2939 | one_state_plus_federal CA 2020-01-01– | keyword | "non-compete" w/p "legitimate business interest" and reasonabl! | **empty**: no results |
| LF-BS-2948 | federal_circuit federal | auto | "parallel conduct" & conspira! % criminal | **landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-2951 | one_state_plus_federal NY | keyword | "automobile exception" w/p "probable cause" and warrantless | **duplicate_hit**: #6 California v. Acevedo 500 U.S. 565 |
| LF-BS-2957 | one_state MO | keyword | "negligent hiring" & "negligent supervision" % patent | **empty**: no results |
| LF-BS-2961 | federal_district OR 1990-01-01–2010-12-31 | keyword | "mcdonnell douglas" /10 pretext | **empty**: no results |
| LF-BS-2966 | one_state OK | auto | fee! /p lodestar | **duplicate_hit**: #5 HESS v. VOLKSWAGEN OF AMERICA, INC. 2014 OK 111 |
| LF-BS-2969 | one_state AK | keyword | "cell-site location" +s warrant | **empty**: no results |
| LF-BS-2970 | one_state_plus_federal IL | auto | negligen! /25 abolish! | **landmark_missing**: wanted /alvis v\. ribar/ in top 10 |
| LF-BS-2971 | us_supreme_court | keyword | scienter /s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2975 | federal_circuit 10 | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-2977 | one_state_plus_federal LA | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-2981 | one_state TN –1999-12-31 | keyword | "duty to warn" /10 psychotherapist | **empty**: no results |
| LF-BS-2982 | one_state AZ –1999-12-31 | auto | "pollution exclusion" w/s irritant | **empty**: no results |
| LF-BS-2992 | federal_circuit 5 | auto | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2993 | all_states_and_federal | keyword | ("fraudulent joinder" OR "improper joinder") /s remand | **result_missing_court**: #8 Carrasco v. T-Mobile USA, Inc. (no cite)<br>**result_missing_court**: #10 Gregory Watkins et al v. Crescent Cargo Inc et al (no cite) |
| LF-BS-2997 | one_state_plus_federal NY | keyword | "likelihood of confusion" +s trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3001 | federal_district GA | keyword | retaliation & "materially adverse" % criminal | **empty**: no results |
| LF-BS-3003 | one_state_plus_federal TX | keyword | ("eminent domain" OR "public use") /s "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-3005 | federal_district WY | keyword | apprendi /s jury | **empty**: no results |
| LF-BS-3007 | one_state CA 2023-01-01– | keyword | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **empty**: no results |
| LF-BS-3010 | all_federal 2020-01-01– | auto | erisa & "abuse of discretion" % criminal | **empty**: no results |
| LF-BS-3012 | one_state CA | auto | habitab! /p tenant | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-3013 | one_state_plus_federal TX 2015-01-01– | keyword | therap! /p psychotherapist | **empty**: no results |
| LF-BS-3019 | one_state CO | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-3023 | one_state GA | keyword | "design defect" +s "consumer expectations" | **empty**: no results |
| LF-BS-3027 | one_state_plus_federal CO 2000-01-01–2009-12-31 | keyword | "trade secret" /p "reasonable measures" & "independent economic value" | **empty**: no results |
| LF-BS-3029 | us_supreme_court | keyword | constru! /25 "intrinsic evidence" | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-3031 | one_state_plus_federal NJ 2020-01-01– | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-3033 | us_supreme_court | keyword | retaliation /p "materially adverse" & "causal connection" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3036 | federal_circuit 1 2023-01-01– | auto | "parallel conduct" /10 conspira! | **empty**: no results |
| LF-BS-3037 | federal_circuit 11 | keyword | "reasonable accommodation" w/p "interactive process" and "qualified individual" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-3042 | all_federal | auto | ("likelihood of confusion" OR "sleekcraft factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3044 | all_states_and_federal 2023-01-01– | auto | "vacate the arbitration award" w/15 ("exceeded their powers" or "evident partiality") | **result_missing_court**: #8 GEORGE v. RUSHMORE SERVICE CENTER, LLC (no cite) |
| LF-BS-3045 | us_supreme_court | keyword | "crime involving moral turpitude" /s "categorical approach" | **empty**: no results<br>**landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-3049 | one_state TN | keyword | "loss of consortium" & spouse % patent | **empty**: no results |
| LF-BS-3050 | all_federal 1990-01-01–2010-12-31 | auto | "class certification" w/15 (commonality or predominance) | **duplicate_hit**: #4 In re: 1994 Exxon 461 F.3d 598 |
| LF-BS-3051 | all_states | keyword | negligen! /p "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-3052 | all_federal 1990-01-01–2010-12-31 | auto | "reasonable suspicion" & frisk % civil | **empty**: no results |
| LF-BS-3060 | one_state MN | auto | "general jurisdiction" /p "at home" & "principal place of business" | **boolean_unsatisfied**: Rilley v. MoneyMutual, LLC — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Wayzata Nissan, LLC v. Nissan North America, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Nelson v. Schlener — required terms/proximity not met in full text |
| LF-BS-3061 | one_state_plus_federal IA 1990-01-01–2010-12-31 | keyword | "class certification" & commonality % arbitration | **empty**: no results |
| LF-BS-3063 | one_state IN 2000-01-01–2009-12-31 | keyword | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-3065 | one_state WY | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-3067 | one_state_plus_federal KS 2020-01-01– | keyword | ("parallel conduct" OR "plus factors") /s conspira! | **empty**: no results |
| LF-BS-3069 | federal_district FL | keyword | "fair use" & copyright % criminal | **empty**: no results |
| LF-BS-3073 | federal_circuit 2 1990-01-01–2010-12-31 | keyword | "mcdonnell douglas" w/p pretext and "prima facie case" | **boolean_unsatisfied**: Johnson v. California — required terms/proximity not met in full text |
| LF-BS-3074 | us_supreme_court 2023-01-01– | auto | "parallel conduct" AND conspira! AND NOT criminal | **empty**: no results |
| LF-BS-3085 | one_state NH –1999-12-31 | keyword | "business judgment rule" w/15 ("duty of care" or director!) | **empty**: no results |
| LF-BS-3086 | one_state IN 2023-01-01– | auto | tortfeas! /p tortfeasor! | **empty**: no results |
| LF-BS-3089 | one_state_plus_federal OH 2020-01-01– | keyword | "anticipatory repudiation" & repudiat! % criminal | **empty**: no results |
| LF-BS-3091 | federal_circuit federal | keyword | "collateral estoppel" & "actually litigated" % patent | **empty**: no results<br>**landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-3096 | one_state WA 2000-01-01–2009-12-31 | auto | defen! /p "potential for coverage" | **boolean_unsatisfied**: Weyerhaeuser Co. v. Commercial Union Ins. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Polygon Northwest Co. v. American Nat. Fire Ins. Co. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Aluminum Co. of America v. Aetna Casualty & Surety Co. — required terms/proximity not met in full text |
| LF-BS-3097 | federal_circuit 7 | keyword | "preferential transfer" & "ordinary course" % criminal | **empty**: no results |
| LF-BS-3102 | one_state_plus_federal VA 2015-01-01– | auto | consorti! /p spouse | **empty**: no results |
| LF-BS-3103 | one_state AZ | keyword | ("economic loss rule" OR "economic loss doctrine") AND contract NOT criminal | **duplicate_hit**: #7 HUGHES CUSTOM BLDG, LLC v. Davey 212 P.3d 865 |
| LF-BS-3107 | all_states_and_federal | keyword | invitee & trespasser % contract | **landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-3108 | one_state GA 2000-01-01–2009-12-31 | auto | "adverse possession" w/s "open and notorious" | **boolean_unsatisfied**: Williams v. Screven Wood Company, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: MEA FAMILY INVESTMENTS, LP v. Adams — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Walker v. SAPELO ISLAND HERITAGE AUTHORITY — required terms/proximity not met in full text |
| LF-BS-3109 | one_state_plus_federal SC | keyword | "market share liability" & des % contract | **empty**: no results |
| LF-BS-3111 | one_state GA | keyword | "trade secret" /p "reasonable measures" & "independent economic value" | **empty**: no results |
| LF-BS-3113 | federal_district TX 2000-01-01–2009-12-31 | keyword | "preferential transfer" w/s "ordinary course" | **empty**: no results |
| LF-BS-3117 | all_federal | keyword | "motion to compel arbitration" w/s unconscionab! | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-3119 | us_supreme_court 1990-01-01–2010-12-31 | keyword | "consent to search" w/p "totality of the circumstances" and coerc! | **empty**: no results |
| LF-BS-3129 | us_supreme_court | keyword | "prior bad acts" w/15 ("other crimes" or propensity) | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-3131 | one_state_plus_federal SD | keyword | "implied covenant of good faith and fair dealing" w/s discretion | **duplicate_hit**: #7 Headley v. McCleary, Inc. 447 F.3d 1115 |
| LF-BS-3133 | us_supreme_court | keyword | scienter /10 "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3136 | one_state NY | auto | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-3142 | one_state CA | auto | ("strict liability" OR "strict products liability") AND "unreasonably dangerous" NOT contract | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-3143 | us_supreme_court | keyword | "vacate the arbitration award" /10 "exceeded their powers" | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3147 | all_states | keyword | "trade secret" /s "reasonable measures" | **duplicate_hit**: #5 Global v. Energy 2026 Tex. Bus. 31 |
| LF-BS-3153 | one_state FL 2000-01-01–2009-12-31 | keyword | "undue influence" w/s testator | **duplicate_hit**: #5 Greenwood v. Flohl 764 So. 2d 802 |
| LF-BS-3155 | one_state_plus_federal OK | keyword | retaliation +s "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3156 | federal_district UT | auto | "cell-site location" +s warrant | **boolean_unsatisfied**: United States v. Kafuku — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Long v. Boucher — required terms/proximity not met in full text<br>**boolean_unsatisfied**: United States v. Wisniewski — required terms/proximity not met in full text |
| LF-BS-3158 | one_state FL | auto | jeopard! /25 "multiple punishments" | **duplicate_hit**: #9 NH v. State 723 So. 2d 889 |
| LF-BS-3161 | all_federal | keyword | "likelihood of confusion" /p trademark & "strength of the mark" | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3163 | all_states_and_federal | keyword | "collateral estoppel" +s "actually litigated" | **landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-3165 | one_state_plus_federal AZ | keyword | "summary judgment" AND "genuine dispute" AND "material fact" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-3168 | one_state CA | auto | ("negligent infliction of emotional distress" OR "bystander recovery") AND "close relationship" NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10<br>**boolean_not_violated**: Ochoa v. Superior Court — contains excluded term(s): contract<br>**boolean_not_violated**: Christensen v. Superior Court — contains excluded term(s): contract |
| LF-BS-3171 | one_state VT | keyword | "restrictive covenant" /p "homeowners association" & enforc! | **empty**: no results |
| LF-BS-3180 | one_state_plus_federal CA | auto | "loss causation" w/p "inflated price" and "economic loss" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3181 | federal_district MA –1999-12-31 | keyword | cramdown w/15 ("absolute priority rule" or "fair and equitable") | **empty**: no results |
| LF-BS-3184 | one_state KY | auto | alimony w/s modif! | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}] |
| LF-BS-3191 | all_federal | keyword | "vacate the arbitration award" AND "exceeded their powers" AND NOT criminal | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3194 | federal_circuit federal | auto | deference & "statutory ambiguity" % criminal | **landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-3201 | all_federal | keyword | "malicious prosecution" AND "probable cause" AND "fourth amendment" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-3203 | federal_circuit 4 | keyword | abstention w/p "pending state" and "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3223 | one_state AK | keyword | "pierce the corporate veil" +s undercapitaliz! | **empty**: no results |
| LF-BS-3225 | one_state CA 2000-01-01–2009-12-31 | keyword | "testamentary capacity" w/p testator and "natural objects of his bounty" | **empty**: no results |
| LF-BS-3228 | all_federal | auto | "hostile work environment" /p "severe or pervasive" & employer | **boolean_unsatisfied**: Meritor Savings Bank v. Vinson — required terms/proximity not met in full text |
| LF-BS-3235 | one_state_plus_federal MD –1999-12-31 | keyword | daubert +s reliab! | **empty**: no results |
| LF-BS-3249 | one_state_plus_federal NY | keyword | "res judicata" AND "final judgment" AND "same cause of action" | **landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-3250 | one_state_plus_federal OK | auto | citizen! /25 remov! | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-3262 | one_state_plus_federal KY –1999-12-31 | auto | "social host" /p intoxicat! & "guest" | **empty**: no results |
| LF-BS-3263 | one_state_plus_federal KY | keyword | "prior bad acts" w/15 ("other crimes" or propensity) | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-3267 | one_state_plus_federal MA 2020-01-01– | keyword | cohabit! /p "express contract" | **empty**: no results |
| LF-BS-3271 | one_state LA | keyword | "duty to defend" /s "potential for coverage" | **empty**: no results |
| LF-BS-3277 | federal_circuit 9 | keyword | redress! /25 traceab! | **empty**: no results<br>**landmark_missing**: wanted /lujan\|spokeo\|transunion\|clapper\|summers v\. earth/ in top 10 |
| LF-BS-3281 | all_states | keyword | "bad faith" w/p insurer and "failure to settle" | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10 |
| LF-BS-3288 | one_state LA 2000-01-01–2009-12-31 | auto | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-3289 | one_state_plus_federal MA 2020-01-01– | keyword | utteran! /p hearsay | **empty**: no results |
| LF-BS-3299 | federal_circuit federal 2015-01-01– | keyword | cramdown & "absolute priority rule" % criminal | **empty**: no results |
| LF-BS-3300 | one_state_plus_federal RI | auto | ("default judgment" OR "motion to vacate") AND "meritorious defense" NOT criminal | **boolean_not_violated**: Webster v. Perrotta — contains excluded term(s): criminal |
| LF-BS-3302 | federal_circuit 2 | auto | ("likelihood of confusion" OR "polaroid factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3305 | one_state CA | keyword | "security deposit" +s tenant | **duplicate_hit**: #9 In re Cassil 37 Cal. App. 4th 1081 |
| LF-BS-3307 | one_state MN 1990-01-01–2010-12-31 | keyword | deprivat! /25 deprivat! | **empty**: no results |
| LF-BS-3309 | all_federal | keyword | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3310 | one_state DE | auto | "business judgment rule" /s "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-3313 | one_state ID | keyword | "implied covenant of good faith and fair dealing" /10 discretion | **boolean_unsatisfied**: Jen-Rath Co. v. Kit Manufacturing Co. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Barton v. Board of Regents — required terms/proximity not met in full text |
| LF-BS-3323 | one_state KY 1990-01-01–2010-12-31 | keyword | "proximate cause" & foreseeab! % contract | **empty**: no results |
| LF-BS-3324 | one_state OK 2000-01-01–2009-12-31 | auto | "transitory foreign substance" AND "actual or constructive knowledge" AND NOT medical | **boolean_not_violated**: Digital Design Group, Inc. v. Information Builders, Inc. — contains excluded term(s): medical<br>**boolean_unsatisfied**: Carpenters Local Union No. 329 v. State Ex Rel. Department o — required terms/proximity not met in full text<br>**boolean_not_violated**: Carter v. Schuster — contains excluded term(s): medical |
| LF-BS-3330 | one_state_plus_federal IL | auto | "vacate the arbitration award" & "exceeded their powers" % criminal | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3331 | one_state KY | keyword | "prenuptial agreement" & "full disclosure" % criminal | **empty**: no results |
| LF-BS-3336 | one_state DC 2020-01-01– | auto | "social host" /p intoxicat! & "guest" | **empty**: no results |
| LF-BS-3337 | federal_circuit 9 –1999-12-31 | keyword | ("public forum" OR "traditional public forum") /s "content-based" | **boolean_unsatisfied**: Cornelius v. Defense — required terms/proximity not met in full text |
| LF-BS-3339 | one_state CO | keyword | "social host" +s intoxicat! | **empty**: no results |
| LF-BS-3341 | us_supreme_court –1999-12-31 | keyword | "confrontation clause" AND testimonial AND cross-examin! | **after_dateTo**: #7 2009-06-25 > 1999-12-31 |
| LF-BS-3347 | all_federal | keyword | constru! /p specification | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-3350 | federal_circuit 9 | auto | deprivat! /25 deprivat! | **landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-3360 | one_state_plus_federal SD | auto | easement! /p servient | **boolean_unsatisfied**: Johnson v. RADLE — required terms/proximity not met in full text |
| LF-BS-3362 | us_supreme_court 2023-01-01– | auto | "fair labor standards act" /p exempt! & "regular rate" | **empty**: no results |
| LF-BS-3363 | one_state_plus_federal ME | keyword | "negligent infliction of emotional distress" & "zone of danger" % contract | **empty**: no results |
| LF-BS-3365 | all_states | keyword | "negligent infliction of emotional distress" /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-3371 | federal_circuit 9 | keyword | "likelihood of confusion" /10 trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3379 | federal_circuit 2 | keyword | interrogat! /p custody | **landmark_missing**: wanted /miranda\|berghuis\|edwards v\. ariz\|j\.d\.b\.\|rhode island v\. innis\|dickerson/ in top 10 |
| LF-BS-3381 | one_state CA | keyword | "informed consent" w/s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-3384 | one_state_plus_federal MO | auto | "fair use" AND copyright AND NOT criminal | **boolean_not_violated**: Metro-Goldwyn-Mayer Studios Inc. v. Grokster, Ltd. — contains excluded term(s): criminal |
| LF-BS-3385 | one_state WI | keyword | "equitable distribution" +s "nonmarital" | **empty**: no results |
| LF-BS-3387 | one_state VA 2020-01-01– | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-3393 | one_state_plus_federal GA | keyword | "forum non conveniens" w/s "private interest" | **duplicate_hit**: #9 LIQUIDATION COM'N OF BANCO INTERCONT. v. Renta 530 F.3d 1339<br>**landmark_missing**: wanted /piper aircraft\|gulf oil\|sinochem\|atlantic marine/ in top 10 |
| LF-BS-3396 | one_state_plus_federal AR 2000-01-01–2009-12-31 | auto | "summary judgment" +s "genuine dispute" | **boolean_unsatisfied**: Jenkins v. Winter — required terms/proximity not met in full text |
| LF-BS-3397 | federal_circuit dc | keyword | retaliation AND "materially adverse" AND NOT criminal | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10<br>**boolean_not_violated**: Northern v. White — contains excluded term(s): criminal |
| LF-BS-3399 | one_state IL | keyword | classif! /p "strict scrutiny" | **empty**: no results |
| LF-BS-3401 | one_state_plus_federal WV | keyword | "demand futility" /s "demand excused" | **empty**: no results |
| LF-BS-3407 | all_federal | keyword | "diversity jurisdiction" /10 "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-3408 | all_federal | auto | "qualified immunity" /s "constitutional right" | **boolean_unsatisfied**: Dobbs v. Jackson Women's Health Organization — required terms/proximity not met in full text |
| LF-BS-3409 | federal_circuit 10 | keyword | deference w/15 ("statutory ambiguity" or "administrative procedure act") | **boolean_unsatisfied**: Seven County Infrastructure Coalition v. Eagle County — required terms/proximity not met in full text |
| LF-BS-3411 | one_state_plus_federal ND | keyword | "equal protection" /10 "strict scrutiny" | **duplicate_hit**: #9 In Interest of Pf 2008 ND 37<br>**landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-3415 | one_state TX 2020-01-01– | keyword | "duty to warn" AND psychotherapist AND NOT contract | **empty**: no results |
| LF-BS-3421 | one_state MS | keyword | "statute of frauds" /10 "part performance" | **boolean_unsatisfied**: Palmer's Grocery Inc. v. Chandler's JKE, Inc. — required terms/proximity not met in full text |
| LF-BS-3438 | all_federal | auto | "patent eligible" w/p "section 101" and "inventive concept" | **landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-3439 | one_state_plus_federal WA | keyword | "attorney-client privilege" w/15 (waiv! or confidential!) | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-3442 | one_state_plus_federal WI | auto | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3443 | federal_circuit 8 | keyword | "automatic stay" w/15 ("section 362" or debtor) | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3444 | one_state_plus_federal PA | auto | (brady OR "exculpatory evidence") AND suppress! NOT civil | **boolean_not_violated**: Strickler v. Greene — contains excluded term(s): civil |
| LF-BS-3445 | one_state MI 2023-01-01– | keyword | ("prevailing party" OR "attorney's fees") AND "reasonable hourly rate" NOT criminal | **boolean_unsatisfied**: Woodman v. Department of Corrections — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Kidder v. Pobursky-Kidder — required terms/proximity not met in full text |
| LF-BS-3447 | one_state_plus_federal MO | keyword | daubert /s reliab! | **landmark_missing**: wanted /daubert\|kumho\|joiner/ in top 10 |
| LF-BS-3451 | one_state_plus_federal MO | keyword | "business judgment rule" AND "duty of care" AND NOT criminal | **duplicate_hit**: #6 Cooperative v. Farmland Industries, Inc. 198 F.3d 685 |
| LF-BS-3453 | federal_circuit 3 | keyword | retaliation & "materially adverse" % criminal | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3454 | one_state TX | auto | "social host" /s intoxicat! | **empty**: no results |
| LF-BS-3456 | us_supreme_court 2000-01-01–2009-12-31 | auto | deference w/s "statutory ambiguity" | **boolean_unsatisfied**: Alaska Department of Environmental Conservation v. Environme — required terms/proximity not met in full text |
| LF-BS-3459 | one_state NV | keyword | "market share liability" /p des & manufacturer | **empty**: no results |
| LF-BS-3465 | one_state MI | keyword | "reasonable suspicion" & frisk % civil | **empty**: no results |
| LF-BS-3467 | one_state ME | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-3471 | federal_circuit 3 | keyword | "reasonable accommodation" w/15 ("interactive process" or "qualified individual") | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-3474 | federal_circuit federal –1999-12-31 | auto | scienter w/p "rule 10b-5" and pslra | **empty**: no results |
| LF-BS-3475 | federal_circuit 5 1990-01-01–2010-12-31 | keyword | "parallel conduct" /p conspira! & "sherman act" | **empty**: no results |
| LF-BS-3481 | one_state_plus_federal CA | keyword | invitee AND trespasser AND NOT contract | **boolean_unsatisfied**: People v. Davis — required terms/proximity not met in full text |
| LF-BS-3484 | one_state_plus_federal FL | auto | benefit! /25 "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-3485 | one_state MI | keyword | "prescriptive easement" /s servient | **empty**: no results |
| LF-BS-3488 | one_state OK | auto | ("child support" OR "imputed income") AND underemploy! NOT criminal | **duplicate_hit**: #3 In the Interest of the Children of Knight 317 P.3d 210 |
| LF-BS-3489 | one_state_plus_federal CA | keyword | ("strict liability" OR "strict products liability") /s "design defect" | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-3491 | one_state MA 2015-01-01– | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results |
| LF-BS-3495 | all_federal | keyword | "preliminary injunction" /p "irreparable harm" & "likelihood of success" | **landmark_missing**: wanted /winter v\. n\|winter v\. natural\|ebay\|munaf\|nken/ in top 10 |
| LF-BS-3497 | us_supreme_court | keyword | ("eminent domain" OR "public use") /s "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-3504 | one_state_plus_federal HI | auto | "promissory estoppel" +s "clear and definite promise" | **boolean_unsatisfied**: Gonsalves v. Nissan Motor Corp. in Hawai'i, Ltd. — required terms/proximity not met in full text |
| LF-BS-3506 | one_state_plus_federal VA | auto | "attorney-client privilege" /s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-3507 | federal_circuit 5 1990-01-01–2010-12-31 | keyword | "loss causation" & "inflated price" % criminal | **empty**: no results |
| LF-BS-3508 | federal_circuit 7 | auto | "claim construction" & specification % criminal | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-3509 | one_state ME 1990-01-01–2010-12-31 | keyword | deprivat! /25 deprivat! | **empty**: no results |
| LF-BS-3513 | one_state_plus_federal FL | keyword | "negligent infliction of emotional distress" w/p "zone of danger" and "close relationship" | **empty**: no results |
| LF-BS-3519 | all_states | keyword | "business judgment rule" /10 "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-3528 | one_state NM | auto | "deceptive and unfair trade practices" w/15 (consumer or "actual damages") | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}]<br>**boolean_unsatisfied**: State Ex Rel. King v. B&B Investment Group, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Cordova v. World Finance Corp. of NM — required terms/proximity not met in full text |
| LF-BS-3530 | one_state NV | auto | ("speedy trial" OR "barker v. wingo") /s delay | **degraded**: [{"engine":"name","code":"unknown","message":"The search engine failed."},{"engine":"semantic","code":"timeout","message":"The search engine timed out."}] |
| LF-BS-3534 | one_state_plus_federal NC | auto | frivol! /p sanction! | **landmark_missing**: wanted /cooter\|business guides\|chambers v\. nasco/ in top 10 |
| LF-BS-3537 | federal_circuit 2 | keyword | (retaliation OR "protected activity") AND "causal connection" NOT criminal | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3539 | one_state MO | keyword | "economic loss rule" & "purely economic" % criminal | **empty**: no results |
| LF-BS-3540 | us_supreme_court | auto | "parallel conduct" w/15 (conspira! or "sherman act") | **boolean_unsatisfied**: United States v. Broce — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Skilling v. United States — required terms/proximity not met in full text |
| LF-BS-3541 | federal_circuit 2 | keyword | avoid! /25 trustee | **boolean_unsatisfied**: Butner v. United States — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Rajamin v. Deutsche Bank National Trust Co. — required terms/proximity not met in full text |
| LF-BS-3542 | one_state SC | auto | (foreclosure OR "mortgage foreclosure") /s standing | **duplicate_hit**: #8 FEDERAL NAT'L. MTG. ASSN. v. Brooks 405 S.E.2d 604 |
| LF-BS-3543 | one_state UT | keyword | "pierce the corporate veil" +s undercapitaliz! | **empty**: no results |
| LF-BS-3547 | one_state SD | keyword | "force majeure" /10 frustration | **empty**: no results |
| LF-BS-3552 | federal_circuit dc | auto | erisa w/s "abuse of discretion" | **boolean_unsatisfied**: Pierce v. Underwood — required terms/proximity not met in full text |
| LF-BS-3553 | one_state_plus_federal NH –1999-12-31 | keyword | "personal jurisdiction" AND "minimum contacts" AND NOT divorce | **boolean_unsatisfied**: International Shoe Co. v. Washington — required terms/proximity not met in full text |
| LF-BS-3559 | one_state IL 2000-01-01–2009-12-31 | keyword | "cell-site location" /10 warrant | **empty**: no results |
| LF-BS-3567 | all_states_and_federal | keyword | cohabit! /25 implied | **landmark_missing**: wanted /marvin v\. marvin/ in top 10 |
| LF-BS-3571 | federal_circuit 6 | keyword | certif! /p commonality | **landmark_missing**: wanted /wal-mart\|dukes\|comcast\|amchem\|tyson foods\|falcon/ in top 10 |
| LF-BS-3572 | us_supreme_court | auto | purposeful! /25 "fair play" | **landmark_missing**: wanted /international shoe\|world-wide volkswagen\|burger king\|daimler\|goodyear\|ford motor\|bristol-myers\|walden/ in top 10 |
| LF-BS-3575 | one_state CA 2000-01-01–2009-12-31 | keyword | relian! /p "clear and definite promise" | **empty**: no results |
| LF-BS-3576 | all_federal | auto | preclu! /p "final judgment" | **landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-3581 | all_federal | keyword | conspir! /p conspira! | **landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-3582 | all_federal | auto | ("likelihood of confusion" OR "lapp factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3590 | all_federal | auto | abstention +s "pending state" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3595 | federal_district NE | keyword | exculpat! /25 suppress! | **empty**: no results |
| LF-BS-3597 | one_state_plus_federal LA | keyword | (erisa OR "plan administrator") /s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-3598 | one_state_plus_federal OH | auto | expert! /p reliab! | **landmark_missing**: wanted /daubert\|kumho\|joiner/ in top 10 |
| LF-BS-3601 | one_state_plus_federal ME | keyword | "underinsured motorist" w/p stacking and policy | **boolean_unsatisfied**: Apgar v. Commercial Union Insurance — required terms/proximity not met in full text |
| LF-BS-3603 | federal_circuit 1 | keyword | retaliation & "materially adverse" % criminal | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3605 | federal_district KY –1999-12-31 | keyword | daubert /10 reliab! | **empty**: no results |
| LF-BS-3609 | federal_district MS | keyword | ("loss causation" OR "corrective disclosure") /s "inflated price" | **empty**: no results |
| LF-BS-3612 | all_states_and_federal | auto | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **boolean_unsatisfied**: Lunneborg v. My Fun Life, Corp. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Martin v. Sullivan — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Frank v. U.S. West, Inc. — required terms/proximity not met in full text |
| LF-BS-3613 | one_state NC | keyword | alimony +s modif! | **degraded**: [{"engine":"keyword","code":"unknown","message":"The search engine failed."}]<br>**empty**: no results |
| LF-BS-3615 | one_state NJ 1990-01-01–2010-12-31 | keyword | "demand futility" /s "demand excused" | **empty**: no results |
| LF-BS-3617 | all_states_and_federal | keyword | "reasonable accommodation" w/s "interactive process" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-3624 | one_state IL | auto | "demand futility" /p "demand excused" & board | **boolean_unsatisfied**: Soni v. Department of Employment Security — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Federal Deposit Insurance v. O'Malley — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Smyth v. Kaspar American State Bank — required terms/proximity not met in full text |
| LF-BS-3625 | all_federal | keyword | ("motion to dismiss" OR "failure to state a claim") AND "factual allegations" NOT habeas | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-3633 | all_federal | keyword | overtim! /p exempt! | **landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-3635 | federal_circuit 3 | keyword | ("likelihood of confusion" OR "lapp factors") /s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3636 | federal_circuit 10 | auto | ("excessive force" OR "objective reasonableness") /s "fourth amendment" | **boolean_unsatisfied**: Tennessee v. Garner — required terms/proximity not met in full text |
| LF-BS-3641 | one_state_plus_federal MI 1990-01-01–2010-12-31 | keyword | "testamentary capacity" w/p testator and "natural objects of his bounty" | **empty**: no results |
| LF-BS-3646 | federal_circuit 6 | auto | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-3649 | one_state_plus_federal FL –1999-12-31 | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-3653 | all_states | keyword | "duty to warn" +s psychotherapist | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-3655 | one_state NM 1990-01-01–2010-12-31 | keyword | ("creditor's claim" OR "claim against the estate") AND "barred" NOT criminal | **duplicate_hit**: #10 Toney v. Coe 826 P.2d 576 |
| LF-BS-3657 | federal_circuit 7 | keyword | ("motion to dismiss" OR "failure to state a claim") /s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-3660 | federal_district GA | auto | avoid! /25 trustee | **boolean_unsatisfied**: Perkins v. American International Specialty Lines Insurance — required terms/proximity not met in full text |
| LF-BS-3661 | federal_circuit dc | keyword | "automatic stay" /10 "section 362" | **duplicate_hit**: #10 Comm v. FCC 254 F.3d 130<br>**landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3662 | federal_circuit 9 | auto | confus! /p trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3667 | federal_circuit 3 | keyword | ("likelihood of confusion" OR "lapp factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3670 | one_state_plus_federal OH | auto | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3671 | federal_circuit 2 | keyword | monell /s "policy or custom" | **landmark_missing**: wanted /monell\|city of canton\|connick\|pembaur\|bd\. of cnty\|board of county/ in top 10 |
| LF-BS-3673 | one_state MI 2023-01-01– | keyword | "additional insured" /p "arising out of" & coverage | **empty**: no results |
| LF-BS-3675 | one_state NH | keyword | tortfeas! /25 apportion! | **empty**: no results |
| LF-BS-3684 | federal_circuit 5 | auto | "motion to dismiss" /10 plausib! | **boolean_unsatisfied**: Haines v. Kerner — required terms/proximity not met in full text |
| LF-BS-3685 | all_states_and_federal | keyword | "design defect" /s "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10<br>**boolean_unsatisfied**: Force v. Ford Motor Co. — required terms/proximity not met in full text |
| LF-BS-3692 | one_state_plus_federal NM | auto | "crime involving moral turpitude" +s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-3695 | all_federal –1999-12-31 | keyword | "hostile work environment" & "severe or pervasive" % criminal | **empty**: no results |
| LF-BS-3696 | us_supreme_court | auto | "patent eligible" w/15 ("section 101" or "inventive concept") | **boolean_unsatisfied**: Nautilus, Inc. v. Biosig Instruments, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Halo Electronics, Inc. v. Pulse Electronics, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Minerva Surgical, Inc. v. Hologic, Inc. — required terms/proximity not met in full text |
| LF-BS-3697 | one_state MT 2000-01-01–2009-12-31 | keyword | "economic loss rule" /s "purely economic" | **empty**: no results |
| LF-BS-3705 | federal_circuit dc | keyword | "summary judgment" AND "genuine dispute" AND NOT patent | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-3709 | one_state_plus_federal FL 1990-01-01–2010-12-31 | keyword | "cohabitation" /p "express contract" & implied | **boolean_unsatisfied**: Stevens v. Muse — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Forrest v. Ron — required terms/proximity not met in full text |
| LF-BS-3711 | one_state_plus_federal FL 2000-01-01–2009-12-31 | keyword | ("social host" OR "dram shop") /s intoxicat! | **empty**: no results |
| LF-BS-3713 | one_state SD 2023-01-01– | keyword | "general jurisdiction" /10 "at home" | **empty**: no results |
| LF-BS-3721 | federal_circuit 1 | keyword | "statute of limitations" w/p "equitable tolling" and "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-3726 | federal_circuit 2 | auto | "likelihood of confusion" /10 trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3727 | federal_circuit 10 –1999-12-31 | keyword | "second amendment" w/s "historical tradition" | **empty**: no results |
| LF-BS-3729 | one_state NC | keyword | "res ipsa loquitur" & inference % contract | **empty**: no results |
| LF-BS-3731 | one_state_plus_federal WA 1990-01-01–2010-12-31 | keyword | municipal! /25 "deliberate indifference" | **after_dateTo**: #2 2016-08-15 > 2010-12-31 |
| LF-BS-3732 | one_state_plus_federal MN | auto | (relocation OR "move away") AND "best interests of the child" NOT criminal | **boolean_not_violated**: Troxel v. Granville — contains excluded term(s): criminal |
| LF-BS-3733 | one_state GA | keyword | "free exercise" & "neutral and generally applicable" % contract | **empty**: no results |
| LF-BS-3734 | one_state_plus_federal IA | auto | "punitive damages" /p "due process" & ratio | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}] |
| LF-BS-3736 | one_state MT 2015-01-01– | auto | "social host" w/15 (intoxicat! or "guest") | **empty**: no results |
| LF-BS-3739 | one_state_plus_federal MD | keyword | prosecut! /p "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-3741 | federal_circuit 8 | keyword | scient! /p "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3742 | federal_circuit 11 | auto | abstention /p "pending state" & "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3745 | federal_district NY | keyword | monell AND "policy or custom" AND "deliberate indifference" | **boolean_unsatisfied**: Esmont v. City of New York — required terms/proximity not met in full text |
| LF-BS-3752 | one_state_plus_federal TX | auto | "vacate the arbitration award" AND "exceeded their powers" AND NOT criminal | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3763 | one_state_plus_federal DC | keyword | "child support" w/p imput! and underemploy! | **empty**: no results |
| LF-BS-3767 | one_state_plus_federal MN | keyword | "force majeure" w/15 (frustration or unforeseeab!) | **empty**: no results |
| LF-BS-3773 | all_states_and_federal | keyword | estop! /p "actually litigated" | **landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-3785 | one_state_plus_federal CA | keyword | ("duty to warn" OR "duty to protect") /s psychotherapist | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-3789 | one_state_plus_federal AK | keyword | guardianship +s ward | **duplicate_hit**: #6 Hcs v. Capa 42 P.3d 1093 |
| LF-BS-3792 | one_state OH | auto | spoliation & "adverse inference" % patent | **boolean_unsatisfied**: Elliott-Thomas v. Smith (Slip Opinion) — required terms/proximity not met in full text<br>**boolean_unsatisfied**: New Technology Products Pty, Ltd. v. Scotts Miracle-Gro Co. — required terms/proximity not met in full text<br>**boolean_not_violated**: Revolaze, L.L.C. v. Dentons US L.L.P. — contains excluded term(s): patent |
| LF-BS-3797 | one_state_plus_federal AR | keyword | "forum non conveniens" /10 "private interest" | **landmark_missing**: wanted /piper aircraft\|gulf oil\|sinochem\|atlantic marine/ in top 10 |
| LF-BS-3804 | one_state IA | auto | locat! /p warrant | **boolean_unsatisfied**: Iowa Department of Revenue & Finance v. Peterson — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Iowa v. Sampson — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Fisher v. IN — required terms/proximity not met in full text |
| LF-BS-3816 | one_state TX 2023-01-01– | auto | "parol evidence rule" /p integrat! & ambigu! | **boolean_unsatisfied**: Schwarz v. Schwarz Webb Holdings, Ltd. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Fiberwave v. AT&T Enterprises — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Rigg v. Hickson — required terms/proximity not met in full text |
| LF-BS-3819 | one_state MA | keyword | "excited utterance" & hearsay % contract | **empty**: no results |
| LF-BS-3821 | one_state AZ | keyword | "equitable distribution" /s "nonmarital" | **empty**: no results |
| LF-BS-3823 | all_federal | keyword | "free exercise" /10 "neutral and generally applicable" | **landmark_missing**: wanted /employment div\|smith\|lukumi\|fulton\|kennedy v\. bremerton\|tandon\|masterpiece\|hobby lobby/ in top 10 |
| LF-BS-3825 | federal_circuit 6 | keyword | scienter +s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3829 | one_state WA 1990-01-01–2010-12-31 | keyword | "negligent hiring" +s "negligent supervision" | **boolean_unsatisfied**: Christensen v. Royal School District No. 160 — required terms/proximity not met in full text |
| LF-BS-3831 | one_state NJ 1990-01-01–2010-12-31 | keyword | "consent to search" & "totality of the circumstances" % civil | **empty**: no results |
| LF-BS-3832 | federal_circuit 1 | auto | redress! /25 traceab! | **landmark_missing**: wanted /lujan\|spokeo\|transunion\|clapper\|summers v\. earth/ in top 10 |
| LF-BS-3834 | all_federal | auto | "automobile exception" w/p "probable cause" and warrantless | **duplicate_hit**: #6 California v. Acevedo 500 U.S. 565 |
| LF-BS-3841 | one_state HI | keyword | foresee! /p foreseeab! | **empty**: no results |
| LF-BS-3843 | one_state_plus_federal NE 2020-01-01– | keyword | support! /25 underemploy! | **empty**: no results |
| LF-BS-3849 | federal_circuit 4 | keyword | "motion to dismiss" & plausib! % habeas | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-3853 | one_state IL 2000-01-01–2009-12-31 | keyword | "parol evidence rule" & integrat! % criminal | **empty**: no results |
| LF-BS-3861 | all_states_and_federal | keyword | "reasonable suspicion" w/s frisk | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-3863 | federal_circuit 1 | keyword | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-3865 | federal_circuit 8 | keyword | "cell-site location" +s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10<br>**boolean_unsatisfied**: Sheets v. Mackey — required terms/proximity not met in full text<br>**boolean_unsatisfied**: United States v. Campbell — required terms/proximity not met in full text |
| LF-BS-3868 | one_state_plus_federal NV | auto | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3883 | federal_circuit 10 | keyword | "patent eligible" & "section 101" % criminal | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-3888 | all_states | auto | "prescriptive easement" /10 servient | **boolean_unsatisfied**: Sandt v. Royster — required terms/proximity not met in full text<br>**boolean_unsatisfied**: House v. Close — required terms/proximity not met in full text |
| LF-BS-3889 | one_state_plus_federal OH | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results<br>**landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-3893 | one_state PA | keyword | "cohabitation" w/s "express contract" | **empty**: no results |
| LF-BS-3898 | federal_circuit 11 | auto | "automobile exception" /p "probable cause" & warrantless | **duplicate_hit**: #6 California v. Acevedo 500 U.S. 565 |
| LF-BS-3900 | federal_circuit dc | auto | scienter /p "rule 10b-5" & pslra | **boolean_unsatisfied**: Dura Pharmaceuticals, Inc. v. Broudo — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Basic Inc. v. Levinson — required terms/proximity not met in full text |
| LF-BS-3913 | one_state LA 2015-01-01– | keyword | "statute of frauds" w/15 ("part performance" or writing) | **empty**: no results |
| LF-BS-3925 | all_federal | keyword | vacat! /p "exceeded their powers" | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3934 | federal_circuit 10 | auto | "economic substance" w/s "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-3937 | one_state IL | keyword | impractic! /25 unforeseeab! | **empty**: no results |
| LF-BS-3943 | one_state CA | keyword | disclos! /p "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-3949 | one_state AK 1990-01-01–2010-12-31 | keyword | foreclosure AND standing AND NOT criminal | **boolean_unsatisfied**: Rockstad v. Erikson — required terms/proximity not met in full text |
| LF-BS-3951 | federal_district AK | keyword | ("crime involving moral turpitude" OR "aggravated felony") /s "categorical approach" | **empty**: no results |
| LF-BS-3953 | all_states | keyword | ("trade secret" OR misappropriat!) /s "reasonable measures" | **duplicate_hit**: #5 Global v. Energy 2026 Tex. Bus. 31 |
| LF-BS-3960 | all_states_and_federal 2015-01-01– | auto | ("hostile work environment" OR "sexual harassment") /s "severe or pervasive" | **result_missing_court**: #1 Broil v. Kansas Bureau of Investigation (no cite)<br>**result_missing_court**: #6 United States v. Prashad (no cite)<br>**boolean_unsatisfied**: Broil v. Kansas Bureau of Investigation — required terms/proximity not met in full text |
| LF-BS-3965 | one_state_plus_federal NY | keyword | "proximate cause" w/15 (foreseeab! or "intervening cause") | **landmark_missing**: wanted /palsgraf/ in top 10 |
| LF-BS-3969 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | "prescriptive easement" +s servient | **result_missing_court**: #7 In re Lightwave Technologies (971 So. 2d 712)<br>**duplicate_hit**: #7 In re Lightwave Technologies 971 So. 2d 712 |
| LF-BS-3972 | us_supreme_court | auto | monell /s "policy or custom" | **boolean_unsatisfied**: Monell v. New York City Dept. of Social Servs. — required terms/proximity not met in full text |
| LF-BS-3973 | federal_circuit 10 –1999-12-31 | keyword | "confrontation clause" w/s testimonial | **after_dateTo**: #1 2009-06-25 > 1999-12-31<br>**boolean_unsatisfied**: Ohio v. Roberts — required terms/proximity not met in full text |
| LF-BS-3979 | federal_circuit 9 | keyword | retaliation +s "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3980 | one_state_plus_federal AK | auto | retaliat! /25 "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3999 | one_state MO | keyword | "implied covenant of good faith and fair dealing" +s discretion | **empty**: no results |
| LF-BS-4001 | one_state AR 2000-01-01–2009-12-31 | keyword | "constructive eviction" /p tenant & abandon! | **empty**: no results |
| LF-BS-4008 | federal_district DE –1999-12-31 | auto | spoliation /p "adverse inference" & sanction! | **boolean_unsatisfied**: Willemijn Houdstermaatschaapij BV v. Apollo Computer Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Dentsply International, Inc. v. Kerr Manufacturing Co. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Johns Hopkins University v. CellPro — required terms/proximity not met in full text |
| LF-BS-4009 | all_states_and_federal | keyword | "rule of reason" w/p "anticompetitive effects" and "relevant market" | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10<br>**boolean_unsatisfied**: Eastman Kodak Co. v. Image Technical Services, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Exxon Corp. v. Superior Court — required terms/proximity not met in full text |
| LF-BS-4017 | federal_circuit 11 | keyword | nondischargeab! /p "false pretenses" & debtor | **empty**: no results<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-4022 | federal_circuit 9 2015-01-01– | auto | "parallel conduct" & conspira! % criminal | **empty**: no results |
| LF-BS-4025 | federal_circuit 10 | keyword | persecut! /p persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4026 | one_state_plus_federal PA | auto | "design defect" +s "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-4039 | one_state_plus_federal IL | keyword | "modification of the trust" /10 settlor | **empty**: no results |
| LF-BS-4043 | one_state_plus_federal PA 2020-01-01– | keyword | "cohabitation" w/p "express contract" and implied | **empty**: no results |
| LF-BS-4045 | all_federal | keyword | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10<br>**boolean_unsatisfied**: United States v. Galvan-Garcia — required terms/proximity not met in full text |
| LF-BS-4054 | one_state HI 2000-01-01–2009-12-31 | auto | statut! /p "class of persons" | **duplicate_hit**: #7 Kahoohanohano v. DHS, STATE 178 P.3d 538 |
| LF-BS-4056 | one_state_plus_federal SC | auto | exculpat! /p material! | **boolean_unsatisfied**: Smith v. California — required terms/proximity not met in full text |
| LF-BS-4059 | all_federal | keyword | "motion to compel arbitration" /10 unconscionab! | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-4061 | one_state_plus_federal CA | keyword | "cohabitation" w/15 ("express contract" or implied) | **landmark_missing**: wanted /marvin v\. marvin/ in top 10 |
| LF-BS-4068 | one_state TX | auto | "second amendment" w/p "historical tradition" and firearm | **boolean_unsatisfied**: Noyes v. Texas for the Protection of Samantha Jo Voges — required terms/proximity not met in full text |
| LF-BS-4069 | one_state IL 1990-01-01–2010-12-31 | keyword | "reasonable suspicion" AND frisk AND "articulable facts" | **boolean_unsatisfied**: People v. Caballes — required terms/proximity not met in full text |
| LF-BS-4075 | one_state_plus_federal MI | keyword | "testamentary capacity" /p testator & "natural objects of his bounty" | **duplicate_hit**: #3 Miller v. Prosser 359 Mich. 167<br>**duplicate_hit**: #5 In re Fay Estate 353 Mich. 83<br>**duplicate_hit**: #6 Mancani v. Sprenger 337 Mich. 514<br>**duplicate_hit**: #8 Walker v. Hinckley 270 Mich. 33 |
| LF-BS-4080 | one_state TN | auto | "market share liability" /p des & manufacturer | **boolean_unsatisfied**: Owens v. Truckstops of America — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Lind v. Beaman Dodge, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Coffman v. Armstrong International, Inc. — required terms/proximity not met in full text |
| LF-BS-4083 | federal_circuit 6 | keyword | "reasonable accommodation" w/15 ("interactive process" or "qualified individual") | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-4087 | one_state_plus_federal TX | keyword | "motion to compel arbitration" w/s unconscionab! | **empty**: no results<br>**landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-4090 | federal_circuit 4 | auto | (erisa OR "plan administrator") /s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-4091 | one_state_plus_federal NY | keyword | "proximate cause" /10 foreseeab! | **landmark_missing**: wanted /palsgraf/ in top 10 |
| LF-BS-4092 | one_state PA 2015-01-01– | auto | "statute of frauds" /10 "part performance" | **boolean_unsatisfied**: Carpet v. Presbyterian — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Matthew 2535 v. Denithorne, R. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Calisto, M. v. Rodgers, M. — required terms/proximity not met in full text |
| LF-BS-4099 | federal_circuit 8 2023-01-01– | keyword | eligib! /p "section 101" | **empty**: no results |
| LF-BS-4103 | one_state AZ 1990-01-01–2010-12-31 | keyword | title! /p deed | **duplicate_hit**: #5 In re Estate of Olson 224 P.3d 938 |
| LF-BS-4104 | one_state WA | auto | "prescriptive easement" /s servient | **boolean_unsatisfied**: Huff v. Northern Pacific Railway Co. — required terms/proximity not met in full text |
| LF-BS-4105 | one_state_plus_federal MI 1990-01-01–2010-12-31 | keyword | relocation & custod! % criminal | **boolean_not_violated**: Albright v. Oliver — contains excluded term(s): criminal<br>**boolean_not_violated**: Rumsfeld v. Padilla — contains excluded term(s): criminal<br>**boolean_not_violated**: In re Mason — contains excluded term(s): criminal |
| LF-BS-4109 | one_state PA | keyword | ("eminent domain" OR "public use") AND taking NOT criminal | **duplicate_hit**: #8 Lehigh-Northampton Airport Authority Lehigh Valley Internati 972 A.2d 576 |
| LF-BS-4114 | one_state MI | auto | "social host" /p intoxicat! & "guest" | **empty**: no results |
| LF-BS-4127 | one_state_plus_federal ME | keyword | asylum +s persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4136 | all_federal | auto | "motion to dismiss" /10 plausib! | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4140 | one_state_plus_federal WA 2020-01-01– | auto | "non-compete" & "legitimate business interest" % criminal | **boolean_unsatisfied**: Springer v. Freedom Vans LLC — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Culver v. 3M Company — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Arthun v. Nexus Surgical Innovations Inc — required terms/proximity not met in full text |
| LF-BS-4141 | federal_circuit 4 | keyword | benefit! /25 "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-4146 | federal_circuit 2 | auto | cramdown & "absolute priority rule" % criminal | **landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-4149 | federal_circuit federal | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4151 | one_state NH 2015-01-01– | keyword | "res judicata" & "final judgment" % criminal | **empty**: no results |
| LF-BS-4152 | federal_district AZ | auto | "confrontation clause" & testimonial % civil | **boolean_not_violated**: Gonzalez v. US Human Rights Network — contains excluded term(s): civil<br>**boolean_not_violated**: Berry v. Berry — contains excluded term(s): civil<br>**boolean_not_violated**: McClure v. Citrenbaum — contains excluded term(s): civil |
| LF-BS-4157 | us_supreme_court | keyword | exculpat! /25 suppress! | **empty**: no results<br>**landmark_missing**: wanted /brady v\. maryland\|giglio\|kyles\|bagley\|strickler\|wearry/ in top 10 |
| LF-BS-4160 | all_states 2020-01-01– | auto | secre! /p "reasonable measures" | **duplicate_hit**: #5 Global v. Energy 2026 Tex. Bus. 31 |
| LF-BS-4161 | one_state_plus_federal MI | keyword | "statute of frauds" & "part performance" % criminal | **empty**: no results |
| LF-BS-4167 | one_state_plus_federal NJ | keyword | "social host" w/p intoxicat! and "guest" | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-4173 | one_state FL | keyword | "negligent hiring" & "negligent supervision" % patent | **empty**: no results |
| LF-BS-4181 | all_federal 2023-01-01– | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-4188 | federal_circuit 10 | auto | "vacate the arbitration award" AND "exceeded their powers" AND "evident partiality" | **boolean_unsatisfied**: Hall Street Associates, L. L. C. v. Mattel, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Badgerow v. Walters — required terms/proximity not met in full text |
| LF-BS-4194 | one_state_plus_federal NY | auto | "parallel conduct" & conspira! % criminal | **landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-4195 | federal_circuit 1 2000-01-01–2009-12-31 | keyword | "rule of reason" & "anticompetitive effects" % criminal | **empty**: no results |
| LF-BS-4200 | all_federal | auto | "fraudulent joinder" +s remand | **boolean_unsatisfied**: Berry v. Reynolds Manufacturing, Inc. — required terms/proximity not met in full text |
| LF-BS-4201 | one_state IL | keyword | "loss of consortium" & spouse % patent | **empty**: no results |
| LF-BS-4203 | one_state DC | keyword | "motion to compel arbitration" /s unconscionab! | **empty**: no results |
| LF-BS-4211 | all_federal | keyword | scient! /p "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-4212 | one_state MD | auto | "prescriptive easement" /s servient | **boolean_unsatisfied**: Rounds v. Park — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Clickner v. Magothy River Ass'n — required terms/proximity not met in full text |
| LF-BS-4224 | one_state WV 2020-01-01– | auto | guardianship & ward % criminal | **boolean_unsatisfied**: In re: H.A. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: In re: E.J.M., a protected person — required terms/proximity not met in full text<br>**boolean_unsatisfied**: In re: L.A.G. — required terms/proximity not met in full text |
| LF-BS-4226 | federal_circuit 2 | auto | asylum w/s persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4227 | one_state_plus_federal CA | keyword | indemni! /25 tortfeasor | **empty**: no results |
| LF-BS-4229 | federal_circuit 6 | keyword | "summary judgment" /s "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-4234 | one_state_plus_federal MI | auto | "claim construction" /p specification & "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-4237 | one_state ID 1990-01-01–2010-12-31 | keyword | invit! /p trespasser | **empty**: no results |
| LF-BS-4239 | one_state HI | keyword | "pierce the corporate veil" +s undercapitaliz! | **empty**: no results |
| LF-BS-4242 | federal_circuit 2 | auto | confus! /p trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-4243 | all_states_and_federal | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **result_missing_court**: #3 Association of American Railroads v. Seggos (no cite)<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4249 | one_state_plus_federal NJ | keyword | "social host" AND intoxicat! AND NOT contract | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-4252 | all_federal | auto | asylum /p persecution & "particular social group" | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4253 | one_state_plus_federal TX | keyword | "personal jurisdiction" +s "minimum contacts" | **landmark_missing**: wanted /international shoe\|world-wide volkswagen\|burger king\|daimler\|goodyear\|ford motor\|bristol-myers\|walden/ in top 10 |
| LF-BS-4257 | all_federal | keyword | erisa /s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-4265 | all_states | keyword | "comparative negligence" AND "contributory negligence" AND "last clear chance" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-4267 | one_state_plus_federal KS 1990-01-01–2010-12-31 | keyword | insur! /p insurer | **empty**: no results |
| LF-BS-4269 | one_state MO | keyword | "implied covenant of good faith and fair dealing" w/s discretion | **empty**: no results |
| LF-BS-4271 | one_state TX | keyword | "social host" w/p intoxicat! and "guest" | **empty**: no results |
| LF-BS-4291 | all_federal | keyword | confus! /25 "strength of the mark" | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-4295 | federal_district NJ | keyword | cramdown /s "absolute priority rule" | **empty**: no results |
| LF-BS-4297 | one_state DE | keyword | "demand futility" /p "demand excused" & board | **boolean_unsatisfied**: Grobow v. Perot — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Quadrant Structured Products Company, Ltd. v. Vertin — required terms/proximity not met in full text |
| LF-BS-4303 | one_state_plus_federal SC 2000-01-01–2009-12-31 | keyword | "business judgment rule" +s "duty of care" | **empty**: no results |
| LF-BS-4308 | federal_circuit 11 1990-01-01–2010-12-31 | auto | "mcdonnell douglas" /p pretext & "prima facie case" | **boolean_unsatisfied**: Johnson v. California — required terms/proximity not met in full text |
| LF-BS-4309 | federal_circuit 7 | keyword | "procedural due process" /s "property interest" | **landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10<br>**boolean_unsatisfied**: Walker v. Thompson — required terms/proximity not met in full text |
| LF-BS-4311 | one_state WA | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-4313 | one_state ND 2015-01-01– | keyword | "equitable distribution" w/15 ("nonmarital" or commingl!) | **empty**: no results |
| LF-BS-4320 | one_state_plus_federal NY | auto | alimony +s modif! | **boolean_unsatisfied**: Surlak v. Surlak — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Fuda v. D'Atria (In re D'Atria) — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Manzano v. Manzano — required terms/proximity not met in full text |
| LF-BS-4325 | federal_circuit 6 | keyword | "cell-site location" /10 warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-4327 | all_states_and_federal | keyword | "demand futility" & "demand excused" % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /aronson\|rales\|zuckerberg\|brehm/ in top 10 |
| LF-BS-4333 | all_states_and_federal | keyword | ("malicious prosecution" OR "favorable termination") /s "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-4334 | one_state_plus_federal CA | auto | defect! /25 "unreasonably dangerous" | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-4337 | all_states_and_federal | keyword | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-4339 | all_federal | keyword | "consent to search" w/p "totality of the circumstances" and coerc! | **landmark_missing**: wanted /schneckloth\|bumper\|georgia v\. randolph\|illinois v\. rodriguez/ in top 10 |
| LF-BS-4340 | federal_circuit 6 | auto | "parallel conduct" & conspira! % criminal | **landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-4341 | one_state NJ | keyword | "personal jurisdiction" /10 "minimum contacts" | **duplicate_hit**: #10 NJ Auto. Ins. v. Indep. Fire Ins. 600 A.2d 1243 |
| LF-BS-4345 | one_state ID | keyword | "prenuptial agreement" /10 "full disclosure" | **empty**: no results |
| LF-BS-4351 | all_federal | keyword | "reasonable suspicion" /p frisk & "articulable facts" | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-4356 | federal_district WA | auto | "age discrimination" /s "but-for" | **boolean_unsatisfied**: McElwain v. Boeing Co. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Johnson v. Tire — required terms/proximity not met in full text |
| LF-BS-4357 | federal_circuit 8 | keyword | removab! /p "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-4359 | one_state MN | keyword | daubert /10 reliab! | **empty**: no results |
| LF-BS-4362 | us_supreme_court 2023-01-01– | auto | eligib! /p "section 101" | **empty**: no results |
| LF-BS-4365 | one_state_plus_federal AR | keyword | "demand futility" /s "demand excused" | **empty**: no results |
| LF-BS-4367 | one_state_plus_federal NJ | keyword | confus! /p trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-4369 | all_states_and_federal 2023-01-01– | keyword | "rule of reason" AND "anticompetitive effects" AND "relevant market" | **result_missing_court**: #5 Ramirez v. National Collegiate Athletic Association (no cite) |
| LF-BS-4375 | federal_circuit federal | keyword | "equal protection" +s "strict scrutiny" | **landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-4377 | federal_circuit dc | keyword | pretext! /p pretext | **landmark_missing**: wanted /mcdonnell douglas\|burdine\|st\. mary\|reeves v\. sanderson/ in top 10 |
| LF-BS-4379 | one_state NV | keyword | "testamentary capacity" & testator % criminal | **empty**: no results |
| LF-BS-4380 | one_state NH | auto | ("duty to defend" OR "eight corners") /s "potential for coverage" | **boolean_unsatisfied**: Great American Dining, Inc. v. Philadelphia Indemnity Insura — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Progressive Northern Insurance v. Argonaut Insurance — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Broom v. Continental Casualty Co. — required terms/proximity not met in full text |
| LF-BS-4381 | federal_district MS 2020-01-01– | keyword | "parallel conduct" w/p conspira! and "sherman act" | **empty**: no results |
| LF-BS-4383 | federal_circuit 3 2020-01-01– | keyword | confus! /25 "strength of the mark" | **empty**: no results |
| LF-BS-4387 | one_state CA | keyword | "strict liability" AND "design defect" AND "unreasonably dangerous" | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-4388 | one_state_plus_federal PA | auto | propensit! /25 propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-4396 | one_state_plus_federal MS | auto | "transitory foreign substance" /10 "actual or constructive knowledge" | **empty**: no results |
| LF-BS-4403 | one_state_plus_federal ID | keyword | retaliat! /p "materially adverse" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-4406 | federal_circuit 8 | auto | ("economic substance" OR "sham transaction") /s "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-4410 | one_state_plus_federal CA | auto | "negligent infliction of emotional distress" w/s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-4411 | federal_circuit 11 | keyword | "ineffective assistance of counsel" & prejudice % civil | **empty**: no results<br>**landmark_missing**: wanted /strickland\|hill v\. lockhart\|padilla\|lafler\|missouri v\. frye\|harrington v\. richter/ in top 10 |
| LF-BS-4413 | one_state CA | keyword | "duty to warn" w/s psychotherapist | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-4415 | one_state ID | keyword | "parol evidence rule" /10 integrat! | **empty**: no results |
| LF-BS-4416 | federal_circuit 1 2000-01-01–2009-12-31 | auto | "reasonable accommodation" /s "interactive process" | **boolean_unsatisfied**: US Airways, Inc. v. Barnett — required terms/proximity not met in full text |
| LF-BS-4419 | all_federal | keyword | "likelihood of confusion" /10 trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-4421 | one_state_plus_federal KS | keyword | "prescriptive easement" w/15 (servient or dominant) | **empty**: no results |
| LF-BS-4423 | federal_circuit 7 2000-01-01–2009-12-31 | keyword | "hostile work environment" w/p "severe or pervasive" and employer | **after_dateTo**: #2 2016-08-19 > 2009-12-31 |
| LF-BS-4425 | all_federal –1999-12-31 | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-4427 | one_state_plus_federal SC | keyword | creditor! /p "personal representative" | **duplicate_hit**: #6 Matter of Estate of Tollison 463 S.E.2d 611 |
| LF-BS-4429 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | "forum non conveniens" & "private interest" % arbitration | **empty**: no results |
| LF-BS-4435 | one_state ME | keyword | "modification of the trust" & settlor % criminal | **empty**: no results |
| LF-BS-4437 | federal_circuit dc | keyword | abstention AND "pending state" AND "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-4440 | all_federal | auto | miranda w/p custody and waiv! | **boolean_unsatisfied**: Oregon v. Mathiason — required terms/proximity not met in full text |
| LF-BS-4451 | federal_circuit 4 | keyword | "fair use" & copyright % criminal | **empty**: no results<br>**landmark_missing**: wanted /campbell\|acuff-rose\|warhol\|google llc v\. oracle\|harper & row\|sony corp/ in top 10 |
| LF-BS-4452 | us_supreme_court –1999-12-31 | auto | deference w/15 ("statutory ambiguity" or "administrative procedure act") | **boolean_unsatisfied**: Interstate Commerce Commission v. Brotherhood of Locomotive  — required terms/proximity not met in full text |
| LF-BS-4455 | federal_circuit 5 | keyword | miranda & custody % civil | **landmark_missing**: wanted /miranda\|berghuis\|edwards v\. ariz\|j\.d\.b\.\|rhode island v\. innis\|dickerson/ in top 10 |
| LF-BS-4459 | all_federal | keyword | "eminent domain" +s "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-4460 | one_state_plus_federal AZ | auto | interrogat! /p custody | **landmark_missing**: wanted /miranda\|berghuis\|edwards v\. ariz\|j\.d\.b\.\|rhode island v\. innis\|dickerson/ in top 10 |
| LF-BS-4464 | all_states | auto | "anticipatory repudiation" /10 repudiat! | **boolean_unsatisfied**: John P. Pavone and Signature Management Group, L.L.C. Vs. Ge — required terms/proximity not met in full text |
| LF-BS-4469 | federal_district MA | keyword | tak! /25 "economically viable" | **empty**: no results |
| LF-BS-4475 | one_state_plus_federal FL | keyword | "age discrimination" /10 "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-4476 | one_state NJ 2023-01-01– | auto | "security deposit" /s tenant | **boolean_unsatisfied**: Phillipsburg Housing Authority v. Hunt — required terms/proximity not met in full text |
| LF-BS-4477 | one_state UT 2023-01-01– | keyword | "automobile exception" +s "probable cause" | **empty**: no results |
| LF-BS-4482 | federal_district AK | auto | asylum /10 persecution | **empty**: no results |
| LF-BS-4488 | all_states_and_federal –1999-12-31 | auto | derivativ! /p "demand excused" | **boolean_unsatisfied**: Grobow v. Perot — required terms/proximity not met in full text |
| LF-BS-4489 | one_state CA | keyword | ("pollution exclusion" OR "absolute pollution exclusion") AND contaminant NOT criminal | **boolean_not_violated**: Aydin Corp. v. First State Insurance — contains excluded term(s): criminal |
| LF-BS-4493 | all_federal | keyword | "crime involving moral turpitude" +s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-4495 | one_state_plus_federal MD | keyword | "transitory foreign substance" /10 "actual or constructive knowledge" | **empty**: no results |
| LF-BS-4499 | all_federal | keyword | privileg! /p waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-4501 | one_state ME | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results |
| LF-BS-4505 | all_federal 2023-01-01– | keyword | "fraudulent joinder" & remand % patent | **empty**: no results |
| LF-BS-4507 | all_federal | keyword | deprivat! /p "property interest" | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-4511 | one_state_plus_federal TX | keyword | "diversity jurisdiction" /s "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-4512 | one_state_plus_federal MN 2000-01-01–2009-12-31 | auto | "general jurisdiction" & "at home" % probate | **boolean_not_violated**: Marshall v. Marshall — contains excluded term(s): probate<br>**boolean_not_violated**: In re the Estate of Riggle — contains excluded term(s): probate<br>**boolean_not_violated**: Sianis v. Jensen — contains excluded term(s): probate |
| LF-BS-4516 | federal_district ME 2023-01-01– | auto | "regulatory taking" w/15 ("investment-backed expectations" or "economically viable") | **empty**: no results |
| LF-BS-4517 | one_state VA | keyword | habitab! /25 rent | **empty**: no results |
| LF-BS-4518 | us_supreme_court | auto | retaliat! /25 "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-4524 | us_supreme_court 2000-01-01–2009-12-31 | auto | "age discrimination" /10 "but-for" | **boolean_unsatisfied**: Gross v. FBL Financial Services, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Reeves v. Sanderson Plumbing Products, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Kimel v. Florida Board of Regents — required terms/proximity not met in full text |
| LF-BS-4525 | federal_circuit dc 2000-01-01–2009-12-31 | keyword | "summary judgment" AND "genuine dispute" AND NOT patent | **boolean_unsatisfied**: Robinson v. Detroit News, Inc. — required terms/proximity not met in full text |
| LF-BS-4528 | one_state MN | auto | "undue influence" w/s testator | **duplicate_hit**: #6 In re Estate of Reay 249 Minn. 123 |
| LF-BS-4531 | all_federal | keyword | asylum w/s persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4545 | one_state_plus_federal IL | keyword | "implied warranty of merchantability" & disclaim! % criminal | **empty**: no results |
| LF-BS-4548 | one_state FL | auto | "deceptive and unfair trade practices" w/15 (consumer or "actual damages") | **boolean_unsatisfied**: Dorestin v. Hollywood Imports, Inc. — required terms/proximity not met in full text |
| LF-BS-4549 | one_state_plus_federal NE 2015-01-01– | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-4574 | all_states_and_federal | auto | "prevailing party" AND lodestar AND NOT criminal | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-4575 | all_states_and_federal | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **result_missing_court**: #8 Larkin v. Saber Automotive, LLC (no cite) |
| LF-BS-4576 | one_state_plus_federal LA | auto | "economic substance" /10 "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-4583 | us_supreme_court | keyword | "summary judgment" /s "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-4585 | one_state_plus_federal FL | keyword | cramdown /10 "absolute priority rule" | **landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-4587 | one_state NH | keyword | "vacate the arbitration award" /s "exceeded their powers" | **empty**: no results |
| LF-BS-4596 | one_state_plus_federal OH | auto | constru! /25 "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10<br>**boolean_unsatisfied**: State v. Sage — required terms/proximity not met in full text<br>**boolean_unsatisfied**: State v. Jenks — required terms/proximity not met in full text<br>**boolean_unsatisfied**: County Court of Ulster Cty. v. Allen — required terms/proximity not met in full text |
| LF-BS-4597 | one_state CA 1990-01-01–2010-12-31 | keyword | invit! /p trespasser | **boolean_unsatisfied**: Intel Corp. v. Hamidi — required terms/proximity not met in full text |
| LF-BS-4602 | one_state_plus_federal CA | auto | "duty to warn" AND psychotherapist AND "identifiable victim" | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-4608 | one_state_plus_federal SD | auto | tak! /25 "economically viable" | **boolean_unsatisfied**: Palazzolo v. Rhode Island — required terms/proximity not met in full text |
| LF-BS-4609 | federal_circuit 2 | keyword | persecut! /p persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4610 | one_state_plus_federal AL 2015-01-01– | auto | "social host" +s intoxicat! | **empty**: no results |
| LF-BS-4613 | federal_circuit 10 2000-01-01–2009-12-31 | keyword | "prior bad acts" w/s "other crimes" | **empty**: no results |
| LF-BS-4616 | federal_district MT | auto | cramdown +s "absolute priority rule" | **empty**: no results |
| LF-BS-4617 | federal_circuit 2 | keyword | "likelihood of confusion" /s trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-4621 | one_state TX –1999-12-31 | keyword | "pierce the corporate veil" /s undercapitaliz! | **empty**: no results |
| LF-BS-4623 | all_states_and_federal | keyword | standing w/15 ("injury in fact" or traceab!) | **landmark_missing**: wanted /lujan\|spokeo\|transunion\|clapper\|summers v\. earth/ in top 10 |
| LF-BS-4624 | federal_circuit federal | auto | removab! /25 removab! | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-4625 | federal_district CA 2023-01-01– | keyword | "class certification" & commonality % arbitration | **empty**: no results |
| LF-BS-4632 | one_state NJ | auto | tak! /25 "economically viable" | **boolean_unsatisfied**: Verizon New Jersey, Inc. v. Borough of Hopewell — required terms/proximity not met in full text |
| LF-BS-4635 | all_states_and_federal | keyword | "arbitrary and capricious" AND agency AND NOT criminal | **landmark_missing**: wanted /state farm\|motor vehicle mfrs\|overton park\|dhs v\. regents\|fcc v\. fox\|encino/ in top 10 |
| LF-BS-4637 | us_supreme_court | keyword | monell & "policy or custom" % contract | **empty**: no results<br>**landmark_missing**: wanted /monell\|city of canton\|connick\|pembaur\|bd\. of cnty\|board of county/ in top 10 |
| LF-BS-4643 | federal_circuit 8 | keyword | "reasonable accommodation" +s "interactive process" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-4649 | federal_circuit 8 | keyword | "attorney-client privilege" w/15 (waiv! or confidential!) | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-4653 | federal_circuit 8 | keyword | "loss causation" w/p "inflated price" and "economic loss" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-4657 | all_states | keyword | "tortious interference" AND "business relationship" AND justif! | **boolean_unsatisfied**: Hamm v. Coal — required terms/proximity not met in full text |
| LF-BS-4665 | federal_circuit 3 | keyword | "crime involving moral turpitude" w/15 ("categorical approach" or removab!) | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-4669 | one_state OR 1990-01-01–2010-12-31 | keyword | propensit! /p "other crimes" | **boolean_unsatisfied**: State v. Hambrick — required terms/proximity not met in full text |
| LF-BS-4671 | one_state ID 2020-01-01– | keyword | "anticipatory repudiation" /10 repudiat! | **empty**: no results |
| LF-BS-4679 | one_state_plus_federal NJ | keyword | "summary judgment" /p "genuine dispute" & "material fact" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-4685 | one_state_plus_federal WV | keyword | "reasonable suspicion" /p frisk & "articulable facts" | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-4699 | one_state_plus_federal NC 2020-01-01– | keyword | "proximate cause" /s foreseeab! | **empty**: no results |
| LF-BS-4705 | one_state_plus_federal RI | keyword | "child support" AND imput! AND NOT criminal | **boolean_unsatisfied**: Kulko v. Superior Court of Cal., City and County of San Fran — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Caban v. Mohammed — required terms/proximity not met in full text<br>**boolean_not_violated**: Orr v. Orr — contains excluded term(s): criminal |
| LF-BS-4708 | one_state_plus_federal OR | auto | indiffer! /p prison! | **landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-4713 | all_federal | keyword | "age discrimination" & "but-for" % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-4714 | us_supreme_court 2020-01-01– | auto | "prevailing party" /p lodestar & "reasonable hourly rate" | **empty**: no results |
| LF-BS-4716 | one_state GA | auto | proportional! /25 "undue burden" | **boolean_unsatisfied**: Miller v. State — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Ridley v. State — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Pyne v. State — required terms/proximity not met in full text |
| LF-BS-4717 | all_states_and_federal | keyword | "free exercise" & "neutral and generally applicable" % contract | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /employment div\|smith\|lukumi\|fulton\|kennedy v\. bremerton\|tandon\|masterpiece\|hobby lobby/ in top 10 |
| LF-BS-4723 | one_state_plus_federal NM 2023-01-01– | keyword | "creditor's claim" /s "personal representative" | **empty**: no results |
| LF-BS-4740 | all_states_and_federal | auto | erisa & "abuse of discretion" % criminal | **boolean_unsatisfied**: Pierce v. Underwood — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Varity Corp. v. Howe — required terms/proximity not met in full text |
| LF-BS-4749 | all_states_and_federal | keyword | "reasonable accommodation" w/p "interactive process" and "qualified individual" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-4752 | us_supreme_court | auto | "economic substance" /10 "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10<br>**boolean_unsatisfied**: MeadWestvaco Corp. v. Illinois Department of Revenue — required terms/proximity not met in full text<br>**boolean_unsatisfied**: United States v. Generes — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Container Corp. of America v. Franchise Tax Board — required terms/proximity not met in full text |
| LF-BS-4753 | all_states | keyword | "proportional to the needs of the case" /s discovery | **boolean_unsatisfied**: In re N. Cypress Med. Ctr. Operating Co. — required terms/proximity not met in full text |
| LF-BS-4760 | all_states_and_federal | auto | "diversity jurisdiction" w/15 ("amount in controversy" or remov!) | **result_missing_court**: #3 Medina v. General Motors LLC (no cite)<br>**landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-4761 | one_state_plus_federal GA | keyword | "social host" AND intoxicat! AND "guest" | **empty**: no results |
| LF-BS-4764 | one_state SD 2020-01-01– | auto | miranda & custody % civil | **boolean_unsatisfied**: Melius v. Songer — required terms/proximity not met in full text<br>**boolean_not_violated**: Evens v. Evens — contains excluded term(s): civil<br>**boolean_unsatisfied**: Wasilk v. Wasilk — required terms/proximity not met in full text |
| LF-BS-4765 | one_state CA 2015-01-01– | keyword | "negligent hiring" /p "negligent supervision" & employer | **boolean_unsatisfied**: Feltham v. Universal Protection Service, LP — required terms/proximity not met in full text |
| LF-BS-4769 | federal_circuit federal –1999-12-31 | keyword | interrogat! /25 waiv! | **empty**: no results |
| LF-BS-4776 | one_state OR | auto | "liquidated damages" & penalty % criminal | **boolean_not_violated**: State v. Emerine — contains excluded term(s): criminal |
| LF-BS-4777 | one_state SC 2000-01-01–2009-12-31 | keyword | relocat! /p custod! | **empty**: no results |
| LF-BS-4778 | federal_circuit 6 | auto | "claim construction" & specification % criminal | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-4781 | us_supreme_court 2015-01-01– | keyword | scienter w/p "rule 10b-5" and pslra | **empty**: no results |
| LF-BS-4783 | one_state_plus_federal MI | keyword | "additional insured" w/p "arising out of" and coverage | **duplicate_hit**: #3 Sentry Insurance v. National Steel Corp. 147 Mich. App. 214 |
| LF-BS-4788 | one_state_plus_federal CA –1999-12-31 | auto | "strict liability" AND "design defect" AND "unreasonably dangerous" | **boolean_unsatisfied**: Greenman v. Yuba Power Products, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Medtronic, Inc. v. Lohr — required terms/proximity not met in full text |
| LF-BS-4789 | all_states | keyword | "child support" /10 imput! | **boolean_unsatisfied**: J.e.m. v. D.n.m. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: in the Interest of B.A.L., Children — required terms/proximity not met in full text<br>**boolean_unsatisfied**: State ex rel. Alford v. Montgomery Cty. Child Support Enforc — required terms/proximity not met in full text |
| LF-BS-4797 | federal_district NY | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-4803 | all_federal | keyword | erisa w/p "abuse of discretion" and "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-4806 | all_states_and_federal 2023-01-01– | auto | "bad faith" /10 insurer | **result_missing_court**: #6 Healthy Food Experts, LLC v. Amguard Insurance Company (no cite) |
| LF-BS-4807 | federal_circuit federal | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4811 | one_state GA | keyword | insur! /25 "failure to settle" | **empty**: no results |
| LF-BS-4812 | one_state WI 2020-01-01– | auto | "joint and several liability" w/15 (tortfeasor! or apportion!) | **boolean_unsatisfied**: Nelson v. Loessin — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Mueller v. Bull's Eye Sport Shop, LLC — required terms/proximity not met in full text |
| LF-BS-4814 | all_federal | auto | "prior bad acts" AND "other crimes" AND propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-4819 | all_states_and_federal | keyword | ("regulatory taking" OR "inverse condemnation") /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-4824 | federal_circuit 2 | auto | "loss causation" & "inflated price" % criminal | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10<br>**boolean_not_violated**: United States v. Bajakajian — contains excluded term(s): criminal<br>**boolean_not_violated**: Austin v. United States — contains excluded term(s): criminal<br>**boolean_not_violated**: Paroline v. United States — contains excluded term(s): criminal |
| LF-BS-4829 | one_state SC | keyword | "free exercise" w/s "neutral and generally applicable" | **empty**: no results |
| LF-BS-4831 | one_state OR 2020-01-01– | keyword | "pierce the corporate veil" AND undercapitaliz! AND "corporate form" | **empty**: no results |
| LF-BS-4833 | federal_circuit 8 | keyword | "automatic stay" w/s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-4835 | federal_circuit 4 2000-01-01–2009-12-31 | keyword | "patent eligible" w/s "section 101" | **empty**: no results |
| LF-BS-4839 | one_state_plus_federal MA | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-4841 | one_state_plus_federal AK 1990-01-01–2010-12-31 | keyword | parol! /p integrat! | **empty**: no results |
| LF-BS-4845 | one_state CO 2023-01-01– | keyword | "statute of frauds" AND "part performance" AND NOT criminal | **empty**: no results |
| LF-BS-4846 | one_state_plus_federal AZ | auto | retaliation /10 "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-4848 | one_state OK | auto | "motion to compel arbitration" w/s unconscionab! | **boolean_unsatisfied**: WILLIAMS v. TAMKO BUILDING PRODUCTS INC — required terms/proximity not met in full text<br>**boolean_unsatisfied**: DIRTWORKS COMPANY, INC. v. OVERLAND CORPORATION — required terms/proximity not met in full text |
| LF-BS-4849 | one_state_plus_federal WA 2015-01-01– | keyword | "excessive force" & "fourth amendment" % contract | **empty**: no results |
| LF-BS-4853 | one_state TX | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-4855 | all_states 1990-01-01–2010-12-31 | keyword | "implied consent" +s refus! | **after_dateTo**: #2 2020-10-21 > 2010-12-31 |
| LF-BS-4861 | one_state MI | keyword | homestead w/p devise and "surviving spouse" | **boolean_unsatisfied**: In re Petition of Emmet County Treasurer for Foreclosure — required terms/proximity not met in full text |
| LF-BS-4872 | one_state OR 1990-01-01–2010-12-31 | auto | "dog bite" +s "strict liability" | **boolean_unsatisfied**: Jones v. General Motors Corp. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Zanten v. Zanten — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Park v. Hoffard — required terms/proximity not met in full text |
| LF-BS-4873 | all_states 2023-01-01– | keyword | "modification of the trust" AND settlor AND beneficiar! | **boolean_unsatisfied**: Guardianship and Conservatorship of G.I.C. — required terms/proximity not met in full text |
| LF-BS-4875 | all_federal | keyword | "motion to dismiss" /s plausib! | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4883 | one_state_plus_federal FL 1990-01-01–2010-12-31 | keyword | "economic loss rule" & "purely economic" % criminal | **empty**: no results |
| LF-BS-4888 | all_states_and_federal | auto | ("intentional infliction of emotional distress" OR "outrageous conduct") AND "severe emotional distress" NOT patent | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-4893 | federal_circuit 1 | keyword | "reasonable accommodation" /s "interactive process" | **landmark_missing**: wanted /us airways\|toyota motor\|sutton\|chevron u\.s\.a\.,? inc\.? v\. echazabal/ in top 10 |
| LF-BS-4895 | one_state DC 1990-01-01–2010-12-31 | keyword | "proportional to the needs of the case" AND discovery AND NOT habeas | **empty**: no results |
| LF-BS-4896 | one_state AR | auto | ("punitive damages" OR "exemplary damages") AND ratio NOT patent | **boolean_unsatisfied**: Holland v. Ratliff — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Miller v. Blanton — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Southern Farm Bureau Casualty Insurance v. Daniel — required terms/proximity not met in full text |
| LF-BS-4899 | one_state_plus_federal NJ | keyword | "social host" +s intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-4900 | one_state FL 2020-01-01– | auto | impractic! /p frustration | **empty**: no results |
| LF-BS-4903 | federal_circuit 11 2023-01-01– | keyword | "motion to dismiss" w/s plausib! | **empty**: no results |
| LF-BS-4904 | federal_circuit 3 | auto | "prevailing party" & lodestar % criminal | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-4907 | one_state WI 2000-01-01–2009-12-31 | keyword | "business judgment rule" +s "duty of care" | **empty**: no results |
| LF-BS-4909 | federal_circuit 3 | keyword | "prevailing party" /s lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10<br>**boolean_unsatisfied**: Pennsylvania v. Delaware Valley Citizens' Council for Clean  — required terms/proximity not met in full text |
| LF-BS-4919 | one_state_plus_federal NH | keyword | "duty to warn" +s psychotherapist | **empty**: no results |
| LF-BS-4920 | federal_circuit 5 –1999-12-31 | auto | "second amendment" w/15 ("historical tradition" or firearm) | **empty**: no results |
| LF-BS-4923 | one_state UT 2000-01-01–2009-12-31 | keyword | "non-compete" /p "legitimate business interest" & reasonabl! | **empty**: no results |
| LF-BS-4926 | federal_district OK | auto | utteran! /25 "startling event" | **empty**: no results |
| LF-BS-4927 | federal_circuit 10 | keyword | scienter /s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-4932 | federal_circuit 3 | auto | "procedural due process" & "property interest" % contract | **boolean_unsatisfied**: Mullane v. Central Hanover Bank & Trust Co. — required terms/proximity not met in full text<br>**boolean_not_violated**: Arnett v. Kennedy — contains excluded term(s): contract |
| LF-BS-4935 | us_supreme_court 2000-01-01–2009-12-31 | keyword | "confrontation clause" AND testimonial AND cross-examin! | **after_dateTo**: #1 2011-02-28 > 2009-12-31 |
| LF-BS-4939 | one_state MN | keyword | "double jeopardy" +s blockburger | **empty**: no results |
| LF-BS-4945 | one_state IA | keyword | "force majeure" w/s frustration | **empty**: no results |
| LF-BS-4948 | one_state_plus_federal MO | auto | indiffer! /p prison! | **landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-4949 | one_state ME | keyword | "parol evidence rule" /p integrat! & ambigu! | **empty**: no results |
| LF-BS-4951 | one_state_plus_federal NV | keyword | "reasonable suspicion" w/15 (frisk or "articulable facts") | **landmark_missing**: wanted /terry v\. ohio\|sokolow\|wardlow\|arvizu\|navarette/ in top 10 |
| LF-BS-4954 | one_state_plus_federal CA | auto | insur! /p insurer | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10 |
| LF-BS-4956 | one_state_plus_federal MA | auto | "ineffective assistance of counsel" & prejudice % civil | **boolean_not_violated**: Strickland v. Washington — contains excluded term(s): civil |
| LF-BS-4967 | federal_district CT | keyword | "statute of limitations" & "equitable tolling" % patent | **empty**: no results |
| LF-BS-4968 | one_state CA | auto | "cohabitation" & "express contract" % criminal | **boolean_not_violated**: People v. Clark — contains excluded term(s): criminal<br>**boolean_not_violated**: People v. Kwok — contains excluded term(s): criminal<br>**boolean_not_violated**: People v. Ware — contains excluded term(s): criminal |
| LF-BS-4969 | federal_circuit federal | keyword | "fair use" & copyright % criminal | **empty**: no results<br>**landmark_missing**: wanted /campbell\|acuff-rose\|warhol\|google llc v\. oracle\|harper & row\|sony corp/ in top 10 |
| LF-BS-4975 | one_state_plus_federal MI | keyword | capaci! /25 "natural objects of his bounty" | **empty**: no results |
| LF-BS-4981 | one_state_plus_federal NJ | keyword | ("social host" OR "dram shop") /s intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-4986 | federal_district MT 2023-01-01– | auto | nondischargeab! AND "false pretenses" AND debtor | **empty**: no results |
| LF-BS-4991 | one_state_plus_federal ID | keyword | scienter /p "rule 10b-5" & pslra | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-4992 | one_state OK 2020-01-01– | auto | tak! /p "investment-backed expectations" | **empty**: no results |
| LF-BS-4993 | one_state_plus_federal MO | keyword | "eminent domain" AND "just compensation" AND NOT criminal | **boolean_not_violated**: Kelo v. City of New London — contains excluded term(s): criminal |
| LF-BS-4998 | one_state CA | auto | cohabit! /25 implied | **landmark_missing**: wanted /marvin v\. marvin/ in top 10 |
| rw-0004 | all_federal | auto | "self defense" /s "imminent" AND ("reasonable belief" OR "stand your ground") | **landmark_missing**: wanted /people v\.? goetz\|state v\.? norman\|beard v\.? united states\|brown v\.? united states/ in top 10 |
| rw-0005 | all_federal | auto | "material breach" /s "substantial performance" NOT construction | **landmark_missing**: wanted /jacob & youngs\|k & g construction\|walker & co\|plante v\.? jacobs/ in top 10 |
| rw-0007 | all_federal | auto | "homeowners association" /p ("restrictive covenant" OR "architectural") AND enforcement | **landmark_missing**: wanted /nahrstedt\|shelley v\.? kraemer\|tulk v\.? moxhay\|neponsit\|sanborn v\.? mclean/ in top 10 |
| rw-0008 | all_federal | auto | trustee /p ("prudent investor" OR "duty of loyalty") AND breach | **landmark_missing**: wanted /harvard college v\.? amory\|in re estate of janes\|meinhard v\.? salmon\|shriners hospitals/ in top 10 |
| rw-0010 | all_federal | auto | "equitable distribution" /p ("separate property" OR commingled) | **landmark_missing**: wanted /painter v\.? painter\|o'brien v\.? o'brien\|rothman\|pereira v\.? pereira\|van camp/ in top 10 |
| rw-0022 | all_federal | auto | exclusion /s ambiguous AND "construed against the insurer" | **landmark_missing**: wanted /gray v\.? zurich\|montrose\|garvey v\.? state farm\|bank of the west/ in top 10 |
| rw-0031 | all_federal | auto | "motion to dismiss" /p "plausible on its face" NOT arbitration | **landmark_missing**: wanted /twombly\|iqbal\|conley v\.? gibson/ in top 10 |
| rw-0036 | all_federal | auto | "arbitrary and capricious" /s ("reasoned explanation" OR "state farm") | **landmark_missing**: wanted /state farm mutual\|overton park\|fcc v\.? fox\|dhs v\.? regents\|motor vehicle manufacturers/ in top 10 |
| rw-0038 | all_federal | auto | "elective share" w/15 "surviving spouse" | **landmark_missing**: wanted /sullivan v\.? burkin\|newman v\.? dore\|in re estate of cross\|seifert v\.? southern/ in top 10 |
| rw-0048 | all_federal | auto | noncompete /p ("geographic scope" OR "legitimate business interest") NOT physician | **landmark_missing**: wanted /bdo seidman\|reed roberts\|mitchel v\.? reynolds\|edwards v\.? arthur andersen/ in top 10 |
| rw-0064 | all_federal | auto | "constructive possession" w/10 "intent to distribute" | **landmark_missing**: wanted /united states v\.? jenkins\|turner v\.? united states\|united states v\.? blue\|county court/ in top 10 |
| rw-0065 | all_federal | auto | "promissory estoppel" w/15 "detrimental reliance" | **landmark_missing**: wanted /ricketts v\.? scothorn\|feinberg\|hoffman v\.? red owl\|drennan\|allegheny college/ in top 10 |
| rw-0070 | all_federal | auto | "prenuptial agreement" /s ("full disclosure" OR unconscionable) | **landmark_missing**: wanted /simeone v\.? simeone\|posner v\.? posner\|button v\.? button\|deLorean\|newman v\.? newman/ in top 10 |
| rw-0079 | all_federal | auto | "pierce the corporate veil" /s ("alter ego" OR undercapitalization) | **landmark_missing**: wanted /walkovszky\|sea-?land services\|dewitt truck brokers\|bartle\|minton v\.? cavaney/ in top 10 |
| rw-0085 | all_federal | auto | "cancellation of removal" /s "exceptional and extremely unusual hardship" | **landmark_missing**: wanted /in re monreal\|in re recinas\|in re andazola\|wilkinson v\.? garland/ in top 10 |
| rw-0091 | all_federal | auto | "statute of limitations" w/10 "discovery rule" AND accrual | **landmark_missing**: wanted /rotella\|urie v\.? thompson\|kubrick\|merck\|trw v\.? andrews/ in top 10 |
| rw-0092 | all_federal | auto | "respondeat superior" /p "scope of employment" AND "personal errand" | **landmark_missing**: wanted /ira s\.? bushey\|faragher\|burlington industries\|meyer v\.? holley/ in top 10 |
| rw-0095 | all_federal | auto | "parol evidence" /s ("integration clause" OR "fully integrated") | **landmark_missing**: wanted /masterson v\.? sine\|mitchill v\.? lath\|pacific gas\|thompson v\.? libby/ in top 10 |
| rw-0096 | all_federal | auto | "substantial evidence" w/15 ("disability" OR "residual functional capacity") | **landmark_missing**: wanted /biestek v\.? berryhill\|richardson v\.? perales\|bowen v\.? yuckert\|sullivan v\.? zebley/ in top 10 |
| rw-0109 | all_federal | auto | "business judgment rule" /p ("duty of loyalty" OR "self dealing") | **landmark_missing**: wanted /smith v\.? van gorkom\|aronson v\.? lewis\|shlensky v\.? wrigley\|guth v\.? loft\|sinclair oil/ in top 10 |
| rw-0115 | all_federal | auto | asylum /p ("particular social group" OR "well founded fear") | **landmark_missing**: wanted /ins v\.? cardoza-?fonseca\|matter of acosta\|ins v\.? elias-?zacarias\|matter of m-?e-?v-?g/ in top 10 |
| rw-0125 | us_supreme_court | auto | unconscionable /p "contract of adhesion" AND ("procedural" OR substantive) | **landmark_missing**: wanted /williams v\.? walker-?thomas\|armendariz\|henningsen\|jones v\.? star credit/ in top 10 |
| rw-0130 | us_supreme_court | auto | relocation /p "custodial parent" AND burden NOT immigration | **landmark_missing**: wanted /baures v\.? lewis\|tropea\|burgess\|lamusga\|ireland v\.? ireland/ in top 10 |
| rw-0134 | us_supreme_court | auto | "prior bad acts" /s ("404(b)" OR propensity) NOT sentencing | **landmark_missing**: wanted /huddleston\|old chief\|michelson\|dowling/ in top 10 |
| rw-0135 | us_supreme_court | auto | "constructive eviction" /s "warranty of habitability" | **landmark_missing**: wanted /javins\|pugh v\.? holmes\|hilder v\.? st\.? peter\|green v\.? superior court\|blackett/ in top 10 |
| rw-0138 | us_supreme_court | auto | whistleblower /p "protected activity" AND "adverse employment action" | **landmark_missing**: wanted /burlington northern\|crawford v\.? metropolitan\|university of texas v\.? nassar\|lawson v\.? ftc/ in top 10 |
| rw-0139 | us_supreme_court | auto | "derivative suit" w/15 "demand futility" | **landmark_missing**: wanted /aronson v\.? lewis\|zapata\|rales v\.? blasband\|united food v\.? zuckerberg\|marchand/ in top 10 |
| rw-0145 | us_supreme_court | auto | "crime involving moral turpitude" w/15 ("categorical approach" OR deportable) | **landmark_missing**: wanted /matter of silva-?trevino\|moncrieffe\|mellouli\|descamps\|matter of diaz-?lizarraga/ in top 10 |
| rw-0150 | us_supreme_court | auto | "likelihood of confusion" /s ("trademark infringement" OR "sleekcraft") | **duplicate_hit**: #5 McMonagle v. Northeast Women's Center, Inc. 493 U.S. 901<br>**landmark_missing**: wanted /sleekcraft\|polaroid\|du pont\|two pesos\|virgin enterprises/ in top 10 |
| rw-0169 | federal_circuit 1 | auto | "operating agreement" /p ("member dissociation" OR "judicial dissolution") AND llc | **landmark_missing**: wanted /haley v\.? talcott\|in re silver leaf\|dunbar group\|fisk ventures/ in top 10 |
| rw-0196 | federal_circuit 6 | auto | "preferential transfer" w/10 "ninety day" | **duplicate_hit**: #4 Matter of Mobley 15 B.R. 573 |
| rw-0210 | federal_circuit 8 | auto | "trade secret" w/15 ("reasonable measures" OR misappropriation) | **landmark_missing**: wanted /kewanee oil\|e\.? i\.? du pont v\.? christopher\|rockwell graphic\|ruckelshaus/ in top 10 |
| rw-0226 | federal_circuit 11 | auto | "student loan" /p "undue hardship" AND dischargeability | **landmark_missing**: wanted /brunner v\.? new york\|in re gerhardt\|in re long\|educational credit v\.? polleys/ in top 10 |
| rw-0236 | federal_circuit dc | auto | "adverse possession" /s hostile AND "open and notorious" | **landmark_missing**: wanted /howard v\.? kunto\|mannillo v\.? gorski\|van valkenburgh\|marengo cave/ in top 10 |
| rw-0257 | one_state_plus_federal CA | auto | "plain error" /p ("not preserved" OR waived) NOT sentencing | **landmark_missing**: wanted /united states v\.? olano\|puckett v\.? united states\|johnson v\.? united states\|rosales-?mireles/ in top 10 |
| rw-0266 | one_state_plus_federal CA | auto | easement /p ("by necessity" OR prescriptive) AND "landlocked" | **landmark_missing**: wanted /othen v\.? rosier\|finn v\.? williams\|granite properties\|schwab v\.? timmons/ in top 10 |
| rw-0267 | one_state_plus_federal CA | auto | "undue influence" /s ("testamentary capacity" OR "confidential relationship") | **landmark_missing**: wanted /in re estate of maheras\|haynes v\.? first national\|estate of lakatosh\|logotheti/ in top 10 |
| rw-0282 | one_state_plus_federal CA | auto | "ineffective assistance" w/15 "deficient performance" AND prejudice | **degraded**: [{"engine":"semantic","code":"timeout","message":"The search engine timed out."}] |
| rw-0291 | one_state_plus_federal CA | auto | negligence /s "proximate cause" AND ("duty of care" OR foreseeability) | **landmark_missing**: wanted /palsgraf\|carroll towing\|kinsman\|petition of kinsman/ in top 10 |
| rw-0297 | one_state_plus_federal NY | auto | "holographic will" /p ("material provisions" OR handwriting) | **landmark_missing**: wanted /in re estate of gonzalez\|estate of muder\|succession of burke\|in re will of ranney/ in top 10 |
| rw-0306 | one_state_plus_federal NY | auto | "medical malpractice" /s ("standard of care" OR "informed consent") | **landmark_missing**: wanted /canterbury v\.? spence\|schloendorff\|natanson\|cobbs v\.? grant\|salgo/ in top 10 |
| rw-0307 | one_state_plus_federal NY | auto | "at will" /s ("public policy" OR retaliation) AND termination | **landmark_missing**: wanted /tameny\|petermann\|palmateer\|sheets v\.? teddy's\|gantt/ in top 10 |
| rw-0311 | one_state_plus_federal NY | auto | #stacking w/10 ("underinsured motorist" OR "uninsured motorist") | **landmark_missing**: wanted /allstate v\.? boynton\|tucker v\.? metropolitan\|burnham\|cunningham v\.? insurance/ in top 10 |
| rw-0313 | one_state_plus_federal NY | auto | "intentional infliction" w/10 "outrageous conduct" | **landmark_missing**: wanted /hustler\|snyder v\.? phelps\|womack\|state rubbish/ in top 10 |
| rw-0324 | one_state_plus_federal NY | auto | "material breach" /s "substantial performance" NOT construction | **landmark_missing**: wanted /jacob & youngs\|k & g construction\|walker & co\|plante v\.? jacobs/ in top 10 |
| rw-0326 | one_state_plus_federal NY | auto | "homeowners association" /p ("restrictive covenant" OR "architectural") AND enforcement | **landmark_missing**: wanted /nahrstedt\|shelley v\.? kraemer\|tulk v\.? moxhay\|neponsit\|sanborn v\.? mclean/ in top 10 |
| rw-0327 | one_state_plus_federal NY | auto | trustee /p ("prudent investor" OR "duty of loyalty") AND breach | **landmark_missing**: wanted /harvard college v\.? amory\|in re estate of janes\|meinhard v\.? salmon\|shriners hospitals/ in top 10 |
| rw-0329 | one_state_plus_federal NY | auto | "equitable distribution" /p ("separate property" OR commingled) | **landmark_missing**: wanted /painter v\.? painter\|o'brien v\.? o'brien\|rothman\|pereira v\.? pereira\|van camp/ in top 10 |
| rw-0341 | one_state_plus_federal TX | auto | exclusion /s ambiguous AND "construed against the insurer" | **landmark_missing**: wanted /gray v\.? zurich\|montrose\|garvey v\.? state farm\|bank of the west/ in top 10 |
| rw-0350 | one_state_plus_federal TX | auto | "motion to dismiss" /p "plausible on its face" NOT arbitration | **landmark_missing**: wanted /twombly\|iqbal\|conley v\.? gibson/ in top 10 |
| rw-0355 | one_state_plus_federal TX | auto | "arbitrary and capricious" /s ("reasoned explanation" OR "state farm") | **landmark_missing**: wanted /state farm mutual\|overton park\|fcc v\.? fox\|dhs v\.? regents\|motor vehicle manufacturers/ in top 10 |
| rw-0357 | one_state_plus_federal TX | auto | "elective share" w/15 "surviving spouse" | **landmark_missing**: wanted /sullivan v\.? burkin\|newman v\.? dore\|in re estate of cross\|seifert v\.? southern/ in top 10 |
| rw-0367 | one_state_plus_federal TX | auto | noncompete /p ("geographic scope" OR "legitimate business interest") NOT physician | **landmark_missing**: wanted /bdo seidman\|reed roberts\|mitchel v\.? reynolds\|edwards v\.? arthur andersen/ in top 10 |
| rw-0383 | one_state_plus_federal FL | auto | "constructive possession" w/10 "intent to distribute" | **landmark_missing**: wanted /united states v\.? jenkins\|turner v\.? united states\|united states v\.? blue\|county court/ in top 10 |
| rw-0384 | one_state_plus_federal FL | auto | "promissory estoppel" w/15 "detrimental reliance" | **landmark_missing**: wanted /ricketts v\.? scothorn\|feinberg\|hoffman v\.? red owl\|drennan\|allegheny college/ in top 10 |
| rw-0389 | one_state_plus_federal FL | auto | "prenuptial agreement" /s ("full disclosure" OR unconscionable) | **landmark_missing**: wanted /simeone v\.? simeone\|posner v\.? posner\|button v\.? button\|deLorean\|newman v\.? newman/ in top 10 |
| rw-0398 | one_state_plus_federal FL | auto | "pierce the corporate veil" /s ("alter ego" OR undercapitalization) | **landmark_missing**: wanted /walkovszky\|sea-?land services\|dewitt truck brokers\|bartle\|minton v\.? cavaney/ in top 10 |
| rw-0410 | one_state_plus_federal FL | auto | "statute of limitations" w/10 "discovery rule" AND accrual | **landmark_missing**: wanted /rotella\|urie v\.? thompson\|kubrick\|merck\|trw v\.? andrews/ in top 10 |
| rw-0411 | one_state_plus_federal FL | auto | "respondeat superior" /p "scope of employment" AND "personal errand" | **landmark_missing**: wanted /ira s\.? bushey\|faragher\|burlington industries\|meyer v\.? holley/ in top 10 |
| rw-0413 | one_state_plus_federal FL | auto | dui /p "breath test" AND ("implied consent" OR refusal) | **landmark_missing**: wanted /birchfield\|mcneely\|schmerber\|mitchell v\.? wisconsin\|south dakota v\.? neville/ in top 10 |
| rw-0414 | one_state_plus_federal FL | auto | "parol evidence" /s ("integration clause" OR "fully integrated") | **landmark_missing**: wanted /masterson v\.? sine\|mitchill v\.? lath\|pacific gas\|thompson v\.? libby/ in top 10 |
| rw-0415 | one_state_plus_federal IL | auto | "substantial evidence" w/15 ("disability" OR "residual functional capacity") | **landmark_missing**: wanted /biestek v\.? berryhill\|richardson v\.? perales\|bowen v\.? yuckert\|sullivan v\.? zebley/ in top 10 |
| rw-0419 | one_state_plus_federal IL | auto | "termination of parental rights" w/10 "clear and convincing" | **duplicate_hit**: #7 People v. Mason 255 Ill. App. 3d 822<br>**duplicate_hit**: #8 In re RC 195 Ill. 2d 291<br>**duplicate_hit**: #9 People v. M 368 Ill. App. 3d 883 |
| rw-0428 | one_state_plus_federal IL | auto | "business judgment rule" /p ("duty of loyalty" OR "self dealing") | **landmark_missing**: wanted /smith v\.? van gorkom\|aronson v\.? lewis\|shlensky v\.? wrigley\|guth v\.? loft\|sinclair oil/ in top 10 |
| rw-0434 | one_state_plus_federal IL | auto | asylum /p ("particular social group" OR "well founded fear") | **landmark_missing**: wanted /ins v\.? cardoza-?fonseca\|matter of acosta\|ins v\.? elias-?zacarias\|matter of m-?e-?v-?g/ in top 10 |
| rw-0444 | one_state_plus_federal PA | auto | unconscionable /p "contract of adhesion" AND ("procedural" OR substantive) | **landmark_missing**: wanted /williams v\.? walker-?thomas\|armendariz\|henningsen\|jones v\.? star credit/ in top 10 |
| rw-0449 | one_state_plus_federal PA | auto | relocation /p "custodial parent" AND burden NOT immigration | **landmark_missing**: wanted /baures v\.? lewis\|tropea\|burgess\|lamusga\|ireland v\.? ireland/ in top 10 |
| rw-0453 | one_state_plus_federal PA | auto | "prior bad acts" /s ("404(b)" OR propensity) NOT sentencing | **landmark_missing**: wanted /huddleston\|old chief\|michelson\|dowling/ in top 10 |
| rw-0455 | one_state_plus_federal PA | auto | ("debt collector" OR fdcpa) /s ("least sophisticated consumer" OR harassment) | **landmark_missing**: wanted /jerman\|heintz v\.? jenkins\|clomon v\.? jackson\|russell v\.? equifax\|obduskey/ in top 10 |
| rw-0457 | one_state_plus_federal PA | auto | whistleblower /p "protected activity" AND "adverse employment action" | **landmark_missing**: wanted /burlington northern\|crawford v\.? metropolitan\|university of texas v\.? nassar\|lawson v\.? ftc/ in top 10 |
| rw-0458 | one_state_plus_federal PA | auto | "derivative suit" w/15 "demand futility" | **landmark_missing**: wanted /aronson v\.? lewis\|zapata\|rales v\.? blasband\|united food v\.? zuckerberg\|marchand/ in top 10 |
| rw-0464 | one_state_plus_federal PA | auto | "crime involving moral turpitude" w/15 ("categorical approach" OR deportable) | **landmark_missing**: wanted /matter of silva-?trevino\|moncrieffe\|mellouli\|descamps\|matter of diaz-?lizarraga/ in top 10 |
| rw-0469 | one_state_plus_federal OH | auto | "likelihood of confusion" /s ("trademark infringement" OR "sleekcraft") | **landmark_missing**: wanted /sleekcraft\|polaroid\|du pont\|two pesos\|virgin enterprises/ in top 10 |
| rw-0488 | one_state_plus_federal GA | auto | "operating agreement" /p ("member dissociation" OR "judicial dissolution") AND llc | **landmark_missing**: wanted /haley v\.? talcott\|in re silver leaf\|dunbar group\|fisk ventures/ in top 10 |
| rw-0529 | one_state_plus_federal NC | auto | "trade secret" w/15 ("reasonable measures" OR misappropriation) | **landmark_missing**: wanted /kewanee oil\|e\.? i\.? du pont v\.? christopher\|rockwell graphic\|ruckelshaus/ in top 10 |
| rw-0545 | one_state_plus_federal MI | auto | "student loan" /p "undue hardship" AND dischargeability | **landmark_missing**: wanted /brunner v\.? new york\|in re gerhardt\|in re long\|educational credit v\.? polleys/ in top 10 |
| rw-0555 | one_state_plus_federal MI | auto | "adverse possession" /s hostile AND "open and notorious" | **landmark_missing**: wanted /howard v\.? kunto\|mannillo v\.? gorski\|van valkenburgh\|marengo cave/ in top 10 |
| rw-0570 | one_state_plus_federal VA | auto | "bad faith" /s ("failure to settle" OR "within policy limits") | **landmark_missing**: wanted /crisci\|comunale v\.? traders\|gruenberg\|campbell v\.? state farm\|anderson v\.? continental/ in top 10 |
| rw-0576 | one_state_plus_federal VA | auto | "plain error" /p ("not preserved" OR waived) NOT sentencing | **landmark_missing**: wanted /united states v\.? olano\|puckett v\.? united states\|johnson v\.? united states\|rosales-?mireles/ in top 10 |
| rw-0585 | one_state_plus_federal WA | auto | easement /p ("by necessity" OR prescriptive) AND "landlocked" | **landmark_missing**: wanted /othen v\.? rosier\|finn v\.? williams\|granite properties\|schwab v\.? timmons/ in top 10 |
| rw-0586 | one_state_plus_federal WA | auto | "undue influence" /s ("testamentary capacity" OR "confidential relationship") | **landmark_missing**: wanted /in re estate of maheras\|haynes v\.? first national\|estate of lakatosh\|logotheti/ in top 10 |
| rw-0600 | one_state_plus_federal MA | auto | "duty to defend" /p "duty to indemnify" AND broader | **landmark_missing**: wanted /gray v\.? zurich\|buss v\.? superior court\|montrose\|horace mann\|aerojet/ in top 10 |
| rw-0602 | one_state_plus_federal MA | auto | ("invasion of privacy" OR "intrusion upon seclusion") /p recording | **duplicate_hit**: #7 General v. Assistant Commissioner of Real Property Departmen 380 Mass. 623<br>**landmark_missing**: wanted /katz v\.? united states\|shulman v\.? group w\|dietemann\|hamberger\|bartnicki/ in top 10 |
| rw-0610 | one_state_plus_federal MA | auto | negligence /s "proximate cause" AND ("duty of care" OR foreseeability) | **landmark_missing**: wanted /palsgraf\|carroll towing\|kinsman\|petition of kinsman/ in top 10 |
| rw-0616 | one_state_plus_federal AZ | auto | "holographic will" /p ("material provisions" OR handwriting) | **duplicate_hit**: #3 Lind v. Muder 765 P.2d 997 |
| rw-0625 | one_state_plus_federal AZ | auto | "medical malpractice" /s ("standard of care" OR "informed consent") | **landmark_missing**: wanted /canterbury v\.? spence\|schloendorff\|natanson\|cobbs v\.? grant\|salgo/ in top 10 |
| rw-0626 | one_state_plus_federal AZ | auto | "at will" /s ("public policy" OR retaliation) AND termination | **landmark_missing**: wanted /tameny\|petermann\|palmateer\|sheets v\.? teddy's\|gantt/ in top 10 |
| rw-0630 | one_state_plus_federal AZ | auto | #stacking w/10 ("underinsured motorist" OR "uninsured motorist") | **landmark_missing**: wanted /allstate v\.? boynton\|tucker v\.? metropolitan\|burnham\|cunningham v\.? insurance/ in top 10 |
| rw-0642 | one_state_plus_federal MD | auto | "self defense" /s "imminent" AND ("reasonable belief" OR "stand your ground") | **landmark_missing**: wanted /people v\.? goetz\|state v\.? norman\|beard v\.? united states\|brown v\.? united states/ in top 10 |
| rw-0643 | one_state_plus_federal MD | auto | "material breach" /s "substantial performance" NOT construction | **landmark_missing**: wanted /jacob & youngs\|k & g construction\|walker & co\|plante v\.? jacobs/ in top 10 |
| rw-0645 | one_state_plus_federal MD | auto | "homeowners association" /p ("restrictive covenant" OR "architectural") AND enforcement | **landmark_missing**: wanted /nahrstedt\|shelley v\.? kraemer\|tulk v\.? moxhay\|neponsit\|sanborn v\.? mclean/ in top 10 |
| rw-0646 | one_state_plus_federal CO | auto | trustee /p ("prudent investor" OR "duty of loyalty") AND breach | **landmark_missing**: wanted /harvard college v\.? amory\|in re estate of janes\|meinhard v\.? salmon\|shriners hospitals/ in top 10 |
| rw-0648 | one_state_plus_federal CO | auto | "equitable distribution" /p ("separate property" OR commingled) | **landmark_missing**: wanted /painter v\.? painter\|o'brien v\.? o'brien\|rothman\|pereira v\.? pereira\|van camp/ in top 10 |
| rw-0660 | one_state_plus_federal TN | auto | exclusion /s ambiguous AND "construed against the insurer" | **landmark_missing**: wanted /gray v\.? zurich\|montrose\|garvey v\.? state farm\|bank of the west/ in top 10 |
| rw-0669 | one_state_plus_federal TN | auto | "motion to dismiss" /p "plausible on its face" NOT arbitration | **landmark_missing**: wanted /twombly\|iqbal\|conley v\.? gibson/ in top 10 |
| rw-0674 | one_state_plus_federal IN | auto | "arbitrary and capricious" /s ("reasoned explanation" OR "state farm") | **landmark_missing**: wanted /state farm mutual\|overton park\|fcc v\.? fox\|dhs v\.? regents\|motor vehicle manufacturers/ in top 10 |
| rw-0676 | one_state_plus_federal IN | auto | "elective share" w/15 "surviving spouse" | **landmark_missing**: wanted /sullivan v\.? burkin\|newman v\.? dore\|in re estate of cross\|seifert v\.? southern/ in top 10 |
| rw-0686 | one_state_plus_federal IN | auto | noncompete /p ("geographic scope" OR "legitimate business interest") NOT physician | **landmark_missing**: wanted /bdo seidman\|reed roberts\|mitchel v\.? reynolds\|edwards v\.? arthur andersen/ in top 10 |
| rw-0702 | one_state_plus_federal WI | auto | "constructive possession" w/10 "intent to distribute" | **landmark_missing**: wanted /united states v\.? jenkins\|turner v\.? united states\|united states v\.? blue\|county court/ in top 10 |
| rw-0708 | one_state_plus_federal WI | auto | "prenuptial agreement" /s ("full disclosure" OR unconscionable) | **landmark_missing**: wanted /simeone v\.? simeone\|posner v\.? posner\|button v\.? button\|deLorean\|newman v\.? newman/ in top 10 |
| rw-0717 | one_state_plus_federal MN | auto | "pierce the corporate veil" /s ("alter ego" OR undercapitalization) | **landmark_missing**: wanted /walkovszky\|sea-?land services\|dewitt truck brokers\|bartle\|minton v\.? cavaney/ in top 10 |
| rw-0723 | one_state_plus_federal MN | auto | "cancellation of removal" /s "exceptional and extremely unusual hardship" | **landmark_missing**: wanted /in re monreal\|in re recinas\|in re andazola\|wilkinson v\.? garland/ in top 10 |
| rw-0729 | one_state_plus_federal SC | auto | "statute of limitations" w/10 "discovery rule" AND accrual | **landmark_missing**: wanted /rotella\|urie v\.? thompson\|kubrick\|merck\|trw v\.? andrews/ in top 10 |
| rw-0730 | one_state_plus_federal SC | auto | "respondeat superior" /p "scope of employment" AND "personal errand" | **landmark_missing**: wanted /ira s\.? bushey\|faragher\|burlington industries\|meyer v\.? holley/ in top 10 |
| rw-0732 | one_state_plus_federal SC | auto | dui /p "breath test" AND ("implied consent" OR refusal) | **landmark_missing**: wanted /birchfield\|mcneely\|schmerber\|mitchell v\.? wisconsin\|south dakota v\.? neville/ in top 10 |
| rw-0733 | one_state_plus_federal SC | auto | "parol evidence" /s ("integration clause" OR "fully integrated") | **landmark_missing**: wanted /masterson v\.? sine\|mitchill v\.? lath\|pacific gas\|thompson v\.? libby/ in top 10 |
| rw-0734 | one_state_plus_federal SC | auto | "substantial evidence" w/15 ("disability" OR "residual functional capacity") | **landmark_missing**: wanted /biestek v\.? berryhill\|richardson v\.? perales\|bowen v\.? yuckert\|sullivan v\.? zebley/ in top 10 |
| rw-0747 | one_state_plus_federal AL | auto | "business judgment rule" /p ("duty of loyalty" OR "self dealing") | **landmark_missing**: wanted /smith v\.? van gorkom\|aronson v\.? lewis\|shlensky v\.? wrigley\|guth v\.? loft\|sinclair oil/ in top 10 |
| rw-0753 | one_state_plus_federal LA | auto | asylum /p ("particular social group" OR "well founded fear") | **landmark_missing**: wanted /ins v\.? cardoza-?fonseca\|matter of acosta\|ins v\.? elias-?zacarias\|matter of m-?e-?v-?g/ in top 10 |
| rw-0763 | one_state_plus_federal KY | auto | unconscionable /p "contract of adhesion" AND ("procedural" OR substantive) | **landmark_missing**: wanted /williams v\.? walker-?thomas\|armendariz\|henningsen\|jones v\.? star credit/ in top 10 |
| rw-0768 | one_state_plus_federal KY | auto | relocation /p "custodial parent" AND burden NOT immigration | **duplicate_hit**: #7 Nb v. Ch 351 S.W.3d 214<br>**landmark_missing**: wanted /baures v\.? lewis\|tropea\|burgess\|lamusga\|ireland v\.? ireland/ in top 10 |
| rw-0772 | one_state_plus_federal KY | auto | "prior bad acts" /s ("404(b)" OR propensity) NOT sentencing | **landmark_missing**: wanted /huddleston\|old chief\|michelson\|dowling/ in top 10 |
| rw-0773 | one_state_plus_federal KY | auto | "constructive eviction" /s "warranty of habitability" | **landmark_missing**: wanted /javins\|pugh v\.? holmes\|hilder v\.? st\.? peter\|green v\.? superior court\|blackett/ in top 10 |
| rw-0774 | one_state_plus_federal OR | auto | ("debt collector" OR fdcpa) /s ("least sophisticated consumer" OR harassment) | **landmark_missing**: wanted /jerman\|heintz v\.? jenkins\|clomon v\.? jackson\|russell v\.? equifax\|obduskey/ in top 10 |
| rw-0776 | one_state_plus_federal OR | auto | whistleblower /p "protected activity" AND "adverse employment action" | **landmark_missing**: wanted /burlington northern\|crawford v\.? metropolitan\|university of texas v\.? nassar\|lawson v\.? ftc/ in top 10 |
| rw-0777 | one_state_plus_federal OR | auto | "derivative suit" w/15 "demand futility" | **landmark_missing**: wanted /aronson v\.? lewis\|zapata\|rales v\.? blasband\|united food v\.? zuckerberg\|marchand/ in top 10 |
| rw-0783 | one_state_plus_federal OR | auto | "crime involving moral turpitude" w/15 ("categorical approach" OR deportable) | **landmark_missing**: wanted /matter of silva-?trevino\|moncrieffe\|mellouli\|descamps\|matter of diaz-?lizarraga/ in top 10 |
| rw-0788 | one_state_plus_federal OK | auto | "likelihood of confusion" /s ("trademark infringement" OR "sleekcraft") | **landmark_missing**: wanted /sleekcraft\|polaroid\|du pont\|two pesos\|virgin enterprises/ in top 10 |
| rw-0807 | one_state_plus_federal CT | auto | "operating agreement" /p ("member dissociation" OR "judicial dissolution") AND llc | **landmark_missing**: wanted /haley v\.? talcott\|in re silver leaf\|dunbar group\|fisk ventures/ in top 10 |
| rw-0848 | one_state_plus_federal AR | auto | "trade secret" w/15 ("reasonable measures" OR misappropriation) | **landmark_missing**: wanted /kewanee oil\|e\.? i\.? du pont v\.? christopher\|rockwell graphic\|ruckelshaus/ in top 10 |
| rw-0864 | one_state_plus_federal KS | auto | "student loan" /p "undue hardship" AND dischargeability | **landmark_missing**: wanted /brunner v\.? new york\|in re gerhardt\|in re long\|educational credit v\.? polleys/ in top 10 |
| rw-0874 | one_state_plus_federal NM | auto | "adverse possession" /s hostile AND "open and notorious" | **landmark_missing**: wanted /howard v\.? kunto\|mannillo v\.? gorski\|van valkenburgh\|marengo cave/ in top 10 |
| rw-0889 | one_state_plus_federal ID | auto | "bad faith" /s ("failure to settle" OR "within policy limits") | **landmark_missing**: wanted /crisci\|comunale v\.? traders\|gruenberg\|campbell v\.? state farm\|anderson v\.? continental/ in top 10 |
| rw-0895 | one_state_plus_federal WV | auto | "plain error" /p ("not preserved" OR waived) NOT sentencing | **landmark_missing**: wanted /united states v\.? olano\|puckett v\.? united states\|johnson v\.? united states\|rosales-?mireles/ in top 10 |
| rw-0904 | one_state_plus_federal HI | auto | easement /p ("by necessity" OR prescriptive) AND "landlocked" | **landmark_missing**: wanted /othen v\.? rosier\|finn v\.? williams\|granite properties\|schwab v\.? timmons/ in top 10 |
| rw-0905 | one_state_plus_federal HI | auto | "undue influence" /s ("testamentary capacity" OR "confidential relationship") | **landmark_missing**: wanted /in re estate of maheras\|haynes v\.? first national\|estate of lakatosh\|logotheti/ in top 10 |
| rw-0919 | one_state_plus_federal NH | auto | "duty to defend" /p "duty to indemnify" AND broader | **landmark_missing**: wanted /gray v\.? zurich\|buss v\.? superior court\|montrose\|horace mann\|aerojet/ in top 10 |
| rw-0921 | one_state_plus_federal NH | auto | ("invasion of privacy" OR "intrusion upon seclusion") /p recording | **landmark_missing**: wanted /katz v\.? united states\|shulman v\.? group w\|dietemann\|hamberger\|bartnicki/ in top 10 |
| rw-0929 | one_state_plus_federal ME | auto | negligence /s "proximate cause" AND ("duty of care" OR foreseeability) | **landmark_missing**: wanted /palsgraf\|carroll towing\|kinsman\|petition of kinsman/ in top 10 |
| rw-0935 | one_state_plus_federal RI | auto | "holographic will" /p ("material provisions" OR handwriting) | **landmark_missing**: wanted /in re estate of gonzalez\|estate of muder\|succession of burke\|in re will of ranney/ in top 10 |
| rw-0937 | one_state_plus_federal RI | auto | "best interests" /s custody AND ("material change" OR modification) | **duplicate_hit**: #3 Dupre v. Dupre 857 A.2d 242 |
| rw-0944 | one_state_plus_federal MT | auto | "medical malpractice" /s ("standard of care" OR "informed consent") | **landmark_missing**: wanted /canterbury v\.? spence\|schloendorff\|natanson\|cobbs v\.? grant\|salgo/ in top 10 |
| rw-0945 | one_state_plus_federal MT | auto | "at will" /s ("public policy" OR retaliation) AND termination | **landmark_missing**: wanted /tameny\|petermann\|palmateer\|sheets v\.? teddy's\|gantt/ in top 10 |
| rw-0949 | one_state_plus_federal DE | auto | #stacking w/10 ("underinsured motorist" OR "uninsured motorist") | **landmark_missing**: wanted /allstate v\.? boynton\|tucker v\.? metropolitan\|burnham\|cunningham v\.? insurance/ in top 10 |
| rw-0959 | one_state_plus_federal DE | auto | "comparative fault" /p apportionment NOT "workers compensation" | **duplicate_hit**: #4 Plaskett v. Standard 326 F.3d 201 |
| rw-0961 | one_state_plus_federal SD | auto | "self defense" /s "imminent" AND ("reasonable belief" OR "stand your ground") | **landmark_missing**: wanted /people v\.? goetz\|state v\.? norman\|beard v\.? united states\|brown v\.? united states/ in top 10 |
| rw-0962 | one_state_plus_federal SD | auto | "material breach" /s "substantial performance" NOT construction | **landmark_missing**: wanted /jacob & youngs\|k & g construction\|walker & co\|plante v\.? jacobs/ in top 10 |
| rw-0964 | one_state_plus_federal SD | auto | "homeowners association" /p ("restrictive covenant" OR "architectural") AND enforcement | **landmark_missing**: wanted /nahrstedt\|shelley v\.? kraemer\|tulk v\.? moxhay\|neponsit\|sanborn v\.? mclean/ in top 10 |
| rw-0965 | one_state_plus_federal SD | auto | trustee /p ("prudent investor" OR "duty of loyalty") AND breach | **landmark_missing**: wanted /harvard college v\.? amory\|in re estate of janes\|meinhard v\.? salmon\|shriners hospitals/ in top 10 |
| rw-0967 | one_state_plus_federal SD | auto | "equitable distribution" /p ("separate property" OR commingled) | **landmark_missing**: wanted /painter v\.? painter\|o'brien v\.? o'brien\|rothman\|pereira v\.? pereira\|van camp/ in top 10 |
| rw-0979 | one_state_plus_federal AK | auto | exclusion /s ambiguous AND "construed against the insurer" | **landmark_missing**: wanted /gray v\.? zurich\|montrose\|garvey v\.? state farm\|bank of the west/ in top 10 |
| rw-0988 | one_state_plus_federal VT | auto | "motion to dismiss" /p "plausible on its face" NOT arbitration | **landmark_missing**: wanted /twombly\|iqbal\|conley v\.? gibson/ in top 10 |
| rw-0993 | one_state_plus_federal WY | auto | "arbitrary and capricious" /s ("reasoned explanation" OR "state farm") | **landmark_missing**: wanted /state farm mutual\|overton park\|fcc v\.? fox\|dhs v\.? regents\|motor vehicle manufacturers/ in top 10 |
| rw-0995 | one_state_plus_federal WY | auto | "elective share" w/15 "surviving spouse" | **duplicate_hit**: #10 The Estate of H. Kent Dahlke, By and Through Its Personal Re 2014 WY 29<br>**landmark_missing**: wanted /sullivan v\.? burkin\|newman v\.? dore\|in re estate of cross\|seifert v\.? southern/ in top 10 |
