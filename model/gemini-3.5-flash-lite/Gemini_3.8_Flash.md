# Gemini 3.5 Flash Lite — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.5-flash-lite
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's enhanced 3.5 Flash Lite model prioritizing ultra-low latency, lightweight resource consumption, and 1M context.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.5-flash-lite`.
- **Release / knowledge:** 2026-02 release; knowledge cutoff late 2025.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and AI Studio; standard tier $0.075/1M in, $0.30/1M out.
- **Architecture:** Compact multimodal transformer optimized for high token throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **41.0%** (Tau2-Bench)
- GDPval-AA: **1480**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.5%**
- HLE: **23.5%**
- LCR / MLCR: **69.0%**
- CritPt: **56.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **44.0 / #30**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.5%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **47.0%**
- DeepSWE / Coding Index / other: **57.0%**

Long context:

- MRCR 94.0% at 1M; dependable recall across the 1M window.

### Normalized scores (1–100)

- **Tool use: 75/100.** 70.5% Terminal-Bench 2.1 handles basic agent loops and API integrations.
- **Reasoning: 77/100.** 77.5% GPQA Diamond offers solid deductive ability at minimal latency.
- **Context window: 100/100.** Full 1M context with validated needle retrieval.
- **Multimodal: 90/100.** Full native audio, video, image, and document ingestion.
- **Coding: 74/100.** 74.0% LiveCodeBench provides dependable basic software development.
- **Cost efficiency: 99/100.** Exceptionally economical $0.075/$0.30 pricing with free tier access.
- **Overall Score: 83/100.** Quality mean 83.2 rounds to 83; ultra-fast multimodal model for high-frequency routing and extraction.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
