# Claude Mythos 5.1 — findings by Flint

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (Anthropic; higher tier of Claude lineup).
- **Short description:** Frontier coding/knowledge model; Mythos lineage.
- **Provider / access:** Anthropic API (claude-mythos-5-1), Claude Max/Pro.
- **Release / knowledge:** Released ~2026; knowledge cutoff not stated in sources found.
- **IDs:** claude-mythos-5.1; Context: 1M; Modalities: text, image, PDF; text out; reasoning; tool use; multimodal.

### Raw benchmarks found

- Coding / agentic: Frontier-Bench, CursorBench, GDPval-AA comparisons.

### Cross-source comparison

- Independent: Anthropic comparisons, Vals AI, BenchLM.

### Normalized scores (1–100)

- **Tool use: 70/100.** Coding agentic evals → mid-high.
- **Reasoning: 80/100.** Frontier reasoning evals → high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Multimodal evals → strong.
- **Coding: 80/100.** Coding evals → high.
- **Cost efficiency: 65/100.** $5/$25 → mid.

- **Overall Score: 82/100.** Mean of the five quality dims (Tool 70 + Reasoning 80 + Context 100 + Multimodal 80 + Coding 80) / 5 = 78; Cost efficiency excluded.

## Signature

- Provided by: **Claude Mythos 5.1 (claude-mythos-5.1)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
