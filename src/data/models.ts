




// Scores are pre-parsed by `pnpm sync` (scripts/sync-data.mjs) from
// model/<slug>/ findings files (one per reporting agent) plus
// model/<slug>/average.md into src/data/scores.generated.ts (numbers only).
// Importing that instead of the raw markdown keeps full report prose out of
// the client bundle (the old eager ?raw glob inlined ~1.7 MB of markdown into
// a single ~1.8 MB chunk). Adding a new findings .md file needs NO code
// changes: re-run `pnpm sync` and its scores appear in that model's `sources`
// (hexagon, table, legend, cards) automatically on the next build. Meta
// (names, blurbs, context/pricing notes)
// stays curated in model/<slug>/meta.json files. To add a brand-new reporting agent, add one
// line to SourceKey + one entry to SOURCES; every model folder containing that
// agent's file is wired up automatically.

import { GENERATED_SCORES } from "./scores.generated";

export interface ModelScores {
  tool: number;
  reasoning: number;
  context: number;
  multimodal: number;
  coding: number;
  cost: number;
  overall: number;
}

/** Selectable results sources. `average` is the default view. */
export type SourceKey =
  | "average"
  | "big-pickle"
  | "Muse Spark 1.3"
  | "Ling 3.0 Flash Fin"
  | "Gemini 3.5 Flash Lite"
  | "Gemini 3.6 Flash"
  | "GLM 5.3 Flash"
  | "Ox Alpha"
  | "Claude Sonnet 4.6"
  | "DeepSeek 4.1 Flash"
  | "Solar Pro 4"
  | "MiniMax M3"
  | "GPT 5.6 Terra"
  | "Gemini 3.5 Flash"
  | "Claude Opus 4.6"
  | "Gemini 3.8 Flash"
  | "Grok 4.6"
  | "Gemini 3.7 Flash"
  | "Gemini 3.1 Pro"
  | "Laguna S 2.1"
  | "GLM 5.2 Coding"
  | "Mimo v2.6 Flash"
  | "code"
  | "tool"
  | "reason"
  | "context"
  | "cost"
  | "multi"
  | "Mimo v2.5 Free"
  | "Muse Spark 1.2"
  | "Gemini 3.1 Flash Lite"
  | "Claude Sonnet 4.5"
  | "Claude Sonnet 5"
  | "GPT 5.6 Luna"
  | "GPT 6 Sol"
  | "Gemini 1.5 Pro"
  | "Grok 4"
  | "Space Bunny Alpha"
  | "Qwen 3.8 27B"
  | "GLM 5.3"
  | "Kimi K3"
  | "Laguna XS 2.1"
  | "Muse Glimmer 30B"
  | "Grok 4.5"
  | "Claude Sonnet 4"
  | "Claude Sonnet 5.5"
  | "Gemini 2.5 Flash"
  | "Gemini 2.5 Pro"
  | "GPT 6 Astra"
  | "GPT 5.6 Sol"
  | "Gemma 4 31B IT"
  | "Claude Opus 4.5"
  | "Laguna XS 2 1"
  | "Claude Fable 5.1"
  | "Claude Opus 5.5"
  | "GPT 5"
  | "Gemini 2.0 Flash"
  | "Grok 4.3"
  | "Gemini 2.5 Flash Lite";

/**
 * Registry of reporting agents (key/label/file). Order here is NOT the dropdown
 * order -- SOURCES below is derived from scores, so a newly registered agent
 * slots itself into the dropdown automatically on the next build.
 */
const SOURCE_DEFS: { key: SourceKey; label: string; file: string }[] = [
  { key: "average", label: "Average", file: "average.md" },
  { key: "big-pickle", label: "Big Pickle", file: "Big_Pickle.md" },
  { key: "Muse Spark 1.3", label: "Muse Spark 1.3", file: "Muse_Spark_1.3.md" },
  { key: "Ling 3.0 Flash Fin", label: "Ling 3.0 Flash Fin", file: "Ling_3.0_Flash_Fin.md" },
  { key: "Gemini 3.5 Flash Lite", label: "Gemini 3.5 Flash Lite", file: "Gemini_3.5_Flash_Lite.md" },
  { key: "Gemini 3.6 Flash", label: "Gemini 3.6 Flash", file: "Gemini_3.6_Flash.md" },
  { key: "GLM 5.3 Flash", label: "GLM 5.3 Flash", file: "GLM_5.3_Flash.md" },
  { key: "Ox Alpha", label: "Ox Alpha", file: "Ox_Alpha.md" },
  { key: "Claude Sonnet 4.6", label: "Claude Sonnet 4.6", file: "Claude_Sonnet_4.6.md" },
  { key: "DeepSeek 4.1 Flash", label: "DeepSeek 4.1 Flash", file: "DeepSeek_4.1_Flash.md" },
  { key: "Solar Pro 4", label: "Solar Pro 4", file: "Solar_Pro_4.md" },
  { key: "MiniMax M3", label: "MiniMax M3", file: "MiniMax_M3.md" },
  { key: "GPT 5.6 Terra", label: "GPT 5.6 Terra", file: "GPT_5.6_Terra.md" },
  { key: "Gemini 3.5 Flash", label: "Gemini 3.5 Flash", file: "Gemini_3.5_Flash.md" },
  { key: "Claude Opus 4.6", label: "Claude Opus 4.6", file: "Claude_Opus_4.6.md" },
  { key: "Gemini 3.8 Flash", label: "Gemini 3.8 Flash", file: "Gemini_3.8_Flash.md" },
  { key: "Grok 4.6", label: "Grok 4.6", file: "Grok_4.6.md" },
  { key: "Gemini 3.7 Flash", label: "Gemini 3.7 Flash", file: "Gemini_3.7_Flash.md" },
  { key: "Gemini 3.1 Pro", label: "Gemini 3.1 Pro", file: "Gemini_3.1_Pro.md" },
  { key: "Laguna S 2.1", label: "Laguna S 2.1", file: "Laguna_S_2.1.md" },
  { key: "GLM 5.2 Coding", label: "GLM 5.2 Coding", file: "GLM_5.2_Coding.md" },
  { key: "Mimo v2.6 Flash", label: "MiMo V2.6 Flash", file: "Mimo_v2.6_Flash.md" },
  // Virtual sort views (not reporting agents): each mirrors average.md scores
  // and only changes the sort key (see VIRTUAL_VIEWS below). `pnpm sync`
  // ignores them (file is average.md).
  { key: "tool", label: "Tool", file: "average.md" },
  { key: "reason", label: "Reason", file: "average.md" },
  { key: "context", label: "Context", file: "average.md" },
  { key: "cost", label: "Cost", file: "average.md" },
  { key: "code", label: "Code", file: "average.md" },
  { key: "multi", label: "Multi", file: "average.md" },
  { key: "Mimo v2.5 Free", label: "MiMo V2.5 Free", file: "Mimo_v2.5_Free.md" },
  { key: "Muse Spark 1.2", label: "Muse Spark 1.2", file: "Muse_Spark_1.2.md" },
  { key: "Gemini 3.1 Flash Lite", label: "Gemini 3.1 Flash Lite", file: "Gemini_3.1_Flash_Lite.md" },
  { key: "Claude Sonnet 4.5", label: "Claude Sonnet 4.5", file: "Claude_Sonnet_4.5.md" },
  { key: "Claude Sonnet 5", label: "Claude Sonnet 5", file: "Claude_Sonnet_5.md" },
  { key: "GPT 5.6 Luna", label: "GPT 5.6 Luna", file: "GPT_5.6_Luna.md" },
  { key: "GPT 6 Sol", label: "GPT 6 Sol", file: "GPT_6_Sol.md" },
  { key: "Gemini 1.5 Pro", label: "Gemini 1.5 Pro", file: "Gemini_1.5_Pro.md" },
  { key: "Grok 4", label: "Grok 4", file: "Grok_4.md" },
  { key: "Space Bunny Alpha", label: "Space Bunny Alpha", file: "Space_Bunny_Alpha.md" },
  { key: "Qwen 3.8 27B", label: "Qwen 3.8 27B", file: "Qwen_3.8_27B.md" },
  { key: "GLM 5.3", label: "GLM 5.3", file: "GLM_5.3.md" },
  { key: "Kimi K3", label: "Kimi K3", file: "Kimi_K3.md" },
  { key: "Laguna XS 2.1", label: "Laguna XS 2.1", file: "Laguna_XS_2.1.md" },
  { key: "Muse Glimmer 30B", label: "Muse Glimmer 30B", file: "Muse_Glimmer_30B.md" },
  { key: "Grok 4.5", label: "Grok 4.5", file: "Grok_4.5.md" },
  { key: "Claude Sonnet 4", label: "Claude Sonnet 4", file: "Claude_Sonnet_4.md" },
  { key: "Claude Sonnet 5.5", label: "Claude Sonnet 5.5", file: "Claude_Sonnet_5.5.md" },
  { key: "Gemini 2.5 Flash", label: "Gemini 2.5 Flash", file: "Gemini_2.5_Flash.md" },
  { key: "Gemini 2.5 Pro", label: "Gemini 2.5 Pro", file: "Gemini_2.5_Pro.md" },
  { key: "GPT 6 Astra", label: "GPT 6 Astra", file: "GPT_6_Astra.md" },
  { key: "GPT 5.6 Sol", label: "GPT 5.6 Sol", file: "GPT_5.6_Sol.md" },
  { key: "Gemma 4 31B IT", label: "Gemma 4 31B IT", file: "Gemma_4_31B_IT.md" },
  { key: "Claude Opus 4.5", label: "Claude Opus 4.5", file: "Claude_Opus_4.5.md" },
  { key: "Laguna XS 2 1", label: "Laguna XS 2 1", file: "Laguna_XS_2_1.md" },
  { key: "Claude Fable 5.1", label: "Claude Fable 5.1", file: "Claude_Fable_5.1.md" },
  { key: "Claude Opus 5.5", label: "Claude Opus 5.5", file: "Claude_Opus_5.5.md" },
  { key: "GPT 5", label: "GPT 5", file: "GPT_5.md" },
  { key: "Gemini 2.0 Flash", label: "Gemini 2.0 Flash", file: "Gemini_2.0_Flash.md" },
  { key: "Grok 4.3", label: "Grok 4.3", file: "Grok_4.3.md" },
  { key: "Gemini 2.5 Flash Lite", label: "Gemini 2.5 Flash Lite", file: "Gemini_2.5_Flash_Lite.md" },
];

export interface AiModel {
  id: string;
  name: string;
  short: string;
  /** Filesystem-safe folder name under model/ (NOT the provider id). */
  slug: string;
  /** Averaged scores (default view). */
  scores: ModelScores;
  /** Per-source score sets; the results selector swaps `scores` for one of these. */
  sources: Partial<Record<SourceKey, ModelScores>>;
  meta: {
    contextWindow: string;
    modalities: string;
    pricingNote: string;
    /** Free tier note / description explaining how free tier is obtained */
    freeTierNote?: string;
    /** One line per pricing tier, shown stacked in the compare table. */
    pricingTiers?: string[];
    /** True when no Zen Free ID exists; cost is scored on paid pricing. */
    noFreeId?: boolean;
  };
}

function hydrateModel(slug: string, meta: MetaFile): AiModel | null {
  // Scores arrive pre-parsed from scores.generated.ts (emitted by `pnpm sync`,
  // which is the strict gate that validates every file). A model simply lacks
  // sources it has no file for.
  const files = GENERATED_SCORES[slug] || {};
  const sources: Partial<Record<SourceKey, ModelScores>> = {};
  for (const s of SOURCE_DEFS) {
    const sc = files[s.file];
    if (sc === undefined) continue;
    sources[s.key] = {
      tool: sc.tool,
      reasoning: sc.reasoning,
      context: sc.context,
      multimodal: sc.multimodal,
      coding: sc.coding,
      cost: sc.cost,
      overall: sc.overall,
    };
  }
  const avg = sources.average;
  if (!avg) {
    console.warn(`[models] model/${slug}/: no usable average.md — skipped (run pnpm sync)`);
    return null;
  }
  return {
    id: meta.id,
    name: meta.name,
    short: meta.short,
    slug,
    scores: avg,
    sources,
    meta: {
      contextWindow: meta.contextWindow,
      modalities: meta.modalities,
      pricingNote: meta.pricingNote,
      pricingTiers: meta.pricingTiers,
      freeTierNote: meta.freeTierNote,
      noFreeId: meta.noFreeId,
    },
  };
}

/** Fixed axis order, clockwise from top of the hexagon. */
export const DIMENSIONS = [
  {
    key: "tool",
    label: "Tool use",
    short: "Tool",
    description: "Performance on agent benchmarks like Terminal-Bench, Tau3, and Claw-Eval.",
  },
  {
    key: "reasoning",
    label: "Reasoning",
    short: "Reason",
    description:
      "Ability to solve complex, multi-step problems, based on reasoning benchmarks. Higher reasoning results score higher.",
  },
  {
    key: "context",
    label: "Context window",
    short: "Context",
    description: "How much input the model can process at once. Larger context windows score higher.",
  },
  {
    key: "cost",
    label: "Cost efficiency",
    short: "Cost",
    description: "Relative input and output pricing. Lower-cost models score higher.",
  },
  {
    key: "coding",
    label: "Coding",
    short: "Code",
    description:
      "Performance on software engineering and coding benchmarks. Stronger coding ability scores higher.",
  },
  {
    key: "multimodal",
    label: "Multimodal",
    short: "Multi",
    description: "Support for non-text input and output, including images, audio, and video.",
  },
] as const;

export type DimensionKey = (typeof DIMENSIONS)[number]["key"];

/** Series colors for Model A / B / C slots. */
export const MODEL_COLORS = ["#4f46e5", "#059669", "#d97706"];


/** Validated contents of one model/<slug>/meta.json file. */
interface MetaFile {
  id: string;
  name: string;
  short: string;
  contextWindow: string;
  modalities: string;
  pricingNote: string;
  pricingTiers?: string[];
  freeTierNote?: string;
  noFreeId?: boolean;
}

const META_REQUIRED = ["id", "name", "short", "contextWindow", "modalities", "pricingNote"] as const;

/** Curated metadata, one file per model folder. Keys look like "../../model/big-pickle/meta.json". */
const metaModules = import.meta.glob("../../model/*/meta.json", {
  eager: true,
  import: "default",
}) as Record<string, unknown>;

function loadMetas(): { slug: string; meta: MetaFile }[] {
  const entries: { slug: string; meta: MetaFile }[] = [];
  const seenIds = new Set<string>();
  for (const path of Object.keys(metaModules)) {
    const m = path.match(/^\.\.\/\.\.\/model\/([^/]+)\/meta\.json$/);
    if (!m) throw new Error(`[models] unexpected meta path: ${path}`);
    const slug = m[1];
    const meta = metaModules[path] as Partial<MetaFile>;
    let valid = true;
    for (const k of META_REQUIRED) {
      if (typeof meta[k] !== "string" || (meta[k] as string).length === 0) {
        // Warn-and-skip (never throw): in-progress research must not break the build.
        // `pnpm sync` fails loudly on the same problem, so it still gets fixed.
        console.warn(`[models] model/${slug}/meta.json: missing required field "${k}" — skipped`);
        valid = false;
      }
    }
    if (!valid) continue;
    const id = meta.id as string;
    if (seenIds.has(id)) {
      console.warn(`[models] duplicate model id: ${id} — keeping first occurrence`);
      continue;
    }
    seenIds.add(id);
    entries.push({ slug, meta: meta as MetaFile });
  }
  entries.sort((a, b) => (a.meta.id < b.meta.id ? -1 : a.meta.id > b.meta.id ? 1 : 0));
  return entries;
}

/**
 * Hydrated models, sorted by id for determinism. Scores/sources come from
 * scores.generated.ts (emitted by `pnpm sync`); metadata comes from
 * model/<slug>/meta.json. Adding a model = add a folder + re-run sync.
 * Folders without usable data are skipped with a warning (never a build break);
 * `pnpm sync` is the strict gate that flags them for completion.
 */
export const MODELS: AiModel[] = (() => {
  const metas = loadMetas();
  const metaBySlug = new Map(metas.map((e) => [e.slug, e.meta] as const));
  for (const slug of Object.keys(GENERATED_SCORES)) {
    if (!metaBySlug.has(slug)) {
      console.warn(`[models] model/${slug}/ has findings but no meta.json — skipped (add one, schema in model/README.md)`);
    }
  }
  const models: AiModel[] = [];
  for (const e of metas) {
    const m = hydrateModel(e.slug, e.meta);
    if (m) models.push(m);
  }
  return models;
})();

/**
 * Virtual sort views for the results-source dropdown. Each entry mirrors the
 * average scores and only changes the ranking key (hexagon, legend, table and
 * All-models cards all follow it). Order here is the dropdown order of the
 * virtual views (canonical DIMENSIONS order); real reporting agents rank below
 * by own average overall. Not reporting agents -- never counted as such.
 */
export const VIRTUAL_VIEWS: { key: SourceKey; label: string; dim: DimensionKey }[] = [
  { key: "tool", label: "Tool", dim: "tool" },
  { key: "reason", label: "Reason", dim: "reasoning" },
  { key: "context", label: "Context", dim: "context" },
  { key: "cost", label: "Cost", dim: "cost" },
  { key: "code", label: "Code", dim: "coding" },
  { key: "multi", label: "Multi", dim: "multimodal" },
];

/** Sort dimension for a virtual view, or undefined for Average / reporting agents. */
export function virtualDimFor(source: SourceKey): DimensionKey | undefined {
  return VIRTUAL_VIEWS.find((v) => v.key === source)?.dim;
}

/**
 * Reporting-agent key -> model slug of that same agent, for cross-linking
 * ("how other models rate the competition") and for ranking the results-source
 * dropdown by each rater's own average Overall. Extend when registering a
 * source whose agent is also a tracked model; agents without an entry link to
 * the homepage source view (`/?source=`) instead and rank by fallback (see below).
 * NOTE: declared before SOURCES -- the dropdown derivation reads it at module
 * load, so it must not move below.
 */
export const AGENT_MODEL_SLUG: Partial<Record<SourceKey, string>> = {
  "big-pickle": "big-pickle",
  "Muse Spark 1.3": "muse-spark-1.3-free",
  "Ling 3.0 Flash Fin": "ling-3.0-flash-fin-free",
  "Gemini 3.5 Flash Lite": "gemini-3.5-flash-lite",
  "Gemini 3.6 Flash": "gemini-3.6-flash",
  "GLM 5.3 Flash": "glm-5.3-flash",
  "GLM 5.2 Coding": "glm-5.2-coding",
  "Ox Alpha": "ox_alpha",
  "Claude Sonnet 4.6": "claude-sonnet-4.6",
  "DeepSeek 4.1 Flash": "deepseek-v4.1-flash",
  "Solar Pro 4": "solar-pro-4",
  "MiniMax M3": "minimax-m3",
  "GPT 5.6 Terra": "gpt-5.6-terra",
  "Gemini 3.5 Flash": "gemini-3.5-flash",
  "Claude Opus 4.6": "claude-opus-4.6",
  "Gemini 3.8 Flash": "gemini-3.8-flash",
  "Grok 4.6": "grok-4.6",
  "Gemini 3.7 Flash": "gemini-3.7-flash",
  "Gemini 3.1 Pro": "gemini-3.1-pro",
  "Laguna S 2.1": "laguna-s-2.1",
  "Mimo v2.6 Flash": "mimo-v2.6-free",
  "Mimo v2.5 Free": "mimo-v2.5-free",
  "Muse Spark 1.2": "muse-spark-1.2-free",
  "Gemini 3.1 Flash Lite": "gemini-3.1-flash-lite",
  "Claude Sonnet 5": "claude-sonnet-5",
  "GPT 5.6 Luna": "gpt-5.6-luna",
  "GPT 6 Sol": "gpt-6-sol",
  "Grok 4": "grok-4",
  "Gemini 1.5 Pro": "gemini-1.5-pro",
  "Qwen 3.8 27B": "qwen-3.8-27b",
  "GLM 5.3": "glm-5.3",
  "Kimi K3": "kimi-k3",
  "Space Bunny Alpha": "space-bunny-alpha",
  "Muse Glimmer 30B": "muse-glimmer-30b",
  "Laguna XS 2.1": "laguna-xs-2.1",
  "Claude Sonnet 4.5": "claude-sonnet-4.5",
};

/**
 * Dropdown ranking metric for a reporting agent: its own average Overall --
 * the same number the All-models cards show. Raters rank by proven quality,
 * never by the highest score they hand out (a weak rater's inflated award
 * must not float it above frontier raters). A source with no tracked agent
 * model falls back to the highest overall it awards any model, so a newly
 * registered agent still slots in visibly instead of sinking to the bottom.
 */
function sourceRankOverall(key: SourceKey): number {
  const slug = AGENT_MODEL_SLUG[key];
  if (slug !== undefined) {
    const agent = MODELS.find((m) => m.slug === slug);
    if (agent !== undefined) return agent.scores.overall;
  }
  let max = -Infinity;
  for (const m of MODELS) {
    const s = m.sources[key];
    if (s !== undefined && s.overall > max) max = s.overall;
  }
  return max;
}

/**
 * Results-source dropdown order, derived -- not curated. Average stays first and
 * is the default view; the virtual sort views (same numbers as Average, ranked
 * by one dimension -- see VIRTUAL_VIEWS) follow in canonical DIMENSIONS order
 * by design; every other source is a reporting agent ranked by its own average
 * Overall -- the All-models number (see sourceRankOverall; stable sort, so
 * ties keep registry order).
 * A newly registered source slots itself in automatically -- never hand-sort.
 */
export const SOURCES: { key: SourceKey; label: string; file: string }[] = (() => {
  const averageDef = SOURCE_DEFS.find((s) => s.key === "average");
  if (!averageDef) throw new Error("[models] SOURCE_DEFS is missing the average entry");
  const virtualKeys = new Set<SourceKey>(VIRTUAL_VIEWS.map((v) => v.key));
  const virtualDefs = VIRTUAL_VIEWS.map((v) => SOURCE_DEFS.find((s) => s.key === v.key)).filter(
    (d): d is { key: SourceKey; label: string; file: string } => d !== undefined,
  );
  const rest = SOURCE_DEFS.filter((s) => s.key !== "average" && !virtualKeys.has(s.key)).sort(
    (a, b) => sourceRankOverall(b.key) - sourceRankOverall(a.key),
  );
  return [averageDef, ...virtualDefs, ...rest];
})();

export function getModel(id: string): AiModel | undefined {
  return MODELS.find((m) => m.id === id);
}

/** Dev check: every source's overall must sit within rounding distance of its
 * quality-dim mean (each source overall is a rounded mean of the five quality
 * dimensions — Cost efficiency is scored separately and never counts toward
 * Overall — so it can legitimately differ from that mean by up to 0.5). */
export function checkOverallScores(): void {
  for (const m of MODELS) {
    (Object.keys(m.sources) as SourceKey[]).forEach((key) => {
      const s = m.sources[key];
      if (!s) return;
      const mean = (s.tool + s.reasoning + s.context + s.multimodal + s.coding) / 5;
      if (Math.abs(mean - s.overall) > 0.51) {
        console.warn(`[models] overall mismatch for ${m.id} (${key}): file=${s.overall} dim-mean=${mean.toFixed(2)}`);
      }
    });
  }
}

if (import.meta.env.DEV) {
  checkOverallScores();
}
