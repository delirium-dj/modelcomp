import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  MODELS,
  SOURCES,
  DIMENSIONS,
  virtualDimFor,
  isDecisionModel,
} from "../data/models";
import { RATER_GATE } from "../data/sources.generated";
import type { DimensionKey, ResultsView, SourceKey } from "../data/models";
import "../components/v2/v2.css";
import { VendorIcon } from "../components/VendorIcon";
import { V2Footer } from "../components/v2/V2Footer";
import { V2Header } from "../components/v2/V2Header";

/**
 * /v2 — full-site redesign in the design-6sol language.
 * Same infrastructure (MODELS from pnpm sync), new UI everywhere:
 * header, hero, compare, all-models, methodology, footer.
 * Homepage (/) is untouched; delete this folder to abandon.
 */

type SortKey = DimensionKey | "overall" | "name";

const tableKeys: DimensionKey[] = ["tool", "reasoning", "context", "coding", "multimodal", "cost"];
const names: Record<DimensionKey, string> = {
  tool: "Tool use",
  reasoning: "Reasoning",
  context: "Context window",
  coding: "Coding",
  multimodal: "Multimodal",
  cost: "Cost efficiency",
};
const colNames: Record<DimensionKey, string> = {
  tool: "Tool",
  reasoning: "Reason",
  context: "Context",
  coding: "Code",
  multimodal: "Multi",
  cost: "Cost",
};

const HEX_CX = 200;
const HEX_CY = 200;
const HEX_MAX_R = 130;
const HEX_LABEL_R = 168;
const HEX_GAMMA = Math.LN2 / Math.log(100 / 75);
// A/B/C series colors — same as the original compare page (models.ts MODEL_COLORS).
const SERIES_COLORS = ["#4f46e5", "#059669", "#d97706"];
function hexPoint(value: number, index: number, maxR = HEX_MAX_R): { x: number; y: number } {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  const clamped = Math.max(0, Math.min(100, value));
  const r = Math.pow(clamped / 100, HEX_GAMMA) * maxR;
  return { x: HEX_CX + r * Math.cos(angle), y: HEX_CY + r * Math.sin(angle) };
}
function hexPolygon(value: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const p = hexPoint(value, i);
    pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  return pts.join(" ");
}

/** Rich per-dot tooltip, same logic as the original HexRadar. */
function tooltipFor(m: (typeof MODELS)[number], key: DimensionKey): string {
  let base = `${m.name} — ${names[key]}: ${m.scores[key]}`;
  if (key === "cost") base = `${m.name} — Cost: ${m.meta.pricingNote}`;
  else if (key === "context") base = `${m.name} — Context: ${m.meta.contextWindow}`;
  else if (key === "multimodal") base = `${m.name} — Multimodal: ${m.meta.modalities}`;
  if (m.meta.freeTierNote) base += ` (${m.meta.freeTierNote})`;
  return base;
}

const PAGE_SIZE = 12;

/** Top-3 generative model ids for a results source (mirrors the v1 homepage:
 *  dimension top-3 for virtual views, the agent's own top-3 for reporting
 *  agents, Overall top-3 otherwise). Used to re-seat the compare slots
 *  whenever the results source changes. */
function top3Ids(src: ResultsView): [string, string, string] {
  const sd = virtualDimFor(src);
  const mapped = MODELS.filter(
    (m) => src === "average" || sd !== undefined || m.sources[src as SourceKey] !== undefined,
  ).map((m) =>
    src === "average" || sd !== undefined ? m : { ...m, scores: m.sources[src as SourceKey]! },
  );
  const gen = mapped.filter((m) => !isDecisionModel(m));
  gen.sort((a, b) =>
    sd !== undefined
      ? b.scores[sd] - a.scores[sd] || b.scores.overall - a.scores.overall
      : b.scores.overall - a.scores.overall,
  );
  return [gen[0]?.id ?? "", gen[1]?.id ?? "", gen[2]?.id ?? ""];
}

export default component$(() => {
  const sortKey = useSignal<SortKey>("overall");
  const sortDirection = useSignal<1 | -1>(-1);
  const allModelsView = useSignal<"cards" | "list">("cards");
  const theme = useSignal<"light" | "dark">("light");
  const query = useSignal("");
  const displayCount = useSignal(PAGE_SIZE);
  const source = useSignal<ResultsView>("average");
  const scrollerRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    // Single writer: signal + <html>.dark + both storage keys always agree.
    // v1's global toggle/anti-flash owns html.dark, and Tailwind's dark:
    // utilities answer to ANY .dark ancestor — so a stale html.dark would
    // leak dark styles into light mode. Syncing here kills that leak.
    const root = document.documentElement;
    const apply = (v: "light" | "dark") => {
      theme.value = v;
      root.classList.toggle("dark", v === "dark");
      try {
        localStorage.setItem("v2-theme", v);
        localStorage.setItem("theme", v);
      } catch {
        /* storage unavailable — theme just doesn't persist */
      }
    };
    const sys = window.matchMedia("(prefers-color-scheme: dark)");
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("v2-theme");
    } catch {
      stored = null;
    }
    if (stored === "light" || stored === "dark") {
      apply(stored);
      return;
    }
    if (root.classList.contains("dark")) {
      apply("dark");
      return;
    }
    apply(sys.matches ? "dark" : "light");
    const follow = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("v2-theme")) return;
      } catch {
        /* storage unavailable — keep following */
      }
      apply(e.matches ? "dark" : "light");
    };
    sys.addEventListener("change", follow);
    cleanup(() => sys.removeEventListener("change", follow));
  });

  // Results-source mapping mirrors the v1 All-models logic: average numbers,
  // virtual dimension views, or one reporting agent's own scores.
  const sortDim = virtualDimFor(source.value);
  const withSource = MODELS.filter(
    (m) =>
      source.value === "average" ||
      sortDim !== undefined ||
      m.sources[source.value as SourceKey] !== undefined,
  ).map((m) =>
    source.value === "average" || sortDim !== undefined
      ? m
      : { ...m, scores: m.sources[source.value as SourceKey]! },
  );
  const rankBase = [...withSource].sort((a, b) =>
    sortDim !== undefined
      ? b.scores[sortDim] - a.scores[sortDim] || b.scores.overall - a.scores.overall
      : b.scores.overall - a.scores.overall,
  );
  const generative = rankBase.filter((m) => !isDecisionModel(m));
  const decisions = rankBase.filter((m) => isDecisionModel(m));
  const q = query.value.trim().toLowerCase();
  const filtered = generative.filter(
    (m) =>
      q === "" ||
      m.name.toLowerCase().includes(q) ||
      m.id.toLowerCase().includes(q) ||
      m.short.toLowerCase().includes(q),
  );
  const decisionFiltered = decisions.filter(
    (m) =>
      q === "" ||
      m.name.toLowerCase().includes(q) ||
      m.id.toLowerCase().includes(q) ||
      m.short.toLowerCase().includes(q),
  );
  const top = rankBase.find((m) => !isDecisionModel(m)) ?? rankBase[0];
  const visibleModels = filtered.slice(0, displayCount.value);

  // List-view sorting (column sort within the current source ranking).
  // Exact values throughout — no rounding in display, highlights, or order.
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
  const colBestWorst = (get: (s: (typeof rankBase)[number]["scores"]) => number) => {
    if (filtered.length === 0) return { best: null as number | null, worst: null as number | null };
    const vals = filtered.map((r) => get(r.scores));
    return { best: Math.max(...vals), worst: Math.min(...vals) };
  };
  const hlStats = new Map<string, { best: number | null; worst: number | null }>([
    ["overall", colBestWorst((s) => s.overall)],
    ...tableKeys.map((k) => [k, colBestWorst((s) => s[k])] as const),
  ]);
  const hlClass = (col: string, value: number): string => {
    const st = hlStats.get(col);
    if (!st || st.best === null || st.worst === null) return "";
    if (value === st.best) return " bg-[#d3ead9] font-bold text-[#14532d] dark:bg-[#1d4a2f] dark:text-[#bbf7d0]";
    if (value === st.worst) return " bg-[#f7d9d4] text-[#7f1d1d] dark:bg-[#5a2320] dark:text-[#fecaca]";
    return "";
  };

  // Compare slots default to the top 3 of the current source ranking.
  const cmpOptions = generative
    .map((m) => ({ id: m.id, name: m.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const cmpA = useSignal(generative[0]?.id ?? "");
  const cmpB = useSignal(generative[1]?.id ?? "");
  const cmpC = useSignal(generative[2]?.id ?? "");
  const cmpModels = [cmpA.value, cmpB.value, cmpC.value]
    .map((id) => generative.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => m !== undefined);
  const reportCount = (m: (typeof rankBase)[number]) =>
    Object.keys(m.sources).filter((k) => k !== "average").length;
  const activeSourceLabel = SOURCES.find((s) => s.key === source.value)?.label ?? source.value;
  const activeSourceFile = SOURCES.find((s) => s.key === source.value)?.file ?? "";
  const contributors = SOURCES.filter(
    (s) => s.key !== "average" && virtualDimFor(s.key) === undefined,
  );
  // Shared source-change handler (compare sidebar + All-models toolbar):
  // switch the source and re-seat the compare slots on that source's top 3,
  // exactly like the v1 homepage. Slots stay user-overridable afterwards.
  // NOTE: must be a QRL ($(...)) — a plain closure cannot be serialized into
  // the onChange$ handlers that reference it.
  const handleSourceChange$ = $((v: string) => {
    source.value = v as ResultsView;
    displayCount.value = PAGE_SIZE;
    const [a, b, c] = top3Ids(v as ResultsView);
    cmpA.value = a;
    cmpB.value = b;
    cmpC.value = c;
  });

  if (!top) {
    return <main class="px-6 py-20 text-center">No models in the current dataset.</main>;
  }

  const orderedScoreCols: ("overall" | DimensionKey)[] = ["overall", ...tableKeys];

  return (
    <main
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
      id="top"
    >
      <V2Header theme={theme} navBase="" />
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">

        <section class="-mx-10 bg-[#e2edf2] px-10 text-[color:var(--color-ink)] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822] dark:text-[#f3f8fa]" aria-labelledby="v2-title">
          <div class="grid grid-cols-1 items-center gap-8 pb-12 pt-16 min-[1000px]:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
            <div class="v2-hero-copy">
              <h1 id="v2-title" class="font-[family-name:var(--font-display)] text-[clamp(40px,4.6vw,64px)] font-medium leading-none tracking-tighter">
                Compare AI coding models on <span class="text-[color:var(--color-primary)]">what actually matters</span>
              </h1>
              <p class="mt-4 max-w-xl text-base leading-relaxed text-[#577184] dark:text-[#c6d9e3]">
                Tool use, reasoning, context, multimodal, coding and cost — normalized to 1–100 from
                public benchmarks so current and future models can be compared side by side.
              </p>
              <div class="mt-7 flex flex-wrap gap-3">
                <a href="/#compare" class="inline-block rounded-lg bg-[#19384d] px-5 py-3 text-sm font-bold text-[#ecf3f6] hover:underline dark:bg-[#f3f8fa] dark:text-[#0a1822]">
                  Compare models
                </a>
                <a href="/#methodology" class="inline-block rounded-lg border border-[#ccdae2] bg-transparent px-5 py-3 text-sm font-bold text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] dark:border-[rgba(243,248,250,0.4)] dark:text-[#f3f8fa] dark:hover:border-[#f3f8fa]">
                  How scoring works
                </a>
              </div>
            </div>
            <div class="v2-hero-media">
              <img
                src="/favicon.svg"
                alt="ModelComp logo: a hexagon with six dimension dots around a core"
                width={400}
                height={400}
                class="mx-auto h-auto w-full max-w-56"
              />
            </div>
          </div>
        </section>

        <section class="grid grid-cols-3 border-b border-b-[#ccdae2] max-[800px]:grid-cols-2 max-[520px]:block dark:border-b-[#274757]" aria-label="Dataset facts">
          <div class="py-7 pr-7 text-right max-[800px]:text-center max-[520px]:border-b max-[520px]:border-b-[#ccdae2] max-[520px]:px-0 max-[520px]:py-4 max-[520px]:dark:border-b-[#274757]">
            <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Models tracked</span>
            <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-sm">Independent — {generative.length} models · {SOURCES.length} results sources</strong>
          </div>
          <div class="border-l border-l-[#ccdae2] px-7 py-7 pb-8 text-center max-[520px]:border-b max-[520px]:border-l-0 max-[520px]:border-b-[#ccdae2] max-[520px]:px-0 max-[520px]:py-4 max-[520px]:dark:border-b-[#274757]">
            <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Leader overall ({activeSourceLabel})</span>
            <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-sm">
              {top.name} — {top.scores.overall}
            </strong>
          </div>
          <div class="border-l border-l-[#ccdae2] px-7 py-7 pb-8 text-left max-[800px]:col-span-full max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:border-t-[#ccdae2] max-[800px]:pl-0 max-[800px]:text-center max-[800px]:dark:border-t-[#274757] max-[520px]:border-0 max-[520px]:px-0 max-[520px]:py-4">
            <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Scoring</span>
            <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-sm">Overall = mean of 5 quality dims, cost excluded</strong>
          </div>
        </section>

        <section class="border-b-0 border-[#ccdae2] px-0 pb-12 pt-20 dark:border-[#274757]" id="compare" aria-labelledby="v2-compare-title">
          <div class="flex items-start gap-6 max-[799px]:flex-col max-[799px]:gap-3">
            <h2 id="v2-compare-title" class="min-w-0 flex-[2_1_0%] font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl">Compare models</h2>
            <p class="mt-0 min-w-0 max-w-none flex-[3_1_0%] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
              Pick up to three models. Exact scores side by side, in the current results source
              ({activeSourceLabel}). Decision models can't be picked here — their scores aren't
              comparable; see the decision shelf below.
            </p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-x-9 min-[1000px]:grid-cols-3">
            {[
              { label: "Model A", value: cmpA },
              { label: "Model B", value: cmpB },
              { label: "Model C", value: cmpC },
            ].map((slot, si) => (
              <div key={slot.label} class="flex flex-wrap items-baseline gap-2.5 border-b border-b-[#ccdae2] py-3 dark:border-b-[#274757]">
                <span
                  aria-hidden="true"
                  class="h-3 w-3 flex-none self-center rounded-full"
                  title={`${slot.label} plots in this color`}
                  style={{ backgroundColor: SERIES_COLORS[si % SERIES_COLORS.length] }}
                />
                <span class="flex-1">{slot.label}</span>
                <select
                  aria-label={slot.label}
                  value={slot.value.value}
                  onChange$={(_, el) => {
                    slot.value.value = el.value;
                  }}
                  class="max-w-full rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] px-2 py-1.5 text-xs text-[color:var(--color-ink)] dark:border-[#274757]"
                >
                  <option value="" class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]">— empty —</option>
                  {cmpOptions.map((o) => (
                    <option key={o.id} value={o.id} selected={o.id === slot.value.value} class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]">
                      {o.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          {cmpModels.length > 0 && (
            <div class="mt-8 grid grid-cols-1 items-start gap-8 min-[1000px]:grid-cols-[1fr_2fr_2fr_1fr] min-[1000px]:items-center min-[1000px]:[&>:first-child]:col-start-2 min-[1000px]:[&>:last-child]:col-start-3">
              <div class="m-0 min-w-0 p-0" aria-label="Comparison radar chart">
                <svg
                  viewBox="0 0 400 400"
                  role="img"
                  class="mx-0 mb-0 ml-auto block h-auto w-full max-w-md"
                  aria-label={`Radar chart comparing ${cmpModels.map((m) => m.name).join(", ")}`}
                >
                {[25, 50, 75, 100].map((ring) => (
                  <polygon
                    key={ring}
                    points={hexPolygon(ring)}
                    fill="none"
                    class="stroke-[#ccdae2] dark:stroke-[#274757]"
                    stroke-width={ring === 100 ? 2 : 1}
                  />
                ))}
                {DIMENSIONS.map((d, i) => {
                  const end = hexPoint(100, i);
                  return (
                    <line
                      key={d.key}
                      x1={HEX_CX}
                      y1={HEX_CY}
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
                      const p = hexPoint(m.scores[d.key], i);
                      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                    }).join(" ")}
                    fill={SERIES_COLORS[si % SERIES_COLORS.length]}
                    fill-opacity={0.35}
                    stroke={SERIES_COLORS[si % SERIES_COLORS.length]}
                    stroke-width={2}
                    stroke-linejoin="round"
                  >
                    <title>{`${m.name} (Overall ${m.scores.overall})`}</title>
                  </polygon>
                ))}
                {cmpModels.map((m, si) =>
                  DIMENSIONS.map((d, i) => {
                    const p = hexPoint(m.scores[d.key], i);
                    return (
                      <circle
                        key={`${m.id}-${d.key}`}
                        cx={p.x}
                        cy={p.y}
                        r={4.5}
                        class="stroke-[color:var(--color-page)] [stroke-width:1.5]"
                        style={{
                          fill: SERIES_COLORS[si % SERIES_COLORS.length],
                        }}
                      >
                        <title>{tooltipFor(m, d.key)}</title>
                      </circle>
                    );
                  }),
                )}
                {DIMENSIONS.map((d, i) => {
                  const p = hexPoint(100, i, HEX_LABEL_R);
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
                  <label class="block text-xs text-[#577184] dark:text-[#93adbe]">
                    Results source{" "}
                  <select
                    aria-label="Results source"
                    value={source.value}
                    onChange$={(_, el) => {
                      handleSourceChange$(el.value);
                    }}
                    class="mx-auto mt-2.5 block w-fit max-w-full rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] px-2 py-1.5 text-center text-xs text-[color:var(--color-ink)] [text-align-last:center] dark:border-[#274757]"
                  >
                    {SOURCES.map((s) => (
                      <option key={s.key} value={s.key} selected={s.key === source.value} class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]">
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
                <p class="mt-2.5 text-xs leading-normal text-[#577184] dark:text-[#93adbe]">
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
                    <span title={`Same numbers as the Overall view, ranked by ${activeSourceLabel} score.`}>
                      Overall scores, sorted by {activeSourceLabel}.
                    </span>
                  ) : (
                    <span title={"Source file: " + activeSourceFile}>
                      Showing only the {activeSourceLabel} report.
                    </span>
                  )}
                </p>
                </div>
                <ul aria-label="Legend" class="mx-auto grid max-w-xs list-none gap-3 p-0 text-center text-xs">
                  {cmpModels.map((m, si) => (
                    <li key={m.id} class="flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap">
                      <span
                        aria-hidden="true"
                        class="h-3 w-3 flex-none rounded-full"
                        style={{
                          backgroundColor: SERIES_COLORS[si % SERIES_COLORS.length],
                        }}
                      />
                      <a href={`/model/${m.slug}/`} class="inline-flex items-center gap-2 font-semibold">
                        <VendorIcon id={m.id} name={m.name} /> {m.name}
                      </a>
                      <span>Overall {m.scores.overall}</span>
                      {!m.meta.noFreeId ? (
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
            <div class="mt-9 w-full overflow-x-auto" tabIndex={0} aria-label="Scroll to see compared models">
              <table class="w-full min-w-[800px] table-fixed border-collapse text-xs leading-tight tabular-nums max-[640px]:w-[205vw] max-[640px]:min-w-0">
                <caption class="sr-only">Exact scores for the selected models</caption>
                <thead>
                  <tr>
                    <th scope="col" class="w-[10.5%] break-words border-b border-b-[#d4e0e6] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] first:w-[22%] first:pl-4 first:text-left max-[640px]:w-[10.98%] max-[640px]:first:w-[23.17%] dark:border-b-[#274757] dark:bg-[#132a3b] dark:text-[#a9c2d2]">Dimension</th>
                    {cmpModels.map((m) => (
                      <th scope="col" key={m.id} class="w-[10.5%] break-words border-b border-b-[#d4e0e6] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] max-[640px]:w-[10.98%] dark:border-b-[#274757] dark:bg-[#132a3b] dark:text-[#a9c2d2]">
                        <span class="inline-flex items-center gap-2.5">
                          <VendorIcon id={m.id} name={m.name} />
                          <a href={`/model/${m.slug}/`}>
                            {m.name}
                          </a>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableKeys.map((k) => (
                    <tr key={k} class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                      <th scope="row" class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-medium text-[#496779] dark:border-b-[#274757] dark:text-[#a9c2d2]">{names[k]}</th>
                      {cmpModels.map((m) => (
                        <td key={m.id} class="break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[color:var(--color-ink)] max-[640px]:w-[10.98%] dark:border-b-[#274757]">{m.scores[k]}</td>
                      ))}
                    </tr>
                  ))}
                  <tr class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                    <th scope="row" class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-medium text-[#496779] dark:border-b-[#274757] dark:text-[#a9c2d2]">Overall Score</th>
                    {cmpModels.map((m) => (
                      <td key={m.id} class="break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-lg font-bold text-[#275bad] max-[640px]:w-[10.98%] dark:border-b-[#274757] dark:text-[#9dbdf5]">
                        {m.scores.overall}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section class="border-b-0 border-[#ccdae2] px-0 pb-12 pt-12 dark:border-[#274757]" id="methodology" aria-labelledby="v2-method-title">
          <div class="flex items-start justify-between gap-6">
            <h2 id="v2-method-title" class="min-w-0 flex-[2_1_0%] font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl">How scoring works</h2>
            <p class="mt-3.5 min-w-0 max-w-none flex-[3_1_0%] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
              Scores are normalized interpretations from 1 to 100 (higher is better), based on
              public benchmarks. Overall Score is the rounded mean of the five quality dimensions —
              Cost efficiency is scored separately and never counts toward Overall.
            </p>
          </div>
          <div class="mt-7 grid grid-cols-3 gap-5 max-[800px]:grid-cols-2">
            <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-sm font-semibold leading-tight">Independently researched</h3>
              <p class="mt-3 text-sm leading-relaxed">
                Every benchmark number cites its source. Missing data is marked — never invented.
              </p>
            </article>
            <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-sm font-semibold leading-tight">Averaged, not single-opinion</h3>
              <p class="mt-3 text-sm leading-relaxed">
                Each model's scores are the mean across independent reporting agents.
                Evidence-free reports are quarantined and never counted.
              </p>
            </article>
            <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-sm font-semibold leading-tight">Re-researched weekly</h3>
              <p class="mt-3 text-sm leading-relaxed">
                Every report older than seven days is checked against fresh benchmarks, and scores
                refresh whenever new verified evidence would change them.
              </p>
            </article>
          </div>
          <h3 class="my-6 font-[family-name:var(--font-display)] text-xl font-medium tracking-tight">What each dimension measures</h3>
          <div class="grid grid-cols-3 gap-5 max-[800px]:grid-cols-2">
            {DIMENSIONS.map((d) => (
              <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]" key={d.key}>
                <h3 class="text-sm font-semibold leading-tight">{d.label}</h3>
                <p class="mt-3 text-sm leading-relaxed">
                  {d.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section class="px-0 pb-0 pt-12" id="models" aria-labelledby="v2-ratings-title">
          <div class="flex items-start justify-between gap-6">
            <div class="v2-section-lead">
              <h2 id="v2-ratings-title" class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl">All models</h2>
              <p class="mt-3.5 max-w-sm text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
                Every tracked model in the current results source ({activeSourceLabel}). Search to
                find a model, or open its page for the full breakdown.
              </p>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] max-[520px]:px-2 max-[520px]:py-1 max-[520px]:text-xs dark:border-[#3a5a6e] dark:text-[#a9c2d2]">{filtered.length} models</span>
              <div class="inline-flex gap-0.5 rounded-full border border-[#ccdae2] p-0.5 dark:border-[#274757]" role="group" aria-label="All models display">
                <button
                  type="button"
                  class={allModelsView.value === "cards" ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[color:var(--color-ink)] dark:text-[#93adbe]"}
                  aria-pressed={allModelsView.value === "cards"}
                  onClick$={() => {
                    allModelsView.value = "cards";
                  }}
                >
                  Cards
                </button>
                <button
                  type="button"
                  class={allModelsView.value === "list" ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[color:var(--color-ink)] dark:text-[#93adbe]"}
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
          <div class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <input
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
            <label class="text-xs text-[#577184] dark:text-[#93adbe]">
              Results source{" "}
              <select
                aria-label="Results source"
                value={source.value}
                onChange$={(_, el) => {
                  handleSourceChange$(el.value);
                }}
                class="max-w-64 rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] px-2 py-1.5 text-center text-xs text-[color:var(--color-ink)] [text-align-last:center] dark:border-[#274757]"
              >
                {SOURCES.map((s) => (
                  <option key={s.key} value={s.key} selected={s.key === source.value} class="bg-[color:var(--color-page)] text-[color:var(--color-ink)]">
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
                  <article class="flex flex-col border border-[#ccdae2] bg-[#f7fafb] px-6 py-5 dark:border-[#274757] dark:bg-[#132a3b]" key={m.id}>
                    <div class="flex items-start justify-between gap-3">
                      <h3 class="m-0 flex items-center gap-2.5 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight">
                        <VendorIcon id={m.id} name={m.name} />
                        <a href={`/model/${m.slug}/`}>{m.name}</a>
                      </h3>
                      <div
                        class="shrink-0 text-right leading-none"
                        title="Overall score out of 100 — mean of the five quality dimensions"
                      >
                        <strong class="font-[family-name:var(--font-display)] text-4xl font-semibold tabular-nums tracking-tighter">{m.scores.overall}</strong>
                        <span class="mt-1 block text-xs font-normal text-[#577184] dark:text-[#93adbe]">Overall</span>
                      </div>
                    </div>
                    <p class="mt-2.5 text-xs font-bold">
                      {!m.meta.noFreeId ? (
                        <span
                          class="text-[#1c7a4d] dark:text-[#7fd6a4]"
                          title={m.meta.freeTierNote ?? m.meta.pricingNote}
                        >
                          Free tier
                        </span>
                      ) : (
                        <span
                          class="text-[#b26a1b] dark:text-[#e8b47e]"
                          title="Cost is scored on paid pricing — no free tier ID"
                        >
                          Paid · no free tier
                        </span>
                      )}
                    </p>
                    <p class="mt-2.5 text-sm leading-relaxed">{m.short}</p>
                    <dl class="m-0 mt-3.5 p-0 text-xs leading-relaxed">
                      <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                        <dt class="shrink-0 whitespace-nowrap font-bold">Context</dt>
                        <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">{m.meta.contextWindow}</dd>
                      </div>
                      <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                        <dt class="shrink-0 whitespace-nowrap font-bold">Modalities</dt>
                        <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">{m.meta.modalities}</dd>
                      </div>
                      <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                        <dt class="shrink-0 whitespace-nowrap font-bold">Pricing</dt>
                        <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">{m.meta.pricingNote}</dd>
                      </div>
                      <div title="Newest report date across this model's findings files" class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                        <dt class="shrink-0 whitespace-nowrap font-bold">Verified</dt>
                        <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                          {m.verified ?? "—"} · {reportCount(m)} reports
                        </dd>
                      </div>
                    </dl>
                    <p class="mt-3 border-t border-t-[#ccdae2] pt-2.5 text-xs leading-relaxed text-[#577184] dark:border-t-[#274757] dark:text-[#93adbe]">
                      Tool {m.scores.tool} · Reason {m.scores.reasoning} · Context{" "}
                      {m.scores.context} · Code {m.scores.coding} · Multi {m.scores.multimodal} ·
                      Cost {m.scores.cost}
                    </p>
                    <p class="mt-auto pt-3 text-xs font-semibold">
                      <a href={`/model/${m.slug}/`} class="text-[color:var(--color-primary)] hover:underline">Open full profile →</a>
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
              <div class="mt-6 flex flex-wrap gap-2 min-[800px]:hidden" role="group" aria-label="Sort all models">
                {orderedScoreCols.map((key) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={sortKey.value === key}
                    class={sortKey.value === key ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[color:var(--color-ink)] dark:text-[#93adbe]"}
                    onClick$={() => {
                      if (sortKey.value === key)
                        sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                      else {
                        sortKey.value = key;
                        sortDirection.value = -1;
                      }
                      scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                    }}
                  >
                    {key === "overall" ? "Overall" : colNames[key]}{" "}
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
                <caption class="sr-only">
                  Model leaderboard, average scores out of 100
                </caption>
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
                          if (sortKey.value === "name")
                            sortDirection.value = sortDirection.value === -1 ? 1 : -1;
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
                            if (sortKey.value === key)
                              sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                            else {
                              sortKey.value = key;
                              sortDirection.value = -1;
                            }
                            scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                          }}
                        >
                          {key === "overall" ? "Overall" : colNames[key]}
                          <span aria-hidden="true" class="ml-1 inline-block w-3 text-[#839aaa]">
                            {sortKey.value === key ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}
                          </span>
                          {key === "overall" && (
                            <span class="absolute left-0 top-[calc(100%+10px)] z-10 hidden w-60 cursor-default whitespace-normal rounded-lg bg-[#19384d] px-3 py-2.5 text-left text-xs font-normal leading-normal text-[#ecf3f6] shadow-lg group-hover:block group-focus-visible:block dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" role="tooltip">
                              <span aria-hidden="true" class="absolute left-6 -top-1 h-2.5 w-2.5 rotate-45 bg-inherit" />
                              Overall is the average of tool use, reasoning, context, coding and
                              multimodal scores. Cost efficiency is excluded.
                            </span>
                          )}
                        </button>
                      </th>
                    ))}
                    <th scope="col" title="Newest report date across each model's findings files" class="w-[10.5%] break-words border-b border-b-[#d4e0e6] border-t border-t-[#9eb5c3] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] max-[640px]:w-[10.98%] dark:border-b-[#274757] dark:border-t-[#3a5a6e] dark:bg-[#132a3b] dark:text-[#a9c2d2]">
                      Verified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.slice(0, displayCount.value).map((m) => (
                    <tr key={m.id} class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                      <th scope="row" class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-semibold text-[#496779] first:w-[22%] first:pl-4 max-[640px]:first:w-[23.17%] dark:border-b-[#274757] dark:text-[#a9c2d2]">
                        <span class="inline-flex items-center gap-2">
                          <VendorIcon id={m.id} name={m.name} />
                          <a href={`/model/${m.slug}/`}>
                            {m.name}
                          </a>
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
                            class={`break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[color:var(--color-ink)] max-[640px]:w-[10.98%] dark:border-b-[#274757]${key === "overall" ? " font-bold text-[#275bad] dark:text-[#9dbdf5]" : ""}${hlClass(key, value)}`}
                          >
                            {value}
                          </td>
                        );
                      })}
                      <td title="Newest report date across this model's findings files" class="break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[color:var(--color-ink)] max-[640px]:w-[10.98%] dark:border-b-[#274757]">
                        {m.verified ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </>
          )}
          {!(filtered.length === 0) &&
            allModelsView.value === "list" &&
            displayCount.value < sorted.length && (
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
          <p class="mt-4 text-right text-xs leading-relaxed text-[#577184] dark:text-[#93adbe]">
            Averages recomputed by pnpm sync from per-model research files. Cost never counts toward
            Overall.
          </p>
        </section>

        {/* Decision shelf stays hidden until the mix grows (3+ decision models);
            a single non-comparable entry adds noise, not signal. */}
        {decisionFiltered.length >= 3 && (
          <section class="border-b border-[#ccdae2] px-0 pb-20 pt-12 dark:border-[#274757]" aria-labelledby="v2-decision-title">
          <div class="flex items-start justify-between gap-6">
              <div class="v2-section-lead">
                <h2 id="v2-decision-title" class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl">Decision models</h2>
                <p class="mt-3.5 max-w-sm text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
                  System-One models return typed judgments (choice, score, yes/no probability)
                  instead of generated text — for routing, triage, and guardrails inside agent
                  pipelines. They are scored on different axes and are{" "}
                  <strong>not comparable</strong> to generative Overall scores.
                </p>
              </div>
              <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] max-[520px]:px-2 max-[520px]:py-1 max-[520px]:text-xs dark:border-[#3a5a6e] dark:text-[#a9c2d2]">{decisionFiltered.length} models</span>
            </div>
            <div class="mt-10 grid grid-cols-1 gap-5 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {decisionFiltered.map((m) => (
                <article class="flex flex-col border border-[#ccdae2] border-t-2 border-t-[#dfab77] bg-[#f7fafb] px-6 py-5 dark:border-[#274757] dark:border-t-[#e8b47e] dark:bg-[#132a3b]" key={m.id}>
                  <div class="flex items-start justify-between gap-3">
                    <h3 class="m-0 flex items-center gap-2.5 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight">
                      <VendorIcon id={m.id} name={m.name} />{" "}
                      <a href={`/model/${m.slug}/`}>{m.name}</a>
                    </h3>
                    <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] dark:border-[#3a5a6e] dark:text-[#a9c2d2]">Decision</span>
                  </div>
                  <p class="mt-2.5 text-sm leading-relaxed">{m.short}</p>
                  <dl class="m-0 mt-3.5 p-0 text-xs leading-relaxed">
                    <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                      <dt class="shrink-0 whitespace-nowrap font-bold">State budget</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">{m.meta.contextWindow}</dd>
                    </div>
                    <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                      <dt class="shrink-0 whitespace-nowrap font-bold">I/O</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">{m.meta.modalities}</dd>
                    </div>
                    <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                      <dt class="shrink-0 whitespace-nowrap font-bold">Pricing</dt>
                      <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">{m.meta.pricingNote}</dd>
                    </div>
                  </dl>
                  <p class="mt-auto pt-3 text-xs font-semibold">
                    <a href={`/model/${m.slug}/`} class="text-[color:var(--color-primary)] hover:underline">Open full profile →</a>
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "ModelComp — Compare AI coding models",
  meta: [
    {
      name: "description",
      content:
        "Compare AI coding models on tool use, reasoning, context, multimodal, coding and cost — normalized to 1–100 from public benchmarks.",
    },
  ],
};
