# Gemini 3.6 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 2026 Flash reasoning model (high effort default), between 3.5 and 3.7 in the Flash line. Top use case: fast multimodal agentic work with standout computer-use behavior.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.6-flash` (Google AI SDK); also Google AI Studio/Gemini API.
- **Release / knowledge:** 2026-07-21; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.6-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (effort levels, "high" default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $1.50 in / $7.50 out per 1M (cached read $0.15); Google first-party API $0.75 / $3.75 per 1M.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **73.8%** (BenchLM `gemini-3-6-flash`)
- OSWorld-Verified: **83%** (BenchLM — elite computer-use score)
- GDPval-AA: **1423 Elo** (BenchLM; normalized 38.2%)
- Claw-Eval / ClawProBench: **no verified public score found**
- AA Agentic Index: **30.1%** (BenchLM)
- Tau3-Banking / Toolathlon / MCP-Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA-GPQA via BenchLM; Vals 93.4%)
- HLE: **40.8%** (AA-HLE via BenchLM)
- AA-LCR: **80.0%**; CritPt **10.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **34** (high effort, AA #64/211)
- Omniscience Accuracy / Hallucination Rate: **50.0% / 55.6%** (BenchLM)
- MMLU-Pro (Vals): **89.3%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **79.6%**
- LiveCodeBench (Vals): **88.1%**
- DeepSWE: **49.0%** (BenchLM)
- SciCode / AA-SciCode: **53.4%**; AA Coding Index **69.2%**; CursorBench 3.2 **53.5%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 80.0% at long context; no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- MMMU-Pro **83.2%** (AA-MMMU-Pro via BenchLM); Design Arena Website **1310**.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 83% is elite, but TB2.1 73.8%, GDPval 1423 and Agentic Index 30.1% are mid-band — a computer-use specialist, not an all-round agent.
- **Reasoning: 82/100.** GPQA 92.8% and HLE 40.8% clear the frontier bars; CritPt 10.6%, AA Index 34 and a 55.6% hallucination rate keep it mid-high.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 90/100.** Text+image+speech+video input (90–100 band), backed by MMMU-Pro 83.2%.
- **Coding: 75/100.** SWE-bench V 79.6% and LiveCodeBench 88.1% are solid; SciCode 53.4%, Coding Index 69.2% and DeepSWE 49.0% all miss their frontier refs.
- **Cost efficiency: 80/100.** $1.50/$7.50 on Zen ($0.75/$3.75 first-party) — between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; fast (184 tok/s).
- **Overall Score: 84.0/100.** (78 + 82 + 95 + 90 + 75) / 5 = 84.0. Best-fit: budget computer-use and multimodal agent jobs; 3.7/3.8 Flash are strictly better now.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
