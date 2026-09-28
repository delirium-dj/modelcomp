const fs = require("node:fs");
const path = require("node:path");
const STEM = "Muse_Spark_1.3.md";
const root = path.join(__dirname, "model");
const dirs = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);
let rows = [];
for (const slug of dirs) {
  const fp = path.join(root, slug, STEM);
  if (fs.existsSync(fp)) continue;
  const avg = path.join(root, slug, "average.md");
  let ov = null;
  if (fs.existsSync(avg)) {
    const t = fs.readFileSync(avg, "utf8");
    const m = t.match(/Overall Score:\s*([0-9]+(?:\.[0-9]+)?)\/100/);
    if (m) ov = parseFloat(m[1]);
  }
  rows.push({ slug, ov });
}
rows.sort((a, b) => {
  if (a.ov == null && b.ov == null) return a.slug.localeCompare(b.slug);
  if (a.ov == null) return 1;
  if (b.ov == null) return -1;
  return b.ov - a.ov || a.slug.localeCompare(b.slug);
});
let out = "TOTAL_MISSING=" + rows.length + " DIRS=" + dirs.length + "\n";
for (const r of rows)
  out += (r.ov == null ? "NOAVG" : "OV=" + r.ov) + " slug=" + r.slug + "\n";
fs.writeFileSync(path.join(__dirname, "tmp-queue.txt"), out);
