# Claude 3.5 Haiku — Independent Research Report

## Summary and evidence

Claude 3.5 Haiku is Anthropic's October 2024 fast model for low-latency coding, tool use, and high-volume workloads. It accepts text and images, supports a **200K-token context window**, and Anthropic reported 74% on its internal agentic coding evaluation, close to the upgraded Claude 3.5 Sonnet's 78%.

Sources: [Anthropic Claude model card](https://assets.anthropic.com/m/61e7d27f8c8f5919/original/Claude-3-Model-Card.pdf), [Claude pricing](https://www.anthropic.com/pricing)

## Cost and limitations

API pricing is **$0.80 input and $4 output per million tokens**, with prompt caching and batch discounts. It is now a legacy model; it lacks extended thinking, audio/video support, and the computer-use depth of newer Claude releases.

## Scores

- **Tool use: 78/100.** Function use and early agentic coding are capable but dated.
- **Reasoning: 72/100.** Fast general reasoning is useful, without modern thinking controls.
- **Context window: 84/100.** 200K remains practical but trails million-token systems.
- **Multimodal: 76/100.** Image input is supported, with no audio or video.
- **Coding: 78/100.** Its reported 74% internal coding evaluation was strong for its tier.
- **Cost efficiency: 87/100.** Low prices remain attractive, though newer small models offer more capability.
- **Overall Score: 78/100.** Half-up rounded mean: (78 + 72 + 84 + 76 + 78) / 5 = 77.6.

## Bottom line

Claude 3.5 Haiku remains useful for established low-latency integrations, but newer efficient models provide better tools and reasoning.
