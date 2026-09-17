import { component$ } from "@builder.io/qwik";
import { HeroArt } from "./HeroArt";

export const Hero = component$(() => {
  return (
    <section class="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-12 md:pt-16 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Compare AI coding models on what actually matters
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-600">
          Tool use, reasoning, context, multimodal, coding and cost — normalized to 1–100 from public
          benchmarks so current and future models can be compared side by side.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="#compare"
            class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Compare models
          </a>
          <a
            href="#methodology"
            class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
          >
            How scoring works
          </a>
        </div>
      </div>
      <div class="lg:col-span-1">
        <HeroArt />
      </div>
    </section>
  );
});
