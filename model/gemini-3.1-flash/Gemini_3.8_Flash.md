# Gemini 3.1 Flash — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.1-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1 Flash model balancing execution latency, multimodal capability, and 1M context.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.1-flash`.
- **Release / knowledge:** 2025-11 release; knowledge cutoff late 2025.
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and AI Studio; standard tier $0.15/1M in, $0.60/1M out.
- **Architecture:** Proprietary multimodal transformer with sparse MoE execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **44.0%** (Tau2-Bench)
- GDPval-AA: **1510**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.5%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **27.0%**
- LCR / MLCR: **72.0%**
- CritPt: **60.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **47.5 / #24**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **77.5%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **51.0%**
- DeepSWE / Coding Index / other: **61.0%**

Long context:

- MRCR 95.0% at 1M; solid needle recall across the 1M token window.

### Normalized scores (1–100)

- **Tool use: 78/100.** 72.0% Terminal-Bench 2.1 provides steady tool calling and script execution.
- **Reasoning: 80/100.** 80.5% GPQA Diamond demonstrates dependable analytical responses.
- **Context window: 100/100.** Full 1M token context capacity with verified multi-needle recall.
- **Multimodal: 90/100.** Native ingestion across audio, video, document, and images.
- **Coding: 77/100.** 77.5% LiveCodeBench and 58.0% SWE-bench Verified deliver reliable code generation.
- **Cost efficiency: 98/100.** Low-cost $0.15/$0.60 pricing with accessible free tier.
- **Overall Score: 85/100.** Quality mean 85.0 equals 85; agile, cost-effective multimodal driver for high-volume pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
