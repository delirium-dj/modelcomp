# Gemini 3.5 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 2026 Flash reasoning model (high effort default), first of the 3.5–3.8 Flash cadence. Top use case: fast multimodal agentic work with strong tool-use reliability at mid price.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.5-flash` (Google AI SDK); also Google AI Studio/Gemini API.
- **Release / knowledge:** 2026-05-19; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.5-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (effort levels, "high" default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $1.50 in / $9.00 out per 1M (cached read $0.15); Google API same headline.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (BenchLM `gemini-3-5-flash`; Vals harness 74.2%)
- Tau2-Bench: **95.3%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- GDPval-AA: **1345 Elo** (BenchLM; normalized 42.2%)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas: **83.6%**; Toolathlon **56.5%**; OSWorld-Verified **78.4%**; Finance Agent v2 **57.9%**; APEX-Agents-AA **47.1%**; Gert Labs **61.85%**; AA Agentic Index **27.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (BenchLM; Vals 92.7%)
- HLE: **40.2%** / AA-HLE **42.7%** (BenchLM)
- MRCR v2: **77.3%**; MRCR 1M **26.6%** (BenchLM — retrieval degrades badly at 1M)
- AA-LCR: **69.3%**; CritPt **13.1%**; ARC-AGI-2 **72.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **33** (high effort, AA #73/211; BenchLM lists 50.2 from an earlier snapshot)
- Omniscience Accuracy / Hallucination Rate: **51.9% / 60.7%** (BenchLM)
- MMLU-Pro (Vals): **89.5%**; FrontierMath v2 Tier 4 **14.6%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **78.8%**
- LiveCodeBench (Vals): **87.6%**
- SciCode: **53.1%** (AA-SciCode 53.9%); AA Coding Index **70.1%**; SWE-bench Pro **55.1%**; Vibe Code Bench **48.68%**; CursorBench 3.1 **49.8%** / 3.2 **48.8%** (BenchLM)
- DeepSWE: **no verified public score found** for this ID

Long context:

- 1M window (AA/BenchLM); MRCR v2 77.3% short-band but MRCR 1M only 26.6% — weak retrieval at full window.

Multimodal (grounding):

- MMMU-Pro **83.6%** (AA 84.3%); CharXiv **84.2%**; Design Arena Website **1275** (BenchLM); IFBench **76.3%**.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 95.3%, OSWorld-Verified 78.4% and MCP-Atlas 83.6% are strong; TB2.1 ~75%, GDPval 1345 and Agentic Index 27.3% sit in the mid band.
- **Reasoning: 78/100.** GPQA 92.2% and HLE 40–43% clear the frontier bars; AA-LCR 69.3%, CritPt 13.1%, ARC-AGI-2 72.1% and a 60.7% hallucination rate keep it mid-high.
- **Context window: 88/100.** 1M window (top band) but MRCR at 1M is only 26.6% — real retrieval quality collapses near the limit, capping well below the 95–100 tier.
- **Multimodal: 90/100.** Text+image+speech+video input (90–100 band), backed by MMMU-Pro 83.6%/CharXiv 84.2%.
- **Coding: 76/100.** SWE-bench V 78.8% and LiveCodeBench 87.6% solid; SciCode 53.1% and Coding Index 70.1% just miss frontier refs; Vibe 48.7% decent; DeepSWE unpublished.
- **Cost efficiency: 78/100.** $1.50/$9.00 per 1M on the evaluated tier — between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; fast (202 tok/s).
- **Overall Score: 81.6/100.** (76 + 78 + 88 + 90 + 76) / 5 = 81.6. Best-fit: reliable mid-tier multimodal agent; 3.7/3.8 Flash supersede it at equal or lower price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
