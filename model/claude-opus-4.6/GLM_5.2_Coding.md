# Claude Opus 4.6 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Opus 4.6 base (non-reasoning variant; an Adaptive sibling exists), #31 of 505 on BenchLM. Top use case: legacy high-quality coding at Opus pricing.
- **Provider / access:** Anthropic API (`claude-opus-4.6`), Messages API.
- **Release / knowledge:** Generation before Opus 4.8; exact date and cutoff not published in the records checked.
- **IDs:** `anthropic/claude-opus-4.6`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 1M tokens (BenchLM record + Anthropic pricing table).
- **Modalities:** Text and image input; text output; base variant is non-reasoning (Adaptive sibling adds reasoning); tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $5.00 in / $25.00 out per 1M (BenchLM Anthropic pricing table); no cached-input rate published.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (46 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (BenchLM)
- Tau2-Bench: **84.8%** (τ²-bench, BenchLM); Tau3: no verified public score found
- GDPval-AA: no verified public score found (pre-AA-suite generation)
- Claw-Eval: **70.4%** (BenchLM)
- Toolathon / MCP-Atlas: no verified public score found
- BrowseComp: **83.7%**; OSWorld-Verified: **72.7%**; DeepSearchQA: **73.7%**; CyberGym: **66.6%**; JobBench: **36.7%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (GPQA-D; AA 84.0%; SuperGPQA 95%)
- HLE: **53%** (BenchLM HLE; HLE w/o tools 40%; AA-HLE 19.1%)
- LCR / MLCR: **67.0%** (AA-LCR) / no MLCR score found
- CritPt: **2.8%** (BenchLM)
- Artificial Analysis Intelligence Index: **26.4** (BenchLM — base, non-reasoning variant)
- Omniscience Accuracy / Hallucination Rate: **45.8% / 80.1%** (BenchLM); MMLU-Pro: **82%** (Arcee 89.1%); AIME25: **99.8%** (Arcee)

Coding:

- SWE-bench Verified / SWE-Pro: **80.8% / 53.4%** (both BenchLM; Arcee SWE-V* 75.6%)
- LiveCodeBench: **70.7%** (LiveCodeBench Pro, BenchLM)
- SciCode: no verified public score found
- Vibe Code Bench: **57.57%** (BenchLM)
- DeepSWE / Coding Index / other: no DeepSWE/Coding Index score found; SWE-Rebench **65.3%**; React Native Evals **84.1%**; FrontierCode 26.9% (BenchLM)

Long context:

- 1M window verified (BenchLM); no MRCR/RULER number published — AA-LCR 67.0% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ² 84.8%, Claw-Eval 70.4%, BrowseComp 83.7% and OSWorld 72.7% are solid for the generation; capped by TB2.0 65.4%, JobBench 36.7% and no GDPval evidence.
- **Reasoning: 78/100.** GPQA 89.2%, HLE 53%, SuperGPQA 95% and AIME25 99.8% are strong; capped by Index 26.4 (base non-reasoning), AA-HLE 19.1% and CritPt 2.8%.
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 72/100.** Text + image input (MMMU-Pro 77.3%, ScreenSpot Pro 83.1%, MedXpertQA MM 64.8%); no audio/video, text-only output.
- **Coding: 78/100.** SWE-V 80.8%, React Native 84.1% and LCB Pro 70.7%; capped by SWE Pro 53.4%, Vibe 57.6% and FrontierCode 26.9%.
- **Cost efficiency: 55/100.** $5.00/$25.00 is 2.5× the medians and now matches Opus 5 — strictly dominated on price-performance.
- **Overall Score: 80.4/100.** (74+78+100+72+78)/5 — a legacy Opus kept alive for compatibility; Sonnet 5 beats it at 40% of the price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + Anthropic pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
