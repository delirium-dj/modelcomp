import { component$, useSignal } from "@builder.io/qwik";
import { MODELS, virtualDimFor } from "../data/models";
import type { AiModel, SourceKey } from "../data/models";

interface ModelCardsProps {
  source: SourceKey;
}

export const ModelCards = component$<ModelCardsProps>(({ source }) => {
  const displayCount = useSignal(9);
  // Virtual sort views mirror average scores but rank by one dimension (tiebreak Overall).
  const sortDim = virtualDimFor(source);
  const isVirtualView = sortDim !== undefined;
  const shown: AiModel[] = MODELS.filter(
    (m) => source === "average" || isVirtualView || m.sources[source] !== undefined,
  )
    .map((m) => (source === "average" || isVirtualView ? m : { ...m, scores: m.sources[source]! }))
    .sort((a, b) =>
      sortDim !== undefined
        ? b.scores[sortDim] - a.scores[sortDim] || b.scores.overall - a.scores.overall
        : b.scores.overall - a.scores.overall,
    );
  const visibleModels = shown.slice(0, displayCount.value);

  return (
    <section id="models" aria-labelledby="models-heading" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <h2 id="models-heading" class="text-2xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white md:text-3xl">
        All models
      </h2>
      <p class="mt-2 max-w-3xl text-sm text-slate-600 transition-colors dark:text-slate-300">
        Every entry below comes from the same data file that powers the chart, showing the currently
        selected results source. To list a new model everywhere, add a
        <code class="rounded bg-slate-100 px-1 dark:bg-slate-800 dark:text-slate-200">model/&lt;slug&gt;/</code> folder
        with findings plus <code class="rounded bg-slate-100 px-1 dark:bg-slate-800 dark:text-slate-200">meta.json</code> and
        run <code class="rounded bg-slate-100 px-1 dark:bg-slate-800 dark:text-slate-200">pnpm sync</code>.
      </p>
      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleModels.map((m) => (
          <article key={m.id} class="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white">
                <a href={`/model/${m.slug}/`} class="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {m.name}
                </a>
              </h3>
              <span class="shrink-0 rounded bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {m.scores.overall}
              </span>
            </div>
            {!m.meta.noFreeId ? (
              <p class="mt-1">
                <span
                  class="cursor-help rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 transition-colors dark:bg-emerald-950/80 dark:text-emerald-300"
                  title={m.meta.freeTierNote ?? m.meta.pricingNote}
                >
                  Free
                </span>
              </p>
            ) : (
              <p class="mt-1">
                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 transition-colors dark:bg-amber-950/80 dark:text-amber-300">
                  Paid fallback — no Free ID
                </span>
              </p>
            )}
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{m.short}</p>
            <dl class="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <div class="flex gap-1">
                <dt class="font-semibold text-slate-700 dark:text-slate-200">Context:</dt>
                <dd>{m.meta.contextWindow}</dd>
              </div>
              <div class="flex gap-1">
                <dt class="font-semibold text-slate-700 dark:text-slate-200">Modalities:</dt>
                <dd>{m.meta.modalities}</dd>
              </div>
              <div class="flex gap-1">
                <dt class="font-semibold text-slate-700 dark:text-slate-200">Pricing:</dt>
                <dd>{m.meta.pricingNote}</dd>
              </div>
            </dl>
            <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Tool {m.scores.tool} · Reasoning {m.scores.reasoning} · Context {m.scores.context} ·
              Cost {m.scores.cost} · Coding {m.scores.coding} · Multimodal {m.scores.multimodal}
            </p>
          </article>
        ))}
      </div>
      {displayCount.value < shown.length && (
        <div class="mt-8 text-center">
          <button
            type="button"
            onClick$={() => {
              displayCount.value += 9;
            }}
            class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
});
