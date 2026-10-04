# Grok 4.6 — Independent Research Report

## Summary and evidence

Grok 4.6 is xAI's August 2026 frontier model for long-running agents, coding, knowledge work, and visual applications. It accepts text and images, returns text, supports low through xhigh reasoning, function calling, structured outputs, and a **500,000-token context window**.

xAI reports an Artificial Analysis Intelligence score of **61**, **1753 GDPval-AA v2**, **69.9% CursorBench 3.2**, **65.9% DeepSWE 1.1**, **61.3% FrontierCode 1.1**, **57.5% APEX-Agents**, and **26% Terminal-Bench 3.0**. The mixed coding results show excellent interactive development but weaker terminal autonomy than the top competitors.

Sources: [xAI launch and evaluations](https://x.ai/news/grok-4-6), [xAI model documentation](https://docs.x.ai/developers/models/grok-4.6)

## Cost, strengths, and limitations

Standard pricing is **$2 input, $0.50 cached input, and $6 output per million tokens**; fast service costs twice as much and requests beyond 200K receive higher-context pricing. Strengths include strong knowledge work, coding, visual input, real-time ecosystem search, and competitive pricing. Limitations include text-only output, no Batch API, a 500K rather than million-token window, and weaker Terminal-Bench performance.

Sources: [xAI pricing and specifications](https://docs.x.ai/developers/models/grok-4.6), [xAI pricing plans](https://x.ai/pricing)

## Scores

- **Tool use: 92/100.** Strong agent evaluations, function calling, and xAI search integration support complex workflows.
- **Reasoning: 93/100.** Composite intelligence and GDPval results are near the frontier.
- **Context window: 91/100.** 500K is excellent, though below current million-token leaders.
- **Multimodal: 84/100.** Image understanding is strong, but output remains text and native audio/video are absent.
- **Coding: 92/100.** CursorBench, DeepSWE, and FrontierCode are excellent, moderated by Terminal-Bench 3.0.
- **Cost efficiency: 90/100.** $2/$6 is highly competitive, with caveats for long-context and fast-mode premiums.
- **Overall Score: 90/100.** Half-up rounded mean: (92 + 93 + 91 + 84 + 92) / 5 = 90.4.

## Bottom line

Grok 4.6 is a cost-effective frontier agent for coding and professional work, especially where xAI search and interactive development matter more than maximum terminal autonomy.
