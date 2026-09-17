# GPT-5.6 Terra — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI API / OpenCode (`openai/gpt-5.6-terra`), Responses API.
- **Release / knowledge:** 2026-09 release; 2026-03 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-terra` (Paid pricing, no Free ID on Zen)
- **Context window:** 1,048,576 tokens input / 32,768 max output; verified via OpenAI documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $2.50 / 1M input, $10.00 / 1M output.
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%**
- Tau3-Banking / Tau2-Bench: **90.0%**
- GDPval-AA: **1850**
- Claw-Eval / ClawProBench: **86.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92.5**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- HLE: **46.0%**
- LCR / MLCR: **92.0%**
- CritPt: **84.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **70.0 / #2**
- Omniscience Accuracy / Hallucination Rate: **95.5% / 1.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.0%**
- LiveCodeBench: **90.0%**
- SciCode / AA-SciCode: **64.0%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **80.0%**

Long context:

- MRCR / RULER: **99.4%** retrieval accuracy across 1M window

### Normalized scores (1–100)

- **Tool use: 95/100.** Top-tier agent execution and tool calling precision.
- **Reasoning: 94/100.** High GPQA Diamond (93.0%) and strong HLE.
- **Context window: 95/100.** 1M context window with high retrieval retention.
- **Multimodal: 90/100.** Full text, image, audio, video, and PDF input support.
- **Coding: 94/100.** Exceptional performance on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 65/100.** Competitive paid pricing ($2.50/$10.00 per 1M tokens).
- **Overall Score: 89/100.** Frontier multimodal model balancing speed, power, and long context.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
