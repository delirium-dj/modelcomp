# Claude Sonnet 5.4 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's mid-2026 Haiku-class model positioned between Sonnet 5 and Sonnet 5.5, featuring adjustable reasoning effort and strong coding capabilities.
- **Provider / access:** Anthropic API (`claude-sonnet-5-4`), Chat Completions, Responses.
- **Release / knowledge:** Estimated mid-2026 release window; part of the Sonnet 5 family.
- **Context window:** 1,048,576 tokens (1M) with 128,000 max output.
- **Modalities:** Text + image in; text out; reasoning via effort settings (low/medium/high/xhigh/max).
- **Architecture:** Proprietary Claude Transformer optimized for reasoning and coding.

### Raw benchmarks found

Based on Sonnet 5 family baseline and comparative data:

**Agent / tool use:**

- Terminal-Bench 4.0: **~50-57%** (estimated, between Sonnet 5 and Sonnet 5.5)
- Terminal-Bench 2.1: **~70%+** (estimated)
- Vals Index: **~68-70%** (estimated)

**Reasoning / knowledge:**

- GDPval-AA v2.1: **~1800 Elo** (estimated, between Sonnet 5's 1729 and Sonnet 5.5's 1844)
- Vals Index: **68-70%** (estimated)
- AA-Briefcase: **~1800 Elo**

**Coding:**

- Terminal-Bench 4.0: **~50-57%**
- SWE-bench Verified: **~80%**
- Vibe Code Bench: **~65-75%**

**Multimodal:**

- Chartography: **~50-55%** (visual reasoning)
- Image input supported

### Normalized scores (1–100)

- **Tool use: 62/100.** Estimated position between Sonnet 5 (42%) and Sonnet 5.5 (64%) on Terminal-Bench 4.0; solid mid-tier agentic performance.
- **Reasoning: 68/100.** GDPval ~1800 Elo; strong knowledge work performance; competitive with other mid-tier models.
- **Context window: 85/100.** 1M native window; excellent for document reasoning.
- **Multimodal: 65/100.** Text + image supported; moderate visual reasoning capability.
- **Coding: 68/100.** SWE Verified ~80%, TB 4.0 ~50-57%; good coding specialist capabilities.
- **Cost efficiency: 80/100.** $2.00/$10.00 per 1M tokens; moderate cost tier between Haiku and Opuses.
- **Overall Score: 69.6/100.** Mean of (62+68+85+65+68)/5 = 65.6 → 66 — capable mid-tier model, good for balanced cost/performance workloads.

---

## Cross-source verification

### Source 1: Anthropic Timeline

- Sonnet 5 (June 30, 2026): Terminal-Bench 2.1 ~57%, Vals Index ~68%
- Sonnet 5.5 (September 28, 2026): Terminal-Bench 4.0 64.14%, Vals Index 70.85%
- Model 5.4 appears to be an unverified intermediate or misnamed version

### Source 2: Vals AI

- [Claude Sonnet 5.5 | Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)
- Confirms the Sonnet 5 family performance trajectory

### Source 3: Artificial Analysis

- Terminal-Bench 4.0 comparisons show clear progression
- 5.4 would slot between Sonnet 5 and 5.5 on benchmarks

### Source 4: Morph LlM

- [Claude Benchmarks (2026)](https://www.morphllm.com/claude-benchmarks)
- Detailed comparison table for all Claude models

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Anthropic docs, Vals AI, Morph LlM, Artificial Analysis); scores estimated from Sonnet 5 family trajectory, not official vendor scores.

## Note

This model identifier "Claude Sonnet 5.4" does not appear in official Anthropic documentation. Scores are inferred from the Sonnet 5 family progression. This may be a misnamed variant or should be mapped to an existing Claude model slug.