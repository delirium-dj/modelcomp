# GPT-5.4 Nano — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's ultra-lightweight high-efficiency model designed for low-latency classification, data extraction, and sub-agent workflows.
- **Provider / access:** OpenAI API (`gpt-5.4-nano-2026-03-17`), Azure OpenAI Service.
- **Release / knowledge:** 2026-03-17 release; knowledge cutoff 2025-08.
- **IDs:** `openai/gpt-5.4-nano`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.20 / $1.25 / $0.02 cached per 1M tokens.
- **Architecture:** Proprietary lightweight multimodal transformer model.

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
- Artificial Analysis Intelligence Index / BenchLM overall: **30** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **49.5%** (DeepSWE Nano 5.4 benchmark)

Long context:

- RULER 400K: 98.1% needle-in-a-haystack retrieval accuracy across 400K window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and reliable sub-agent tool execution.
- **Reasoning: 70/100.** Low-latency reasoning tuned for high-volume tasks.
- **Context window: 85/100.** 400K token context window with 128K max output.
- **Multimodal: 80/100.** Text and vision input understanding.
- **Coding: 68/100.** DeepSWE score of 49.5% for sub-agent coding tasks.
- **Cost efficiency: 96/100.** Highly economical pricing ($0.20 in / $1.25 out per 1M).
- **Overall Score: 75/100.** Ultra-fast, low-cost compact model for high-volume sub-agent tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
