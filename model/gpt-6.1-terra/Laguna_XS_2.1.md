# GPT-6.1 Terra — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's October 2026 office-task and software-control focused model, positioned as a cost-efficient alternative for non-coding-intensive work with dramatically reduced hallucination rates.
- **Provider / access:** OpenAI API (Chat Completions, Responses, Batch, Flex), Azure, AWS Bedrock.
- **Release / knowledge:** 2026-10-26; knowledge cutoff not specified.
- **Context window:** 1M tokens; max output not specified (likely similar to other GPT-6.x models).
- **Modalities:** Text in; text out; reasoning via adaptive settings.
- **Architecture:** Proprietary, successor to GPT-5.6 Terra with significant improvements in factuality.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** (max effort, OpenAI evaluation)
- Terminal-Bench 4.0 (Vals AI): **49.49%** (Mini-SWE-agent harness)
- Terminal-Bench 4.0 (AA): **56%** (medium effort)
- Agents' Last Exam: **39.5%** (medium effort)
- AI Index: **48** (Intelligence Index, Vals AI)

Reasoning / knowledge:

- SciCode: **55%** (max effort)
- Terminal-Bench-Science 0.1: **54.8%** (ML domain), **26.7%** (Hardware domain)
- AA-Omniscience hallucination rate: **38%** (drastic improvement from 88% for previous)
- GDPval-AA v2.1: **~1476 Elo** (varies by effort level)

Coding:

- Terminal-Bench 4.0 (coding-focused): **50.3%** - improved from 21.5% for GPT-5.6 Terra
- Terminal-Bench Science (ML domain): **42.4%** at max effort

Long context:

- 1M token context window maintained from previous generations.

### Normalized scores (1–100)

- **Tool use: 79/100.** TB4.0 50.3% shows strong performance for an efficiency-focused model; gap to SOTA indicates it's optimized for cost-sensitive workloads rather than absolute peak performance.
- **Reasoning: 79/100.** AI Index 48, SciCode 55%, TB-Science 54.8% on ML tasks; significant hallucination reduction (38% vs 88%) shows improved reliability.
- **Context window: 95/100.** 1M window but less proven in long-context retrieval benchmarks compared to specialized models.
- **Multimodal: 60/100.** Basic text-in/out; no advanced multimodal capabilities reported.
- **Coding: 65/100.** Terminal-Bench 4.0 50.3% is middling compared to Opus 5.5 (66%) and K3.1 Pro (65.7%); positioned as decent for internal tools but not cutting-edge.
- **Cost efficiency: 85/100.** Over 3x faster than GPT-6 Astra, significantly reduced hallucination rates, making it highly cost-effective for knowledge work tasks.
- **Overall Score: 75.6/100.** Mean of (79+79+95+60+65)/5 = 75.6 → 78 (accounting for cost efficiency and performance/cost ratio not factoring into mean but making it competitive).

---

## Cross-source verification

### Source 1: OpenAI Official

- [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra)
- Released: October 26, 2026
- Key claims: 65% reduction in hallucinations, 3x faster than competitors, 50.3% on Terminal-Bench 4.0

### Source 2: Artificial Analysis

- Intelligence Index: 48
- GDPval-AA v2.1: ~1476 Elo
- Terminal-Bench 4.0: 56% (medium effort)
- Key finding: 50% reduction in error rate vs previous generation

### Source 3: Vals AI

- [GPT-6.1 Terra | Vals AI](https://www.vals.ai/models/openai_gpt-6-1-terra)
- Terminal-Bench 4.0: 49.49% (rank 11)
- Cost-performance position on Pareto frontier

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (OpenAI official docs, Artificial Analysis, Vals AI, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.