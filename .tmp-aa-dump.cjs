// Dump the full AA model dataset (all fields) as JSON from a cached HTML page.
// Usage: node .tmp-aa-dump.cjs <file.html> <out.json>
const fs = require('fs');
const file = process.argv[2];
const out = process.argv[3];
const html = fs.readFileSync(file, 'utf8');

function unescapeOnce(s) {
  let out = '';
  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    if (c !== '\\') { out += c; continue; }
    const n = s[++k];
    if (n === 'u') { out += String.fromCharCode(parseInt(s.substr(k + 1, 4), 16)); k += 4; }
    else if (n === 'n') out += '\n';
    else if (n === 't') out += '\t';
    else if (n === 'r') out += '\r';
    else if (n === 'b') out += '\b';
    else if (n === 'f') out += '\f';
    else out += n;
  }
  return out;
}
const un = unescapeOnce(html);

function findObjectEnd(s, start) {
  let depth = 0, inStr = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inStr) { if (c === '\\') { i++; continue; } if (c === '"') inStr = false; continue; }
    if (c === '"') { inStr = true; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i + 1; }
  }
  return -1;
}

const RE = /\{"id":"[0-9a-f-]{36}"/g;
let m;
const seen = new Map();
while ((m = RE.exec(un)) !== null) {
  const end = findObjectEnd(un, m.index);
  if (end < 0) continue;
  let obj;
  try { obj = JSON.parse(un.slice(m.index, end)); } catch (e) { continue; }
  if (!obj || typeof obj.slug !== 'string' || typeof obj.name !== 'string') continue;
  if (seen.has(obj.slug)) continue;
  seen.set(obj.slug, obj);
}

const KEEP = [
  'slug','name','effort','suffix','releaseDate','contextWindowTokens',
  'inputModalityImage','inputModalityVideo','inputModalityAudio','inputModalityPdf',
  'price1mInputTokens','price1mOutputTokens','cacheHitPrice','cacheHitDiscountPercent','price1mBlended7To2To1',
  'intelligenceIndex','intelligenceIndexTimePerTask','intelligenceIndexCostPerTask','intelligenceIndexCost',
  'terminalBench21','terminalBench40','terminalBenchScience',
  'hle','gpqa','lcr','mlcrOverall','critpt','mmmuPro','tauBanking','itBenchSre','gdpval','gdpPdfAllPass',
  'scicode','frontierCode','omniscience','omniscienceAccuracy','omniscienceHallucinationRate',
  'analystAgent','automationBenchPartialScore','harveyLab','aaOmniscience','evalSelections',
  'aaIntelligenceIndex','mathReasoning','aaLlm','aaMath','aaGPQA','aaHLE','aaSciCode','aaCRITPt','aaSciCodeTot',
];
const db = {};
for (const [slug, o] of seen) {
  const row = { _name: o.name };
  for (const k of KEEP) if (o[k] !== undefined) row[k] = o[k];
  if (o.effort) row._effort = o.effort.label;
  if (o.suffix) row._suffix = o.suffix;
  // keep only rows with at least one numeric benchmark
  const hasNum = Object.keys(row).some((k) => typeof row[k] === 'number');
  if (!hasNum) continue;
  db[slug] = row;
}
fs.writeFileSync(out, JSON.stringify(db, null, 1));
console.log('WROTE', out, 'rows=', Object.keys(db).length, 'of', seen.size);
console.log(Object.keys(db).sort().join('\n'));
