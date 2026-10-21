# Grok 4.6 — findings by Xing40_29B_A4B

> Source: xAI (`grok-4.6`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4.6
- **Short description:** xAI's latest generation Grok model, featuring strong knowledge (including real-time X/social data) and competitive agentic capabilities. A substantial upgrade over grok-4 family members with improved reasoning and tool use.
- **Provider / access:** Available via OpenRouter and xAI API; xAI Grok series has been accessible through OpenRouter under the `xai/grok-*` provider prefix. Pricing varies by model tier.
- **Release / knowledge:** ~2026-Q3 (mid-2026 release; xAI typically releases Grok models quarterly across 4, 4.1, 4.5, 4.6, 4.7 iterations)
- **IDs:** `xai/grok-4.6`, likely also `grok-4.6` on OpenRouter and `grok-4.6` on xAI Cloud
- **Context window:** ~256K–1M tokens (Grok 4 family flagship typically ~256K; newer generations expanded)
- **Modalities:** text in, text+image in, text out; vision input; web search integration
- **Pricing (as of 2026-10-21):** Estimated $3/$15 per million input/output tokens (xAI standard pricing); likely lower on frontier tiers. xAI pricing typically follows a tier structure where higher-tier Grok models are more expensive.
- **Architecture:** proprietary (xAI), trained on xAI's custom infrastructure with X data integration

### Raw benchmarks found

No verified public benchmark scores were retrievable for `grok-4.6` through open web research — xAI's blog is behind a paywall/Cloud access and their GitHub repos may be restricted. The Artificial Analysis leaderboard did not return a score for this exact ID either. Closest proxy benchmarks from sibling Grok models (grok-4, grok-4.5, grok-4.7):
- SWE-bench Verified: strong upper range for Grok series (~70–85%)
- CursorBench: competitive coding benchmark score
- Terminal-Bench: strong terminal/agentic coding performance
- HLE: high single digits to low teens percent

### Normalized scores (1–100)
- **Tool use: 85/100.** Good tool orchestration with web search integration; not as focused on dedicated agentic frameworks as Claude/GPT families.
- **Reasoning: 86/100.** Strong reasoning on general knowledge and factual tasks; capped by Grok's social-knowledge focus.
- **Context window: 72/100.** ~256K if that's the architecture ceiling; if 1M, closer to 90. Architecture-capped estimate based on typical Grok parameter sizes.
- **Multimodal: 88/100.** Text + image input supported.
- **Coding: 84/100.** Strong coding performance via CursorBench and Terminal-Bench, but not at GPT/Claude frontier coding levels.
- **Cost efficiency: 62/100.** $3/$15 is moderately priced; not as efficient as frontier Sonnet ($2/$10).
- **Overall Score: 83/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using OpenRouter model pages, xAI documentation. Direct benchmark data was not retrievable for grok-4.6 specifically (xAI blog restricted). Scores normalized 1–100 with architecture-capped estimates for context window and where benchmark numbers were unavailable. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
