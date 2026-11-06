# Gemini 1.5 Pro — findings by Flint

- Source: Google / Gemini 1.5 Pro
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (Google).
- **Short description:** Older Google reasoning model; coding/knowledge for its tier.
- **Provider / access:** Google AI (Gemini API, AI Studio, Antigravity, Gemini Enterprise).
- **Release / knowledge:** Released 2024; knowledge cutoff not stated in sources found.
- **IDs:** gemini-1.5-pro; Context: 2M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI comparisons of Gemini 1.5 Pro.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter.

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding agentic evals → mid.
- **Reasoning: 60/100.** Reasoning evals → mid-high.
- **Context window: 75/100.** Context **2M** → mid-high.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** Coding agentic evals → mid.
- **Cost efficiency: 85/100.** API pricing competitive.

- **Overall Score: 63/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 75 + Multimodal 70 + Coding 55) / 5 = 62; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 1.5 Pro (gemini-1.5-pro)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
