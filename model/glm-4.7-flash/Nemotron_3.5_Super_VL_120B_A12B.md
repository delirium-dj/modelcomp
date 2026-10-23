# GLM 4.7 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2.com (`temperature2.com/models/glm-4-7-flash/`, Artificial Analysis data measured 2026-10-23)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash (Reasoning)
- **Short description:** Z.AI's GLM-4.7-Flash reasoning model, released January 2026; reasoning effort variant; text input, text output; proprietary (weights not public).
- **Provider / access:** Z.AI API (`glm-4.7-flash`, Chat Completions).
- **Release / knowledge:** Released 2026-01-19; knowledge cutoff not stated.
- **IDs:** `glm-4.7-flash` (Z.AI API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 41.7% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.070/1M input, $0.400/1M output, $0.153 blended per 1M (temperature2). Paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); reasoning effort variant; non-reasoning variant scores 10.6 Intelligence Index.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **98.8** (temperature2) — excellent
- Terminal-Bench Hard: **22.0%** (temperature2)

Reasoning / knowledge:

- GPQA Diamond: **58.1%** (temperature2)
- IFBench: **60.8** (temperature2)
- HLE: **7.6%** (temperature2) — very low
- Artificial Analysis Intelligence Index: **14.9** (temperature2)

Coding:

- No coding benchmarks found (no SciCode, SWE-bench, LiveCodeBench, etc.)

Long context:

- LongContext Reasoning: **41.7%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** τ²-bench 98.8 is excellent; Terminal-Bench Hard 22.0% weak. Strong on τ²-bench, mixed on terminal agent.
- **Reasoning: 40/100.** GPQA Diamond 58.1% moderate, IFBench 60.8 moderate; held down by very low HLE 7.6% and Intelligence Index 14.9 points.
- **Context window: 45/100.** LongContext Reasoning 41.7% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 30/100.** No coding benchmark scores found (no SWE-bench, LiveCodeBench, SciCode, etc.).
- **Cost efficiency: 55/100.** $0.070 input / $0.400 output per 1M — cheap input, moderate output; paid API, no Free tier confirmed.
- **Overall Score: 37/100.** Half-up mean of (55 + 40 + 45 + 15 + 30) / 5 = 37.0 → 37. Best-fit recommendation: strong τ²-bench reasoning; weak on HLE, coding, and multimodal.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2.com/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.