# GPT-5.3 Codex Spark — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.3-codex-spark`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark (GPT-5.3-Codex-Spark)
- **Short description:** OpenAI's first real-time coding model — a distilled, Cerebras-accelerated smaller sibling of GPT-5.3-Codex, purpose-built for low-latency interactive coding at 1,000+ tokens/sec (15x the standard model). Research preview from 2026-02-12; reported retired the week of 2026-09-14.
- **Provider / access:** Codex app / CLI / VS Code extension for ChatGPT Pro users (research preview); OpenAI Responses API for design partners; OpenCode Zen `opencode/gpt-5.3-codex-spark` (`https://opencode.ai/zen/v1/responses`).
- **Release / knowledge:** 2026-02-12 (official announcement); knowledge cutoff not published. Retirement reported for the week of 2026-09-14 (OrcaRouter) — Zen still listed it at $1.75/$14.00 as of 2026-10-08.
- **IDs:** `gpt-5.3-codex-spark` (Zen, OpenAI API); no Free ID.
- **Context window:** 128K, text-only at launch (official announcement); BenchLM's tracker lists 256K for the API listing — may have been expanded post-preview.
- **Modalities:** text in / text out; reasoning yes (lightweight default style: minimal targeted edits, tests not run unless asked); tool calls via Codex/Responses API. Explicitly text-only at launch — multimodal input promised for later variants.
- **Pricing (as of 2026-10-09):** $1.75 / 1M input, $14.00 / 1M output, $0.175 cached read (OpenCode Zen listing; OrcaRouter notes it "never got a public [OpenAI] API price" — the Zen listing is the verified price point).
- **Architecture:** proprietary; a distilled smaller version of GPT-5.3-Codex ("JPEG compression for neural weights" per Turing College), served on Cerebras Wafer Scale Engine 3 in a latency-first tier alongside OpenAI's GPU fleet; same safety training as mainline models (below Preparedness Framework cyber/bio thresholds).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: "strong performance at a fraction of GPT-5.3-Codex's duration" (official announcement — the accuracy value itself is chart-only, no verified number in text)
- Tau3 / GDPval-AA / MCP Atlas: no verified public score found
- Tool-call formatting reliability: flagged unreliable in developer reports (JSON schemas missing fields, phantom function parameters — Turing College synthesis of X threads, Feb 2026)

Reasoning / knowledge:

- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found
- Multi-step behavior: drops critical constraints after 6–8 steps in sequential chain tests (Turing College hands-on, Feb 2026)

Coding:

- SWE-Bench Pro: **~56%** (OpenAI launch chart, transcribed by Turing College — vs ~72% for GPT-5.3-Codex; linked to the Scale SWE-Bench Pro public leaderboard)
- Terminal-Bench 2.0: no extracted numeric value (chart-only, "strong" per official text)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found
- Hands-on: 50-second working snake game draft with a collision blind spot + memory leak vs Codex 5.3's correct 6-minute build (Turing College test, Feb 2026)

Long context:

- No long-context retrieval benchmark found; 128K launch window with reported coherence drift toward the window's end on large codebases

Speed:

- **1,000+ output tokens/sec** on Cerebras WSE-3 (official; ~15x GPT-5.3-Codex's ~65–70 tok/s); end-to-end latency work cut WebSocket roundtrip overhead 80%, per-token overhead 30%, TTFT 50%

### Normalized scores (1–100)

- **Tool use: 55/100.** Ships inside Codex's agent harness (app/CLI/IDE) with tool calls over the Responses API, but developer-consensus reports of unreliable structured output (missing JSON fields, phantom parameters) and zero public tool-agent benchmark numbers cap it hard.
- **Reasoning: 52/100.** Distilled from a frontier Codex, but hands-on testing shows constraint drift after 6–8 steps and "plausible-looking" hallucinations on routine tasks; no GPQA/HLE/Index number exists for this checkpoint.
- **Context window: 60/100.** Verified 128K text-only at launch (100K–200K tier = 50–64, above the 128K midpoint); BenchLM's 256K API listing suggests possible post-preview expansion, unconfirmed — scored on the launch spec with a small uplift.
- **Multimodal: 15/100.** Explicitly text-only at launch; multimodal input was promised only for future family members.
- **Coding: 68/100.** The one verified accuracy number — SWE-Bench Pro ~56% (vs 72% for full Codex 5.3) — is a solid mid-tier agentic-engineering score, and its 1,000+ tok/s iteration speed is genuinely productive for prototyping, single-file edits, and frontend loops; capped by hallucinated imports, symptom-patch debugging, and no other extracted benchmark.
- **Cost efficiency: 62/100.** $1.75/$14.00 per 1M on Zen sits near the $3/$15 ≈ 60 anchor — expensive per token for a small model, partly offset by 15x wall-clock speed on small tasks; no Free tier.
- **Overall Score: 50/100.** Half-up mean of (55 + 52 + 60 + 15 + 68) = 50.0 → 50. Best fit: a speed-first draftsman for interactive prototyping and small verifiable edits — pair with a full-capability reviewer model; retired as of September 2026, superseded by GPT-5.6 Sol on the fast lane.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (OpenAI launch announcement, Turing College hands-on analysis transcribing the launch charts, Cerebras blog, OpenCode Zen docs, OrcaRouter retirement note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
