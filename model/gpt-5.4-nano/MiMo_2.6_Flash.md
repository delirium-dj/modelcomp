# GPT-5.4 nano — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.4-nano`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's cheapest GPT-5.4-class model (released 2026-03-17 alongside GPT-5.4 mini) for classification, data extraction, ranking and simpler coding sub-agents — a significant upgrade over GPT-5 nano on speed and cost-critical workloads. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API (`https://api.openai.com/v1`); default snapshot `gpt-5.4-nano-2026-03-17`; aggregator rows via BenchLM/Inworld/pricepertoken.
- **Release / knowledge:** released 2026-03-17 (snapshot ID); knowledge cutoff **2025-08-31** (official model docs).
- **IDs:** `gpt-5.4-nano`, `gpt-5.4-nano-2026-03-17`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** **400,000 tokens** with a **272,000 maximum input** and 128,000 max output (official OpenAI model docs; Inworld lists 272K — that is the max-input figure).
- **Modalities:** text + image in; text out; reasoning yes (`reasoning_effort`: none default, low, medium, high, xhigh); reasoning-token support; prompt caching at $0.02/1M cached input. No audio/video input found.
- **Pricing (as of 2026-10-01):** **$0.20 / 1M input, $1.25 / 1M output**, cached input $0.02 / 1M (official OpenAI docs); regional-processing endpoints +10%. Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights, parameters undisclosed; reasoning model.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI blog numbers are xhigh reasoning effort.

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** (OpenAI; BenchLM agrees) — vs GPT-5.4 75.1%, GPT-5 mini 38.2%
- OSWorld-Verified: **39.0%** (OpenAI)
- τ²-Bench (telecom): **92.5%** (OpenAI)
- MCP Atlas: **56.1%** (OpenAI)
- Toolathlon: **35.5%** (OpenAI)
- GDPval / Claw-Eval / Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (OpenAI; BenchLM agrees)
- HLE: **37.7%** with tools, **24.3%** w/o tools (BenchLM)
- FrontierMath v2: **25.86%** Tiers 1–3, **6.25%** Tier 4 (BenchLM)
- AA Intelligence Index / LCR / CritPt: **no verified public score found**
- BenchLM composite: **66.1–66.8 /100**, public rank #28–32 of tracked models

Coding:

- SWE-Bench Pro (Public): **52.4%** (OpenAI) — vs GPT-5.4 57.7%, GPT-5 mini 45.7%
- SWE-bench Lite: **32.3%** (pricepertoken leaderboard, LayerLens data)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 400K window / 272K max input (official docs); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text + image in (official input modalities); MMMU-Pro: **66.1%**, MMMU-Pro w/ Python: **69.5%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench telecom 92.5% is near-frontier and MCP Atlas 56.1% is respectable, but Terminal-Bench 2.0 46.3% sits at the bottom of the mid band (TB 45–60 → 50–70), Toolathlon 35.5% is low and OSWorld 39.0% is weak — the composite lands mid-band.
- **Reasoning: 79/100.** GPQA 82.8% is above the 60–80% mid band (→ ~80) and HLE 37.7% is just under the 40%+ frontier anchor (~80 by interpolation); FrontierMath T1–3 25.86% is good for a nano, but no AA Intelligence Index row exists.
- **Context window: 75/100.** 400K window sits in the 200K–500K tier (65–84), discounted from the top of the band by the 272K max-input cap and no retrieval measurement.
- **Multimodal: 65/100.** Text + image in = image-in band (60–70) with MMMU-Pro 66.1%; no PDF/video/audio input and no non-text output.
- **Coding: 68/100.** SWE-Bench Pro 52.4% is a strong nano result (vs GPT-5 mini 45.7%) and SWE-bench Lite 32.3% is respectable, but Terminal-Bench 46.3% is mid-low and no SWE-bench Verified / LiveCodeBench / SciCode row exists — short of the mid-band anchor (LiveCode 80).
- **Cost efficiency: 96/100.** $0.20/$1.25 per 1M sits between the ~$0.10/$0.20 ≈ 97–99 anchor and the ~$0.60/$2.20 ≈ 92 anchor, with cached input at $0.02 (90% off) — a genuine budget-tier price, short of $0 free.
- **Overall Score: 70/100.** (62 + 79 + 75 + 65 + 68) / 5 = 69.8 → 70 — best-fit as the cheap high-volume reasoning sub-agent: 82.8% GPQA and 92.5% τ² telecom at $0.20/$1.25, capped by a bottom-of-mid-band Terminal-Bench score, weak OSWorld computer use and image-only input.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4 mini and nano" post, official OpenAI `gpt-5.4-nano` model docs, BenchLM head-to-head snapshots, Inworld and pricepertoken spec/pricing rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
