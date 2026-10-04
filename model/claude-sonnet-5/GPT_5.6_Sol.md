# Claude Sonnet 5 — Independent Research Report

## Executive summary

Claude Sonnet 5 is Anthropic's June 2026 agentic workhorse, delivering performance close to Claude Opus 4.8 at substantially lower token prices. It is particularly strong at software engineering, terminal work, browser/computer use, and sustained multi-step execution, while offering a one-million-token context window. Anthropic now marks it legacy in favor of Sonnet 5.5, but it remains active and supported.

## Release and positioning

Anthropic released `claude-sonnet-5` on June 30, 2026 as its best balance of speed and intelligence. It introduced adaptive thinking by default, a new tokenizer, browser use, and a generally available computer-use toolset. The model remains available through Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Anthropic's AWS platform, with retirement promised no sooner than June 30, 2027.

Sources: [Anthropic launch announcement](https://www.anthropic.com/news/claude-sonnet-5), [Claude Sonnet 5 documentation](https://platform.claude.com/docs/en/models/sonnet-5/overview), [migration and behavior guide](https://platform.claude.com/docs/en/docs/about-claude/models/whats-new-sonnet-5)

## Capabilities and benchmark evidence

- **Coding:** Anthropic reports **85.2% on SWE-bench Verified**, **63.2% on SWE-bench Pro**, and **80.4% on Terminal-Bench 2.1**. These results place it near the former Opus flagship while materially improving on Sonnet 4.6.
- **Computer and browser use:** Sonnet 5 scores **81.2% on OSWorld-Verified** and adds first-party browser use plus Anthropic's generally available August 2026 computer toolset.
- **Reasoning:** It records **43.2% on Humanity's Last Exam without tools** and **57.4% with tools**, demonstrating a significant benefit from agent scaffolding. Adaptive thinking is controlled through effort levels and defaults to high on the API.
- **Agents:** Anthropic says Sonnet 5 can plan, operate browsers and terminals, verify its work, and complete multi-step jobs that earlier Sonnet models often left unfinished. At high effort it can match Opus 4.8 on some agentic workloads.
- **Context window:** The model provides **one million context tokens**, **128,000 standard output tokens**, and a beta **300,000-token Batch API output** limit.
- **Multimodality:** Inputs may contain text and images, with text output. Audio and video are not native modalities.

Sources: [Claude Sonnet 5 System Card directory](https://www.anthropic.com/system-cards), [Anthropic launch announcement](https://www.anthropic.com/news/claude-sonnet-5), [Claude Sonnet 5 documentation](https://platform.claude.com/docs/en/models/sonnet-5/overview)

## API, deployment, and cost

Permanent API pricing is **$2 per million input tokens** and **$10 per million output tokens**. Five-minute and one-hour cache writes cost $2.50 and $4 respectively, cache reads cost $0.20, and Batch API processing is half price. The new tokenizer produces roughly 1.0–1.35× as many tokens as Sonnet 4.6 for the same input, so the lower per-token price does not translate directly into the same proportional request savings.

Sources: [Anthropic launch announcement](https://www.anthropic.com/news/claude-sonnet-5), [Claude Sonnet 5 documentation](https://platform.claude.com/docs/en/models/sonnet-5/overview)

## Limitations

- Anthropic now labels Sonnet 5 legacy and recommends Sonnet 5.5 for new deployments.
- Non-default `temperature`, `top_p`, and `top_k` values, manual thinking budgets, and assistant-message prefilling return API errors.
- The updated tokenizer may increase token counts by around 30%, partially offsetting cheaper unit pricing.
- Native modalities are limited to text and image input with text output.
- Real-time cybersecurity safeguards may refuse some requests with an HTTP 200 response and `stop_reason: refusal`.

## Scores

- **Tool use: 93/100.** Strong OSWorld performance, browser/computer control, terminals, and dependable long-running execution make it a leading agent model.
- **Reasoning: 91/100.** HLE performance and adaptive thinking are strong, though Opus-class models retain an edge on the hardest reasoning work.
- **Context window: 95/100.** One-million-token input, 128K standard output, and 300K batch output are exceptional.
- **Multimodal: 77/100.** Image understanding is capable, but audio, video, and native multimedia output are absent.
- **Coding: 93/100.** Its 63.2% SWE-bench Pro and 80.4% Terminal-Bench 2.1 scores support an elite coding rating.
- **Cost efficiency: 87/100.** $2/$10 pricing, cheap cache reads, and batch discounts are excellent for near-Opus performance, despite higher tokenization density.
- **Overall Score: 90/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (93 + 91 + 95 + 77 + 93) / 5 = 89.8.

## Bottom line

Claude Sonnet 5 remains a capable, cost-effective agent and coding model with excellent context capacity. Existing validated deployments can continue using it, but Sonnet 5.5 is the sensible default for new work because it supersedes Sonnet 5 at the same headline price.
