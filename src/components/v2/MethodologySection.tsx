import { component$ } from "@builder.io/qwik";
import { DIMENSIONS } from "../../data/models";

/** Homepage "How scoring works" section (static copy + the dimension cards). */
export const MethodologySection = component$(() => {
  return (
    <section
      class="border-b-0 border-[#ccdae2] px-0 pb-12 pt-12 dark:border-[#274757]"
      id="methodology"
      aria-labelledby="v2-method-title"
    >
      <div class="flex items-start justify-between gap-6 max-[520px]:flex-col">
        <h2
          id="v2-method-title"
          class="min-w-0 flex-[2_1_0%] font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl"
        >
          How scoring works
        </h2>
        <p class="mt-3.5 min-w-0 max-w-none flex-[3_1_0%] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
          Scores are normalized interpretations from 1 to 100 (higher is better), based on public
          benchmarks. Overall Score is the rounded mean of the five quality dimensions — Cost
          efficiency is scored separately and never counts toward Overall.
        </p>
      </div>
      <div class="mt-7 grid grid-cols-3 gap-5 max-[800px]:grid-cols-2">
        <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]">
          <h3 class="text-sm font-semibold leading-tight">Independently researched</h3>
          <p class="mt-3 text-sm leading-relaxed">
            Every benchmark number cites its source. Missing data is marked — never invented.
          </p>
        </article>
        <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]">
          <h3 class="text-sm font-semibold leading-tight">Averaged, not single-opinion</h3>
          <p class="mt-3 text-sm leading-relaxed">
            Each model's scores are the mean across independent reporting agents. Evidence-free
            reports are quarantined and never counted.
          </p>
        </article>
        <article class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]">
          <h3 class="text-sm font-semibold leading-tight">Re-researched weekly</h3>
          <p class="mt-3 text-sm leading-relaxed">
            Every report older than seven days is checked against fresh benchmarks, and scores
            refresh whenever new verified evidence would change them.
          </p>
        </article>
      </div>
      <h3 class="my-6 font-[family-name:var(--font-display)] text-xl font-medium tracking-tight">
        What each dimension measures
      </h3>
      <div class="grid grid-cols-3 gap-5 max-[800px]:grid-cols-2">
        {DIMENSIONS.map((d) => (
          <article
            class="flex min-h-0 flex-col border border-[#ccdae2] bg-[#f7fafb] px-5 py-4 dark:border-[#274757] dark:bg-[#132a3b]"
            key={d.key}
          >
            <h3 class="text-sm font-semibold leading-tight">{d.label}</h3>
            <p class="mt-3 text-sm leading-relaxed">{d.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
});
