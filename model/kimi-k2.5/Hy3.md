# Kimi K2.5 — findings by Hy3

**Source:** Web research (Vals AI, WaveSpeedAI, Model Beat, BenchGecko, Model Matchbook) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Kimi K2.5 is Moonshot AI's open-source (MIT) native-multimodal model released 2026-01-27, built on a 1T-parameter MoE (32B active) with a MoonViT vision encoder and 256K context. Its headline innovation is Agent Swarm — a self-directed swarm of up to 100 sub-agents executing parallel workflows across up to 1,500 tool calls. It excels on math (AIME 2025 96.1%, HMMT 95.4%, GPQA-Diamond 87.6%) and vision-language (OCRBench 92.3%, MathVista 90.1%), and on coding (SWE-bench Verified 76.8%, LiveCodeBench 85.0%). It was the #1 open-weight model on multiple Vals benchmarks and is priced aggressively ($0.60/$3 per M tokens).

## Model card
- **Vendor:** Moonshot AI (月之暗面)
- **Release:** 2026-01-27 (open source, MIT)
- **Architecture:** MoE — 1T total / 32B active; MoonViT vision encoder (400M)
- **Context window:** 262,144 tokens
- **Modalities:** Native multimodal (text + image)
- **Agent:** Agent Swarm (≤100 sub-agents / 1,500 tool calls)

## Raw benchmarks

### Agent
- **Agent Swarm:** up to 100 sub-agents / 1,500 tool calls via Parallel-Agent RL (PARL); ranked high on agentic/finance benchmarks among open models.

### Reasoning
- **GPQA-Diamond:** 87.6% · **AIME 2025:** 96.1% · **HMMT 2025:** 95.4%.

### Coding
- **SWE-bench Verified:** 76.8% · **LiveCodeBench:** 85.0% (beats Claude Opus 4.5 on LiveCodeBench).

### Long context
- **Context window:** 262,144 tokens.

## Normalized scores
- **Tool use: 86/100.** Agent Swarm (100 sub-agents) is best-in-class orchestration.
- **Reasoning: 84/100.** GPQA 87.6% / AIME 96.1% — elite reasoning.
- **Context window: 80/100.** 256K window — below the 1M-class leaders.
- **Multimodal: 85/100.** Native multimodal with strong vision benchmarks.
- **Coding: 84/100.** SWE-bench 76.8%, LiveCodeBench 85%.
- **Cost efficiency: 90/100.** Cheapest in the top tier ($0.60/$3); open weights.
- **Overall Score: 83.8/100.** Mean of the five quality dims (86+84+80+85+84 = 419 / 5 = 83.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://valsai.click/models/kimi_kimi-k2.5-thinking
  - https://wavespeed.ai/blog/posts/kimi-k2-5-everything-we-know-about-moonshots-visual-agentic-model/
  - https://themodelbeat.com/models/kimi-k2-5
  - https://www.benchgecko.ai/model/kimi-k2-5
  - https://modelmatchbook.com/models/moonshotai/kimi-k2.5-0127
