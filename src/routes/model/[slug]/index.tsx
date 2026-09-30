import { component$, useSignal } from "@builder.io/qwik";
import { useLocation, type DocumentHead, type StaticGenerateHandler } from "@builder.io/qwik-city";
import { MODELS, SOURCES, MODEL_COLORS, DIMENSIONS, AGENT_MODEL_SLUG, virtualDimFor } from "../../../data/models";
import type { SourceKey, ModelScores, DimensionKey } from "../../../data/models";
import { HexRadar } from "../../../components/HexRadar";

/** Pre-render one static page per model for the static adapter. */
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return { params: MODELS.map((m) => ({ slug: m.slug })) };
};

export default component$(() => {
  const slug = useLocation().params.slug ?? "";
  const model = MODELS.find((m) => m.slug === slug);

  if (!model) {
    return (
      <section class="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Model not found</h1>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          No model with slug <code class="rounded bg-slate-100 px-1 dark:bg-slate-800">{slug}</code> is tracked.
        </p>
        <p class="mt-6">
          <a href="/" class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            Back to comparison
          </a>
        </p>
      </section>
    );
  }

  // Position in MODELS order (sorted by id) drives previous/next navigation.
  const modelIndex = MODELS.findIndex((m) => m.slug === slug);
  const prevModel = modelIndex > 0 ? MODELS[modelIndex - 1] : undefined;
  const nextModel = modelIndex >= 0 && modelIndex < MODELS.length - 1 ? MODELS[modelIndex + 1] : undefined;

  // Every reporting agent that rated this model, best grade first.
  const ratings = (Object.keys(model.sources) as SourceKey[])
    .filter((key) => key !== "average" && virtualDimFor(key) === undefined && model.sources[key] !== undefined)
    .map((key) => ({
      key,
      label: SOURCES.find((s) => s.key === key)?.label ?? key,
      scores: model.sources[key]!,
    }))
    .sort((a, b) => b.scores.overall - a.scores.overall);

  // Best/worst highlight per column: green = highest grade, red = lowest. Ties
  // share the honor; a single unanimous grade counts as best only.
  interface ColStats {
    best: number | null;
    worst: number | null;
  }
  const colStats = (get: (s: ModelScores) => number): ColStats => {
    if (ratings.length === 0) return { best: null, worst: null };
    return {
      best: Math.max(...ratings.map((r) => get(r.scores))),
      worst: Math.min(...ratings.map((r) => get(r.scores))),
    };
  };
  // Rater grades display as whole numbers (rounded); the model's own average
  // (header badge, homepage cards) keeps its 1-decimal precision.
  const overallStats = colStats((s) => Math.round(s.overall));
  const dimStats = {} as Record<DimensionKey, ColStats>;
  for (const d of DIMENSIONS) dimStats[d.key] = colStats((s) => Math.round(s[d.key]));
  // Ratings-table column order, independent of hexagon DIMENSIONS order:
  // Context, Reason, Multi, Tool, Code, Cost last (Cost = independent stat).
  const TABLE_DIM_ORDER: DimensionKey[] = ["context", "reasoning", "multimodal", "tool", "coding", "cost"];
  const tableDims = TABLE_DIM_ORDER.map((key) => DIMENSIONS.find((d) => d.key === key)!);
  const hl = (value: number, st: ColStats, label: string, bold: boolean) => {
    const isBest = st.best !== null && value === st.best;
    const isWorst = st.worst !== null && value === st.worst && value !== st.best;
    return {
      title: isBest
        ? `Highest ${label} grade for this model`
        : isWorst
          ? `Lowest ${label} grade for this model`
          : undefined,
      cls: `px-3 py-2 text-center ${bold ? "font-bold " : ""}${
        isBest
          ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-200"
          : isWorst
            ? "bg-red-100 text-red-900 dark:bg-red-900/60 dark:text-red-200"
            : bold
              ? "text-slate-900 dark:text-white"
              : "text-slate-800 dark:text-slate-200"
      }`,
    };
  };
  const sortKey = useSignal<string>("overall");
  const sortDir = useSignal<1 | -1>(-1);
  // Default view: overall desc, ties alphabetical. Re-sorted on header click.
  const sortedRatings = [...ratings].sort((a, b) => {
    if (sortKey.value === "agent") return sortDir.value * a.label.localeCompare(b.label);
    const av = sortKey.value === "overall" ? a.scores.overall : a.scores[sortKey.value as DimensionKey];
    const bv = sortKey.value === "overall" ? b.scores.overall : b.scores[sortKey.value as DimensionKey];
    return sortDir.value * (av - bv) || a.label.localeCompare(b.label);
  });

  return (
    <>
      <section class="mx-auto max-w-6xl px-4 pb-4 pt-8">
        <p class="text-sm">
          <a href="/#models" class="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
            ← All models
          </a>
        </p>
        <div class="mt-3 flex flex-wrap items-center gap-3">
          <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white md:text-4xl">
            {model.name}
          </h1>
          {!model.meta.noFreeId ? (
            <span
              title={model.meta.freeTierNote ?? model.meta.pricingNote}
              class="cursor-help rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300"
            >
              Free
            </span>
          ) : (
            <span class="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
              Paid fallback — no Free ID
            </span>
          )}
          <span class="rounded bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            Overall {model.scores.overall}
          </span>
        </div>
        <p class="mt-3 max-w-3xl text-base text-slate-600 transition-colors dark:text-slate-300">{model.short}</p>
        <dl class="mt-4 grid max-w-3xl grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          <div class="flex gap-1">
            <dt class="font-semibold text-slate-700 dark:text-slate-200">Context:</dt>
            <dd>{model.meta.contextWindow}</dd>
          </div>
          <div class="flex gap-1">
            <dt class="font-semibold text-slate-700 dark:text-slate-200">Modalities:</dt>
            <dd>{model.meta.modalities}</dd>
          </div>
          <div class="flex gap-1 sm:col-span-2">
            <dt class="font-semibold text-slate-700 dark:text-slate-200">Pricing:</dt>
            <dd>{(model.meta.pricingTiers ?? [model.meta.pricingNote]).join(" · ")}</dd>
          </div>
        </dl>
      </section>

      <section aria-label="Average scores" class="mx-auto max-w-6xl px-4 py-6">
        <h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Average scores</h2>
        <div class="mt-4 max-w-[560px]">
          <HexRadar series={[{ model, color: MODEL_COLORS[0] as string }]} />
        </div>
      </section>

      <section aria-label="Ratings by reporting agent" class="mx-auto max-w-6xl px-4 pb-12">
        <h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          How other agents rated this model
        </h2>
        <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Each reporting agent's overall score for {model.name} ({ratings.length} of{" "}
          {SOURCES.filter((s) => s.key !== "average" && virtualDimFor(s.key) === undefined).length} agents reporting). Click a column header to sort.
        </p>
        <div class="mt-4 overflow-x-auto">
          <table class="w-full min-w-[720px] table-fixed border-collapse text-sm">
            <colgroup>
              <col class="w-[30%]" />
              <col class="w-[10%]" />
              <col class="w-[10%]" />
              <col class="w-[10%]" />
              <col class="w-[10%]" />
              <col class="w-[10%]" />
              <col class="w-[10%]" />
              <col class="w-[10%]" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  <button
                    type="button"
                    onClick$={() => {
                      if (sortKey.value === "agent") {
                        sortDir.value = sortDir.value === 1 ? -1 : 1;
                      } else {
                        sortKey.value = "agent";
                        sortDir.value = 1;
                      }
                    }}
                    aria-label="Sort by reporting agent"
                    title="Sort by reporting agent"
                    class="inline-flex cursor-pointer items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Reporting agent{sortKey.value === "agent" ? (sortDir.value === 1 ? " ▲" : " ▼") : ""}
                  </button>
                </th>
                <th scope="col" class="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  <button
                    type="button"
                    onClick$={() => {
                      if (sortKey.value === "overall") {
                        sortDir.value = sortDir.value === 1 ? -1 : 1;
                      } else {
                        sortKey.value = "overall";
                        sortDir.value = -1;
                      }
                    }}
                    aria-label="Sort by overall score"
                    title="Sort by overall score"
                    class="inline-flex cursor-pointer items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Overall{sortKey.value === "overall" ? (sortDir.value === 1 ? " ▲" : " ▼") : ""}
                  </button>
                </th>
                {tableDims.map((d) => (
                  <th
                    key={d.key}
                    scope="col"
                    class="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300"
                  >
                    <button
                      type="button"
                      onClick$={() => {
                        if (sortKey.value === d.key) {
                          sortDir.value = sortDir.value === 1 ? -1 : 1;
                        } else {
                          sortKey.value = d.key;
                          sortDir.value = -1;
                        }
                      }}
                      aria-label={`Sort by ${d.label}`}
                      title={`Sort by ${d.label}`}
                      class="inline-flex cursor-pointer items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {d.short}
                      {sortKey.value === d.key ? (sortDir.value === 1 ? " ▲" : " ▼") : ""}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedRatings.map((r) => {
                const o = hl(Math.round(r.scores.overall), overallStats, "overall", true);
                // Link the agent name to that agent's own model page when tracked;
                // otherwise fall back to the homepage source view (always exists),
                // so every row stays clickable and never a dead link.
                const agentSlug = AGENT_MODEL_SLUG[r.key];
                const agentModel = agentSlug ? MODELS.find((m) => m.slug === agentSlug) : undefined;
                const fallbackHref = `/?source=${encodeURIComponent(r.key)}`;
                return (
                  <tr key={r.key} class="odd:bg-slate-50 even:bg-white dark:odd:bg-slate-900/50 dark:even:bg-slate-950">
                  <th scope="row" class="px-3 py-2 text-left font-medium text-slate-700 dark:text-slate-300">
                    {agentModel ? (
                      <a
                        href={`/model/${agentModel.slug}/`}
                        title={`Open ${agentModel.name} page`}
                        class="hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        {r.label}
                      </a>
                    ) : (
                      <a
                        href={fallbackHref}
                        title={`Show ${r.label} scores across all models`}
                        class="hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        {r.label}
                      </a>
                    )}
                  </th>
                    <td title={o.title} class={o.cls}>
                      {Math.round(r.scores.overall)}
                    </td>
                    {tableDims.map((d) => {
                      const c = hl(Math.round(r.scores[d.key]), dimStats[d.key], d.label, false);
                      return (
                        <td key={d.key} title={c.title} class={c.cls}>
                          {Math.round(r.scores[d.key])}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav
          aria-label="Previous and next models"
          class="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800"
        >
          {prevModel ? (
            <a
              href={`/model/${prevModel.slug}/`}
              rel="prev"
              title={`Previous model: ${prevModel.name}`}
              class="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ← {prevModel.name}
            </a>
          ) : (
            <span />
          )}
          {nextModel ? (
            <a
              href={`/model/${nextModel.slug}/`}
              rel="next"
              title={`Next model: ${nextModel.name}`}
              class="text-right font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {nextModel.name} →
            </a>
          ) : (
            <span />
          )}
        </nav>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Model details — ModelComp",
  meta: [
    {
      name: "description",
      content: "Per-model scores and how each reporting agent rated this model.",
    },
  ],
};
