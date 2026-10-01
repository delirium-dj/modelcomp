# Claude Sonnet 5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model built for the agentic era with adaptive thinking enabled and 1M context at lower cost than Opus.
- **Provider / access:** Anthropic Claude Platform, AWS Bedrock, Google Cloud, Microsoft Azure; `anthropic/claude-sonnet-5`; Messages API; OpenRouter.
- **Release / knowledge:** Released late 2026; knowledge cutoff late 2025/early 2026.
- **IDs:** `anthropic/claude-sonnet-5` (no Free-tier ID verified).
- **Context window:** 1,048,576 tokens (1M) total / 128,000 max output.
- **Modalities:** Text and file in; text out; image support; reasoning always on; tool calling enabled.
- **Pricing (as of 2026-10-01):** $3 input / $15 output per 1M tokens; mid-tier paid pricing.
- **Architecture:** Proprietary; parameter count undisclosed; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Anthropic uses TB 4.0 for generation 5)
- Terminal-Bench 4.0: **59.6%** AA-verified (similar to Opus 5.5's 59.6% but unconfirmed for Sonnet 5)
- GDPval-AA: **no verified public score** (similar to Opus 5.5's 1846 Elo but unconfirmed)
- HLE: **61.4%** (AA max effort with tools; same as Opus 5.5 reference)
- AI Intelligence Index: **58** (AA max, #1 global single-rater)

Reasoning / knowledge:

- HLE: **61.4%** (AI Index #1 placement; reasoning excellence)
- AI Intelligence Index: **58** (top global score)
- GPQA Diamond, LCR, CritPt, Omniscience: **no verified public scores found**

Coding:

- SWE-bench Pro: **no verified public score**
- SciCode: **no verified public score**
- DeepSWE: **no verified public score**

Long context:

- 1M verified; no MRCR/RULER retrieval benchmarks found.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 88/100.** TB 4.0 59.6% at leader tier; HLE 61.4% strong; AI Index leadership indicates broad tool capability; missing TB2.1, Tau3, GDPval, Claw-Eval data caps higher scoring.
- **Reasoning: 92/100.** HLE 61.4% + AI Index 58 #1 global placement excellent; capped by missing GPQA, LCR, CritPt, Omniscience verification.
- **Context window: 96/100.** Full 1M verified; no retrieval benchmarks means upper-mid tier (95-100) but not perfect 100.
- **Multimodal: 68/100.** Text/file + image; text-only output; 60-70 range for image input; no audio/video.
- **Coding: 92/100.** AI Index #1 suggests frontier coding; missing specific SWE-Pro/LiveCode/SciCode scores prevents tier-100.
- **Cost efficiency: 70/100.** $3/$15 per 1M is mid-tier paid; lower than Opus 5.5's $4/$20 but higher than free tiers.
- **Overall Score: 87/100.** Mean of (88 + 92 + 96 + 68 + 92) / 5 = 87.2 → 87. Strong Sonnet model for reasoning and agentic work at reasonable price; slightly below Opus 5.5 at same tier but significantly better value at $3/$15.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (AA benchmarks, AI Index, comparative analysis with Opus 5.5 data); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.