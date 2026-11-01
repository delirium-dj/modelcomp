import { component$ } from "@builder.io/qwik";
import type { AiModel } from "../../data/models";
import { VendorIcon } from "../VendorIcon";
import { PricingTiers } from "./PricingTiers";

interface DecisionShelfProps {
  models: AiModel[];
}

/** Homepage decision-model shelf (rendered only when 3+ decision models exist). */
export const DecisionShelf = component$<DecisionShelfProps>(({ models }) => {
  return (
    <section
      class="border-b border-[#ccdae2] px-0 pb-20 pt-12 dark:border-[#274757]"
      aria-labelledby="v2-decision-title"
    >
      <div class="flex items-start justify-between gap-6">
        <div class="v2-section-lead">
          <h2
            id="v2-decision-title"
            class="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl"
          >
            Decision models
          </h2>
          <p class="mt-3.5 max-w-sm text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
            System-One models return typed judgments (choice, score, yes/no probability) instead of
            generated text — for routing, triage, and guardrails inside agent pipelines. They are
            scored on different axes and are <strong>not comparable</strong> to generative Overall
            scores.
          </p>
        </div>
        <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] max-[520px]:px-2 max-[520px]:py-1 max-[520px]:text-xs dark:border-[#3a5a6e] dark:text-[#a9c2d2]">
          {models.length} models
        </span>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-5 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3">
        {models.map((m) => (
          <article
            class="flex flex-col border border-[#ccdae2] border-t-2 border-t-[#dfab77] bg-[#f7fafb] px-6 py-5 dark:border-[#274757] dark:border-t-[#e8b47e] dark:bg-[#132a3b]"
            key={m.id}
          >
            <div class="flex items-start justify-between gap-3">
              <h3 class="m-0 flex items-center gap-2.5 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight">
                <VendorIcon id={m.id} name={m.name} /> <a href={`/model/${m.slug}/`}>{m.name}</a>
              </h3>
              <span class="flex-none rounded-full border border-[#b7cad6] px-3.5 py-1.5 text-xs text-[#425f71] dark:border-[#3a5a6e] dark:text-[#a9c2d2]">
                Decision
              </span>
            </div>
            <p class="mt-2.5 text-sm leading-relaxed">{m.short}</p>
            <dl class="m-0 mt-3.5 p-0 text-xs leading-relaxed">
              <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                <dt class="shrink-0 whitespace-nowrap font-bold">State budget</dt>
                <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                  {m.meta.contextWindow}
                </dd>
              </div>
              <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                <dt class="shrink-0 whitespace-nowrap font-bold">I/O</dt>
                <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                  {m.meta.modalities}
                </dd>
              </div>
              <div class="flex flex-nowrap gap-x-2.5 gap-y-1 border-t border-t-[#ccdae2] py-2 dark:border-t-[#274757]">
                <dt class="shrink-0 whitespace-nowrap font-bold">Pricing</dt>
                <dd class="m-0 min-w-0 flex-1 break-words text-[#577184] dark:text-[#93adbe]">
                  <PricingTiers model={m} />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
});
