import { component$, useSignal } from "@builder.io/qwik";
import { ThemeToggle } from "./theme-toggle/theme-toggle";

export const Header = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <>
      <header class="sticky top-0 z-40">
        <div class="border-b border-slate-200 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/90">
          <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Left: Theme Switcher */}
            <div class="flex w-24 items-center justify-start">
              <ThemeToggle />
            </div>

            {/* Middle: Name */}
            <a
              href="#top"
              class="text-lg font-bold tracking-tight text-slate-900 transition-colors dark:text-white"
            >
              ModelComp
            </a>

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

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen.value}
                class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
                onClick$={() => {
                  isMenuOpen.value = true;
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Blurred Overlay */}
      {isMenuOpen.value && (
        <div
          class="fixed inset-0 z-[100] flex h-screen w-screen flex-col items-center justify-center bg-white/95 p-6 backdrop-blur-xl transition-all dark:bg-slate-950/95"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Close Button at top-right */}
          <button
            type="button"
            aria-label="Close navigation menu"
            class="absolute top-4 right-4 inline-flex items-center justify-center rounded-lg p-3 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick$={() => {
              isMenuOpen.value = false;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

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
