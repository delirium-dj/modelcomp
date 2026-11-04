# Ring 2.6 1T — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ring-2.6.1t

---

## Model Overview

Ring 2.6 1T is InclusionAI's MIT-licensed open-weights reasoning MoE (1T total / 63B active parameters). 131K native context (256K via YaRN). Text in/out only. Adjustable high/xhigh reasoning effort modes. Priced at ~$0.30/$2.50 per 1M (AA estimate; $0.06 cached); $0 self-hosted (MIT), but requires ~32 GPUs. Free OpenRouter endpoint available at $0.00/1M.

---

## Scores

- **Tool use: 72/100.** No Terminal-Bench published for Ring 2.6 1T (the Terminal-Bench rows in published reports belong to Ling 2.6, not Ring). Multi-step reasoning at high/xhigh effort modes supports tool-use loops. 63B active parameters provide deep orchestration capacity. Thin direct tool-use evidence.
- **Reasoning: 92/100.** GPQA Diamond 88.3% is excellent graduate-level scientific reasoning. AIME 2026 95.8% is top-tier mathematical competition performance. ARC-AGI-2 66.2% confirms broad abstract reasoning. The 1T-scale reasoning model delivers genuine frontier reasoning quality.
- **Context window: 65/100.** 131K native maps to the 128K tier (65). YaRN to 256K available but with potential degradation risk; scored on the confirmed native window.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 82/100.** AIME 2026 95.8% and GPQA 88.3% signal strong mathematical coding and algorithmic reasoning. No SWE-bench or LiveCodeBench published — the core strength is math and research reasoning rather than software engineering repair.
- **Cost efficiency: 75/100.** Free OpenRouter endpoint ($0.00/1M) and MIT open weights. Self-hosting requires ~32 GPUs — high hardware cost. Paid routes ~$0.30/$2.50 are reasonable for 1T-scale reasoning. The free endpoint is the standout value proposition.
- **Overall Score: 65.2/100.** Mean of Tool use (72) + Reasoning (92) + Context (65) + Multimodal (15) + Coding (82) = 326 / 5 = 65.2. A frontier-reasoning open model — recommended for math research, competitive programming reasoning, and scientific tasks where GPQA/AIME-class depth matters and 1T-scale self-hosting is feasible.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
