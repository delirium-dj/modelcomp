# Qwen 3.6 Plus — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`qwen-3.6-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud's hybrid linear-attention MoE model featuring 1M context window, 65.5K output, and multi-turn Preserve Thinking trace retention.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.6-plus`), OpenRouter (`qwen/qwen-3.6-plus`).
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff 2026-03.
- **IDs:** `qwen/qwen-3.6-plus`
- **Context window:** 1,000,000 tokens input, 65,536 max output tokens (verified via Alibaba Cloud Model Studio documentation).
- **Modalities:** text, image, video in; text out; reasoning yes (Preserve Thinking trace retention); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.40 / $2.40 / $0.08 cached per 1M tokens.
- **Architecture:** Hybrid linear-attention Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (Alibaba launch benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **72.1%** (Alibaba launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **43** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.8%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 99.5% needle-in-a-haystack retrieval accuracy across 1M window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 score of 74.5% with Preserve Thinking support.
- **Reasoning: 88/100.** GPQA Diamond score of 72.1% across hybrid MoE architecture.
- **Context window: 90/100.** Verified 1M token context window with 65.5K output limit.
- **Multimodal: 80/100.** High quality text, image, and video input capabilities.
- **Coding: 88/100.** Outstanding 76.8% score on SWE-bench Verified.
- **Cost efficiency: 92/100.** Highly economical API pricing ($0.40 in / $2.40 out per 1M).
- **Overall Score: 87/100.** High-performance 1M context hybrid MoE flagship for agentic software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
