const fs = require('fs');
console.log(fs.existsSync('model/qoder-sonus/Big_Pickle.md'));
try {
  const d = fs.readdirSync('model/qoder-sonus');
  console.log(d.length);
  console.log(d);
} catch(e) { console.log('err'); }
