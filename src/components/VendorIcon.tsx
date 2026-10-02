import { component$ } from "@builder.io/qwik";
import { VENDOR_ICON_SVGS } from "../data/vendorIcons.generated";

interface VendorIconProps {
  id: string;
  name: string;
  /** "sm" (default, 20px — lists/cards) or "lg" (matches text-3xl/4xl page headings). */
  size?: "sm" | "lg";
}

interface VendorMatch {
  match: string;
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
// (GLINCKER/thesvg, MIT; trademarks belong to their owners), inlined from
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
  { match: "qwen", icon: "qwen", label: "Qwen", invertLight: true },
  { match: "kimi", icon: "kimi", label: "Moonshot AI" },
  { match: "moonshot", icon: "moonshot", label: "Moonshot AI", adaptive: true },
  { match: "minimax", icon: "minimax", label: "MiniMax" },
  { match: "llama", icon: "meta", label: "Meta" },
  { match: "muse", icon: "meta", label: "Meta" },
  { match: "meta", icon: "meta", label: "Meta" },
  { match: "nemotron", icon: "nvidia", label: "NVIDIA" },
  { match: "mistral", icon: "mistral", label: "Mistral" },
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
  // laguna / poolside have no free brand SVG — letter fallback below.
];

function vendorFor(id: string, name: string): VendorMatch | undefined {
  const tokens = `${id} ${name}`.toLowerCase().split(/[^a-z0-9]+/);
  return VENDORS.find((v) => tokens.some((t) => t.startsWith(v.match)));
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
