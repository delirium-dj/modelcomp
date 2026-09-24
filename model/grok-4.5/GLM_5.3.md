# Grok 4.5 — findings by GLM 5.3

- Source: xAI (`grok-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's mid-2026 Grok reasoning model (500K context), between Grok 4.3 and 4.6; still served on Zen. Top use case: solid mid-tier agentic coding at Grok mid pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also xAI API.
- **Release / knowledge:** mid-2026 (before Grok 4.6's August release; exact date not verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.5` (Zen; no Free ID — paid only)
- **Context window:** 500K tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; reasoning yes (effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $2.00 in / $6.00 out per 1M ≤200K tokens ($4.00/$12.00 above 200K; cached read $0.30); xAI API same headline.
- **Architecture:** proprietary; xAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (BenchLM `grok-4-5`; Vals harness 67.8%; TB 3.0 15.7%)
- GDPval-AA: **1430 Elo** (BenchLM; normalized 43.5%)
- Claw-Eval / Tau3 / MCP-Atlas: **no verified public score found** for this ID
- AA Agentic Index: **42.1%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA harness; Vals 92.9%)
- HLE: **42.7%** (AA-HLE via BenchLM)
- AA-LCR: **79.3%**; CritPt **15.4%** (BenchLM)
- ARC-AGI-2: **52.6%** / ARC-AGI-3 **0.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **38.8** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **51.6% / 54.1%** (BenchLM)
- MMLU-Pro (Vals): **89.2%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **86.6%**
- LiveCodeBench (Vals): **87.4%**
- SciCode / AA-SciCode: **55.0%**; AA Coding Index **72.5%**; SWE-bench Pro **64.7%**; SWE Multilingual **78%**; CursorBench 3.2 **66.7%**; VulcanBench v3 **89.9%**; DeepSWE **53.0%** (BenchLM)
- Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 500K window (BenchLM); AA-LCR 79.3% at long context; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- AA-MMMU-Pro **80.4%**; Design Arena Website **1294** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 83.3% is solid; GDPval 1430 and Agentic Index 42.1% are mid-band; Claw/Tau3/MCP-Atlas unpublished.
- **Reasoning: 83/100.** GPQA 93.1% and HLE 42.7% clear the frontier bars with AA-LCR 79.3%; ARC-AGI-2 52.6%, CritPt 15.4%, AA Index 38.8 and a 54.1% hallucination rate cap it.
- **Context window: 87/100.** 500K total context (bottom of the 500K–1M band); no retrieval verification.
- **Multimodal: 70/100.** Text+image input per the Grok 4 line; MMMU-Pro 80.4%.
- **Coding: 82/100.** SWE-bench V 86.6%, LiveCodeBench 87.4%, SciCode 55.0% and Coding Index 72.5% all clear frontier refs; DeepSWE 53.0% and SWE-bench Pro 64.7% drag.
- **Cost efficiency: 85/100.** $2/$6 per 1M ≤200K — cheaper than the $1.25/$4.25 (≈88) anchor on output; doubling above 200K shaves points.
- **Overall Score: 80.0/100.** (78 + 83 + 87 + 70 + 82) / 5 = 80.0. Best-fit: good value coding agent; Grok 4.6 supersedes it at the same price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
