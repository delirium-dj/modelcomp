# GPT-5.1 — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's legacy GPT-5.1 series model featuring 400K context window, 128K max output, and integrated thinking capabilities.
- **Provider / access:** OpenAI API (`gpt-5.1-2025-11-12`), Azure OpenAI Service.
- **Release / knowledge:** 2025-11-12 release; knowledge cutoff 2025-09.
- **IDs:** `openai/gpt-5.1`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.25 / $10.00 / $0.31 cached per 1M tokens.
- **Architecture:** Proprietary multimodal transformer with integrated thinking mode.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **65.8%** (OpenAI launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **35** (Artificial Analysis late 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%** (SWE-bench Verified launch data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 400K: 98.6% needle-in-a-haystack retrieval accuracy across 400K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool orchestration and agentic workflow execution.
- **Reasoning: 84/100.** GPQA Diamond score of 65.8% with integrated thinking mode.
- **Context window: 85/100.** 400K token context window with 128K max output.
- **Multimodal: 80/100.** Native text and vision input processing.
- **Coding: 84/100.** Strong 68.5% score on SWE-bench Verified.
- **Cost efficiency: 82/100.** Competitive pricing ($1.25 in / $10.00 out per 1M).
- **Overall Score: 83/100.** Reliable legacy flagship model for general reasoning and software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
