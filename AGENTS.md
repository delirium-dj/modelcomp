# AGENTS.md — modelcomp

Qwik + Tailwind v3 static site comparing AI models. Scores flow from
`model/<slug>/average.md` (parsed at build time); meta is curated in code.

> **CRITICAL DIRECTIVES FOR GEMINI AGENTS:**
> 1. **No Standalone Text Turns:** Never emit text-only preamble responses (e.g., *"Analyzing user instructions..."* or *"Planning next steps..."*) without calling a tool in the SAME turn. Text-only turns cause `400 Bad Request: Requests ending with a model turn are not supported` API crashes.
> 2. **Skip Terminal Build/Sync Commands (Save Tokens & RPM):** Do NOT run `pnpm sync`, `pnpm build.types`, `pnpm build`, or `pnpm dev` inside tool calls during task execution. Delegate build and sync commands to the user to conserve token quota and execution time.
> 3. **No Mid-Task Interruptions:** Execute multi-step tasks continuously in an unbroken chain of tool calls until 100% finished or token context is exhausted. Never output mid-task progress commentary or ask the user to run commands mid-task. Keep all planning inside internal thoughts.
> 4. **Post-Task Command Handover:** Yield control back to the user ONLY when all file/research work is 100% finished. In your final turn summary, report the completed work and provide the exact command for the user to run: `pnpm sync && pnpm build.types && pnpm build` (Windows: `pnpm sync && pnpm build.types:direct && pnpm build:direct` — bare shims exceed cmd.exe's line limit).
> 5. **Persistence Until Revoked:** Never stop a research queue early (no "enough files", no `Should I continue?`). The task ends only when the queue is empty, an explicit kickoff cap is reached, or the user explicitly revokes it. After a `400` crash, recovery is re-delegation of `tasks/research-assign.md` resolving the same STEM (kickoff line unchanged) — see `.agents/gemini-rate-limits.md` Rule 5.
> 6. **No Self-Investigation:** Never scan `model/` folders, `average.md` files, or findings/research files to learn the model roster or scores — read `model-queue.md` (repo root, one file, auto-generated) instead. Your own STEM comes from the kickoff message, never from the repo (see `RULES.md` § *Model roster & Overall scores*).
> 7. **Batch Research Scope:** A research delegation is a queue, not one report — write your `<STEM>.md` in EVERY `model/<slug>/` folder missing it, in `model-queue.md` order. Your own model folder is one queue item, never the assignment. Never claim completion after one file; done means the missing-set is empty (or an explicit kickoff cap is reached). See `tasks/research-assign.md` § *Completion test* and `RULES.md` § *Research rules* — **Batch scope**.

## Must-read before working here

Read all five files in full before making changes. Start with the project map (cheapest context), then the rest.
Precedence order: `RULES.md` first — on any conflict, it wins.

- [.antigravity/history/project-map.md](.antigravity/history/project-map.md) — read FIRST: the GPS map (data flow, routes, components, scripts). Gains full context for ~3 KB instead of scanning the repo.
- [RULES.md](RULES.md) — ultimate project rules (research permanence, scoring, identity rules). Highest authority.
- [.agents/tech-stack.md](.agents/tech-stack.md) — locked toolchain (Qwik 1.20, Tailwind v3, Vite 7, pnpm). Do not introduce other frameworks, package managers, or Tailwind v4 syntax.
- [.agents/rules.md](.agents/rules.md) — repo layout, data flow, and structural decisions. Follow them; they keep scores, site, and reports in sync.
- [.agents/gemini-rate-limits.md](.agents/gemini-rate-limits.md) — **mandatory for Gemini agents** (5 RPM / 250 K TPM quotas). Read and apply the 15 operating rules before making any tool call.

**Tiered reading (context-budget rule):** the full corpus above is ~15 K tokens on top of this file. Research-task runtimes with sub-200 K context SHOULD NOT read it all — run on [tasks/research-brief.md](tasks/research-brief.md) instead (kickoff line `BRIEF: small-context`; ~5 K tokens, same rules, `RULES.md` stays the authority). Big-context models keep the full corpus.

## Version dots in names (agents keep missing this — read before creating any folder or file)

- **Folder slugs: version numbers use `.` not `-`** (`gpt-5.5`, `gpt-5.4-mini`,
  never `gpt-5-5`, `gpt-5-4-mini`). Normalize every freshly derived slug
  (each digit-hyphen-digit join becomes a dot, unless the second digit group
  is a param size — digits followed by `b`/`B`, e.g. `qwen-3.5-27b`, `qwen-3.5-0.8b`)
  and **check for an existing dotted folder first** — a hyphen variant is a
  forbidden duplicate: never scaffolded, never written to; merge into the dotted
  folder instead. `pnpm sync` FAILs hyphen variants; the pre-commit hook blocks
  staging them. Full rule: `RULES.md` § *Slug identity*.
- **Findings-file stems: version numbers use `.` not `_`** between digits
  (`Laguna_XS_2.1.md`, never `Laguna_XS_2_1.md`) — same duplicate rule, param
  sizes stay underscored. Full rule: `RULES.md` § *Findings-stem identity*.
- **Deleted phantom folders never come back.** Twelve phantom/duplicate
  folders (including `claude-sonnet-5.4`, `claude-opus-4.4`,
  `claude-opus-3.7`, `qwen-3.8-325b`) were deleted from disk and git on
  2026-11-03; their names, spelling variants (`-`/`_`, case, vendor prefix)
  and phantom-family suffixes FAIL `pnpm sync` and are blocked by the
  pre-commit hook. Authoritative roster section: "Deleted phantom model
  folders" in `model-aliases.generated.md`. Never restore from git history.
  Full rule: `RULES.md` § *Deleted phantom folders*.

## Temporary files (every agent, no exceptions)

- **Every temporary file or scratch script you create goes ONLY in the repo-root `temp/` folder** (`temp/<file>`). Never write scratch files (`.ps1`/`.cjs`/`.txt` listings, dumps, drafts) into the repo root, `scripts/`, or any other location; never create `.temp/` or `tmp/` variants. `temp/` is git-ignored and its contents are freely deletable (exempt from the deletion-approval popup). Full rule: `RULES.md` § *Agent temporary-files rule*.

## Web research when search fails (402 / quota / outage)

- **Never give up on the web and never raid the repo.** Web search down → one
  simpler retry, then `webfetch` the known official URL, then shell `curl`
  (or `Invoke-WebRequest` in Windows PowerShell). Cite only URLs actually
  fetched; `Method:` names the fallback used.
- **Local files are never evidence** for scores, benchmarks, pricing, context
  windows, or claims — peer findings, `model-comparison.md`,
  `src/data/*.generated.ts`, `meta.json`, `average.md` are procedure inputs
  only. No retrievable evidence → `no verified public score found` or
  `.md.excluded` with the access failure noted; a global outage →
  `WEB-ACCESS-BLOCKED` summary in the final report, never invented output.
- Full rule (ultimate authority): `RULES.md` § *Web-research fallback*.

## Model roster + Overall scores — single point of reference (no self-investigation)

- **`model-queue.md` (repo root, auto-generated by `pnpm sync`, do not hand-edit)** — one `<Overall> <slug>` line per model, highest first. This ONE file answers every "which models are in the dataset" / "what is X's overall score" question. Read it (a few hundred tokens) instead of listing `model/`, scanning `average.md` files, or opening findings/research files. Your own STEM comes from the kickoff message — never derived from the repo (identity resolution: `tasks/research-assign.md`). Full rule: `RULES.md` § *Model roster & Overall scores*.
- **`model-aliases.generated.md` (repo root, auto-generated by `pnpm sync`, do not hand-edit)** — the ONE roster of forbidden/redirected identities: parked slugs, deleted phantom model folders (removed from disk + git, never restored), merged duplicate slugs, retired vendor aliases, merged duplicate stems, alias families. Anything listed there is never scaffolded, queued, researched, or written to. Never restate this roster in prose — point here (restatements drift).

## Quick commands (pnpm only)

- `pnpm dev` — dev server (SSR mode)
- `pnpm build.types` — typecheck (`tsc --noEmit`)
- `pnpm build` — full build (types + client + server + SSG into `dist/`)
- `pnpm preview` — serve the last build
- `pnpm test` — zero-dep parser/validation suite (`scripts/lib/*.test.mjs`, Node built-in runner)
- Windows: bare `tsc`/`vite` shims can exceed cmd.exe's ~8k line limit
  (`The input line is too long`, exit 255) — use `pnpm build.types:direct`,
  `pnpm build:direct`, `pnpm dev:direct` (same steps via `node <bin>`)


