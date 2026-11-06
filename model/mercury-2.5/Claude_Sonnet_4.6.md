# Mercury 2.5 — Claude Sonnet 4.6 Research

Mercury 2.5 (September 2026) is Inception Labs' second commercial diffusion LLM, succeeding Mercury 2 with an expanded 260K-token context window (65,536 max output). It uses the same parallel block-refinement architecture but with improved coherence and higher throughput: 781–1,107 tokens/second, sub-300ms TTFT. It was closed to new users on 2026-10-19 (Mercury 3 is the successor). Text-only: no image, audio, or video input. Pricing: $0.20/$0.75 per 1M in/out ($0.02 cached) at Inception Labs list; launch-priced at $0.04/$0.15 on OpenRouter/Vercel.

Benchmarks (verified):
- tau3-bench aggregate: 96.0% (agentic multi-turn tool-use evaluation; standout leader at time of release)
- Throughput: 781–1,107 tokens/second
- General intelligence tier: cost-optimised frontier comparable (Claude Haiku class / Gemini Flash-Lite class)
- No MMLU or HumanEval published — Inception Labs benchmarks focus on latency and agentic task metrics

## Scores

- **Tool use: 72/100.** tau3-bench 96.0% is a top-tier multi-turn agentic tool-use score; diffusion parallel decoding gives sub-300ms TTFT for reactive tool loops. Coherence on highly nested or long-horizon tool plans is less validated.
- **Reasoning: 52/100.** Comparable to Claude Haiku / Gemini Flash-Lite class by Inception's own positioning; no MMLU-Pro score published. Strong for structured agentic reasoning at speed but not demonstrated on frontier deep-reasoning benchmarks.
- **Context window: 78/100.** 260K tokens total (65K max output). Tier: 256K = 78 points; 260K rounds to this tier. Extended context is a large step up from Mercury 2's 128K.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video capability. Pure text diffusion model.
- **Coding: 38/100.** No code-specific benchmarks (HumanEval, SWE-bench) published for 2.5. Positioned slightly below Mercury 2's 24.8% SWE-bench given its text-only focus. Fast autocomplete at scale is the use case.
- **Cost efficiency: 90/100.** $0.20/$0.75 at Inception list; $0.04/$0.15 at launch via OpenRouter — extremely cheap for 1,000+ tok/s throughput. Closed to new users post-2026-10-19; existing customers only.
- **Overall Score: 51/100.** Mean of Tool use (72) + Reasoning (52) + Context (78) + Multimodal (15) + Coding (38) = 255 / 5 = 51.0. Text-only constraint drags overall score; best deployed as an ultra-low-latency agentic backbone where vision is not needed.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
