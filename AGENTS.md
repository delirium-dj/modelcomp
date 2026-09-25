# AGENTS.md — modelcomp

Qwik + Tailwind v3 static site comparing AI models. Scores flow from
`model/<slug>/average.md` (parsed at build time); meta is curated in code.

> **CRITICAL DIRECTIVES FOR GEMINI AGENTS:**
> 1. **No Standalone Text Turns:** Never emit text-only preamble responses (e.g., *"Analyzing user instructions..."* or *"Planning next steps..."*) without calling a tool in the SAME turn. Text-only turns cause `400 Bad Request: Requests ending with a model turn are not supported` API crashes.
> 2. **Skip Terminal Build/Sync Commands (Save Tokens & RPM):** Do NOT run `pnpm sync`, `pnpm build.types`, `pnpm build`, or `pnpm dev` inside tool calls during task execution. Delegate build and sync commands to the user to conserve token quota and execution time.
> 3. **No Mid-Task Interruptions:** Execute multi-step tasks continuously in an unbroken chain of tool calls until 100% finished or token context is exhausted. Never output mid-task progress commentary or ask the user to run commands mid-task. Keep all planning inside internal thoughts.
> 4. **Post-Task Command Handover:** Yield control back to the user ONLY when all file/research work is 100% finished. In your final turn summary, report the completed work and provide the exact command for the user to run: `pnpm sync && pnpm build.types && pnpm build`.
> 5. **Persistence Until Revoked:** Never stop a research queue early (no "enough files", no `Should I continue?`). The task ends only when the queue is empty or the user explicitly revokes it. After a `400` crash, recovery is re-delegation of the same `tasks/<STEM>.md` file — see `.agents/gemini-rate-limits.md` Rule 5.

## Must-read before working here

Read all four files in full before making changes. They are short.
Precedence order: `RULES.md` first — on any conflict, it wins.

- [RULES.md](RULES.md) — ultimate project rules (research permanence, scoring). Highest authority.
- [.agents/tech-stack.md](.agents/tech-stack.md) — locked toolchain (Qwik 1.20, Tailwind v3, Vite 7, pnpm). Do not introduce other frameworks, package managers, or Tailwind v4 syntax.
- [.agents/rules.md](.agents/rules.md) — repo layout, data flow, and structural decisions. Follow them; they keep scores, site, and reports in sync.
- [.agents/gemini-rate-limits.md](.agents/gemini-rate-limits.md) — **mandatory for Gemini agents** (5 RPM / 250 K TPM quotas). Read and apply the 15 operating rules before making any tool call.

## Quick commands (pnpm only)

- `pnpm dev` — dev server (SSR mode)
- `pnpm build.types` — typecheck (`tsc --noEmit`)
- `pnpm build` — full build (types + client + SSR + SSG into `dist/`)
- `pnpm preview` — serve the last build

## Product spec

- `PRD/prd.md` — requirements for the site (§7 covers tooltip behavior).
