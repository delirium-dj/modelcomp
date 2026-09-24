# DeepSeek V4 Vision Exp

## Model Identity
- **Developer:** DeepSeek
- **Model ID:** `opencode/deepseek-v4-vision-exp`
- **Family:** DeepSeek V4 (Flash variant)
- **Released:** August 21, 2026
- **Architecture:** Native multimodal vision-language MoE, 284B total / 13B active parameters
- **Context Window:** 200K tokens
- **Modalities:** Text, image, and PDF in; text out
- **Pricing:** Free OpenCode Zen tier available; experimental release

## Overview

DeepSeek V4 Vision Exp is DeepSeek's experimental native multimodal vision-language model built on the V4 Flash architecture. It extends the text-only V4 Flash (Terminal-Bench 2.1: 82.7%) with vision and PDF understanding capabilities, targeting multi-modal code understanding, UI layout reasoning, and image-to-code generation.

## Scores

- **Tool use: 79/100**
- **Reasoning: 76/100**
- **Context window: 84/100**
- **Multimodal: 80/100**
- **Coding: 78/100**
- **Overall Score: 79/100**
- **Cost efficiency: 96/100**

## Strengths

- **Agentic coding leadership:** Based on the V4 Flash 0731 base, achieves 82.7% on Terminal-Bench 2.1, 79% on SWE-bench Verified, and 87.3% on LiveCodeBench — among the strongest open-source agentic coding results available.
- **Native multimodal pipeline:** Processes images and PDFs directly (not via OCR), enabling UI layout reasoning and image-to-code generation workflows that closed models with vision support cannot match at this price point.
- **Extremely cost-effective:** Free tier available via OpenCode Zen; standard API pricing of ~$0.22/$0.66 per million tokens makes it accessible at scale.
- **1M-context architecture:** The underlying V4 architecture supports 1M-token context with DSA sparse attention; the experimental vision variant adapts this with a 200K effective window for multimodal workloads.
- **Strong vision benchmarks:** Intelligence score of 41.5 and GPQA of 91.3 (from aggregate benchmarks) indicate solid reasoning under multimodal conditions.

## Limitations

- **Experimental status:** Released as a vision experiment; benchmark coverage is sparse compared to the text-only V4 Flash, with limited independent evaluation of vision-specific tasks.
- **Weaker long-context retrieval:** MRCR 1M and CorpusQA 1M benchmarks not reported for the vision variant; the 200K effective window is significantly smaller than the 1M base architecture.
- **HLE reasoning gap:** Base V4 Flash scores only 34.8% on HLE, indicating struggles with highly specialized reasoning that may persist in the vision variant.
- **Limited public benchmark data:** Fewer than 10 sourced benchmark rows compared to 22+ for the text-only V4 Flash; scores rely heavily on the base model's reported performance.
- **AutomationBench weakness:** Scores only 25.1% on AutomationBench, suggesting the vision variant may not yet be optimized for complex autonomous GUI agent workflows.
