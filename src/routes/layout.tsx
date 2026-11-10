import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { V2Footer } from "../components/v2/V2Footer";
import { V2Header } from "../components/v2/V2Header";
import { usePageTheme } from "../components/v2/theme";

export default component$(() => {
  // The v2 homepage, model profiles, design studies and the Providers page
  // are standalone canvases with their own header/footer inside each page —
  // the layout chrome (below) serves the remaining plain pages (/contact).
  // NOTE: the site root normalizes to "" (the trailing-slash strip eats the
  // only slash), so it must be matched explicitly.
  const path = useLocation().url.pathname.replace(/^\/+/, "/").replace(/\/+$/, "");
  // Standalone v2 canvases render their own V2Header/V2Footer — the shared
  // layout chrome must skip them (else every page gets a double header).
  const STANDALONE_PREFIXES = [
    "/model/",
    "/providers",
    "/compare",
    "/benchmarks",
    "/methodology",
    "/data",
    "/best-",
  ];
  if (
    path === "" ||
    path === "/" ||
    STANDALONE_PREFIXES.some((p) => path.startsWith(p))
  ) {
    return <Slot />;
  }

  // Theme is owned here via the shared hook (same init as the homepage and
  // model profiles — see src/components/v2/theme.ts).
  const theme = usePageTheme();

  return (
    <main
      id="top"
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
    >
      <V2Header theme={theme} navBase="/" />
      <div class="pt-2">
        <Slot />
      </div>
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
        <V2Footer />
      </div>
    </main>
  );
});
