# Agnes 3.0 Flash — Claude Sonnet 4.6 Research

Agnes 3.0 Flash (Agnes AI / Sapiens AI) is a high-throughput agentic model offering two distinct variants: a closed production API (the rated endpoint) and an open-weight 33B preview on Hugging Face (Apache 2.0, hybrid-attention with gated delta-rule recurrent layers + standard global attention, 262K context). The production API is a significantly more capable server-side checkpoint — community testing confirms it outperforms the open-weight preview. Meta confirms: 512K context, 226 tok/s decode speed, text + image in, text out. Pricing: $0.05/$0.15 per 1M in/out ($0.005 cached, $0 trial tier) — one of the lowest-priced multimodal models in the dataset.

Benchmarks (verified):
- GPQA Diamond: 92.4% (meta.json — production API, vendor-reported)
- AA Intelligence Index: ~35.5 (Artificial Analysis — production API)
- Throughput: 226 tok/s decode (meta.json)
- Context: 512K in / 65,536 out (production API)
- Open-weight preview: 33B, 262K context, hybrid delta-rule attention; performs below production API (community confirmed)
- Pricing: $0.05/M in, $0.15/M out (production API); $0 trial tier

## Scores

- **Tool use: 72/100.** Native tool orchestration is a headline feature per meta ("native tool orchestration"); agentic coding workflows are a primary use case per Sapiens AI marketing (Agnes Code integration). No specific tau3-bench or agent-loop benchmark published for the production API; scored based on GPQA 92.4% reasoning quality and architecture design.
- **Reasoning: 82/100.** GPQA Diamond 92.4% (vendor-reported) is an exceptionally high score for a flash-tier model — approaches frontier flagship levels. AA Intelligence Index ~35.5 is more conservative and reflects the model's day-to-day throughput-focused deployment. Using GPQA as the primary signal (with vendor discount applied) while noting the AA gap.
- **Context window: 86/100.** 512K in / 65,536 out (production API). Tier: 500K = 86 points. Max output capped at 65K — a notable constraint for long-form generation tasks despite the large input window.
- **Multimodal: 62/100.** Text + image in; text out. No audio or video. Positions in the image-capable text-out tier (60–65). Agnes 3.0 Flash was built "omni-modal from the ground up" per Sapiens AI, though the production API currently supports text + image only.
- **Coding: 65/100.** No standalone HumanEval or LiveCodeBench score published for the production API. Agnes Code integration and agentic coding focus confirm strong code-generation utility. AA Intelligence Index ~35.5 implies solid but not class-leading coding for a mid-tier flash model. GPQA 92.4% reasoning backs confident code comprehension.
- **Cost efficiency: 98/100.** $0.05/$0.15 per 1M in/out with a $0 trial tier — the cheapest multimodal model in the dataset. 226 tok/s decode maximises output per dollar. Exceptional cost efficiency.
- **Overall Score: 73/100.** Mean of Tool use (72) + Reasoning (82) + Context (86) + Multimodal (62) + Coding (65) = 367 / 5 = 73.4, rounded to 73. Best positioned for high-volume, cost-sensitive agentic pipelines where 512K context and 226 tok/s throughput matter. GPQA 92.4% (vendor-reported) is a headline score; apply normal vendor-benchmark caution. The $0.05 input rate makes it unrivalled for budget-conscious deployments.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
