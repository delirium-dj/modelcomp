# Gemini 2.0 Flash — findings by Flint

- Source: Google / Gemini 2.0 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Google).
- **Short description:** Fast/cheap Google model; coding/knowledge for its tier.
- **Provider / access:** Google AI (Gemini API, AI Studio, Antigravity, Gemini Enterprise).
- **Release / knowledge:** Released 2024; knowledge cutoff not stated in sources found.
- **IDs:** gemini-2.0-flash; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI comparisons of Gemini 2.0 Flash.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter.

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding agentic evals → mid.
- **Reasoning: 60/100.** Reasoning evals → mid-high.
- **Context window: 75/100.** Context **1M** → mid-high.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** Coding agentic evals → mid.
- **Cost efficiency: 90/100.** Open-weight / low cost tier.

- **Overall Score: 63/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 75 + Multimodal 70 + Coding 55) / 5 = 59; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 2.0 Flash (gemini-2.0-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
