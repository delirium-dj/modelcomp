# Qwen3 Max — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen3-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning and tool use, with thinking mode.
- **Provider / access:** DashScope API (`alibaba/qwen3-max`), OpenCode Zen (`opencode/qwen3-max`).
- **Release / knowledge:** 2026-05 release; knowledge cutoff April 2026.
- **IDs:** `alibaba/qwen3-max`, `opencode/qwen3-max`
- **Context window:** 262,144 tokens total (65,536 max output); verified via DashScope API documentation.
- **Modalities:** text in, text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $1.20 / 1M input, $6.00 / 1M output (tiered for large contexts).
- **Architecture:** Proprietary frontier dense transformer with thinking mode adaptive output generation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%**
- Tau3-Banking / Tau2-Bench: **84.8%**
- GDPval-AA: **1360**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.8%**

Reasoning / knowledge:

- GPQA Diamond: **83.2%**
- HLE: **38.6%**
- LCR / MLCR: **86.8%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.4%**
- LiveCodeBench: **66.2%**
- SciCode / AA-SciCode: **56.8%**
- Vibe Code Bench: **86.5%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.7% needle retrieval accuracy across full 256K context window length.

### Normalized scores (1–100)

- **Tool use: 93/100.** Exceptional agentic tool manipulation backed by 84.8% Tau2-Bench and 52.4% Terminal-Bench 2.1.
- **Reasoning: 94/100.** Deep thinking reasoning capacity demonstrated by 83.2% GPQA Diamond and 38.6% HLE.
- **Context window: 86/100.** 256K context window with 64K output generation depth.
- **Multimodal: 15/100.** Text-only modality model; baseline score 15.
- **Coding: 93/100.** Top-tier coding proficiency with 68.4% SWE-bench Verified and 66.2% LiveCodeBench score.
- **Cost efficiency: 78/100.** Competitive flagship pricing at $1.20 / $6.00 per 1M tokens.
- **Overall Score: 76/100.** Arithmetic mean of non-cost dimensions (93 + 94 + 86 + 15 + 93) / 5 = 76.2 -> 76. Premier choice for text-focused complex reasoning, agentic coding, and multi-step tool workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
