import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS, isDecisionModel } from "../../data/models";
import type { AiModel, DimensionKey } from "../../data/models";
import { V2Header } from "../../components/v2/V2Header";
import { V2Footer } from "../../components/v2/V2Footer";
import { VendorIcon } from "../../components/VendorIcon";
import { hexPoint, hexPolygon, type HexGeometry } from "../../components/v2/hex";
import { DIMENSION_LABELS } from "../../components/v2/modelView";
import { usePageTheme } from "../../components/v2/theme";

/**
 * /best-ai-models-for-coding/ — intent ranking page.
 *
 * Answers the highest-volume "best X for Y" query with an authoritative,
 * data-driven leaderboard: every generative model ranked by its verified
 * `coding` score (desc). A hexagon radar overlays the top five so the shape of
 * each leader's profile is legible at a glance, then a ranked table links to
 * every individual profile. Fully static (no client state), so crawlers and AI
 * search engines read the whole answer in the HTML.
 */

// Generative models ranked by Coding (desc), tie-broken by slug for determinism.
const ranked: AiModel[] = [...MODELS]
  .filter((m) => !isDecisionModel(m))
  .sort(
    (a, b) => b.scores.coding - a.scores.coding || a.slug.localeCompare(b.slug),
  );

const top10 = ranked.slice(0, 10);
const top5 = top10.slice(0, 5);

// Hexagon axis order + geometry, shared with the model profile instrument.
const hexKeys: DimensionKey[] = [
  "tool",
  "reasoning",
  "context",
  "cost",
  "coding",
  "multimodal",
];
const HEX_GEO: HexGeometry = { cx: 200, cy: 172, maxR: 108, labelR: 148 };
// Distinct radar strokes for the top-five overlay.
const SERIES_COLORS = ["#557ddd", "#2aa198", "#c2410c", "#7c3aed", "#0f766e"];

const asOf = (() => {
  const dates = MODELS.map((m) => m.verified)
    .filter((d): d is string => typeof d === "string")
    .sort();
  return dates[dates.length - 1] ?? "";
})();

export default component$(() => {
  const theme = usePageTheme();

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
            "@type": "ItemList",
            name: "Best AI models for coding",
            itemListOrder: "https://schema.org/ItemListOrderDescending",
            numberOfItems: top10.length,
            itemListElement: top10.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: m.name,
              url: `https://modelcomp.com/model/${m.slug}/`,
            })),
          }).replace(/</g, "\\u003c")}
        />

        <section class="mx-[-40px] bg-[#173c53] px-10 py-[clamp(48px,6vw,80px)] text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]">
          <p class="text-sm text-[#a8c2d0]">Rankings <span aria-hidden="true">/</span> coding</p>
          <h1 class="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-medium leading-[0.98] tracking-tighter">
            Best AI models for coding
          </h1>
          <p class="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-[#c6d9e3]">
            The top {top10.length} generative models ranked by verified Coding score
            (0–100), compiled from independent multi-agent benchmark research
            {asOf ? ` and current as of ${asOf}` : ""}. Each entry links to its full
            profile with sourced evidence.
          </p>
        </section>

        <section class="grid gap-8 border-b border-b-[#ccdae2] py-[56px] min-[900px]:grid-cols-[minmax(0,420px)_1fr] dark:border-b-[#274757]">
          <div>
            <h2 class="font-[family-name:var(--font-display)] text-[clamp(22px,2.6vw,32px)] font-medium tracking-tight">
              Top 5 profile radar
            </h2>
            <p class="mt-3 max-w-[46ch] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
              Six axes, 0–100, emphasis on the top half. Coding is the ranking axis;
              the wider the shape, the more balanced the leader.
            </p>
            <svg
              viewBox="0 0 400 344"
              role="img"
              class="mt-4 h-auto w-full"
              aria-label={`Radar overlay of the top 5 coding models across ${hexKeys.map((k) => DIMENSION_LABELS[k]).join(", ")}`}
            >
              {[25, 50, 75, 100].map((ring) => (
                <polygon
                  key={ring}
                  points={hexPolygon(ring, HEX_GEO)}
                  fill="none"
                  class="stroke-[#ccdae2] dark:stroke-[#274757]"
                  stroke-width={ring === 100 ? 1.5 : 1}
                />
              ))}
              {hexKeys.map((key, i) => {
                const end = hexPoint(100, i, HEX_GEO);
                return (
                  <line
                    key={key}
                    x1={HEX_GEO.cx}
                    y1={HEX_GEO.cy}
                    x2={end.x}
                    y2={end.y}
                    class="stroke-[#ccdae2] dark:stroke-[#274757]"
                    stroke-width="1"
                  />
                );
              })}
              {top5.map((m, si) => (
                <polygon
                  key={m.id}
                  points={hexKeys
                    .map((key, i) => {
                      const p = hexPoint(m.scores[key], i, HEX_GEO);
                      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                    })
                    .join(" ")}
                  fill={SERIES_COLORS[si]}
                  fill-opacity={0.08}
                  stroke={SERIES_COLORS[si]}
                  stroke-width={2}
                  stroke-linejoin="round"
                >
                  <title>{`${m.name} — coding ${m.scores.coding}/100`}</title>
                </polygon>
              ))}
              {hexKeys.map((key, i) => {
                const p = hexPoint(100, i, HEX_GEO, HEX_GEO.labelR);
                return (
                  <text
                    key={key}
                    x={p.x}
                    y={p.y}
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="11"
                    font-weight={600}
                    class="fill-[#577184] dark:fill-[#93adbe]"
                  >
                    {DIMENSION_LABELS[key]}
                  </text>
                );
              })}
            </svg>
            <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#49677a] dark:text-[#a9c2d2]">
              {top5.map((m, si) => (
                <li key={m.id} class="flex items-center gap-2">
                  <span
                    class="inline-block h-3 w-3 rounded-full"
                    style={{ background: SERIES_COLORS[si] }}
                    aria-hidden="true"
                  />
                  {m.name}
                </li>
              ))}
            </ul>
          </div>

          <ol class="flex flex-col">
            {top10.map((m, i) => (
              <li
                key={m.id}
                class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-b-[#ccdae2] py-4 first:pt-0 last:border-b-0 dark:border-b-[#274757]"
              >
                <span class="w-8 font-[family-name:var(--font-display)] text-2xl font-medium tabular-nums text-[#577184] dark:text-[#93adbe]">
                  {i + 1}
                </span>
                <a
                  href={`/model/${m.slug}/`}
                  class="flex min-w-0 items-center gap-3 transition-colors hover:text-[#275bad] dark:hover:text-[#9dbdf5]"
                >
                  <VendorIcon id={m.id} name={m.name} />
                  <span class="min-w-0">
                    <span class="block truncate text-base font-semibold">{m.name}</span>
                    <span class="mt-0.5 block text-xs text-[#577184] dark:text-[#93adbe]">
                      Overall {m.scores.overall} · Reasoning {m.scores.reasoning} · Context{" "}
                      {m.scores.context}
                    </span>
                  </span>
                </a>
                <span class="shrink-0 text-right">
                  <span class="block font-[family-name:var(--font-display)] text-2xl font-semibold tabular-nums text-[#275bad] dark:text-[#9dbdf5]">
                    {m.scores.coding}
                  </span>
                  <span class="block text-[10px] uppercase tracking-wide text-[#577184] dark:text-[#93adbe]">
                    coding
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section class="border-b border-b-[#ccdae2] py-[56px] dark:border-b-[#274757]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,36px)] font-medium tracking-tight">
            How these coding scores are set
          </h2>
          <p class="mt-4 max-w-[75ch] text-sm leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
            Each Coding score is a normalized 0–100 figure agreed by at least two
            independent research agents working from public benchmark results
            (SWE-bench Verified, LiveCodeBench, HumanEval, Terminal-Bench and peers)
            and vendor documentation. Scores are re-verified as new data lands —
            see the <a href="/methodology/" class="text-[#275bad] underline dark:text-[#9dbdf5]">full methodology</a> and download the raw{" "}
            <a href="/data/" class="text-[#275bad] underline dark:text-[#9dbdf5]">dataset</a>.
          </p>
        </section>

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Best AI Models for Coding (2026 Ranked Leaderboard) | ModelComp",
  meta: [
    {
      name: "description",
      content:
        "The best AI models for coding, ranked by verified Coding benchmark scores. Independent multi-agent research across SWE-bench, LiveCodeBench, HumanEval and more, with a top-5 radar and links to every model profile.",
    },
  ],
};
