# Muse Spark 1.3 Contributor — findings by Gemini 3.8 Flash

- Source: Meta/muse-spark-1.3-contributor-free
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Meta's frontier model offering free contributor-tier access for coding and agentic workflows in exchange for training-data consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free`. Chat Completions and Responses API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Meta Research announcement).
- **Modalities:** Text, image, video, and PDF in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0); commercial tiers Contributor $0.10/$0.20, Standard $1.25/$4.25 per 1M.
- **Architecture:** Proprietary dense/MoE hybrid optimized for agentic efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM)
- Tau3-Banking / Tau2-Bench: **50.5%** (BenchLM / AA)
- GDPval-AA: **1754**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%**

Reasoning / knowledge:

- GPQA Diamond: **93.5%**
- HLE: **48.7%**
- LCR / MLCR: **83.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61.5 / #3**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%**
- LiveCodeBench: **88.0%**
- SciCode / AA-SciCode: **58.8%**
- Vibe Code Bench: **66.5%**
- DeepSWE / Coding Index / other: **75.4%**

Long context:

- MRCR 98.5% at 1M; needle retrieval over 98% across 1M tokens.

### Normalized scores (1–100)

- **Tool use: 94/100.** 88.8% on Terminal-Bench 2.1 and 1754 GDPval represent frontier multi-step environment execution.
- **Reasoning: 92/100.** 93.5% GPQA Diamond and 48.7% HLE substantiate top-tier reasoning capabilities.
- **Context window: 100/100.** 1M native context with proven MRCR 98.5% retrieval.
- **Multimodal: 85/100.** Native support for text, images, video, and PDF documents.
- **Coding: 94/100.** 75.4% SWE-bench Verified and 88.0% LiveCodeBench place it among the leading code generation models.
- **Cost efficiency: 100/100.** Full $0 access on Zen free tier (subject to training consent agreement).
- **Overall Score: 93/100.** Quality mean 93.0 equals 93; dominant zero-cost option for complex software engineering tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
