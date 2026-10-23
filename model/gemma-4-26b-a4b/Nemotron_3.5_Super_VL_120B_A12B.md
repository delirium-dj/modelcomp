# Gemma 4 26B A4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2.com (`temperature2.com/models/gemma-4-26b-a4b/`, Artificial Analysis data measured 2026-10-23)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (Reasoning)
- **Short description:** Google's Gemma 4 26B A4B reasoning model, released April 2026; 26B total / 4B active MoE; reasoning effort variant; text input, text output; open weights (Gemma family).
- **Provider / access:** Google API / Hugging Face (`gemma-4-26b-a4b`, Chat Completions).
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not stated.
- **IDs:** `gemma-4-26b-a4b` (Google API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 65.7% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.100/1M input, $0.340/1M output, $0.160 blended per 1M (temperature2). Paid API, no Free tier confirmed.
- **Architecture:** Open weights; 26B total / ~4B active MoE per model name; reasoning effort variant.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **43.6** (temperature2)
- Terminal-Bench 2.1: **39.0%** (temperature2)
- Terminal-Bench Hard: **13.6%** (temperature2)
- τ-bench Banking: **12.0** (temperature2)

Reasoning / knowledge:

- GPQA Diamond: **79.2%** (temperature2)
- IFBench: **72.5** (temperature2)
- HLE: **19.3%** (temperature2)
- Artificial Analysis Intelligence Index: **16.7** (temperature2)

Coding:

- SciCode: **40.0%** (temperature2)
- Artificial Analysis Coding Index: **39.3** (temperature2)

Long context:

- LongContext Reasoning: **65.7%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** τ²-bench 43.6 moderate; Terminal-Bench 2.1 39.0% and Terminal-Bench Hard 13.6% weak; τ-bench Banking 12.0% weak. Moderate tool-use capability.
- **Reasoning: 55/100.** GPQA Diamond 79.2% solid, IFBench 72.5 moderate; held down by HLE 19.3% and Intelligence Index 16.7 points.
- **Context window: 60/100.** LongContext Reasoning 65.7% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 45/100.** SciCode 40.0%, AA Coding Index 39.3; no SWE-bench, LiveCodeBench, HumanEval scores found.
- **Cost efficiency: 55/100.** $0.100 input / $0.340 output per 1M — cheap; paid API, no Free tier confirmed.
- **Overall Score: 44/100.** Half-up mean of (45 + 55 + 60 + 15 + 45) / 5 = 44.0 → 44. Best-fit recommendation: efficient open-weight reasoning model with solid GPQA; weak on HLE and multimodal.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2.com/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.