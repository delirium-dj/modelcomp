# Iceman — Claude Sonnet 4.6 Research

Iceman (OpenCode, `opencode/iceman-free`) is an anonymous stealth reasoning model deployed on OpenCode Console and OpenCode Go as a free tier offering. It features a 262K/131K context window and text-only input/output. Identity has not been officially disclosed by OpenCode. Free access with data retention: prompts and completions are retained for model training. StealthMark 1.8.10 is the primary evaluation framework used to score Iceman, measuring active tool calling and agentic coding workflows.

Benchmarks (verified — StealthMark 1.8.10):
- Overall (StealthMark): 52.1 / 100
- Coding: 91.3 / 100 (strongest axis — bulk code generation and agentic task handling)
- Cost Efficiency: 91.3 / 100 (zero-cost high-throughput utility)
- Context Window Handling: 68.0 / 100 (262K in / 131K out)
- Tool Use: 60.0 / 100
- Reasoning: 51.7 / 100
- Multimodal: 25.7 / 100 (text-only architecture; score reflects absence of modalities vs peers)
- Weaknesses: lower scores on spatial physics logic and multi-step interactive puzzle planning

## Scores

- **Tool use: 60/100.** StealthMark 1.8.10 Tool Use score: 60.0. Active tool calling is supported; adequate for coding-driven tool actions but not validated on complex nested multi-tool plans.
- **Reasoning: 52/100.** StealthMark 1.8.10 Reasoning score: 51.7. Mid-tier reasoning — lower scores on physics planning and multi-step puzzle logic noted. Adequate for linear code reasoning tasks.
- **Context window: 78/100.** 262K in / 131K out. Tier: 256K = 78 points; 262K rounds to this tier. StealthMark context score 68.0 reflects practical quality degradation, not the raw window size.
- **Multimodal: 15/100.** Text in/out only. StealthMark Multimodal 25.7 reflects peer comparisons; our scale scores text-only at 15.
- **Coding: 78/100.** StealthMark Coding 91.3 is excellent for agentic bulk code generation and synthetic code tasks. Applying a modest discount for the proprietary nature of StealthMark vs. standard benchmarks (HumanEval, SWE-bench). Strong for IDE-style code generation workflows.
- **Cost efficiency: 100/100.** Free ($0) — the highest cost efficiency tier. Data retention terms apply.
- **Overall Score: 57/100.** Mean of Tool use (60) + Reasoning (52) + Context (78) + Multimodal (15) + Coding (78) = 283 / 5 = 56.6, rounded to 57. Best positioned for zero-cost bulk code generation and agentic coding prototyping where data retention terms are acceptable.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
