# Claude Fable 5 — findings by Flint

- Source: Anthropic / Claude Fable 5
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's frontier agentic-coding / knowledge model; second in Claude lineup after Opus 5.
- **Provider / access:** Anthropic API (claude-fable-5), Claude Max/Pro.
- **Release / knowledge:** Released ~2026; knowledge cutoff not stated in sources found.
- **IDs:** claude-fable-5; Context: 1M; Modalities: text, image, PDF; text out; reasoning; tool use; multimodal.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench 4.0: **55.8%** (vs GPT-6 Astra 57.9%); OSWorld: **70.2%** (vs Astra 72.6%); BrowseComp: **90.8%**.
- Reasoning: GPQA Diamond: **93.7%**; FrontierMath Tier 4: **87.8%** (vs Astra 97.6%).

### Cross-source comparison

- Independent: OpenAI comparisons, Vals AI, BenchLM.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB4.0 **55.8**, OSWorld **70.2**, BrowseComp **90.8%** → agentic high.
- **Reasoning: 80/100.** GPQA **93.7%**, FrontierMath **87.8%** → reasoning high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Multimodal evals → strong.
- **Coding: 75/100.** TB4.0 **55.8%**, OSWorld **70.2%** → coding mid-high.
- **Cost efficiency: 60/100.** $10/$50 → expensive.

- **Overall Score: 82/100.** Mean of the five quality dims (Tool 75 + Reasoning 80 + Context 100 + Multimodal 80 + Coding 75) / 5 = 80; Cost efficiency excluded.

## Signature

- Provided by: **Claude Fable 5 (claude-fable-5)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
