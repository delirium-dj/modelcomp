# Qwen 3.5 35B A3B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/qwen3-5-35b-a3b`, 28 measured + 82 estimated benchmarks as of 2026-10-19)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba Qwen's 35B-total/3B-active MoE open-weight model in the Qwen 3.5 family (A3B suffix = 3B active), released 2026; text input, text output; open weights.
- **Provider / access:** Qwen API (`qwen3.5-35b-a3b`, Chat Completions); OpenRouter route (`qwen/qwen3.5-35b-a3b`); available via multiple providers.
- **Release / knowledge:** Released 2026; knowledge cutoff not stated.
- **IDs:** `qwen3.5-35b-a3b` (Qwen API), `qwen/qwen3.5-35b-a3b` (OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; Qwen models typically ship 128K–1M context; state as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** Not independently confirmed; treat as paid API, no Free tier confirmed.
- **Architecture:** Open weights (35B total / ~3B active per model name); MoE; proprietary training, open weights release.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **61.0% measured** (benchgap.net)
- Terminal-Bench 2.0: **40.5% measured** (benchgap.net)
- Terminal-Bench 2.1 (Vals AI): **35.3% estimated ±6.3 pp, medium confidence** (benchgap.net)
- OSWorld-Verified: **54.5% measured** (benchgap.net)
- Toolathlon-Verified: **45.7% estimated ±7.7 pp, medium confidence** (benchgap.net)
- AA Agentic Index: **6.8% estimated ±6.4 pp, low confidence** (benchgap.net)
- IFEval: **91.9% measured** (benchgap.net)

Reasoning / knowledge:

- GPQA Diamond: **84.2% estimated ±0.4 pp, high confidence** (benchgap.net)
- AA-GPQA Diamond: **84.5% measured** (benchgap.net)
- GPQA: **84.2% measured** (benchgap.net)
- MMLU: **89.4% estimated ±1.8 pp, medium confidence** (benchgap.net)
- MMLU-Pro: **85.3% measured** (benchgap.net)
- ARC-AGI-1: **45.4% estimated ±5.4 pp, low confidence** (benchgap.net)
- ARC-AGI-2: **15.5% estimated ±11.6 pp, low confidence** (benchgap.net)
- HLE: **17.6% estimated ±4.8 pp, high confidence** (benchgap.net)
- AA-HLE: **21.0% measured** (benchgap.net)
- CritPt: **0.9% measured** (benchgap.net)
- Artificial Analysis Intelligence Index: **19.3% measured** (benchgap.net)
- MathVision: **83.9% measured** (benchgap.net)

Coding:

- LiveCodeBench v6: **74.6% measured** (benchgap.net)
- Vals LiveCodeBench: **66.2% estimated ±9.9 pp, low confidence** (benchgap.net)
- SWE-bench Verified: **69.2% measured** (benchgap.net)
- Vals SWE-bench: **61.5% estimated ±6.8 pp, medium confidence** (benchgap.net)
- SWE-bench Pro: **44.7% estimated ±3.6 pp, high confidence** (benchgap.net)
- DeepSWE: **24.3% estimated ±12.7 pp, low confidence** (benchgap.net)
- AA Coding Index: **38.6% estimated ±5.3 pp, medium confidence** (benchgap.net)
- AA-SciCode: **43.3% estimated ±3.9 pp, high confidence** (benchgap.net)
- SciCode: **43.1% estimated ±3.4 pp, high confidence** (benchgap.net)
- BFCL v4: **64.9% estimated ±8.7 pp, low confidence** (benchgap.net)

Long context:

- AA-LCR: **72.0% measured** (benchgap.net)
- LongBench v2: **59.0% measured** (benchgap.net)
- MRCRv2: **80.1% estimated ±11.3 pp, low confidence** (benchgap.net)

Multimodal:

- AA-MMMU-Pro: **72.7% measured** (benchgap.net)
- MMMU: **81.4% measured** (benchgap.net)
- CharXiv: **77.5% measured** (benchgap.net)
- Video-MME (w/o subtitle): **81.5% estimated ±1.0 pp, medium confidence** (benchgap.net)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** IFEval 91.9% is strong, but Agentic Index 6.8% is very weak; BrowseComp 61.0%, Terminal-Bench 2.0 40.5%, OSWorld-Verified 54.5% are moderate-to-weak. Good instruction following, very weak autonomous agency.
- **Reasoning: 50/100.** Moderate knowledge: GPQA Diamond 84.2%, MMLU 89.4%, MathVision 83.9%; held down by very low HLE 17.6%, CritPt 0.9%, Intelligence Index 19.3%.
- **Context window: 68/100.** AA-LCR 72.0% measured, LongBench v2 59.0% measured; context window size not confirmed in sources checked.
- **Multimodal: 72/100.** Text-only in sources checked — no vision/audio confirmed; AA-MMMU-Pro 72.7% and MMMU 81.4% measured suggest some vision capability; score reflects uncertainty.
- **Coding: 60/100.** LiveCodeBench v6 74.6%, SWE-bench Verified 69.2%, AA-SciCode 43.3%; DeepSWE 24.3% weak. Moderate competitive coding, weaker agentic coding.
- **Cost efficiency: 35/100.** Pricing not independently confirmed; paid API only, no Free tier confirmed; MoE models typically priced per active-parameter inference cost but vendor rates not published.
- **Overall Score: 58/100.** Half-up mean of (40 + 50 + 68 + 72 + 60) / 5 = 58.0 → 58. Best-fit recommendation: capable MoE open-weight model with good knowledge; weakest on novel reasoning (HLE, CritPt) and autonomous agency.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.