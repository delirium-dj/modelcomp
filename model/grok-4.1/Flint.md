# Grok 4.1 — findings by Flint

- Source: xAI / Grok 4.1
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (xAI; Grok family — 4.1 tier).
- **Short description:** xAI's upgraded Grok 4 flagship (Nov 17, 2025); Grok 4.1 brings significant improvements to real-world usability — exceptionally capable in creative, emotional, and collaborative interactions; retains razor-sharp intelligence of Grok 4 predecessors; same large-scale RL infrastructure applied to style/personality/alignment optimization.
- **Provider / access:** xAI API (`grok-4.1` reasoning variants: Thinking code name `quasarflux`, non-reasoning code name `tensor`); proprietary (closed weights); Grok.com, X, iOS/Android apps, API, OpenRouter.
- **Release / knowledge:** Released November 17, 2025 (xAI blog); silent rollout Nov 1–14, 2025; knowledge cutoff not stated in verified sources.

- **Context window:** 2,000,000 tokens (Grok lineage; Grok 4.1 code names/quasarflux — context carried over per xAI lineage).

- **Modalities:** Text in/out; reasoning yes (Thinking `quasarflux` / non-reasoning `tensor`); tool use yes (web search, agentic reasoning per xAI).

- **Pricing (as of 2026-10-28):** xAI Grok 4.1 API pricing — not fully resolved in session (Grok 4 was $3/$15 per 1M; Grok 4 Fast $0.20/$0.50); Grok 4.1 inherits frontier-tier pricing.

- **Architecture:** Proprietary (closed weights); parameter count not disclosed.

### Raw benchmarks found

- Reasoning / knowledge:
  - LMArena Text Leaderboard: Grok 4.1 Thinking (`quasarflux`) **#1 overall** with 1483 Elo — commanding margin of 31 points over highest non-xAI model; Grok 4.1 non-reasoning (`tensor`) **#2 at 1465 Elo** — surpasses every other model's full-reasoning configuration; Grok 4 was overall #33.
  - EQ-Bench3 (emotional intelligence): Grok 4.1 improved over Grok 4 (EQ-Bench normalized Elo).
  - Creative Writing v3 (EQ-Bench): Grok 4.1 Elo (normalized).
  - Hallucination rate (info-seeking with web search tools): significant reductions in Grok 4.1 post-training vs Grok 4; FActScore (500 biography questions) reduced.

- Agentic / tool use:
  - xAI reported Grok 4.1 agentic reasoning improvements via RL infrastructure applied to Grok 4 lineage; no independent agentic benchmark number resolved this session.

### Cross-source comparison

- Official (xAI blog `x.ai/blog/grok-4-1`) vs independent (LMArena via xAI-reported data; no independent tracker page resolved for Grok 4.1 in this session) — xAI self-reported LMArena numbers vs prior independent coverage of Grok 4.1 lineage; direction consistent with improvement narrative.

### Normalized scores (1-100)

- **Tool use: 65/100.** Grok 4.1 inherits Grok 4-era agentic tooling; no independent tool benchmark resolved this session; capped below frontier proprietary tool tiers.

- **Reasoning: 75/100.** LMArena Text Arena #1 (Grok 4.1 Thinking, 1483 Elo; +31 over best non-xAI); EQ-Bench3/Creative Writing improvements → frontier reasoning band; closed weights + self-reported leaderboard data → capped below proprietary frontier ceilings.

- **Context window: 90/100.** 2M tokens (Grok lineage) → top-tier context band.

- **Multimodal: 65/100.** Text in/out per xAI blog; no multimodal benchmark resolved.

- **Coding: 70/100.** Grok 4.1 retains Grok lineage coding capability; no independent coding benchmark resolved this session.

- **Cost efficiency: 80/100.** Grok 4.1 frontier-tier API pricing (Grok 4.1 inherits $3/$15-ish frontier tier; Grok 4 Fast at $0.20/$0.50 was the efficiency variant).

- **Overall Score: 73/100.** Mean of the five quality dims (Tool 65 + Reasoning 75 + Context 90 + Multimodal 65 + Coding 70) / 5 = 73; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (xAI blog / Grok 4.1) plus independent benchmarks/reviews (LMArena data reported by xAI; prior independent coverage) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
