# Pareto 26.10 Preview - findings by Flint

- Source: Unbiased / Pareto 26.10 Preview (blended multimodal model)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended multimodal model: runs multiple language models in parallel and returns a synthesized answer; composite preview for research, coding and agents.
- **Provider / access:** Unbiased (`https://unbiased.ai/model-card/`, `https://developers.cloudflare.com/ai/models/unbiased/pareto/`), OpenRouter (`unbiased/pareto-26.10`).
- **Release / knowledge:** Released 2026-09-17; preview released October 2026.
- **IDs:** `unbiased/pareto-26.10`; `opencode/pareto-26.10-preview`.
- **Context window:** Conflicting: models.dev **262,144** context / **131,072** out; repo meta.json **1,000,000** in / **131,000** out.
- **Modalities:** Text + image in; text out.
- **Pricing (as of 2026-10-25):** $0.80/$3.20 per 1M (cached $0.03).

- **Architecture:** Proprietary blended composite; models.dev: open_weights = false.

### Raw benchmarks found

- Coding:
  - DeepSWE: **69.9%** (Pareto 26.10, Oct 1, 2026), cost/task **$0.24**; Pareto 26.9: **70.0%** ($0.29); Fable 5: **70.0%** ($13.50).
- Reasoning: reasoning not supported by design (composite).

### Cross-source comparison

- DeepSWE conflict: Pareto 26.10 **69.9%** ($0.24/task) vs Pareto 26.9 **70.0%** ($0.29) vs Fable 5 **70.0%** ($13.50) -> composite frontier.

### Normalized scores (1-100)

- **Tool use: 70/100.** Composite agentic design; DeepSWE **69.9%** -> strong.
- **Reasoning: 40/100.** Reasoning not supported by design -> low.
- **Context window: 90/100.** 1M in / 131K out claimed (repo meta) vs 262K in (models.dev) -> high/conflicted.
- **Multimodal: 85/100.** Text + image in -> high.
- **Coding: 80/100.** DeepSWE **69.9%** -> strong coding.
- **Cost efficiency: 90/100.** DeepSWE **$0.24/task** -> excellent value.

- **Overall Score: 73/100.** Mean of the five quality dims (70 + 40 + 90 + 85 + 80) / 5 = 73; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/pareto-26.10-preview)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
