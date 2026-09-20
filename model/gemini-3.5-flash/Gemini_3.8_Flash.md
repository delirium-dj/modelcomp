# Gemini 3.5 Flash — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.5-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's 3.5 Flash model balancing rapid multimodal reasoning, fast execution latency, and 1M context.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.5-flash`.
- **Release / knowledge:** 2026-01 release; knowledge cutoff late 2025.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and AI Studio; standard tier $0.15/1M in, $0.60/1M out.
- **Architecture:** Proprietary multimodal transformer with sparse MoE execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **52.0%** (Tau2-Bench)
- GDPval-AA: **1605**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.5%**

Reasoning / knowledge:

- GPQA Diamond: **85.5%**
- HLE: **33.0%**
- LCR / MLCR: **78.5%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54.0 / #14**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **63.5%**
- LiveCodeBench: **82.0%**
- SciCode / AA-SciCode: **49.5%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **66.5%**

Long context:

- MRCR 97.0% at 1M; robust multi-document recall.

### Normalized scores (1–100)

- **Tool use: 85/100.** 80.0% Terminal-Bench 2.1 and dependable function calling across agent workflows.
- **Reasoning: 86/100.** 85.5% GPQA Diamond ensures solid analytical capabilities.
- **Context window: 100/100.** Native 1M token context window with reliable retrieval.
- **Multimodal: 90/100.** Full native audio, video, image, and document ingestion.
- **Coding: 83/100.** 82.0% LiveCodeBench and 63.5% SWE-bench Verified support general coding tasks.
- **Cost efficiency: 98/100.** Free tier access with very affordable paid API pricing.
- **Overall Score: 89/100.** Quality mean 88.8 rounds to 89; efficient multimodal workhorse for cost-sensitive agent loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
