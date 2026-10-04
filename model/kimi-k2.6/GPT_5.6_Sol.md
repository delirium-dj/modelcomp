# Kimi K2.6 — Independent Research Report

## Summary and evidence

Kimi K2.6 is Moonshot AI's April 2026 open-weight multimodal agent model: a **1T-parameter MoE with 32B active parameters**, 256K context, MoonViT vision encoder, thinking/instant modes, interleaved tool use, and swarm orchestration of up to 300 subagents and 4,000 coordinated steps.

Official results include **54.0 HLE with tools**, **83.2 BrowseComp** (86.3 with swarm), **92.5 DeepSearchQA F1**, **73.1 OSWorld**, **66.7 Terminal-Bench 2.0**, **58.6 SWE-bench Pro**, **80.2 SWE-bench Verified**, **90.5 GPQA**, and **79.4 MMMU-Pro**.

Source: [official Kimi K2.6 model card](https://huggingface.co/moonshotai/Kimi-K2.6)

## Strengths and limitations

Modified-MIT weights, native visual understanding, excellent search, long-horizon coding, OpenAI/Anthropic-compatible APIs, and INT4 deployment are major strengths. The 256K window trails newer million-token models; self-hosting a 1T model is demanding; video support is experimental and official-API-only; and several scores use Moonshot's own harness.

## Scores

- **Tool use: 94/100.** Search, code execution, swarm orchestration, and strong agent benchmarks are exceptional.
- **Reasoning: 91/100.** GPQA, HLE, and competition-math results are frontier-class.
- **Context window: 87/100.** 256K is substantial but no longer leading.
- **Multimodal: 92/100.** Native image/video understanding and strong visual reasoning provide broad capability.
- **Coding: 92/100.** Strong SWE, terminal, multilingual, and LiveCodeBench results support elite coding.
- **Cost efficiency: 91/100.** Sparse activation, open weights, and native INT4 make it efficient relative to capability.
- **Overall Score: 91/100.** Half-up rounded mean: (94 + 91 + 87 + 92 + 92) / 5 = 91.2.

## Bottom line

Kimi K2.6 is a powerful open multimodal agent, especially for research, coding, and parallel task orchestration; context length and deployment scale are its main compromises.
