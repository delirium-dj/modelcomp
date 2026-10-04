# Gemini 3.5 Flash — Independent Research Report

## Executive summary

Gemini 3.5 Flash is Google's May 2026 general-availability model for high-speed coding, agentic execution, and long-horizon multimodal work. It combines a one-million-token context window with unusually broad native tools and strong terminal, MCP, computer-use, and professional-work results. Its main tradeoff is price: it costs substantially more than the earlier Gemini 3 Flash despite retaining the Flash name.

## Release and positioning

Google released Gemini 3.5 Flash on May 19, 2026 as the stable `gemini-3.5-flash` endpoint. Built on Gemini 3 Flash, it adds stronger low-effort reasoning, automatic preservation of intermediate reasoning across turns, configurable thinking levels, and a default `medium` effort setting. Google positions it for sub-agent deployment, rapid iterative coding, and sustained multi-step workflows.

Sources: [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/), [Gemini API guide](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5), [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)

## Capabilities and benchmark evidence

- **Coding:** Google reports **76.2% on Terminal-Bench 2.1** and **55.1% on SWE-Bench Pro Public**, versus 58.0% and 49.6% respectively for Gemini 3 Flash.
- **Tool use:** It scores **83.6% on MCP Atlas** and **56.5% on Toolathlon**, both ahead of the earlier Flash model. Native facilities include code execution, computer use, file search, function calling, Google Search and Maps grounding, URL context, and structured output.
- **Computer control:** Gemini 3.5 Flash reaches **78.4% on OSWorld-Verified**, up from 65.1% for Gemini 3 Flash, although computer use remains a preview feature.
- **Reasoning and professional work:** Google reports **1656 Elo on GDPval-AA**. Configurable thinking ranges from minimal through high, allowing applications to trade latency and cost for reasoning depth.
- **Multimodality:** Google reports **84.2% on CharXiv Reasoning**. The API accepts text, images, video, audio, and PDFs, while returning text.
- **Context window:** The model supports **1,048,576 input tokens** and **65,536 output tokens**, with a January 2025 knowledge cutoff.

Sources: [Google DeepMind evaluation table](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/), [Gemini API model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)

## API, deployment, and cost

The stable endpoint is available through Gemini API, Google AI Studio, Android Studio, Google Antigravity, Gemini Enterprise, and consumer Gemini surfaces. Paid API pricing is **$1.50 per million input tokens** and **$9 per million output tokens**. Context caching, Batch API, Flex inference, and priority inference are supported.

Sources: [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), [Gemini API model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash), [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)

## Limitations

- Output is text-only; image and audio generation and the Live API are unsupported.
- Computer use is still preview, and image segmentation is unavailable in Gemini 3.x.
- Its January 2025 internal knowledge cutoff requires search grounding for recent facts.
- Pricing is three times the former Gemini 3 Flash list price on both input and output, weakening the traditional Flash cost advantage.
- Vendor benchmarks use specific agent harnesses and may not predict application-specific reliability.

## Scores

- **Tool use: 92/100.** Excellent MCP Atlas and OSWorld results accompany one of the broadest integrated tool suites available.
- **Reasoning: 88/100.** Strong professional-work performance and adjustable thinking make it highly capable, though below maximum-compute frontier reasoning systems.
- **Context window: 95/100.** The one-million-token input and 65,536-token output limits are excellent for repositories and long workflows.
- **Multimodal: 93/100.** Text, image, audio, video, and PDF understanding plus strong CharXiv results are offset only by text-only output.
- **Coding: 90/100.** A 76.2% Terminal-Bench 2.1 result is excellent, while 55.1% SWE-Bench Pro leaves room below the strongest coding flagships.
- **Cost efficiency: 77/100.** Performance per dollar remains good, but $1.50/$9 pricing is expensive relative to both its predecessor and newer Flash alternatives.
- **Overall Score: 92/100.** Half-up rounded mean of Tool Use, Reasoning, Context, Multimodal, and Coding: (92 + 88 + 95 + 93 + 90) / 5 = 91.6.

## Bottom line

Gemini 3.5 Flash is a powerful production agent model with excellent context, multimodal input, terminal work, and built-in tools. It is best suited to latency-sensitive workflows that actually use those capabilities; simpler or highly price-sensitive workloads are better served by Flash-Lite or a newer, cheaper Flash generation.
