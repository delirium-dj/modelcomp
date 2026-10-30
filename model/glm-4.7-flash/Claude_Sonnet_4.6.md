# GLM 4.7 Flash — Research Notes

**Model ID:** opencode/glm-4.7-flash  
**Context window:** 1M total  
**Modalities:** Text in/out only  
**Architecture:** 30B-A3B MoE; MIT license  
**Pricing:** Free on Zen

## Benchmarks

- MIT-licensed 30B MoE with 1M context
- Competitive benchmark scores in the 30B class per meta.json
- Designed for efficiency, not top-tier closed-model reasoning
- No specific published benchmark scores in meta.json

## Scores

- **Tool use: 63/100.** 1M context for sustained agentic tool loops; MIT open weights for custom integration; 30B/3B-active MoE enables high-throughput free-tier agent steps; lightweight ceiling vs flagship GLM-5.3.
- **Reasoning: 60/100.** 30B class reasoning; 1M context for long-document analysis; competitive in the 30B open-weight space but not frontier-grade; no specific published scores.
- **Context window: 92/100.** 1M total — the full flagship context window from a free 30B model; major upgrade over GLM-4.6 Flash's 128K.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video.
- **Coding: 60/100.** 30B class coding; balanced for agentic workflows; MIT weights for fine-tuning; free tier with 1M context makes it accessible for iterative coding experiments.
- **Cost efficiency: 100/100.** Free on Zen; MIT license for self-hosting — zero cost developer and production access.
- **Overall Score: 58/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (63+60+92+15+60)/5 = 58. MIT-licensed 30B MoE with 1M context for free: the most accessible 1M-context open-weight flash model; efficiency-focused design means reasoning depth stays mid-tier vs the 744B+ GLM-5.x flagship line.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
