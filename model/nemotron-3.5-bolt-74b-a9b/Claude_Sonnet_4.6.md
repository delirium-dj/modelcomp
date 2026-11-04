# Nemotron 3.5 Bolt 74B A9B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** nemotron-3.5-bolt-74b-a9b

---

## Model Overview

Nemotron 3.5 Bolt 74B A9B is NVIDIA's open-weight Mamba-2 vision-language MoE model (74B total / 9B active parameters), running in IQ2 quantization in just 24GB VRAM at 83.99 tok/s. 256K context, text/image/video input, text output. Licensed under OpenMDW-1.1. Available via NVIDIA NIM or self-hosted. No list pricing — open weights.

---

## Scores

- **Tool use: 73/100.** Terminal-Bench 2.1 50.98% confirms multi-step agentic terminal tool use at a solid level for a 24GB-local model. No SWE-bench, DeepSWE, or LiveCodeBench published — no broader agentic benchmarks to validate further capability claims.
- **Reasoning: 72/100.** No GPQA or MMLU-Pro benchmarks published for this model. Mamba-2 MoE architecture with 9B active parameters limits theoretical reasoning depth vs. larger dense or attention-based models. Scored based on architecture class and Terminal-Bench evidence.
- **Context window: 78/100.** 256K total context maps to the 256K tier (78). Note: IQ2 24GB build may trail BF16 quality at long ranges per meta note. Scored on stated spec.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage in a Mamba-2 architecture.
- **Coding: 70/100.** Terminal-Bench 2.1 50.98% is the only direct coding evidence. No SWE-bench or LiveCodeBench published. For a 9B-active Mamba-2 MoE at 24GB local, this level of agentic coding capability is reasonable. Thin evidence caps the score.
- **Cost efficiency: 97/100.** OpenMDW-1.1 open weights — $0 to self-host on 24GB GPU. NVIDIA NIM access available. Exceptional value for a vision-language model at this hardware requirement.
- **Overall Score: 73/100.** Mean of Tool use (73) + Reasoning (72) + Context (78) + Multimodal (72) + Coding (70) = 365 / 5 = 73.0. A compelling local option for 24GB GPU owners wanting vision-language agentic capability — but verify on your tasks, as benchmark evidence is thin beyond Terminal-Bench.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
