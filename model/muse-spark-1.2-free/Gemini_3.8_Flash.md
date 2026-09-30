# Muse Spark 1.2 Free — findings by Gemini 3.8 Flash

- Source: Meta/muse-spark-1.2-contributor-free
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's predecessor coding/agent model trained with Muse Code for autonomous terminal coding, MCP tool calling, and full repository generation.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free`. Chat Completions and Responses API.
- **Release / knowledge:** 2026-06 release; knowledge cutoff early 2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified from Meta documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0); commercial tiers Contributor $0.10/$0.20, Standard $1.25/$4.25 per 1M.
- **Architecture:** Proprietary transformer foundation model optimized for code execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM)
- Tau3-Banking / Tau2-Bench: **48.0%** (Tau3-Banking)
- GDPval-AA: **1631**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.3%**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- HLE: **45.5%**
- LCR / MLCR: **80.5%**
- CritPt: **71.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.2 / #11**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 6.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.2%**
- LiveCodeBench: **85.0%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **59.3%**

Long context:

- MRCR 97.5% at 1M; stable multi-needle retrieval across 1M context.

### Normalized scores (1–100)

- **Tool use: 90/100.** 82.9% Terminal-Bench 2.1 and standout 90.3% MCP-Atlas prove strong tool automation.
- **Reasoning: 88/100.** 90.4% GPQA Diamond delivers reliable logical deductions.
- **Context window: 100/100.** 1M native context with proven multi-needle retrieval.
- **Multimodal: 90/100.** Native handling of audio, video, vision, and documents.
- **Coding: 88/100.** 85.0% LiveCodeBench and 68.2% SWE-bench Verified support heavy coding sessions.
- **Cost efficiency: 100/100.** $0 on OpenCode Zen free contributor tier.
- **Overall Score: 91/100.** Quality mean 91.2 rounds to 91; dependable near-frontier free fallback when 1.3 is saturated.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
