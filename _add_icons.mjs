import fs from "node:fs";
import path from "node:path";

const dir = "e:\\qwik\\modelcomp\\assets\\vendor-icons";
const target = "e:\\qwik\\modelcomp\\src/data/vendorIcons.generated.ts";

// Providers needing artwork entries (slug -> icon key in generated.ts)
// All use the slug as the key
const slugs = [
  "agnes-ai","atlas-cloud","azure-ai-content-safety","bifrost","braintrust","brave",
  "exa","firecrawl","gladia","glhf","gonka","grafana","hetzner","ibm-watsonx",
  "inclusionai","kong","lakera","lambda","laminar","langfuse","langsmith","litellm",
  "literal-ai","lyceum","melious","mixedbread","modal","modelscope","newrelic",
  "nous-portal","opik","opper","phoenix","posthog","promptfoo","promptlayer",
  "runpod","signoz","tavily","traceloop","truefoundry",
];

// Read existing file
let src = fs.readFileSync(target, "utf8");

// Find the closing of the record: the file ends with `}` (closing the object)
// We need to insert new entries before the final `}`
// The file structure: export const VENDOR_ICON_SVGS: Record<...> ={...}
// The last char is `}`

// Function to read an SVG file and extract viewBox, fill, body
function readSvg(slug) {
  const svgPath = path.join(dir, `${slug}.svg`);
  if (!fs.existsSync(svgPath)) {
    console.warn(`  MISSING SVG: ${slug}.svg`);
    return null;
  }
  const content = fs.readFileSync(svgPath, "utf8");
  // Extract viewBox
  const vbMatch = content.match(/viewBox="([^"]*)"/);
  const viewBox = vbMatch ? vbMatch[1] : "0 0 24 24";
  // Extract fill attribute from svg tag
  const fillMatch = content.match(/fill="([^"]*)"/);
  const fill = fillMatch ? fillMatch[1] : null;
  // Extract body: everything between <svg ...> and </svg>
  const bodyMatch = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  let body = bodyMatch ? bodyMatch[1].trim() : content.trim();
  // Remove <title>...</title> from body
  body = body.replace(/<title>[\s\S]*?<\/title>/g, "").trim();
  // Escape backslashes and quotes for JS string
  body = body.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return { viewBox, fill, body };
}

const entries = [];
for (const slug of slugs) {
  const svg = readSvg(slug);
  if (!svg) continue;
  const entry = JSON.stringify({
    viewBox: svg.viewBox,
    fill: svg.fill,
    body: svg.body,
  });
  // JSON.stringify produces {"viewBox":"...","fill":null,"body":"..."}
  // We need: "slug":{"viewBox":"...","fill":null,"body":"..."}
  entries.push(`"${slug}":${entry}`);
}

if (entries.length === 0) {
  console.log("No entries to add.");
  process.exit(0);
}

// Insert entries before the final `}`
// The file ends with `}` — find the last `}` that closes the object
// Simple approach: replace the last occurrence of `}` with `,entries}`
const newEntriesStr = entries.join(",");
const lastBraceIdx = src.lastIndexOf("}");
if (lastBraceIdx === -1) {
  console.error("Could not find closing brace in target file.");
  process.exit(1);
}
const newSrc = src.slice(0, lastBraceIdx) + "," + newEntriesStr + src.slice(lastBraceIdx);

fs.writeFileSync(target, newSrc);
console.log(`Added ${entries.length} entries to vendorIcons.generated.ts`);
console.log("Entries:", entries.join(", "));
