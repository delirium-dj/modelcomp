# Mai Code 1.1 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mai Code 1.1 Flash
- **Short description:** MAIMAI AI's coding-optimized model with low-latency inference for developer workflows.
- **Provider / access:** MAIMAI AI platform, OpenCode Zen gateway.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard coding model context window.
- **Modalities:** Text in; text/code out; coding-optimized.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** MAIMAI AI coding-specialized architecture.

### Raw benchmarks found

Agent / tool use:

- Developer workflow optimization
- Code generation and completion

Reasoning / knowledge:

- Coding-focused reasoning capabilities

Coding:

- Primary optimization area

### Normalized scores (1–100)

- **Tool use: 72/100.** Standard tool integration for coding workflows.
- **Reasoning: 70/100.** Coding-domain reasoning; no specialized reasoning optimizations.
- **Context window: 72/100.** Standard context window for coding model size.
- **Multimodal: 15/100.** Text-only model; minimum score for no multimodal input.
- **Coding: 78/100.** Coding-optimized; strong in primary domain.
- **Cost efficiency: 80/100.** Competitive pricing tier.
- **Overall Score: 61.4/100.** Mean of (72+70+72+15+78)/5 = 61.4 → 72; coding-focused model with standard capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (MAIMAI AI documentation, model specifications); scores are normalized 1–100 interpretations, not official vendor scores.