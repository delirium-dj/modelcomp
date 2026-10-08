// Pure naming / slug-convention helpers for modelcomp sync.
// Zero dependencies. Covered by naming.test.mjs.
//
// Filename stem -> display key -> model-page slug is the fragile pipeline.
// These pure functions are the contract (no hidden state, no fs calls);
// sync-data.mjs supplies the live catalog (meta.json scan) and SOURCE_OVERRIDES.

/** Case/punctuation-folded comparison (deep-links, catalog matching). */
export const normName = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Findings-file stem -> source key, e.g. Gemini_3.6_Flash -> "Gemini 3.6 Flash". */
export const stemToKey = (stem) => stem.replace(/_/g, " ");

/**
 * Display-label hyphenation for OpenAI GPT models. Official vendor style is
 * hyphenated ("GPT-5.6 Terra", "GPT-OSS 120B" — see openai.com/index/gpt-5-1/,
 * openai.com/index/gpt-4, API IDs like `gpt-5.4-2026-03-05`), never
 * "GPT 5.6 Terra". Filename stems keep underscores (`GPT_5.6_Terra.md` —
 * RULES.md permanence, files are never renamed) and registry keys stay
 * stem-derived (spaces) so SourceKeys and `?source=` deep links never churn;
 * only the human-facing label hyphenates. Non-GPT names (incl. voice product
 * names like "GPT Realtime 2") pass through untouched.
 */
export const formatGptLabel = (label) =>
  label.replace(/^GPT OSS(?=\s|$)/, "GPT-OSS").replace(/^GPT (?=\d)/, "GPT-");

/** Findings filename -> Agreement-notes label. */
export const labelOf = (file) => formatGptLabel(file.replace(/\.md$/, "").replace(/_/g, " "));

/**
 * Resolve display label + model-page slug for a source key.
 * `overrides` is SOURCE_OVERRIDES; `catalogLookup` maps a normalized key to
 * its folder slug (null/undefined when the agent has no tracked model page).
 */
export function resolveSourceMeta(key, overrides, catalogLookup) {
  const ov = overrides[key];
  const label = ov?.label ?? formatGptLabel(key);
  const slug = ov?.slug ?? catalogLookup(normName(key)) ?? undefined;
  return { label, slug };
}

/**
 * Slug exceptions: match digit-hyphen-digit but are NOT hyphen versions.
 * Param sizes: `gemma-4-31b` ("4" + 31B params), `qwen-3.8-27b`,
 * `qwen-3.5-9b` and `qwen-3.5-397b` (version + *B params — the hit is
 * version-digit → param-digit).
 */
export const SLUG_VERSION_EXCEPTION = new Set(["gemma-4-31b", "qwen-3.8-27b", "qwen-3.5-9b", "qwen-3.5-397b"]);

/**
 * Canonical slug normalizer (single source of truth — RULES.md slug identity).
 * Version numbers use "." not "-": every digit-hyphen-digit join becomes a
 * dot (`gpt-5-6-terra` → `gpt-5.6-terra`, `gemma-4-12b-unified` →
 * `gemma-4.12b-unified`). Param-size exceptions pass through untouched.
 * Always run a freshly derived slug through this before creating a folder
 * or comparing against on-disk slugs.
 */
export function normalizeSlug(slug, exceptions = SLUG_VERSION_EXCEPTION) {
  if (exceptions.has(slug)) return slug;
  return slug.replace(/(\d)-(?=\d)/g, "$1.");
}

/**
 * Hyphen-version gate (see model/README.md): version numbers use "." not "-".
 * Returns the dotted suggestion, or null when the slug is fine.
 */
export function hyphenVersionViolation(slug, exceptions = SLUG_VERSION_EXCEPTION) {
  const next = normalizeSlug(slug, exceptions);
  return next !== slug ? next : null;
}

/**
 * Stem exceptions: match digit-underscore-digit but are NOT underscore
 * versions — param sizes inside rater names, mirroring SLUG_VERSION_EXCEPTION
 * (`Gemma_4_31B_IT` = "4" + 31B params, `Qwen_3.8_27B` = version 3.8 + 27B
 * params; the "8_2" hit is version-digit → param-digit).
 */
export const STEM_VERSION_EXCEPTION = new Set(["Gemma_4_31B_IT", "Qwen_3.8_27B"]);

/**
 * Canonical findings-stem normalizer (single source of truth — RULES.md
 * findings-stem identity). Version numbers use "." not "_" between digits:
 * every digit-underscore-digit join becomes a dot (`Laguna_XS_2_1` →
 * `Laguna_XS_2.1`). Param-size exceptions pass through untouched. Always run
 * a freshly derived STEM through this before writing a findings file or
 * comparing against on-disk stems.
 */
export function normalizeStem(stem, exceptions = STEM_VERSION_EXCEPTION) {
  if (exceptions.has(stem)) return stem;
  return stem.replace(/(\d)_(?=\d)/g, "$1.");
}

/**
 * Underscore-version gate (RULES.md findings-stem identity): version numbers
 * in findings-file stems use "." not "_" between digits. Returns the dotted
 * suggestion, or null when the stem is fine.
 */
export function stemVersionViolation(stem, exceptions = STEM_VERSION_EXCEPTION) {
  const next = normalizeStem(stem, exceptions);
  return next !== stem ? next : null;
}

/**
 * Vendor-prefix gate (see RULES.md vendor-prefix identity): a leading vendor
 * name is never part of the slug. Returns the canonical slug when `slug` is
 * `<vendor>-<rest>` and `rest` is a known folder, otherwise null.
 * `slugs` is the on-disk folder list (or any known-slug list); matching is
 * exact (case-sensitive, already normalized).
 */
export const VENDOR_PREFIXES = [
  "google",
  "openai",
  "anthropic",
  "meta",
  "mistral",
  "deepseek",
  "alibaba",
  "xai",
  "microsoft",
  "nvidia",
  "cohere",
];

export function vendorPrefixViolation(slug, slugs) {
  for (const vendor of VENDOR_PREFIXES) {
    if (slug.startsWith(`${vendor}-`)) {
      const rest = slug.slice(vendor.length + 1);
      if (rest.length > 0 && slugs.includes(rest)) return rest;
    }
  }
  return null;
}

/**
 * Auto-scaffolded meta.json display name: a slug guess (title-cased). NEVER
 * the official vendor name — a human must replace it before it is trustworthy.
 */
export function formatSlugGuess(slug) {
  const guess = slug
    .split(/[-_]+/)
    .map((w) => {
      if (w.length === 0) return "";
      if (w.toLowerCase() === "gpt") return "GPT";
      return w[0].toUpperCase() + w.slice(1);
    })
    .join(" ");
  return formatGptLabel(guess);
}

/**
 * Auto-scaffold stamp (GLM53F_IMP #9): sync writes `scaffolded: true` into a
 * meta.json it creates itself; the stamp marks the file as an uncurated
 * slug-guess stub until a human sets the official vendor name.
 */
export function isScaffoldStub(meta) {
  return meta !== null && typeof meta === "object" && meta.scaffolded === true;
}

/** True while meta.name is still the auto-generated slug guess (uncurated). */
export function metaNameIsSlugGuess(meta, slug) {
  return !!meta && typeof meta === "object" && meta.name === formatSlugGuess(slug);
}

/** meta.json factory for a missing file: slug-guessed name + placeholder
 * facts + `scaffolded: true` (cleared by sync once a human sets the name). */
export function buildScaffoldMeta(slug) {
  const name = formatSlugGuess(slug);
  return {
    id: `opencode/${slug}`,
    name,
    short: `${name} model evaluation entry.`,
    contextWindow: "128K total",
    modalities: "Text in/out",
    pricingNote: "Standard pricing",
    scaffolded: true,
  };
}

/** Missing required meta.json fields (empty = valid). */
export function missingMetaFields(meta, required) {
  return required.filter((k) => typeof meta[k] !== "string" || meta[k].length === 0);
}

/** Display-name gate: underscores are slug artifacts, never valid in a name. */
export function metaNameHasUnderscore(name) {
  return typeof name === "string" && name.includes("_");
}
