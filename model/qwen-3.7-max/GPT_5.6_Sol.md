# Qwen3.7-Max — Independent Research Report

## Summary and evidence

Qwen3.7-Max is Alibaba's May 2026 flagship Max-tier model. It supports thinking and non-thinking modes, context caching, batch inference, and **one million context tokens**, with up to **131,072 output tokens** and 262,144 chain-of-thought tokens. The June snapshot adds multimodal API support, while earlier snapshots are text-API only.

Sources: [Qwen3.7-Max documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-max), [Alibaba text-generation documentation](https://www.alibabacloud.com/help/en/model-studio/text-generation)

## Cost and limitations

International pricing is **$2.50 input and $7.50 output per million tokens**, with cache discounts; Batch halves token prices. Snapshot capability differences and region-specific pricing complicate deployment, and Qwen3.8-Max now supersedes it.

## Scores

- **Tool use: 89/100.** Functions, caching, batch operation, and agent integrations are strong.
- **Reasoning: 90/100.** Max-tier thinking with a very large reasoning allowance is capable.
- **Context window: 97/100.** One-million input and 131K output are excellent.
- **Multimodal: 86/100.** Newer snapshots support multimodal APIs, but support is inconsistent across versions.
- **Coding: 89/100.** Strong flagship coding and agent performance, now behind Qwen3.8.
- **Cost efficiency: 84/100.** Pricing is competitive for a flagship, though newer alternatives are cheaper.
- **Overall Score: 90/100.** Half-up rounded mean: (89 + 90 + 97 + 86 + 89) / 5 = 90.2.

## Bottom line

Qwen3.7-Max is a capable million-context flagship for pinned integrations; Qwen3.8-Max is the better starting point today.
