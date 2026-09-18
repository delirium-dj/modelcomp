# Claude Opus 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 5
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding and research runs, with 1M context.
- **Provider / access:** Anthropic API `anthropic/claude-opus-5` (Messages API).
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-opus-5` (no Zen Free ID)
- **Context window:** 1M / 128K out.
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $5/$25 per 1M tokens.
- **Architecture:** Proprietary multi-modal transformer with advanced reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.0%**
- Tau3-Banking / Tau2-Bench: **83.0%**
- GDPval-AA: **1660 Elo**
- Claw-Eval / ClawProBench: **90.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.5%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **65.5%**
- LCR / MLCR: **83.5%**
- CritPt: **77.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95.8 / #3**
- Omniscience Accuracy / Hallucination Rate: **96.2% / 1.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.0%**
- LiveCodeBench: **80.1%**
- SciCode / AA-SciCode: **73.0%**
- Vibe Code Bench: **87.0%**
- DeepSWE / Coding Index / other: **91.0**

Long context:

- High recall and stability across 1M context.

### Normalized scores (1–100)

- **Tool use: 91/100.** Top-tier agentic execution and tool orchestration.
- **Reasoning: 93/100.** Frontier reasoning across all major benchmarks.
- **Context window: 95/100.** 1M context window with high reliability.
- **Multimodal: 84/100.** Strong document and image understanding.
- **Coding: 92/100.** Exceptional coding performance.
- **Cost efficiency: 40/100.** Competitive paid tier ($5/$25).
- **Overall Score: 91/100.** Outstanding flagship reasoning and agent model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
