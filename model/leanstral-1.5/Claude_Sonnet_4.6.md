# Leanstral 1.5 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** leanstral-1.5

---

## Model Overview

Leanstral 1.5 is Mistral AI's July 2, 2026 Apache 2.0 open-weight formal theorem-proving model for Lean 4 (119B total / 6.5B active MoE parameters, 256K context). Text in/out only. Free open weights; hosted ~$0.15/$0.45 per 1M. Trained through a three-stage pipeline (mid-training, SFT, reinforcement learning via CISPO) to interact natively with the Lean compiler, read proof goals and compiler errors, and iteratively refine proof scripts. A specialist model; not a general coding or reasoning model.

---

## Scores

- **Tool use: 72/100.** Operates natively in a verification loop — interacting with the Lean compiler as a tool, reading goals and errors, and iteratively refining proofs. This specialized tool-use pattern is confirmed at a high level (587/672 Putnam problems solved). General agentic tool-use (Terminal-Bench, SWE-bench) not applicable.
- **Reasoning: 85/100.** miniF2F saturated at 100% (high school to IMO-level formal math). Putnam Bench 587/672 problems is a top public-model result. FATE-H (Master's-level) 87% and FATE-X (Doctoral-level) 34% are both new open-source SOTA. Exceptional formal mathematical reasoning depth.
- **Context window: 78/100.** 256K context maps to the 256K tier (78). Critical for repository-scale proof engineering across large Lean theorem libraries.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability. Strictly text-only formal language model.
- **Coding: 78/100.** FLTEval pass@1 28.9% and pass@8 43.2% validate formal proof coding quality. The model is specialized for Lean 4 proof engineering rather than general software engineering — SWE-bench is not applicable.
- **Cost efficiency: 95/100.** Apache 2.0 open weights = $0 self-hosted. Hosted ~$0.15/$0.45 per 1M is very affordable for a 119B MoE. Excellent value for formal verification workflows.
- **Overall Score: 65.6/100.** Mean of Tool use (72) + Reasoning (85) + Context (78) + Multimodal (15) + Coding (78) = 328 / 5 = 65.6. The formal theorem-proving specialist — strongly recommended for Lean 4 autoformalization, math research, and proof engineering pipelines. Not a general coding or reasoning replacement.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
