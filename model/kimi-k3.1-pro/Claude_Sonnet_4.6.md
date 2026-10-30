# Kimi K3.1 Pro — Research Notes

**Model ID:** opencode/kimi-k3.1-pro  
**Context window:** 1,048,576 (1M) total  
**Architecture:** ~2.8T total / 104B active MoE  
**Modalities:** Text, image, video in; text out  
**Pricing:** $2.00/$10.00 per 1M in/out; $0.20 cached read

## Benchmarks

- Terminal-Bench 4.0: ~65.7–67.2% — near Claude Opus 5.5 (66.4%), beats GPT-6 Astra (58.2%); #1 on AA independent harness
- SWE-Marathon: 51.7% — beats Claude Opus 5.5 (46.3%) and GPT-6 Astra (42.5%)
- HLE with tools: 70.0% — #1 vendor-reported, ahead of Opus 5.5 (67.7%) and GPT-6 Astra (57.2%)
- HLE without tools: 51.1%
- Kimi Code Bench 3.0: 61.2% (up from K3's 55.95%)
- AA Intelligence Index: 55.1 (#4 overall)

## Scores

- **Tool use: 92/100.** Terminal-Bench 4.0 ~67% (#1 on AA harness); SWE-Marathon 51.7% surpassing Opus 5.5; HLE with tools 70.0% topping all models — elite agentic tool execution.
- **Reasoning: 91/100.** HLE 70.0% (ranked #1 with tools), HLE 51.1% (no tools); AA Intelligence Index 55.1 — frontier-class reasoning from a 104B-active MoE at Sonnet-tier pricing.
- **Context window: 92/100.** 1M token context (1,048,576); full long-horizon codebase and document processing.
- **Multimodal: 70/100.** Text, image, video in; text out — three input modalities; no audio understanding.
- **Coding: 91/100.** Terminal-Bench 4.0 #1 on AA; SWE-Marathon 51.7% #1 vendor; Kimi Code Bench 3.0 61.2%; top-tier agentic code execution at pro tier pricing.
- **Cost efficiency: 82/100.** $2.00/$10.00 per 1M — frontier performance at Sonnet-level pricing; 33% cheaper than predecessor K3; strong value for #1 HLE and Terminal-Bench class.
- **Overall Score: 87/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (92+91+92+70+91)/5 = 87.2 ≈ 87. Moonshot's October 2026 flagship: leads HLE with tools (70.0%) and Terminal-Bench 4.0 (#1 AA), surpasses Opus 5.5 on SWE-Marathon, adds video input — all at Sonnet-class pricing.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
