# GLM 5 — Research Notes

**Model ID:** opencode/glm-5  
**Context window:** 200,000 total; 128,000 max output  
**Modalities:** Text in/out only  
**Architecture:** 744B total / 40B active MoE; MIT license  
**Pricing:** $1.00/$3.20 per 1M in/out; $0.20 cached; self-host $0 (MIT)

## Benchmarks (from meta.json — vendor-published)

- SWE-bench Verified: 77.8%
- Terminal-Bench 2.0: 56.2%
- tau2: 89.7%
- Superseded by GLM-5.1, 5.2, 5.3

## Scores

- **Tool use: 76/100.** Terminal-Bench 2.0 56.2%; tau2 89.7% for structured tool-use reliability; 200K context; MIT open weights allow custom tool integrations; all numbers vendor-published.
- **Reasoning: 78/100.** SWE-bench Verified 77.8% and tau2 89.7% — strong cross-domain reasoning from 40B active parameters; superseded by GLM-5.3's higher verified scores.
- **Context window: 75/100.** 200K total; 128K output — solid for the GLM-5 base generation but below the 1M context of successors.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 77/100.** SWE-bench Verified 77.8%; the open-weights base that started the GLM-5.x line; every headline number vendor-published — no independent verification.
- **Cost efficiency: 86/100.** $1.00/$3.20 per 1M; MIT self-host $0; strong value at launch; successor GLM-5.3 delivers better benchmarks at the same open-weights posture.
- **Overall Score: 64.2/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (76+78+75+15+77)/5 = 64.2 ≈ 65. Z.ai's open-weights base: 744B/40B-active at the cheapest 744B-class price; SWE-bench 77.8% and tau2 89.7% — superseded by GLM-5.1 through 5.3 with 1M context and higher verified scores.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
