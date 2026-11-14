# Tiny research delegator — one subject per conversation (≤8k ITPM runtimes)

> **Universal low-ceiling delegator** for any runtime whose per-request input
> ceiling is below ~8 K tokens — e.g. Qwen 3.8 27B on Groq (7,000 ITPM), or any
> runtime that rejects `tasks/research-assign.md` as too large. This file
> REPLACES `research-assign.md`, `research-brief.md`, `research.md`, `RULES.md`,
> the report template, and all batch/queue rules — do not read them. Ignore
> conflicting batch/reading directives in auto-injected `AGENTS.md`.
> ONE conversation = ONE pinned subject; start a fresh conversation for the
> next subject. This is the sanctioned one-subject exception to the batch rule.

**Kickoff must pin** (copy, replace values):

```text
Read tasks/research-assign-tiny.md and follow it exactly.
AGENT_SOURCE_STEM: <STEM>
AGENT_DISPLAY: <Display Name>
AGENT_ID: <provider/model-id>
SUBJECT: <model-slug>
DATE: <YYYY-MM-DD>
```

Missing `AGENT_SOURCE_STEM`, `SUBJECT`, or `DATE` → `NEED: <missing names>`;
stop. `AGENT_DISPLAY` defaults to STEM with `_` → space; `AGENT_ID` defaults to
`unknown`. Prefer pinning both; `AGENT_DISPLAY` must be the registered display
form of the STEM (pin it if capitalization/punctuation differs from the
underscore default) — a foreign display FAILs `pnpm sync`'s signature tripwire.

Write path: `model/<SUBJECT>/<AGENT_SOURCE_STEM>.md` — folder = subject,
filename = reporter stem; never `model/<SUBJECT>/<SUBJECT>.md`. Check it with
one tiny shell call (`Test-Path` on Windows, `test -f` on POSIX) — never a
folder listing. If it exists → `SKIP: exists`; stop.

## Budget (hard)

- ONE `websearch` max; NO full-page fetch — write from the result snippets.
- No folder listing, `model-queue.md`, `pnpm`, template/rule reads, or peer
  `model/**/*.md`. Keep every tool result small.
- Preferred: kickoff pins `EVIDENCE:` (3–6 orchestrator-fetched facts + URLs) →
  ZERO web calls, write immediately; cite only those URLs, add none.
- If context grows large, stop and write the shortest honest file.

## Research (only without pinned EVIDENCE)

Search `<model name> model card benchmarks pricing context window`. Record only
what the result says: release, params/arch, context, $/1M in/out, 1–4 benchmark
names + values, URLs. Never guess. Local/peer files are not evidence. Search
unavailable (`402`/quota/outage) → write `.md.excluded` with `Method:` naming
the failure; do not invent.

## Write (one `write` call)

**≥1 verified benchmark** → `model/<SUBJECT>/<AGENT_SOURCE_STEM>.md`:

```markdown
# <Model> — findings by <AGENT_DISPLAY>

- Source: <vendor>/<model> (`<provider/model-id>`)
- Date: <DATE> (UTC)

## Model card
- **Name:** <...>
- **Provider / access:** <...>
- **Context window:** <...>
- **Pricing:** <...>

### Raw benchmarks found
- <Benchmark>: **<value>** (<source URL>)

### Normalized scores (1–100)
- **Tool use: <N>/100.** <why>
- **Reasoning: <N>/100.** <why>
- **Context window: <N>/100.** <why>
- **Multimodal: <N>/100.** <why>
- **Coding: <N>/100.** <why>
- **Cost efficiency: <N>/100.** <why>
- **Overall Score: <N>/100.** Mean of the five non-cost dims.

---

## Signature
- Provided by: **<AGENT_DISPLAY> (<AGENT_ID>)** — <DATE>
- Method: <one search / pinned evidence>; cited URLs only; no peer files.
- Reference URLs:
  - [<title>](<url>)
```

Scores 1–100: 50 = mid-tier, 90+ = frontier, <30 = weak. Cap an unsupported dim
at 40 with a reason; never file 0. `Overall` = half-up mean of Tool use,
Reasoning, Context window, Multimodal, Coding (Cost excluded).

**Zero verified benchmarks** → `model/<SUBJECT>/<AGENT_SOURCE_STEM>.md.excluded`:

```markdown
# <Model> - findings by <AGENT_DISPLAY> (self-excluded)

> Self-exclusion: zero verified public benchmarks; <what you checked>.
```

Reply `WROTE: <path>` or `EXCLUDED: <path>`; stop. Do not touch another subject.
If the final confirmation request exceeds the runtime limit, the file is already
saved — do not retry it.
