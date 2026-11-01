import { useSignal, useVisibleTask$, type Signal } from "@builder.io/qwik";

/**
 * Page-owned light/dark theme, shared by every v2 canvas (homepage, model
 * profiles, providers, contact layout). The init order is the one contract:
 * explicit choice (`v2-theme`) wins → inherited `html.dark` (set by the
 * anti-flash script in root.tsx) → OS preference. Every write-back keeps the
 * signal, `<html>.dark` and BOTH storage keys (`theme`, `v2-theme`) in sync, so
 * a stale `.dark` ancestor can never leak `dark:` utilities across themes.
 *
 * Custom Qwik hook — call it once at the top of a route component. The theme
 * signal is what `V2Header` consumes for its toggle.
 */
export function usePageTheme(): Signal<"light" | "dark"> {
  const theme = useSignal<"light" | "dark">("light");

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const root = document.documentElement;
    const apply = (v: "light" | "dark") => applyPageTheme(theme, v);
    const sys = window.matchMedia("(prefers-color-scheme: dark)");
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("v2-theme");
    } catch {
      stored = null;
    }
    if (stored === "light" || stored === "dark") {
      apply(stored);
      return;
    }
    if (root.classList.contains("dark")) {
      apply("dark");
      return;
    }
    apply(sys.matches ? "dark" : "light");
    const follow = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("v2-theme")) return;
      } catch {
        /* storage unavailable — keep following */
      }
      apply(e.matches ? "dark" : "light");
    };
    sys.addEventListener("change", follow);
    cleanup(() => sys.removeEventListener("change", follow));
  });

  return theme;
}

/**
 * Single writer for a theme change: signal + `<html>.dark` + both storage keys
 * always agree (the header toggle and the init task both go through here).
 */
export function applyPageTheme(theme: Signal<"light" | "dark">, v: "light" | "dark"): void {
  theme.value = v;
  document.documentElement.classList.toggle("dark", v === "dark");
  try {
    localStorage.setItem("v2-theme", v);
    localStorage.setItem("theme", v);
  } catch {
    /* storage unavailable — theme just doesn't persist */
  }
}
