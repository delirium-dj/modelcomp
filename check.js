const fs = require('fs');
const c = fs.readFileSync('scripts/lib/average.mjs','utf8');
const i = c.indexOf('Tool use');
if(i>=0) {
  console.log(c.substring(i-60, i+160));
}
