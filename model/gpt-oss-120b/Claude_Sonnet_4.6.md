# GPT-OSS 120B — Research Notes

**Model ID:** openai/gpt-oss-120b  
**Context window:** 131,072 total  
**Modalities:** Text in/out only  
**Architecture:** 117B total / 5.1B active MoE; Harmony format; Apache 2.0  
**Pricing:** $0.15/$0.60 per 1M in/out; $0.075 cached; self-host $0

## Benchmarks (from meta.json)

- SWE-bench Verified: 62.4%
- AIME 2025: 92.5%
- Terminal-Bench 2.1: 26.2%
- Hallucination rate: 90.8%
- Fits one 80 GB GPU (MXFP4); 17 hosted providers

## Scores

- **Tool use: 55/100.** Terminal-Bench 2.1 26.2% confirms poor agentic performance; 90.8% hallucination rate is extremely high for tool-calling workflows — not suitable as an agent orchestrator.
- **Reasoning: 78/100.** AIME 2025 92.5% is genuinely elite math reasoning for an open-weight model; SWE-bench Verified 62.4% is solid; reasoning quality is the headline strength.
- **Context window: 65/100.** 131K total — modest by 2026 standards; only one 80 GB GPU needed which trades context for deployability.
- **Multimodal: 15/100.** Text in/out only — no vision or audio inputs.
- **Coding: 70/100.** SWE-bench Verified 62.4% is competitive for open-weight text-only MoE; Harmony format integration cost limits broader ecosystem adoption.
- **Cost efficiency: 93/100.** $0.15/$0.60 per 1M hosted; Apache 2.0 self-host at $0; single 80 GB GPU fits — strongest open-weight cost profile for AIME 92.5% reasoning.
- **Overall Score: 57/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (55+78+65+15+70)/5 = 56.6 ≈ 57. OpenAI's strongest open reasoning model: AIME 92.5% on a single 80 GB GPU at $0.15/M — but 90.8% hallucination rate and Terminal-Bench 26.2% make it a reasoning-specialist, not an agent; mandatory Harmony format adds integration friction.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
