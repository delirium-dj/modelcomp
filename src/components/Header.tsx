import { component$, useSignal } from "@builder.io/qwik";
import { ThemeToggle } from "./theme-toggle/theme-toggle";

export const Header = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <>
      <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/90">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Left: Theme Switcher */}
          <div class="flex w-24 items-center justify-start">
            <ThemeToggle />
          </div>

          {/* Middle: Brand Name and Logo */}
          <div class="flex items-center gap-2">
            {/* SVG Brand Logo based on HeroArt */}
            <svg
              viewBox="0 0 300 300"
              class="h-6 w-6 text-indigo-600 dark:text-indigo-400"
              role="presentation"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="logo-hex" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#6366f1" />
                  <stop offset="100%" stop-color="#10b981" />
                </linearGradient>
                <radialGradient id="logo-core" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stop-color="#c7d2fe" />
                  <stop offset="100%" stop-color="#4f46e5" />
                </radialGradient>
              </defs>
              <polygon
                points="150,28 254,88 254,208 150,268 46,208 46,88"
                fill="none"
                stroke="url(#logo-hex)"
                stroke-width="15"
                stroke-linejoin="round"
              />
              <circle cx="150" cy="148" r="45" fill="url(#logo-core)" />
            </svg>
            <a
              href="#top"
              class="text-lg font-bold tracking-tight text-slate-900 transition-colors dark:text-white"
            >
              ModelComp
            </a>
          </div>

          {/* Right: Nav / Hamburger */}
          <div class="flex w-24 items-center justify-end">
            {/* Desktop Nav */}
            <nav aria-label="Primary" class="hidden md:flex items-center gap-5 text-sm font-medium">
              <a
                href="#compare"
                class="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Compare
              </a>
              <a
                href="#methodology"
                class="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Scoring
              </a>
              <a
                href="#models"
                class="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Models
              </a>
            </nav>

            {/* Mobile Hamburger / Close Button trigger (swaps in place) */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen.value}
              class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
              onClick$={() => {
                isMenuOpen.value = !isMenuOpen.value;
              }}
            >
              {!isMenuOpen.value ? (
                /* Hamburger (3 bars) */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 animate-fade-in"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                /* X / Close icon (absolutely same button / position) */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 animate-fade-in"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay - below header, non-interfering */}
      {isMenuOpen.value && (
        <div
          class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-white/95 p-6 pt-20 backdrop-blur-xl transition-all dark:bg-slate-950/95"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Centered Navigation Links */}
          <nav class="flex flex-col items-center justify-center gap-8 text-center text-2xl font-bold">
            <a
              href="#compare"
              class="text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Compare
            </a>
            <a
              href="#methodology"
              class="text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Scoring
            </a>
            <a
              href="#models"
              class="text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Models
            </a>
          </nav>
        </div>
      )}
     </>
  );
});
