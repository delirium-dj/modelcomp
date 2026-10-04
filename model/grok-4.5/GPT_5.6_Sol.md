# Grok 4.5 — Independent Research Report

## Summary and evidence

Grok 4.5 is SpaceXAI's July 2026 model for coding, engineering, agents, and knowledge work. It supports text and image input, function calling, structured output, four reasoning levels, and **500K context**. SpaceXAI reports **83.3% Terminal-Bench 2.1**, **64.7% SWE-bench Pro**, **62.0% DeepSWE 1.0**, and **29.0% SWE Marathon**, while using 15,954 output tokens per SWE-bench Pro task.

Sources: [Grok 4.5 launch](https://x.ai/news/grok-4-5), [Grok 4.5 API documentation](https://docs.x.ai/developers/models/grok-4.5)

## Cost and limitations

Pricing is **$2 input, $0.30 cached input, and $6 output per million tokens**, with higher rates beyond 200K. Batch is unavailable, and newer Grok 4.6/4.7 releases supersede it.

## Scores

- **Tool use: 91/100.** Strong terminal performance, functions, and structured output support reliable agents.
- **Reasoning: 89/100.** Engineering-focused reasoning is strong, though newer successors improve it.
- **Context window: 91/100.** 500K is ample for repositories and long workflows.
- **Multimodal: 87/100.** Image input is supported without broader audio/video capability.
- **Coding: 92/100.** Reported coding-agent results and token efficiency are excellent.
- **Cost efficiency: 92/100.** Low prices and short traces give strong task economics.
- **Overall Score: 90/100.** Half-up rounded mean: (91 + 89 + 91 + 87 + 92) / 5 = 90.0.

## Bottom line

Grok 4.5 is an efficient coding-agent model, though new deployments should benchmark its 4.6 and 4.7 successors first.
