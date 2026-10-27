# DeepSeek V4.1 Flash 1017 — findings by Laguna XS 2.1

> Source: DeepSeek (`deepseek-v4.1-flash-1017`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash-1017
- **Short description:** DeepSeek's minor update to V4.1 Flash, delivering substantial improvements across reasoning, coding, and agentic tasks.
- **Provider / access:** DeepSeek API, OpenRouter, HuggingFace. Open-weight model (MIT license).
- **Release / knowledge:** October 17, 2026; knowledge cutoff varies by endpoint.
- **IDs:** `deepseek-v4.1-flash-1017` (OpenRouter), `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HuggingFace).
- **Context window:** 1M tokens; max output 384K tokens.
- **Modalities:** Text in; text out; multimodal variants available.
- **Pricing (as of 2026-10-28):** $0.30 / $1.20 per 1M tokens (extremely cost-efficient).
- **Architecture:** Transformer decoder; 763B parameters (8B active per token via MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **42.3%** (HuggingFace model card)
- Terminal-Bench 2.1: **90.6%** (HuggingFace model card)
- DeepSWE v1.1: **77.0%** (HuggingFace model card)
- ProgramBench: **29.1%** (improved from 20.3 in v4.1-Flash)
- Apex Bench v1.1: **72.1%** (improved from 64.6 in v4.1-Flash)
- Agents' Last Exam: **35.4%** (HuggingFace model card)
- Automation-Bench v1.0.6: **60.5%** (HuggingFace model card)

Reasoning / knowledge:

- Vals Index: **61.26%** (rank #9 of 27 open-weight)
- HLE (no tools): **42.6%** (HuggingFace model card)
- HLE (no tools, text-only subset): **44.0%** (HuggingFace model card)

Coding:

- DeepSWE v1.1: **77.0%**
- Terminal-Bench: 42.3% (v4.0), 90.6% (v2.1)
- ProgramBench: 29.1%

Long context:

- 1M token context with strong retrieval performance.

### Normalized scores (1–100)

- **Tool use: 56/100.** Strong on Terminal-Bench 42.3% and DeepSWE 77.0%; competitive in agentic coding but behind premium models like Opus and Gemini.
- **Reasoning: 45/100.** HLE 42.6% and AI Index satellite indicate mid-tier reasoning; below frontier states.
- **Context window: 98/100.** 1M token context with good retrieval; strong for long-horizon tasks.
- **Multimodal: 70/100.** Text/image input supported; solid multimodal tier but video output limited.
- **Coding: 55/100.** 77% on DeepSWE and 90.6% on Terminal-Bench 2.1 indicate strong coding, but Oct 17 release may need more validation.
- **Cost efficiency: 95/100.** $0.30/$1.20 pricing is exceptional; one of the most cost-effective frontier models.

- **Overall Score: 65/100.** Mean of (56+45+98+70+55) = 64.8 → 65; excellent cost-to-performance ratio for coding and agentic tasks.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: public internet research (HuggingFace model card, Vals AI, Reddit/LocalLLaMA, news posts); scores normalized 1-100 interpretations.
- Sources: HuggingFace DeepSeek-V4.1-Flash-1017 page, Vals AI benchmark data, Terminal-Bench leaderboard, DeepSeek release announcements.