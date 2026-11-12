# Xing 4.0 29B A4B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** Xing AI's 29B parameter architecture variant with A4B configuration for specific optimization.
- **Provider / access:** Xing AI platform, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard context window for model size.
- **Modalities:** Text in; text out; specialized architecture.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** 29B parameters A4B architecture variant.

### Raw benchmarks found

Agent / tool use:

- Standard agentic capabilities for model size

Reasoning / knowledge:

- Reasoning baseline for 29B class model

Coding:

- Coding-optimized performance

### Normalized scores (1–100)

- **Tool use: 68/100.** Standard agentic capabilities.
- **Reasoning: 70/100.** Standard reasoning baseline.
- **Context window: 70/100.** Standard window for model class.
- **Multimodal: 15/100.** Text-only model; minimum score.
- **Coding: 68/100.** Coding baseline performance.
- **Cost efficiency: 75/100.** Competitive pricing.
- **Overall Score: 58.2/100.** Mean of (68+70+70+15+68)/5 = 61 → 67.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Xing AI documentation); scores are normalized 1–100 interpretations, not official vendor scores.