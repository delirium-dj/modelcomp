# GPT-5.4 Pro — Independent Research Report

## Executive summary

GPT-5.4 Pro is OpenAI's higher-compute variant of GPT-5.4, intended for difficult professional work where answer quality matters more than latency or price. It combines a very large context window with unusually strong research and knowledge-work results, but it is expensive, text-first rather than fully multimodal, and available only through the Responses API. Its clearest measured distinction is web research: OpenAI reports a state-of-the-art 89.3% on BrowseComp.

## Release and positioning

OpenAI introduced GPT-5.4 and GPT-5.4 Pro on March 5, 2026. The company describes the Pro model as GPT-5.4 using more compute to produce more accurate and detailed answers, with `medium`, `high`, and `xhigh` reasoning-effort settings. The pinned API snapshot is `gpt-5.4-pro-2026-03-05`.

Sources: [OpenAI announcement](https://openai.com/index/introducing-gpt-5-4/), [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)

## Capabilities and benchmark evidence

- **Research and tool use:** GPT-5.4 Pro reaches **89.3% on BrowseComp**, compared with 82.7% for standard GPT-5.4, demonstrating exceptional ability to gather difficult-to-find information from the web. It supports web search, file search, image generation, apply patch, computer use, MCP, and tool search. OpenAI does not list Code Interpreter, hosted shell, or skills as supported for this model.
- **Professional reasoning:** OpenAI reports **82.0% wins or ties on GDPval** and **83.6% on Investment Banking Modeling**. On FrontierMath, it reaches **50.0% on tiers 1–3** and **38.0% on tier 4**, strong evidence of high-end mathematical reasoning.
- **Coding:** OpenAI does not publish a separate GPT-5.4 Pro score for its headline coding evaluations. Standard GPT-5.4—its underlying model—scores **57.7% on SWE-Bench Pro Public** and **75.1% on Terminal-Bench 2.0**; these are useful family-level indicators, not verified Pro-specific results.
- **Context window:** The API exposes a **1,050,000-token context window** and **128,000-token maximum output**, with an August 31, 2025 knowledge cutoff. Prompts exceeding 272,000 input tokens receive higher long-context pricing.
- **Multimodality:** The model accepts text and images and produces text. Audio and video are unsupported, so its multimodality is useful for visual document understanding but narrower than an omni model.

Sources: [OpenAI GPT-5.4 launch and benchmark tables](https://openai.com/index/introducing-gpt-5-4/), [OpenAI GPT-5.4 Pro model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)

## API, deployment, and cost

GPT-5.4 Pro is available through the Responses API only and supports background mode, which is particularly relevant because high-compute responses can take longer to finish. Structured outputs and fine-tuning are not supported. Pricing is **$30 per million input tokens** and **$180 per million output tokens**; cached-input pricing is not offered. For requests above 272,000 input tokens, OpenAI charges 2× the input rate and 1.5× the output rate for the full session. Regional processing adds 10%.

Source: [OpenAI GPT-5.4 Pro model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)

## Limitations

- Extremely high token prices make routine or high-volume workloads difficult to justify.
- Responses API exclusivity may require migration from Chat Completions integrations.
- No structured outputs, fine-tuning, hosted shell, or Code Interpreter support is listed.
- Image understanding is supported, but there is no audio or video input and no native non-text output.
- Several coding and agentic scores commonly associated with GPT-5.4 are published for the standard model, not independently for the Pro variant, so they should not be treated as Pro measurements.

## Scores

- **Tool use: 93/100.** Broad first-party tool support and a Pro-specific 89.3% BrowseComp result place it among the strongest research agents, with deductions for the missing hosted execution tools and structured outputs.
- **Reasoning: 94/100.** Strong Pro-specific results in professional work, finance, and FrontierMath support an elite rating.
- **Context window: 95/100.** A 1.05-million-token window and 128,000-token output allowance are exceptional, though very long prompts incur substantial pricing multipliers.
- **Multimodal: 70/100.** High-quality image input is valuable, but the model remains text-output-only and lacks audio and video support.
- **Coding: 91/100.** The GPT-5.4 family has leading terminal and software-engineering performance, and the Pro variant adds inference compute; the score is moderated because OpenAI does not publish separate Pro coding results.
- **Cost efficiency: 22/100.** $30 input and $180 output per million tokens, with no cached-input discount and higher long-context rates, limits it to high-value tasks.
- **Overall Score: 89/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (93 + 94 + 95 + 70 + 91) / 5 = 88.6.

## Bottom line

GPT-5.4 Pro is a premium reasoning and research model for difficult, economically valuable work. Its standout web-research result, professional-task performance, and million-token context make it compelling when correctness dominates cost. For ordinary chat, bulk processing, or workflows requiring native audio/video, structured JSON guarantees, or economical token use, a standard or smaller model is the more practical choice.
