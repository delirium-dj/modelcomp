// Identity + alias + twin resolution for the remaining slugs.
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const ROOT = path.resolve(__dirname);
const STEM = 'MiniMax_M3.1_Flash.md';
const slugs = fs.readFileSync(path.join(T, 'remaining.txt'), 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
const modelRoot = path.join(ROOT, 'model');
const dirs = fs.readdirSync(modelRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

for (const s of slugs) {
  const dir = path.join(modelRoot, s);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const has = files.includes(STEM);
  const excl = files.includes(STEM + '.excluded');
  let meta = {};
  try { meta = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8')); } catch { /* none */ }
  console.log('\n### ' + s + ' | myFile=' + has + ' | twin=' + excl + ' | files=' + files.length);
  console.log('  id=' + meta.id + ' | name=' + meta.name);
  console.log('  ctx=' + meta.contextWindow + ' | mod=' + meta.modalities);
  console.log('  price=' + meta.pricingNote);
  if (meta.idNote) console.log('  idNote=' + meta.idNote);
  if (meta.freeTierNote) console.log('  free=' + meta.freeTierNote);
  if (meta.standout) console.log('  standout=' + meta.standout);
  if (meta.tradeoff) console.log('  tradeoff=' + meta.tradeoff);
  if (meta.officialUrl) console.log('  url=' + meta.officialUrl);
  // canonical candidates: same folder stem minus the last token
  const base = s.replace(/[-_.](lite|x|preview|free|alpha|flashx|flash-x|sante|e4b)$/i, '');
  const cands = dirs.filter((d) => d !== s && (d === base || d.startsWith(base + '-') || d.startsWith(base)));
  for (const c of cands.slice(0, 6)) {
    const cf = fs.readdirSync(path.join(modelRoot, c));
    let cm = {};
    try { cm = JSON.parse(fs.readFileSync(path.join(modelRoot, c, 'meta.json'), 'utf8')); } catch { /* none */ }
    console.log('  CAND ' + c + ' | myFile=' + cf.includes(STEM) + ' | id=' + cm.id + ' | name=' + cm.name);
  }
}
