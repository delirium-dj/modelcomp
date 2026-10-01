# Claude Haiku 4.5 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-haiku-4-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small, fastest model with "near-frontier intelligence" (official): near-Sonnet-4 coding quality at one-third the cost and more than twice the speed. Positioned for low-latency agents, chat, pair programming, and Claude Code sub-agent orchestration; drop-in replacement for Haiku 3.5 and Sonnet 4.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`); Amazon Bedrock `anthropic.claude-haiku-4-5`; Google Vertex `claude-haiku-4-5@20251001`; Microsoft Foundry. On OpenCode Zen via `https://opencode.ai/zen/v1/messages` (Messages API).
- **Release / knowledge:** released 2025-10-15; reliable knowledge cutoff Feb 2025; training data cutoff Jul 2025 (official docs).
- **IDs:** `claude-haiku-4-5-20251001` (alias `claude-haiku-4-5`); Zen `opencode/claude-haiku-4-5`. No Free ID on Zen.
- **Context window:** 200K tokens in / 64K max output (verified: official models overview).
- **Modalities:** text and image input, text output; vision; tool use; extended thinking (manual `budget_tokens` mode; the `effort` parameter is not supported on this model); multilingual.
- **Pricing (as of 2026-10-01):** $1 / $5 per MTok in/out (official and Zen; Zen cached read $0.10); Batch API 50% off; prompt cache reads 10% of base input. No free tier.
- **Architecture:** proprietary, size undisclosed. Safety: ASL-2; described by Anthropic as its most-aligned model at release ("safest model yet" on its automated alignment metric).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals, thinking variant): **43.8%** (via BenchLM, source vals.ai)
- Terminal-Bench (official, Terminus 2 harness, avg of 11 runs): **~41%** (40.21% without thinking; 41.75% with 32K thinking budget) (source: anthropic.com/news/claude-haiku-4-5)
- JobBench: **16.0%** (JobBench paper, via BenchLM)
- Tau3-Banking / Tau2-Bench: vendor ran τ2-bench (extended thinking, 10-run average) but published numbers only in images — no verified public score found in text
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Computer use: vendor claims it "surpasses Claude Sonnet 4 at certain tasks, like using computers" (qualitative, official announcement; OSWorld-Verified methodology described but numbers image-only)

Reasoning / knowledge:

- GPQA Diamond (Vals): **72.2%** (via BenchLM)
- MMLU-Pro (Vals): **78.7%** (via BenchLM)
- FrontierMath v2 (Epoch AI): **5.903%** (Tiers 1-3), **2.083%** (Tier 4) (via BenchLM)
- HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no page for this model (AA 404)
- MMMLU (multilingual): vendor ran it (10-run average, 14 non-English languages) — numbers image-only; AIME likewise image-only
- BenchLM composite: **42.4/100, #122 of 638** (11 of 508 benchmarks covered — "conservative" per BenchLM)

Coding:

- SWE-bench Verified: **73.3%** (official; simple scaffold with bash + string-replace editing, average of 50 trials, 128K thinking budget, full 500-problem set)
- SWE-bench (Vals): **66.6%** (via BenchLM)
- VulcanBench v3: **76.2%** (via BenchLM)
- LiveCodeBench (Vals): **41.2%** (via BenchLM)
- SciCode / AA-SciCode / Vibe Code Bench: no verified public score found
- Design Arena Website: **1130** (OpenRouter benchmarks, via BenchLM)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found (200K window per official docs)

### Normalized scores (1–100)

- **Tool use: 55/100.** TB2.1 43.8% (Vals) / ~41% official sits just under the 45-60% mid band, with JobBench a weak 16% and no Tau3/GDPval numbers; vendor-verified strengths in computer use and real-world sub-agent orchestration ("surpasses Claude Sonnet 4... using computers") pull it back up. Capped by modest measured agentic scores.
- **Reasoning: 62/100.** GPQA Diamond 72.2% (Vals) lands inside the 60-80% mid band (55-65) with solid MMLU-Pro 78.7%; FrontierMath v2 at ≤5.9% shows a hard ceiling on deep math, and no HLE score exists. Capped at mid-tier by the math ceiling and absent frontier reasoning evidence.
- **Context window: 70/100.** 200K tokens in, official — the conventional 200K anchor score; 64K max output noted as a caveat, not a separate deduction.
- **Multimodal: 65/100.** Text + image in, text out (official); no video/audio input, no non-text output. Image-in band (60-70).
- **Coding: 75/100.** Official SWE-bench Verified 73.3% (50-trial average) is near Sonnet-4 class, with VulcanBench v3 76.2% and Vals SWE 66.6% corroborating; LiveCodeBench 41.2% (Vals) drags the profile down. Capped by the weak competitive-programming score and no frontier-harness wins.
- **Cost efficiency: 88/100.** $1/$5 per MTok matches the ~$1.25/$4.25 ≈ 88 reference bracket, with 50% batch and 10%-price cache reads improving effective cost; no free tier on Zen.
- **Overall Score: 65/100.** Half-up mean of the five quality dims: (55 + 62 + 70 + 65 + 75) / 5 = 65.4 → 65. Fast, cheap, near-frontier coder and sub-agent: pair with a frontier planner (e.g. Sonnet/Opus/Fable) for long-horizon work and let Haiku 4.5 execute.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (Anthropic official announcement + models overview, BenchLM aggregator with sourced rows, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
