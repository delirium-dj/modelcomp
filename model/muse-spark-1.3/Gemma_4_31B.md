# Muse Spark 1.3

## Signature
- Provided by: **Gemma_4_31B** — 2026-11-04
- Reference URLs:
  - https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology
  - https://www.eesel.ai/blog/meta-muse-spark-13-review
  - https://research.meta.ai/static/muse-spark-1-3-evaluation-report
  - https://www.datacamp.com/blog/muse-spark-1-3
  - https://kingy.ai/blog/muse-spark-1-3-review-benchmarks-pricing-verdict/
  - https://benchlm.ai/models/muse-spark-1-3
  - https://artificialanalysis.ai/models/comparisons/gpt-6-astra-vs-muse-spark-1-3
  - https://www.mindstudio.com/blog/meta-muse-spark-1-3-benchmark-confusion

## Model Card
Muse Spark 1.3 is a frontier reasoning model from Meta, emphasizing high-efficiency agentic coding and exceptional long-context retrieval. It is designed as a "value-per-token" leader, providing performance comparable to the highest-tier models (like Claude Opus 5 and GPT-5.6 Sol) at a significantly lower API cost.

### Capabilities
- **Long Context Retrieval:** Elite performance on MRCR v2, maintaining 98%+ recall even in the 512K-1M token band, significantly outperforming rivals.
- **Agentic Coding:** Leads on DeepSWE v1.1 (75.4%) and SWE-Atlas CodeBase Q&A (59.4%), and ties the state-of-the-art on Terminal-Bench 2.1 (88.8%).
- **Agent Orchestration:** Competitive on knowledge work (GDPVal-AA) and computer use (OSWorld 2.0), though typically trails Claude Opus 5 narrowly.
- **Reasoning:** Strong general intelligence (AII 62 for `max` tier), though practical performance can vary based on reasoning budget (e.g., `xhigh` vs `max`).

### Context & Constraints
- **Context Window:** 1M tokens.
- **Reasoning Tiers:** `max` (highest capability, gated at launch), `xhigh`, and `high`.
- **Known Issues:** High verbosity (uses ~3x tokens of 1.2) and occasional "reasoning starvation" where hidden CoT consumes the entire completion budget.

## Access & pricing
- **Tiers:** Standard, Contributor
- **Pricing (Standard):**
  - Input: $1.25 /M tokens
  - Output: $4.25 /M tokens
- **Pricing Note:** One of the most cost-effective frontier models available. The Contributor tier is even cheaper but involves a training-data trade (privacy risk).
- **Official URL:** https://research.meta.ai/static/muse-spark-1-3-evaluation-report

## Raw Benchmarks
- **Agentic Coding:**
  - DeepSWE v1.1: 75.4%
  - SWE-Atlas CodeBase Q&A: 59.4%
  - Terminal-Bench 2.1: 88.8%
- **Long Context (MRCR v2):**
  - 256K–512K: 98.5%
  - 512K–1M: 98.1%
- **Agent Tasks:**
  - GDPVal-AA v2: 1754 Elo
  - JobBench: 64.9%
  - OSWorld 2.0: 66.9% (partial)
  - AutomationBench: 49.4%
- **Reasoning:**
  - PostTrainBench: ~45% (level with GPT-5.6 Sol)

## Normalized Scores
- **Tool use: 92/100**
- **Reasoning: 93/100**
- **Context window: 98/100**
- **Multimodal: 85/100**
- **Coding: 96/100**
- **Cost efficiency: 98/100**
- **Overall Score: 92.4/100**
