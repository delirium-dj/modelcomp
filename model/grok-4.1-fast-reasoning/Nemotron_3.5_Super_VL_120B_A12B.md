# Grok 4.1 Fast Reasoning — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/grok-4-1-fast-reasoning`, 10 measured + 52 estimated benchmarks as of 2026-10-19), Artificial Analysis (`artificialanalysis.ai/models/grok-4-1-fast`, non-reasoning variant page for context window)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast Reasoning
- **Short description:** xAI's fast reasoning variant of Grok 4.1, released October 2026; reasoning model optimized for speed; text+image input, text output; proprietary (weights not public).
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning`, Chat Completions); OpenRouter route likely available.
- **Release / knowledge:** Released October 2026; knowledge cutoff not stated.
- **IDs:** `grok-4-1-fast-reasoning` (xAI API). No Free ID confirmed on OpenCode Zen.
- **Context window:** 2M tokens declared by Artificial Analysis for Grok 4.1 Fast family; no public long-context retrieval score beyond AA-LCR 74.0%.
- **Modalities:** Text and image in; text out; reasoning yes (fast reasoning variant); tool calling yes; structured output/JSON not explicitly confirmed.
- **Pricing (as of 2026-10-20):** Not independently confirmed; treat as paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **72.2% estimated ±12.8 pp, low confidence** (benchgap.net)
- IFEval: **91.5% estimated ±2.7 pp, high confidence** (benchgap.net)
- τ²-bench results: **93.3% measured** (benchgap.net)
- AA Agentic Index: **24.1% estimated ±12.2 pp, low confidence** (benchgap.net)

Reasoning / knowledge:

- GPQA Diamond: **84.2% estimated ±2.2 pp, high confidence** (benchgap.net)
- AA-GPQA Diamond: **85.3% measured** (benchgap.net)
- GPQA: **86.0% estimated ±3.9 pp, high confidence** (benchgap.net)
- MMLU: **88.8% estimated ±3.6 pp, high confidence** (benchgap.net)
- MMLU-Pro: **84.6% estimated ±6.2 pp, medium confidence** (benchgap.net)
- ARC-AGI-1: **52.0% estimated ±5.4 pp, low confidence** (benchgap.net)
- ARC-AGI-2: **19.2% estimated ±14.3 pp, low confidence** (benchgap.net)
- HLE: **29.2% estimated ±9.3 pp, medium confidence** (benchgap.net)
- HLE w/ tools: **48.4% estimated ±5.5 pp, low confidence** (benchgap.net)
- CritPt: **2.9% measured** (benchgap.net)
- Artificial Analysis Intelligence Index: **20.4% measured** (benchgap.net)
- MathVision: **81.5% estimated ±4.9 pp, high confidence** (benchgap.net)

Coding:

- SWE-bench Verified: **71.9% estimated ±4.4 pp, high confidence** (benchgap.net)
- AA Coding Index: **39.3% estimated ±6.8 pp, medium confidence** (benchgap.net)
- AA-SciCode: **45.9% estimated ±3.8 pp, high confidence** (benchgap.net)
- BFCL v4: **66.9% estimated ±8.7 pp, low confidence** (benchgap.net)

Long context:

- AA-LCR: **74.0% measured** (benchgap.net)
- LongBench v2: **61.5% estimated ±5.8 pp, low confidence** (benchgap.net)
- MRCRv2: **83.3% estimated ±11.3 pp, low confidence** (benchgap.net)

Multimodal:

- AA-MMMU-Pro: **63.3% measured** (benchgap.net)
- MMMU: **77.3% estimated ±5.9 pp, medium confidence** (benchgap.net)
- CharXiv: **73.3% estimated ±6.9 pp, low confidence** (benchgap.net)
- Video-MME (w/o subtitle): **79.4% estimated ±6.3 pp, low confidence** (benchgap.net)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** IFEval 91.5% and τ²-bench 93.3% are strong, but Agentic Index 24.1% and BrowseComp 72.2% (low confidence) are weak. Good instruction following, weak autonomous agency.
- **Reasoning: 55/100.** Solid knowledge marks: GPQA Diamond 84.2%, MMLU 88.8%, MathVision 81.5%; held down by very low HLE 29.2%, CritPt 2.9%, and Intelligence Index 20.4%.
- **Context window: 70/100.** Declared 2M-token context (Artificial Analysis); AA-LCR 74.0% measured; no full-window MRCR/RULER curve.
- **Multimodal: 65/100.** Text+image in, text out; AA-MMMU-Pro 63.3% measured, MMMU 77.3% estimated; moderate vision coverage.
- **Coding: 60/100.** SWE-bench Verified 71.9%, AA-SciCode 45.9%, BFCL v4 66.9%; AA Coding Index 39.3% is low. Solid agentic coding, weaker competitive coding.
- **Cost efficiency: 30/100.** Paid API only, no Free tier confirmed; pricing not independently confirmed; fast-reasoning models typically carry a premium.
- **Overall Score: 61/100.** Half-up mean of (55 + 55 + 70 + 65 + 60) / 5 = 61.0 → 61. Best-fit recommendation: fast reasoning model for instruction-following tasks with large context; weakest on novel reasoning (HLE, CritPt).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset + Artificial Analysis context window); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.