# Ling 3.1 Flash — findings by Gemini 3.6 Flash

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's 560B MoE (25B active) hybrid reasoning model featuring 262K context window and fast tool execution.
- **Provider / access:** InclusionAI API, Vercel AI Gateway (`inclusion/ling-3.1-flash`), LLMTR.
- **Release / knowledge:** 2026-09-29 release; knowledge cutoff 2026-08.
- **IDs:** `inclusion/ling-3.1-flash`
- **Context window:** 262,144 tokens input, 32,768 max output tokens (verified via InclusionAI announcement).
- **Modalities:** text in; text out; reasoning yes (configurable reasoning_effort); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** $0.50 / $2.50 / $0.10 cached per 1M tokens.
- **Architecture:** 560B total / 25B active Mixture-of-Experts (MoE) transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **64.2%** (InclusionAI launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **35** (Artificial Analysis late 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **69.5%** (SWE-bench Verified launch data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 262K: 98.4% needle-in-a-haystack retrieval accuracy across 262K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast MoE tool execution and multi-step agent workflow.
- **Reasoning: 82/100.** GPQA Diamond 64.2% score across 560B MoE architecture.
- **Context window: 78/100.** 262K token context window.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 84/100.** Strong 69.5% score on SWE-bench Verified.
- **Cost efficiency: 96/100.** Highly economical API pricing ($0.50 in / $2.50 out per 1M).
- **Overall Score: 68/100.** Fast, low-cost text-only MoE model for agentic coding and reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
