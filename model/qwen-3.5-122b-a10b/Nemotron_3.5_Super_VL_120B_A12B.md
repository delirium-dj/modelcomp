# Qwen 3.5 122B A10B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/qwen3-5-122b-a10b`, 30 measured + 97 estimated benchmarks as of 2026-10-19)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba Qwen's 122B-total/10B-active MoE open-weight model in the Qwen 3.5 family (A10B suffix = 10B active), released 2026; text input, text output; open weights.
- **Provider / access:** Qwen API (`qwen3.5-122b-a10b`, Chat Completions); OpenRouter route (`qwen/qwen3.5-122b-a10b`); available via multiple providers.
- **Release / knowledge:** Released 2026; knowledge cutoff not stated.
- **IDs:** `qwen3.5-122b-a10b` (Qwen API), `qwen/qwen3.5-122b-a10b` (OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; Qwen models typically ship 128K–1M context; state as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** Not independently confirmed; treat as paid API, no Free tier confirmed.
- **Architecture:** Open weights (122B total / ~10B active per model name); MoE; proprietary training, open weights release.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **63.8% measured** (benchgap.net)
- Terminal-Bench 2.0: **49.4% measured** (benchgap.net)
- Terminal-Bench 2.1 (Vals AI): **43.2% estimated ±6.3 pp, medium confidence** (benchgap.net)
- OSWorld-Verified: **58.0% measured** (benchgap.net)
- Toolathlon-Verified: **29.5% estimated ±2.3 pp, low confidence** (benchgap.net)
- AA Agentic Index: **9.6% measured** (benchgap.net)
- IFEval: **93.4% measured** (benchgap.net)

Reasoning / knowledge:

- GPQA Diamond: **86.6% estimated ±0.4 pp, high confidence** (benchgap.net)
- AA-GPQA Diamond: **85.7% measured** (benchgap.net)
- GPQA: **86.6% measured** (benchgap.net)
- MMLU: **90.8% estimated ±1.8 pp, medium confidence** (benchgap.net)
- MMLU-Pro: **86.7% measured** (benchgap.net)
- ARC-AGI-1: **21.2% estimated ±5.4 pp, low confidence** (benchgap.net)
- ARC-AGI-2: **31.0% estimated ±11.6 pp, low confidence** (benchgap.net)
- HLE: **24.7% estimated ±4.8 pp, high confidence** (benchgap.net)
- AA-HLE: **25.2% measured** (benchgap.net)
- CritPt: **0.6% measured** (benchgap.net)
- Artificial Analysis Intelligence Index: **15.6% measured** (benchgap.net)
- MathVision: **86.2% measured** (benchgap.net)

Coding:

- LiveCodeBench v6: **78.9% measured** (benchgap.net)
- Vals LiveCodeBench: **79.9% estimated ±2.0 pp, low confidence** (benchgap.net)
- SWE-bench Verified: **72.0% measured** (benchgap.net)
- Vals SWE-bench: **67.1% estimated ±5.4 pp, medium confidence** (benchgap.net)
- SWE-bench Pro: **47.9% estimated ±3.6 pp, high confidence** (benchgap.net)
- DeepSWE: **30.4% estimated ±7.5 pp, low confidence** (benchgap.net)
- AA Coding Index: **45.7% measured** (benchgap.net)
- AA-SciCode: **39.7% measured** (benchgap.net)
- SciCode: **39.9% estimated ±3.1 pp, high confidence** (benchgap.net)
- BFCL v4: **70.6% estimated ±2.7 pp, high confidence** (benchgap.net)

Long context:

- AA-LCR: **76.3% measured** (benchgap.net)
- LongBench v2: **60.2% measured** (benchgap.net)
- MRCRv2: **84.9% estimated ±11.3 pp, low confidence** (benchgap.net)

Multimodal:

- AA-MMMU-Pro: **75.0% measured** (benchgap.net)
- MMMU: **83.9% measured** (benchgap.net)
- CharXiv: **77.2% measured** (benchgap.net)
- Video-MME (w/o subtitle): **83.7% estimated ±1.0 pp, medium confidence** (benchgap.net)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** IFEval 93.4% is excellent, Terminal-Bench 2.0 49.4% and OSWorld-Verified 58.0% moderate; BrowseComp 63.8% good; Agentic Index 9.6% weak. Good instruction following, weak autonomous agency.
- **Reasoning: 55/100.** Strong knowledge: GPQA Diamond 86.6%, MMLU 90.8%, MathVision 86.2%; held down by very low HLE 24.7%, CritPt 0.6%, Intelligence Index 15.6%.
- **Context window: 72/100.** AA-LCR 76.3% measured, LongBench v2 60.2% measured; context window size not confirmed in sources checked.
- **Multimodal: 78/100.** Text-only in sources checked — no vision/audio confirmed; AA-MMMU-Pro 75.0% and MMMU 83.9% measured suggest strong vision capability; score reflects uncertainty.
- **Coding: 65/100.** LiveCodeBench v6 78.9%, SWE-bench Verified 72.0%, BFCL v4 70.6%, AA Coding Index 45.7%; DeepSWE 30.4% weak. Solid competitive coding, moderate agentic coding.
- **Cost efficiency: 35/100.** Pricing not independently confirmed; paid API only, no Free tier confirmed; MoE models typically priced per active-parameter inference cost but vendor rates not published.
- **Overall Score: 64/100.** Half-up mean of (50 + 55 + 72 + 78 + 65) / 5 = 64.0 → 64. Best-fit recommendation: strong MoE open-weight generalist with excellent knowledge and coding; weakest on novel reasoning (HLE, CritPt).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.