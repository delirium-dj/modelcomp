# Claude Fable 5.1 — findings by Mistral Large 4

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's public "Mythos-level" frontier model — the broadly available counterpart of the restricted Claude Mythos 5.1 — built for long-running, hours-long agentic projects; ships with the "preserved thinking" anti-distillation safeguard. Variant/alias note: distinct from Mythos 5.1 (restricted preview), not a tier of Opus.
- **Provider / access:** Claude API / Claude Platform (`claude-fable-5-1`), Amazon Bedrock, Google Cloud, Microsoft Foundry, marketplace listings; US-only inference at 1.1x. Messages API.
- **Release / knowledge:** Released 2026-09-01 (day before Muse Spark 1.3); system card published October 1, 2026. Knowledge cutoff not restated in reviewed snippets (Fable 5 card carried June 2026).
- **IDs:** `claude-fable-5-1` (Claude API); `anthropic/claude-fable-5.1` (OpenRouter).
- **Context window:** 1,000,000 tokens total (1M recommended, per Anthropic/OpenRouter listings); max output 128K (Claude 5.x family standard) — output limit not separately restated for Fable in reviewed sources.
- **Modalities:** Text + image in, PDF in, text out; reasoning with effort levels; tool calls; JSON mode (Claude 5.x family).
- **Pricing (as of 2026-11-05):** $10 / $50 per 1M input/output; cache reads $0.25/M (75% below Fable 5), cutting typical workload cost ~25% and highly agentic workloads up to ~45% (Anthropic). No free tier.
- **Architecture:** Proprietary, weights not disclosed; Mythos-class training with preserved-thinking anti-distillation safeguard; cyber/bio deployment safeguards like Fable-class predecessors.

### Raw benchmarks found

Anthropic tables (Opus 5.5 launch page; Google model-card comparison) cross-checked against AA, BenchLM, llm-stats, Vals, DataCamp, morphllm; conflicts listed side by side:

Agent / tool use:

- GDPval-AA v2.1: **1735 Elo** (2nd to Opus 5.5's 1846; Astra 1542, Opus 5 1708) (Anthropic/AA)
- AutomationBench: **31.4%** (Astra 41.4%, Opus 5.5 40.0% lead) (Anthropic)
- OSWorld 2.0 partial: **80.7%** (2nd to Opus 5.5 81.8%) (Anthropic)
- Terminal-Bench 4.0: **55.8%** (Anthropic table) vs **57.9%** (Google card) — conflicting, both cited
- Chartography: **88.4% with tools** (Anthropic) vs **46.2% without tools** (Google) — tool-setting difference, both cited
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE with tools: **65.6%** — highest in the published 5-model table (Opus 5.5 67.7% later edged it; Astra 57.2%) (Anthropic)
- Artificial Analysis Intelligence Index: **66 at max / 65 at xhigh** (VentureBeat/AA launch coverage) vs **61–61.2 at high** (AA model page, LISTIFY) — effort/index-version drift, all cited; topped the AA board at launch, now behind Opus 5.5 (58–59 current versions) and Carbon
- Vals Index: **65.8%** (2nd to Argon 68.9%); Vals Finance Agent v2: **58.9%**; Harvey's Legal Agent: **6.7%** (Google card / Vals)
- GPQA Diamond / LCR / CritPt / Omniscience: no verified public score found for claude-fable-5-1 in reviewed sources

Coding:

- DeepSWE v1.1: **67.4%** (Argon 77.9%, Astra 74.1%, Opus 5.5 74.2% lead) (Google card)
- Vibe Code Bench: **90.3%** (Google card / Vals)
- FrontierSWE v2: **56.3%** (Astra 65.5% leads) (Google card)
- FrontierCode v1.1: **50.3%**; CursorBench 4.0: **51.8%** (Anthropic)
- SWE-bench Verified: morphllm lists Fable 5 at 95% SWE-bench Verified (family reference, not 5.1); no verified 5.1 number found

Long context:

- 1M window; GraphWalks BFS F1: **91.4% up to 128k**, **65.0% at 256k–1M** (Google card) — below the 98%-at-512K bar

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1735 and OSWorld 80.7% are runner-up numbers, but AutomationBench 31.4% trails both Astra and Opus 5.5; no Claw-Eval found.
- **Reasoning: 93/100.** HLE-with-tools 65.6% led the published table and AA Index peaked at 66 (max) at launch; current index readings (61–65 depending on effort/version) still strong but no GPQA/LCR published.
- **Context window: 96/100.** 1M window in the 95–100 tier; GraphWalks 65.0% at 256k–1M keeps it off 100.
- **Multimodal: 85/100.** Text/image/PDF in, text out, strong chart work (88.4% with tools); no audio/video or non-text output.
- **Coding: 85/100.** Vibe Code Bench 90.3% is strong but DeepSWE 67.4%, FrontierSWE 56.3% and TB 4.0 55.8–57.9% trail Argon/Astra/Opus 5.5.
- **Cost efficiency: 32/100.** $10/$50 list sits in the ~30 band; $0.25/M cache reads and 25–45% workload savings help but don't change the band; no free tier.
- **Overall Score: 89/100.** Half-up mean of (88 + 93 + 96 + 85 + 85) / 5 = 89.4 → 89. Best fit: premium pick when maximum reasoning (HLE-class) matters and budget allows $10/$50; Opus 5.5 matches it on most work at $4/$20.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official anthropic.com/claude/fable page fetched, 2026-11-05 UTC); official Anthropic pages/system card prioritized, cross-checked against Artificial Analysis, BenchLM, llm-stats, Vals-sourced rows, DataCamp, morphllm, LISTIFY, Google's model card; conflicting figures (TB 4.0 55.8 vs 57.9; Chartography 88.4 tools vs 46.2 no-tools; AA Index 66/65 vs 61.2) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable — Anthropic (official; $10/$50, cache reads $0.25/M, API id claude-fable-5-1)](https://www.anthropic.com/claude/fable)
  - [Introducing Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic](https://www.anthropic.com/research/mythos-5-1)
  - [Claude Fable 5.1 / Mythos 5.1 System Card (PDF, 2026-10-01)](https://www-cdn.anthropic.com/Claude%20Fable%205.1%20System%20Card.pdf)
  - [Claude Fable 5.1 — Claude Platform Docs](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Artificial Analysis — claude-fable-5-1 (Index readings 61–66 across efforts/versions)](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [BenchLM — claude-fable-5-1](https://benchlm.ai/models/claude-fable-5-1)
  - [llm-stats — claude-fable-5-1 specs](https://llm-stats.com/models/claude-fable-5-1)
  - [OpenRouter — anthropic/claude-fable-5.1](https://openrouter.ai/anthropic/claude-fable-5.1)
  - [DataCamp — Claude Fable 5.1 blog](https://www.datacamp.com/blog/claude-fable-5-1)
  - [morphllm — Claude benchmarks 2026 (Fable 5 family SWE-bench Verified 95%)](https://www.morphllm.com/claude-benchmarks)
  - [kie.ai — What Is Claude Fable 5.1?](https://kie.ai/blog/what-is-claude-fable-5-1)
  - [respan.ai — Fable vs Mythos comparison](https://www.respan.ai/articles/fable-vs-mythos)
