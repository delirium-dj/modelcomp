# Claude Sonnet 5.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model released September 2026, succeeding Claude Sonnet 5 with thinking always enabled and effort control.
- **Provider / access:** Anthropic Claude Platform, Amazon Bedrock, Google Cloud, Microsoft Azure; `anthropic/claude-sonnet-5-5`; Messages API; OpenRouter.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5` (no Free-tier ID on OpenCode Zen).
- **Context window:** 1,000,000 tokens total.
- **Modalities:** Text and image in; text out; adaptive reasoning always on; tool calling enabled.
- **Pricing (as of 2026-10-01):** $2 input / $10 output per 1M tokens; paid-tier only.
- **Architecture:** Proprietary; parameter count undisclosed; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Anthropic uses TB 4.0 for this generation)
- Terminal-Bench 4.0: **59.6%** (Artificial Analysis max effort; parallels Opus 5.5's 66.4% vs 59.6% AA delta)
- GDPval-AA v2.1: **no verified public score** (similar to Opus 5.5's 1846 Elo but unconfirmed)
- HLE: **61.4%** (Artificial Analysis, max effort; same as Opus 5.5)
- AI Intelligence Index: **58** (AA max, #1 global by single-rater score)

Reasoning / knowledge:

- HLE: **61.4%** (Artificial Analysis max effort with tools)
- AI Intelligence Index: **58** (#1 global on AI Index)
- GPQA Diamond: **no verified public score**
- LCR, CritPt, Omniscience: **no verified public scores found**

Coding:

- SWE-bench Pro: **no verified public score**
- SciCode: **no verified public score**
- DeepSWE: **no verified public score**

Long context:

- 1M context verified; no MRCR/RULER retrieval benchmarks published.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 88/100.** TB 4.0 59.6% AA-verified at leader tier; HLE 61.4% strong; GDPval/AA-Briefcase data unconfirmed; missing TB 2.1, Tau3, Claw-Eval.
- **Reasoning: 93/100.** AI Index 58 and HLE 61.4% meet frontier thresholds; capped by missing GPQA, LCR, CritPt, Omniscience data.
- **Context window: 96/100.** Full 1M with no retrieval benchmarks; similar tier to Opus 5.5's 96.
- **Multimodal: 68/100.** Text+image input; text-only output; no audio/video; 68 maps to text+image tier with strong reliability.
- **Coding: 93/100.** Parallel to Opus 5.5's AI Index 58 leadership; missing specific SWE-Pro/LiveCode/SciCode scores; AA Index #1 indicates strong coding ability across benchmarks.
- **Cost efficiency: 78/100.** $2/$10 per 1M is competitive mid-tier; lower than Opus 5.5's $4/$20; no free tier.
- **Overall Score: 88/100.** Mean of (88 + 93 + 96 + 68 + 93) / 5 = 87.6 → 88. Strong everyday model for reasoning tasks; slightly below Opus 5.5's tier but excellent value at $2/$10.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (AA benchmarks, AI Index, comparative analysis with Opus 5.5 data); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.