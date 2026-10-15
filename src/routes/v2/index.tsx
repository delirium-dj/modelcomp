import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS } from "../../data/models";
import type { DimensionKey } from "../../data/models";
import "../design-6sol/study.css";

/**
 * /v2 — full-site redesign in the design-6sol language.
 * Same infrastructure (MODELS from pnpm sync), new UI everywhere:
 * header, hero, leaderboard, methodology, footer.
 * Homepage (/) is untouched; delete this folder to abandon.
 */

type SortKey = DimensionKey | "overall" | "name";

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

const SPONSOR_URL = "https://github.com/sponsors/delirium-dj";

export default component$(() => {
  const sortKey = useSignal<SortKey>("overall");
  const sortDirection = useSignal<1 | -1>(-1);
  const allModelsView = useSignal<"cards" | "list">("cards");
  const theme = useSignal<"light" | "dark">("light");
  const profileView = useSignal<"bars" | "hex">("hex");
  const scrollerRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const sys = window.matchMedia("(prefers-color-scheme: dark)");
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("v2-theme");
    } catch {
      stored = null;
    }
    if (stored === "light" || stored === "dark") {
      theme.value = stored;
      return;
    }
    theme.value = sys.matches ? "dark" : "light";
    const follow = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("v2-theme")) return;
      } catch {
        /* storage unavailable — keep following */
      }
      theme.value = e.matches ? "dark" : "light";
    };
    sys.addEventListener("change", follow);
    cleanup(() => sys.removeEventListener("change", follow));
  });

  const ranked = [...MODELS].sort((a, b) => b.scores.overall - a.scores.overall);
  const top = ranked[0];
  const orderedScoreCols: ("overall" | DimensionKey)[] = ["overall", ...tableKeys];
  const sorted = [...ranked].sort((a, b) => {
    if (sortKey.value === "name") return sortDirection.value * a.name.localeCompare(b.name);
    const key = sortKey.value as keyof typeof a.scores;
    const primary = sortDirection.value * (Math.round(a.scores[key]) - Math.round(b.scores[key]));
    if (primary !== 0) return primary;
    if (key !== "overall") {
      const secondary = sortDirection.value * (Math.round(a.scores.overall) - Math.round(b.scores.overall));
      if (secondary !== 0) return secondary;
    }
    return a.name.localeCompare(b.name);
  });
  const colBestWorst = (get: (s: (typeof ranked)[number]["scores"]) => number) => {
    if (ranked.length === 0) return { best: null as number | null, worst: null as number | null };
    const vals = ranked.map((r) => Math.round(get(r.scores)));
    return { best: Math.max(...vals), worst: Math.min(...vals) };
  };
  const hlStats = new Map<string, { best: number | null; worst: number | null }>([
    ["overall", colBestWorst((s) => s.overall)],
    ...tableKeys.map((k) => [k, colBestWorst((s) => s[k])] as const),
  ]);
  const hlClass = (col: string, value: number): string => {
    const st = hlStats.get(col);
    if (!st || st.best === null || st.worst === null) return "";
    if (value === st.best) return " d6-best";
    if (value === st.worst) return " d6-worst";
    return "";
  };

  if (!top) {
    return <main class="d6 d6-missing">No models in the current dataset.</main>;
  }

  const highest = qualityKeys.reduce((best, key) => (top.scores[key] > top.scores[best] ? key : best));

  return (
    <main class={`d6 d6-${theme.value}`} data-theme={theme.value} id="top">
      <div class="d6-shell">
        <header class="d6-header">
          <div class="d6-brand">
            <svg viewBox="0 0 300 300" class="d6-brand-logo" role="presentation" aria-hidden="true">
              <defs>
                <linearGradient id="v2-logo-hex" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#6366f1" />
                  <stop offset="100%" stop-color="#10b981" />
                </linearGradient>
                <radialGradient id="v2-logo-core" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stop-color="#c7d2fe" />
                  <stop offset="100%" stop-color="#4f46e5" />
                </radialGradient>
              </defs>
              <polygon
                points="150,28 254,88 254,208 150,268 46,208 46,88"
                fill="none"
                stroke="url(#v2-logo-hex)"
                stroke-width="15"
                stroke-linejoin="round"
              />
              <circle cx="150" cy="148" r="45" fill="url(#v2-logo-core)" />
            </svg>
            <span>
              ModelComp <span class="d6-brand-slash">/</span> Compare
            </span>
          </div>
          <div class="d6-header-right">
            <a href="/" class="d6-header-date">
              ← Back to v1
            </a>
            <button
              type="button"
              class="d6-theme-toggle"
              aria-pressed={theme.value === "dark"}
              aria-label={theme.value === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme.value === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick$={() => {
                theme.value = theme.value === "dark" ? "light" : "dark";
                try {
                  localStorage.setItem("v2-theme", theme.value);
                } catch {
                  /* private mode — theme just doesn't persist */
                }
              }}
            >
              <span class="d6-theme-dot" aria-hidden="true" />
              {theme.value === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </header>

        <section class="d6-hero" aria-labelledby="v2-title">
          <div class="d6-hero-copy">
            <p class="d6-family">
              Independent <span aria-hidden="true">/</span> {ranked.length} models tracked
            </p>
            <h1 id="v2-title">
              Every
              <br />
              <span>model. One score.</span>
            </h1>
            <p class="d6-description">
              AI coding models compared on tool use, reasoning, context, multimodal and coding —
              normalized to 1–100 from public benchmarks. This is the v2 redesign experiment.
            </p>
            <div class="d6-overall">
              <span class="d6-overall-number">{top.scores.overall}</span>
              <span class="d6-overall-caption">
                Top overall score
                <br />
                <strong>{top.name}</strong>
              </span>
            </div>
          </div>
          <div class="d6-instrument" aria-label="Top model performance profile">
            <div class="d6-instrument-top">
              <span>Leader profile — {top.name}</span>
              <div class="d6-view-switch" role="group" aria-label="Performance profile display">
                <button
                  type="button"
                  class={`d6-view-btn${profileView.value === "bars" ? " d6-view-active" : ""}`}
                  aria-pressed={profileView.value === "bars"}
                  onClick$={() => {
                    profileView.value = "bars";
                  }}
                >
                  Bars
                </button>
                <button
                  type="button"
                  class={`d6-view-btn${profileView.value === "hex" ? " d6-view-active" : ""}`}
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
                <div class="d6-measures">
                  {qualityKeys.map((key) => (
                    <div class="d6-measure" key={key}>
                      <span class="d6-measure-name">{names[key]}</span>
                      <div
                        class="d6-track"
                        role="img"
                        aria-label={`${names[key]}: ${top.scores[key]} out of 100`}
                      >
                        <span class="d6-fill" style={{ width: barWidth(top.scores[key]) }} />
                      </div>
                      <strong class="d6-measure-value">{top.scores[key]}</strong>
                    </div>
                  ))}
                </div>
                <div class="d6-measure d6-cost">
                  <span class="d6-measure-name">Cost efficiency</span>
                  <div
                    class="d6-track"
                    role="img"
                    aria-label={`Cost efficiency: ${top.scores.cost} out of 100`}
                  >
                    <span class="d6-fill" style={{ width: barWidth(top.scores.cost) }} />
                  </div>
                  <strong class="d6-measure-value">{top.scores.cost}</strong>
                </div>
                <p class="d6-instrument-note">
                  Bars use the same top-end emphasis as the hexagon (75 sits at half width). Overall
                  averages the five quality dimensions. Cost is shown separately.
                </p>
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 400 344"
                  role="img"
                  class="d6-hex"
                  aria-label={`Hexagon chart of average scores: ${hexKeys.map((k) => `${names[k]} ${top.scores[k]}`).join(", ")}`}
                >
                  {[25, 50, 75, 100].map((ring) => (
                    <polygon
                      key={ring}
                      points={hexPolygon(ring)}
                      fill="none"
                      class="d6-hex-ring"
                      stroke-width={ring === 100 ? 1.5 : 1}
                    />
                  ))}
                  {hexKeys.map((key, i) => {
                    const end = hexPoint(100, i);
                    return (
                      <line
                        key={key}
                        x1={HEX_CX}
                        y1={HEX_CY}
                        x2={end.x}
                        y2={end.y}
                        class="d6-hex-axis"
                        stroke-width="1"
                      />
                    );
                  })}
                  <polygon
                    points={hexKeys
                      .map((key, i) => {
                        const p = hexPoint(top.scores[key], i);
                        return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                      })
                      .join(" ")}
                    class="d6-hex-shape"
                    stroke-linejoin="round"
                  >
                    <title>{`Overall ${top.scores.overall}`}</title>
                  </polygon>
                  {hexKeys.map((key, i) => {
                    const p = hexPoint(top.scores[key], i);
                    return (
                      <circle key={key} cx={p.x} cy={p.y} r={5} class="d6-hex-dot">
                        <title>{`${names[key]}: ${top.scores[key]}`}</title>
                      </circle>
                    );
                  })}
                  {hexKeys.map((key, i) => {
                    const p = hexPoint(100, i, HEX_LABEL_R);
                    return (
                      <text
                        key={key}
                        x={p.x}
                        y={p.y}
                        text-anchor="middle"
                        dominant-baseline="middle"
                        class="d6-hex-label"
                      >
                        {names[key]} · {top.scores[key]}
                      </text>
                    );
                  })}
                </svg>
                <p class="d6-instrument-note">
                  Six axes, 0–100, with emphasis on the top end (the outer half of each axis covers
                  75–100). Cost is plotted but never counts toward Overall.{" "}
                  <a href={`/model/${top.slug}/`}>Open {top.name} profile →</a>
                </p>
              </>
            )}
          </div>
        </section>

        <section class="d6-facts" aria-label="Dataset facts">
          <div>
            <span>Models tracked</span>
            <strong>{ranked.length}</strong>
          </div>
          <div>
            <span>Leader overall</span>
            <strong>
              {top.name} — {top.scores.overall}
            </strong>
          </div>
          <div>
            <span>Scoring</span>
            <strong>Overall = mean of 5 quality dims, cost excluded</strong>
          </div>
        </section>

        <section class="d6-reading" aria-labelledby="v2-reading-title">
          <div class="d6-section-intro">
            <h2 id="v2-reading-title">Reading the scores</h2>
            <p>How to interpret the scores before diving into individual model pages.</p>
          </div>
          <div class="d6-reading-grid">
            <article class="d6-reading-item">
              <span class="d6-reading-marker d6-reading-marker-blue" aria-hidden="true" />
              <div>
                <h3>Where {top.name} stands out</h3>
                <p>
                  {names[highest]} is its highest-rated dimension at{" "}
                  <strong>{top.scores[highest]}/100</strong>. Select any column below to re-rank
                  every model by that dimension.
                </p>
              </div>
            </article>
            <article class="d6-reading-item">
              <span class="d6-reading-marker d6-reading-marker-orange" aria-hidden="true" />
              <div>
                <h3>The trade-off</h3>
                <p>
                  Cost efficiency scores <strong>{top.scores.cost}/100</strong>. This is a separate
                  measure: it does not lower the {top.scores.overall} overall quality score. Check
                  pricing before choosing a model for high-volume work.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section class="d6-section d6-ratings" aria-labelledby="v2-ratings-title">
          <div class="d6-section-intro d6-section-intro-row">
            <div>
              <h2 id="v2-ratings-title">All models</h2>
              <p>Every tracked model, averaged across qualifying reports. Select a column to sort.</p>
            </div>
            <div class="d6-header-right">
              <span class="d6-count">{ranked.length} models</span>
              <div class="d6-view-switch" role="group" aria-label="All models display">
                <button
                  type="button"
                  class={`d6-view-btn${allModelsView.value === "cards" ? " d6-view-active" : ""}`}
                  aria-pressed={allModelsView.value === "cards"}
                  onClick$={() => {
                    allModelsView.value = "cards";
                  }}
                >
                  Cards
                </button>
                <button
                  type="button"
                  class={`d6-view-btn${allModelsView.value === "list" ? " d6-view-active" : ""}`}
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
          {allModelsView.value === "cards" ? (
            <div class="d6-evidence-grid">
              {sorted.map((m, i) => (
                <a
                  key={m.id}
                  href={`/model/${m.slug}/`}
                  class="d6-evidence-item"
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={`${m.name}, overall ${Math.round(m.scores.overall)} out of 100`}
                >
                  <h3>
                    #{i + 1} {m.name}
                  </h3>
                  <strong>{Math.round(m.scores.overall)}</strong>
                  <p class="d6-citations" style={{ marginTop: "4px" }}>
                    Tool {Math.round(m.scores.tool)} · Reason {Math.round(m.scores.reasoning)} ·
                    Code {Math.round(m.scores.coding)}
                  </p>
                  <details
                    class="d6-citations"
                    onClick$={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <summary>All six dimensions</summary>
                    <p>
                      {qualityKeys.map((k) => `${names[k]} ${Math.round(m.scores[k])}`).join(" · ")} ·
                      Cost {Math.round(m.scores.cost)}
                    </p>
                  </details>
                </a>
              ))}
            </div>
          ) : (
          <div
            ref={scrollerRef}
            class="d6-table-scroll"
            tabIndex={0}
            aria-label="Scroll to see all score columns"
          >
            <table class="d6-table">
              <caption class="d6-visually-hidden">Model leaderboard, average scores out of 100</caption>
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
                  >
                    <button
                      type="button"
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
                      <span aria-hidden="true" class="d6-sort-icon">
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
                    >
                      <button
                        type="button"
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
                        <span aria-hidden="true" class="d6-sort-icon">
                          {sortKey.value === key ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}
                        </span>
                        {key === "overall" && (
                          <span class="d6-overall-tip" role="tooltip">
                            Overall is the average of tool use, reasoning, context, coding and
                            multimodal scores. Cost efficiency is excluded.
                          </span>
                        )}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((m) => (
                  <tr key={m.id}>
                    <th scope="row">
                      <a href={`/model/${m.slug}/`}>{m.name}</a>
                    </th>
                    {orderedScoreCols.map((key) => {
                      const value = Math.round(m.scores[key]);
                      return (
                        <td
                          key={key}
                          class={`${key === "overall" ? "d6-rating-overall" : ""}${hlClass(key, value)}`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
          <p class="d6-table-note">
            Averages recomputed by pnpm sync from per-model research files. Cost never counts toward
            Overall.
          </p>
        </section>

        <footer class="d6-footer">
          <div class="d6-support">
            <div class="d6-support-copy">
              <p class="d6-family">
                ModelComp <span aria-hidden="true">/</span> v2 experiment
              </p>
              <h2>Full site, new clothes</h2>
              <p>
                <strong>Same data, same scores — only the presentation changed.</strong>
              </p>
              <p>
                If this wins, its composition moves to <strong>/</strong>. If it loses, delete{" "}
                <strong>src/routes/v2/</strong> and this page is gone without a trace.
              </p>
            </div>
            <div class="d6-support-panel">
              <div class="d6-tiers">
                <a href="/" class="d6-tier d6-tier-primary">
                  <span class="d6-tier-label">
                    <span aria-hidden="true">♥</span> v1 homepage
                  </span>
                  <span class="d6-tier-detail">current production UI</span>
                </a>
                <a
                  href={SPONSOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="d6-tier"
                >
                  <span class="d6-tier-label">
                    <span aria-hidden="true">♥</span> Fund independent research
                  </span>
                  <span class="d6-tier-detail">no paid placements, ever</span>
                </a>
              </div>
            </div>
          </div>
          <div class="d6-fine">
            <p>
              Data syncs from per-model research files on every build. Scores are normalized
              interpretations, not official vendor scores.
            </p>
            <p>Independent AI model comparisons, no sponsored rankings.</p>
          </div>
          <div class="d6-bottom">
            <span>© 2026 ModelComp / v2 experiment</span>
            <a href="/contact/">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "ModelComp v2 — every model, one score",
  meta: [
    {
      name: "description",
      content:
        "Redesign experiment: all AI coding models ranked 1–100 on tool use, reasoning, context, multimodal, coding and cost.",
    },
    { name: "robots", content: "noindex" },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap",
    },
  ],
};
