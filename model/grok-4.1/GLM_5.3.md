# Grok 4.1 — findings by GLM 5.3

- Source: xAI (`grok-4.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (Thinking and Non-Thinking modes)
- **Short description:** xAI's November 2025 conversational-flagship refinement of Grok 4 — not a new reasoning base, but a reliability and warmth pass that took #1 on LMArena (1483 Elo) and cut hallucinations ~65%. Superseded by Grok 4.2/4.3 but still served via API. Top use case (historical): everyday conversation and real-time X-data answers.
- **Provider / access:** xAI API (model ID `grok-4.1`); consumer access free with daily limits in the Grok app, higher limits via SuperGrok ($30/month) and X Premium+ ($40/month).
- **Release / knowledge:** 2025-11-17 (quiet rollout 2025-11-01 to 11-14); status: superseded (available via API); knowledge cutoff not disclosed.
- **IDs:** `grok-4.1` (xAI); separate 2M-context `Grok 4.1 Fast` variant for high-volume use.
- **Context window:** 256,000 tokens base (2,000,000 on the Fast variant).
- **Modalities:** text and image input; text output; Thinking / Non-Thinking modes; no native video input (that arrived with Grok 4.3).
- **Pricing (as of 2026-09-25):** API followed Grok 4's tier — from $0.20 per 1M input tokens, with a cheaper 2M-context Fast variant; free consumer tier with daily limits.
- **Architecture:** proprietary; a refinement of Grok 4 (same reasoning base), focused on conversational quality, emotional intelligence, and reliability; parameter count undisclosed.

### Raw benchmarks found

> All figures are xAI-reported via launch coverage (November 2025 snapshot); arena rankings are human-preference measurements that drift over time.

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found for this ID (agentic capability inherited from Grok 4, not re-measured at launch)

Reasoning / knowledge:

- LMArena Elo: **1483 (#1, Thinking)** and **1465 (#2, Non-Thinking)** — ~31-point lead over third place, up from Grok 4's ~#33 (~1409); one of the largest arena ranking jumps recorded
- Hallucination rate: **~4.2%** — down ~65% from Grok 4's ~12.1% (xAI-reported)
- Blind human preference: users preferred Grok 4.1 responses **~64.8%** of the time (launch coverage)
- GPQA Diamond / HLE / LCR / AA Intelligence Index: no verified public score found (reasoning base carried over from Grok 4 rather than re-benchmarked)

Coding:

- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found for this ID; successor Grok 4.2 was billed as adding stronger coding, implying 4.1 inherited Grok 4's coding level

Long context:

- No long-context retrieval reported; 256K base / 2M Fast are capacity specs

### Normalized scores (1–100)

> Superseded model; scores reflect launch-window evidence, with Grok 4 inheritance noted where measured rows are absent.

- **Tool use: 55/100.** No agentic benchmark rows exist for this ID — its tool-use level is inherited from Grok 4 without re-measurement; real-time X-data access was the distinctive capability; mid-band default.
- **Reasoning: 62/100.** Arena #1 (1483 Elo) and a 64.8% blind-preference win rate show top-tier conversational reasoning, and the ~4.2% hallucination rate is excellent honesty; but the reasoning base is carried over from Grok 4 with no GPQA/HLE rows, capping it below the frontier tier.
- **Context window: 72/100.** 256,000 tokens = 200K–500K tier (200K baseline 70, no measured retrieval); the separate 2M Fast variant is noted but scored on the base ID.
- **Multimodal: 65/100.** Text+image in, text out (60–70 band); no native video (added later in Grok 4.3).
- **Coding: 60/100.** No coding rows for this ID and the family narrative positions 4.1 as the conversational step (coding improvements arrived with 4.2); inherited Grok 4-level coding without independent verification.
- **Cost efficiency: 88/100.** ~$0.20/1M input API tier with a cheaper 2M Fast variant plus a free consumer tier with daily limits; superseded status means pricing stability is no longer guaranteed.
- **Overall Score: 63/100.** (55 + 62 + 72 + 65 + 60) / 5 = 62.8 → 63. Best-fit (historical): the November 2025 chat-quality and anti-hallucination champion — still a fine conversational API bargain, but new agentic/coding work should use Grok 4.7 or later.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (launch coverage, LMArena snapshots, pricing aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
