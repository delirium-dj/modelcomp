# Hy3 Preview — Research Notes

**Model ID:** tencent/hy3-preview  
**Context window:** 256,000 (262,144 on some hosts); 64K–128K max output  
**Modalities:** Text in/out only  
**Architecture:** 295B total / 21B active MoE; Tencent Hy Community License  
**Pricing:** OpenRouter $0.18/$0.60 per 1M; no Tencent rate card  
**Status:** Superseded by GA Hy3 (Apache 2.0)

## Benchmarks (from meta.json)

- SWE-bench Verified: 74.4%
- Terminal-Bench 2.0: 54.4%
- Same 295B/21B architecture as GA Hy3

## Scores

- **Tool use: 70/100.** Terminal-Bench 2.0 54.4%; same architecture as GA Hy3 but earlier checkpoint with lower terminal scores; now superseded by GA which improved to 71.7%.
- **Reasoning: 83/100.** SWE-bench Verified 74.4%; same base architecture as GA Hy3 (GPQA 90.4%); preview checkpoint shows strong reasoning that the GA release refined.
- **Context window: 78/100.** 256K total; 64K–128K max output (host-dependent).
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video.
- **Coding: 74/100.** SWE-bench Verified 74.4%, Terminal-Bench 2.0 54.4% — competitive but superseded by the GA Hy3 (78.0%/71.7%); community licence (not Apache) restricts deployment options.
- **Cost efficiency: 72/100.** $0.18/$0.60 per 1M (OpenRouter only); community licence (not Apache 2.0) limits free self-hosting options vs GA Hy3; superseded model.
- **Overall Score: 64/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (70+83+78+15+74)/5 = 64. The preview that made Tencent's Hy line credible; same 295B/21B MoE as the GA, but superseded by Apache 2.0 GA Hy3 with better scores and permissive licence — use GA unless you specifically need the preview checkpoint.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
