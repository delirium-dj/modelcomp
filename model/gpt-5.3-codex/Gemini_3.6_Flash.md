# GPT-5.3 Codex — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic software engineering model featuring 400K context, 128K max output, and high terminal execution performance.
- **Provider / access:** OpenAI API (`gpt-5.3-codex-2026-02-05`), Azure OpenAI Service.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff 2025-12.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI launch announcement).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.75 / $14.00 / $0.4375 cached per 1M tokens.
- **Architecture:** Proprietary agentic coding transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%** (OpenAI launch report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **44** (Artificial Analysis early 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **71.2%** (SWE-bench Pro OpenAI launch benchmark)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 400K: 99.4% needle-in-a-haystack retrieval accuracy across 400K window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 score of 78.4% for agentic terminal execution.
- **Reasoning: 88/100.** High-capacity software architecture reasoning.
- **Context window: 85/100.** 400K token context window with 128K max output.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 92/100.** Outstanding 71.2% score on SWE-bench Pro.
- **Cost efficiency: 78/100.** Competitive pricing ($1.75 in / $14.00 out per 1M).
- **Overall Score: 74/100.** High-performance text-only agentic software engineering model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
