// Rebuild the authoritative queue for my STEM from model-queue.md.
// Rules (tasks/research.md Step 1):
//   - queue = model-queue.md slugs MINUS folders holding model/<slug>/MiniMax_M3.1_Flash.md
//   - twin-only folders (only .md.excluded present) STAY QUEUED (Step 3.3 runs at write time)
//   - parked slugs dropped entirely
//   - slugs absent from queue file (no average.md) go last, A-Z
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const ROOT = path.resolve(__dirname);
const STEM = 'MiniMax_M3.1_Flash.md';

const queue = fs.readFileSync(path.join(ROOT, 'model-queue.md'), 'utf8').split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => /^\d+(\.\d+)?\s+\S+$/.test(l))
  .map((l) => ({ overall: parseFloat(l), slug: l.split(/\s+/)[1] }));

const PARKED = new Set(['glm-5.3-free', 'gemini-2.5', 'qwen-3.5']);
const MERGED = { 'google-gemini-2.5-flash-lite': 'gemini-2.5-flash-lite', 'glm-5.1-coding': 'glm-5.1', 'embe-1': 'ember-1' };
const ALIAS = { 'grok-code-fast-1': 'grok-build-0.1' };

const modelRoot = path.join(ROOT, 'model');
const modelDirs = fs.readdirSync(modelRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const dirSet = new Set(modelDirs);

const remaining = [];
const twins = [];
const skipped = [];
const queuedSlugs = new Set();

for (const q of queue) {
  const s = q.slug;
  queuedSlugs.add(s);
  if (PARKED.has(s)) { skipped.push(s + ' [PARKED]'); continue; }
  if (MERGED[s]) { skipped.push(s + ' [MERGED->' + MERGED[s] + ']'); continue; }
  if (ALIAS[s]) { skipped.push(s + ' [ALIAS->' + ALIAS[s] + ']'); continue; }
  if (!dirSet.has(s)) { remaining.push({ slug: s, why: 'NO-FOLDER' }); continue; }
  const files = fs.readdirSync(path.join(modelRoot, s));
  if (files.includes(STEM)) continue;                       // done
  if (files.includes(STEM + '.excluded')) { twins.push(s); remaining.push({ slug: s, why: 'TWIN' }); continue; }
  remaining.push({ slug: s, why: 'MISSING' });
}
// Unlisted folders (no average.md) -> last, A-Z
const unlisted = modelDirs.filter((d) => !queuedSlugs.has(d) && !PARKED.has(d) && !MERGED[d] && !ALIAS[d])
  .sort().map((d) => {
    const files = fs.readdirSync(path.join(modelRoot, d));
    if (files.includes(STEM)) return null;
    return { slug: d, why: files.includes(STEM + '.excluded') ? 'TWIN' : (files.includes('average.md') ? 'UNLISTED-NOAVG' : 'UNLISTED') };
  }).filter(Boolean);

remaining.push(...unlisted);
fs.writeFileSync(path.join(T, 'remaining.txt'), remaining.map((r) => r.slug).join('\n') + '\n');
fs.writeFileSync(path.join(T, 'remaining-why.json'), JSON.stringify(remaining, null, 1));
console.log('QUEUE LINES:', queue.length, '| REMAINING:', remaining.length, '| TWINS:', twins.length);
console.log('SKIPPED:', skipped.join(' | ') || '(none)');
console.log('--- REMAINING ---');
remaining.forEach((r, i) => console.log((i + 1) + '. ' + r.slug + '  [' + r.why + ']'));

