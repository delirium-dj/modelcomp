# Ling 3.0 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-3.0-flash

---

## Model Overview

Ling 3.0 Flash is inclusionAI's August 2026 MIT-licensed open-weight reasoning MoE (124B total / 5.1B active parameters), generating at 316 tok/s. 262K total context, text in/out only. Priced at $0.075/$0.22 per 1M (first-party API; some routes $0.021/$0.063); $0 self-hosted (MIT). Now superseded by Ling 3.1 Flash with a much stronger agentic profile.

---

## Scores

- **Tool use: 68/100.** Terminal-Bench 2.1 50–57% and Vibe Code Bench 2.9% reveal the agentic ceiling for this model. Solid for straightforward tool calling, but multi-step terminal agent tasks are limited. Succeeded by Ling 3.1 Flash (81.2% Terminal-Bench) for deeper agentic work.
- **Reasoning: 83/100.** GPQA Diamond 85.0% is excellent graduate-level scientific reasoning for a 5.1B-active open-weight MoE. Hallucination rate 44.1% is a known weakness to account for in production use.
- **Context window: 78/100.** 262K total context maps to the 256K tier (78). 316 tok/s throughput makes it practical for long-context batch processing.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 79/100.** LiveCodeBench 82.8% is good competitive programming performance. SWE-bench Pro 56.6% validates real-world software engineering repair capability. Strong coding quality for the active-parameter budget.
- **Cost efficiency: 97/100.** $0.021–$0.075 per 1M in; MIT open weights = $0 self-hosted. Among the cheapest capable open reasoning models. High throughput (316 tok/s) further improves cost per output token.
- **Overall Score: 64.6/100.** Mean of Tool use (68) + Reasoning (83) + Context (78) + Multimodal (15) + Coding (79) = 323 / 5 = 64.6. A fast, cheap open text-only coding reasoner — recommended for scientific reasoning and batch coding tasks where high throughput and near-zero cost matter more than agentic depth. Consider Ling 3.1 Flash for agentic workloads.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
