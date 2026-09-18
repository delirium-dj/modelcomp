
const fs = require('fs');
const path = require('path');

const modelDir = path.join(__dirname, '../model');

function parseScores(content) {
  const scores = {};
  const lines = content.split('\n');
  const mapping = {
    'Tool use': 'tool',
    'Reasoning': 'reasoning',
    'Context window': 'context',
    'Multimodal': 'multimodal',
    'Coding': 'coding',
    'Cost efficiency': 'cost',
    'Overall Score': 'overall'
  };

  for (const line of lines) {
    for (const [label, key] of Object.entries(mapping)) {
      if (line.includes(`**${label}:`)) {
        const match = line.match(new RegExp(`\\*\\*${label}:\\s*([\\d.]+)/100`));
        if (match) {
          scores[key] = parseFloat(match[1]);
        }
      }
    }
  }
  return scores;
}

const folders = fs.readdirSync(modelDir).filter(f => fs.statSync(path.join(modelDir, f)).isDirectory());

for (const folder of folders) {
  const folderPath = path.join(modelDir, folder);
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md') && f !== 'average.md' && f !== 'README.md');
  
  if (files.length === 0) continue;

  const allScores = [];
  const sourceNames = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(folderPath, file), 'utf8');
    const scores = parseScores(content);
    if (Object.keys(scores).length > 0) {
      allScores.push(scores);
      sourceNames.push(file.replace('.md', '').replace(/_/g, ' '));
    }
  }

  if (allScores.length === 0) continue;

  const avgScores = { tool: 0, reasoning: 0, context: 0, multimodal: 0, coding: 0, cost: 0, overall: 0 };
  const count = allScores.length;

  for (const scores of allScores) {
    for (const key in avgScores) {
      avgScores[key] += scores[key] || 0;
    }
  }

  for (const key in avgScores) {
    avgScores[key] = parseFloat((avgScores[key] / count).toFixed(1));
  }

  const averageMd = `# ${folder.replace(/-/g, ' ')} — Averaged findings

- Overview and scoring methodology: \`../../model-comparison.md\`
- Cross-model signed log: \`../../model-findings.md\`

## Averaged scores

- **Tool use: ${avgScores.tool}/100.** Mean of ${count} reporting sources.
- **Reasoning: ${avgScores.reasoning}/100.** Mean of ${count} reporting sources.
- **Context window: ${avgScores.context}/100.** Mean of ${count} reporting sources.
- **Multimodal: ${avgScores.multimodal}/100.** Mean of ${count} reporting sources.
- **Coding: ${avgScores.coding}/100.** Mean of ${count} reporting sources.
- **Cost efficiency: ${avgScores.cost}/100.** Mean of ${count} reporting sources.
- **Overall Score: ${avgScores.overall}/100.** Mean of source Overall scores.

---

## Agreement notes

- Based on ${count} reporting source(s): ${sourceNames.join(', ')}.
`;

  fs.writeFileSync(path.join(folderPath, 'average.md'), averageMd);
  console.log(`Updated ${folder}/average.md`);
}
