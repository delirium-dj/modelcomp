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
  /** White mark — invert in dark theme. */
  invertDark?: boolean;
  /** White mark — needs a dark chip to stay visible in light theme. */
  chip?: boolean;
}

// Token-prefix match over `${id} ${name}` lowercase, so e.g. "Inkling"
// never matches "ling". Artwork: free brand SVGs from thesvg.org
// (GLINCKER/thesvg, MIT), LobeHub icons (MIT) and Simple Icons (CC0);
// puter, synthetic and reflection are the vendors' own favicon SVGs,
// inlined from
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
  { match: "deepinfra", icon: "deepinfra", label: "DeepInfra", invertDark: true },
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
  { match: "scaleway", icon: "scaleway", label: "Scaleway", adaptive: true, invertDark: true },
  { match: "sambanova", icon: "sambanova", label: "SambaNova", adaptive: true },
  { match: "groq", icon: "groq", label: "Groq", adaptive: true },
  { match: "llm7", icon: "llm7", label: "LLM7.io", adaptive: true, invertDark: true },
  { match: "ovh", icon: "ovhcloud", label: "OVHcloud", adaptive: true, invertDark: true },
  { match: "cerebras", icon: "cerebras", label: "Cerebras", adaptive: true },
  { match: "siliconflow", icon: "siliconflow", label: "SiliconFlow", adaptive: true, invertDark: true },
  { match: "kilocode", icon: "kilocode", label: "Kilo Code", adaptive: true },
  { match: "nebius", icon: "nebius", label: "Nebius", adaptive: true },
  { match: "wandb", icon: "wandb", label: "Weights & Biases", adaptive: true, invertDark: true },
  { match: "weightsandbiases", icon: "wandb", label: "Weights & Biases", adaptive: true, invertDark: true },
  { match: "coreweave", icon: "wandb", label: "Weights & Biases", adaptive: true, invertDark: true },
  { match: "agentrouter", icon: "agentrouter", label: "AgentRouter", adaptive: true },
  { match: "reflection", icon: "reflection", label: "Reflection AI", adaptive: true },
  { match: "puter", icon: "puter", label: "Puter", invertLight: true },
  { match: "synthetic", icon: "synthetic", label: "Synthetic", adaptive: true },
  // OpenCode originals with their own brand marks.
  { match: "inkling", icon: "thinkingmachines", label: "Thinking Machines" },
  { match: "jev", icon: "typesafe", label: "Typesafe", adaptive: true },
  { match: "pareto", icon: "unbiased", label: "Unbiased", chip: true },
  { match: "union", icon: "unbiased", label: "Unbiased", chip: true },
  { slug: "opencode/step-5-preview", icon: "stepfun", label: "StepFun", adaptive: true },
  { match: "ring", icon: "antgroup", label: "Ant Group" },
  { match: "poolside", icon: "poolside", label: "Poolside" },
  { match: "laguna", icon: "poolside", label: "Poolside" },
  { match: "callstack", icon: "callstack", label: "CallStack", adaptive: true },
  { match: "inception", icon: "inceptionlabs", label: "Inception Labs", adaptive: true },
  { match: "mercury", icon: "inceptionlabs", label: "Inception Labs", adaptive: true },
  { match: "xing", icon: "teleai", label: "TeleAI" },
  // Providers / hosts without their own entry above.
  { match: "ai21", icon: "ai21", label: "AI21 Labs", adaptive: true },
  { match: "aimlapi", icon: "aimlapi", label: "AI/ML API", adaptive: true },
  { match: "aion", icon: "aionlabs", label: "Aion Labs", adaptive: true },
  { match: "a4f", icon: "a4f", label: "A4F" },
  { match: "portkey", icon: "portkey", label: "Portkey" },
  { match: "requesty", icon: "requesty", label: "Requesty" },
  { match: "anyscale", icon: "anyscale", label: "Anyscale" },
  { match: "baidu", icon: "baidu", label: "Baidu", adaptive: true, invertDark: true },
  { match: "chutes", icon: "chutes", label: "Chutes", adaptive: true },
  { match: "cohere", icon: "cohere", label: "Cohere" },
  { match: "databricks", icon: "databricks", label: "Databricks", adaptive: true, invertDark: true },
  { match: "deepgram", icon: "deepgram", label: "Deepgram" },
  { match: "fal", icon: "fal", label: "Fal", adaptive: true },
  { match: "featherless", icon: "featherless", label: "Featherless AI" },
  { match: "elevenlabs", icon: "elevenlabs", label: "ElevenLabs", adaptive: true, invertDark: true },
  { match: "friendli", icon: "friendli", label: "FriendliAI", adaptive: true },
  { match: "glama", icon: "glama", label: "Glama", adaptive: true },
  { match: "helicone", icon: "helicone", label: "Helicone" },
  { match: "hyperbolic", icon: "hyperbolic", label: "Hyperbolic" },
  { match: "inference", icon: "inference", label: "Inference.net", adaptive: true },
  { match: "jina", icon: "jina", label: "Jina AI", adaptive: true },
  { match: "lepton", icon: "lepton", label: "Lepton AI", adaptive: true },
  { match: "perplexity", icon: "perplexity", label: "Perplexity", adaptive: true, invertDark: true },
  { match: "pollinations", icon: "pollinations", label: "Pollinations", adaptive: true },
  { match: "replicate", icon: "replicate", label: "Replicate", adaptive: true, invertDark: true },
  { slug: "agnes-ai", icon: "agnes-ai", label: "Agnes AI" },
  { slug: "atlas-cloud", icon: "atlas-cloud", label: "Atlas Cloud" },
  { slug: "azure-ai-content-safety", icon: "azure-ai-content-safety", label: "Azure AI Content Safety" },
  { match: "bifrost", icon: "bifrost", label: "Bifrost" },
  { match: "braintrust", icon: "braintrust", label: "Braintrust" },
  { match: "brave", icon: "brave", label: "Brave", adaptive: true, invertDark: true },
  { match: "brave-search", icon: "brave", label: "Brave", adaptive: true, invertDark: true },
  { match: "exa", icon: "exa", label: "Exa" },
  { match: "firecrawl", icon: "firecrawl", label: "Firecrawl" },
  { match: "gladia", icon: "gladia", label: "Gladia" },
  { match: "glhf", icon: "glhf", label: "GLHF" },
  { match: "gonka", icon: "gonka", label: "Gonka" },
  { match: "grafana", icon: "grafana", label: "Grafana", adaptive: true },
  { match: "grafana-cloud", icon: "grafana", label: "Grafana", adaptive: true, invertDark: true },
  { match: "hetzner", icon: "hetzner", label: "Hetzner", adaptive: true, invertDark: true },
  { slug: "ibm-watsonx", icon: "ibm-watsonx", label: "IBM watsonx" },
  { match: "inclusionai", icon: "inclusionai", label: "InclusionAI" },
  { match: "kong", icon: "kong", label: "Kong", invertDark: true },
  { match: "kong-ai-gateway", icon: "kong", label: "Kong", invertDark: true },
  { match: "lakera", icon: "lakera", label: "Lakera", invertDark: true },
  { match: "lambda", icon: "lambda", label: "Lambda Labs" },
  { match: "laminar", icon: "laminar", label: "Laminar", adaptive: true },
  { match: "langfuse", icon: "langfuse", label: "Langfuse" },
  { match: "langsmith", icon: "langsmith", label: "LangSmith", adaptive: true },
  { match: "litellm", icon: "litellm", label: "LiteLLM" },
  { slug: "literal-ai", icon: "literal-ai", label: "Literal AI" },
  { match: "lyceum", icon: "lyceum", label: "Lyceum", invertLight: true },
  { match: "melious", icon: "melious", label: "Melious", adaptive: true },
  { match: "mixedbread", icon: "mixedbread", label: "Mixedbread" },
  { match: "modal", icon: "modal", label: "Modal", adaptive: true },
  { match: "modelscope", icon: "modelscope", label: "ModelScope", adaptive: true },
  { slug: "new-relic", icon: "newrelic", label: "New Relic", adaptive: true, invertDark: true },
  { slug: "nous-portal", icon: "nous-portal", label: "Nous Portal" },
  { match: "opik", icon: "opik", label: "Opik" },
  { match: "opper", icon: "opper", label: "Opper" },
  { match: "phoenix", icon: "phoenix", label: "Phoenix" },
  { match: "posthog", icon: "posthog", label: "PostHog", adaptive: true, invertDark: true },
  { match: "promptfoo", icon: "promptfoo", label: "Promptfoo" },
  { match: "promptlayer", icon: "promptlayer", label: "PromptLayer", adaptive: true },
  { match: "runpod", icon: "runpod", label: "RunPod", chip: true },
  { match: "signoz", icon: "signoz", label: "SigNoz" },
  { match: "tavily", icon: "tavily", label: "Tavily", invertDark: true },
  { match: "traceloop", icon: "traceloop", label: "Traceloop", adaptive: true },
  { match: "truefoundry", icon: "truefoundry", label: "TrueFoundry" },
  { match: "stepfun", icon: "stepfun", label: "StepFun", adaptive: true },
  { match: "unbiased", icon: "unbiased", label: "Unbiased", adaptive: true },
  // OpenCode originals with no brand mark: beam / big-pickle / cat-jam / ember /
  // exo-free / fledge-alpha / flint / neomorph / omi / owo / ox / space-bunny
  // pick up the OpenCode mark below; originals omen / owl have no brand SVG —
  // letter fallback. a4f / portkey / requesty have their own entries above.
  { match: "opencode", icon: "opencode", label: "OpenCode", adaptive: true },
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
      class={`${boxCls}${vendor.adaptive ? " text-slate-700 dark:text-slate-200" : ""}${vendor.invertLight ? " invert dark:invert-0" : ""}${vendor.invertDark ? " dark:invert" : ""}`}
      dangerouslySetInnerHTML={html}
    />
  );
});
