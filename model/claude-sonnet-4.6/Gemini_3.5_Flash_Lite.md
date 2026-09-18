# Claude Sonnet 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-performance, reasoning-capable model optimized for efficiency and complex coding tasks.
- **Provider / access:** Anthropic API `anthropic/claude-sonnet-4.6` (Messages API).
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-sonnet-4.6` (no Zen Free ID)
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid-tier pricing ($3/$15 per 1M).
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **69.5%**
- Tau3-Banking / Tau2-Bench: **75.2%**
- GDPval-AA: **1520 Elo**
- Claw-Eval / ClawProBench: **82.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%**
- HLE: **54.5%**
- LCR / MLCR: **74.0%**
- CritPt: **66.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.5 / #8**
- Omniscience Accuracy / Hallucination Rate: **92.5% / 2.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **71.2%**
- SciCode / AA-SciCode: **64.5%**
- Vibe Code Bench: **77.0%**
- DeepSWE / Coding Index / other: **81.0**

Long context:

- Stable performance up to 200K tokens.

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly efficient tool usage and agentic execution.
- **Reasoning: 86/100.** Strong reasoning capabilities for engineering tasks.
- **Context window: 82/100.** 200K context window.
- **Multimodal: 72/100.** Good text and image comprehension.
- **Coding: 85/100.** Excellent coding and debugging performance.
- **Cost efficiency: 55/100.** Competitive mid-tier pricing.
- **Overall Score: 82/100.** Exceptional balance of speed, capability, and cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
