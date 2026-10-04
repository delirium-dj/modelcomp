# GPT-6.1 Sol — Independent Research Report

## Executive summary

GPT-6.1 Sol is OpenAI's September 2026 efficient frontier model, positioned just below GPT-6 Astra for complex coding, computer use, and professional work at one-fifth of Astra's standard token price. It offers a 1.05-million-token context window, a comprehensive Responses API tool suite, unusually cheap prompt-cache reads, and beta multi-agent delegation. Because the model is only days old and OpenAI has not published a detailed benchmark table, its exact performance gap from Astra still requires workload-specific testing.

## Release and positioning

OpenAI released `gpt-6.1-sol` on September 29, 2026, describing it as delivering near-Astra performance for complex work at lower cost. It is the recommended middle tier between GPT-6 Astra and GPT-6 Luna. Reasoning effort ranges from low through medium, high, xhigh, and max, with medium as the default; none and minimal are unsupported.

Sources: [OpenAI API changelog](https://developers.openai.com/api/docs/changelog), [OpenAI model catalog](https://developers.openai.com/api/docs/models), [GPT-6.1 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol)

## Capabilities and evidence

- **Tools and agents:** Responses API support includes web search, file search, image generation, Code Interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search. Structured outputs, streaming, and function calling are supported. OpenAI also launched beta multi-agent delegation, allowing the model to assign work to subagents inside a Responses request.
- **Coding and professional work:** OpenAI explicitly positions GPT-6.1 Sol for complex coding, investigating codebases, iterating on solutions, document understanding, business workflows, and multi-step computer use. The vendor describes performance as near Astra, but did not publish a model-specific benchmark table at launch.
- **Context window:** The model provides a **1,050,000-token context window** and **128,000-token maximum output**, with an April 30, 2026 knowledge cutoff.
- **Multimodality:** It accepts text and images and returns text. Audio input is unsupported, although image generation can be invoked as a tool.
- **API access:** Tool calling requires the Responses API. Chat Completions works only without tool calling. US and EU data residency are supported, although fast mode is unavailable with EU residency.

Sources: [GPT-6.1 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [OpenAI model-selection guide](https://developers.openai.com/api/docs/guides/model-selection), [Amazon Bedrock model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-6-1-sol.html)

## Pricing and deployment

Standard pricing through 272,000 input tokens is **$2 per million input tokens**, **$0.10 cached input**, **$2.50 cache writes**, and **$10 output**. Prompts above 272,000 tokens charge 2× input and cache rates and 1.5× output for the entire request. Fast mode costs 2× standard, while Batch and Flex are 50% cheaper; regional processing adds 10% where applicable. The model is available through OpenAI and Amazon Bedrock.

Sources: [GPT-6.1 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [OpenAI API pricing](https://developers.openai.com/api/docs/pricing), [Amazon Bedrock model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-6-1-sol.html)

## Limitations

- OpenAI has not supplied a detailed public benchmark table for GPT-6.1 Sol, so “near-Astra” remains a vendor positioning claim rather than a quantified comparison.
- The model is newly released, leaving little time for reproducible independent evaluation or production reliability data.
- It is text-and-image rather than omni-modal: audio and video inputs and native non-text outputs are unsupported.
- Full tool calling is Responses-only, which may require migration from Chat Completions integrations.
- Very long prompts incur a substantial price multiplier, and fine-tuning is unavailable.

## Scores

- **Tool use: 96/100.** Hosted shell, Code Interpreter, computer use, MCP, skills, search, patching, and beta subagent delegation make this one of the most complete agent platforms.
- **Reasoning: 95/100.** Near-Astra positioning and five reasoning levels support a frontier score, tempered by the lack of published model-specific evaluations.
- **Context window: 95/100.** A 1.05-million-token window and 128,000-token output limit are exceptional, though inputs above 272K cost more.
- **Multimodal: 75/100.** Image understanding and tool-mediated image creation are useful, but audio/video input and native multimedia output are absent.
- **Coding: 95/100.** The product is explicitly optimized for complex codebase and agentic software work with a full execution toolchain; absent benchmark disclosure prevents a higher score.
- **Cost efficiency: 88/100.** $2/$10 standard pricing, 95%-discounted cache reads, and half-price Batch/Flex deliver strong value for near-flagship capability.
- **Overall Score: 91/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (96 + 95 + 95 + 75 + 95) / 5 = 91.2.

## Bottom line

GPT-6.1 Sol is designed to be the practical default for demanding OpenAI workloads: almost the full agent platform and near-flagship intelligence at a sharply lower price. Its specifications are excellent, but teams should benchmark it directly against Astra and competing models because public model-specific performance evidence is still sparse.
