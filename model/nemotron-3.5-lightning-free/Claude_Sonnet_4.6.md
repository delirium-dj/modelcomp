# Nemotron 3.5 Lightning 30B A3B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** nemotron-3.5-lightning-free

---

## Model Overview

Nemotron 3.5 Lightning 30B A3B is NVIDIA's August 2026 OpenMDW-1.1 open-weight Mamba-2 MoE model (30B total / 3B active parameters) for text-only high-throughput execution. 262K context (card states up to 1M on 8x H100). Generates at 313 tok/s with 0.6 s TTFT. Free on OpenCode Zen under NVIDIA trial terms (usage logged — no confidential data); paid $0.07/$0.20 per 1M on OpenRouter; $0 self-hosted (OpenMDW-1.1). The always-on execution layer, not a planner.

---

## Scores

- **Tool use: 38/100.** Terminal-Bench 2.1 24.6% reveals limited multi-step agentic tool-use capability. tau3-Banking 9.3% and AutomationBench 0.8% confirm weak planning and banking automation. This is an execution layer — it runs steps, it does not plan them.
- **Reasoning: 55/100.** No GPQA or AIME published. 3B active Mamba-2 parameters limit theoretical reasoning depth. Designed for fast execution rather than deep reasoning. Scored based on architecture class and the available agentic evidence.
- **Context window: 78/100.** 262K total (practical) context maps to the 256K tier (78). 1M possible on 8x H100 but not the standard serving configuration.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 55/100.** No SWE-bench or LiveCodeBench published. Terminal-Bench 2.1 24.6% is the best available coding-adjacent signal — limited. 3B active Mamba-2 budget constrains coding depth; best for executing defined code steps, not complex engineering.
- **Cost efficiency: 98/100.** Free on OpenCode Zen (NVIDIA trial terms). OpenMDW-1.1 open weights for $0 self-hosted. Paid $0.07/$0.20 per 1M is very affordable. 313 tok/s generation speed makes cost per output token very low in practice.
- **Overall Score: 48.2/100.** Mean of Tool use (38) + Reasoning (55) + Context (78) + Multimodal (15) + Coding (55) = 241 / 5 = 48.2. The free speed-first execution model — recommended for high-volume, low-latency agent step execution where a faster planner model handles orchestration. Do not use for complex reasoning or agentic planning.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
