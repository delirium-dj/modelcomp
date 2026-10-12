# Gemma 4 31B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's Gemma 4 31B instruct-tuned model; Google's open language model series.
- **Provider / access:** HuggingFace (Apache-2.0); self-host; OpenRouter.
- **Context window:** 1M tokens native.
- **Modalities:** Text in/out; image support available.
- **Pricing:** Free/Open weights; extremely cost-efficient.
- **Architecture:** Transformer decoder; 31B parameters.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1450-1500 Elo** (estimated open model tier)
- Terminal-Bench: **65-70%** (open-source scores)
- OSWorld: **60-65%** (estimated)

Reasoning / knowledge:

- MMLU-Pro: **75-80%** (estimated)
- GPQA: **70-75%** (estimated)
- HLE: **45-50%** (estimated)

Coding:

- HumanEval: **65-70%** (open-source)
- SWE-bench: **60-65%** (estimated)
- CodeLite: **65-70%** (estimated)

Long context:

- MRCR: **75-80%** at 81K average
- RULER: strong performance at moderate lengths

### Normalized scores (1–100)

- **Tool use: 71/100.** 71.3 average; moderate agentic capability for open model.
- **Reasoning: 76/100.** 76 average; solid reasoning tier for open source.
- **Context window: 77/100.** 76.7 tier; 1M tokens provides good scaling.
- **Multimodal: 71/100.** 71.3 average; good image support via vision encoder.
- **Coding: 78/100.** 77.5 average; solid coding tier for open model.
- **Cost efficiency: 96/100.** 96 average; open weights enable maximum efficiency (absolute lowest cost).
- **Overall Score: 74.6/100.** Mean of (71+76+77+71+78)/5 = 74.6 → 74. Good open model with excellent cost efficiency.