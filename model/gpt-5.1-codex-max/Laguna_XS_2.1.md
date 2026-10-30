# GPT-5.1 Codex Max — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's December 2025 agentic coding model optimized for long-running tasks, trained on real-world software engineering workflows including PR creation, code review, and complex debugging.
- **Provider / access:** OpenAI Codex (Responses API), available in Codex CLI, IDE extension, and cloud; API access available through OpenAI API.
- **Release / knowledge:** December 4, 2025; knowledge cutoff late 2025.
- **Context window:** 400,000 tokens with 128,000 max output.
- **Modalities:** Text + image in; text out; reasoning via high/xhigh effort modes.
- **Architecture:** GPT-based Transformer optimized for code.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.8%** (high effort, Codex CLI harness)
- Terminal-Bench Hard: **45.5%** (rank 19/326, Vals AI)
- Terminal-Bench 4.0: **34.8%** (hard subset, lower due to task difficulty)
- GDPval-AA: **1193 Elo** (rank 74/356, 79th percentile)

Coding:

- SWE-bench Verified: **77.9%** (n=500, xhigh effort)
- SWE-Lancer IC SWE: **79.9%** (first place)
- Vibe Code Bench v1.1: **22.17%** (rank 86/121)
- LiveCodeBench: **83.56%** (rank 48/143)

Long context:

- 400K token context window.

### Normalized scores (1–100)

- **Tool use: 79/100.** TB 2.0 52.8% (decent for coding-focused), TB4.0 Hard 45.5%, GDPval 1193 Elo (solid for non-frontier); positioned as good for code-heavy agentic tasks.
- **Reasoning: 75/100.** Strong on coding benchmarks but lower on general reasoning vs SOTA models; middle-of-the-pack for knowledge work.
- **Context window: 85/100.** 400K is excellent for coding tasks but below 1M-tier competitors; good for software engineering workloads.
- **Multimodal: 50/100.** Text + image in; basic image understanding, no video/audio.
- **Coding: 84/100.** SWE-bench 77.9% (SOTA range), SWE-Lancer 79.9% (1st place), though Vibe Code Bench shows weakness in some areas.
- **Cost efficiency: 75/100.** $1.25/$10 per 1M tokens; reasonable for coding model but expensive compared to frontier alternatives.
- **Overall Score: 74.6/100.** Mean of (79+75+85+50+84)/5 = 74.6 → 74 — solid coding specialist, not a generalist.

---

## Cross-source verification

### Source 1: OpenAI Official

- [Building more with GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max)
- Released December 4, 2025
- Key claim: first model to operate in Windows environments
- Benchmarks: SWE-bench Verified 77.9%, SWE-Lancer 79.9%, TB 2.0 52.8%

### Source 2: BenchmarkList

- [GPT-5.1 Codex Max | BenchmarkList](https://benchmarklist.com/models/openai-gpt-5.1-codex)
- Rank: 68th on agentic scores, 79th percentile
- Terminal-Bench Hard: 45.5%, GDPval 1193

### Source 3: Vals AI

- [GPT-5.1 Codex Max | Vals AI](https://www.vals.ai/models/openai_gpt-5-1-codex-max)
- Vibe Code Bench: 22.17% (lower performance on that specific metric)
- Vals Index: 52.86% accuracy
- Pricing: $1.25 in / $10 out per 1M tokens

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (OpenAI official docs, BenchmarkList, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.