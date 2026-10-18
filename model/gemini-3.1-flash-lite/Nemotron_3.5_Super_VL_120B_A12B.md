# Gemini 3.1 Flash-Lite — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net, voidsource.dev, Google AI API docs (ai.google.dev/gemini-api/docs/models)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's most cost-efficient multimodal model in the 3.1 generation, for high-frequency, lightweight tasks; API-only, closed weights; deprecated/shut down per Google AI models page (Gemini 3.1 Flash-Lite Preview).
- **Provider / access:** Google AI Studio API (`gemini-3.1-flash-lite-preview`, deprecated); API-only, no open weights. Not on OpenCode Zen. No Free ID confirmed.
- **Release / knowledge:** Released March 3, 2026 (voidsource); deprecated per Google AI models page.
- **IDs:** `gemini-3.1-flash-lite-preview` (Google AI API). Parameter count not publicly disclosed.
- **Context window:** Not declared on VoidSource (coverage gap); Google AI models page doesn't list specific context for this variant. benchgap doesn't report context window either.
- **Modalities:** Multimodal per voidsource (Gemini 3 family); text + image + audio + PDF input per meta.json for base Flash. Specific modalities for Flash-Lite not independently confirmed.
- **Pricing (as of 2026-10-17):** $0.25 input / $1.50 output per 1M tokens (voidsource); cheapest production-grade tier in the Gemini 3 family per voidsource.
- **Architecture:** Proprietary — parameter count and architecture not disclosed by Google. Closed weights.

### Raw benchmarks found

Agent / tool use:
- SWE-bench Verified: **71.7% estimated ±4.4 pp** (benchgap, medium confidence)
- SWE-bench Pro: **0.0% estimated ±2.1 pp** (benchgap, medium confidence)
- OSWorld-Verified: **57.4% estimated ±6.0 pp** (benchgap, medium confidence)
- CyberGym: **30.2% estimated ±10.0 pp** (benchgap, low confidence)
- BrowseComp: **60.0% estimated ±6.2 pp** (benchgap, medium confidence)

Reasoning / knowledge:
- GPQA Diamond: **85.5% estimated ±1.7 pp** (benchgap, medium confidence); voidsource reports GPQA 86.9
- HLE: **40.4% estimated ±9.4 pp** (benchgap, low confidence); voidsource reports HLE 16.0 — major conflict
- CritPt: **3.4% estimated ±6.6 pp** (benchgap, medium confidence)
- AIME26: **94.3% estimated ±1.4 pp** (benchgap, high confidence); voidsource reports AIME 57.1 — major conflict
- AA-GPQA Diamond: **81.9% estimated ±4.2 pp** (benchgap, high confidence)
- AA-HLE: **23.4% estimated ±7.4 pp** (benchgap, medium confidence)
- AA-Omniscience Accuracy: **33.7% estimated ±7.7 pp** (benchgap, medium confidence)
- ARC-AGI-1: **71.5% estimated ±5.9 pp** (benchgap, medium confidence)
- ARC-AGI-2: **22.4% estimated ±12.6 pp** (benchgap, low confidence)
- AA Intelligence Index: **20.5% estimated ±7.9 pp** (benchgap, medium confidence)

Coding:
- LiveCodeBench v6: **85.6% estimated ±2.4 pp** (benchgap, low confidence)
- DeepSWE: **56.3% estimated ±7.2 pp** (benchgap, low confidence)
- Vibe Code Bench: **0.0% measured** (benchgap)


### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 62/100.** SWE-bench Verified (71.7% estimated), OSWorld-Verified (57.4% estimated), BrowseComp (60.0% estimated). Capped by SWE-bench Pro (0.0% estimated), CyberGym (30.2% estimated).
- **Reasoning: 55/100.** GPQA Diamond (85.5% estimated / 86.9 voidsource), AIME26 (94.3% estimated), ARC-AGI-1 (71.5% estimated). Capped by major conflicts: HLE 40.4% (benchgap) vs 16.0% (voidsource), AIME26 94.3% (benchgap) vs 57.1% (voidsource). AA Intelligence Index 20.5 (estimated) is low.
- **Context window: 60/100.** Context window not independently declared (VoidSource coverage gap); no public retrieval score at full window.
- **Multimodal: 68/100.** MMMU (80.0% estimated), MathVision (81.0% estimated), CharXiv (73.2% measured), Video-MME (83.3% estimated). Capped by limited independent multimodal coverage.
- **Coding: 58/100.** LiveCodeBench v6 (85.6% estimated), SWE-bench Verified (71.7% estimated). Capped by SWE-bench Pro (0.0% estimated), Vibe Code Bench (0.0% measured), DeepSWE (56.3% estimated).
- **Cost efficiency: 95/100.** $0.25/$1.50 per 1M — cheapest production-grade tier in Gemini 3 family per voidsource. Not counted toward Overall.
- **Overall Score: 61/100.** Half-up mean of (62 + 55 + 60 + 68 + 58) / 5 = 60.6 → 61. Best-fit recommendation: a cost-efficient multimodal model for high-volume lightweight tasks; scores highly provisional due to major source conflicts and thin verification.

### Conflicts vs benchgap vs voidsource

- HLE: benchgap estimates 40.4% vs voidsource reports 16.0% — major conflict
- AIME26: benchgap estimates 94.3% vs voidsource reports 57.1% — major conflict
- GPQA Diamond: benchgap estimates 85.5% vs voidsource reports 86.9% — minor conflict
- Context window: VoidSource flags as coverage gap (not declared); benchgap doesn't report; Google AI page doesn't specify
- Pricing: voidsource $0.25/$1.50 per 1M; no conflicting source found

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (benchgap aggregator + voidsource comparison + Google AI API docs); scores are normalized 1–100 interpretations, not official vendor scores. Major source conflicts on HLE and AIME26 — treat scores as highly provisional.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
Long context:
- Context window not declared by VoidSource (coverage gap); no public retrieval score at full window.

Multimodal:
- MMMU: **80.0% estimated ±3.7 pp** (benchgap, medium confidence)
- MMMU-Pro: **75.3% estimated ±3.0 pp** (benchgap, high confidence)
- MathVision: **81.0% estimated ±3.4 pp** (benchgap, high confidence)
- CharXiv: **73.2% measured** (benchgap)
- Video-MME (with subtitle): **83.3% estimated ±2.9 pp** (benchgap, high confidence)