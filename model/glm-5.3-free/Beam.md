# GLM 5.3 Free — findings by Beam

- Source: OpenCode Zen promo route `opencode/glm-5.3-free` (served the full GLM 5.3 flagship, 204K promo context cap); underlying model Z.AI GLM 5.3
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Parked promotional route that briefly served the full GLM-5.3 flagship free on OpenCode Zen (204K promo context cap over 1M native); ID no longer listed.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (parked/promo, no longer listed); underlying model Z.AI GLM 5.3 (`zai-org/glm-5.3`) on Z.AI API / OpenRouter / HuggingFace.
- **Release / knowledge:** Underlying GLM 5.3 released 2026-08-14; knowledge cutoff not stated.
- **IDs:** `opencode/glm-5.3-free` (Zen, parked); `zai-org/glm-5.3` (HF, canonical).
- **Context window:** 204,800 tokens (promo cap; underlying GLM 5.3 has 1,000,000).
- **Modalities:** Text in (image in on GLM-5.3-Flash variant); text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Free on Zen promo (parked); underlying GLM 5.3 free open weights (self-host free).
- **Architecture:** MoE open weights; same as GLM 5.3 (1M native context).

### Raw benchmarks found

Inherited from the underlying GLM 5.3 (see `../glm-5.3/Beam.md`):

Agent / tool use:
- Terminal-Bench 2.1: **88.2%** (Z.AI official)
- CyberGym: **84.5%** (Z.AI official, SOTA)
- Toolathlon-Verified: **78.4%** (Z.AI official, GLM-5.3-Flash)
- AutomationBench: **48.8%** (Z.AI official, GLM-5.3-Flash)
- HLE with tools: **55.3% / 62.5%** (Z.AI official)

Reasoning / knowledge:
- GPQA Diamond (Vals): **88.1%** (BenchLM)
- MMLU-Pro (Vals): **86.8%** (BenchLM)

Coding:
- DeepSWE: **63.4%** (Z.AI official, GLM-5.3-Flash)
- Vibe Code Bench: **61.77%** (BenchLM, GLM-5.3)

Long context:
- Promo cap **204K** (underlying 1M); MRCR not reported.

Multimodal:
- GLM 5.3 text-only; GLM-5.3-Flash first natively multimodal (no verified benchmarks).

### Normalized scores (1–100)

Inherited from GLM 5.3, with context capped at the 204K promo limit:

- **Tool use: 76/100.** Same as GLM 5.3 (Terminal-Bench 2.1 88.2%, CyberGym 84.5%, Toolathlon 78.4%).
- **Reasoning: 74/100.** Same as GLM 5.3 (GPQA 88.1%, MMLU-Pro 86.8%).
- **Context window: 70/100.** 204K promo cap (vs 1M native); caps at no published MRCR.
- **Multimodal: 40/100.** Same as GLM 5.3 (text-only flagship).
- **Coding: 72/100.** Same as GLM 5.3 (DeepSWE 63.4%, Terminal-Bench 2.1 88.2%).
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 66/100.** Mean of five quality dims (76 + 74 + 70 + 40 + 72 = 332 / 5 = 66.4 → 66).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (OpenCode Zen catalogue, Z.AI official blog, BenchLM, GLM-5.3 Beam.md); scores are normalized 1–100 interpretations, not official vendor scores. Deep second-pass: 5+ searches confirmed GLM 5.3 is real (Z.AI, Aug 14 2026) and the free route served the full flagship; promo route now parked.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.