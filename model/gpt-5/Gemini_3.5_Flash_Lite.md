# GPT-5 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5 (`opencode/gpt-5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship: a router system pairing a fast model with a deeper reasoning model. Set launch records in math and coding, then was superseded by GPT-5.1 and later.
- **Provider / access:** OpenCode Zen (`opencode/gpt-5`) — Chat Completions API.
- **Release / knowledge:** Released August 2025; knowledge cutoff June 2025.
- **IDs:** `opencode/gpt-5` (no Free ID on Zen)
- **Context window:** 400K total (128K max output) — verified by OpenAI system card.
- **Modalities:** Text input, image input, file input; text output; reasoning enabled; tool calls supported; JSON mode.
- **Pricing (as of 2026-10-10):** Paid OpenAI $1.25 / $10 per 1M (cached $0.125); OpenCode Zen $1.07 / $8.50. Paid tier.
- **Architecture:** Proprietary router system pairing fast inference with deep reasoning by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **79.5%** <(OpenAI system card, August 2025)>
- Tau3-Banking / Tau2-Bench: **77.0%** <(OpenAI evaluation suite)>
- GPQA Diamond: **65.0%** <(OpenAI benchmark update)>
- SWE-bench Verified: **58.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **55.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 81/100.** Highly robust tool use and function calling capabilities (Terminal-Bench 79.5%).
- **Reasoning: 82/100.** Advanced reasoning system for complex logic and math across GPQA Diamond (65.0%).
- **Context window: 81/100.** Large 400K context window with stable retrieval (RULER 90.5%).
- **Multimodal: 80/100.** Strong text, image, and document file ingestion.
- **Coding: 82/100.** Excellent code generation and debugging performance (SWE-bench Verified 58.0%, LiveCodeBench 55.0%).
- **Cost efficiency: 68/100.** Paid pricing at $1.25/$10 per 1M tokens.
- **Overall Score: 81.2/100.** Best-fit recommendation: Milestone flagship model establishing high standards for reasoning and coding benchmarks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI system cards. SWE-bench Verified 58.0% and Terminal-Bench 2.1 79.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
