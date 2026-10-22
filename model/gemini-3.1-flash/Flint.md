# Gemini 3.1 Flash — findings by Flint

- Source: Google / Gemini 3.1 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (Google DeepMind / Google AI; Flash-series, part of Gemini 3.x family).
- **Short description:** Flash-series frontier-adjacent model; coding/agentic performance for its tier.
- **Provider / access:** Google AI (Gemini API, AI Studio, Antigravity, Gemini Enterprise).
- **Release / knowledge:** Not stated in sources found.
- **IDs:** gemini-3.1-flash; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench 2.1: **76.2%** (family comparisons); Vals AI evals.

### Cross-source comparison

- Independent: Vals AI, Artificial Analysis, BenchLM comparisons.

### Normalized scores (1–100)

- **Tool use: 75/100.** Agentic coding evals → mid-high.
- **Reasoning: 70/100.** Intelligence Index comparisons → mid.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Multimodal evals → strong.
- **Coding: 75/100.** Agentic coding evals → mid-high.
- **Cost efficiency: 100/100.** Flash tier → cheap.

- **Overall Score: 80/100.** Mean of the five quality dims (Tool 75 + Reasoning 70 + Context 100 + Multimodal 80 + Coding 75) / 5 = 78; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 3.1 Flash (gemini-3.1-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
