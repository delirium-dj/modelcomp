# DeepSeek V4.1 Flash 1017 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2.com (`temperature2.com/models/deepseek-v4-1-flash-1017/`, Artificial Analysis data measured 2026-10-23)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017 (Max)
- **Short description:** DeepSeek's V4.1 Flash 1017 Max reasoning effort model, released October 2026; text input, text output; proprietary (weights not public); Max reasoning effort variant.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash-1017`, Chat Completions).
- **Release / knowledge:** Released 2026-10-17; knowledge cutoff not stated.
- **IDs:** `deepseek-v4.1-flash-1017` (DeepSeek API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 82.7% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.300/1M input, $1.20/1M output, $0.525 blended per 1M (temperature2). Paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); Max reasoning effort variant.

### Raw benchmarks found

Reasoning / knowledge:

- LongContext Reasoning: **82.7%** (temperature2)
- SciCode: **55.9%** (temperature2)
- Humanity's Last Exam: **43.3%** (temperature2)

Agent / tool use:

- Terminal-Bench V4: **0%** / **33.8** (temperature2) — index value

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** Terminal-Bench V4 33.8 (index); no BrowseComp, OSWorld, MCP Atlas scores found.
- **Reasoning: 55/100.** HLE 43.3% moderate; SciCode 55.9% moderate; Intelligence Index 45.1 points; no GPQA/MMLU/ARC-AGI scores found.
- **Context window: 75/100.** LongContext Reasoning 82.7% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 55/100.** SciCode 55.9% measured; no SWE-bench, LiveCodeBench, HumanEval scores found.
- **Cost efficiency: 45/100.** $0.300 input / $1.20 output per 1M — moderate pricing; paid API, no Free tier confirmed.
- **Overall Score: 47/100.** Half-up mean of (35 + 55 + 75 + 15 + 55) / 5 = 47.0 → 47. Wait: (35+55+75+15+55) = 235 / 5 = 47.0 → 47. Best-fit recommendation: reasoning-focused Flash model with strong long-context; weak on multimodal and agentic tool use.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2.com/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.