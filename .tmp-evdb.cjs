// Build a unified local evidence DB from cached benchmark artifacts.
// Usage: node .tmp-evdb.cjs
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const R = (f) => path.join(T, f);

const db = { arc: {}, tb40: {}, tb21: {}, valsTb4: {}, valsTb21: {}, valsBench: {}, aa: {} };

// ---- ARC-AGI leaderboards (3 cached versions) ----
for (const [ver, f] of [['v1', 'arc-lb-v1.json'], ['v2', 'arc-lb-v2.json'], ['v3', 'arc-lb-v3.json']]) {
  const p = R(f);
  if (!fs.existsSync(p)) continue;
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const e of d.evaluations) {
    const key = e.modelDisplayName + ' :: ' + e.datasetDisplayName;
    (db.arc[key] = db.arc[key] || []).push({
      ver, score: e.score, cost: e.costPerTask, provider: e.providerDisplayName,
      release: e.modelReleaseDate, url: e.resultsUrl, group: e.modelGroup, type: e.modelType,
    });
  }
}

// ---- Terminal-Bench 4.0 (official leaderboard HTML) ----
function unescapeOnce(s) {
  let out = '';
  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    if (c !== '\\') { out += c; continue; }
    const n = s[++k];
    if (n === 'u') { out += String.fromCharCode(parseInt(s.substr(k + 1, 4), 16)); k += 4; }
    else if (n === 'n') out += '\n'; else if (n === 't') out += '\t'; else if (n === 'r') out += '\r';
    else if (n === 'b') out += '\b'; else if (n === 'f') out += '\f'; else out += n;
  }
  return out;
}
function tbRows(file) {
  const p = R(file);
  if (!fs.existsSync(p)) return [];
  const un = unescapeOnce(fs.readFileSync(p, 'utf8'));
  const MARK = '"rows":[';
  let mi = -1, from = 0;
  while (true) {
    mi = un.indexOf(MARK, from);
    if (mi < 0) break;
    if (/^\{"id":/.test(un.slice(mi + MARK.length, mi + MARK.length + 20))) break;
    from = mi + MARK.length;
  }
  if (mi < 0) return [];
  const start = mi + MARK.length - 1;
  let depth = 0, end = -1, inStr = false;
  for (let j = start; j < un.length; j++) {
    const c = un[j];
    if (inStr) { if (c === '\\') { j++; continue; } if (c === '"') inStr = false; continue; }
    if (c === '"') { inStr = true; continue; }
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) { end = j; break; } }
  }
  if (end < 0) return [];
  try { return JSON.parse(un.slice(start, end + 1)); } catch (e) { return []; }
}
for (const r of tbRows('tb40.html')) {
  const md = r.metadata || {}, m = r.metrics || {};
  const name = (md.model_display && md.model_display.label) || '?';
  (db.tb40[name] = db.tb40[name] || []).push({
    rank: r.rank, org: (md.model_org || {}).label, agent: (md.agent_display || {}).label,
    effort: md.reasoning_effort, acc: m.accuracy, ci: m.accuracy_ci95_half_width,
    trials: m.n_trials, succ: m.successes, cost: m.total_cost_usd, date: md.date, disp: m.display_accuracy,
  });
}

// ---- Vals AI pages (HTML tables) ----
function htmlTables(file) {
  const p = R(file);
  if (!fs.existsSync(p)) return [];
  const h = fs.readFileSync(p, 'utf8');
  const out = [];
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let m;
  while ((m = trRe.exec(h)) !== null) {
    const cells = [];
    let c;
    const cr = /<(t[dh])([^>]*)>([\s\S]*?)<\/\1>/g;
    while ((c = cr.exec(m[1])) !== null) {
      let txt = c[3].replace(/<[^>]+>/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ').trim();
      cells.push(txt);
    }
    if (cells.length) out.push(cells);
  }
  return out;
}
for (const [k, f] of [['valsTb4', 'vals-tb4.html'], ['valsTb21', 'vals-terminal-bench-2-1.html'], ['valsTb', 'vals-terminal-bench-2.html'], ['valsBench', 'vals-benchmarks.html']]) {
  db[k] = htmlTables(f);
}

// ---- Artificial Analysis ----
const aaP = R('aa-db.json');
if (fs.existsSync(aaP)) db.aa = JSON.parse(fs.readFileSync(aaP, 'utf8'));

fs.writeFileSync(R('evdb.json'), JSON.stringify(db));
console.log('arc keys:', Object.keys(db.arc).length, '| tb40 models:', Object.keys(db.tb40).length);
console.log('valsTb4 rows:', db.valsTb4.length, '| valsTb21 rows:', db.valsTb21.length, '| valsBench rows:', db.valsBench.length);
console.log('aa models:', Object.keys(db.aa).length);
console.log('--- TB40 models ---');
console.log(Object.keys(db.tb40).join(' | '));
