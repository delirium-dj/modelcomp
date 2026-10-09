# DeepSeek V4.1 Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek V4.1 Flash (`deepseek-v4.1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's 552B multimodal MoE model engineered for input-heavy agentic workloads, featuring a 1M-token context window, 384K output window, and strong terminal-bench results.
- **Provider / access:** DeepSeek API / OpenCode Zen `deepseek/deepseek-v4.1-flash` (Chat Completions API).
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,048,576 tokens total (1M input / 384,000 output; verified via DeepSeek documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($0.30 input / $1.20 output per 1M tokens).
- **Architecture:** 552B Mixture-of-Experts (MoE) transformer architecture with massive output window by DeepSeek.

### Raw benchmarks found

- Terminal-Bench 2.1: **71.2%** <(DeepSeek technical report, June 2026)>
- Tau3-Banking / Tau2-Bench: **77.0%** <(DeepSeek evaluation suite)>
- GPQA Diamond: **73.5%** <(DeepSeek benchmark update)>
- SWE-bench Verified: **70.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **73.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 87/100.** Highly efficient agentic execution and tool use (Terminal-Bench 71.2%).
- **Reasoning: 87/100.** Strong multi-step reasoning capabilities across GPQA Diamond (73.5%).
- **Context window: 95/100.** 1M context with 384K output capacity and high retrieval precision.
- **Multimodal: 78/100.** Reliable text and image processing.
- **Coding: 87/100.** Top-tier coding and code-generation benchmark results (SWE-bench Verified 70.5%, LiveCodeBench 73.0%).
- **Cost efficiency: 90/100.** Extremely cost-effective paid pricing ($0.30/$1.20 per 1M).
- **Overall Score: 86.8/100.** Best-fit recommendation: An outstanding high-context MoE offering near-flagship performance at low cost with an exceptionally large output window.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
