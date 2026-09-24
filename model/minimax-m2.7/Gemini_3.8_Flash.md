# MiniMax M2.7 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's 230B Mixture-of-Experts foundation model (9.8B active) built for agentic programming, agent team orchestration, dynamic tool invocation, and token-efficient reasoning.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`), OpenCode Zen (`opencode/minimax-m2.7`), Together, Fireworks, Hugging Face open weights.
- **Release / knowledge:** March 2026.
- **IDs:** `opencode/minimax-m2.7`, `MiniMaxAI/MiniMax-M2.7`
- **Context window:** 204,800 tokens (~200K; max output 131,072).
- **Modalities:** Text in / text out only. Tool calls, JSON mode, and Agent Teams.
- **Pricing (as of 2026-09-24):** $0.30 / 1M input tokens, $1.20 / 1M output tokens ($0.06 cached input).
- **Architecture:** 229.9B total / 9.8B active MoE (256 experts, 8 active, 3-head MTP layer).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **56.22%**
- SWE Multilingual: **76.5%**
- Terminal-Bench 2.0: **57.0%** (3P: **55.4%**)
- Toolathon: **46.3%**
- Skill adherence: **97.0%** (over 40+ complex skill profiles)
- MLE Bench Lite: **66.6%** medal rate

Reasoning / knowledge:

- GPQA Diamond: **87.4%–89.8%**
- Humanity's Last Exam (HLE): **28.0%–29.6%**
- AA-LCR: **78.3%**
- MMLU-Pro: **81.8%**
- Hallucination rate: **34.0%** (category-low on OmniScience)

Coding:

- SWE-bench Verified: **73.8%** (Vals run; aggregators 72.2%–78.0%)
- LiveCodeBench: **79.9%**
- SciCode: **47.0%–50.1%**

Long context:

- AA-LCR of 78.3% across 204.8K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** 97% skill adherence, 66.6% MLE Bench medal rate, and 56.2% on SWE-bench Pro reflect strong agentic execution.
- **Reasoning: 78/100.** High GPQA Diamond (~88%) and industry-low hallucination rate balance against moderate HLE (~29%).
- **Context window: 70/100.** 204.8K context window with 131K output headroom.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 80/100.** Reliable coding capability demonstrated by 73.8% SWE-bench Verified and 79.9% LiveCodeBench.
- **Cost efficiency: 88/100.** Inexpensive pricing at $0.30 / $1.20 per 1M tokens with cheap caching ($0.06).
- **Overall Score: 64/100.** Arithmetic mean of non-cost metrics: (78 + 78 + 70 + 15 + 80) / 5 = 64.2 → 64. A cost-effective, text-only agent model with strong tool execution and low active parameter footprint.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of MiniMax technical publications and independent coding leaderboards.
