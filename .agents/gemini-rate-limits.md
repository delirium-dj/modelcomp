# Gemini agent — rate-limit operating rules

> **Hard quotas (as of 2026-09-17, free / standard tier):**
> - 5 requests per minute (RPM) ← the critical bottleneck
> - 250 000 input tokens per minute (TPM)
>
> Every tool call (read, write, command, search…) costs one request.
> At 5 RPM you have **one call every 12 seconds on average**.

---

## Rule 1 — A tool call in EVERY turn (crash guard)

The Gemini API fails with `400 Bad Request: Requests ending with a model turn
are not supported` on any text-only turn. Therefore, during an active task:

- Plan silently in your internal reasoning — never emit preamble, status, or
  filler (`"Analyzing..."`, `"Waiting..."`, `"Should I continue?"`) without
  an attached tool call. Every turn carries ≥1 tool call, including the first.
- Keep planning, budget math, and progress strictly inside reasoning blocks.
- Never pause mid-task to ask the user to run commands or to ask whether to
  continue — work continuously until the queue is empty (Rule 5).

## Rule 2 — Read economy (TPM)

- Read each file at most once per turn; prefer targeted ranges (`StartLine` /
  `EndLine`) over whole files. Reading only the single Overall line of
  `average.md` for ordering is allowed (not a Zero-Influence violation).
- Skip re-listing directories you already know this turn; reason from memory.
- Large-file costs: `model-comparison.md` ~4 500 tokens, `models.ts` ~3 000,
  findings file ~1 500, `average.md` ~200. Stagger big reads across turns.

## Rule 3 — Batch writes and shell calls (RPM)

- Draft each file fully before writing — one write call = one done state,
  never write-then-overwrite. Chain shell commands with `;` / `&&` into a
  single call.

## Rule 4 — No builds mid-task; final handover only

Do **NOT** run `pnpm sync`, `pnpm build.types`, `pnpm build`, or `pnpm dev`
inside tool calls. Finish all file work autonomously, then hand over in the
final summary:
```powershell
pnpm sync && pnpm build.types && pnpm build
```

## Rule 5 — Never stop early; recovery is re-delegation

- The task ends only when re-auditing `model/` shows zero folders missing
  your `<STEM>.md` (or `.md.excluded` decision) — or the user explicitly
  revokes it. "Enough files", quiet periods, and rate-limit waits are NOT
  stop conditions; wait silently inside reasoning.
- Make every invocation resume-safe: incremental save (one file before
  advancing, per `tasks/research.md` Step 3), never overwrite/edit/delete,
  skip folders already containing your file. After a `400` crash the
  orchestrator simply delegates the SAME `tasks/<STEM>.md` again and the new
  session continues where the dead one left off.

---

## Quick reference — request costs per action

| Action | Requests | Notes |
|---|---|---|
| Read one file (any range) | 1 | Targeted ranges save TPM |
| Write / create one file | 1 | Draft fully before calling |
| Web search | 1 | — |
| List directory | 1 | Skip if already known |
| Terminal builds (`pnpm sync` / `pnpm build`) | **0 (Skipped)** | Delegate to user at completion |
| Reasoning / thinking (no tool) | **0** | Use generously, inside reasoning |
