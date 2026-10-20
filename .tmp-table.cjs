// Extract HTML table rows from a page and print as TSV.
// Usage: node .tmp-table.cjs <file> [rowNeedle]
const fs = require('fs');
const file = process.argv[2];
const needle = process.argv[3] || null;
const h = fs.readFileSync(file, 'utf8');

const rows = [];
const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
let m;
while ((m = trRe.exec(h)) !== null) {
  const cells = [];
  const cellRe = /<(t[dh])([^>]*)>([\s\S]*?)<\/\1>/g;
  let c;
  while ((c = cellRe.exec(m[1])) !== null) {
    const attrs = c[2] || '';
    let txt = c[3]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    cells.push(txt);
  }
  if (cells.length) rows.push(cells);
}
console.log('ROWS:', rows.length);
for (const r of rows) {
  const line = r.join(' | ');
  if (!needle || line.toLowerCase().includes(needle.toLowerCase())) console.log(line);
}
