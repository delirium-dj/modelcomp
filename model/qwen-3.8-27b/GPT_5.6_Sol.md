# Qwen3.8-27B — Independent Research Report

## Summary and evidence

Qwen3.8-27B is Alibaba's compact, open-weight dense vision-language model for coding, professional work, and long-horizon agents. Its **27B parameters** are practical relative to frontier MoE systems. It natively handles images and hour-scale video, supports switchable thinking and adjustable `reasoning_effort`, and preserves reasoning across turns. Context is **262,144 tokens natively** and extensible to **one million**; the forthcoming hosted service advertises one million by default and built-in tools.

Official evaluations report **73.0 Terminal-Bench 2.1**, **61.7 SWE-bench Pro**, **90.3 LiveCodeBench v6**, **89.2 GPQA Diamond**, and **70.7 CoWorkBench**. Multimodal results include **84.3 OSWorld-Verified**, **81.9 AndroidWorld**, **94.6 MathVision with computer interaction**, and **91.1 OmniDocBench 1.5**.

Source: [official Qwen3.8-27B model card](https://huggingface.co/Qwen/Qwen3.8-27B)

## Cost, strengths, and limitations

Open weights permit self-hosting with Transformers, vLLM, SGLang, and other common runtimes, avoiding mandatory per-token fees. The model's small footprint, vision/video support, strong coding scores, and flexible reasoning make it unusually deployable. Limitations are that one-million-token operation requires extension or the not-yet-available hosted service, its **30.8 HLE** exposes a gap on frontier knowledge reasoning, and self-hosting still requires capable accelerators.

## Scores

- **Tool use: 92/100.** Strong computer, browser, mobile, and long-horizon agent evaluations are exceptional for a 27B model.
- **Reasoning: 89/100.** GPQA is excellent, but HLE shows a notable ceiling on the hardest broad questions.
- **Context window: 91/100.** Native 262K is strong and one-million-token extension is valuable, though not equally turnkey everywhere.
- **Multimodal: 95/100.** Native image and long-video understanding pair with excellent computer-use and document results.
- **Coding: 93/100.** SWE-bench Pro, Terminal-Bench, and LiveCodeBench results are highly competitive.
- **Cost efficiency: 98/100.** Open weights and frontier-adjacent capability in a dense 27B package are outstanding value.
- **Overall Score: 92/100.** Half-up rounded mean: (92 + 89 + 91 + 95 + 93) / 5 = 92.0.

## Bottom line

Qwen3.8-27B is one of the strongest compact open models for multimodal agents and coding, especially when deployment control matters more than absolute frontier reasoning.
