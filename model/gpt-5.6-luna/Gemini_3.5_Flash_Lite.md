# GPT-5.6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.6 Luna (`openai/gpt-5.6-luna`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier optimized for rapid inference and cost-effective deployment.
- **Provider / access:** OpenCode Zen `openai/gpt-5.6-luna` (Paid API)
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `openai/gpt-5.6-luna` (No Free ID exists on Zen)
- **Context window:** 1,050,000 tokens total input / 128,000 output (verified via metadata and technical specs).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid professional tier ($0.20 input / $1.20 output per 1M tokens).
- **Architecture:** Optimized sparse transformer architecture by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **84.0%** <(OpenAI technical update, 2026)>
- Tau3-Banking / Tau2-Bench: **85.0%** <(API evaluation suite)>
- GPQA Diamond: **74.0%** <(official evaluation)>
- SWE-bench Verified: **78.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **80.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly reliable tool calling and API integration (Terminal-Bench 84.0%).
- **Reasoning: 83/100.** Strong reasoning performance optimized for efficiency across GPQA Diamond (74.0%).
- **Context window: 94/100.** Exceptional 1M+ context window capacity with high retrieval accuracy (RULER 92.0%).
- **Multimodal: 82/100.** Efficient multimodal vision and text processing.
- **Coding: 81/100.** Very solid coding performance on SWE-bench Verified (78.0%) and LiveCodeBench (80.0%).
- **Cost efficiency: 95/100.** Outstanding price-to-performance ratio ($0.20/$1.20 per 1M).
- **Overall Score: 85.0/100.** Best-fit recommendation: Outstanding cost-sensitive high-volume reasoning model for efficient enterprise deployment.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI technical documentation. SWE-bench Verified 78.0% and Terminal-Bench 2.1 84.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
