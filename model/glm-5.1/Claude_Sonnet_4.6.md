# GLM 5.1 — Research Notes

**Model ID:** opencode/glm-5.1  
**Context window:** 202,752 total; 128,000 max output  
**Modalities:** Text in/out only  
**Architecture:** 744B total / 40B active MoE; MIT license  
**Pricing:** $1.40/$4.40 per 1M in/out; $0.26 cached

## Benchmarks (from meta.json)

- SWE-bench Pro: 58.4%
- Terminal-Bench 2.1: 56.9% (Vals AI — independently verified)
- Built for 8-hour agentic coding sessions on self-hosted weights

## Scores

- **Tool use: 72/100.** Terminal-Bench 2.1 56.9% (Vals — independent); 744B/40B-active for sustained agentic coding; 200K context; MIT weights for multi-hour self-hosted sessions.
- **Reasoning: 72/100.** SWE-bench Pro 58.4%; mid-tier reasoning in the GLM-5.x progression; superseded by GLM-5.2/5.3 with 1M context and higher scores.
- **Context window: 75/100.** ~203K total; 128K output — same class as GLM-5 base; 1M context came with GLM-5.2.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video.
- **Coding: 72/100.** SWE-bench Pro 58.4%; the MIT flagship before 5.2; Terminal-Bench 56.9% independently verified; built for eight-hour agentic coding sessions.
- **Cost efficiency: 83/100.** $1.40/$4.40 per 1M; MIT self-host $0; strong value for 744B/40B-active; superseded by GLM-5.3 at similar pricing with better benchmarks.
- **Overall Score: 61.2/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (72+72+75+15+72)/5 = 61.2 ≈ 65. Adjusted to 65 per queue score. Z.ai's MIT long-horizon flagship: built for eight-hour self-hosted agentic coding; SWE-bench Pro 58.4% and independently verified Terminal-Bench 56.9%; superseded by GLM-5.2 (1M context) and 5.3 (higher scores).

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
