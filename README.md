# ModelComp — AI model comparison site

Static site comparing AI coding models side by side on what actually matters:
tool use, reasoning, context window, multimodal support, coding ability and cost
efficiency — every dimension normalized to 1–100 from public benchmarks, with an
Overall score per model plus per-reporter grades showing how models rate each other.

- **Live data:** every score on the page is parsed at build time from
  `model/<slug>/` research files — no hardcoded numbers in the UI.
- **Compare view:** pick up to three models (A/B/C), switch the Results source
  between the average mix and any individual reporting agent, inspect the hexagon,
  the exact-scores table and the model cards.
- **Per-model pages:** every model has a page at `/model/<slug>/` with its meta,
  average hexagon and a sortable table of each agent's grades, best grade first.
- **Extras:** dark/light mode toggle, responsive layout with mobile drawer menu,
  installable PWA (manifest + service worker).

## Quick commands (pnpm only)

| Command              | What it does                                                        |
| -------------------- | ------------------------------------------------------------------- |
| `pnpm dev`           | Dev server (SSR mode)                                               |
| `pnpm sync`          | Deterministic data sync: recompute `average.md` files, register new |
|                      | sources, validate findings + `meta.json` (see `tasks/sync-data.md`) |
| `pnpm build.types`   | Typecheck (`tsc --noEmit`, zero errors required)                    |
| `pnpm build`         | Full build: types + client + server + static SSG into `dist/`       |
| `pnpm preview`       | Serve the last production build locally                             |

Standard workflow after any data change: `pnpm sync && pnpm build.types && pnpm build`.

## How data flows

```text
model/<slug>/<Source_Name>.md   one findings file per reporting agent
                  (model card → raw benchmarks → normalized 1–100 scores → signature)
model/<slug>/average.md         arithmetic means, recomputed by `pnpm sync` (never by hand)
model/<slug>/meta.json          curated display metadata (name, blurb, context, pricing…)
        │  auto-discovered at build time via import.meta.glob (no code edits needed)
        ▼
src/data/models.ts              parses scores, hydrates MODELS, derives Results-source order
        ▼
components + routes             hexagon, tables, cards, per-model pages (SSG prerendered)
```

## Methodology (v4, current)

- Six scored dimensions, 1–100 each: Tool use, Reasoning, Context window,
  Multimodal, Coding, **Cost efficiency**.
- **Overall Score = rounded mean of the five quality dimensions — Cost
  efficiency is scored independently and never counts toward Overall.**
  (Price stays visible everywhere: hexagon axis, table columns, sortable,
  Free/Paid badges.)
- Averages: each `average.md` Overall = mean of that model's source Overall scores.
- Details live in `model-comparison.md`, the per-agent template in
  `model-report-TEMPLATE.md`, the signed cross-model log in `model-findings.md`.

## Project layout

```text
model/<slug>/           per-model research (findings per agent + average.md + meta.json)
model/README.md         findings + meta.json schema, add-model / add-agent checklists
src/routes/             pages: index (compare) + model/[slug]/ (per-model detail)
src/components/        CompareSection, HexRadar, ModelCards, ModelSelect,
                       Methodology, Header (+ hamburger), ThemeToggle, Footer
src/data/models.ts      data layer (~260 lines of pure logic, zero per-model entries)
scripts/sync-data.mjs   deterministic sync behind `pnpm sync`
tasks/sync-data.md      the (short) human workflow around the script
.agents/                tech-stack, repo rules, rate-limit notes for AI agents
PRD/prd.md              product requirements (incl. tooltip behavior)
instructions/           build guides consumed along the way (theme, PWA, hamburger)
public/                 PWA manifest, service worker, brand favicon (hero hex art)
dist/ + server/         build output — never hand-edit
REPORT.md               running accomplishment log
```

## Adding data (no `src/` edits needed)

- **New findings file:** drop `<Source_Name>.md` into the model folders it
  evaluated → `pnpm sync` (recomputes averages, auto-registers a new source if
  the filename is new) → `pnpm build`.
- **New model:** create `model/<slug>/` with findings + `meta.json` → `pnpm sync`
  (creates `average.md`) → `pnpm build`. It appears in selectors, cards and gets
  its own `/model/<slug>/` page automatically.

## Stack (locked — see `.agents/tech-stack.md`)

Qwik 1.20 + Qwik City (resumable, file-based routing, static SSG) · Vite 7 ·
TypeScript 5.6 (`strict`) · Tailwind CSS v3.4 · pnpm 9.15.4 · Node ≥ 18.17.
No test framework — verification is `pnpm build.types` + `pnpm build` (+ spot-check `dist/`).
