# GPT-5.2 Codex — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2.com (`temperature2.com/models/gpt-5-2-codex/`, Artificial Analysis data measured 2026-10-23)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex (Xhigh)
- **Short description:** OpenAI's GPT-5.2 Codex Xhigh reasoning effort model, released December 2025; coding-optimized reasoning variant; text input, text output; proprietary (weights not public).
- **Provider / access:** OpenAI API (`gpt-5.2-codex`, Chat Completions).
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff not stated.
- **IDs:** `gpt-5.2-codex` (OpenAI API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 82.3% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $1.75/1M input, $14/1M output, $4.81 blended per 1M (temperature2). Expensive paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); Xhigh reasoning effort variant.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **92.1** (temperature2) — excellent
- Terminal-Bench Hard: **37.1%** (temperature2)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (temperature2) — excellent
- IFBench: **77.6** (temperature2)
- HLE: **35.7%** (temperature2)
- Artificial Analysis Intelligence Index: **28.5** (temperature2)

Coding:

- No coding benchmarks found (no SWE-bench, LiveCodeBench, SciCode, etc.)

Long context:

- LongContext Reasoning: **82.3%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** τ²-bench 92.1 excellent; Terminal-Bench Hard 37.1% moderate. Strong on τ²-bench, moderate on terminal agent.
- **Reasoning: 65/100.** GPQA Diamond 89.9% excellent, IFBench 77.6 moderate; held down by HLE 35.7% and Intelligence Index 28.5 points.
- **Context window: 75/100.** LongContext Reasoning 82.3% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 40/100.** No coding benchmark scores found (no SWE-bench, LiveCodeBench, SciCode, etc.) despite being a Codex variant.
- **Cost efficiency: 20/100.** $1.75 input / $14 output per 1M — very expensive; paid API, no Free tier confirmed.
- **Overall Score: 52/100.** Half-up mean of (65 + 65 + 75 + 15 + 40) / 5 = 52.0 → 52. Best-fit recommendation: strong reasoning and long-context model; very expensive; coding scores not independently verified.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2.com/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.