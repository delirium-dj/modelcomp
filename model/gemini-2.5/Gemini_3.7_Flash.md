# Gemini 2.5 — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-2.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 family flagship model (served as `gemini-2.5-pro`) delivering deep analytical reasoning, native omni-modal audio/video comprehension, and 1M context processing.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-pro`), OpenCode Zen (`opencode/gemini-2.5`).
- **Release / knowledge:** 2025-09-15 release; knowledge cutoff July 2025.
- **IDs:** `google/gemini-2.5-pro`, `opencode/gemini-2.5` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M total, 64k max output).
- **Modalities:** text, image, audio, video in; text out (thinking mode enabled).
- **Pricing (as of 2026-10-09):** $1.25 / $10.00 per 1M tokens ($0.31 cached).
- **Architecture:** Transformer with multimodal Mixture-of-Experts and integrated native perception layers (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.2%**
- Tau3-Banking / Tau2-Bench: **68.5%**
- GDPval-AA: **1180**
- Claw-Eval / ClawProBench: **66.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.5%**

Reasoning / knowledge:

- GPQA Diamond: **61.5%**
- HLE: **21.0%**
- LCR / MLCR: **75.2%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91 / #32**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.5%**
- LiveCodeBench: **42.8%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **69.5%**
- DeepSWE / Coding Index / other: **63.5**

Long context:

- MRCR 1M needle retrieval 97.5%; RULER benchmark 93.2% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Competent function routing and schema obedience, capped by occasional recovery loops in multi-step terminal environments.
- **Reasoning: 74/100.** Solid mathematical reasoning and chain-of-thought analysis, predecessor to the faster Gemini 3 series.
- **Context window: 92/100.** 1M context window with strong needle retrieval fidelity across diverse documents.
- **Multimodal: 86/100.** Native text, image, audio, and video input ingestion with rich temporal scene understanding.
- **Coding: 70/100.** Dependable scripting, syntax troubleshooting, and unit testing, capped on multi-file architectural refactoring.
- **Cost efficiency: 65/100.** $1.25 / $10.00 per 1M tokens without a free Zen tier, reflecting legacy flagship pricing.
- **Overall Score: 78.0/100.** Balanced omni-modal foundation model with strong 1M context retrieval and steady reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
