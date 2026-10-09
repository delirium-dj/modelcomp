# GPT-5.6 Terra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, advanced tool usage, long-context reasoning, and elite code synthesis.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-5.6-terra` (Chat Completions & Responses API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 max output; verified via OpenAI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode; reasoning effort control.
- **Pricing (as of 2026-10-09):** Paid professional tier ($10.00 input / $40.00 output per 1M tokens).
- **Architecture:** Frontier multimodal transformer architecture with deep reasoning engines by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **79.5%** <(OpenAI technical update, July 2026)>
- Tau3-Banking / Tau2-Bench: **85.5%** <(OpenAI evaluation suite)>
- GPQA Diamond: **83.5%** <(OpenAI benchmark update)>
- SWE-bench Verified: **81.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **83.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading agentic tool orchestration and API calling (Terminal-Bench 79.5%).
- **Reasoning: 95/100.** State-of-the-art reasoning across all rigorous benchmarks including GPQA Diamond (83.5%).
- **Context window: 95/100.** 1M context window with elite recall and stability.
- **Multimodal: 96/100.** Frontier omni-modal ingestion (vision, audio, video, PDF).
- **Coding: 94/100.** Elite coding and autonomous software engineering (SWE-bench Verified 81.5%).
- **Cost efficiency: 35/100.** Premium paid pricing ($10/$40 per 1M tokens).
- **Overall Score: 94.6/100.** Best-fit recommendation: A pinnacle frontier agentic and reasoning model for enterprise-grade autonomous research and complex engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
