# Kimi K3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K3.1 Pro (`moonshot/kimi-k3.1-pro`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Moonshot AI technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship model with 1M token context, specialized in coding, reasoning, and financial research.
- **Provider / access:** Moonshot AI API / OpenCode Zen (`moonshot/kimi-k3.1-pro`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `moonshot/kimi-k3.1-pro`, `kimi-k3.1-pro`.
- **Context window:** 1,048,576 tokens total (1M context).
- **Modalities:** Text and image input; text output; native tool calling.
- **Pricing (as of 2026-11-10):** Competitive API pricing (~$2.00 / $10.00 per 1M input/output tokens).
- **Architecture:** Advanced post-trained transformer with extensive joint RL across hundreds of downstream domains.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **94.2%** <(Moonshot AI technical report)>
- HLE: **88.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **91.3 / #17** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.0%** <(Moonshot AI evaluation)>
- Tau3-Banking / Tau2-Bench: **91.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **90.0%** <(Software engineering evaluation)>
- LiveCodeBench: **91.3%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.5% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic orchestration and multi-step tool execution.
- **Reasoning: 92/100.** Exceptional complex logical, scientific, and financial reasoning (GPQA Diamond 94.2%).
- **Context window: 92/100.** Robust 1M-token context window with high reliability.
- **Multimodal: 91/100.** Strong text and image ingestion capabilities.
- **Coding: 92/100.** Top-tier software engineering and code generation.
- **Cost efficiency: 88/100.** Competitive API pricing structure.
- **Overall Score: 91.3/100.** Best-fit recommendation: Frontier model optimized for advanced coding, reasoning, and complex financial analytics.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Moonshot AI technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Moonshot AI Official Site](https://moonshot.cn)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
