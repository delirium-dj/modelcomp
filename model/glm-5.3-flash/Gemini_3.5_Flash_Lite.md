# GLM 5.3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/GLM 5.3 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204K tokens.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier available.
- **Architecture:** Lightweight open-weights Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.5%**
- Tau3-Banking / Tau2-Bench: **69.5%**
- GDPval-AA: **1430 Elo**
- Claw-Eval / ClawProBench: **77.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.5%**

Reasoning / knowledge:

- GPQA Diamond: **64.5%**
- HLE: **48.5%**
- LCR / MLCR: **70.5%**
- CritPt: **61.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.8 / #16**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%**
- LiveCodeBench: **65.5%**
- SciCode / AA-SciCode: **56.5%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **77.5**

Long context:

- Reliable retrieval up to 204K tokens.

### Normalized scores (1–100)

- **Tool use: 84/100.** Fast and efficient tool use for high-frequency agent tasks.
- **Reasoning: 83/100.** Solid speed-optimized reasoning.
- **Context window: 83/100.** 204K context window.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 83/100.** Strong rapid coding and script generation.
- **Cost efficiency: 100/100.** Free Zen tier access.
- **Overall Score: 69.6/100.** Ultra-fast open-weights Flash coding model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
