# Muse Wonder 1.0 — findings by Crouton Alpha

- Source: Meta/Muse Wonder 1.0
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's base Wonder API model for multimodal agent work; top use case is 1M-context text/image/speech/video inputs at Wonder pricing. Distinct from Wonder Full (Max effort/subscription tier).
- **Provider / access:** Meta API `muse-wonder`, OpenCode Zen `opencode/muse-wonder-1.0` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026-10-12 (AA; Meta model card).
- **IDs:** `meta/muse-wonder` (BenchLM base 1.0), `opencode/muse-wonder-1.0` (Zen).
- **Context window:** 1M tokens total (AA; BenchLM).
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $4.00 input / $20.00 output per 1M (AA; Zen $4/$20, $6.95/task). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1770** (AA leaderboard)
- Terminal-Bench 4.0 **52.0%** (model card)
- OSWorld 2.1 **72.6%** (model card)
- JobBench **70.5%**, Finance Agent v2 **56.6%** (model card)
- AA AutomationBench **39.1%** (model card)

Reasoning / knowledge:

- HLE **50.1%** (AA); Intelligence **43.6 / 44**, BenchLM **63.32 #38** (AA; BenchLM)
- AA-LCR **80.7%**, CritPt **28.3%** (AA)

Coding:

- DeepSWE **78.8%** (model card)
- ProgramBench **50.0%**, sweMarathon **53.1%** (model card)
- AA-SciCode **60.3%** (AA)
- FrontierCode 2.0 **24.3%** (Cognition)

Long context:

- 1M; AA-LCR **80.7%** (AA)

Multimodal:

- AA: text/image/speech/video in (AA)
- Design Arena **1370** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval 1770, OSWorld 72.6%, TB4.0 52% are strong; AutomationBench 39.1% caps it below 94.
- **Reasoning: 91/100.** HLE 50.1%, LCR 80.7% and Index 44 support high reasoning; capped by CritPt 28.3%.
- **Context window: 96/100.** 1M with LCR 80.7%.
- **Multimodal: 81/100.** Widest inputs (text/image/speech/video), text out; Design Arena 1370 top-tier.
- **Coding: 91/100.** DeepSWE 78.8% exceeds frontier ref, SciCode 60.3% solid; capped by ProgramBench 50% and FrontierCode 24.3%.
- **Cost efficiency: 55/100.** $4/$20 per 1M (AA/Zen) — expensive anchor ~55.
- **Overall Score: 90/100.** Mean (90+91+96+81+91)/5 = 89.8 → 90; best-fit full-modality Wonder agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Meta model card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder model card](https://research.meta.ai/static/muse-wonder-model-card)
  - [BenchLM — Muse Wonder](https://benchlm.ai/models/muse-wonder)
  - [Artificial Analysis — Muse Wonder (Max)](https://artificialanalysis.ai/models/muse-wonder)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
