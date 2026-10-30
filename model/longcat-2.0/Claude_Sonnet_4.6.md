# LongCat 2.0 — Research Notes

**Model ID:** meituan/longcat-2.0  
**Context window:** 1,000,000 (1M) total  
**Modalities:** Text in/out only  
**Architecture:** 1.6T total / 48B active MoE; MIT license  
**Pricing:** $0.30/$1.20 per 1M in/out; $0.006 cached (OpenRouter); self-host $0 (MIT)

## Benchmarks (from meta.json — vendor-reported unless noted)

- SWE-bench Pro: 59.5% (vendor)
- Terminal-Bench 2.1: 70.8% (vendor) vs 50.19% (Artificial Analysis — 20-point gap)
- MIT open weights; 1M context for autonomous coding agents

## Scores

- **Tool use: 74/100.** Terminal-Bench 2.1 vendor 70.8% vs AA 50.19% — using conservative ~60% effective; 1M context enables long agentic loops; MIT open weights allow custom tool integration.
- **Reasoning: 72/100.** SWE-bench Pro 59.5% (vendor); no independently confirmed general reasoning benchmarks; large architecture (1.6T/48B active) suggests headroom that benchmarks don't fully capture.
- **Context window: 92/100.** 1M token context (1,000,000) — purpose-built for ultra-long-horizon autonomous coding agents.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 73/100.** SWE-bench Pro 59.5%; AA Terminal-Bench 50.19%; strong for 1M-context text-only MoE but vendor/independent gap reduces confidence; MIT weights allow self-tuning.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M hosted; MIT weights for self-hosting at $0; exceptional value for 1.6T parameters and 1M context.
- **Overall Score: 65/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (74+72+92+15+73)/5 = 65.2 ≈ 65. Meituan's 1M-context open agent: 1.6T MIT-licensed weights for autonomous coding at near-flat rates; text-only and a 20-point vendor vs. independent Terminal-Bench gap are the caveats to manage.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
