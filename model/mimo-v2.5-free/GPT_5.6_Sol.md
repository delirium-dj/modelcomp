# MiMo V2.5 Free — Independent Research Report

## Summary and evidence

MiMo V2.5 Free is Xiaomi's promotional hosted route for the open MIT-licensed MiMo-V2.5 model. MiMo-V2.5 is a native full-modal model for text, images, video, and audio with strong agent capabilities and a **one-million-token context window**. The family uses hybrid sliding-window attention, sparse MoE activation, and multimodal encoders.

Sources: [Xiaomi MiMo V2.5 open release](https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced), [inference architecture](https://mimo.xiaomi.com/blog/mimo-v2-5-inference)

## Cost and limitations

Xiaomi's Orbit promotion distributed a finite free-token pool rather than guaranteeing permanent free service. The general model trails V2.5 Pro on difficult coding, and its large open checkpoint remains expensive to serve locally.

## Scores

- **Tool use: 84/100.** Agent capability is strong, though less specialized than the Pro model.
- **Reasoning: 82/100.** Sparse full-modal reasoning is capable but no longer frontier.
- **Context window: 96/100.** Native one-million-token context is excellent.
- **Multimodal: 94/100.** Text, image, video, and audio are natively supported.
- **Coding: 83/100.** Useful for coding agents, below the Pro specialization.
- **Cost efficiency: 98/100.** Free promotional tokens and MIT weights offer excellent value.
- **Overall Score: 88/100.** Half-up rounded mean: (84 + 82 + 96 + 94 + 83) / 5 = 87.8.

## Bottom line

MiMo V2.5 Free is a capable full-modal long-context preview, now superseded by MiMo V2.6.
