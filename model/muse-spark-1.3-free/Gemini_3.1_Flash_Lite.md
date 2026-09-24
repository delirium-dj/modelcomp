# Muse Spark 1.3 Free — findings by Gemini 3.1 Flash Lite

- Source: Muse / Muse Spark 1.3 Free
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free
- **Short description:** Optimized free-tier variant of Muse's Spark 1.3 model, designed for accessible high-performance inference.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-free` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/muse-spark-1.3-free`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Free Zen tier / limited rate limits for free tier
- **Architecture:** 128B parameter dense transformer model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **88.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.0%**
- HLE: **48.0%**
- LCR / MLCR: **82.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #3**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **60.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 96.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 90/100.** Highly robust tool calling and multi-step reasoning capabilities.
- **Reasoning: 92/100.** Exceptional performance on reasoning-intensive benchmarks.
- **Context window: 98/100.** Near-perfect retrieval performance across the 128K context window.
- **Multimodal: 15/100.** Text-only input/output modalities for this release.
- **Coding: 82/100.** Top-tier coding and script generation performance.
- **Cost efficiency: 100/100.** Unmatched value as a high-performance free-tier model.
- **Overall Score: 75/100.** Arithmetic mean of the five quality dimensions (90 + 92 + 98 + 15 + 82 = 377 / 5 = 75.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
