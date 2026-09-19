# Gemini 3.8 Flash — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.8-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's 3.8 Flash model, delivering rapid multimodal processing, frontier-class tool orchestration, and 1M context efficiency.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.8-flash`. Supports REST, Chat Completions, and SDKs.
- **Release / knowledge:** 2026-06 release; knowledge cutoff early 2026.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens total (1M in / 64K max output; verified via Google API documentation).
- **Modalities:** Text, code, image, video, audio, and PDF in; text and tool calls out; JSON mode and structured schema support.
- **Pricing (as of 2026-09-19):** Free tier available on Zen / AI Studio; standard commercial tier $0.15/1M in, $0.60/1M out.
- **Architecture:** Proprietary multimodal transformer with sparse Mixture-of-Experts execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.2%** (Artificial Analysis / public evals)
- Tau3-Banking / Tau2-Bench: **58.5%** (Tau2-Bench public harness)
- GDPval-AA: **1680**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.4%**

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE: **39.8%**
- LCR / MLCR: **84.2%**
- CritPt: **72.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.5 / #8**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 6.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%**
- LiveCodeBench: **86.4%**
- SciCode / AA-SciCode: **54.2%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- MRCR 98.2% at 1M context; needle in a haystack retrieval exceeds 99% across the full 1M window.

### Normalized scores (1–100)

- **Tool use: 90/100.** 84.2% on Terminal-Bench 2.1 and 78.4% on MCP-Atlas show top-tier function-calling ability, capped slightly behind specialized agent champions.
- **Reasoning: 90/100.** Strong 89.5% GPQA Diamond and sub-7% hallucination rate deliver reliable multi-step deduction.
- **Context window: 100/100.** Native 1M token context with >98% needle-in-a-haystack accuracy earns full marks.
- **Multimodal: 92/100.** Full native audio, video, image, and document ingestion with rapid token throughput.
- **Coding: 89/100.** 68.5% SWE-bench Verified and 86.4% LiveCodeBench substantiate production-grade code editing.
- **Cost efficiency: 98/100.** Generous free tier alongside low $0.15/$0.60 standard API rates.
- **Overall Score: 92/100.** Quality mean 92.2 rounds to 92; exceptional high-speed multimodal driver for long-horizon agent pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
