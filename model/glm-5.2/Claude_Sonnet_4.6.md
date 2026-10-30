# GLM 5.2 — Research Notes

**Model ID:** opencode/glm-5.2  
**Context window:** 1,000,000 (1M) total  
**Modalities:** Text in/out only  
**Architecture:** 753B total / 40B active MoE; MIT license  
**Pricing:** $1.40/$4.40 per 1M in/out; $0.26 cached

## Benchmarks (from meta.json)

- SWE-bench Verified: 82.8% (Vals AI — independently verified)
- Terminal-Bench 2.1: 81.0% (vendor)
- 1M context; superseded by GLM-5.3

## Scores

- **Tool use: 83/100.** Terminal-Bench 2.1 81.0% (vendor); 1M context for ultra-long agentic coding; MIT weights for self-hosting; independently verified SWE-bench 82.8%.
- **Reasoning: 83/100.** SWE-bench Verified 82.8% (Vals independent) — genuinely strong independently verified score; 1M context reasoning; superseded by GLM-5.3's even higher verified scores.
- **Context window: 92/100.** 1M token context — major upgrade from GLM-5.1's 200K; enables codebase-wide long-horizon agent loops.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 83/100.** SWE-bench Verified 82.8% (Vals); Terminal-Bench 81.0%; MIT open weights for fine-tuned coding agents; honest independent benchmark coverage.
- **Cost efficiency: 83/100.** $1.40/$4.40 per 1M; MIT self-host $0; strong value for 1M context at 753B/40B-active; superseded by GLM-5.3 at same pricing.
- **Overall Score: 71/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (83+83+92+15+83)/5 = 71.2 ≈ 71. Z.ai's MIT flagship before 5.3: first GLM-5.x with 1M context; SWE-bench Verified 82.8% independently verified; text-only input is the trade-off; GLM-5.3 delivers higher verified scores at the same open-weights posture.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
