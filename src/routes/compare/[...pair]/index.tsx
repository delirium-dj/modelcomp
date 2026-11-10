import { $, component$, useSignal } from "@builder.io/qwik";
import {
  useLocation,
  type DocumentHead,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import {
  MODELS,
  SOURCES,
  isDecisionModel,
  virtualDimFor,
} from "../../../data/models";
import type { AiModel, DimensionKey, ResultsView } from "../../../data/models";
import { V2Header } from "../../../components/v2/V2Header";
import { V2Footer } from "../../../components/v2/V2Footer";
import { CompareSection } from "../../../components/v2/CompareSection";
import { usePageTheme } from "../../../components/v2/theme";

/**
 * /compare/[...pair]/ — the head-to-head comparison engine.
 *
 * Two surfaces share one route:
 *   • `/compare/`                       — interactive picker (no pair param).
 *   • `/compare/<a>-vs-<b>/`            — a canonical 2-model page; the Top-20
 *                                          overall models are cross-producted in
 *                                          `onStaticGenerate` into exactly
 *                                          C(20,2) = 190 pre-rendered pages.
 *
 * The heavy lifting (radar, table, source picker, live selectors) is 100% the
 * homepage `CompareSection`, so the compare pages stay in lockstep with it. A
 * data-driven verdict is computed above it from subcategory deltas to keep each
 * pair page substantive (anti-thin-content), and it re-derives whenever the
 * selectors change.
 */

/** Generative models ranked by Overall (desc) — the pool the Top-20 is drawn from. */
const rankedGenerative = [...MODELS]
  .filter((m) => !isDecisionModel(m))
  .sort((a, b) => b.scores.overall - a.scores.overall || a.slug.localeCompare(b.slug));

// Canonical pair key for a slug pair (alphabetical, so a-vs-b == b-vs-a).
const pairKey = (a: string, b: string) => [a, b].sort().join("-vs-");

// "As of <Month YYYY>" stamp for verdict copy — derived from the freshest
// last-verified date in the dataset so the claim is dated and honest.
function asOfDate(): string {
  const dates = MODELS.map((m) => m.verified)
    .filter((d): d is string => typeof d === "string")
    .sort();
  const latest = dates[dates.length - 1];
  if (!latest) return "today";
  const dt = new Date(`${latest}T12:00:00Z`);
  return dt.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}

/**
 * Automated, data-driven verdict for a model pair (anti-thin-content engine).
 * Compares the subcategory deltas across coding, reasoning and context (noise
 * floor ±1.0) and the cost-efficiency scores, then emits a factual, dated
 * 2–3 sentence summary. Returns null for an empty/incomplete selection.
 */
export function generateVerdict(a: AiModel | undefined, b: AiModel | undefined): string | null {
  if (!a || !b || a.id === b.id) return null;
  const dims: [DimensionKey, string][] = [
    ["coding", "Coding"],
    ["reasoning", "Reasoning"],
    ["context", "Context"],
  ];
  const deltas = dims
    .map(([key, label]) => ({ label, delta: a.scores[key] - b.scores[key] }))
    .sort((x, y) => Math.abs(y.delta) - Math.abs(x.delta));
  const notable = deltas.filter((d) => Math.abs(d.delta) > 1);
  const costGap = a.scores.cost - b.scores.cost;
  const asOf = asOfDate();

  const clauses: string[] = [];
  if (notable.length === 0) {
    clauses.push(`${a.name} and ${b.name} are comparable on coding, reasoning and context`);
  } else {
    for (const d of notable.slice(0, 2)) {
      const lead = d.delta > 0 ? a : b;
      const trail = d.delta > 0 ? b : a;
      clauses.push(
        `${lead.name} leads ${trail.name} in ${d.label.toLowerCase()} by +${Math.abs(d.delta).toFixed(1)} points`,
      );
    }
  }
  let sentence = `As of ${asOf}, ${clauses.join(", while ")}.`;
  if (Math.abs(costGap) > 1) {
    const cheaper = costGap > 0 ? a : b;
    const pricier = costGap > 0 ? b : a;
    sentence += ` ${cheaper.name} is the more cost-efficient option of the two (cost efficiency ${cheaper.scores.cost} vs ${pricier.scores.cost}/100).`;
  } else {
    sentence += " The two are within a point of each other on cost efficiency.";
  }
  sentence += ` Overall, ${
    a.scores.overall === b.scores.overall
      ? `${a.name} and ${b.name} tie at ${a.scores.overall}/100`
      : `${a.scores.overall > b.scores.overall ? a.name : b.name} ranks higher overall (${Math.max(a.scores.overall, b.scores.overall)} vs ${Math.min(a.scores.overall, b.scores.overall)})`
  }.`;
  return sentence;
}

export const onStaticGenerate: StaticGenerateHandler = () => {
  const top20 = rankedGenerative.slice(0, 20);
  const params: { pair: string }[] = [{ pair: "" }]; // /compare/ interactive base
  for (let i = 0; i < top20.length; i++) {
    for (let j = i + 1; j < top20.length; j++) {
      // Alphabetical canonical order → no reversed duplicates. 20 * 19 / 2 = 190.
      params.push({ pair: pairKey(top20[i].slug, top20[j].slug) });
    }
  }
  return { params };
};

export default component$(() => {
  const theme = usePageTheme();
  const loc = useLocation();
  const rawPair = (loc.params.pair ?? "").toString();
  const [slugA, slugB] = rawPair.split("-vs-");

  const modelById = (id: string) => rankedGenerative.find((m) => m.id === id);
  const slugToId = (slug?: string) =>
    MODELS.find((m) => m.slug === slug && !isDecisionModel(m))?.id ?? "";

  const cmpOptions = rankedGenerative
    .map((m) => ({ id: m.id, name: m.name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const source = useSignal<ResultsView>("average");
  const cmpA = useSignal(slugToId(slugA));
  const cmpB = useSignal(slugToId(slugB));
  const cmpC = useSignal("");

  const chosen = [cmpA.value, cmpB.value, cmpC.value]
    .map((id) => modelById(id))
    .filter((m): m is AiModel => m !== undefined);

  // CompareSection mirrors the homepage state contract (source ranking + slots).
  const activeSourceLabel = SOURCES.find((s) => s.key === source.value)?.label ?? source.value;
  const activeSourceFile = SOURCES.find((s) => s.key === source.value)?.file ?? "";
  const contributors = SOURCES.filter(
    (s) => s.key !== "average" && virtualDimFor(s.key) === undefined,
  );

  const handleSourceChange$ = $((v: string) => {
    const next = v as ResultsView;
    source.value = SOURCES.some((s) => s.key === next) ? next : "average";
  });

  const verdict = generateVerdict(
    cmpA.value ? modelById(cmpA.value) : undefined,
    cmpB.value ? modelById(cmpB.value) : undefined,
  );

  const canonicalPair =
    cmpA.value && cmpB.value
      ? pairKey(
          MODELS.find((m) => m.id === cmpA.value)?.slug ?? "",
          MODELS.find((m) => m.id === cmpB.value)?.slug ?? "",
        )
      : "";

  return (
    <main
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
      id="top"
    >
      <V2Header theme={theme} navBase="/" />
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
        <section class="border-b border-b-[#ccdae2] py-[56px] dark:border-b-[#274757]">
          <p class="text-sm text-[#577184] dark:text-[#93adbe]">Compare <span aria-hidden="true">/</span> head-to-head</p>
          <h1 class="mt-3 font-[family-name:var(--font-display)] text-[clamp(30px,4.5vw,60px)] font-medium leading-[1.02] tracking-tighter">
            {chosen.length >= 2
              ? `${chosen[0].name} vs ${chosen[1].name}`
              : "Compare any two AI models"}
          </h1>
          <p class="mt-4 max-w-[70ch] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
            {chosen.length >= 2
              ? "Exact benchmark-derived scores side by side. Change either model below with the dropdowns."
              : "Pick two models below to see exact scores side by side. Pre-rendered pages exist for every Top-20 pairing."}
          </p>
        </section>

        {verdict && (
          <section class="border-b border-b-[#ccdae2] py-8 dark:border-b-[#274757]" aria-label="Automated verdict">
            <h2 class="text-xs font-semibold uppercase tracking-wide text-[#577184] dark:text-[#93adbe]">
              The verdict
            </h2>
            <p class="mt-3 max-w-[80ch] text-base leading-relaxed text-[color:var(--color-ink)]">
              {verdict}
            </p>
            {canonicalPair && (
              <p class="mt-3 text-xs text-[#577184] dark:text-[#93adbe]">
                Permanent link:{" "}
                <a href={`/compare/${canonicalPair}/`} class="text-[#275bad] hover:underline dark:text-[#9dbdf5]">
                  /compare/{canonicalPair}/
                </a>
              </p>
            )}
          </section>
        )}

        <CompareSection
          source={source}
          cmpA={cmpA}
          cmpB={cmpB}
          cmpC={cmpC}
          cmpOptions={cmpOptions}
          cmpModels={chosen}
          contributors={contributors}
          activeSourceLabel={activeSourceLabel}
          activeSourceFile={activeSourceFile}
          handleSourceChange$={handleSourceChange$}
        />

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const rawPair = (params.pair ?? "").toString();
  const [slugA, slugB] = rawPair.split("-vs-");
  const a = MODELS.find((m) => m.slug === slugA);
  const b = MODELS.find((m) => m.slug === slugB);
  if (a && b) {
    return {
      title: `${a.name} vs ${b.name} — head-to-head comparison | ModelComp`,
      meta: [
        {
          name: "description",
          content: `${a.name} (${a.scores.overall}/100) vs ${b.name} (${b.scores.overall}/100): coding, reasoning, context, multimodal, tool use and cost compared on independent benchmark data.`,
        },
      ],
    };
  }
  return {
    title: "Compare AI models head-to-head | ModelComp",
    meta: [
      {
        name: "description",
        content:
          "Compare any two AI models on coding, reasoning, context, multimodal, tool use and cost — exact, independently researched scores side by side.",
      },
    ],
  };
};
