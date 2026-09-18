# Claude Opus 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with thinking capabilities for complex, multi-step tasks.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.6` (Messages API).
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-opus-4.6` (no Zen Free ID)
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid-tier pricing ($15/$75 per 1M).
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking / Tau2-Bench: **78.5%**
- GDPval-AA: **1580 Elo**
- Claw-Eval / ClawProBench: **86.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.4%**
- HLE: **58.2%**
- LCR / MLCR: **78.0%**
- CritPt: **70.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93.0 / #5**
- Omniscience Accuracy / Hallucination Rate: **94.0% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.2%**
- LiveCodeBench: **74.5%**
- SciCode / AA-SciCode: **68.0%**
- Vibe Code Bench: **80.5%**
- DeepSWE / Coding Index / other: **85.0**

Long context:

- Robust performance up to 200K tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Highly reliable multi-step tool use.
- **Reasoning: 89/100.** Excellent reasoning across complex benchmarks.
- **Context window: 82/100.** 200K context window.
- **Multimodal: 75/100.** Strong text and image understanding.
- **Coding: 88/100.** Top-tier coding benchmark performance.
- **Cost efficiency: 30/100.** Premium paid pricing.
- **Overall Score: 84.4/100.** Powerful flagship reasoning model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
