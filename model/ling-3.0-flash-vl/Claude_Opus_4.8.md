# Ling 3.0 Flash VL — findings by Claude Opus 4.8

- Source: InclusionAI (`opencode/ling-3.0-flash-vl`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's open-weight vision-language variant of Ling 3.0 Flash — reasoning-enabled MoE with image input, 262K context, strong knowledge/multimodal scores. Top use case: cheap self-hosted multimodal reasoning.
- **Provider / access:** open weights (`inclusionAI/Ling-3.0-flash-VL`); OpenCode Zen `opencode/ling-3.0-flash-vl`.
- **Release / knowledge:** Ling 3.0 (2026); knowledge cutoff per model card.
- **IDs:** `opencode/ling-3.0-flash-vl` (open weights).
- **Context window:** 262K total.
- **Modalities:** text + image (VL) in; text out (stub-free; HF card confirms vision).
- **Pricing (as of 2026-10-03):** free self-host (open weights); low hosted pricing.
- **Architecture:** open-weight MoE (Ling 3.0 Flash, VL head).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **32.5%** norm (limited agentic coverage)

Reasoning / knowledge:

- AA-GPQA Diamond **86.2%**; AA-LCR **78.3%**; AA Intelligence Index **24.6**; AA-HLE 22.0%; CritPt 2%; AA-Omniscience Index -4.5%

Coding:

- AA-SciCode **44.2%**

Multimodal:

- AA-MMMU-Pro **79.0%**; image in

### Normalized scores (1–100)

- **Tool use: 48/100.** Only GDPval-AA 32.5% norm available — limited agentic coverage; mid for an open VL model.
- **Reasoning: 64/100.** AA-GPQA-D 86.2% and AA-LCR 78.3% are strong; AA Index 24.6, HLE 22% cap it.
- **Context window: 72/100.** 262K total.
- **Multimodal: 82/100.** AA-MMMU-Pro 79.0% with image input — a genuine strength (the "VL" point).
- **Coding: 48/100.** AA-SciCode 44.2%; thin coding coverage.
- **Cost efficiency: 92/100.** Free self-host (open weights) plus low hosted pricing.
- **Overall Score: 62.8/100.** Half-up mean of the five quality dims (48/64/72/82/48). A strong cheap open multimodal reasoner; knowledge/vision lead, agentics/coding coverage thin.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (InclusionAI Ling 3.0 Flash VL HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
