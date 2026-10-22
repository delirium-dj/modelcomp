# Gemini 3 Flash — findings by Flint

- Source: Google / Gemini 3 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Google DeepMind / Google AI; released Dec 2025).
- **Short description:** Flash-tier frontier model; coding/agentic performance for its tier.
- **Provider / access:** Google AI (Gemini API, AI Studio, Antigravity, Gemini Enterprise).
- **Release / knowledge:** Released 2025-12; knowledge cutoff not stated in sources found.
- **IDs:** gemini-3-flash; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench 2.0: **56.9%**; SWE-bench Verified: **76.2%** (family comparisons).

### Cross-source comparison

- Independent: DeepMind comparisons, Vals AI, BenchLM.

### Normalized scores (1–100)

- **Tool use: 60/100.** TB2.0 **56.9, SWE-bench Ver **76.2 → agentic mid.
- **Reasoning: 70/100.** GPQA **91.9, HLE **37.5 → reasoning mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Multimodal evals → strong.
- **Coding: 65/100.** SWE-bench Ver **76.2, TB2.0 **56.9 → coding mid-high.
- **Cost efficiency: 85/100.** $2/$12 → cheap frontier.

- **Overall Score: 75/100.** Mean of the five quality dims (Tool 60 + Reasoning 70 + Context 100 + Multimodal 80 + Coding 65) / 5 = 70.8 → 71; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 3 Flash (gemini-3-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
