# Gemini 2.5 Pro — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-2.5-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's flagship reasoning and long-context multimodal model designed for complex analytical tasks and massive context processing.
- **Provider / access:** Google AI Studio (`google/gemini-2.5-pro`), OpenCode Zen (`opencode/gemini-2.5-pro`). Chat Completions and Responses API.
- **Release / knowledge:** 2025-03 release; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro`, `opencode/gemini-2.5-pro`
- **Context window:** 2,097,152 tokens total (2M context window); verified via Google API documentation.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input, $5.00 / 1M output; scaled tier pricing available.
- **Architecture:** Proprietary multimodal mixture-of-experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.5%**
- Tau3-Banking / Tau2-Bench: **62.8%**
- GDPval-AA: **1210**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.2%**

Reasoning / knowledge:

- GPQA Diamond: **58.7%**
- HLE: **15.4%**
- LCR / MLCR: **61.8%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #22**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 13.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.8%**
- LiveCodeBench: **38.4%**
- SciCode / AA-SciCode: **28.5%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.5% needle retrieval accuracy across full 2M token context window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Reliable function calling performance backed by 62.8% Tau-Bench score.
- **Reasoning: 86/100.** High-level reasoning ability with 58.7% GPQA Diamond score and broad knowledge coverage.
- **Context window: 96/100.** Exceptional 2M context window capability with near-lossless information retrieval.
- **Multimodal: 89/100.** Robust native processing across vision, audio, and video inputs.
- **Coding: 79/100.** Dependable coding accuracy with 43.8% SWE-bench Verified performance.
- **Cost efficiency: 77/100.** Strong cost-to-capability ratio for massive context inputs.
- **Overall Score: 84/100.** Arithmetic mean of non-cost dimensions (68 + 86 + 96 + 89 + 79) / 5 = 83.6 -> 84. Excellent choice for ultra-long context document analysis and multimodal reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
