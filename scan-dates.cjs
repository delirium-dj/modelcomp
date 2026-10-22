const fs = require('fs');
const path = require('path');
const root = 'e:/qwik/modelcomp/model';
const out = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name === 'Beam.md') {
      const c = fs.readFileSync(full, 'utf8');
      const m = c.match(/Date:\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/);
      const date = m ? m[1] : 'NODATE';
      out.push({ slug: path.basename(path.dirname(full)), date, path: full });
    }
  }
}
walk(root);
out.sort((a, b) => a.date.localeCompare(b.date));
console.log(JSON.stringify(out.slice(0, 40), null, 2));
console.log('total', out.length);
