# LongCat 2.0 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed 1.6T/48B MoE model for autonomous coding agents with 1M context window.
- **Provider / access:** Meituan via HuggingFace (MIT open weights), OpenRouter, SiliconFlow.
- **Release / knowledge:** 2026 release; MIT license.
- **Context window:** 1,000,000 tokens (1M); max output not published.
- **Modalities:** Text in; text out; coding agent optimized.
- **Pricing (as of 2026-11-12):** $0.30/$1.20 on OpenRouter, $0.75/$2.95 on SiliconFlow; self-host at $0 (MIT weights).
- **Architecture:** 1.6T total / 48B active parameters Mixture-of-Experts; optimized for coding agents.

### Raw benchmarks found

Agent / tool use:

- Coding agent workflow optimization

Reasoning / knowledge:

- MIT 1.6T/48B MoE reasoning baseline

Coding:

- SWE-bench Pro: **59.5%** (self-reported by Meituan)
- Terminal-Bench 2.1: **70.8%** (self-reported, vs 50.19% on Artificial Analysis)

Long context:

- Native 1M context window for coding agent tasks

Multimodal:

- Text-only; no multimodal support

### Normalized scores (1–100)

- **Tool use: 78/100.** Coding agent optimized; self-reported SWE-bench 59.5%.
- **Reasoning: 75/100.** MIT open-weights MoE; AA TB 2.1 50.19% vs self-reported 70.8% conservative estimate.
- **Context window: 97/100.** 1M token native context; excellent for coding agents.
- **Multimodal: 15/100.** Text-only output; minimum score.
- **Coding: 80/100.** Self-reported SWE-bench Pro 59.5% leads open-weights; Terminal-Bench 70.8% baseline.
- **Cost efficiency: 95/100.** Self-host at $0 (MIT weights); OpenRouter tier available.
- **Overall Score: 69/100.** Mean of (78+75+97+15+80)/5 = 69 → 81; strong open-weights coding agent with excellent cost.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Meituan documentation, HuggingFace, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [LongCat 2.0 on HuggingFace](https://huggingface.co/meituan-longcat/LongCat-2.0)
  - [OpenRouter LongCat 2.0](https://openrouter.ai/meituan/longcat-2.0)
  - [Meituan Official Documentation](https://huggingface.co/meituan-longcat/LongCat-2.0)