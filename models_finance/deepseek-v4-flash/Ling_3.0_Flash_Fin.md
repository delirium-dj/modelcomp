# DeepSeek V4 Flash

## Model Identity
- **Developer:** DeepSeek
- **Model ID:** `opencode/deepseek-v4-flash`
- **Family:** DeepSeek V4
- **Released:** July 31, 2026 (official GA; supersedes preview)
- **Architecture:** MoE, 284B total parameters, 13B active per token; speculative decoding module
- **Context Window:** 1M tokens
- **Modalities:** Text in; text out (no vision support)
- **Pricing:** $0.22/$0.66 per million tokens (cached: $0.007/1M)

## Overview

DeepSeek V4 Flash (0731) is the official release of DeepSeek's V4 Flash model, superseding the preview version with substantially enhanced agentic capabilities. The model features the same architecture as the preview but with a new post-training pass that lifts agent scores well past V4-Pro-Preview. It supports native Responses API and Codex integration, making it the first DeepSeek model with documented Codex support.

## Scores

- **Tool use: 78/100**
- **Reasoning: 82/100**
- **Context window: 95/100**
- **Multimodal: 10/100**
- **Coding: 80/100**
- **Overall Score: 69/100**
- **Cost efficiency: 96/100**

## Strengths

- **Top-tier agentic coding:** Achieves 82.7% on Terminal-Bench 2.1 and 70.3% on Toolathlon-Verified, making it one of the strongest open-source agentic coding models available.
- **Strong knowledge benchmarks:** Scores 88.1% on GPQA Diamond and 86.2% on MMLU-Pro, demonstrating excellent general knowledge and scientific reasoning.
- **Exceptional coding benchmarks:** Achieves 79% on SWE-bench Verified, 88.8% on SWE-bench Vals, and 87.3% on LiveCodeBench, placing it among the top coding models.
- **1M context window:** Supports 1M-token context with DSA sparse attention, enabling processing of entire codebases and long documents in a single pass.
- **Extremely cost-effective:** At $0.22/$0.66 per million tokens, it is among the cheapest frontier-level models available, with a 96/100 cost efficiency score.
- **Native Codex support:** The only DeepSeek model with documented Responses API and Codex integration, enabling direct use in coding agent workflows.

## Limitations

- **Text-only modality:** No vision, image, or audio support, limiting applicability for multimodal workflows. The vision variant (deepseek-v4-vision-exp) is a separate experimental model.
- **Weak HLE performance:** Scores only 34.8% on Humanity's Last Exam, indicating significant difficulty with highly specialized knowledge-intensive reasoning.
- **Limited benchmark coverage on BenchLM:** BenchLM lists only 2 source rows and does not qualify for an overall public rank, indicating sparse independent evaluation.
- **Moderate long-context retrieval:** MRCR 1M and CorpusQA 1M benchmarks not reported for the Flash variant; retrieval performance may lag behind V4 Pro-Max.
- **Proprietary model:** No open weights available, preventing self-hosting and community audit.
