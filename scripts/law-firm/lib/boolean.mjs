/**
 * Terms-and-connectors evaluator used to check whether a returned opinion's
 * text actually satisfies the boolean query that was sent.
 *
 * Supports Westlaw and Lexis forms:
 *   "quoted phrase"   word   root!   wild*card   univ*rsal
 *   & AND   OR (and a bare space between terms, Westlaw OR)
 *   /s w/s +s   /p w/p +p   /n w/n pre/n +n   % NOT  AND NOT  BUT NOT
 *   ( ... )
 *
 * Grammar is evaluated against the whole document. Proximity is tested on
 * token positions; /s uses sentence ids, /p uses paragraph ids, with a word
 * window fallback (60 / 250 words) because many opinion texts carry hard line
 * breaks that make sentence and paragraph boundaries unreliable.
 */

const STOP_PLURAL = (w) => [w, `${w}s`, `${w}es`, w.endsWith('y') ? `${w.slice(0, -1)}ies` : null].filter(Boolean);

export function tokenize(q) {
  const toks = [];
  const re = /\s*("([^"]*)"|\(|\)|&|%|\/s\b|\/p\b|\+s\b|\+p\b|\/\d+\b|\+\d+\b|w\/s\b|w\/p\b|w\/seg\b|w\/\d+\b|pre\/\d+\b|not\s+w\/\d+\b|AND NOT\b|BUT NOT\b|AND\b|OR\b|NOT\b|[^\s()"&%]+)/giy;
  let m;
  while ((m = re.exec(q))) {
    const raw = m[1];
    if (m[2] !== undefined) toks.push({ t: 'term', phrase: m[2].trim().toLowerCase() });
    else if (raw === '(' || raw === ')') toks.push({ t: raw });
    else if (raw === '&' || /^AND$/i.test(raw)) toks.push({ t: 'and' });
    else if (/^OR$/i.test(raw)) toks.push({ t: 'or' });
    else if (raw === '%' || /^(AND NOT|BUT NOT|NOT)$/i.test(raw)) toks.push({ t: 'not' });
    else if (/^(\/s|w\/s|\+s)$/i.test(raw)) toks.push({ t: 'prox', kind: 's', ordered: raw.startsWith('+') });
    else if (/^(\/p|w\/p|\+p|w\/seg)$/i.test(raw)) toks.push({ t: 'prox', kind: 'p', ordered: raw.startsWith('+') });
    else if (/^(\/|w\/|pre\/|\+)(\d+)$/i.test(raw)) {
      const n = Number(raw.match(/(\d+)$/)[1]);
      toks.push({ t: 'prox', kind: 'n', n, ordered: /^(pre|\+)/i.test(raw) });
    } else toks.push({ t: 'term', word: raw.toLowerCase() });
  }
  return toks;
}

// precedence: prox (tightest) > and > or ; not binds like "and not"
export function parse(q) {
  const toks = tokenize(q);
  let i = 0;
  const peek = () => toks[i];
  function primary() {
    const tk = toks[i++];
    if (!tk) return null;
    if (tk.t === '(') {
      const e = orExpr();
      if (peek()?.t === ')') i++;
      return e;
    }
    if (tk.t === 'term') return { op: 'term', ...tk };
    return primary();
  }
  function proxExpr() {
    let left = primary();
    while (peek()?.t === 'prox') {
      const p = toks[i++];
      const right = primary();
      left = { op: 'prox', kind: p.kind, n: p.n, ordered: p.ordered, left, right };
    }
    return left;
  }
  function orExpr() {
    let left = andExpr();
    for (;;) {
      const p = peek();
      if (p?.t === 'or') {
        i++;
        left = { op: 'or', left, right: andExpr() };
      } else if (p?.t === 'term' || p?.t === '(') {
        // bare space = OR (Westlaw)
        left = { op: 'or', left, right: andExpr() };
      } else return left;
    }
  }
  function andExpr() {
    let left = proxExpr();
    for (;;) {
      const p = peek();
      if (p?.t === 'and') {
        i++;
        if (peek()?.t === 'not') {
          i++;
          left = { op: 'not', left, right: proxExpr() };
        } else left = { op: 'and', left, right: proxExpr() };
      } else if (p?.t === 'not') {
        i++;
        left = { op: 'not', left, right: proxExpr() };
      } else return left;
    }
  }
  return orExpr();
}

/** Index a document: tokens with sentence and paragraph ids. */
export function indexDoc(text) {
  const words = [];
  // star-page markers ("[*458]", "*458") are pagination, not words
  text = String(text || '').replace(/\[\*{1,2}\d{1,5}\]|(?<=\s)\*{1,2}\d{1,5}(?=\s)/g, ' ');
  const paras = String(text || '').split(/\n\s*\n\s*(?=[A-Z0-9"“(\[*])/);
  let sid = 0;
  paras.forEach((para, pid) => {
    const sentences = para.split(/(?<=[.?!][”"']?)\s+(?=[A-Z“"(\[])/);
    for (const s of sentences) {
      sid++;
      for (const w of s.toLowerCase().replace(/[’']/g, "'").match(/[a-z0-9§][a-z0-9'§.-]*[a-z0-9]|[a-z0-9]/g) || []) {
        words.push({ w: w.replace(/\.$/, ''), s: sid, p: pid });
      }
    }
  });
  return words;
}

function termMatcher(node) {
  if (node.phrase !== undefined) {
    const parts = node.phrase.split(/\s+/).filter(Boolean).map(wordMatcher);
    return { len: parts.length, parts };
  }
  return { len: 1, parts: [wordMatcher(node.word)] };
}
function wordMatcher(raw) {
  const w = raw.toLowerCase().replace(/[’]/g, "'");
  if (w.endsWith('!')) {
    const stem = w.slice(0, -1);
    return (x) => x.startsWith(stem);
  }
  if (w.includes('*') || w.includes('?')) {
    const rx = new RegExp(`^${w.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[a-z0-9]?').replace(/\?/g, '[a-z0-9]')}$`);
    return (x) => rx.test(x);
  }
  const forms = new Set(STOP_PLURAL(w));
  return (x) => forms.has(x);
}

/** Positions (start indices) where a term node matches. */
function positions(words, node) {
  const m = termMatcher(node);
  const out = [];
  for (let i = 0; i + m.len <= words.length; i++) {
    let ok = true;
    for (let k = 0; k < m.len; k++) if (!m.parts[k](words[i + k].w)) { ok = false; break; }
    if (ok) out.push(i);
  }
  return out;
}

/** Evaluate; returns array of match positions (empty = false). */
export function evaluate(ast, words) {
  if (!ast) return [];
  switch (ast.op) {
    case 'term':
      return positions(words, ast);
    case 'or':
      return [...new Set([...evaluate(ast.left, words), ...evaluate(ast.right, words)])].sort((a, b) => a - b);
    case 'and': {
      const a = evaluate(ast.left, words);
      const b = evaluate(ast.right, words);
      return a.length && b.length ? [...a, ...b] : [];
    }
    case 'not': {
      const a = evaluate(ast.left, words);
      const b = evaluate(ast.right, words);
      return a.length && !b.length ? a : [];
    }
    case 'prox': {
      const a = evaluate(ast.left, words);
      const b = evaluate(ast.right, words);
      const hits = [];
      const win = ast.kind === 's' ? 60 : ast.kind === 'p' ? 250 : ast.n + 2;
      for (const i of a) {
        for (const j of b) {
          if (ast.ordered && j < i) continue;
          const near = Math.abs(i - j) <= win;
          const sameUnit = ast.kind === 's' ? words[i].s === words[j].s : ast.kind === 'p' ? words[i].p === words[j].p : false;
          if (ast.kind === 'n' ? near : sameUnit || near) {
            hits.push(Math.min(i, j));
          }
        }
      }
      return [...new Set(hits)];
    }
    default:
      return [];
  }
}

/** Collect positive (must-appear) and negated terms for diagnostics. */
export function termsOf(ast, neg = false, acc = { pos: [], neg: [] }) {
  if (!ast) return acc;
  if (ast.op === 'term') (neg ? acc.neg : acc.pos).push(ast.phrase ?? ast.word);
  else if (ast.op === 'not') {
    termsOf(ast.left, neg, acc);
    termsOf(ast.right, !neg, acc);
  } else {
    termsOf(ast.left, neg, acc);
    termsOf(ast.right, neg, acc);
  }
  return acc;
}

export function satisfies(query, text) {
  const ast = parse(query);
  const words = indexDoc(text);
  const hit = evaluate(ast, words).length > 0;
  // which negated term appears (to explain a NOT violation)
  const { neg } = termsOf(ast);
  const negPresent = neg.filter((t) => positions(words, t.includes(' ') ? { phrase: t } : { word: t }).length);
  return { hit, negPresent, wordCount: words.length };
}
