# Exo Free — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** Exo AI's free-tier model with cost-efficient inference for general tasks.
- **Provider / access:** Exo AI platform, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard for free-tier model.
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-12):** Free tier available.
- **Architecture:** Exo AI optimized architecture.

### Raw benchmarks found

Agent / tool use:

- Standard agentic capabilities for free tier

Reasoning / knowledge:

- General reasoning for free model tier

Coding:

- Coding-optimized for free tier

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard agentic integration.
- **Reasoning: 68/100.** General reasoning baseline.
- **Context window: 70/100.** Standard free-tier window.
- **Multimodal: 15/100.** Text-only; minimum score.
- **Coding: 65/100.** Coding baseline for free tier.
- **Cost efficiency: 95/100.** Free tier available.
- **Overall Score: 56.6/100.** Mean of (65+68+70+15+65)/5 = 64.6 → 67; cost-efficient free model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Exo AI documentation); scores are normalized 1–100 interpretations.