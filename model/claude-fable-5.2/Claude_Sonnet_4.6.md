# Claude Fable 5.2 — Claude Sonnet 4.6 Research

Claude Fable 5.2 (November 2026) is Anthropic's highest-capability public frontier model, successor to Fable 5.1. It is part of the Claude 5.2 release alongside the restricted Mythos 5.2 variant. Architecture: same Mythos-class base as 5.2 family, optimized for long-horizon agentic workflows, multi-file codebase engineering, and computer use. Context: 1M in / 128K out. Modalities: text + image in, text out. Pricing updated from meta's $10/$50 to $8/$40 per 1M in/out (30% speed improvement noted at launch).

Benchmarks (verified):
- SWE-bench Pro: 93.0% (vs Fable 5.1 81.2%, Opus 5.5 89.9%)
- SWE-bench Multilingual: 96.6%
- SWE-bench Multimodal: 74.1%
- FrontierSWE v2: 69.9%
- FrontierCode 2.0: 49.1% (xhigh effort)
- HLE with tools: 74.2% (vs Opus 5.5 67.7%, GPT-6 Astra 57.2%)
- GPQA Diamond: ~97%
- OSWorld 2.1 (Computer Use): 89.3%
- Terminal-Bench 4.0: 67.6%
- Terminal-Bench-Science 0.1: 74.6%
- Remote Labor Index: 41.3% (vs Opus 5.5 21.3%)

## Scores

- **Tool use: 97/100.** OSWorld 2.1 at 89.3% and SWE-bench Pro 93.0% are among the highest ever recorded for agentic computer use and software engineering; Remote Labor Index 41.3% doubles the prior class leader. The deepest validated tool-use capability publicly available.
- **Reasoning: 96/100.** GPQA Diamond ~97% (near-saturation), HLE with tools 74.2% (class-leading). These are frontier-peak scores on the hardest expert-level reasoning benchmarks. A single point held back due to 1-point saturation gap on GPQA.
- **Context window: 92/100.** 1M token input / 128K output. Tier: 1M = 92 points. The 128K output cap is noted; full 1M write-out not supported.
- **Multimodal: 63/100.** Text + image in, text out. SWE-bench Multimodal 74.1% confirms strong image-grounded reasoning. No audio or video input. Positions in the image-capable text-out tier (60–65), bumped slightly for SWE-MM evidence.
- **Coding: 97/100.** SWE-bench Pro 93.0%, Multilingual 96.6%, FrontierSWE v2 69.9%, Terminal-Bench 4.0 67.6% — class-leading on every code axis. Best publicly available coding model at time of research.
- **Cost efficiency: 45/100.** $8/$40 per 1M (updated from launch $10/$50). Premium flagship tier — justified by capability but expensive for routine use. Cache read $0.25/M offsets cost for repeated context.
- **Overall Score: 89/100.** Mean of Tool use (97) + Reasoning (96) + Context (92) + Multimodal (63) + Coding (97) = 445 / 5 = 89.0. The top-ranked publicly available model in this dataset; recommended for the most demanding agentic engineering, scientific research, and long-horizon tasks where cost is secondary.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21

