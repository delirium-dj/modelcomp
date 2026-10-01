# Claude Opus 5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for deepest reasoning and longest autonomous coding/research runs; 1M context.
- **Provider / access:** Anthropic API `claude-opus-5` + Claude Code/Cowork; Messages API; adaptive thinking with max effort; no Zen Free ID.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff May 2026.
- **IDs:** `anthropic/claude-opus-5` (no Free ID).
- **Context window:** 1,000,000 tokens / 128K max output; verified.
- **Modalities:** Text, image, PDF in; text out; max reasoning effort; tool calls; computer use enabled.
- **Pricing (as of 2026-10-01):** $5 input / $25 output per 1M tokens; paid tier only.
- **Architecture:** Proprietary; Anthropic's 5th generation Opus model.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1852-1861 Elo** (field leader)
- OSWorld 2.0: **75.4%** (BenchmarkList leader tag)
- Terminal-Bench 4.0: **53.9%** (#3 on leaderboard, max effort via Claude Code)
- BrowseComp: **86.8%** (Anthropic launch, multi-agent harness)
- SWE Atlas QnA: **63.2%** (BenchmarkList leader)

Reasoning / knowledge:

- AI Intelligence Index: **61** (max, Artificial Analysis)
- ARC-AGI-3 (novel-problem solving): **30.2%** (3x next-best)

Coding:

- SWE-bench Verified: **96.0%** (field leader)
- SWE-bench Pro: **79.2%** (BenchLM #4)
- DeepSWE: **74.0%** (field leader, Meta table)
- Frontier-Bench v0.1: **43.3%** (Anthropic launch)
- Coding Agent Index: **60** (AA)

Long context:

- 1M window verified; no MRCR/RULER retrieval claims.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 94/100.** GDPval 1852/1861 Elo leader + OSWorld 75.4% + Terminal-Bench 53.9% #3; elite orchestration; capped by missing TB2.1/Tau3.
- **Reasoning: 95/100.** AA Index 61 (world-best) + ARC-AGI-3 30.2% (3x gap) frontier reasoning; capped by missing GPQA/HLE public absolutes.
- **Context window: 100/100.** Full 1M verified; top-tier score.
- **Multimodal: 65/100.** Text/image/PDF in; text-only output; no video/audio.
- **Coding: 96/100.** SWE-V 96% leader + SWE-Pro 79.2% + Frontier 43.3% best-in-class; no LiveCodeBench/DeepSWE absolutes caps from higher.
- **Cost efficiency: 45/100.** $5/$25 premium pricing; expensive.
- **Overall Score: 90/100.** Mean of (94+95+100+65+96)/5 = 90.0 → 90. Best fit: premium deepest-reasoning and longest-run coding tasks.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Anthropic docs, AI Analysis articles, BenchmarkList); scores normalized 1-100 interpretations, not official vendor scores. Reference: Muse Spark 1.3 Contributor authoritative report.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_6.md`, using the same headings.