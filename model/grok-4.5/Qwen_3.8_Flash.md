# Grok 4.5 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.5 (`opencode/grok-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (base)
- **Short description:** xAI's reasoning-tier Grok (between 4.3 and 4.6). On BenchLM it ranks #33 of 645 (65.63/100; 31/618 rows, Reasoning type) with a genuinely strong coding/agentic core — Terminal-Bench 2.1 **83.3%**, SWE-bench (Vals) 86.6%, LiveCodeBench (Vals) 87.4%, AA Coding Index 72.5% — and clear knowledge bars (AA-GPQA 93.1%, AA-HLE 42.7%). Weaker on the newest/r hardest frontiers (Terminal-Bench 3.0 15.7%, ARC-AGI-3 0.3%) and on breadth of multimodal coverage. 500K window.
- **Provider / access:** xAI API / Grok app (`grok-4.5`); OpenCode (`opencode/grok-4.5`); OpenRouter (`x-ai/grok-4.5`). Reasoning + tool calls; image input.
- **Release / knowledge:** 2026 (xAI Grok 4.5 launch); cutoff not disclosed.
- **IDs:** `opencode/grok-4.5` / OpenRouter `x-ai/grok-4.5`.
- **Context window:** BenchLM lists **500K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 500K.
- **Modalities:** Text + image in; text out (AA-MMMU-Pro, Design Arena corroborate vision; curated `meta.json` "Text in/out" is a stub).
- **Pricing (as of 2026-10-02):** xAI proprietary mid-tier (exact per-1M not in curated meta; "Standard pricing" stub).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (31 of 618 rows; 65.63/100, #33 of 645, Reasoning type), citing the xAI Grok 4.5 launch post, Cursor blog/evals, Artificial Analysis, Vals AI, ARC Prize, VulcanBench, PostTrainBench and OpenRouter (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- Terminal-Bench 2.1 **83.3%** (Vals 67.8, AA reads consistent); GDPval-AA **1430 / 43.5%** (mid-band autonomy); AA Agentic Index 42.1%; deepSWE 53%
- new-hard frontier weak: Terminal-Bench 3.0 15.7%

Coding:

- SWE-bench (Vals) **86.6%**; LiveCodeBench (Vals) **87.4%**; AA Coding Index **72.5%** (over 70 bar); VulcanBench v3 89.9%; SWE Multilingual 78%; SWE-bench Pro 64.7%; CursorBench 3.2 66.7%; AA-SciCode 55.0%; PostTrainBench v1.1 23.4%

Reasoning / knowledge:

- AA-GPQA Diamond **93.1%** (Vals 92.9 — over 90 bar); AA-HLE **42.7%** (over 40 bar); MMLU-Pro (Vals) 89.2; AA Intelligence Index 38.8 (moderate)
- ARC-AGI-2 52.6% but ARC-AGI-3 **0.3%** (near-floor); CritPt 15.4%; AA-LCR 79.3
- AA-Omniscience Index 25.3 / Accuracy 51.6% / Hallucination 54.1% (moderate drag)

Multimodal / long context:

- AA-MMMU-Pro 80.4 (image); Design Arena Website 1290
- 500K window; AA-LCR 79.3 supportive (no ≥98% MRCR at 512K+ reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 78/100.** Terminal-Bench 2.1 83.3% is a strong real-terminal signal and deepSWE 53% / AA Agentic Index 42.1% are respectable, with GDPval-AA 1430 / 43.5% in the mid autonomy band; the brand-new Terminal-Bench 3.0 (15.7%) shows it hasn't yet mastered the hardest long-horizon tier.
- **Reasoning: 78/100.** AA-GPQA 93.1% and AA-HLE 42.7% both clear their bars and Intelligence Index 38.8 is solid, but ARC-AGI-3 collapses to 0.3% (ARC-AGI-2 52.6%), CritPt 15.4% is low, and a 54.1% hallucination rate is a moderate reliability drag.
- **Context window: 80/100.** A 500K window is well above the 200K band, backed by a supportive AA-LCR 79.3 for long-context reasoning; no ≥98% MRCR at 512K+ is published, so a mid/upper placement rather than the 95+ 1M tier. Curated `meta.json` (128K) is a stub and overridden.
- **Multimodal: 68/100.** Text+image in with strong vision reads (AA-MMMU-Pro 80.4, Design Arena 1290), but coverage is limited to image — no audio/video/document rows and text-only output — so it stays in the +image band (60–70) despite good scores.
- **Coding: 85/100.** SWE-bench (Vals) 86.6%, LiveCodeBench (Vals) 87.4%, VulcanBench 89.9% and an AA Coding Index of 72.5% (over the 70 bar) are a genuinely strong code profile; SWE-bench Pro 64.7%, SciCode 55.0% and PostTrainBench 23.4% temper it on the hardest/longest tasks.
- **Cost efficiency: 62/100.** xAI proprietary mid-tier pricing (no free ID; exact per-1M not published in curated meta) — provisionally near the ~$3/$15 mid band. Cost is excluded from Overall.
- **Overall Score: 78/100.** Mean of Tool 78, Reasoning 78, Context 80, Multimodal 68, Coding 85 = 77.8 → 78. Best fit: a strong agentic-coding reasoning model for software engineering and terminal work with good GPQA/HLE grounding and a large 500K window; it is thinner on multimodal breadth, unreliable on abstract novel-reasoning frontiers (ARC-AGI-3), and superseded upward by Grok 4.6.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the xAI Grok 4.5 launch post, Cursor, Artificial Analysis, Vals AI, ARC Prize, VulcanBench, PostTrainBench and OpenRouter); partial coverage (31/618, Reasoning). Curated `meta.json` stub (128K/text) corrected to verified 500K/image. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
