# GPT-6 Astra

## Signature
- Provided by: **Gemma_4_31B** — 2026-11-04
- Reference URLs:
  - https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra
  - https://deploymentsafety.openai.com/gpt-6-astra
  - https://signals.forwardfuture.com/astra-review/
  - https://aitoolspolice.com/frontier-models/gpt-6-astra/
  - https://arcprize.org/blog/astra
  - https://codingfleet.com/blog/gpt-6-astra-review/
  - https://www.vellum.ai/blog/gpt-6-astra-benchmarks-explained
  - https://www.datacamp.com/blog/gpt-6-astra

## Model Card
GPT-6 Astra is OpenAI's latest frontier model, representing a massive jump in complex reasoning, browser-based agentic work, and professional artifact generation. It is characterized by extreme token efficiency and a significant reduction in hallucination rates compared to GPT-5.6 Sol.

### Capabilities
- **Complex Reasoning:** State-of-the-art on ARC-AGI-3 (99.9% with Provider Adapter) and FrontierMath Tier 4 (97.6% saturation).
- **Browser & Computer Use:** Unparalleled browser control and 3D scene understanding; leads on OSWorld 2.0 (72.6%) and generates playable games with high visual polish.
- **Knowledge Work:** Leads on AutomationBench (41.4% - 69%) and excels in professional document reasoning (GDP.pdf).
- **Coding:** Extremely strong, tying for first in the Coding Agent Index (62). Leads on Terminal-Bench 4.0 (57.7% - 59%).
- **Reliability:** Significant drop in hallucination rate (down to 51% from 92% for Sol) and high robustness to jailbreaks.

### Context & Constraints
- **Context Window:** 1M tokens.
- **Reasoning Tiers:** `max`, `xhigh`, `high`, `medium`, `low`.
- **Monitorability:** Regression in CoT monitorability; the model is more capable of controlling its own reasoning traces.
- **Safeguards:** Critical cyber capabilities are gated behind "Daybreak" protections.

## Access & pricing
- **Tiers:** Max, High, Medium, Low
- **Pricing (Max):**
  - Input: $10 /M tokens
  - Output: $50 /M tokens
- **Pricing Note:** While per-token prices are higher than Sol, Astra is significantly more token-efficient, often reducing cost per task by 40-60% compared to rivals like Claude Fable 5.1.
- **Official URL:** https://deploymentsafety.openai.com/gpt-6-astra

## Raw Benchmarks
- **Reasoning:**
  - ARC-AGI-3 (Adapter): 99.9%
  - ARC-AGI-3 (Standard): 62.7%
  - FrontierMath Tier 4: 97.6%
  - GPQA Diamond: 96.0%
- **Agentic Coding:**
  - Terminal-Bench 4.0: 57.7% - 59%
  - DeepSWE v1.1: 74.1%
- **Computer Use:**
  - OSWorld 2.0: 72.6%
  - AutomationBench: 41.4% - 69%
- **Professional Work:**
  - GDP.pdf: 31% (Pass)
  - HealthBench Professional: 63.4% - 64.7%

## Normalized Scores
- **Tool use: 97/100**
- **Reasoning: 98/100**
- **Context window: 94/100**
- **Multimodal: 96/100**
- **Coding: 94/100**
- **Cost efficiency: 88/100**
- **Overall Score: 95.4/100**
