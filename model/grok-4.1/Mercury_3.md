# Grok 4.1 — findings by Mercury 3

- Source: xAI (Grok 4.1)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 model — a conversational/reliability refinement of Grok 4 that vaulted to #1 on LMArena (1483 Elo, Thinking) and cut hallucinations ~65%. Superseded by Grok 4.2/4.3 but still available via API.
- **Provider / access:** Grok app (free with daily limits), SuperGrok ($30/mo), X Premium+ ($40/mo); API `grok-4.1` (also 2M-context `grok-4.1-fast` variant at cheaper rate).
- **Release / knowledge:** Released November 2025 (quiet rollout 1–14 Nov; official launch 2025-11-17); knowledge cutoff not published.
- **IDs:** `xai/grok-4.1`.
- **Context window:** 256K tokens (2M on Grok 4.1 Fast).
- **Modalities:** multimodal input (text/image); text output; Thinking and Non-Thinking modes; real-time X data integration (historical).
- **Pricing (as of 2025-11):** free tier with limits in app; API followed Grok 4's tier (~$3/$15 per 1M standard; Fast variant cheaper).
- **Architecture:** proprietary (reasoning base carried over from Grok 4).

### Raw benchmarks found

Agent / tool use:

- No strong agentic/terminal benchmark data captured for this release; tool use supported via API (unverified scores)

Reasoning / knowledge:

- LMArena Elo: **1483 (#1, Thinking)** / 1465 (#2, Non-Thinking) — ~31-point lead over third place at Nov 2025 snapshot
- Hallucination rate: **~4.2%** — down ~65% from Grok 4 (~12.1%)
- Blind user preference: responses preferred ~64.8% of the time (vendor-reported)
- Underlying reasoning benchmarks broadly inherited from Grok 4 (not a new reasoning ceiling)

Coding:

- Carried over from Grok 4's base; no new coding benchmarks published for 4.1 (arena win driven by conversational quality)

Long context:

- 256K standard; 2M on Fast variant; no verified retrieval benchmark captured

Multimodal:

- Multimodal input with text output (image support); no video input (added later in Grok 4.3)

### Normalized scores (1–100)

- **Tool use: 74/100.** No verified agentic benchmark evidence for this release; API tool use exists but unquantified.
- **Reasoning: 80/100.** LMArena #1 at release (human preference) plus a large hallucination cut (4.2%) — strong for its era; reasoning ceiling inherited from Grok 4 and since overtaken.
- **Context window: 78/100.** 256K standard / 2M Fast variant — modest today.
- **Multimodal: 72/100.** Multimodal input with text output; no native video input at this version.
- **Coding: 76/100.** Inherited Grok 4 coding; no new coding benchmarks published for 4.1.
- **Cost efficiency: 58/100.** Free tier with daily limits; subscription tiers $30–40/mo; API ~$3/$15 (Fast cheaper) — mid-range.
- **Overall Score: 76/100.** Mean of the five non-cost dims (74+80+78+72+76)/5 = 76.0. Best-fit: a historical leader on human preference with strong reliability gains; superseded — prefer Grok 4.3+ for new work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI: Grok 4.1 announcement](https://x.ai/news/grok-4-1)
  - [xAI docs: Grok models & pricing](https://docs.x.ai/developers/models)
  - [The AI Rankings: Grok 4.1 review](https://theairankings.com/xai/grok-4-1/)
  - [llm-stats: Grok-4.1](https://llm-stats.com/models/grok-4.1-2025-11-17)
  - [NextBigFuture: xAI releases Grok 4.1, tops LMArena](https://www.nextbigfuture.com/2025/11/xai-releases-grok-4-1-and-it-tops-the-lmarena-leaderboard.html)
  - [AI Release Tracker: Grok 4.1](https://aireleasetracker.com/model/xai/grok-4.1)
  - [CloudPrice: Grok 4.1](https://cloudprice.net/models/xai-grok-4-1)
- Future sources: add a new file next to this one using the same headings.
