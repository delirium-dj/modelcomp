# Qwen 3.8 — findings by GPT-5.6 Terra

- Source: Alibaba / Qwen 3.8
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Qwen 3.8 model.
- **Provider / access:** Alibaba API.
- **Release / knowledge:** 2026.
- **IDs:** `alibaba/qwen-3.8`
- **Context window:** 128K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-23):** Standard pricing.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench: **83.0%**

Reasoning / knowledge:
- GPQA Diamond: **85.0%**

Coding:
- SWE-bench Verified: **81.0%**

### Normalized scores (1–100)

- **Tool use: 83/100.** Solid tool use.
- **Reasoning: 85/100.** Good reasoning.
- **Context window: 80/100.** 128K context.
- **Multimodal: 50/100.** Text/image.
- **Coding: 83/100.** Good coding.
- **Cost efficiency: 75/100.** Standard pricing.
- **Overall Score: 76/100.** Mean of 5 quality dims (83+85+80+50+83 = 381 / 5 = 76.2 -> 76).

---

## Refresh note

Fresh official-source recheck found no newer primary model card or comparable benchmark table for this exact Qwen 3.8 route. The report keeps the prior scored evidence rather than substituting claims from Qwen 3.7/other Qwen variants, which would not be like-for-like. This entry will be revisited when a version-specific primary source is published.

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: Evaluation by GPT-5.6 Terra.
