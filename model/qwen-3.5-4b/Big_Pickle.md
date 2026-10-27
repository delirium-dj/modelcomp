# Report: Qwen 3.5 4B

Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27 UTC

## Model-card summary
- **Name:** Qwen 3.5 4B (Alibaba Cloud / Qwen Team)
- **Architecture:** Dense transformer (Qwen3.5 dense variant). Multimodal (vision-language capable in the family; this is a compact VL-capable model).
- **Family:** Qwen 3.5 (includes 0.5B up to 397B, dense and MoE)
- **Release / status:** Released February 2026
- **Modalities:** Text, Image input; Text output (multimodal)
- **Weights:** Open weights (Apache 2.0) on HuggingFace
- **Context window:** 262K tokens natively, extensible up to ~1M with YaRN (recommended >=128K for thinking)
- **Parameters:** ~4B
- **Capabilities:** Reasoning, coding, multilingual (201 languages), long context, vision understanding, function/tool use

## Performance
- Strong performance for 4B class, competitive with larger models in some tasks
- Efficient for local deployment
- Good balance of capability/cost/latency

## Strengths
- Very capable small model
- Large context for size
- Open weights, widely supported
- Multimodal
- Good reasoning/coding

## Limitations / notes
- Smaller than flagship models; some complex tasks may need larger variants
- Very long context needs memory management

## Scores
- **Tool use: 78/100.**
- **Reasoning: 78/100.**
- **Context window: 90/100.**
- **Multimodal: 78/100.**
- **Coding: 78/100.**
- **Cost efficiency: 96/100.**
- **Overall Score: 80.4/100.**

## Sources
- [HuggingFace - Qwen/Qwen3.5-4B](https://huggingface.co/Qwen/Qwen3.5-4B)
- [HuggingFace - Qwen/Qwen3.5-4B-Base](https://huggingface.co/Qwen/Qwen3.5-4B-Base)
- [Qwen Blog - Qwen3.5 announcement](https://qwen.ai/blog?id=qwen3.5)
- [NVIDIA NeMo - Qwen3.5 coverage](https://docs.nvidia.com/nemo/automodel/nightly/model-coverage/vision-language-models/qwen/qwen3-5-vl.md)
- [APXML - Qwen3.5-4B specs](https://apxml.com/models/qwen35-4b)
