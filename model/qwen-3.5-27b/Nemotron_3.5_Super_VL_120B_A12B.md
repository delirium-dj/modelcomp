# Qwen 3.5 27B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/qwen3-5-27b`, 28 measured + 83 estimated benchmarks as of 2026-10-19)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba Qwen's 27B-parameter open-weight model in the Qwen 3.5 family, released 2026; dense model optimized for general capabilities; text input, text output; open weights.
- **Provider / access:** Qwen API (`qwen3.5-27b`, Chat Completions); OpenRouter route (`qwen/qwen3.5-27b`); available via multiple providers.
- **Release / knowledge:** Released 2026; knowledge cutoff not stated.
- **IDs:** `qwen3.5-27b` (Qwen API), `qwen/qwen3.5-27b` (OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; Qwen models typically ship 128K–1M context; state as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** Not independently confirmed; treat as paid API, no Free tier confirmed.
- **Architecture:** Open weights (27B parameters per model name); dense (non-MoE); proprietary training, open weights release.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **61.0% measured** (benchgap.net)
- Terminal-Bench 2.0: **41.6% measured** (benchgap.net)
- Terminal-Bench 2.1 (Vals AI): **36.2% estimated ±6.3 pp, medium confidence** (benchgap.net)
- OSWorld-Verified: **56.2% measured** (benchgap.net)
- Toolathlon-Verified: **45.7% estimated ±7.7 pp, medium confidence** (benchgap.net)
- AA Agentic Index: **10.6% estimated ±6.4 pp, medium confidence** (benchgap.net)
- IFEval: **95.0% measured** (benchgap.net)

Reasoning / knowledge:

- GPQA Diamond: **85.5% estimated ±0.4 pp, high confidence** (benchgap.net)
- AA-GPQA Diamond: **85.8% measured** (benchgap.net)
- GPQA: **85.5% measured** (benchgap.net)
- MMLU: **89.8% estimated ±1.8 pp, medium confidence** (benchgap.net)
- MMLU-Pro: **86.1% measured** (benchgap.net)
- ARC-AGI-1: **65.9% estimated ±5.4 pp, medium confidence** (benchgap.net)
- ARC-AGI-2: **23.9% estimated ±11.6 pp, low confidence** (benchgap.net)
- HLE: **21.6% estimated ±4.8 pp, high confidence** (benchgap.net)
- AA-HLE: **23.9% measured** (benchgap.net)
- CritPt: **0.9% measured** (benchgap.net)
- Artificial Analysis Intelligence Index: **22.9% measured** (benchgap.net)
- MathVision: **86.0% measured** (benchgap.net)

Coding:

- LiveCodeBench v6: **80.7% measured** (benchgap.net)
- Vals LiveCodeBench: **80.9% estimated ±2.0 pp, low confidence** (benchgap.net)
- SWE-bench Verified: **72.4% measured** (benchgap.net)
- Vals SWE-bench: **65.9% estimated ±6.8 pp, medium confidence** (benchgap.net)
- SWE-bench Pro: **48.3% estimated ±3.6 pp, high confidence** (benchgap.net)
- DeepSWE: **29.9% estimated ±12.7 pp, low confidence** (benchgap.net)
- AA Coding Index: **44.6% estimated ±5.3 pp, medium confidence** (benchgap.net)
- AA-SciCode: **44.8% estimated ±3.9 pp, high confidence** (benchgap.net)
- SciCode: **44.7% estimated ±3.4 pp, high confidence** (benchgap.net)
- BFCL v4: **67.2% estimated ±8.7 pp, low confidence** (benchgap.net)

Long context:

- AA-LCR: **77.7% measured** (benchgap.net)
- LongBench v2: **60.6% measured** (benchgap.net)
- MRCRv2: **85.4% estimated ±11.3 pp, low confidence** (benchgap.net)

Multimodal:

- AA-MMMU-Pro: **75.0% measured** (benchgap.net)
- MMMU: **82.3% measured** (benchgap.net)
- CharXiv: **79.5% measured** (benchgap.net)
- Video-MME (w/o subtitle): **82.3% estimated ±1.0 pp, medium confidence** (benchgap.net)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** IFEval 95.0% is excellent, but Agentic Index 10.6%, BrowseComp 61.0%, Terminal-Bench 2.0 41.6%, and OSWorld-Verified 56.2% are weak-to-moderate. Strong instruction following, weak autonomous agency.
- **Reasoning: 55/100.** Strong knowledge: GPQA Diamond 85.5%, MMLU 89.8%, MathVision 86.0%; held down by very low HLE 21.6%, CritPt 0.9%, Intelligence Index 22.9%.
- **Context window: 70/100.** AA-LCR 77.7% measured, LongBench v2 60.6% measured; context window size not confirmed in sources checked.
- **Multimodal: 75/100.** Text-only in sources checked — no vision/audio confirmed; AA-MMMU-Pro 75.0% and MMMU 82.3% measured suggest some vision capability; score reflects uncertainty.
- **Coding: 65/100.** LiveCodeBench v6 80.7%, SWE-bench Verified 72.4%, AA-SciCode 44.8%; BFCL v4 67.2%; DeepSWE 29.9% weak. Solid competitive coding, weaker agentic coding.
- **Cost efficiency: 35/100.** Pricing not independently confirmed; paid API only, no Free tier confirmed; MoE models typically priced per active-parameter inference cost but vendor rates not published.
- **Overall Score: 62/100.** Half-up mean of (45 + 55 + 70 + 75 + 65) / 5 = 62.0 → 62. Best-fit recommendation: solid generalist open-weight model with strong knowledge and coding; weakest on novel reasoning (HLE, CritPt).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.