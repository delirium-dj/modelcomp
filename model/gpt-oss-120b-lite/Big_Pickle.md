# Report: GPT-OSS 120B Lite

Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27 UTC

## Model-card summary
- **Name:** GPT-OSS 120B Lite (OpenAI)
- **Architecture:** Mixture-of-Experts (MoE), 117B total / ~5.1B active parameters
- **Family:** GPT-OSS (120B and 20B variants)
- **Release / status:** August 2025
- **Modalities:** Text input; Text output
- **Weights:** Open weights (Apache 2.0 license) on HuggingFace
- **Context window:** 131K tokens
- **Max output:** 131K tokens
- **Reasoning:** Configurable reasoning effort (low/medium/high), full chain-of-thought access
- **Capabilities:** Function/tool calling, structured outputs, agentic workflows

## Performance
- Near parity with OpenAI o4-mini on core reasoning benchmarks
- Fits on single H100 GPU
- Strong coding, math, reasoning, tool use

## Strengths
- Powerful open-weight model
- Permissive license
- Configurable reasoning
- Good agentic/tool capabilities
- Efficient deployment (fits single H100)

## Limitations / notes
- Text-only
- "Lite" naming in some contexts - this appears as the standard 120B variant; may be a deployment/lite label
- Reasoning can be compute-heavy at high effort

## Scores
- **Tool use: 90/100.**
- **Reasoning: 92/100.**
- **Context window: 86/100.**
- **Multimodal: 70/100.**
- **Coding: 90/100.**
- **Cost efficiency: 90/100.**
- **Overall Score: 85.6/100.**

## Sources
- [OpenAI - Introducing gpt-oss](https://openai.com/index/introducing-gpt-oss)
- [OpenAI - gpt-oss model card](https://openai.com/index/gpt-oss-model-card/)
- [OpenAI Developers - gpt-oss-120b](https://developers.openai.com/api/docs/models/gpt-oss-120b)
- [HuggingFace - openai/gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)
- [Fireworks AI - GPT-OSS 120B](https://fireworks.ai/models/fireworks/gpt-oss-120b)
- [DeepInfra - GPT-OSS 120B](https://deepinfra.com/openai/gpt-oss-120b)
- [BenchLM - GPT-OSS 120B](https://benchlm.ai/models/gpt-oss-120b)
- [Vals AI - GPT-OSS 120B](https://www.vals.ai/models/fireworks_gpt-oss-120b)
- [Google Cloud - GPT-OSS 120B](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/maas/openai/gpt-oss-120b)
