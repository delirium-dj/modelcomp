import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { V2Footer } from "../components/v2/V2Footer";
import { V2Header } from "../components/v2/V2Header";
import "../components/v2/v2.css";

export default component$(() => {
  // The v2 homepage, model profiles, design studies and the Providers page
  // are standalone canvases with their own header/footer inside each page —
  // the layout chrome (below) serves the remaining plain pages (/contact).
  // NOTE: the site root normalizes to "" (the trailing-slash strip eats the
  // only slash), so it must be matched explicitly.
  const path = useLocation().url.pathname.replace(/^\/+/, "/").replace(/\/+$/, "");
  if (
    path === "" ||
    path === "/" ||
    path.startsWith("/model/") ||
    path.startsWith("/providers") ||
    path === "/design-6sol"
  ) {
    return <Slot />;
  }

  // Theme is owned here (same init as routes/index.tsx and model profiles):
  // explicit choice → inherited html.dark → OS preference, always writing
  // back all three so Tailwind's dark: utilities never leak across themes.
  const theme = useSignal<"light" | "dark">("light");

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const root = document.documentElement;
    const apply = (v: "light" | "dark") => {
      theme.value = v;
      root.classList.toggle("dark", v === "dark");
      try {
        localStorage.setItem("v2-theme", v);
        localStorage.setItem("theme", v);
      } catch {
        /* storage unavailable — theme just doesn't persist */
      }
    };
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

  return (
    <main
      id="top"
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
    >
      <V2Header theme={theme} navBase="/" />
      <div class="pt-2">
        <Slot />
      </div>
      <V2Footer />
    </main>
  );
});
