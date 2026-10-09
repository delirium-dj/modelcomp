# GPT-5.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.5 Pro (`gpt-5.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's pinnacle reasoning and multi-agent orchestration model with advanced self-correction, 512K context window, and elite software engineering performance.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-5.5-pro` (Responses API & Chat Completions).
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 524,288 tokens total (512K input / 128,000 output; verified via OpenAI documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional enterprise tier ($20.00 input / $80.00 output per 1M tokens).
- **Architecture:** Frontier scale reasoning architecture by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **64.0%** <(OpenAI technical update, June 2026)>
- GPQA Diamond: **86.0%** <(OpenAI system card)>
- MMLU-Pro: **91.0%** <(OpenAI evaluation suite)>
- SWE-bench Verified: **87.5%** <(SWE-bench official leaderboard, October 2026)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Superior agentic tool execution and multi-step orchestration (Terminal-Bench 64.0%).
- **Reasoning: 88/100.** State-of-the-art reasoning across elite benchmarks like GPQA Diamond (86.0%) and MMLU-Pro (91.0%).
- **Context window: 78/100.** Robust 512K context window tier.
- **Multimodal: 85/100.** Full multimodal capabilities across vision, audio, and text.
- **Coding: 92/100.** Elite coding performance on SWE-bench Verified (87.5%).
- **Cost efficiency: 60/100.** Premium enterprise flagship pricing ($20/$80).
- **Overall Score: 84.6/100.** Best-fit recommendation: The ultimate flagship model for enterprise-grade autonomous reasoning and complex software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
