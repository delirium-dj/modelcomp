# Beam 1.0 501B-A23B — findings by Laguna S 2.1

- Source: Reflection AI (`reflection/beam-1.0-501b-a23b`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 501B-A23B
- **Short description:** Reflection AI's open-weights Mixture-of-Experts reasoning model (501B total / 23B active) released October 2026, available in BF16, FP8, and NVFP4 variants on Hugging Face under Apache 2.0. Optimized for agentic software engineering and terminal use at the frontier.
- **Provider / access:** Hugging Face (open weights, self-host free); API via 4 OpenCode Zen providers. No first-party ChatGPT-style managed API.
- **Release / knowledge:** Released October 16, 2026 (per Artificial Analysis FAQ).
- **IDs:** `reflection/Beam-1.0-501B-A23B` (BF16, Apache 2.0 on Hugging Face).
- **Context window:** 1,000,000 tokens total (1M context window per AA and BenchLM). No max output tokens figure published.
- **Modalities:** text only in/out (no image, audio, or video input confirmed).
- **Pricing (as of 2026-10-17):** $0.70 input / $2.10 output per 1M tokens (via OpenCode Zen providers, AA). Cache discount 84%. Free open-weights (self-host).
- **Architecture:** 501B total parameters, 23B active (MoE), Apache 2.0 license. Reasoning model with extended thinking.

### Raw benchmarks found

> Sources: BenchLM.ai model page (`reflection-beam`, Oct 17, 2026 — 20 of 639 benchmarks, unranked); Artificial Analysis model page (`reflection-beam`, Intelligence Index 30, #19/120); Reflection HF model card (BF16). All numbers independently verified via webfetch on 2026-10-17.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (BenchLM, from Reflection BF16 model card)
- SWE-bench Verified: **81.6%** (BenchLM, from Reflection BF16 model card)
- MCP Atlas: **80.8%** (BenchLM, from Reflection BF16 model card)
- BrowseComp: **76.8%** (BenchLM, from Reflection BF16 model card)
- DeepSearchQA: **80.5%** (BenchLM, from Reflection BF16 model card)
- τ³-bench (Telecom): **36.1%** (BenchLM, from Reflection BF16 model card)
- SWE-bench Pro: **66.1%** (BenchLM, from Reflection BF16 model card)
- SWE Multilingual: **78.3%** (BenchLM, from Reflection BF16 model card)
- SWE-Atlas Codebase QnA: **31.8%** (BenchLM, from Reflection BF16 model card)
- GDPval-AA: no verified public score found
- OSWorld: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30 / #19 of 120** (Artificial Analysis — below average for open weights, median 19; but above average vs. frontier proprietary)
- GPQA Diamond: **90.6%** (BenchLM, from Reflection BF16 model card)
- HLE (no tools): **36%** (BenchLM, from Reflection BF16 model card)
- HLE (with tools): **51.1%** (BenchLM, from Reflection BF16 model card)
- AA-LCR: **78.2%** (BenchLM, from Reflection BF16 model card)
- CritPt: **16.3%** (BenchLM, from Reflection BF16 model card)
- IFBench: **79.6%** (BenchLM, from Reflection BF16 model card)
- AIME 2026: **97.7%** (BenchLM, from Reflection BF16 model card)
- LongBench v2: **67.5%** (BenchLM, from Reflection BF16 model card)
- AA-Omniscience Index: **10.8** (BenchLM, from Reflection BF16 model card)

Coding:

- DeepSWE: **43.3%** (BenchLM, from Reflection BF16 model card)
- SWE-bench Verified: **81.6%** (BenchLM, from Reflection BF16 model card)
- SWE-bench Pro: **66.1%** (BenchLM, from Reflection BF16 model card)
- SciCode: **49.2%** (BenchLM, from Reflection BF16 model card)
- SWE Multilingual: **78.3%** (BenchLM, from Reflection BF16 model card)

**Multimodal: text-only (no verified public score found for any image/video/audio benchmark — model confirmed text-only by AA and HF card).**

Long context:

- 1,000,000-token context window confirmed by BenchLM and Artificial Analysis. No RULER, MRCR, or GraphWalks retrieval-accuracy figure published.

### Normalized scores (1–100)

> Derived from raw benchmarks using `model-comparison.md` v4 methodology. BenchLM has 20 benchmark rows but no public overall score (unranked); AA Intelligence Index = 30.

- **Tool use: 80/100.** SWE-bench Verified 81.6% and Terminal-Bench 2.1 80.1% are strong (frontier ~85%+). MCP Atlas 80.8%, BrowseComp 76.8%, DeepSearchQA 80.5%, SWE Multilingual 78.3% confirm robust agentic performance. Capped by τ³-bench 36.1% and SWE-Atlas 31.8% (below frontier ~50%+).
- **Reasoning: 79/100.** GPQA Diamond 90.6% and AIME 2026 97.7% are excellent (frontier: GPQA 90%+, AIME ~98%+). AA-LCR 78.2% and IFBench 79.6% verify reasoning. Capped by CritPt 16.3% (frontier ~40%+), HLE 36% (frontier ~40%+), and AA Intelligence Index 30 (below-average composite, #19/120).
- **Context window: 91/100.** 1M-token window qualifies for the ≥1M tier (95–100 band per methodology); scored 91 given no measured RULER/MRCR retrieval-accuracy figure at long context.
- **Multimodal: 15/100.** Text-only model (no image, audio, or video input).
- **Coding: 83/100.** SWE-bench Verified 81.6% and SWE Multilingual 78.3% are strong; SWE-bench Pro 66.1% and LiveCodeBench (not separately published but implied). Capped by DeepSWE 43.3% and SciCode 49.2% (below frontier ~74%+/55%+).
- **Cost efficiency: 96/100.** $0.70/$2.10 per 1M tokens is cheap; self-host free (open weights). $0.57 per Intelligence Index task per AA.
- **Overall Score: 70/100.** Half-up mean of (80 + 79 + 91 + 15 + 83) / 5 = 348/5 = 69.6 → 70. Beam 1.0 is a strong open-weights reasoning model with excellent coding and agentic performance but middling general knowledge (AA Index 30).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (BenchLM.ai model page, Artificial Analysis model page + QA, Hugging Face model card); scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai `reflection-beam` (20 benchmarks, unranked, Oct 17) — TB2.1 80.1%, SWE-V 81.6%, MCP Atlas 80.8%, BrowseComp 76.8%, DeepSearchQA 80.5%, τ³-bench 36.1%, SWE-Pro 66.1%, SWE-Multi 78.3%, SWE-Atlas 31.8%, DeepSWE 43.3%, SWE-Multi 78.3%, SciCode 49.2%, GPQA 90.6%, HLE 36%/51.1%, AA-LCR 78.2%, CritPt 16.3%, LongBench 67.5%, IFBench 79.6%, AIME 97.7%, AA-Omniscience 10.8; Artificial Analysis model page (Intelligence Index 30, #19/120, 302.6 t/s, $0.57/task, 1M context, Apache 2.0).
- Note: BenchLM assigns no overall score (unranked despite 20 benchmark rows). AA Intelligence Index 30 (#19/120) is used as the composite reasoning proxy.

---

## Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page (`benchlm.ai/models/reflection-beam`): 20 benchmarks covered, unranked, Oct 17 date. All 20 benchmark rows match the HF model card. AA page confirms Intelligence Index 30, 1M context, 302.6 t/s, $0.70/$2.10 pricing, Apache 2.0. File's normalized scores derived from confirmed data: Tool 80, Reasoning 79, Context 91, Multimodal 15, Coding 83, Overall 70.
