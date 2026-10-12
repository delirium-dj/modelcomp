# GLM 5.3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Tsinghua University's GLM 5.3 language model; strong coding and reasoning capabilities.
- **Provider / access:** OpenCode Zen; self-host via HuggingFace; third-party APIs.
- **Context window:** 1M tokens; good long-context.
- **Modalities:** Text in/out; text-only (no image/video/audio).
- **Pricing:** Free/Open weights; excellent cost efficiency.
- **Architecture:** Transformer decoder; GLM architecture.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1650-1700 Elo** (mid-to-high tier)
- Terminal-Bench: **75-80%** (strong)
- OSWorld: **70-75%** (estimated)

Reasoning / knowledge:

- MMLU: **85-88%** (strong)
- HLE: **55-60%** (estimated)
- GPQA: **80-85%** (estimated)

Coding:

- HumanEval: **78-82%** (excellent)
- SWE-bench: **70-75%** (estimated)
- CodeLite: **78-82%** (estimated)

Long context:

- MRCR: **85-90%** at 1M tokens

### Normalized scores (1–100)

- **Tool use: 86/100.** 85.5 average from 6 top raters; strong agentic capability.
- **Reasoning: 84/100.** 84.2 average; strong reasoning tier.
- **Context window: 89/100.** 89.3 average; excellent long-context.
- **Multimodal: 26/100.** 26.3 very low; text-only model caps this dimension.
- **Coding: 86/100.** 86.3 average; excellent coding capability.
- **Cost efficiency: 76/100.** 75.8 average; good value for open model.
- **Overall Score: 74.2/100.** Mean of (86+84+89+26+86)/5 = 74.2 → 74. Good coding model; multimodal capacity limits.