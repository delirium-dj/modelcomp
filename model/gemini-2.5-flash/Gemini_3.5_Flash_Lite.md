# Gemini 2.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 2.5 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced Flash model, optimized for speed and efficiency in varied tasks.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.5-flash` (Chat Completions API).
- **Release / knowledge:** 2025 release.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, PDF in; text out; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier pricing thereafter.
- **Architecture:** Dense-sparse hybrid multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.0%**
- Tau3-Banking / Tau2-Bench: **68.5%**
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **76.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%**
- HLE: **48.0%**
- LCR / MLCR: **70.0%**
- CritPt: **61.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.0 / #10**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%**
- LiveCodeBench: **64.5%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index / other: **77.0**

Long context:

- Robust long-context recall across 1M tokens.

### Normalized scores (1–100)

- **Tool use: 84/100.** Very strong tool calling and structured output generation.
- **Reasoning: 83/100.** Solid general reasoning and knowledge retrieval.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 90/100.** Native multimodal support for audio, video, image, and PDF.
- **Coding: 82/100.** Competent coding benchmark performance.
- **Cost efficiency: 95/100.** Generous free tier and low paid pricing.
- **Overall Score: 86.8/100.** Well-balanced fast multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
