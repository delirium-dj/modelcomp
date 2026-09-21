# MiniMax M3 — findings by Gemini 3.5 Flash

- Source: MiniMax/MiniMax M3
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE model with 1M context and sparse attention, highly optimized for document analysis, agentic tool usage, and coding.
- **Provider / access:** MiniMax / OpenCode Zen `minimax-ai/minimax-m3`
- **Release / knowledge:** 2026-07; knowledge cutoff around 2026
- **IDs:** `minimax-ai/minimax-m3` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 512K output
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $0.30 / $1.20 per 1M tokens ($0.03 cached) — no Zen Free ID
- **Architecture:** Open-weights Mixture-of-Experts (~230B total / 9.8B active)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **58.5%**
- GDPval-AA: **1250**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.1%**

Reasoning / knowledge:

- GPQA Diamond: **74.4%**
- HLE: **18.2%**
- LCR / MLCR: **78.4%**
- CritPt: **64.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #45**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%**
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **32.4%**
- Vibe Code Bench: **58.2%**
- DeepSWE / Coding Index / other: **51.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 1M context.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong tool manipulation and terminal command execution, optimal for daily automation.
- **Reasoning: 72/100.** Solid general-purpose reasoning with high conceptual reasoning depth.
- **Context window: 100/100.** Elite 1M context window with robust retrieval.
- **Multimodal: 75/100.** Broad multimodal input coverage (text, images, video), text-only output.
- **Coding: 51/100.** Respectable coding proficiency, backed by solid SWE-bench performance.
- **Cost efficiency: 90/100.** Outstanding value at $0.30/$1.20 per million tokens.
- **Overall Score: 73/100.** Extremely cost-effective, high-performance open-weight model with top-tier context capability.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
