# Solar Mini 4 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** solar-mini-4

---

## Model Overview

Solar Mini 4 is Upstage's September 2026 proprietary compact reasoning MoE (35B total / 3B active parameters, no open weights). 512K context (131K max output). Text in/out only. Priced at $0.10/$0.40 per 1M ($0.01/M cached); promo $0.05/$0.20 available. 121 tok/s generation speed. Designed as a reasoning model, not an agent — best-in-class long-context recall (AA-LCR 83.3%) for its price class.

---

## Scores

- **Tool use: 25/100.** Terminal-Bench 4.0 1.0% confirms extremely limited agentic tool-use capability. This is explicitly a reasoning model, not an agent. Function calling likely works for simple cases, but complex multi-step tool chaining is not the design intent.
- **Reasoning: 72/100.** AA Intelligence Index 24 is solid for a compact 3B-active MoE. No GPQA/AIME/LiveCodeBench published — the standout metric is AA-LCR 83.3% (long-context retrieval), indicating strong reasoning within long-context reading tasks.
- **Context window: 86/100.** 512K total context maps to the 500K tier (86). 131K max output. Best-in-class long-context recall (AA-LCR 83.3%) in its price class validates the full context use.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 55/100.** No LiveCodeBench or SWE-bench published. For a 3B-active reasoning-focused proprietary model, standard coding assistance is expected but unvalidated. Terminal-Bench 4.0 1.0% confirms very limited agentic coding depth.
- **Cost efficiency: 88/100.** $0.10/$0.40 per 1M (or $0.05/$0.20 promo) is very competitive pricing for 512K context reasoning. $0.01/M cached input is excellent for repeated-context pipelines.
- **Overall Score: 50.6/100.** Mean of Tool use (25) + Reasoning (72) + Context (86) + Multimodal (15) + Coding (55) = 253 / 5 = 50.6. The long-context reasoning reader — recommended for RAG, document summarization, and knowledge retrieval where long-context recall is the primary metric and agentic tool use is not needed.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
