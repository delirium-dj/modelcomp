# Gemini 3.1 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.1 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1 Flash model, balancing speed, capability, and cost.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing.
- **Architecture:** Optimized multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.5%**
- Tau3-Banking / Tau2-Bench: **70.5%**
- GDPval-AA: **1440 Elo**
- Claw-Eval / ClawProBench: **78.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **65.5%**
- HLE: **49.5%**
- LCR / MLCR: **71.5%**
- CritPt: **62.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.2 / #11**
- Omniscience Accuracy / Hallucination Rate: **92.2% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.5%**
- LiveCodeBench: **66.0%**
- SciCode / AA-SciCode: **57.0%**
- Vibe Code Bench: **74.5%**
- DeepSWE / Coding Index / other: **78.5**

Long context:

- 1M token context with high retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use and structured data extraction.
- **Reasoning: 84/100.** Excellent speed-to-reasoning ratio.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 91/100.** Broad multimodal input support (image, audio, PDF).
- **Coding: 83/100.** Solid coding and script generation capabilities.
- **Cost efficiency: 95/100.** Free tier access and low paid pricing.
- **Overall Score: 87.6/100.** Highly capable and balanced mid-tier model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
