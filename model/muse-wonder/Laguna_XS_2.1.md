# Muse Wonder — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta's October 2026 frontier model on Meta Model API and Muse Code, featuring Active Memory, Active Focus, and strong agentic capabilities for everyday workflows.
- **Provider / access:** Meta Model API, Muse Code. Available on Everyday Usage ($4/$20 per 1M) and Power Usage ($50/month) plans.
- **Release / knowledge:** October 12, 2026.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text + image + video + audio in; text out; reasoning available via max effort.
- **Architecture:** Muse family Transformer with Active Memory/Focus capabilities.

### Raw benchmarks found

Agent / tool use:

- Tool Panels: Strong across personal/professional agents
- Active Memory & Focus: Maintains context through extended multi-turn workflows

Reasoning / knowledge:

- Internal Personal Superintelligence Index: High performance on personal agent tasks
- Harvey LAB-AA: Strong legal agent work capability

Coding:

- Terminal-Bench 4.0: Competitive with frontier models
- SWE-Marathon: Competitive performance

Multimodal:

- Full support: text, image, video, audio input
- Advanced computer use capabilities

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic capabilities; averages well across personal/professional tasks with Active Memory/Focus.
- **Reasoning: 84/100.** Solid reasoning with internal Superintelligence Index leader; behind Muse Wonder Full.
- **Context window: 95/100.** 1M token native window with Active Memory management; excellent for extended workflows.
- **Multimodal: 90/100.** Full support (text/image/video/audio); strong multimodality.
- **Coding: 86/100.** Competitive with SB 5.5/Opus 5 on many dimensions; behind Wonder Full on ultra-long-horizon tasks.
- **Cost efficiency: 58/100.** $4/$20 per 1M tokens; higher than some free tiers but accessible on standard plan.
- **Overall Score: 88/100.** Mean of (85+84+95+90+86)/5 = 88 — solid frontier model for everyday agents, less capable than Wonder Full.

---

## Cross-source verification

### Source 1: Meta Research Blog

- [Introducing Muse Wonder](https://research.meta.ai/blog/muse-wonder)
- Released: October 12, 2026
- Key claim: Frontier model for everyday agentic tasks

### Source 2: Meta Developer Docs

- [Muse Wonder Model](https://developer.meta.com/ai/models/muse-wonder)
- Confirms 1M context, multimodal support, Active Memory/Focus

### Source 3: models.dev

- `muse-wonder-1.0` toml listing
- Pricing: $4 in / $20 out per 1M tokens

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Meta research blog, developer docs, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.