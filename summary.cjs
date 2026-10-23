const fs=require('fs');
const dirs=fs.readdirSync('providers').filter(d=>!d.includes('.')&&d!=='README.md');
for(const d of dirs){
  const m=JSON.parse(fs.readFileSync('providers/'+d+'/meta.json','utf8'));
  console.log(d,'| shortLen:',(m.short||'').length,'| plans:',(m.plans||[]).length,'|', (m.short||'').replace(/\n/g,' '));
}
