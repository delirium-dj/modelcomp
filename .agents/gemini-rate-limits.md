# Gemini agent — rate-limit operating rules

> **Hard quotas (as of 2026-09-17, free / standard tier):**
> - 5 requests per minute (RPM) ← the critical bottleneck
> - 250 000 input tokens per minute (TPM)
>
> Every tool call (read file, write file, run command, web search…) costs one
> request. At 5 RPM you have **one call every 12 seconds on average**.
> These rules exist to stay inside that budget without stalling.

---

## Rule 1 — Internal planning only (do NOT emit standalone text before tool calls)

Before invoking tools, formulate a plan inside your **internal thought/reasoning block**.
**CRITICAL:** Do NOT output planning text as a user-visible response before calling tools. Emitting standalone text turns without attached tool calls causes Gemini API to fail with `400 Bad Request: Requests ending with a model turn are not supported.`

- Plan your tool calls silently in reasoning.
- Attach tool calls immediately to your response in the very first turn.
- Never write text commentary like "I am planning..." in a separate turn before tool calls.

## Rule 2 — Read each file at most once per conversation turn

Once you have read a file's content it lives in your context window.  
**Do not re-read** the same file a second time in the same turn —
reference your earlier read instead.

This applies to: `AGENTS.md`, `.agents/rules.md`, `.agents/tech-stack.md`,
any `model/<slug>/average.md`, any source file in `src/`.

## Rule 3 — Batch writes into one call per file

Never write a file, then immediately overwrite it with a correction.
Draft the complete final content in your reasoning before calling any write
tool. One write call = one done state.

## Rule 4 — Prefer targeted reads over whole-file reads

If you only need one section of a large file, request only the relevant line
range (use `StartLine` / `EndLine`). For `src/data/models.ts` or
`model-comparison.md` this alone can save 2 000–8 000 input tokens per read.

## Rule 5 — Combine shell commands into a single call

Instead of running three separate `pnpm` or `Get-ChildItem` commands,
chain them with `;` or `&&` so they count as **one request**:

```powershell
# Good — one request
pnpm build.types; pnpm build

# Bad — two requests, burns your quota twice
pnpm build.types
pnpm build
```

## Rule 6 — Use the "check-first, skip-if-known" pattern for listings

Before listing a directory you have already listed in this turn, ask: "Do I
already know the files in this folder from an earlier call?"  If yes, skip the
`list_dir` call entirely and reason from memory.

## Rule 7 — Never emit standalone text turns during active tasks

**CRITICAL GEMINI API REQUIREMENT:**
Gemini API requires alternating `user` -> `model` -> `user` turn sequences. If an agent outputs text without invoking a tool call, the turn completes in `model` role. Any subsequent automated API call with that conversation history fails with:
`400 Bad Request: Requests ending with a model turn are not supported.`

To prevent this:
- **Always attach tool calls** to any output generated during an active task step.
- **Never emit commentary or status updates in a separate text-only turn.**
- Keep status notes inside your tool call arguments or internal thoughts.

## Rule 8 — Token-budget awareness for large context inputs

The 250 K TPM limit matters when reading multiple large files in sequence.
Large files in this repo and their approximate token counts:

| File | ~tokens |
|---|---|
| `model-comparison.md` | ~4 500 |
| `src/data/models.ts` | ~3 000 |
| `model/<slug>/Muse_Spark_1.3.md` | ~1 500 |
| `model/<slug>/average.md` | ~200 |
| `.agents/rules.md` | ~900 |

Reading all 10 `average.md` files in one turn ≈ 2 000 tokens — safe.  
Reading all `Muse_Spark_1.3.md` files + `models.ts` in one turn ≈ 18 000 tokens — safe.  
Reading `model-comparison.md` + all source files repeatedly will approach the
TPM limit if done many times per minute. Stagger reads across turns.

## Rule 9 — Skip terminal build/sync commands to conserve tokens & RPM

Do **NOT** execute `pnpm build`, `pnpm build.types`, `pnpm sync`, or `pnpm dev` inside tool calls while working on tasks. Running build servers or compilers inside agent tool calls consumes precious token context and RPM slots.

Instead:
1. Complete all file creation, editing, and research work autonomously.
2. Delegate the final verification command to the user in your **final turn summary** after all work is 100% complete:
   ```powershell
   pnpm sync && pnpm build.types && pnpm build
   ```

## Rule 10 — Include budget planning in thought reasoning, not separate text outputs

Keep budget calculations inside your internal thought / reasoning block. Do not emit standalone commentary text before tool calls in separate turns, as this causes model turn fragmentation.

## Rule 11 — Zero Mid-Task Interruptions (No Mid-Task Command Prompts)

Agents MUST NOT pause mid-task to emit text asking the user to run commands while a task is still in progress.
Doing so creates text-only turns that interrupt execution and trigger `400 Bad Request: Requests ending with a model turn are not supported` errors.
Work continuously until all requested file updates and research steps are completely done.

## Rule 12 — Eliminate turn-ending role errors ("Requests ending with a model turn are not supported")

To guarantee full compatibility with the Gemini API harness and prevent `400 Bad Request: Requests ending with a model turn are not supported`:
1. Every model turn during an ongoing task **MUST attach at least one tool call**.
2. Never emit preamble text (e.g., *"I will now analyze the files..."*) in a text-only turn without a tool call.
3. Keep all intermediate planning, status updates, and step-by-step progress strictly inside internal `<thought>` / reasoning blocks.

## Rule 13 — Autonomous Multi-Step Execution & Final Command Handover

When given a multi-step or multi-item task (e.g. creating 11 model files or updating benchmark data):
- **Execute all tool calls in an unbroken chain until 100% finished.**
- **NEVER output progress messages asking the user "Should I pause or continue?" mid-task.**
- **Why this works:** The agent runner automatically feeds tool outputs back to you. As long as you issue a tool call in every turn, the workflow runs autonomously without requiring the user to press anything.
- **Final Handover:** Only yield control back to the user when all file/research work is 100% finished. In your final output, report the completed work and provide the exact command for the user to run:
  ```powershell
  pnpm sync && pnpm build.types && pnpm build
  ```

---

## Quick reference — request costs per action

| Action | Requests used | Notes |
|---|---|---|
| Read one file (any range) | 1 | Use line ranges to save TPM |
| Write / create one file | 1 | Draft fully before calling |
| Web search | 1 | — |
| List directory | 1 | Skip if already known |
| Terminal commands (`pnpm sync` / `pnpm build`) | **0 (Skipped)** | Delegate to user at task completion |
| Reasoning / thinking (no tool) | **0** | Use generously inside internal thoughts |

> Spend your token budget on research and file creation. Skip running build commands in tool loops, keep an unbroken tool-calling chain, and provide `pnpm sync && pnpm build.types && pnpm build` to the user upon completion.

---

## Appendix — Special Rule for Gemma Models (12K TPM / 25 RPM Limits)

For Gemma models (`gemma-4-31b-it` and future Gemma models) with stricter constraints.
Scope: this Appendix is Gemma-only. Gemini and all other agents keep the main rules
above plus `tasks/research.md` — nothing here applies to them.

Background: the tripping metric is free-tier *input* tokens/minute (16K). The harness
re-sends full conversation history with every request, so history — not request rate —
is what overflows. RPM caps alone cannot fix this; only a small session can.

1. **Token Limit:** Strictly cap input token usage at **12K input tokens per minute** (safely below the 16K absolute limit).
2. **Request Limit:** Strictly cap request frequency at **25 requests per minute (RPM)** (below the 30 RPM maximum).
3. **Single-folder sessions only:** one slug from `tasks/gemma-queue.md` per fresh
   session, then stop. Never run the audit-all-folders workflow.
4. **Reference diet:** `tasks/gemma-brief.md` is the entire reference. Banned:
   `model-comparison.md`, `src/**`, any `model/**` file, `model-report-TEMPLATE.md`,
   `tasks/research.md`. Targeted reads do NOT substitute — any full-file read
   re-sends its content on every later request that minute.
5. **JSON-only fetching:** web-search snippets may be used for discovery, but FETCH
   ONLY `.json` URLs (raw JSON endpoints/APIs — structured data without HTML
   overhead, parsed directly). NEVER fetch an HTML page: one page can exceed the
   whole minute budget. MAX 5 JSON fetches per folder. If no JSON source yields
   numbers, file `.md.excluded` per the no-data rule.
6. **Draft offline / in reasoning:** Construct findings files and meta structures entirely within internal thought blocks.
7. **Minimal tool footprint:** Combine operations and minimize total tool invocations per turn.
8. **Backoff that works:** on 429/quota error, wait 65s and retry the failed step
   ONCE. A second failure means STOP and report (retries resend the same oversized
   payload into the same minute-window, so rapid retry loops can never succeed).
   Continue the queue in a fresh session.
9. **Time, not tokens, is the budget:** the quota is a rolling per-minute window and
   speed is irrelevant — SLEEP 75s (`Start-Sleep -Seconds 75`) between EVERY two tool
   calls so at most one small request falls in any window. One small request per minute
   stays green indefinitely.
10. **Disk is memory:** fetch outputs stay in history forever, so never re-read them.
    After each fetch, append ONLY extracted `name: value (source)` lines to
    `tasks/gemma-scratch/<slug>.txt`; compose the report from brief + scratch, then
    delete the scratch file. Resume state (= queue checkbox + scratch) survives
    crashed sessions.
11. **Terse outputs:** your output becomes your next request's input — at most one
    short sentence outside tool calls, never restate instructions.
