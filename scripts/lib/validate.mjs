// Pure validation helpers for modelcomp sync (scripts/sync-data.mjs).
// Zero dependencies. Covered by validate.test.mjs.
//
// Permanence tripwire (RULES.md is ultimate, precedence #1): any git-tracked
// findings file missing from disk is a forbidden deletion — unless it
// survives somewhere sanctioned. Everything here is side-effect free: sync
// does the fs/git calls and logging, these functions lock the *decisions*.

import { FILENAME_RE, META_REQUIRED } from "./parse.mjs";
import { missingMetaFields, metaNameHasUnderscore } from "./naming.mjs";

/** Sanctioned mirror trees for user-directed relocations (e.g. voice models). */
export const MIRROR_ROOTS = ["models_voice", "models_finance"];

/**
 * Forbidden duplicate roots: retired names that must never be recreated
 * (e.g. `voicemodels/` is the pre-2026-09-28 name of `models_voice/`).
 * Sync FAILs loudly while one exists on disk so the duplicate can never be
 * cemented silently — merge into the canonical tree, then remove it.
 */
export const FORBIDDEN_ROOTS = ["voicemodels"];

/**
 * Merged-and-deleted duplicate slugs (user-ordered merges). Each key was
 * folded into an existing canonical folder and deleted because it was a
 * second slug for the *same* model. They must never come back: a resurrect
 * (git restore / re-scaffold from a stale queue) gets a loud FAIL instead of
 * quietly cementing the duplicate again.
 */
export const MERGED_MODEL_SLUGS = new Map([
  ["google-gemini-2.5-flash-lite", "gemini-2.5-flash-lite"],
  ["glm-5.1-coding", "glm-5.1"],
]);

/** Exact FAIL text for a resurrected merged slug present on disk. */
export function mergedSlugMessage(slug, canonical) {
  return (
    `model/${slug}/: this slug is a duplicate that was merged into model/${canonical}/ and deleted on user order ` +
    `— never recreate it; research/report under model/${canonical}/ instead`
  );
}

/**
 * Retired vendor aliases (RULES.md retired-alias identity). Each key is a
 * slug the vendor publishes as an alias of a tracked model
 * (`grok-code-fast-1` → `grok-build-0.1` per docs.x.ai, 2026-10-12) that must
 * never become a folder: the canonical folder already covers it, and the
 * trackers may still list the alias separately (BenchLM keeps a
 * `grok-code-fast-1` entry in its own family with its own numbers — lineage
 * data, not a second model). Unlike MERGED_MODEL_SLUGS these were never
 * folders, so resurrection means fresh scaffolding, not restore — sync FAILs
 * the same way and cements nothing for them.
 */
export const RETIRED_ALIAS_SLUGS = new Map([
  ["grok-code-fast-1", "grok-build-0.1"],
]);

/** Exact FAIL text for a scaffolded retired-alias slug present on disk. */
export function retiredAliasMessage(slug, canonical) {
  return (
    `model/${slug}/: this slug is a retired vendor alias of model/${canonical}/ — never scaffold it as a folder; ` +
    `research/report under model/${canonical}/ instead`
  );
}

/**
 * Merged-and-deleted duplicate findings-file stems (user-ordered merges).
 * One rater filed under two filename spellings (`Laguna_XS_2_1` — version
 * separator written as `_` — vs `Laguna_XS_2.1`) was folded into the canonical
 * file and the variant removed (2026-10-08). Same for the Xiaomi rater filed
 * as `Mimo_v2.6_Flash` (`_v2.6` + lowercase) vs `MiMo_2.6_Flash` (canonical,
 * merged 2026-10-09 across 141 + 6 excluded files). Variants never come back: a
 * resurrect would silently double-count the same rater, so sync FAILs the
 * stem and writes nothing for it (never registered, parsed, or averaged).
 */
export const MERGED_SOURCE_STEMS = new Map([
  ["Laguna_XS_2_1", "Laguna_XS_2.1"],
  ["Mimo_v2.6_Flash", "MiMo_2.6_Flash"],
]);

/** Exact FAIL text for a resurrected merged findings-file stem. */
export function mergedStemMessage(stem, canonical) {
  return (
    `findings file "${stem}.md": duplicate spelling that was merged into "${canonical}.md" and deleted on user order ` +
    `— never recreate it; write "${canonical}.md" instead`
  );
}

/** Exact FAIL text for a forbidden duplicate root present on disk. */
export function forbiddenRootMessage(root) {
  const canonical = root === "voicemodels" ? "models_voice" : "the canonical tree";
  return (
    `${root}/ exists — retired duplicate name, never recreate it; ` +
    `merge its contents into matching ${canonical}/<slug>/ folders, remove ${root}/, then re-run`
  );
}

/**
 * Research-file filter: only *.md / *.md.excluded paths participate.
 * (Verbatim sync semantics: skip when NEITHER matches.)
 */
export function isResearchPath(posix) {
  return posix.endsWith(".md") || posix.includes(".md.excluded");
}

/** Regenerable / non-research files never trip the wire. */
export function isRegenerablePath(posix) {
  return /(^|\/)average\.md$/.test(posix) || /(^|\/)README\.md$/.test(posix);
}

/**
 * Classify a tracked research file that is missing from disk.
 * Inputs are precomputed by sync (fs already consulted):
 * - mergedSource: it is a merged duplicate stem whose canonical sibling exists
 *   (user-ordered source merge, 2026-10-08);
 * - twinRetired: its fresh <.md> sibling exists (own-twin re-research);
 * - mirror: name of the sanctioned mirror tree holding the same path (if any).
 * Returns "merged-source" | "twin-retired" | "relocated" | "deleted" (=> FAIL).
 */
export function classifyMissingTracked({ twinRetired, mirror, mergedSource }) {
  if (mergedSource) return "merged-source";
  if (twinRetired) return "twin-retired";
  if (mirror !== undefined) return "relocated";
  return "deleted";
}

/** Find the mirror tree holding a relocated path (or undefined). */
export function findMirror(parts, mirrorRoots, existsAt) {
  if (parts[0] !== "model") return undefined;
  return mirrorRoots.find((m) => existsAt(m, parts.slice(1)));
}

/**
 * First forbidden duplicate root present on disk (or undefined).
 * `existsAt` receives (repoRoot, name) so the join lives in exactly one
 * place — a shadowed loop variable here once produced "root/root" paths
 * that could never exist, silencing the whole tripwire (B1).
 */
export function findForbiddenRoot(root, forbiddenRoots, existsAt) {
  return forbiddenRoots.find((f) => existsAt(root, f));
}

/** Exact FAIL text for a forbidden deletion (locked: it tells how to restore). */
export function deletionFailMessage(posix) {
  return (
    `${posix}: tracked in git HEAD but missing from disk — research files are permanent (RULES.md); ` +
    `restore with \`git restore --source=HEAD -- "${posix}"\`, never delete`
  );
}

/** Filename hygiene: letters, digits, underscore, dots only. Null when fine. */
export function checkFilename(slug, f) {
  if (!FILENAME_RE.test(f)) {
    return `model/${slug}/${f}: filename must match ${FILENAME_RE} (letters, digits, underscore only)`;
  }
  return null;
}

/**
 * Card uniformity caps (model/README.md meta.json schema). Card/list fields
 * render verbatim in ModelCards, so length discipline keeps rows comparable.
 */
export const META_SHORT_MAX = 240;
export const META_MODALITIES_MAX = 80;
export const META_PRICING_MAX = 120;
export const META_CONTEXT_MAX = 100;

/** Unknown-spec hatch: unannounced models skip the modalities shape check. */
export const MODALITIES_UNKNOWN_RE = /^(not announced|unverified|not disclosed|unknown|no verified)\b/i;

/** Capability notes belong in `short`, never in `modalities`. */
export const MODALITIES_NOTE_RE =
  /reasoning|thinking|tool[\s-]*calls?|tool[\s-]*calling|function[\s-]*calls?|function[\s-]*calling|json[\s-]*mode|structured|temperature|effort/i;

/**
 * Modalities diagnostics for one meta.json value. Pure + tested; empty =
 * passes. Shape rule ("<inputs> in ... out" naming text) plus the
 * capability-note ban plus the length cap.
 */
export function modalityProblems(modalities) {
  const problems = [];
  if (MODALITIES_UNKNOWN_RE.test(modalities)) return problems;
  if (!/text/i.test(modalities)) problems.push('must name text input/output (e.g. "Text in/out")');
  if (!/\bin\b/i.test(modalities) || !/\bout\b/i.test(modalities)) {
    problems.push('must have "<inputs> in ... out" shape');
  }
  const note = modalities.match(MODALITIES_NOTE_RE);
  if (note) problems.push(`capability note "${note[0]}" belongs in "short", not "modalities"`);
  if (modalities.length > META_MODALITIES_MAX) {
    problems.push(`is ${modalities.length} chars (max ${META_MODALITIES_MAX}) — inputs/outputs only`);
  }
  return problems;
}

/**
 * Full meta.json validation for one model folder. Returns FAIL messages in
 * sync order: missing/empty required fields first, then the display-name
 * gate (underscores are slug artifacts, never valid in a vendor name).
 */
export function checkMetaFile(slug, meta, required = META_REQUIRED) {
  const messages = [];
  for (const k of missingMetaFields(meta, required)) {
    messages.push(`model/${slug}/meta.json: missing required field "${k}"`);
  }
  if (metaNameHasUnderscore(meta.name)) {
    messages.push(
      `model/${slug}/meta.json: "name" must use spaces, never underscores (got "${meta.name}") — set the official vendor display name`,
    );
  }
  if (typeof meta.name === "string" && (/^GPT \d/.test(meta.name) || /^GPT OSS(?=\s|$)/.test(meta.name))) {
    messages.push(
      `model/${slug}/meta.json: "name" must hyphenate the GPT prefix (official OpenAI style "GPT-5.6 Terra" / "GPT-OSS 120B", never with a space — got "${meta.name}")`,
    );
  }
  if (typeof meta.short === "string" && meta.short.length > META_SHORT_MAX) {
    messages.push(
      `model/${slug}/meta.json: "short" is ${meta.short.length} chars (max ${META_SHORT_MAX}) — trim to 1–2 sentences for card uniformity`,
    );
  }
  if (typeof meta.modalities === "string" && meta.modalities.length > 0) {
    for (const p of modalityProblems(meta.modalities)) {
      messages.push(`model/${slug}/meta.json: "modalities" ${p}`);
    }
  }
  if (typeof meta.contextWindow === "string" && meta.contextWindow.length > META_CONTEXT_MAX) {
    messages.push(
      `model/${slug}/meta.json: "contextWindow" is ${meta.contextWindow.length} chars (max ${META_CONTEXT_MAX}) — use "<total> total; <out> max out" (templates in model/README.md)`,
    );
  }
  if (typeof meta.pricingNote === "string" && meta.pricingNote.length > META_PRICING_MAX) {
    messages.push(
      `model/${slug}/meta.json: "pricingNote" is ${meta.pricingNote.length} chars (max ${META_PRICING_MAX}) — one-line summary; move detail into "pricingTiers"`,
    );
  }
  if (Array.isArray(meta.pricingTiers)) {
    meta.pricingTiers.forEach((t, i) => {
      if (typeof t === "string" && t.length > META_PRICING_MAX) {
        messages.push(
          `model/${slug}/meta.json: "pricingTiers[${i}]" is ${t.length} chars (max ${META_PRICING_MAX}) — one line per tier`,
        );
      }
    });
  }
  return messages;
}
