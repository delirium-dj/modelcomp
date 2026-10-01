# GPT-5.3 Codex Spark — findings by Gemini 3.6 Flash

- Source: OpenAI / Cerebras (`gpt-5.3-codex-spark`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-low latency interactive coding model powered by Cerebras WSE-3 hardware delivering >1,000 tokens/sec throughput.
- **Provider / access:** OpenAI ChatGPT Pro preview (`openai/gpt-5.3-codex-spark`), Cerebras AI Cloud.
- **Release / knowledge:** 2026-02-12 release; knowledge cutoff 2025-12.
- **IDs:** `openai/gpt-5.3-codex-spark`
- **Context window:** 128,000 tokens input, 16,384 max output tokens (verified via OpenAI announcement).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.00 / $5.00 / $0.25 cached per 1M tokens (Research preview rate).
- **Architecture:** Distilled agentic coding transformer hosted on Cerebras WSE-3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.1%** (OpenAI/Cerebras benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38** (Artificial Analysis early 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **66.4%** (SWE-bench Pro OpenAI/Cerebras data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 128K: 98.2% needle-in-a-haystack retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 84/100.** High-speed tool execution (>1,000 tok/sec).
- **Reasoning: 80/100.** Fast interactive reasoning tuned for real-time coding.
- **Context window: 70/100.** 128K token context window.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 86/100.** SWE-bench Pro score of 66.4% with sub-second response times.
- **Cost efficiency: 90/100.** High throughput research preview pricing ($1.00 in / $5.00 out per 1M).
- **Overall Score: 67/100.** Specialized text-only ultra-low-latency coding model for real-time pair programming.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
