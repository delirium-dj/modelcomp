# Qwen 3.7 Max — Research Notes

**Model ID:** opencode/qwen-3.7-max  
**Context window:** 1M total; 131,072 max output  
**Modalities:** Text in/out  
**Pricing:** $1.48/$4.43 per 1M in/out (OpenRouter); cached ~$0.25

## Benchmarks

- SWE-bench Verified: 80.4%
- SWE-bench Pro: 60.6% — beats GPT-5.5 (~58.6%) and Claude Opus 4.6 (~57.3%)
- MMLU-Pro: 89.3–89.6%
- Closed weights; text-only; Alibaba proprietary API tier

## Scores

- **Tool use: 85/100.** Strong agentic tool use for long-horizon coding and office automation; SWE-bench Pro 60.6% leads competitors; text-only limits computer-use workflows.
- **Reasoning: 86/100.** MMLU-Pro 89.3%, SWE-bench Verified 80.4%; near-tie with western frontier reasoning flagships at its release window.
- **Context window: 92/100.** 1M token context; long-horizon engineering narratives fully supported.
- **Multimodal: 15/100.** Text in/out only; no image, audio, or video understanding — significantly caps versatility.
- **Coding: 86/100.** SWE-bench Verified 80.4%, SWE-bench Pro 60.6% beating GPT-5.5 and Opus 4.6; excellent repository-level code quality.
- **Cost efficiency: 70/100.** $1.48/$4.43 per 1M — reasonable for frontier coding quality but closed weights with no self-hosting option and no free tier.
- **Overall Score: 73/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (85+86+92+15+86)/5 = 72.8 ≈ 73. Alibaba's office-and-coding Max tier: SWE-bench Verified 80.4% and MMLU-Pro 89.3% are excellent; text-only input is a hard cap that keeps it from broader agent workflows.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
