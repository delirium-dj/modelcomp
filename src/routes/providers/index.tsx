import { component$, Fragment } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  FREE_TIER_PROVIDERS,
  PROVIDERS,
  CODING_MOE_PROVIDERS,
  GPU_PROVIDERS,
  AUDIO_SPEECH_PROVIDERS,
  VIDEO_PROVIDERS,
  SEARCH_PROVIDERS,
  OBSERVABILITY_SECURITY_PROVIDERS,
  EVERYTHING_ELSE_PROVIDERS,
  isFreePlan,
} from "../../data/providers";
import type { Provider } from "../../data/providers";
import { VendorIcon } from "../../components/VendorIcon";
import { V2Header } from "../../components/v2/V2Header";
import { V2Footer } from "../../components/v2/V2Footer";
import { usePageTheme } from "../../components/v2/theme";

const KIND_BADGE: Record<string, string> = {
  vendor:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  aggregator:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  router:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const FREE_BADGE =
  "rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white";

const FREE_TAG =
  "rounded bg-emerald-100 px-1 py-px text-[9px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300";

const chipClass =
  "rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white";

const linkClass =
  "text-indigo-600 transition-colors hover:text-indigo-500 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300";

const freePlanLabel = (provider: Provider) =>
  `Free plans: ${provider.freePlans.map((p) => p.name).join(", ")}`;

/**
 * Page section order. Each entry renders one category band (heading + hint +
 * blurb + provider column grid); the first has top margin, later ones a divider.
 * Adding a category is one entry here — never a new hand-written `<section>`.
 */
const SECTIONS: { title: string; hint: string; blurb: string; providers: Provider[] }[] = [
  {
    title: "Coding & MoE Models",
    hint: `${CODING_MOE_PROVIDERS.length} providers · Frontier labs, coding engines & multi-model gateways`,
    blurb:
      "Providers delivering foundation models with dedicated code generation, reasoning, and Mixture-of-Experts (MoE) architectures.",
    providers: CODING_MOE_PROVIDERS,
  },
  {
    title: "On-Demand GPU",
    hint: `${GPU_PROVIDERS.length} providers · Serverless clusters, GPU instances & bare-metal`,
    blurb:
      "Infrastructure clouds offering on-demand GPU capacity, custom model container hosting, and dedicated hardware instances.",
    providers: GPU_PROVIDERS,
  },
  {
    title: "Audio / Speech",
    hint: `${AUDIO_SPEECH_PROVIDERS.length} providers · Speech-to-text, voice cloning & audio intelligence`,
    blurb:
      "Specialized audio models and speech APIs for transcription, voice synthesis, and real-time audio intelligence.",
    providers: AUDIO_SPEECH_PROVIDERS,
  },
  {
    title: "Video",
    hint: `${VIDEO_PROVIDERS.length} providers · Generative video & media pipelines`,
    blurb:
      "High-throughput generative media platforms and APIs specialized in video generation and multi-modal media processing.",
    providers: VIDEO_PROVIDERS,
  },
  {
    title: "Web Grounding Search",
    hint: `${SEARCH_PROVIDERS.length} providers · Exa, Tavily, Brave Search & web indexing`,
    blurb:
      "Search APIs and web retrieval indices built specifically for AI agents, RAG pipelines, and grounded real-time context.",
    providers: SEARCH_PROVIDERS,
  },
  {
    title: "LLM Observability & Security Tooling",
    hint: `${OBSERVABILITY_SECURITY_PROVIDERS.length} providers · Tracing, evaluation, prompt shields & guardrails`,
    blurb:
      "Frameworks and gateways for tracing LLM execution, monitoring token spend, evaluation, red teaming, and prompt-injection safety guardrails.",
    providers: OBSERVABILITY_SECURITY_PROVIDERS,
  },
  {
    title: "Other Specialized Services",
    hint: `${EVERYTHING_ELSE_PROVIDERS.length} providers · Neural translation, embeddings & RAG tools`,
    blurb:
      "Specialized neural machine translation (e.g. DeepL), vector embedding models & rerankers (e.g. Voyage AI, Jina AI), and domain AI platforms.",
    providers: EVERYTHING_ELSE_PROVIDERS,
  },
];

function ProviderCard(provider: Provider) {
  return (
    <article
      key={provider.slug}
      class="mb-6 break-inside-avoid rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50"
    >
      <div class="flex items-start gap-3">
        <VendorIcon id={provider.slug} name={provider.name} size="lg" />
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-base font-semibold text-slate-900 dark:text-white">
              {provider.name}
            </h3>
            <span
              class={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${KIND_BADGE[provider.kind]}`}
            >
              {provider.kind}
            </span>
            {provider.freeTier && (
              <span class={FREE_BADGE} title={freePlanLabel(provider)}>
                Free tier
              </span>
            )}
          </div>
          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {provider.models.length} tracked model
            {provider.models.length === 1 ? "" : "s"}
            {provider.freeTier && (
              <>
                {" "}
                · {provider.freePlans.length} free plan
                {provider.freePlans.length === 1 ? "" : "s"}
              </>
            )}
            {provider.officialUrl && (
              <>
                {" · "}
                <a
                  href={provider.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={linkClass}
                >
                  Website ↗
                </a>
              </>
            )}
          </p>
        </div>
      </div>

      <p class="mt-3 text-sm text-slate-600 dark:text-slate-400">
        {provider.short}
      </p>

      <div class="mt-4 overflow-x-auto">
        <table class="w-full min-w-[430px] border-collapse text-left text-xs">
          <thead>
            <tr class="text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
              <th class="border-b border-slate-200 pb-1.5 pr-3 font-medium dark:border-slate-700">
                Plan
              </th>
              <th class="border-b border-slate-200 pb-1.5 pr-3 font-medium dark:border-slate-700">
                Price
              </th>
              <th class="border-b border-slate-200 pb-1.5 font-medium dark:border-slate-700">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {provider.plans.map((plan) => {
              const free = isFreePlan(plan);
              return (
                <tr key={plan.name} class="align-top">
                  <td class="border-b border-slate-100 py-2.5 pr-3 font-medium text-slate-800 dark:border-slate-800 dark:text-slate-200">
                    <span class="inline-flex flex-wrap items-center gap-1.5">
                      {plan.name}
                      {free && <span class={FREE_TAG}>free</span>}
                    </span>
                  </td>
                  <td
                    class={`border-b border-slate-100 py-2.5 pr-3 dark:border-slate-800 ${
                      free
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <span class="block">{plan.price}</span>
                    {plan.notes && (
                      <span class="mt-0.5 block text-[11px] text-slate-400 dark:text-slate-500">
                        {plan.notes}
                      </span>
                    )}
                  </td>
                  <td class="border-b border-slate-100 py-2.5 dark:border-slate-800">
                    {plan.evidenceUrl ? (
                      <a
                        href={plan.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class={linkClass}
                        title="Claimant page for this price"
                      >
                        claim ↗
                      </a>
                    ) : (
                      <span class="text-slate-300 dark:text-slate-600">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {provider.models.length > 0 ? (
        <div class="mt-4">
          <p class="mb-2 text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Models we cover on this provider
            {provider.catalogUrl && (
              <>
                {" · "}
                <a
                  href={provider.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={`normal-case tracking-normal ${linkClass}`}
                >
                  catalog ↗
                </a>
              </>
            )}
          </p>
          <div class="flex flex-wrap gap-1.5">
            {provider.models.map((m) => (
              <a
                key={m.slug}
                href={`/model/${m.slug}/`}
                class={chipClass}
                title={m.short}
              >
                {m.name}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p class="mt-4 text-[11px] text-slate-400 dark:text-slate-500">
          No tracked models cite this provider yet.
        </p>
      )}
    </article>
  );
}

export default component$(() => {
  // Theme is owned by the page via the shared hook (src/components/v2/theme.ts).
  const theme = usePageTheme();

  return (
    <main
      class={`flex min-h-screen flex-col font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
    >
      <V2Header theme={theme} navBase="/" />
      <div class="flex-1">
        <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4 py-10">
          <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Providers
          </h1>
          <p class="mt-2 max-w-full text-sm text-slate-600 dark:text-slate-400">
            Every tracked model reaches you through a provider — the console,
            gateway or API you actually pay. This page collects what each
            provider offers: its billing plans, what each plan costs (with the
            page claiming the price), and which of our covered models you can
            access through it.
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span class={FREE_BADGE}>Free tier</span>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              <strong class="font-semibold text-slate-700 dark:text-slate-200">
                {FREE_TIER_PROVIDERS.length} of {PROVIDERS.length}
              </strong>{" "}
              providers offer a free lane ($0 plan, free quota, or free model
              endpoints). Free-tier providers are highlighted with badges in
              every category.
            </p>
          </div>

          {SECTIONS.map((section, i) => (
            <Fragment key={section.title}>
              {i > 0 && (
                <hr class="my-12 border-0 border-t border-slate-200 dark:border-slate-700" />
              )}
              <section class={i === 0 ? "mt-8" : undefined}>
                <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-slate-200 pb-2 dark:border-slate-700">
                  <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
                      {section.title}
                    </h2>
                    <span class="text-xs text-slate-500 dark:text-slate-400">
                      {section.hint}
                    </span>
                  </div>
                </div>
                <p class="mt-2 max-w-3xl text-xs text-slate-500 dark:text-slate-400">
                  {section.blurb}
                </p>
                <div class="mt-5 gap-6 md:columns-2">{section.providers.map(ProviderCard)}</div>
              </section>
            </Fragment>
          ))}
        </div>
      </div>
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "ModelComp — Providers",
  meta: [
    {
      name: "description",
      content:
        "AI model providers covered by ModelComp: billing plans, per-lane pricing with claimant sources, and every tracked model each provider sells — free-tier providers first, then by catalog size.",
    },
  ],
};
