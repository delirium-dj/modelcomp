# Qwen3.5-Plus — Independent Research Report

## Summary and evidence

Qwen3.5-Plus is Alibaba's February 2026 Plus-tier multimodal reasoning model. It supports thinking and non-thinking modes, images and video, web search, batch inference, functions, caching, and a **one-million-token context window** with up to 65,536 output tokens and 81,920 chain-of-thought tokens.

Sources: [Qwen3.5-Plus model documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-plus), [visual reasoning support](https://www.alibabacloud.com/help/en/model-studio/visual-reasoning)

## Cost and limitations

Global pricing begins at **$0.115 input and $0.688 output per million tokens** through 128K, rising to $0.573/$3.44 beyond 256K. Batch context is capped at 256K, regional pricing varies, and later Qwen3.6–3.8 models supersede it.

## Scores

- **Tool use: 86/100.** Search, functions, caching, and batch support form a capable platform.
- **Reasoning: 84/100.** Hybrid thinking is useful but trails later Qwen generations.
- **Context window: 95/100.** One million tokens and 65K output are excellent.
- **Multimodal: 87/100.** Image and video understanding are supported.
- **Coding: 85/100.** Solid for general coding and agents, though no longer Qwen's strongest tier.
- **Cost efficiency: 96/100.** Short-context rates are extremely economical.
- **Overall Score: 87/100.** Half-up rounded mean: (86 + 84 + 95 + 87 + 85) / 5 = 87.4.

## Bottom line

Qwen3.5-Plus remains a low-cost million-context model for existing deployments; new work should compare Qwen3.8-Flash.
