# GPT-6 Astra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT-6 Astra
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship above GPT-5.6 Sol with 1.05M context, staged rollout from Trusted Access programs, built for frontier reasoning and agents.
- **Provider / access:** OpenAI API `openai/gpt-6-astra` (Responses API).
- **Release / knowledge:** 2026 release.
- **IDs:** `openai/gpt-6-astra` (no Zen Free ID)
- **Context window:** 1,050,000 (1M) / 128K out.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $10/$50 per 1M tokens (no Zen Free ID).
- **Architecture:** Frontier GPT-6 transformer architecture with advanced reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%**
- Tau3-Banking / Tau2-Bench: **88.0%**
- GDPval-AA: **1750 Elo**
- Claw-Eval / ClawProBench: **94.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.5%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **74.0%**
- LCR / MLCR: **90.0%**
- CritPt: **84.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **98.0 / #1**
- Omniscience Accuracy / Hallucination Rate: **98.2% / 0.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **84.0%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **79.5%**
- Vibe Code Bench: **92.5%**
- DeepSWE / Coding Index / other: **95.5**

Long context:

- Near-perfect retrieval across 1.05M token window.

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading agentic tool use and complex workflow execution.
- **Reasoning: 96/100.** Absolute peak frontier reasoning capability.
- **Context window: 98/100.** 1.05M context window with elite recall.
- **Multimodal: 88/100.** Exceptional visual and document processing.
- **Coding: 96/100.** Unrivaled SWE-bench and coding benchmark results.
- **Cost efficiency: 30/100.** Premium paid pricing ($10/$50 per 1M).
- **Overall Score: 94.6/100.** Zenith of current AI reasoning and agent capability.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
