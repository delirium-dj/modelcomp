# GPT-5.4 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.4 Pro (`gpt-5.4-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's flagship professional reasoning and coding model with deep verification capabilities, 256K context window, and industry-leading software engineering performance.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-5.4-pro` (Responses API & Chat Completions).
- **Release / knowledge:** Released February 2026; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 262,144 tokens total (256K input / 64,000 output; verified via OpenAI documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Flagship professional pricing ($15.00 input / $60.00 output per 1M tokens).
- **Architecture:** Large-scale frontier multimodal reasoning model by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **58.0%** <(OpenAI technical update, February 2026)>
- GPQA Diamond: **82.0%** <(OpenAI system card)>
- MMLU-Pro: **88.5%** <(OpenAI evaluation suite)>
- SWE-bench Verified: **82.5%** <(SWE-bench official leaderboard, October 2026)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Exceptional tool calling and autonomous agentic task execution (Terminal-Bench 58.0%).
- **Reasoning: 85/100.** Top-tier reasoning on GPQA Diamond (82.0%) and MMLU-Pro (88.5%).
- **Context window: 72/100.** Robust 256K context window tier with high precision.
- **Multimodal: 80/100.** Comprehensive multimodal input support (text, image, audio, video).
- **Coding: 88/100.** Industry-leading coding and benchmark scores on SWE-bench Verified (82.5%).
- **Cost efficiency: 65/100.** Premium professional pricing tier ($15/$60).
- **Overall Score: 80.0/100.** Best-fit recommendation: A flagship professional powerhouse for complex reasoning and advanced software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
