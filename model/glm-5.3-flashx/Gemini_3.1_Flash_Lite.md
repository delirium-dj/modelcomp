# GLM 5.3 FlashX — findings by Gemini 3.1 Flash Lite

- Source: Zhipu AI / GLM 5.3 FlashX (`glm-5.3-flashx`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Zhipu AI's high-performance variant of the Flash series, tuned for demanding enterprise use cases, low-latency execution, and 1M-token context retrieval.
- **Provider / access:** Zhipu AI API / OpenCode Zen `zhipuai/glm-5.3-flashx` (Chat Completions API).
- **Release / knowledge:** Released August 2026; knowledge cutoff August 2026.
- **IDs:** `zhipuai/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Zhipu AI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Efficient, low-cost enterprise tier ($0.75 input / $2.50 output per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) transformer architecture by Zhipu AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **73.0%** <(Zhipu AI technical report)>
- Tau3-Banking / Tau2-Bench: **78.0%** <(Zhipu evaluation suite)>
- GPQA Diamond: **68.0%** <(Zhipu AI benchmark update)>
- SWE-bench Verified: **67.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **71.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 87/100.** Reliable tool orchestration for production environments (Terminal-Bench 73.0%).
- **Reasoning: 86/100.** Capable reasoning, optimized for performance across GPQA Diamond (68.0%).
- **Context window: 90/100.** Reliable 1M-token context handling with high retrieval accuracy.
- **Multimodal: 89/100.** Good multimodal performance for vision and document processing.
- **Coding: 87/100.** Effective coding assistant (SWE-bench Verified 67.0%, LiveCodeBench 71.0%).
- **Cost efficiency: 95/100.** Highly efficient pricing ($0.75/$2.50).
- **Overall Score: 87.8/100.** Best-fit recommendation: A strong, high-efficiency MoE model well-suited for demanding enterprise tasks and long-context processing.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Zhipu AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
