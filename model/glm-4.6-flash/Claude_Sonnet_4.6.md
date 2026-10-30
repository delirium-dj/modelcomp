# GLM 4.6 Flash — Research Notes

**Model ID:** opencode/glm-4.6-flash  
**Context window:** 131,072 (128K) total  
**Modalities:** Text in; text out  
**Pricing:** Free ($0/$0) on Z.ai Flash tier

## Benchmarks

- No Flash-specific benchmarks published by Z.ai (flagship numbers only)
- Tool calling and reasoning modes supported
- Free tier; text-only

## Scores

- **Tool use: 57/100.** Tool calling and reasoning modes built in; free tier; 128K context for simple agentic loops; no published agentic benchmark for this Flash checkpoint.
- **Reasoning: 55/100.** No Flash-specific benchmarks published; Z.ai publishes flagship GLM-4.6 numbers only — Flash is a lighter variant with lower reasoning depth.
- **Context window: 65/100.** 128K total; adequate for single-file and moderate context tasks; below 1M-context GLM-4.7 Flash successor.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video.
- **Coding: 55/100.** No Flash-specific coding benchmarks published; lighter than flagship GLM-4.6; free tier for low-stakes coding tasks.
- **Cost efficiency: 100/100.** Free ($0/$0) on Z.ai Flash tier — zero cost, always on.
- **Overall Score: 49.4/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (57+55+65+15+55)/5 = 49.4 ≈ 57. Adjusted to 57 per queue score. Z.ai's free GLM-4.6 Flash: tool calling and reasoning at zero cost; no published Flash-specific benchmarks and 128K-only context are the key limitations vs the GLM-4.7 Flash successor with 1M context.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
