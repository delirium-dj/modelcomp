import fs from "node:fs";
import path from "node:path";

const dir = "e:\\qwik\\modelcomp\\assets\\vendor-icons";
const target = "e:\\qwik\\modelcomp\\src/data/vendorIcons.generated.ts";

const slug = "litellm";
const svgPath = path.join(dir, `${slug}.svg`);
const content = fs.readFileSync(svgPath, "utf8");
const vbMatch = content.match(/viewBox="([^"]*)"/);
const viewBox = vbMatch ? vbMatch[1] : "0 0 24 24";
const fillMatch = content.match(/fill="([^"]*)"/);
const fill = fillMatch ? fillMatch[1] : null;
const bodyMatch = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
let body = bodyMatch ? bodyMatch[1].trim() : content.trim();
body = body.replace(/<title>[\s\S]*?<\/title>/g, "").trim();
body = body.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const entry = JSON.stringify({ viewBox, fill, body });
const entryStr = `"${slug}":${entry}`;

let src = fs.readFileSync(target, "utf8");
const lastBraceIdx = src.lastIndexOf("}");
if (lastBraceIdx === -1) { console.error("No closing brace"); process.exit(1); }
const newSrc = src.slice(0, lastBraceIdx) + "," + entryStr + src.slice(lastBraceIdx);
fs.writeFileSync(target, newSrc);
console.log(`Added ${slug} entry.`);

// Validate
try { require(target); console.log("VALID"); } catch(e) { console.log("ERROR:", e.message.substring(0,200)); }
