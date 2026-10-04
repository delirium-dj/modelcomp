# Qwen3.6-Plus — Independent Research Report

## Summary and evidence

Qwen3.6-Plus is Alibaba's April 2026 proprietary Plus-tier model for coding, agents, and long-context production. The fixed snapshot is `qwen3.6-plus-2026-04-02`; Model Studio exposes thinking and non-thinking operation, web search, batch inference, and OpenAI-compatible APIs. Alibaba documents a **1,000,000-token context window**. Public reports cite **61.6 on Terminal-Bench** and **57.1 on SWE-bench**, but Alibaba's accessible documentation does not provide a comprehensive first-party evaluation table, so those figures should be treated cautiously.

Sources: [Alibaba Cloud context documentation](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/coding-plan-faq), [web-search model support](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/web-search), [batch inference](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/batch-inference)

## Cost, strengths, and limitations

Global Model Studio pricing through 256K is **$0.276 per million non-thinking input tokens** and **$1.651 per million thinking input or output tokens**; above 256K it rises to $1.101/$6.602. Strengths are the million-token window, low cost, reasoning control, search, caching, batch support, and coding-agent compatibility. Limitations are proprietary weights, region-dependent pricing, sparse benchmark disclosure, and a newer Qwen3.7/3.8 generation that supersedes it.

Source: [Alibaba Cloud pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)

## Scores

- **Tool use: 87/100.** Search, functions, batch work, caching, and coding-agent integrations provide a strong toolkit.
- **Reasoning: 84/100.** Thinking mode is capable, but first-party comparative evidence is limited.
- **Context window: 95/100.** One million tokens is excellent.
- **Multimodal: 84/100.** The generation supports multimodal workflows, though product documentation is less explicit than for later Qwen releases.
- **Coding: 86/100.** Reported agentic coding results are strong but not sufficiently documented for a higher score.
- **Cost efficiency: 95/100.** Very low short-context pricing and batch discounts deliver exceptional value.
- **Overall Score: 87/100.** Half-up rounded mean: (87 + 84 + 95 + 84 + 86) / 5 = 87.2.

## Bottom line

Qwen3.6-Plus is an economical million-context agent model, best for existing integrations; new deployments should also test Qwen3.7-Plus and Qwen3.8 alternatives.
