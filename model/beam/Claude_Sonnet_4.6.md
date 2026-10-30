# Beam 1.0 — Research Notes

**Model ID:** opencode/beam-free (also: reflection/Beam-1.0-501B-A23B)  
**Context window:** 1,048,576 total; 131,072 max output  
**Modalities:** Text in/out only  
**Architecture:** 501B total / 23B active MoE; Apache 2.0  
**Pricing:** Free on Zen & Reflection API beta; hosted $0.25–$1.30/$1.00–$4.30; self-host $0  
**Also known as:** Cat Jam (former stealth label, now revealed as Beam)

## Benchmarks (from meta.json)

- SWE-bench Verified: 81.6%
- Terminal-Bench 2.1: 80.1%
- 30-day retention on Zen free route (not zero-retention)
- Reflection API public beta: daily usage limits

## Scores

- **Tool use: 84/100.** Terminal-Bench 2.1 80.1% — elite terminal agent performance; 501B/23B-active MoE with 1M context for sustained agentic loops; free Zen and Reflection API beta enable accessible testing.
- **Reasoning: 83/100.** SWE-bench Verified 81.6% is frontier-class for an Apache 2.0 open-weight model; strong multi-file reasoning and repository navigation.
- **Context window: 92/100.** 1M token context (1,048,576); 131K output — full long-horizon coding supported.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 84/100.** SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1% — exceptional dual-benchmark coverage for a free open-weight model; best-in-class open coding at this price tier.
- **Cost efficiency: 97/100.** Free on Zen and Reflection API beta; Apache 2.0 weights for free self-hosting; hosted from $0.25/M in — among the best cost profiles for frontier-level coding benchmarks.
- **Overall Score: 72/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (84+83+92+15+84)/5 = 71.6 ≈ 72. The dense-mixture bargain: SWE-bench Verified 81.6% and Terminal-Bench 2.1 80.1% from free Apache 2.0 open weights — text-only input is the sole major limitation; free Zen slot makes it uniquely accessible.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
