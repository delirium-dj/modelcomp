import { component$ } from "@builder.io/qwik";

/**
 * FooterV2 — redesign playground footer for /v2 only.
 * Old Footer.tsx (sponsors, backers) is untouched; copy over
 * whatever you want to keep, restyle the rest.
 */
export const FooterV2 = component$(() => {
  return (
    <footer class="v2-footer border-t border-zinc-800 bg-zinc-950">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          ModelComp <span class="text-emerald-400">v2</span> — redesign experiment. Safe to delete.
        </p>
        <p>
          <a href="/" class="underline hover:text-zinc-300">
            v1 homepage
          </a>
          {" · "}
          <a href="/contact/" class="underline hover:text-zinc-300">
            contact
          </a>
        </p>
      </div>
    </footer>
  );
});
