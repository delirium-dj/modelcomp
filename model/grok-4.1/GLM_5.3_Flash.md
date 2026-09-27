# Grok 4.1 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's frontier model focused on real-world usability — creative, emotional, and collaborative interactions — while retaining Grok 4's reasoning. Ships in Thinking (code name `quasarflux`) and non-reasoning (`tensor`) modes.
- **Provider / access:** grok.com, X, iOS/Android apps; xAI API (`grok-4.1` / `grok-4.1-<date>` aliases per xAI docs model-alias convention). Chat Completions and Responses API; note Grok 4.20+ drops `logprobs` support.
- **Release / knowledge:** 2025-11-17 release (after a silent rollout Nov 1–14, 2025); knowledge cutoff not stated in fetched sources (xAI's current docs give Grok 4.7 a May 2026 cutoff).
- **IDs:** `xai/grok-4.1` (Thinking and non-reasoning modes; no Free ID exists on Zen)
- **Context window:** 256K total tokens (same generation tier as Grok 4; current xAI docs list 500K only from grok-4.5 onward — say how verified: xAI docs pricing table tiers).
- **Modalities:** text + image input (20 MiB max image, jpg/png); text output; reasoning yes (Thinking mode); tool calls yes (server-side Web Search / X Search for realtime data); JSON mode supported.
- **Pricing (as of 2026-09-27):** no longer listed on xAI's current docs (superseded by grok-4.5/4.6/4.7 at $2–$4 in / $6–$12 out). At launch the Grok 4.1 tier tracked Grok 4 pricing (~$3 in / $15 out per 1M) — provisional, marked from memory of launch-era pricing.
- **Architecture:** proprietary; trained with the same large-scale RL infrastructure as Grok 4, plus RL using frontier agentic reasoning models as reward models for non-verifiable signals (xAI announcement).

### Raw benchmarks found

> Numbers below come from xAI's Nov 17, 2025 announcement (fetched 2026-09-27), the Vals AI SWE-bench Verified leaderboard (updated 9/1/2026, bash-only mini-swe-agent harness), and widely reported xAI model-card figures.

Agent / tool use:

- SWE-bench Verified: **76.3%** (xAI model card, Nov 17 2025, as widely reported; Thinking mode)
- Hallucination rate (production info-seeking, with web search tools): **significantly reduced** vs prior Grok (xAI announcement; chart is image-only, no numeric value)
- FActScore (500 biography questions, lower-error better): **improved** vs prior Grok (xAI announcement; chart image-only)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- Live preference: **preferred 64.78%** vs previous production Grok in blind pairwise evals on live traffic (xAI announcement)

Reasoning / knowledge:

- LMArena Text Arena: **#1 overall** — Grok 4.1 Thinking (`quasarflux`) at **1483 Elo**, +31 over the highest non-xAI model; non-reasoning mode (`tensor`) **#2 at 1465 Elo**, surpassing every other model's full-reasoning configuration (xAI announcement, fetched 2026-09-27)
- GPQA Diamond: **85.6%** (xAI model card chart, as widely reported)
- AIME 2025: **97.2%** (xAI model card chart, as widely reported)
- HLE: no verified public score found in fetched sources
- EQ-Bench3 (emotional intelligence, judge Claude Sonnet 3.7): top normalized Elo (xAI announcement; exact value image-only)
- Creative Writing v3 (32 prompts × 3 iterations): top normalized Elo (xAI announcement; exact value image-only)

Coding:

- SWE-bench Verified: **76.3%** (see above)
- LiveCodeBench: no verified public score found
- Related: sibling model Grok 4.1 Fast (Reasoning) scores 60/34/7/0% by difficulty band on Vals AI's bash-only SWE-bench Verified harness (updated 9/1/2026) — listed for context, not attributed to Grok 4.1 itself.

Long context:

- "no long-context retrieval reported" — 256K window spec only; no MRCR/RULER/GraphWalks value found.

### Normalized scores (1–100)

- **Tool use: 82/100.** SWE-bench Verified 76.3% and improved tool-assisted factuality; capped by absent Terminal-Bench/Tau2 scores and an LMArena- rather than agent-focused release.
- **Reasoning: 88/100.** LMArena #1 at 1483 Elo (thinking), AIME 2025 97.2%, GPQA Diamond 85.6%; capped by unverified HLE and the 2026 frontier field having moved on.
- **Context window: 72/100.** 256K tokens in the Grok 4 tier; capped versus 500K/1M peers (grok-4.5+, grok-4.3) and no reported long-context retrieval scores.
- **Multimodal: 55/100.** Text + image input with no image count limit; text out; no audio/video input or generation.
- **Coding: 83/100.** SWE-bench Verified 76.3% is strong but behind Claude Opus 4.5's 80.9%; no LiveCodeBench or SciCode scores found.
- **Cost efficiency: 55/100.** Launch-era ~$3/$15 per 1M tokens (provisional) — mid-tier frontier pricing, cheap per LMArena point but superseded pricing no longer verifiable.
- **Overall Score: 76/100.** Mean of the five quality dims (82+88+72+55+83)/5 = 76.0. Best fit: conversational and creative work at frontier reasoning quality, plus solid everyday coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-27
- Method: public internet research (xAI announcement + Vals AI leaderboard, fetched 2026-09-27; model-card figures as widely reported); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
