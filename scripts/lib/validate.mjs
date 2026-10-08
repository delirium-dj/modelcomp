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
]);

/** Exact FAIL text for a resurrected merged slug present on disk. */
export function mergedSlugMessage(slug, canonical) {
  return (
    `model/${slug}/: this slug is a duplicate that was merged into model/${canonical}/ and deleted on user order ` +
    `— never recreate it; research/report under model/${canonical}/ instead`
  );
}

/**
 * Merged-and-deleted duplicate findings-file stems (user-ordered merges).
 * One rater filed under two filename spellings (`Laguna_XS_2_1` — version
 * separator written as `_` — vs `Laguna_XS_2.1`) was folded into the canonical
 * file and the variant removed (2026-10-08). Variants never come back: a
 * resurrect would silently double-count the same rater, so sync FAILs the
 * stem and writes nothing for it (never registered, parsed, or averaged).
 */
export const MERGED_SOURCE_STEMS = new Map([
  ["Laguna_XS_2_1", "Laguna_XS_2.1"],
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
  return messages;
}
