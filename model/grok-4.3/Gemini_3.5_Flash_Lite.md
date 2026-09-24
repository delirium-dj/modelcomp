# Grok 4.3 — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok 4.3
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI Grok 4.3 conversational and reasoning model optimized for real-time data access and advanced analytical tasks.
- **Provider / access:** OpenCode Zen `opencode/grok-4.3` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/grok-4.3`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Standard xAI API tier pricing
- **Architecture:** Proprietary dense/MoE architecture by xAI

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.5%** (xAI technical report, benchmark v2.1)
- Tau3-Banking / Tau2-Bench: **81.0%** (xAI harness)
- GDPval-AA: **1350 Elo** (evaluated against frontier peers)
- Claw-Eval / ClawProBench: **82.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.0%**

Reasoning / knowledge:

- GPQA Diamond: **69.5%** (xAI evaluation suite)
- HLE: **42.0%**
- LCR / MLCR: **76.0%**
- CritPt: **71.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88 / #6**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **65.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 94.5% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool-calling reliability and multi-step execution matching Terminal-Bench and Claw-Eval benchmarks.
- **Reasoning: 86/100.** High-level problem solving demonstrated on GPQA Diamond and rigorous reasoning evaluations.
- **Context window: 95/100.** Reliable retrieval across the full 128K context window capacity.
- **Multimodal: 65/100.** Solid text handling with standard conversational capabilities.
- **Coding: 74/100.** Competent software engineering and code generation performance on LiveCodeBench and SWE-bench.
- **Cost efficiency: 90/100.** Excellent price-to-performance ratio for enterprise deployments.
- **Overall Score: 80.8/100.** Arithmetic mean of the five quality dimensions (84 + 86 + 95 + 65 + 74 = 404 / 5 = 80.8).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
