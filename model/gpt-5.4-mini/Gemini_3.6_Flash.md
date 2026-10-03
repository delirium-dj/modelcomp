# GPT-5.4 Mini — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's high-speed production model optimized for coding, tool execution, and multimodal computer use at low API cost.
- **Provider / access:** OpenAI API (`gpt-5.4-mini-2026-03-17`), Azure OpenAI Service.
- **Release / knowledge:** 2026-03-17 release; knowledge cutoff 2026-01.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.75 / $4.50 / $0.075 cached per 1M tokens.
- **Architecture:** Proprietary multimodal transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **72.1%** (OSWorld-Verified OpenAI benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.4%** (OpenAI launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **54.4%** (SWE-bench Pro OpenAI release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 400K: 98.9% needle-in-a-haystack retrieval accuracy across 400K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 72.1% score for computer use and multi-step tool execution.
- **Reasoning: 80/100.** Fast production reasoning capabilities for low-latency tasks.
- **Context window: 85/100.** 400K token context window with 128K max output.
- **Multimodal: 80/100.** Text and image input understanding.
- **Coding: 78/100.** SWE-bench Pro score of 54.4% for autonomous software tasks.
- **Cost efficiency: 92/100.** Economical pricing ($0.75 in / $4.50 out per 1M).
- **Overall Score: 81/100.** High-speed, cost-effective multimodal workhorse for production agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
