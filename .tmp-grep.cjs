// Generic HTML greppper: node .tmp-grep.cjs <file> <needle> [contextChars]
const fs = require('fs');
const file = process.argv[2];
const needle = process.argv[3];
const ctx = parseInt(process.argv[4] || '260', 10);
const h = fs.readFileSync(file, 'utf8');
let from = 0, n = 0;
while (true) {
  const i = h.indexOf(needle, from);
  if (i < 0) break;
  n++;
  console.log('--- [' + n + '] @' + i + ' ---');
  console.log(JSON.stringify(h.slice(Math.max(0, i - ctx), i + ctx)));
  from = i + needle.length;
  if (n >= 40) { console.log('... truncated at 40 hits'); break; }
}
console.log('TOTAL HITS:', n);
