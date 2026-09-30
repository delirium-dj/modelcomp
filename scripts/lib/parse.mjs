// Pure parsing / scoring helpers for modelcomp sync (scripts/sync-data.mjs).
// Zero dependencies. Covered by parse.test.mjs (`node --test scripts/lib/`).
//
// Rule: everything here is side-effect free — no fs, no console, no process
// exit. `sync-data.mjs` imports these and adds logging / FAIL accounting, so
// behavior stays byte-identical while the contract is locked by tests.

/** Score-line labels in canonical order (parser contract — see .agents/rules.md). */
export const LABELS = [
  "Tool use",
  "Reasoning",
  "Context window",
  "Multimodal",
  "Coding",
  "Cost efficiency",
  "Overall Score",
];

/** Long label -> short key used in scores.generated.ts. */
export const SHORT = {
  "Tool use": "tool",
  "Reasoning": "reasoning",
  "Context window": "context",
  "Multimodal": "multimodal",
  "Coding": "coding",
  "Cost efficiency": "cost",
  "Overall Score": "overall",
};

/** Quality dims that feed Overall (Cost efficiency is scored, never counted). */
export const QUALITY_DIMS = ["Tool use", "Reasoning", "Context window", "Multimodal", "Coding"];

export const META_REQUIRED = ["id", "name", "short", "contextWindow", "modalities", "pricingNote"];

// Dots are allowed: version numbers live in findings filenames (DeepSeek_4.1_Flash.md).
export const FILENAME_RE = /^[A-Za-z0-9_.]+\.md$/;

/** Rater gate: only reports by models with own Overall above this count. */
export const RATER_GATE = 84.9;

/** Overall drift tolerance (matches dev-time checkOverallScores()). */
export const OVERALL_TOLERANCE = 0.51;

/** Standard half-up rounding to 1 decimal (72.25 -> 72.3). */
export const halfUp1 = (x) => Math.round(x * 10) / 10;

/**
 * Parse the seven normalized 1-100 score lines from a findings file.
 * Pure core of sync's parseScores: returns the failure instead of FAIL-logging
 * it, so tests can assert the contract without I/O.
 */
export function parseScoresPure(md) {
  const out = {};
  for (const label of LABELS) {
    const m = md.match(new RegExp(`\\*\\*${label}:\\s*([\\d.]+)/100`));
    if (!m) return { ok: false, missingLabel: label };
    out[label] = Number(m[1]);
  }
  return { ok: true, scores: out };
}

/** Map long-labeled scores to the short keys emitted in scores.generated.ts. */
export function shortenScores(scores) {
  const entry = {};
  for (const [label, short] of Object.entries(SHORT)) entry[short] = scores[label];
  return entry;
}

/**
 * Overall auto-correct decision: source-file Overall is DERIVED (half-up mean
 * of the five quality dims). Returns the 5-dim mean, the corrected Overall,
 * and whether the drift exceeds tolerance (=> sync rewrites the line).
 */
export function overallDrift(scores, tolerance = OVERALL_TOLERANCE) {
  const mean5 = QUALITY_DIMS.reduce((a, l) => a + scores[l], 0) / QUALITY_DIMS.length;
  const corrected = halfUp1(mean5);
  return { mean5, corrected, drifted: Math.abs(scores["Overall Score"] - mean5) > tolerance };
}

/**
 * Rewrite just the Overall number in a findings file. Returns the fixed
 * content, or null when the score line is not auto-fixable (=> loud FAIL).
 */
export function applyOverallFix(content, corrected) {
  const next = content.replace(/(\*\*Overall Score:\s*)([\d.]+)(\/100)/, `$1${corrected}$3`);
  return next === content ? null : next;
}

/** Half-up mean of one label over a cohort (average.md recomputation). */
export function meanOf(cohort, label) {
  return halfUp1(cohort.reduce((a, p) => a + p.scores[label], 0) / cohort.length);
}

/** Top-10 cohort: the ten entries with the highest Overall Score (or all). */
export function rankTop10(eligible) {
  return [...eligible].sort((a, b) => b.scores["Overall Score"] - a.scores["Overall Score"]).slice(0, 10);
}

/**
 * Rater-gate partition: keep only files written by models whose own committed
 * average Overall clears the gate. `resolveSlug(stem)` maps a findings-file
 * stem to its rating-model slug (or null); `raterOwn` maps slug -> Overall.
 * Qualification is strict `>` — exactly 84.9 does NOT qualify.
 */
export function partitionEligible(perFile, resolveSlug, raterOwn, gate = RATER_GATE) {
  const eligible = [];
  const ignoredLabels = [];
  for (const p of perFile) {
    const rs = resolveSlug(p.file.replace(/\.md$/, ""));
    if (rs !== null && (raterOwn.get(rs) ?? -Infinity) > gate) {
      eligible.push(p);
    } else {
      ignoredLabels.push(p.file.replace(/\.md$/, "").replace(/_/g, " "));
    }
  }
  return { eligible, ignoredLabels };
}

/** Case-insensitive A-Z sort (committed Agreement-notes convention). */
export function sortLabelsAZ(labels) {
  const lower = (s) => s.toLowerCase();
  return [...labels].sort((a, b) => (lower(a) < lower(b) ? -1 : lower(a) > lower(b) ? 1 : 0));
}
