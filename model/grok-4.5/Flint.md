# Grok 4.5 — findings by Flint

- Source: xAI / Grok 4.5
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's reasoning-focused model; competitive with frontier labs; context 500K.
- **Provider / access:** xAI; API via xAI/OpenRouter.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** grok-4.5; Context: 500K; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- SWE-bench Pro: **64.7%** (Grok 4.5 family).
- Reasoning: Grok 4.5 reasoning evals.

### Cross-source comparison

- Independent: SWE-bench Pro leaderboard, BenchLM, Vals AI comparisons.

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-bench Pro **64.7 → mid.
- **Reasoning: 65/100.** Grok 4.5 reasoning evals → mid-high.
- **Context window: 75/100.** Documented **500K** → mid.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** SWE-bench Pro **64.7 → mid.
- **Cost efficiency: 85/100.** API pricing competitive.

- **Overall Score: 64/100.** Mean of the five quality dims (Tool 55 + Reasoning 65 + Context 75 + Multimodal 70 + Coding 55) / 5 = 66; Cost efficiency excluded.

## Signature

- Provided by: **Grok 4.5 (grok-4.5)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
