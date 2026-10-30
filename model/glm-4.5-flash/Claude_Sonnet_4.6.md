# GLM 4.5 Flash — Research Notes

**Model ID:** opencode/glm-4.5-flash  
**Context window:** 128K total; up to 98K max output  
**Modalities:** Text in/out only  
**Architecture:** Distilled lightweight (vs 355B MoE flagship GLM-4.5)  
**Pricing:** Free on Zen; $0/$0 on Z.ai developer platform

## Benchmarks

- Free tier with dual thinking modes and agentic tool execution
- Distilled lightweight parameter footprint — lower SWE-bench headroom than flagship GLM-4.5 (355B MoE)
- No published Flash-specific benchmark scores

## Scores

- **Tool use: 58/100.** Dual interleaved thinking modes; robust tool-calling support; up to 98K output generation; free tier limits throughput; lighter distilled architecture caps agentic depth.
- **Reasoning: 55/100.** No published benchmark scores for the Flash specifically; distilled from GLM-4.5 (355B) — expect significantly lower multi-file reasoning depth than the flagship.
- **Context window: 65/100.** 128K total; up to 98K max output — standard mid-tier context; below the 1M offered by GLM-4.6/4.7 Flash successors.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video.
- **Coding: 55/100.** Distilled architecture results in lower headroom for multi-file SWE-bench tasks per meta.json; no published coding benchmarks for the Flash tier.
- **Cost efficiency: 100/100.** Free on Zen and Z.ai developer platform ($0/$0) — zero cost for development and prototyping.
- **Overall Score: 50/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (58+55+65+15+55)/5 = 49.6 ≈ 50. Z.ai's zero-cost developer tier: dual thinking modes, 98K output, robust tool calling at $0 — but distilled architecture and no published benchmarks mean it's prototyping-grade, not production-coding-grade.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
