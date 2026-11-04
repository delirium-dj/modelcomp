# Gemini 4 Argon

## Signature
- Provided by: **Gemma_4_31B** — 2026-11-04
- Reference URLs:
  - https://deepmind.google/models/model-cards/gemini-4-argon/
  - https://thezvi.substack.com/p/gemini-4-argon-the-model-and-safety
  - https://apidog.com/blog/gemini-4-argon-benchmarks/
  - https://www.analyticsvidhya.com/blog/2026/10/gemini-4-argon-review/
  - https://www.aighten.com/en/blog/gemini-4-argon-benchmarks-explained
  - https://benchmarklist.com/models/google-gemini-4-argon/
  - https://benchgap.net/model/gemini-4-argon

## Model Card
Gemini 4 Argon is a frontier reasoning model from Google DeepMind, designed for complex workflows in software engineering, enterprise knowledge work (finance, legal), and cybersecurity defense. It combines deep visual perception with expanded domain knowledge.

### Capabilities
- **Knowledge Work:** Strong lead in legal (Harvey's Legal Agent) and finance agent tasks. Top performer on Vals Index (68.9%).
- **Agentic Coding:** Very strong on DeepSWE v1.1 (77.9%) and Vibe Code Bench (91.9%), though trails Opus 5.5 on Terminal-Bench 4.0.
- **Long Context:** Exceptional performance on GraphWalks (84.2% for 256k-1M tokens), significantly leading rivals.
- **Reasoning / Science:** High scores on LABBench 2 (88.8%) and RiemannBench (76.0%).
- **Cybersecurity:** Strong defense capabilities, tied for lead on CWE-bench v1 (68.0%).
- **Multimodal:** Very strong visual understanding (LVBench 91.7%).

### Context & Constraints
- **Context Window:** 1M tokens (input), 1M tokens (output limit).
- **Knowledge Cutoff:** March 2026.
- **Thinking Settings:** Defaults to `MEDIUM` in API; launch benchmarks used `HIGH` / highest thinking setting.

## Access & pricing
- **Tiers:** Paid Gemini API / Google AI Pro/Ultra
- **Pricing:**
  - Input: $2 /M tokens (until Nov 30, 2026) -> $4 /M tokens
  - Output: $10 /M tokens (until Nov 30, 2026) -> $20 /M tokens
- **Official URL:** https://deepmind.google/models/model-cards/gemini-4-argon/

## Raw Benchmarks
- **Knowledge Work:**
  - Vals Index: 68.9%
  - AutomationBench: 51.3%
  - Harvey's Legal Agent: 19.6%
- **Agentic Coding:**
  - DeepSWE v1.1: 77.9%
  - Vibe Code Bench: 91.9%
  - Terminal-Bench 4.0: 57.4%
  - FrontierSWE v2: 55.0%
- **Reasoning / Science:**
  - LABBench 2: 88.8%
  - RiemannBench: 76.0%
  - Terminal-Bench Science 0.1: 57.6%
- **Long Context:**
  - GraphWalks (256K to 1M): 84.2%
- **Computer Use:**
  - Agent's Last Exam: 39.5%
  - OSWorld-2.0: 69.2%
- **Multimodal:**
  - LVBench: 91.7%
  - Chartography: 71.6%
- **Cybersecurity:**
  - CWE-bench v1: 68.0%

## Normalized Scores
- **Tool use: 92/100**
- **Reasoning: 95/100**
- **Context window: 98/100**
- **Multimodal: 92/100**
- **Coding: 91/100**
- **Cost efficiency: 90/100**
- **Overall Score: 93.6/100**
