# Claude Opus 4.4 — Research Notes

**Model ID:** opencode/claude-opus-4.4  
**Context window:** 200,000 total; 64,000 max output  
**Modalities:** Text, image in; text out  
**Pricing:** $15/$75 per 1M in/out; $1.50 cached read  
**Status:** Archival premium tier; superseded by Opus 4.5/4.6+

## Benchmarks (Claude Opus 4 class, late 2025)

- SWE-bench Verified: ~72.5–79% (Opus 4 family, harness-dependent)
- Terminal-Bench (Core): ~43.2% at launch
- Nuanced instruction-following and long-horizon agentic work

## Scores

- **Tool use: 80/100.** Terminal-Bench Core ~43.2%; nuanced instruction-following for complex agentic work; 200K context; archival premium tier — still capable but superseded by Opus 4.5/4.6.
- **Reasoning: 82/100.** SWE-bench Verified ~72.5–79% (Opus 4 class); strong nuanced instruction-following; image input for visual reasoning tasks; archival checkpoint still benchmarks well.
- **Context window: 75/100.** 200K total; 64K max output — solid for most tasks; below 1M-class frontier.
- **Multimodal: 60/100.** Text + image in; text out — image input is the key step up from Opus 3.7; no audio or video.
- **Coding: 79/100.** SWE-bench Verified ~72.5–79% (Opus 4 class); strong multi-file agentic coding; 200K context for large repo analysis.
- **Cost efficiency: 22/100.** $15/$75 per 1M — archival premium pricing; $75/M output is among the most expensive in the dataset; superseded by more capable and cheaper models in the Opus 4.5+ line.
- **Overall Score: 75/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (80+82+75+60+79)/5 = 75.2 ≈ 75. Anthropic's late-2025 Opus archival tier: image input added over 3.7, SWE-bench ~72–79%, nuanced instruction following — now superseded by Opus 4.5/4.6 with better benchmarks at comparable pricing.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
