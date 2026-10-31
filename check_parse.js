const fs = require('fs');
const s = fs.readFileSync('src/data/vendorIcons.generated.ts','utf8');
// strip first lines until export
const idx = s.indexOf('={');
const body = s.slice(idx+1); // ={...}  -> {...} (remove =? Actually idx points at '='? let's adjust)
console.log('idx char', JSON.stringify(s[idx]));
// find the object literal start
const start = s.indexOf('{');
const end = s.lastIndexOf('}');
const objStr = s.slice(start, end+1);
try {
  const obj = eval('('+objStr+')');
  console.log('OK keys:', Object.keys(obj).length);
} catch(e) {
  console.log('PARSE ERROR:', e.message);
}
