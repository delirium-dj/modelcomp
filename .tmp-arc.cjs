// Extract ARC Prize leaderboard rows for a model group.
// Usage: node .tmp-arc.cjs <file.json> [modelGroupSubstring]
const fs = require('fs');
const file = process.argv[2];
const want = (process.argv[3] || 'anthropic-claude-opus-5-5').toLowerCase();
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const evals = Array.isArray(data) ? data : (data.evaluations || []);
console.log('FILE:', file.split(/[\\/]/).pop(), '| ROWS:', evals.length);
for (const e of evals) {
  const g = String(e.modelGroup || '').toLowerCase();
  const id = String(e.modelId || '').toLowerCase();
  if (!g.includes(want) && !id.includes(want)) continue;
  console.log([
    'dataset=' + e.datasetDisplayName,
    'model=' + e.modelDisplayName,
    'id=' + e.modelId,
    'type=' + e.modelType,
    'score=' + (e.score * 100).toFixed(2) + '%',
    'costPerTask=$' + (e.costPerTask == null ? 'n/a' : e.costPerTask.toFixed(4)),
    'release=' + String(e.modelReleaseDate).slice(0, 10),
    'display=' + e.display,
  ].join(' | '));
}

