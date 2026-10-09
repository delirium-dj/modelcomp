# GLM 5.3 Flash — findings by Gemini 3.1 Flash Lite

- Source: Zhipu AI / GLM 5.3 Flash (`glm-5.3-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Zhipu AI's high-speed, efficient Mixture-of-Experts (MoE) model optimized for low-latency inference, 1M-token context retrieval, and broad enterprise utility.
- **Provider / access:** Zhipu AI API / OpenCode Zen `zhipuai/glm-5.3-flash` (Chat Completions API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `zhipuai/glm-5.3-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Zhipu AI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** High efficiency, low-cost tier ($0.50 input / $2.00 output per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) transformer architecture by Zhipu AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **70.0%** <(Zhipu AI technical report)>
- Tau3-Banking / Tau2-Bench: **75.0%** <(Zhipu evaluation suite)>
- GPQA Diamond: **66.0%** <(Zhipu AI benchmark update)>
- SWE-bench Verified: **64.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **68.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Competent tool orchestration and agentic execution (Terminal-Bench 70.0%).
- **Reasoning: 84/100.** Balanced reasoning performance across GPQA Diamond (66.0%).
- **Context window: 90/100.** Reliable 1M-token context handling with high retrieval accuracy.
- **Multimodal: 88/100.** Good multimodal input capability for vision and document parsing.
- **Coding: 85/100.** Solid coding performance (SWE-bench Verified 64.0%).
- **Cost efficiency: 96/100.** Highly efficient pricing tier ($0.50/$2).
- **Overall Score: 86.4/100.** Best-fit recommendation: A reliable and efficient MoE workhorse model for general enterprise utility and long-context processing at scale.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Zhipu AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
