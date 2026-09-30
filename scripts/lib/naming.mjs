// Pure naming / slug-convention helpers for modelcomp sync.
// Zero dependencies. Covered by naming.test.mjs.
//
// Filename stem -> display key -> model-page slug is the fragile pipeline
// SIMPLIFY-PLAN collapsed: these pure functions are the contract, sync-data.mjs
// supplies the live catalog (meta.json scan) and SOURCE_OVERRIDES.

/** Case/punctuation-folded comparison (deep-links, catalog matching). */
export const normName = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Findings-file stem -> source key, e.g. Gemini_3.6_Flash -> "Gemini 3.6 Flash". */
export const stemToKey = (stem) => stem.replace(/_/g, " ");

/** Findings filename -> Agreement-notes label. */
export const labelOf = (file) => file.replace(/\.md$/, "").replace(/_/g, " ");

/**
 * Resolve display label + model-page slug for a source key.
 * `overrides` is SOURCE_OVERRIDES; `catalogLookup` maps a normalized key to
 * its folder slug (null/undefined when the agent has no tracked model page).
 */
export function resolveSourceMeta(key, overrides, catalogLookup) {
  const ov = overrides[key];
  const label = ov?.label ?? key;
  const slug = ov?.slug ?? catalogLookup(normName(key)) ?? undefined;
  return { label, slug };
}

/** Slug exceptions: match digit-hyphen-digit but are NOT hyphen versions. */
export const SLUG_VERSION_EXCEPTION = new Set(["gemma-4-31b", "qwen-3.8-27b"]);

/**
 * Hyphen-version gate (see model/README.md): version numbers use "." not "-".
 * Returns the dotted suggestion, or null when the slug is fine.
 */
export function hyphenVersionViolation(slug, exceptions = SLUG_VERSION_EXCEPTION) {
  if (exceptions.has(slug)) return null;
  if (!/\d-\d/.test(slug)) return null;
  return slug.replace(/(\d)-(?=\d)/g, "$1.");
}

/** Virtual sort-view keys: never real agents, never in SOURCE_DEFS. */
export const VIRTUAL_KEYS = new Set(["tool", "reason", "context", "cost", "code", "multi"]);

/**
 * Auto-scaffolded meta.json display name: a slug guess (title-cased). NEVER
 * the official vendor name — a human must replace it before it is trustworthy.
 */
export function formatSlugGuess(slug) {
  return slug
    .split(/[-_]+/)
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

/** Missing required meta.json fields (empty = valid). */
export function missingMetaFields(meta, required) {
  return required.filter((k) => typeof meta[k] !== "string" || meta[k].length === 0);
}

/** Display-name gate: underscores are slug artifacts, never valid in a name. */
export function metaNameHasUnderscore(name) {
  return typeof name === "string" && name.includes("_");
}
