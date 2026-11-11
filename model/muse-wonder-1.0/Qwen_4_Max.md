# Muse Wonder (1.0) — findings by Qwen 4 Max

- Source: Meta/muse-wonder-1.0
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (API ID `muse-wonder-1.0`) — the base Wonder, **distinct from Muse Wonder Full** (`muse-wonder-full-1.0`, subscription-only).
- **Short description:** Meta's frontier agentic model (Oct 12–13, 2026), the API-available sibling of Wonder Full. Built for frontier coding, hours-long autonomous agents (plans, delegates to sub-agents, calls tools in parallel, recovers from errors), advanced computer use (browser/desktop/mobile), and **active memory** (MemoryBench **85.6** — essentially tied with Full's 85.5 and above Opus 5.5's 81.5). Standout long-horizon coding: DeepSWE 1.1 **78.8** and SWE-Marathon **53.1**, both above Fable 5.1/Astra/Opus 5.5 in Meta's table. BenchLM aggregate **63.03/100, #39 of 1020** (36/812 coverage — conservative); a clear step below Wonder Full (69.07) on most agentic/coding metrics.
- **Provider / access:** Meta Model API (OpenAI-SDK-compatible, self-serve), OpenRouter (`meta/muse-wonder`), Google Cloud Marketplace (`muse-wonder-1-0`), Muse Code terminal agent, meta.ai playground. Wonder Full is gated to Muse Code Power ($50/mo) / Maximum ($200/mo) subscriptions; base Wonder is pay-as-you-go.
- **Release / knowledge:** llm-stats and the model card date it **2026-10-12**; marktechpost's launch coverage says **Oct 13** (one-day discrepancy labelled). Knowledge cutoff not stated in the sources read. Effort levels up to **max** (table figures are max-effort).
- **IDs:** `muse-wonder-1.0`; sibling `muse-wonder-full-1.0`. Family: Muse Wonder (Meta). Not to be confused with Muse Spark / Muse Ember / Muse Glimmer lines.
- **Context window:** **1M tokens**; cached input $0.20/M (5% of input). AA-LCR **80.7%**, MLCR-AA **22.2%** (medical multi-hop — weak), MemoryBench **85.6** (active-memory recall — class-leading). No long-context surcharge documented.
- **Modalities:** Text + image input, text output (llm-stats). Advanced computer use gives it browser/desktop/mobile vision-and-action; no video/audio input documented. Design Arena Website **1367** (OpenRouter).
- **Pricing (as of 2026-11-11):** **$4 in / $20 out** per 1M, cached input **$0.20** (Meta Model API; OpenRouter matches). AA cost per Intelligence Index task **$4.52**. Proprietary license (hosted access only; no open weights).
- **Architecture:** Proprietary; not disclosed. Model card: `research.meta.ai/static/muse-wonder-model-card`. "Active memory" + "active focus" carry context/goals across long conversations. Reasoning model.

### Raw benchmarks found

Vendor table (dev.meta.ai, max effort; peers Wonder Full / Fable 5.1 / GPT-6 Astra / Opus 5.5):

- Personal/pro agents: PSI **54.3** (Full 59.1 / Fable 49.9 / Astra 54.5 / Opus 55.2); Harvey LAB-AA **10.0** (13.1 / 6.4 / 8.6 / 4.2); Vals Finance Agent V2 **56.6** (59.1 / 58.9 / 53.5 / 58.6); HealthBench Pro **60.5** (62.3 / 62.1 / 65.3 / 65.6); AutomationBench-AA **39.1** (45.4 / 32.1 / 41.6 / 41.2); GDP.pdf **30.8** (33.2 / 27.6 / 34.2 / 30.6); JobBench **70.5** (75.3 / 73.1 / 66.1 / 75.4)
- Computer use / memory: OSWorld V2.1 **72.6 partial / 34.3 binary** (Full 78.4/39.4; Fable 80.7/43.1; Astra 75.8/34.3; Opus 81.8/–); MemoryBench **85.6** (Full 85.5 / Fable 79.0 / Astra 81.4 / Opus 81.5)
- Coding: TB4.0-AA **52.0** (Full 57.1 / Fable 52.0 / Astra 59.1 / Opus 59.6); DeepSWE 1.1 **78.8** (79.0 / 67.4 / 74.1 / 74.2); SWE-Marathon **53.1** (Full 57.5 xhigh / 45.6 / 42.5 / 46.3); ProgramBench **50.0** (59.0 / 55.5 / 52.5 / 70.5)
- Composite: AA Intelligence Index **52** at launch (Full 56 / Fable 53 / Astra 53 / Opus 58 — v4.3.2-era)

Independent runs (BenchLM Nov 10 profile + AA/Cognition/Cursor/Collinear/Ulam as cited):

- AA: Intelligence Index **43.6** (current Nov 10 snapshot — vs 52 at launch; different index versions, both labelled, never compared); AA-HLE **50.1**; AA-Omniscience net **25.1** (accuracy 38.0, hallucination **20.9%** — notably low); GDPval-AA **1770 Elo / 63.5% normalized**; AA-Briefcase **1659**; GDP.pdf **30.6** (vendor 30.8); MKA 47.5; AA-LCR 80.7; CritPt **28.3**; MLCR-AA 22.2; AA-SciCode 60.3; AutomationBench-AA 39.1; TB4.0-AA 52.0
- Coding: FrontierCode 2.0 **24.3** (Cognition); CursorBench 4.0 **50.4** (Cursor); Bug Hunt **31.7 fixes**; DeepSWE 78.8 / SWE-Marathon 53.1 / ProgramBench 50.0 (model card)
- Other: CWE-bench v2 **66.1** (Collinear); STEMBench **2.68** (Ulam Oct 28 audit); MazeBench **0%** (ASCII, no tools); Design Arena Website 1367 (OpenRouter); HealthBench Pro 60.5; Finance Agent v2 56.6; Harvey LAB-AA v1.1 10.0 (hallucination-gated all-pass)
- BenchLM aggregate **63.03/100, #39 of 1020** (36/812 coverage). Sibling aggregates: Wonder Full 69.07, Spark 1.1 65.44, Spark 1.2 65.35, Spark 59.95, Ember 56.29, Spark Open 51.16, Glimmer 30B 32.62.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1770, Briefcase 1659, OSWorld 2.1 72.6, JobBench 70.5, MemoryBench 85.6 and full computer-use support make it a strong autonomous agent; capped by AutomationBench-AA 39.1, Harvey v1.1 10.0, TB4.0-AA 52.0 and MKA 47.5 — a clear tier below Wonder Full/Opus 5.5 on business workflows.
- **Reasoning: 85/100.** AA-HLE 50.1, CritPt 28.3, PSI 54.3, Vals Finance 56.6 and a low 20.9% hallucination rate (Omniscience net +25.1) are solid; capped by the current AA index 43.6, Omniscience accuracy 38.0, STEMBench 2.68 and no published GPQA/FrontierMath — knowledge breadth trails the frontier.
- **Context window: 93/100.** 1M tokens, 5% cache reads, class-leading MemoryBench 85.6 (active memory) and AA-LCR 80.7; capped by MLCR-AA 22.2 (weak medical multi-hop retrieval) and no documented output ceiling.
- **Multimodal: 77/100.** Text+image input with advanced browser/desktop/mobile computer use (OSWorld 72.6) and Design Arena 1367; capped by the image-only modality ceiling and no published MMMU-Pro/CharXiv/video benchmarks.
- **Coding: 89/100.** DeepSWE 1.1 78.8 (near-SOTA, above Opus/Astra/Fable 5.1), SWE-Marathon 53.1 (ultra-long-horizon, above the peer set), SciCode 60.3, CursorBench 50.4; capped by FrontierCode 2.0 24.3 (Cognition), ProgramBench 50.0 and Bug Hunt 31.7 fixes — hard open-source-repo work lags its long-horizon strength.
- **Cost efficiency: 58/100.** $4/$20 with 5% cache reads and $4.52 AA cost/task — mid-premium, cheaper than Fable/Opus flagships but well above Sonnet 5.5 ($2/$10) and the open-weight budget tier; proprietary, no batch/free tier documented. Anchored in the $4/$20→55–60 band.
- **Overall Score: 86.4/100.** Mean of the five quality dims (88+85+93+77+89)/5 = 86.4. Best-fit: long-running autonomous coding agents and computer-use workflows where active memory and hours-long error recovery matter, at a mid-premium API price; choose Wonder Full (subscription) for the top agentic/coding ceiling, or Sonnet 5.5/open weights for cost-sensitive volume. The base Wonder is a strong #2 in its family, not the frontier leader its sibling is.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Meta's official dev.meta.ai model page with the full max-effort benchmark table and pricing, BenchLM's sourced Nov 10 profile, llm-stats' rate card/date/modalities, and WebSearch corroboration); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA Intelligence Index **52 at launch** (Oct 12 vendor table, v4.3.2-era) vs **43.6 current** (BenchLM Nov 10 snapshot) — different index versions, not comparable with each other or with other models' unstated-version scores; GDP.pdf vendor 30.8 vs AA 30.6; release Oct 12 (llm-stats/model card) vs Oct 13 (marktechpost). Harvey LAB-AA v1.1 10.0 is the hallucination-gated all-pass metric (not v1.0 criterion pass-rate). OSWorld 2.1 is the partial set (72.6) with a separate binary score (34.3). Vendor peer columns are Meta-run max-effort. marktechpost (403) was unreachable; the official dev.meta.ai page and BenchLM profile fully cover the data. Identity: **muse-wonder-1.0 (base Wonder, API $4/$20) ≠ muse-wonder-full-1.0 (Wonder Full, Muse Code subscription-only)**; TB4.0 ≠ TB2.1; FrontierCode 2.0 ≠ v1.1; DeepSWE 1.1 figures are vendor-card.
- Reference URLs:
  - [Muse Wonder — Meta developer portal (official)](https://dev.meta.ai/models/muse-wonder)
  - [Introducing Muse Wonder — Meta research blog](https://research.meta.ai/blog/introducing-muse-wonder/)
  - [Muse Wonder model card — Meta](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder benchmark profile — BenchLM](https://benchlm.ai/models/muse-wonder)
  - [Muse Wonder Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/muse-wonder-1.0)
  - [Muse Wonder — Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder)
  - [Meta: Muse Wonder — OpenRouter](https://openrouter.ai/meta/muse-wonder)
  - [FrontierCode 2.0 — Cognition](https://cognition.com/blog/frontier-code-2.0)
  - [CursorBench 4.0 — Cursor](https://cursor.com/cursorbench)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.