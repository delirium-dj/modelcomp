// Artificial Analysis model-page extractor.
// The AA model page embeds a Next.js flight payload holding one JSON object
// per model variant, each carrying the full evaluation metric set.
// Usage: node .tmp-aa.cjs <file.html> [slugFilterRegex]
const fs = require('fs');

const file = process.argv[2];
const filter = new RegExp(process.argv[3] || 'Opus 5\\.5|Muse Spark 1\\.3', 'i');
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

const METRICS = [
  'intelligenceIndex', 'contextWindowTokens', 'knowledgeCutoffDate', 'releaseDate',
  'omniscience', 'omniscienceAccuracy', 'omniscienceHallucinationRate',
  'mlcrOverall', 'harveyLab', 'gdpPdfAllPass', 'gdpval', 'gdpvalNormalized',
  'itBenchSre', 'tau2', 'tauBanking', 'terminalbenchHard', 'terminalBench21',
  'terminalBench40', 'frontierCode', 'terminalBenchScience', 'hleDiamond',
  'scicode', 'lcr', 'ifbench', 'hle', 'gpqa', 'critpt', 'apexAgents',
  'mmmuPro', 'livecodebench', 'aime25', 'analystAgent',
  'automationBenchPartialScore', 'enterpriseOpsGym',
  'price1mInputTokens', 'price1mOutputTokens', 'cacheHitPrice',
  'cacheHitDiscountPercent', 'price1mBlended7To2To1',
  'intelligenceIndexTimePerTask', 'intelligenceIndexCostPerTask',
];

// Model objects start with {"id":"<uuid>","slug":"<slug>","name":"<name>"...
// After one unescape pass the text is real JSON, so brace-match to find the
// end of each model object (string-aware, to ignore braces inside strings).
function findObjectEnd(s, start) {
  let depth = 0, inStr = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (c === '\\') { i++; continue; }
      if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i + 1; }
  }
  return -1;
}

// Scan every embedded model object by JSON-parsing candidates, so key order
// and variant suffixes (Max / Xhigh / Standard) are all captured faithfully.
const RE = /\{"id":"[0-9a-f-]{36}"/g;
let m, hits = 0, parsed = 0;
while ((m = RE.exec(un)) !== null) {
  const end = findObjectEnd(un, m.index);
  if (end < 0) continue;
  let obj;
  try { obj = JSON.parse(un.slice(m.index, end)); } catch (e) { continue; }
  parsed++;
  if (!obj || typeof obj.slug !== 'string' || typeof obj.name !== 'string') continue;
  if (!filter.test(obj.slug) && !filter.test(obj.name)) continue;
  hits++;

  console.log('================================================================');
  console.log('slug=' + obj.slug + ' | name=' + obj.name);
  console.log('  effort = ' + (obj.effort ? obj.effort.label : (obj.suffix || 'n/a')));
  console.log('  suffix = ' + (obj.suffix || 'null'));
  console.log('  release = ' + (obj.release ? obj.release.name + ' (' + obj.release.slug + ')' : 'n/a'));
  console.log('  releaseDate = ' + obj.releaseDate);
  console.log('  contextWindowTokens = ' + obj.contextWindowTokens);
  console.log('  knowledgeCutoffDate = ' + obj.knowledgeCutoffDate);
  console.log('  intelligenceIndex = ' + obj.intelligenceIndex);
  for (const key of METRICS) {
    if (key === 'intelligenceIndex' || key === 'contextWindowTokens' ||
        key === 'knowledgeCutoffDate' || key === 'releaseDate') continue;
    if (!(key in obj)) { console.log('  ' + key + ' = <ABSENT>'); continue; }
    console.log('  ' + key + ' = ' + JSON.stringify(obj[key]));
  }
  const cpt = obj.intelligenceIndexCostPerTask;
  if (cpt && cpt.cost) console.log('  costPerTask.total = ' + cpt.cost.total);
  const ctt = obj.intelligenceIndexCost;
  if (ctt) console.log('  indexCost.total = ' + ctt.total);
  const mod = obj.inputModalities || obj.modalities;
  if (mod) console.log('  modalities = ' + JSON.stringify(mod));
  if (obj.inputModalityImage !== undefined) {
    console.log('  inputModalityImage = ' + obj.inputModalityImage +
                ' video=' + obj.inputModalityVideo +
                ' audio=' + obj.inputModalityAudio +
                ' pdf=' + obj.inputModalityPdf);
  }
  if (obj.price1mInputTokens !== undefined) {
    console.log('  price = $' + obj.price1mInputTokens + ' in / $' + obj.price1mOutputTokens +
                ' out | cacheHit $' + obj.cacheHitPrice + ' (' +
                (obj.cacheHitDiscountPercent * 100) + '% off) | blended7:2:1 $' +
                obj.price1mBlended7To2To1);
  }
}
console.log('================================================================');
console.log('MATCHED MODELS:', hits, '| PARSED OBJECTS:', parsed);

console.log('================================================================');
console.log('MATCHED MODELS:', hits);
