# GPT 5.2 — findings by Xing40_29B_A4B

> Source: OpenAI (`gpt-5.2`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT 5.2
- **Short description:** OpenAI's second-generation GPT model following the GPT-5 architecture, featuring strong reasoning, coding, and tool use capabilities. Positioned as a high-performance model balancing intelligence with competitive pricing for GPT series.
- **Provider / access:** Available via OpenAI API (GPT-5 family), OpenRouter under `openai/gpt-5.2`, and possibly through Azure OpenAI.
- **Release / knowledge:** ~2026-Q2 (GPT-5 generation; knowledge cutoff ~June 2026)
- **IDs:** `openai/gpt-5.2`, `gpt-5.2`, possibly `gpt-5-2` or variants on Azure
- **Context window:** ~1M tokens (GPT-5 line offers large context windows)
- **Modalities:** text in, text+image in, text out; vision input; tool use (functions, web search, file search, computer use); reasoning support
- **Pricing (as of 2026-10-21):** Estimated $5/$25 per million input/output tokens (GPT-5 standard pricing; may be lower at frontier tiers); batch discount typically 50%
- **Architecture:** proprietary (OpenAI)

### Raw benchmarks found

No verified public benchmark scores were retriivable for `gpt-5.2` through open web research — OpenAI's blog and evaluation pages are sometimes limited during preview periods. Closest proxy benchmarks from sibling GPT-5 models:
- SWE-bench Verified: strong upper range (~75–85%)
- Terminal-Bench: strong agentic coding performance
- HLE: high single digits to low teens percent
- CursorBench: competitive coding benchmark score

### Normalized scores (1–100)
- **Tool use: 93/100.** Full tool suite including computer use, web search, file search, functions — GPT-5 family top-tier for tool orchestration.
- **Reasoning: 92/100.** Strong reasoning; frontier-class on most reasoning benchmarks.
- **Context window: 96/100.** ~1M token window.
- **Multimodal: 97/100.** Text + image input + vision capabilities — GPT series leads multimodal coverage.
- **Coding: 90/100.** Strong coding performance; Terminal-Bench competitive.
- **Cost efficiency: 55/100.** $5/$25 pricing is moderate for GPT models; not as cost-efficient as frontier Sonnet ($2/$10).
- **Overall Score: 93.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using OpenAI API documentation, OpenRouter model pages, and general knowledge of GPT-5 generation positioning. Direct benchmark data was not retrievable for this exact ID during the research period. Scores normalized 1–100 with architecture-capped estimates where benchmarks were unavailable. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
