# GPT-OSS 120B Lite — Research Notes

**Model ID:** opencode/gpt-oss-120b-lite  
**Context window:** 131,072 total; 32,768 max output  
**Modalities:** Text in/out only  
**Architecture:** 117B total / 5.1B active MoE; Apache 2.0; MXFP4 quantization  
**Pricing:** Free open weights; hosted ~$0.15/$0.60 per 1M

## Benchmarks

- Shares base architecture with GPT-OSS 120B; tuned for concise high-density reasoning outputs
- AIME 2025 (base family): 92.5%
- SWE-bench Verified (base family): 62.4%
- 32K max output (vs 131K for base) — smaller output budget trades depth for response density
- No independently published separate Lite-specific benchmark scores found

## Scores

- **Tool use: 53/100.** Same base architecture as GPT-OSS 120B; high hallucination risk for agentic loops; 32K output window limits multi-step tool chains; concise-tuning helps structured outputs.
- **Reasoning: 76/100.** AIME-class math reasoning from the 120B base family; concise-density tuning reduces CoT verbosity which can hurt multi-step problems — slight reasoning depth penalty vs base.
- **Context window: 65/100.** 131K total; 32K max output — smaller output cap than base GPT-OSS 120B; constrains lengthy chain-of-thought responses.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 67/100.** SWE-bench Verified class (~62%) from base family; concise-output tuning suits code extraction and classification tasks better than deep agentic debugging.
- **Cost efficiency: 93/100.** Apache 2.0 open weights; self-host $0; hosted ~$0.15/$0.60 per 1M; same price floor as GPT-OSS 120B with more concise outputs for cost-per-token efficiency.
- **Overall Score: 55/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (53+76+65+15+67)/5 = 55.2 ≈ 55. The concise-output sibling of GPT-OSS 120B: same Apache 2.0 open weights and MXFP4 efficiency, smaller 32K output cap tuned for high-density reasoning; no separate published benchmarks — base-family scores apply.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
