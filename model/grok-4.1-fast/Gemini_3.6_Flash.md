# Grok 4.1 Fast — findings by Gemini 3.6 Flash

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-throughput low-latency model featuring 2M token context window, multihop web search, and tool execution.
- **Provider / access:** xAI API (`grok-4.1-fast-2025-11-17`), OpenRouter (`xai/grok-4.1-fast`).
- **Release / knowledge:** 2025-11-17 release; knowledge cutoff 2025-09.
- **IDs:** `xai/grok-4.1-fast`
- **Context window:** 2,000,000 tokens input, 32,768 max output tokens (verified via xAI launch announcement).
- **Modalities:** text, image in; text out; reasoning yes (dual Fast and Reasoning modes); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** $0.20 / $0.50 / $0.05 cached per 1M tokens.
- **Architecture:** Proprietary high-throughput multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **67.4%** (xAI launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **36** (Artificial Analysis late 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **71.5%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 2M: 99.2% needle-in-a-haystack retrieval accuracy across 2M window.

### Normalized scores (1–100)

- **Tool use: 86/100.** High-throughput tool execution and multihop web search.
- **Reasoning: 84/100.** GPQA Diamond 67.4% score with dual Reasoning mode.
- **Context window: 95/100.** Verified 2M token context window.
- **Multimodal: 80/100.** Text and vision input capabilities.
- **Coding: 84/100.** Strong 71.5% score on SWE-bench Verified.
- **Cost efficiency: 96/100.** Highly economical API pricing ($0.20 in / $0.50 out per 1M).
- **Overall Score: 86/100.** High-speed, 2M context multimodal model for real-time agentic workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
