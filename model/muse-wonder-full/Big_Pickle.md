# Muse Wonder Full — findings by Big Pickle

- Source: Meta (`muse-wonder-full-1.0`, Muse Code subscription only)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's frontier, subscription-only agentic model (October 2026), built for long-horizon coding and computer use; it is the higher-capability sibling of Muse Wonder (`muse-wonder-1.0`) and shares the same 1M-token family, but ships only inside Muse Code — no public API, no per-token price, closed weights.
- **Provider / access:** Meta, **Muse Code only** — Power Usage ($50/mo) and Maximum Usage ($200/mo) plans; not on Meta Model API, no third-party gateway, no SDK route. Muse Code exposes Standard and Contributor modes (Contributor trades content for extra usage and is opt-in, on by default for subscribers).
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not stated in the model card.
- **IDs:** `muse-wonder-full-1.0` (Muse Code subscription identifier); no Free ID and no pay-as-you-go API id exists.
- **Context window:** 1,048,576 tokens (1M) at inference per Meta's model card; max output not published for Full (the API sibling is capped at 131,072 output tokens, so Full's output cap is unverified).
- **Modalities:** Text, image, video, audio in; text out. Reasoning effort levels up to `max` (Full rows reported at `max`; SWE-Marathon run at `xhigh`); tool calling and parallel sub-agent delegation supported.
- **Pricing (as of 2026-10-30):** No per-token price. Bundled in Muse Code subscriptions: Power Usage $50/month (20× Everyday usage), Maximum Usage $200/month (80× Everyday usage), shared five-hour and weekly resets. Per-token comparisons must use the API sibling Muse Wonder at $4.00 in / $20.00 out / $0.20 cached per 1M.
- **Architecture:** Proprietary, closed weights; Meta describes it as built on a "larger, stronger base model" than Muse Spark 1.3 (parameter counts and MoE shape undisclosed).

### Raw benchmarks found

> Meta's launch table mixes its own harness rows with third-party rows and states that competitor runs are "best-effort"; Artificial Analysis independently indexed both Muse models. Where the two disagree the independent number is listed first and the vendor number flagged.

Agent / tool use:

- Personal Superintelligence Index (Meta internal composite of 7 evals): **59.1** (Meta model card) — internal, unpublished harness
- Harvey LAB-AA (legal agent work): **13.1** vs Claude Opus 5.5 **4.2** (Meta card, source Artificial Analysis) — roughly 3× the field
- AutomationBench-AA: **71%** (Artificial Analysis article) vs **62.3** on Meta's own table row — version/harness mismatch, unresolved
- GDPval-AA: **1857 Elo, #2** behind Claude Opus 5.5 (1866) and ahead of Claude Sonnet 5.5 (1838) (AA v2.1)
- AA-Briefcase: **1729 Elo, #3** (AA)
- JobBench: **75.3%** measured aggregate (benchgap, 2026-10-29); Meta's card row reports a lower-tier figure for a different JobBench setup — treat as provisional
- OSWorld 2.1 (computer use): **78.4% partial reward / 39.4% strict binary** (Meta card, common internal framework)
- MemoryBench (Meta internal, 64K–100K multi-turn recall): **85.5%** vs Claude Opus 5.5 **81.5%** (Meta card; independent audit of the item count was inconclusive)
- Terminal-Bench 4.0-AA: **57.1%** (AA; Claude Opus 5.5 59.6%, Gemini 4 Argon 57%, Muse Wonder 52.0%)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for the exact Muse Wonder Full ID (benchgap lists a 100% MCP Atlas *estimate* and 64.6% SWE-Atlas Codebase QnA estimate — both modeled, not measured)

Reasoning / knowledge:

- GPQA Diamond: **95.7%** (benchgap estimate ±1.0 pp, medium confidence); AA-GPQA Diamond **96.1%** estimate — vendor did not publish a measured GPQA row
- HLE: **53.6%** measured (benchgap / AA-HLE); HLE w/o tools 55.3% and w/ tools 64.9% are estimates
- LCR / MLCR: **AA-LCR 83.7%** measured (benchgap)
- CritPt: **33% — #1** on the leaderboard (AA; nearest rivals 31–32%)
- Artificial Analysis Intelligence Index (v4.3): **56** (independent, max effort) vs **59.0** quoted on Meta's own index row — a 3-point source conflict neither side has explained
- Omniscience Accuracy / Hallucination Rate: **41.0% accuracy** measured (benchgap) / **23%** hallucination (AA) — Meta's card frames the same eval as a knowledge index of 30 vs Opus 46
- SciCode / AA-SciCode: **62.6%** measured, **#3** on the leaderboard

Coding:

- SWE-bench Verified / SWE-Pro: **96.8% / 78.9%** — both benchgap *estimates* (±4.6 / ±6.6 pp); no measured vendor row
- LiveCodeBench: **100.0%** benchgap estimate — treated as an artifact, not evidence
- DeepSWE 1.1: **79.0%** (Datacurve third-party run) vs Claude Opus 5.5 74.2% — the strongest replicated-looking coding lead
- SWE-Marathon: **57.5%** at `xhigh` (Abundant AI) vs Opus 5.5 46.3% — Meta itself says this row is *not* a common-harness comparison (rivals used Codex / Claude Code)
- ProgramBench (controlled mini-swe-agent harness): **59.0%** vs Opus 5.5 **70.5%** — Meta loses on the one fully controlled coding row
- Vibe Code Bench / Coding Index: **AA Coding Agents Index 68** (tied with Claude Code + Sonnet 5.5 at 68, ahead of Opus 5.5 at 66)

Long context:

- AA-LCR: **83.7%** measured; GraphWalks BFS 256K–1M **72.0%** (estimate, low confidence); MRCRv2 85.9% (estimate). No vendor RULER/MRCR row for the full 1M window.

### Normalized scores (1–100)

- **Tool use: 95/100.** #2 on GDPval-AA (1857 Elo), #3 on AA-Briefcase, 71% AutomationBench-AA and 78.4% partial OSWorld put it in the top band for agentic work; capped by a weak ProgramBench (59.0) and an unresolved AutomationBench version conflict.
- **Reasoning: 93/100.** AA Intelligence Index 56 is genuine frontier territory (behind only Opus 5.5 at 58) and CritPt #1 / GDP.pdf #1 are real leads, but closed-book knowledge is the anchor — 41% Omniscience accuracy / knowledge index 30 vs Opus 46 caps it well below the leaders.
- **Context window: 93/100.** 1,048,576-token window with 83.7% AA-LCR measured retrieval; no vendor-published MRCR/RULER curve for the full window and no published max-output cap for Full keep it off the top tier.
- **Multimodal: 88/100.** Text, image, video and audio input (PDF documented for the API sibling, not for Full) with text-only output; Meta's own card lists visual/spatial reasoning — especially 3D — as a known limitation, so no image/audio generation credit.
- **Coding: 95/100.** DeepSWE 79.0% (best measured), SWE-Marathon 57.5% and AA Coding Agents Index 68 are frontier-grade, but ProgramBench 59.0 vs Opus 70.5 and a disputed SWE-Marathon harness keep it from a 97+.
- **Cost efficiency: 62/100.** No per-token price and no API — value is a flat $50–$200/month subscription that is excellent for a heavy individual coder and impossible to resell; the $200 Maximum tier is the only route to the model and there is no metered option.
- **Overall Score: 92.8/100.** Mean of the five quality dims (95 + 93 + 93 + 88 + 95 = 464 / 5); best fit is long-horizon agentic coding inside Muse Code, with retrieval grounding strongly recommended for factual work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-30
- Method: public internet research across Meta's model page, model card and launch blog, the Artificial Analysis launch article and leaderboards, benchgap's measured/estimated score table, llm-stats head-to-head, plus independent commentary (thesatyajit, apidog, brainbyteslab, thestochasticparrot, canberk.me) used to cross-check conflicts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder — Meta model page (pricing, plans, variants)](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder and Muse Wonder Full model card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Meta research blog — Muse Wonder: A Frontier Model For Personal & Professional AI Agents](https://research.meta.ai/blog/muse-wonder)
  - [Meta developer blog — Put your ideas to work with Muse Wonder and Muse Wonder Full](https://dev.meta.ai/resources/blog/build-with-muse-wonder)
  - [Artificial Analysis — Muse Wonder and Muse Wonder Full: a material jump in intelligence](https://artificialanalysis.ai/articles/muse-wonder)
  - [benchgap — Muse Wonder Full benchmark scores (measured vs estimated)](https://benchgap.net/model/muse-wonder-full)
  - [llm-stats — Muse Wonder vs Muse Wonder Full](https://llm-stats.com/models/compare/muse-wonder-vs-muse-wonder-full)
  - [The Satyajit — Muse Wonder: what the two points behind Opus 5.5 are made of](https://ai.thesatyajit.com/articles/muse-wonder)
  - [Apidog — Muse Wonder vs Muse Wonder Full (access, index, pricing)](https://apidog.com/blog/muse-wonder-vs-muse-wonder-full/)
  - [Brain Bytes Lab — Muse Wonder's Two Headline Features Are Measured Only by Meta](https://brainbyteslab.org/articles/muse-wonder-meta-frontier-claims/)

---
