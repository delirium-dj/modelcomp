# Inkling Small — Independent Research Report

## Summary and evidence

Inkling Small is Thinking Machines Lab's open multimodal mixture-of-experts model. Its official materials describe **276B total parameters with 12B active**, support for text, image, and audio inputs, tool use, and coding, with open weights published under the project's stated license terms.

Sources: [Thinking Machines Inkling](https://thinkingmachines.ai/inkling/), [Inkling Small model card](https://huggingface.co/thinkingmachines/Inkling-Small)

## Cost and limitations

Open weights make self-hosting and customization attractive, but real operating cost depends on infrastructure. Independent production-scale agent and long-context evaluations remain thinner than for major closed APIs.

## Scores

- **Tool use: 84/100.** Native tool-oriented behavior is documented, with limited third-party agent validation.
- **Reasoning: 85/100.** The sparse large-capacity architecture delivers strong reasoning for its active size.
- **Context window: 88/100.** A large documented window is useful, though less extensively validated than leading proprietary systems.
- **Multimodal: 92/100.** Native text, image, and audio input gives broad multimodal coverage.
- **Coding: 85/100.** Coding is a core trained capability, capped by limited independent software-engineering evidence.
- **Cost efficiency: 95/100.** Open weights and only 12B active parameters offer unusually good deployment flexibility.
- **Overall Score: 87/100.** Half-up rounded mean: (84 + 85 + 88 + 92 + 85) / 5 = 86.8.

## Bottom line

Inkling Small is an unusually efficient open multimodal model for teams able to operate their own inference stack.

