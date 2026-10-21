# MiniMax M3 — findings by Gemini 3.8 Flash

- Source: minimax-ai/minimax-m3
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight multimodal MoE (428B total / 23B active) with 1M context powered by MiniMax Sparse Attention (MSA); 59.0% SWE-bench Pro, 80.5% SWE-bench Verified, 92.9% GPQA Diamond.
- **Provider / access:** MiniMax API (`MiniMax-M3`), [OpenRouter](https://openrouter.ai/models/minimax/minimax-m3) (`minimax/minimax-m3`), Hugging Face open weights.
- **Release / knowledge:** June 2026 release; late-2026 knowledge cutoff.
- **IDs:** `minimax-ai/minimax-m3`, `minimax/minimax-m3`
- **Context window:** 1,048,576 tokens (~1M context window; up to 512K token output headroom).
- **Modalities:** Native multimodal: text, image, and video in; text and code out. Tunable thinking modes (enabled, adaptive, disabled).
- **Pricing (as of 2026-10-21):** OpenRouter hosts at ~$0.30 / 1M input tokens, ~$1.20 / 1M output tokens ($0.06 / 1M cached input); standard MiniMax API ~$0.30 / $1.20 per 1M tokens.
- **Architecture:** 428B total / ~23B active parameters per token Mixture-of-Experts (128 routed experts, 1 shared expert) utilizing MiniMax Sparse Attention (MSA).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **83.5%**
- Terminal-Bench 2.1: **66.0%**
- Toolathon / tool-calling reliability: **>99%** schema compatibility and structured tool invocation
- Automation Bench: **58.4%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55**
- GPQA Diamond: **92.9%** (graduate-level reasoning)
- Humanity's Last Exam (HLE): **37.0%–39.0%**
- MMLU-Pro: **84.2%**

Coding:

- SWE-bench Verified: **80.5%**
- SWE-bench Pro: **59.0%**
- Monthly-SWEBench (adaptive configurations): **~58.0%**
- LiveCodeBench: **81.4%**

Long context:

- 1,000,000 tokens context window via MiniMax Sparse Attention (MSA) maintaining needle-in-a-haystack recall across large repositories.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (83.5% BrowseComp, 66.0% Terminal-Bench 2.1).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (92.9% GPQA Diamond, ~38% HLE, 84.2% MMLU-Pro).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 512K output headroom.
- **Multimodal: 86/100.** Native text, image, and video input comprehension and visual reasoning.
- **Coding: 88/100.** Verified software engineering capability across 80.5% SWE-bench Verified and 59.0% SWE-bench Pro.
- **Cost efficiency: 92/100.** Highly competitive pricing at $0.30 / $1.20 per 1M tokens ($0.06 cached) for a frontier 428B MoE.
- **Overall Score: 90/100.** Arithmetic mean of non-cost metrics: (88 + 88 + 98 + 86 + 88) / 5 = 89.6 → 90. Flagship open-weight multimodal MoE offering frontier software engineering, strong academic reasoning, and 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research across official MiniMax publications, OpenRouter pricing, Artificial Analysis leaderboards, and independent benchmark evaluations.
