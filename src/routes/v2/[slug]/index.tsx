import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  useLocation,
  type DocumentHead,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { MODELS, SOURCES } from "../../../data/models";
import type { DimensionKey, ModelScores, SourceKey } from "../../../data/models";
import "../../design-6sol/study.css";

/**
 * /v2/[slug]/ — v2 model profile pages in the design-6sol language.
 * Same port as the design-6sol study, but dynamic: every tracked model.
 * Homepage (/) and v1 /model/[slug]/ pages are untouched.
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

// Same content as the project footer — restyled below in study clothes.
const D6_SPONSOR_URL = "https://github.com/sponsors/delirium-dj";
const D6_TIERS = [
  { label: "$5 Coffee", detail: "one-time thanks", primary: true },
  { label: "$19/mo Supporter", detail: "name in README", primary: false },
  { label: "$99/mo Research backer", detail: "logo in footer", primary: false },
];
const D6_BACKERS = [
  {
    name: "ExtraWebSite",
    href: "https://extraweb.site",
    imgSrc: "/backers/extrawebsite.png",
    alt: "ExtraWebSite — website design & development",
  },
];
const D6_EXTRA_LINKS = ["Ko-fi", "Patreon", "Buy Me a Coffee", "PayPal", "Stripe"];

const hexKeys: DimensionKey[] = ["tool", "reasoning", "context", "cost", "coding", "multimodal"];
const HEX_CX = 200;
const HEX_CY = 172;
const HEX_MAX_R = 108;
const HEX_LABEL_R = 148;
// Same non-linear radial emphasis as the project HexRadar: 0–75 occupies
// the inner half of each axis, 75–100 the outer half, smooth steepening slope.
// r = (v/100)^GAMMA, GAMMA chosen so (75/100)^GAMMA = 0.5 → GAMMA ≈ 2.41.
const HEX_GAMMA = Math.LN2 / Math.log(100 / 75);
// Bar-length twin of the hexagon radius: 75 → 50% width, 100 → full width.
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
  const model = MODELS.find((entry) => entry.slug === slug);
  const sortKey = useSignal<DimensionKey | "overall" | "agent">("overall");
  const sortDirection = useSignal<1 | -1>(-1);
  const theme = useSignal<"light" | "dark">("light");
  const profileView = useSignal<"bars" | "hex">("hex");
  const scrollerRef = useSignal<HTMLDivElement>();
  // Phone-only: the active sort dimension jumps next to Overall so it stays
  // in view after the scroll-reset. Tablets and desktops keep canonical order.
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
  // Theme follows the OS setting until the user picks explicitly (persisted
  // as `v2-theme`, shared with the v2 homepage); while unpicked, live system
  // changes are followed too.
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

  if (!model) {
    return (
      <main class="d6 d6-missing">
        <p>Unknown model “{slug}”.</p>
        <p>
          <a href="/v2/">← Back to all v2 models</a>
        </p>
      </main>
    );
  }

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
    // Secondary key is always Overall (same direction), then agent name.
    if (key !== "overall") {
      const secondary = sortDirection.value * (Math.round(a.scores.overall) - Math.round(b.scores.overall));
      if (secondary !== 0) return secondary;
    }
    return a.name.localeCompare(b.name);
  });
  // Overall stays pinned as the first score column. On phones only, the
  // active sort dimension (if any) jumps to second place so it stays in view
  // after the scroll-reset; elsewhere the rest keep canonical order.
  const activeDim =
    sortKey.value !== "overall" && sortKey.value !== "agent" ? (sortKey.value as DimensionKey) : null;
  const orderedScoreCols: ("overall" | DimensionKey)[] =
    activeDim && isNarrow.value
      ? ["overall", activeDim, ...tableKeys.filter((k) => k !== activeDim)]
      : ["overall", ...tableKeys];
  // Best/worst highlight per column, mirroring the project model page:
  // green = highest grade, red = lowest; ties share it; a unanimous
  // column counts as best only. Computed on rounded grades (as displayed).
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
    if (value === st.best) return " d6-best";
    if (value === st.worst) return " d6-worst";
    return "";
  };
  const hlTitle = (col: string, value: number, label: string): string | undefined => {
    const st = hlStats.get(col);
    if (!st || st.best === null || st.worst === null) return undefined;
    if (value === st.best) return `Highest ${label} grade for this model`;
    if (value === st.worst) return `Lowest ${label} grade for this model`;
    return undefined;
  };
  const evidence = model.evidence;
  const highest = qualityKeys.reduce((best, key) => model.scores[key] > model.scores[best] ? key : best);
  const formattedDate = model.verified
    ? new Date(`${model.verified}T12:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    : "Date unavailable";
  const sourceName = (stem: string) => SOURCES.find((source) => source.file === `${stem}.md`)?.label ?? stem.replace(/_/g, " ");
  const nameWords = model.name.split(" ");
  const titleHead = nameWords[0];
  const titleRest = nameWords.slice(1).join(" ");

  return (
    <main class={`d6 d6-${theme.value}`} data-theme={theme.value} id="top">
      <div class="d6-shell">
        <header class="d6-header">
          <div class="d6-brand">
            <svg viewBox="0 0 300 300" class="d6-brand-logo" role="presentation" aria-hidden="true">
              <defs>
                <linearGradient id="d6-logo-hex" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#6366f1" />
                  <stop offset="100%" stop-color="#10b981" />
                </linearGradient>
                <radialGradient id="d6-logo-core" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stop-color="#c7d2fe" />
                  <stop offset="100%" stop-color="#4f46e5" />
                </radialGradient>
              </defs>
              <polygon
                points="150,28 254,88 254,208 150,268 46,208 46,88"
                fill="none"
                stroke="url(#d6-logo-hex)"
                stroke-width="15"
                stroke-linejoin="round"
              />
              <circle cx="150" cy="148" r="45" fill="url(#d6-logo-core)" />
            </svg>
            <span>ModelComp <span class="d6-brand-slash">/</span> Profiles</span>
          </div>
          <div class="d6-header-right">
            <a href="/v2/" class="d6-header-date">← All v2 models</a>
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

        <section class="d6-hero" aria-labelledby="d6-title">
          <div class="d6-hero-copy">
            <p class="d6-family">{ratings.length} independent reports <span aria-hidden="true">/</span> v2 profile</p>
            <h1 id="d6-title">{titleHead}<br /><span>{titleRest}</span></h1>
            <p class="d6-description">{model.short}</p>
            <div class="d6-overall">
              <span class="d6-overall-number">{model.scores.overall}</span>
              <span class="d6-overall-caption">Overall score<br /><strong>out of 100</strong></span>
            </div>
          </div>
          <div class="d6-instrument" aria-label="Average scores by dimension">
            <div class="d6-instrument-top">
              <span>Performance profile</span>
              <div class="d6-view-switch" role="group" aria-label="Performance profile display">
                <button
                  type="button"
                  class={`d6-view-btn${profileView.value === "bars" ? " d6-view-active" : ""}`}
                  aria-pressed={profileView.value === "bars"}
                  onClick$={() => { profileView.value = "bars"; }}
                >
                  Bars
                </button>
                <button
                  type="button"
                  class={`d6-view-btn${profileView.value === "hex" ? " d6-view-active" : ""}`}
                  aria-pressed={profileView.value === "hex"}
                  onClick$={() => { profileView.value = "hex"; }}
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
                      <div class="d6-track" role="img" aria-label={`${names[key]}: ${model.scores[key]} out of 100`}>
                        <span class="d6-fill" style={{ width: barWidth(model.scores[key]) }} />
                      </div>
                      <strong class="d6-measure-value">{model.scores[key]}</strong>
                    </div>
                  ))}
                </div>
                <div class="d6-measure d6-cost">
                  <span class="d6-measure-name">Cost efficiency</span>
                  <div class="d6-track" role="img" aria-label={`Cost efficiency: ${model.scores.cost} out of 100`}>
                    <span class="d6-fill" style={{ width: barWidth(model.scores.cost) }} />
                  </div>
                  <strong class="d6-measure-value">{model.scores.cost}</strong>
                </div>
                <p class="d6-instrument-note">Bars use the same top-end emphasis as the hexagon (75 sits at half width). Overall averages the five quality dimensions. Cost is shown separately.</p>
              </>
            ) : (
              <>
                <svg viewBox="0 0 400 344" role="img" class="d6-hex" aria-label={`Hexagon chart of average scores: ${hexKeys.map((k) => `${names[k]} ${model.scores[k]}`).join(", ")}`}>
                  {[25, 50, 75, 100].map((ring) => (
                    <polygon key={ring} points={hexPolygon(ring)} fill="none" class="d6-hex-ring" stroke-width={ring === 100 ? 1.5 : 1} />
                  ))}
                  {hexKeys.map((key, i) => {
                    const end = hexPoint(100, i);
                    return <line key={key} x1={HEX_CX} y1={HEX_CY} x2={end.x} y2={end.y} class="d6-hex-axis" stroke-width="1" />;
                  })}
                  <polygon
                    points={hexKeys.map((key, i) => {
                      const p = hexPoint(model.scores[key], i);
                      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                    }).join(" ")}
                    class="d6-hex-shape"
                    stroke-linejoin="round"
                  >
                    <title>{`Overall ${model.scores.overall}`}</title>
                  </polygon>
                  {hexKeys.map((key, i) => {
                    const p = hexPoint(model.scores[key], i);
                    return (
                      <circle key={key} cx={p.x} cy={p.y} r={5} class="d6-hex-dot">
                        <title>{`${names[key]}: ${model.scores[key]}`}</title>
                      </circle>
                    );
                  })}
                  {hexKeys.map((key, i) => {
                    const p = hexPoint(100, i, HEX_LABEL_R);
                    return (
                      <text key={key} x={p.x} y={p.y} text-anchor="middle" dominant-baseline="middle" class="d6-hex-label">
                        {names[key]} · {model.scores[key]}
                      </text>
                    );
                  })}
                </svg>
                <p class="d6-instrument-note">Six axes, 0–100, with emphasis on the top end (the outer half of each axis covers 75–100, as on the project pages). Cost is plotted but never counts toward Overall.</p>
              </>
            )}
          </div>
        </section>

        <section class="d6-facts" aria-label="Model specifications">
          <div><span>Context window</span><strong>{model.meta.contextWindow}</strong></div>
          <div><span>Modalities</span><strong>{model.meta.modalities}</strong></div>
          <div><span>Access & pricing</span><strong>{model.meta.pricingTiers?.join("; ") ?? model.meta.pricingNote}</strong></div>
        </section>

        <section class="d6-reading" aria-labelledby="d6-reading-title">
          <div class="d6-section-intro">
            <h2 id="d6-reading-title">Reading the profile</h2>
            <p>A quick interpretation of the averaged scores, before the underlying reports.</p>
          </div>
          <div class="d6-reading-grid">
            <article class="d6-reading-item">
              <span class="d6-reading-marker d6-reading-marker-blue" aria-hidden="true" />
              <div><h3>Where it stands out</h3><p>{names[highest]} is its highest-rated dimension at <strong>{model.scores[highest]}/100</strong>. Coding, reasoning and tool use also score above 90, making this a strong profile for demanding multi-step work.</p></div>
            </article>
            <article class="d6-reading-item">
              <span class="d6-reading-marker d6-reading-marker-orange" aria-hidden="true" />
              <div><h3>The trade-off</h3><p>Cost efficiency scores <strong>{model.scores.cost}/100</strong>. This is a separate measure: it does not lower the {model.scores.overall} overall quality score. Check the pricing before choosing it for high-volume work.</p></div>
            </article>
          </div>
        </section>

        <section class="d6-section d6-evidence" aria-labelledby="d6-evidence-title">
          <div class="d6-section-intro d6-section-intro-row">
            <div><h2 id="d6-evidence-title">Benchmarks with agreement</h2><p>Figures repeated in at least two independent reports. Test setups can vary.</p></div>
            <span class="d6-count">{evidence.length} figures</span>
          </div>
          {evidence.length ? (
            <>
              <div class="d6-evidence-grid">
                {evidence.slice(0, 6).map((item) => (
                  <article class="d6-evidence-item" key={`${item.benchmark}-${item.value}`}>
                    <h3>{item.benchmark}</h3>
                    <strong>{item.value}</strong>
                    <details class="d6-citations">
                      <summary>{item.raters.length} reports cite this figure</summary>
                      <p>{item.raters.map(sourceName).join(", ")}</p>
                    </details>
                  </article>
                ))}
              </div>
              {evidence.length > 6 && (
                <details class="d6-more">
                  <summary>Show {evidence.length - 6} more benchmark figures</summary>
                  <div class="d6-more-grid">
                    {evidence.slice(6).map((item) => (
                      <div key={`${item.benchmark}-${item.value}`}>
                        <span>{item.benchmark}</span><strong>{item.value}</strong>
                        <details><summary>{item.raters.length} reports</summary><p>{item.raters.map(sourceName).join(", ")}</p></details>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </>
          ) : <p>No agreed benchmark figures are available yet.</p>}
        </section>

        <section class="d6-section d6-ratings" aria-labelledby="d6-ratings-title">
          <div class="d6-section-intro d6-section-intro-row">
            <div><h2 id="d6-ratings-title">The individual ratings</h2><p>Every reporting agent's scores for {model.name}. Select a column to sort.</p></div>
            <span class="d6-count">{ratings.length} reports</span>
          </div>
          <div ref={scrollerRef} class="d6-table-scroll" tabIndex={0} aria-label="Scroll to see all rating columns">
            <table class="d6-table">
              <caption class="d6-visually-hidden">Reporting agent ratings for {model.name}, out of 100</caption>
              <thead><tr>
                <th scope="col" aria-sort={sortKey.value === "agent" ? (sortDirection.value === -1 ? "descending" : "ascending") : "none"}>
                  <button type="button" onClick$={() => {
                    if (sortKey.value === "agent") sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                    else { sortKey.value = "agent"; sortDirection.value = 1; }
                    scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                  }}>
                    Reporting agent
                    <span aria-hidden="true" class="d6-sort-icon">{sortKey.value === "agent" ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}</span>
                  </button>
                </th>
                {orderedScoreCols.map((key) => (
                  <th scope="col" key={key} aria-sort={sortKey.value === key ? (sortDirection.value === -1 ? "descending" : "ascending") : "none"}>
                    <button type="button" onClick$={() => {
                      if (sortKey.value === key) sortDirection.value = sortDirection.value === -1 ? 1 : -1;
                      else { sortKey.value = key; sortDirection.value = -1; }
                      scrollerRef.value?.scrollTo({ left: 0, behavior: "smooth" });
                    }}>
                      {key === "overall" ? "Overall" : colNames[key]}
                      <span aria-hidden="true" class="d6-sort-icon">{sortKey.value === key ? (sortDirection.value === -1 ? "↓" : "↑") : "↕"}</span>
                      {key === "overall" && (
                        <span class="d6-overall-tip" role="tooltip">
                          Overall is the average of tool use, reasoning, context, coding and
                          multimodal scores in each report. Cost efficiency is excluded.
                        </span>
                      )}
                    </button>
                  </th>
                ))}
              </tr></thead>
              <tbody>{sortedRatings.map((rating) => (
                <tr key={rating.key}>
                  <th scope="row">{rating.name}</th>
                  {orderedScoreCols.map((key) => {
                    const value = key === "overall" ? Math.round(rating.scores.overall) : Math.round(rating.scores[key]);
                    const label = key === "overall" ? "overall" : (names[key] ?? key);
                    return (
                      <td
                        key={key}
                        title={hlTitle(key, value, label)}
                        class={`${key === "overall" ? "d6-rating-overall" : ""}${hlClass(key, value)}`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}</tbody>
            </table>
          </div>
          <p class="d6-table-note">Last verified {formattedDate} from {ratings.length} agent reports.</p>
        </section>

        <footer class="d6-footer">
          <div class="d6-support">
            <div class="d6-support-copy">
              <p class="d6-family">ModelComp <span aria-hidden="true">/</span> funding</p>
              <h2>Independent research, funded by readers</h2>
              <p><strong>100% independent — no paid promotions, no vendor funding influences scores.</strong></p>
              <p>
                Every findings file is researched independently from public benchmarks. Donations keep it that
                way — they fund compute and research time, never rankings.
              </p>
            </div>
            <div class="d6-support-panel">
              <div class="d6-tiers">
                {D6_TIERS.map((tier) => (
                  <a
                    key={tier.label}
                    href={D6_SPONSOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={`d6-tier${tier.primary ? " d6-tier-primary" : ""}`}
                  >
                    <span class="d6-tier-label"><span aria-hidden="true">♥</span> {tier.label}</span>
                    <span class="d6-tier-detail">{tier.detail}</span>
                  </a>
                ))}
              </div>
              <p class="d6-also">Also via:</p>
              <div class="d6-tiers d6-tiers-soon">
                {D6_EXTRA_LINKS.map((label) => (
                  <span key={label} title="Coming soon — link not configured yet" class="d6-soon">
                    {label} · soon
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div class="d6-backer-row">
            <span>Research backer</span>
            {D6_BACKERS.map((backer) => (
              <a
                key={backer.name}
                href={backer.href}
                target="_blank"
                rel="sponsored noopener noreferrer"
                title={`${backer.name} — Research backer (logo placement thanks, never influences scores)`}
                class="d6-backer"
              >
                <img src={backer.imgSrc} alt={backer.alt} width={32} height={32} loading="lazy" />
                {backer.name}
              </a>
            ))}
          </div>
          <div class="d6-fine">
            <p>Data syncs from per-model research files on every build. Scores are normalized interpretations, not official vendor scores.</p>
            <p>Independent AI model comparisons, no sponsored rankings.</p>
          </div>
          <div class="d6-bottom">
            <span>© 2026 ModelComp / v2 experiment</span>
            <span><a href="/v2/">All v2 models</a> · <a href="/contact/">Contact</a></span>
          </div>
        </footer>
      </div>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const m = MODELS.find((x) => x.slug === params.slug);
  const name = m?.name ?? params.slug;
  return {
    title: `${name} — v2 profile | ModelComp`,
    meta: [
      {
        name: "description",
        content: `v2 redesign experiment: ${name} scored ${m?.scores.overall ?? "—"} overall across tool use, reasoning, context, multimodal, coding and cost.`,
      },
      { name: "robots", content: "noindex" },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" },
    ],
  };
};
