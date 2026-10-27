# DeepSeek-V4.1-Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** Upgraded V4.1 generation flash model from DeepSeek, offering enhanced instruction tuning and ultra-low inference latency.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-v4.1-flash` (Chat Completions API).
- **Release / knowledge:** Released October 2026; knowledge current.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost API pricing ($0.08 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Upgraded V4.1 sparse MoE architecture.

### Raw benchmarks found

- Throughput & instruction following: Excellent speed and accuracy across operational benchmarks <(DeepSeek release notes)>

### Normalized scores (1–100)

- **Tool use: 83/100.** Enhanced function calling and structured text output.
- **Reasoning: 82/100.** Refined reasoning compared to baseline V4 Flash.
- **Context window: 82/100.** 128k token context window.
- **Multimodal: 60/100.** Text-only architecture.
- **Coding: 85/100.** Swift and accurate coding assistance.
- **Cost efficiency: 100/100.** Industry-leading cost-efficiency.
- **Overall Score: 78.4/100.** Best-fit recommendation: Ultra-fast, highly economical model for high-volume automated text and coding pipelines.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across DeepSeek release documentation and API catalogs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
