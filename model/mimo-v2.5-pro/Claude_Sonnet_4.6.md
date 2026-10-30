# MiMo V2.5 Pro — Research Notes

**Model ID:** xiaomi/mimo-v2.5-pro  
**Context window:** 1M (base 256K)  
**Modalities:** Text in/out only  
**Architecture:** 1.02T total / 42B active MoE; MIT license  
**Pricing:** $0.435/$0.87 per 1M in/out; $0.0036 cached; self-host $0 (MIT)

## Benchmarks (from meta.json)

- ClawEval: 63.8
- SWE-bench Verified: 78.9%
- HLE (Humanity's Last Exam): 48.0%

## Scores

- **Tool use: 79/100.** ClawEval 63.8; SWE-bench Verified 78.9% shows strong agentic coding discipline; 1M context; MIT open weights enable custom tool integration; text-only limits computer-use loops.
- **Reasoning: 78/100.** HLE 48.0%; SWE-bench Verified 78.9%; strong long-horizon reasoning discipline; 42B active parameters from a trillion-parameter base deliver solid cross-domain reasoning.
- **Context window: 92/100.** 1M token context; designed for long-horizon agent workflows.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video; omni capability lives in the V2.5/V2.6 omni-modal sibling.
- **Coding: 79/100.** SWE-bench Verified 78.9% is strong for an MIT open-weight MoE at $0.435/M; top instruction-following discipline cited as the standout characteristic.
- **Cost efficiency: 88/100.** $0.435/$0.87 per 1M; $0.0036 cached (ultra-low cache cost); MIT self-host $0; excellent value for SWE-bench 78.9% and 1M context.
- **Overall Score: 69/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (79+78+92+15+79)/5 = 68.6 ≈ 69. Xiaomi's long-horizon agent MoE: SWE-bench Verified 78.9%, 1M context, MIT open weights, $0.0036 cached reads — text-only input is the sole major limitation; complemented by the omni-modal V2.5/V2.6 sibling line.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
