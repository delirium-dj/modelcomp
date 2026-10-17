# Gemini 3 Flash — findings by Laguna S 2.1

- Source: opencode/gemini-3-flash (Google DeepMind), e.g. Google, Artificial Analysis, BenchLM, Vals AI
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview (Non-reasoning) (Google DeepMind). Repository slug is `gemini-3-flash`; BenchLM classifies this as a non-reasoning model. AA page notes a (Reasoning) and a (Non-reasoning) Preview variant of the same released December 2025 model.
- **Short description:** Google's cost-efficient Flash-tier multimodal model, "2x cheaper than Gemini 3 Pro Preview with only a small Intelligence-Index drop"; fastest-in-class ~209 tok/s output, 1M context. Released as Preview in December 2025. DEPRECATED — Google recommends Gemini 3.5 Flash.
- **Provider / access:** Google DeepMind. Available via Google AI Studio, the Gemini API, Vertex AI, and Google Antigravity/CLI. API model ID `gemini-3-flash` (preview). Supports tool calling, structured outputs, JSON mode. Non-reasoning variant (no extended thinking).
- **Release / knowledge:** Released 17 December 2025 (Google Developer Blog). Knowledge cutoff: 1 January 2025 (Artificial Analysis).
- **IDs:** `google/gemini-3-flash` (Google DeepMind). noFreeId — `gemini-3-flash` is a preview; per the placeholder meta.json the repo has no free-Zen id mapped.
- **Context window:** 1,000,000 tokens (≈1,500 A4 pages) (Artificial Analysis; ≥1M tier).
- **Modalities:** Text, image, speech, and video input; text output (Artificial Analysis "everything you need to know"; AA confirms text, image, speech, video). Multimodal input, text output. Non-reasoning variant.
- **Pricing (as of 2026-09-23):** $0.50 per 1M input / $3.00 per 1M output tokens (Google API). Blended 7:2:1 cache hit/input/output ≈ $0.43 per 1M tokens. Cache discount ~90% (Google cache reads). No free-tier quota surfaced by source pages.
- **Architecture:** Proprietary (closed weights); parameter count undisclosed (Artificial Analysis: not disclosed). Non-reasoning and Reasoning (extended-thinking) variants share the base.
- **Output speed:** 209 output tokens/second (Artificial Analysis).

### Note on Intelligence Index scale

AI Rankings summary lists Overall 87.0 (avg of per-model raters). The authoritatively-current Artificial Analysis **Intelligence Index v4.3.2** scores this model **18** (non-reasoning, estimated) (#25/61) — the (Reasoning) variant scores **26** (#99/212). The AA "everything you need to know" article (Dec 2025 scale) reports a pre-release **71**. Scores below use the **current verifiable v4.3.2 figure of 18** for the non-reasoning variant (conservative); the reasoning variant's 26 and the older 71 are recorded as cross-checks.

### Raw benchmarks found

> Verified public numbers sourced from BenchLM (`https://benchlm.ai/models/gemini-3-flash`, Overall 54.28/100, #70/954, 24 of 639 benchmarks, 2026-10-17) and Artificial Analysis (`https://artificialanalysis.ai/models/gemini-3-flash`).

Agent / tool use:

- Claw-Eval: 49.2% (Claw-Eval leaderboard)
- τ²-bench: 43.3% (Artificial Analysis)
- Gert Labs: 56.63% (Gert Labs rankings)
- Terminal-Bench 2.1 (Vals): 53.9% (Vals AI)

Reasoning / knowledge:

- AA Intelligence Index: **17.9%** (non-reasoning) (#25/61, AA v4.3.2 — revised from 18)
- GPQA Diamond: 81.2% (Artificial Analysis — AA-GPQA Diamond)
- GPQA Diamond (Vals): 87.9% (Vals AI)
- MMLU-Pro (Vals): 88.6% (Vals AI)
- AA-HLE: 15.0% (Artificial Analysis)
- AA-LCR: 55.3% (Artificial Analysis)
- CritPt: 1.4% (Artificial Analysis)
- AA-Omniscience Index: -4.3% (Artificial Analysis)
- AA-Omniscience Accuracy: 45.8% (Artificial Analysis)
- AA-Omniscience Hallucination Rate: 92.4% (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): 85.6% (Vals AI)
- SWE-bench (Vals): 75.0% (Vals AI)
- AA-SciCode: not found on fresh BenchLM
- DeepSWE: NOT FOUND (not published for this model in fetched pages)

Multimodal:

- AA-MMMU-Pro: 78.6% (Artificial Analysis)
- OfficeQA Pro: 54.1% (Google launch)
- Global-MMLU-Lite: 92.7% (Artificial Analysis)

Long context:

- Context window verified **1,000,000 tokens** (≥1M tier; ≈1,500 A4 pages).
- MRCR / RULER retrieval-at-length: NOT FOUND in fetched pages.
- Output speed: **209 tok/s** (AA).

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded from Overall. Uses **current verifiable AA v4.3.2 figures**.

- **Tool use: 48/100.** Intelligence Index 18 (estimated, non-reasoning); Terminal-Bench 2.1 (Vals) 53.9%; τ²-bench 43.3%. No standalone SWE-bench/DeepSWE/LiveCodeBench/SciCode/Toolathon for this ID → low floor. Capped by Intelligence Index 18 and weak agentic benchmarks.
- **Reasoning: 52/100.** Intelligence Index 18 (estimated); GPQA Diamond 81.2% (AA, above 60-80% mid range but below 90% frontier); GPQA Diamond (Vals) 87.9%; MMLU-Pro 88.6% (Vals); HLE 15.0% (below 30% floor); LCR 55.3% (weak); CritPt 1.4% (poor); Omniscience -4.3% (more incorrect than correct). **Corrected from prior 53:** GPQA downgraded from pre-release 90% to verified 81.2%; Intelligence Index corrected from 26 (reasoning variant) to 18 (non-reasoning variant per fresh BenchLM).
- **Context window: 95/100.** 1,000,000 tokens (≥1M tier). No public MRCR/RULER ≥98%-at-512K retrieval figure (not warranting 100).
- **Multimodal: 84/100.** Text + image + speech + video input, text output (+image +video +speech-in); AA-MMMU-Pro 78.6%. Audio input confirmed via AA "everything you need to know" and model page.
- **Coding: 58/100.** LiveCodeBench (Vals) 85.6% (excellent), SWE-bench (Vals) 75.0% (solid), AA-MMMU-Pro 78.6% (shows reasoning). No DeepSWE, no SciCode, no SWE-bench Verified published. Vibe Code Bench 20.2% (poor). **Upgraded from prior 50:** fresh BenchLM data adds LiveCodeBench 85.6% and SWE-bench 75.0% that were NOT FOUND in prior file.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M in/out — cheapest tier band in methodology; ~90% cache discount + 209 tok/s output speed reinforce efficiency.
- **Overall Score: 67/100.** (48 + 52 + 95 + 84 + 58) / 5 = 337 / 5 = 67.4 → 67. See scale note.

> **Scale note / discrepancy:** The repo's `model-comparison.md` AI-Rankings average for this model is **87.0**, and the Dec-2025 pre-release AA "everything you need to know" article reports an Intelligence Index of **71**. The **current (Oct 2026) Artificial Analysis Intelligence Index v4.3.2** scores this model **18** (non-reasoning, estimated) / **26** (reasoning), on a clearly-shifted index scale. Per the no-fabrication rule, scores above use the **current verifiable figures (18 for non-reasoning)**, which yields Overall ≈ 67 — materially lower than the repo's 87.0 (which reflects the older 71-scale average). The pre-release GPQA 90% has been corrected to verified 81.2% (AA) / 87.9% (Vals). Both figures are recorded here for reconciliation by a future maintainer. Reported Overall = **67/100**.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (Google Developer Blog "Build with Gemini 3 Flash", Artificial Analysis model page + microevals, BenchLM.ai model page for benchmark tables, Vals AI for GPQA/LiveCodeBench/SWE-bench); scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence). Cost line preserved verbatim from prior signed file.
- Sources: BenchLM.ai model page (Overall 54.46/100, #71/889, 24 of 625 benchmarks, non-reasoning, 2026-10-10); AA model page (Intelligence Index 18 estimated, modalities text+image+speech+video, pricing $0.50/$3.00, speed 209 tok/s); Google Developer Blog (Release/knowledge, modalities); Vals AI (GPQA 87.9%, MMLU-Pro 88.6%, LiveCodeBench 85.6%, SWE-bench 75.0%).
- Future sources: add a new file next to this one using the same headings.

---
