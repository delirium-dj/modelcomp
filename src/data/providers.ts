// Provider (seller / console) data is curated in providers/<slug>/meta.json —
// one file per provider — and loaded here at build time via import.meta.glob,
// the same pattern models.ts uses for model metas. This folder is NOT scanned
// by `pnpm sync`; the website build is the only consumer.
//
// The "models offered" list is derived, never curated: a model matches a
// provider when its id starts with one of the provider's `idPrefixes`, or one
// of its claimant URLs (officialUrl / pricingLinks) lives on one of the
// provider's `hosts`. The free-tier flag is derived the same way from the
// curated plans (name says free / price is $0) — never a separate hand flag.
// Every price on the Providers page traces to an evidenceUrl, mirroring the
// claim culture of model metas (RULES.md).

import { MODELS, type AiModel } from "./models";

export interface ProviderPlan {
  name: string;
  price: string;
  notes?: string;
  evidenceUrl?: string;
}

/** Provider kind: `vendor` sells its own models, `aggregator` bills others'. */
export type ProviderKind = "vendor" | "aggregator";

export interface ProviderMeta {
  name: string;
  kind?: string;
  short: string;
  officialUrl?: string;
  hosts?: string[];
  idPrefixes?: string[];
  /** Model slugs the provider sells, for catalogs model metas do not cite. */
  covers?: string[];
  /** Official catalog page backing `covers` (claim culture). */
  catalogUrl?: string;
  /** Parked provider: folder stays on disk/git, card hidden from the site
   * (providers/README.md § Parked). */
  retired?: boolean;
  plans: ProviderPlan[];
}

export type ProviderCategory =
  | "coding-moe"
  | "gpu"
  | "audio-speech"
  | "video"
  | "search"
  | "observability-security"
  | "everything-else";

export interface Provider extends ProviderMeta {
  /** Folder name under providers/ — the canonical key. */
  slug: string;
  kind: ProviderKind;
  /** Covered models (derived from MODELS), best Overall first. */
  models: AiModel[];
  /** Plans that read as a free tier (name says free / price is $0). */
  freePlans: ProviderPlan[];
  /** True when at least one plan is free — `freePlans.length > 0`. */
  freeTier: boolean;
  /** Functional category: coding-moe, gpu, audio-speech, video, search, observability-security, or everything-else. */
  category: ProviderCategory;
}

const GPU_PROVIDER_SLUGS = new Set([
  "runpod",
  "lambda",
  "hyperbolic",
  "modal",
  "baseten",
  "deepinfra",
  "novita-ai",
  "scaleway",
  "together-ai",
  "nebius-builder",
  "replicate",
  "chutes",
  "anyscale",
  "lepton",
  "hetzner",
]);

export function getProviderCategory(
  meta: ProviderMeta,
  slug: string,
): ProviderCategory {
  const text = `${meta.short} ${meta.name} ${slug}`.toLowerCase();
  const fullText = `${text} ${JSON.stringify(meta.plans || [])}`.toLowerCase();

  // Category 3: Audio / speech
  if (
    ["deepgram", "elevenlabs", "gladia"].includes(slug) ||
    /speech-to-text|text-to-speech|\baudio intelligence\b|\bstt\b|\btts\b|\btranscription\b/i.test(
      text,
    )
  ) {
    return "audio-speech";
  }

  // Category 4: Video
  if (
    ["fal", "atlas-cloud"].includes(slug) ||
    /\bvideo generation\b|\bvideo model\b|\btext-to-video\b|\bgenerative video\b/i.test(
      text,
    )
  ) {
    return "video";
  }

  // Category 5: Web grounding search (e.g. Exa, Tavily, Brave Search)
  if (
    ["exa", "tavily", "brave-search", "firecrawl"].includes(slug) ||
    /search api|web search|grounding search|web index/i.test(text)
  ) {
    return "search";
  }

  // Category 6: LLM observability/security tooling
  if (
    [
      "promptfoo",
      "langfuse",
      "langsmith",
      "braintrust",
      "literal-ai",
      "opik",
      "phoenix",
      "signoz",
      "grafana-cloud",
      "posthog",
      "promptlayer",
      "helicone",
      "portkey",
      "traceloop",
      "lakera",
      "azure-ai-content-safety",
      "google-model-armor",
      "new-relic",
      "laminar",
    ].includes(slug) ||
    /observability|tracing|evaluation|llm security|guardrail|armor|safety|prompt injection|jailbreak|red teaming/i.test(
      text,
    )
  ) {
    return "observability-security";
  }

  // Category 2: On-demand GPU
  if (
    GPU_PROVIDER_SLUGS.has(slug) ||
    /on-demand gpu|gpu cluster|bare-metal|rent.*gpu|serverless gpu|gpu instance|gpu cloud|gpu infrastructure|per gpu-hour/i.test(
      fullText,
    )
  ) {
    return "gpu";
  }

  // Category 7: Everything else (e.g. neural translation like DeepL, embeddings like Voyage, Jina, RAG tooling like Mixedbread)
  if (
    [
      "deepl",
      "voyage",
      "jina",
      "mixedbread",
      "stepfun",
      "ai21",
      "cohere",
      "friendliai",
      "glama",
      "inference-net",
      "opper",
      "truefoundry",
    ].includes(slug) ||
    /translation|neural translation|embedding|rerank/i.test(text)
  ) {
    return "everything-else";
  }

  // Category 1: Providers offering models with coding & MoE abilities (Frontier LLM labs, coding engines & multi-model gateways)
  return "coding-moe";
}

const REQUIRED = ["name", "short", "plans"] as const;

function warnOnce(msg: string): void {
  // Deduped per process: this module is re-evaluated per build environment
  // (SSR, client, SSG) and must not spam (same pattern as models.ts).
  const seen = (warnOnce as unknown as { s?: Set<string> }).s ?? new Set<string>();
  if (seen.has(msg)) return;
  seen.add(msg);
  (warnOnce as unknown as { s?: Set<string> }).s = seen;
  console.warn(msg);
}

const providerModules = import.meta.glob("../../providers/*/meta.json", {
  eager: true,
  import: "default",
}) as Record<string, unknown>;

function hostOf(url: string): string | undefined {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

/**
 * Free-tier marker for one plan: the name says "free" (a "no free …" clause
 * does not count) or the price is `$0`. Cached prices like `$0.10` must not
 * read as free — same evidence-first idea as `hasFreeTier()` for models.
 */
const FREE_PRICE = /^\$\s?0(?:\.0+)?\s*(?:$|[^.\d])/;

export function isFreePlan(plan: ProviderPlan): boolean {
  if (/\bfree\b/i.test(plan.name.replace(/\bno\s+free\b/gi, ""))) return true;
  return FREE_PRICE.test(plan.price);
}

function matchModels(meta: ProviderMeta): AiModel[] {
  const prefixes = meta.idPrefixes ?? [];
  const hosts = new Set(meta.hosts ?? []);
  const matched = new Map<string, AiModel>();
  for (const m of MODELS) {
    const prefix = m.id.split("/")[0];
    if (prefixes.includes(prefix)) {
      matched.set(m.slug, m);
      continue;
    }
    const urls = [m.meta.officialUrl, ...(m.meta.pricingLinks ?? [])];
    if (urls.some((u) => u && hostOf(u) && hosts.has(hostOf(u)!))) matched.set(m.slug, m);
  }
  if (meta.covers?.length) {
    const bySlug = new Map(MODELS.map((m) => [m.slug, m]));
    for (const slug of meta.covers) {
      const m = bySlug.get(slug);
      if (m) matched.set(m.slug, m);
      else warnOnce(`[providers] covers references unknown model slug "${slug}" — ignored`);
    }
  }
  return [...matched.values()].sort(
    (a, b) => b.scores.overall - a.scores.overall || (a.name < b.name ? -1 : 1),
  );
}

const PROVIDER_MODULES = Object.entries(providerModules) as [string, unknown][];

export const PROVIDERS: Provider[] = (() => {
  const raw: { slug: string; meta: ProviderMeta }[] = [];
  const seenSlugs = new Set<string>();
  for (const [path, value] of PROVIDER_MODULES) {
    const m = path.match(/^\.\.\/\.\.\/providers\/([^/]+)\/meta\.json$/);
    if (!m) throw new Error(`[providers] unexpected meta path: ${path}`);
    const slug = m[1];
    const meta = value as Partial<ProviderMeta>;
    if (meta.retired === true) {
      warnOnce(`[providers] providers/${slug}/meta.json: retired — parked, hidden from the site`);
      continue;
    }
    let valid = true;
    for (const k of REQUIRED) {
      if (meta[k] === undefined) {
        warnOnce(`[providers] providers/${slug}/meta.json: missing required field "${k}" — skipped`);
        valid = false;
      }
    }
    if (!Array.isArray(meta.plans) || meta.plans.length === 0) {
      warnOnce(`[providers] providers/${slug}/meta.json: "plans" must be a non-empty array — skipped`);
      valid = false;
    }
    if (valid && seenSlugs.has(slug)) {
      warnOnce(`[providers] duplicate provider slug: ${slug} — keeping first occurrence`);
      valid = false;
    }
    seenSlugs.add(slug);
    if (!valid) continue;
    raw.push({ slug, meta: meta as ProviderMeta });
  }
  const providers = raw.map(({ slug, meta }) => {
    const freePlans = meta.plans.filter(isFreePlan);
    return {
      ...meta,
      slug,
      kind: meta.kind === "aggregator" ? ("aggregator" as const) : ("vendor" as ProviderKind),
      plans: meta.plans,
      freePlans,
      freeTier: freePlans.length > 0,
      category: getProviderCategory(meta, slug),
      models: matchModels(meta),
    };
  });
  // Page reading order: free-tier providers first, then most covered models
  // first (the Providers page renders exactly these two groups).
  providers.sort(
    (a, b) =>
      Number(b.freeTier) - Number(a.freeTier) ||
      b.models.length - a.models.length ||
      (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
  );
  return providers;
})();

/** Free-tier providers, most covered models first. */
export const FREE_TIER_PROVIDERS = PROVIDERS.filter((p) => p.freeTier);

/** No free plan, most covered models first. */
export const PAID_ONLY_PROVIDERS = PROVIDERS.filter((p) => !p.freeTier);

/** Category 1: Providers offering models with coding and MoE ability (frontier foundation models & coding engines). */
export const CODING_MOE_PROVIDERS = PROVIDERS.filter(
  (p) => p.category === "coding-moe",
);

/** Category 2: On-demand GPU and compute clouds. */
export const GPU_PROVIDERS = PROVIDERS.filter((p) => p.category === "gpu");

/** Category 3: Audio / Speech. */
export const AUDIO_SPEECH_PROVIDERS = PROVIDERS.filter(
  (p) => p.category === "audio-speech",
);

/** Category 4: Video. */
export const VIDEO_PROVIDERS = PROVIDERS.filter(
  (p) => p.category === "video",
);

/** Category 5: Web grounding search (e.g. Exa, Tavily, Brave Search). */
export const SEARCH_PROVIDERS = PROVIDERS.filter(
  (p) => p.category === "search",
);

/** Category 6: LLM observability/security tooling. */
export const OBSERVABILITY_SECURITY_PROVIDERS = PROVIDERS.filter(
  (p) => p.category === "observability-security",
);

/** Category 7: Everything else (e.g. neural translation, embeddings, RAG tools). */
export const EVERYTHING_ELSE_PROVIDERS = PROVIDERS.filter(
  (p) => p.category === "everything-else",
);

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}


