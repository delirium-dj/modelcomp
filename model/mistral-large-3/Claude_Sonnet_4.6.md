# Mistral Large 3 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** mistral-large-3

---

## Model Overview

Mistral Large 3 (Mistral-Large-3-675B-Instruct-2512) is Mistral AI's December 2025 open-weight MoE flagship (675B total / 41B active parameters, Apache 2.0 license) with native vision. Text and image input; text output. 256K context. Priced at $0.50/$1.50 per 1M in/out (hosted), plus $0 self-hosted. Deprecated on Artificial Analysis (superseded by Large 4); kept as a reference-generation open MoE.

---

## Scores

- **Tool use: 68/100.** No Terminal-Bench figure published. SWE-bench Verified ~41.4% validates multi-step software engineering repair at a moderate level for a large open MoE. Solid for a 2025-era generalist flagship; now superseded by later generations.
- **Reasoning: 69/100.** GPQA Diamond ~68.4% is solid graduate-level reasoning for a broad-spectrum open MoE. Performs well on general knowledge; slightly below specialized reasoning models. Deprecated on AA — Intelligence Index N/A.
- **Context window: 78/100.** 256K total context maps to the 256K tier (78). Appropriate for large codebase and document exploration.
- **Multimodal: 60/100.** Text and image input; text output. Standard vision-language coverage, no audio or video. Apache 2.0 open-weight vision capability.
- **Coding: 60/100.** LiveCodeBench ~46.5–55.3% (harness-dependent) is mid-tier for a large open MoE. SWE-bench Verified ~41.4% reflects solid generalist coding without specialized agentic tuning. Superseded by newer Mistral versions on coding tasks.
- **Cost efficiency: 85/100.** Apache 2.0 open weights = $0 self-hosted. Hosted $0.50/$1.50 per 1M is very affordable for a 675B/41B MoE. Excellent sovereign open-weight value for EU/on-premises deployments.
- **Overall Score: 67.1/100.** Mean of Tool use (68) + Reasoning (69) + Context (78) + Multimodal (60) + Coding (60) = 335 / 5 = 67.0. A sovereign Apache-licensed vision-capable open MoE — recommended for teams needing EU-sovereign open-weight serving with 256K context. Consider Mistral Large 4 for current-generation performance.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
