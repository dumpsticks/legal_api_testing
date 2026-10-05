/**
 * Practice-area topic library for the law-firm boolean search bank.
 *
 * Each topic: [id, area, scope, A, S, B, C, R, X, landmark]
 *   scope  'state' | 'federal' | 'both' — which jurisdictions a firm would search it in
 *   A      core quoted phrase           S  synonym phrase for an OR group
 *   B, C   terms that sit near A in real opinions
 *   R      root-expander form (Westlaw "!")
 *   X      exclusion term for NOT / % rows
 *   landmark  optional { re, kind: 'scotus'|'circuit'|'state', circuit?, state?, year }
 *             A pass is the pattern appearing in a top-10 case name, only graded
 *             when the requested scope can contain that court.
 */
const T = (id, area, scope, A, S, B, C, R, X, landmark = null) => ({ id, area, scope, A, S, B, C, R, X, landmark });
const sc = (re, year) => ({ re, kind: 'scotus', year });
const ci = (re, circuit, year) => ({ re, kind: 'circuit', circuit, year });
const st = (re, state, year) => ({ re, kind: 'state', state, year });

export const TOPICS = [
  // ---- civil procedure
  T('sj-standard', 'civil procedure', 'both', '"summary judgment"', '"judgment as a matter of law"', '"genuine dispute"', '"material fact"', 'nonmov!', 'patent', sc('celotex|liberty lobby|matsushita', 1986)),
  T('pleading-plausibility', 'civil procedure', 'federal', '"motion to dismiss"', '"failure to state a claim"', 'plausib!', '"factual allegations"', 'plausib!', 'habeas', sc('twombly|iqbal|bell atl', 2007)),
  T('personal-jurisdiction', 'civil procedure', 'both', '"personal jurisdiction"', '"specific jurisdiction"', '"minimum contacts"', '"fair play"', 'purposeful!', 'divorce', sc('international shoe|world-wide volkswagen|burger king|daimler|goodyear|ford motor|bristol-myers|walden', 1945)),
  T('general-jurisdiction', 'civil procedure', 'both', '"general jurisdiction"', '"all-purpose jurisdiction"', '"at home"', '"principal place of business"', 'domicil!', 'probate', sc('daimler|goodyear|bnsf|mallory', 2011)),
  T('forum-non-conveniens', 'civil procedure', 'both', '"forum non conveniens"', '"inconvenient forum"', '"private interest"', '"public interest"', 'convenien!', 'arbitration', sc('piper aircraft|gulf oil|sinochem|atlantic marine', 1947)),
  T('removal-diversity', 'civil procedure', 'federal', '"diversity jurisdiction"', '"complete diversity"', '"amount in controversy"', 'remov!', 'citizen!', 'bankruptcy', sc('hertz|strawbridge|exxon mobil|dart cherokee|lincoln property', 1806)),
  T('fraudulent-joinder', 'civil procedure', 'federal', '"fraudulent joinder"', '"improper joinder"', 'remand', '"no possibility"', 'join!', 'patent'),
  T('res-judicata', 'civil procedure', 'both', '"res judicata"', '"claim preclusion"', '"final judgment"', '"same cause of action"', 'preclu!', 'criminal', sc('taylor v\\. sturgell|federated dep|allen v\\. mccurry|semtek', 1980)),
  T('collateral-estoppel', 'civil procedure', 'both', '"collateral estoppel"', '"issue preclusion"', '"actually litigated"', '"full and fair opportunity"', 'estop!', 'patent', sc('parklane|blonder-tongue|b & b hardware|montana v\\. united states', 1979)),
  T('class-certification', 'civil procedure', 'federal', '"class certification"', '"rule 23"', 'commonality', 'predominance', 'certif!', 'arbitration', sc('wal-mart|dukes|comcast|amchem|tyson foods|falcon', 2011)),
  T('preliminary-injunction', 'civil procedure', 'both', '"preliminary injunction"', '"temporary restraining order"', '"irreparable harm"', '"likelihood of success"', 'irreparabl!', 'divorce', sc('winter v\\. n|winter v\\. natural|ebay|munaf|nken', 2008)),
  T('default-judgment', 'civil procedure', 'both', '"default judgment"', '"motion to vacate"', '"excusable neglect"', '"meritorious defense"', 'default!', 'criminal'),
  T('spoliation', 'civil procedure', 'both', 'spoliation', '"destruction of evidence"', '"adverse inference"', 'sanction!', 'spoliat!', 'patent'),
  T('discovery-proportionality', 'civil procedure', 'both', '"proportional to the needs of the case"', 'proportionality', 'discovery', '"undue burden"', 'proportional!', 'habeas'),
  T('attorney-client-privilege', 'evidence', 'both', '"attorney-client privilege"', '"work product"', 'waiv!', 'confidential!', 'privileg!', 'immigration', sc('upjohn|hickman|swidler|zolin|jaffee', 1981)),
  T('rule-11-sanctions', 'civil procedure', 'both', '"rule 11"', '"frivolous"', 'sanction!', '"reasonable inquiry"', 'frivol!', 'habeas', sc('cooter|business guides|chambers v\\. nasco', 1990)),
  T('statute-of-limitations-tolling', 'civil procedure', 'both', '"statute of limitations"', '"limitations period"', '"equitable tolling"', '"discovery rule"', 'toll!', 'patent', sc('holland v\\. florida|pace v\\. digug|irwin v\\. dep|menominee|lozano', 1990)),
  T('standing', 'civil procedure', 'federal', 'standing', '"article iii"', '"injury in fact"', 'traceab!', 'redress!', 'divorce', sc('lujan|spokeo|transunion|clapper|summers v\\. earth', 1992)),
  T('abstention', 'civil procedure', 'federal', 'abstention', '"younger abstention"', '"pending state"', '"comity"', 'abstain!', 'patent', sc('younger|colorado river|burford|pullman|sprint commc', 1971)),
  T('arbitration-compel', 'arbitration', 'both', '"motion to compel arbitration"', '"arbitration agreement"', 'unconscionab!', 'delegation', 'arbitra!', 'criminal', sc('concepcion|epic sys|rent-a-center|italian colors|moses h\\. cone|henry schein|lamps plus', 2011)),
  T('vacate-arbitration-award', 'arbitration', 'both', '"vacate the arbitration award"', '"manifest disregard"', '"exceeded their powers"', '"evident partiality"', 'vacat!', 'criminal', sc('hall street|oxford health|stolt-nielsen|eastern associated', 2008)),
  T('fee-shifting-prevailing', 'civil procedure', 'both', '"prevailing party"', '"attorney\'s fees"', 'lodestar', '"reasonable hourly rate"', 'fee!', 'criminal', sc('hensley|buckhannon|perdue|fox v\\. vice|christiansburg', 1983)),

  // ---- torts
  T('premises-open-obvious', 'torts', 'state', '"open and obvious"', '"known or obvious"', 'invitee', '"duty to warn"', 'premis!', 'automobile', st('kandil-elsayed|lugo v\\. ameritech', 'MI', 2001)),
  T('slip-and-fall-transitory', 'torts', 'state', '"transitory foreign substance"', '"slip and fall"', '"actual or constructive knowledge"', 'premises', 'slip!', 'medical'),
  T('premises-duty-entrant', 'torts', 'state', 'invitee', 'licensee', 'trespasser', '"duty of care"', 'invit!', 'contract', st('rowland v\\. christian', 'CA', 1968)),
  T('comparative-negligence', 'torts', 'state', '"comparative negligence"', '"comparative fault"', '"contributory negligence"', 'apportion!', 'negligen!', 'contract', st('hoffman v\\. jones', 'FL', 1973)),
  T('comparative-negligence-ca', 'torts', 'state', '"comparative negligence"', '"pure comparative"', '"contributory negligence"', '"last clear chance"', 'negligen!', 'contract', st('li v\\. yellow cab', 'CA', 1975)),
  T('comparative-negligence-il', 'torts', 'state', '"comparative negligence"', '"pure comparative"', '"contributory negligence"', 'abolish!', 'negligen!', 'contract', st('alvis v\\. ribar', 'IL', 1981)),
  T('proximate-cause-foreseeability', 'torts', 'state', '"proximate cause"', '"legal cause"', 'foreseeab!', '"intervening cause"', 'foresee!', 'contract', st('palsgraf', 'NY', 1928)),
  T('products-strict-liability', 'torts', 'state', '"strict liability"', '"strict products liability"', '"design defect"', '"unreasonably dangerous"', 'defect!', 'contract', st('greenman', 'CA', 1963)),
  T('products-design-pa', 'torts', 'state', '"design defect"', '"strict liability"', '"consumer expectations"', '"risk-utility"', 'defect!', 'contract', st('tincher|azzarello', 'PA', 2014)),
  T('market-share', 'torts', 'state', '"market share liability"', '"market share"', 'des', 'manufacturer', 'manufactur!', 'contract', st('sindell|hymowitz', 'CA', 1980)),
  T('bystander-nied', 'torts', 'state', '"negligent infliction of emotional distress"', '"bystander recovery"', '"zone of danger"', '"close relationship"', 'bystand!', 'contract', st('dillon v\\. legg|thing v\\. la chusa', 'CA', 1968)),
  T('iied', 'torts', 'both', '"intentional infliction of emotional distress"', '"outrageous conduct"', '"extreme and outrageous"', '"severe emotional distress"', 'outrage!', 'patent', sc('hustler|snyder v\\. phelps', 1988)),
  T('duty-to-warn-therapist', 'torts', 'state', '"duty to warn"', '"duty to protect"', 'psychotherapist', '"identifiable victim"', 'therap!', 'contract', st('tarasoff', 'CA', 1976)),
  T('social-host', 'torts', 'state', '"social host"', '"dram shop"', 'intoxicat!', '"guest"', 'alcohol!', 'contract', st('kelly v\\. gwinnell', 'NJ', 1984)),
  T('respondeat-superior', 'torts', 'both', '"respondeat superior"', '"vicarious liability"', '"scope of employment"', 'employer', 'employ!', 'patent'),
  T('negligent-hiring', 'torts', 'state', '"negligent hiring"', '"negligent retention"', '"negligent supervision"', 'employer', 'hir!', 'patent'),
  T('medical-malpractice-standard', 'torts', 'state', '"medical malpractice"', '"medical negligence"', '"standard of care"', '"expert testimony"', 'physician!', 'patent'),
  T('informed-consent', 'torts', 'state', '"informed consent"', '"lack of informed consent"', '"material risk"', 'physician', 'disclos!', 'patent', st('canterbury|cobbs v\\. grant', 'CA', 1972)),
  T('wrongful-death-damages', 'torts', 'state', '"wrongful death"', '"survival action"', 'damages', 'decedent', 'survivor!', 'patent'),
  T('loss-of-consortium', 'torts', 'state', '"loss of consortium"', '"consortium claim"', 'spouse', 'derivative', 'consorti!', 'patent'),
  T('punitive-damages-due-process', 'torts', 'both', '"punitive damages"', '"exemplary damages"', '"due process"', 'ratio', 'punitive!', 'patent', sc('state farm mut|bmw of n|gore|exxon shipping|pacific mut', 1996)),
  T('economic-loss-rule', 'torts', 'state', '"economic loss rule"', '"economic loss doctrine"', '"purely economic"', 'contract', 'economic!', 'criminal'),
  T('defamation-actual-malice', 'torts', 'both', '"actual malice"', 'defamation', '"public figure"', '"reckless disregard"', 'defam!', 'patent', sc('new york times|sullivan|gertz|curtis pub|harte-hanks', 1964)),
  T('dog-bite', 'torts', 'state', '"dog bite"', '"dangerous propensities"', '"strict liability"', 'owner', 'dog!', 'contract'),
  T('joint-several', 'torts', 'state', '"joint and several liability"', '"several liability"', 'tortfeasor!', 'apportion!', 'tortfeas!', 'contract'),
  T('contribution-indemnity', 'torts', 'state', '"equitable indemnity"', '"implied indemnity"', 'contribution', 'tortfeasor', 'indemni!', 'patent'),
  T('res-ipsa', 'torts', 'state', '"res ipsa loquitur"', '"exclusive control"', 'inference', 'negligence', 'ipsa', 'contract'),
  T('negligence-per-se', 'torts', 'state', '"negligence per se"', '"statutory violation"', '"class of persons"', 'statute', 'statut!', 'contract'),

  // ---- contracts / commercial
  T('parol-evidence', 'contracts', 'state', '"parol evidence rule"', '"parol evidence"', 'integrat!', 'ambigu!', 'parol!', 'criminal'),
  T('statute-of-frauds', 'contracts', 'state', '"statute of frauds"', '"signed writing"', '"part performance"', 'writing', 'fraud!', 'criminal'),
  T('promissory-estoppel', 'contracts', 'state', '"promissory estoppel"', '"detrimental reliance"', '"clear and definite promise"', 'reliance', 'relian!', 'criminal'),
  T('liquidated-damages', 'contracts', 'state', '"liquidated damages"', '"liquidated damages clause"', 'penalty', '"reasonable forecast"', 'liquidat!', 'criminal'),
  T('anticipatory-repudiation', 'contracts', 'state', '"anticipatory repudiation"', '"anticipatory breach"', 'repudiat!', '"adequate assurance"', 'repudiat!', 'criminal'),
  T('impossibility-force-majeure', 'contracts', 'state', '"force majeure"', '"impossibility of performance"', 'frustration', 'unforeseeab!', 'impractic!', 'criminal'),
  T('implied-covenant', 'contracts', 'state', '"implied covenant of good faith and fair dealing"', '"good faith and fair dealing"', 'discretion', 'breach', 'covenant!', 'criminal'),
  T('unjust-enrichment', 'contracts', 'state', '"unjust enrichment"', '"quantum meruit"', 'benefit', '"express contract"', 'enrich!', 'criminal'),
  T('ucc-warranty', 'commercial', 'state', '"implied warranty of merchantability"', '"breach of warranty"', 'disclaim!', 'conspicuous', 'warrant!', 'criminal'),
  T('noncompete', 'employment', 'state', '"non-compete"', '"covenant not to compete"', '"legitimate business interest"', 'reasonabl!', 'compet!', 'criminal'),
  T('trade-secrets', 'IP', 'both', '"trade secret"', 'misappropriat!', '"reasonable measures"', '"independent economic value"', 'secre!', 'criminal'),
  T('fraud-inducement', 'contracts', 'state', '"fraudulent inducement"', '"fraud in the inducement"', '"justifiable reliance"', 'misrepresent!', 'misrepresent!', 'criminal'),
  T('piercing-veil', 'corporate', 'state', '"pierce the corporate veil"', '"alter ego"', 'undercapitaliz!', '"corporate form"', 'pierc!', 'criminal'),
  T('fiduciary-duty-directors', 'corporate', 'state', '"business judgment rule"', '"duty of loyalty"', '"duty of care"', 'director!', 'fiduciar!', 'criminal', st('aronson|smith v\\. van gorkom|unocal|revlon|brehm|caremark|corwin|zapata', 'DE', 1984)),
  T('derivative-demand-futility', 'corporate', 'state', '"demand futility"', '"derivative action"', '"demand excused"', 'board', 'derivativ!', 'criminal', st('aronson|rales|zuckerberg|brehm', 'DE', 1984)),
  T('consumer-protection-deceptive', 'consumer', 'state', '"deceptive and unfair trade practices"', '"unfair or deceptive"', 'consumer', '"actual damages"', 'decept!', 'criminal'),
  T('tortious-interference', 'torts', 'state', '"tortious interference"', '"interference with contract"', '"business relationship"', 'justif!', 'interfer!', 'criminal'),

  // ---- insurance
  T('insurance-bad-faith', 'insurance', 'state', '"bad faith"', '"breach of the implied covenant"', 'insurer', '"failure to settle"', 'insur!', 'criminal', st('comunale|crisci|gruenberg|egan v\\. mutual', 'CA', 1958)),
  T('duty-to-defend', 'insurance', 'state', '"duty to defend"', '"eight corners"', '"potential for coverage"', 'insurer', 'defen!', 'criminal'),
  T('additional-insured', 'insurance', 'state', '"additional insured"', '"additional insured endorsement"', '"arising out of"', 'coverage', 'insured!', 'criminal'),
  T('pollution-exclusion', 'insurance', 'state', '"pollution exclusion"', '"absolute pollution exclusion"', 'irritant', 'contaminant', 'pollut!', 'criminal'),
  T('subrogation', 'insurance', 'state', 'subrogation', '"made whole"', 'insurer', 'reimburse!', 'subrog!', 'criminal'),
  T('uim-stacking', 'insurance', 'state', '"underinsured motorist"', '"uninsured motorist"', 'stacking', 'policy', 'motorist!', 'criminal'),

  // ---- real property / landlord-tenant
  T('adverse-possession', 'real property', 'state', '"adverse possession"', '"hostile possession"', '"open and notorious"', '"continuous"', 'possess!', 'criminal'),
  T('easement-prescriptive', 'real property', 'state', '"prescriptive easement"', '"easement by necessity"', 'servient', 'dominant', 'easement!', 'criminal'),
  T('foreclosure-standing', 'real property', 'state', 'foreclosure', '"mortgage foreclosure"', 'standing', '"holder of the note"', 'foreclos!', 'criminal'),
  T('hoa-covenants', 'real property', 'state', '"restrictive covenant"', '"declaration of covenants"', '"homeowners association"', 'enforc!', 'covenant!', 'criminal'),
  T('eviction-habitability', 'landlord-tenant', 'state', '"warranty of habitability"', '"implied warranty of habitability"', 'tenant', 'rent', 'habitab!', 'criminal', st('javins|green v\\. superior court', 'CA', 1974)),
  T('constructive-eviction', 'landlord-tenant', 'state', '"constructive eviction"', '"quiet enjoyment"', 'tenant', 'abandon!', 'evict!', 'criminal'),
  T('security-deposit', 'landlord-tenant', 'state', '"security deposit"', '"wrongful withholding"', 'tenant', 'landlord', 'deposit!', 'criminal'),
  T('eminent-domain-public-use', 'real property', 'both', '"eminent domain"', '"public use"', '"just compensation"', 'taking', 'condemn!', 'criminal', sc('kelo|berman v\\. parker|hawaii housing|midkiff', 1954)),
  T('regulatory-taking', 'real property', 'both', '"regulatory taking"', '"inverse condemnation"', '"investment-backed expectations"', '"economically viable"', 'tak!', 'criminal', sc('penn central|lucas|lingle|nollan|dolan|cedar point|knick|murr', 1978)),
  T('quiet-title', 'real property', 'state', '"quiet title"', '"cloud on title"', 'deed', 'possession', 'title!', 'criminal'),

  // ---- family / probate
  T('alimony-modification', 'family', 'state', 'alimony', '"spousal support"', 'modif!', '"substantial change in circumstances"', 'alimon!', 'criminal'),
  T('child-custody-relocation', 'family', 'state', 'relocation', '"move away"', 'custod!', '"best interests of the child"', 'relocat!', 'criminal'),
  T('child-support-imputation', 'family', 'state', '"child support"', '"imputed income"', 'imput!', 'underemploy!', 'support!', 'criminal'),
  T('equitable-distribution', 'family', 'state', '"equitable distribution"', '"marital property"', '"nonmarital"', 'commingl!', 'distribut!', 'criminal'),
  T('prenup-enforcement', 'family', 'state', '"prenuptial agreement"', '"antenuptial agreement"', '"full disclosure"', 'unconscionab!', 'nuptial!', 'criminal'),
  T('palimony', 'family', 'state', '"cohabitation"', '"nonmarital partners"', '"express contract"', 'implied', 'cohabit!', 'criminal', st('marvin v\\. marvin', 'CA', 1976)),
  T('will-undue-influence', 'probate', 'state', '"undue influence"', '"confidential relationship"', 'testator', 'will', 'testa!', 'criminal'),
  T('testamentary-capacity', 'probate', 'state', '"testamentary capacity"', '"sound mind"', 'testator', '"natural objects of his bounty"', 'capaci!', 'criminal'),
  T('probate-creditor-claims', 'probate', 'state', '"creditor\'s claim"', '"claim against the estate"', '"personal representative"', '"barred"', 'creditor!', 'criminal'),
  T('trust-modification', 'probate', 'state', '"modification of the trust"', '"trust modification"', 'settlor', 'beneficiar!', 'trust!', 'criminal'),
  T('guardianship-incapacity', 'probate', 'state', 'guardianship', '"incapacitated person"', 'ward', '"least restrictive"', 'guardian!', 'criminal'),
  T('homestead', 'probate', 'state', 'homestead', '"homestead exemption"', 'devise', '"surviving spouse"', 'homestead!', 'criminal'),

  // ---- employment / civil rights (mostly federal)
  T('title-vii-burden-shifting', 'employment', 'federal', '"mcdonnell douglas"', '"burden-shifting"', 'pretext', '"prima facie case"', 'pretext!', 'criminal', sc('mcdonnell douglas|burdine|st\\. mary|reeves v\\. sanderson', 1973)),
  T('hostile-work-environment', 'employment', 'federal', '"hostile work environment"', '"sexual harassment"', '"severe or pervasive"', 'employer', 'harass!', 'criminal', sc('meritor|harris v\\. forklift|faragher|burlington indus|ellerth|oncale|vance', 1986)),
  T('title-vii-retaliation', 'employment', 'federal', 'retaliation', '"protected activity"', '"materially adverse"', '"causal connection"', 'retaliat!', 'criminal', sc('burlington n|nassar|crawford v\\. metro|thompson v\\. n', 2006)),
  T('age-discrimination', 'employment', 'federal', '"age discrimination"', 'adea', '"but-for"', 'pretext', 'age!', 'criminal', sc('gross v\\. fbl|hazen|reeves|o\'connor v\\. consol', 2009)),
  T('ada-accommodation', 'employment', 'federal', '"reasonable accommodation"', '"undue hardship"', '"interactive process"', '"qualified individual"', 'accommodat!', 'criminal', sc('us airways|toyota motor|sutton|chevron u\\.s\\.a\\.,? inc\\.? v\\. echazabal', 2002)),
  T('flsa-overtime', 'employment', 'federal', '"fair labor standards act"', 'overtime', 'exempt!', '"regular rate"', 'overtim!', 'criminal', sc('encino|christopher v\\. smithkline|helix energy|integrity staffing', 2012)),
  T('erisa-denial', 'employment', 'federal', 'erisa', '"plan administrator"', '"abuse of discretion"', '"arbitrary and capricious"', 'benefit!', 'criminal', sc('firestone|glenn|conkright|black & decker', 1989)),
  T('qualified-immunity', 'civil rights', 'federal', '"qualified immunity"', '"clearly established"', '"constitutional right"', 'officer', 'immun!', 'contract', sc('harlow|pearson v\\. callahan|al-kidd|saucier|anderson v\\. creighton|kisela|mullenix|district of columbia v\\. wesby', 1982)),
  T('excessive-force', 'civil rights', 'federal', '"excessive force"', '"objective reasonableness"', '"fourth amendment"', 'officer', 'forc!', 'contract', sc('graham v\\. connor|tennessee v\\. garner|scott v\\. harris|kingsley|plumhoff', 1989)),
  T('monell-liability', 'civil rights', 'federal', 'monell', '"municipal liability"', '"policy or custom"', '"deliberate indifference"', 'municipal!', 'contract', sc('monell|city of canton|connick|pembaur|bd\\. of cnty|board of county', 1978)),
  T('deliberate-indifference-medical', 'civil rights', 'federal', '"deliberate indifference"', '"serious medical need"', 'prison!', '"eighth amendment"', 'indiffer!', 'contract', sc('estelle|farmer v\\. brennan|helling|wilson v\\. seiter', 1976)),
  T('malicious-prosecution-1983', 'civil rights', 'federal', '"malicious prosecution"', '"favorable termination"', '"probable cause"', '"fourth amendment"', 'prosecut!', 'contract', sc('thompson v\\. clark|manuel v\\. joliet|mcdonough|heck v\\. humphrey', 1994)),

  // ---- criminal
  T('terry-stop', 'criminal procedure', 'both', '"reasonable suspicion"', '"investigatory stop"', 'frisk', '"articulable facts"', 'suspici!', 'civil', sc('terry v\\. ohio|sokolow|wardlow|arvizu|navarette', 1968)),
  T('miranda-custody', 'criminal procedure', 'both', 'miranda', '"custodial interrogation"', 'custody', 'waiv!', 'interrogat!', 'civil', sc('miranda|berghuis|edwards v\\. ariz|j\\.d\\.b\\.|rhode island v\\. innis|dickerson', 1966)),
  T('ineffective-assistance', 'criminal procedure', 'both', '"ineffective assistance of counsel"', '"deficient performance"', 'prejudice', '"reasonable probability"', 'ineffect!', 'civil', sc('strickland|hill v\\. lockhart|padilla|lafler|missouri v\\. frye|harrington v\\. richter', 1984)),
  T('brady-disclosure', 'criminal procedure', 'both', 'brady', '"exculpatory evidence"', 'material!', 'suppress!', 'exculpat!', 'civil', sc('brady v\\. maryland|giglio|kyles|bagley|strickler|wearry', 1963)),
  T('confrontation-clause', 'criminal procedure', 'both', '"confrontation clause"', '"testimonial hearsay"', 'testimonial', 'cross-examin!', 'confront!', 'civil', sc('crawford v\\. washington|davis v\\. washington|melendez-diaz|bullcoming|ohio v\\. clark|smith v\\. arizona', 2004)),
  T('warrantless-cell-data', 'criminal procedure', 'both', '"cell-site location"', '"cell phone"', 'warrant', '"reasonable expectation of privacy"', 'locat!', 'civil', sc('carpenter|riley v\\. california|united states v\\. jones', 2012)),
  T('automobile-exception', 'criminal procedure', 'both', '"automobile exception"', '"vehicle search"', '"probable cause"', 'warrantless', 'vehicl!', 'civil', sc('carroll|california v\\. acevedo|arizona v\\. gant|collins v\\. virginia|chambers v\\. maroney', 1925)),
  T('consent-search', 'criminal procedure', 'both', '"consent to search"', '"voluntary consent"', '"totality of the circumstances"', 'coerc!', 'consen!', 'civil', sc('schneckloth|bumper|georgia v\\. randolph|illinois v\\. rodriguez', 1973)),
  T('apprendi-sentencing', 'criminal procedure', 'both', 'apprendi', '"statutory maximum"', 'jury', '"beyond a reasonable doubt"', 'sentenc!', 'civil', sc('apprendi|blakely|alleyne|booker|ring v\\. ariz|hurst v\\. fla', 2000)),
  T('dui-implied-consent', 'criminal procedure', 'state', '"implied consent"', '"breath test"', 'refus!', '"driving under the influence"', 'intoxica!', 'civil', sc('birchfield|missouri v\\. mcneely|mitchell v\\. wisconsin', 2016)),
  T('double-jeopardy', 'criminal procedure', 'both', '"double jeopardy"', '"same offense"', 'blockburger', '"multiple punishments"', 'jeopard!', 'civil', sc('blockburger|united states v\\. dixon|gamble|brown v\\. ohio', 1932)),
  T('speedy-trial', 'criminal procedure', 'both', '"speedy trial"', '"barker v. wingo"', 'delay', 'prejudice', 'speed!', 'civil', sc('barker v\\. wingo|doggett|vermont v\\. brillon', 1972)),
  T('hearsay-excited-utterance', 'evidence', 'both', '"excited utterance"', '"spontaneous statement"', 'hearsay', '"startling event"', 'utteran!', 'contract'),
  T('expert-reliability', 'evidence', 'both', 'daubert', '"expert testimony"', 'reliab!', '"rule 702"', 'expert!', 'criminal', sc('daubert|kumho|joiner', 1993)),
  T('prior-bad-acts', 'evidence', 'both', '"prior bad acts"', '"404(b)"', '"other crimes"', 'propensity', 'propensit!', 'contract', sc('huddleston|old chief', 1988)),

  // ---- federal regulatory / IP / bankruptcy / tax / immigration
  T('agency-deference', 'administrative', 'federal', 'deference', '"agency interpretation"', '"statutory ambiguity"', '"administrative procedure act"', 'defer!', 'criminal', sc('loper bright|chevron|skidmore|kisor|auer|mead', 1944)),
  T('arbitrary-capricious', 'administrative', 'federal', '"arbitrary and capricious"', '"reasoned decisionmaking"', 'agency', '"administrative record"', 'arbitrar!', 'criminal', sc('state farm|motor vehicle mfrs|overton park|dhs v\\. regents|fcc v\\. fox|encino', 1983)),
  T('patent-obviousness', 'IP', 'federal', 'obviousness', '"obvious"', '"prior art"', '"ordinary skill"', 'obvious!', 'criminal', sc('ksr|graham v\\. john deere', 1966)),
  T('patent-eligibility', 'IP', 'federal', '"patent eligible"', '"abstract idea"', '"section 101"', '"inventive concept"', 'eligib!', 'criminal', sc('alice|mayo|bilski|myriad|diehr', 2014)),
  T('patent-claim-construction', 'IP', 'federal', '"claim construction"', '"ordinary and customary meaning"', 'specification', '"intrinsic evidence"', 'constru!', 'criminal', sc('markman|phillips v\\. awh|teva pharms|nautilus', 1996)),
  T('copyright-fair-use', 'IP', 'federal', '"fair use"', '"transformative use"', 'copyright', '"market harm"', 'transform!', 'criminal', sc('campbell|acuff-rose|warhol|google llc v\\. oracle|harper & row|sony corp', 1994)),
  T('trademark-confusion-2d', 'IP', 'federal', '"likelihood of confusion"', '"polaroid factors"', 'trademark', '"strength of the mark"', 'confus!', 'criminal', ci('polaroid', '2', 1961)),
  T('trademark-confusion-9th', 'IP', 'federal', '"likelihood of confusion"', '"sleekcraft factors"', 'trademark', '"strength of the mark"', 'confus!', 'criminal', ci('sleekcraft|amf inc', '9', 1979)),
  T('trademark-confusion-3d', 'IP', 'federal', '"likelihood of confusion"', '"lapp factors"', 'trademark', '"strength of the mark"', 'confus!', 'criminal', ci('lapp|interpace', '3', 1983)),
  T('securities-scienter', 'securities', 'federal', 'scienter', '"strong inference"', '"rule 10b-5"', 'pslra', 'scient!', 'criminal', sc('tellabs|ernst & ernst|matrixx|omnicare|dura pharm|halliburton|basic inc', 1976)),
  T('loss-causation', 'securities', 'federal', '"loss causation"', '"corrective disclosure"', '"inflated price"', '"economic loss"', 'causat!', 'criminal', sc('dura pharm|halliburton|basic inc', 2005)),
  T('bankruptcy-automatic-stay', 'bankruptcy', 'federal', '"automatic stay"', '"relief from stay"', '"section 362"', 'debtor', 'stay!', 'criminal', sc('city of chicago v\\. fulton|strumpf', 1995)),
  T('bankruptcy-discharge-fraud', 'bankruptcy', 'federal', 'nondischargeab!', '"523(a)(2)"', '"false pretenses"', 'debtor', 'discharg!', 'criminal', sc('husky|field v\\. mans|bartenwerfer|lamar, archer|grogan v\\. garner', 1991)),
  T('preference-avoidance', 'bankruptcy', 'federal', '"preferential transfer"', '"section 547"', '"ordinary course"', 'trustee', 'avoid!', 'criminal'),
  T('chapter-11-cramdown', 'bankruptcy', 'federal', 'cramdown', '"cram down"', '"absolute priority rule"', '"fair and equitable"', 'confirm!', 'criminal', sc('bank of am|203 n\\. lasalle|till v\\. sct|radlax|czyzewski', 1999)),
  T('tax-economic-substance', 'tax', 'federal', '"economic substance"', '"sham transaction"', '"business purpose"', 'commissioner', 'substan!', 'criminal', sc('gregory v\\. helvering|frank lyon|knetsch', 1935)),
  T('immigration-crimmigration', 'immigration', 'federal', '"crime involving moral turpitude"', '"aggravated felony"', '"categorical approach"', 'removab!', 'removab!', 'contract', sc('mathis|descamps|taylor v\\. united states|moncrieffe|esquivel-quintana|pereira|niz-chavez|sessions v\\. dimaya', 1990)),
  T('asylum-persecution', 'immigration', 'federal', 'asylum', '"well-founded fear"', 'persecution', '"particular social group"', 'persecut!', 'contract', sc('cardoza-fonseca|elias-zacarias|garland v\\. ming dai', 1987)),
  T('antitrust-rule-of-reason', 'antitrust', 'federal', '"rule of reason"', '"per se"', '"anticompetitive effects"', '"relevant market"', 'anticompetit!', 'criminal', sc('leegin|ohio v\\. am|american express|state oil|alston|continental t\\.v|bmi|broad\\. music', 1977)),
  T('antitrust-pleading-conspiracy', 'antitrust', 'federal', '"parallel conduct"', '"plus factors"', 'conspira!', '"sherman act"', 'conspir!', 'criminal', sc('twombly|bell atl|matsushita|monsanto co|copperweld', 1984)),
  T('first-amendment-public-forum', 'constitutional', 'federal', '"public forum"', '"traditional public forum"', '"content-based"', '"strict scrutiny"', 'forum!', 'contract', sc('reed v\\. town|perry educ|mccullen|ward v\\. rock|cornelius|pleasant grove', 1983)),
  T('second-amendment-history', 'constitutional', 'both', '"second amendment"', '"keep and bear arms"', '"historical tradition"', 'firearm', 'firearm!', 'contract', sc('bruen|heller|mcdonald|rahimi', 2008)),
  T('equal-protection-scrutiny', 'constitutional', 'both', '"equal protection"', '"rational basis"', '"strict scrutiny"', 'classification', 'classif!', 'contract', sc('cleburne|romer|craig v\\. boren|virginia|students for fair|adarand|vill\\. of willowbrook', 1976)),
  T('free-exercise', 'constitutional', 'both', '"free exercise"', '"religious exercise"', '"neutral and generally applicable"', 'burden', 'religio!', 'contract', sc('employment div|smith|lukumi|fulton|kennedy v\\. bremerton|tandon|masterpiece|hobby lobby', 1990)),
  T('procedural-due-process', 'constitutional', 'both', '"procedural due process"', '"notice and an opportunity to be heard"', '"property interest"', 'deprivat!', 'deprivat!', 'contract', sc('mathews v\\. eldridge|goldberg v\\. kelly|loudermill|roth|mullane', 1970)),
];

export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
