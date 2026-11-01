// Shared read-only model view helpers: dimension labels (derived from the
// canonical DIMENSIONS order), the per-dot tooltip, the list-search predicate,
// and the best/worst table-cell highlighting used by the homepage and the
// model profile. Pure — no framework, no DOM.

import { DIMENSIONS } from "../../data/models";
import type { AiModel, DimensionKey, ModelScores } from "../../data/models";

/** Long axis labels, derived from DIMENSIONS (never hand-maintained mirrors). */
export const DIMENSION_LABELS = Object.fromEntries(
  DIMENSIONS.map((d) => [d.key, d.label]),
) as Record<DimensionKey, string>;

/** Short column labels, derived from DIMENSIONS. */
export const DIMENSION_SHORT = Object.fromEntries(
  DIMENSIONS.map((d) => [d.key, d.short]),
) as Record<DimensionKey, string>;

/** Table column order (Overall first, then the six dims). */
export const TABLE_KEYS: DimensionKey[] = [
  "tool",
  "reasoning",
  "context",
  "coding",
  "multimodal",
  "cost",
];

/**
 * Rich per-dot tooltip. Cost/context/multimodal show the raw curated value;
 * tool/reasoning/coding show the score. A free-tier note is appended
 * when the model carries one.
 */
export function dimensionTooltip(m: AiModel, key: DimensionKey): string {
  let base = `${m.name} — ${DIMENSION_LABELS[key]}: ${m.scores[key]}`;
  if (key === "cost") base = `${m.name} — Cost: ${m.meta.pricingNote}`;
  else if (key === "context") base = `${m.name} — Context: ${m.meta.contextWindow}`;
  else if (key === "multimodal") base = `${m.name} — Multimodal: ${m.meta.modalities}`;
  if (m.meta.freeTierNote) base += ` (${m.meta.freeTierNote})`;
  return base;
}

/** List-search predicate over name / id / short / aliases. */
export function modelMatchesQuery(
  m: Pick<AiModel, "name" | "id" | "short" | "aliases">,
  q: string,
): boolean {
  if (q === "") return true;
  return (
    m.name.toLowerCase().includes(q) ||
    m.id.toLowerCase().includes(q) ||
    m.short.toLowerCase().includes(q) ||
    (m.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false)
  );
}

export interface HlStats {
  best: number | null;
  worst: number | null;
}

/**
 * Best/worst value per column across the displayed rows. `round` matches the
 * profile table, which displays and ranks rounded values.
 */
export function buildHlStats(
  rows: ModelScores[],
  keys: readonly (DimensionKey | "overall")[],
  round = false,
): Map<string, HlStats> {
  const stats = new Map<string, HlStats>();
  for (const key of keys) {
    if (rows.length === 0) {
      stats.set(key, { best: null, worst: null });
      continue;
    }
    const vals = rows.map((s) => (round ? Math.round(s[key]) : s[key]));
    stats.set(key, { best: Math.max(...vals), worst: Math.min(...vals) });
  }
  return stats;
}

/** Cell highlight classes for the best/worst value in a column. */
export function hlClass(stats: Map<string, HlStats>, col: string, value: number): string {
  const st = stats.get(col);
  if (!st || st.best === null || st.worst === null) return "";
  if (value === st.best)
    return " bg-[#d3ead9] font-bold text-[#14532d] dark:bg-[#1d4a2f] dark:text-[#bbf7d0]";
  if (value === st.worst)
    return " bg-[#f7d9d4] text-[#7f1d1d] dark:bg-[#5a2320] dark:text-[#fecaca]";
  return "";
}

/** Tooltip title for a highlighted cell (undefined when not best/worst). */
export function hlTitle(
  stats: Map<string, HlStats>,
  col: string,
  value: number,
  label: string,
): string | undefined {
  const st = stats.get(col);
  if (!st || st.best === null || st.worst === null) return undefined;
  if (value === st.best) return `Highest ${label} grade for this model`;
  if (value === st.worst) return `Lowest ${label} grade for this model`;
  return undefined;
}
