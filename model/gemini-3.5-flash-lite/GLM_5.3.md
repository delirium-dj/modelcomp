# Gemini 3.5 Flash-Lite — findings by GLM 5.3

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's ultra-cheap Lite tier of the Gemini 3.5 Flash generation (May 2026), 1M context and full multimodal input at the lowest Gemini price. Top use case: very high-volume multimodal processing where intelligence can be mid.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.5-flash-lite` (Google AI SDK); also Google AI Studio/Gemini API.
- **Release / knowledge:** 2026-05 (3.5 generation); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.5-flash-lite` (Zen; no Free ID — paid but very cheap)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image/speech/video in; text out; reasoning yes; tool calls; JSON mode (Gemini Flash family modality set).
- **Pricing (as of 2026-09-24):** Zen $0.30 in / $2.50 out per 1M (cached read $0.03).
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (BenchLM `gemini-3-5-flash-lite`; Vals harness 50.2%)
- OSWorld-Verified: **74.0%** (BenchLM — surprisingly strong for the tier)
- GDPval-AA: **1139 Elo** (BenchLM; normalized 23.5%)
- AA Agentic Index: **15.9%**; AA EnterpriseOps-Gym **42.3%** (BenchLM)
- Claw-Eval / Tau2 / Tau3 / MCP-Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA harness; Vals 83.8%)
- HLE: **18.8%** (AA-HLE via BenchLM — weak)
- MRCR v2: **72.2%**; AA-LCR **76.0%**; CritPt **0.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **22.2** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **29.5% / 34.4%** (BenchLM — decent honesty, low accuracy)
- MMLU-Pro (Vals): **85.8%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **75.0%**
- LiveCodeBench (Vals): **79.0%**
- SWE-bench Pro: **54.2%**; SciCode / AA-SciCode **41.3%**; AA Coding Index **49.3%** (BenchLM)
- DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); MRCR v2 72.2% (band unspecified); AA-LCR 76.0%.

Multimodal (grounding):

- AA-MMMU-Pro **79.0%** (BenchLM); full image/speech/video input per the Gemini Flash family.

### Normalized scores (1–100)

- **Tool use: 58/100.** OSWorld-Verified 74% is strong for a Lite tier, but TB2.1 ~52–54%, GDPval 1139 and Agentic Index 15.9% sit low-mid.
- **Reasoning: 60/100.** GPQA 83.8% is under the frontier bar; HLE 18.8% and CritPt 0.0% are weak; MMLU-Pro 85.8% and AA-LCR 76.0% keep it respectable.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 88/100.** Full text+image+speech+video input (90–100 band) with MMMU-Pro 79.0% — a bit under the Flash tier.
- **Coding: 62/100.** SWE-bench V 75.0% and LiveCodeBench 79.0% are decent for the price; SciCode 41.3% and Coding Index 49.3% are weak.
- **Cost efficiency: 94/100.** $0.30/$2.50 per 1M on Zen — cheaper than the ~$0.60/$2.20 (≈92) anchor with $0.03 cached reads.
- **Overall Score: 72.6/100.** (58 + 60 + 95 + 88 + 62) / 5 = 72.6. Best-fit: bulk multimodal input processing at the lowest Gemini price; not an agent engine.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
