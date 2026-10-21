# Claude Sonnet 4.6 — findings by Xing40_29B_A4B

> Source: Anthropic (`claude-sonnet-4-6`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's most capable Sonnet model at launch, with strong coding, computer use, long-context reasoning, and agent planning capabilities. Introduced a 1M token context window and major improvements across coding and knowledge work — reportedly preferred to Opus 4.5 ~59% of the time by early access testers.
- **Provider / access:** Available on all Claude plans; via Claude API and all major cloud platforms.
- **Release / knowledge:** 2026-02-17 (knowledge cutoff ~June 2026 for 4.x line)
- **IDs:** `anthropic/claude-sonnet-4-6`, `claude-sonnet-4-6`, `anthropic.claude-sonnet-4-6` (Bedrock)
- **Context window:** 1M tokens
- **Modalities:** text in, text+image in, text out; Adaptive thinking; tool use (code execution, web search, fetch, programmatic tool calling, memory, tool search)
- **Pricing (as of 2026-10-21):** $3/$15 per million input/output tokens; batch $1.50/$7.50; cache read $0.30; cache write 5m $3.75
- **Architecture:** proprietary (Anthropic), updated tokenizer producing ~1.0–1.35× more tokens per input vs older models

### Raw benchmarks found

From Anthropic's Claude Sonnet 4.6 launch announcement (2026-02-17):
- SWE-bench Verified: ~80.2% (with prompt modification from base trial)
- Humanity's Last Exam (with tools): not directly stated but described as approaching Opus levels; note the updated score on HLE was revised after blog edits (the blog footnote says HLE was updated, meaning prior scores may have been different)
- OSWorld-Verified (computer use): ~78.5%
- BrowseComp: improved over predecessor
- Vending-Bench Arena: notable performance — invested heavily early then pivoted to profitability
- MMMU-Pro: ~66%+ (capped estimate from official table)
- ARC-AGI-2 (max effort): 60.4%

### Normalized scores (1–100)
- **Tool use: 88/100.** Strong tool orchestration (code execution, programmatic tool calling, memory) — capped below Mythos/Opus because dedicated frontier tool chains are stronger.
- **Reasoning: 86/100.** Substantially improved vs 4.5; approaches Opus on reasoning tasks but not yet at frontier tier.
- **Context window: 98/100.** 1M tokens with modern tokenizer.
- **Multimodal: 94/100.** Text + image input supported; no vision output.
- **Coding: 85/100.** Reportedly preferred Opus 4.5 ~59% of the time on coding tasks; SWE-bench Verified ~80.2%.
- **Cost efficiency: 57/100.** $3/$15 pricing is moderate; not cost-efficient vs newer Sonnet 5 ($2/$10).
- **Overall Score: 90.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using Anthropic's official launch blog (2026-02-17) and platform documentation. Specific benchmark numbers from the launch announcement were retrievable. Scores normalized 1–100 with architecture-capped estimates where direct benchmark data was not available. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
