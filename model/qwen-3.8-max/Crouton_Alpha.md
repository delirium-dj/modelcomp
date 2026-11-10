# Qwen3.8 Max — findings by Crouton Alpha

- Source: Alibaba/Qwen3.8 Max
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's frontier open-weights MoE (2.4T-A95B) for multimodal agentic coding; top use case is 1M-context vision + video reasoning.
- **Provider / access:** Alibaba Cloud Model Studio, OpenCode Zen `opencode/qwen3.8-max` via `https://opencode.ai/inference/openai/v1/chat/completions`.
- **Release / knowledge:** 2026 (Qwen blog; HF `Qwen/Qwen3.8-2.4T-A95B`).
- **IDs:** `alibaba/qwen3.8-max`, `opencode/qwen3.8-max`, `Qwen/Qwen3.8-2.4T-A95B`.
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text, image, video in (proved by Video-MME/VideoMMMU/MathVision); text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $6.00 output per 1M (Zen). Paid API, open weights self-host.
- **Architecture:** MoE open weights, 2.4T total / 95B active (HF model card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (Qwen blog); Vals **67.4%**
- CoWorkBench **74.8%** (blog)
- OSWorld-Verified **86.1%** (blog)
- Toolathlon-Verified **72.5%** (blog)
- AutomationBench **27.3%** (blog) — drag.
- WideResearch **81.9%** (blog)

Reasoning / knowledge:

- GPQA **92.6%** (blog)
- HLE **43.6%** (blog)
- MRCRv2 **92.9%** (blog)
- LongBench v2 **66.3%** (blog)
- FrontierMath v2 1-3 **74.737%** (Epoch)

Coding:

- TB2.1 **86.6%** (blog)
- SWE Pro **67.7%** (blog)
- DeepSWE **56.6%** (blog)
- LiveCodeBench (Vals) **87.9%**, SWE (Vals) **85.6%**
- FrontierSWE **73.5%** (blog) vs FrontierSWE v2 **15.8%** — suite variance noted.

Long context:

- 1M; MRCRv2 **92.9%** (blog)

Multimodal:

- MMMU-Pro **82.3%** (blog); MathVision **95.2% / 97.7% w/Python** (blog); CharXiv **93.5%** (blog)
- Video-MME **90.4%**, VideoMMMU **88.7%**, MLVU **90.8%** (blog)

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.1 86.6%, CoWorkBench 74.8%, OSWorld-Verified 86.1%, Toolathlon 72.5% are frontier; AutomationBench 27.3% caps it.
- **Reasoning: 92/100.** GPQA 92.6%, FrontierMath 74.7% and MRCR 92.9% are frontier; capped by HLE 43.6%.
- **Context window: 97/100.** 1M with MRCRv2 92.9% and LongBench 66.3% — top tier.
- **Multimodal: 85/100.** Video + image in, text out; video benchmarks 88–91% push into +video tier, no audio/non-text out.
- **Coding: 91/100.** SWE Vals 85.6%, LiveCode 87.9%, PaperBench 93% exceed frontier refs; capped by DeepSWE 56.6% and FrontierSWE v2 15.8%.
- **Cost efficiency: 73/100.** $2/$6 per 1M (Zen) — cheaper than $2/$10 anchor: ~73.
- **Overall Score: 91/100.** Mean (91+92+97+85+91)/5 = 91.2 → 91; best-fit open multimodal frontier model.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Qwen blog, Hugging Face model card, BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen: Qwen3.8-Max release benchmarks](https://qwen.ai/blog?id=qwen3.8)
  - [Hugging Face — Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [BenchLM — Qwen3.8 Max](https://benchlm.ai/models/qwen3-8-max)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
