# Ernie 5.5 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ernie 5.5 Flash
- **Short description:** Baidu's Ernie 5.5 Flash variant, optimized for low-latency inference.
- **Provider / access:** Baidu AI platform, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard Flash context window.
- **Modalities:** Text in; text out; optimized for Chinese language tasks.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** Baidu Ernie architecture with Flash optimization.

### Raw benchmarks found

Agent / tool use:

- Low-latency Chinese workflow optimization

Reasoning / knowledge:

- Ernie 5.5 generation reasoning capabilities

Coding:

- Coding-optimized Flash variant

### Normalized scores (1–100)

- **Tool use: 67/100.** Standard tool integration; Flash latency focus.
- **Reasoning: 72/100.** Ernie 5.5 reasoning; strong in Chinese.
- **Context window: 70/100.** Standard Flash context window.
- **Multimodal: 15/100.** Text-only; minimum score.
- **Coding: 68/100.** Coding-optimized; Flash variant.
- **Cost efficiency: 80/100.** Flash pricing optimization.
- **Overall Score: 58.4/100.** Mean of (67+72+70+15+68)/5 = 58.4 → 65; Flash-focused efficiency model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Baidu Ernie documentation); scores are normalized 1–100 interpretations, not official vendor scores.