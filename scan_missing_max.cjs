// Temp helper: find model folders missing Qwen_3.8_Max.md (filesystem ground truth).
// A folder counts as a model if it has average.md. MISSING = no Qwen_3.8_Max.md AND
// no Qwen_3.8_Max.md.excluded. Also flags hyphen/dot duplicate slugs to skip.
const fs = require('fs');
const path = require('path');

const STEM = 'Qwen_3.8_Max.md';
const ROOTS = ['model', 'models_finance', 'models_voice'];
const norm = (s) => s.replace(/[-.]/g, '').toLowerCase();

let totalMissing = 0;
for (const root of ROOTS) {
  const abs = path.join(process.cwd(), root);
  if (!fs.existsSync(abs)) { console.log(`\n===== ${root}/ (absent) =====`); continue; }
  const dirs = fs.readdirSync(abs, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(abs, name, 'average.md')))
    .sort();

  const missing = [];
  const excludedTwin = [];
  for (const name of dirs) {
    const hasMd = fs.existsSync(path.join(abs, name, STEM));
    const hasExcl = fs.existsSync(path.join(abs, name, STEM + '.excluded'));
    if (!hasMd && !hasExcl) missing.push(name);
    else if (!hasMd && hasExcl) excludedTwin.push(name);
  }

  // hyphen/dot duplicate detection within the missing set vs all dirs
  const seen = new Map();
  const dups = [];
  for (const name of dirs) {
    const k = norm(name);
    if (seen.has(k)) dups.push(`${name} ~ ${seen.get(k)}`);
    else seen.set(k, name);
  }

  console.log(`\n===== ${root}/ (${dirs.length} model folders) =====`);
  console.log(`MISSING ${STEM}: ${missing.length}`);
  missing.forEach((m) => console.log(`\t${m}`));
  if (excludedTwin.length) {
    console.log(`EXCLUDED-twin only (skip): ${excludedTwin.length}`);
  }
  if (dups.length) {
    console.log(`Hyphen/dot duplicate slugs:`);
    dups.forEach((d) => console.log(`\t${d}`));
  }
  totalMissing += missing.length;
}
console.log(`\nTOTAL MISSING (all roots): ${totalMissing}`);
