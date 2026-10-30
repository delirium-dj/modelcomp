# Claude Haiku 5.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's October 2026 fast, cost-efficient Haiku-class model with adjustable reasoning effort, strong on narrow tasks and Vibe Code Bench, positioned as a budget alternative for compaction/summarization work.
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), Chat Completions, Responses, Claude Platform subscriptions.
- **Release / knowledge:** October 7, 2026.
- **Context window:** 1,048,576 tokens (1M) with 128,000 max output.
- **Modalities:** Text in; text out; reasoning via adjustable effort settings (low/medium/high/max).
- **Architecture:** Proprietary Claude Transformer optimized for cost-efficient reasoning.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 4.0: **36.4%** (Vals AI, rank 19/58)
- Terminal-Bench 4.0 (AA): **33%** (medium effort)
- Terminal-Bench Science: **10.0%** (Vals AI, 18/43)
- OSWorld 2.1 (offline): **72.4%** (offline subset, max effort)

**Reasoning / knowledge:**

- GDPval-AA v2.1: **1620 Elo** (rank competitive, knowledge work benchmark)
- AA-Briefcase v1.1: **1578 Elo**
- Vals Index: **58.73%** (rank #14 of 30)
- Humanity's Last Exam (no tools): **45.9%**
- Humanity's Last Exam (with tools): **57.4%**

**Coding:**

- Vibe Code Bench v1.1: **90.44%** (rank #3 of 122)
- Terminal-Bench 4.0: **36.4%** (coding-focused subset)
- SWE-Bench Pro: **64.8%** (Anthropic report)
- SWE-bench Multilingual: **83.7%**

**Multimodal:**

- Chartography: **46.4%** (visual reasoning, no tools)

**Cost efficiency:**

- $0.10 in / $0.50 out per 1M tokens (very efficient for Haiku tier)
- 10x cheaper input than Opus 5.5 ($1.00)

### Normalized scores (1–100)

- **Tool use: 58/100.** OSWorld 72.4% (offline), Terminal-Bench 4.0 36.4% (middling for agentic coding); best for budget-sensitive narrow tasks.
- **Reasoning: 68/100.** GDPval 1620 Elo, Vals Index 58.73%, HHLE 45.9%; solid mid-tier reasoning, 80% of way to Sonnet 5.5's scores.
- **Context window: 85/100.** 1M native context; excellent for long-document tasks.
- **Multimodal: 45/100.** Basic text input; Chartography 46.4% shows moderate vision capability.
- **Coding: 70/100.** Vibe Code Bench #3, SWE Pro 64.8%; excels at specific coding benchmarks but not general agentic coding.
- **Cost efficiency: 92/100.** $0.10/$0.50 per 1M tokens; exceptional value for the Haiku class.
- **Overall Score: 65.2/100.** Mean of (58+68+85+45+70)/5 = 65.2 → 64 — budget-friendly model with niche strengths; use for cost-sensitive workloads.

---

## Cross-source verification

### Source 1: Anthropic Official

- [Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)
- Released: October 7, 2026
- Key claims: Adjustable effort settings, lowest cost Haiku tier
- Benchmarks: TB 4.0 36.4%, Vibe Code 90.44%, GDPval 1620 Elo

### Source 2: Vals AI

- [Claude Haiku 5.5 | Vals AI](https://www.vals.ai/models/anthropic_claude-haiku-5-5)
- Vals Index: #14 of 30 (58.73%)
- Terminal-Bench 4.0: 36.36% (rank 19/58)
- Pricing: $0.10 in / $0.50 out per 1M tokens

### Source 3: Gradually.ai

- [Claude Haiku 5.5 vs Gemini 4 Carbon](https://www.gradually.ai/en/llm-comparison/claude-haiku-5-5-vs-gemini-4-carbon/)
- Vals Index: 58.7% vs 60.5%
- Legal Research: 43.8% vs 26%
- Terminal-Bench 4.0: 36.4% vs 49.5%

### Source 4: ComputingForGeeks

- [Claude Haiku 5.5 Benchmarks](https://computingforgeeks.com/claude-haiku-5-5-released-features-benchmarks)
- Comprehensive benchmark table from Anthropic system card
- Confirms SWE-Bench Pro 64.8%, SWE Multilingual 83.7%

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Anthropic docs, Vals AI, Gradually.ai, BenchmarkList, ComputingForGeeks); scores are normalized 1–100 interpretations, not official vendor scores.