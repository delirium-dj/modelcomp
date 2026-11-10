// Normalizes incorrect "Provided by:" lines in Flint.md files.
//
// Rules:
// 1. Files that already have "- Provided by: **Flint (opencode/flint)** - <YYYY-MM-DD>"
//    (or em-dash variant) are left as they are.
// 2. Files that need updating (those with incorrect signatures or model names) are
//    updated to:
//    `- Provided by: **Flint** — <YYYY-MM-DD>`
//
// Usage:
//   node scripts/fix-flint-signatures.mjs          # run and apply changes
//   node scripts/fix-flint-signatures.mjs --dry   # preview changes without writing

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const isDryRun = process.argv.includes("--dry");

// Target directories: model/ and sanctioned mirror trees
const targetTrees = ["model", "models_cybersecurity", "models_finance", "models_health", "models_voice"];

// Exactly preserve files that already have Flint (opencode/flint) or the requested Flint target
const EXACT_KEEP_PATTERNS = [
  /^\s*-\s*Provided by:\s*\*\*Flint \(opencode\/flint\)\*\*\s*[-—]\s*\d{4}-\d{2}-\d{2}\s*$/,
  /^\s*-\s*Provided by:\s*\*\*Flint\*\*\s*—\s*\d{4}-\d{2}-\d{2}\s*$/,
];

let totalScanned = 0;
let totalUpdated = 0;
let totalReplacements = 0;

for (const tree of targetTrees) {
  const treePath = path.join(repoRoot, tree);
  if (!fs.existsSync(treePath)) continue;

  const entries = fs.readdirSync(treePath, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const flintPath = path.join(treePath, entry.name, "Flint.md");
    if (!fs.existsSync(flintPath)) continue;

    totalScanned++;
    const rawContent = fs.readFileSync(flintPath, "utf8");
    const hasCrlf = rawContent.includes("\r\n");
    const newline = hasCrlf ? "\r\n" : "\n";
    const lines = rawContent.split(/\r?\n/);

    let fileChanged = false;
    const newLines = lines.map((line) => {
      // Only process signature bullet lines
      if (!/^\s*-\s*Provided by:/.test(line)) {
        return line;
      }

      // If already in an exact keep form, do not alter
      if (EXACT_KEEP_PATTERNS.some((pattern) => pattern.test(line))) {
        return line;
      }

      // Extract existing date if present; default to '2026-11-06'
      const dateMatch = line.match(/\b\d{4}-\d{2}-\d{2}\b/);
      const date = dateMatch ? dateMatch[0] : "2026-11-06";

      // Format requested by user for updated files:
      // "- Provided by: **Flint** — <YYYY-MM-DD>"
      const corrected = `- Provided by: **Flint** — ${date}`;
      fileChanged = true;
      totalReplacements++;
      return corrected;
    });

    if (fileChanged) {
      totalUpdated++;
      if (!isDryRun) {
        fs.writeFileSync(flintPath, newLines.join(newline), "utf8");
      }
      console.log(`[UPDATED] ${path.join(tree, entry.name, "Flint.md")}`);
    }
  }
}

console.log("\nSummary:");
console.log(`- Scanned Flint.md files: ${totalScanned}`);
console.log(`- Files updated: ${totalUpdated}${isDryRun ? " (dry-run)" : ""}`);
console.log(`- Total signature lines corrected: ${totalReplacements}`);
