# Qwen 4 Max — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba's Qwen 4 Max flagship model with 2M context window, elite reasoning, and advanced multimodal capabilities.
- **Provider / access:** QwenCloud / Model Studio (`qwen4-max`), Alibaba Cloud, third-party hosts (Qubrid, Vercel AI Gateway, CheapestInference).
- **Release / knowledge:** GA August 2026; knowledge cutoff not published.
- **Context window:** 2,000,000 tokens total, 128,000 max output.
- **Modalities:** Text, image, video, audio in; text out; reasoning via built-in `enable_thinking`; tool calls supported.
- **Pricing (as of 2026-11-12):** $2.00 / $6.00 per 1M tokens in/out; cache reads $0.17/$0.25 implicit.
- **Architecture:** 2.4T total / 95B active sparse MoE with hybrid attention; built on Qwen 3.5 foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor table)
- OSWorld-Verified: **86.1%** (vendor table — leads)
- Toolathlon Verified: **72.5%** (vendor table)
- WideSearch: **81.9%** (vendor table)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor table)
- HLE: **43.6%** no tools / **56.2%** with tools
- IFBench: **82.8%** (vendor table — leads)
- AA Intelligence Index: **58** (top five)
- PLawBench: **73.2%**

Coding:

- SWE-bench Pro: **67.7%** (vendor table)
- PaperBench: **93.0%** (vendor table — leads)
- QwenSWEBench: **80.7%**

Long context:

- MRCR v2 (8-needle) at 256K: **92.9%** (vendor table)

Multimodal:

- MathVision: **95.2%**
- LogicVista: **91.9%**
- MMMU-Pro: **82.3%**
- RealWorldQA: **88.0%**

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified 86.1% (table lead), TB 2.1 86.6%, WideSearch 81.9% form a strong agentic profile; capped by Agents' Last Exam.
- **Reasoning: 84/100.** AA Index 58 (top five), GPQA 92.6%, IFBench 82.8% lead; capped by HLE 43.6% as the last among flagships.
- **Context window: 97/100.** 2M window with MRCR v2 92.9% at 256K — best-in-class capacity; not ≥98%-at-512K+ evidence for perfect 100.
- **Multimodal: 88/100.** Text/image/video/audio in with MathVision 95.2%, LogicVista 91.9%; text-only output caps the multimodal score.
- **Coding: 84/100.** PaperBench 93.0% lead, TB 2.1 86.6%, SWE-bench Pro 67.7% are strong; capped by 12-point deficit to Fable 5.
- **Cost efficiency: 85/100.** $2/$6 flat across 1M is roughly 1/3 of Opus 5, with 8x-cheaper cache reads.
- **Overall Score: 88/100.** Mean of (89+84+97+88+84)/5 = 88.4 → 88 — best price/performance open-weights flagship for agentic and multimodal work.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Qwen official blog, vendor benchmark tables, model specifications); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen 4 Max Official Blog](https://qwenlm.github.io/blog/qwen-4-max/)
  - [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen GitHub Repository](https://github.com/Qwen/Qwen3)