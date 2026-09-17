import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { MODELS, MODEL_COLORS, DIMENSIONS, SOURCES, getModel } from "../data/models";
import type { AiModel, SourceKey } from "../data/models";
import { ModelSelect } from "./ModelSelect";
import { HexRadar } from "./HexRadar";
import type { RadarDatum } from "./HexRadar";

interface CompareSectionProps {
  a: string;
  b: string;
  c: string;
  source: SourceKey;
  onSelect$: QRL<(slot: "a" | "b" | "c", id: string) => void>;
  onSource$: QRL<(source: SourceKey) => void>;
}

const SLOT_LABELS = ["Model A", "Model B", "Model C"] as const;

export const CompareSection = component$<CompareSectionProps>(({ a, b, c, source, onSelect$, onSource$ }) => {
  const ids = [a, b, c];
  const options = MODELS.map((m) => ({ id: m.id, name: m.name }));

  const contributors = SOURCES.filter((s) => s.key !== "average");
  const activeLabel = SOURCES.find((s) => s.key === source)?.label ?? source;
  const activeFile = SOURCES.find((s) => s.key === source)?.file ?? "";

  // Keep selected models in series, handling missing source scores gracefully with N/A states.
  const seriesItems = ids
    .map((id, i) => {
      if (id === "") return undefined;
      const model = getModel(id);
      if (!model) return undefined;
      const sourceScores = source === "average" ? model.scores : model.sources[source];
      const hasData = source === "average" || sourceScores !== undefined;
      const scores = sourceScores ?? model.scores;
      return {
        slot: (["a", "b", "c"] as const)[i],
        model: { ...model, scores },
        color: MODEL_COLORS[i % MODEL_COLORS.length] as string,
        hasData,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  const uniqueMap = new Map<string, typeof seriesItems[0]>();
  for (const item of seriesItems) {
    if (!uniqueMap.has(item.model.id) || item.hasData) {
      uniqueMap.set(item.model.id, item);
    }
  }
  const series = Array.from(uniqueMap.values());
  const radarSeries: RadarDatum[] = series
    .filter((s) => s.hasData)
    .map((s) => ({ model: s.model, color: s.color }));

  const rows: { label: string; get: (m: AiModel) => string }[] = [
    ...DIMENSIONS.map((d) => ({ label: d.label, get: (m: AiModel) => String(m.scores[d.key]) })),
    { label: "Overall Score", get: (m: AiModel) => String(m.scores.overall) },
    { label: "Context window", get: (m: AiModel) => m.meta.contextWindow },
  ];

  return (
    <section id="compare" aria-labelledby="compare-heading" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <h2 id="compare-heading" class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Compare models
      </h2>
      <p class="mt-2 max-w-3xl text-sm text-slate-600">
        Pick up to three models. The hexagon shows the six scored dimensions (0–100); Overall Score is
        listed in the legend and table.
      </p>

      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {SLOT_LABELS.map((label, i) => {
          const slot = (["a", "b", "c"] as const)[i] as "a" | "b" | "c";
          const value = ids[i] as string;
          const others = ids.filter((_, j) => j !== i);
          return (
            <ModelSelect
              key={slot}
              label={label}
              selectId={`model-select-${slot}`}
              value={value}
              options={options}
              excludeIds={others}
              onChange$={(id: string) => onSelect$(slot, id)}
            />
          );
        })}
      </div>

      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:items-center">
        <div class="lg:col-span-2">
          <HexRadar series={radarSeries} />
        </div>
        <div class="lg:col-span-1 flex flex-col justify-center items-center lg:h-full lg:min-h-[320px] lg:text-center gap-6">
          <div class="w-full max-w-xs mx-auto text-center">
            <ModelSelect
              label="Results source"
              selectId="results-source"
              value={source}
              options={SOURCES.map((s) => ({ id: s.key, name: s.label }))}
              excludeIds={[]}
              allowEmpty={false}
              onChange$={(id: string) => onSource$(id as SourceKey)}
            />
            <p class="mt-1 text-xs text-slate-500">
              {source === "average" ? (
                <span title={"Reports used:\n" + contributors.map((s) => `- ${s.label}`).join("\n")}>
                  Mix of {contributors.length} independent reports.
                </span>
              ) : (
                <span title={"Source file: " + activeFile}>Showing only the {activeLabel} report.</span>
              )}
            </p>
          </div>

          {series.length > 0 && (
            <ul aria-label="Legend" class="flex flex-wrap justify-center gap-2">
              {series.map((s) => (
                <li
                  key={s.model.id}
                  class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm"
                >
                  <span
                    aria-hidden="true"
                    class="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                   <span
                     class="font-medium text-slate-800"
                   >
                     {s.model.name}
                   </span>
                   <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">
                     {s.hasData ? `Overall ${s.model.scores.overall}` : "Overall N/A"}
                   </span>
                    {(!s.model.meta.noFreeId) ? (
                      <span
                        class="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 cursor-help"
                        title={s.model.meta.freeTierNote ?? s.model.meta.pricingNote}
                      >
                        Free
                      </span>
                    ) : (
                     <span class="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">
                       Paid
                     </span>
                   )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {series.length > 0 && (
        <div class="mt-6 overflow-x-auto">
          <table class="w-full min-w-[560px] border-collapse text-sm">
            <caption class="mb-2 text-left font-semibold text-slate-800">
              Exact scores for the selected models
            </caption>
            <thead>
              <tr>
                <th scope="col" class="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                  Dimension
                </th>
                {series.map((s) => {
                  const isFree = !s.model.meta.noFreeId;
                  return (
                    <th
                      key={s.model.id}
                      scope="col"
                      class="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        class="mr-1 inline-block h-2.5 w-2.5 rounded-full align-middle"
                        style={{ backgroundColor: s.color }}
                      />
                       <span
                       >
                         {s.model.name}
                       </span>
                       {isFree ? (
                         <span
                           class="ml-1.5 rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 align-middle cursor-help"
                           title={s.model.meta.freeTierNote ?? s.model.meta.pricingNote}
                         >
                           Free
                         </span>
                       ) : (
                        <span class="ml-1.5 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 align-middle">
                          Paid
                        </span>
                      )}
                      {!s.hasData && (
                        <span class="ml-1.5 text-xs font-normal text-slate-400">(N/A)</span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} class="odd:bg-slate-50">
                  <th scope="row" class="px-3 py-2 text-left font-medium text-slate-700">
                    {r.label}
                  </th>
                  {series.map((s) => (
                    <td key={s.model.id} class="px-3 py-2 text-slate-800">
                      {s.hasData ? r.get(s.model) : "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
              <tr key="pricing" class="odd:bg-slate-50">
                <th scope="row" class="px-3 py-2 text-left font-medium text-slate-700">
                  Pricing / 1M
                </th>
                {series.map((s) => (
                  <td key={s.model.id} class="px-3 py-2 align-top text-slate-800">
                    <ul class="m-0 list-none space-y-0.5 p-0">
                      {(s.model.meta.pricingTiers ?? [s.model.meta.pricingNote]).map((tier) => (
                        <li key={tier}>{tier}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
});
