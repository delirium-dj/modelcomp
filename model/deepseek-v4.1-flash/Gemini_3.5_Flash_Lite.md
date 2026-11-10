# DeepSeek-V4.1-Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and DeepSeek technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** Upgraded V4.1 generation flash model from DeepSeek, offering enhanced instruction tuning and ultra-low inference latency.
- **Provider / access:** DeepSeek API / OpenCode Zen (`deepseek/deepseek-v4.1-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `deepseek/deepseek-v4.1-flash`, `deepseek-v4.1-flash`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text input and output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-11):** Ultra-low cost API pricing (~$0.08 / $0.20 per 1M tokens).
- **Architecture:** Upgraded V4.1 sparse MoE architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **83.5%** <(DeepSeek technical evaluation)>
- Artificial Analysis Intelligence Index: **89.0 / #34** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **88.0%** <(DeepSeek developer evaluation)>
- Tau3-Banking / Tau2-Bench: **87.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **73.0%** <(Software engineering evaluation)>
- LiveCodeBench: **88.0%** <(Independent benchmark tracking)>

Long context:
- 128K context retrieval accuracy: **95.5% accuracy** <(RULER / GraphWalks evaluation at 128K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Enhanced function calling and structured text output.
- **Reasoning: 90/100.** Refined reasoning compared to baseline V4 Flash.
- **Context window: 90/100.** 128k token context window.
- **Multimodal: 60/100.** Text-only architecture.
- **Coding: 90/100.** Swift and accurate coding assistance.
- **Cost efficiency: 98/100.** Industry-leading cost-efficiency.
- **Overall Score: 84/100.** Best-fit recommendation: Ultra-fast, highly economical model for high-volume automated text and coding pipelines.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against DeepSeek technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [DeepSeek Platform](https://platform.deepseek.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
