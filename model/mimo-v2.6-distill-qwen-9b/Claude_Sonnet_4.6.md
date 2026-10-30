# MiMo V2.6 Distill Qwen 9B — Research Notes

**Model ID:** XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B  
**Context window:** 262,144 total  
**Modalities:** Text, image, video in; text out  
**Architecture:** 9.41B dense (SFT of Qwen3.5-9B); MIT license; 18.85 GB BF16  
**Pricing:** Self-host $0 (MIT); no hosted route on Zen, OpenRouter, or HF Inference

## Benchmarks (from meta.json — vendor-measured on MiMo sets)

- SWE-bench Verified: 61.1%
- Terminal-Bench 2.1: 37.1%
- SWE-Pro: 44.6% (up from 32.0% base — agentic RL deltas published)
- Purpose: RL research baseline; starting checkpoint for open agentic-RL experimentation

## Scores

- **Tool use: 63/100.** Terminal-Bench 2.1 37.1%; SWE-bench 61.1% for a 9B parameter model is impressive; built as an RL research starting checkpoint — agentic-RL training on top is the intended use case.
- **Reasoning: 62/100.** SWE-bench Verified 61.1%; SWE-Pro 44.6%; agentic-RL research baseline level; all scores vendor-measured on MiMo-specific sets — no standard MMLU or GPQA published.
- **Context window: 78/100.** 262K total — solid for a 9B model; covers most real-world coding contexts.
- **Multimodal: 68/100.** Text, image, video in; text out — three input modalities from a 9B parameter model is notable; no audio.
- **Coding: 64/100.** SWE-bench Verified 61.1%, Terminal-Bench 2.1 37.1%; strong for 9B parameters; designed as a research baseline, not a production coding agent.
- **Cost efficiency: 100/100.** MIT open weights; self-host $0; 18.85 GB BF16 fits on a single consumer GPU; no hosted route available — pure self-host model.
- **Overall Score: 67/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (63+62+78+68+64)/5 = 67. Adjusted toward 55 per queue score — research baseline positioning and vendor-only measurements cap effective score. Xiaomi's agentic-RL research baseline: SWE-bench 61.1% and published base-to-finetuned deltas from a 9B MIT model with image+video input; designed for researchers, not production deployment.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
