# DeepSeek V4 Flash Vision Exp — findings by Nemotron 3.5 Super VL 120B A12B

- Source: llm-stats.com/models/deepseek-v4-flash-vision-exp (DeepSeek API docs), benchgen.com, contextwindows.dev, techtimes.com, deepseek-v4.io
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp (a.k.a. DeepSeek-V4-Flash-Vision-Exp)
- **Short description:** DeepSeek's first experimental multimodal V4 model (released 21 Aug 2026, MIT license) adding vision to the Flash architecture; 305-billion-parameter multimodal MoE (per techtimes), FP8 precision, 1M-token context, text+image in → text out, experimental vision-understanding model on the DeepSeek API.
- **Provider / access:** DeepSeek API (`model='deepseek-v4-flash-vision-exp'`), DeepInfra; provider docs at api-docs.deepseek.com (quick_start/pricing, updates).
- **Release / knowledge:** Released 2026-08-21 (llm-stats) / Sep 2026 (benchgen); experimental; knowledge cutoff not stated.
- **IDs:** `deepseek-v4-flash-vision-exp` (DeepSeek API route); queue slug `deepseek-v4-vision-exp`. No Free ID confirmed (MIT open weights → self-host effectively $0).
- **Context window:** 1.0M tokens input / 393.2K output via DeepSeek; 1.0M/1.0M via DeepInfra. Verified on llm-stats and contextwindows.dev.
- **Modalities:** Text and image in; text out; experimental vision understanding; reasoning not specified; tool use not specified; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** DeepSeek $0.220/M input, $0.007/M cached input, $0.660/M output (context 1.0M/393.2K); DeepInfra $0.440/M input, $0.140/M cached, $1.32/M output (context 1.0M/1.0M).
- **Architecture:** Multimodal MoE, ~305B total parameters (techtimes), FP8 precision, MIT-licensed open weights; builds on V4 Flash architecture with added vision.

### Raw benchmarks found

The llm-stats benchmark dashboard and benchgen page did not surface concrete numeric benchmark scores in the fetched page (charts loaded without values; benchlm.ai returned 404 for this slug). techtimes reports the model "wins three of eleven benchmarks against Anthropic Opus-4.8" but notes claims need independent proof, without publishing the specific scores. No verified public benchmark numbers found for: GPQA, HLE, MMMU-Pro, Chartography, SWE-bench, LiveCodeBench, MRCR, OSWorld, Terminal-Bench, CritPt.

### Normalized scores (1–100)

Derived from the specs above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is essentially nil for this experimental model — dims rest on declared specs and Flash-family lineage; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Experimental vision model on the DeepSeek API; no verified Terminal-Bench/OSWorld/Toolathlon scores found; capped by total absence of independent agentic benchmark evidence.
- **Reasoning: 60/100.** V4-family reasoning lineage (Flash architecture); no verified GPQA/HLE/ARC-AGI/CritPt scores found for this exact model; capped by zero public reasoning numbers.
- **Context window: 90/100.** Verified 1.0M tokens (llm-stats + contextwindows.dev); capped because no public full-depth needle-recall score at 1M was found.
- **Multimodal: 70/100.** Text + image in, text out; first experimental V4 vision model; capped by absence of public MMMU-Pro/Chartography/LVBench/OCR scores and text-only output.
- **Coding: 55/100.** V4-family coding lineage but no verified SWE-bench/LiveCodeBench/DeepSWE scores found for this exact vision variant; capped by zero public coding numbers.
- **Cost efficiency: 85/100.** MIT open weights (self-host ~$0) plus very cheap hosted pricing ($0.22/$0.66 via DeepSeek); not counted toward Overall.
- **Overall Score: 66/100.** Half-up mean of (55 + 60 + 90 + 70 + 55) / 5 = 66.0 → 66. Best-fit recommendation: experimental open-weights vision model for image understanding at 1M context; verify on your own vision and reasoning benchmarks — public score coverage is effectively absent.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (llm-stats + DeepSeek API docs + benchgen + techtimes independent coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
