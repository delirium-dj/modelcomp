import type { RequestHandler } from "@builder.io/qwik-city";
import { MODELS, DIMENSIONS } from "../../data/models";

/**
 * GET /data/scores.json — machine-readable snapshot of the whole dataset.
 * Deterministic (sorted by Overall desc, then slug) so crawlers, LLMs and
 * researchers can cite a stable URL. Served as a static file at build time.
 */
export const onGet: RequestHandler = async ({ json }) => {
  const sorted = [...MODELS].sort(
    (a, b) => b.scores.overall - a.scores.overall || a.slug.localeCompare(b.slug),
  );
  const payload = {
    source: "ModelComp — independent AI model comparison",
    citation: "https://modelcomp.com",
    license: "CC BY 4.0",
    dimensions: DIMENSIONS.map((d) => d.key),
    lastUpdated: sorted.map((m) => m.verified).filter(Boolean).sort().reverse()[0] ?? null,
    models: sorted.map((m) => ({
      slug: m.slug,
      name: m.name,
      id: m.id,
      category: m.meta.category,
      scores: {
        tool: m.scores.tool,
        reasoning: m.scores.reasoning,
        context: m.scores.context,
        multimodal: m.scores.multimodal,
        coding: m.scores.coding,
        cost: m.scores.cost,
        overall: m.scores.overall,
      },
      contextWindow: m.meta.contextWindow,
      modalities: m.meta.modalities,
      pricingNote: m.meta.pricingNote,
      hasFreeTier: m.hasFreeTier,
      verified: m.verified ?? null,
    })),
  };
  json(200, payload);
};
