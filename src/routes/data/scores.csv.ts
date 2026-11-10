import type { RequestHandler } from "@builder.io/qwik-city";
import { MODELS } from "../../data/models";

/**
 * GET /data/scores.csv — flat CSV export of the dataset (one row per model).
 * Deterministic, sorted by Overall desc. Content-Type is set manually because
 * `send()` never infers it.
 */
const esc = (v: unknown): string => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const HEADER = [
  "slug",
  "name",
  "id",
  "category",
  "tool",
  "reasoning",
  "context",
  "multimodal",
  "coding",
  "cost",
  "overall",
  "contextWindow",
  "modalities",
  "pricingNote",
  "hasFreeTier",
  "verified",
];

export const onGet: RequestHandler = async ({ send, headers }) => {
  const sorted = [...MODELS].sort(
    (a, b) => b.scores.overall - a.scores.overall || a.slug.localeCompare(b.slug),
  );
  const rows = sorted.map((m) =>
    [
      m.slug,
      m.name,
      m.id,
      m.meta.category,
      m.scores.tool,
      m.scores.reasoning,
      m.scores.context,
      m.scores.multimodal,
      m.scores.coding,
      m.scores.cost,
      m.scores.overall,
      m.meta.contextWindow,
      m.meta.modalities,
      m.meta.pricingNote,
      m.hasFreeTier,
      m.verified ?? "",
    ]
      .map(esc)
      .join(","),
  );
  const csv = [HEADER.join(","), ...rows].join("\n");
  headers.set("content-type", "text/csv; charset=utf-8");
  send(200, csv);
};
