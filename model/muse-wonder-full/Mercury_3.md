# Muse Wonder Full — findings by Mercury 3

- Source: Meta/Muse Wonder Full
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (Muse Wonder Full 1.0)
- **Short description:** Meta's flagship Muse Wonder tier (released 2026-10-12): the subscription-only, max-reasoning variant of the Muse Wonder product family (the API SKU is the separate `muse-wonder-1.0`). Strong frontier knowledge-work and agentic performance (GDPval 1857, DeepSWE 79%) with low hallucination rate.
- **Provider / access:** Subscription-only (Meta AI Ultra-class access); no public API pricing listed — models.dev shows 0 providers for `muse-wonder-full`; AA has no price row.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not published.
- **IDs:** `muse-wonder-full-1.0` (Meta subscription route; the API SKU `muse-wonder-1.0` is the separate model folder).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking, max effort); tool calls.
- **Pricing (as of 2026-11-03):** no verified public API price (subscription-only).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1857 Elo** (AA leaderboard; normalized 67.9%); AA-Briefcase Elo: **1729**
- JobBench: **75.3%**; OSWorld 2.1: **78.4%**; Finance Agent v2: **59.1%**; AA AutomationBench: **45.4%**; AA Terminal-Bench 4.0: **57.1%** (Meta model card/AA)
- Harvey LAB-AA v1.1: 13.1% (all-pass variant); MazeBench ASCII: 17%; GDP.pdf: 32.6%

Reasoning / knowledge:

- HLE: **53.6%** (AA); Artificial Analysis Intelligence Index: **50**, #17 of 94 (AA); CritPt: **32.9%**; AA-LCR: **83.7%**; MLCR-AA: 22.2%
- HealthBench Professional: **62.3%**; AA-Omniscience: accuracy 41.0%, hallucination rate **17.6%** (excellent — lowest among all researched models)
- No GPQA/ARC-AGI figure verified in sources reviewed

Coding:

- DeepSWE: **79.0%**; sweMarathon: **57.5%**; ProgramBench: **59.0%** (Meta model card); AA-SciCode: **62.6%**; Bug Hunt: 42.0 fixes

Long context:

- 1M window; AA-LCR 83.7%; MLCR-AA 22.2%.

Multimodal:

- text/image/speech/video in; no verified video/audio benchmark rows found; text-only output.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval 1857, JobBench 75.3%, OSWorld 2.1 78.4%, TB4.0-AA 57.1% — frontier agentic; capped by Harvey LAB all-pass 13.1% and MazeBench 17%.
- **Reasoning: 91/100.** II 50 (#17/94), HLE 53.6%, CritPt 32.9%, LCR 83.7%; hallucination rate 17.6% is best-in-class. No GPQA/ARC published.
- **Context window: 92/100.** 1M with strong LCR 83.7%; no ≥98%-retrieval figure at depth.
- **Multimodal: 91/100.** Full omni input (text/image/speech/video); text-only output caps it.
- **Coding: 90/100.** DeepSWE 79% and sweMarathon 57.5% are front-tier; capped by ProgramBench 59% and no FrontierCode figure.
- **Cost efficiency: 45/100.** Subscription-only with no verified public price — scored low on availability/transparency, not raw capability.
- **Overall Score: 91/100.** Mean of (91+91+92+91+90)/5 = 91.0 → 91. A top-tier Meta flagship; the subscription gate is the main barrier.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Meta Muse Wonder model card via BenchLM, Artificial Analysis model page/leaderboards, models.dev); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: subscription-only Full variant vs the API SKU `muse-wonder-1.0` (separate folder); sparse GPQA/ARC coverage flagged.
- Reference URLs:
  - [Muse Wonder model card (Meta, 2026-10-12)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder Full — Artificial Analysis model page (II 50 #17/94, 1M, omni input)](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Muse Wonder Full — BenchLM benchmark aggregation](https://benchlm.ai/models/muse-wonder-full)
  - [Muse Wonder Full — models.dev registry (0 providers)](https://models.dev/models/meta/muse-wonder-full)
