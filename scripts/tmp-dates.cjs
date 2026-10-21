const fs = require('fs');
const dirs = fs.readdirSync('model', {withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
const rows = [];
for (const s of dirs) {
  for (const fn of ['Muse_Spark_1.3.md','Muse_Spark_1.3.md.excluded']) {
    const p = 'model/' + s + '/' + fn;
    let t = null;
    try { t = fs.readFileSync(p,'utf8'); } catch(e){ continue; }
    const m = t.match(/Date:\s*(\d{4}-\d{2}-\d{2})|—\s*(\d{4}-\d{2}-\d{2})/);
    const dt = m ? (m[1]||m[2]) : '????';
    const o = t.match(/Overall Score:\s*(\d+)/);
    rows.push({slug:s, file:fn, date:dt, overall:o?o[1]:'excl'});
  }
}
rows.sort((a,b)=> a.date < b.date ? -1 : a.date > b.date ? 1 : (a.slug < b.slug ? -1 : 1));
console.log('TOTAL=' + rows.length);
for (const r of rows.slice(0,12)) console.log(r.date + ' ' + r.overall + ' ' + r.slug + ' ' + r.file);
