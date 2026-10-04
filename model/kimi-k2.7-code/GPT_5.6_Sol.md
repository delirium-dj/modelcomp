# Kimi K2.7 Code — Independent Research Report

## Summary and evidence

Kimi K2.7 Code is Moonshot's coding-focused agent model built on Kimi K2.6. It is a **1T-parameter MoE with 32B active parameters**, open weights, always-on thinking, and **262,144-token context**. Moonshot evaluates it through Kimi Code CLI across repository, terminal, ML engineering, MCP, and continuous agent tasks.

Sources: [official Kimi K2.7 Code page](https://www.kimi.ai/resources/kimi-k2-7-code), [official model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code)

## Cost and limitations

Standard API pricing is approximately **$0.19 cache-hit input, $0.95 cache-miss input, and $4 output per million tokens**. Its thinking cannot be disabled, context is smaller than million-token peers, and most published improvements use Moonshot's own agent suites.

## Scores

- **Tool use: 89/100.** It is trained specifically for long-running coding agents and MCP workflows.
- **Reasoning: 85/100.** Always-on thinking is capable but specialized.
- **Context window: 86/100.** 262K supports repositories but trails newer million-token models.
- **Multimodal: 82/100.** The K2.6 base supports visual inputs, though coding is the focus.
- **Coding: 91/100.** Coding-agent specialization and repository training are strong.
- **Cost efficiency: 94/100.** Low token prices and sparse activation offer excellent value.
- **Overall Score: 87/100.** Half-up rounded mean: (89 + 85 + 86 + 82 + 91) / 5 = 86.6.

## Bottom line

Kimi K2.7 Code is a strong inexpensive open coding specialist, with limited context and first-party-heavy evaluation its main caveats.
