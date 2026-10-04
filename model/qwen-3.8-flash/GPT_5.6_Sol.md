# Qwen3.8-Flash — Independent Research Report

## Summary and evidence

Qwen3.8-Flash is Alibaba's fast multimodal model for coding, agents, visual understanding, and high concurrency. It natively supports **one million tokens**, hybrid thinking, image and video input, function calling, structured output, built-in tools, and OpenAI/Anthropic-compatible APIs. Documented limits include up to 2,048 images or 64 videos and two-hour video analysis.

Sources: [Qwen3.8-Flash documentation](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-8-flash), [visual limits](https://www.alibabacloud.com/help/en/model-studio/vision-model)

## Cost and limitations

International pricing is **$0.15 input and $0.47 output per million tokens**, with cache discounts and a free quota. Batch requests are limited to 256K context, and public benchmark disclosure is thinner than for Qwen's open checkpoints.

Source: [Alibaba Model Studio pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)

## Scores

- **Tool use: 92/100.** Built-in tools, functions, structured output, and agent compatibility are extensive.
- **Reasoning: 87/100.** Hybrid thinking is strong for a Flash tier, though numerical evidence is limited.
- **Context window: 96/100.** Native one-million-token context is excellent.
- **Multimodal: 95/100.** Very large image and long-video limits support serious visual workloads.
- **Coding: 90/100.** Codebase-scale context and developer-tool compatibility are major strengths.
- **Cost efficiency: 100/100.** $0.15/$0.47 pricing is exceptional for this capability set.
- **Overall Score: 92/100.** Half-up rounded mean: (92 + 87 + 96 + 95 + 90) / 5 = 92.0.

## Bottom line

Qwen3.8-Flash is an outstanding value for million-context multimodal agents, with sparse public evaluation detail its main caveat.
