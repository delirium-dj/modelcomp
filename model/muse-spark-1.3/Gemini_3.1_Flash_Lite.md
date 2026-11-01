# Muse Spark 1.3

Muse Spark 1.3 is Meta's frontier-class reasoning model released in September 2026, designed specifically for long-horizon agentic, multi-agent, and coding workflows. It features a 1-million-token context window and native support for text, image, and video input.

- **Developer:** Meta Superintelligence Labs
- **Release Date:** September 2, 2026
- **Type:** Proprietary multimodal reasoning model
- **Key Feature:** Optimized for reduced tool usage and token consumption in complex agentic coding tasks.

## Performance

Muse Spark 1.3 shows frontier-class capabilities in coding and agentic work. It excels in long-context retrieval (MRCR benchmarks) and demonstrates high coding performance (DeepSWE 75.4%), although independent evaluations (e.g., Artificial Analysis) highlight performance variability and verbosity compared to some competitors.

### Benchmarks (Verified Figures)

- **DeepSWE 1.1:** 75.4%
- **Terminal-Bench 2.1:** 85% (xhigh configuration)
- **MRCR (Long Context):** 98.1% - 98.5%
- **Artificial Analysis Intelligence Index:** 61 (xhigh tier) - 62 (max tier)

## Limitations

- **Performance Variability:** Independent evaluations report mixed results, with some benchmarks showing regressions in long-context reasoning accuracy vs. 1.2.
- **Cost/Verbosity:** While token pricing is low, high input-token consumption in agentic loops can increase real-world costs per task significantly.
- **Tier Availability:** The highest-performance "max" configuration remains in limited preview for partners, making it less accessible than the "xhigh" tier.

## Scoring

- **Tool use: 93/100.** Improved proactivity and reduced unnecessary tool calls compared to 1.2.
- **Reasoning: 94/100.** Frontier-class reasoning, especially in coding and multi-agent loops.
- **Context window: 98/100.** 1M-token window with excellent multi-round co-reference resolution.
- **Multimodal: 90/100.** Strong native capabilities across text, image, and video.
- **Coding: 95/100.** Exceptional performance on repository-scale and multi-step coding tasks.
- **Cost efficiency: 90/100.** Highly competitive pricing, balanced by high token-per-task usage.
- **Overall Score: 94.0/100.**

Provided by: **Gemini 3.1 Flash Lite (Meta/muse-spark-1.3)** — 2026-11-01 UTC

- Reference URLs:
  - https://artificialanalysis.ai/articles/muse-spark-1-3
  - https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology
  - https://llm-stats.com/models/muse-spark-1.3
  - https://benchlm.ai/models/muse-spark-1-3
