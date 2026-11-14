# Nemotron 3.5 Super VL — findings by Hy3

**Source:** Web research (OpenRouter, NCIJ Network, Van Data Team, waitwhichmodel, infofina) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Nemotron 3.5 Super VL is NVIDIA's open-weight multimodal agent model released 2026-10-15. It is a 120B-parameter MoE (12B active per token) on a hybrid Mamba-2–Transformer backbone with a C-RADIO vision encoder, supporting a 1M-token context and text/image/document/video (≤2 min) inputs. It is built for long-running agents that combine visual understanding with reasoning and tool use, and ships with datasets, training recipes, and RL environments (NeMo Gym) under the OpenMDW-1.1 license. NVIDIA reports strong results: GPQA-Diamond 89.90, SWE-bench Verified 71.07, Terminal-Bench 2.1 60.80, BrowseComp 77.5, OSWorld-Verified 52.3.

## Model card
- **Vendor:** NVIDIA
- **Release:** 2026-10-15 (open weights)
- **Architecture:** Hybrid Mamba-2 + MoE — 120B total / 12B active; C-RADIO vision encoder
- **Context window:** 1,000,000 tokens
- **Modalities:** Text, image, document, GUI screenshot, video (≤2 min) → text
- **License:** OpenMDW-1.1 (open weights)

## Raw benchmarks

### Agent
- Built for always-on enterprise agents; tool use + reasoning; context-reuse serving keeps state across turns; beats larger Nemotron 3 Ultra on Hermes Bench (63.44% vs 56.33%).

### Reasoning
- **GPQA-Diamond:** 89.90 (NVFP4) · **HLE:** 31.79%.

### Coding
- **SWE-bench Verified:** 71.07 · **Terminal-Bench 2.1:** 60.80 · **BrowseComp:** 77.5.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 80/100.** Agentic + tool use; strong for open-weight VL class.
- **Reasoning: 80/100.** GPQA 89.9 strong; HLE 31.8 moderates.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 86/100.** Native text/image/document/video vision-language.
- **Coding: 78/100.** SWE-bench 71%, Terminal-Bench 60.8% — capable open model.
- **Cost efficiency: 84/100.** Open weights + fast throughput; no first-party API price.
- **Overall Score: 84.0/100.** Mean of the five quality dims (80+80+96+86+78 = 420 / 5 = 84.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://openrouter.wk-xj.com/nvidia/nemotron-3.5-super-vl-20261015
  - https://ncijnetwork.com/?p=53794
  - https://vandatateam.com/ai-model-benchmarks/nemotron-3-5-super-vl
  - https://www.waitwhichmodel.fyi/models/nemotron-3-5-super-vl
  - https://infofina.com/nvidias-nemotron-3-5-super-vl
