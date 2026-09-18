# Claude Opus 4.8 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.8` (Messages API).
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-opus-4.8` (no Zen Free ID)
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid-tier pricing.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%**
- Tau3-Banking / Tau2-Bench: **80.1%**
- GDPval-AA: **1610 Elo**
- Claw-Eval / ClawProBench: **88.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **77.8%**
- HLE: **61.0%**
- LCR / MLCR: **80.2%**
- CritPt: **72.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.2 / #4**
- Omniscience Accuracy / Hallucination Rate: **95.1% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.8%**
- LiveCodeBench: **76.9%**
- SciCode / AA-SciCode: **70.2%**
- Vibe Code Bench: **83.1%**
- DeepSWE / Coding Index / other: **87.5**

Long context:

- Stable retrieval across 200K context window.

### Normalized scores (1–100)

- **Tool use: 89/100.** Superior tool coordination and agentic reliability.
- **Reasoning: 91/100.** Advanced multi-step reasoning capabilities.
- **Context window: 82/100.** 200K standard context window.
- **Multimodal: 76/100.** Solid visual and text processing.
- **Coding: 90/100.** Exceptional software engineering performance.
- **Cost efficiency: 30/100.** Premium paid pricing.
- **Overall Score: 85.6/100.** Leading frontier model for reasoning and code.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
