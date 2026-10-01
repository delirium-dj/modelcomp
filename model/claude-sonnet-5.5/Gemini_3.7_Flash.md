# Claude Sonnet 5.5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class model with always-on thinking and extended 1M context, optimized for software engineering and complex reasoning.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5.5`).
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff August 2026.
- **IDs:** `anthropic/claude-sonnet-5.5`
- **Context window:** 1,000,000 tokens (1M input, 64k max output).
- **Modalities:** Text and vision (image) in; text out; reasoning always-on; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** Paid $2.00 / $10.00 per 1M tokens; no Zen Free ID.
- **Architecture:** Proprietary foundation model with effort-controlled reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Artificial Analysis benchmark)
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1520**
- Claw-Eval / ClawProBench: **81.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **82.5%**
- HLE: **28.0%**
- LCR / MLCR: **88.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51 / #2**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 9.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **71.0%**
- Vibe Code Bench: **85.0%**
- DeepSWE / Coding Index / other: **82.0**

Long context:

- MRCR 1M needle retrieval 99.5%; RULER benchmark 95.0% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 90/100.** Top-tier tool use and agentic execution with 72% Terminal-Bench 2.1.
- **Reasoning: 90/100.** Exceptional reasoning with always-on thinking, 82.5% GPQA Diamond, and AA Index 51.
- **Context window: 96/100.** Extended 1M token context window with reliable needle retrieval.
- **Multimodal: 70/100.** Strong image vision capabilities; native video and audio inputs not supported.
- **Coding: 92/100.** Premier coding model with 68% SWE-bench Verified and 76% LiveCodeBench.
- **Cost efficiency: 78/100.** Competitive tier pricing at $2.00 / $10.00 per 1M tokens.
- **Overall Score: 88/100.** Outstanding frontier model for production development, code generation, and complex agentic workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-01
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
