import { component$ } from "@builder.io/qwik";
import { MODELS } from "../data/models";
import type { AiModel, SourceKey } from "../data/models";

interface ModelCardsProps {
  source: SourceKey;
}

export const ModelCards = component$<ModelCardsProps>(({ source }) => {
  const shown: AiModel[] = MODELS.map((m) =>
    source === "average" ? m : { ...m, scores: m.sources[source] }
  );
  return (
    <section id="models" aria-labelledby="models-heading" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <h2 id="models-heading" class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        All models
      </h2>
      <p class="mt-2 max-w-3xl text-sm text-slate-600">
        Every entry below comes from the same data file that powers the chart, showing the currently
        selected results source. Add one <code class="rounded bg-slate-100 px-1">?raw</code> import per
        source file plus one object to <code class="rounded bg-slate-100 px-1">src/data/models.ts</code> to
        list a new model everywhere.
      </p>
      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((m) => (
          <article key={m.id} class="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-base font-semibold text-slate-900">{m.name}</h3>
              <span class="shrink-0 rounded bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700">
                {m.scores.overall}
              </span>
            </div>
            {m.meta.noFreeId && (
              <p class="mt-1">
                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">
                  Paid fallback — no Free ID
                </span>
              </p>
            )}
            <p class="mt-2 text-sm text-slate-600">{m.short}</p>
            <dl class="mt-3 space-y-1 text-xs text-slate-600">
              <div class="flex gap-1">
                <dt class="font-semibold">Context:</dt>
                <dd>{m.meta.contextWindow}</dd>
              </div>
              <div class="flex gap-1">
                <dt class="font-semibold">Modalities:</dt>
                <dd>{m.meta.modalities}</dd>
              </div>
              <div class="flex gap-1">
                <dt class="font-semibold">Pricing:</dt>
                <dd>{m.meta.pricingNote}</dd>
              </div>
            </dl>
            <p class="mt-2 text-xs text-slate-500">
              Tool {m.scores.tool} · Reasoning {m.scores.reasoning} · Context {m.scores.context} ·
              Multimodal {m.scores.multimodal} · Coding {m.scores.coding} · Cost {m.scores.cost}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
});
