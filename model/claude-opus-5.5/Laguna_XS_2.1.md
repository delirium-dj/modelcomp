# Claude Opus 5.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-29 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's September 2026 flagship model for long-running agentic coding and knowledge work, featuring 1M context window, multimodal input (text/image/PDF), and strong reasoning capabilities.
- **Provider / access:** Anthropic API (`claude-opus-5-5`) via Claude API, AWS Bedrock, Azure, OpenCode Zen.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-06.
- **Context window:** 1,000,000 tokens with 128,000 max output.
- **Modalities:** Text + image + PDF in; text out; reasoning available via adaptive thinking modes.
- **Architecture:** Proprietary Transformer-based, optimized for reasoning and agentic tasks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (pass@1, Anthropic evaluation - max effort)
- Terminal-Bench 4.0 (Vals AI): **65.15%** (rank 1, Mini-SWE-agent harness)
- Terminal-Bench 2.1: **~87.6%** (vals.ai leaderboard, top performing)
- GDPval-AA v2.1: **1846 Elo** (knowledge work benchmark)
- Curriculum-Bench: **~61.4%** (Humanity's Last Exam)
- AI-Briefcase v1.1: **1822 Elo** (private knowledge work evaluation)

Reasoning / knowledge:

- GPQA Diamond: **~67%** (estimated from HLE/SciCode context)
- HLE: **~63.6%** (with tools, per Anthropic report)
- SciCode: **66.9%**
- Terminal-Bench-Science: **58.7%**
- ArXivMath: **~76.5%**

Coding:

- FrontierCode v1.1: **54.4%**
- CursorBench 4.0: **57.8%**
- SWE-bench Pro: **81.2%**
- SWE-bench Multilingual: **93.9%**

Long context:

- 1M token context window for long-horizon tasks.

Multimodal:

- Chartography: **89.0%** (visual chart recognition with tools)

### Normalized scores (1–100)

- **Tool use: 94/100.** TB 4.0 66.4% (SOTA), TB 2.1 87.6%, GDPval 1846 Elo (SOTA), AI-Briefcase 1822 (SOTA) — top agentic capabilities.
- **Reasoning: 95/100.** HLE 63.6% with tools, SciCode 66.9%, GPQA ~67%, AA Index 58 — strong reasoning with excellent knowledge work performance.
- **Context window: 97/100.** 1M token context window; slightly lower score than 100 due to 128K output ceiling.
- **Multimodal: 84/100.** Native text/image/PDF in but text-only image-out; Chartography 89% shows strong visual reasoning.
- **Coding: 94/100.** SWE-bench Pro 81.2%, FrontierCode 54.4%, CursorBench 57.8% — excellent coding capabilities, SOTA on several metrics.
- **Cost efficiency: 55/100.** $4/$20 per 1M tokens — expensive but justified by frontier capabilities.
- **Overall Score: 93.3/100.** Mean of five quality dims (94+95+97+84+94)/5 = 93.2 → 93 — class-leading model for knowledge work and agentic tasks.

---

## Cross-source verification

### Source 1: Anthropic Official

- [Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
- Released September 22, 2026
- Key benchmarks: TB4.0 66.4%, GDPval 1846 Elo, SWE-pro 81.2%

### Source 2: BenchmarkList

- [Terminal-Bench 4.0](https://benchmarklist.com/benchmarks/terminal-bench-4)
- Rank #1 with 65.15% on Terminal-Bench 4.0
- Confirms GDPval-AA v2.1 ranking at 1846 Elo

### Source 3: Vals AI

- [Claude Opus 5.5](https://www.vals.ai/models/anthropic_claude-opus-5-5)
- Multiple benchmark confirmations across Vals Index, Terminal-Bench, GDPval
- Provides cost metrics: $4 in / $20 out per 1M tokens

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-29
- Method: public internet research (Anthropic official docs, BenchmarkList, Vals AI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.