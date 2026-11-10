# Muse Wonder Full — findings by Inkling 2 Small

- Source: Meta (`muse-wonder-full`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' most capable Muse Wonder series model for personal and professional agentic tasks, coding, and computer use — released 2026-10-12 alongside Muse Wonder. Available only for Muse Code subscribers (subscription-only; distinct from the API-available Muse Wonder). Not the same as the base Muse Wonder.
- **Provider / access:** Muse Code (subscribers) and Meta Model API for the Muse Wonder family; Muse Wonder Full is subscription-only (no public per-token API price at research time). Chat Completions-style access.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not publicly stated.
- **IDs:** `muse-wonder-full-1.0` (Meta; no Free API ID)
- **Context window:** 1,000,000 tokens (Artificial Analysis + BenchLM; max output undisclosed).
- **Modalities:** text, image, speech, and video in; text out; reasoning (thinking) yes; tool calls yes (agentic); Active Memory / Active Focus agent framework.
- **Pricing (as of 2026-11-10):** No public per-token price — Muse Code subscription ("Power Usage" tier) only; Artificial Analysis lists no public API pricing. Subscription pricing details not verified publicly.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1857** (Artificial Analysis gdpval-aa leaderboard); normalized **67.9%** per AA model page
- AA-Briefcase Elo: **1729** (Artificial Analysis aa-briefcase leaderboard)
- AA Terminal-Bench 4.0: **57.1%** (Meta Muse Wonder model card, 2026-10-12)
- OSWorld 2.1: **78.4%** (Meta model card)
- JobBench: **75.3%** (Meta model card)
- Finance Agent v2: **59.1%** (Meta model card)
- Harvey LAB-AA v1.1: **13.1%** (Meta model card)
- AA AutomationBench: **45.4%** (Meta model card)
- GDP.pdf: **32.6%** (Artificial Analysis gdp-pdf leaderboard)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50** (#22/118 per AA; BenchLM 69.11/100 overall, #19 of 1020)
- AA-LCR: **83.7%** (Artificial Analysis LCR leaderboard)
- CritPt: **32.9%** (Artificial Analysis critpt leaderboard)
- MLCR-AA: **22.2%** (Artificial Analysis mlcr-aa leaderboard)
- AA-HLE: **53.6%** (Artificial Analysis HLE leaderboard)
- AA-Omniscience Index: **30.6%**; Accuracy **41.0%**; Hallucination Rate **17.6%** (Artificial Analysis omniscience)
- HealthBench Professional: **62.3%** (Meta model card)

Coding:

- DeepSWE: **79.0%** (Meta model card)
- ProgramBench: **59.0%** (Meta model card)
- sweMarathon: **57.5%** (Meta model card)
- AA-SciCode: **62.6%** (Artificial Analysis scicode leaderboard)
- Bug Hunt Bench: **42.0 fixes** (Bug Hunt Bench public data)

Long context:

- AA-LCR: **83.7%** at 1M context — strong long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval-AA 1857, AA-Briefcase 1729, OSWorld 78.4%, JobBench 75.3% — elite agentic tool use; capped by AutomationBench 45.4% and Harvey LAB 13.1%.
- **Reasoning: 78/100.** AA Intelligence Index 50 (well above the ~31 median), AA-LCR 83.7%, HLE 53.6%; capped by CritPt 32.9%, MLCR-AA 22.2%, and weak Omniscience (30.6 index / 17.6% hallucination).
- **Context window: 94/100.** 1M tokens with verified long-context performance (AA-LCR 83.7%); max output undisclosed.
- **Multimodal: 85/100.** Text/image/speech/video in, text out; no audio/video generation; visual grounded scores not separately published.
- **Coding: 78/100.** DeepSWE 79.0%, AA-SciCode 62.6%, ProgramBench 59.0%, sweMarathon 57.5%, Terminal-Bench 4.0 57.1% — frontier coding trained for long-running tasks; Bug Hunt 42 fixes and Harvey LAB gap cap the score.
- **Cost efficiency: 30/100.** Subscription-only with no public per-token price; no Free API ID — treat as premium-priced; exact cost unverifiable.
- **Overall Score: 84/100.** (86 + 78 + 94 + 85 + 78) / 5 = 84.2 → 84. Best fit: subscription Muse Code users wanting top-tier agentic/coding assistance; weak fit where hallucination resistance is safety-critical.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Meta launch post, BenchLM, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder: A Frontier Model For Personal & Professional AI Agents — Meta Research](https://research.meta.ai/blog/muse-wonder)
  - [Muse Wonder model card (PDF) — Meta Research](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder Full — BenchLM](https://benchlm.ai/models/muse-wonder-full)
  - [Muse Wonder Full (Max) — Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder-full)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
