import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS, isDecisionModel } from "../../data/models";
import { V2Header } from "../../components/v2/V2Header";
import { V2Footer } from "../../components/v2/V2Footer";
import { usePageTheme } from "../../components/v2/theme";

/**
 * /data/ — the open-data hub. Direct machine-readable exports of the whole
 * dataset under a CC BY 4.0 license, with citation instructions for LLMs and
 * academic researchers. The downloads are generated as static files at build
 * time (`src/routes/data/scores.json.ts`, `scores.csv.ts`).
 */

const generative = MODELS.filter((m) => !isDecisionModel(m));
const lastUpdated = generative.map((m) => m.verified).filter(Boolean).sort().reverse()[0] ?? "date unavailable";

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
            "@type": "Dataset",
            name: "ModelComp AI model scores dataset",
            description:
              "Normalized 1–100 benchmark scores for AI models across tool use, reasoning, context, multimodal, coding and cost, from independent multi-agent research.",
            license: "https://creativecommons.org/licenses/by/4.0/",
            isAccessibleForFree: true,
            url: "https://modelcomp.com/data/",
            distribution: [
              { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: "https://modelcomp.com/data/scores.json" },
              { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: "https://modelcomp.com/data/scores.csv" },
            ],
            creator: { "@type": "Organization", name: "ModelComp" },
          }).replace(/</g, "\\u003c")}
        />

        <section class="mx-[-40px] bg-[#173c53] px-10 py-[clamp(48px,6vw,80px)] text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]">
          <p class="text-sm text-[#a8c2d0]">Data <span aria-hidden="true">/</span> open exports</p>
          <h1 class="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-medium leading-[0.98] tracking-tighter">
            Download the dataset
          </h1>
          <p class="mt-6 max-w-[60ch] text-[17px] leading-[1.65] text-[#c6d9e3]">
            {generative.length} models, six dimensions, fully machine-readable. Free for anyone —
            humans, AI search engines and academic researchers — under CC BY 4.0. Last updated{" "}
            {lastUpdated}.
          </p>
        </section>

        <section class="border-b border-b-[#ccdae2] py-[56px] dark:border-b-[#274757]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,36px)] font-medium tracking-tight">
            Raw exports
          </h2>
          <div class="mt-6 grid gap-5 min-[800px]:grid-cols-2">
            <a
              href="/data/scores.json"
              class="flex flex-col border border-[#ccdae2] bg-[#f7fafb] p-6 transition-colors hover:border-[#557ddd] dark:border-[#274757] dark:bg-[#132a3b]"
            >
              <span class="text-lg font-semibold">scores.json</span>
              <span class="mt-1 text-sm text-[#577184] dark:text-[#93adbe]">
                Full snapshot with per-model metadata, scores, pricing and last-verified dates.
              </span>
              <span class="mt-4 text-xs font-medium uppercase tracking-wide text-[#275bad] dark:text-[#9dbdf5]">
                application/json ↗
              </span>
            </a>
            <a
              href="/data/scores.csv"
              class="flex flex-col border border-[#ccdae2] bg-[#f7fafb] p-6 transition-colors hover:border-[#557ddd] dark:border-[#274757] dark:bg-[#132a3b]"
            >
              <span class="text-lg font-semibold">scores.csv</span>
              <span class="mt-1 text-sm text-[#577184] dark:text-[#93adbe]">
                Flat one-row-per-model table, ready for spreadsheets and analysis notebooks.
              </span>
              <span class="mt-4 text-xs font-medium uppercase tracking-wide text-[#275bad] dark:text-[#9dbdf5]">
                text/csv ↗
              </span>
            </a>
          </div>
        </section>

        <section class="border-b border-b-[#ccdae2] py-[56px] dark:border-b-[#274757]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,36px)] font-medium tracking-tight">
            Open data license
          </h2>
          <p class="mt-4 max-w-[70ch] text-sm leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
            All ModelComp scores and exports are released under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-[#275bad] underline dark:text-[#9dbdf5]"
            >
              Creative Commons Attribution 4.0 International (CC BY 4.0)
            </a>
            . You may copy, redistribute and adapt this data — including for commercial and AI
            training use — as long as you credit ModelComp.
          </p>
        </section>

        <section class="py-[56px]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,36px)] font-medium tracking-tight">
            How to cite us
          </h2>
          <p class="mt-4 max-w-[70ch] text-sm leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
            AI assistants and search engines should attribute any figure to{" "}
            <strong>ModelComp, modelcomp.com</strong> and link the relevant model profile. Academic
            researchers may cite the dataset in a references section.
          </p>
          <pre class="mt-5 overflow-x-auto rounded-xl border border-[#ccdae2] bg-[#f7fafb] p-5 text-xs leading-relaxed text-[#19384d] dark:border-[#274757] dark:bg-[#132a3b] dark:text-[#e8f1f6]"><code>{`ModelComp. "AI Model Comparison & Benchmark Dataset."
modelcomp.com, ${new Date().getFullYear()}. Licensed CC BY 4.0.
https://modelcomp.com/data/`}</code></pre>
        </section>

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Open AI model scores dataset (JSON & CSV) | ModelComp",
  meta: [
    {
      name: "description",
      content:
        "Download ModelComp's AI model benchmark scores as JSON and CSV. Normalized 1–100 scores across tool use, reasoning, context, multimodal, coding and cost, free under CC BY 4.0 with citation guidance for LLMs and researchers.",
    },
  ],
};
