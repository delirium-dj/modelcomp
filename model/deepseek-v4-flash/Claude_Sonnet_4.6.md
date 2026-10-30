# DeepSeek V4 Flash — Research Notes

**Model ID:** opencode/deepseek-v4-flash  
**Context window:** 1,000,000 total; 384,000 max output  
**Modalities:** Text in/out only  
**Architecture:** 284B total / 13B active MoE  
**Pricing:** ~$0.14/$0.28 per 1M; Zen id exists (no published price row); original V4-flash routes now serve V4.1-Flash-1017

## Benchmarks (from meta.json)

- MRCR at 1M context: 78.7%
- LiveCodeBench: 91.6%
- SWE-bench Verified: 79%

## Scores

- **Tool use: 84/100.** MRCR 78.7% at 1M context confirms reliable long-context tool execution; SWE-bench Verified 79% at $0.14/M is exceptional; 384K max output for long agentic outputs.
- **Reasoning: 84/100.** LiveCodeBench 91.6% — elite code reasoning; MRCR 78.7% at full 1M context; strong multi-step reasoning from 13B active params at near-zero cost.
- **Context window: 92/100.** 1M token total; 384K max output — among the largest output windows available; full long-horizon codebase pass in a single call.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video; the "multimodal needs a different DeepSeek lane" tradeoff.
- **Coding: 85/100.** LiveCodeBench 91.6%, SWE-bench Verified 79% — the "volume-reasoning champion"; original flash routes now serve the improved V4.1-Flash-1017.
- **Cost efficiency: 95/100.** ~$0.14/$0.28 per 1M — near-free for frontier 1M-context coding; original flash routes now redirect to V4.1-Flash-1017 (slight improvement); DeepSeek API routes to the updated checkpoint.
- **Overall Score: 72/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (84+84+92+15+85)/5 = 72. DeepSeek's 1M-context volume-reasoning champion: LiveCodeBench 91.6%, SWE-bench Verified 79%, MRCR 78.7% at 1M — all at $0.14/M; text-only keeps it from broader agent workflows; superseded routes now serve the improved V4.1-Flash-1017.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
