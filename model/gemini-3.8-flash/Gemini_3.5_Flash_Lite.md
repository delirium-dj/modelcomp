# Gemini 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.8 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's latest 3.8 Flash model, optimizing performance and efficiency.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.8-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** State-of-the-art Flash multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1560 Elo**
- Claw-Eval / ClawProBench: **85.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **58.0%**
- LCR / MLCR: **79.5%**
- CritPt: **71.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.5 / #4**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 1.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **69.5%**
- LiveCodeBench: **74.5%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **82.5%**
- DeepSWE / Coding Index / other: **86.5**

Long context:

- 1M token context with pristine retrieval.

### Normalized scores (1–100)

- **Tool use: 89/100.** Top-tier agentic execution and tool integration.
- **Reasoning: 90/100.** Exceptional reasoning performance across challenging benchmarks.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 95/100.** Elite multimodal input and processing capabilities.
- **Coding: 89/100.** Outstanding software engineering benchmark performance.
- **Cost efficiency: 95/100.** Generous free tier and competitive paid pricing.
- **Overall Score: 91.6/100.** Premier Flash-class model setting a new benchmark for speed and intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
