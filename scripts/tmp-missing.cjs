const fs = require('fs');
const q = fs.readFileSync('model-queue.md','utf8').split(/\r?\n/).map(l=>l.trim()).filter(l=>l && l[0] !== '#').map(l=>l.split(/\s+/)[1]).filter(Boolean);
const miss = [];
for (const s of q) {
  let files = null;
  try { files = fs.readdirSync('model/' + s); } catch (e) { miss.push(s + ' (no-dir)'); continue; }
  const has = files.some(x => x.indexOf('Muse_Spark_1.3.md') === 0);
  if (!has) miss.push(s);
}
console.log('MISSING=' + miss.length);
console.log(miss.join('\n'));
