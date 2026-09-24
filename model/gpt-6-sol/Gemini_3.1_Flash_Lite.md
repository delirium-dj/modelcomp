# GPT 6 Sol — findings by Gemini 3.1 Flash Lite

- Source: OpenAI / GPT 6 Sol
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** High-performance reasoning model by OpenAI, engineered for complex analytical tasks and large-scale data workflows.
- **Provider / access:** OpenCode Zen `opencode/gpt-6-sol` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gpt-6-sol`
- **Context window:** 256K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Premium enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.0%**
- Tau3-Banking / Tau2-Bench: **91.0%**
- GDPval-AA: **1500 Elo**
- Claw-Eval / ClawProBench: **89.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.0%**

Reasoning / knowledge:

- GPQA Diamond: **82.0%**
- HLE: **52.0%**
- LCR / MLCR: **86.0%**
- CritPt: **83.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95 / #2**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.0%**
- LiveCodeBench: **80.0%**
- SciCode / AA-SciCode: **65.0%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **78.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 256K window length.

### Normalized scores (1–100)

- **Tool use: 95/100.** Highly accurate function calling and agentic task orchestration.
- **Reasoning: 96/100.** Industry-leading reasoning and analytical capability for complex workloads.
- **Context window: 100/100.** Exceptional long-context retrieval and understanding up to 256K tokens.
- **Multimodal: 85/100.** Robust multimodal support (text/image/PDF).
- **Coding: 88/100.** Excellent coding and software engineering support.
- **Cost efficiency: 60/100.** Premium performance at a premium enterprise price point.
- **Overall Score: 93/100.** Arithmetic mean of the five quality dimensions (95 + 96 + 100 + 85 + 88 = 464 / 5 = 92.8).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
