# MiniMax M2.5 — Research Notes

**Model ID:** opencode/minimax-m2.5  
**Context window:** 196,608 total (192K–205K class)  
**Modalities:** Text in/out only  
**Architecture:** 228.7B total / 10B active MoE; Modified MIT  
**Pricing:** $0.15/$0.60 per 1M in/out; $0.30/$2.40 for Lightning tier

## Benchmarks (from meta.json)

- SWE-bench Verified: 80.2% (claimed) / 74.2% (Vals AI)
- LiveCodeBench: 79.2%

## Scores

- **Tool use: 78/100.** SWE-bench Verified ~77% (conservative vendor/independent average); LiveCodeBench 79.2%; agentic coding with tool use at $0.15/M in; text-only caps computer-use workflows.
- **Reasoning: 77/100.** LiveCodeBench 79.2% is strong for a 10B-active MoE; SWE-bench 74.2–80.2% shows solid multi-file reasoning; one generation behind M2.7.
- **Context window: 75/100.** ~196K total — larger than most 10B-active models but below 1M-class; sufficient for most coding contexts.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 78/100.** SWE-bench Verified ~77% (conservative), LiveCodeBench 79.2%; same weights as M2.7 but weaker post-training — one generation behind the self-evolving successor.
- **Cost efficiency: 92/100.** $0.15/$0.60 per 1M — outstanding value for SWE-bench ~77% and 200K context; Modified MIT open weights for self-hosting; 4x price spread between launch and current hosted routes.
- **Overall Score: 65/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (78+77+75+15+78)/5 = 64.6 ≈ 65. MiniMax's commercial-licence open-weights entry: 229B/10B-active at $0.15/M with SWE-bench ~77%; superseded by M2.7's self-evolving architecture — same weights, weaker post-training, but cheaper and with Modified MIT licence.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
