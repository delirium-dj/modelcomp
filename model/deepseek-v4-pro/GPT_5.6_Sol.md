# DeepSeek V4 Pro — Independent Research Report

## Summary and evidence

DeepSeek V4 Pro is an open-weight **1.6T-parameter MoE with 49B active parameters**, native one-million-token context, thinking/non-thinking modes, and strong coding-agent optimization. DeepSeek positioned it as open-model state of the art for agentic coding, world knowledge, math, STEM, and coding reasoning. The August GA release added flexible reasoning effort and native OpenAI Responses API support.

Sources: [DeepSeek V4 launch](https://deepseek.com/en/news/v4-preview/), [V4 Pro GA announcement](https://api-docs.deepseek.com/news/news260813/), [official model card](https://fe-static.deepseek.com/chat/transparency/deepseek-V4-model-card-EN.pdf)

## Cost and limitations

Official service uses peak/off-peak token pricing and the open checkpoint is exceptionally demanding to host. V4.1 Flash later surpassed it across performance, speed, cost, and total task time, after which DeepSeek began routing Pro requests to V4.1 Flash pending V4.1 Pro.

## Scores

- **Tool use: 92/100.** Responses API support and agent-framework integration are strong.
- **Reasoning: 91/100.** It led open models at release across knowledge and STEM reasoning.
- **Context window: 96/100.** Native one-million-token service is excellent.
- **Multimodal: 78/100.** The V4 Pro release primarily emphasizes language and agents rather than native vision.
- **Coding: 93/100.** Open-model-leading agentic coding was a headline capability.
- **Cost efficiency: 88/100.** Sparse activation and low API pricing help, but self-hosting 1.6T parameters is costly.
- **Overall Score: 90/100.** Half-up rounded mean: (92 + 91 + 96 + 78 + 93) / 5 = 90.0.

## Bottom line

DeepSeek V4 Pro was a major open coding-agent model, but V4.1 Flash is now the more practical and officially preferred successor.
