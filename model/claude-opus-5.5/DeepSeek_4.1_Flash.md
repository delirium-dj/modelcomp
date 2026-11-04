# Claude Opus 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-10-16 (UTC) — deep rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: Anthropic's Opus 5.5 launch page re-read, BenchLM (`claude-opus-5-5`, **91 rows**, **86.29/100, #2 of 1008** — was 86.6, #1 of 992), Artificial Analysis leaderboards, BenchmarkHeaven, ARC Prize, Epoch AI.
> **Refreshed values:** AA Intelligence Index **58.4** (was 57.6); AA-Omniscience **index 48.1 / accuracy 65.5% / hallucination 50.3%** (was 46.4 / 66.2% / 58.6% — hallucination improved ~8 pts); AA-Briefcase **1800 Elo** (was 1803); Design Arena Website **1326** (was 1334); ParseBench **78.89%** (was 79.85%).
> **Corrected:** **MLCR-AA 27.8%** — the 66.7% previously recorded is superseded; medical long-context is a weak row, not a strong one (general long-context AA-LCR 84.7% stands).
> **Newly captured rows:** FrontierCode 2.0 **45.5%** (Cognition); ScarfBench **70.5%** (Kaggle/IBM Research); OSWorld 2.1 **81.8% partial / 87.2% offline** (via Sonnet 5.5 / Haiku 5.5 system-card runs, per BenchLM); Gray Swan IPI **1.0%** attack success (tied lowest tested); ArXivMath Aug-2026 **91.2% / 96.9% with tools**; HealthBench **68.1 raw / 60.6 length-adjusted**; ExtractBench Pro **51%**; biology/health suite (BioMysteryBench 89.3 human-solvable / 50.0 human-difficult; de novo protein-binder 82.6%).
> **No score change:** the refreshed evidence confirms the frontier coding/tool-use profile with premium pricing (Anthropic pricing re-verified unchanged: $4 / $20, cache $0.20). Scores held at 91.
> Sources this pass: https://www.anthropic.com/claude-opus-5-5 · https://benchlm.ai/models/claude-opus-5-5 · https://artificialanalysis.ai/models/claude-opus-5-5 · https://benchmarkheaven.com/ · https://arcprize.org/results/anthropic-claude-opus-5-5

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`claude-opus-5-5`) re-read on 2026-10-23 carried **83 source-displayable rows** (was 63 on 2026-10-18) and computed **86.6/100, #1 of 992** (was #1 of 228). Newly captured then: AA-LCR 84.7%, AA Harvey LAB v1.0 91.2%, AA ITBench 38.2%, AA-AnalystAgent 56.3%, Hermes Index 63.3 / Bench 76.7, GDP.pdf 26.2%, FrontierSWE v2 62.3%, FrontierCode 1.1 Extended 63.6%, PostTrainBench v1.1 49.3%, AA-MMMU-Pro 87.7%, Chartography 89.0%/64.4%, OfficeQA 78.9% / Pro 67.7%, ExtractBench 86.06%, Biomedical image 71.4%, GMMLU 94.3 / MILU 93.1, FrontierMath v2 T1–3 91.2% / Tier-4 95.0%, GraphWalks BFS 256K–1M 66.8%. Refreshed values then: AA-Briefcase 1803 Elo, AA AutomationBench 69.5%, AA Intelligence Index 57.6, Terminal-Bench 4.0 59.6% (AA) vs 66.4% (Anthropic), AA-Omniscience hallucination 58.6%.

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-5-5`, 63 rows) computed an overall **86.62/100 (#1 of 228)** and re-confirmed the prior pass. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run). Confirmed independent data: Artificial Analysis Terminal-Bench 4.0 60% (max, AA) / 66.4% xhigh (Anthropic/Zapier), GDPval-AA v2.1 1846 Elo, AA-Briefcase v1.1 1822 Elo, AutomationBench-AA 70%, SciCode 67%, HLE 61% (67.7% with tools), CritPt 32%, AA Intelligence Index 58 (#1/227). Coding: SWE-bench Pro 89.9% (#1/88, Vals; #1 on llm-stats), SWE Multilingual 93.9%, SWE-bench (Vals) 97.0%. LMArena Agent leaderboard #1 of 54 (17.2%, Max config, 2026-10-14). Conflicts surfaced: HLE harness gap (67.7% Anthropic vs 61% AA); TB4.0 66.4% vs 60%; OSWorld 2.0 48.7% (BenchLM) vs an earlier 81.8% partial reading; modalities caveat (text+image+PDF); extreme max-effort latency (AA TTFT >600s).

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's upgraded Opus-tier model (2026-09-22), first of the Claude 5.5 family — long-running agentic coding, computer use and knowledge work, performing at Claude Fable 5.1 level for ~40% less to run and priced 20% below Opus 5 at the same 1M context.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud, Microsoft Foundry. No Zen Free ID.
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; no Free ID → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via `output-300k` batch beta).
- **Modalities:** text, image and PDF in → text out; reasoning, adaptive five effort levels; ZDR available.
- **Pricing (as of 2026-11-04):** **$4 in / $20 out** per 1M; cache reads **$0.20** (60% below Opus 5); Batch 50% ($2/$10); Fast Mode $8/$40 (up to 2.5× speed).
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 **1846 Elo**; AA normalized GDPval-AA 68.3%; AA-Briefcase **1800 Elo** (refreshed 2026-11-04 from 1803)
- Terminal-Bench 4.0 **59.6% (AA)** / **66.4% xhigh (Anthropic)**; Terminal-Bench-Science 0.1 58.7%
- AutomationBench-AA **69.5% (AA max) / 63.2% (High, BenchmarkHeaven)** / 40.0% (Zapier, no-fallback config); AA Harvey LAB v1.0 91.2%; Toolathlon-Verified 77.8% (pass@3 82.4%); AA ITBench 38.2%; AA-AnalystAgent 56.3%
- LMArena Agent #1 of 54 (17.2%, Max); OSWorld 2.0 **48.7%** (BenchLM, sourced); OSWorld 2.1 **81.8% partial / 87.2% offline** (fallback-config rows via Sonnet 5.5 / Haiku 5.5 system cards); Gray Swan IPI **1.0%** attack success (tied lowest); MazeBench 13%; GDP.pdf 26.2%
- Hermes Index 63.3 / Hermes Bench 76.7; CWE-bench v1 67.0%; ScarfBench **70.5%** (Kaggle/IBM)
- Vals Index 66.97% (#2 of 48); Vals Finance Agent v2 58.59% (#9); SRE Bench 12.21%

Reasoning / knowledge:

- HLE **61.4%** (AA) / **67.7% with tools** (Anthropic) / 64.4% no-tools; SciCode 66.9%; AA-SciCode 66.9%
- AA Intelligence Index **58.4 (#1 among reasoning models, 2026-11-04 snapshot)**; ARC-AGI-1 97.5%, ARC-AGI-2 91.7%; AA-LCR **84.7%**; **MLCR-AA 27.8% (corrected 2026-11-04 — medical long-context is weak)**; CritPt 31.7%
- AA-Omniscience **index 48.1 / accuracy 65.5% / hallucination 50.3%** (hallucination improved ~8 pts vs the 58.6% read of 2026-10-23)
- HealthBench Professional 65.6% (raw 77.1%); HealthBench 68.1 raw / 60.6 length-adjusted; FrontierMath v2 Tiers 1–3 91.2% / Tier-4 95.0% (Epoch AI); ArXivMath Aug-2026 91.2% / 96.9% with tools; GMMLU 94.3, MILU 93.1

Coding:

- SWE-bench Pro **89.9%** (#1/88, Vals; #1 on llm-stats); SWE-bench (Vals) **97.0%**
- SWE Multilingual 93.9%; SWE Multimodal 61.4%; DeepSWE 74.2%; CursorBench 4.0 57.8%
- FrontierCode 1.1 Main 54.4% / Extended 63.6%; **FrontierCode 2.0 45.5%** (Cognition); FrontierSWE v2 62.3%; ProgramBench 91.2%; Bug Hunt 41.7 fixes; PostTrainBench v1.1 49.3%

Multimodal / long context:

- AA-MMMU-Pro 87.7%; Chartography (tools) 89.0% / (no tools) 64.4%; OfficeQA 78.9% / Pro 67.7%
- ExtractBench 86.06% / **Pro 51%**; ParseBench **78.89%**; Biomedical image 71.4%; BenchCAD Vision2Code 0.730 / 0.962 (tools); Design Arena Website **1326**
- AA-LCR 84.7%; GraphWalks BFS 256K–1M **66.8%** (vs Gemini 4 Argon 84.2%) — long-context retrieval is strong but not frontier at depth; no ≥98%-at-512K row

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846, AA-Briefcase 1800 and AA Harvey LAB 91.2% are first-in-field, with TB4.0 59.6–66.4%, AutomationBench-AA 69.5% and LMArena Agent #1; capped because TB4.0 ≠ the TB2.1 anchor and OSWorld 2.0 is only 48.7%.
- **Reasoning: 92/100.** HLE 61–67.7%, FrontierMath Tier-4 95%, ARC-AGI-2 91.7% and AA-LCR 84.7% are frontier; AA Index 58.4 still sits below the 60 frontier ref, and MLCR-AA 27.8% flags medical long-context despite the improved 50.3% Omniscience hallucination rate.
- **Context window: 96/100.** 1M input with 128K (300K batch) output (≥1M band); GraphWalks 66.8% and no verified ≥98%-at-512K retention row keep it below 98.
- **Multimodal: 80/100.** Text + image + PDF in, text out; strong document/chart vision (MMMU-Pro 87.7%, ExtractBench 86.06%) but no audio/video in and no non-text output.
- **Coding: 95/100.** SWE-bench Pro 89.9% (#1), SWE-bench (Vals) 97.0%, SWE Multilingual 93.9% and CursorBench 57.8% are frontier-leading; DeepSWE 74.2% keeps the very top in reach.
- **Cost efficiency: 52/100.** $4/$20 per 1M sits above the $3/$15 ≈ 60 anchor; Batch + 95% cache-read discount soften it.
- **Overall Score: 91/100.** (92 + 92 + 96 + 80 + 95) / 5 = 91.0 → 91. Best fit: the default for long agentic coding and computer-use, at a premium price justified only when the agentic gains pay for themselves.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic Opus 5.5 announcement + system card, BenchLM re-read 2026-11-04 with 91 rows, Artificial Analysis leaderboards, BenchmarkHeaven, ARC Prize, Epoch AI). Refreshed AA rows (Index 58.4, Omniscience 48.1/65.5/50.3), corrected the MLCR-AA reading, and recorded the newly captured FrontierCode 2.0 / ScarfBench / OSWorld 2.1 / Gray Swan IPI / ArXivMath / HealthBench rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [BenchLM — Claude Opus 5.5 benchmark scores](https://benchlm.ai/models/claude-opus-5-5)
  - [Artificial Analysis — Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [ARC Prize — Claude Opus 5.5 results](https://arcprize.org/results/anthropic-claude-opus-5-5)
  - [Epoch AI — FrontierMath v2 Tier-4](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
