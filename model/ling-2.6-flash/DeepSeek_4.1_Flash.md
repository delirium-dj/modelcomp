# Ling 2.6 Flash — findings by DeepSeek 4.1 Flash

- Source: Ant Group / InclusionAI / Ling-2.6-flash (`inclusionAI/Ling-2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** Ant Group's small efficient open-weight **non-reasoning** MoE (released ~2026-04-21), a 104B/7.4B-active "instant" instruct model with a 256K context and tool use, built for cheap high-throughput serving.
- **Provider / access:** Open weights self-host (`inclusionAI/Ling-2.6-flash`); listed on OpenRouter (`inclusionai/ling-2.6-flash`) but no live endpoints; OpenAI-compatible. MIT license.
- **Release / knowledge:** ~2026-04-21 (AA); tech report arXiv:2606.15079 (2026-06-13); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-flash`.
- **Context window:** 262,144 (256K) tokens (HF/AA); LLM Stats lists 131K via DeepInfra. Max output not separately published.
- **Modalities:** text in; text out. "Instant"/non-reasoning instruct; tool use (BFCL/τ²). No image/audio/video.
- **Pricing (as of 2026-10-09):** open weights (MIT, self-host); no first-party hosted price.
- **Architecture:** MoE, **~104B total / 7.4B active** (HF text 104B; metadata/AA 107B); 32 layers, 256 routed experts (8 active + 1 shared), 1:7 MLA + Lightning linear hybrid; MIT.

### Raw benchmarks found

> Tech-report / HF-card rows are vendor self-reported; Artificial Analysis rows are independent.

Tool / agent:

- BFCL-v4 **66.81**; τ²-bench 76.36; PinchBench 81.30; ClawEval 64.56 (self)
- AA-IFBench 57.4 (AA); Multi-IF (turn-3) 74.80 (self)

Reasoning / knowledge:

- HLE **6.30**; SimpleQA-Verified 15.10; C-SimpleQA 60.23 (self)
- AIME 2026 73.85; HMMT Feb 2026 49.29; IMO-AnswerBench 54.28 (self)
- AA-GPQA Diamond **59.3**; AA-HLE 6.3; AA-LCR 31.3 (AA)
- AA Intelligence Index: **10** (AA) — conflict: 14.1 (BenchLM-cited AA)

Coding:

- SWE-bench Verified **61.20**; LiveCodeBench-v6 62.28; LIFEBench 57.20 (self)
- AA Coding Index 25.3; SciCode 27 (AA)

Long context:

- 262K window; MRCR (16K–256K) 75.93 (self); **no independent RULER published**.

### Normalized scores (1–100)

- **Tool use: 62/100.** BFCL-v4 66.8, τ² 76.4 and PinchBench 81.3 are strong (self-reported); non-reasoning design caps planner depth.
- **Reasoning: 58/100.** GPQA 59.3% (AA), AIME 73.85%; HLE 6.3% and AA Index 10 hold it to the low-mid band.
- **Context window: 72/100.** 262K-token window with self-reported MRCR 75.93 (200K–500K band).
- **Multimodal: 15/100.** Text-only.
- **Coding: 62/100.** SWE-bench 61.2% and LiveCodeBench 62.3% (self-reported); AA Coding Index 25.3 and SciCode 27 cap it.
- **Cost efficiency: 95/100.** MIT open weights with no first-party fee; self-host cost is the only outlay.
- **Overall Score: 54/100.** (62 + 58 + 72 + 15 + 62) / 5 = 53.8 → 54. Best fit: cheap high-throughput open-weight text/tool execution; prefer the reasoning Ling/Ring siblings for hard tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face card, the Ling-2.6 technical report (arXiv:2606.15079), Artificial Analysis, BenchLM and LLM Stats. Self-reported vs independent rows are labelled; the 104B/107B and 262K/131K conflicts are surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
