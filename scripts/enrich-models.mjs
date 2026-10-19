// Pricing-claim linker for modelcomp. Run: node scripts/enrich-models.mjs
//
// "Access & pricing" must link each pricing line to the page that *claims*
// that price (the provider or marketplace), never to the model's marketing
// page. This script fills `pricingLinks` in every model/<slug>/meta.json:
// a `(string|null)[]` aligned 1:1 with the lines the detail page renders —
// `pricingTiers` when present, otherwise `[pricingNote]`. `null` = no
// verifiable claimant (the line renders as plain text).
//
// Where a link comes from, in priority order (per line):
//   1. A provider/marketplace named in the line (NanoGPT, OpenRouter, Zen,
//      Bedrock, ...) → that provider's own URL quoted in the folder's
//      findings files (model-specific page preferred), else its canonical
//      pricing page.
//   2. "open weights" / "self-host" → a Hugging Face model repo quoted in
//      the findings, else the HF search for the slug.
//   3. Any other brand token in the line matched against findings URLs.
//   4. Provider inferred from the model slug/id (e.g. `claude-*` → Anthropic)
//      → findings URL for that provider, else its canonical pricing page.
//   5. The first pricing-line URL in the findings.
//
// The script only writes `pricingLinks`; it never touches `officialUrl`,
// `contextWindow`, or any other curated field, and is deterministic (safe to
// re-run after new findings land).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const modelDir = path.join(root, "model");

const FREE_ZEN_URL = "https://opencode.ai/v2/docs/console/models/#free-models";
const ZEN_URL = "https://opencode.ai/v2/docs/console/models/";

/** Provider/marketplace claimants: how to spot them, where they live, fallback page. */
const PROVIDERS = [
  {
    key: "zen",
    re: /\bopencode\b|\bzen\b/i,
    noFreeRe: /\bno\s+(?:zen\s+)?free\s+id\b/i,
    freeRe: /\bfree\b[^;]{0,40}\bzen\b|\bzen\b[^;]{0,40}\bfree\b/i,
    freeUrl: FREE_ZEN_URL,
    domains: ["opencode.ai"],
    url: ZEN_URL,
    firstParty: true,
  },
  {
    key: "openai",
    re: /\bopenai\b|\bchatgpt\b|\bo[13](?:\s|-|_|$)\b/i,
    domains: ["openai.com", "chatgpt.com"],
    url: "https://openai.com/api/pricing/",
    firstParty: true,
  },
  {
    key: "azure",
    re: /\bazure\b/i,
    domains: ["azure.microsoft.com", "azure.com"],
    url: "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/",
    firstParty: true,
  },
  {
    key: "anthropic",
    re: /\banthropic\b|\bclaude\b/i,
    domains: ["anthropic.com", "claude.com", "claude.ai"],
    url: "https://www.anthropic.com/pricing",
    firstParty: true,
  },
  {
    key: "vertex",
    re: /\bvertex\b/i,
    domains: ["cloud.google.com"],
    url: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    firstParty: true,
  },
  {
    key: "google",
    re: /\bgoogle\b|\bgemini\b|\bgemma\b|\bai studio\b/i,
    domains: ["ai.google.dev", "deepmind.google", "blog.google", "developers.googleblog.com"],
    url: "https://ai.google.dev/gemini-api/docs/pricing",
    firstParty: true,
  },
  {
    key: "deepseek",
    re: /\bdeepseek\b/i,
    domains: ["deepseek.com"],
    url: "https://api-docs.deepseek.com/quick_start/pricing",
    firstParty: true,
  },
  {
    key: "xai",
    re: /\bxai\b|\bgrok\b/i,
    domains: ["x.ai"],
    url: "https://x.ai/api",
    firstParty: true,
  },
  {
    key: "zhipu",
    re: /\bglm\b|\bzhipu\b|\bz\.ai\b|\bbigmodel\b/i,
    domains: ["z.ai", "zhipuai.cn", "bigmodel.cn"],
    url: "https://docs.z.ai/guides/overview/pricing",
    firstParty: true,
  },
  {
    key: "alibaba",
    re: /\bqwen\b|\balibaba\b|\bmodel studio\b|\bqwencloud\b/i,
    domains: ["alibabacloud.com", "aliyun.com", "qwen.ai", "qwenlm.github.io", "qwencloud.com"],
    url: "https://www.alibabacloud.com/help/en/model-studio/models",
    firstParty: true,
  },
  {
    key: "moonshot",
    re: /\bkimi\b|\bmoonshot\b/i,
    domains: ["moonshot.ai", "moonshot.cn", "kimi.com", "platform.moonshot"],
    url: "https://platform.moonshot.ai/docs/pricing/chat",
    firstParty: true,
  },
  {
    key: "minimax",
    re: /\bminimax\b/i,
    domains: ["minimax.io", "minimaxi.com", "minimax.com"],
    url: "https://www.minimax.io/platform/pricing",
    firstParty: true,
  },
  {
    key: "mistral",
    re: /\bmistral\b/i,
    domains: ["mistral.ai"],
    url: "https://mistral.ai/pricing",
    firstParty: true,
  },
  {
    key: "microsoft",
    re: /\bmicrosoft\b|\bmai\b|\bcopilot\b/i,
    domains: ["microsoft.com", "microsoft.ai"],
    url: "",
  },
  {
    key: "nvidia",
    re: /\bnvidia\b|\bnim\b|\bnemotron\b/i,
    domains: ["nvidia.com", "nvidia.cn"],
    url: "https://build.nvidia.com/",
  },
  {
    key: "meta",
    re: /\bmuse\b|\bmeta\b|\bllama\b/i,
    domains: ["meta.ai", "llama.com", "meta.com"],
    url: "",
  },
  {
    key: "xiaomi",
    re: /\bxiaomi\b|\bmimo\b/i,
    domains: ["mi.com", "xiaomi.com", "xiaomimimo.com"],
    url: "",
  },
  {
    key: "upstage",
    re: /\bupstage\b|\bsolar\b/i,
    domains: ["upstage.ai"],
    url: "https://upstage.ai/pricing",
    firstParty: true,
  },
  {
    key: "stepfun",
    re: /\bstepfun\b|\bstep[\s-]?\d/i,
    domains: ["stepfun.com"],
    url: "",
  },
  {
    key: "openrouter",
    re: /\bopenrouter\b/i,
    domains: ["openrouter.ai"],
    url: "https://openrouter.ai/models",
  },
  {
    key: "deepinfra",
    re: /\bdeepinfra\b/i,
    domains: ["deepinfra.com"],
    url: "https://deepinfra.com/pricing",
  },
  {
    key: "together",
    re: /\btogether\b/i,
    domains: ["together.ai", "together.xyz"],
    url: "https://www.together.ai/pricing",
  },
  {
    key: "fireworks",
    re: /\bfireworks\b/i,
    domains: ["fireworks.ai"],
    url: "https://fireworks.ai/pricing",
  },
  {
    key: "baseten",
    re: /\bbaseten\b/i,
    domains: ["baseten.co"],
    url: "https://www.baseten.co/pricing/",
  },
  {
    key: "bedrock",
    re: /\bbedrock\b|\baws\b|\bamazon\b/i,
    domains: ["aws.amazon.com", "amazon.com"],
    url: "https://aws.amazon.com/bedrock/pricing/",
  },
  {
    key: "vercel",
    re: /\bvercel\b/i,
    domains: ["vercel.com"],
    url: "https://vercel.com/ai-gateway/pricing",
  },
  {
    key: "cloudflare",
    re: /\bcloudflare\b/i,
    domains: ["cloudflare.com"],
    url: "https://developers.cloudflare.com/workers-ai/platform/pricing/",
  },
  {
    key: "nanogpt",
    re: /\bnano-?gpt\b/i,
    domains: ["nano-gpt.com"],
    url: "https://nano-gpt.com/pricing",
  },
  {
    key: "artificialanalysis",
    re: /\bartificial analysis\b|\baa\b/,
    domains: ["artificialanalysis.ai"],
    url: "https://artificialanalysis.ai/models",
  },
  {
    key: "github",
    re: /\bcopilot\b|\bgithub\b/i,
    domains: ["github.com"],
    url: "https://github.com/features/copilot/plans",
    firstParty: true,
  },
  {
    key: "longcat",
    re: /\blongcat\b/i,
    domains: ["longcat.chat", "longcat.com"],
    url: "",
  },
  {
    key: "tencent",
    re: /\bhunyuan\b|\btencent\b|\byuanbao\b/i,
    domains: ["tencent.com", "hunyuan.tencent.com"],
    url: "",
  },
  {
    key: "poolside",
    re: /\bpoolside\b|\blaguna\b/i,
    domains: ["poolside.ai"],
    url: "",
  },
  {
    key: "inclusionai",
    re: /\bling\b|\binclusionai\b/i,
    domains: ["inclusionai.com", "modelscope.cn"],
    url: "",
  },
];

const PROVIDER_BY_KEY = new Map(PROVIDERS.map((p) => [p.key, p]));

/** Nucleus words that must never be mistaken for a brand when scanning a line. */
const STOPWORDS = new Set([
  "per", "cached", "cache", "input", "output", "tokens", "token", "million",
  "standard", "paid", "free", "tier", "weight", "weights", "self", "host",
  "hosted", "prompt", "prompts", "batch", "flex", "intro", "list", "launch",
  "above", "under", "discount", "preview", "plan", "membership", "public",
  "rate", "rates", "card", "not", "and", "via", "api", "ctx", "context",
  "native", "official", "third", "party", "equiv", "median", "cheapest",
  "measured", "available", "only", "expected", "with", "from", "no", "id",
  "the", "for", "than", "over", "retired", "unverified", "announced", "conflict",
  "conflicting", "model", "studio", "gateway", "build", "trial", "limited",
  "time", "open", "closed", "source", "weights", "fine", "tune", "distill",
  "pricing", "price", "read", "write", "hit", "off", "fast", "mode", "usage",
  "based", "region", "china", "intl", "international", "developer", "credits",
  "promo", "variant", "releases", "blog", "docs", "news", "report", "reported",
  "published", "expected", "unpublished", "unknown", "varies", "varies",
]);

const NO_MD = new Set(["average.md", "README.md", "meta.json"]);
const URL_RE = /https?:\/\/[^\s<>"'`\]\)]+/g;
const TRAILING = /[.,;:)\]}`]+$/;

/** Trim punctuation/backticks that findings prose leaves stuck to a URL. */
function cleanUrl(raw) {
  return raw.replace(TRAILING, "");
}

function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function hostOf(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function pathOf(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return "";
  }
}

/** All URLs in a folder's findings files, each tagged with its line context. */
function collectUrls(slug) {
  const dir = path.join(modelDir, slug);
  const out = [];
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch {
    return out;
  }
  for (const file of files) {
    if (!file.endsWith(".md") || NO_MD.has(file) || file.includes(".excluded")) continue;
    let text;
    try {
      text = fs.readFileSync(path.join(dir, file), "utf8");
    } catch {
      continue;
    }
    const lines = text.split(/\r?\n/);
    lines.forEach((line, idx) => {
      const matches = line.match(URL_RE);
      if (!matches) return;
      const prev = lines[idx - 1] ?? "";
      const pricing =
        /\bpricing\b|\bprice|\$|per\s*(?:1m|mtok|million|token)/i.test(line) ||
        /\bpricing\b/i.test(prev);
      for (const raw of matches) {
        const url = cleanUrl(raw);
        out.push({ url, line, pricing });
      }
    });
  }
  return out;
}

/** Best findings URL for a provider: its domain, pricing lines and slug matches score highest. */
function pickProviderUrl(candidates, provider, slug) {
  const tokens = slug.split(/[-_.]/).filter((t) => t.length >= 3);
  const scored = [];
  for (const c of candidates) {
    const host = hostOf(c.url);
    if (!provider.domains.some((d) => host === d || host.endsWith("." + d))) continue;
    let score = 1;
    if (c.pricing) score += 3;
    if (tokens.some((t) => c.url.toLowerCase().includes(t))) score += 2;
    const segs = pathOf(c.url).split("/").filter(Boolean);
    if (segs.length >= 2) score += 1;
    scored.push({ url: c.url, score, len: c.url.length });
  }
  if (!scored.length) return null;
  scored.sort((a, b) => b.score - a.score || a.len - b.len);
  return scored[0].url;
}

/** A Hugging Face model repo quoted in the findings (not a search/filter page). */
function pickHuggingFaceUrl(candidates) {
  const hf = candidates.filter((c) => hostOf(c.url) === "huggingface.co");
  const repo = hf.find((c) => {
    const segs = pathOf(c.url).split("/").filter(Boolean);
    return segs.length >= 2 && segs[0] !== "models" && segs[0] !== "datasets";
  });
  return (repo ?? hf[0])?.url ?? null;
}

/** Any findings URL whose host or path carries the given brand token. */
function pickBrandUrl(candidates, token) {
  const n = norm(token);
  if (n.length < 4) return null;
  const hit = candidates.find((c) => {
    const host = norm(hostOf(c.url));
    return host.includes(n) || norm(c.url).includes(n);
  });
  return hit?.url ?? null;
}

function inferProvider(modelText) {
  const rules = [
    [/gpt|chatgpt|openai|\bo[13]\b/i, "openai"],
    [/claude|anthropic/i, "anthropic"],
    [/gemini|gemma|google/i, "google"],
    [/grok|xai/i, "xai"],
    [/deepseek/i, "deepseek"],
    [/glm|zhipu/i, "zhipu"],
    [/qwen|alibaba/i, "alibaba"],
    [/kimi|moonshot/i, "moonshot"],
    [/minimax/i, "minimax"],
    [/mistral/i, "mistral"],
    [/mimo|xiaomi/i, "xiaomi"],
    [/muse|meta/i, "meta"],
    [/nemotron|nvidia/i, "nvidia"],
    [/solar|upstage/i, "upstage"],
    [/step/i, "stepfun"],
    [/longcat/i, "longcat"],
    [/hunyuan|tencent/i, "tencent"],
    [/laguna|poolside/i, "poolside"],
    [/ling/i, "inclusionai"],
    [/nemotron|nvidia/i, "nvidia"],
  ];
  for (const [re, key] of rules) if (re.test(modelText)) return PROVIDER_BY_KEY.get(key);
  return null;
}

function resolveLine(tier, candidates, slug, id) {
  const text = tier;
  const noFreeId = /\bno\s+(?:zen\s+)?free\s+id\b/i.test(text);

  const matched = [];
  for (const p of PROVIDERS) {
    const m = text.match(p.re);
    if (!m) continue;
    if (p.key === "zen" && (noFreeId || p.noFreeRe?.test(text))) continue;
    matched.push({ p, index: m.index });
  }
  matched.sort((a, b) => a.index - b.index);

  for (const { p } of matched) {
    if (p.freeUrl && p.freeRe?.test(text)) return p.freeUrl;
    const hit = pickProviderUrl(candidates, p, slug);
    if (hit) return hit;
    if (p.url) return p.url;
  }

  if (/open[\s-]?weights?|self[\s-]?host/i.test(text)) {
    const hf = pickHuggingFaceUrl(candidates);
    if (hf) return hf;
    return `https://huggingface.co/models?search=${slug}`;
  }

  for (const token of text.match(/[A-Za-z][A-Za-z0-9.]{2,}/g) ?? []) {
    if (STOPWORDS.has(token.toLowerCase()) || token.length < 4) continue;
    const hit = pickBrandUrl(candidates, token);
    if (hit) return hit;
  }

  const inferred = inferProvider(`${slug} ${id}`);
  if (inferred) {
    const hit = pickProviderUrl(candidates, inferred, slug);
    if (hit) return hit;
    if (inferred.url) return inferred.url;
  }

  return candidates.find((c) => c.pricing)?.url ?? null;
}

function sameLinks(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

let updated = 0;
let linked = 0;
let unlinked = 0;

for (const entry of fs.readdirSync(modelDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const metaPath = path.join(modelDir, slug, "meta.json");
  if (!fs.existsSync(metaPath)) continue;

  let meta;
  try {
    meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  } catch (err) {
    console.error(`✖ ${slug}: meta.json does not parse — skipped`, err.message);
    continue;
  }

  const tiers = Array.isArray(meta.pricingTiers) && meta.pricingTiers.length
    ? meta.pricingTiers
    : meta.pricingNote
      ? [meta.pricingNote]
      : [];
  if (!tiers.length) continue;

  const candidates = collectUrls(slug);
  const links = tiers.map((tier) => resolveLine(String(tier), candidates, slug, String(meta.id ?? "")));

  for (const l of links) l ? linked++ : unlinked++;

  if (!sameLinks(meta.pricingLinks, links)) {
    meta.pricingLinks = links;
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
    updated++;
  }
}

console.log(
  `🔗 Pricing-claim links: ${linked} linked, ${unlinked} without a verifiable claimant; ${updated} meta.json updated.`,
);
