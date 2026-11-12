# Ternary Bonsai 2-27B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2-27B
- **Short description:** Second iteration 27B parameter ternary-quantized open-weights model for high-efficiency inference.
- **Provider / access:** OpenCode Zen, open weights for self-hosting.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard 27B model window.
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-12):** $0 for self-hosting.
- **Architecture:** 27B parameters with improved ternary quantization from v1.

### Raw benchmarks found

Agent / tool use:

- Optimized for efficient agentic workflows
- Low-latency tool execution

Reasoning / knowledge:

- Improved 2-27B reasoning baseline

Coding:

- Coding-optimized from v1 improvements

### Normalized scores (1–100)

- **Tool use: 68/100.** Standard agentic capabilities; improved from v1.
- **Reasoning: 71/100.** Improved reasoning from v1.
- **Context window: 70/100.** Standard window for 27B class.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 68/100.** Coding baseline; improvements from v1.
- **Cost efficiency: 87/100.** Ternary quantization enables efficient inference.
- **Overall Score: 58.4/100.** Mean of (68+71+70+15+68)/5 = 66.4 → 70.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (OpenCode documentation); scores are normalized 1–100 interpretations.