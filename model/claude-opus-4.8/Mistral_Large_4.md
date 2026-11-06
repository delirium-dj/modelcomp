# Claude Opus 4.8 — findings by Mistral Large 4

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 Opus point release — direct upgrade to Opus 4.7 at the same price, with near-Mythos-level alignment, a 3x-cheaper fast mode, and dynamic workflows spawning hundreds of parallel subagents; moved to the legacy list when Opus 5 shipped (2026-07-24) at identical pricing.
- **Provider / access:** Claude API (`claude-opus-4-8`), Bedrock, Vertex (US/EU), Azure, Claude Platform on AWS (OpenRouter lists 10+ endpoints). Messages API.
- **Release / knowledge:** Released 2026-05-28; system card same day; training cutoff January 2026 (morphllm).
- **IDs:** `claude-opus-4-8` (Claude API); `anthropic/claude-opus-4.8` (OpenRouter).
- **Context window:** 1,000,000 tokens; 128K max output.
- **Modalities:** Text + image in, PDF in, text out; reasoning effort control; tool calls; computer use; dynamic multi-agent workflows.
- **Pricing (as of 2026-11-05):** $5 / $25 per 1M in/out (flat vs 4.5/4.6/4.7); fast mode $10/$50 at 2.5x speed (3x cheaper than 4.7's fast mode). No free tier.
- **Architecture:** Proprietary, weights not disclosed; Opus 4.x lineage with improved alignment (near-Mythos) and 35% fewer output tokens per task.

### Raw benchmarks found

Official announcement/system card cross-checked against Vellum, digitalapplied, codersera, morphllm, benchr, BenchLM, AA, tokenmix; conflicts noted:

Agent / tool use:

- OSWorld-Verified: **83.4%** (digitalapplied)
- Online-Mind2Web: **84%** (claudefa.st); only model to complete every Hebbia Super-Agent case end-to-end (claudefa.st)
- Terminal-Bench 2.1: **74.6%** — trails GPT-5.5's 78.2% (Terminus-2) (digitalapplied; conflict vs morphllm's "88.6% TB" which is actually SWE-V — mislabel flagged, both cited)
- GDPval-AA: **1890 Elo** (+121 over GPT-5.5; tokenmix says +137 — conflicting deltas, both cited)
- Dynamic workflows: hundreds of parallel subagents (VentureBeat)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- HLE: **49.8% no tools / 57.9% with tools** — #1 on HLE at launch per AA (digitalapplied / AA article)
- GPQA Diamond: **93.6%** (slightly below Opus 4.7's 94.2%) (digitalapplied/benchr)
- USAMO 2026: **96.7%** (up from 69.3% on previous version) (o-mega)
- Artificial Analysis: #2 overall at launch (AA article); #9/58 multimodal-grounded at 88.1 (BenchLM)
- HumanEval: **96%** (benchr)

Coding:

- SWE-bench Verified: **88.6%** (vs 4.7 87.6%, Gemini 3.1 Pro 80.6%) (Vellum)
- SWE-bench Pro: **69.2%** (vs 4.7 64.3%, GPT-5.5 58.6%) (Vellum)
- SWE-bench Multilingual: **84.4%** (digitalapplied)
- DeepSWE / LiveCodeBench / SciCode: no verified public score found for this ID

Long context:

- 1M / 128K (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld 83.4%, Mind2Web 84%, Hebbia all-case, GDPval 1890 top-tier; TB 2.1 74.6% trails GPT-5.5.
- **Reasoning: 90/100.** HLE #1 at launch (57.9% tools), USAMO 96.7%, GPQA 93.6% (slight dip vs 4.7); AA #2 overall at launch.
- **Context window: 96/100.** 1M / 128K in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Text/image/PDF in, text out; top-10 multimodal-grounded on BenchLM (88.1); no audio/video or non-text output.
- **Coding: 90/100.** SWE-V 88.6%, SWE-Pro 69.2% (+4.9 over 4.7), SWE-Multilingual 84.4%; 35% fewer tokens per task.
- **Cost efficiency: 45/100.** $5/$25 flat sits between the $3/$15 (~60) and $10/$50 (~30) bands; fast mode $10/$50; no free tier; same price as successor Opus 5.
- **Overall Score: 90/100.** Half-up mean of (90 + 90 + 96 + 85 + 90) / 5 = 90.2 → 90. Best fit: May–July 2026 flagship; now legacy — Opus 5 at the same $5/$25 is the upgrade path (Frontier-Bench v0.1 43.3% vs 4.8's 21.1%).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official Anthropic announcement/system card cited, 2026-11-05 UTC); cross-checked against Vellum, digitalapplied, codersera, morphllm, benchr, BenchLM, AA, tokenmix, VentureBeat, claudefa.st, llm-stats; conflicts (GDPval delta +121 vs +137; morphllm "88.6% TB" mislabel vs SWE-V; TB 74.6 vs 78.2) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 4.8 — Anthropic news (official, 2026-05-28)](https://www.anthropic.com/news/claude-opus-4-8)
  - [System Card: Claude Opus 4.8 (PDF, 2026-05-28)](https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf)
  - [Vellum — Opus 4.8 benchmarks explained (SWE-V 88.6%, SWE-Pro 69.2%)](https://www.vellum.ai/blog/claude-opus-4-8-benchmarks-explained)
  - [digitalapplied — Opus 4.8 benchmarks (HLE 49.8/57.9, OSWorld 83.4, TB 74.6)](https://www.digitalapplied.com/blog/claude-opus-4-8-release-dynamic-workflows-2026)
  - [codersera — Opus 4.8 launch guide (GDPval 1890, fast mode 3x cheaper)](https://codersera.com/blog/claude-opus-4-8-launch-guide-2026/)
  - [morphllm — Opus 4.8 ($5/$25, 1M/128K, Jan 2026 cutoff, legacy after Opus 5)](https://www.morphllm.com/opus-4-8)
  - [Artificial Analysis — Opus 4.8 the new #1 / HLE leader](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks)
  - [BenchLM — claude-opus-4-8 (multimodal #9/58 at 88.1)](https://benchlm.ai/models/claude-opus-4-8)
  - [VentureBeat — fast mode + parallel subagents](https://venturebeat.com/technology/anthropics-claude-opus-4-8-is-here-with-3x-cheaper-fast-mode-and-near-mythos-level-alignment)
  - [OpenRouter — anthropic/claude-opus-4.8](https://openrouter.ai/anthropic/claude-opus-4.8#benchmarks)
  - [myclaw.ai — Opus 5 vs 4.8 (Frontier-Bench v0.1 43.3% vs 21.1%)](https://myclaw.ai/blog/claude-opus-5-vs-4-8)
