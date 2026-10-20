# ModelComp — Project Map

High-level GPS map of components, routes, data flow, scripts, and relationships for AI agents.
Refreshed 2026-10-05 (2026-10-04 version missed `.opencode/plugins/` runtime retry suite).

## Architecture & Data Flow

```text
model/<slug>/<Source_Name>.md      Per-agent research findings (model card, raw benchmarks, 1–100 scores)
model/<slug>/average.md            Arithmetic means (recomputed by scripts/sync-data.mjs)
model/<slug>/meta.json             Curated display metadata (name, pricing, context window,
                                   optional category: "generative" default, "decision" for
                                   typed-decision System-One models like Jev)
models_voice/<slug>/               Same conventions for voice/speech models (RULES.md routing rule;
                                    NOT scanned by pnpm sync — model/ only; retired
                                    `voicemodels/` name must never be recreated)
models_finance/<slug>/             Same conventions for finance models (.agents/rules.md routing
                                    rule; user-directed relocation e.g. ling-3.0-flash-fin;
                                    NOT scanned by pnpm sync — model/ only; wiring pending)
           │
            ▼ pnpm sync (scripts/sync-data.mjs)
src/data/scores.generated.ts      Pre-parsed numbers-only scores bundle
src/data/verified.generated.ts    Newest live findings-file date per slug (`YYYY-MM-DD`, Last-verified display)
src/data/evidence.generated.ts    Benchmark figures cited by 2+ independent files per slug (Verified-benchmarks section)
src/data/sources.generated.ts     Reporting-agent registry + SourceKey union (auto-registered)
                                   + managed RATER_GATE export (single source: scripts/lib/parse.mjs)
model-queue.md                    Single point of reference for model roster + Overall scores (auto-sorted `<Overall> <slug>`; agents read this one file — never scan average.md/findings, RULES.md § Model roster & Overall scores)
public/robots.txt                 Generated Sitemap pointer (absolute URL from SITE_ORIGIN knob)
           │
           ▼ import
src/data/models.ts                 Hydrates MODELS, SOURCES, DIMENSIONS arrays & source selectors
                                   (~370 lines; ModelCategory + isDecisionModel live here)
           │
           ▼ consumed by
src/components/ & src/routes/      UI components (HexRadar, ModelCards, CompareSection) & SSG pages
```

Site origin for prerendered canonical URLs + sitemap is `SITE_ORIGIN`
(`adapters/static/vite.config.ts`, localhost default — deploys must set it).

## Component & Layout Directory

- **Routes (`src/routes/`)**:
  - `layout.tsx`: Layout for plain pages (`/contact`) — theme init + `V2Header`/`V2Footer` chrome.
    The v2 homepage, model profiles, the Providers page and design studies are standalone
    canvases that render their own header/footer (the layout skips them).
  - `index.tsx`: Main comparison page (`/`, v2 design). Self-contained hero, compare, all-models,
    methodology sections + `V2Header`/`V2Footer`.
  - `model/[slug]/index.tsx`: Per-model detail page (`/model/<slug>/`, v2 canvas). Model meta, hex
    bars, best-first reporting table. Per-model `<title>`/description via a `DocumentHead`.
  - `providers/index.tsx`: Providers page (`/providers/`, v2 canvas) — per-provider billing plans
    (each price links its claimant page) and covered models (derived from `idPrefixes`/`hosts`),
    sourced from `src/data/providers.ts` (data curated in `providers/<slug>/meta.json`).
  - `contact/index.tsx`: Contact page (unconfigured inbox — see audit B12) — the only page using
    the shared layout chrome.
  - `design-6sol/`: standalone design-study canvas (own CSS, own theme toggle).

- **Components (`src/components/`)** — v1 chrome was removed 2026-10-20 (the v2 tree is the only
  design; deleting it was user-ordered to kill the double-source confusion):
  - `v2/V2Header.tsx`: Sticky header shared by the whole v2 tree (theme toggle driven by the
    page-owned theme `Signal`, desktop anchor nav — Compare/Scoring/Models/Providers — and a
    mobile hamburger drawer). Takes `theme` + `navBase` ("" on homepage, "/" on subpages).
  - `v2/V2Footer.tsx`: Shared v2 footer.
  - `v2/v2.css`: v2 design tokens (font/color `--color-*` variables).
  - `VendorIcon.tsx`: Brand icons inlined from `vendorIcons.generated.ts` (no `<img>`, no network
    requests).
  - `freeZenLink.tsx`: Links "Free OpenCode Zen tier" strings to the Zen catalog.
  - `router-head.tsx`: Owns `<title>`, canonical link, `og:`/`twitter:` tags, tab favicon
    (`/avatar.png` Vercel PNG) + apple-touch/PWA icon (`/favicon.svg` brand SVG), manifest.

- **Data Layer (`src/data/`, 4 files)**:
  - `models.ts`: Core data logic, zero hardcoded model entries.
   - `scores.generated.ts`: Pre-parsed numbers-only scores as positional `[tool, …, overall]` tuples (wire order in `SCORE_FIELDS`, `scripts/lib/codegen.mjs`), auto-generated by `pnpm sync`.
  - `sources.generated.ts`: Reporting-agent registry + `SourceKey` union, auto-generated by `pnpm sync`.
  - `vendorIcons.generated.ts`: Inlined brand-SVG artwork (hand-maintained; source SVGs vendored under `assets/vendor-icons/`, kept out of `public/` so they are not deployed).

- **Scripts & Admin**:
  - `scripts/sync-data.mjs`: Data sync script executed via `pnpm sync`.
  - `scripts/lib/` (6 modules + 6 `*.test.mjs` suites, zero-dep `node:test`): `parse` (score parsing, `RATER_GATE`), `quarantine` (evidence-free exclusion), `naming` (stems/slugs/scaffold), `validate` (tripwires, meta gates), `average` (means, queue), `codegen` (registry surgery, scores emit, robots.txt).
  - `tasks/`: `research-assign.md` (canonical delegator — the agent resolves its own STEM via its Identity resolution chain), `research.md` (research workflow), `sync-data.md` (sync workflow).
   - `.opencode/plugins/`: OpenCode runtime retry suite (NOT part of the Qwik build — 11 plugins: `budget-retry`, `deepseek-continue-retry`, `fledge-endpoint-retry`, `gpt-sol-budget-retry`, `bang-drop-retry` incl. silent-drop `session.idle` rescan, `api-connect-retry` for DNS/network/provider-transport breaks (incl. gateway "response headers timed out"; any model), `model-turn-retry` for model-turn rejects (any model), and the `provider-*` family on the full 3-shape pattern (payload error / silent `session.idle` / embedded in a generic error) — `provider-content-filter-retry`, `provider-headers-timeout-retry`, `provider-high-demand-retry`, `provider-invalid-request-retry` (2026-10-17, "[Vendor] The request was rejected as invalid", stable tail only; any model); each waits then sends a nudge (`please continue`/`continue`) with a consecutive-failure brake). 2026-10-05 hardening pass on `bang-drop-retry`: atomic mark-before-await check+mark, `pending` unlock at timer fire (before the prompt await, not after), shared `readSessionID()` on idle+error paths with a once-per-restart trace log — conventions documented in `.agents/rules.md` § OpenCode plugin suite.
  - `.agents/`: Rules, tech-stack, rate limit guidelines for agents.
  - `.antigravity/`: Antigravity-specific rules and local cache workflows.
