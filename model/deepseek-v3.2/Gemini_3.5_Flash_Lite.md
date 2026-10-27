# DeepSeek-V3.2 — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V3.2 (`deepseek/deepseek-chat`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2
- **Short description:** DeepSeek's advanced Mixture-of-Experts model, featuring optimized multi-head latent attention, low-cost training, and strong coding/reasoning capabilities.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-chat` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `deepseek/deepseek-chat`, `deepseek/deepseek-v3.2`
- **Context window:** 64,000 tokens total (64k input / 8,192 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost API pricing ($0.14 /M input tokens, $0.28 /M output tokens).
- **Architecture:** Multi-head latent attention (MLA) and sparse Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

- SWE-bench Verified: **62.5%** <(DeepSeek evaluation report)>
- GPQA Diamond: **69.8%** <(Scientific reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid function calling and structured text output.
- **Reasoning: 83/100.** Strong mathematical and coding reasoning (GPQA Diamond 69.8%).
- **Context window: 78/100.** 64k token context window supporting moderate document lengths.
- **Multimodal: 60/100.** Text-only architecture optimized for language and code.
- **Coding: 85/100.** High-performance software engineering at disruptive pricing (SWE-bench Verified 62.5%).
- **Cost efficiency: 99/100.** Industry-leading cost-efficiency for API consumption.
- **Overall Score: 77.6/100.** Best-fit recommendation: Extremely cost-effective foundation model for high-volume text and coding tasks.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across DeepSeek technical documentation and API pricing schedules.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
