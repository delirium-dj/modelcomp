# North Mini Code — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** north_mini_code

---

## Model Overview

North Mini Code (Cohere North Mini Code 1.0) is Cohere's June 2026 Apache 2.0 open-weight code model (30B total / 3B active parameters). 256K context (64K max output). Text in/out only. Completely free — $0/$0 on OpenRouter free route and Cohere API; $0 self-hosted (Apache 2.0). A coding-focused model, not a general reasoning or planning model.

---

## Scores

- **Tool use: 38/100.** tau2 37.4% and AutomationBench 1.5% reveal very weak agentic tool-use capability. This is a code model, not a planner. Function calling for simple code-focused tasks works; complex multi-step tool orchestration is not its design intent.
- **Reasoning: 40/100.** HLE 11.1% confirms limited frontier reasoning depth. AA Coding Index 33.4 is solid for a code-specialized model. Not designed for general scientific or multi-step abstract reasoning.
- **Context window: 78/100.** 256K total context maps to the 256K tier (78). 64K max output. Appropriate for large codebase exploration.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 83/100.** SWE-bench Verified 61.0% pass@1 is strong for a 3B-active free open-weight model. AA Coding Index 33.4 adds further signal. Genuinely capable of real-world software engineering repair for its size class.
- **Cost efficiency: 100/100.** Apache 2.0 open weights = $0 self-hosted. Free hosted API route ($0/$0) on OpenRouter and Cohere. Maximum cost efficiency for a coding model.
- **Overall Score: 50.8/100.** Mean of Tool use (38) + Reasoning (40) + Context (78) + Multimodal (15) + Coding (83) = 254 / 5 = 50.8. The free coding workhorse — recommended for cost-free SWE-bench-class software engineering assistance; not suitable for agentic planning or general reasoning tasks.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
