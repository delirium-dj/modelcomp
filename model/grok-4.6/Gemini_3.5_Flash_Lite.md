# Grok 4.6 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.6 (`grok-4.6`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work with a 500K-token context window.
- **Provider / access:** xAI API / OpenCode Zen `xai/grok-4.6` (Messages API & Chat Completions).
- **Release / knowledge:** Released March 2026; knowledge cutoff March 2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens total (verified via xAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($2.00 input / $6.00 output per 1M tokens with prompt caching).
- **Architecture:** Proprietary xAI transformer architecture.

### Raw benchmarks found

- Terminal-Bench 2.1: **87.0%** <(xAI technical update, March 2026)>
- Tau3-Banking / Tau2-Bench: **89.0%** <(xAI evaluation suite)>
- GPQA Diamond: **78.0%** <(xAI benchmark update)>
- SWE-bench Verified: **82.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **85.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Advanced tool execution and robust function calling capabilities (Terminal-Bench 87.0%).
- **Reasoning: 86/100.** High-level reasoning performance across technical domains like GPQA Diamond (78.0%).
- **Context window: 95/100.** 500K context window support with excellent long-context retention and RULER verification.
- **Multimodal: 85/100.** Strong text and image input processing.
- **Coding: 84/100.** Excellent coding benchmarks on SWE-bench Verified (82.0%) and LiveCodeBench (85.0%).
- **Cost efficiency: 75/100.** Competitive pricing with prompt caching discounts ($2/$6).
- **Overall Score: 87.6/100.** Best-fit recommendation: A high-performance flagship model for advanced coding, agentic workflows, and long-context analysis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
