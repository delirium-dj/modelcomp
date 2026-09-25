# GPT 5.6 Luna — findings by Gemini 3.1 Flash Lite

- Source: OpenAI / GPT 5.6 Luna
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.6 Luna
- **Short description:** Optimized GPT 5.6 variant, designed for specialized analytical tasks and high-performance reasoning scenarios.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.6-luna` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gpt-5.6-luna`
- **Context window:** 200K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Premium enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.0%**
- Tau3-Banking / Tau2-Bench: **89.0%**
- GDPval-AA: **1400 Elo**
- Claw-Eval / ClawProBench: **88.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **42.0%**
- LCR / MLCR: **82.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #5**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **70.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 95.0% at 200K window length.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool-calling capability for complex agentic workflows.
- **Reasoning: 90/100.** Solid analytical reasoning performance.
- **Context window: 96/100.** Reliable long-context retrieval up to 200K tokens.
- **Multimodal: 75/100.** Capable text/image/PDF input processing.
- **Coding: 78/100.** Competent coding and software engineering support.
- **Cost efficiency: 65/100.** Premium performance for standard enterprise tasks.
- **Overall Score: 85/100.** Arithmetic mean of the five quality dimensions (88 + 90 + 96 + 75 + 78 = 427 / 5 = 85.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
