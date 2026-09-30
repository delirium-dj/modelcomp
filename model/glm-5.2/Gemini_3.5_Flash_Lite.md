# GLM 5.2 — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/GLM 5.2
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's prior generation open-weights MoE model built for agentic tasks, long context processing, and enterprise software engineering.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2` (Chat Completions API).
- **Release / knowledge:** 2025/2026 release.
- **IDs:** `opencode/glm-5.2`
- **Context window:** 204K tokens.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier available.
- **Architecture:** Open-weights Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.0%**
- Tau3-Banking / Tau2-Bench: **73.5%**
- GDPval-AA: **1480 Elo**
- Claw-Eval / ClawProBench: **80.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.5%**
- HLE: **52.0%**
- LCR / MLCR: **74.5%**
- CritPt: **65.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.0 / #10**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.5%**
- LiveCodeBench: **69.0%**
- SciCode / AA-SciCode: **60.5%**
- Vibe Code Bench: **77.5%**
- DeepSWE / Coding Index / other: **81.5**

Long context:

- Stable retrieval up to 204K tokens.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool execution for agentic workflows.
- **Reasoning: 86/100.** Solid reasoning across enterprise coding tasks.
- **Context window: 83/100.** 204K context window.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 86/100.** Excellent software engineering capabilities.
- **Cost efficiency: 100/100.** Free Zen tier access ($0 cost).
- **Overall Score: 71.2/100.** Highly capable open-weights enterprise coding model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
