# Gemma 4 31B — findings by Kimi K3

- Source: Google / Gemma 4 31B (`google/gemma-4-31B`, Apache-2.0 open weights)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; official HF model card now verifies architecture, license, cutoff, and fills the MRCR long-context and LiveCodeBench coding gaps)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (dense)
- **Short description:** Google's largest open-weight Gemma 4 dense model — 30.7B dense with strong size-class results (AIME 89.2%, Codeforces 2150 Elo, MMMU-Pro 76.9% per the official card), weak into frontier-reasoning territory (HLE no-tools 19.5%). 256K context, 140+ languages, Apache 2.0.
- **Provider / access:** open weights (HF `google/gemma-4-31B`, Kaggle); no verified Zen Free ID.
- **Release / knowledge:** Gemma 4 family, July 2026 (arXiv technical report 2607.02770, published Jul 2, 2026 — verified this pass); knowledge cutoff **January 2025** (official card — verified this pass).
- **IDs:** `google/gemma-4-31B` / `google/gemma-4-31B-it` (open weights).
- **Context window:** **256K tokens** (official card — medium-size tier; smalls are 128K). MRCR v2 8-needle 128K: 66.4% (official).
- **Modalities:** text + **image** in → text out; video via frame sequences (official card); **NO native audio** (audio encoder exists only on E2B/E4B/12B — first pass's silent assumption corrected); reasoning yes (configurable thinking via `<|think|>`); native function calling; native system role support.
- **Pricing (as of 2026-10-13):** open weights (Apache 2.0) — self-host; not deployed by any HF Inference Provider at card-check time.
- **Architecture:** **30.7B params dense, 60 layers, sliding-window 1024 + p-RoPE hybrid attention, ~550M-param vision encoder, 262K vocab** (official card table — all new this pass; HF safetensors reports 33B loaded).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2 average over 3): **76.9%** (official card — new; first-pass benchlm row was 59.9% — wide harness split, official figure likely full-effort)
- GDPval-AA: **755 Elo** (5.3% normalized) (benchlm.ai, first-pass snapshot)
- Gert Labs: **35.3%**; AA Agentic Index: **6.7%** (benchlm.ai, first-pass snapshot)
- Terminal-Bench / Claw-Eval / Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (official card; matches first-pass GPQA figure) — AA 85.7% (benchlm.ai)
- HLE: **19.5%** no tools / **26.5%** with search (official card — exactly matches first-pass rows); AA-HLE 23.6% (benchlm.ai)
- AIME 2026 (no tools): **89.2%** (official card — **new**, elite for 31B); BigBench Extra Hard: **74.4%**; MMMLU: **88.4%** (official card — **new**)
- AA-LCR: **69.7%**; CritPt: **1.4%** (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: **19.0**; BenchLM overall **44.84/100, #97 of 507** (benchlm.ai, first-pass snapshot)
- AA-Omniscience Index: **−47.9%** — Accuracy 20.0% / Hallucination Rate 85.0% (benchlm.ai, first-pass snapshot)
- MMLU-Pro: **85.2%** (official card — exactly matches first pass); AA-IFBench: 75.6% (benchlm.ai)

Coding:

- LiveCodeBench v6: **80.0%** (official card — **new**; fills the first-pass LCB gap); Codeforces ELO: **2150** (official card — **new**, elite size-class competitive programming)
- React Native Evals: 75.2%; SWE-Rebench: 41.6%; AA-SciCode: 45.5%; AA Coding Index: 43.4 (benchlm.ai, first-pass snapshot)
- SWE-bench Verified: no verified public score found

Long context:

- **MRCR v2 (8-needle) 128K: 66.4%** (official card — **new**; fills the first-pass MRCR gap); AA-LCR 69.7% within the 256K window (benchlm.ai)

Multimodal:

- MMMU-Pro: **76.9%** (official card — matches first pass); MATH-Vision: **85.6%**; OmniDocBench 1.5 avg edit distance: **0.131** (lower better; official card — **new**)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 55/100.** +5 — official τ²-bench 76.9% is genuinely decent (first-pass independent 59.9% — split noted); still capped severely by GDPval-AA 755 Elo and Agentic Index 6.7%.
- **Reasoning: 62/100.** +2 — AIME 89.2% and BBH 74.4% (official, new) join GPQA 84.3%/MMLU-Pro 85.2%; still capped by HLE ~20–26%, CritPt 1.4%, hallucination 85%.
- **Context window: 66/100.** Unchanged — 256K window confirmed official; MRCR v2 66.4% at 128K (new, middling-tier) and LCR 69.7% keep it below the 1M class.
- **Multimodal: 78/100.** +2 — MMMU-Pro 76.9% + MATH-Vision 85.6% + OmniDoc 0.131 (official) + video-via-frames support; capped by no native audio and text-only output.
- **Coding: 66/100.** +6 — LiveCodeBench v6 80.0% and Codeforces 2150 (official, new) materially lift the ceiling; capped by SWE-Rebench 41.6% and Coding Index 43.4.
- **Cost efficiency: 92/100.** Unchanged — Apache-2.0 open weights; 30.7B dense is self-hostable on a single high-memory GPU.
- **Overall Score: 65/100.** Mean of the five quality dims (55+62+66+78+66)/5 = 65.4 → 65 (was 62; the official card's new coding/reasoning/multimodal rows all verified better than the first-pass caps). Best fit: self-hosted mid-size multimodal chat/RAG and competitive-programming-adjacent coding where open licensing matters.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (official HF model card `google/gemma-4-31B` — 30.7B dense architecture table, Apache-2.0 license, Jan 2025 cutoff, official benchmark table incl. AIME/Codeforces/LCB v6/MRCR v2/MATH-Vision rows; arXiv 2607.02770 published Jul 2 2026). First-pass benchlm.ai rows retained and flagged as that snapshot; τ²-bench conflict (59.9% independent vs 76.9% official) noted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
