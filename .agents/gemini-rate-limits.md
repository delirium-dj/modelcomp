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

## Rule 9 — Delegate expensive commands to the user

`pnpm build`, `pnpm build.types`, and `pnpm preview` are **slow commands**
that consume one precious RPM slot AND block progress for 10–60 seconds while
the quota window is still counting down.

**Do not run them yourself.** Instead, tell the user exactly what to run and
wait for them to paste the output back:

> "I've finished writing the files. Please run the following in your terminal
> and paste the result here so I can check for errors:
> ```powershell
> pnpm build.types && pnpm build
> ```"

This saves one request slot, keeps the RPM window open for follow-up reads,
and lets the user run the command at their own pace without the agent blocking.

## Rule 10 — Include budget planning in thought reasoning, not separate text outputs

Keep budget calculations inside your internal thought / reasoning block. Do not emit standalone commentary text before tool calls in separate turns, as this can fragment model turns.

## Rule 11 — Ask the user to run anything that has side-effects or takes >5 s

Beyond build commands, the same delegation principle applies to:

| Command | Why to delegate |
|---|---|
| `pnpm build` / `pnpm build.types` | Slow; blocks RPM window |
| `pnpm preview` / `pnpm dev` | Long-running server; not a one-shot call |
| `git add` / `git commit` / `git push` | Destructive; user must approve explicitly |
| `pnpm install` / dependency updates | Mutates `pnpm-lock.yaml`; user consent required |

Template for delegating:

> "**Action needed by you:** Please run the command(s) below, then paste the
> terminal output back so I can continue."

Never auto-run any command in this table, even if it appears safe.

## Rule 12 — Avoid turn-ending role errors ("Requests ending with a model turn are not supported")

To guarantee full compatibility with the Gemini API harness:
1. Every model turn must contain **tool calls** if the task is ongoing, OR a **final user response** if the turn is complete.
2. Never send text asking for user confirmation without completing the immediate action or clearly ending the turn.
3. If delegating a command to the user, ensure all file edits are finished before outputting the final user message with the command instructions.

## Rule 13 — Autonomous Multi-Step Execution (Zero Mid-Task Interruption)

When given a multi-step or multi-item task (e.g. creating 11 model files):
- **Execute all tool calls in an unbroken chain until 100% finished.**
- **NEVER output progress messages asking the user "Should I pause or continue?" mid-task.**
- **Why this works:** The agent runner automatically feeds tool outputs back to you. As long as you issue a tool call in every turn, the workflow runs autonomously without requiring the user to press anything.
- **Only yield control back to the user when the entire requested job is completely finished.**

---

## Quick reference — request costs per action

| Action | Requests used | Notes |
|---|---|---|
| Read one file (any range) | 1 | Use line ranges to save TPM |
| Write / create one file | 1 | Draft fully before calling |
| Run one terminal command | 1 | Chain with `;` to batch |
| Web search | 1 | — |
| List directory | 1 | Skip if already known |
| Multiple actions in one batched shell call | 1 | Best way to save RPM |
| Ask user to run a command (delegation) | **0** | Preferred for slow/risky commands |
| Reasoning / thinking (no tool) | **0** | Use generously |

> Spend your 0-cost budget — reasoning and user delegation — as much as
> possible. Every tool call you avoid is 12 seconds of quota returned.
