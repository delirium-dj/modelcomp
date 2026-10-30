# Hy3 — Research Notes

**Model ID:** tencent/hy3  
**Context window:** 256,000 (262,144 on some hosts); 64K–128K max output  
**Modalities:** Text in/out only  
**Architecture:** 295B total / 21B active MoE; Apache 2.0  
**Pricing:** $0.0825/$0.33 per 1M off-peak (Tencent fp8); self-host $0

## Benchmarks (from meta.json)

- SWE-bench Verified: 78.0%
- Terminal-Bench 2.1: 71.7%
- GPQA Diamond: 90.4%

## Scores

- **Tool use: 76/100.** Terminal-Bench 2.1 71.7%; strong agentic coding for an Apache 2.0 MoE at $0.08/M; text-only input limits computer-use and vision-augmented tool loops.
- **Reasoning: 86/100.** GPQA Diamond 90.4% — elite graduate-level science reasoning; SWE-bench Verified 78.0% confirms cross-domain reasoning depth from 21B active params.
- **Context window: 78/100.** 256K total; 64K–128K max output (host-dependent) — solid but below 1M-class peers in the Tencent Hy family.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video; breadth lives in the larger Hy4 generation.
- **Coding: 80/100.** SWE-bench Verified 78.0%, Terminal-Bench 2.1 71.7% — strong dual-benchmark coding at some of the lowest serving costs available.
- **Cost efficiency: 96/100.** $0.0825/$0.33 per 1M off-peak (fp8); Apache 2.0 self-host $0; extraordinary value for GPQA 90.4% and SWE-bench 78.0%.
- **Overall Score: 67/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (76+86+78+15+80)/5 = 67. Tencent's budget open-weights coder: GPQA Diamond 90.4% and SWE-bench Verified 78.0% at $0.08/M — text-only and 256K context are the trade-offs for the lowest science-question price per token available.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
