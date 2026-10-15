import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  MODELS,
  SOURCES,
  DIMENSIONS,
  virtualDimFor,
  isDecisionModel,
} from "../../data/models";
import type { DimensionKey, ResultsView, SourceKey } from "../../data/models";
import "../design-6sol/study.css";

/**
 * /v2 — full-site redesign in the design-6sol language.
 * Same infrastructure (MODELS from pnpm sync), new UI everywhere:
 * header, hero, compare, all-models, methodology, footer.
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

const SPONSOR_URL = "https://github.com/sponsors/delirium-dj";
const PAGE_SIZE = 12;

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
  const sorted = [...filtered].sort((a, b) => {
    if (sortKey.value === "name") return sortDirection.value * a.name.localeCompare(b.name);
    const key = sortKey.value as keyof typeof a.scores;
    const primary = sortDirection.value * (Math.round(a.scores[key]) - Math.round(b.scores[key]));
    if (primary !== 0) return primary;
    if (key !== "overall") {
      const secondary =
        sortDirection.value * (Math.round(a.scores.overall) - Math.round(b.scores.overall));
      if (secondary !== 0) return secondary;
    }
    return a.name.localeCompare(b.name);
  });
  const colBestWorst = (get: (s: (typeof rankBase)[number]["scores"]) => number) => {
    if (filtered.length === 0) return { best: null as number | null, worst: null as number | null };
    const vals = filtered.map((r) => Math.round(get(r.scores)));
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

  if (!top) {
    return <main class="d6 d6-missing">No models in the current dataset.</main>;
  }

  const highest = qualityKeys.reduce((best, key) =>
    top.scores[key] > top.scores[best] ? key : best,
  );
  const orderedScoreCols: ("overall" | DimensionKey)[] = ["overall", ...tableKeys];

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
              Independent <span aria-hidden="true">/</span> {generative.length} models ·{" "}
              {SOURCES.length} results sources
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
          <div class="d6-instrument" aria-label="About ModelComp">
            <div class="d6-instrument-top">
              <span>The mark — six axes, one score</span>
            </div>
            <img
              src="/favicon.svg"
              alt="ModelComp logo: a hexagon with six dimension dots around a core"
              width={400}
              height={400}
              style={{ width: "100%", maxWidth: "380px", height: "auto", margin: "8px auto 0" }}
            />
            <div class="d6-measures">
              <div class="d6-measure" style={{ minHeight: "44px" }}>
                <span class="d6-measure-name">Models tracked</span>
                <strong class="d6-measure-value">{generative.length}</strong>
              </div>
              <div class="d6-measure" style={{ minHeight: "44px" }}>
                <span class="d6-measure-name">Results sources</span>
                <strong class="d6-measure-value">{SOURCES.length}</strong>
              </div>
              <div class="d6-measure" style={{ minHeight: "44px" }}>
                <span class="d6-measure-name">Leader overall</span>
                <strong class="d6-measure-value">{top.scores.overall}</strong>
              </div>
            </div>
            <p class="d6-instrument-note">
              Each vertex is a scored dimension — tool use, reasoning, context, cost, coding,
              multimodal. The hexagon in Compare plots them all; Overall averages the five quality
              dimensions, cost excluded.
            </p>
          </div>
        </section>

        <section class="d6-facts" aria-label="Dataset facts">
          <div>
            <span>Models tracked</span>
            <strong>{generative.length} generative + {decisions.length} decision</strong>
          </div>
          <div>
            <span>Leader overall ({activeSourceLabel})</span>
            <strong>
              {top.name} — {top.scores.overall}
            </strong>
          </div>
          <div>
            <span>Scoring</span>
            <strong>Overall = mean of 5 quality dims, cost excluded</strong>
          </div>
        </section>

        <section class="d6-section" aria-labelledby="v2-compare-title">
          <div class="d6-section-intro d6-section-intro-row">
            <div>
              <h2 id="v2-compare-title">Compare models</h2>
              <p>
                Pick up to three models. Exact scores side by side, in the current results source
                ({activeSourceLabel}). Decision models can't be picked here — their scores aren't
                comparable; see the decision shelf below.
              </p>
            </div>
            <span class="d6-count">3 slots</span>
          </div>
          <div class="d6-more-grid" style={{ marginTop: "32px" }}>
            {[
              { label: "Model A", value: cmpA },
              { label: "Model B", value: cmpB },
              { label: "Model C", value: cmpC },
            ].map((slot) => (
              <div key={slot.label}>
                <span>{slot.label}</span>
                <select
                  aria-label={slot.label}
                  value={slot.value.value}
                  onChange$={(_, el) => {
                    slot.value.value = el.value;
                  }}
                  style={{ maxWidth: "100%" }}
                >
                  <option value="">— empty —</option>
                  {cmpOptions.map((o) => (
                    <option key={o.id} value={o.id} selected={o.id === slot.value.value}>
                      {o.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          {cmpModels.length > 0 && (
            <div class="d6-instrument" aria-label="Comparison radar chart">
              <div class="d6-instrument-top">
                <span>
                  Radar —{" "}
                  {cmpModels.length > 0
                    ? cmpModels.map((m) => m.name).join(", ")
                    : "no models selected"}
                </span>
              </div>
              <svg
                viewBox="0 0 400 400"
                role="img"
                class="d6-hex"
                aria-label={`Radar chart comparing ${cmpModels.map((m) => m.name).join(", ")}`}
              >
                {[25, 50, 75, 100].map((ring) => (
                  <polygon
                    key={ring}
                    points={hexPolygon(ring)}
                    fill="none"
                    class="d6-hex-ring"
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
                      class="d6-hex-axis"
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
                        style={{
                          fill: SERIES_COLORS[si % SERIES_COLORS.length],
                          stroke: "var(--d6-page)",
                          strokeWidth: 1.5,
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
                      class="d6-hex-label"
                    >
                      <title>{d.description}</title>
                      {d.short}
                    </text>
                  );
                })}
              </svg>
              <ul
                aria-label="Legend"
                style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px", padding: 0, listStyle: "none" }}
              >
                {cmpModels.map((m, si) => (
                  <li
                    key={m.id}
                    style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: SERIES_COLORS[si % SERIES_COLORS.length],
                      }}
                    />
                    <a href={`/model/${m.slug}/`} style={{ color: "inherit", fontWeight: 600 }}>
                      {m.name}
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
              <p class="d6-instrument-note">
                Axes are Tool, Reason, Context, Cost, Coding, Multi — 0–100 with emphasis on the top
                end (the outer half of each axis covers 75–100). Exact values are in the table
                below. Hover any dot for the underlying spec.
              </p>
            </div>
          )}
          {cmpModels.length > 0 && (
            <div class="d6-table-scroll" tabIndex={0} aria-label="Scroll to see compared models">
              <table class="d6-table">
                <caption class="d6-visually-hidden">Exact scores for the selected models</caption>
                <thead>
                  <tr>
                    <th scope="col">Dimension</th>
                    {cmpModels.map((m) => (
                      <th scope="col" key={m.id}>
                        <a href={`/model/${m.slug}/`} style={{ color: "inherit" }}>
                          {m.name}
                        </a>{" "}
                        <span class="d6-rating-overall">{m.scores.overall}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableKeys.map((k) => (
                    <tr key={k}>
                      <th scope="row">{names[k]}</th>
                      {cmpModels.map((m) => (
                        <td key={m.id}>{m.scores[k]}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Overall Score</th>
                    {cmpModels.map((m) => (
                      <td key={m.id} class="d6-rating-overall">
                        {m.scores.overall}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Context window</th>
                    {cmpModels.map((m) => (
                      <td key={m.id}>{m.meta.contextWindow}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Pricing / 1M</th>
                    {cmpModels.map((m) => (
                      <td key={m.id}>{(m.meta.pricingTiers ?? [m.meta.pricingNote]).join("; ")}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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
                  <strong>{top.scores[highest]}/100</strong>. Switch the results source below to see
                  the average or any individual reviewer's ratings.
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
              <p>
                Every tracked model in the current results source ({activeSourceLabel}). Search to
                find a model, or open its page for the full breakdown.
              </p>
            </div>
            <div class="d6-header-right">
              <span class="d6-count">{filtered.length} models</span>
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
          <div
            class="d6-header-right"
            style={{ marginTop: "28px", justifyContent: "flex-start", flexWrap: "wrap" }}
          >
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
              class="d6-theme-toggle"
              style={{ minWidth: "220px", cursor: "text" }}
            />
            <label style={{ fontSize: "13px", color: "var(--d6-muted)" }}>
              Results source{" "}
              <select
                aria-label="Results source"
                value={source.value}
                onChange$={(_, el) => {
                  source.value = el.value as ResultsView;
                  displayCount.value = PAGE_SIZE;
                }}
                style={{ font: "inherit", maxWidth: "260px" }}
              >
                {SOURCES.map((s) => (
                  <option key={s.key} value={s.key} selected={s.key === source.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {q !== "" && (
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--d6-muted)" }}>
              {filtered.length} of {generative.length} models
            </p>
          )}
          {filtered.length === 0 ? (
            <p style={{ marginTop: "24px" }}>
              No models match your search for the current results source. Try a different search or
              source.
            </p>
          ) : allModelsView.value === "cards" ? (
            <>
              <div class="d6-evidence-grid">
                {visibleModels.map((m, i) => (
                  <article class="d6-evidence-item" key={m.id}>
                    <h3>
                      #{i + 1}{" "}
                      <a href={`/model/${m.slug}/`} style={{ color: "inherit" }}>
                        {m.name}
                      </a>
                    </h3>
                    <strong>
                      {m.scores.overall}{" "}
                      <span style={{ fontSize: "13px", fontWeight: 400 }}>
                        {!m.meta.noFreeId ? (
                          <span title={m.meta.freeTierNote ?? m.meta.pricingNote}>· Free</span>
                        ) : (
                          <span title="Cost is scored on paid pricing — no free tier ID">
                            · Paid
                          </span>
                        )}
                      </span>
                    </strong>
                    <p style={{ marginTop: "8px", fontSize: "13px" }}>{m.short}</p>
                    <div style={{ marginTop: "10px", fontSize: "12px", lineHeight: 1.7 }}>
                      <div>
                        <strong>Context:</strong> {m.meta.contextWindow}
                      </div>
                      <div>
                        <strong>Modalities:</strong> {m.meta.modalities}
                      </div>
                      <div>
                        <strong>Pricing:</strong>{" "}
                        {(m.meta.pricingTiers ?? [m.meta.pricingNote]).join("; ")}
                      </div>
                      <div title="Newest report date across this model's findings files">
                        <strong>Verified:</strong> {m.verified ?? "—"} ·{" "}
                        <strong>{reportCount(m)}</strong> reports
                      </div>
                    </div>
                    <p style={{ marginTop: "8px", fontSize: "12px" }}>
                      Tool {m.scores.tool} · Reason {m.scores.reasoning} · Context{" "}
                      {m.scores.context} · Code {m.scores.coding} · Multi {m.scores.multimodal} ·
                      Cost {m.scores.cost}
                    </p>
                    <p class="d6-citations" style={{ marginTop: "8px" }}>
                      <a href={`/model/${m.slug}/`}>Open full profile →</a>
                    </p>
                  </article>
                ))}
              </div>
              {displayCount.value < filtered.length && (
                <div class="d6-more" style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    class="d6-view-btn d6-view-active"
                    style={{ padding: "10px 28px", fontSize: "14px" }}
                    onClick$={() => {
                      displayCount.value += PAGE_SIZE;
                    }}
                  >
                    Show more
                  </button>{" "}
                  <button
                    type="button"
                    class="d6-view-btn"
                    style={{ padding: "10px 28px", fontSize: "14px" }}
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
            <div
              ref={scrollerRef}
              class="d6-table-scroll"
              tabIndex={0}
              aria-label="Scroll to see all score columns"
            >
              <table class="d6-table">
                <caption class="d6-visually-hidden">
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
                    <th scope="col">Context</th>
                    <th scope="col">Pricing / 1M</th>
                    <th scope="col" title="Newest report date across each model's findings files">
                      Verified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.slice(0, displayCount.value).map((m) => (
                    <tr key={m.id}>
                      <th scope="row">
                        <a href={`/model/${m.slug}/`} style={{ color: "inherit" }}>
                          {m.name}
                        </a>
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
                      <td>{m.meta.contextWindow}</td>
                      <td>{(m.meta.pricingTiers ?? [m.meta.pricingNote]).join("; ")}</td>
                      <td title="Newest report date across this model's findings files">
                        {m.verified ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!(filtered.length === 0) &&
            allModelsView.value === "list" &&
            displayCount.value < sorted.length && (
              <div class="d6-more" style={{ textAlign: "center" }}>
                <button
                  type="button"
                  class="d6-view-btn d6-view-active"
                  style={{ padding: "10px 28px", fontSize: "14px" }}
                  onClick$={() => {
                    displayCount.value += PAGE_SIZE;
                  }}
                >
                  Show more
                </button>{" "}
                <button
                  type="button"
                  class="d6-view-btn"
                  style={{ padding: "10px 28px", fontSize: "14px" }}
                  onClick$={() => {
                    displayCount.value = sorted.length;
                  }}
                >
                  Show all ({sorted.length})
                </button>
              </div>
            )}
          <p class="d6-table-note">
            Averages recomputed by pnpm sync from per-model research files. Cost never counts toward
            Overall.
          </p>
        </section>

        {decisionFiltered.length > 0 && (
          <section class="d6-section" aria-labelledby="v2-decision-title">
            <div class="d6-section-intro d6-section-intro-row">
              <div>
                <h2 id="v2-decision-title">Decision models</h2>
                <p>
                  System-One models return typed judgments (choice, score, yes/no probability)
                  instead of generated text — for routing, triage, and guardrails inside agent
                  pipelines. They are scored on different axes and are{" "}
                  <strong>not comparable</strong> to generative Overall scores.
                </p>
              </div>
              <span class="d6-count">{decisionFiltered.length} models</span>
            </div>
            <div class="d6-evidence-grid">
              {decisionFiltered.map((m) => (
                <article class="d6-evidence-item" key={m.id}>
                  <h3>
                    <a href={`/model/${m.slug}/`} style={{ color: "inherit" }}>
                      {m.name}
                    </a>
                  </h3>
                  <strong style={{ fontSize: "20px" }}>Decision system</strong>
                  <p style={{ marginTop: "8px", fontSize: "13px" }}>{m.short}</p>
                  <div style={{ marginTop: "10px", fontSize: "12px", lineHeight: 1.7 }}>
                    <div>
                      <strong>State budget:</strong> {m.meta.contextWindow}
                    </div>
                    <div>
                      <strong>I/O:</strong> {m.meta.modalities}
                    </div>
                    <div>
                      <strong>Pricing:</strong> {m.meta.pricingNote}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section class="d6-section" aria-labelledby="v2-method-title">
          <div class="d6-section-intro">
            <h2 id="v2-method-title">How scoring works</h2>
            <p>
              Scores are normalized interpretations from 1 to 100 (higher is better), based on
              public benchmarks. Overall Score is the rounded mean of the five quality dimensions —
              Cost efficiency is scored separately and never counts toward Overall.
            </p>
          </div>
          <div class="d6-more-grid" style={{ marginTop: "32px" }}>
            <div>
              <span>Independently researched — every benchmark number cites its source; missing data is never invented</span>
            </div>
            <div>
              <span>Averaged, not single-opinion — mean across independent reporting agents; evidence-free reports are quarantined</span>
            </div>
            <div>
              <span>Re-researched weekly — reports older than seven days are checked against fresh benchmarks</span>
            </div>
            {DIMENSIONS.map((d) => (
              <div key={d.key}>
                <span>
                  <strong>{d.label}:</strong> {d.description}
                </span>
              </div>
            ))}
          </div>
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
                <a href={SPONSOR_URL} target="_blank" rel="noopener noreferrer" class="d6-tier">
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
