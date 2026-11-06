# Ling 3.2 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-3.2-flash

---

## Model Overview

Ling 3.2 Flash is Ant Group's November 2026 native multimodal MoE model (560B total / 25B active parameters). 1M token context. Text, image, and video input; text output. Priced at $0.30/$0.90 per 1M in/out (Ant Bailian launch pricing; two-week free trial at launch). Compatible with both OpenAI-style Chat Completions and Anthropic-style Messages APIs. Positioned for visual understanding, multimodal agents, and 3D/medical document work. Text reasoning, coding-agent, and tool-use benchmarks not yet publicly verified at launch.

---

## Scores

- **Tool use: 72/100.** No Terminal-Bench, SWE-bench, or agentic benchmark published yet. The 25B active / 560B MoE architecture from the Ling family (predecessor Ling 3.1 Flash scored Terminal-Bench 2.1 81.2%) and 1M context suggest meaningful agentic capability — but unverified for this multimodal variant. Scored conservatively pending published evidence.
- **Reasoning: 75/100.** OmniDocBench 1.5 ~92.21 and CharXiv_RQ ~85.15 confirm strong visual document reasoning — layout parsing, math equation extraction, and research-paper comprehension. General GPQA/AIME reasoning not yet published for this release.
- **Context window: 92/100.** 1M total context maps to the 1M tier (92). Full 1M window available for visual and document agent workflows.
- **Multimodal: 72/100.** Text, image, and video input; text output — native multimodal (not an add-on encoder). Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage with native architectural integration.
- **Coding: 68/100.** No SWE-bench or LiveCodeBench published yet. OmniDocBench and CharXiv results suggest strong visual-to-code capability for document and chart workflows. General coding performance unverified at launch.
- **Cost efficiency: 80/100.** $0.30/$0.90 per 1M is competitive for a 25B-active multimodal 1M-context model. Two-week free trial at launch. No standing free tier confirmed post-trial.
- **Overall Score: 75.8/100.** Mean of Tool use (72) + Reasoning (75) + Context (92) + Multimodal (72) + Coding (68) = 379 / 5 = 75.8. A promising new native multimodal 1M-context model from Ant Group — recommended for visual document intelligence, chart/equation parsing, and 3D/medical agentic workflows. Validate benchmark performance independently before production deployment pending official scores.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
