import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS, isDecisionModel } from "../../data/models";
import type { AiModel } from "../../data/models";
import { V2Header } from "../../components/v2/V2Header";
import { V2Footer } from "../../components/v2/V2Footer";
import { VendorIcon } from "../../components/VendorIcon";
import { usePageTheme } from "../../components/v2/theme";

/**
 * /best-free-llm-for-coding/ — intent ranking page.
 *
 * Targets the "best free LLM for coding" query. Filters the roster to models
 * with a verified free tier (`hasFreeTier`), ranked by Overall score (desc),
 * then surfaces each model's free-tier allowance, a claimant citation link and
 * its verified Coding score. Fully static HTML so AI search engines can quote
 * the allowance details directly.
 */

const ranked: AiModel[] = [...MODELS]
  .filter((m) => !isDecisionModel(m) && m.hasFreeTier)
  .sort(
    (a, b) => b.scores.overall - a.scores.overall || a.slug.localeCompare(b.slug),
  );

// A free-tier allowance line: prefer the curated note, fall back to pricing text.
const allowanceOf = (m: AiModel): string =>
  m.meta.freeTierNote?.trim() || m.meta.pricingNote?.trim() || "Free tier available";

// First verifiable claimant URL (pricing link or official site), if any.
const claimantOf = (m: AiModel): string | null => {
  const link = m.meta.pricingLinks?.find((l): l is string => typeof l === "string" && l.length > 0);
  return link ?? m.meta.officialUrl ?? null;
};

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
            name: "Best free LLMs for coding",
            itemListOrder: "https://schema.org/ItemListOrderDescending",
            numberOfItems: ranked.length,
            itemListElement: ranked.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: m.name,
              url: `https://modelcomp.com/model/${m.slug}/`,
            })),
          }).replace(/</g, "\\u003c")}
        />

        <section class="mx-[-40px] bg-[#173c53] px-10 py-[clamp(48px,6vw,80px)] text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]">
          <p class="text-sm text-[#a8c2d0]">Rankings <span aria-hidden="true">/</span> free for coding</p>
          <h1 class="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-medium leading-[0.98] tracking-tighter">
            Best free LLMs for coding
          </h1>
          <p class="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-[#c6d9e3]">
            {ranked.length} models that offer a genuine free tier, ranked by Overall
            score {asOf ? `and current as of ${asOf}` : ""}. Each row lists the free
            allowance, its source and the model's verified Coding score — no paid plan
            required to start.
          </p>
        </section>

        <section class="py-[56px]">
          <ol class="flex flex-col">
            {ranked.map((m, i) => {
              const claimant = claimantOf(m);
              return (
                <li
                  key={m.id}
                  class="grid gap-4 border-b border-b-[#ccdae2] py-6 first:pt-0 last:border-b-0 min-[820px]:grid-cols-[auto_minmax(0,1.4fr)_minmax(0,1fr)_auto] min-[820px]:items-center dark:border-b-[#274757]"
                >
                  <span class="font-[family-name:var(--font-display)] text-2xl font-medium tabular-nums text-[#577184] dark:text-[#93adbe]">
                    {i + 1}
                  </span>

                  <div class="min-w-0">
                    <a
                      href={`/model/${m.slug}/`}
                      class="flex items-center gap-3 transition-colors hover:text-[#275bad] dark:hover:text-[#9dbdf5]"
                    >
                      <VendorIcon id={m.id} name={m.name} />
                      <span class="text-base font-semibold">{m.name}</span>
                    </a>
                    <p class="mt-2 text-xs text-[#577184] dark:text-[#93adbe]">
                      Overall {m.scores.overall}/100 · Reasoning {m.scores.reasoning} ·
                      Context {m.scores.context}
                    </p>
                  </div>

                  <div class="min-w-0">
                    <p class="text-sm leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
                      {allowanceOf(m)}
                    </p>
                    {claimant ? (
                      <a
                        href={claimant}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        class="mt-1 inline-block text-xs text-[#275bad] underline dark:text-[#9dbdf5]"
                      >
                        Source ↗
                      </a>
                    ) : (
                      <span class="mt-1 inline-block text-xs text-[#577184] dark:text-[#93adbe]">
                        Allowance from vendor documentation
                      </span>
                    )}
                  </div>

                  <span class="shrink-0 min-[820px]:text-right">
                    <span class="block font-[family-name:var(--font-display)] text-2xl font-semibold tabular-nums text-[#275bad] dark:text-[#9dbdf5]">
                      {m.scores.coding}
                    </span>
                    <span class="block text-[10px] uppercase tracking-wide text-[#577184] dark:text-[#93adbe]">
                      coding
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>

          {ranked.length === 0 && (
            <p class="text-sm text-[#577184] dark:text-[#93adbe]">
              No free-tier models are currently verified in the dataset.
            </p>
          )}
        </section>

        <section class="border-t border-t-[#ccdae2] py-[56px] dark:border-t-[#274757]">
          <h2 class="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,36px)] font-medium tracking-tight">
            No sponsored placement
          </h2>
          <p class="mt-4 max-w-[75ch] text-sm leading-relaxed text-[#49677a] dark:text-[#a9c2d2]">
            Free-tier rankings are editorial only. ModelComp never accepts payment to
            raise a model's position; any future promotional path is isolated under{" "}
            <code class="rounded bg-[#f7fafb] px-1 py-0.5 text-[13px] dark:bg-[#132a3b]">/promotions/</code>{" "}
            with <code class="rounded bg-[#f7fafb] px-1 py-0.5 text-[13px] dark:bg-[#132a3b]">rel="nofollow sponsored"</code>. See how consensus is reached in the{" "}
            <a href="/methodology/" class="text-[#275bad] underline dark:text-[#9dbdf5]">methodology</a>.
          </p>
        </section>

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Best Free LLMs for Coding (2026) | ModelComp",
  meta: [
    {
      name: "description",
      content:
        "The best free LLMs for coding, ranked by Overall score. Each model's free-tier allowance, source citation and verified Coding benchmark score, from independent multi-agent research. No sponsored placement.",
    },
  ],
};
