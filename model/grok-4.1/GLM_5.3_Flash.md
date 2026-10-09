# Grok 4.1 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's frontier model focused on real-world usability — creative, emotional, and collaborative interactions — while retaining Grok 4's reasoning. Ships in Thinking (code name `quasarflux`) and non-reasoning (`tensor`) modes.
- **Provider / access:** grok.com, X, iOS/Android apps; xAI API (`grok-4.1` or the dated release alias — per xAI docs model-alias convention, `modelname-date` refers to a specific release). Chat Completions and Responses API; note Grok 4.20+ drops `logprobs` support.
- **Release / knowledge:** 2025-11-17 release (after a silent rollout Nov 1–14, 2025); knowledge cutoff not stated in fetched sources (xAI's current docs give Grok 4.7 a May 2026 cutoff).
- **IDs:** `xai/grok-4.1` (Thinking and non-reasoning modes; no Free ID exists on Zen)
- **Context window:** conflicting readings — **256K** (the old draft's same-generation-tier-as-Grok-4 assumption from xAI docs pricing tiers) vs **1M** (benchlm.ai's model table). xAI's current docs list no grok-4.1 entry to arbitrate (grok-4.20: 1M, grok-4.3: 1M, grok-4.5+: 500K) — both readings listed, scored conservatively on the lower.
- **Modalities:** text + image input (20 MiB max image, jpg/png); text output; reasoning yes (Thinking mode); tool calls yes (server-side Web Search / X Search for realtime data); JSON mode supported.
- **Pricing (as of 2026-10-09):** no longer listed on xAI's current docs (superseded by grok-4.5/4.6/4.7 at $2–$4 in / $6–$12 out). At launch the Grok 4.1 tier tracked Grok 4 pricing (~$3 in / $15 out per 1M) — provisional, marked from memory of launch-era pricing.
- **Architecture:** proprietary; trained with the same large-scale RL infrastructure as Grok 4, plus RL using frontier agentic reasoning models as reward models for non-verifiable signals (xAI announcement).

### Raw benchmarks found

> xAI's Nov 17, 2025 announcement + Vals AI + benchlm.ai rows (updated 2026-10-09).

Agent / tool use:

- SWE-bench Verified: **76.3%** (xAI model card, Nov 17 2025, as widely reported; Thinking mode)
- ResearchClawBench: **13.5%** (leaderboard via benchlm.ai — fills the previously-missing agentic row; weak)
- Hallucination rate (production info-seeking, with web search tools): **significantly reduced** vs prior Grok (xAI announcement; chart is image-only, no numeric value)
- FActScore (500 biography questions, lower-error better): **improved** vs prior Grok (xAI announcement; chart image-only)
- Terminal-Bench / Tau2-Bench / MCP-Atlas / GDPval-AA / Claw-Eval: no verified public score found
- Live preference: **preferred 64.78%** vs previous production Grok in blind pairwise evals on live traffic (xAI announcement)

Reasoning / knowledge:

- LMArena Text Arena: **#1 overall** — Grok 4.1 Thinking (`quasarflux`) at **1483 Elo**, +31 over the highest non-xAI model; non-reasoning mode (`tensor`) **#2 at 1465 Elo**, surpassing every other model's full-reasoning configuration (xAI announcement)
- GPQA Diamond: **85.6%** (xAI model card chart, as widely reported)
- AIME 2025: **97.2%** (xAI model card chart, as widely reported)
- HLE: no verified public score found in fetched sources
- EQ-Bench3 (emotional intelligence, judge Claude Sonnet 3.7): top normalized Elo (xAI announcement; exact value image-only)
- Creative Writing v3 (32 prompts × 3 iterations): top normalized Elo (xAI announcement; exact value image-only)

Coding:

- SWE-bench Verified: **76.3%** (see above)
- LiveCodeBench / SciCode / SWE-bench Pro: no verified public score found
- Related: sibling model Grok 4.1 Fast (Reasoning) scores 60/34/7/0% by difficulty band on Vals AI's bash-only SWE-bench Verified harness — listed for context, not attributed to Grok 4.1 itself.

Long context:

- No long-context retrieval reported — window spec only (256K/1M conflict above); no MRCR/RULER/GraphWalks value found.

Multimodal / vision:

- No measured vision benchmark found (text + image input, no image count limit)

### Normalized scores (1–100)

- **Tool use: 82/100.** SWE-bench Verified 76.3% and improved tool-assisted factuality; the filled ResearchClawBench 13.5% is a weak data point; capped by absent Terminal-Bench/Tau2 scores and an LMArena- rather than agent-focused release.
- **Reasoning: 88/100.** LMArena #1 at 1483 Elo (thinking), AIME 2025 97.2%, GPQA Diamond 85.6%; capped by unverified HLE and the 2026 frontier field having moved on.
- **Context window: 72/100.** Conflicting 256K vs 1M readings unresolved (xAI's current docs list no entry); scored conservatively on the lower reading with no reported long-context retrieval scores.
- **Multimodal: 55/100.** Text + image input with no image count limit; text out; no audio/video input or generation.
- **Coding: 83/100.** SWE-bench Verified 76.3% is strong but behind Claude Opus 4.5's 80.9%; no LiveCodeBench or SciCode scores found.
- **Cost efficiency: 55/100.** Launch-era ~$3/$15 per 1M tokens (provisional) — mid-tier frontier pricing, cheap per LMArena point but superseded pricing no longer verifiable.
- **Overall Score: 76/100.** Mean of the five quality dims (82 + 88 + 72 + 55 + 83) / 5 = 76.0. Best fit: conversational and creative work at frontier reasoning quality, plus solid everyday coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai table updated 2026-10-09, xAI Nov 17 2025 announcement, Vals AI leaderboard — official plus independent sources); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills ResearchClawBench 13.5%; documents the 256K-vs-1M context-window conflict (benchlm 1M vs the docs-tier assumption; xAI's current docs list no grok-4.1 entry) — scores unchanged, conflict recorded.
- Future sources: add a new file next to this one, e.g. `Grok_4.2.md`, using the same headings.
