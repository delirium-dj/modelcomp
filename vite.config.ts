import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    preview: {
      // WHY: Preventing browsers from caching HTML pages during local preview testing
      headers: {
        "Cache-Control": "no-cache, must-revalidate",
      },
    },
  };
});
