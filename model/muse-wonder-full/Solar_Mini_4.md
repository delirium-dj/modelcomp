# Muse Wonder Full — findings by Solar_Mini_4

- Source: Meta (`muse-wonder-full-1.0`), curated id opencode/muse-wonder-full
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (muse-wonder-full-1.0)
- **Short description:** Meta Superintelligence Labs largest and most capable model in the Muse Wonder family, built for personal and professional agentic tasks, coding and computer use. The Muse Wonder Full (muse-wonder-full-1.0) is subscription-gated; the base "Wonder" (muse-wonder-1.0) is the API-available SKU.
- **Provider / access:** Meta Superintelligence Labs / Meta API (dev.meta.ai + OpenRouter). Muse Wonder Full is subscription-only (Power Usage via Muse Code); general API availability pending.
- **Release / knowledge:** Released 2026-10-12 (Meta launch). Knowledge cutoff not disclosed.
- **IDs:** muse-wonder-full-1.0 (canonical API SKU per Meta/OpenRouter); curated id opencode/muse-wonder-full.
- **Context window:** 1M tokens total; max output 131K (per Vals AI evaluation settings).
- **Modalities:** Text, image, video and file input; text output. Evaluation settings: reasoning effort "max", Temperature 1, Top P default (per Vals AI).
- **Pricing (as of 2026-11-08):** $4.00 per 1M input / $20.00 per 1M output (same as the base Wonder SKU); Vals Index cost per test around $6.81. Subscription-gated.
- **Architecture:** Proprietary, closed weights (Meta Superintelligence Labs). Parameter count and architecture not disclosed.


### Raw benchmarks found

> Agent / tool use:
> - CyberBench v1.1: 73.63% ±5.56 (12/48).
> - EMB v1.1: 75.00% ±2.14 (5/39).
> - Finance Agent v2.1: 67.58% ±1.98 (3/37).
> - Code Migration v1.1: 62.79% ±3.17 (8/29).
> - Terminal-Bench 4.0: 58.08% ±3.31 (7/61).
> - AutomationBench-AA: not verified for this model (per Vals suite).

> Reasoning / knowledge:
> - Vals Science Index: 48.54% ±2.23 (6/23).
> - Vals RSI Index: 24.43% (9/25).
> - No verified public GPQA Diamond, HLE, LCR, or CritPt rows found for this gated model.

> Coding:


### Normalized scores (1–100)

- **Tool use: 82/100.** CyberBench v1.1 73.63% (12/48), EMB v1.1 75.00% (5/39), Code Migration v1.1 62.79% (8/29), Finance Agent v2.1 67.58% (3/37) and Terminal-Bench 4.0 58.08% (7/61) show strong agentic/enterprise tool use in finance, security and workflow automation; no verified public SWE-bench Verified / LiveCodeBench row for this gated model caps the ceiling.
- **Reasoning: 76/100.** Vals Science Index 48.54% (6/23) with Vals Index 66.79% (5/34) mark a solid mid-to-upper band; no GPQA Diamond, HLE, LCR or CritPt rows verified for this gated model.
- **Context window: 95/100.** 1M-token window (max output 131K); no verified long-context retrieval-rate claim available for this gated model.
- **Multimodal: 80/100.** Text, image, video and file input with text output — image/video/file input, no non-text output.


## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-08
- Method: public internet research (vals.ai benchmark, cost and capabilities page; llm-stats.com benchmarks, pricing and context-window page; Meta model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Vals AI — Muse Wonder Full benchmark, cost and capabilities page](https://www.vals.ai/models/meta_muse-wonder-full)
  - [LLM Stats — Muse Wonder Full benchmarks, pricing and context window](https://llm-stats.com/models/muse-wonder-full-1.0)
  - [Meta — Muse Wonder model card (research.meta.ai)](https://research.meta.ai/static/muse-wonder-model-card)

- **Coding: 74/100.** Vibe Code Bench v1.1 86.00% (14/125), Code Migration v1.1 62.79%, Terminal-Bench 4.0 58.08% and SWE-bench Multimodal 47.29% show solid coding for an agentic model; ProgramBench 0.50% is a weak outlier; no verified public SWE-bench Verified or LiveCodeBench row.
- **Cost efficiency: 72/100.** $4/$20 per 1M is a premium tier (subscription-gated); heavy reasoning-effort "max" usage raises output cost.
- **Overall Score: 81/100.** (82 + 76 + 95 + 80 + 74) / 5 = 81.4 → 81. Best fit: a strong, gated multimodal agentic model for security/finance/agentic workflows once access opens.

> - Vibe Code Bench v1.1: 86.00% ±1.93 (14/125).
> - Vibe Code Bench 1-100: 33.98% ±5.32 (1/26) — ranked #1 of 26.
> - SWE-bench Multimodal: 47.29% ±2.28 (5/21).
> - ProgramBench: 0.50% ±0.50 (28/65).
> - Terminal-Bench 4.0: 58.08% ±3.31 (7/61).
> - Code Migration v1.1: 62.79% ±3.17 (8/29).

> Long context:
> - No long-context retrieval at window length reported in the Vals suite (context window 1M).

