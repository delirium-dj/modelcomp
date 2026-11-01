import { component$ } from "@builder.io/qwik";
import { DIMENSIONS } from "../../data/models";
import type { AiModel } from "../../data/models";
import { hexPoint, hexPolygon, type HexGeometry } from "./hex";
import { dimensionTooltip } from "./modelView";

const HEX_GEO: HexGeometry = { cx: 200, cy: 200, maxR: 130, labelR: 168 };

// Hero animation palette: series trio plus distinct slots for the rest.
const HERO_COLORS = [
  "#4f46e5",
  "#059669",
  "#d97706",
  "#0ea5e9",
  "#8b5cf6",
  "#ef4444",
  "#84cc16",
  "#06b6d4",
  "#d946ef",
  "#f97316",
  "#14b8a6",
  "#eab308",
];

interface HeroSectionProps {
  activeSourceLabel: string;
  heroTop12: AiModel[];
  heroActiveSafe: number;
}

/** Homepage hero band: headline + copy + the animated top-12 radar. */
export const HeroSection = component$<HeroSectionProps>(
  ({ activeSourceLabel, heroTop12, heroActiveSafe }) => {
    return (
      <section
        class="-mx-10 bg-[#e2edf2] px-10 text-[color:var(--color-ink)] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822] dark:text-[#f3f8fa]"
        aria-labelledby="v2-title"
      >
        <div class="grid grid-cols-1 items-center gap-8 pb-12 pt-16 min-[1000px]:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <div class="v2-hero-copy text-center min-[1000px]:text-left">
            <h1
              id="v2-title"
              class="font-[family-name:var(--font-display)] text-[clamp(40px,4.6vw,64px)] font-medium leading-none tracking-tighter"
            >
              Compare AI coding models on{" "}
              <span class="text-[color:var(--color-primary)]">what actually matters</span>
            </h1>
            <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4e6678] min-[1000px]:mx-0 dark:text-[#c6d9e3]">
              Tool use, reasoning, context, multimodal, coding and cost — normalized to 1–100 from
              public benchmarks so current and future models can be compared side by side.
            </p>
            <div class="mt-7 flex flex-wrap justify-center gap-3 min-[1000px]:justify-start">
              <a
                href="/#compare"
                class="inline-block rounded-lg bg-[#19384d] px-5 py-3 text-sm font-bold text-[#ecf3f6] hover:underline dark:bg-[#f3f8fa] dark:text-[#0a1822]"
              >
                Compare models
              </a>
              <a
                href="/#methodology"
                class="inline-block rounded-lg border border-[#ccdae2] bg-transparent px-5 py-3 text-sm font-bold text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] dark:border-[rgba(243,248,250,0.4)] dark:text-[#f3f8fa] dark:hover:border-[#f3f8fa]"
              >
                How scoring works
              </a>
            </div>
          </div>
          <div class="v2-hero-media">
            <svg
              viewBox="0 0 400 400"
              role="img"
              class="mx-auto h-auto w-full max-w-[270px] min-[768px]:max-w-[324px]"
              aria-label={`Top 12 models by ${activeSourceLabel}: ${heroTop12.map((m) => `${m.name} ${m.scores.overall}`).join(", ")}`}
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
              {/* Slow decorative orbit ring (frozen under reduced motion). */}
              <polygon
                points={hexPolygon(100, HEX_GEO)}
                fill="none"
                stroke="#557ddd"
                stroke-width="1"
                stroke-dasharray="4 10"
                opacity={0.5}
                class="origin-center animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
              >
                <title>Top-12 performance hexagon</title>
              </polygon>
              {heroTop12.map((m, hi) => (
                <polygon
                  key={m.id}
                  points={DIMENSIONS.map((d, i) => {
                    const p = hexPoint(m.scores[d.key], i, HEX_GEO);
                    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                  }).join(" ")}
                  fill={HERO_COLORS[hi % HERO_COLORS.length]}
                  fill-opacity={hi === heroActiveSafe ? 0.45 : 0}
                  stroke={HERO_COLORS[hi % HERO_COLORS.length]}
                  stroke-width={2.5}
                  stroke-linejoin="round"
                  opacity={hi === heroActiveSafe ? 1 : 0}
                  style={{ transition: "opacity 0.6s" }}
                >
                  <title>{`${m.name} (Overall ${m.scores.overall})`}</title>
                </polygon>
              ))}
              {heroTop12.length > 0 &&
                DIMENSIONS.map((d, i) => {
                  const m = heroTop12[heroActiveSafe];
                  const p = hexPoint(m.scores[d.key], i, HEX_GEO);
                  return (
                    <circle
                      key={`${m.id}-${d.key}`}
                      cx={p.x}
                      cy={p.y}
                      r={4.5}
                      style={{ fill: HERO_COLORS[heroActiveSafe % HERO_COLORS.length] }}
                    >
                      <title>{dimensionTooltip(m, d.key)}</title>
                    </circle>
                  );
                })}
              {DIMENSIONS.map((d, i) => {
                const p = hexPoint(100, i, HEX_GEO, HEX_GEO.labelR);
                return (
                  <text
                    key={d.key}
                    x={p.x}
                    y={p.y}
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="12"
                    font-weight={600}
                    class="fill-[#4e6678] dark:fill-[#93adbe]"
                  >
                    {d.short}
                  </text>
                );
              })}
            </svg>
            {heroTop12.length > 0 && (
              <p class="mx-auto mt-4 max-w-56 truncate text-center text-[13px] font-bold">
                <a href={`/model/${heroTop12[heroActiveSafe].slug}/`}>{heroTop12[heroActiveSafe].name}</a>
              </p>
            )}
          </div>
        </div>
      </section>
    );
  },
);
