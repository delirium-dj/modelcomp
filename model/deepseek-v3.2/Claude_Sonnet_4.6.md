# DeepSeek V3.2 — Research Notes

**Model ID:** deepseek/deepseek-v3.2  
**Context window:** 128,000 (128K first-party; 163,840 on OpenRouter); 65,536 max output  
**Modalities:** Text in/out only  
**Architecture:** 685B total / 37B active MoE; MIT license  
**Pricing:** $0.28/$0.42 per 1M in/out; $0.028 cached; self-host $0 (MIT)

## Benchmarks (from meta.json)

- SWE-bench Verified: 73.1%
- LiveCodeBench: 83.3%
- tau2 (tool-use benchmark): 80.3%
- Hallucination rate: 93.3% (AA)
- IMO/IOI gold-medal math results
- First DeepSeek with thinking inside tool use

## Scores

- **Tool use: 76/100.** tau2 80.3% — strong structured tool use; first DeepSeek model that thinks inside tool calls; 93.3% hallucination rate is a serious concern for autonomous agents — must be used with verification harnesses.
- **Reasoning: 78/100.** LiveCodeBench 83.3%; IMO/IOI gold-medal math; SWE-bench Verified 73.1%; thinking inside tool use is architecturally significant; hallucination rate caps practical reasoning reliability.
- **Context window: 65/100.** 128K total — the smallest context in the V3/V4 DeepSeek line; 65K max output; a fifth of V4 Flash's 1M context; significant limitation for long-horizon tasks.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 76/100.** LiveCodeBench 83.3%, SWE-bench Verified 73.1% — strong for a Dec 2025 release; the thinking-in-tool-use architecture improves code debugging loops vs prior DeepSeek models.
- **Cost efficiency: 90/100.** $0.28/$0.42 per 1M — near-free for 685B MoE capability; MIT weights for self-hosting; $0.028 cached; strong value despite 128K context limitation.
- **Overall Score: 62/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (76+78+65+15+76)/5 = 62. DeepSeek's thinking-in-tool-use pioneer: IMO/IOI gold math and LiveCodeBench 83.3% at MIT open weights; 128K context and 93.3% hallucination rate are serious constraints relative to the V4 line.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
