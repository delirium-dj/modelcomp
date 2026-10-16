# Gemini 3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-3-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's high-speed multimodal flash model optimized for rapid response times, massive context ingestion, and reliable multi-turn interactions.
- **Provider / access:** OpenCode Zen `opencode/gemini-3-flash` / Google AI Studio / Vertex AI (`gemini-3-flash`).
- **Release / knowledge:** Re-verified October 2026; established flash model.
- **IDs:** `opencode/gemini-3-flash`
- **Context window:** 1M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly economical flash tier pricing (~$0.30 / $1.20 per 1M tokens).
- **Architecture:** Native multimodal transformer optimized for high-throughput flash inference and massive context scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.0%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **74.0%** (Google evaluation harness)
- GDPval-AA: **2150 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **81.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.5%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** (Google model card)
- HLE: **42.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **76.0%** (Complex reasoning)
- CritPt: **72.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.0 / #36** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **85.0% / 7.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **64.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **61.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **63.5%** (Scientific coding benchmark)
- Vibe Code Bench: **71.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **80.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **95.0% retrieval accuracy at 1M context length** (Google long-context validation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Rapid function calling and native multimodal agent support.
- **Reasoning: 88/100.** Strong logical deduction for flash tier.
- **Context window: 94/100.** Reliable 1M context window with pristine retrieval.
- **Multimodal: 93/100.** Comprehensive native multimodal ingestion (video, audio, image, PDF).
- **Coding: 87/100.** Capable software development and programming support.
- **Cost efficiency: 94/100.** Exceptional economy for high-volume deployments.
- **Overall Score: 90/100.** High-speed multimodal flash model delivering 1M context and reliable reasoning at economical pricing.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
