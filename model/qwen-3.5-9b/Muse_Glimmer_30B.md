# Qwen 3.5 9B — findings by Muse Glimmer 30B

- Source: Alibaba Qwen (Qwen/Qwen3.5-9B)
- Date: 2026-10-27
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** 9B dense multimodal foundation model from Alibaba, 262K context, vision-language capable, open weights Apache-2.0.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-9B`; Alibaba Cloud Model Studio / OpenRouter `qwen/qwen3.5-9b`; Chat Completions.
- **Release / knowledge:** 2026-03-02 release; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-9B`
- **Context window:** 262,144 native, extensible to 1,010,000 tokens, verified Hugging Face model card.
- **Modalities:** Text, image, video in; text out; reasoning + tool calling supported.
- **Pricing (as of 2026-10-27):** ~$0.10/$0.15 per 1M in/out hosted; free self-host Apache-2.0.
- **Architecture:** 9B dense, 32 layers, Gated DeltaNet + Gated Attention hybrid, Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **66.1** (Hugging Face README)
- TAU2-Bench: **79.1%** (Hugging Face README)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (Hugging Face README)
- MMLU-Pro: **82.5%** (Hugging Face README)
- AA-LCR: **63.0** (Hugging Face README)
- LongBench v2: **55.2** (Hugging Face README)
- HLE: no verified public score found

Coding:

- LiveCodeBench v6: **65.6%** (Hugging Face README)
- OJBench: **29.2%** (Hugging Face README)
- SWE-bench Verified: no verified public score found

Vision / multimodal:

- MMMU: **78.4%** (Hugging Face README)
- MMMU-Pro: **70.1%** (Hugging Face README)
- MathVision: **78.9%** (Hugging Face README)
- OmniDocBench1.5: **87.7%** (Hugging Face README)

Long context:

- AA-LCR 63.0 at 262k.

### Normalized scores (1–100)

- **Tool use: 68/100.** BFCL-V4 66.1 + TAU2-Bench 79.1% strong; no Terminal-Bench 2.1.
- **Reasoning: 77/100.** GPQA Diamond 81.7% and MMLU-Pro 82.5% strong for 9B; AA-LCR moderate.
- **Context window: 75/100.** 262k native, extensible to ~1M.
- **Multimodal: 80/100.** Image/video in, strong MMMU-Pro 70.1% and MathVision 78.9%.
- **Coding: 68/100.** LiveCodeBench v6 65.6% solid; OJBench 29.2% weak, no SWE-bench.
- **Cost efficiency: 98/100.** Very cheap hosted, Apache-2.0 free self-host.
- **Overall Score: 74/100.** Mean of five quality dims (68+77+75+80+68)/5 = 73.6 → 74.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
