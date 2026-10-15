import { component$ } from "@builder.io/qwik";
import { ThemeToggle } from "../theme-toggle/theme-toggle";

/**
 * HeaderV2 — redesign playground header for /v2 only.
 * Old Header.tsx is untouched; layout.tsx renders this on /v2.
 * Redesign freely here: nav, branding, mobile drawer, etc.
 */
export const HeaderV2 = component$(() => {
  return (
    <header class="v2-header sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/v2/" class="text-lg font-bold tracking-tight">
          ModelComp <span class="text-emerald-400">v2</span>
        </a>
        <nav class="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <a href="/v2/" class="hover:text-white">
            Compare
          </a>
          <a href="/contact/" class="hover:text-white">
            Contact
          </a>
          <a href="/" class="rounded-full border border-zinc-700 px-3 py-1 hover:border-zinc-500 hover:text-white">
            ← Back to v1
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
});
