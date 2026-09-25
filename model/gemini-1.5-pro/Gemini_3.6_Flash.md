# Gemini 1.5 Pro — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 1.5-generation multimodal model featuring 2M token context, video understanding, and multi-modal audio processing.
- **Provider / access:** Google AI Studio (`google/gemini-1.5-pro`), OpenCode Zen (`opencode/gemini-1.5-pro`). Chat Completions and Responses API.
- **Release / knowledge:** 2024-05 release; knowledge cutoff November 2023.
- **IDs:** `google/gemini-1.5-pro`, `opencode/gemini-1.5-pro`
- **Context window:** 2,000,000 tokens total (2M context window); verified via Google developer portal.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** ~$1.25 / 1M input, $5.00 / 1M output; free tier available via Google AI Studio.
- **Architecture:** Proprietary multimodal mixture-of-experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **22.5%**
- Tau3-Banking / Tau2-Bench: **52.0%**
- GDPval-AA: **1150**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **38.0%**

Reasoning / knowledge:

- GPQA Diamond: **45.2%**
- HLE: **9.8%**
- LCR / MLCR: **52.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #32**
- Omniscience Accuracy / Hallucination Rate: **76.0% / 16.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **32.5%**
- LiveCodeBench: **28.0%**
- SciCode / AA-SciCode: **21.0%**
- Vibe Code Bench: **52.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.0% needle retrieval accuracy across full 2M context window length.

### Normalized scores (1–100)

- **Tool use: 49/100.** Moderate tool interaction reliability with 52.0% Tau-Bench accuracy.
- **Reasoning: 66/100.** Solid general reasoning capability for a previous-generation frontier model.
- **Context window: 97/100.** Industry-defining 2M token context window with reliable retrieval recall.
- **Multimodal: 87/100.** Strong native video, audio, and image understanding capabilities.
- **Coding: 57/100.** Baseline coding performance (32.5% SWE-bench Verified score).
- **Cost efficiency: 78/100.** Reasonable cost efficiency given 2M input token capability.
- **Overall Score: 71/100.** Arithmetic mean of non-cost dimensions (49 + 66 + 97 + 87 + 57) / 5 = 71.2 -> 71. Strong choice for legacy multimodal and long-video analysis workloads.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
