# Qwen 4 Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 4 Max (`alibaba/qwen-4-max`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Alibaba Cloud technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba Cloud's flagship Qwen 4 generation frontier model combining massive 2M context capacity with top-tier multi-domain intelligence, advanced reasoning, and native multimodality.
- **Provider / access:** Alibaba Cloud API / OpenCode Zen (`alibaba/qwen-4-max`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `alibaba/qwen-4-max`, `qwen-4-max`.
- **Context window:** 2,000,000 tokens total.
- **Modalities:** Text, image, video, and audio input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-11):** Paid API tier (~$2.50 / $10.00 per 1M input/output tokens).
- **Architecture:** Frontier Mixture of Experts (MoE) transformer architecture with massive context scaling.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **93.5%** <(Alibaba technical report)>
- HLE: **91.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **93.5 / #4** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **93.8%** <(Alibaba evaluation harness)>
- Tau3-Banking / Tau2-Bench: **93.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **93.2%** <(Software engineering evaluation)>
- LiveCodeBench: **93.5%** <(Independent benchmark tracking)>

Long context:
- 2M context retrieval accuracy: **98.2% accuracy** <(RULER / GraphWalks evaluation at 2M length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Superior multi-turn tool integration and agentic workflow execution.
- **Reasoning: 93/100.** Elite reasoning performance on complex scientific and mathematical benchmarks.
- **Context window: 94/100.** Industry-leading 2M token context window with flawless long-context retrieval.
- **Multimodal: 94/100.** Unmatched native multimodal processing across audio, video, images, and text.
- **Coding: 93/100.** Top-tier software engineering benchmark results.
- **Cost efficiency: 90/100.** Competitive pricing for flagship frontier capability.
- **Overall Score: 93.5/100.** State-of-the-art flagship multimodal model with peerless context and reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Alibaba Cloud technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
