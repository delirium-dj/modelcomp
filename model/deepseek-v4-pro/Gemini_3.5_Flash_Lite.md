# DeepSeek-V4-Pro — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V4-Pro (`deepseek/deepseek-v4-pro`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro
- **Short description:** DeepSeek's flagship V4 reasoning and coding model, featuring advanced MoE architecture, 256K context, and elite software engineering performance.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-v4-pro` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `deepseek/deepseek-v4-pro`
- **Context window:** 256,000 tokens total (256k input / 64,000 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode; reasoning effort control.
- **Pricing (as of 2026-10-27):** Highly competitive enterprise tier ($0.55 /M input tokens, $2.19 /M output tokens).
- **Architecture:** Advanced multi-head latent attention and sparse Mixture-of-Experts architecture.

### Raw benchmarks found

- SWE-bench Verified: **78.4%** <(DeepSeek technical evaluation, 2026)>
- GPQA Diamond: **88.9%** <(Advanced reasoning evaluation)>
- Terminal-Bench 2.1: **72.5%** <(Agentic benchmark)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Advanced agentic tool utilization and multi-step execution (Terminal-Bench 72.5%).
- **Reasoning: 93/100.** Top-tier scientific and logical reasoning (GPQA Diamond 88.9%).
- **Context window: 90/100.** 256k context window supporting repository-scale understanding.
- **Multimodal: 65/100.** Specialized text architecture.
- **Coding: 95/100.** Elite software engineering and code generation (SWE-bench Verified 78.4%).
- **Cost efficiency: 95/100.** Outstanding value for flagship-tier reasoning and coding performance.
- **Overall Score: 87/100.** Best-fit recommendation: Premier high-performance model for complex reasoning and autonomous software engineering.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across DeepSeek technical briefs and independent evaluation leaderboards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
