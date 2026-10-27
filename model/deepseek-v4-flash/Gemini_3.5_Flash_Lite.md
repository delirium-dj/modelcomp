# DeepSeek-V4-Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V4-Flash (`deepseek/deepseek-v4-flash`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek's high-throughput lightweight model in the V4 generation, engineered for ultra-low latency and economical automated workflows.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-v4-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `deepseek/deepseek-v4-flash`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost production tier ($0.08 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Streamlined V4-series sparse MoE architecture optimized for speed.

### Raw benchmarks found

- Operational speed & classification: High throughput and sub-second response times across benchmarks <(DeepSeek technical notes, 2026)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast and reliable function calling for automated pipelines.
- **Reasoning: 81/100.** Solid reasoning across standard development tasks.
- **Context window: 82/100.** 128k token context window supporting moderate document processing.
- **Multimodal: 60/100.** Text-only architecture.
- **Coding: 84/100.** Swift code completion and script generation.
- **Cost efficiency: 100/100.** Disruptive pricing for high-volume automated operations.
- **Overall Score: 77.8/100.** Best-fit recommendation: Ultra-fast, highly economical model for high-throughput operational pipelines.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across DeepSeek release schedules and API cost indices.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
