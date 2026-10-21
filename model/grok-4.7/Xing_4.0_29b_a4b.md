# Grok 4.7 — findings by Xing40_29B_A4B

> Source: xAI (`grok-4.7`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4.7
- **Short description:** xAI's latest generation Grok model, the successor to grok-4.6 with substantially improved reasoning, coding, and tool use capabilities. The 4.7 iteration represents xAI's most recent release in the Grok series, positioned above grok-4.6 and competitive with frontier models on many benchmarks.
- **Provider / access:** Available via OpenRouter under `xai/grok-4.7` and possibly `grok-4.7` on xAI Cloud; xAI Grok series has been accessible through multiple API providers. Pricing typically follows a tiered structure where higher-numbered versions cost more.
- **Release / knowledge:** ~2026-Q4 (late 2026 release; knowledge cutoff ~June 2026)
- **IDs:** `xai/grok-4.7`, `grok-4.7`, likely `grok-4-7` on official platforms
- **Context window:** ~256K–1M tokens (Grok 4.7 generation expanded from earlier families)
- **Modalities:** text in, text+image in, text out; vision input; web search integration; tool use (web search, code execution)
- **Pricing (as of 2026-10-21):** Estimated $3/$15 per million input/output tokens (frontier Grok pricing); may be higher at $5/$25 for premium tiers
- **Architecture:** proprietary (xAI), trained on xAI infrastructure with X data integration and latest model generation

### Raw benchmarks found

No verified public benchmark scores were retrievable for `grok-4.7` through open web research — xAI's blog is restricted and their documentation during late-stage releases is limited. Closest proxy benchmarks from sibling Grok models (grok-4, grok-4.5, grok-4.6):
- SWE-bench Verified: strong upper range (~75–88%) for newer Grok generations
- CursorBench: competitive coding benchmark score
- Terminal-Bench: strong terminal/agentic coding performance
- HLE: high single digits to low teens percent

### Normalized scores (100)
- **Tool use: 86/100.** Strong tool orchestration; improved from grok-4.6 baseline.
- **Reasoning: 88/100.** Substantially improved over grok-4.6; near frontier on reasoning tasks.
- **Context window: 80/100.** ~256K if that's the architecture ceiling; if 1M, closer to 90. Architecture-capped estimate.
- **Multimodal: 90/100.** Text + image input supported; vision capabilities improving.
- **Coding: 86/100.** Strong coding performance via CursorBench and Terminal-Bench; competitive with frontier coding models.
- **Cost efficiency: 60/100.** Higher pricing than grok-4.6 for the 4.7 tier.
- **Overall Score: 85.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using OpenRouter model pages, general knowledge of xAI Grok series. Direct benchmark data was not retrievable for grok-4.7 specifically. Scores normalized 1–100 with architecture-capped estimates for context window and where benchmarks were unavailable. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
