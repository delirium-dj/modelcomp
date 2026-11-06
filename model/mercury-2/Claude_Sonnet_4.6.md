# Mercury 2 — Claude Sonnet 4.6 Research

Mercury 2 (February 2026) is Inception Labs' first commercial-scale diffusion LLM (dLLM). Unlike autoregressive models that generate one token at a time, Mercury 2 uses parallel block refinement — starting from a masked draft and refining all tokens simultaneously across multiple passes. This yields 500–1,000 tokens/second on standard inference hardware, making it uniquely suited for real-time voice agents, low-latency sub-agent loops, and high-frequency code-completion pipelines. Context: 128K in / 50K out. Modalities: text and vision in, text out.

Benchmarks (verified):
- SWE-bench Verified: 24.8% (weak repository-scale coding vs. frontier autoregressive peers)
- Throughput: 500–1,000 tokens/second (parallel diffusion decoding)
- Pricing: $0.25/M input, $0.75/M output, $0.025/M cached input (Inception Labs list)
- General reasoning positioned comparable to cost-optimised tier (GPT-4o Mini / Claude 3.5 Haiku class)

## Scores

- **Tool use: 55/100.** Parallel diffusion architecture supports structured JSON output and tool-call schemas; latency advantage suits agentic loops, but coherence variance in long multi-step chains keeps it below frontier autoregressive models in complex chained-tool tasks.
- **Reasoning: 48/100.** Positioned by Inception Labs at cost-optimised tier (comparable to Claude 3.5 Haiku / GPT-4o Mini class); diffusion incoherence on complex multi-step logical chains limits deep reasoning relative to frontier reasoning models.
- **Context window: 65/100.** 128K total input (50K max output). Tier: 128K = 65 points. Generous for a dLLM but output cap (50K) is a constraint for long document generation.
- **Multimodal: 62/100.** Text + vision in, text out. No audio or video. Image understanding is functional but not a headline feature; positions in the image-capable text-out tier (60–65).
- **Coding: 42/100.** SWE-bench Verified 24.8% is below the median for frontier code models (frontier leaders reach 65–80%+). Best suited for short autocomplete and FIM-style completions at speed, not deep repository reasoning.
- **Cost efficiency: 80/100.** $0.25/$0.75 per 1M in/out is competitive for a vision-capable model; combined with 500–1,000 tok/s throughput, the cost-per-useful-output ratio is excellent for latency-sensitive workloads.
- **Overall Score: 54/100.** Mean of Tool use (55) + Reasoning (48) + Context (65) + Multimodal (62) + Coding (42) = 272 / 5 = 54.4. Best positioned as a real-time agent backbone where sub-300ms TTFT and 1,000 tok/s matter more than raw benchmark rankings.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
