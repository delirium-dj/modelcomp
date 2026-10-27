# Report: Qwen 3.5 0.8B

Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27 UTC

## Model-card summary
- **Name:** Qwen 3.5 0.8B (Alibaba Cloud / Qwen Team)
- **Architecture:** Dense transformer
- **Family:** Qwen 3.5
- **Release / status:** February 2026
- **Modalities:** Text, Image input; Text output (multimodal)
- **Weights:** Open weights (Apache 2.0)
- **Context window:** 262K tokens natively, extensible up to ~1M with YaRN
- **Parameters:** ~0.8B
- **Capabilities:** Multilingual, long context for size, vision, efficient for edge/ultra-low resource

## Performance
- Capable for ultra-small model
- Good for on-device/edge, basic tasks, prototyping
- Very fast inference

## Strengths
- Tiny footprint
- Large context
- Open weights
- Runs on very limited hardware
- Multimodal support

## Limitations / notes
- Limited capability for complex reasoning/coding
- Best for simple tasks

## Scores
- **Tool use: 65/100.**
- **Reasoning: 65/100.**
- **Context window: 90/100.**
- **Multimodal: 68/100.**
- **Coding: 62/100.**
- **Cost efficiency: 99/100.**
- **Overall Score: 69.8/100.**

## Sources
- [HuggingFace - Qwen/Qwen3.5-0.8B](https://huggingface.co/Qwen/Qwen3.5-0.8B)
- [HuggingFace - Qwen/Qwen3.5-0.8B-Base](https://huggingface.co/Qwen/Qwen3.5-0.8B-Base)
- [NVIDIA NeMo - Qwen3.5 coverage](https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/qwen/qwen35-vl.html)
- [Ollama - qwen3.5:0.8b-nvfp4](https://ollama.com/library/qwen3.5:0.8b-nvfp4)
- [Qwen Blog - Qwen3.5](https://qwen.ai/blog?id=qwen3.5)
- [CNBC - Alibaba unveils Qwen3.5](https://www.cnbc.com/2026/02/17/china-alibaba-qwen-ai-agent-latest-model.html)
- [SCMP - Alibaba unveils Qwen-3.5](https://www.scmp.com/tech/big-tech/article/3343738/alibaba-unveils-qwen-35-sharpening-global-race-spread-ai-models)
