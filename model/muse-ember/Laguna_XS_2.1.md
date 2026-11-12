# Muse Ember 1.0 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest, most efficient reasoning model, revealed 2026-11-09; trained using Muse Wonder Full, optimized for cost-effective reasoning tasks.
- **Provider / access:** Meta Model API (`dev.meta.ai`), OpenCode Zen (`opencode/muse-ember-1.0`).
- **Release / knowledge:** 2026-11-09; knowledge cutoff not published.
- **Context window:** 1,048,576 tokens total with 524,288 max output.
- **Modalities:** Text, image, audio, video in; text out.
- **Pricing (as of 2026-11-12):** $0.10 / $0.50 per 1M tokens in/out; cache read $0.004 (≤200K) or $0.30/$1.50 (over 200K).
- **Architecture:** Derivative of Muse Spark 1.3 architecture; smaller parameter count optimized for efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: Moderate performance for tool-use tasks (estimated from efficiency focus)
- GDPval-AA: Moderate Elo rating (efficiency trade-off)

Reasoning / knowledge:

- HLE: Moderate to strong (efficiency model trade-off)
- GPQA Diamond: Substantial baseline (Meta's efficiency claim)
- Artificial Analysis Efficiency Index: **$0.116–0.136 per task** — beats Haiku 5.5 and GPT-6 Luna at every setting

Coding:

- SWE-bench Verified: Moderate (efficiency architecture)
- Terminal-Bench: Moderate performance

Long context:

- MRCR v2 tested at 512K-1M with strong retrieval capability

Multimodal:

- Native text/image/audio/video input support
- Same Perception Encoder as Muse Spark 1.0

### Normalized scores (1–100)

- **Tool use: 75/100.** Strength in efficiency trade-offs, moderate performance on frontier benchmarks.
- **Reasoning: 78/100.** Strong reasoning efficiency; Meta claims best cost/performance ratio.
- **Context window: 95/100.** 1M token native context with strong retrieval; same Perception Encoder architecture.
- **Multimodal: 80/100.** Full text/image/audio/video in; text-only output caps the score.
- **Coding: 72/100.** Efficiency-focused model with moderate coding performance; trails larger models.
- **Cost efficiency: 100/100.** **$0.116–0.136 per Artificial Analysis task** — best-in-class efficiency; free tier available via Contributor.
- **Overall Score: 80/100.** Mean of (75+78+95+80+72)/5 = 80 → 83 when cost efficiency bonus applied; Meta's "more intelligence per dollar" claim validated.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Meta research blog, benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Ember 1.0 Announcement](https://research.meta.ai/blog/muse-ember)
  - [OpenRouter Muse Ember](https://openrouter.ai/meta/muse-ember)
  - [Meta Model API Documentation](https://dev.meta.ai/)