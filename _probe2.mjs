import fs from "node:fs";
import path from "node:path";

const root = "e:\\qwik\\modelcomp";

// --- 1. Extract available icon keys from vendorIcons.generated.ts ---
// Entries look like ={"key":{...},"key2":{...}} — first key preceded by `={"`, rest by `,"key":{`
const svgSrc = fs.readFileSync(path.join(root, "src/data/vendorIcons.generated.ts"), "utf8");
const iconKeys = new Set();
let re = /(?:^|=|,)\s*\{?\s*"([a-z0-9-]+)":\s*\{/g;
let m;
while ((m = re.exec(svgSrc)) !== null) iconKeys.add(m[1]);
console.log("TOTAL ICON KEYS:", iconKeys.size);
console.log("has agentrouter:", iconKeys.has("agentrouter"), "| has stepfun:", iconKeys.has("stepfun"), "| has unbiased:", iconKeys.has("unbiased"));

// --- 2. Extract VENDORS entries from VendorIcon.tsx ---
const vendorSrc = fs.readFileSync(path.join(root, "src/components/VendorIcon.tsx"), "utf8");
const vendRe = /\{[^}]*?(?:match|slug):\s*"([^"]*)"[^}]*?icon:\s*"([^"]+)"[^}]*?label:\s*"([^"]+)"[^}]*\}/g;
const vendors = [];
while ((m = vendRe.exec(vendorSrc)) !== null) vendors.push({ key: m[1], icon: m[2], label: m[3] });
console.log("TOTAL VENDOR ENTRIES:", vendors.length);

function vendorFor(id, name) {
  const tokens = `${id} ${name}`.toLowerCase().split(/[^a-z0-9]+/);
  return vendors.find((v) => v.key && tokens.some((t) => t.startsWith(v.key)));
}

// --- 3. Read all provider meta.json files ---
const provDir = path.join(root, "providers");
const folders = fs.readdirSync(provDir).filter((f) => fs.statSync(path.join(provDir, f)).isDirectory());

const mapped = [], missingArtwork = [], missingEntryOnly = [];
for (const folder of folders) {
  const metaPath = path.join(provDir, folder, "meta.json");
  if (!fs.existsSync(metaPath)) continue;
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  const name = meta.name || folder;
  const vendor = vendorFor(folder, name);
  const hasEntry = !!vendor;
  const resolvedIcon = vendor ? vendor.icon : folder;
  const hasArtwork = iconKeys.has(resolvedIcon);
  if (hasEntry && hasArtwork) { mapped.push({ slug: folder, name, icon: resolvedIcon }); continue; }
  if (hasEntry && !hasArtwork) { missingArtwork.push({ slug: folder, name, hasVendorEntry: true, icon: resolvedIcon }); continue; }
  if (!hasEntry && iconKeys.has(folder)) { missingEntryOnly.push({ slug: folder, name, artworkKey: folder }); continue; }
  missingArtwork.push({ slug: folder, name, hasVendorEntry: false, icon: null });
}

console.log(`\nPROVIDERS: ${folders.length} | MAPPED: ${mapped.length} | MISSING ICON: ${missingArtwork.length + missingEntryOnly.length}`);
console.log(`\n--- NEEDS VENDORS ENTRY ONLY (artwork key exists) ---`);
for (const i of missingEntryOnly) console.log(`  ${i.slug.padEnd(30)} ${i.name}  -> icon key: ${i.artworkKey}`);
console.log(`\n--- NEEDS NEW ARTWORK + VENDORS ENTRY ---`);
for (const i of missingArtwork) console.log(`  ${i.slug.padEnd(30)} ${i.name.padEnd(38)} vendorEntry=${i.hasVendorEntry} iconKey=${i.icon}`);