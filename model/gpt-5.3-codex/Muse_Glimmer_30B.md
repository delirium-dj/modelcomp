# GPT-5.3 Codex — findings by Muse Glimmer 30B

- Source: OpenAI/GPT-5.3 Codex, e.g. OpenAI (`opencode/gpt-5.3-codex`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic coding model merging GPT-5.2 Codex with GPT-5.2-class reasoning; 400K/128K context, deprecated specialist for long-running software engineering and computer work.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.3-codex` (deprecated). Chat Completions API.
- **Release / knowledge:** Released 2026-02-24; knowledge cutoff not stated publicly.
- **IDs:** `opencode/gpt-5.3-codex` — no Free ID on Zen
- **Context window:** 400,000 total (128,000 out) — verified via meta.json and system card
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No image/audio/video input per meta.
- **Pricing (as of 2026-10-20):** Paid $1.75 / 1M input, $14.00 / 1M output; $0.175 / 1M cached input. Deprecated.
- **Architecture:** Proprietary; parameters not published.

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI: GPT-5.3-Codex System Card)
- OSWorld-Verified: **64.7%** (OpenAI: GPT-5.3-Codex System Card)
- τ²-bench results: **86%** (Artificial Analysis model benchmarks)
- Gert Labs: **57.47%** (Gert Labs rankings)
- JobBench: **33.7%** (JobBench paper)

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (Artificial Analysis model benchmarks)
- HLE: **42.5%** (Artificial Analysis model benchmarks)
- AA-LCR: **83.3%** (Artificial Analysis model benchmarks)
- CritPt: **16.9%** (Artificial Analysis model benchmarks)
- Artificial Analysis Intelligence Index: **32.5%** (Artificial Analysis model benchmarks)
- AA-Omniscience Accuracy / Hallucination Rate: **52.9% / 89.2%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified: **85%** (OpenAI: GPT-5.3-Codex System Card)
- SWE-bench Pro: **56.8%** (OpenAI: GPT-5.3-Codex System Card)
- SWE-Rebench: **58.2%** (SWE-Rebench leaderboard)
- LiveCodeBench (Vals): **87.3%** (Vals AI: LiveCodeBench leaderboard)
- Vibe Code Bench: **61.77%** (Vals AI: Vibe Code Bench v1.1)
- SWE-bench (Vals): **78.0%** (Vals AI: SWE-bench leaderboard)

Long context:

- No long-context retrieval reported at 400K+; context window is 400K total.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 77.3% and τ² 86% indicate strong agent/tool execution; OSWorld 64.7% caps near-frontier but below 88%+ frontier ref.
- **Reasoning: 84/100.** GPQA 91.5% is frontier-level; HLE 42.5% and CritPt 16.9% moderate the score.
- **Context window: 78/100.** 400K total / 128K out places in 200K–500K tier; measured limit ~400K, below 1M leaders.
- **Multimodal: 15/100.** Text-only per meta.json; no image/audio/video input.
- **Coding: 86/100.** SWE-Verified 85% and LiveCodeBench 87.3% are strong; SWE-Pro 56.8% prevents 90+ rating.
- **Cost efficiency: 70/100.** $1.75/$14 pricing with cached input; expensive for legacy/deprecated status.
- **Overall Score: 68/100.** Mean of five quality dims (78+84+78+15+86)/5 = 68.2 → 68. Deprecated coding specialist; use only for legacy agent workflows.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
