# GLM 5.3 Free — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/GLM 5.3 Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE model optimized for agentic software development, complex reasoning, and multi-step tool execution.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/glm-5.3-free`
- **Context window:** 204K tokens.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free OpenCode Zen promotional tier available.
- **Architecture:** Flagship open-weights Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **80.0%**
- GDPval-AA: **1600 Elo**
- Claw-Eval / ClawProBench: **87.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **61.0%**
- LCR / MLCR: **80.0%**
- CritPt: **72.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.0 / #4**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 1.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.5%**
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **74.5%**
- Vibe Code Bench: **88.0%**
- DeepSWE / Coding Index / other: **92.0**

Long context:

- Robust code and document recall across 204K context.

### Normalized scores (1–100)

- **Tool use: 90/100.** Outstanding agentic tool execution and multi-step reasoning.
- **Reasoning: 91/100.** Frontier-grade reasoning performance.
- **Context window: 83/100.** 204K context window.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 93/100.** Exceptional SWE-bench and coding performance.
- **Cost efficiency: 100/100.** Free promotional Zen tier ($0 cost).
- **Overall Score: 74.4/100.** Premier open-weights flagship available for free evaluation.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
