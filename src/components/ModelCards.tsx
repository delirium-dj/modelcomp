import { component$, useSignal } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { DIMENSIONS, MODELS, sortSourceFor, virtualDimFor } from "../data/models";
import type { AiModel, ResultsView, SourceKey } from "../data/models";

interface ModelCardsProps {
  source: ResultsView;
  onSource$: QRL<(source: ResultsView) => void>;
}

type ModelsView = "cards" | "list";

export const ModelCards = component$<ModelCardsProps>(({ source, onSource$ }) => {
  const displayCount = useSignal(9);
  const view = useSignal<ModelsView>("cards");
  // Virtual sort views mirror average scores but rank by one dimension (tiebreak Overall).
  const sortDim = virtualDimFor(source);
  const isVirtualView = sortDim !== undefined;
  const shown: AiModel[] = MODELS.filter(
    (m) => source === "average" || isVirtualView || m.sources[source as SourceKey] !== undefined,
  )
    .map((m) => (source === "average" || isVirtualView ? m : { ...m, scores: m.sources[source as SourceKey]! }))
    .sort((a, b) =>
      sortDim !== undefined
        ? b.scores[sortDim] - a.scores[sortDim] || b.scores.overall - a.scores.overall
        : b.scores.overall - a.scores.overall,
    );
  const visibleModels = shown.slice(0, displayCount.value);

  return (
    <section id="models" aria-labelledby="models-heading" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <h2 id="models-heading" class="text-2xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white md:text-3xl">
          All models
        </h2>
        <div class="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1 text-sm dark:border-slate-800 dark:bg-slate-900" role="group" aria-label="All models view">
          <button
            type="button"
            aria-pressed={view.value === "cards"}
            onClick$={() => {
              view.value = "cards";
            }}
            class={`rounded-md px-3 py-1.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
              view.value === "cards"
                ? "bg-white text-indigo-700 shadow-sm dark:bg-slate-800 dark:text-indigo-300"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            Cards
          </button>
          <button
            type="button"
            aria-pressed={view.value === "list"}
            onClick$={() => {
              view.value = "list";
            }}
            class={`rounded-md px-3 py-1.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
              view.value === "list"
                ? "bg-white text-indigo-700 shadow-sm dark:bg-slate-800 dark:text-indigo-300"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            List
          </button>
        </div>
      </div>
      <p class="mt-2 max-w-3xl text-sm text-slate-600 transition-colors dark:text-slate-300">
        Every entry below comes from the same data file that powers the chart, showing the currently
        selected results source. To list a new model everywhere, add a
        <code class="rounded bg-slate-100 px-1 dark:bg-slate-800 dark:text-slate-200">model/&lt;slug&gt;/</code> folder
        with findings plus <code class="rounded bg-slate-100 px-1 dark:bg-slate-800 dark:text-slate-200">meta.json</code> and
        run <code class="rounded bg-slate-100 px-1 dark:bg-slate-800 dark:text-slate-200">pnpm sync</code>.
      </p>
      {view.value === "cards" ? (
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
      ) : (
      <>
        <div class="mt-6 hidden overflow-x-auto md:block">
          <table class="w-full min-w-[880px] table-fixed border-collapse text-sm">
            <colgroup>
              <col class="w-[180px]" />
              {DIMENSIONS.map((d) => (
                <col key={d.key} />
              ))}
              <col />
              <col class="w-[140px]" />
              <col class="w-[180px]" />
            </colgroup>
            <caption class="mb-2 text-left font-semibold text-slate-800 dark:text-slate-200">
              Exact scores for all models
            </caption>
            <thead>
              <tr>
                <th scope="col" class="border-b border-slate-200 break-words px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  Model
                </th>
                {DIMENSIONS.map((d) => {
                  const sortKey = sortSourceFor(d.key);
                  const isActive = source === sortKey;
                  return (
                    <th
                      key={d.key}
                      scope="col"
                      aria-sort={isActive ? "descending" : "none"}
                      class="border-b border-slate-200 break-words px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300"
                    >
                      <button
                        type="button"
                        title={`${d.label} — ${d.description}. Sort all models by ${d.label}.`}
                        aria-label={`Sort all models by ${d.label}`}
                        aria-pressed={isActive}
                        onClick$={() => onSource$(sortKey)}
                        class={`cursor-pointer rounded underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                          isActive ? "text-indigo-700 underline dark:text-indigo-300" : ""
                        }`}
                      >
                        {d.short}
                        {isActive && (
                          <span aria-hidden="true"> ▲</span>
                        )}
                      </button>
                    </th>
                  );
                })}
                <th
                  scope="col"
                  aria-sort={source === "average" ? "descending" : "none"}
                  class="border-b border-slate-200 break-words px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300"
                >
                  <button
                    type="button"
                    title="Overall score — average of qualifying reports. Sort all models by Overall."
                    aria-label="Sort all models by Overall"
                    aria-pressed={source === "average"}
                    onClick$={() => onSource$("average")}
                    class={`cursor-pointer rounded underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                      source === "average" ? "text-indigo-700 underline dark:text-indigo-300" : ""
                    }`}
                  >
                    Overall
                    {source === "average" && (
                      <span aria-hidden="true"> ▲</span>
                    )}
                  </button>
                </th>
                <th scope="col" class="border-b border-slate-200 break-words px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  Context window
                </th>
                <th scope="col" class="border-b border-slate-200 break-words px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  Pricing / 1M
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleModels.map((m) => (
                <tr key={m.id} class="odd:bg-slate-50 even:bg-white dark:odd:bg-slate-900/50 dark:even:bg-slate-950">
                  <th scope="row" class="break-words px-3 py-2 text-left font-medium text-slate-700 dark:text-slate-300">
                    <a href={`/model/${m.slug}/`} class="hover:text-indigo-600 dark:hover:text-indigo-400">
                      {m.name}
                    </a>
                    {!m.meta.noFreeId ? (
                      <span
                        class="ml-1.5 inline-block cursor-help whitespace-nowrap rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 align-middle transition-colors dark:bg-emerald-950/80 dark:text-emerald-300"
                        title={m.meta.freeTierNote ?? m.meta.pricingNote}
                      >
                        Free
                      </span>
                    ) : (
                      <span class="ml-1.5 inline-block whitespace-nowrap rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 align-middle transition-colors dark:bg-amber-950/80 dark:text-amber-300">
                        Paid
                      </span>
                    )}
                  </th>
                  {DIMENSIONS.map((d) => (
                    <td key={d.key} class="break-words px-3 py-2 text-slate-800 dark:text-slate-200">
                      {m.scores[d.key]}
                    </td>
                  ))}
                  <td class="break-words px-3 py-2 font-semibold text-slate-800 dark:text-slate-200">
                    {m.scores.overall}
                  </td>
                  <td class="break-words px-3 py-2 text-slate-800 dark:text-slate-200">{m.meta.contextWindow}</td>
                  <td class="break-words px-3 py-2 align-top text-slate-800 dark:text-slate-200">
                    <ul class="m-0 list-none space-y-0.5 p-0">
                      {(m.meta.pricingTiers ?? [m.meta.pricingNote]).map((tier) => (
                        <li key={tier}>{tier}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="mt-4 flex flex-wrap gap-2 md:hidden" role="group" aria-label="Sort all models">
          {DIMENSIONS.map((d) => {
            const sortKey = sortSourceFor(d.key);
            const isActive = source === sortKey;
            return (
              <button
                key={d.key}
                type="button"
                aria-pressed={isActive}
                title={`Sort all models by ${d.label}`}
                onClick$={() => onSource$(sortKey)}
                class={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                  isActive
                    ? "border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500"
                    : "border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {d.short}
              </button>
            );
          })}
          <button
            type="button"
            aria-pressed={source === "average"}
            title="Sort all models by Overall"
            onClick$={() => onSource$("average")}
            class={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
              source === "average"
                ? "border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500"
                : "border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            }`}
          >
            Overall
          </button>
        </div>
        <div class="mt-6 space-y-4 md:hidden" aria-label="Exact scores for all models">
          {visibleModels.map((m) => (
            <article
              key={m.id}
              class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
            >
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="flex-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <a href={`/model/${m.slug}/`} class="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {m.name}
                  </a>
                </h3>
                <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Overall {m.scores.overall}
                </span>
                {!m.meta.noFreeId ? (
                  <span
                    class="cursor-help rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 transition-colors dark:bg-emerald-950/80 dark:text-emerald-300"
                    title={m.meta.freeTierNote ?? m.meta.pricingNote}
                  >
                    Free
                  </span>
                ) : (
                  <span class="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 transition-colors dark:bg-amber-950/80 dark:text-amber-300">
                    Paid
                  </span>
                )}
              </div>
              <dl class="mt-3 divide-y divide-slate-100 text-sm dark:divide-slate-800">
                {DIMENSIONS.map((d) => (
                  <div key={d.key} class="flex items-baseline justify-between gap-3 rounded px-2 py-1.5 odd:bg-slate-50 even:bg-white dark:odd:bg-slate-900/50 dark:even:bg-slate-950">
                    <dt class="font-medium text-slate-500 dark:text-slate-400">{d.label}</dt>
                    <dd class="text-right font-semibold text-slate-800 dark:text-slate-200">
                      {m.scores[d.key]}
                    </dd>
                  </div>
                ))}
                <div class="flex items-baseline justify-between gap-3 rounded px-2 py-1.5 odd:bg-slate-50 even:bg-white dark:odd:bg-slate-900/50 dark:even:bg-slate-950">
                  <dt class="font-medium text-slate-500 dark:text-slate-400">Overall Score</dt>
                  <dd class="text-right font-semibold text-slate-800 dark:text-slate-200">{m.scores.overall}</dd>
                </div>
                <div class="flex items-baseline justify-between gap-3 rounded px-2 py-1.5 odd:bg-slate-50 even:bg-white dark:odd:bg-slate-900/50 dark:even:bg-slate-950">
                  <dt class="font-medium text-slate-500 dark:text-slate-400">Context window</dt>
                  <dd class="text-right text-slate-800 dark:text-slate-200">{m.meta.contextWindow}</dd>
                </div>
                <div class="flex items-start justify-between gap-3 rounded px-2 py-1.5 odd:bg-slate-50 even:bg-white dark:odd:bg-slate-900/50 dark:even:bg-slate-950">
                  <dt class="shrink-0 font-medium text-slate-500 dark:text-slate-400">Pricing / 1M</dt>
                  <dd class="text-right text-slate-800 dark:text-slate-200">
                    <ul class="m-0 list-none space-y-0.5 p-0">
                      {(m.meta.pricingTiers ?? [m.meta.pricingNote]).map((tier) => (
                        <li key={tier}>{tier}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </>
      )}
      {displayCount.value < shown.length && (
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
          <button
            type="button"
            onClick$={() => {
              displayCount.value += 9;
            }}
            class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Show more
          </button>
          <button
            type="button"
            onClick$={() => {
              displayCount.value = shown.length;
            }}
            class="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Show all ({shown.length})
          </button>
        </div>
      )}
    </section>
  );
});
