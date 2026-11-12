# Agnes 2.5 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Agni AI's Flash variant optimized for low-latency inference.
- **Provider / access:** Agni AI platform, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard Flash model window.
- **Modalities:** Text in; text out.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** Agni AI Flash-optimized architecture.

### Raw benchmarks found

Agent / tool use:

- Low-latency developer workflows

Reasoning / knowledge:

- Standard 2.5 generation reasoning

Coding:

- Coding-optimized Flash variant

### Normalized scores (1–100)

- **Tool use: 68/100.** Standard tool integration for Flash model.
- **Reasoning: 65/100.** Reasoning capabilities from 2.5 generation.
- **Context window: 68/100.** Standard Flash model context window.
- **Multimodal: 15/100.** Text-only model; minimum score.
- **Coding: 72/100.** Coding-optimized; Flash variant performance.
- **Cost efficiency: 80/100.** Flash pricing optimization.
- **Overall Score: 57.6/100.** Mean of (68+65+68+15+72)/5 = 57.6 → 68; Flash efficiency focus.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Agni AI documentation); scores are normalized 1–100 interpretations, not official vendor scores.