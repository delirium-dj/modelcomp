const fs = require('fs');
const c = fs.readFileSync('model/claude-opus-5/Big_Pickle.md','utf8');
const lines = c.split(/\r?\n/);
for (let i = 0; i < 90; i++) {
  if (lines[i] !== undefined) console.log((i+1)+':'+lines[i]);
}
