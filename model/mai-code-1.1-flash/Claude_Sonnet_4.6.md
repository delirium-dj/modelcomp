# MAI-Code-1.1-Flash — Research Notes

**Model ID:** microsoft/mai-code-1.1-flash  
**Context window:** 256,000 total; 128,000 max output  
**Modalities:** Text, image in; text out  
**Architecture:** 138B total / 5B active MoE  
**Pricing:** $0.20/$1.20 per 1M in/out; $0.02 cached (GitHub Copilot)

## Benchmarks (from meta.json)

- SWE-bench Verified: 72.6%
- Terminal-Bench 2.1: 62.9%

## Scores

- **Tool use: 75/100.** Terminal-Bench 2.1 62.9%; image context baked into agentic coding loop; 256K context for large repo work; Copilot-native integration reduces orchestration overhead.
- **Reasoning: 74/100.** SWE-bench Verified 72.6% is solid for a 5B-active MoE; only two benchmark rows published — limited external evidence base.
- **Context window: 78/100.** 256K total; 128K output — competitive for a Copilot-focused model; below 1M-class frontier but sufficient for most repo-scale workflows.
- **Multimodal: 60/100.** Text + image in; text out; image baked into the coding loop; no audio or video.
- **Coding: 75/100.** SWE-bench Verified 72.6%, Terminal-Bench 2.1 62.9%; Microsoft's Copilot-native agentic engineering model — strong for its active-parameter budget.
- **Cost efficiency: 88/100.** $0.20/$1.20 per 1M — exceptional value for SWE-bench Verified 72.6%; $0.02 cached; GitHub Copilot integration lowers total deployment cost.
- **Overall Score: 72/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (75+74+78+60+75)/5 = 72.4 ≈ 72. Microsoft's Copilot-native agentic coding MoE: SWE-bench 72.6% and Terminal-Bench 62.9% at $0.20/$1.20; two-benchmark disclosure limits external confidence but cost-per-performance is strong for the GitHub ecosystem.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
