// Terminal-Bench leaderboard extractor.
// The Next.js flight payload embeds the leaderboard JSON as a JS string, so the
// raw HTML carries ONE level of escaping (\" for quotes, \\ for backslashes).
// Exactly ONE unescape pass is correct; a second pass corrupts regex values
// like "^\\d{4}" into "^\d{4}" and JSON.parse throws.
const fs = require('fs');

const file = process.argv[2];
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
    else out += n; // \" -> " , \\ -> \ , \/ -> /
  }
  return out;
}

// Unescape the whole document once, then work on real JSON text where quotes
// and brackets are unambiguous.
const un = unescapeOnce(html);

const MARK = '"rows":[';
let mi = -1;
let from = 0;
while (true) {
  mi = un.indexOf(MARK, from);
  if (mi < 0) break;
  // Require the array to start with a row object carrying an "id" field.
  if (/^\{"id":/.test(un.slice(mi + MARK.length, mi + MARK.length + 20))) break;
  from = mi + MARK.length;
}
if (mi < 0) { console.error('no rows marker found'); process.exit(1); }

const start = mi + MARK.length - 1; // the '['
let depth = 0, end = -1, inStr = false;
for (let j = start; j < un.length; j++) {
  const c = un[j];
  if (inStr) {
    if (c === '\\') { j++; continue; }
    if (c === '"') inStr = false;
    continue;
  }
  if (c === '"') { inStr = true; continue; }
  if (c === '[') depth++;
  else if (c === ']') { depth--; if (depth === 0) { end = j; break; } }
}
if (end < 0) { console.error('unterminated rows array'); process.exit(1); }

const raw = un.slice(start, end + 1);
let rows;
try {
  rows = JSON.parse(raw);
} catch (e) {
  console.error('PARSE ERROR:', e.message);
  console.error('SLICE HEAD:', JSON.stringify(raw.slice(0, 300)));
  console.error('SLICE TAIL:', JSON.stringify(raw.slice(-300)));
  process.exit(1);
}

console.log('TOTAL ROWS:', rows.length);
console.log('--- ALL ROWS ---');
for (const r of rows) {
  const md = r.metadata || {};
  const m = r.metrics || {};
  console.log([
    'rank=' + r.rank,
    'model=' + (md.model_display ? md.model_display.label : '?'),
    'org=' + (md.model_org ? md.model_org.label : '?'),
    'agent=' + (md.agent_display ? md.agent_display.label : '?'),
    'effort=' + md.reasoning_effort,
    'acc=' + m.accuracy,
    'ci=' + m.accuracy_ci95_half_width,
    'trials=' + m.n_trials,
    'succ=' + m.successes,
    'cost=' + m.total_cost_usd,
    'date=' + md.date,
    'disp=' + m.display_accuracy,
  ].join(' | '));
}
