# GPT-5.1 Codex — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-5.1 Codex, `gpt-5.1-codex`
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI agentic coding variant optimized for repo-scale software engineering in Codex / Responses API. Released Nov 2025 with 400K context / 128K output, SWE-bench Verified 73.7% at high reasoning; shut down July 23 2026 on OpenAI native but persists via aggregators.
- **Provider / access:** OpenAI Responses API `gpt-5.1-codex`; OpenRouter `openai/gpt-5.1-codex`. Responses API only — no Chat Completions, Batch, fine-tuning. OpenCode Zen listed `opencode/gpt-5.1-codex` paid, deprecated 2026-07-23.
- **Release / knowledge:** 2025-11-13; knowledge cutoff 2024-09-30.
- **IDs:** `openai/gpt-5.1-codex` · `opencode/gpt-5.1-codex` (deprecated)
- **Context window:** 400,000 tokens total, max output 128,000 tokens. Verified by OpenAI model docs and LLM Stats.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calling yes, structured outputs yes, web search supported, prompt caching supported.
- **Pricing (as of 2026-10-25):** $1.25 / 1M input, $0.125 / 1M cached input, $10.00 / 1M output via OpenAI. Paid; no free tier.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: OpenAI model docs 2026-10-25, BenchGecko model page 2026-10-25, LLM Stats model page 2026-10-25; cross-checked against Beam findings and BenchLM aggregates.

Agent / tool use:

- Terminal-Bench 2.0: **52.8%** (OpenAI Codex comparison, high reasoning)
- TAU-bench v2: **83.0%** (BenchLM)
- LiveBench Agentic Coding: **53.3%** (BenchGecko)
- Terminal-Bench Hard: **34.8%** (BenchLM)

Reasoning / knowledge:

- LiveBench Reasoning: **82.0%** (BenchGecko)
- GPQA: **86.0%** (BenchLM)
- HLE: **25.7%** (BenchLM)
- MMLU Pro: **86.0%** (BenchLM)
- LiveBench Mathematics: **79.6%** (BenchGecko)
- LiveBench Data Analysis: **60.8%** (BenchGecko)
- AIME 2025: **95.7%** (BenchLM)

Coding:

- SWE-bench Verified: **73.7%** (OpenAI high reasoning)
- LiveCodeBench: **84.9%** (BenchLM)
- LiveBench Coding: **71.8%** (BenchGecko)
- SciCode: **40.2%** (BenchLM)

Long context:

- Context window 400K verified; AA-LCR / LCR: **69.0%** (BenchLM); no published MRCR/RULER/GraphWalks.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 52.8% and TAU-bench v2 83.0% show strong function/web tooling; LiveBench Agentic Coding 53.3% caps the score.
- **Reasoning: 76/100.** GPQA 86.0%, LiveBench Reasoning 82.0%, MMLU Pro 86.0%, AIME 95.7% are high; HLE 25.7% and LiveBench Data Analysis 60.8% limit top-end.
- **Context window: 80/100.** 400K total / 128K output verified; 400K tier mapping; LCR 69.0% confirms usable long context, no RULER score.
- **Multimodal: 68/100.** Text + image input, text output; proprietary multimodal reasoning claimed; no verified independent multimodal benchmark scores.
- **Coding: 82/100.** SWE-bench Verified 73.7% and LiveCodeBench 84.9% are strong for a Codex lane; LiveBench Coding 71.8% supports; SciCode 40.2% caps.
- **Cost efficiency: 78/100.** $1.25/$10 per 1M with $0.125 cached; mid-range for coding tier, cheaper than GPT-5.1-Codex-Max but more expensive than Mini.
- **Overall Score: 75.6/100.** Mean of five quality dims (72+76+80+68+82)/5 = 75.6 → 75.6 rounded. Best-fit: strong agentic coding model with large context, cost-moderate, superseded by newer Codex lanes.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; OpenAI developers.openai.com/api/docs/models/gpt-5.1-codex, BenchGecko benchgecko.ai/model/gpt-5-1-codex, LLM Stats llm-stats.com/models/gpt-5.1-codex; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
