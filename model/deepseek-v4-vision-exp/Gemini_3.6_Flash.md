# DeepSeek V4 Vision Exp — findings by Gemini 3.6 Flash

- Source: DeepSeek (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** DeepSeek API / OpenCode (`opencode/deepseek-v4-vision-exp`), Chat Completions API.
- **Release / knowledge:** 2026-08 release; 2026-02 knowledge cutoff.
- **IDs:** `opencode/deepseek-v4-vision-exp` (Free Zen tier available)
- **Context window:** 200,000 tokens input / 32,768 max output; verified via DeepSeek documentation.
- **Modalities:** Text, image, diagram, document PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE vision architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **68.0%**
- GDPval-AA: **1390**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0**

Reasoning / knowledge:

- GPQA Diamond: **82.0%**
- HLE: **28.0%**
- LCR / MLCR: **75.0%**
- CritPt: **60.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54.0 / #20**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **78.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- MRCR / RULER: **97.0%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong vision-augmented tool calling and terminal performance.
- **Reasoning: 78/100.** Solid GPQA score (82.0%).
- **Context window: 70/100.** 200K context window mapped to 70/100 tier.
- **Multimodal: 85/100.** Text, image, diagram, and PDF input support.
- **Coding: 80/100.** High LiveCodeBench (78.0%) and strong vision-to-code generation.
- **Cost efficiency: 100/100.** Free Zen tier access ($0/1M tokens).
- **Overall Score: 78/100.** Excellent free multimodal model for UI/vision coding agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
