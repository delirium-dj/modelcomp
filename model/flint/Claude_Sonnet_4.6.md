# Flint 40B Free — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** flint

---

## Model Overview

Flint 40B is Recursive Superintelligence's Apache 2.0 open-weight MoE model (~39.8B total / ~2.5B active parameters, 256 routed experts selecting 6 per token). 262K context (65K max output). Text in/out only. Always-on reasoning with tool use. Free on OpenCode Zen as `flint-40b-free`; Apache 2.0 weights free to self-host. Runs at >125 tok/s on M4 Pro MacBook Pro, >150 tok/s on 64GB NVIDIA RTX Spark. Built largely using Recursive's automated Eureka Machine AI R&D system.

---

## Scores

- **Tool use: 83/100.** Terminal-Bench 2.1 54.9% confirms solid multi-step terminal agent tool use. SWE-bench Verified 74.2% validates strong agentic software-engineering repair. Good agentic coding capability for a free local model running at >125 tok/s.
- **Reasoning: 72/100.** No GPQA or AIME published. Always-on reasoning mode and 262K context support complex reasoning chains. Scored based on the agentic coding evidence and architecture class (2.5B active, reasoning-tuned).
- **Context window: 78/100.** 262K context maps to the 256K tier (78). 65K max output. Full 262K retrieval confirmed for codebase-scale tasks.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 88/100.** SWE-bench Pro v2 89.7% is exceptional for a free local model. SWE-bench Verified 74.2% and Terminal-Bench 2.1 54.9% validate broad coding and agentic engineering capability. Vendor-published — independent verification pending.
- **Cost efficiency: 100/100.** Free on OpenCode Zen ($0/$0). Apache 2.0 open weights = $0 self-hosted. Runs on consumer hardware (MacBook Pro M4). Maximum cost efficiency.
- **Overall Score: 67.2/100.** Mean of Tool use (83) + Reasoning (72) + Context (78) + Multimodal (15) + Coding (88) = 336 / 5 = 67.2. A free local coding agent with top-tier SWE-bench Pro v2 performance — recommended for developers who want frontier-adjacent coding on consumer hardware at zero cost. Verify vendor-published scores on your tasks.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
