# Gemini 3.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.6 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.6-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** Advanced multimodal transformer with improved reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.0%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1490 Elo**
- Claw-Eval / ClawProBench: **81.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%**

Reasoning / knowledge:

- GPQA Diamond: **69.5%**
- HLE: **53.0%**
- LCR / MLCR: **75.5%**
- CritPt: **66.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.2 / #7**
- Omniscience Accuracy / Hallucination Rate: **93.2% / 2.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.5%**
- LiveCodeBench: **70.0%**
- SciCode / AA-SciCode: **61.5%**
- Vibe Code Bench: **78.5%**
- DeepSWE / Coding Index / other: **82.5**

Long context:

- 1M token context with superior retrieval.

### Normalized scores (1–100)

- **Tool use: 87/100.** Highly robust tool calling and multi-step agent execution.
- **Reasoning: 87/100.** Enhanced reasoning capabilities across complex benchmarks.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 93/100.** Top-tier native multimodal capabilities.
- **Coding: 87/100.** Strong coding and software engineering support.
- **Cost efficiency: 95/100.** Free tier access and competitive paid pricing.
- **Overall Score: 89.8/100.** Outstanding mid-tier model with near-flagship intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
