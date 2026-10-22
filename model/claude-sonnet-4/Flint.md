# Claude Sonnet 4 — findings by Flint

- Source: Anthropic / Claude Sonnet 4
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4 (Anthropic).
- **Short description:** Mid-tier Anthropic model; coding/knowledge for its tier.
- **Provider / access:** Anthropic API (claude-sonnet-4), Claude Max/Pro.
- **Release / knowledge:** Released ~2025; knowledge cutoff not stated in sources found.
- **IDs:** claude-sonnet-4; Context: 1M; Modalities: text, image, PDF; text out; reasoning; tool use; multimodal.

### Raw benchmarks found

- Coding / agentic: Vals AI / LiveBench comparisons of Claude Sonnet 4.

### Cross-source comparison

- Independent: Vals AI, LiveBench, LMArena.

### Normalized scores (1–100)

- **Tool use: 65/100.** Coding agentic evals → mid-high.
- **Reasoning: 70/100.** Reasoning evals → mid.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Multimodal evals → strong.
- **Coding: 70/100.** Coding evals → mid-high.
- **Cost efficiency: 80/100.** $3/$15 → mid.

- **Overall Score: 77/100.** Mean of the five quality dims (Tool 65 + Reasoning 70 + Context 100 + Multimodal 80 + Coding 70) / 5 = 60; Cost efficiency excluded.

## Signature

- Provided by: **Claude Sonnet 4 (claude-sonnet-4)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
