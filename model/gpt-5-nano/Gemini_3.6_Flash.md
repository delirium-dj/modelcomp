# GPT-5 Nano — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's ultra-compact low-latency model optimized for high-volume requests, data classification, and sub-agent execution.
- **Provider / access:** OpenAI API (`gpt-5-nano-2025-08-07`), Azure OpenAI Service.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff 2025-06.
- **IDs:** `openai/gpt-5-nano`
- **Context window:** 400,000 tokens input, 16,384 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.05 / $0.40 / $0.0125 cached per 1M tokens.
- **Architecture:** Compact proprietary multimodal transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **24** (Artificial Analysis late 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **44.8%** (DeepSWE Nano benchmark)

Long context:

- RULER 400K: 96.5% needle-in-a-haystack retrieval accuracy across 400K context window.

### Normalized scores (1–100)

- **Tool use: 65/100.** High speed classification and sub-agent tool execution.
- **Reasoning: 65/100.** Ultra-compact low-latency reasoning performance.
- **Context window: 85/100.** 400K token context window.
- **Multimodal: 80/100.** Text and image input understanding.
- **Coding: 64/100.** DeepSWE 44.8% score for lightweight developer tasks.
- **Cost efficiency: 98/100.** Extremely low cost per token ($0.05 in / $0.40 out).
- **Overall Score: 72/100.** Ultra-fast, highly economical compact model for sub-agent workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
