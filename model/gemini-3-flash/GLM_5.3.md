# Gemini 3 Flash — findings by GLM 5.3

- Source: Google (`gemini-3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google's December 2025 Flash model (non-reasoning config as tracked by BenchLM/AA); the original 3-series Flash, several generations behind 3.5–3.8. Top use case: cheap, very fast multimodal input processing and routine coding.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3-flash` (Google AI SDK); also Google AI Studio/Gemini API.
- **Release / knowledge:** 2025-12-17 (preview); knowledge cutoff January 2025 (AA).
- **IDs:** `opencode/gemini-3-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; non-reasoning config per AA/BenchLM (a thinking variant of the family exists); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $0.50 in / $3.00 out per 1M (cached read $0.05); Google API same.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **49.2%** (BenchLM `gemini-3-flash`)
- Tau2-Bench: **43.3%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- Terminal-Bench 2.1 (Vals harness): **53.9%** (BenchLM)
- GDPval-AA: **no verified public score found** for this ID
- Gert Labs: **56.63%**; JobBench **11.4%** (BenchLM)
- Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA-GPQA via BenchLM; Vals 87.9%)
- HLE: **15.0%** (AA-HLE via BenchLM)
- AA-LCR: **55.3%**; CritPt **1.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **18** (estimated, non-reasoning class, AA #24/60)
- Omniscience Accuracy / Hallucination Rate: **45.8% / 92.4%** (BenchLM — negative Omniscience Index -4.3; very high hallucination)
- MMLU-Pro (Vals): **88.6%**; Global-MMLU-Lite **92.7%**; FrontierMath v2 Tier 4 **4.2%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **75.0%**
- LiveCodeBench (Vals): **85.6%**
- Vibe Code Bench: **20.2%** (BenchLM)
- SciCode / DeepSWE / SWE-Pro: **no verified public score found** for this ID

Long context:

- 1M window (AA/BenchLM); AA-LCR 55.3%; no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- MMMU-Pro **78.6%** (AA-MMMU-Pro via BenchLM); Design Arena Website **1207**.

### Normalized scores (1–100)

- **Tool use: 58/100.** TB2.1 53.9%, Tau2 43.3% and Claw-Eval 49.2% all sit in the mid band (GDPval not published); JobBench 11.4% is weak.
- **Reasoning: 62/100.** GPQA 81–88% is decent but under the 90% frontier bar; HLE 15%, AA Index 18, CritPt 1.4% and a 92.4% hallucination rate are mid-to-weak across the board.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 88/100.** Text+image+speech+video input (90–100 band); MMMU-Pro 78.6% is visibly weaker than newer Flash generations, keeping it under 90.
- **Coding: 68/100.** SWE-bench V 75.0% and LiveCodeBench 85.6% are respectable; Vibe 20.2% is weak and SciCode/DeepSWE unpublished.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M — cheaper than the $1.25/$4.25 (≈88) anchor, with class-best speed (195 tok/s) and 0.92s TTFT.
- **Overall Score: 74.2/100.** (58 + 62 + 95 + 88 + 68) / 5 = 74.2. Best-fit: budget multimodal workhorse; the 3.5–3.8 Flash line supersedes it on intelligence.

Note: BenchLM and AA track the non-reasoning configuration of this ID. If a thinking variant of `gemini-3-flash` is served instead, expect reasoning/tool scores several points higher; no verified public scores for that exact config were found.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
