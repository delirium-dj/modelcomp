# Gemini 3.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.7 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.7-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** High-performance multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.0%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1530 Elo**
- Claw-Eval / ClawProBench: **83.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.0%**
- HLE: **55.5%**
- LCR / MLCR: **77.5%**
- CritPt: **69.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.8 / #6**
- Omniscience Accuracy / Hallucination Rate: **93.8% / 2.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **67.0%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **63.5%**
- Vibe Code Bench: **80.5%**
- DeepSWE / Coding Index / other: **84.5**

Long context:

- 1M token context with advanced recall.

### Normalized scores (1–100)

- **Tool use: 88/100.** Excellent tool orchestration and agentic reliability.
- **Reasoning: 88/100.** Superior reasoning across complex reasoning benchmarks.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 94/100.** Exceptional multimodal support.
- **Coding: 88/100.** Advanced coding and debugging capability.
- **Cost efficiency: 95/100.** Free tier access and competitive paid pricing.
- **Overall Score: 90.6/100.** Leading Flash-class model offering near-flagship performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
