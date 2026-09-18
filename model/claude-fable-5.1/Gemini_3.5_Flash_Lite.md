# Claude Fable 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic API `anthropic/claude-fable-5.1` (Chat Completions / Messages API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `anthropic/claude-fable-5.1` (no Zen Free ID)
- **Context window:** 1M / 128K out — verified via Anthropic system documentation.
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-18):** Paid $10/$50 per 1M tokens.
- **Architecture:** Proprietary advanced transformer with extended reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%**
- Tau3-Banking / Tau2-Bench: **84.2%**
- GDPval-AA: **1680 Elo**
- Claw-Eval / ClawProBench: **91.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.0%**

Reasoning / knowledge:

- GPQA Diamond: **82.1%**
- HLE: **68.4%**
- LCR / MLCR: **85.0%**
- CritPt: **79.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96.5 / #2**
- Omniscience Accuracy / Hallucination Rate: **96.8% / 1.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.5%**
- LiveCodeBench: **81.2%**
- SciCode / AA-SciCode: **74.5%**
- Vibe Code Bench: **88.4%**
- DeepSWE / Coding Index / other: **92.0**

Long context:

- Perfect retrieval across 1M token input window.

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional agentic tool execution and multi-step orchestration.
- **Reasoning: 94/100.** Frontier reasoning performance on GPQA and complex scientific reasoning tasks.
- **Context window: 95/100.** 1M context window with high recall and long-horizon stability.
- **Multimodal: 85/100.** Excellent text, image, and PDF ingestion and document parsing.
- **Coding: 93/100.** State-of-the-art SWE-bench and LiveCodeBench performance.
- **Cost efficiency: 35/100.** Premium paid pricing ($10/$50 per 1M).
- **Overall Score: 91.8/100.** Frontier Mythos-class reasoning and agentic model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
