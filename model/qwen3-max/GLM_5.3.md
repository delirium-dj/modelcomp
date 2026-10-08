# Qwen3 Max — findings by GLM 5.3

- Source: Alibaba (`qwen3-max`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning and tool use, with thinking mode — now a legacy tier: the Qwen3.5/3.6/3.7/3.8 Max successors dominate the current line (BenchLM composite 40.16 vs 70.52 for Qwen3.8 Max).
- **Provider / access:** Alibaba API ($1.20 in / $6.00 out per 1M, tiered above 32K/128K per project meta). Project meta lists Zen ID `opencode/qwen3-max` (absent from the live Zen models list when re-checked 2026-10-08 — the Zen catalog carries qwen3.8-max/qwen3.7-max instead; no Free ID).
- **Release / knowledge:** 2025 (Qwen3 generation); knowledge cutoff not stated.
- **IDs:** `opencode/qwen3-max` (project meta); also `qwen/qwen3-max` on OpenRouter.
- **Context window:** 262,144 total, 65,536 max output (project meta; BenchLM lists 1M — the curated 262K is used as the conservative verified figure).
- **Modalities:** text in/out only; thinking mode yes; tool calls yes (τ²-bench measured); JSON mode not verified.
- **Pricing (as of 2026-10-08):** $1.20 in / $6.00 out per 1M (Alibaba, tiered above 32K/128K input thresholds).
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **74.3%** (Artificial Analysis via BenchLM)
- Gert Labs: **43.74%** (Gert Labs rankings via BenchLM)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval: **no verified public score found** on current harnesses

Reasoning / knowledge:

- GPQA Diamond: **76.4%** (AA via BenchLM)
- HLE: **11.9%** (AA via BenchLM)
- AA-LCR: **50.0%** (AA via BenchLM)
- CritPt: **0.0%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **15.6** (AA via BenchLM)
- AA-Omniscience Index: **-43.5** (accuracy 24.4%, hallucination rate 89.9%) (AA via BenchLM)

Coding:

- Vibe Code Bench: **3.51%** (Vals v1.1 via BenchLM)
- Design Arena Website: **1125** (OpenRouter benchmarks via BenchLM)
- SWE-bench / LiveCodeBench / SciCode: **no verified public score found** on current harnesses

Multimodal:

- **no verified public score found** — text-only model.

Long context:

- 262K window (project meta; BenchLM lists 1M); AA-LCR 50.0% is the only long-context proxy — weak; no MRCR/RULER published.

Instruction following:

- AA-IFBench: **44.1%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 74.3% is respectable, but Gert Labs 43.7% and the absence of any Terminal-Bench/GDPval/Tau3 coverage leave a thin, dated agentic record.
- **Reasoning: 48/100.** GPQA 76.4% is upper-mid, but HLE 11.9%, AA Intelligence Index 15.6 (below the 20–35 mid band), CritPt 0.0% and an 89.9% hallucination rate (Omniscience -43.5) drag it under the mid line.
- **Context window: 70/100.** 262K verified per project meta at the 200K (=70) tier floor, with weak measured long-context reasoning (AA-LCR 50.0%).
- **Multimodal: 15/100.** Text-only input and output — text-only band.
- **Coding: 42/100.** The only verified coding-adjacent numbers are dismal on modern harnesses (Vibe Code Bench 3.51%, Design Arena 1125) with zero SWE-bench/LiveCodeBench coverage — the 2025 flagship coding story has not aged into current benchmarks.
- **Cost efficiency: 72/100.** $1.20/$6.00 per 1M sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) classes, with tiered pricing raising the effective rate on longer inputs.
- **Overall Score: 46/100.** (55 + 48 + 70 + 15 + 42) / 5 = 46. Best-fit recommendation: none on current evidence — a superseded text-only flagship with a 90% hallucination rate; pay slightly more for Qwen3.8 Max (or less for Qwen3.8 Flash) instead.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (BenchLM aggregating Artificial Analysis leaderboards, Vals, OpenRouter, Gert Labs; project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores. 2026-measured independent numbers were weighted over launch-era claims.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
