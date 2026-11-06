# Ling 3.0 Tiny — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-3.0-tiny

---

## Model Overview

Ling 3.0 Tiny is inclusionAI's August 2026 MIT-licensed tiny reasoning MoE (7.9B total / 1.3B active parameters). 131K native context (262K via YaRN). Text in/out only. Free via API (Requesty, $0/$0); MIT open weights free to self-host (~8.34 GiB footprint, ~100 tok/s on DGX Spark, ~86–90 tok/s on M4 Pro MacBook). The former Zen free slot `ling-3.0-tiny-free` is now deprecated. A research-tier reasoning model — not an agentic coding model.

---

## Scores

- **Tool use: 38/100.** Terminal-Bench 2.1 27.7% confirms limited multi-step agentic tool-use capability for a 1.3B-active MoE. Better than a pure chat model but far below dedicated agentic coding models. No SWE-bench published.
- **Reasoning: 68/100.** GPQA Diamond 73.4% is genuinely impressive for a 1.3B-active MoE — delivers real reasoning scores from a model that runs on a MacBook. SciCode 24.2% reflects the ceiling on the hardest research-level scientific coding problems.
- **Context window: 65/100.** 131K native maps to the 128K tier (65). YaRN to 262K available. Scored on the native window.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 42/100.** Terminal-Bench 2.1 27.7% and SciCode 24.2% are the best available coding signals. No SWE-bench or LiveCodeBench published. 1.3B active parameters limits coding depth significantly — suitable for simple scripts and explanation, not complex engineering.
- **Cost efficiency: 100/100.** Free hosted API ($0/$0 via Requesty). MIT open weights = $0 self-hosted on commodity hardware including MacBooks. Maximum cost efficiency.
- **Overall Score: 45.6/100.** Mean of Tool use (38) + Reasoning (68) + Context (65) + Multimodal (15) + Coding (42) = 228 / 5 = 45.6. The MacBook reasoning pipsqueak — recommended for local free reasoning experiments where GPQA 73.4% from 1.3B active parameters is the goal and coding/agentic capability are not needed.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
