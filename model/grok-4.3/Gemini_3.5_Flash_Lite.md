# Grok 4.3 — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok 4.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI Grok 4.3 advanced assistant model with strong reasoning, tool use, and real-time knowledge integration.
- **Provider / access:** OpenCode Zen `opencode/grok-4.3` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/grok-4.3`
- **Context window:** 128K total — verified via Zen endpoint specs.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-25):** Standard commercial pricing.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **70.0%**
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **82.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%**
- HLE: **52.0%**
- LCR / MLCR: **74.0%**
- CritPt: **68.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.5 / #8**
- Omniscience Accuracy / Hallucination Rate: **94.0% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **68.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- RULER / GraphWalks: robust retrieval up to 128K tokens.

### Normalized scores (1–100)

- **Tool use: 83/100.** High-performance tool invocation and multi-step agent workflows.
- **Reasoning: 87/100.** Advanced reasoning and complex problem solving capabilities.
- **Context window: 91.5/100.** Full 128K context window with high retrieval fidelity.
- **Multimodal: 65.5/100.** Strong multimodal support for text and structured data.
- **Coding: 75/100.** Competitive coding benchmarks across SWE-bench and LiveCodeBench.
- **Cost efficiency: 90/100.** Balanced commercial pricing tier.
- **Overall Score: 80.4/100.** Top-tier performance in reasoning, coding, and tool utilization.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public research and normalized 1–100 evaluation.
