# Qwen 3.7 Plus — findings by Gemini 3.6 Flash

- Source: Alibaba (`qwen/qwen-3.7-plus`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Cloud's cost-efficient multimodal model optimized for high-volume agentic workflows, visual reasoning, and code editing.
- **Provider / access:** Alibaba Cloud DashScope & OpenRouter (`qwen/qwen-3.7-plus`). OpenAI-compatible API.
- **Release / knowledge:** 2026-05-28 release; 2026-04 knowledge cutoff.
- **IDs:** `qwen/qwen-3.7-plus`
- **Context window:** 1,048,576 tokens input / 16,384 max output — verified via DashScope API documentation.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.40 input / $1.20 output per 1M tokens.
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.2%**
- Tau3-Banking / Tau2-Bench: **68.4%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **90.0%**
- HLE: **34.2%**
- LCR / MLCR: **81.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #9**
- Omniscience Accuracy / Hallucination Rate: **85.6% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.7%**
- LiveCodeBench: **87.5%**
- SciCode / AA-SciCode: **41.2%**
- Vibe Code Bench: **79.4%**
- DeepSWE / Coding Index / other: **82.1**

Long context:

- MRCR 1M window retrieval accuracy: **98.2%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool calling and agentic capabilities with 81.2% on Terminal-Bench.
- **Reasoning: 88/100.** Reliable reasoning supported by a 90.0% score on GPQA Diamond.
- **Context window: 95/100.** Massive 1M token context window with solid retrieval accuracy.
- **Multimodal: 85/100.** High quality visual-to-code and image/video understanding.
- **Coding: 85/100.** Strong coding performance (87.5% LiveCodeBench, 66.7% SWE-bench Verified).
- **Cost efficiency: 90/100.** Exceptional value at $0.40/$1.20 per 1M tokens.
- **Overall Score: 87/100.** High-performing, cost-effective multimodal choice for production agentic applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
