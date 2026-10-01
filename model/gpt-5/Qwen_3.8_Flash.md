# GPT-5 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5 (`opencode/gpt-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (medium reasoning slice)
- **Short description:** OpenAI's August 2025 router flagship, scored here from its **medium** reasoning-effort slice (BenchLM `gpt-5-medium`). Thin independent coverage (13 of 618 rows, no coding rows published), strong τ² tool use and MATH-500, but weak deep-reasoning reads (HLE 25.4%, CritPt 0.0%) and an 83.2% hallucination rate — the launch-coding records were set by the high/Pro reasoning tiers, not this slice.
- **Provider / access:** OpenAI API (`gpt-5`); OpenCode Zen (`opencode/gpt-5`); no free ID. Router pairing a fast model with a deeper reasoning model; reasoning + tool calls.
- **Release / knowledge:** Aug 2025 (OpenAI GPT-5 launch); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5` / OpenAI `gpt-5`.
- **Context window:** curated meta **400K total / 128K max out** (authoritative); BenchLM reports 128K for this reasoning slice.
- **Modalities:** text, image, file in; text out; reasoning; tool calls (curated meta). Only one grounded vision row published (MMMU-Pro).
- **Pricing (as of 2026-10-02):** OpenAI $1.25 / $10 per 1M (cached $0.125); OpenCode Zen $1.07 / $8.50 per 1M.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (13 of 618 rows; 47.05/100, #107 of 645 — **the `gpt-5-medium` reasoning slice**), citing Artificial Analysis and OpenRouter (fetched 2026-10-02). Coverage is very thin; **no Terminal-Bench/GDPval/OSWorld agentic rows and no SWE-bench/LiveCodeBench coding rows are published**, so Tool and Coding are scored conservatively from the evidence available.

Agent / tool use:

- τ²-bench **86.5%** — the only agentic row published (no Terminal-Bench, GDPval-AA, OSWorld or BrowseComp coverage)

Reasoning / knowledge:

- AA-GPQA Diamond **84.2%** (under the 90 bar); AA-HLE **25.4%** — far under the 40% bar; Intelligence Index 22.9; AA-LCR 76.0
- CritPt **0.0%**; AA-IFBench 70.6; AA MATH-500 **99.1%** — strong formal math
- Omniscience Index -10.9 / Accuracy 39.5% / Hallucination **83.2%** — severe confabulation

Coding:

- **no verified public coding benchmark for this slice** (SWE-bench / LiveCodeBench / SciCode / Coding Index all absent; MATH-500 and Design Arena are not agentic-code substitutes)

Multimodal / long context:

- AA-MMMU-Pro **74.3%** (only image row); Design Arena Website 1192
- 400K window / 128K out (AA-LCR 76.0; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Evidence-limited dims are scored conservatively, not inflated.

- **Tool use: 60/100.** τ²-bench 86.5% is a genuinely good single-turn tool-use signal, but it is the *only* agentic row — with no Terminal-Bench, GDPval-AA or OSWorld coverage there is no evidence of sustained multi-step autonomy, so a cautious mid placement.
- **Reasoning: 55/100.** MATH-500 99.1% is excellent, but GPQA 84.2% sits under the 90 bar, HLE 25.4% misses the 40% bar badly, Intelligence Index 22.9 is low, CritPt is 0.0% and an 83.2% hallucination rate (-10.9 index) makes unaided reasoning unreliable — consistent with a medium-effort slice.
- **Context window: 72/100.** The curated 400K window (128K out) sits between the 100–200K (50–64) and ≥1M (95–100) bands; AA-LCR 76.0 is supportive and no ≥98% MRCR is demonstrated, so an upper-mid placement.
- **Multimodal: 65/100.** Text+image+file in with a single mid vision row (MMMU-Pro 74.3, Design Arena 1192) — a +image band (60–70); file/PDF input is advertised but no document benchmark is published, so no higher-tier credit.
- **Coding: 58/100.** No verified coding benchmark exists for this slice; strong MATH-500 and the τ²/Design-Arena signals hint at code-adjacent ability, but with zero SWE-bench/LiveCodeBench rows the score is an evidence-limited conservative floor, not a measured result.
- **Cost efficiency: 80/100.** $1.25 / $10 per 1M (cached $0.125; Zen $1.07/$8.50) is well under the $3/$15≈60 anchor. Cost is excluded from Overall.
- **Overall Score: 62/100.** Mean of Tool 60, Reasoning 55, Context 72, Multimodal 65, Coding 58 = 62.0 → 62. Best fit: a 2025-era general/reasoning default for math-adjacent and file/image tasks at low cost, where outputs are grounded and checked; but this medium slice is evidence-thin and superseded on every axis by GPT-5.1→5.5 and the high/Pro reasoning tiers — do not treat these scores as the peak GPT-5 result.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `gpt-5-medium` rows citing Artificial Analysis and OpenRouter); very partial coverage (13/618), Tool/Coding scored conservatively from the evidence present. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
