import { component$, useSignal, type QRL, type Signal } from "@builder.io/qwik";
import { SOURCES } from "../../data/models";
import type { AiModel, DimensionKey, ResultsView } from "../../data/models";
import { VendorIcon } from "../VendorIcon";
import {
  DIMENSION_SHORT,
  TABLE_KEYS,
  buildHlStats,
  hlClass,
  modelMatchesQuery,
} from "./modelView";

/** All-models page size (both the cards grid and the list table). */
export const PAGE_SIZE = 12;

type SortKey = DimensionKey | "overall" | "name";

const orderedScoreCols: ("overall" | DimensionKey)[] = ["overall", ...TABLE_KEYS];

interface ModelsSectionProps {
  source: Signal<ResultsView>;
  /** Source-ranked generative models (scores already swapped for the source). */
  generative: AiModel[];
  query: Signal<string>;
  searchRef: Signal<HTMLInputElement | undefined>;
  displayCount: Signal<number>;
  activeSourceLabel: string;
  handleSourceChange$: QRL<(v: string) => void>;
}

/** Homepage "All models" section: toolbar, search, cards/list views, table. */
export const ModelsSection = component$<ModelsSectionProps>(
  ({ source, generative, query, searchRef, displayCount, activeSourceLabel, handleSourceChange$ }) => {
    const sortKey = useSignal<SortKey>("overall");
    const sortDirection = useSignal<1 | -1>(-1);
    const allModelsView = useSignal<"cards" | "list">("cards");
    const scrollerRef = useSignal<HTMLDivElement>();

    const q = query.value.trim().toLowerCase();
    const filtered = generative.filter((m) => modelMatchesQuery(m, q));
    const visibleModels = filtered.slice(0, displayCount.value);
    const sorted = [...filtered].sort((a, b) => {
      if (sortKey.value === "name") return sortDirection.value * a.name.localeCompare(b.name);
      const key = sortKey.value as keyof typeof a.scores;
      const primary = sortDirection.value * (a.scores[key] - b.scores[key]);
      if (primary !== 0) return primary;
      if (key !== "overall") {
        const secondary = sortDirection.value * (a.scores.overall - b.scores.overall);
        if (secondary !== 0) return secondary;
      }
      return a.name.localeCompare(b.name);
    });
    const hlStats = buildHlStats(filtered.map((m) => m.scores), orderedScoreCols);
    const reportCount = (m: AiModel) => Object.keys(m.sources).filter((k) => k !== "average").length;

    return (
      <section class="px-0 pb-0 pt-12" id="models" aria-labelledby="v2-ratings-title">
        <div class="flex items-center justify-between gap-6">
          <h2
            id="v2-ratings-title"
            class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl"
          >
            {filtered.length} models
          </h2>
          <div class="flex items-center gap-4">
            <div
              class="inline-flex gap-0.5 rounded-full border border-[#ccdae2] p-0.5 dark:border-[#274757]"
              role="group"
              aria-label="All models display"
            >
              <button
                type="button"
                class={
                  allModelsView.value === "cards"
                    ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                    : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[color:var(--color-ink)] dark:text-[#93adbe]"
                }
                aria-pressed={allModelsView.value === "cards"}
                onClick$={() => {
                  allModelsView.value = "cards";
                }}
              >
                Cards
              </button>
              <button
                type="button"
                class={
                  allModelsView.value === "list"
                    ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                    : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[color:var(--color-ink)] dark:text-[#93adbe]"
                }
                aria-pressed={allModelsView.value === "list"}
                onClick$={() => {
                  allModelsView.value = "list";
                }}
              >
                List
              </button>
            </div>
          </div>
        </div>
        <p class="mt-3.5 max-w-sm text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
          Every tracked model in the current results source ({activeSourceLabel}). Search to find a
          model, or open its page for the full breakdown.
        </p>
        <div class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <input
            ref={searchRef}
            id="model-search"
            type="search"
            role="searchbox"
            aria-label="Search models"
            placeholder="Search models…"
            value={query.value}
            onInput$={(_, el) => {
              query.value = el.value;
              displayCount.value = PAGE_SIZE;
            }}
            class="min-w-56 max-w-sm flex-[1_1_220px] rounded-full border border-[#ccdae2] bg-transparent px-4 py-2 text-xs text-[color:var(--color-ink)] placeholder:text-[#577184] dark:border-[#274757] dark:placeholder:text-[#93adbe]"
          />
          <label class="flex w-full items-center text-md text-[#577184] dark:text-[#93adbe] px-4 min-w-0">
            <span class="whitespace-nowrap mr-3">Results source</span>
            <select
              aria-label="Results source"
              value={source.value}
              onChange$={(_, el) => {
                handleSourceChange$(el.value);
              }}
              class="flex-1 min-w-0 rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] py-1.5 max-[520px]:py-1 text-center text-md max-[520px]:text-xs text-[color:var(--color-ink)] [text-align-last:center] dark:border-[#274757]"
            >
              {SOURCES.map((s) => (
                <option
                  key={s.key}
                  value={s.key}
                  selected={s.key === source.value}
                  class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]"
                >
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        {q !== "" && (
          <p class="mt-3 text-xs text-[#577184] dark:text-[#93adbe]">
            {filtered.length} of {generative.length} models
          </p>
        )}
        {filtered.length === 0 ? (
          <p class="mt-6">
            No models match your search for the current results source. Try a different search or
            source.
          </p>
        ) : allModelsView.value === "cards" ? (
          <>
            <div class="mt-10 grid grid-cols-1 gap-5 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {visibleModels.map((m) => (
                <article
                  class="flex flex-col border border-[#ccdae2] bg-[#f7fafb] px-6 py-5 dark:border-[#274757] dark:bg-[#132a3b]"
                  key={m.id}
                >
                  <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0 flex-1">
                      <div class="flex items-center gap-2.5">
                        <VendorIcon id={m.id} name={m.name} size="lg" />
                        <div class="min-w-0">
                          <h3 class="m-0 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight">
                            <a href={`/model/${m.slug}/`}>{m.name}</a>
                          </h3>
                          <p class="mt-0 text-xs font-bold">
                            {m.hasFreeTier ? (
                              <span
                                class="text-[#1c7a4d] dark:text-[#7fd6a4]"
                                title={m.meta.freeTierNote ?? m.meta.pricingNote}
                              >
                                Free tier
                              </span>
                            ) : (
                              <span
                                class="text-[#9a5c15] dark:text-[#e8b47e]"
                                title="Cost is scored on paid pricing"
                              >
                                Paid
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="shrink-0 text-right leading-none"
                      title="Overall score out of 100 — mean of the five quality dimensions"
                    >
                      <strong class="font-[family-name:var(--font-display)] text-4xl font-semibold tabular-nums tracking-tighter">
                        {m.scores.overall}
                      </strong>
                      <span class="mt-1 block text-[11px] font-normal text-[#577184] dark:text-[#93adbe]">
                        Overall
                      </span>
                    </div>
                  </div>
                  <p class="mt-2.5 text-sm leading-relaxed">{m.short}</p>
                  <dl class="m-0 mt-3.5 p-0 text-xs leading-relaxed">
                    <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                      <dt class="shrink-0 whitespace-nowrap font-bold">Context</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                        {m.meta.contextWindow}
                      </dd>
                    </div>
                    <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                      <dt class="shrink-0 whitespace-nowrap font-bold">Modalities</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                        {m.meta.modalities}
                      </dd>
                    </div>
                    <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                      <dt class="shrink-0 whitespace-nowrap font-bold">Pricing</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                        {m.meta.pricingNote}
                      </dd>
                    </div>
                    <div
                      title="Newest report date across this model's findings files"
                      class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]"
                    >
                      <dt class="shrink-0 whitespace-nowrap font-bold">Verified</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                        {m.verified ?? "—"} · {reportCount(m)} reports
                      </dd>
                    </div>
                  </dl>
                  <p class="mt-3 border-t border-t-[#ccdae2] pt-[10px] text-xs leading-relaxed text-[#577184] dark:border-t-[#274757] dark:text-[#93adbe]">
                    Tool {m.scores.tool} · Reason {m.scores.reasoning} · Context {m.scores.context} ·
                    Code {m.scores.coding} · Multi {m.scores.multimodal} · Cost {m.scores.cost}
                  </p>
                </article>
              ))}
            </div>
            {displayCount.value < filtered.length && (
              <div class="mt-9 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  class="inline-block rounded-lg bg-[#19384d] px-5 py-3 text-sm font-bold text-[#ecf3f6] hover:underline dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                  onClick$={() => {
                    displayCount.value += PAGE_SIZE;
                  }}
                >
                  Show more
                </button>
                <button
                  type="button"
                  class="inline-block rounded-lg border border-[#ccdae2] bg-transparent px-5 py-3 text-sm font-bold text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] dark:border-[#274757]"
                  onClick$={() => {
                    displayCount.value = filtered.length;
                  }}
                >
                  Show all ({filtered.length})
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div
              class="mt-6 flex flex-wrap gap-2 min-[800px]:hidden"
              role="group"
              aria-label="Sort all models"
            >
              {orderedScoreCols.map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={sortKey.value === key}
                  class={
                    sortKey.value === key
                      ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                      : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[color:var(--color-ink)] dark:text-[#93adbe]"
                  }
                  onClick$={() => {
                    if (sortKey.value === key) sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                    else {
                      sortKey.value = key;
                      sortDirection.value = -1;
                    }
                    scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                >
                  {key === "overall" ? "Overall" : DIMENSION_SHORT[key]}{" "}
                  {sortKey.value === key ? (sortDirection.value === -1 ? "↓" : "↑") : ""}
                </button>
              ))}
            </div>
            <div
              ref={scrollerRef}
              class="mt-9 w-full overflow-x-auto"
              tabIndex={0}
              aria-label="Scroll to see all score columns"
            >
              <table class="w-full min-w-[800px] table-fixed border-collapse text-xs leading-tight tabular-nums max-[640px]:w-[205vw] max-[640px]:min-w-0">
                <caption class="sr-only">Model leaderboard, average scores out of 100</caption>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      aria-sort={
                        sortKey.value === "name"
                          ? sortDirection.value === -1
                            ? "descending"
                            : "ascending"
                          : "none"
                      }
                      class="w-[10.5%] break-words border-b border-b-[#d4e0e6] border-t border-t-[#9eb5c3] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] first:w-[22%] first:pl-4 first:text-left max-[640px]:w-[10.98%] max-[640px]:first:w-[23.17%] dark:border-b-[#274757] dark:border-t-[#3a5a6e] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                    >
                      <button
                        type="button"
                        class={`group relative cursor-pointer whitespace-nowrap border-0 bg-transparent px-0 py-0.5 font-inherit text-inherit ${sortKey.value === "name" ? "text-[#1e58ad] dark:text-[#9dbdf5]" : ""}`}
                        onClick$={() => {
                          if (sortKey.value === "name") sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                          else {
                            sortKey.value = "name";
                            sortDirection.value = 1;
                          }
                          scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                        }}
                      >
                        Model
                        <span aria-hidden="true" class="ml-1 inline-block w-3 text-[#839aaa]">
                          {sortKey.value === "name" ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}
                        </span>
                      </button>
                    </th>
                    {orderedScoreCols.map((key) => (
                      <th
                        scope="col"
                        key={key}
                        aria-sort={
                          sortKey.value === key
                            ? sortDirection.value === -1
                              ? "descending"
                              : "ascending"
                            : "none"
                        }
                        class="w-[10.5%] break-words border-b border-b-[#d4e0e6] border-t border-t-[#9eb5c3] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] max-[640px]:w-[10.98%] dark:border-b-[#274757] dark:border-t-[#3a5a6e] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                      >
                        <button
                          type="button"
                          title={
                            key === "cost"
                              ? "Cost efficiency — hover any value for Pricing / 1M"
                              : key === "context"
                                ? "Context window — hover any value for the window size"
                                : undefined
                          }
                          class={`group relative cursor-pointer whitespace-nowrap border-0 bg-transparent px-0 py-0.5 font-inherit text-inherit ${sortKey.value === key ? "text-[#1e58ad] dark:text-[#9dbdf5]" : ""}`}
                          onClick$={() => {
                            if (sortKey.value === key) sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                            else {
                              sortKey.value = key;
                              sortDirection.value = -1;
                            }
                            scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                          }}
                        >
                          {key === "overall" ? "Overall" : DIMENSION_SHORT[key]}
                          <span aria-hidden="true" class="ml-1 inline-block w-3 text-[#839aaa]">
                            {sortKey.value === key ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}
                          </span>
                          {key === "overall" && (
                            <span
                              class="absolute left-0 top-[calc(100%+10px)] z-10 hidden w-60 cursor-default whitespace-normal rounded-lg bg-[#19384d] px-3 py-2.5 text-left text-xs font-normal leading-normal text-[#ecf3f6] shadow-lg group-hover:block group-focus-visible:block dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                              role="tooltip"
                            >
                              <span
                                aria-hidden="true"
                                class="absolute left-6 -top-1 h-2.5 w-2.5 rotate-45 bg-inherit"
                              />
                              Overall is the average of tool use, reasoning, context, coding and
                              multimodal scores. Cost efficiency is excluded.
                            </span>
                          )}
                        </button>
                      </th>
                    ))}
                    <th
                      scope="col"
                      title="Newest report date across each model's findings files"
                      class="w-[10.5%] break-words border-b border-b-[#d4e0e6] border-t border-t-[#9eb5c3] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] max-[640px]:w-[10.98%] dark:border-b-[#274757] dark:border-t-[#3a5a6e] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                    >
                      Verified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.slice(0, displayCount.value).map((m) => (
                    <tr key={m.id} class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                      <th
                        scope="row"
                        class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-semibold text-[#496779] first:w-[22%] first:pl-4 max-[640px]:first:w-[23.17%] dark:border-b-[#274757] dark:text-[#a9c2d2]"
                      >
                        <span class="inline-flex items-center gap-2">
                          <VendorIcon id={m.id} name={m.name} />
                          <a href={`/model/${m.slug}/`}>{m.name}</a>
                        </span>
                      </th>
                      {orderedScoreCols.map((key) => {
                        const value = m.scores[key];
                        return (
                          <td
                            key={key}
                            title={
                              key === "cost"
                                ? `Pricing / 1M: ${(m.meta.pricingTiers ?? [m.meta.pricingNote]).join("; ")}`
                                : key === "context"
                                  ? `Context window: ${m.meta.contextWindow}`
                                  : undefined
                            }
                            class={`break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[color:var(--color-ink)] max-[640px]:w-[10.98%] dark:border-b-[#274757]${key === "overall" ? " font-bold text-[#275bad] dark:text-[#9dbdf5]" : ""}${hlClass(hlStats, key, value)}`}
                          >
                            {value}
                          </td>
                        );
                      })}
                      <td
                        title="Newest report date across this model's findings files"
                        class="break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[color:var(--color-ink)] max-[640px]:w-[10.98%] dark:border-b-[#274757]"
                      >
                        {m.verified ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {!(filtered.length === 0) && allModelsView.value === "list" && displayCount.value < sorted.length && (
          <div class="mt-9 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              class="inline-block rounded-lg bg-[#19384d] px-5 py-3 text-sm font-bold text-[#ecf3f6] hover:underline dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
              onClick$={() => {
                displayCount.value += PAGE_SIZE;
              }}
            >
              Show more
            </button>
            <button
              type="button"
              class="inline-block rounded-lg border border-[#ccdae2] bg-transparent px-5 py-3 text-sm font-bold text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] dark:border-[#274757]"
              onClick$={() => {
                displayCount.value = sorted.length;
              }}
            >
              Show all ({sorted.length})
            </button>
          </div>
        )}
        <p class="py-4 text-right text-xs leading-relaxed text-[#577184] dark:text-[#93adbe]">
          Averages recomputed by pnpm sync from per-model research files. Cost never counts toward
          Overall.
        </p>
      </section>
    );
  },
);
