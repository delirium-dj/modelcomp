# Ring-2.6-1T — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2 (`temperature2.com/models/ring-2-6-1t/`, Artificial Analysis data measured 2026-10-20)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** inclusionAI's Ring-2.6-1T, released May 2026; trillion-parameter-scale model tailored for deeper reasoning and advanced agentic workflows; text input, text output; open weights (from inclusionAI).
- **Provider / access:** inclusionAI API (`ring-2.6-1t`, Chat Completions); Open weights on Hugging Face (`inclusionAI/ring-26` collection).
- **Release / knowledge:** Released 2026-05-08; knowledge cutoff not stated.
- **IDs:** `ring-2.6-1t` (inclusionAI API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 70.0% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling supported (agentic RL training); structured output/JSON not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.300/1M input, $2.50/1M output, $0.850 blended per 1M (temperature2). Paid API, no Free tier confirmed.
- **Architecture:** Trillion-parameter scale (per model name "1T"); from inclusionAI; proprietary training, open weights release; optimized for agentic workflows with KPop RL framework.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **92.4** (temperature2)
- Terminal-Bench 2.1: **43.1%** (temperature2)
- Terminal-Bench Hard: **28.8%** (temperature2)
- Terminal-Bench V4: **0%** (temperature2)
- τ-bench Banking: **17.9** (temperature2)

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (temperature2)
- IFBench: **44.6** (temperature2)
- Humanity's Last Exam: **21.6%** (temperature2)
- Artificial Analysis Intelligence Index: **16.6** (temperature2)

Coding:

- SciCode: **45.0%** (temperature2)
- Artificial Analysis Coding Index: **42.8** (temperature2)

Long context:

- LongContext Reasoning: **70.0%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** τ²-bench 92.4 is excellent; Terminal-Bench 2.1 43.1% and Terminal-Bench Hard 28.8% moderate-to-weak; τ-bench Banking 17.9% weak; Terminal-Bench V4 0%. Strong agentic reasoning benchmark, mixed terminal results.
- **Reasoning: 55/100.** GPQA Diamond 85.7% is strong; held down by HLE 21.6%, Intelligence Index 16.6 points, IFBench 44.6 moderate.
- **Context window: 55/100.** LongContext Reasoning 70.0% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 50/100.** SciCode 45.0%, AA Coding Index 42.8; no SWE-bench, LiveCodeBench, HumanEval scores found. Moderate scientific coding.
- **Cost efficiency: 35/100.** $0.300/1M input, $2.50/1M output — moderate-to-high pricing; paid API, no Free tier confirmed.
- **Overall Score: 46/100.** Half-up mean of (55 + 55 + 55 + 15 + 50) / 5 = 46.0 → 46. Best-fit recommendation: inclusionAI agentic model with strong τ²-bench; weak on multimodal and HLE.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.