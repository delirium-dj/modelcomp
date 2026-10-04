# GPT-6 Sol — Independent Research Report

## Summary and evidence

GPT-6 Sol is OpenAI's coding-and-agent model below Astra. It supports image input, adjustable reasoning from none through max, function calling, structured outputs, built-in Responses API tools, a **1,050,000-token context window**, and **128,000 maximum output tokens**. Its knowledge cutoff is April 20, 2026.

Source: [OpenAI GPT-6 Sol documentation](https://developers.openai.com/api/docs/models/gpt-6-sol)

## Cost and limitations

Standard short-context pricing is **$2 input, $0.20 cached input, and $10 output per million tokens**; requests above 272K cost $4/$0.40/$15. Batch and Flex halve those rates. Audio and video are unsupported, and Chat Completions function calling requires reasoning disabled.

## Scores

- **Tool use: 94/100.** The Responses API and broad built-in tooling suit complex agents.
- **Reasoning: 92/100.** Six effort levels provide strong control, though Astra is the higher-capability tier.
- **Context window: 97/100.** 1.05M input and 128K output are frontier-scale.
- **Multimodal: 87/100.** Image input is supported, but audio and video are absent.
- **Coding: 94/100.** Coding and agent workflows are the model's explicit specialization.
- **Cost efficiency: 90/100.** Sol is economical for frontier work, with useful caching and batch discounts.
- **Overall Score: 93/100.** Half-up rounded mean: (94 + 92 + 97 + 87 + 94) / 5 = 92.8.

## Bottom line

GPT-6 Sol is a strong default for million-context coding agents when Astra's additional capability does not justify its much higher price.
