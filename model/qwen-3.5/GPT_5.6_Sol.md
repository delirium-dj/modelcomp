# Qwen 3.5 — Independent Research Report

## Executive summary

Qwen 3.5 is Alibaba's February 2026 model generation built around a sparse hybrid architecture and native vision-language training. The flagship open model, Qwen3.5-397B-A17B, activates only 17 billion of 397 billion parameters and delivers strong reasoning, coding, multilingual, and visual benchmark results with high inference efficiency. The `opencode/qwen-3.5` catalog entry evaluated here is a provider-specific 128K text route, so it should not be assumed to expose every capability of the broader Qwen3.5 family.

## Release and positioning

Alibaba introduced Qwen3.5 on February 16, 2026, initially with the 397B-A17B mixture-of-experts model and later added smaller sizes. The generation combines Gated DeltaNet and gated attention, multi-token prediction, early text-vision fusion, and expanded coverage of 201 languages and dialects. Qwen reports that the flagship matches the much larger Qwen3-Max base while decoding 8.6× faster at 32K context and 19× faster at 256K.

Sources: [official Qwen3.5 launch](https://qwen.ai/blog?id=qwen3.5), [official Qwen3.8 repository release history](https://github.com/QwenLM/Qwen3.8)

## Capabilities and benchmark evidence

- **Reasoning:** The flagship base model scores **76.01 on MMLU-Pro**, **57.96 on SuperGPQA**, **90.98 on BBH**, and **74.14 on MATH**.
- **Coding:** Base-model results include **79.32 on EvalPlus**, **79.39 on MultiPL-E**, **43.26 on SWE-agentless**, and **82.38 on CRUX-O**.
- **Vision:** The post-trained flagship records **85.0 on MMMU**, **79.0 on MMMU-Pro**, **88.6 on MathVision**, **90.3 on MathVista mini**, and **83.9 on RealWorldQA**.
- **Languages and efficiency:** Its 250K-token vocabulary improves encoding and decoding efficiency by a reported 10–60% across most languages, while sparse activation makes the very large model more economical than its total parameter count suggests.
- **Context and route distinction:** Open Qwen3.5 deployments natively support up to **262,144 tokens**, while Alibaba's later Qwen3.5-Plus managed endpoint reaches one million. The repository entry evaluated here declares **128K total context** and text-only I/O; scoring therefore reflects that specific route rather than the most capable hosted Plus service.

Sources: [official Qwen3.5 launch and benchmark tables](https://qwen.ai/blog?id=qwen3.5), [vLLM Qwen3.5 deployment recipe](https://github.com/vllm-project/recipes/blob/main/Qwen/Qwen3.5.md), [Alibaba Cloud context documentation](https://www.alibabacloud.com/help/en/model-studio/coding-plan-faq)

## Availability and cost

Qwen3.5 open weights support local serving and customization, while Alibaba sells managed Qwen3.5 variants. As a reference, the global `qwen3.5-plus` endpoint lists tiered rates from **$0.115 input and $0.688 output per million tokens through 128K**, rising to $0.573/$3.44 above 256K. Those prices are not necessarily the prices of the `opencode/qwen-3.5` route, whose catalog only states standard pricing.

Source: [Alibaba Cloud Model Studio pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)

## Limitations

- “Qwen 3.5” denotes a family, while the repository route does not disclose an exact parameter checkpoint; benchmark attribution is therefore family-level.
- The evaluated route advertises text-only I/O and 128K context, narrower than the flagship's native multimodality and other managed variants.
- Vendor-reported results span base and post-trained configurations and should not be treated as measurements of an unidentified provider route.
- The 397B flagship remains demanding to self-host despite sparse 17B activation.
- Exact OpenCode route pricing and tool support are not publicly documented in the available primary sources.

## Scores

- **Tool use: 84/100.** The family is trained for agentic workflows and coding, but the exact route's built-in tool behavior is insufficiently documented.
- **Reasoning: 87/100.** Strong MMLU-Pro, SuperGPQA, BBH, and math results support a high rating, moderated by checkpoint ambiguity.
- **Context window: 82/100.** The evaluated route's 128K window is useful but well below current million-token leaders.
- **Multimodal: 70/100.** The underlying family has excellent vision results, but this catalog route declares text-only input and output.
- **Coding: 86/100.** EvalPlus, MultiPL-E, SWE-agentless, and CRUX results demonstrate strong coding foundations.
- **Cost efficiency: 88/100.** Sparse activation, open weights, and low managed-family prices are attractive, though exact route pricing is unavailable.
- **Overall Score: 82/100.** Half-up rounded mean of Tool use, Reasoning, Context window, Multimodal, and Coding: (84 + 87 + 82 + 70 + 86) / 5 = 81.8.

## Bottom line

Qwen 3.5 is a capable, efficient open model family with strong coding and visual reasoning. This particular catalog entry is less clearly specified than the official checkpoints, so it earns conservative scores: users should verify its actual backend, context, tools, modalities, and price before production adoption.
