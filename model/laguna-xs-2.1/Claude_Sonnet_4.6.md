# Laguna XS 2.1 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** laguna-xs-2.1

---

## Model Overview

Laguna XS 2.1 is Poolside's June 2026 OpenMDW-1.1 open-weight MoE model (33B total / 3B active parameters). 262K context, text in/out only. Priced at $0.06/$0.12 per 1M in/out ($0.03/M cached, OpenRouter); free hosted route available; $0 self-hosted (OpenMDW-1.1; runs on a 36 GB Mac). The local-agent tier — SWE-bench Verified 70.9% from 3B active parameters.

---

## Scores

- **Tool use: 68/100.** Terminal-Bench 2.0 37.5% is the agentic tool-use signal — moderate multi-step terminal capability for a 3B-active MoE. SWE-bench Verified 70.9% validates solid software-engineering repair. Primarily a coding-first model rather than a broad agent.
- **Reasoning: 60/100.** No GPQA, HLE, or LiveCodeBench published. The 3B active parameter budget limits theoretical reasoning depth. Scored conservatively based on the SWE-bench-centered evidence.
- **Context window: 78/100.** 262K total context maps to the 256K tier (78). Appropriate for multi-file codebase and long-document tasks on a 36 GB Mac.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 78/100.** SWE-bench Verified 70.9% and SWE-bench Pro 47.6% validate real-world software engineering capability from 3B active parameters. The XS size makes this remarkable; Terminal-Bench 37.5% adds agentic coding signal.
- **Cost efficiency: 98/100.** OpenMDW-1.1 open weights = $0 self-hosted on a 36 GB Mac. API $0.06/$0.12 per 1M is ultra-cheap. Free hosted route available. Excellent for local-first coding agent deployments.
- **Overall Score: 59.8/100.** Mean of Tool use (68) + Reasoning (60) + Context (78) + Multimodal (15) + Coding (78) = 299 / 5 = 59.8. The Mac-local coding agent — recommended for developers who want 70.9% SWE-bench performance from a model that fits on a MacBook Pro with 36 GB RAM at near-zero cost.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
