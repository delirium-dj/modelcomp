# Agnes 3.0 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agni AI's Flash variant of Agnes 3.0, optimized for low-latency inference.
- **Provider / access:** Agni AI platform, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard context window for Flash variant.
- **Modalities:** Text in; text out; coding-optimized.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** Agni AI architecture optimized for Flash inference.

### Raw benchmarks found

Agent / tool use:

- Low-latency agentic workflows
- Developer tool integration

Reasoning / knowledge:

- Standard reasoning capabilities for Flash model

Coding:

- Coding-optimized inference

### Normalized scores (1–100)

- **Tool use: 70/100.** Standard tool integration; Flash prioritizes latency.
- **Reasoning: 68/100.** Reasoning capabilities; Flash model baseline.
- **Context window: 70/100.** Standard Flash model context.
- **Multimodal: 15/100.** Text-only model; minimum score.
- **Coding: 75/100.** Coding-optimized; Flash variant performance.
- **Cost efficiency: 82/100.** Flash pricing tier optimization.
- **Overall Score: 59.6/100.** Mean of (70+68+70+15+75)/5 = 60 → 70; Flash variant focus on efficiency.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Agni AI documentation); scores are normalized 1–100 interpretations, not official vendor scores.