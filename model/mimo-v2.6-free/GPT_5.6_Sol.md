# MiMo V2.6 Free — Independent Research Report

## Summary and evidence

MiMo V2.6 Free is the promotional free route for Xiaomi's MiMo-V2.6 Flash-class model. The V2.6 series is open-weight, multimodal, agent- and coding-focused, and supports **one-million-token context**. Xiaomi reports V2.6 Flash improving from 48.8 to **65.7 on DeepSWE v1.1** after its reinforcement-learning run.

Sources: [Xiaomi MiMo V2.6 release](https://mimo.mi.com/docs/en-US/news/latest/v2-6), [MiMo API model limits](https://mimo.mi.com/docs/en-US/quick-start/model)

## Cost and limitations

The preview route is free but quota-limited and not a durable pricing commitment. Xiaomi has acknowledged repetitive tool-call loops after launch and issued targeted training to reduce them; the very large open weights also demand substantial self-hosting hardware.

## Scores

- **Tool use: 89/100.** Strong agent training is offset by documented repetitive-call failures.
- **Reasoning: 87/100.** RL gains are substantial, though Flash trails V2.6 Pro.
- **Context window: 96/100.** One million tokens is excellent.
- **Multimodal: 92/100.** The family supports text, image, audio, and video understanding.
- **Coding: 91/100.** A 65.7 DeepSWE result supports strong engineering capability.
- **Cost efficiency: 99/100.** Free hosted access and sparse open weights provide exceptional value while available.
- **Overall Score: 91/100.** Half-up rounded mean: (89 + 87 + 96 + 92 + 91) / 5 = 91.0.

## Bottom line

MiMo V2.6 Free is a powerful promotional coding-agent route, but production users should account for quota instability and tool-loop behavior.
