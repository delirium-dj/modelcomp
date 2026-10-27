const {spawn} = require('child_process');
const p = spawn('node', ['scripts/sync-data.mjs', '--quiet'], {cwd: 'E:/qwik/modelcomp'});
let out = '';
p.stdout.on('data', d=>{out+=d.toString();});
p.stderr.on('data', d=>{out+=d.toString();});
p.on('close', ()=>{
  const lines = out.split(/\r?\n/);
  for (let i=0;i<lines.length;i++) {
    if (lines[i].includes('qoder') || lines[i].includes('Big_Pickle')) {
      console.log(lines[i]);
    }
  }
});
