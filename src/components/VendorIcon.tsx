import { component$ } from "@builder.io/qwik";
import { VENDOR_ICON_SVGS } from "../data/vendorIcons.generated";

interface VendorIconProps {
  id: string;
  name: string;
  /** "sm" (default, 20px — lists/cards) or "lg" (matches text-3xl/4xl page headings). */
  size?: "sm" | "lg";
}

interface VendorMatch {
  /** Token-prefix match over `${id} ${name}`. */
  match?: string;
  /** Exact provider slug — for ids whose token would also match model ids. */
  slug?: string;
  icon: keyof typeof VENDOR_ICON_SVGS | string;
  label: string;
  /** Brand color applied via `color` for monochrome (`currentColor`) marks. */
  color?: string;
  /** Monochrome mark with no brand color — follow the theme instead. */
  adaptive?: boolean;
  /** White mark on transparent bg — invert in light theme, keep in dark. */
  invertLight?: boolean;
  /** White mark — needs a dark chip to stay visible in light theme. */
  chip?: boolean;
}

// Token-prefix match over `${id} ${name}` lowercase, so e.g. "Inkling"
// never matches "ling". Artwork: free brand SVGs from thesvg.org
// (GLINCKER/thesvg, MIT), LobeHub icons (MIT), Simple Icons (CC0) and SVGL;
// puter, synthetic, reflection, unbiased, callstack and teleai are the
// vendors' own artwork; trademarks belong to their owners — inlined from
// src/data/vendorIcons.generated.ts — no <img>, no network requests.
const VENDORS: VendorMatch[] = [
  { match: "claude", icon: "anthropic", label: "Anthropic", chip: true },
  { match: "anthropic", icon: "anthropic", label: "Anthropic", chip: true },
  { match: "gpt", icon: "openai", label: "OpenAI", invertLight: true },
  { match: "codex", icon: "openai", label: "OpenAI", invertLight: true },
  { match: "openai", icon: "openai", label: "OpenAI", invertLight: true },
  { match: "gemini", icon: "gemini", label: "Google" },
  { match: "gemma", icon: "google", label: "Google" },
  { match: "google", icon: "google", label: "Google" },
  { match: "grok", icon: "grok", label: "xAI", invertLight: true },
  { match: "glm", icon: "zhipu", label: "Zhipu" },
  { match: "zhipu", icon: "zhipu", label: "Zhipu" },
  { match: "chatglm", icon: "zhipu", label: "Zhipu" },
  { match: "deepseek", icon: "deepseek", label: "DeepSeek" },
  { match: "mimo", icon: "mimo", label: "Xiaomi", color: "#FF6900" },
  { match: "xiaomi", icon: "xiaomi", label: "Xiaomi" },
  { match: "qwen", icon: "qwen", label: "Qwen", invertLight: true },
  { match: "kimi", icon: "kimi", label: "Moonshot AI" },
  { match: "moonshot", icon: "moonshot", label: "Moonshot AI", adaptive: true },
  { match: "minimax", icon: "minimax", label: "MiniMax" },
  { match: "llama", icon: "meta", label: "Meta" },
  { match: "muse", icon: "meta", label: "Meta" },
  { match: "meta", icon: "meta", label: "Meta" },
  { match: "nvidia", icon: "nvidia", label: "NVIDIA" },
  { match: "nemotron", icon: "nvidia", label: "NVIDIA" },
  { match: "mistral", icon: "mistral", label: "Mistral" },
  { match: "microsoft", icon: "microsoft", label: "Microsoft" },
  { match: "mai", icon: "microsoft", label: "Microsoft" },
  { match: "amazon", icon: "aws", label: "AWS", adaptive: true },
  { match: "alibaba", icon: "alibabacloud", label: "Alibaba Cloud" },
  { match: "solar", icon: "upstage", label: "Upstage", adaptive: true },
  { match: "upstage", icon: "upstage", label: "Upstage", adaptive: true },
  { match: "seed", icon: "bytedance", label: "ByteDance" },
  { match: "bytedance", icon: "bytedance", label: "ByteDance" },
  { match: "doubao", icon: "bytedance", label: "ByteDance" },
  { match: "hunyuan", icon: "tencent", label: "Tencent" },
  { match: "hy3", icon: "tencent", label: "Tencent" },
  { match: "hy4", icon: "tencent", label: "Tencent" },
  { match: "tencent", icon: "tencent", label: "Tencent" },
  { match: "longcat", icon: "longcat", label: "Meituan", adaptive: true },
  { match: "meituan", icon: "longcat", label: "Meituan", adaptive: true },
  { match: "ling", icon: "antgroup", label: "Ant Group" },
  { match: "bailing", icon: "antgroup", label: "Ant Group" },
  { match: "vercel", icon: "vercel", label: "Vercel", invertLight: true },
  { match: "xai", icon: "xai", label: "xAI", adaptive: true },
  { match: "zai", icon: "zai", label: "Z.ai", adaptive: true },
  { slug: "opencode-zen", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "openrouter", icon: "openrouter", label: "OpenRouter" },
  { match: "nanogpt", icon: "nanogpt", label: "NanoGPT" },
  { match: "commandcode", icon: "commandcode", label: "Command Code", adaptive: true },
  { match: "deepinfra", icon: "deepinfra", label: "DeepInfra" },
  { match: "cursor", icon: "cursor", label: "Cursor", adaptive: true },
  { match: "qoder", icon: "qoder", label: "Qoder", adaptive: true },
  { match: "huggingface", icon: "huggingface", label: "Hugging Face" },
  { match: "fireworks", icon: "fireworks", label: "Fireworks AI" },
  { match: "cloudflare", icon: "cloudflare", label: "Cloudflare" },
  { match: "github", icon: "github", label: "GitHub", adaptive: true },
  { match: "together", icon: "together", label: "Together AI", adaptive: true },
  { match: "novita", icon: "novita", label: "Novita AI", adaptive: true },
  { match: "baseten", icon: "baseten", label: "Baseten", adaptive: true },
  { match: "ollama", icon: "ollama", label: "Ollama", adaptive: true },
  { match: "scaleway", icon: "scaleway", label: "Scaleway", adaptive: true },
  { match: "sambanova", icon: "sambanova", label: "SambaNova", adaptive: true },
  { match: "groq", icon: "groq", label: "Groq", adaptive: true },
  { match: "llm7", icon: "llm7", label: "LLM7.io", adaptive: true },
  { match: "ovh", icon: "ovhcloud", label: "OVHcloud", adaptive: true },
  { match: "cerebras", icon: "cerebras", label: "Cerebras", adaptive: true },
  { match: "siliconflow", icon: "siliconflow", label: "SiliconFlow", adaptive: true },
  { match: "kilocode", icon: "kilocode", label: "Kilo Code", adaptive: true },
  { match: "nebius", icon: "nebius", label: "Nebius", adaptive: true },
  { match: "wandb", icon: "wandb", label: "Weights & Biases", adaptive: true },
  { match: "weightsandbiases", icon: "wandb", label: "Weights & Biases", adaptive: true },
  { match: "coreweave", icon: "wandb", label: "Weights & Biases", adaptive: true },
  { match: "agentrouter", icon: "agentrouter", label: "AgentRouter", adaptive: true },
  { match: "reflection", icon: "reflection", label: "Reflection AI" },
  { match: "puter", icon: "puter", label: "Puter", invertLight: true },
  { match: "synthetic", icon: "synthetic", label: "Synthetic", adaptive: true },
  { match: "ai21", icon: "ai21", label: "AI21 Labs", adaptive: true },
  { match: "aimlapi", icon: "aimlapi", label: "AI/ML API", adaptive: true },
  { match: "anyscale", icon: "anyscale", label: "Anyscale" },
  { match: "chutes", icon: "chutes", label: "Chutes", adaptive: true },
  { match: "cohere", icon: "cohere", label: "Cohere" },
  { match: "featherless", icon: "featherless", label: "Featherless AI" },
  { match: "glama", icon: "glama", label: "Glama", adaptive: true },
  { match: "hyperbolic", icon: "hyperbolic", label: "Hyperbolic" },
  { match: "inference", icon: "inference", label: "Inference.net", adaptive: true },
  { match: "pollinations", icon: "pollinations", label: "Pollinations", adaptive: true },
  // Vendors whose brand artwork was added later — Poolside (Laguna),
  // Inception Labs (Mercury), StepFun, Unbiased (Pareto / Union Alpha),
  // Callstack (Pixel Canary), TypeSafe AI (Jev), China Telecom's TeleAI
  // (Xing 4.0) and Thinking Machines Lab (Inkling).
  { match: "poolside", icon: "poolside", label: "Poolside", adaptive: true },
  { match: "laguna", icon: "poolside", label: "Poolside", adaptive: true },
  { match: "inception", icon: "inceptionlabs", label: "Inception Labs", adaptive: true },
  { match: "step", icon: "stepfun", label: "StepFun", adaptive: true },
  { match: "unbiased", icon: "unbiased", label: "Unbiased" },
  { match: "pareto", icon: "unbiased", label: "Unbiased" },
  { match: "union", icon: "unbiased", label: "Unbiased" },
  { match: "callstack", icon: "callstack", label: "Callstack", adaptive: true },
  { match: "typesafe", icon: "typesafe", label: "TypeSafe AI", adaptive: true },
  { match: "jev", icon: "typesafe", label: "TypeSafe AI", adaptive: true },
  { match: "xing", icon: "teleai", label: "China Telecom (TeleAI)" },
  { match: "inkling", icon: "thinkingmachines", label: "Thinking Machines Lab" },
  // Models that belong to a vendor already in the table but whose id/name
  // never carries the vendor token (stealth labels, tier aliases).
  { match: "ember", icon: "fireworks", label: "Fireworks AI", adaptive: true },
  { match: "beam", icon: "reflection", label: "Reflection AI" },
  { match: "cat", icon: "reflection", label: "Reflection AI" },
  { match: "bunny", icon: "minimax", label: "MiniMax" },
  { match: "ring", icon: "antgroup", label: "Ant Group" },
  { match: "ox", icon: "zai", label: "Z.ai", adaptive: true },
  // Anonymous stealth slots: the vendor is unknown or disputed, so the mark of
  // the platform serving them is the honest company reference.
  { match: "pickle", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "exo", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "fledge", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "flint", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "neomorph", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "omen", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "omi", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "owo", icon: "opencode", label: "OpenCode", adaptive: true },
  { match: "owl", icon: "openrouter", label: "OpenRouter" },
];

function vendorFor(id: string, name: string): VendorMatch | undefined {
  const norm = id.toLowerCase();
  const tokens = `${id} ${name}`.toLowerCase().split(/[^a-z0-9]+/);
  return VENDORS.find((v) =>
    v.slug ? v.slug === norm : Boolean(v.match) && tokens.some((t) => t.startsWith(v.match!)),
  );
}

export const VendorIcon = component$<VendorIconProps>(({ id, name, size = "sm" }) => {
  const large = size === "lg";
  const boxCls = large ? "h-8 w-8 shrink-0 md:h-9 md:w-9" : "h-5 w-5 shrink-0";
  const dim = large ? 36 : 20;
  const vendor = vendorFor(id, name);
  const entry = vendor ? VENDOR_ICON_SVGS[vendor.icon] : undefined;
  if (!vendor || !entry) {
    const glyph = name.charAt(0).toUpperCase();
    return (
      <svg viewBox="0 0 20 20" width={dim} height={dim} role="img" aria-label="Unknown vendor" class={boxCls}>
        <title>Unknown vendor</title>
        <polygon points="10,1 17.3,5.2 17.3,14.8 10,19 2.7,14.8 2.7,5.2" fill="#64748B" />
        <text x="10" y="10" dy="0.35em" text-anchor="middle" font-size="10" font-weight="bold" font-family="system-ui, sans-serif" fill="#ffffff">
          {glyph}
        </text>
      </svg>
    );
  }
  const html = `<title>${vendor.label}</title>${entry.body}`;
  if (vendor.chip) {
    const chipDim = large ? 26 : 14;
    return (
      <span class={`flex shrink-0 items-center justify-center rounded bg-slate-900 ${large ? "h-8 w-8 md:h-9 md:w-9" : "h-5 w-5"}`} title={vendor.label}>
        <svg
          viewBox={entry.viewBox}
          fill={entry.fill ?? undefined}
          width={chipDim}
          height={chipDim}
          role="img"
          aria-label={vendor.label}
          class={large ? "h-6 w-6 md:h-7 md:w-7" : "h-3.5 w-3.5"}
          dangerouslySetInnerHTML={html}
        />
      </span>
    );
  }
  return (
    <svg
      viewBox={entry.viewBox}
      fill={entry.fill ?? undefined}
      style={vendor.color ? { color: vendor.color } : undefined}
      width={dim}
      height={dim}
      role="img"
      aria-label={vendor.label}
      class={`${boxCls}${vendor.adaptive ? " text-slate-700 dark:text-slate-200" : ""}${vendor.invertLight ? " invert dark:invert-0" : ""}`}
      dangerouslySetInnerHTML={html}
    />
  );
});
