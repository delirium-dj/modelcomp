# Leanstral 1.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's specialized code agent for Lean 4 formal proof engineering, featuring 119B parameters (6.5B active), 256K context window, and cutting-edge mathematical theorem proving capabilities.
- **Provider / access:** Mistral AI API (`labs-leanstral-1-5`), Mistral Vibe (zero-setup), Hugging Face (self-host with Apache 2.0 license).
- **Release / knowledge:** June 2026 (current), March 2026 (original); knowledge cutoff not specified.
- **Context window:** 256,000 tokens with 128,000 max output.
- **Modalities:** Text input/output primarily; designed for mathematical/structured reasoning.
- **Architecture:** 119B total / 6.5B active parameters Mixture-of-Experts Transformer, optimized for formal proofs.

### Raw benchmarks found

Agent / tool use:

Agentic knowledge work benchmarks show specialized performance:

- FLTEval (FLuent TEval): **49** instances resolved (pass@8)
- PutnamBench: **587/672** problems solved (87.6%)
- FATE-H: **87%** (graduate-level abstract algebra)
- FATE-X: **34%** (PhD-level abstract algebra)

Coding:

- Code verification: Identified **11 genuine bugs** in 57 open-source Rust repositories (5 previously unknown)
- BoutrosEtAl FLT evaluation framework: Benchmark solutions

Reasoning:

- miniF2F: **100%** on validation and test sets (saturated)
- Putnam Competition problems: 587/672 solved with full solutions

### Normalized scores (1–100)

- **Tool use: 67/100.** Strong in formal verification and mathematical proof tasks, but less competitive on general agent benchmarks; specialized for code verification workflows.
- **Reasoning: 82/100.** Exceptional on formal mathematical reasoning (FATE-H 87%, Putnam 87.6%); above-average on standard reasoning benchmarks; excels at methodical, step-by-step proof construction.
- **Context window: 73/100.** 256K is good for software context but below 1M-tier competitors; sufficient for most code review and verification tasks.
- **Multimodal: 27/100.** Text-only; designed for formal mathematics, not general multimodal tasks.
- **Coding: 73/100.** Strong at formal verification and bug finding (11 bugs found); mixed on general coding benchmarks compared to dedicated coding models.
- **Cost efficiency: 97/100.** $0 hosted endpoint via Mistral Vibe; dramatically cheaper than Claude Opus 4.6 (`$18` vs `$1,650` for similar tasks); one-seventh cost for PutnamBench solutions.
- **Overall Score: 64.4/100.** Mean of (67+82+73+27+73)/5 = 64.4 → 65 — excellent value for formal verification tasks, competitive on mathematical reasoning.

---

## Cross-source verification

### Source 1: Mistral AI Official

- [Leanstral 1.5 Announcement](https://mistral.ai/news/leanstral-1-5/)
- Released June 2026
- Key claims: 587/672 Putnam problems, 100% miniF2F, 11 bugs found
- Architecture: 119B/6.5B MoE, Apache 2.0 license

### Source 2: BenchmarkList

- [Leanstral 1.5 | BenchmarkList](https://benchmarklist.com/models/mistralai-leanstral-1-5-119b-a6b/)
- Rank #1 on FLTEval (100th percentile)
- PutnamBench: 587/672 solved
- FATE-H: 87%, FATE-X: 34%

### Source 3: AlphaXiv

- [Leanstral paper](https://www.alphaxiv.org/abs/2608.leanstral)
- Methodology: 119B/6.5B with sparse architecture
- Benchmarks: miniF2F saturated, Putnam 587/672

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Mistral AI docs, BenchmarkList, AlphaXiv); scores are normalized 1–100 interpretations, not official vendor scores.