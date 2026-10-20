// Usage: node .tmp-aa-all.cjs <file.html> <slugPrefixRegex>
const fs = require('fs');
const file = process.argv[2];
const pref = new RegExp(process.argv[3] || 'muse-spark|claude-opus-5-5', 'i');
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
  if (!pref.test(obj.slug)) continue;
  if (seen.has(obj.slug)) continue;
  seen.set(obj.slug, obj);
}
for (const [slug, o] of seen) {
  console.log(slug + ' ||| ' + o.name + ' ||| effort=' + (o.effort ? o.effort.label : 'n/a') +
    ' ||| suffix=' + (o.suffix || 'null') +
    ' ||| idx=' + (o.intelligenceIndex === undefined ? 'n/a' : o.intelligenceIndex.toFixed(2)) +
    ' ||| rel=' + o.releaseDate +
    ' ||| tb21=' + o.terminalBench21 + ' ||| tb40=' + o.terminalBench40 +
    ' ||| hle=' + o.hle + ' ||| gpqa=' + o.gpqa + ' ||| lcr=' + o.lcr +
    ' ||| critpt=' + o.critpt + ' ||| mmmuPro=' + o.mmmuPro +
    ' ||| tauBank=' + o.tauBanking + ' ||| itbench=' + o.itBenchSre +
    ' ||| gdpval=' + o.gdpval + ' ||| scicode=' + o.scicode +
    ' ||| frontierCode=' + o.frontierCode + ' ||| tbSci=' + o.terminalBenchScience +
    ' ||| omnis=' + o.omniscience + ' ||| omniAcc=' + o.omniscienceAccuracy +
    ' ||| omniHall=' + o.omniscienceHallucinationRate +
    ' ||| mlcr=' + o.mlcrOverall + ' ||| analyst=' + o.analystAgent +
    ' ||| autoBench=' + o.automationBenchPartialScore +
    ' ||| gdpPdf=' + o.gdpPdfAllPass + ' ||| harvey=' + o.harveyLab +
    ' ||| ctx=' + o.contextWindowTokens + ' ||| im=' + o.inputModalityImage +
    ' ||| vid=' + o.inputModalityVideo + ' ||| aud=' + o.inputModalityAudio +
    ' ||| pdf=' + o.inputModalityPdf +
    ' ||| in=' + o.price1mInputTokens + ' ||| out=' + o.price1mOutputTokens +
    ' ||| cacheHit=' + o.cacheHitPrice + ' ||| cacheOff=' + o.cacheHitDiscountPercent +
    ' ||| blended=' + o.price1mBlended7To2To1 +
    ' ||| timePerTask=' + (o.intelligenceIndexTimePerTask ? o.intelligenceIndexTimePerTask.toFixed(1) : 'n/a') +
    ' ||| costPerTask=' + (o.intelligenceIndexCostPerTask && o.intelligenceIndexCostPerTask.cost ? o.intelligenceIndexCostPerTask.cost.total.toFixed(3) : 'n/a') +
    ' ||| idxCostTotal=' + (o.intelligenceIndexCost ? o.intelligenceIndexCost.total : 'n/a'));
}
console.log('TOTAL VARIANTS:', seen.size);
