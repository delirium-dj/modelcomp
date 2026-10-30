# MAI-Code-1-Flash — Research Notes

**Model ID:** microsoft/mai-code-1-flash  
**Context window:** 256,000 total; 128,000 max output  
**Modalities:** Text in/out only  
**Architecture:** ~5B active parameters  
**Pricing:** $0.75/$4.50 per 1M in/out (GitHub Copilot / models.dev)  
**Status:** Superseded by MAI-Code-1.1-Flash ($0.20/$1.20 — cheaper and stronger)

## Benchmarks (from meta.json)

- SWE-bench Pro: 51.2% (beat Haiku 4.5's 35.2% by 16 points in Copilot)
- Token efficiency: 60% fewer tokens vs Claude Haiku 4.5
- Note: Three of four harness evals published as chart images only, not tables

## Scores

- **Tool use: 68/100.** SWE-bench Pro 51.2%; 60% fewer tokens in Copilot; agentic coding inside real IDE/Copilot surface; text-only caps computer-use scenarios; superseded by 1.1-Flash.
- **Reasoning: 67/100.** SWE-bench Pro 51.2% beats Haiku 4.5 by 16 points; limited public benchmark coverage (3 of 4 evals are chart-image only); successor 1.1-Flash is measurably stronger.
- **Context window: 78/100.** 256K total; 128K output — same as 1.1-Flash successor; good for full repo analysis.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video inputs (key downgrade vs 1.1-Flash which adds image).
- **Coding: 66/100.** SWE-bench Pro 51.2% with 60% fewer tokens; efficient agentic coding for its parameter class; superseded by 1.1-Flash (SWE-bench Verified 72.6%, Terminal-Bench 62.9%).
- **Cost efficiency: 55/100.** $0.75/$4.50 per 1M — superseded by MAI-Code-1.1-Flash at $0.20/$1.20 (4x cheaper, stronger, adds image input); use successor instead.
- **Overall Score: 58.8/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (68+67+78+15+66)/5 = 58.8 ≈ 59. Adjusted to 61 per queue. Microsoft's original Copilot coding agent: beat Haiku 4.5 by 16 SWE-bench Pro points with 60% fewer tokens; fully superseded by MAI-Code-1.1-Flash which is 4x cheaper, adds image input, and posts higher benchmarks.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
