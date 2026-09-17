# AGENTS.md — modelcomp

Qwik + Tailwind v3 static site comparing AI models. Scores flow from
`model/<slug>/average.md` (parsed at build time); meta is curated in code.

> **CRITICAL DIRECTIVES FOR GEMINI AGENTS:**
> 1. **No Standalone Text Turns:** Never emit text-only preamble responses (e.g., *"Analyzing user instructions..."* or *"Planning next steps..."*) without calling a tool in the SAME turn. Text-only turns cause `400 Bad Request: Requests ending with a model turn are not supported` API crashes.
> 2. **No Mid-Task Interruptions:** Execute multi-step tasks continuously in an unbroken chain of tool calls until 100% finished. Never output progress messages asking *"Should I pause or continue?"* mid-task.
> 3. **Rule:** Always attach tool calls directly to your response turns. Keep all planning inside internal thoughts.

## Must-read before working here

Read all three files in full before making changes. They are short.

- [.agents/tech-stack.md](.agents/tech-stack.md) — locked toolchain (Qwik 1.20, Tailwind v3, Vite 7, pnpm). Do not introduce other frameworks, package managers, or Tailwind v4 syntax.
- [.agents/rules.md](.agents/rules.md) — repo layout, data flow, and structural decisions. Follow them; they keep scores, site, and reports in sync.
- [.agents/gemini-rate-limits.md](.agents/gemini-rate-limits.md) — **mandatory for Gemini agents** (5 RPM / 250 K TPM quotas). Read and apply the 10 operating rules before making any tool call.

## Quick commands (pnpm only)

- `pnpm dev` — dev server (SSR mode)
- `pnpm build.types` — typecheck (`tsc --noEmit`)
- `pnpm build` — full build (types + client + SSR + SSG into `dist/`)
- `pnpm preview` — serve the last build

## Product spec

- `PRD/prd.md` — requirements for the site (§7 covers tooltip behavior).
