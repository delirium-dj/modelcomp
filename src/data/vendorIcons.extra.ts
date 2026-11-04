// Additive brand marks for providers that arrived after `vendorIcons.generated.ts`
// was last touched. Kept in its own file so the existing 138 icons are literally
// never rewritten — `{ ...VENDOR_ICON_SVGS, ...VENDOR_ICON_SVGS_EXTRA }` is a
// safe append. Same `{ viewBox, body, fill? }` shape as the base map.
//
// Sources:
//   - Real CC0 brand marks from Simple Icons (https://simpleicons.org), matching
//     the provenance the base module already credits. Raw source SVGs are vendored
//     under `assets/vendor-icons/<key>.svg` for provenance.
//   - Brand-colored monogram tiles (rounded rect + white initial) for providers
//     with no free SVG source in the Simple Icons / thesvg / LobeHub corpora.
//     These are placeholder tiles, not official marks; swap for a real SVG as
//     soon as a licensed source is available.
export const VENDOR_ICON_SVGS_EXTRA: Record<string, { viewBox: string; body: string; fill?: string }> = {
  // --- Real brand marks (Simple Icons, CC0) ---
  vultr: {
    viewBox: "0 0 24 24",
    fill: "#007BFC",
    body: '<path d="M8.36 2.172A1.194 1.194 0 007.348 1.6H1.2A1.2 1.2 0 000 2.8a1.211 1.211 0 00.182.64l11.6 18.4a1.206 1.206 0 002.035 0l3.075-4.874a1.229 1.229 0 00.182-.64 1.211 1.211 0 00-.182-.642zm10.349 8.68a1.206 1.206 0 002.035 0L21.8 9.178l2.017-3.2a1.211 1.211 0 00.183-.64 1.229 1.229 0 00-.183-.64l-1.6-2.526a1.206 1.206 0 00-1.016-.571h-6.148a1.2 1.2 0 00-1.201 1.2 1.143 1.143 0 00.188.64z"/>',
  },
  digitalocean: {
    viewBox: "0 0 24 24",
    fill: "#0080FF",
    body: '<path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z"/>',
  },
  qdrant: {
    viewBox: "0 0 24 24",
    fill: "#DC244C",
    body: '<path d="m12 16.5 3.897-2.25v-4.5L12 7.5 8.103 9.75v4.5zM1.607 18 12 24l3.897-2.25v-4.5L12 19.5l-6.495-3.75v-7.5L12 4.5l6.495 3.75v15L22.393 21V6L12 0 1.607 6Z"/>',
  },
  // Parent brand for the Snowflake Cortex AI provider.
  snowflake: {
    viewBox: "0 0 24 24",
    fill: "#29B5E8",
    body: '<path d="M24 3.459c0 .646-.418 1.18-1.141 1.18-.723 0-1.142-.534-1.142-1.18 0-.647.419-1.18 1.142-1.18.723 0 1.141.533 1.141 1.18zm-.228 0c0-.533-.38-.951-.913-.951s-.913.38-.913.95c0 .533.38.952.913.952.57 0 .913-.419.913-.951zm-1.37-.533h.495c.266 0 .456.152.456.38 0 .153-.076.229-.19.305l.19.266v.038h-.266l-.19-.266h-.229v.266h-.266zm.495.228h-.229v.267h.229c.114 0 .152-.038.152-.114.038-.077-.038-.153-.152-.153zM7.602 12.4c.038-.151.076-.304.076-.456 0-.114-.038-.228-.038-.342-.114-.343-.304-.647-.646-.838l-4.87-2.777c-.685-.38-1.56-.152-1.94.533-.381.685-.153 1.56.532 1.94l2.701 1.56-2.701 1.56c-.685.38-.913 1.256-.533 1.94.38.685 1.256.914 1.94.533l4.832-2.777c.343-.267.571-.533.647-.876zm1.332 2.626c-.266-.038-.57.038-.837.19l-4.832 2.777c-.685.38-.913 1.256-.532 1.94.38.686 1.255.914 1.94.533l2.701-1.56v3.12c0 .8.647 1.408 1.446 1.408.799 0 1.407-.647 1.407-1.408v-5.592c0-.761-.57-1.37-1.293-1.408zm4.946-6.088c.266.038.57-.038.837-.19l4.832-2.777c.685-.38.913-1.256.532-1.94-.38-.686-1.255-.914-1.94-.533l-2.701 1.56V1.975c0-.799-.647-1.408-1.446-1.408-.799 0-1.446.609-1.446 1.408V7.53c0 .76.609 1.37 1.332 1.407zM3.265 5.97l4.832 2.777c.266.152.533.19.837.19.723-.038 1.331-.684 1.331-1.407V1.975c0-.799-.646-1.408-1.407-1.408-.799 0-1.446.647-1.446 1.408v3.12l-2.701-1.56c-.685-.38-1.56-.152-1.94.533-.419.646-.19 1.521.494 1.902zm9.093 6.011a.412.412 0 00-.114-.266l-.57-.571a.346.346 0 00-.267-.114.412.412 0 00-.266.114l-.571.57a.411.411 0 00-.114.267c0 .076.038.19.114.267l.57.57a.345.345 0 00.267.114c.076 0 .19-.038.266-.114l.571-.57a.412.412 0 00.114-.267zm1.598.533L11.94 14.53c-.039.038-.153.114-.229.114h-.608a.411.411 0 01-.267-.114L8.82 12.514a.408.408 0 01-.076-.229v-.608c0-.076.038-.19.114-.267l2.016-2.016a.41.41 0 01.267-.114h.608a.41.41 0 01.267.114l2.016 2.016a.347.347 0 01.114.267v.608c-.076.077-.114.19-.19.229zm5.593 5.44l-4.832-2.777c-.266-.152-.57-.19-.837-.152-.723.038-1.332.684-1.332 1.408v5.554c0 .8.647 1.408 1.408 1.408.799 0 1.446-.647 1.446-1.408v-3.12l2.7 1.56c.686.38 1.561.152 1.941-.533.419-.646.19-1.521-.494-1.94zm2.549-7.533l-2.701 1.56 2.7 1.56c.686.38.914 1.256.533 1.94-.38.685-1.255.913-1.94.533l-4.832-2.778a1.644 1.644 0 01-.647-.798c-.037-.153-.076-.305-.076-.457 0-.114.039-.228.039-.342.114-.343.342-.647.646-.837l4.832-2.778c.685-.38 1.56-.152 1.94.533.457.609.19 1.484-.494 1.864"/>',
  },
  windsurf: {
    viewBox: "0 0 24 24",
    // Near-black mark; VendorIcon inverts it in dark theme via `invertDark`.
    fill: "#0B100F",
    body: '<path d="M23.55 5.067c-1.2038-.002-2.1806.973-2.1806 2.1765v4.8676c0 .972-.8035 1.7594-1.7597 1.7594-.568 0-1.1352-.286-1.4718-.7659l-4.9713-7.1003c-.4125-.5896-1.0837-.941-1.8103-.941-1.1334 0-2.1533.9635-2.1533 2.153v4.8957c0 .972-.7969 1.7594-1.7596 1.7594-.57 0-1.1363-.286-1.4728-.7658L.4076 5.1598C.2822 4.9798 0 5.0688 0 5.2882v4.2452c0 .2147.0656.4228.1884.599l5.4748 7.8183c.3234.462.8006.8052 1.3509.9298 1.3771.313 2.6446-.747 2.6446-2.0977v-4.893c0-.972.7875-1.7593 1.7596-1.7593h.003a1.798 1.798 0 0 1 1.4718.7658l4.9723 7.0994c.4135.5905 1.05.941 1.8093.941 1.1587 0 2.1515-.9645 2.1515-2.153v-4.8948c0-.972.7875-1.7594 1.7596-1.7594h.194a.22.22 0 0 0 .2204-.2202v-4.622a.22.22 0 0 0-.2203-.2203Z"/>',
  },

  // --- Override: improve an existing base icon (key collision → this wins) ---
  // TeleAI's base mark is a lone solid-blue shield on a non-square 0 0 26 30
  // viewBox: it reads as a generic "security badge" and scales small next to the
  // other square 24x24 marks. This keeps the authentic shield silhouette but sets
  // it in a brand-blue tile (TeleAI #3473F4) so it renders crisp and consistent.
  // Shadows the base `teleai` key only (also used by the `xing` model) — no other
  // icon is affected.
  teleai: {
    viewBox: "0 0 24 24",
    body: '<rect width="24" height="24" rx="5" fill="#3473F4"/><g transform="translate(3.2 1.8) scale(0.66)"><path d="M1.1409 1.388h24.3138v14.7481a17.7622 17.7622 0 0 1-.18 2.4185c-.6466 4.6701-2.6823 6.0508-6.1828 7.8874l-5.7941 3.0747-5.7906-3.0351c-3.648-1.833-5.7077-3.5988-6.2488-8.1274a17.5816 17.5816 0 0 1-.12-2.2217L1.141 1.3881Z" fill="#ffffff"/></g>',
  },

  // --- Brand-colored monogram tiles (no free SVG source in the vendored corpora) ---
  // Rounded 5-unit tile at 24x24 with a bold white initial. Placeholder art —
  // swap for a real brand SVG as soon as a licensed source is available.
  "vast-ai":       { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#E4002B"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">V</text>' },
  "coreweave":     { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#F97316"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">C</text>' },
  "patronus-ai":   { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#4F46E5"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">P</text>' },
  "galileo":       { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#0EA5E9"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">G</text>' },
  "oracle":        { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#C74634"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">O</text>' },
  "verda":         { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#22C55E"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">V</text>' },
  "io-net":        { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#7C3AED"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">i</text>' },
  "reka":          { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#0891B2"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">R</text>' },
  "morph":         { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#6366F1"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">M</text>' },
  "assemblyai":    { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#059669"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">A</text>' },
  "pinecone":      { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#0080FE"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">P</text>' },
  "langwatch":     { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#14B8A6"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">L</text>' },
  "serpapi":       { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#F59E0B"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">S</text>' },
  "spheron":       { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#A855F7"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">S</text>' },
  "lightning-ai":  { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#FBBF24"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#0B100F">L</text>' },
  "01-ai":         { viewBox: "0 0 24 24", body: '<rect width="24" height="24" rx="5" fill="#2563EB"/><text x="12" y="12" dy="0.35em" text-anchor="middle" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif" fill="#ffffff">0</text>' },
};
