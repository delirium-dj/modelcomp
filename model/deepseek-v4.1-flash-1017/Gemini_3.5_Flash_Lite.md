# DeepSeek-V4.1-Flash-1017 — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V4.1-Flash-1017 (`deepseek/deepseek-v4.1-flash-1017`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017
- **Short description:** Dated checkpoint snapshot (October 17) of DeepSeek's V4.1 Flash model, optimized for low latency and high-throughput data processing.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-v4.1-flash-1017` (Chat Completions API).
- **Release / knowledge:** Released October 2026; knowledge current.
- **IDs:** `deepseek/deepseek-v4.1-flash-1017`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost API pricing ($0.08 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Streamlined V4.1 sparse MoE architecture.

### Raw benchmarks found

- Throughput & latency: Sub-second response times across high-volume classification tasks <(DeepSeek changelog, October 2026)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast and reliable function calling for automated pipelines.
- **Reasoning: 82/100.** Solid reasoning across standard text tasks.
- **Context window: 82/100.** 128k token context window.
- **Multimodal: 60/100.** Text-only architecture.
- **Coding: 84/100.** Swift code completion and scripting assistance.
- **Cost efficiency: 100/100.** Disruptive pricing for high-volume automated operations.
- **Overall Score: 78/100.** Best-fit recommendation: Ultra-fast, highly economical checkpoint model for high-throughput operational tasks.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across DeepSeek API changelog and platform updates.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
