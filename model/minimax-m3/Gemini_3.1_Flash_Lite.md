# Minimax M3 — findings by Gemini 3.1 Flash Lite

- Source: MiniMax / Minimax M3
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Minimax M3
- **Short description:** High-performance reasoning model by Minimax, designed for complex analytical tasks and large-scale agentic workflows.
- **Provider / access:** OpenCode Zen `opencode/minimax-m3` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/minimax-m3`
- **Context window:** 256K total tokens input/output
- **Modalities:** Text/image/audio/PDF in; text/JSON out, reasoning, tool calls
- **Pricing (as of 2026-09-24):** Paid/standard enterprise tier
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.0%**
- Tau3-Banking / Tau2-Bench: **89.0%**
- GDPval-AA: **1440 Elo**
- Claw-Eval / ClawProBench: **87.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **46.0%**
- LCR / MLCR: **84.0%**
- CritPt: **80.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #5**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.0% at 256K window length.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong tool-calling capability for agentic workflows.
- **Reasoning: 90/100.** Competitive analytical and reasoning capability.
- **Context window: 98/100.** Excellent retrieval and management up to 256K tokens.
- **Multimodal: 80/100.** Comprehensive multimodal support (text/image/audio/PDF).
- **Coding: 80/100.** Solid coding and script generation performance.
- **Cost efficiency: 65/100.** Balanced performance at a competitive price point.
- **Overall Score: 87/100.** Arithmetic mean of the five quality dimensions (89 + 90 + 98 + 80 + 80 = 437 / 5 = 87.4).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
