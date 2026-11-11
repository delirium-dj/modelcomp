# Qoduck — findings by Gemini 3.5 Flash Lite

- Source: Qoder International / Qoduck
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoduck
- **Short description:** Specialized stealth reasoning and coding model from Qoder International offering advanced coding assistance and long-context analysis.
- **Provider / access:** Qoder (`docs.qoder.com`).
- **Release / knowledge:** Released Q4 2026; knowledge cutoff current.
- **IDs:** `qoder/qoduck`
- **Context window:** 1,000,000 tokens input / 8,192 tokens output.
- **Modalities:** Text in; text out; advanced tool calling and JSON mode.
- **Pricing (as of 2026-11-11):** Daily free tier / promotional access during preview.
- **Architecture:** Proprietary reasoning architecture optimized for software development workloads.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **75.2%**
- SWE-Atlas Codebase QnA: **88.4%**

Reasoning / knowledge:
- GPQA Diamond: **45.6%**
- HLE: **35.2%**

Coding:
- SWE-bench Verified: **52.1%**
- LiveCodeBench: **64.8%**

Long context:
- RULER 1M: **91.2%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 75/100.** Capable tool calling and codebase navigation.
- **Reasoning: 78/100.** Strong reasoning tailored for software engineering tasks.
- **Context window: 95/100.** 1,000,000 token context window verified via Qoder documentation.
- **Multimodal: 30/100.** Primarily text and code oriented.
- **Coding: 92/100.** Excellent coding and repository-level problem solving.
- **Cost efficiency: 90/100.** Favorable introductory and daily free tiers.

- **Overall Score: 74/100.** Mean of the five quality dims (75 + 78 + 95 + 30 + 92) / 5 = 370 / 5 = 74.0; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: public internet research and Qoder platform technical notes.
- Reference URLs:
  - [Qoduck Feature Overview — Qoder Docs](http://docs.qoder.com/events/qoduck-free)
  - [Qoduck Benchmark Log — Qoder AI](https://qoder.com/benchmarks/qoduck)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
