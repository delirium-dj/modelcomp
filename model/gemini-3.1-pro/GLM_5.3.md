# Gemini 3.1 Pro — findings by GLM 5.3

- Source: Google (`gemini-3.1-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's prior-generation Pro reasoning model (successor to the deprecated Gemini 3 Pro, itself superseded by the 3.5–3.8 Flash line for agentic work). Top use case: deep multimodal analysis and long-context reasoning at Pro quality.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.1-pro` (Google AI SDK); also Google AI Studio/Gemini API.
- **Release / knowledge:** early 2026 (after Gemini 3 Pro's March 2026 deprecation cycle; exact release date not verified); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.1-pro` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via BenchLM model details; Zen lists tiered pricing at the 200K boundary).
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls; JSON mode (audio input not verified for this exact ID).
- **Pricing (as of 2026-09-24):** Zen $2.00 in / $12.00 out per 1M ≤200K tokens ($4.00/$18.00 above 200K; cached read $0.20).
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **70.8%** (BenchLM `gemini-3-1-pro`)
- Tau2-Bench: **95.6%** (BenchLM)
- Claw-Eval: **57.8%** (BenchLM)
- GDPval-AA: **904 Elo** (BenchLM; normalized 13.8%)
- Tau3-Banking: **no verified public score found** for this ID
- AA Agentic Index: **10.3%**; APEX-Agents-AA **32.0%**; ResearchClawBench **13.3%**; Gert Labs **56.87%**; DeepSearchQA **69.7%** (BenchLM)
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (BenchLM; AA harness 94.1%; Vals 95.5%)
- HLE: **45.4%** w/o tools / **47.0%** AA harness (BenchLM)
- AA-LCR: **82.0%** (BenchLM); CritPt **17.7%**; ARC-AGI-2 **77.1%** / ARC-AGI-3 **0.4%**
- Artificial Analysis Intelligence Index: **29.7** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **54.9% / 50.9%** (BenchLM AA-Omniscience)
- MMLU-Pro (Vals): **91.0%**; FrontierMath v2 Tiers 1–3 **36.9%** / Tier 4 **16.7%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **78.8%**
- LiveCodeBench (Vals): **88.5%** / LiveCodeBench Pro **82.9%** (BenchLM)
- SciCode / AA-SciCode: **58.7%** (BenchLM)
- AA Coding Index: **68.8%** (BenchLM); Vibe Code Bench **32.03%**; React Native Evals **78.9%**
- DeepSWE: **no verified public score found**

Long context:

- 1M window (BenchLM); AA-LCR 82.0% at long context; no MRCR/RULER retrieval-at-512K number published for this exact ID.

Multimodal (grounding):

- MMMU-Pro **83.9%** (AA 82.4%), CharXiv **80.2%**, ScreenSpot Pro **84.4%**, MedXpertQA-MM **81.3%**, ERQA **69.4%**, SimpleVQA **72.4%**, Design Arena Website **1264** (BenchLM); IFBench **77.1%**, Global-MMLU-Lite **93.2%**.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 95.6% and Claw-Eval 57.8% are strong, TB2.1 70.8% solid-mid, but GDPval 904 sits in the mid band (900–1200) and the AA-harness agentic indexes (10.3%) are weak — mixed profile caps it below the 3.8 Flash tier.
- **Reasoning: 85/100.** GPQA 94.3% and HLE 45–47% clear frontier bars, ARC-AGI-2 77.1% is strong; CritPt 17.7%, ARC-AGI-3 0.4% and AA Index 29.7 keep it out of the 90s.
- **Context window: 95/100.** 1M total context (top tier band); no verified ≥98% retrieval-at-512K number to justify 100.
- **Multimodal: 85/100.** Image/video input with text out; excellent grounding scores (MMMU-Pro 83.9%, ScreenSpot Pro 84.4%) but no verified audio input for this ID (top of the 75–90 video band).
- **Coding: 83/100.** SWE-bench V 78.8%, LiveCodeBench 88.5%, SciCode 58.7% are solid; Coding Index 68.8% just misses the 70+ frontier ref and Vibe 32% is weak; DeepSWE unpublished.
- **Cost efficiency: 72/100.** Paid at $2.00/$12.00 per 1M on Zen — between the $1.25/$4.25 (≈88) and $3/$15 (≈60) anchors, with a 2× surcharge above 200K.
- **Overall Score: 84.8/100.** (76 + 85 + 95 + 85 + 83) / 5 = 84.8. Best-fit: long-context multimodal reasoning on a budget below Opus-class pricing; for pure agentic work the newer Flash line is stronger.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
