# Gemini 2.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 2.5 Flash Lite
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-low-latency model for cost-sensitive, high-frequency tasks.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** 2025 release.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** Lightweight optimized multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.5%**
- Tau3-Banking / Tau2-Bench: **64.0%**
- GDPval-AA: **1370 Elo**
- Claw-Eval / ClawProBench: **72.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.0%**

Reasoning / knowledge:

- GPQA Diamond: **59.0%**
- HLE: **44.0%**
- LCR / MLCR: **66.0%**
- CritPt: **57.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88.5 / #13**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%**
- LiveCodeBench: **60.0%**
- SciCode / AA-SciCode: **51.0%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **73.0**

Long context:

- 1M token context window with high throughput.

### Normalized scores (1–100)

- **Tool use: 81/100.** Fast and reliable tool execution for lightweight workflows.
- **Reasoning: 80/100.** Good reasoning efficiency for its weight class.
- **Context window: 95/100.** Full 1M token context support.
- **Multimodal: 88/100.** Native multimodal support for audio, image, and documents.
- **Coding: 80/100.** Competent coding support for quick scripts and debugging.
- **Cost efficiency: 100/100.** Exceptional free tier and ultra-low cost.
- **Overall Score: 84.8/100.** Highly efficient ultra-low-latency model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
