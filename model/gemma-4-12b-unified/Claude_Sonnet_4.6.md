# Gemma 4 12B Unified — Research Notes

**Model ID:** opencode/gemma-4-12b-unified  
**Context window:** 262,144 total; 32,768 max output  
**Modalities:** Text, image, audio in; text out  
**Architecture:** Unified encoder-free cross-modal token projection; ~16 GB VRAM local  
**Pricing:** Free open weights; hosted ~$0.10/$0.25 per 1M

## Benchmarks

- MMLU-Pro: 77.2%
- LiveCodeBench v6: 72.0%
- AIME 2026 (no tools): 77.5%
- GPQA Diamond: 78.8%
- Codeforces ELO: 1659
- MMMU-Pro (multimodal vision): 69.1%
- MATH-Vision: 79.7%

## Scores

- **Tool use: 72/100.** Adjustable thinking mode; native function calling; AIME 2026 77.5% shows solid reasoning for tool-augmented tasks; 262K context for multi-step loops at ~$0.10/M.
- **Reasoning: 74/100.** MMLU-Pro 77.2%, GPQA Diamond 78.8%, AIME 2026 77.5% — strong academic reasoning for a 12B model; thinking mode drives benchmark gains.
- **Context window: 78/100.** 262K total; 32K output — solid for the 12B class; same as the 26B MoE sibling.
- **Multimodal: 70/100.** Text, image, audio in; text out — Google's first mid-sized open model with native audio inputs via unified encoder-free projection; MMMU-Pro 69.1%; no video understanding.
- **Coding: 73/100.** LiveCodeBench v6 72.0%, Codeforces ELO 1659 — competitive coding for a 12B parameter model with native thinking.
- **Cost efficiency: 96/100.** Free open weights (~16 GB VRAM self-host); hosted ~$0.10/$0.25 per 1M — outstanding value for text+image+audio multimodal capability.
- **Overall Score: 73/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (72+74+78+70+73)/5 = 73.4 ≈ 73. Google's encoder-free unified multimodal: first open mid-size model with native audio in, GPQA 78.8% and LiveCodeBench 72.0% at ~16 GB VRAM; the audio capability makes it uniquely versatile for its parameter class.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
