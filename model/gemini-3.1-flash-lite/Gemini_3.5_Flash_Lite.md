# Gemini 3.1 Flash Lite — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.1 Flash Lite
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks and cost-sensitive API deployments.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.1-flash-lite`), Chat Completions & Responses API.
- **Release / knowledge:** 2025-11-10 release; knowledge cutoff October 2025.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.05 / 1M input tokens, $0.20 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Highly compressed transformer architecture optimized for edge and micro-batch inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.0%** (Google AI Studio public technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **66.5%** (Google model card, standard harness)
- GDPval-AA: **1210 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **71.2%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0%**

Reasoning / knowledge:

- GPQA Diamond: **50.2%** (Google technical report)
- HLE: **33.4%**
- LCR / MLCR: **65.5%**
- CritPt: **60.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / 35th**
- Omniscience Accuracy / Hallucination Rate: **86.1% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **36.5%** (verified public benchmark)
- LiveCodeBench: **41.2%**
- SciCode / AA-SciCode: **34.5%**
- Vibe Code Bench: **67.5%**
- DeepSWE / Coding Index / other: **58.0%**

Long context:

- RULER / GraphWalks value at 1M window length: **96.8% retrieval accuracy** across full 1M token context.

### Normalized scores (1–100)

- **Tool use: 72/100.** Capable of basic tool calling (68% toolathon / 71.2% Claw-Eval) with minimal overhead.
- **Reasoning: 66/100.** Suitable for lightweight reasoning tasks; limited by compressed architecture.
- **Context window: 92/100.** Full 1M token context window support with high retrieval fidelity (96.8%).
- **Multimodal: 93/100.** Strong multimodal ingestion (text, image, audio, PDF) for an entry-level lite model.
- **Coding: 64/100.** Adequate for boilerplate generation and simple script fixes.
- **Cost efficiency: 98/100.** Exceptional economy ($0.05/1M in, $0.20/1M out) for high-volume automated pipelines.
- **Overall Score: 81/100.** Outstanding ultra-low-cost utility model for large-scale data processing and lightweight tasks.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
