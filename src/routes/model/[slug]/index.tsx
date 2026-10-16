import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead, type StaticGenerateHandler } from "@builder.io/qwik-city";
import { MODELS, SOURCES, slugForSource } from "../../../data/models";
import type { SourceKey, ModelScores, DimensionKey } from "../../../data/models";
import { getEvidence } from "../../../data/evidence";
import { V2Header } from "../../../components/v2/V2Header";
import { V2Footer } from "../../../components/v2/V2Footer";
import { withFreeZenLink } from "../../../components/freeZenLink";

/**
 * /model/[slug]/ — model profile pages in the v2 design language.
 * Same content contract as before (JSON-LD, ratings, evidence, prev/next),
 * new presentation: navy hero, profile instrument, facts, reading, tables.
 */

export const onStaticGenerate: StaticGenerateHandler = () => {
  return { params: MODELS.map((m) => ({ slug: m.slug })) };
};

const qualityKeys: DimensionKey[] = ["context", "coding", "reasoning", "tool", "multimodal"];
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

const hexKeys: DimensionKey[] = ["tool", "reasoning", "context", "cost", "coding", "multimodal"];
const HEX_CX = 200;
const HEX_CY = 172;
const HEX_MAX_R = 108;
const HEX_LABEL_R = 148;
// Same non-linear radial emphasis as the homepage hexagon: 0–75 occupies the
// inner half of each axis, 75–100 the outer half. r = (v/100)^GAMMA with
// (75/100)^GAMMA = 0.5 → GAMMA ≈ 2.41.
const HEX_GAMMA = Math.LN2 / Math.log(100 / 75);
function barWidth(value: number): string {
  const clamped = Math.max(0, Math.min(100, value));
  return `${(Math.pow(clamped / 100, HEX_GAMMA) * 100).toFixed(1)}%`;
}
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

export default component$(() => {
  const slug = useLocation().params.slug ?? "";
  const model = MODELS.find((m) => m.slug === slug);
  const theme = useSignal<"light" | "dark">("light");
  const sortKey = useSignal<DimensionKey | "overall" | "agent">("overall");
  const sortDirection = useSignal<1 | -1>(-1);
  const profileView = useSignal<"bars" | "hex">("hex");
  const scrollerRef = useSignal<HTMLDivElement>();
  const isNarrow = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => {
      isNarrow.value = mq.matches;
    };
    update();
    mq.addEventListener("change", update);
    cleanup(() => mq.removeEventListener("change", update));
  });

  // Theme init mirrors the homepage: explicit choice → inherited html.dark
  // (v1 global toggle) → OS preference, always writing back all three so
  // Tailwind's dark: utilities never leak across themes.
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
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

  if (!model) {
    return (
      <main class="px-6 py-20 text-center">
        <h1 class="text-2xl font-bold tracking-tight">Model not found</h1>
        <p class="mt-2 text-sm">
          No model with slug <code>{slug}</code> is tracked.
        </p>
        <p class="mt-6">
          <a href="/" class="rounded-lg bg-[#19384d] px-5 py-2.5 text-sm font-semibold text-white hover:underline">
            Back to comparison
          </a>
        </p>
      </main>
    );
  }

  // Position in MODELS order (sorted by id) drives previous/next navigation.
  const modelIndex = MODELS.findIndex((m) => m.slug === slug);
  const prevModel = modelIndex > 0 ? MODELS[modelIndex - 1] : undefined;
  const nextModel = modelIndex >= 0 && modelIndex < MODELS.length - 1 ? MODELS[modelIndex + 1] : undefined;

  const ratings = (Object.keys(model.sources) as SourceKey[])
    .filter((key) => key !== "average" && model.sources[key] !== undefined)
    .map((key) => ({
      key,
      name: SOURCES.find((source) => source.key === key)?.label ?? key,
      scores: model.sources[key]!,
    }));
  const sortedRatings = [...ratings].sort((a, b) => {
    if (sortKey.value === "agent") return sortDirection.value * a.name.localeCompare(b.name);
    const key = sortKey.value as keyof ModelScores;
    const primary = sortDirection.value * (Math.round(a.scores[key]) - Math.round(b.scores[key]));
    if (primary !== 0) return primary;
    if (key !== "overall") {
      const secondary = sortDirection.value * (Math.round(a.scores.overall) - Math.round(b.scores.overall));
      if (secondary !== 0) return secondary;
    }
    return a.name.localeCompare(b.name);
  });
  const activeDim =
    sortKey.value !== "overall" && sortKey.value !== "agent" ? (sortKey.value as DimensionKey) : null;
  const orderedScoreCols: ("overall" | DimensionKey)[] =
    activeDim && isNarrow.value
      ? ["overall", activeDim, ...tableKeys.filter((k) => k !== activeDim)]
      : ["overall", ...tableKeys];
  const colBestWorst = (get: (s: ModelScores) => number): { best: number | null; worst: number | null } => {
    if (ratings.length === 0) return { best: null, worst: null };
    const vals = ratings.map((r) => Math.round(get(r.scores)));
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
  const hlTitle = (col: string, value: number, label: string): string | undefined => {
    const st = hlStats.get(col);
    if (!st || st.best === null || st.worst === null) return undefined;
    if (value === st.best) return `Highest ${label} grade for this model`;
    if (value === st.worst) return `Lowest ${label} grade for this model`;
    return undefined;
  };
  // Benchmark evidence loads from its own module (NOT via models.ts) so list
  // pages never bundle it — see src/data/evidence.ts.
  const evidence = getEvidence(slug);
  const highest = qualityKeys.reduce((best, key) => (model.scores[key] > model.scores[best] ? key : best));
  const formattedDate = model.verified
    ? new Date(`${model.verified}T12:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    : "Date unavailable";
  const sourceName = (stem: string) => SOURCES.find((source) => source.file === `${stem}.md`)?.label ?? stem.replace(/_/g, " ");
  const nameWords = model.name.split(" ");
  const titleHead = nameWords[0];
  const titleRest = nameWords.slice(1).join(" ");

  return (
    <main
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
      id="top"
    >
      <V2Header theme={theme} navBase="/" />
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: model.name,
            description: model.short,
            applicationCategory: "AI model evaluation",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: model.scores.overall,
              reviewCount: ratings.length,
              bestRating: 100,
              worstRating: 0,
            },
            dateModified: model.verified,
          }).replace(/</g, "\\u003c")}
        />

        <section class="mx-[-40px] bg-[#173c53] px-10 text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]" aria-labelledby="model-title">
          <div class="grid grid-cols-1 items-stretch gap-8 py-12 min-[1000px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-[1000px]:py-[88px]">
            <div class="flex flex-col items-start justify-center py-4">
              <p class="text-sm text-[#a8c2d0]">
                {ratings.length} independent reports <span aria-hidden="true">/</span> profile
              </p>
              <h1 id="model-title" class="mt-11 font-[family-name:var(--font-display)] text-[clamp(56px,7vw,104px)] font-medium leading-[0.94] tracking-tighter">
                {titleHead}
                <br />
                <span class="text-[#a9c7ef]">{titleRest}</span>
              </h1>
              <p class="mt-9 max-w-[465px] text-[17px] leading-[1.65] text-[#c6d9e3]">{model.short}</p>
              <div class="mt-auto flex items-end gap-[18px] pt-10">
                <span class="font-[family-name:var(--font-display)] text-[88px] font-medium leading-[0.82] tracking-tighter tabular-nums">{model.scores.overall}</span>
                <span class="pb-[2px] text-sm leading-[1.4] text-[#b6cdd9]">Overall score<br /><strong class="font-normal text-[#7da3b7]">out of 100</strong></span>
              </div>
            </div>
            <div class="flex flex-col bg-[#eff5f8] p-[clamp(28px,3vw,48px)] text-[#19384d] dark:bg-[#132a3b] dark:text-[#e8f1f6]" aria-label="Average scores by dimension">
              <div class="flex items-center justify-between gap-3.5 border-b border-b-[#ccdae2] pb-[26px] text-sm font-bold dark:border-b-[#274757]">
                <span>Performance profile</span>
                <div class="inline-flex gap-0.5 rounded-full border border-[#ccdae2] p-[3px] dark:border-[#274757]" role="group" aria-label="Performance profile display">
                  <button
                    type="button"
                    class={profileView.value === "bars" ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[#19384d] dark:text-[#93adbe] dark:hover:text-[#e8f1f6]"}
                    aria-pressed={profileView.value === "bars"}
                    onClick$={() => {
                      profileView.value = "bars";
                    }}
                  >
                    Bars
                  </button>
                  <button
                    type="button"
                    class={profileView.value === "hex" ? "whitespace-nowrap rounded-full bg-[#19384d] px-3.5 py-1.5 text-xs font-semibold text-[#ecf3f6] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" : "whitespace-nowrap rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#577184] hover:text-[#19384d] dark:text-[#93adbe] dark:hover:text-[#e8f1f6]"}
                    aria-pressed={profileView.value === "hex"}
                    onClick$={() => {
                      profileView.value = "hex";
                    }}
                  >
                    Hexagon
                  </button>
                </div>
              </div>
              {profileView.value === "bars" ? (
                <>
                  <div class="pt-[19px]">
                    {qualityKeys.map((key) => (
                      <div class="grid min-h-[58px] grid-cols-[minmax(90px,132px)_minmax(80px,1fr)_48px] items-center gap-4" key={key}>
                        <span class="text-[13px] font-semibold">{names[key]}</span>
                        <div class="relative h-[7px] rounded-[10px] bg-[#d6e1e9] dark:bg-[#274757]" role="img" aria-label={`${names[key]}: ${model.scores[key]} out of 100`}>
                          <span class="block h-full rounded-[inherit] bg-[#557ddd] dark:bg-[#7ba0ef]" style={{ width: barWidth(model.scores[key]) }} />
                        </div>
                        <strong class="text-right font-[family-name:var(--font-display)] text-lg font-semibold tabular-nums">{model.scores[key]}</strong>
                      </div>
                    ))}
                  </div>
                  <div class="mt-[19px] grid min-h-[58px] grid-cols-[minmax(90px,132px)_minmax(80px,1fr)_48px] items-center gap-4 border-t border-t-[#ccdae2] pt-[18px] dark:border-t-[#274757]">
                    <span class="text-[13px] font-semibold">Cost efficiency</span>
                    <div class="relative h-[7px] rounded-[10px] bg-[#d6e1e9] dark:bg-[#274757]" role="img" aria-label={`Cost efficiency: ${model.scores.cost} out of 100`}>
                      <span class="block h-full rounded-[inherit] bg-[#557ddd] dark:bg-[#7ba0ef]" style={{ width: barWidth(model.scores.cost) }} />
                    </div>
                    <strong class="text-right font-[family-name:var(--font-display)] text-lg font-semibold tabular-nums">{model.scores.cost}</strong>
                  </div>
                  <p class="mt-auto pt-7 text-xs leading-[1.5] text-[#577184] dark:text-[#93adbe]">Bars use the same top-end emphasis as the hexagon (75 sits at half width). Overall averages the five quality dimensions. Cost is shown separately.</p>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 400 344" role="img" class="mt-2 h-auto w-full" aria-label={`Hexagon chart of average scores: ${hexKeys.map((k) => `${names[k]} ${model.scores[k]}`).join(", ")}`}>
                    {[25, 50, 75, 100].map((ring) => (
                      <polygon key={ring} points={hexPolygon(ring)} fill="none" class="stroke-[#ccdae2] dark:stroke-[#274757]" stroke-width={ring === 100 ? 1.5 : 1} />
                    ))}
                    {hexKeys.map((key, i) => {
                      const end = hexPoint(100, i);
                      return <line key={key} x1={HEX_CX} y1={HEX_CY} x2={end.x} y2={end.y} class="stroke-[#ccdae2] dark:stroke-[#274757]" stroke-width="1" />;
                    })}
                    <polygon
                      points={hexKeys.map((key, i) => {
                        const p = hexPoint(model.scores[key], i);
                        return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                      }).join(" ")}
                      fill="#557ddd"
                      fill-opacity={0.25}
                      stroke="#557ddd"
                      stroke-width={2}
                      stroke-linejoin="round"
                    >
                      <title>{`Overall ${model.scores.overall}`}</title>
                    </polygon>
                    {hexKeys.map((key, i) => {
                      const p = hexPoint(model.scores[key], i);
                      return (
                        <circle key={key} cx={p.x} cy={p.y} r={5} fill="#557ddd" stroke="#eff5f8" stroke-width={1.5} class="dark:stroke-[#132a3b]">
                          <title>{`${names[key]}: ${model.scores[key]}`}</title>
                        </circle>
                      );
                    })}
                    {hexKeys.map((key, i) => {
                      const p = hexPoint(100, i, HEX_LABEL_R);
                      return (
                        <text key={key} x={p.x} y={p.y} text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight={600} class="fill-[#577184] dark:fill-[#93adbe]">
                          {names[key]} · {model.scores[key]}
                        </text>
                      );
                    })}
                  </svg>
                  <p class="mt-auto pt-7 text-xs leading-[1.5] text-[#577184] dark:text-[#93adbe]">Six axes, 0–100, with emphasis on the top end (the outer half of each axis covers 75–100). Cost is plotted but never counts toward Overall.</p>
                </>
              )}
            </div>
          </div>
        </section>

        <section class="grid grid-cols-3 border-b border-b-[#ccdae2] max-[800px]:grid-cols-2 max-[520px]:block dark:border-b-[#274757]" aria-label="Model specifications">
          <div class="py-[30px] pr-7 text-right max-[800px]:text-center max-[520px]:border-b max-[520px]:border-b-[#ccdae2] max-[520px]:px-0 max-[520px]:py-4 max-[520px]:dark:border-b-[#274757]">
            <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Context window</span>
            <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-sm">{model.meta.contextWindow}</strong>
          </div>
          <div class="border-l border-l-[#ccdae2] px-7 py-[30px] pb-8 text-center max-[520px]:border-b max-[520px]:border-l-0 max-[520px]:border-b-[#ccdae2] max-[520px]:px-0 max-[520px]:py-4 max-[520px]:dark:border-b-[#274757]">
            <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Modalities</span>
            <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-sm">{model.meta.modalities}</strong>
          </div>
          <div class="border-l border-l-[#ccdae2] px-7 py-[30px] pb-8 text-left max-[800px]:col-span-full max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:border-t-[#ccdae2] max-[800px]:pl-0 max-[800px]:text-center max-[800px]:dark:border-t-[#274757] max-[520px]:border-0 max-[520px]:px-0 max-[520px]:py-4">
            <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Access & pricing</span>
            <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-sm">
              {(model.meta.pricingTiers ?? [model.meta.pricingNote]).map((tier, i) => (
                <span key={tier}>
                  {i > 0 ? "; " : ""}
                  {withFreeZenLink(tier)}
                </span>
              ))}
            </strong>
          </div>
        </section>

        <section class="grid grid-cols-1 gap-[7%] border-b border-b-[#ccdae2] py-[92px] min-[800px]:grid-cols-[minmax(230px,0.65fr)_minmax(0,1.35fr)] dark:border-b-[#274757]" aria-labelledby="reading-title">
          <div>
            <h2 id="reading-title" class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-[1.1] tracking-tighter">Reading the profile</h2>
            <p class="mt-3.5 max-w-[390px] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">A quick interpretation of the averaged scores, before the underlying reports.</p>
          </div>
          <div class="grid gap-[39px]">
            <article class="grid grid-cols-[24px_1fr] gap-4">
              <span class="mt-2 h-[13px] w-[13px] rounded-full bg-[#4f77d5]" aria-hidden="true" />
              <div>
                <h3 class="text-[21px] font-medium tracking-tight">Where it stands out</h3>
                <p class="mt-2 max-w-[610px] leading-[1.7] text-[#49677a] dark:text-[#a9c2d2]">
                  {names[highest]} is its highest-rated dimension at <strong class="text-[color:var(--color-ink)]">{model.scores[highest]}/100</strong>.
                  Check the individual ratings below for how the reporting agents agree.
                </p>
              </div>
            </article>
            <article class="grid grid-cols-[24px_1fr] gap-4">
              <span class="mt-2 h-[13px] w-[13px] rounded-full bg-[#be783f]" aria-hidden="true" />
              <div>
                <h3 class="text-[21px] font-medium tracking-tight">The trade-off</h3>
                <p class="mt-2 max-w-[610px] leading-[1.7] text-[#49677a] dark:text-[#a9c2d2]">
                  Cost efficiency scores <strong class="text-[color:var(--color-ink)]">{model.scores.cost}/100</strong>.
                  This is a separate measure: it does not lower the {model.scores.overall} overall quality score.
                  Check the pricing before choosing it for high-volume work.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section class="border-b border-b-[#ccdae2] px-0 py-[86px] dark:border-b-[#274757]" aria-labelledby="evidence-title">
          <div class="flex items-start justify-between gap-6">
            <div>
              <h2 id="evidence-title" class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter">Benchmarks with agreement</h2>
              <p class="mt-3.5 max-w-sm text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">Figures repeated in at least two independent reports. Test setups can vary.</p>
            </div>
            <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] max-[520px]:px-2 max-[520px]:py-1 max-[520px]:text-[11px] dark:border-[#3a5a6e] dark:text-[#a9c2d2]">{evidence.length} figures</span>
          </div>
          {evidence.length ? (
            <>
              <div class="mt-10 grid grid-cols-3 gap-5 max-[800px]:grid-cols-2">
                {evidence.slice(0, 6).map((item) => (
                  <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-[18px] dark:border-[#274757] dark:bg-[#132a3b]" key={`${item.benchmark}-${item.value}`}>
                    <h3 class="text-[15px] font-semibold leading-[1.4]">{item.benchmark}</h3>
                    <strong class="mt-1 font-[family-name:var(--font-display)] text-[26px] font-semibold tabular-nums tracking-tighter">{item.value}</strong>
                    <details class="mt-auto pt-3 text-xs text-[#577184] dark:text-[#93adbe]">
                      <summary class="cursor-pointer">{item.raters.length} reports cite this figure</summary>
                      <p class="pt-[10px] leading-[1.65] break-words">{item.raters.map(sourceName).join(", ")}</p>
                    </details>
                  </article>
                ))}
              </div>
              {evidence.length > 6 && (
                <details class="mt-6">
                  <summary class="inline-block cursor-pointer text-sm font-semibold text-[#275bad] hover:underline dark:text-[#9dbdf5]">
                    Show {evidence.length - 6} more benchmark figures
                  </summary>
                  <div class="mt-4 grid gap-x-9 min-[1000px]:grid-cols-2">
                    {evidence.slice(6).map((item) => (
                      <div key={`${item.benchmark}-${item.value}`} class="flex flex-wrap items-baseline gap-[10px] border-b border-b-[#ccdae2] py-[11px] dark:border-b-[#274757]">
                        <span class="flex-1">{item.benchmark}</span>
                        <strong class="font-bold">{item.value}</strong>
                        <details class="w-full text-xs text-[#577184] dark:text-[#93adbe]">
                          <summary class="cursor-pointer whitespace-nowrap">{item.raters.length} reports</summary>
                          <p class="pb-2 leading-[1.6]">{item.raters.map(sourceName).join(", ")}</p>
                        </details>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </>
          ) : (
            <p class="mt-6">No agreed benchmark figures are available yet.</p>
          )}
        </section>

        <section class="px-0 pb-0 pt-12" aria-labelledby="ratings-title">
          <div class="flex items-start justify-between gap-6">
            <div>
              <h2 id="ratings-title" class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl">The individual ratings</h2>
              <p class="mt-3.5 max-w-sm text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
                Every reporting agent's scores for {model.name}. Select a column to sort.
              </p>
            </div>
            <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] max-[520px]:px-2 max-[520px]:py-1 max-[520px]:text-[11px] dark:border-[#3a5a6e] dark:text-[#a9c2d2]">{ratings.length} reports</span>
          </div>
          <div
            ref={scrollerRef}
            class="mt-[35px] w-full overflow-x-auto"
            tabIndex={0}
            aria-label="Scroll to see all rating columns"
          >
            <table class="w-full min-w-[800px] table-fixed border-collapse text-[13px] leading-[1.4] tabular-nums max-[640px]:w-[205vw] max-[640px]:min-w-0">
              <caption class="sr-only">Reporting agent ratings for {model.name}, out of 100</caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    aria-sort={sortKey.value === "agent" ? (sortDirection.value === -1 ? "descending" : "ascending") : "none"}
                    class="w-[10.5%] break-words border-b border-b-[#d4e0e6] border-t border-t-[#9eb5c3] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] first:w-[22%] first:pl-4 first:text-left max-[640px]:w-[10.98%] max-[640px]:first:w-[23.17%] dark:border-b-[#274757] dark:border-t-[#3a5a6e] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                  >
                    <button
                      type="button"
                      class={`group relative cursor-pointer whitespace-nowrap border-0 bg-transparent p-[3px_0] font-[inherit] text-inherit ${sortKey.value === "agent" ? "text-[#1e58ad] dark:text-[#9dbdf5]" : ""}`}
                      onClick$={() => {
                        if (sortKey.value === "agent") sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                        else {
                          sortKey.value = "agent";
                          sortDirection.value = 1;
                        }
                        scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                      }}
                    >
                      Reporting agent
                      <span aria-hidden="true" class="ml-1 inline-block w-[13px] text-[#839aaa]">
                        {sortKey.value === "agent" ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}
                      </span>
                    </button>
                  </th>
                  {orderedScoreCols.map((key) => (
                    <th
                      scope="col"
                      key={key}
                      aria-sort={sortKey.value === key ? (sortDirection.value === -1 ? "descending" : "ascending") : "none"}
                      class="w-[10.5%] break-words border-b border-b-[#d4e0e6] border-t border-t-[#9eb5c3] bg-[#e2edf2] px-2 py-3.5 text-center font-medium text-[#496779] max-[640px]:w-[10.98%] dark:border-b-[#274757] dark:border-t-[#3a5a6e] dark:bg-[#132a3b] dark:text-[#a9c2d2]"
                    >
                      <button
                        type="button"
                        class={`group relative cursor-pointer whitespace-nowrap border-0 bg-transparent p-[3px_0] font-[inherit] text-inherit ${sortKey.value === key ? "text-[#1e58ad] dark:text-[#9dbdf5]" : ""}`}
                        onClick$={() => {
                          if (sortKey.value === key) sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                          else {
                            sortKey.value = key;
                            sortDirection.value = -1;
                          }
                          scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                        }}
                      >
                        {key === "overall" ? "Overall" : colNames[key]}
                        <span aria-hidden="true" class="ml-1 inline-block w-[13px] text-[#839aaa]">
                          {sortKey.value === key ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}
                        </span>
                        {key === "overall" && (
                          <span class="absolute left-0 top-[calc(100%+10px)] z-10 hidden w-60 cursor-default whitespace-normal rounded-lg bg-[#19384d] p-[10px_13px] text-left text-xs font-normal leading-normal text-[#ecf3f6] shadow-lg group-hover:block group-focus-visible:block dark:bg-[#e8f1f6] dark:text-[#0e1e2a]" role="tooltip">
                            <span aria-hidden="true" class="absolute left-6 -top-1 h-2.5 w-2.5 rotate-45 bg-inherit" />
                            Overall is the average of tool use, reasoning, context, coding and
                            multimodal scores in each report. Cost efficiency is excluded.
                          </span>
                        )}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedRatings.map((rating) => {
                  const agentSlug = slugForSource(rating.key);
                  const agentModel = agentSlug ? MODELS.find((m) => m.slug === agentSlug) : undefined;
                  return (
                    <tr key={rating.key} class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                      <th scope="row" class="break-words border-b border-b-[#d4e0e6] px-3 py-2 text-left font-semibold text-[#496779] first:w-[22%] first:pl-4 max-[640px]:first:w-[23.17%] dark:border-b-[#274757] dark:text-[#a9c2d2]">
                        {agentModel ? (
                          <a href={`/model/${agentModel.slug}/`} title={`Open ${agentModel.name} page`} class="text-[color:var(--color-primary)] hover:underline">
                            {rating.name}
                          </a>
                        ) : (
                          <a href={`/?source=${encodeURIComponent(rating.key)}`} title={`Show ${rating.name} scores across all models`} class="text-[color:var(--color-primary)] hover:underline">
                            {rating.name}
                          </a>
                        )}
                      </th>
                      {orderedScoreCols.map((key) => {
                        const value = key === "overall" ? Math.round(rating.scores.overall) : Math.round(rating.scores[key]);
                        const label = key === "overall" ? "overall" : (names[key] ?? key);
                        return (
                          <td
                            key={key}
                            title={hlTitle(key, value, label)}
                            class={`break-words border-b border-b-[#d4e0e6] px-2 py-3.5 text-center text-[#19384d] dark:border-b-[#274757] dark:text-[#e8f1f6]${key === "overall" ? " font-bold text-[#275bad] dark:text-[#9dbdf5]" : ""}${hlClass(key, value)}`}
                          >
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p class="mt-[18px] text-right text-xs leading-normal text-[#577184] dark:text-[#93adbe]">
            Last verified {formattedDate} from {ratings.length} agent reports.
          </p>
          <nav aria-label="Previous and next models" class="mt-8 flex items-center justify-between gap-4 border-t border-t-[#ccdae2] pt-6 dark:border-t-[#274757]">
            {prevModel ? (
              <a
                href={`/model/${prevModel.slug}/`}
                rel="prev"
                title={`Previous model: ${prevModel.name}`}
                class="font-medium text-[color:var(--color-primary)] hover:underline"
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
                class="text-right font-medium text-[color:var(--color-primary)] hover:underline"
              >
                {nextModel.name} →
              </a>
            ) : (
              <span />
            )}
          </nav>
        </section>

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const m = MODELS.find((x) => x.slug === params.slug);
  return m
    ? {
        title: `${m.name} — scores & agent ratings | ModelComp`,
        meta: [
          {
            name: "description",
            content: `${m.name}: Overall ${m.scores.overall}/100. ${m.short}`,
          },
        ],
      }
    : { title: "Model not found — ModelComp" };
};
