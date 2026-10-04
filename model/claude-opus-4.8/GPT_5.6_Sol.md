# Claude Opus 4.8 — Independent Research Report

## Executive summary

Claude Opus 4.8 was Anthropic's May 2026 flagship for agentic coding, computer use, research, and professional knowledge work. It paired top-tier software-engineering and browser-agent results with a one-million-token context window and a comparatively moderate flagship API price. It remains available, but Anthropic now classifies it as legacy and recommends Claude Opus 5.5 for new deployments.

## Release and positioning

Anthropic released Claude Opus 4.8 on May 28, 2026 under the API model ID `claude-opus-4-8`. It introduced configurable effort in Claude.ai, adaptive thinking, a 2.5× fast mode, and Claude Code dynamic workflows for large-scale tasks. The model is available through the Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Anthropic's AWS platform. Anthropic promises retirement no sooner than May 28, 2027.

Sources: [Anthropic launch announcement](https://www.anthropic.com/news/claude-opus-4-8), [Claude Platform model documentation](https://platform.claude.com/docs/en/models/opus-4-8/overview)

## Capabilities and benchmark evidence

- **Software engineering:** Anthropic reports **88.6% on SWE-bench Verified**, **69.2% on SWE-bench Pro**, **84.4% on SWE-bench Multilingual**, and **74.6% on Terminal-Bench 2.1**. These results establish Opus 4.8 as a particularly strong repository and terminal agent.
- **Tool use and computer control:** It scores **83.4% on OSWorld-Verified**. An Anthropic customer evaluation reports **84% on Online-Mind2Web**, while Anthropic says it was the only model to complete every case end-to-end on Cognition's Super-Agent benchmark.
- **Research:** Opus 4.8 achieves **84.3% on BrowseComp27 as a single agent** and **88.5% with a multi-agent configuration**, showing strong web-navigation and information-retrieval performance.
- **Reasoning:** It reaches **49.8% on Humanity's Last Exam without tools** and **57.9% with tools**, plus **93.6% on GPQA Diamond**. Tool access materially improves its difficult-question performance.
- **Vision:** It records **69.4% on ChartQAPro without tools** and **72.3% with tools**, and supports image input, but it has no native audio or video modality.
- **Context window:** The API provides a **1,000,000-token context window**, **128,000-token standard maximum output**, and a beta **300,000-token Batch API output** limit.

Sources: [Claude Opus 4.8 System Card](https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf), [Anthropic launch announcement](https://www.anthropic.com/news/claude-opus-4-8), [Claude Platform model documentation](https://platform.claude.com/docs/en/models/opus-4-8/overview)

## API, deployment, and cost

Regular API pricing is **$5 per million input tokens** and **$25 per million output tokens**. Prompt-cache reads cost $0.50 per million tokens; five-minute and one-hour cache writes cost $6.25 and $10 respectively. Batch processing discounts input and output by 50%. Fast mode costs $10 input and $50 output per million tokens. The model's reliable knowledge and training-data cutoff is January 2026.

Sources: [Claude Platform model documentation](https://platform.claude.com/docs/en/models/opus-4-8/overview), [Anthropic launch announcement](https://www.anthropic.com/news/claude-opus-4-8)

## Limitations

- Anthropic labels the model legacy and directs new users toward Opus 5.5.
- It accepts text and images but outputs only text; audio and video are outside its native modality set.
- Regular inference is more expensive than current high-efficiency models, while fast mode doubles token prices.
- Computer-use and coding benchmark outcomes depend on the agent harness; Anthropic explicitly notes methodology changes for OSWorld.
- The model cannot be fine-tuned through the public Claude API.

## Scores

- **Tool use: 94/100.** Excellent OSWorld, Online-Mind2Web, BrowseComp, and autonomous-agent results demonstrate unusually dependable tool orchestration.
- **Reasoning: 93/100.** Strong HLE and GPQA Diamond performance, especially with tools, places it firmly in the frontier reasoning tier.
- **Context window: 95/100.** One million input tokens, 128,000 standard output tokens, and a 300,000-token batch beta provide exceptional working memory.
- **Multimodal: 76/100.** Image and chart understanding are strong, but text-only output and no native audio/video support narrow its reach.
- **Coding: 95/100.** Its 69.2% SWE-bench Pro, 88.6% SWE-bench Verified, and 74.6% Terminal-Bench 2.1 results are elite.
- **Cost efficiency: 68/100.** $5/$25 regular pricing is reasonable for a flagship and caching/batch discounts help, but cheaper modern models now exceed it on some tasks.
- **Overall Score: 91/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (94 + 93 + 95 + 76 + 95) / 5 = 90.6.

## Bottom line

Claude Opus 4.8 remains a highly capable coding and computer-use agent with excellent long-context capacity and research performance. It is still viable for established deployments, especially where its behavior has already been validated, but its legacy status makes Opus 5.5 the more sensible starting point for new systems.
