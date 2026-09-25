const fs = require('fs');
const dirs = fs.readdirSync('model').filter(d => fs.statSync(`model/${d}`).isDirectory());
const queue = [];
for (const d of dirs) {
    if (!fs.existsSync(`model/${d}/Gemini_3.1_Pro.md`)) {
        let score = -1;
        try {
            const avg = fs.readFileSync(`model/${d}/average.md`, 'utf8');
            const match = avg.match(/- \*\*Overall Score: ([\d.]+)\/100/);
            if (match) score = parseFloat(match[1]);
        } catch(e){}
        queue.push({slug: d, score});
    }
}
queue.sort((a,b) => b.score - a.score || a.slug.localeCompare(b.slug));
console.log(JSON.stringify(queue, null, 2));
