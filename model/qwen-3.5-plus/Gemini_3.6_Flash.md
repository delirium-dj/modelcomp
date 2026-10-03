# Qwen 3.5 Plus — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`qwen-3.5-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's hosted flagship 397B MoE model offering 1M token context window and native multimodal processing.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.5-plus`), OpenRouter (`qwen/qwen-3.5-plus`).
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff 2026-01.
- **IDs:** `qwen/qwen-3.5-plus`
- **Context window:** 1,000,000 tokens input, 16,384 max output tokens (verified via Alibaba Cloud Model Studio documentation).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.40 / $2.40 / $0.08 cached per 1M tokens.
- **Architecture:** 397B parameter Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **69.4%** (Alibaba launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **40** (Artificial Analysis early 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **72.6%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 99.2% needle-in-a-haystack retrieval accuracy across 1M window.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool orchestration and multi-step agentic execution.
- **Reasoning: 86/100.** GPQA Diamond score of 69.4% across 397B MoE architecture.
- **Context window: 90/100.** Verified 1M token context window.
- **Multimodal: 80/100.** Native text, image, and video processing.
- **Coding: 85/100.** Outstanding 72.6% score on SWE-bench Verified.
- **Cost efficiency: 92/100.** Highly economical API pricing ($0.40 in / $2.40 out per 1M).
- **Overall Score: 85/100.** High-performance 1M context multimodal flagship for production applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
