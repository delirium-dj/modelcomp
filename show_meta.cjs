const fs = require('fs');
const m = JSON.parse(fs.readFileSync('model/qoder-sonus/meta.json'));
console.log(JSON.stringify(m, null, 2));
