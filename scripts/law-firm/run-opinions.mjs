/**
 * Opinion output suite: can the API hand a firm an opinion it can file,
 * quote and pin-cite from? For each case: metadata, full text (all pages),
 * the PDF, and good-law detail. Measures formatting defects; keeps no text.
 *
 *   node scripts/law-firm/build-opinions.mjs   (selects the 200 cases)
 *   node scripts/law-firm/run-opinions.mjs [--run=2026-10-05]
 *
 * Needs pdftotext / pdfinfo (poppler-utils) on PATH.
 * Raw output: runs/law-firm/<run>/raw/opinions.jsonl
 */
import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lintCitation, parseCite } from './lib/bluebook.mjs';
import { apiKey, call, pool, stats } from './lib/http.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1] ?? d;
const RUN = arg('run', new Date().toISOString().slice(0, 10));
const RAW = resolve(ROOT, 'runs/law-firm', RUN, 'raw');
mkdirSync(RAW, { recursive: true });
const OUT = resolve(RAW, 'opinions.jsonl');
const PDF_DIR = resolve(process.env.LAWFIRM_PDF_DIR ?? tmpdir(), 'lawfirm-pdfs');
mkdirSync(PDF_DIR, { recursive: true });
const key = apiKey(ROOT);
const rows = JSON.parse(readFileSync(resolve(ROOT, 'datasets/law-firm/opinion-format-200/inputs.json'), 'utf8')).rows;
const done = new Set(existsSync(OUT) ? readFileSync(OUT, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l).id) : []);
const todo = rows.filter((r) => !done.has(r.id));
console.log(`opinions: ${rows.length} rows, ${done.size} done, ${todo.length} to fetch`);

function textMetrics(body) {
  const words = (body.match(/\S+/g) || []).length || 1;
  const per1k = (n) => +((n / words) * 1000).toFixed(2);
  const midSentenceBreaks = (body.match(/[a-z,;]\s*\n\s*\n\s*[a-z]/g) || []).length;
  const singleBreaks = (body.match(/[a-z,;]\n[a-z]/g) || []).length;
  const htmlLeak = (body.match(/<\/?(p|div|span|i|em|b|br|a|sup|blockquote|center|pre)\b[^>]*>|&(amp|nbsp|quot|lt|gt|#\d+|#x[0-9a-f]+);/gi) || []).length;
  const bareNumberLines = (body.match(/^\s*\d{1,3}\s*$/gm) || []).length;
  const pageHeaderLines = (body.match(/^.*(page \d+ of \d+|not final until time expires|- \d+ -).*$/gim) || []).length;
  const hyphenSplits = (body.match(/[a-z]-\s*\n\s*[a-z]/g) || []).length;
  const starPages = (body.match(/(?:\[\*|\*)\d{1,5}\b/g) || []).length;
  const replacementChars = (body.match(/�|â€|Ã©|Ã¨/g) || []).length;
  const paras = body.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, ' ').trim()).filter((p) => p.length > 200);
  const seen = new Map();
  let dupParas = 0;
  for (const p of paras) {
    const k = p.slice(0, 200);
    if (seen.has(k)) dupParas++;
    else seen.set(k, 1);
  }
  const head = body.replace(/\s+/g, ' ').slice(0, 400);
  const wholeRepeat = head.length > 300 && body.replace(/\s+/g, ' ').indexOf(head, 400) > 0;
  const hasDissent = /\bdissenting\b/i.test(body);
  const hasConcur = /\bconcurring\b/i.test(body);
  const footnoteMarkers = (body.match(/\[\d{1,3}\]|\bFN\d+|^\s*\d{1,3}\s+[A-Z]/gm) || []).length;
  return {
    chars: body.length,
    words,
    midSentenceBreaksPer1k: per1k(midSentenceBreaks),
    singleBreaksPer1k: per1k(singleBreaks),
    htmlLeak,
    bareNumberLines,
    pageHeaderLines,
    hyphenSplitsPer1k: per1k(hyphenSplits),
    starPages,
    replacementChars,
    dupParas,
    wholeRepeat,
    hasDissent,
    hasConcur,
    footnoteMarkers,
  };
}

const t0 = Date.now();
await pool(
  todo,
  async (row) => {
    const rec = { id: row.id, caseId: row.caseId, group: row.group };
    const meta = await call(key, 'GET', `/cases/${row.caseId}`);
    const c = meta.json?.case ?? null;
    rec.meta = {
      status: meta.status,
      caseName: c?.caseName ?? null,
      bluebookCitation: c?.bluebookCitation ?? null,
      citation: c?.citation ?? null,
      court: c?.court ?? null,
      dateFiled: c?.dateFiled ?? null,
      docketNumber: c?.docketNumber ?? null,
      clusterId: c?.clusterId ?? null,
      goodLaw: c?.goodLaw?.status ?? null,
      goodLawBasis: c?.goodLaw?.basis ?? null,
      lint: c?.bluebookCitation ? lintCitation(c.bluebookCitation).map((i) => i.code) : ['missing_bluebook'],
    };
    // full text, all pages
    let body = '';
    let offset = 0;
    let pages = 0;
    let textStatus = null;
    let truncatedAtEnd = false;
    for (; pages < 6; pages++) {
      const t = await call(key, 'GET', `/cases/${row.caseId}/text${offset ? `?offset=${offset}` : ''}`);
      textStatus = t.status;
      const op = t.json?.opinion;
      if (!t.ok || !op) break;
      body += op.body ?? '';
      if (!op.truncated || !op.nextOffset) break;
      offset = op.nextOffset;
      truncatedAtEnd = pages === 5;
    }
    rec.text = { status: textStatus, pages: pages + 1, truncatedAtEnd, ...(body ? textMetrics(body) : { chars: 0 }) };
    // PDF
    const p = await call(key, 'GET', `/cases/${row.caseId}/pdf`, { binary: true, timeoutMs: 180_000 });
    rec.pdf = { status: p.status, contentType: p.headers?.['content-type'] ?? null, bytes: p.buf?.length ?? 0, ms: p.ms };
    if (p.ok && p.buf && p.buf.subarray(0, 4).toString() === '%PDF') {
      const f = resolve(PDF_DIR, `${row.caseId}.pdf`);
      writeFileSync(f, p.buf);
      try {
        const info = execFileSync('pdfinfo', [f]).toString();
        rec.pdf.pages = Number(info.match(/Pages:\s+(\d+)/)?.[1] ?? 0);
        const title = info.match(/Title:\s+(.*)/)?.[1] ?? '';
        const txt = execFileSync('pdftotext', ['-layout', f, '-']).toString();
        const flat = txt.replace(/\s+/g, ' ');
        const bodyFlat = body.replace(/\s+/g, ' ');
        const firstParty = (c?.caseName ?? '').split(/\s+v\.?\s+/)[0].split(/[ ,]/)[0];
        const loc = parseCite(`X, ${c?.citation ?? ''} (2000)`);
        const probe = bodyFlat.slice(Math.floor(bodyFlat.length / 3), Math.floor(bodyFlat.length / 3) + 120);
        const occurrences = probe.length > 60 ? flat.split(probe).length - 1 : null;
        rec.pdf = {
          ...rec.pdf,
          title,
          textChars: flat.length,
          lawtoolsBrand: /L\s?AW\s?T\s?O\s?O\s?L\s?S/i.test(txt.slice(0, 2000)),
          lawdiverBrand: /lawdiver/i.test(txt),
          hasCaseName: firstParty ? flat.toLowerCase().includes(firstParty.toLowerCase()) : null,
          hasCitation: loc ? flat.includes(`${loc.vol} ${loc.reporterRaw} ${loc.page}`) : null,
          hasCourt: c?.court ? flat.toLowerCase().includes(c.court.toLowerCase()) : null,
          hasDate: c?.dateFiled ? flat.includes(c.dateFiled) : null,
          bodyCoverage: bodyFlat.length ? +(flat.length / bodyFlat.length).toFixed(2) : null,
          middleProbeOccurrences: occurrences,
          captionRunOn: /(IN THE|COURT OF APPEAL|SUPREME COURT)[^\n]{0,200}(Appellants?|Appellees?|Petitioners?|Respondents?)[^\n]{0,120}\bv\.\s/.test(txt),
          hasGoodLawLine: /GOOD-LAW STATUS/i.test(txt),
          hasAppendix: /processing|analysis appendix|appendix/i.test(txt),
        };
      } catch (e) {
        rec.pdf.parseError = String(e?.message ?? e).slice(0, 200);
      }
      rmSync(f, { force: true });
    } else if (p.buf) {
      rec.pdf.notPdf = p.buf.subarray(0, 200).toString();
    }
    const gl = await call(key, 'GET', `/cases/${row.caseId}/good-law`);
    rec.goodLaw = { status: gl.json?.status ?? null, clusterId: gl.json?.clusterId ?? null, basis: gl.json?.basis ?? null };
    rec.clusterIdMismatch = Boolean(rec.goodLaw.clusterId && rec.meta.clusterId && rec.goodLaw.clusterId !== rec.meta.clusterId);
    appendFileSync(OUT, JSON.stringify(rec) + '\n');
  },
  { concurrency: 3, onProgress: (n, t) => n % 10 === 0 && console.log(`opinions ${n}/${t} ${(n / ((Date.now() - t0) / 60000)).toFixed(1)}/min calls=${stats.calls}`) },
);
console.log('done', stats);
