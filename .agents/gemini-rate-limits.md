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

## Rule 14 — Persistence: never stop early (only an empty queue or user revocation ends the task)

No prompt rule can resurrect a session after the API has already failed it
with `400 Bad Request: Requests ending with a model turn are not supported`
(a dead session cannot self-resume — recovery is always a fresh invocation,
see Rule 15). What this rule does is eliminate every *voluntary* stop, so the
only way the task ends is queue-empty or the user explicitly revoking it:
- **Never treat a quiet period, a rate-limit wait (5 RPM), or a long queue as
  a reason to stop.** Waiting is done silently inside reasoning — never emit
  filler text ("Waiting...", "Still working...", "Let me pause...") while
  throttled; filler is a text-only turn and triggers the exact crash above.
- **Forbidden mid-task outputs** (each one is a text-only turn that kills the
  session): `Should I continue / pause?`, `Want me to proceed?`,
  mid-task summaries (`Done so far: ...`), `Ready for the next batch?`,
  and any question or status note without an attached tool call.
- **Completion condition is mechanical, not a judgement call:** the task is
  done only when re-auditing `model/` shows zero folders missing your
  `<STEM>.md` (or `.md.excluded` decision) file. Anything else — "enough
  files", "diminishing returns", "context is getting long" — is NOT a stop
  condition. Continue until the queue is empty or the user writes an explicit
  revocation.
- **Final turn only when the queue is empty.** Until then, every turn MUST
  carry at least one tool call (Rule 12).

## Rule 15 — Crash recovery is re-delegation (resume protocol)

If a previous session died with `Requests ending with a model turn are not
supported`, the recovery is NOT performed by the dead session — it is
performed by the next invocation of the same delegator file. Both sides:
- **Agent side (you):** make every invocation resume-safe: incremental save
  (one file written before advancing, per `tasks/research.md` Step 3),
  never overwrite/edit/delete existing files, skip folders already containing
  your `<STEM>.md`. Then any fresh start automatically continues where the
  crashed session left off — never restart finished folders.
- **Orchestrator side (user):** on a `400` crash, simply delegate the SAME
  `tasks/<STEM>.md` file again. The new session re-audits `model/`, skips
  everything already written, and continues the queue. Repeat until the queue
  is empty. No other recovery step exists.

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
