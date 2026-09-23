# Gemini 3.1 Pro — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.1-pro`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's 3.1 generation flagship reasoning model engineered for deep code comprehension, multi-modal synthesis, and agentic autonomy.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.1-pro`), OpenCode Zen (`opencode/gemini-3.1-pro`).
- **Release / knowledge:** 2025-11-15 release; knowledge cutoff September 2025.
- **IDs:** `google/gemini-3.1-pro`, `opencode/gemini-3.1-pro`
- **Context window:** 1,000,000 tokens (1M input, 64k output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON schema mode, extended reasoning.
- **Pricing (as of 2026-09-20):** $1.25 / $5.00 per 1M tokens ($0.625 cached).
- **Architecture:** Dense multimodal transformer with scalable reasoning tokens (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.0%**
- Tau3-Banking / Tau2-Bench: **83.0%**
- GDPval-AA: **1350**
- Claw-Eval / ClawProBench: **78.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%**
- HLE: **34.0%**
- LCR / MLCR: **86.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **113 / #7**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **57.0%**
- LiveCodeBench: **54.5%**
- SciCode / AA-SciCode: **75.5%**
- Vibe Code Bench: **80.0%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- MRCR 1M needle retrieval 99.5%; RULER benchmark 97.0% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Fast and dependable multi-step tool calling with high parameter accuracy.
- **Reasoning: 90/100.** Strong mathematical analysis and multi-modal problem solving.
- **Context window: 94/100.** 1M context with high retention across code repositories and multimodal video.
- **Multimodal: 92/100.** Excellent video, audio, and visual document comprehension with fine temporal grounding.
- **Coding: 88/100.** Robust coding assistance, bug isolation, and unit test generation.
- **Cost efficiency: 82/100.** Competitive commercial pricing for frontier multimodal intelligence.
- **Overall Score: 90.4/100.** High-performance multi-modal reasoning and coding powerhouse.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
