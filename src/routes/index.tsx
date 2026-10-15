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
import "./design-6sol/study.css";
import "./v2/v2.css";
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
    return <main class="d6 d6-missing">No models in the current dataset.</main>;
  }

  const orderedScoreCols: ("overall" | DimensionKey)[] = ["overall", ...tableKeys];

  return (
    <main class={`d6 v2 d6-${theme.value}`} data-theme={theme.value} id="top">
      <V2Header theme={theme} navBase="" />
      <div class="d6-shell">

        <section class="v2-hero-slab" aria-labelledby="v2-title">
          <div class="v2-hero-grid">
            <div>
              <p class="d6-family">
                Independent <span aria-hidden="true">/</span> {generative.length} models ·{" "}
                {SOURCES.length} results sources
              </p>
              <h1 id="v2-title">
                Compare AI coding models on <span>what actually matters</span>
              </h1>
              <p class="v2-hero-sub">
                Tool use, reasoning, context, multimodal, coding and cost — normalized to 1–100 from
                public benchmarks so current and future models can be compared side by side.
              </p>
              <div class="v2-cta-row">
                <a href="/#compare" class="v2-btn">
                  Compare models
                </a>
                <a href="/#methodology" class="v2-btn-ghost">
                  How scoring works
                </a>
              </div>
            </div>
            <div>
              <img
                src="/favicon.svg"
                alt="ModelComp logo: a hexagon with six dimension dots around a core"
                width={400}
                height={400}
                class="v2-hero-logo"
              />
            </div>
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

        <section class="d6-section v2-flush-bottom" id="compare" aria-labelledby="v2-compare-title">
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
          <div class="v2-slots">
            {[
              { label: "Model A", value: cmpA },
              { label: "Model B", value: cmpB },
              { label: "Model C", value: cmpC },
            ].map((slot, si) => (
              <div key={slot.label}>
                <span
                  aria-hidden="true"
                  class="v2-legend-dot"
                  title={`${slot.label} plots in this color`}
                  style={{ backgroundColor: SERIES_COLORS[si % SERIES_COLORS.length] }}
                />
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
            <div class="v2-compare-grid">
              <div class="d6-instrument v2-radar-panel" aria-label="Comparison radar chart">
                <svg
                  viewBox="0 0 400 400"
                  role="img"
                  class="v2-radar"
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
              </div>
              <div>
                <div class="v2-source-block">
                  <label class="v2-source">
                    Results source{" "}
                  <select
                    aria-label="Results source"
                    value={source.value}
                    onChange$={(_, el) => {
                      handleSourceChange$(el.value);
                    }}
                  >
                    {SOURCES.map((s) => (
                      <option key={s.key} value={s.key} selected={s.key === source.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
                <p class="d6-instrument-note" style={{ marginTop: "8px" }}>
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
                <ul aria-label="Legend" class="v2-legend">
                  {cmpModels.map((m, si) => (
                    <li key={m.id}>
                      <span
                        aria-hidden="true"
                        class="v2-legend-dot"
                        style={{
                          backgroundColor: SERIES_COLORS[si % SERIES_COLORS.length],
                        }}
                      />
                      <a href={`/v2/${m.slug}/`} style={{ color: "inherit", fontWeight: 600 }}>
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
            <div class="d6-table-scroll" tabIndex={0} aria-label="Scroll to see compared models">
              <table class="d6-table">
                <caption class="d6-visually-hidden">Exact scores for the selected models</caption>
                <thead>
                  <tr>
                    <th scope="col">Dimension</th>
                    {cmpModels.map((m) => (
                      <th scope="col" key={m.id}>
                        <span class="v2-model-cell">
                          <VendorIcon id={m.id} name={m.name} />
                          <a href={`/v2/${m.slug}/`} style={{ color: "inherit" }}>
                            {m.name}
                          </a>
                        </span>
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
                  <tr class="v2-overall-row">
                    <th scope="row">Overall Score</th>
                    {cmpModels.map((m) => (
                      <td key={m.id} class="d6-rating-overall">
                        {m.scores.overall}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section class="d6-section v2-flush-bottom v2-flush-top" id="methodology" aria-labelledby="v2-method-title">
          <div class="d6-section-intro d6-section-intro-row v2-method-intro">
            <h2 id="v2-method-title">How scoring works</h2>
            <p>
              Scores are normalized interpretations from 1 to 100 (higher is better), based on
              public benchmarks. Overall Score is the rounded mean of the five quality dimensions —
              Cost efficiency is scored separately and never counts toward Overall.
            </p>
          </div>
          <div class="d6-evidence-grid v2-tiles">
            <article class="d6-evidence-item">
              <h3>Independently researched</h3>
              <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7 }}>
                Every benchmark number cites its source. Missing data is marked — never invented.
              </p>
            </article>
            <article class="d6-evidence-item">
              <h3>Averaged, not single-opinion</h3>
              <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7 }}>
                Each model's scores are the mean across independent reporting agents.
                Evidence-free reports are quarantined and never counted.
              </p>
            </article>
            <article class="d6-evidence-item">
              <h3>Re-researched weekly</h3>
              <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7 }}>
                Every report older than seven days is checked against fresh benchmarks, and scores
                refresh whenever new verified evidence would change them.
              </p>
            </article>
          </div>
          <h3 class="v2-subhead">What each dimension measures</h3>
          <div class="d6-evidence-grid v2-tiles">
            {DIMENSIONS.map((d) => (
              <article class="d6-evidence-item" key={d.key}>
                <h3>{d.label}</h3>
                <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7 }}>
                  {d.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section class="d6-section d6-ratings v2-flush-top" id="models" aria-labelledby="v2-ratings-title">
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
          <div class="v2-toolbar">
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
              class="v2-search"
            />
            <label class="v2-source">
              Results source{" "}
              <select
                aria-label="Results source"
                value={source.value}
                onChange$={(_, el) => {
                  handleSourceChange$(el.value);
                }}
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
              <div class="v2-cards-grid">
                {visibleModels.map((m) => (
                  <article class="v2-card" key={m.id}>
                    <div class="v2-card-head">
                      <h3 class="v2-card-name">
                        <VendorIcon id={m.id} name={m.name} />
                        <a href={`/v2/${m.slug}/`}>{m.name}</a>
                      </h3>
                      <div
                        class="v2-card-score"
                        title="Overall score out of 100 — mean of the five quality dimensions"
                      >
                        <strong>{m.scores.overall}</strong>
                        <span>Overall</span>
                      </div>
                    </div>
                    <p class="v2-access">
                      {!m.meta.noFreeId ? (
                        <span
                          class="v2-free"
                          title={m.meta.freeTierNote ?? m.meta.pricingNote}
                        >
                          Free tier
                        </span>
                      ) : (
                        <span
                          class="v2-paid"
                          title="Cost is scored on paid pricing — no free tier ID"
                        >
                          Paid · no free tier
                        </span>
                      )}
                    </p>
                    <p class="v2-card-short">{m.short}</p>
                    <dl class="v2-specs">
                      <div>
                        <dt>Context</dt>
                        <dd>{m.meta.contextWindow}</dd>
                      </div>
                      <div>
                        <dt>Modalities</dt>
                        <dd>{m.meta.modalities}</dd>
                      </div>
                      <div>
                        <dt>Pricing</dt>
                        <dd>{m.meta.pricingNote}</dd>
                      </div>
                      <div title="Newest report date across this model's findings files">
                        <dt>Verified</dt>
                        <dd>
                          {m.verified ?? "—"} · {reportCount(m)} reports
                        </dd>
                      </div>
                    </dl>
                    <p class="v2-dims">
                      Tool {m.scores.tool} · Reason {m.scores.reasoning} · Context{" "}
                      {m.scores.context} · Code {m.scores.coding} · Multi {m.scores.multimodal} ·
                      Cost {m.scores.cost}
                    </p>
                    <p class="v2-profile">
                      <a href={`/v2/${m.slug}/`}>Open full profile →</a>
                    </p>
                  </article>
                ))}
              </div>
              {displayCount.value < filtered.length && (
                <div class="v2-more-row">
                  <button
                    type="button"
                    class="v2-btn"
                    onClick$={() => {
                      displayCount.value += PAGE_SIZE;
                    }}
                  >
                    Show more
                  </button>
                  <button
                    type="button"
                    class="v2-btn-ghost"
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
              <div class="v2-pills" role="group" aria-label="Sort all models">
                {orderedScoreCols.map((key) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={sortKey.value === key}
                    class={`d6-view-btn${sortKey.value === key ? " d6-view-active" : ""}`}
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
                          title={
                            key === "cost"
                              ? "Cost efficiency — hover any value for Pricing / 1M"
                              : key === "context"
                                ? "Context window — hover any value for the window size"
                                : undefined
                          }
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
                    <th scope="col" title="Newest report date across each model's findings files">
                      Verified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.slice(0, displayCount.value).map((m) => (
                    <tr key={m.id}>
                      <th scope="row">
                        <VendorIcon id={m.id} name={m.name} />{" "}
                        <a href={`/v2/${m.slug}/`} style={{ color: "inherit" }}>
                          {m.name}
                        </a>
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
                            class={`${key === "overall" ? "d6-rating-overall" : ""}${hlClass(key, value)}`}
                          >
                            {value}
                          </td>
                        );
                      })}
                      <td title="Newest report date across this model's findings files">
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
              <div class="v2-more-row">
                <button
                  type="button"
                  class="v2-btn"
                  onClick$={() => {
                    displayCount.value += PAGE_SIZE;
                  }}
                >
                  Show more
                </button>
                <button
                  type="button"
                  class="v2-btn-ghost"
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

        {/* Decision shelf stays hidden until the mix grows (3+ decision models);
            a single non-comparable entry adds noise, not signal. */}
        {decisionFiltered.length >= 3 && (
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
            <div class="v2-cards-grid">
              {decisionFiltered.map((m) => (
                <article class="v2-card v2-card-decision" key={m.id}>
                  <div class="v2-card-head">
                    <h3 class="v2-card-name">
                      <VendorIcon id={m.id} name={m.name} />{" "}
                      <a href={`/v2/${m.slug}/`}>{m.name}</a>
                    </h3>
                    <span class="d6-count">Decision</span>
                  </div>
                  <p class="v2-card-short">{m.short}</p>
                  <dl class="v2-specs">
                    <div>
                      <dt>State budget</dt>
                      <dd>{m.meta.contextWindow}</dd>
                    </div>
                    <div>
                      <dt>I/O</dt>
                      <dd>{m.meta.modalities}</dd>
                    </div>
                    <div>
                      <dt>Pricing</dt>
                      <dd>{m.meta.pricingNote}</dd>
                    </div>
                  </dl>
                  <p class="v2-profile">
                    <a href={`/v2/${m.slug}/`}>Open full profile →</a>
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
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap",
    },
  ],
};
