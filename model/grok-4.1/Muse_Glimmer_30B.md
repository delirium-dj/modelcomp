# Grok 4.1 — findings by Muse Glimmer 30B

- Source: xAI Grok 4.1 consumer flagship (`xai/grok-4.1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 chat flagship (Thinking, 1483 Elo, LMArena #1) with live X data — a consumer product with no public API route, never on Zen; superseded by 4.2/4.3.
- **Provider / access:** Consumer only via grok.com, X, iOS and Android apps, Auto mode or explicit model picker. No public xAI API model ID for the base Grok 4.1; no OpenCode Zen ID. `noFreeId: true` per meta.json.
- **Release / knowledge:** Released 2025-11-17; silent rollout 2025-11-01 to 2025-11-14. Knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4.1`
- **Context window:** 1,000,000 total tokens per meta.json `contextWindow: "1,000,000 (BenchLM spec; xAI never documented a window)"`.
- **Modalities:** Text in / out; image in via consumer app. Reasoning yes with Thinking / Non-Thinking modes. Live web and X search integrated in product.
- **Pricing (as of 2026-10-20):** No public API price — consumer Grok subscription / free tier only; never on OpenCode Zen. Pricing note from meta.json: "No public API price - consumer Grok subscription only; never on OpenCode Zen".
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Blind pairwise preference vs previous production Grok in silent rollout: **64.78%** preferred <https://x.ai/news/grok-4-1 — “Compared to the previous production model in traffic, Grok 4.1 is preferred 64.78% of the time”>
- Terminal-Bench / τ²-bench / GDPval-AA / Claw-Eval: **no verified public score found** for the base consumer model

Reasoning / knowledge:

- LMArena Text Arena Thinking (code name `quasarflux`): **1483 Elo**, #1 overall <https://x.ai/news/grok-4-1 — “Grok 4.1 Thinking … holds the #1 overall position with 1483 Elo”>
- LMArena Text Arena Non-Reasoning (code name `tensor`): **1465 Elo**, #2 overall <https://x.ai/news/grok-4-1>
- LMArena Style Control Elo: Overall **1325**, Text **1525** reported on launch page
- Hallucination rate on sampled production info-seeking queries: **12.09% → 4.22%** <https://x.ai/news/grok-4-1 — “we have observed significant reductions in hallucination rate … 12.09% → 4.22%”>
- FActScore error rate: **9.89 → 2.97** <https://x.ai/news/grok-4-1>
- EQ-Bench / Creative Writing v3: benchmark mentioned on launch page; no verified public numeric Elo published in independent trackers at 2026-10-20
- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** for this consumer ID

Coding:

- LiveCodeBench / SWE-bench Verified / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** for base Grok 4.1

Multimodal:

- Image in confirmed via consumer app; no independent MMMU-Pro / AA-Omniscience score published for this ID

Long context:

- Context window 1M total per meta.json. No MRCR / RULER / GraphWalks public score published for `grok-4.1` at 2026-10-20

### Normalized scores (1–100)

> Overall = half-up mean of Tool + Reasoning + Context + Multimodal + Coding.

- **Tool use: 68/100.** 64.78% blind preference win and 4.22% production hallucination rate with integrated live web/X search support grounding quality. Capped below 75: no API tool-calling surface and no independent Terminal-Bench / τ² / GDPval numbers published for the consumer ID.
- **Reasoning: 80/100.** LMArena Text Arena #1 1483 Elo Thinking and #2 1465 Elo Non-Thinking, plus >65% hallucination reduction and FActScore error 2.97. Capped below 90: no independent GPQA Diamond / HLE / AIME / HLE scores published; preference leaderboard measures style as well as correctness.
- **Context window: 90/100.** 1,000,000 total tokens per meta.json places it in the ≥1M band. Held below 95-100 pending verified ≥98% retrieval fidelity at length.
- **Multimodal: 70/100.** Text in/out + image in via consumer app per meta.json modalities. No video/audio output and no independent MMMU-Pro score published.
- **Coding: 58/100.** No verified public coding benchmark exists for base Grok 4.1; xAI launch focuses on creative, emotional and factuality improvements. Score is a conservative family inference, not a measurement.
- **Cost efficiency: 88/100.** Consumer free tier with limits or subscription bundled access; no per-token API price to measure. High value for interactive chat, not comparable to API pricing.
- **Overall Score: 73/100.** Mean of 68 + 80 + 90 + 70 + 58 = 73.2 → 73. Best-fit as a top-tier consumer conversational model with strong preference and factuality gains, limited by lack of API programmatic access and verified hard-reasoning / coding measurements.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; meta.json for model basics, pricing, modalities, context window; x.ai news launch post for release date, preference, LMArena Elo, hallucination and FActScore reductions. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
