const fs = require('fs');
const path = require('path');
const base = 'model';
const dirs = fs.readdirSync(base, {withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
const rows = [];
for (const d of dirs) {
  const f = path.join(base, d, 'Beam.md');
  if (!fs.existsSync(f)) continue;
  const txt = fs.readFileSync(f,'utf8');
  const m = txt.match(/Provided by: \*\*.*?\*\* — (\d{4}-\d{2}-\d{2})/);
  const date = m ? m[1] : 'NA';
  rows.push({slug:d, date, file:f});
}
rows.sort((a,b)=> a.date.localeCompare(b.date));
console.log('total Beam.md:', rows.length);
rows.slice(0,25).forEach(r=>console.log(r.date, r.slug));
