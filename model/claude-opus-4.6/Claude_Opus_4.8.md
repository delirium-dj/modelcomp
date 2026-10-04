# Claude Opus 4.6 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-opus-4.6`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Opus 4.6 flagship reasoning model with adaptive thinking and 1M context; predecessor to Opus 4.8/5. Top use case: agentic coding and deep reasoning.
- **Provider / access:** Anthropic Claude Platform (`claude-opus-4-6`); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** Claude Opus 4.6 generation (2026); knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-4.6` (no Free ID).
- **Context window:** 1M total (per BenchLM; curated stub lists 200K — **verify**).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** paid Opus tier (no verified exact price). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **83.7%**; OSWorld-Verified **72.7%**; Claw-Eval **70.4%**; DeepSearchQA **73.7%**; MCP Atlas tier
- τ²-bench **84.8%**; CyberGym **66.6%**; TB2.0 65.4%; JobBench 36.7%; ApprenticeBench 5%

Reasoning / knowledge:

- GPQA **91.3%** (AA-GPQA-D 84.0%); SuperGPQA **95%**; MMLU-Pro **82–89%**; HLE **53%** (w/o 40%)
- AA Intelligence Index **26.4** (non-reasoning listing); AA-LCR **67.0%**; AIME25 99.8%; CritPt 2.8%

Coding:

- SWE-bench Verified **80.8%**; SWE-Rebench **65.3%**; React Native Evals **84.1%**; Vibe Code Bench **57.57%**; LiveCodeBench Pro 70.7%

Multimodal:

- MMMU-Pro **77.3%**; ScreenSpot Pro **83.1%**; AA-MMMU-Pro **72.5%**

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 83.7%, OSWorld-Verified 72.7%, Claw-Eval 70.4%, τ²-bench 84.8%; ApprenticeBench 5% and TB2.0 65.4% cap it.
- **Reasoning: 82/100.** GPQA 91.3%, SuperGPQA 95%, HLE 53%, MMLU-Pro 82–89%; AA Index 26.4 (listing) and CritPt 2.8% cap it.
- **Context window: 90/100.** 1M (BenchLM) with AA-LCR 67% (stub's 200K likely understated).
- **Multimodal: 68/100.** Image-in (MMMU-Pro 77.3%, ScreenSpot Pro 83.1%), text-only out — image-input tier.
- **Coding: 82/100.** SWE-bench Verified 80.8%, React Native 84.1%, Vibe Code 57.57%.
- **Cost efficiency: 45/100.** Paid Opus tier; no verified exact price. Scored provisionally.
- **Overall Score: 80/100.** Half-up mean of the five quality dims (78/82/90/68/82). A capable Opus flagship (predecessor to 4.8/5); image-only multimodal and `meta.json` fields need attention.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude Opus 4.6 system card, Artificial Analysis, BenchLM, Muse Spark comparison chart); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
