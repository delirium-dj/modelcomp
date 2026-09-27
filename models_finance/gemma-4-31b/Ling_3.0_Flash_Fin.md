# Gemma 4 31B

## Model Identity
- **Developer:** Google DeepMind
- **Model ID:** `opencode/gemma-4-31b-it`
- **Family:** Gemma 4
- **Released:** 2026
- **Architecture:** Dense 31B parameter model with hybrid attention (local sliding window + global)
- **Context Window:** 128K tokens (256K on dense variants per technical report)
- **Modalities:** Text, image, and audio input; text output (natively multimodal)
- **Pricing:** Free open weights; standard API hosting (~$0.13/$0.38 per million tokens)

## Overview

Gemma 4 31B is Google DeepMind's flagship dense open-weight model in the Gemma 4 family. Built for reasoning, agentic workflows, coding, and multimodal understanding, it achieves Arena Elo 1451 — making it the leading dense open model on public leaderboards. The 31B dense architecture delivers frontier-level performance comparable to much larger MoE models while remaining deployable on consumer GPUs.

## Scores

- **Tool use: 75/100**
- **Reasoning: 79/100**
- **Context window: 79/100**
- **Multimodal: 72/100**
- **Coding: 81/100**
- **Overall Score: 77/100**
- **Cost efficiency: 97/100**

## Strengths

- **Leading dense open model:** Achieves Arena Elo 1451, making Gemma 4 31B the top-ranked dense open-weight model on public leaderboards — rivaling much larger MoE models.
- **Strong mathematical reasoning:** Scores 89.2% on AIME 2026 and 84.3% on GPQA Diamond, demonstrating excellent math and scientific reasoning capability in thinking mode.
- **Natively multimodal:** Unlike many open models that add vision as a post-hoc adapter, Gemma 4 processes text, images, and audio from the ground up, with dedicated encoders for vision and audio inputs.
- **Excellent coding for its size:** Achieves 80.0% on LiveCodeBench v6 and strong coding benchmarks, placing it among the best open-source coding models at the 31B parameter scale.
- **Free open weights:** Completely free to deploy locally or via community hosting, with no API costs — making it the most cost-efficient option in the evaluated set.

## Limitations

- **Smaller context window (128K):** At 128K tokens (256K on dense variants), the context window is significantly shorter than 1M-context competitors, limiting its applicability for very long-horizon agentic tasks.
- **Moderate agentic coding:** Scores 75.2 on tool use and 76.9 on Tau2 agentic benchmarks — respectable but below top-tier coding agents like DeepSeek V4 Flash or Kimi K2.6.
- **Weak HLE performance:** Scores only 19.5% on HLE without tools and 26.5% with search, indicating significant difficulty with highly specialized knowledge-intensive reasoning.
- **Dense architecture efficiency trade-off:** At 31B dense parameters (vs. 284B total/13B active for MoE competitors), inference cost and memory usage are higher relative to parameter-efficient alternatives.
- **Limited public benchmark coverage on BenchLM:** Ranks #132 out of 137 for agentic tool use on BenchLM.ai, suggesting very limited third-party evaluation coverage.
