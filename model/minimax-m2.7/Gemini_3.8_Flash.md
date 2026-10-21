# MiniMax M2.7 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's 230B Mixture-of-Experts foundation model (9.8B active) built for agentic programming, agent team orchestration, dynamic tool invocation, and token-efficient reasoning.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`), [OpenRouter](https://openrouter.ai/models/minimax/minimax-m2.7) (`minimax/minimax-m2.7`), OpenCode Zen (`opencode/minimax-m2.7`), Together, Fireworks.
- **Release / knowledge:** March 18, 2026.
- **IDs:** `opencode/minimax-m2.7`, `minimax/minimax-m2.7`, `MiniMaxAI/MiniMax-M2.7`
- **Context window:** 204,800 tokens (~205K context window; max output 131,072 tokens).
- **Modalities:** Text in / text out only. Tool calls, JSON mode, and Agent Teams.
- **Pricing (as of 2026-10-21):** OpenRouter hosts at ~$0.21 / 1M input tokens, ~$0.84 / 1M output tokens ($0.042 / 1M cached input); standard MiniMax API is $0.30 / $1.20 per 1M tokens.
- **Architecture:** 229.9B total / 9.8B active MoE (256 experts, 8 active, 3-head Multi-Token Prediction layer).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,495 Elo**
- Terminal Bench 2.0: **57.0%**
- Toolathlon: **46.3%**
- Skill adherence: **97.0%** (over 40+ complex skill profiles)
- MLE Bench Lite: **66.6%** medal rate

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23**
- GPQA Diamond: **87.4%–89.8%**
- Humanity's Last Exam (HLE): **28.0%–29.6%**
- MMLU-Pro: **81.8%**
- AA-LCR: **78.3%**
- Hallucination rate: **34.0%** (category-low on OmniScience)

Coding:

- SWE-bench Pro: **56.22%**
- SWE-bench Verified: **73.8%**
- SWE Multilingual: **76.5%**
- Multi SWE Bench: **52.7%**
- VIBE-Pro: **55.6%**
- LiveCodeBench: **79.9%**
- SciCode: **47.0%–50.1%**

Long context:

- AA-LCR of 78.3% across 204.8K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** 1,495 Elo on GDPval-AA, 57.0% on Terminal Bench 2.0, and native multi-agent Agent Teams demonstrate reliable autonomous orchestration.
- **Reasoning: 78/100.** High GPQA Diamond (~88%), 23 on AA Intelligence Index, and low hallucination balance against moderate HLE (~29%).
- **Context window: 70/100.** 204.8K context window with 131K output headroom.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 80/100.** Strong software engineering results across 56.22% SWE-bench Pro, 73.8% SWE-bench Verified, and 76.5% SWE Multilingual.
- **Cost efficiency: 90/100.** Highly cost-effective at $0.21 / $0.84 per 1M tokens ($0.042 cached) on OpenRouter.
- **Overall Score: 64/100.** Arithmetic mean of non-cost metrics: (78 + 78 + 70 + 15 + 80) / 5 = 64.2 → 64. A cost-effective, text-only agent model with strong tool execution and low active parameter footprint.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of MiniMax technical publications, OpenRouter pricing, and Artificial Analysis leaderboards.
