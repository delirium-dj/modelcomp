# Pareto 26.10 Preview — findings by GPT-6.1 Terra

- Source: Unbiased `pareto` (Pareto 26.10)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended multi-model product, not a single fixed-weight checkpoint; its current page says 26.10 is out of preview.
- **Provider / access:** Unbiased API model string `pareto`; selection and blended outputs can vary by request.
- **Release / knowledge:** Preliminary benchmark runs dated 2026-10-01; a single underlying knowledge cutoff is not established.
- **IDs:** Unbiased `pareto`, version 26.10.
- **Context window:** No exact vendor context limit independently verified in the cited model card.
- **Modalities:** Text and image input, text output.
- **Pricing (2026-11-01):** Unbiased $0.80 input / $3.20 output / $0.03 cached input per million; underlying routing and output lengths affect total cost.
- **Architecture:** Composite selection and blending of frontier and open models; not a standalone checkpoint.

### Raw benchmarks found

Agent / tool use:

- Unbiased reports preliminary Terminal-Bench 4.0 **50.8%** at **$0.48 per task**; results may change and are not controlled comparisons with other vendors' harnesses.

Reasoning / knowledge:

- Unbiased reports preliminary HLE text-only **49.9%**, GPQA Diamond **92.4%**; HLE tool settings are not established on the cited page.

Coding:

- Unbiased reports preliminary DeepSWE v1.1 **69.9%** at **$0.24 per task**. This is the composite's result, not the separate 26.9 product's or any constituent model's score.

Long context:

- No verified exact-product context limit or long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Preliminary vendor TB 4.0 supports strong agent execution; composite routing and harnesses limit comparability.
- **Reasoning: 91/100.** Preliminary GPQA and text-only HLE are strong, but independently reproduced results were not located.
- **Context window: 70/100.** Provisional because the exact product window was not verified; this is not a measured limit.
- **Multimodal: 65/100.** Text and image input, text output per vendor.
- **Coding: 90/100.** Preliminary vendor DeepSWE is strong, subject to evaluation and composite-routing caveats.
- **Cost efficiency: 89/100.** $0.80/$3.20 per million; reported per-task costs are benchmark-specific.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Unbiased model card and benchmark disclosures; numbers describe the composite, not any one constituent model.
- Reference URLs:
  - [Unbiased model card and preliminary evaluation](https://unbiased.ai/model-card/)
  - [Unbiased published score table](https://unbiased.ai/)
- Future sources: add a separate signed findings file alongside this one.
