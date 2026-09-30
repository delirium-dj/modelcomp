// Pure auto-quarantine (QUAR) analysis for modelcomp sync.
// Zero dependencies. Covered by quarantine.test.mjs.
//
// Enforces the template's SELF-EXCLUSION rule when the reporting agent forgot
// it: evidence-free findings can never poison an average. Everything here is
// side-effect free — sync-data.mjs renames the file and logs; the decision
// of *whether* to quarantine lives here so tests lock it.

import { QUALITY_DIMS } from "./parse.mjs";

/** Count "no verified public score found" rows in a Raw-benchmarks section. */
export function countMissing(section) {
  return (section.match(/no verified public score found/gi) || []).length;
}

/**
 * Count measured (bold numeric) values in a Raw-benchmarks section.
 * NOTE: [^\n*] (not [^*]) — bold spans must stay on one line, otherwise the
 * closing ** of one row pairs with the opening ** of the next (e.g. across
 * "Tau3-Banking / Tau2-Bench:") and fakes a numeric hit on empty files.
 * This exact class of bug is locked by quarantine.test.mjs.
 */
export function countNumerics(section) {
  return (section.match(/\*\*[^\n*]*\d[^\n*]*\*\*/g) || []).length;
}

/** Parse the five normalized quality dims (Cost excluded) from file content. */
export function parseQualityDims(content) {
  const norm = (content.split("### Normalized scores")[1] || "").split("---")[0];
  return QUALITY_DIMS.map((l) => Number((norm.match(new RegExp(`\\*\\*${l}:\\s*([\\d.]+)/100`)) || [])[1]));
}

/**
 * Decide whether a findings file must be quarantined (*.md -> *.md.excluded).
 * Returns the human-readable reason, or null when the file is legitimate.
 * Criteria (all must hold per branch):
 * - evidence-free: 8+ "not found" rows AND zero measured numbers;
 * - zero-scored: any quality dim is 0 ("no data" filed as 0; floors are 10+);
 * - flat: all five dims identical AND zero cited numbers (invented uniformity).
 * Real low scores (varied dims, cited numbers) are never touched.
 */
export function quarantineReason(content) {
  const section = (content.split("### Raw benchmarks found")[1] || "").split("### Normalized scores")[0];
  if (!section) return null;
  const missing = countMissing(section);
  const numerics = countNumerics(section);
  const dims = parseQualityDims(content);
  const parsed = dims.filter((n) => Number.isFinite(n));
  const evidenceFree = missing >= 8 && numerics === 0;
  if (evidenceFree) return `no verified benchmarks (${missing}x "not found", 0 measured numbers)`;
  if (parsed.some((n) => n === 0))
    return `zero-scored dimension(s) [${parsed.join("/")}] = "no data" filed as 0`;
  if (parsed.length === 5 && parsed.every((n) => n === parsed[0]) && numerics === 0)
    return `flat ${parsed[0]}/100 across all dims with 0 measured numbers`;
  return null;
}
