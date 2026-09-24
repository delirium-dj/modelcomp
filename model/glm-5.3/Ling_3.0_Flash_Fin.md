# Glm 5.3

## Model Identity
- **Developer:** Z.AI (formerly Zhipu AI)
- **Model ID:** `opencode/glm-5.3`
- **Family:** GLM-5 flagship
- **Released:** August 14, 2026
- **Architecture:** MoE, ~743B total parameters, open weights (delayed for safety review)
- **Context Window:** 1M tokens
- **Modalities:** Text in/out only
- **Pricing:** Free open weights; API $1.40/$4.40 per million tokens

## Overview

GLM-5.3 is Z.AI's latest flagship model, using the same base as GLM-5.2 with all improvements driven by scaled post-training. It achieves open-weights SOTA on Terminal-Bench 3.0 (28.3%) and the best public CyberGym result (84.5%). The model surfaced 2,436 vulnerabilities across 269 projects during evaluation, leading to a two-week safety review before weights release.

## Scores

- **Tool use: 73/100**
- **Reasoning: 76/100**
- **Context window: 95/100**
- **Multimodal: 60/100**
- **Coding: 82/100**
- **Overall Score: 77.2/100**
- **Cost efficiency: 98/100**

## Strengths

- **Top-tier coding:** Achieves 88.2% on Terminal-Bench 2.1, 95.4% on SWE-bench Vals, 66.9% on DeepSWE v1.1, and 78.1% on FrontierSWE — the strongest open-weights coding performance available.
- **Exceptional agentic capabilities:** Scores 84.5 on CyberGym (best public result, ahead of GPT-5.6 Sol and Mythos 5), 73.0 on Toolathlon-Verified, and 48.2 on AutomationBench (best in Z.AI's official table).
- **Strong mathematical reasoning:** Scores 91.7% on GPQA Diamond and 88.1% on GPQA Diamond Vals, demonstrating excellent scientific reasoning.
- **1M context window:** Supports 1M token context with a maximum output length of 128K tokens.
- **Free open weights:** Released under open license, making it the most cost-efficient option with a 98/100 cost efficiency score.
- **Always-on reasoning:** GLM-5.3 always operates with reasoning enabled across three effort levels (low, high, max).

## Limitations

- **Weak Terminal-Bench 3.0:** Scores only 28.3% on Terminal-Bench 3.0 (the hardest public terminal benchmark), behind closed models like Fable 5 (33.7%) and GPT-5.6 Sol (34.6%).
- **Moderate multimodal support:** Text-only input; no vision or audio capabilities in the base model.
- **Safety review delays:** Open weights were held back approximately two weeks for safety evaluation due to emergent cyber capabilities, limiting immediate availability.
- **Moderate HLE performance:** Scores 42.3% on AA-HLE and 62.5% on HLE with tools, indicating some difficulty with highly specialized knowledge tasks.
- **Limited independent evaluation:** Scores rely heavily on Z.AI's own benchmarks; few third-party evaluations have landed.
