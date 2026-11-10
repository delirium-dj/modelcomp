import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS, DIMENSIONS, isDecisionModel } from "../../data/models";
import { RATER_GATE } from "../../data/sources.generated";
import { V2Header } from "../../components/v2/V2Header";
import { V2Footer } from "../../components/v2/V2Footer";
import { MethodologySection } from "../../components/v2/MethodologySection";
import { usePageTheme } from "../../components/v2/theme";

/**
 * /methodology/ — the authority hub for how ModelComp scores are produced.
 * A standalone document that promotes the homepage `MethodologySection`
 * (dimension definitions + the three trust cards) and spells out the full
 * consensus, gating and weighting policy the research pipeline follows.
 */

const generativeCount = MODELS.filter((m) => !isDecisionModel(m)).length;

// Subcategory weights behind Overall: the five quality dimensions, Cost
// excluded (Overall is their rounded mean — see parse.mjs / RULES.md).
const QUALITY_WEIGHTS = DIMENSIONS.filter((d) => d.key !== "cost").map((d) => ({
  label: d.label,
  short: d.short,
  description: d.description,
  weight: "20%",
}));

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
            "@type": "Article",
            headline: "ModelComp scoring methodology",
            description:
              "How ModelComp normalizes public benchmarks into 1–100 scores via multi-agent consensus, a rater quality gate, and dimension weighting.",
            author: { "@type": "Organization", name: "ModelComp" },
          }).replace(/</g, "\\u003c")}
        />

        <section class="mx-[-40px] bg-[#173c53] px-10 py-[clamp(56px,7vw,92px)] text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]">
          <p class="text-sm text-[#a8c2d0]">Methodology <span aria-hidden="true">/</span> how scores are made</p>
          <h1 class="mt-4 max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(40px,6vw,84px)] font-medium leading-[0.96] tracking-tighter">
            Independent scoring, built on consensus
          </h1>
          <p class="mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-[#c6d9e3]">
            ModelComp compares {generativeCount} AI models across six dimensions. Every number
            starts from a public benchmark, is interpreted by independent AI research agents, and
            only counts once it clears our quality gates. Here is the exact policy.
          </p>
        </section>

        <MethodologySection />

        <section class="border-b border-b-[#ccdae2] py-[72px] dark:border-b-[#274757]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,44px)] font-medium leading-tight tracking-tighter">
            The consensus pipeline
          </h2>
          <ol class="mt-8 grid gap-6 min-[900px]:grid-cols-2">
            <li class="border border-[#ccdae2] bg-[#f7fafb] p-6 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-lg font-semibold">1 · Multi-agent research</h3>
              <p class="mt-2 leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
                Each model is independently researched by multiple reporting agents working from
                public benchmark sources. No single agent's opinion becomes the score on its own.
              </p>
            </li>
            <li class="border border-[#ccdae2] bg-[#f7fafb] p-6 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-lg font-semibold">2 · Two-rater agreement minimum</h3>
              <p class="mt-2 leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
                A benchmark figure surfaces as <em>verified</em> only when at least two independent
                reports cite the same figure for the same benchmark. Single-rater figures never do.
              </p>
            </li>
            <li class="border border-[#ccdae2] bg-[#f7fafb] p-6 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-lg font-semibold">3 · Rater quality gate ({RATER_GATE}+)</h3>
              <p class="mt-2 leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
                Only reports written by models whose own Overall score exceeds {RATER_GATE} count
                toward another model's average. Weak raters cannot inflate a peer's score.
              </p>
            </li>
            <li class="border border-[#ccdae2] bg-[#f7fafb] p-6 dark:border-[#274757] dark:bg-[#132a3b]">
              <h3 class="text-lg font-semibold">4 · Evidence-free quarantine</h3>
              <p class="mt-2 leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
                Reports with no verified benchmark evidence are quarantined automatically and never
                averaged. Missing data is marked, never invented.
              </p>
            </li>
          </ol>
        </section>

        <section class="border-b border-b-[#ccdae2] py-[72px] dark:border-b-[#274757]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,44px)] font-medium leading-tight tracking-tighter">
            Subcategory weighting
          </h2>
          <p class="mt-3.5 max-w-[60ch] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
            Overall Score is the rounded mean of the five quality dimensions below. Cost efficiency
            is scored and displayed separately and never counts toward Overall, so a cheap model is
            never made to look more capable than it is.
          </p>
          <div class="mt-8 grid grid-cols-2 gap-5 min-[900px]:grid-cols-3">
            {QUALITY_WEIGHTS.map((w) => (
              <article class="border border-[#ccdae2] bg-[#f7fafb] p-5 dark:border-[#274757] dark:bg-[#132a3b]" key={w.label}>
                <div class="flex items-baseline justify-between gap-2">
                  <h3 class="text-sm font-semibold">{w.label}</h3>
                  <span class="text-xs font-semibold text-[#275bad] dark:text-[#9dbdf5]">{w.weight}</span>
                </div>
                <p class="mt-2 text-xs leading-relaxed text-[#577184] dark:text-[#93adbe]">{w.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section class="py-[72px]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,44px)] font-medium leading-tight tracking-tighter">
            Independence policy
          </h2>
          <p class="mt-4 max-w-[70ch] text-sm leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
            ModelComp is editorially independent. No vendor payment, referral relationship or
            sponsorship can change a score, a ranking or a placement. Donations fund research time
            and compute only. Any future commercial or referral path is isolated under
            <a href="/promotions/" class="mx-1 text-[#275bad] underline dark:text-[#9dbdf5]">/promotions/</a>
            with <code class="px-1">rel="nofollow sponsored"</code> so it never touches the comparison
            data presented here.
          </p>
        </section>

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Methodology — how ModelComp scores AI models | ModelComp",
  meta: [
    {
      name: "description",
      content:
        "ModelComp's scoring methodology: multi-agent benchmark research, a two-rater agreement minimum, a rater quality gate, five-dimension Overall weighting with cost separated, and a zero sponsored-ranking independence policy.",
    },
  ],
};
