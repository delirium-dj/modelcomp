# Gemini 2.5 — findings by Gemini 3.6 Flash

- Source: Google/gemini-2.5 (`google/gemini-2.5-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's flagship multimodal model (gemini-2.5-pro) featuring deep reasoning, native audio/video/image vision, and 1M context window.
- **Provider / access:** Google AI Studio (`google/gemini-2.5-pro`), OpenRouter (`google/gemini-2.5-pro`). Responses API and Chat Completions.
- **Release / knowledge:** 2025-03-20 release; knowledge cutoff late 2024 / early 2025.
- **IDs:** `google/gemini-2.5-pro` (no Free ID on Zen)
- **Context window:** 1,048,576 (1M tokens) input; 8,192 max output — verified via Google API documentation.
- **Modalities:** Text, image, audio, video in; text out; reasoning thinking process; tool calls; JSON mode.
- **Pricing (as of 2026-10-05):** $1.25 / 1M input, $10.00 / 1M output (paid tier, no free tier).
- **Architecture:** Proprietary dense-MoE hybrid.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **71.2%** (Google Technical Report 2025)
- Terminal-Bench 2.1: **42.8%**
- Tau3-Banking / Tau2-Bench: **71.2%** (Google Technical Report)
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.4%**

Reasoning / knowledge:

- GPQA Diamond: **69.8%** (Google AI Blog)
- HLE: **18.4%**
- LCR / MLCR: **78.2%**
- CritPt: **64.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.4 / #12**
- Omniscience Accuracy / Hallucination Rate: **84.2% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.2%**
- LiveCodeBench: **54.8%**
- SciCode / AA-SciCode: **48.1%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- RULER / MRCR: **98.2%** needle-in-a-haystack recall across 1M context window.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong function calling and multi-step tool execution; capped by complex terminal environment benchmarks.
- **Reasoning: 78/100.** Solid GPQA Diamond score (69.8%) and 1M context reasoning capability; capped by competition-grade math/HLE limits.
- **Context window: 88/100.** 1M token context tier mapping with high needle-in-a-haystack recall.
- **Multimodal: 82/100.** Excellent native audio, video, PDF, and vision understanding; text output only.
- **Coding: 72/100.** Good LiveCodeBench (54.8%) and SWE-bench Verified (49.2%) performance; capped by specialized coding models.
- **Cost efficiency: 65/100.** Paid tier at $1.25/$10.00 per 1M tokens.
- **Overall Score: 79/100.** Solid flagship multimodal model for long-context analysis and general reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
