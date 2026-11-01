import { component$, type QRL, type Signal } from "@builder.io/qwik";
import { MODEL_COLORS, SOURCES, virtualDimFor, DIMENSIONS } from "../../data/models";
import type { AiModel, ResultsView } from "../../data/models";
import { RATER_GATE } from "../../data/sources.generated";
import { VendorIcon } from "../VendorIcon";
import { hexPoint, hexPolygon, type HexGeometry } from "./hex";
import { DIMENSION_LABELS, TABLE_KEYS, dimensionTooltip } from "./modelView";

const HEX_GEO: HexGeometry = { cx: 200, cy: 200, maxR: 130, labelR: 168 };

interface CompareSectionProps {
  source: Signal<ResultsView>;
  cmpA: Signal<string>;
  cmpB: Signal<string>;
  cmpC: Signal<string>;
  cmpOptions: { id: string; name: string }[];
  cmpModels: AiModel[];
  contributors: { key: ResultsView; label: string }[];
  activeSourceLabel: string;
  activeSourceFile: string;
  handleSourceChange$: QRL<(v: string) => void>;
}

/** Homepage compare section: A/B/C selectors, radar, results-source picker, table. */
export const CompareSection = component$<CompareSectionProps>(
  ({
    source,
    cmpA,
    cmpB,
    cmpC,
    cmpOptions,
    cmpModels,
    contributors,
    activeSourceLabel,
    activeSourceFile,
    handleSourceChange$,
  }) => {
    return (
      <section
        class="border-b-0 border-[#ccdae2] px-0 pb-12 pt-20 dark:border-[#274757]"
        id="compare"
        aria-labelledby="v2-compare-title"
      >
        <div class="flex items-start gap-6 max-[799px]:flex-col max-[799px]:gap-3">
          <h2
            id="v2-compare-title"
            class="min-w-0 flex-[2_1_0%] font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl"
          >
            Compare models
          </h2>
          <p class="mt-0 min-w-0 max-w-none flex-[3_1_0%] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
            Pick up to three models. Exact scores side by side, in the current results source (
            {activeSourceLabel}). Decision models can't be picked here — their scores aren't
            comparable; see the decision shelf below.
          </p>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-9 min-[1000px]:grid-cols-3">
          {[
            { label: "Model A", value: cmpA },
            { label: "Model B", value: cmpB },
            { label: "Model C", value: cmpC },
          ].map((slot, si) => (
            <div
              key={slot.label}
              class="flex flex-wrap items-baseline gap-2.5 border-b border-b-[#ccdae2] py-3 dark:border-b-[#274757]"
            >
              <span
                aria-hidden="true"
                class="h-3 w-3 flex-none self-center rounded-full"
                title={`${slot.label} plots in this color`}
                style={{ backgroundColor: MODEL_COLORS[si % MODEL_COLORS.length] }}
              />
              <span class="flex-1">{slot.label}</span>
              <select
                aria-label={slot.label}
                value={slot.value.value}
                onChange$={(_, el) => {
                  slot.value.value = el.value;
                }}
                class="max-w-full rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] px-2 py-1.5 text-md text-[color:var(--color-ink)] dark:border-[#274757]"
              >
                <option
                  value=""
                  class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]"
                >
                  — empty —
                </option>
                {cmpOptions.map((o) => (
                  <option
                    key={o.id}
                    value={o.id}
                    selected={o.id === slot.value.value}
                    class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]"
                  >
                    {o.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        {cmpModels.length > 0 && (
          <div class="mt-8 grid grid-cols-1 items-start gap-8 min-[1000px]:grid-cols-[1fr_3fr_2fr_1fr] min-[1000px]:items-center min-[1000px]:[&>:first-child]:col-start-2 min-[1000px]:[&>:last-child]:col-start-3">
            <div class="m-0 min-w-0 p-0" aria-label="Comparison radar chart">
              <svg
                viewBox="0 0 400 400"
                role="img"
                class="mx-0 mb-0 ml-auto block h-auto w-full max-w-2xl"
                aria-label={`Radar chart comparing ${cmpModels.map((m) => m.name).join(", ")}`}
              >
                {[25, 50, 75, 100].map((ring) => (
                  <polygon
                    key={ring}
                    points={hexPolygon(ring, HEX_GEO)}
                    fill="none"
                    class="stroke-[#ccdae2] dark:stroke-[#274757]"
                    stroke-width={ring === 100 ? 2 : 1}
                  />
                ))}
                {DIMENSIONS.map((d, i) => {
                  const end = hexPoint(100, i, HEX_GEO);
                  return (
                    <line
                      key={d.key}
                      x1={HEX_GEO.cx}
                      y1={HEX_GEO.cy}
                      x2={end.x}
                      y2={end.y}
                      class="stroke-[#ccdae2] dark:stroke-[#274757]"
                      stroke-width="1"
                    />
                  );
                })}
                {cmpModels.map((m, si) => (
                  <polygon
                    key={m.id}
                    points={DIMENSIONS.map((d, i) => {
                      const p = hexPoint(m.scores[d.key], i, HEX_GEO);
                      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                    }).join(" ")}
                    fill={MODEL_COLORS[si % MODEL_COLORS.length]}
                    fill-opacity={0.35}
                    stroke={MODEL_COLORS[si % MODEL_COLORS.length]}
                    stroke-width={2}
                    stroke-linejoin="round"
                  >
                    <title>{`${m.name} (Overall ${m.scores.overall})`}</title>
                  </polygon>
                ))}
                {cmpModels.map((m, si) =>
                  DIMENSIONS.map((d, i) => {
                    const p = hexPoint(m.scores[d.key], i, HEX_GEO);
                    return (
                      <circle
                        key={`${m.id}-${d.key}`}
                        cx={p.x}
                        cy={p.y}
                        r={4.5}
                        class="stroke-[color:var(--color-page)] [stroke-width:1.5]"
                        style={{ fill: MODEL_COLORS[si % MODEL_COLORS.length] }}
                      >
                        <title>{dimensionTooltip(m, d.key)}</title>
                      </circle>
                    );
                  }),
                )}
                {DIMENSIONS.map((d, i) => {
                  const p = hexPoint(100, i, HEX_GEO, HEX_GEO.labelR);
                  return (
                    <text
                      key={d.key}
                      x={p.x}
                      y={p.y}
                      text-anchor="middle"
                      dominant-baseline="middle"
                      class="fill-[#577184] font-[family-name:var(--font-body)] text-xs font-semibold dark:fill-[#93adbe]"
                    >
                      <title>{d.description}</title>
                      {d.short}
                    </text>
                  );
                })}
              </svg>
            </div>
            <div class="min-w-0">
              <div class="mx-auto mb-10 w-full max-w-xs text-center">
                <label class="block text-md text-[#577184] dark:text-[#93adbe]">
                  Results source{" "}
                  <select
                    aria-label="Results source"
                    value={source.value}
                    onChange$={(_, el) => {
                      handleSourceChange$(el.value);
                    }}
                    class="mx-auto mt-2.5 block w-fit max-w-full rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] px-2 py-1.5 text-center text-md text-[color:var(--color-ink)] [text-align-last:center] dark:border-[#274757]"
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
                <p class="mt-2.5 leading-normal text-[#577184] dark:text-[#93adbe]">
                  {source.value === "average" ? (
                    <span
                      title={
                        "All reporting agents:\n" +
                        contributors.map((s) => `- ${s.label}`).join("\n") +
                        `\n\nOnly reports from models with own Overall above ${RATER_GATE} count toward the average.`
                      }
                    >
                      Overall score — average of qualifying reports (raters above {RATER_GATE}{" "}
                      Overall).
                    </span>
                  ) : virtualDimFor(source.value) !== undefined ? (
                    <span
                      title={`Same numbers as the Overall view, ranked by ${activeSourceLabel} score.`}
                    >
                      Overall scores, sorted by {activeSourceLabel}.
                    </span>
                  ) : (
                    <span title={"Source file: " + activeSourceFile}>
                      Showing only the {activeSourceLabel} report.
                    </span>
                  )}
                </p>
              </div>
              <ul
                aria-label="Legend"
                class="mx-auto grid max-w-xs list-none gap-3 p-0 text-center md:pt-6"
              >
                {cmpModels.map((m, si) => (
                  <li
                    key={m.id}
                    class="flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span
                      aria-hidden="true"
                      class="h-3 w-3 flex-none rounded-full"
                      style={{ backgroundColor: MODEL_COLORS[si % MODEL_COLORS.length] }}
                    />
                    <a
                      href={`/model/${m.slug}/`}
                      class="inline-flex items-center gap-2 font-semibold"
                    >
                      <VendorIcon id={m.id} name={m.name} /> {m.name}
                    </a>
                    <span>Overall {m.scores.overall}</span>
                    {m.hasFreeTier ? (
                      <span title={m.meta.freeTierNote ?? m.meta.pricingNote}>· Free</span>
                    ) : (
                      <span>· Paid</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {cmpModels.length > 0 && (
          <div
            class="mt-9 w-full overflow-x-auto"
            tabIndex={0}
            aria-label="Scroll to see compared models"
          >
            <table class="w-full min-w-[800px] table-fixed border-collapse text-md leading-tight tabular-nums max-[640px]:w-[150vw] max-[640px]:min-w-0">
              <caption class="sr-only">Exact scores for the selected models</caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="w-[10.5%] break-words border-b border-b-[#d4e0e6] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] first:w-[22%] first:pl-4 first:text-left max-[640px]:w-[22%] max-[640px]:first:w-[34%] dark:border-b-[#274757] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                  >
                    Dimension
                  </th>
                  {cmpModels.map((m) => (
                    <th
                      scope="col"
                      key={m.id}
                      class="w-[10.5%] break-words border-b border-b-[#d4e0e6] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] max-[640px]:w-[22%] dark:border-b-[#274757] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                    >
                      <span class="inline-flex items-center gap-2.5">
                        <VendorIcon id={m.id} name={m.name} />
                        <a href={`/model/${m.slug}/`}>{m.name}</a>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_KEYS.map((k) => (
                  <tr key={k} class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                    <th
                      scope="row"
                      class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-medium text-[#496779] dark:border-b-[#274757] dark:text-[#a9c2d2]"
                    >
                      {DIMENSION_LABELS[k]}
                    </th>
                    {cmpModels.map((m) => (
                      <td
                        key={m.id}
                        class="break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[color:var(--color-ink)] max-[640px]:w-[22%] dark:border-b-[#274757]"
                      >
                        {m.scores[k]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                  <th
                    scope="row"
                    class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-medium text-[#496779] dark:border-b-[#274757] dark:text-[#a9c2d2]"
                  >
                    Overall Score
                  </th>
                  {cmpModels.map((m) => (
                    <td
                      key={m.id}
                      class="break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-lg font-bold text-[#275bad] max-[640px]:w-[22%] dark:border-b-[#274757] dark:text-[#9dbdf5]"
                    >
                      {m.scores.overall}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  },
);
