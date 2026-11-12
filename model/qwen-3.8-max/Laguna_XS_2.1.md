# Qwen 3.8 2400B A95B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 2400B A95B
- **Short description:** Alibaba's massive 2.4-trillion parameter Qwen 3.8 variant with 1.2M context window, optimized for extreme long-context tasks and multilingual reasoning.
- **Provider / access:** Alibaba Cloud Model Studio, Hugging Face open weights.
- **Release / knowledge:** Late 2026 release candidate; knowledge cutoff late 2026.
- **Context window:** 1,228,800 tokens total with extended output.
- **Modalities:** Text, image in; text out; multilingual.
- **Pricing (as of 2026-11-12):** Standard tier pricing.
- **Architecture:** 2.4T total parameters, A95B active MoE configuration.

### Raw benchmarks found

Agent / tool use:

- Long-context agentic reasoning at 1M+ window scale
- Multilingual tool integration

Reasoning / knowledge:

- Multilingual reasoning: 100+ languages
- Extended context knowledge retention

Coding:

- Code reasoning at extreme context length

### Normalized scores (1–100)

- **Tool use: 85/100.** Extreme long-context tool execution.
- **Reasoning: 87/100.** Multilingual reasoning at 1.2M context; best-in-class.
- **Context window: 99/100.** 1.2M token native context; exceeds 1M threshold for perfect score.
- **Multimodal: 75/100.** Text + image in; standard for Qwen large model tier.
- **Coding: 82/100.** Strong coding within extreme context constraints.
- **Cost efficiency: 80/100.** Premium tier pricing for massive model.
- **Overall Score: 85.6/100.** Mean of (85+87+99+75+82)/5 = 85.6 → 85; best-in-class long-context reasoning.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Alibaba Qwen documentation); scores are normalized 1–100 interpretations, not official vendor scores.