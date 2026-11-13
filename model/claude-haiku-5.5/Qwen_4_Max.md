# Claude Haiku 5.5 — findings by Qwen 4 Max

- Source: Anthropic / claude-haiku-5.5
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: Claude Haiku 5.5
- Short description: Anthropic's small-class model (Oct 7, 2026) — "cheapest, fastest, and most capable small model" they've released; aimed at high-volume cost-sensitive work (summaries, compaction, classification, subagents, live support, browser use). First Haiku with adjustable effort settings and adaptive thinking.
- Provider/access: Claude Platform (`claude-haiku-5-5`), AWS Bedrock, Google Cloud, Microsoft Azure; AA tracks 6 providers, llm-stats 1 (Anthropic). OpenCode Zen resells at $0.10/$0.50 ≤100K, $0.50/$2.50 >100K (carried from OpenCode Console). Pairs with Opus 5.5 / Sonnet 5.5 as coding subagent (Cognition Devin Fusion sidekick). SDK computer-use + browser-use beta support.
- Release/knowledge: October 7, 2026 (official post, AA, llm-stats agree). Knowledge cutoff June 2026 (llm-stats). Current, not deprecated.
- IDs: `claude-haiku-5-5`.
- Context window: 1,000,000 tokens (up from 200K on Haiku 4.5); max output 128,000 (llm-stats, OpenRouter). Tiered pricing cliff at 100K input (see below).
- Modalities: text + image input, text output. Effort settings Low / Medium / High / Xhigh / Max (AA tracks Max; adaptive thinking). Updated tokenizer (same family as Sonnet/Opus 5.5) uses slightly more tokens per task than Haiku 4.5.
- Pricing (as of 2026-11-13, official post): prompts ≤100K — $0.10 input / $0.50 output / $0.01 cache read / $0.125 5-min cache write per 1M; >100K — $0.50 / $2.50 / $0.05 / $0.625 (5× step-up). 90% cheaper than Haiku 4.5 ≤100K, 50% cheaper >100K; ~75% lower run cost on average (vendor, tokenizer-adjusted). AA blended $0.077 (7:2:1), $0.41/task at max effort. Same-day side effects: Sonnet 5.5 cache reads halved to $0.10 (~20% cheaper agentic work); monthly API credits Max $100 / Ultra $200 / Team up to $500.
- Architecture: proprietary; parameter count undisclosed. Safety: alignment improved vs Haiku 4.5; cyber safeguards stricter than 4.5 but looser than Sonnet 5.5 (defensive tasks allowed, pentest blocked); biology safeguards same as Sonnet 5/5.5 and Opus 5.

### Raw benchmarks found

- Intelligence Index: AA live 36 (v5.0.1, Max) — #1/36 in its price class (median 24); launch-day article scored 43 (version unstated — not comparable); BenchLM carriage 36.5 (snapshot difference labelled). Launch-era peer claims (article): slightly ahead of GLM-5.3 Flash 42, Gemini 3.8 Flash 41, GPT-6 Luna 38; comparable to Kimi K3 44; trails Sonnet 5.5 Max 56.
- Vendor launch table (Haiku 5.5 / Haiku 4.5 / GPT-6 Luna / Sonnet 5.5): GDPval-AA v2.1 1620 / 735 / 1437 / 1840 Elo; AA-Briefcase v1.1 1578 / 614 / 1336 / 1824; OSWorld 2.1 Offline 72.4% / 15.7% / 48.9% / 83.9%; HLE no-tools 45.9% / 10.2% / — / 56.9%, with tools 57.4% / 18.7% / — / 64.5%; Terminal-Bench 4.0 39.2% / 0.0% / 16.4% / 70.6%; FrontierCode 1.1 Main 46.4% / — / 42.4% / 52.1% (Xhigh); Chartography no-tools 46.4% / 6.4% / 29.1% / 61.6%.
- Agentic (AA independent/carriages): GDPval-AA normalized 56.0%, AutomationBench-AA 35.4% (**understated — pre-release safety over-refusal bug; Anthropic fixing, AA re-run pending**), Harvey LAB v1.0 89.9%, AnalystAgent 53.8%, GDP.pdf 20.8%, MKA 41.0%, TB4.0-AA 32.8% (vendor 39.2% — harness conflict labelled; article: level with GLM-5.3 Flash, ahead of Gemini 3.8 Flash 20% and GPT-6 Luna 13%). Muse Ember post carriages: AutomationBench strict 13.9%, ALE Linux 57.0%.
- Reasoning (AA independent unless noted): AA-HLE 44.4%, CritPt 18.9%, Omniscience +12.3 (accuracy 34.7%, hallucination 34.2% — low hallucination partly from admitting uncertainty; launch article snapshot 36%/40% labelled); FrontierMath v2 T1–3 75.088% / T4 46.341% (Epoch — T4 beats DeepSeek V4.1 Flash 1017's 26.8); ARC-AGI-1 89.0% / ARC-2 61.3% / ARC-3 0.5% (semi-private; adapter 2.82%); Hermes Index 37.0% / Hermes Bench 71.0% (Nous). HealthBench 61.2 raw / 58.5 length-adjusted; HealthBench Pro 64.8 / 58.4 (Fable 5.2 system-card carriage). No GPQA/AIME rows surfaced.
- Coding: FrontierCode 1.1 Main 46.4% (vendor system card; xhigh 45.8% shown-only variant), FrontierCode 2.0 27.7% (Cognition) / 34.9% (AA, via Meta Ember post), FrontierSWE v2 43.8%, CursorBench 4.0 48.4%, AA-SciCode 55.0%, VulcanBench v4 92.2%, BugHunt 21.5 fixes, MazeBench 1%. No SWE-bench Verified/Pro or LiveCodeBench rows surfaced.
- Multimodal: Chartography no-tools 46.4% (vendor), PerceptionBench tools 78.6% (Meta carriage), ParseBench 56.02%, Design Arena Website 1,256 Elo. No MMMU-Pro/CharXiv rows surfaced.
- Long context: AA-LCR 82.7% (independent), MLCR-AA 35.0% — strong retrieval for the 1M window; no MRCR row.
- Performance (AA Max): 254 tok/s (vendor: fastest Anthropic model at standard speed; slower than Opus Fast Mode), TTFT 175.37s (max-effort thinking; price-class median 8.93s), 14.8 min/task, 298M index tokens (very verbose, ~3× GPT-6 Luna's ~50K/task; xhigh→max adds 2 index points for ~1.8× tokens; high effort scores 38 at ~55K tokens/task).
- Customer evals (vendor post): HubSpot CRM suite 92.8% (best they've seen); AlphaSense 0.84 vs 0.76 Haiku 4.5 (400 queries); Box +11 points at half latency; Asana >30% latency cut; Cognition Devin Fusion FrontierCode 66.2 with Opus 5.5 lead.
- BenchLM overall 67.67/100, #20 of 1033 (60 benchmarks). Family: Sonnet 5.5 83.07, Opus 5.5 86.64, Haiku 4.5 40.15.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval 1620 Elo / 56.0% normalized, Briefcase 1578 (within CI of GPT-6 Astra Max), OSWorld 2.1 Offline 72.4%, Harvey LAB 89.9% — frontier-adjacent knowledge-work tool use at small-class price; TB4.0 32.8% AA and AutomationBench 35.4% (bug-understated, re-run pending) keep it below the 85+ agentic anchors.
- **Reasoning: 82/100.** HLE 44.4% AA / 45.9% vendor no-tools / 57.4% tools, CritPt 18.9%, FrontierMath T4 46.3% (beats DS-1017), ARC-2 61.3% — remarkable for the class; low factual accuracy (34.7%) offsets the low hallucination (34.2%), and no GPQA/AIME evidence caps it.
- **Context window: 83/100.** 1M tokens with LCR 82.7% and MLCR 35.0%, 128K output — but no MRCR evidence and the 5× price step-up above 100K input makes long-context use costly; below the no-surcharge 1M anchors (Sonnet 5 89, DS-1017 85).
- **Multimodal: 74/100.** Image input with Chartography 46.4% no-tools, PerceptionBench 78.6% tools, MKA 41.0%, ParseBench 56.0 — real but mid-strength vision evidence; no MMMU-Pro/CharXiv/video rows keeps it at the single-digit-eval image-in calibration.
- **Coding: 76/100.** FrontierCode 1.1 46.4%, FrontierSWE v2 43.8%, CursorBench 4.0 48.4%, SciCode 55.0%, TB4.0 32.8–39.2% — competent subagent-class coding (vendor explicitly positions Sonnet/Opus 5.5 above it for complex agentic coding); no SWE-V/SWE-Pro/LCB rows and TB4.0 well below DS-1017's 42.3%.
- **Cost efficiency: 90/100.** $0.10/$0.50 with 90% cache reads and blended $0.077 is near-floor per token; $0.41/task is cheap in absolute terms (below DS-1017 $0.60) but ~3× Muse Ember's $0.14 at the same index 36, verbosity is ~3× GPT-6 Luna, and the 5× >100K tier punishes long prompts — deductions from the 95–97 ultra-cheap anchors.
- **Overall Score: 79.4/100.** Mean of the five quality dimensions (82+82+83+74+76)/5 = 79.4; cost excluded per methodology. A small-class model with genuinely frontier-adjacent knowledge-work and reasoning scores, held back by mid-strength vision, subagent-class coding, and verbose max-effort token use.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official Anthropic launch post with full vendor comparison table, Artificial Analysis model page + launch article, BenchLM aggregator with Who-ran-it carriages, llm-stats provider table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: index 43 launch (version unstated) vs 36 live v5.0.1 vs 36.5 BenchLM carriage; TB4.0 vendor 39.2% vs AA 32.8%; Omniscience article 36%/40% vs live 34.7%/34.2%; FrontierCode 1.1 46.4% max vs 45.8% xhigh (shown-only); AA 6 providers vs llm-stats 1; launch cost figures provisional (AA had not yet modelled the >100K tier). AutomationBench-AA 35.4% flagged by AA as understated (safety over-refusal bug, re-run pending) — not treated as settled. Vendor "fastest model" claim scoped to standard speed (max-effort TTFT 175.37s; Opus Fast Mode faster). Haiku 5.5 kept distinct from Haiku 4.5 and from Sonnet/Opus 5.5; GPT-6 Luna comparison column is Anthropic-run, not OpenAI-reported.
- Reference URLs:
  - [Introducing Claude Haiku 5.5 — Anthropic](https://www.anthropic.com/claude-haiku-5-5)
  - [Claude Haiku 5.5 (Max) — Artificial Analysis](https://artificialanalysis.ai/models/claude-haiku-5-5)
  - [Anthropic has released Claude Haiku 5.5 — Artificial Analysis](https://artificialanalysis.ai/articles/claude-haiku-5-5)
  - [Claude Haiku 5.5 — BenchLM](https://benchlm.ai/models/claude-haiku-5-5)
  - [Claude Haiku 5.5 — LLM Stats](https://llm-stats.com/models/claude-haiku-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.