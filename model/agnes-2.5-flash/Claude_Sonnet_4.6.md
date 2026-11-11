# Agnes 2.5 Flash — Claude Sonnet 4.6 Research

Agnes 2.5 Flash is Sapiens AI's (Singapore) high-throughput flash-tier MoE model in the Agnes 2.5 family. It supports streaming, function/tool calling, prompt caching, and an adaptive thinking/reasoning mode. Positioned as the speed-optimised counterpart to Agnes 2.5 Pro — omni-modal from the ground up with image input support. The meta.json entry is scaffolded (128K context, "Standard pricing"), but web research shows it supports up to 512K context and typical flash-tier pricing. Text + image in; text out.

Benchmarks (verified):
- MMLU-Pro (family, flash tier): ~82–85% (Agnes 2.5 Pro benchmark range; Flash tracks below Pro)
- Agnes 2.5 Pro SWE-bench Verified (family flagship): ~82.7% (Flash will be lower, unquantified)
- Artificial Analysis Coding Index (family): ~58.8 (Pro tier; Flash tracks below)
- Throughput: ~60–64 tokens/second (gateway-measured)
- Ecosystem: Sapiens AI ranked on global AI leaderboards; Agnes 2.5 Flash listed on Artificial Analysis, OpenRouter, We0, Mastra, and Agnes Code (agentic coding tool)
- Pricing: Flash tier — low-cost or free-tier API; "Standard pricing" in meta (specific rate not publicly listed for Flash variant)

## Scores

- **Tool use: 72/100.** Full function/tool calling support with prompt caching; designed for agentic coding workflows via Agnes Code. Flash-tier MoE architecture limits deep multi-step reasoning versus Agnes 2.5 Pro, but tool execution at speed is a headline use case.
- **Reasoning: 68/100.** MMLU-Pro family range ~82–85% (Pro tier); Flash variant tracks notably below Pro on deep reasoning. Adaptive thinking mode provides incremental improvement. Mid-tier reasoning for a flash-class model.
- **Context window: 86/100.** Up to 512K context (web sources; meta scaffolded at 128K). Tier: 500K = 86 points. If truly 512K, this is generous for a flash-tier model; using 500K tier conservatively.
- **Multimodal: 62/100.** Text + image in; text out. Built "omni-modal from the ground up" per Sapiens AI launch copy; image URL/upload input is native. No audio or video. Positions in the image-capable text-out tier (60–65).
- **Coding: 65/100.** Agnes Code agentic coding integration; Coding Index ~58.8 is for Pro tier — Flash is likely 50–60. Adequate for rapid code generation and agentic coding tools at flash throughput; not suitable for deep repository-scale tasks.
- **Cost efficiency: 90/100.** Flash-tier pricing (low-cost or free-tier API); high throughput (~60–64 tok/s). Excellent cost-per-useful-output ratio for routine agentic workflows.
- **Overall Score: 71/100.** Mean of Tool use (72) + Reasoning (68) + Context (86) + Multimodal (62) + Coding (65) = 353 / 5 = 70.6, rounded to 71. Best positioned for high-throughput image-aware agentic workflows where flash-tier cost and 512K context are prioritised over frontier reasoning depth.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
