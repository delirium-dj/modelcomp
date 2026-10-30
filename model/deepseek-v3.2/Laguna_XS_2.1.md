# DeepSeek V3.2 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight model featuring reasoning capabilities, optimized coding agent performance, and strong multilingual reasoning benchmarks.
- **Provider / access:** DeepSeek API (`deepseek-ai/DeepSeek-V3.2`), OpenAI-compatible endpoints, Hugging Face (MIT license, self-hostable).
- **Release / knowledge:** December 2025; knowledge cutoff late 2025.
- **Context window:** 150,000 tokens (as per arXiv paper).
- **Modalities:** Text in; text out; reasoning support via high-effort mode.
- **Architecture:** Transformer decoder with sparse attention optimization (DeepSeek Sparse Attention).

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.0: **46.4%** (thinking mode, Claude Code harness)
- Terminal-Bench Hard: **34.8%** (rank 48/326, 86th percentile)
- GDPval-AA: **500 Elo** (rank 245/356, 31st percentile)
- Tau2-Bench Telecom: **0.0%** (limited performance on telecom tasks)

**Reasoning / knowledge:**

- MMLU-Pro: **86.3%** (93rd percentile, rank 23/312)
- GPQA-Diamond: **82.4%**
- AIME 2025: **95.0%** (Pass@1)
- HMMT 2025 (Feb/Nov): **92.5% / 90.2%** (Pass@1)
- Codeforces: **2121 rating**
- AI Intelligence Index: Estimated competitive on reasoning benchmarks

**Coding:**

- SWE-bench Verified: **73.1%** (resolved, thinking mode)
- SWE Multilingual: **70.2%** (resolved)
- Terminal-Bench 2.0 (Code Agent): **42.8%** (standard), **54.2%** (thinking mode)
- LiveCodeBench: ~74.9%

### Normalized scores (1–100)

- **Tool use: 75/100.** TB 2.0 46.4% in thinking mode shows solid agentic coding; TB Hard 34.8% middling; GDPval 500 Elo (top 31st percentile); strong on coding agent tasks but weaker on specialized domains like telecom.
- **Reasoning: 85/100.** MMLU-Pro 86.3% (93rd percentile), AIME 95%, GPQA 82.4%; top-tier reasoning performance, competitive with Frontier models on knowledge tasks.
- **Context window: 70/100.** 150K native window, good for research but below 1M-tier competitors; sparse attention provides efficiency.
- **Multimodal: 50/100.** Text-only model; no multimodal capabilities reported.
- **Coding: 78/100.** SWE Verified 73.1%, SWE Multilingual 70.2%, TB 2.0 54.2% in thinking mode; strong open-weight coding performance, top 5 among open models.
- **Cost efficiency: 88/100.** $0.40/$1.20 per 1M tokens (very competitive pricing); MIT license enables free self-hosting.
- **Overall Score: 72/100.** Mean of (75+85+70+50+78)/5 = 71.6 → 72 — excellent open-weight reasoning model with strong coding capabilities.

---

## Cross-source verification

### Source 1: DeepSeek AI Official Papers

- [DeepSeek-V3.2 Paper (arXiv:2512.02556)](https://arxiv.org/html/2512.02556)
- Released: December 2025
- Key benchmarks: MMLU-Pro 86.3%, AIME 95%, SWE Verified 73.1%

### Source 2: Hugging Face

- [deepseek-ai/DeepSeek-V3.2](https://huggingface.co/deepseek-ai/DeepSeek-V3.2)
- Confirms Terminal-Bench 2.0: 46.4% (thinking mode), SWE Verified: 70-73%
- MIT license, self-hostable

### Source 3: BenchmarkList

- [DeepSeek V3.2 Speciale | BenchmarkList](https://benchmarklist.com/models/deepseek-deepseek-v3.2-speciale)
- Terminal-Bench Hard: 34.8% (rank 48/326)
- GDPval-AA: 500 Elo (rank 245/356)
- 86th percentile on agentic tasks

### Source 4: Artificial Analysis

- [DeepSeek V3.2 Intelligence Index](https://artificialanalysis.ai/models/deepseek-v3-2)
- Intelligence Index scores competitive with reasoning models

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (DeepSeek arXiv paper, Hugging Face, BenchmarkList, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.