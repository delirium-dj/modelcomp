# Muse Wonder 1.0 — findings by Inkling 2 Small

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta Superintelligence Labs' Muse Wonder — a frontier agentic model for personal and professional tasks, released 2026-10-12 alongside Muse Wonder Full (the subscription-only tier). The API-available SKU of the Muse Wonder family; distinct from the subscription-only Muse Wonder Full.
- **Provider / access:** Meta Model API (dev.meta.ai), Muse Code, and OpenRouter (`meta/muse-wonder`); Chat Completions-style access.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not publicly stated.
- **IDs:** `muse-wonder-1.0` (Meta Model API); `meta/muse-wonder` (OpenRouter)
- **Context window:** 1,000,000 tokens (Artificial Analysis + BenchLM; max output undisclosed).
- **Modalities:** text, image, speech, and video in; text out; reasoning (thinking) yes; tool calls yes (Active Memory / Active Focus agent framework).
- **Pricing (as of 2026-11-10):** ~$4.00 / 1M input, ~$20.00 / 1M output (per Meta Model API listing, mirrored on OpenRouter as `meta/muse-wonder`); no Free API ID.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1770** (Artificial Analysis gdpval-aa leaderboard); normalized **63.5%** per AA
- AA-Briefcase Elo: **1659** (Artificial Analysis aa-briefcase leaderboard)
- OSWorld 2.1: **72.6%** (Meta model card)
- JobBench: **70.5%** (Meta model card)
- AA Terminal-Bench 4.0: **52.0%** (Meta model card)
- AA AutomationBench: **39.1%** (Meta model card)
- Finance Agent v2: **56.6%** (Meta model card)
- GDP.pdf: **30.6%** (Artificial Analysis gdp-pdf leaderboard)
- CWE-bench v2: **66.1%** (Collinear)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **43.6%** (Artificial Analysis v5.0.1); BenchLM **63/100** (#39/1020)
- AA-LCR: **80.7%** (Artificial Analysis LCR leaderboard)
- AA-HLE: **50.1%** (Artificial Analysis HLE leaderboard)
- CritPt: **28.3%** (Artificial Analysis critpt leaderboard)
- MLCR-AA: **22.2%** (Artificial Analysis mlcr-aa leaderboard)
- AA-Omniscience: Index **25.1**, Accuracy **38.0%**, Hallucination **20.9%** (Artificial Analysis)
- HealthBench Professional: **60.5%** (Meta model card)

Coding:

- DeepSWE: **78.8%** (Meta model card)
- sweMarathon: **53.1%** (Meta model card)
- ProgramBench: **50.0%** (Meta model card)
- AA-SciCode: **60.3%** (Artificial Analysis scicode leaderboard)
- FrontierCode 2.0: **24.3%** (Cognition)
- Bug Hunt Bench: **31.7 fixes**

Long context:

- AA-LCR: **80.7%** at 1M context.

Multimodal:

- Design Arena (website): **1368** (OpenRouter/Design Arena); text/image/speech/video in supported.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA 1770, AA-Briefcase 1659, OSWorld 72.6%, JobBench 70.5% — strong agentic tool use; capped by AutomationBench 39.1% and Harvey LAB 10.0%.
- **Reasoning: 68/100.** AA Index 43.6, HLE 50.1%, AA-LCR 80.7%; capped by CritPt 28.3%, MLCR-AA 22.2%, Omniscience Index 25.1.
- **Context window: 93/100.** 1M tokens, AA-LCR 80.7% — strong long-context reasoning; max output undisclosed.
- **Multimodal: 84/100.** Text/image/speech/video in, text out; Design Arena 1368 for design/website tasks; no audio/video generation.
- **Coding: 72/100.** DeepSWE 78.8%, AA-SciCode 60.3%, sweMarathon 53.1%, Terminal-Bench 4.0 52.0%; capped by FrontierCode 2.0 24.3% and ProgramBench 50%.
- **Cost efficiency: 35/100.** ~$4/$20 per 1M — premium pricing; no free tier.
- **Overall Score: 80/100.** (82 + 68 + 93 + 84 + 72) / 5 = 79.8 → 80. Best fit: Meta Model API users wanting near-Full agentic capability at API pricing; the Full tier remains the subscription power option.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Meta launch post, model card via BenchLM, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder: A Frontier Model For Personal & Professional AI Agents — Meta Research](https://research.meta.ai/blog/muse-wonder)
  - [Muse Wonder model card (PDF) — Meta Research](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder — BenchLM](https://benchlm.ai/models/muse-wonder)
  - [Muse Wonder — Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
