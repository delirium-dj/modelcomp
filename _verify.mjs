import fs from "node:fs";
import path from "node:path";
const root = "e:\\qwik\\modelcomp";
const svgSrc = fs.readFileSync(path.join(root, "src/data/vendorIcons.generated.ts"), "utf8");
const iconKeys = [];
let re = /(?:^|=|,)\s*"([a-z0-9-]+)":\{/g;
let m;
while ((m = re.exec(svgSrc)) !== null) iconKeys.push(m[1]);
console.log("FIRST 12 KEYS:", iconKeys.slice(0, 12).join(", "));
console.log("TOTAL:", iconKeys.length);
for (const k of ["agentrouter","anyscale","stepfun","unbiased","baidu","deepgram","openrouter"]) {
  console.log(`  has ${k}:`, iconKeys.includes(k));
}
// show raw around start
console.log("\nRAW START (400 chars):");
console.log(svgSrc.slice(svgSrc.indexOf("="), svgSrc.indexOf("=") + 400));
