# North Mini Code — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2 (`temperature2.com/models/north-mini-code/`, Artificial Analysis data measured 2026-10-20)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's North Mini Code, released June 2026; coding-optimized model; text input, text output; free API; from Cohere.
- **Provider / access:** Cohere API (`north-mini-code`, Chat Completions).
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff not stated.
- **IDs:** `north-mini-code` (Cohere API). Free ID confirmed on OpenCode Zen (per temperature2 pricing $0.000).
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 37.3% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.000/1M input, $0.000/1M output — free (temperature2). Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); coding-optimized; from Cohere.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.6%** (temperature2)
- Terminal-Bench Hard: **31.1%** (temperature2)
- Terminal-Bench V4: **0%** (temperature2)
- τ²-bench: **37.4** (temperature2)
- τ-bench Banking: **6.4** (temperature2)

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (temperature2)
- IFBench: **57.6** (temperature2)
- Humanity's Last Exam: **11.1%** (temperature2)
- Artificial Analysis Intelligence Index: **9.9** (temperature2)

Coding:

- SciCode: **38.8%** (temperature2)
- Artificial Analysis Coding Index: **36.5** (temperature2)

Long context:

- LongContext Reasoning: **37.3%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** Terminal-Bench 2.1 35.6%, Terminal-Bench Hard 31.1%, τ²-bench 37.4 moderate; Terminal-Bench V4 0% and τ-bench Banking 6.4% very weak. Moderate terminal agent, weak banking agent.
- **Reasoning: 40/100.** GPQA Diamond 75.7% is strong; held down by very low HLE 11.1%, Intelligence Index 9.9 points, IFBench 57.6 moderate.
- **Context window: 40/100.** LongContext Reasoning 37.3% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 45/100.** SciCode 38.8%, AA Coding Index 36.5; no SWE-bench, LiveCodeBench, HumanEval scores found. Moderate scientific coding, weak competitive coding.
- **Cost efficiency: 100/100.** Free API ($0.000/$0.000 per 1M) — maximum cost efficiency score.
- **Overall Score: 35/100.** Half-up mean of (35 + 40 + 40 + 15 + 45) / 5 = 35.0 → 35. Best-fit recommendation: free Cohere coding model; decent GPQA but weak on HLE, multimodal, and agentic workloads.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.