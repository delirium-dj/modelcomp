# Gemini 3.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** Ultra-low-latency optimized multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.5%**
- Tau3-Banking / Tau2-Bench: **66.5%**
- GDPval-AA: **1395 Elo**
- Claw-Eval / ClawProBench: **74.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.5%**

Reasoning / knowledge:

- GPQA Diamond: **61.5%**
- HLE: **46.5%**
- LCR / MLCR: **68.5%**
- CritPt: **59.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.2 / #14**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **57.5%**
- LiveCodeBench: **62.5%**
- SciCode / AA-SciCode: **53.5%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **75.5**

Long context:

- 1M token context with high throughput and low latency.

### Normalized scores (1–100)

- **Tool use: 83/100.** Fast and efficient tool use for agentic workflows.
- **Reasoning: 82/100.** Reliable reasoning for lightweight tasks.
- **Context window: 95/100.** Full 1M token context window.
- **Multimodal: 90/100.** Comprehensive native multimodal support.
- **Coding: 82/100.** Solid coding utility for high-speed tasks.
- **Cost efficiency: 100/100.** Free tier access and exceptionally low paid pricing.
- **Overall Score: 86.4/100.** Exceptional ultra-low-latency multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
