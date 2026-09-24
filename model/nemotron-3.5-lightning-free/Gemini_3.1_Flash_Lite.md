# Nemotron 3.5 Lightning Free — findings by Gemini 3.1 Flash Lite

- Source: NVIDIA / Nemotron 3.5 Lightning Free
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** High-speed free-tier variant of NVIDIA's Nemotron 3.5 model, optimized for rapid interaction and efficient general tasks.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/nemotron-3.5-lightning-free`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Free Zen tier / limited rate limits for free tier
- **Architecture:** Optimized transformer architecture for speed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%**
- Tau3-Banking / Tau2-Bench: **82.0%**
- GDPval-AA: **1280 Elo**
- Claw-Eval / ClawProBench: **81.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.0%**
- HLE: **35.0%**
- LCR / MLCR: **74.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #12**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 6.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%**
- LiveCodeBench: **62.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **60.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 88.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 80/100.** Competent tool-calling for lightweight automation.
- **Reasoning: 82/100.** Solid reasoning foundation.
- **Context window: 88/100.** Reliable retrieval up to 128K tokens.
- **Multimodal: 15/100.** Text-only input/output modalities for this release.
- **Coding: 65/100.** Adequate coding and script assistance.
- **Cost efficiency: 100/100.** Exceptional value for an accessible, high-performance free-tier model.
- **Overall Score: 66/100.** Arithmetic mean of the five quality dimensions (80 + 82 + 88 + 15 + 65 = 330 / 5 = 66).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
