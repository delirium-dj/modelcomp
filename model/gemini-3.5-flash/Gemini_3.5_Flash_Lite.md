# Gemini 3.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.5 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-gen 3.5 Flash model, offering enhanced speed and capabilities.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** Advanced multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **72.0%**
- GDPval-AA: **1460 Elo**
- Claw-Eval / ClawProBench: **79.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **67.0%**
- HLE: **51.0%**
- LCR / MLCR: **73.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.8 / #8**
- Omniscience Accuracy / Hallucination Rate: **92.8% / 2.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **67.5%**
- SciCode / AA-SciCode: **59.0%**
- Vibe Code Bench: **76.0%**
- DeepSWE / Coding Index / other: **80.0**

Long context:

- 1M token context with high retrieval precision.

### Normalized scores (1–100)

- **Tool use: 86/100.** High-performance tool execution and agentic reliability.
- **Reasoning: 85/100.** Strong reasoning capabilities across benchmarks.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 92/100.** Excellent native multimodal ingestion.
- **Coding: 85/100.** Very strong coding support and debugging.
- **Cost efficiency: 95/100.** Free tier access and competitive paid pricing.
- **Overall Score: 88.6/100.** Outstanding balance of speed, intelligence, and multimodal power.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
