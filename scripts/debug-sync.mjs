import { execSync } from 'child_process';
try {
  const out = execSync('node scripts/sync-data.mjs', { encoding: 'utf8' });
  out.split('\n').filter(l => l.includes('FAIL')).forEach(l => console.log(l));
} catch (err) {
  err.stdout.split('\n').filter(l => l.includes('FAIL')).forEach(l => console.log(l));
}
