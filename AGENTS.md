# AGENTS.md — modelcomp

Qwik + Tailwind v3 static site comparing AI models. Scores flow from
`model/<slug>/average.md` (parsed at build time); meta is curated in code.

## Must-read before working here

Read both files in full before making changes. They are short.

- [.agents/tech-stack.md](.agents/tech-stack.md) — locked toolchain (Qwik 1.20, Tailwind v3, Vite 7, pnpm). Do not introduce other frameworks, package managers, or Tailwind v4 syntax.
- [.agents/rules.md](.agents/rules.md) — repo layout, data flow, and structural decisions. Follow them; they keep scores, site, and reports in sync.

## Quick commands (pnpm only)

- `pnpm dev` — dev server (SSR mode)
- `pnpm build.types` — typecheck (`tsc --noEmit`)
- `pnpm build` — full build (types + client + SSR + SSG into `dist/`)
- `pnpm preview` — serve the last build

## Product spec

- `PRD/prd.md` — requirements for the site (§7 covers tooltip behavior).
