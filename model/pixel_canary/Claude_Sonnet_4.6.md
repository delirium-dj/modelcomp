# Pixel Canary — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** pixel_canary

---

## Model Overview

Pixel Canary (Callstack Apex) is a closed coding model domain-post-trained by Callstack for React Native and Next.js development. 262K context (131K max output). Text and image input; text output. Priced at $0.50/M in, $0.20/M cached, $3.00/M out (GA); was free during stealth phase (Vercel AI Gateway). The model was developed specifically for React/React Native agentic coding and beats frontier models on its own framework evals at 1/13th the cost.

---

## Scores

- **Tool use: 72/100.** Framework-specific tool use confirmed: 28/31 Next.js tasks baseline, 30/31 with docs — excellent for React/Next.js agent workflows. No general agentic benchmarks (Terminal-Bench, SWE-bench) published. Tool-use score reflects domain specialization strength.
- **Reasoning: 65/100.** No GPQA, MMLU, or general reasoning benchmarks published. The domain post-training targets React/React Native specifically; general reasoning is unvalidated. Scored conservatively for a specialized closed model.
- **Context window: 78/100.** 262K total context maps to the 256K tier (78). 131K max output is generous for framework tasks.
- **Multimodal: 60/100.** Text and image input; text output. Standard vision-language coverage — useful for UI screenshot analysis in React workflows. No audio or video.
- **Coding: 83/100.** 87.8% on React Native evals and 30/31 Next.js tasks with docs are excellent within its domain. Specialized post-training outperforms frontier generalist models on these specific frameworks. No SWE-bench or LiveCodeBench — generalist coding performance is unknown.
- **Cost efficiency: 72/100.** $0.50/$3.00 per 1M is mid-tier pricing for a specialized domain model. Competitive vs. frontier generalists on the React tasks it was trained for — delivers equivalent or better React performance at a fraction of frontier flagship costs.
- **Overall Score: 71.6/100.** Mean of Tool use (72) + Reasoning (65) + Context (78) + Multimodal (60) + Coding (83) = 358 / 5 = 71.6. The React/React Native specialist — strongly recommended for teams building Next.js or React Native products; validate on general tasks before using for broader workloads.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
