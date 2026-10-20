# Grok 4 Fast Reasoning — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/grok-4-fast-reasoning`, 10 measured + 51 estimated benchmarks as of 2026-10-19), Artificial Analysis (`artificialanalysis.ai/models/grok-4-fast`, non-reasoning variant page for pricing/context window)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast Reasoning
- **Short description:** xAI's fast reasoning variant of Grok 4, released September 2025; reasoning model optimized for speed; text+image input, text output; proprietary (weights not public); deprecated by Grok 4.1 Fast per Artificial Analysis.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, Chat Completions); available through 1 API provider per Artificial Analysis.
- **Release / knowledge:** Released September 2025; knowledge cutoff not stated.
- **IDs:** `grok-4-fast-reasoning` (xAI API). No Free ID confirmed on OpenCode Zen.
- **Context window:** 2M tokens declared by Artificial Analysis for Grok 4 Fast family; AA-LCR 73.7% measured.
- **Modalities:** Text and image in; text out; reasoning yes (fast reasoning variant); tool calling yes; structured output/JSON not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.20/1M input, $0.50/1M output (Artificial Analysis, non-reasoning variant; median across providers); blended ~$0.23/1M tokens. Paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **66.7% estimated ±12.8 pp, low confidence** (benchgap.net)
- IFEval: **91.2% estimated ±2.7 pp, high confidence** (benchgap.net)
- τ²-bench results: **65.8% measured** (benchgap.net)
- AA Agentic Index: **14.1% estimated ±12.2 pp, low confidence** (benchgap.net)

Reasoning / knowledge:

- GPQA Diamond: **84.0% estimated ±2.2 pp, high confidence** (benchgap.net)
- AA-GPQA Diamond: **84.7% measured** (benchgap.net)
- GPQA: **85.5% estimated ±3.9 pp, high confidence** (benchgap.net)
- MMLU: **88.3% estimated ±3.6 pp, high confidence** (benchgap.net)
- MMLU-Pro: **84.5% estimated ±6.2 pp, medium confidence** (benchgap.net)
- ARC-AGI-1: **36.1% estimated ±5.4 pp, low confidence** (benchgap.net)
- ARC-AGI-2: **12.5% estimated ±14.3 pp, low confidence** (benchgap.net)
- HLE: **26.9% estimated ±9.3 pp, medium confidence** (benchgap.net)
- CritPt: **2.9% measured** (benchgap.net)
- Artificial Analysis Intelligence Index: **17.9% measured** (benchgap.net)
- MathVision: **81.5% estimated ±4.9 pp, high confidence** (benchgap.net)

Coding:

- SWE-bench Verified: **71.7% estimated ±4.4 pp, medium confidence** (benchgap.net)
- AA Coding Index: **38.6% estimated ±6.8 pp, low confidence** (benchgap.net)
- AA-SciCode: **45.7% estimated ±3.8 pp, medium confidence** (benchgap.net)
- BFCL v4: **52.4% estimated ±8.7 pp, low confidence** (benchgap.net)

Long context:

- AA-LCR: **73.7% measured** (benchgap.net)
- LongBench v2: **61.5% estimated ±5.8 pp, low confidence** (benchgap.net)
- MRCRv2: **82.9% estimated ±11.3 pp, low confidence** (benchgap.net)

Multimodal:

- AA-MMMU-Pro: **61.8% measured** (benchgap.net)
- MMMU: **76.4% estimated ±5.9 pp, medium confidence** (benchgap.net)
- CharXiv: **72.7% estimated ±6.9 pp, low confidence** (benchgap.net)
- Video-MME (w/o subtitle): **79.1% estimated ±6.3 pp, low confidence** (benchgap.net)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** IFEval 91.2% is strong, but Agentic Index 14.1% and BrowseComp 66.7% (low confidence) are weak; τ²-bench 65.8% moderate. Good instruction following, very weak autonomous agency.
- **Reasoning: 50/100.** Solid knowledge: GPQA Diamond 84.0%, MMLU 88.3%, MathVision 81.5%; held down by very low HLE 26.9%, CritPt 2.9%, Intelligence Index 17.9%.
- **Context window: 70/100.** Declared 2M-token context (Artificial Analysis); AA-LCR 73.7% measured; no full-window MRCR/RULER curve.
- **Multimodal: 60/100.** Text+image in, text out; AA-MMMU-Pro 61.8% measured, MMMU 76.4% estimated; moderate vision coverage.
- **Coding: 55/100.** SWE-bench Verified 71.7%, AA-SciCode 45.7%, BFCL v4 52.4%; AA Coding Index 38.6% is low. Moderate agentic coding, weaker competitive coding.
- **Cost efficiency: 45/100.** $0.20 input / $0.50 output per 1M is moderately priced (Artificial Analysis); paid API, no Free tier confirmed; not cheap but not premium.
- **Overall Score: 56/100.** Half-up mean of (45 + 50 + 70 + 60 + 55) / 5 = 56.0 → 56. Best-fit recommendation: fast, moderately priced reasoning model for large-context instruction tasks; weakest on novel reasoning (HLE, CritPt) and autonomous agency.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset + Artificial Analysis pricing/context window); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.