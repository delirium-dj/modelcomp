import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { MODELS, MODEL_COLORS, DIMENSIONS, getModel } from "../data/models";
import type { AiModel } from "../data/models";
import { ModelSelect } from "./ModelSelect";
import { HexRadar } from "./HexRadar";
import type { RadarDatum } from "./HexRadar";

interface CompareSectionProps {
  a: string;
  b: string;
  c: string;
  onSelect$: QRL<(slot: "a" | "b" | "c", id: string) => void>;
}

const SLOT_LABELS = ["Model A", "Model B", "Model C"] as const;

export const CompareSection = component$<CompareSectionProps>(({ a, b, c, onSelect$ }) => {
  const ids = [a, b, c];
  const options = MODELS.map((m) => ({ id: m.id, name: m.name }));

  const picked = ids
    .map((id) => (id === "" ? undefined : getModel(id)))
    .filter((m): m is AiModel => m !== undefined);
  const unique: AiModel[] = Array.from(new Map(picked.map((m) => [m.id, m])).values());
  const series: RadarDatum[] = unique.map((model, i) => ({
    model,
    color: MODEL_COLORS[i % MODEL_COLORS.length] as string,
  }));

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

      <div class="mt-8">
        <HexRadar series={series} />
      </div>

      {series.length > 0 && (
        <>
          <ul aria-label="Legend" class="mx-auto mt-4 flex max-w-[560px] flex-wrap justify-center gap-2">
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
                <span class="font-medium text-slate-800">{s.model.name}</span>
                <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">
                  Overall {s.model.scores.overall}
                </span>
                {s.model.meta.noFreeId && (
                  <span class="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">
                    Paid
                  </span>
                )}
              </li>
            ))}
          </ul>

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
                  {series.map((s) => (
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
                      {s.model.name}
                    </th>
                  ))}
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
                        {r.get(s.model)}
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
        </>
      )}
    </section>
  );
});
