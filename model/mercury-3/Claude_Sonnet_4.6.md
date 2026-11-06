# Mercury 3 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** mercury-3

---

## Model Overview

Mercury 3 is Inception Labs' October 2026 flagship diffusion LLM (dLLM) using non-autoregressive parallel decoding at >1,000 tok/s. 1M context, 128K output. Text in/out only, with native tool/function calling and JSON mode. Priced at $0.10/$0.35 per 1M (prompt caching available on host platforms). Designed for latency-critical agentic work where generation speed is the primary constraint.

---

## Scores

- **Tool use: 68/100.** Native tool calling and JSON mode built in. SWE-bench 38.5% (meta note) reflects mid-tier software engineering repair capability. Diffusion drift in deeply nested agent loops is a known weakness per meta note; best for simpler tool-call patterns at high throughput.
- **Reasoning: 83/100.** GPQA Diamond 89.2% is excellent graduate-level scientific reasoning — a standout score for a diffusion LLM. MRCR 75.5% confirms solid long-context retrieval reasoning. The parallel decoding architecture delivers strong reasoning at extreme speeds.
- **Context window: 92/100.** 1M context maps to the 1M tier (92). 128K output cap. MRCR 75.5% validates long-context retrieval quality.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 55/100.** SWE-bench 38.5% (meta note) is below frontier coding models. The diffusion architecture trades coding depth for generation speed; best suited to high-volume code generation tasks where throughput matters more than SWE-bench performance.
- **Cost efficiency: 90/100.** $0.10/$0.35 per 1M is very affordable for a 1M-context model at >1,000 tok/s generation speed. Prompt caching further reduces costs. Excellent price-per-throughput for latency-sensitive applications.
- **Overall Score: 62.6/100.** Mean of Tool use (68) + Reasoning (83) + Context (92) + Multimodal (15) + Coding (55) = 313 / 5 = 62.6. The speed-first text model — recommended for latency-critical pipelines needing >1,000 tok/s generation with 1M context; validate on coding tasks before replacing frontier coding agents.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
