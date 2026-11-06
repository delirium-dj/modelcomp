# GPT-5.4 mini — findings by Mercury 3

- Source: OpenAI (GPT-5.4 mini)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's high-throughput sibling of GPT-5.4 (released March 2026), bringing core reasoning/coding/tool-use capabilities at lower latency and cost. A production-oriented multimodal model balancing capability and efficiency for large-scale deployments.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`), Azure, OpenRouter and other routers (~5–10 providers); batch price available.
- **Release / knowledge:** Released March 2026 (alongside nano on 2026-03-17 per AI Rankings); knowledge cutoff 2025-08-31 (family).
- **IDs:** `openai/gpt-5.4-mini`.
- **Context window:** 400K tokens (BenchGecko/llm-stats; cloudprice lists 410K).
- **Modalities:** text + image + file uploads input; text output; step-by-step reasoning; strong tool use; no video/audio input, no multimodal output.
- **Pricing (as of 2026-11-06):** $0.75 in / $4.50 out per 1M (OpenAI/Azure list); OpenAI batch $0.38/$2.25.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Agentic category: **24.6** (BenchGecko, #59 globally) — modest agentic score
- Speed category: 42.1 (#58)

Reasoning / knowledge:

- GPQA Diamond: **85.9%** (BenchGecko)
- OTIS Mock AIME 2024–25: **88.9%**; FrontierMath Tiers 1–3 v2: **53.9%**; LiveBench Mathematics 37.0%
- ARC-AGI: **63.7%**; LiveBench Reasoning: **21.9%**
- Reasoning category: 38.0 (#120); knowledge 41.5 (#206)

Coding:

- LiveBench Coding: **74.7%**; WeirdML 60.3%; Frontiercode: **27.0%**
- Coding category: 44.8 (#121); SWE-bench Pro ~54% per The AI Rankings (independent)

Long context:

- 400K verified; no independent long-context retrieval benchmark captured

Multimodal:

- MMMU-class visual reasoning not captured; multimodal input (text/image/files) with text output

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic category 24.6 (BenchGecko) is weak relative to the flagship family; reliable tool use claimed for high-throughput workloads but not backed by captured strong agent benchmarks.
- **Reasoning: 78/100.** GPQA Diamond 85.9% and OTIS AIME 88.9% are good; LiveBench Reasoning 21.9% and overall reasoning rank (#120) temper the picture.
- **Context window: 85/100.** 400K verified — generous for a mini tier.
- **Multimodal: 72/100.** Text/image/file input with text output; step-by-step reasoning; no video/audio, no generation.
- **Coding: 78/100.** LiveBench Coding 74.7% but Frontiercode 27.0%; SWE-bench Pro ~54% (independent) — solid for the price tier, not class-leading.
- **Cost efficiency: 70/100.** $0.75/$4.50 (batch $0.38/$2.25) — cheaper than full GPT-5.4 but not the cheapest in its class; ~6x cheaper than flagship per AI Rankings (which listed ~$0.40/$1.60 at launch — treat list prices as current $0.75/$4.50).
- **Overall Score: 77/100.** Mean of the five non-cost dims (70+78+85+72+78)/5 = 76.6 → 77. Best-fit: a fast, cost-effective production workhorse with flagship-adjacent reasoning/coding for its scale; notch below the full model on agentic and multimodal depth.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs: GPT-5.4 family (incl. mini)](https://developers.openai.com/api/docs/models/gpt-5.4)
  - [BenchGecko: GPT-5.4 Mini page (29 benchmarks, pricing, providers)](https://benchgecko.ai/model/gpt-5-4-mini)
  - [llm-stats: GPT-5.4 mini](https://llm-stats.com/models/gpt-5.4-mini)
  - [The AI Rankings: GPT-5.4 review (mini variant specs)](https://theairankings.com/openai/gpt-5-4/)
  - [OpenRouter: openai/gpt-5.4-mini](https://openrouter.ai/openai/gpt-5.4-mini)
  - [BenchLM: GPT-5.4 mini](https://benchlm.ai/models/gpt-5-4-mini)
- Future sources: add a new file next to this one using the same headings.
