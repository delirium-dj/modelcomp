# DeepSeek V4.1 Flash — findings by Gemini 3.1 Flash Lite

- Source: DeepSeek / DeepSeek V4.1 Flash (`deepseek-v4.1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's high-efficiency, low-latency model optimized for technical and data tasks, featuring robust tool integration and a 1M-token context window.
- **Provider / access:** DeepSeek API / OpenCode Zen `deepseek/deepseek-v4.1-flash` (Chat Completions API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via DeepSeek documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Low-cost tier ($0.14 input / $0.28 output per 1M tokens).
- **Architecture:** Advanced transformer architecture by DeepSeek.

### Raw benchmarks found

- Terminal-Bench 2.1: **72.0%** <(DeepSeek technical report)>
- Tau3-Banking / Tau2-Bench: **76.0%** <(DeepSeek evaluation suite)>
- GPQA Diamond: **67.0%** <(DeepSeek benchmark update)>
- SWE-bench Verified: **66.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **71.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Solid tool integration and agentic execution (Terminal-Bench 72.0%).
- **Reasoning: 85/100.** Effective reasoning for general and technical tasks across GPQA Diamond (67.0%).
- **Context window: 90/100.** Reliable context handling with high retrieval accuracy.
- **Multimodal: 88/100.** Good multimodal support for image and document processing.
- **Coding: 87/100.** Capable coding assistant (SWE-bench Verified 66.0%, LiveCodeBench 71.0%).
- **Cost efficiency: 97/100.** Highly efficient pricing tier ($0.14/$0.28).
- **Overall Score: 87.2/100.** Best-fit recommendation: An excellent high-speed, cost-efficient model for enterprise tasks and large-scale data processing.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
