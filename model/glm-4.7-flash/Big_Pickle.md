# Report: GLM-4.7-Flash

Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27 UTC

## Model-card summary
- **Name:** GLM-4.7-Flash (Zhipu AI / Z.ai)
- **Architecture:** MoE (30B total / ~3B active) with MLA, GLM-style routing
- **Family:** GLM-4.7 series (flagship 358B + Flash variant)
- **Release / status:** Late 2025/early 2026
- **Modalities:** Text input; Text output
- **Weights:** Open weights available (HuggingFace)
- **Context window:** ~200K tokens
- **Max output:** ~118K tokens
- **Capabilities:** Reasoning, agentic coding, tool use, long context

## Pricing (public)
- **Input:** ~$0.06/M tokens
- **Output:** ~$0.40/M tokens
- Very competitive pricing

## Performance
- Strong for coding/agentic tasks
- Efficient with MoE design (3B active)
- Good value proposition

## Strengths
- Low cost, high capability for size
- Long context
- Open weights
- Good for agentic workflows

## Limitations / notes
- Primarily text-focused
- Flash variant trades some capability vs flagship

## Scores
- **Tool use: 86/100**
- **Reasoning: 86/100**
- **Context window: 88/100**
- **Multimodal: 70/100**
- **Coding: 88/100**
- **Cost efficiency: 96/100**
- **Overall Score: 83.6/100**

## Sources
- [HuggingFace - zai-org/GLM-4.7-Flash](https://huggingface.co/zai-org/GLM-4.7-Flash)
- [NVIDIA NeMo - GLM-4.7 docs](https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/glm/glm47.html)
- [TokenRate - GLM 4.7 Flash pricing](https://tokenrate.dev/models/glm-4-7-flash)
- [CostOfToken - GLM pricing](https://www.costoftoken.com/providers/zhipu)
- [ComputePrices - GLM-4.7](https://computeprices.com/models/glm-4-7)
- [AIMLAPI - GLM-4.7](https://aimlapi.com/models/glm-4-7)
- [UsagePricing - Zhipu AI](https://www.usagepricing.com/ai-token-pricing/zhipu)
- [DevelopersDigest - GLM-4.7-FlashX](https://www.developersdigest.tech/models/glm-4-7-flashx)
