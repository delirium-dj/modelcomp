# GPT-5.2 — Independent Research Report

## Executive summary

GPT-5.2 was OpenAI's December 2025 flagship for professional work and long-running agents. It delivered major gains in coding, science, visual reasoning, long-context retrieval, and tool use over GPT-5.1, with a 400K context window and configurable reasoning. It remains available in the API, but OpenAI now categorizes it as a previous flagship and recommends GPT-6 Astra for maximum capability.

## Release and positioning

OpenAI released GPT-5.2 on December 11, 2025. The API alias `gpt-5.2` and pinned snapshot `gpt-5.2-2025-12-11` support reasoning effort `none`, `low`, `medium`, `high`, and `xhigh`, with none as the default. The family also included separate Pro and Codex variants; this report scores the standard GPT-5.2 reasoning model.

Sources: [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-2/), [GPT-5.2 API documentation](https://developers.openai.com/api/docs/models/gpt-5.2), [GPT-5.2 usage guide](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-5.2)

## Capabilities and benchmark evidence

- **Professional reasoning:** GPT-5.2 Thinking achieves **70.9% wins or ties on GDPval**, **92.4% on GPQA Diamond**, **100% on AIME 2025**, and **52.9% on ARC-AGI-2 Verified**.
- **Coding:** OpenAI reports **55.6% on SWE-Bench Pro Public**, **80.0% on SWE-bench Verified**, and **74.6% on SWE-Lancer IC Diamond**.
- **Tools and research:** Results include **98.7% on Tau2-bench Telecom**, **82.0% on Tau2-bench Retail**, **65.8% on BrowseComp**, **60.6% on MCP-Atlas**, and **46.3% on Toolathlon**.
- **Long context:** The model's API window is **400,000 tokens** with up to **128,000 output tokens**. On OpenAI MRCRv2 with eight needles it scores 85.6% at 64K–128K and 77.0% at 128K–256K; BrowseComp Long Context reaches 89.8% at 256K.
- **Vision:** GPT-5.2 records **82.1% on CharXiv Reasoning without tools**, **88.7% with Python**, and **80.4% on MMMU Pro with Python**. The model accepts images but returns text.

Source: [OpenAI GPT-5.2 announcement and detailed benchmark appendix](https://openai.com/index/introducing-gpt-5-2/)

## API, deployment, and cost

Standard API pricing is **$1.75 per million input tokens**, **$0.175 per million cached input tokens**, and **$14 per million output tokens**. Batch API processing is available. Streaming, function calling, and structured outputs are supported, while fine-tuning and predicted outputs are not. The model has an August 31, 2025 knowledge cutoff.

Source: [GPT-5.2 API documentation](https://developers.openai.com/api/docs/models/gpt-5.2)

## Limitations

- GPT-5.2 is an older generation and is no longer OpenAI's recommended flagship.
- The 400K context window is substantial but well below the million-token windows of current frontier models.
- Output pricing remains relatively high at $14 per million tokens.
- Audio and video are unsupported, and output is text-only.
- Benchmark results were produced at maximum reasoning in a research environment and can differ from default API behavior.
- Fine-tuning is unavailable for this model.

## Scores

- **Tool use: 88/100.** Strong Tau2, BrowseComp, MCP-Atlas, and Toolathlon results show capable orchestration, though newer agent platforms offer broader hosted tooling.
- **Reasoning: 92/100.** Excellent GPQA, AIME, ARC-AGI-2, and professional-work results remain competitive despite the model's age.
- **Context window: 89/100.** A 400K window and strong long-context benchmarks are very good, but current leaders exceed one million tokens.
- **Multimodal: 82/100.** Vision reasoning is strong, while absent audio/video and text-only output constrain breadth.
- **Coding: 88/100.** SWE-Bench Pro and SWE-bench Verified demonstrate strong engineering ability, now surpassed by newer coding agents.
- **Cost efficiency: 78/100.** Input and cache pricing are attractive, but $14 output is costly relative to newer efficient frontier models.
- **Overall Score: 88/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (88 + 92 + 89 + 82 + 88) / 5 = 87.8.

## Bottom line

GPT-5.2 remains a strong general reasoning and professional-work model with proven coding, vision, and long-context results. It is most defensible for existing integrations that value behavioral stability; new deployments should compare it with newer GPT-6-family models that offer larger context, broader tools, and often better economics.
