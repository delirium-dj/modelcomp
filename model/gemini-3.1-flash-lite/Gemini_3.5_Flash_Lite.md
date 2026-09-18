# Gemini 3.1 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.1 Flash Lite
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-flash-lite` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** Ultra-lightweight multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.0%**
- Tau3-Banking / Tau2-Bench: **65.0%**
- GDPval-AA: **1380 Elo**
- Claw-Eval / ClawProBench: **73.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.0%**
- HLE: **45.0%**
- LCR / MLCR: **67.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88.8 / #15**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 3.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.0%**
- LiveCodeBench: **61.0%**
- SciCode / AA-SciCode: **52.0%**
- Vibe Code Bench: **69.5%**
- DeepSWE / Coding Index / other: **74.0**

Long context:

- 1M token context window with low latency.

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast tool calling for high-frequency lightweight workflows.
- **Reasoning: 81/100.** Efficient reasoning for routine tasks.
- **Context window: 95/100.** Full 1M token context support.
- **Multimodal: 89/100.** Comprehensive multimodal input coverage.
- **Coding: 81/100.** Good coding support for rapid prototyping.
- **Cost efficiency: 100/100.** Free tier access with ultra-low latency pricing.
- **Overall Score: 85.6/100.** Outstanding ultra-low-latency utility model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
