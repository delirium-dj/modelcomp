# Grok 4 Fast — findings by GPT 6 Sol

- Source: SpaceXSI / xAI (`grok-4-fast-reasoning`, historical checkpoint)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** September 2025 efficient reasoning/search model with a single set of weights exposed in reasoning and non-reasoning modes; this report assesses the **reasoning** route ([xAI launch](https://x.ai/news/grok-4-fast)). Modes are not separate subject models.
- **Provider / access:** Historical IDs `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`. **Both retired May 15, 2026**: [xAI migration notice](https://docs.x.ai/developers/migration/may-15-retirement) says requests now run **Grok 4.3**, with `low` and `none` effort respectively. Original-checkpoint scores here cannot predict present-day results at those URLs. No verified current Zen Free route.
- **Release / knowledge:** September 19, 2025 ([xAI](https://x.ai/news/grok-4-fast)); original knowledge cutoff not established by a first-party model card in reviewed sources.
- **Context window:** Historical xAI API **2M tokens**; tiered rates after 128K. Azure [preview deployment](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/announcing-the-grok-4-fast-models-from-xai-now-available-in-azure-ai-foundry/4456701) had a **~131K** limit: platform capacity differs. The current xAI redirect has the replacement's **1M** context, not the original 2M ([migration](https://docs.x.ai/developers/migration/may-15-retirement)).
- **Modalities:** Original text/image input and text output; web/X search, code execution and function calls are tools, not native video/audio I/O ([xAI](https://x.ai/news/grok-4-fast), [Vals](https://www.vals.ai/models/grok_grok-4-fast-reasoning)).
- **Pricing:** Historical xAI short-context **$0.20 input / $0.05 cached input / $0.50 output per 1M**, at ≥128K **$0.40 input / $1 output** ([launch](https://x.ai/news/grok-4-fast)). Current redirected requests are billed as Grok 4.3, **$1.25/$2.50**, not at these original rates ([xAI migration](https://docs.x.ai/developers/migration/may-15-retirement)).
- **Architecture:** Proprietary hybrid reasoning/non-reasoning on the same weights; parameter count undisclosed ([xAI](https://x.ai/news/grok-4-fast)).

### Raw benchmarks found

- **Agents/tool use:** [xAI](https://x.ai/news/grok-4-fast) reports search-with-tools **BrowseComp 44.9%, Reka Research 66.0%, SimpleQA 95.0%** and private **X Browse 58.0%**. Independent [Vals reasoning-route test](https://www.vals.ai/models/grok_grok-4-fast-reasoning) records **Terminal-Bench 2.0 29.21% ±4.85** and TaxEval v2 **75.70% ±0.76**. BrowseComp uses vendor-integrated search whereas TB2.0 requires terminal workflow completion; scores are not like-for-like.
- **Reasoning:** Vendor [GPQA Diamond **85.7%**, AIME 2025 **92.0%**, HLE without tools **20.0%**](https://x.ai/news/grok-4-fast); [Vals](https://www.vals.ai/models/grok_grok-4-fast-reasoning) independently measured **GPQA 85.35% ±1.79**, MMLU Pro **79.70% ±0.39** and SAGE **29.76% ±3.04**. GPQA agreement corroborates academic strength, but harder SAGE/HLE outcomes are weaker.
- **Coding:** xAI [LiveCodeBench Jan–May pass@1 **80.0%**](https://x.ai/news/grok-4-fast); independent [Vals](https://www.vals.ai/models/grok_grok-4-fast-reasoning) **LiveCodeBench 78.97% ±1.10, SWE-bench 45.40% ±2.23, Terminal-Bench 2.0 29.21% ±4.85**. Code puzzles transfer imperfectly to repository repairs. Vals' Vibe Code row is effectively at the bottom of its leaderboard; avoid inventing a precise percentage from a truncated listing.
- **Context/vision:** Historical 2M capacity is a limit, not a verified 2M recall result. [Vals MMMU Pro **72.78% ±1.07**](https://www.vals.ai/models/grok_grok-4-fast-reasoning) independently establishes image understanding; [AA-attributed benchmark compilation](https://benchgap.net/model/grok-4-fast-reasoning) lists **AA-LCR 73.7%** on an unspecified tested length, not full-window proof. Do not transfer video-on-X search to native vision/video input.

### Normalized scores (1–100)

- **Tool use: 69/100.** Search-with-tools 44.9% BrowseComp/66% Reka versus independent TB2.0 29.21%; route now redirected.
- **Reasoning: 75/100.** Repeated GPQA ~85.5, but HLE 20 and independent SAGE 29.76 restrain broad claims.
- **Context window: 88/100.** Historical 2M with no near-cap retrieval; not the present redirected route's limit.
- **Multimodal: 68/100.** Independent MMMU Pro 72.78; text/image in and text out, no native audio/video.
- **Coding: 65/100.** LCB ~79–80 versus SWE-bench 45.4 and TB2.0 29.21.
- **Cost efficiency: 83/100.** Original excellent low token tariffs, but current redirected calls cost more and execute a different model.
- **Overall Score: 73/100.** Half-up mean (69 + 75 + 88 + 68 + 65) / 5 = 73; historical efficient reasoning/search, **not** a current Grok 4 Fast endpoint.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three fresh searches, xAI launch and migration docs, independent Vals reasoning-route benchmarks and AA-attributed context corroboration. Separated original weights, API modes and post-retirement redirect; scores are interpretations.
- Reference URLs:
  - [xAI launch, benchmark protocol and historical pricing](https://x.ai/news/grok-4-fast)
  - [xAI May 2026 retirement, redirect and replacement pricing](https://docs.x.ai/developers/migration/may-15-retirement)
  - [Vals reasoning-route exact-checkpoint measurements](https://www.vals.ai/models/grok_grok-4-fast-reasoning)
  - [Azure deployment's smaller preview context](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/announcing-the-grok-4-fast-models-from-xai-now-available-in-azure-ai-foundry/4456701)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
