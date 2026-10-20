const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const html = fs.readFileSync(file, 'utf8');

// The Next.js flight payload embeds a doubly-escaped JSON blob: ...\"rows\":[{...}]
// The Next.js flight payload embeds the leaderboard JSON as a JSON *string*.
// The HTML source therefore has one level of escaping: \" for quotes and
// \\ for backslashes. Exactly ONE unescape pass is correct -- a second pass
// would turn the regex value "^\\d{4}" into "^\d{4}", which is an invalid
// JSON escape and makes JSON.parse throw.
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

// Find the "rows":[ ... ] array, tracking string state so brackets inside
// string values do not throw off the depth count.
const marker = '\\"rows\\":';
const mi = html.indexOf(marker);
if (mi < 0) { console.error('no rows marker found'); process.exit(1); }
const start = html.indexOf('[', mi + marker.length);
let depth = 0, end = -1, inStr = false;
for (let j = start; j < html.length; j++) {
  const c = html[j];
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

const raw = unescapeOnce(html.slice(start, end + 1));
let rows;
try {
  rows = JSON.parse(raw);
} catch (e) {
  console.error('PARSE ERROR:', e.message);
  console.error('SLICE HEAD:', JSON.stringify(raw.slice(0, 300)));
  process.exit(1);
}
console.log('TOTAL ROWS:', rows.length);
const wanted = /Opus 5\.5|Muse Spark|GPT-6|Astra/i;
for (const r of rows) {
  const md = r.metadata || {};
  const label = md.model_display ? md.model_display.label : '?';
  if (!wanted.test(label)) continue;
  const m = r.metrics || {};
  console.log([
    'rank=' + r.rank,
    'model=' + label,
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
