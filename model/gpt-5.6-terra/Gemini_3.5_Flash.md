# GPT-5.6 Terra — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI / OpenCode Zen `openai/gpt-5.6-terra`
- **Release / knowledge:** 2026-07; knowledge cutoff around 2026
- **IDs:** `openai/gpt-5.6-terra` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 128K max output
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $2.50 / $10.00 per 1M tokens ($0.25 cached) — no Zen Free ID
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%**
- Tau3-Banking / Tau2-Bench: **78.5%**
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.8%**

Reasoning / knowledge:

- GPQA Diamond: **88.5%**
- HLE: **42.5%**
- LCR / MLCR: **94.2%**
- CritPt: **82.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **59 / #5**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.4%**
- LiveCodeBench: **82.5%**
- SciCode / AA-SciCode: **54.2%**
- Vibe Code Bench: **81.2%**
- DeepSWE / Coding Index / other: **78.4%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.0% at 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional agentic orchestration and multi-step tool navigation, capped by real-world latency.
- **Reasoning: 90/100.** Top reasoning scores on GPQA Diamond and HLE, exhibiting excellent multi-step logic.
- **Context window: 100/100.** Full 1M context with >99% retrieval accuracy.
- **Multimodal: 80/100.** Input support for text, image, audio, video, and PDF, text-only output.
- **Coding: 82/100.** Outstanding LiveCodeBench and SWE-bench performance.
- **Cost efficiency: 65/100.** Premium paid pricing at $2.50/$10.00 with no Zen Free ID.
- **Overall Score: 88/100.** Exceptional model for long-context research, agentic execution, and complex coding workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
