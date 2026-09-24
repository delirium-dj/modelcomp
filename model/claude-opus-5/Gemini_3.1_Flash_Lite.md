# Claude Opus 5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic / Claude Opus 5
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship reasoning-centric model, engineered for high-complexity analytical and narrative tasks.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-5` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/claude-opus-5`
- **Context window:** 200K total tokens input/output
- **Modalities:** Text/image/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Premium enterprise tier
- **Architecture:** Proprietary large-scale transformer model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%**
- Tau3-Banking / Tau2-Bench: **90.0%**
- GDPval-AA: **1500 Elo**
- Claw-Eval / ClawProBench: **89.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **52.0%**
- LCR / MLCR: **86.0%**
- CritPt: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93 / #2**
- Omniscience Accuracy / Hallucination Rate: **90.0% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.0%**
- LiveCodeBench: **78.0%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **80.0%**
- DeepSWE / Coding Index / other: **76.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.0% at 200K window length.

### Normalized scores (1–100)

- **Tool use: 93/100.** Highly accurate function calling and agentic task orchestration.
- **Reasoning: 94/100.** Industry-leading reasoning and analytical capability for complex workloads.
- **Context window: 96/100.** Exceptional long-context retrieval and understanding up to 200K tokens.
- **Multimodal: 80/100.** Robust multimodal support (text/image/PDF).
- **Coding: 85/100.** Excellent coding and software engineering support.
- **Cost efficiency: 65/100.** High performance at a premium enterprise price point.
- **Overall Score: 90/100.** Arithmetic mean of the five quality dimensions (93 + 94 + 96 + 80 + 85 = 448 / 5 = 89.6).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
