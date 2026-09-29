# Grok 4.1 — findings by Qwen 3.8 27B

- Source: xAI/Grok 4.1 (`opencode/grok-4.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 incremental update to the Grok 4 line, tuned via large-scale RL for style, personality, helpfulness and reduced factual hallucination; the `opencode/grok-4.1` Zen ID serves text-only at 128K.
- **Provider / access:** grok.com, X, iOS/Android apps, xAI API; OpenCode Zen `opencode/grok-4.1`.
- **Release / knowledge:** 2025-11-17 (silent rollout Nov 1–14); knowledge cutoff not disclosed.
- **IDs:** `opencode/grok-4.1`
- **Context window:** 128K total on the Zen ID (per curated meta); sibling `Grok 4.1 Fast` is vendor-claimed to support a 2M-token window.
- **Modalities:** Text in/out on this ID (vendor describes improved multimodal understanding for the 4.1 line generally; Zen ID is text-only).
- **Pricing (as of 2026-09-29):** no verified per-1M price found for the Zen ID in this research; xAI API paid tiers.
- **Architecture:** proprietary; incremental Grok-4 update (RL-optimized style/alignment; agentic reasoning models used as reward models, per xAI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: no verified public score found for Grok 4.1 on the Zen ID
- Grok 4.1 Fast: vendor-claimed 2M-token context + Agent Tools API (search, web access, code execution) — xAI announcement 2025-11-17

Reasoning / knowledge:

- LMArena Text leaderboard: **1483 Elo** (Grok 4.1 Thinking, code name `quasarflux`, #1 overall at release, 31-pt margin over highest non-xAI model); **1465 Elo** non-reasoning (`tensor`, #2) — xAI announcement 2025-11-17 (vendor-reported arena placements)
- Blind live-traffic pairwise eval: **64.78% preference** vs previous production Grok — xAI announcement
- EQ-Bench3 / Creative Writing v3: normalized-Elo charts published by xAI; values not extractable from the announcement page
- GPQA Diamond / HLE / LCR: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- MRCR / RULER: no verified public score found (Fast variant's 2M window is vendor-claimed)

### Normalized scores (1–100)

- **Tool use: 65/100.** No verified TB/Tau/GDPval numbers for this ID; strong agentic positioning (Fast variant's Agent Tools API, RL built on agentic-reasoning reward models) supports mid-upper, capped by missing dedicated agent benchmarks.
- **Reasoning: 84/100.** LMArena #1 overall at release (1483 Elo, thinking) with #2 non-thinking (1465) is top-tier general-capability evidence, vendor-reported; no independent GPQA/HLE/LCR numbers verified for the exact ID, which caps it below the frontier 90+ cohort.
- **Context window: 55/100.** Evaluated Zen ID serves 128K (100K–200K band = 50–64, mid-band); the 2M window belongs to the separate Fast variant.
- **Multimodal: 15/100.** Text-only on this ID per curated meta (native line has improved multimodal understanding per xAI, not available here).
- **Coding: 62/100.** No verified public SWE-bench/LiveCodeBench/SciCode number found for Grok 4.1; scored conservatively from the Grok-4 lineage and #1 arena standing; missing coding benchmarks cap it.
- **Cost efficiency: 58/100.** No verified Zen per-1M price found in this research; xAI API is paid at frontier-model rates; no free tier noted for this ID.
- **Overall Score: 56/100.** (65 + 84 + 55 + 15 + 62) / 5 = 56.2 → 56 — excellent conversational/reasoning model at 128K text-only; not the pick for long-context, multimodal, or coding-heavy agentic loops on this ID.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (xAI announcement `x.ai/news/grok-4-1`, Wikipedia `Grok (chatbot)` Grok 4.1 section, both checked 2026-09-29); vendor-reported arena Elo treated as published evidence with vendor bias noted; scores are normalized 1–100 interpretations, not official vendor scores.
