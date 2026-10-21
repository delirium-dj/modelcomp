// Temp evidence helper (not committed): exact registry + AA key lookups.
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;

function loadAA() {
  const aa = {};
  for (const f of ['aa-merged.json', 'aa-extra.json', 'aa-db.json', 'aa-db3.json']) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(T, f), 'utf8'));
      for (const [k, v] of Object.entries(j)) if (v && typeof v === 'object') aa[k] = { ...(aa[k] || {}), ...v };
    } catch (e) { /* ignore */ }
  }
  return aa;
}

const aa = loadAA();
const md = JSON.parse(fs.readFileSync(path.join(T, 'models-dev-fresh.json'), 'utf8'));
const zen = JSON.parse(fs.readFileSync(path.join(T, 'zen-fresh.json'), 'utf8')).data.map((m) => m.id);

const q = process.argv[2];
const mode = process.argv[3] || 'aa';

if (mode === 'aa') {
  const keys = Object.keys(aa);
  const hits = keys.filter((k) => k.includes(q)).sort();
  const nameHits = Object.entries(aa)
    .filter(([k, v]) => !k.includes(q) && typeof v.name === 'string' && v.name.toLowerCase().includes(q.toLowerCase()))
    .map(([k, v]) => k + '::' + v.name);
  console.log('AA keys matching "' + q + '" (' + hits.length + '):');
  for (const k of hits) {
    const v = aa[k];
    console.log('  ' + k + ' :: name=' + v.name + ' | aaSlug=' + (v._aaSlug || '-') + ' | rel=' + v.releaseDate +
      ' | ctx=' + v.contextWindowTokens + ' | II=' + v.intelligenceIndex + ' | img=' + v.inputModalityImage +
      ' | vid=' + v.inputModalityVideo + ' | $in=' + v.price1mInputTokens + ' $out=' + v.price1mOutputTokens +
      ' | open=' + v.isOpenWeights + ' | tb21=' + v.terminalBench21 + ' | hle=' + v.hle + ' | gpqa=' + v.gpqa +
      ' | lcr=' + v.lcr + ' | critpt=' + v.critpt + ' | mmmu=' + v.mmmuPro + ' | tauB=' + v.tauBanking +
      ' | gdpval=' + v.gdpval + ' | scicode=' + v.scicode + ' | frontierCode=' + v.frontierCode +
      ' | omni=' + v.omniscience + ' | omniAcc=' + v.omniscienceAccuracy + ' | omniHall=' + v.omniscienceHallucinationRate +
      ' | analyst=' + v.analystAgent);
  }
  console.log('AA name-only matches (' + nameHits.length + '): ' + nameHits.join(' | '));
} else if (mode === 'dev') {
  const hits = [];
  for (const [pv, p] of Object.entries(md)) {
    for (const [id, m] of Object.entries(p.models || {})) {
      if (id === q || id.endsWith('/' + q)) hits.push(pv + '/' + id + ' ctx=' + (m.limit && m.limit.context) + ' out=' + (m.limit && m.limit.output) + ' cost=' + JSON.stringify(m.cost) + ' in=' + JSON.stringify(m.modalities && m.modalities.input) + ' ->' + JSON.stringify(m.modalities && m.modalities.output) + ' status=' + m.status + ' release=' + m.release_date + ' name=' + m.name);
    }
  }
  console.log('models.dev "' + q + '" (' + hits.length + '):');
  hits.forEach((h) => console.log('  ' + h));
  console.log('  ZEN: ' + (zen.includes(q) ? 'PRESENT' : 'absent'));
} else if (mode === 'devall') {
  const hits = [];
  for (const [pv, p] of Object.entries(md)) {
    for (const [id, m] of Object.entries(p.models || {})) {
      if (id.includes(q)) hits.push(pv + '/' + id);
    }
  }
  console.log('models.dev contains "' + q + '" (' + hits.length + '): ' + hits.slice(0, 60).join(' | '));
  console.log('  ZEN: ' + (zen.filter((z) => z.includes(q)).join(' | ') || 'absent'));
}
