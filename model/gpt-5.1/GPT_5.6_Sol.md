# GPT-5.1 — Independent Research Report

## Summary and evidence

GPT-5.1 is OpenAI's November 2025 reasoning model for coding and agents. It supports none, low, medium, and high reasoning; text and image input; function calling; structured outputs; **400,000-token context**; and **128,000-token output**. The pinned snapshot is `gpt-5.1-2025-11-13`, with a September 2024 knowledge cutoff.

GPT-5.1 improved instruction following and adaptive reasoning over GPT-5, but was quickly superseded by GPT-5.2. OpenAI's later comparison reports GPT-5.1 Thinking at **50.8% SWE-Bench Pro**, **88.1% GPQA Diamond**, **94.0% AIME 2025**, and **42.7% HLE with search/Python**.

Sources: [GPT-5.1 API documentation](https://developers.openai.com/api/docs/models/gpt-5.1), [OpenAI GPT-5.2 comparison](https://openai.com/index/introducing-gpt-5-2/)

## Cost and limitations

Pricing is **$1.25 input, $0.125 cached input, and $10 output per million tokens**. GPT-5.1 is deprecated; it lacks audio/video, fine-tuning, and predicted outputs, and its knowledge cutoff and benchmark performance are several generations behind current models.

## Scores

- **Tool use: 85/100.** Function calling and structured outputs are solid, but newer agent platforms are broader.
- **Reasoning: 86/100.** GPQA and AIME remain strong, while HLE and newer comparisons show its age.
- **Context window: 89/100.** 400K is useful but below current million-token systems.
- **Multimodal: 79/100.** Image input is supported; audio, video, and non-text output are not.
- **Coding: 84/100.** SWE-Bench Pro is capable but substantially behind later coding models.
- **Cost efficiency: 81/100.** Input caching is economical, though $10 output is less attractive for a deprecated model.
- **Overall Score: 85/100.** Half-up rounded mean: (85 + 86 + 89 + 79 + 84) / 5 = 84.6.

## Bottom line

GPT-5.1 is suitable only for maintaining already-tested integrations; current OpenAI models offer better tools, context, knowledge, and performance.
