# Gemini 3.1 Pro — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.1-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Pro-tier Gemini 3.1 — high-performance multimodal reasoning with a 2M-token context. Top use case: very-long-context multimodal analysis and agentic reasoning across text, image, audio, and video.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.1-pro`), also OpenCode Zen. Gemini API.
- **Release / knowledge:** Gemini 3.1 generation (2026; AA numbers from the preview checkpoint); knowledge cutoff not published.
- **IDs:** `google/gemini-3.1-pro` (Free tier present on AI Studio and Zen).
- **Context window:** 2,000,000 (2M) total / 64K max output (per curated `meta.json`).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on Google AI Studio and OpenCode Zen; paid Pro-tier per-token pricing beyond the free quota.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **95.6%** (Meta comparison chart); DeepSearchQA **69.7%**
- Claw-Eval: **57.8%**; Terminal-Bench 2.1 (Vals): **70.8%**
- AA (preview checkpoint, depressed): GDPval-AA **904 Elo**, AA Agentic Index **10.3%**, APEX-Agents-AA **32.0%** — conflict with the stronger vendor/Vals numbers; preview-stage

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Vals 95.5%); MMLU-Pro **91.0%** (Vals)
- HLE w/o tools: **45.4%** (AA-HLE 47.0%); ARC-AGI-2 **77.1%**; AA-LCR **82.0%**
- AA Intelligence Index: **29.7** (preview); CritPt **17.7%**; FrontierMath v2 T1–3 **36.9%**; Global-MMLU-Lite **93.2%**

Coding:

- LiveCodeBench **88.5%** (Vals); SWE-bench **78.8%** (Vals); LiveCodeBench Pro **82.9%**
- AA Coding Index **68.8%**; AA-SciCode **58.7%**; React Native Evals **78.9%**; Vibe Code Bench **32.0%**

Multimodal / long context:

- MMMU-Pro **83.9%**; ScreenSpot Pro **84.4%**; CharXiv **80.2%**; SimpleVQA **72.4%**; ERQA **69.4%**; MedXpertQA (MM) **81.3%**; AA-MMMU-Pro **82.4%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong τ²-bench 95.6% and DeepSearchQA 69.7%, Claw-Eval 57.8%, TB2.1 70.8%; held back by very weak AA preview agentics (GDPval 904, Agentic Index 10.3%) — released agentic strength is mid-to-upper.
- **Reasoning: 85/100.** GPQA-D 94.3%, MMLU-Pro 91%, ARC-AGI-2 77.1%, AA-LCR 82%, HLE 45.4%; capped by AA Index 29.7 (preview) and CritPt 17.7%.
- **Context window: 97/100.** 2M total — top tier — with AA-LCR 82% long-context reasoning; 64K max output.
- **Multimodal: 92/100.** Full image+audio+video+PDF in with strong vision/grounding (MMMU-Pro 83.9%, ScreenSpot Pro 84.4%, MedXpertQA-MM 81.3%); text-only out.
- **Coding: 84/100.** LiveCodeBench 88.5%, SWE-bench 78.8%, LiveCodeBench Pro 82.9%, Coding Index 68.8%; Vibe Code Bench 32% is the floor.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen; low paid Pro-tier pricing.
- **Overall Score: 87.6/100.** Half-up mean of the five quality dims (80/85/97/92/84). Best for very-long-context multimodal reasoning on a free/cheap tier; the preview AA agentic numbers warrant re-check against the released checkpoint.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google blog, Meta comparison chart, Artificial Analysis preview page, BenchLM, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
