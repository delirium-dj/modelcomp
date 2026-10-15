import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    define: {
      // Disable Qwik Click-to-Source in dev: it annotates every component
      // host with data-qwik-inspector attributes. Production builds never
      // include them (qInspector defaults to false outside development).
      "globalThis.qInspector": false,
    },
    preview: {
      // WHY: Preventing browsers from caching HTML pages during local preview testing
      headers: {
        "Cache-Control": "no-cache, must-revalidate",
      },
    },
  };
});
