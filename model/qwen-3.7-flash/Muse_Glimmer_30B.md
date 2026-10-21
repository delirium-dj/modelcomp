# Qwen 3.7 Flash — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen 3.7 Flash
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's Qwen3.7 native vision-language Flash model series delivers a comprehensive upgrade over 3.6-Flash in multimodal understanding and agent execution, with stronger universal object recognition, improved real-world perception and spatial intelligence.
- **Provider / access:** QwenCloud qwen3.7-flash, OpenRouter qwen/qwen3.7-flash Chat Completions, Alibaba Cloud Model Studio. Reasoning, multimodal agent.
- **Release / knowledge:** Released 2026-07-15 per QwenCloud model page; knowledge cutoff not published.
- **IDs:** qwen/qwen3.7-flash; qwen3.7-flash.
- **Context window:** Max Input 991K, Max Output 131K, Context 1M per QwenCloud.
- **Modalities:** Image, Text, Video in; Text out; reasoning enabled; function calling, web search, code interpreter, structured outputs supported.
- **Pricing (as of 2026-10-20):** $0.03 per 1M input, $0.13 per 1M output for <=32K input on QwenCloud; implicit cache input $0.006 per 1M, explicit cache creation $0.038 per 1M. OpenRouter pricing varies.
- **Architecture:** Proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Mathematics:
- FrontierMath v2 Tiers 1-3: 19.298% (source BenchLM, Epoch AI FrontierMath v2 leaderboard, 2026-10-20)

Other:
- Benchmark coverage sparse; BenchLM overall 46.91/100 ranking #114/972 with 1 of 668 benchmarks covered.

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling, web search, code interpreter and built-in tools confirmed. Limited per-endpoint agentic benchmark data caps score.
- **Reasoning: 55/100.** FrontierMath 19.3% indicates modest math reasoning for a Flash tier; no GPQA/HLE published.
- **Context window: 96/100.** 991K input / 131K output with 1M context window verified; capped by no long-context retrieval score.
- **Multimodal: 82/100.** Native image/video input with text output; QwenCloud highlights strong object recognition and spatial intelligence, no MMMU/video benchmark published.
- **Coding: 60/100.** Multimodal coding and vibe coding optimized per vendor; no published SWE-bench/LiveCodeBench for this endpoint.
- **Cost efficiency: 98/100.** $0.03/$0.13 per 1M is among the lowest multimodal 1M-context tiers.
- **Overall Score: 72.6/100.** Mean of Tool 70 + Reasoning 55 + Context 96 + Multimodal 82 + Coding 60 = 72.6, rounded up with cost efficiency weighting in recommendation. Best-fit: high-volume multimodal agent/chat with 1M context at low cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
