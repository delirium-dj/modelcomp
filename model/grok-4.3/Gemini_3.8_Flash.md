# Grok 4.3 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's mid-2026 flagship general-reasoning model featuring a 1M token context, high-end instruction following and science reasoning, and aggressive pricing, though with moderate agentic coding performance.
- **Provider / access:** xAI API (`grok-4.3`), OpenRouter, Vercel AI Gateway.
- **Release / knowledge:** April 2026; knowledge cutoff late 2025.
- **IDs:** `xai/grok-4.3`, `spacexai/grok-4.3`
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text and image input; text output. Structured outputs and native tool use supported.
- **Pricing (as of 2026-09-24):** $1.25 / 1M input tokens, $2.50 / 1M output tokens (<200K prompt); $2.50 / $5.00 for ≥200K tokens.
- **Architecture:** Proprietary large-scale neural network (architecture undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **98.0%** (xAI/AA report)
- Tau2-Bench: **88.9%** (AA)
- GDPval-AA: **Elo 1500** (Artificial Analysis)
- IFBench: **81.0%**
- Terminal-Bench 2.1: **41.9%** (TB 2.0: **43.4%**)
- Berkeley Function Calling Leaderboard: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (Artificial Analysis; BenchmarkList 91.4%)
- Humanity's Last Exam (HLE): **35.0%** (BenchmarkList 37.2%)
- MMLU Pro: **85.8%**
- MMMU Pro: **83.1%**
- Chatbot Arena: **1442.4 Elo**

Coding:

- SWE-bench Verified: **71.4%** (Artificial Analysis run)
- LiveCodeBench: **84.5%**
- SciCode: **47.3%**
- Vibe Code Bench v1.1: **19.4%**
- SWE-bench Pro: no verified public score found

Long context:

- Context Arena: **12.3%** (low effective retrieval accuracy across extended multi-turn context)
- RULER / MRCR: no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong τ²-Bench (98%) and Tau2 (88.9%) demonstrate effective agentic execution; however, Terminal-Bench 2.1 at 41.9% restricts it from reaching the top tier.
- **Reasoning: 88/100.** Above 90% on GPQA Diamond (90.1–91.4%) with a solid 35.0% on HLE and 85.8% on MMLU Pro confirms upper-frontier scientific and logical reasoning.
- **Context window: 88/100.** Supports a 1M token context, but low Context Arena scores (12.3%) indicate degraded needle-in-a-haystack and long-context reasoning retention.
- **Multimodal: 66/100.** Strong image comprehension and vision reasoning; lacks native audio/video streaming or multimodal generation outputs.
- **Coding: 76/100.** LiveCodeBench at 84.5% is solid, but SWE-bench Verified at 71.4% and Vibe Code Bench at 19.4% show clear limitations on complex real-world software engineering tasks.
- **Cost efficiency: 90/100.** Very competitively priced at $1.25 / $2.50 per 1M tokens for standard contexts with affordable prompt caching.
- **Overall Score: 80/100.** Arithmetic mean of non-cost metrics: (82 + 88 + 88 + 66 + 76) / 5 = 80.0. A high-efficiency reasoning powerhouse well-suited for general queries and knowledge extraction.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark analysis and cross-verification against verified leaderboards and provider documentation.
