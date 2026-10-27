import fs from "node:fs";
import path from "node:path";

const root = "e:\\qwik\\modelcomp";

// --- 1. Extract available icon keys from vendorIcons.generated.ts ---
const svgSrc = fs.readFileSync(path.join(root, "src/data/vendorIcons.generated.ts"), "utf8");
const iconKeys = new Set();
let re = /(?:^|=|,)\s*"([a-z0-9-]+)":\{/g;
let m;
while ((m = re.exec(svgSrc)) !== null) iconKeys.add(m[1]);

// --- 2. Extract VENDORS entries from VendorIcon.tsx ---
const vendorSrc = fs.readFileSync(path.join(root, "src/components/VendorIcon.tsx"), "utf8");
const vendRe = /\{[^}]*?(?:match|slug):\s*"([^"]*)"[^}]*?icon:\s*"([^"]+)"[^}]*?label:\s*"([^"]+)"[^}]*\}/g;
const vendors = [];
while ((m = vendRe.exec(vendorSrc)) !== null) {
  vendors.push({ key: m[1], icon: m[2], label: m[3] });
}

function vendorFor(id, name) {
  const tokens = `${id} ${name}`.toLowerCase().split(/[^a-z0-9]+/);
  return vendors.find((v) => v.key && tokens.some((t) => t.startsWith(v.key)));
}

// --- 3. Read all provider meta.json files ---
const provDir = path.join(root, "providers");
const folders = fs.readdirSync(provDir).filter((f) => fs.statSync(path.join(provDir, f)).isDirectory());

const missing = [];
for (const folder of folders) {
  const metaPath = path.join(provDir, folder, "meta.json");
  if (!fs.existsSync(metaPath)) { missing.push({ slug: folder, name: folder, artwork: iconKeys.has(folder) }); continue; }
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  const name = meta.name || folder;
  const vendor = vendorFor(folder, name);
  const entry = vendor && iconKeys.has(vendor.icon) ? vendor.icon : null;
  missing.push({ slug: folder, name, artwork: iconKeys.has(folder), icon: entry, match: vendor ? vendor.icon : null });
}

const noIcon = missing.filter((i) => !i.icon);
const hasArtwork = noIcon.filter((i) => i.artwork);
const noArtwork = noIcon.filter((i) => !i.artwork);

console.log(`PROVIDERS: ${folders.length} | WITHOUT ICON: ${noIcon.length} | has artwork already: ${hasArtwork.length} | needs artwork: ${noArtwork.length}`);
console.log("\n--- NEEDS VENDORS ENTRY ONLY (artwork exists) ---");
for (const i of hasArtwork) console.log(`  ${i.slug.padEnd(30)} ${i.name}  -> icon key: ${i.slug}`);
console.log("\n--- NEEDS NEW ARTWORK + VENDORS ENTRY ---");
for (const i of noArtwork) console.log(`  ${i.slug.padEnd(30)} ${i.name}`);
