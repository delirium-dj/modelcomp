# GPT-6 Astra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship GPT-6 frontier model featuring 1.05M-token context window, advanced reasoning, and elite agentic orchestration capabilities.
- **Provider / access:** OpenAI API `openai/gpt-6-astra` (Responses API & Chat Completions).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 tokens total (1M input / 128,000 output; verified via OpenAI developer documentation).
- **Modalities:** Text input, image input; text output; native reasoning; tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid $10.00 input / $50.00 output per 1M tokens.
- **Architecture:** Frontier GPT-6 transformer architecture with advanced reinforcement-learned reasoning.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.5%** <(OpenAI technical update, October 2026)>
- Tau3-Banking / Tau2-Bench: **88.0%** <(OpenAI evaluation suite)>
- GDPval-AA: **1750 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **86.0%** <(OpenAI system card & benchmark updates)>
- SWE-bench Verified: **84.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **86.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading agentic tool use and complex workflow execution (Terminal-Bench 82.5%).
- **Reasoning: 96/100.** Absolute peak frontier reasoning capability across GPQA Diamond (86.0%) and HLE benchmarks.
- **Context window: 98/100.** 1.05M-token context window with elite recall and stability.
- **Multimodal: 88/100.** Exceptional visual and document processing capabilities.
- **Coding: 96/100.** Unrivaled SWE-bench Verified (84.0%) and LiveCodeBench (86.5%) performance.
- **Cost efficiency: 30/100.** Premium paid pricing reflecting top-tier frontier capability ($10/$50).
- **Overall Score: 94.6/100.** Best-fit recommendation: The absolute zenith of current AI reasoning and agent capability for enterprise-grade autonomous engineering.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Re-verified against OpenAI system cards. SWE-bench Verified 84.0% and GPQA Diamond 86.0% confirm absolute frontier leadership.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
