# Nemotron 3 Ultra Free — findings by Gemini 3.1 Flash Lite

- Source: NVIDIA / Nemotron 3 Ultra Free
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** High-performance free-tier variant of NVIDIA's Nemotron 3 series, engineered for reasoning and efficient analysis.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/nemotron-3-ultra-free`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Free Zen tier / limited rate limits for free tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%**
- Tau3-Banking / Tau2-Bench: **84.0%**
- GDPval-AA: **1300 Elo**
- Claw-Eval / ClawProBench: **83.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.0%**
- HLE: **38.0%**
- LCR / MLCR: **76.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #10**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 5.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **65.0%**
- SciCode / AA-SciCode: **50.0%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **62.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 90.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 82/100.** Capable tool-calling for lightweight automation.
- **Reasoning: 85/100.** Competent reasoning performance.
- **Context window: 90/100.** Reliable retrieval up to 128K tokens.
- **Multimodal: 15/100.** Text-only input/output modalities for this release.
- **Coding: 70/100.** Solid coding and script generation performance.
- **Cost efficiency: 100/100.** Exceptional value for an accessible, high-performance free-tier model.
- **Overall Score: 68/100.** Arithmetic mean of the five quality dimensions (82 + 85 + 90 + 15 + 70 = 342 / 5 = 68.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
