import fs from "node:fs";
import path from "node:path";

const dir = "e:\\qwik\\modelcomp\\assets\\vendor-icons";

// Provider -> [initials, brandColorHex or null for monochrome]
// Only providers where we DON'T already have a real brand SVG
const providers = {
  "agnes-ai": ["AA", null],
  "atlas-cloud": ["AC", null],
  "azure-ai-content-safety": ["AA", "#0078D4"],
  "bifrost": ["BF", null],
  "exa": ["EX", null],
  "firecrawl": ["FC", null],
  "gladia": ["GL", null],
  "glhf": ["GH", null],
  "gonka": ["GK", null],
  "ibm-watsonx": ["IW", "#000000"],
  "inclusionai": ["IA", null],
  "lakera": ["LK", null],
  "lambda": ["LA", null],
  "laminar": ["LM", null],
  "langsmith": ["LS", null],
  "literal-ai": ["LA", null],
  "lyceum": ["LY", null],
  "melious": ["ME", null],
  "mixedbread": ["MB", null],
  "nous-portal": ["NP", null],
  "opik": ["OP", null],
  "opper": ["OP", null],
  "phoenix": ["PX", null],
  "promptfoo": ["PF", null],
  "promptlayer": ["PL", null],
  "runpod": ["RP", null],
  "signoz": ["SZ", null],
  "tavily": ["TV", null],
  "traceloop": ["TL", null],
  "truefoundry": ["TF", null],
};

function makeSvg(initials, color) {
  const bg = color ? `fill="${color}"` : `fill="currentColor"`;
  const textFill = color ? "#ffffff" : "#000000";
  // For monochrome adaptive icons, use currentColor for bg too and white text won't work.
  // Instead: bg = currentColor, text = the opposite via a mask-like approach.
  // Simplest: bg circle in currentColor, text cut out (knockout) using white bg + colored text
  if (!color) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="currentColor"/><text x="12" y="14" text-anchor="middle" font-size="10" font-weight="700" font-family="system-ui, sans-serif" fill="#ffffff">${initials}</text></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="${color}"/><text x="12" y="14" text-anchor="middle" font-size="10" font-weight="700" font-family="system-ui, sans-serif" fill="#ffffff">${initials}</text></svg>`;
}

for (const [slug, [initials, color]] of Object.entries(providers)) {
  const svg = makeSvg(initials, color);
  fs.writeFileSync(path.join(dir, `${slug}.svg`), svg);
  console.log(`Wrote ${slug}.svg`);
}
console.log(`\nGenerated ${Object.keys(providers).length} SVG files.`);
