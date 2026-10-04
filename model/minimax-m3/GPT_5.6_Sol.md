# MiniMax M3 — Independent Research Report

## Summary and evidence

MiniMax M3 is a June 2026 frontier coding and agent model combining **one-million-token context**, native multimodality, thinking and instant modes, computer use, and long-horizon collaboration. MiniMax trained it with simulated multi-turn developer interaction rather than only single-turn coding tasks.

In demonstrations, M3 reproduced the core experiments of an ICLR paper during a nearly 12-hour run, producing 18 commits and 23 figures. In a separate 24-hour kernel task it made **147 benchmark submissions and 1,959 tool calls**, improving hardware utilization from 7.6% to 71.3% for a **9.4× speedup**. It scored 0.37 on PostTrainBench, close to GPT-5.5's 0.39 and Opus 4.7's 0.42.

Source: [official MiniMax M3 launch and methodology](https://www.minimax.io/blog/minimax-m3)

## Strengths and limitations

Strengths are sustained autonomous execution, multimodal document/code work, 1M context, computer use, and switchable reasoning. Pricing rises above 512K input and exact public token rates vary by region/service tier. Most headline evidence is vendor-run, and its broader independent evaluation record is still limited.

## Scores

- **Tool use: 93/100.** Thousands of autonomous tool calls and computer-use integration demonstrate strong orchestration.
- **Reasoning: 89/100.** Research reproduction and PostTrainBench performance support high capability.
- **Context window: 95/100.** One million tokens is excellent for full repositories and long experiments.
- **Multimodal: 93/100.** Native mixed-modality training supports images, documents, and computer interaction.
- **Coding: 93/100.** Long-horizon kernel optimization and research reproduction show elite practical engineering.
- **Cost efficiency: 87/100.** Token plans and switchable thinking are attractive, though long-context pricing is higher and not transparently summarized.
- **Overall Score: 93/100.** Half-up rounded mean: (93 + 89 + 95 + 93 + 93) / 5 = 92.6.

## Bottom line

MiniMax M3 is compelling for multimodal, million-context coding agents that must keep working and self-correcting for hours or days; buyers should validate vendor claims and obtain exact regional pricing.
