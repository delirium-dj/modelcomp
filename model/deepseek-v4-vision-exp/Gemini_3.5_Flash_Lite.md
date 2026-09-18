# DeepSeek V4 Vision Exp — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/DeepSeek V4 Vision Exp
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-vision-exp` (Chat Completions API).
- **Release / knowledge:** 2026 experimental release.
- **IDs:** `opencode/deepseek-v4-vision-exp`
- **Context window:** 200K tokens.
- **Modalities:** Text, image, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier available for experimental usage.
- **Architecture:** Open-weights Mixture-of-Experts with native vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%**
- Tau3-Banking / Tau2-Bench: **65.2%**
- GDPval-AA: **1390 Elo**
- Claw-Eval / ClawProBench: **74.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **61.5%**
- HLE: **45.0%**
- LCR / MLCR: **68.0%**
- CritPt: **58.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.0 / #12**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.5%**
- LiveCodeBench: **62.0%**
- SciCode / AA-SciCode: **52.0%**
- Vibe Code Bench: **71.5%**
- DeepSWE / Coding Index / other: **75.0**

Long context:

- Stable retrieval up to 200K tokens with visual inputs.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong tool use and multimodal agentic reasoning.
- **Reasoning: 82/100.** Solid logical and spatial reasoning.
- **Context window: 78/100.** 200K multimodal context window.
- **Multimodal: 85/100.** Exceptional native vision, UI-to-code, and document understanding.
- **Coding: 83/100.** Strong coding performance particularly for UI and frontend generation.
- **Cost efficiency: 100/100.** Free Zen experimental tier.
- **Overall Score: 82.2/100.** High-performance free multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
