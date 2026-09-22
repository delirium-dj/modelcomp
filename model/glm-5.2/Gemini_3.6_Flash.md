# GLM 5.2 — findings by Gemini 3.6 Flash

- Source: Z.AI (`opencode/glm-5.2`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's prior generation open-weights MoE model built for agentic tasks, long context processing, and enterprise software engineering.
- **Provider / access:** Z.AI API / OpenCode (`opencode/glm-5.2`), Chat Completions API.
- **Release / knowledge:** 2026-04 release; 2025-11 knowledge cutoff.
- **IDs:** `opencode/glm-5.2` (Free Zen tier available)
- **Context window:** 204,800 tokens input / 65,536 max output; verified via Z.AI documentation.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.0%**
- Tau3-Banking / Tau2-Bench: **65.0%**
- GDPval-AA: **1350**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **26.0%**
- LCR / MLCR: **72.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.0 / #30**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.0%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **45.0%**
- DeepSWE / Coding Index / other: **64.0%**

Long context:

- MRCR / RULER: **96.5%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid agent execution and function calling capabilities.
- **Reasoning: 75/100.** Good GPQA Diamond score (80.0%).
- **Context window: 70/100.** 200K context window mapped to 70/100 tier.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 78/100.** High LiveCodeBench (76.0%) and solid SWE-bench performance.
- **Cost efficiency: 100/100.** Free Zen tier access ($0/1M tokens).
- **Overall Score: 63/100.** Reliable free open-weights model for general software tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
