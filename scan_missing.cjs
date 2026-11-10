// TEMP missing-set scanner for the pinned STEM. Deleted at handover.
// Authority: model-queue.md (order) minus folders holding <STEM>.md, minus
// model-aliases.generated.md forbidden identities. Ground-truth fs per slug.
const fs = require("fs");

const STEM = "Qwen_3.8_Max";

// 1. model-queue.md -> ordered slugs (skip # comment lines)
const qslugs = [];
for (const line of fs.readFileSync("model-queue.md", "utf8").split(/\r?\n/)) {
  const m = line.match(/^\s*([\d.]+)\s+([A-Za-z0-9._-]+)\s*$/);
  if (m) qslugs.push({ score: m[1], slug: m[2] });
}

// 2. model-aliases.generated.md -> forbidden slug set (SKIP the Alias-family
//    records section: those slugs are canonical research targets, not forbidden)
const forbidden = new Set();
let inFamily = false;
for (const line of fs.readFileSync("model-aliases.generated.md", "utf8").split(/\r?\n/)) {
  if (line.startsWith("## ")) { inFamily = /Alias-family records/i.test(line); continue; }
  if (inFamily) continue;
  const m = line.match(/^-\s*`([^`]+)`/);
  if (m) forbidden.add(m[1]);
}

// 3. Queue-ordered actionable missing-set
const present = [], fresh = [], twins = [], dropped = [];
for (const { score, slug } of qslugs) {
  if (forbidden.has(slug)) { dropped.push(slug + " [ALIAS-FORBIDDEN]"); continue; }
  const dir = "model/" + slug;
  if (!fs.existsSync(dir)) { dropped.push(slug + " [NO-FOLDER-ON-DISK]"); continue; }
  if (fs.existsSync(dir + "/" + STEM + ".md")) { present.push(slug); continue; }
  if (fs.existsSync(dir + "/" + STEM + ".md.excluded")) twins.push(score + "  " + slug);
  else fresh.push(score + "  " + slug);
}

// 4. Disk folders absent from the queue (no average.md yet) -> append last, A-Z,
//    minus forbidden, minus those already holding my file
const queueSet = new Set(qslugs.map((x) => x.slug));
const disk = fs.readdirSync("model", { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const az = (a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0);
const unqueued = disk
  .filter((f) => !queueSet.has(f) && !forbidden.has(f) && !fs.existsSync("model/" + f + "/" + STEM + ".md"))
  .sort(az)
  .map((f) => f + (fs.existsSync("model/" + f + "/" + STEM + ".md.excluded") ? "  [TWIN]" : "  [FRESH]"));

console.log("STEM =", STEM);
console.log("queueSlugs =", qslugs.length, "| forbiddenSlugs =", forbidden.size, "| diskFolders =", disk.length);
console.log("present (already have my .md) =", present.length);
console.log("\n=== QUEUE-ORDERED MISSING (highest Overall first) ===");
console.log("-- FRESH (no file at all): " + fresh.length);
fresh.forEach((s) => console.log("   " + s));
console.log("-- TWIN (.md.excluded only -> Step 3.3): " + twins.length);
twins.forEach((s) => console.log("   " + s));
console.log("\n== UNQUEUED disk folders (no average.md) -> append A-Z: " + unqueued.length);
unqueued.forEach((s) => console.log("   " + s));
console.log("\n== DROPPED (forbidden / no folder): " + dropped.length);
dropped.forEach((s) => console.log("   " + s));
console.log("\nTOTAL ACTIONABLE (queue fresh+twin+unqueued) =", fresh.length + twins.length + unqueued.length);
