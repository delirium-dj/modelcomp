# GPT-OSS 120b

## Model Identity
- **Developer:** OpenAI
- **Model ID:** `opencode/gpt-oss-120b`
- **Family:** GPT-OSS (OpenAI's first open-weight language model since GPT-2)
- **Released:** August 5, 2025
- **Architecture:** Mixture-of-Experts, 117B total parameters, 5.1B active per token (128 experts, 4 active per token)
- **Context Window:** 128K tokens
- **Modalities:** Text input/output only
- **Pricing:** Standard pricing (~$0.15/$0.60 per million tokens on most providers)

## Overview

GPT-OSS 120B is OpenAI's first open-weight language model, released under the Apache 2.0 license. It achieves near-parity with OpenAI o4-mini on core reasoning benchmarks while running efficiently on a single 80GB GPU. The model supports configurable reasoning depth (low, medium, high) and native tool use including function calling, browsing, and structured output.

## Scores

- **Tool use: 68/100**
- **Reasoning: 72/100**
- **Context window: 55/100**
- **Multimodal: 15/100**
- **Coding: 70/100**
- **Overall Score: 56/100**
- **Cost efficiency: 98/100**

## Strengths

- **Excellent math and reasoning:** Scores 93% on AIME 2025 and 81% on MMLU-Pro, demonstrating strong mathematical and general knowledge capabilities that match or exceed OpenAI o4-mini.
- **Strong LiveCodeBench performance:** Achieves 88% on LiveCodeBench, indicating competitive coding generation ability for competitive programming and algorithm design.
- **Free open weights:** Completely free to deploy locally or via community hosting with no API costs, making it the most cost-efficient option with a 98/100 cost efficiency score.
- **Configurable reasoning:** Supports three reasoning effort levels (low, medium, high), allowing users to balance latency vs. performance for different task types.
- **Tool use and function calling:** Strong τ²-Bench Telecom score of 66%, indicating reliable tool calling and agentic workflow capability.

## Limitations

- **Weak long-context reasoning:** Scores only 55/100 on context window (128K) and 20% on HLE, indicating significant difficulty with very long documents and highly specialized knowledge-intensive tasks.
- **Poor Terminal-Bench Hard performance:** Only 23% on Terminal-Bench Hard, suggesting significant struggles with complex, long-horizon terminal-based agentic tasks.
- **No multimodal support:** Text-only input/output with no vision, audio, or image capabilities, limiting applicability for multimodal workflows.
- **Low benchmark coverage:** BenchLM lists only 2 source rows and ranks #128/216 overall, indicating very limited independent evaluation.
- **Smaller context window:** At 128K tokens, significantly shorter than 1M-context competitors.
