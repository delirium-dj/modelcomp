// Pure validation helpers for modelcomp sync (scripts/sync-data.mjs).
// Zero dependencies. Covered by validate.test.mjs.
//
// Permanence tripwire (RULES.md is ultimate, precedence #1): any git-tracked
// findings file missing from disk is a forbidden deletion — unless it
// survives somewhere sanctioned. Everything here is side-effect free: sync
// does the fs/git calls and logging, these functions lock the *decisions*.

import { FILENAME_RE, META_REQUIRED } from "./parse.mjs";

/** Sanctioned mirror trees for user-directed relocations (e.g. voice models). */
export const MIRROR_ROOTS = ["models_voice", "models_finance"];

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
 * - twinRetired: its fresh <.md> sibling exists (own-twin re-research);
 * - mirror: name of the sanctioned mirror tree holding the same path (if any).
 * Returns "twin-retired" | "relocated" | "deleted" (=> loud FAIL).
 */
export function classifyMissingTracked({ twinRetired, mirror }) {
  if (twinRetired) return "twin-retired";
  if (mirror !== undefined) return "relocated";
  return "deleted";
}

/** Find the mirror tree holding a relocated path (or undefined). */
export function findMirror(parts, mirrorRoots, existsAt) {
  if (parts[0] !== "model") return undefined;
  return mirrorRoots.find((m) => existsAt(m, parts.slice(1)));
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
  for (const k of required) {
    if (typeof meta[k] !== "string" || meta[k].length === 0) {
      messages.push(`model/${slug}/meta.json: missing required field "${k}"`);
    }
  }
  if (typeof meta.name === "string" && meta.name.includes("_")) {
    messages.push(
      `model/${slug}/meta.json: "name" must use spaces, never underscores (got "${meta.name}") — set the official vendor display name`,
    );
  }
  return messages;
}
