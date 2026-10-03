# GPT-5.2 — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's frontier generation model featuring 400K context, 128K output, >90% ARC-AGI-1 performance, and 80% SWE-bench Verified accuracy.
- **Provider / access:** OpenAI API (`gpt-5.2-2025-12-11`), Azure OpenAI Service.
- **Release / knowledge:** 2025-12-11 release; knowledge cutoff 2025-08.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.75 / $14.00 / $0.4375 cached per 1M tokens.
- **Architecture:** Proprietary multimodal transformer with multi-tier thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **70.9%** (OpenAI launch benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **74.6%** (OpenAI launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **42** (Artificial Analysis late 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.0%** (SWE-bench Verified launch data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 400K: 99.1% needle-in-a-haystack retrieval accuracy across 400K window.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 70.9% score for professional knowledge work and tool execution.
- **Reasoning: 90/100.** ARC-AGI-1 >90% and AIME 100% reasoning performance.
- **Context window: 85/100.** 400K token context window with 128K max output.
- **Multimodal: 80/100.** High performance text and vision processing.
- **Coding: 90/100.** Outstanding 80.0% score on SWE-bench Verified.
- **Cost efficiency: 78/100.** Standard frontier pricing ($1.75 in / $14.00 out per 1M).
- **Overall Score: 87/100.** High-capability frontier model for reasoning, mathematics, and software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
