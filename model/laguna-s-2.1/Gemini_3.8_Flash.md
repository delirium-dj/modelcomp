# Laguna S 2.1 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B open-weights Mixture-of-Experts foundation model (8B active) designed for autonomous software engineering, long-horizon terminal execution, and codebase Q&A across a 1M token context.
- **Provider / access:** Poolside API, [Hugging Face](https://huggingface.co/poolside/Laguna-S-2.1) (`poolside/Laguna-S-2.1`), [OpenRouter](https://openrouter.ai/models/poolside/laguna-s-2.1) (`poolside/laguna-s-2.1` and `:free`), Vercel AI Gateway.
- **Release / knowledge:** July 2026 (OpenMDW-1.1 license).
- **IDs:** `poolside/laguna-s-2.1`, `poolside/laguna-s-2.1:free`
- **Context window:** 1,048,576 tokens (1M context window; max output up to 131,072 tokens).
- **Modalities:** Text in / text out only. Interleaved thinking and native tool calling.
- **Pricing (as of 2026-10-21):** ~$0.09 / 1M input tokens, ~$0.18 / 1M output tokens ($0.009 / 1M cached input); promotional free tier on OpenRouter (`poolside/laguna-s-2.1:free`); OpenMDW-1.1 open weights.
- **Architecture:** 118B total / 8B active MoE (48 layers, 256 routed experts top-10 + 1 shared expert, sliding-window and global attention).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Poolside official, pool harness; third-party validated by Artificial Analysis)
- SWE Atlas (Codebase QnA): **46.2%**
- Toolathlon Verified: **49.7%**
- CrucibleMark ToolUse: **62.62**

Reasoning / knowledge:

- CrucibleMark Logical Reasoning: **67.93** (Total: **69.1**)
- Comprehensive public frontier benchmarks (GPQA / HLE) not published directly by vendor.

Coding:

- SWE-bench Multilingual: **78.5%**
- SWE-bench Pro (Public): **59.4%**
- DeepSWE: **40.4%** (third-party validated by Artificial Analysis)
- CrucibleMark Code Quality: **67.24**

Long context:

- 1,048,576 token context window; unverified on deep multi-needle retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 73/100.** Solid 70.2% on Terminal-Bench 2.1 and native tool calling support; mid-pack results on Toolathlon (49.7%).
- **Reasoning: 56/100.** Moderate logical deduction indicated by CrucibleMark (67.9); lack of verified frontier benchmark evaluations (GPQA/HLE) keeps the rating conservative.
- **Context window: 90/100.** 1M context window accommodates full repository ingest; unverified on high-density needle benchmarks.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 74/100.** 78.5% on SWE-bench Multilingual and 59.4% on SWE-bench Pro provide dependable software development assistance.
- **Cost efficiency: 98/100.** Exceptionally economical at ~$0.09 / $0.18 per 1M tokens with very cheap caching ($0.009) and a free-tier endpoint.
- **Overall Score: 62/100.** Arithmetic mean of non-cost metrics: (73 + 56 + 90 + 15 + 74) / 5 = 61.6 → 62. An affordable, open-weights coding agent model offering a 1M token context for long-horizon terminal tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Poolside technical announcements, Hugging Face model cards, OpenRouter endpoints, and Artificial Analysis data.
