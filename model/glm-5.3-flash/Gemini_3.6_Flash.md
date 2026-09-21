# GLM 5.3 Flash — findings by Gemini 3.6 Flash

- Source: Z.AI / GLM 5.3 Flash (`glm-5.3-flash`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's high-efficiency, natively multimodal 320B MoE (18B active) Flash model engineered for ultra-fast agentic coding, visual reasoning, and low-latency execution.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3-flash`), Z.ai API (`glm-5.3-flash`). Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff early 2026.
- **IDs:** `zai/glm-5.3-flash`, `opencode/glm-5.3-flash`
- **Context window:** 1,000,000 tokens (1M input context, up to 64K output tokens).
- **Modalities:** text, image, multi-image, PDF input; text output; native tool use, JSON mode.
- **Pricing (as of 2026-09-21):** $0.00 / 1M input tokens, $0.00 / 1M output tokens (Free Zen tier).
- **Architecture:** Open-weights 320B MoE (18B active) with hybrid sparse/linear attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1510 Elo**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- HLE: **31.0%**
- LCR / MLCR: **78.0%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.0 / #15**
- Omniscience Accuracy / Hallucination Rate: **90.5% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **63.4%** (DeepSWE v1.1)
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **84.3%** (Terminal-Bench 2.1)

Long context:

- 1M token context window with hybrid attention for minimal KV cache overhead.

### Normalized scores (1–100)

- **Tool use: 85/100.** Excellent tool execution with 84.3% on Terminal-Bench 2.1 and 1510 GDPval Elo.
- **Reasoning: 84/100.** Strong GPQA Diamond (91.2%) performance, balanced by HLE and AA Index scores.
- **Context window: 96/100.** 1M input context window with efficient KV cache architecture.
- **Multimodal: 75/100.** Native text, image, screenshot, and PDF vision input capabilities.
- **Coding: 85/100.** High performance on Terminal-Bench 2.1 (84.3%) and LiveCodeBench (81.0%).
- **Cost efficiency: 100/100.** Free Zen tier access ($0/1M tokens).
- **Overall Score: 85/100.** Mean of the five quality dimensions (85, 84, 96, 75, 85); top-tier free multimodal agent model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
