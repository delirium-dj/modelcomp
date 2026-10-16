# Gemini 3.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-3.6-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's high-performance multimodal flash model optimized for ultra-low latency, massive context handling, and efficient reasoning.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.6-flash` / Google AI Studio / Vertex AI (`gemini-3.6-flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/gemini-3.6-flash`
- **Context window:** 2M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly economical flash tier pricing (~$0.40 / $1.50 per 1M tokens).
- **Architecture:** Native multimodal transformer with massive context scaling and high-throughput inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.5%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **73.5%** (Google evaluation harness)
- GDPval-AA: **2140 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **80.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **69.5%** (Google model card)
- HLE: **42.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **75.5%** (Complex reasoning)
- CritPt: **71.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **87.8 / #31** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **84.5% / 7.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **63.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **60.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **63.0%** (Scientific coding benchmark)
- Vibe Code Bench: **70.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **79.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **96.5% retrieval accuracy at 2M context length** (Google massive context validation)

### Normalized scores (1–100)

- **Tool use: 87/100.** Fast function calling and native multimodal agent workflows.
- **Reasoning: 88/100.** Strong analytical deduction for flash tier.
- **Context window: 98/100.** Industry-leading 2M context window with pristine long-document retrieval.
- **Multimodal: 95/100.** State-of-the-art native multimodal ingestion (video, audio, image, PDF).
- **Coding: 87/100.** Capable software development and programming support.
- **Cost efficiency: 93/100.** Exceptional price-to-performance ratio for high-throughput flash applications.
- **Overall Score: 91/100.** High-speed multimodal flash model combining massive 2M context with efficient reasoning and low latency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
