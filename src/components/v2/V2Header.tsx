import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

/**
 * V2Header — shared header for the whole v2 tree, in the v1 Tailwind dialect.
 * Same functionality as the v1 Header (sticky bar, mobile-only auto-hide on
 * scroll, theme toggle, desktop anchor nav, hamburger/X + fullscreen drawer).
 * v1 Header.tsx is untouched.
 *
 * Theme is owned by the page (it also drives the `dark` root class) and
 * passed in as a signal; the toggle persists to the shared `v2-theme` key.
 */

interface V2HeaderProps {
  theme: Signal<"light" | "dark">;
  /** Anchor prefix: "" on the homepage, "/" on profile pages. */
  navBase: string;
}

export const V2Header = component$<V2HeaderProps>(({ theme, navBase }) => {
  const isMenuOpen = useSignal(false);
  const isVisible = useSignal(true);

  // Mobile-only auto-hide: hide on scroll down, show instantly on scroll up.
  // Desktop always stays visible (min-[800px] guard below).
  useVisibleTask$(({ cleanup }) => {
    let lastY = window.scrollY;
    let ticking = false;
    const mq = window.matchMedia("(max-width: 799px)");

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const dy = y - lastY;
      if (y <= 8 || !mq.matches) {
        isVisible.value = true;
      } else if (dy > 4) {
        isVisible.value = false;
      } else if (dy < -2) {
        isVisible.value = true;
      }
      lastY = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanup(() => window.removeEventListener("scroll", onScroll));
  });

  // Never hide the bar (and its close button) while the mobile drawer is open.
  useTask$(({ track }) => {
    if (track(() => isMenuOpen.value)) {
      isVisible.value = true;
    }
  });

  return (
    <>
      <header
        class={`sticky top-0 z-50 border-b border-[#ccdae2] bg-[#ecf3f6] transition-transform duration-300 will-change-transform dark:border-[#274757] dark:bg-[#0e1e2a]${isVisible.value ? "" : " -translate-y-full min-[800px]:translate-y-0"}`}
      >
        <div class="mx-auto grid min-h-14 max-w-[1480px] grid-cols-[1fr_auto_1fr] items-center gap-5 px-10 max-[800px]:px-5 max-[520px]:px-4">
          <div class="justify-self-start">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-pressed={theme.value === "dark"}
              aria-label={theme.value === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme.value === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick$={() => {
                theme.value = theme.value === "dark" ? "light" : "dark";
                try {
                  localStorage.setItem("v2-theme", theme.value);
                } catch {
                  /* private mode — theme just doesn't persist */
                }
              }}
            >
              <span aria-hidden="true">
                {theme.value === "dark" ? (
                  /* Sun icon — shown when dark mode is active (same as v1 ThemeToggle) */
                  <svg
                    class="h-5 w-5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  /* Moon icon — shown when light mode is active (same as v1 ThemeToggle) */
                  <svg
                    class="h-5 w-5 text-slate-700 dark:text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>

          <div class="inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight">
            <svg viewBox="0 0 300 300" class="h-6 w-6 shrink-0" role="presentation" aria-hidden="true">
              <defs>
                <linearGradient id="v2-header-hex" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#6366f1" />
                  <stop offset="100%" stop-color="#10b981" />
                </linearGradient>
                <radialGradient id="v2-header-core" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stop-color="#c7d2fe" />
                  <stop offset="100%" stop-color="#4f46e5" />
                </radialGradient>
              </defs>
              <polygon
                points="150,28 254,88 254,208 150,268 46,208 46,88"
                fill="none"
                stroke="url(#v2-header-hex)"
                stroke-width="15"
                stroke-linejoin="round"
              />
              <circle cx="150" cy="148" r="45" fill="url(#v2-header-core)" />
            </svg>
            <a href="/">
              ModelComp</a>
          </div>

          <div class="flex items-center justify-self-end">
            <nav aria-label="Primary" class="hidden items-center gap-5 text-sm font-semibold min-[800px]:inline-flex">
              <a class="text-[#577184] hover:text-[#19384d] dark:text-[#93adbe] dark:hover:text-[#e8f1f6]" href={`${navBase}#compare`}>Compare</a>
              <a class="text-[#577184] hover:text-[#19384d] dark:text-[#93adbe] dark:hover:text-[#e8f1f6]" href={`${navBase}#methodology`}>Scoring</a>
              <a class="text-[#577184] hover:text-[#19384d] dark:text-[#93adbe] dark:hover:text-[#e8f1f6]" href={`${navBase}#models`}>Models</a>
            </nav>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen.value}
              class="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#ccdae2] bg-transparent px-2.5 py-1.5 text-[#19384d] hover:border-[#19384d] min-[800px]:hidden dark:border-[#274757] dark:text-[#e8f1f6] dark:hover:border-[#e8f1f6]"
              onClick$={() => {
                isMenuOpen.value = !isMenuOpen.value;
              }}
            >
              {!isMenuOpen.value ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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

      {isMenuOpen.value && (
        <div class="fixed inset-0 z-40 flex min-[800px]:hidden flex-col items-center justify-center bg-[#ecf3f6] px-6 pb-6 pt-20 dark:bg-[#0e1e2a]" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav class="flex flex-col items-center gap-10 text-center font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight" aria-label="Mobile">
            <a
              class="px-6 py-3 text-[#19384d] hover:text-[color:var(--color-primary)] dark:text-[#e8f1f6]"
              href={`${navBase}#compare`}
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Compare
            </a>
            <a
              class="px-6 py-3 text-[#19384d] hover:text-[color:var(--color-primary)] dark:text-[#e8f1f6]"
              href={`${navBase}#methodology`}
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Scoring
            </a>
            <a
              class="px-6 py-3 text-[#19384d] hover:text-[color:var(--color-primary)] dark:text-[#e8f1f6]"
              href={`${navBase}#models`}
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Models
            </a>
            <a
              class="px-6 py-3 text-[#19384d] hover:text-[color:var(--color-primary)] dark:text-[#e8f1f6]"
              href="/contact/"
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
});
