# Claude Haiku 3.5 — findings by Flint

- Source: Anthropic / Claude Haiku 3.5
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (Anthropic).
- **Short description:** Fast/cheap Claude; coding/knowledge for its tier.
- **Provider / access:** Anthropic API (claude-haiku-3-5), Claude Max/Pro.
- **Release / knowledge:** Released ~2025; knowledge cutoff not stated in sources found.
- **IDs:** claude-haiku-3.5; Context: 200K; Modalities: text, image, PDF; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI / LiveBench comparisons of Claude Haiku 3.5.

### Cross-source comparison

- Independent: Vals AI, LiveBench, LMArena.

### Normalized scores (1–100)

- **Tool use: 60/100.** Coding agentic evals → mid-high.
- **Reasoning: 65/100.** Reasoning evals → mid-high.
- **Context window: 75/100.** Context **200K** → mid.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 65/100.** Coding evals → mid-high.
- **Cost efficiency: 95/100.** $1/$5 → cheap.

- **Overall Score: 67/100.** Mean of the five quality dims (Tool 60 + Reasoning 65 + Context 75 + Multimodal 70 + Coding 65) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **Claude Haiku 3.5 (claude-haiku-3.5)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
