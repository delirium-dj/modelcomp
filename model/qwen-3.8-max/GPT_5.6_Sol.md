# Qwen3.8-Max — Independent Research Report

## Executive summary

Qwen3.8-Max is Alibaba's August 2026 flagship for coding, autonomous work, research, and multimodal agents. It is based on a 2.4-trillion-parameter mixture-of-experts model with 95 billion active parameters and combines a one-million-token managed context window with open weights, flexible reasoning, vision input, and strong agent benchmarks. Its price is unusually competitive for its capability level.

## Release and positioning

The Qwen team introduced Qwen3.8-Max in August 2026 and released the underlying `Qwen3.8-2.4T-A95B` weights shortly afterward. This was the first open release of a Qwen Max-class model. The managed `qwen3.8-max` service adds vision input, optional non-thinking operation, official built-in tools, and one-million-token context by default. The current managed family also includes the September 2 `qwen3.8-max-0902` snapshot.

Sources: [Official Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8), [official Qwen3.8 model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B), [Alibaba Cloud model catalog](https://www.alibabacloud.com/help/en/model-studio/models)

## Capabilities and benchmark evidence

- **Coding:** Qwen reports **86.6 on Terminal-Bench 2.1**, **67.7 on SWE-bench Pro**, **56.6 on DeepSWE 1.1**, **73.5 on FrontierSWE**, and **93.0 on PaperBench**. Performance varies by benchmark, but repository, terminal, and research-engineering results are consistently strong.
- **General agents and tools:** It scores **74.8 on CoWorkBench**, **67.7 on WorkSpaceBench**, **72.5 on Toolathlon Verified**, and **81.9 on WideSearch**. The managed service provides official tools and OpenAI- and Anthropic-compatible APIs.
- **Reasoning:** Results include **92.6 on GPQA Diamond**, **43.6 on Humanity's Last Exam without tools**, and **56.2 with tools**. Reasoning effort can be set to low, medium, or xhigh, while `preserve_thinking` carries reasoning state across messages.
- **Long context:** The open-weight base is native at **262,144 tokens** and extensible to **1,010,000**; the managed Max service supplies approximately one million tokens by default. Qwen reports **92.9 on MRCR v2 at 256K**.
- **Multimodality:** Managed Qwen3.8-Max supports text, image, and video understanding. The open-weight 2.4T artifact is text-only, so local deployments do not reproduce the full hosted modality set.
- **Architecture and openness:** The base activates 95B of 2.4T parameters across 512 routed experts, and its weights are downloadable under Qwen's Max license for self-hosting and fine-tuning.

Source: [official Qwen3.8 model card and benchmark table](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

## API, deployment, and cost

Alibaba Model Studio lists `qwen3.8-max` and `qwen3.8-max-0902` with thinking and non-thinking modes, context caching, and up to one million request tokens. Current Beijing and Hong Kong list pricing is **$1.65 per million input tokens** and **$4.951 per million output tokens**; batch inference receives a 50% discount where offered. The open weights can be deployed with vLLM, SGLang, TokenSpeed, Transformers, and other common inference stacks, although the enormous model requires substantial infrastructure.

Sources: [Alibaba Cloud pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing), [official Qwen3.8 model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

## Limitations

- The downloadable base is text-only and always uses thinking; managed-only features are required for vision and non-thinking mode.
- A 2.4T-parameter model is impractical to self-host for most individuals and small organizations.
- Several evaluations use Qwen's own harnesses or in-house benchmarks, so cross-vendor comparisons require attention to methodology.
- Video and image inputs produce text; native image, audio, and video generation are outside this model's scope.
- Region, endpoint, and provider affect availability and price.

## Scores

- **Tool use: 93/100.** Strong Toolathlon, WideSearch, and workplace-agent scores plus hosted tools and compatible APIs make it an excellent agent backbone.
- **Reasoning: 92/100.** GPQA, HLE-with-tools, professional-domain results, and controllable reasoning support a frontier rating.
- **Context window: 95/100.** Managed one-million-token context and excellent 256K retrieval are outstanding, though the open base is natively 262K.
- **Multimodal: 88/100.** Hosted text, image, and video understanding is broad, but the open model is text-only and output remains text.
- **Coding: 94/100.** Terminal-Bench 2.1, SWE-bench Pro, FrontierSWE, and PaperBench establish elite coding and research-engineering ability.
- **Cost efficiency: 89/100.** $1.65 input and $4.951 output per million tokens is excellent for flagship performance, with further batch savings and an open-weight option.
- **Overall Score: 92/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (93 + 92 + 95 + 88 + 94) / 5 = 92.4.

## Bottom line

Qwen3.8-Max is a compelling frontier agent and coding model, especially for teams seeking million-token context, multimodal understanding, competitive API economics, or an open-weight deployment path. The major caveat is that the downloadable model does not include every hosted feature and is exceptionally demanding to run locally.
