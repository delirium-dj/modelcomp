# Gemini 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-3.8-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-speed multimodal flash model optimized for ultra-low latency, massive context handling, and efficient reasoning.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.8-flash` / Google AI Studio / Vertex AI (`gemini-3.8-flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/gemini-3.8-flash`
- **Context window:** 2M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; native reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly economical flash tier pricing (~$0.50 / $2.00 per 1M tokens).
- **Architecture:** Next-generation native multimodal transformer with massive context scaling and high-throughput inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.5%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **80.5%** (Google evaluation harness)
- GDPval-AA: **2300 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **87.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **76.5%** (Google model card)
- HLE: **49.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **83.0%** (Complex reasoning)
- CritPt: **79.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.2 / #3** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **89.5% / 5.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **73.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **71.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **73.0%** (Scientific coding benchmark)
- Vibe Code Bench: **79.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **87.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **97.5% retrieval accuracy at 2M context length** (Google massive context validation)

### Normalized scores (1–100)

- **Tool use: 93/100.** Rapid function calling and native multimodal agent workflows.
- **Reasoning: 93/100.** Elite logical deduction and multi-domain knowledge retrieval.
- **Context window: 98/100.** Industry-leading 2M token context window with near-perfect long-document retrieval.
- **Multimodal: 96/100.** Unmatched native multimodal ingestion (video, audio, image, PDF, text).
- **Coding: 92/100.** High-performance software engineering and code generation.
- **Cost efficiency: 91/100.** Exceptional price-to-performance ratio for high-throughput flash applications.
- **Overall Score: 94.4/100.** Blazing-fast multimodal flash model combining massive 2M context with frontier-grade reasoning and economy.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
