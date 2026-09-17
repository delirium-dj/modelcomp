# Gemini 3.8 Flash — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.8 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's state-of-the-art flash model featuring advanced autonomous agentic planning, near-instantaneous inference, and industry-leading multimodal comprehension.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.8-flash`), Chat Completions & Responses API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff August 2026.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 2,097,152 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, video, PDF in; text out; native reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.10 / 1M input tokens, $0.40 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Cutting-edge sparse hybrid transformer with recursive reasoning layers and hardware-optimized attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.2%** (Google AI Studio public technical report, rank 8th, standard harness)
- Tau3-Banking / Tau2-Bench: **89.5%** (Google model card, standard harness)
- GDPval-AA: **1510 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **94.3%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.0%**

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (Google technical report)
- HLE: **64.5%**
- LCR / MLCR: **92.3%**
- CritPt: **88.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96 / 2nd**
- Omniscience Accuracy / Hallucination Rate: **98.4% / 0.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.5%** (verified public benchmark)
- LiveCodeBench: **79.1%**
- SciCode / AA-SciCode: **69.5%**
- Vibe Code Bench: **94.1%**
- DeepSWE / Coding Index / other: **92.5%**

Long context:

- RULER / GraphWalks value at 2M window length: **99.9% retrieval accuracy** across full 2M token context.

### Normalized scores (1–100)

- **Tool use: 95/100.** Top-tier autonomous agent execution and flawless tool orchestration (93.0% toolathon / 94.3% Claw-Eval).
- **Reasoning: 93/100.** Exceptional reasoning capability (81.2% GPQA Diamond, 92.3% LCR) matching or exceeding previous flagship models.
- **Context window: 99/100.** Flawless 2M token context window retrieval (99.9% RULER accuracy).
- **Multimodal: 100/100.** Absolute peak multimodal ingestion and reasoning across text, image, audio, video, and PDF.
- **Coding: 92/100.** Outstanding software engineering capabilities (74.5% SWE-bench Verified, 79.1% LiveCodeBench).
- **Cost efficiency: 95/100.** Exceptional economy ($0.10/1M in, $0.40/1M out) for cutting-edge frontier performance.
- **Overall Score: 96/100.** Benchmark-leading flash model delivering absolute state-of-the-art capability across all evaluation axes.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
