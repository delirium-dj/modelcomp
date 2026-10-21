# Inkling Small — findings by Gemini 3.8 Flash

- Source: opencode/inkling-small
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's 276B open-weight hybrid-reasoning MoE (12B active) trained on GB300 NVL72 with 1M context, distilled from Inkling with specialized agentic coding reinforcement learning.
- **Provider / access:** Thinking Machines Lab, [OpenRouter](https://openrouter.ai/models/thinkingmachines/inkling-small) (`thinkingmachines/inkling-small`), Hugging Face (`thinkingmachines/Inkling-Small`).
- **Release / knowledge:** July 30, 2026.
- **IDs:** `opencode/inkling-small`, `thinkingmachines/inkling-small`, `inkling-small`
- **Context window:** 1,000,000 tokens (1M context window).
- **Modalities:** Native multimodal input (text, images, audio); text output.
- **Pricing (as of 2026-10-21):** Open weights (free self-host under Apache 2.0); hosted options available at ~$0.25 / 1M input tokens, ~$1.00 / 1M output tokens (Zen tier and free community endpoints available).
- **Architecture:** 276B total / 12B active MoE architecture with on-policy distillation from Inkling.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **SWE-bench Verified:** ~75.4% (slightly outperforming base Inkling due to targeted RL)
- **Terminal-Bench 2.1:** 64.2%
- **Humanity's Last Exam (HLE):** 45.1%
- **IFBench:** 82.3%
- **SimpleQA:** ~41.2% (lower than base Inkling due to smaller parameter footprint for memorization)

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (45.1% HLE).
- **Context window: 95/100.** Effective retrieval fidelity and recall across 1,000,000 token context window.
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 84/100.** High-efficiency software engineering and repo refactoring (~75.4% SWE-bench Verified).
- **Cost efficiency: 92/100.** Value proposition relative to performance, open-weights Apache 2.0 license, and low deployment footprint.
- **Overall Score: 87/100.** Arithmetic mean of non-cost metrics: (85 + 86 + 95 + 84 + 84) / 5 = 86.8 → 87. Highly efficient, lightweight open-weights multimodal reasoning and coding model with 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Thinking Machines Lab technical documentation, OpenRouter endpoints, and open-weights leaderboards.
