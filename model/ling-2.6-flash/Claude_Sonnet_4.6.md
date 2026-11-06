# Ling 2.6 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-2.6-flash

---

## Model Overview

Ling 2.6 Flash is inclusionAI's April 2026 MIT-licensed non-reasoning instruct MoE (107B total / 7.4B active parameters). 131K native context (262K via YaRN). Text in/out only. Priced at $0.10/$0.30 per 1M (ZenMux, Requesty; $0.02/M cached); $0 self-hosted (MIT). Now deprecated in favour of Ling 3.0 Flash. Known for instant (non-reasoning) tool calling, 75.9% MRCR at 256K, but a 96.7% hallucination rate makes it unsafe for unattended production work.

---

## Scores

- **Tool use: 68/100.** SWE-bench Verified 61.2% confirms multi-step software-engineering repair capability. tau2 76.4% validates structured tool-call execution. Instant (non-reasoning) tool calling is the design focus. The 96.7% hallucination rate significantly limits reliable tool-use in unattended pipelines.
- **Reasoning: 40/100.** AA Intelligence Index 10 and 96.7% hallucination rate reveal serious reliability limitations. MRCR 75.9% at 256K shows strong long-context retrieval, but general reasoning is unreliable. Not suitable for complex reasoning tasks.
- **Context window: 65/100.** 131K native maps to the 128K tier (65). YaRN to 262K available (MRCR 75.9% at 256K confirms retrieval quality). Scored on the native window.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 72/100.** SWE-bench Verified 61.2% is solid real-world engineering repair for a non-reasoning instruct MoE. tau2 76.4% adds tool-use coding signal. The hallucination rate remains a production risk.
- **Cost efficiency: 97/100.** MIT open weights = $0 self-hosted. API $0.10/$0.30 per 1M is very affordable. Former free Zen slot (now deprecated). Excellent price for the coding capability, with caveats for the hallucination rate.
- **Overall Score: 52/100.** Mean of Tool use (68) + Reasoning (40) + Context (65) + Multimodal (15) + Coding (72) = 260 / 5 = 52.0. A deprecated instant tool-calling model with serious hallucination issues — if still using this model, migrate to Ling 3.0 Flash or Ling 3.1 Flash, which deliver better capability at lower hallucination rates.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
