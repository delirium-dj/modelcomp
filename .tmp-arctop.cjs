// Print the top N ARC Prize leaderboard rows sorted by score.
// Usage: node .tmp-arctop.cjs <file.json> [n]
const fs = require('fs');
const file = process.argv[2];
const n = parseInt(process.argv[3] || '15', 10);
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const evals = Array.isArray(data) ? data : (data.evaluations || []);
const rows = evals.filter(e => e.display !== false).slice();
rows.sort((a, b) => (b.score || 0) - (a.score || 0));
console.log('FILE:', file.split(/[\\/]/).pop(), '| DISPLAYED ROWS:', rows.length);
for (const e of rows.slice(0, n)) {
  console.log([
    (e.score * 100).toFixed(2) + '%',
    e.modelDisplayName,
    'cost=$' + (e.costPerTask == null ? 'n/a' : e.costPerTask.toFixed(3)),
    'rel=' + String(e.modelReleaseDate).slice(0, 10),
  ].join(' | '));
}
