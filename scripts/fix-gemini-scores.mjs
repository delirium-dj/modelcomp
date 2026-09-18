import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const halfUp1 = (x) => Math.round(x * 10) / 10;

const modelDir = join("model");
const slugs = readdirSync(modelDir).filter((d) => statSync(join(modelDir, d)).isDirectory());

let count = 0;
for (const slug of slugs) {
  const filePath = join(modelDir, slug, "Gemini_3.5_Flash_Lite.md");
  let content;
  try {
    content = readFileSync(filePath, "utf8");
  } catch {
    continue;
  }

  const parseDim = (name) => {
    const m = content.match(new RegExp(`\\*\\*${name}:\\s*([\\d.]+)/100`));
    return m ? Number(m[1]) : null;
  };

  const tool = parseDim("Tool use");
  const reasoning = parseDim("Reasoning");
  const context = parseDim("Context window");
  const multimodal = parseDim("Multimodal");
  const coding = parseDim("Coding");

  if (tool === null || reasoning === null || context === null || multimodal === null || coding === null) {
    console.warn(`Skipping ${filePath}: missing dimensions`);
    continue;
  }

  const mean5 = halfUp1((tool + reasoning + context + multimodal + coding) / 5);

  const oldOverallMatch = content.match(/- \*\*Overall Score:\s*[\d.]+\/100\.\*\*/);
  if (oldOverallMatch) {
    content = content.replace(
      /- \*\*Overall Score:\s*[\d.]+\/100\.\*\*/,
      `- **Overall Score: ${mean5}/100.**`
    );
    writeFileSync(filePath, content, "utf8");
    count++;
    console.log(`Updated model/${slug}/Gemini_3.5_Flash_Lite.md: Overall Score -> ${mean5}`);
  }
}
console.log(`Done fixing ${count} files.`);
