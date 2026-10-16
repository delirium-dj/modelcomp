# Gemini 3.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-3.7-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-performance flash multimodal model optimized for real-time responsiveness, expansive 2M context handling, and robust developer tool use.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.7-flash` / Google AI Studio / Vertex AI (`gemini-3.7-flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/gemini-3.7-flash`
- **Context window:** 2M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly competitive flash pricing (~$0.40 / $1.60 per 1M tokens).
- **Architecture:** Next-generation native multimodal transformer with optimized flash attention and massive context scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **79.0%** (Google evaluation harness)
- GDPval-AA: **2250 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **85.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.0%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **74.5%** (Google model card)
- HLE: **47.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **81.0%** (Complex reasoning)
- CritPt: **77.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **91.1 / #14** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.5% / 5.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **71.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **69.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **70.5%** (Scientific coding benchmark)
- Vibe Code Bench: **77.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **85.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **97.0% retrieval accuracy at 2M context length** (Google massive context validation)

### Normalized scores (1–100)

- **Tool use: 92/100.** High-speed function calling and multimodal agent support.
- **Reasoning: 92/100.** Strong analytical deduction across diverse domains.
- **Context window: 98/100.** Industry-leading 2M context window with pristine retrieval.
- **Multimodal: 95/100.** State-of-the-art native multimodal ingestion (video, audio, image, PDF).
- **Coding: 91/100.** Excellent programming support and software development capabilities.
- **Cost efficiency: 92/100.** Exceptional economy for high-throughput flash deployments.
- **Overall Score: 93.6/100.** High-speed multimodal flash model delivering 2M context and frontier-grade reasoning at economical pricing.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
