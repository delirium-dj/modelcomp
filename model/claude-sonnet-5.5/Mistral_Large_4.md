# Claude Sonnet 5.5 — findings by Mistral Large 4

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in Anthropic's Claude 5.5 family — a faster, lower-cost complement to Opus 5.5 for well-scoped everyday tasks, bug fixing, and polished documents; first Sonnet with Opus-class cyber safeguards and strong image understanding.
- **Provider / access:** Claude API / Claude Platform (`claude-sonnet-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry. Messages API.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff June 2026 (Claude 5.5 family system card). Claude Haiku 5.5 announced as coming.
- **IDs:** `claude-sonnet-5-5` (Claude API); `anthropic/claude-sonnet-5.5` (OpenRouter).
- **Context window:** 1,000,000 tokens (Claude 5.x family standard).
- **Modalities:** Text + image in, PDF in, text out; adaptive thinking with effort levels (incl. xhigh/max); tool calls; JSON mode; strong image understanding (first Sonnet to beat Pokémon Red from screenshots only).
- **Pricing (as of 2026-11-05):** $2 / $10 per 1M input/output (same as Sonnet 5); cache reads $0.10/M (half of Sonnet 5's $0.20); up to 30% cheaper per task than Sonnet 5 in Anthropic testing; 30%+ faster output — fastest Sonnet. No free tier.
- **Architecture:** Proprietary, weights not disclosed; Claude 5.5 family; launches with cyber safeguards/fallbacks comparable to Opus 5.

### Raw benchmarks found

Official launch-page table (anthropic.com/claude-sonnet-5-5) cross-checked against AA, BenchLM, llm-stats, DataCamp, kie.ai, morphllm:

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** — beats Opus 5.5's 66.4% and Sonnet 5's 10.3% (Anthropic launch page)
- GDPval-AA: **1844 Elo** — two points below Opus 5.5 (Sonnet 5 1449) (Anthropic)
- CursorBench 4.0: **55.5%** (Sonnet 5 34.1%, Opus 5.5 57.8%) (Anthropic)
- FrontierCode: **46.2% at Max / 52.1% at Xhigh** (Sonnet 5 42.4%, Opus 5.5 54.4%, GPT-6 Sol 49.3%) (Anthropic)
- AutomationBench / OSWorld / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **~36–37** (AA model pages, median 37; -high variant 36) — solid mid-frontier, far below Opus 5.5 (58–59); index-version drift noted
- GPQA / HLE / LCR / CritPt: no verified public score found for claude-sonnet-5-5 in reviewed sources

Coding:

- Terminal-Bench 4.0: **70.6%** (above — field-leading on this harness)
- SWE-bench Verified: Vals SWE-bench leaderboard lists a Sonnet 5.5 row; exact % not captured in reviewed snippets — no verified number cited
- LiveCodeBench / DeepSWE / SciCode: no verified public score found for this exact ID

Long context:

- 1M window (family standard); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 4.0 70.6% beats even Opus 5.5 on the same harness and GDPval 1844 is runner-up; no AutomationBench/OSWorld number found.
- **Reasoning: 85/100.** AA Index ~36–37 is mid-pack for a Sonnet but GDPval 1844 shows strong real-world reasoning; capped by absence of GPQA/HLE numbers.
- **Context window: 96/100.** 1M family window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Text/image/PDF in, text out, notable vision feat (Pokémon Red from screenshots); no audio/video or non-text output.
- **Coding: 93/100.** TB 4.0 70.6% field-leading and CursorBench 55.5% strong; FrontierCode Xhigh 52.1% trails Opus 5.5; no SWE-V/LiveCodeBench number captured.
- **Cost efficiency: 75/100.** $2/$10 list sits between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; $0.10/M cache reads and up to 30% lower per-task cost push it up; no free tier.
- **Overall Score: 90/100.** Half-up mean of (92 + 85 + 96 + 85 + 93) / 5 = 90.2 → 90. Best fit: default everyday workhorse — near-Opus agentic coding at $2/$10 with the fastest Sonnet latency; escalate to Opus 5.5 for complex open-ended judgment work.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official anthropic.com/claude-sonnet-5-5 page fetched, 2026-11-05 UTC); official Anthropic launch page prioritized, cross-checked against Artificial Analysis, BenchLM, llm-stats, DataCamp, kie.ai, OpenRouter, morphllm; conflicting index readings (36 vs 37 across AA variants) noted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 — Anthropic (official, 2026-09-28; benchmark table + pricing)](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 — Claude Platform Docs](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Claude pricing — Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Artificial Analysis — claude-sonnet-5-5 (Index ~37)](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [BenchLM — claude-sonnet-5-5](https://benchlm.ai/models/claude-sonnet-5-5)
  - [llm-stats — claude-sonnet-5-5 context window](https://llm-stats.com/models/claude-sonnet-5-5)
  - [OpenRouter — anthropic/claude-sonnet-5.5](https://openrouter.ai/anthropic/claude-sonnet-5.5)
  - [DataCamp — Claude Sonnet 5.5 blog](https://www.datacamp.com/blog/claude-sonnet-5-5)
  - [kie.ai — Sonnet 5.5 price per task](https://kie.ai/blog/claude-sonnet-5-5-pricing/)
  - [morphllm — Claude benchmarks 2026](https://www.morphllm.com/claude-benchmarks)
  - [felloai — ultimate Claude model comparison (Sonnet 5.5 released 2026-09-28)](https://felloai.com/ultimate-claude-model-comparison/)
