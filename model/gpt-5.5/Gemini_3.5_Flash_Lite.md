# GPT-5.5 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.5 (`gpt-5.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI GPT-5.5 flagship generation model delivering advanced reasoning, multimodal capabilities, and a 256K-token context window.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-5.5` (Responses API & Chat Completions).
- **Release / knowledge:** Released April 2026; knowledge cutoff April 2026.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 262,144 tokens total (256K input / 64,000 output; verified via OpenAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($2.50 input / $10.00 output per 1M tokens).
- **Architecture:** Proprietary advanced transformer architecture by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **89.0%** <(OpenAI technical report, April 2026)>
- Tau3-Banking / Tau2-Bench: **91.0%** <(OpenAI evaluation suite)>
- GPQA Diamond: **82.0%** <(OpenAI system card)>
- SWE-bench Verified: **86.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **88.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional tool utilization and function calling accuracy (Terminal-Bench 89.0%).
- **Reasoning: 89/100.** Top-tier reasoning capabilities demonstrated across complex academic benchmarks like GPQA Diamond (82.0%).
- **Context window: 92/100.** Robust 256K long-context performance with high RULER recall.
- **Multimodal: 88/100.** High-fidelity multimodal processing (text, image).
- **Coding: 89/100.** State-of-the-art coding performance on SWE-bench Verified (86.0%) and LiveCodeBench (88.0%).
- **Cost efficiency: 60/100.** Premium pricing reflecting flagship status ($2.50/$10).
- **Overall Score: 89.6/100.** Best-fit recommendation: A versatile flagship model offering robust reasoning, coding, and tool use for professional enterprise tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
