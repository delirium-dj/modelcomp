# GLM 5.3 Flash — findings by Gemini 3.8 Flash

- Source: Z.AI/glm-5.3-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash`. Chat Completions API.
- **Release / knowledge:** 2026-05 release; knowledge cutoff early 2026.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204,800 tokens total (204K in / 32K out; verified via Zen documentation).
- **Modalities:** Text in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0).
- **Architecture:** Compact MoE architecture optimized for low-latency inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **45.0%** (Tau2-Bench)
- GDPval-AA: **1550**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **26.0%**
- LCR / MLCR: **72.0%**
- CritPt: **61.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48.0 / #23**
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **82.0%**
- SciCode / AA-SciCode: **50.0%**
- Vibe Code Bench: **57.0%**
- DeepSWE / Coding Index / other: **66.0%**

Long context:

- MRCR 94.0% at 200K; solid needle retrieval within 204K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** 74.0% Terminal-Bench 2.1 confirms agile function invocation.
- **Reasoning: 80/100.** 80.0% GPQA Diamond delivers reliable problem solving.
- **Context window: 70/100.** 204K context window receives standard 70/100 per tiered scale.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 84/100.** 82.0% LiveCodeBench and 65.0% SWE-bench Verified deliver rapid code development.
- **Cost efficiency: 100/100.** Free on OpenCode Zen tier ($0).
- **Overall Score: 66/100.** Quality mean 66.2 rounds to 66; highly efficient zero-cost driver for text-based agent loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
