import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      // Server-only bundle: @qwik-city-plan.js (~800 KB for 160+ routes)
      // legitimately exceeds Vite's 500 KB client tripwire and is never
      // sent to browsers. Keep a higher server-side tripwire; the client
      // build (vite.config.ts) keeps the default 500 KB warning intact.
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        // Production origin for canonical URLs + sitemap. Dev default keeps
        // local previews working; deploys MUST set SITE_ORIGIN (see README)
        // or every page self-canonicalises to localhost (B2).
        origin: process.env.SITE_ORIGIN ?? "http://localhost:4173",
      }),
    ],
  };
});
