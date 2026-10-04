# GPT-5 — Independent Research Report

## Executive summary

GPT-5 was OpenAI's August 2025 unified reasoning system and a major advance in coding, tool use, mathematical reasoning, vision, and factuality. The API model combines configurable reasoning with a 400K context window, image understanding, structured outputs, and strong agent benchmarks. It is now deprecated and scheduled for shutdown on December 11, 2026, making migration more important than new adoption.

## Release and positioning

OpenAI launched GPT-5 on August 7, 2025. In ChatGPT it operated as a routed system choosing between fast and deeper-reasoning paths; the API exposes `gpt-5` with minimal, low, medium, and high reasoning effort. The pinned snapshot is `gpt-5-2025-08-07`, with a September 30, 2024 knowledge cutoff.

Sources: [OpenAI GPT-5 announcement](https://openai.com/index/introducing-gpt-5/), [GPT-5 developer announcement](https://openai.com/index/introducing-gpt-5-for-developers/), [GPT-5 API documentation](https://developers.openai.com/api/docs/models/gpt-5)

## Capabilities and benchmark evidence

- **Coding:** GPT-5 high scores **74.9% on SWE-bench Verified** and **88% on Aider Polyglot**. OpenAI reports that it used 22% fewer output tokens and 45% fewer tool calls than o3 on SWE-bench Verified.
- **Tools and agents:** It reaches **96.7% on Tau2-bench Telecom** and **69.6% on Scale MultiChallenge**, and was trained to chain dozens of sequential and parallel tool calls while recovering from tool errors.
- **Reasoning:** Results include **94.6% on AIME 2025**, **85.7% on GPQA Diamond**, **26.3% on FrontierMath**, and **24.8% on Humanity's Last Exam**, all at high reasoning where applicable.
- **Context:** The API provides a **400,000-token total context**, allowing up to approximately 272K input and **128K reasoning-plus-output tokens**. It answers BrowseComp Long Context correctly **89%** of the time at 128K–256K inputs.
- **Multimodality:** GPT-5 scores **84.2% on MMMU** and supports image input with text output. Audio and video are not supported by the API model.
- **Factuality:** With web search, production-style responses were about 45% less likely to contain a factual error than GPT-4o; thinking responses were about 80% less likely than o3.

Sources: [OpenAI GPT-5 announcement](https://openai.com/index/introducing-gpt-5/), [GPT-5 developer announcement and detailed evaluations](https://openai.com/index/introducing-gpt-5-for-developers/)

## API, deployment, and cost

API pricing is **$1.25 per million input tokens**, **$0.125 per million cached input tokens**, and **$10 per million output tokens**. Streaming, function calling, structured outputs, and Batch API are supported. Fine-tuning and predicted outputs are unavailable.

Source: [GPT-5 API documentation](https://developers.openai.com/api/docs/models/gpt-5)

## Limitations

- GPT-5 is deprecated, with the dated snapshot scheduled to shut down on December 11, 2026; OpenAI recommends GPT-5.6 Sol as its replacement.
- Its September 2024 knowledge cutoff is old for current-information tasks.
- The 400K context is below current million-token models.
- Native modalities are limited to text and image input with text output.
- Fine-tuning is unsupported, and billed reasoning tokens can raise output cost.
- Launch benchmarks were run at high reasoning and may overstate default or low-effort performance.

## Scores

- **Tool use: 87/100.** Tau2 and MultiChallenge show strong multi-step tool behavior, although current platforms expose broader execution and computer-use facilities.
- **Reasoning: 87/100.** AIME, GPQA, FrontierMath, and HLE were strong in 2025 but have been surpassed by later frontier models.
- **Context window: 89/100.** A 400K total window and strong 256K retrieval remain useful, short of modern million-token leaders.
- **Multimodal: 80/100.** Image understanding is strong, but audio, video, and non-text output are absent.
- **Coding: 86/100.** SWE-bench Verified and Aider results demonstrate capable agentic coding, now several generations behind the frontier.
- **Cost efficiency: 82/100.** $1.25 input and cached-input discounts are attractive, while $10 output is less compelling for a deprecated model.
- **Overall Score: 86/100.** Half-up rounded mean of Tool use, Reasoning, Context window, Multimodal, and Coding: (87 + 87 + 89 + 80 + 86) / 5 = 85.8.

## Bottom line

GPT-5 was an important and still capable reasoning and coding model, but its deprecation is decisive. Existing users should migrate and validate replacements before December 11, 2026; new systems should begin with a current GPT-6 or GPT-5.6 model instead.
