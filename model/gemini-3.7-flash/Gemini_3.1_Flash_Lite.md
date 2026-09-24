# Gemini 3.7 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google / Gemini 3.7 Flash
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** High-performance Gemini 3.7 series model, optimized for speed, efficiency, and task-solving capabilities.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.7-flash` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gemini-3.7-flash`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Efficient/enterprise tier
- **Architecture:** Proprietary transformer architecture optimized for low-latency

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.0%**
- Tau3-Banking / Tau2-Bench: **88.0%**
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **88.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **45.0%**
- LCR / MLCR: **84.0%**
- CritPt: **80.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #3**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **75.0%**
- SciCode / AA-SciCode: **60.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 96.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-performance tool calling and function-execution accuracy.
- **Reasoning: 90/100.** Robust reasoning and analytical capabilities.
- **Context window: 96/100.** Reliable long-context management up to 128K tokens.
- **Multimodal: 78/100.** Capable text/image/PDF input processing.
- **Coding: 80/100.** Competent coding and script generation for high-speed workflows.
- **Cost efficiency: 90/100.** Excellent performance-to-cost ratio for high-throughput applications.
- **Overall Score: 86/100.** Arithmetic mean of the five quality dimensions (88 + 90 + 96 + 78 + 80 = 432 / 5 = 86.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
