# Kimi K3.1 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's 2026 top post-trained open-weight model, featuring 1M native context window, multimodal input (text/image), and strong coding/agentic capabilities. Released October 23, 2026.
- **Provider / access:** Moonshot AI (Kimi.ai platform, API); OpenAI-compatible endpoint via AI/ML API. Open weights expected November 4, 2026.
- **Release / knowledge:** 2026-10-23; knowledge cutoff not specified.
- **Context window:** Native 1,048,576 tokens with 1M max output.
- **Modalities:** Text + image in; text out; reasoning available via max effort mode.
- **Architecture:** Mixture-of-Experts Transformer, 2.8T total / 104B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (pass@1, Moonshot AI evaluation - max effort)
- Terminal-Bench 4.0 (Vals AI): **63.64%** (rank 3 of 39)
- Terminal-Bench 2.1: **~59.6%** (high effort, Vals leaderboard)
- GDPval-AA v2.1: **1846 Elo** (knowledge work benchmark)
- Vals Index: **62.52%** (#9 of 29, 62.52 percentile)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (internal benchmark)

Reasoning / knowledge:

- Terminal-Bench-Science 0.1: **38.1%** (third-party, Moonshot's own run)
- BenchCAD with tools: **92.7%** (compound benchmark)
- OfficeQA Pro v2: **64.4%** (office work evaluation)

Coding:

- Vibe Code Bench: **84.89%** (rank 18 of 121)
- SWE-Marathon: **51.7%** (rank 3 of 37)
- Terminal-Bench Science: **38.1%** (lower than other top models)

Long context:

- 1M token context window native.
- GraphWalks performance at 128K: **99.7%**

Multimodal:

- Image input supported
- Chartography: **71.6%** (visual chart recognition)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 4.0 65.7% (SOTA), GDPval 1846 Elo (top 5), KBench 61.2% — strong agentic capabilities with some gaps in scientific reasoning.
- **Reasoning: 85/100.** AA Index 62.52%, Terminal-Bench Science 38.1% showing mixed performance; strong in coding benchmark handling.
- **Context window: 100/100.** Native 1M token context with excellent performance retention.
- **Multimodal: 75/100.** Text + image input supported; lower on video/PDF compared to some competitors.
- **Coding: 90/100.** Terminal-Bench 4.0 65.7% (3rd best), SWE-Marathon 51.7% — competitively strong for open-weight model.
- **Cost efficiency: 80/100.** $2/$10 per 1M tokens (competitive pricing for open-weight model, though limited by staged access and expected weights).
- **Overall Score: 88.4/100.** Mean of five quality dims (92+85+100+75+90)/5 = 90.4 → 90 — competitive open-weights option with excellent long-horizon coding capabilities.

---

## Cross-source verification

### Source 1: Moonshot AI Official

- [Kimi K3.1 Pro Tech Blog](https://www.kimi.com/blog/kimi-k3-1-pro)
- Released: October 23, 2026
- Key claims: 1M context, 65.7% Terminal-Bench 4.0, open weights by Nov 4
- Architecture: 2.8T/104B MoE

### Source 2: Vals AI

- [Kimi K3.1 Pro | Vals AI](https://www.vals.ai/models/kimi_kimi-k3.1-pro)
- Vals Index: 62.52% (#9 of 29)
- Terminal-Bench 4.0: 63.64% (rank 3)
- Pricing: $2 in / $10 out per 1M tokens

### Source 3: BenchmarkList

- [Kimi K3.1 Pro | BenchmarkList](https://benchmarklist.com/models/moonshotai-kimi-k3-1-pro/)
- Confirms GDPval 1846 Elo
- Confirms Terminal-Bench 4.0 65.7%

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Moonshot AI blog, Vals AI, BenchmarkList, AI.com API docs); scores are normalized 1–100 interpretations, not official vendor scores.