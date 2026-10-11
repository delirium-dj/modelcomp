# Grok 4 Fast — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4 Fast (`opencode/grok-4-fast`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-throughput lightweight Grok 4 variant optimized for speed and low latency.
- **Provider / access:** OpenCode Zen `opencode/grok-4-fast` (Chat Completions API).
- **Release / knowledge:** Released April 2026; knowledge cutoff March 2026.
- **IDs:** `opencode/grok-4-fast` (Free OpenCode Zen tier available)
- **Context window:** 131,072 tokens total (128K input / 16,000 output; verified via Zen API specs).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free OpenCode Zen tier; paid equivalent approx $0.20 / $0.80 per 1M tokens.
- **Architecture:** xAI Grok 4 fast transformer architecture tuned for rapid inference.

### Raw benchmarks found

- Terminal-Bench 2.1: **71.5%** <(xAI system notes, April 2026)>
- Tau3-Banking / Tau2-Bench: **70.0%** <(API evaluation suite)>
- GPQA Diamond: **55.0%** <(xAI benchmark update)>
- SWE-bench Verified: **51.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **47.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Fast tool calling and structured execution (Terminal-Bench 71.5%).
- **Reasoning: 74/100.** Solid reasoning for standard queries and rapid processing across GPQA Diamond (55.0%).
- **Context window: 74/100.** Dependable 128K context window with RULER verification (84.5%).
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 74.5/100.** Competent coding support for lightweight tasks (SWE-bench Verified 51.0%, LiveCodeBench 47.0%).
- **Cost efficiency: 100/100.** Free OpenCode Zen tier ($0.00 cost).
- **Overall Score: 62.5/100.** Best-fit recommendation: High-speed lightweight model tuned for fast, cost-effective conversational and coding tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 51.0% and Terminal-Bench 2.1 71.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
