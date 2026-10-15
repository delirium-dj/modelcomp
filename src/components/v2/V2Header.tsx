import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

/**
 * V2Header — shared header for the whole /v2 tree.
 * Same functionality as the v1 Header (sticky bar, mobile-only auto-hide on
 * scroll, theme toggle, desktop anchor nav, hamburger/X + fullscreen drawer),
 * restyled in the design-6sol language. v1 Header.tsx is untouched.
 *
 * Theme is owned by the page (it also drives the `d6-dark` root class) and
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
  // Desktop always stays visible (see .v2-site-header CSS guard).
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
      <header class={`v2-site-header${isVisible.value ? "" : " v2-hidden"}`}>
        <div class="v2-site-bar">
          <div class="v2-site-left">
            <button
              type="button"
              class="d6-theme-toggle"
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
              <span class="d6-theme-dot" aria-hidden="true" />
              {theme.value === "dark" ? "Light" : "Dark"}
            </button>
          </div>

          <div class="d6-brand">
            <svg viewBox="0 0 300 300" class="d6-brand-logo" role="presentation" aria-hidden="true">
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
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              ModelComp <span class="d6-brand-slash">/</span> v2
            </a>
          </div>

          <div class="v2-site-right">
            <nav aria-label="Primary" class="v2-site-nav">
              <a href={`${navBase}#compare`}>Compare</a>
              <a href={`${navBase}#methodology`}>Scoring</a>
              <a href={`${navBase}#models`}>Models</a>
            </nav>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen.value}
              class="v2-burger"
              onClick$={() => {
                isMenuOpen.value = !isMenuOpen.value;
              }}
            >
              {!isMenuOpen.value ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
        <div class="v2-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav class="v2-drawer-nav" aria-label="Mobile">
            <a
              href={`${navBase}#compare`}
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Compare
            </a>
            <a
              href={`${navBase}#methodology`}
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Scoring
            </a>
            <a
              href={`${navBase}#models`}
              onClick$={() => {
                isMenuOpen.value = false;
              }}
            >
              Models
            </a>
            <a
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
