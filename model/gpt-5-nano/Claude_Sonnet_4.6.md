# GPT-5 Nano — Research Notes

**Model ID:** opencode/gpt-5-nano  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $0.05/$0.40 per 1M in/out; $0.005 cached  
**Status:** Superseded by GPT-5.4 Nano

## Benchmarks (from meta.json)

- AIME 2025: 85.2%
- SWE-bench Verified: 54.7%
- tau2 telecom: 35.5%
- Terminal-Bench Hard: 12.1%

## Scores

- **Tool use: 56/100.** Terminal-Bench Hard 12.1% and tau2 telecom 35.5% confirm agentic work is out of reach; designed strictly for classification/extraction subagent calls at extreme volume.
- **Reasoning: 62/100.** AIME 2025 85.2% shows strong math reasoning; SWE-bench Verified 54.7% adequate; hard agentic benchmarks expose reasoning ceiling for orchestration tasks.
- **Context window: 82/100.** 400K total; 128K output — full frontier-family context window at nano pricing.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video.
- **Coding: 63/100.** SWE-bench Verified 54.7%; reasonable for batch classification and code-tag tasks but insufficient for agentic software engineering.
- **Cost efficiency: 98/100.** $0.05/$0.40 per 1M — the price floor of the frontier family; $0.005 cached; essentially free at scale for classification pipelines.
- **Overall Score: 65/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (56+62+82+60+63)/5 = 64.6 ≈ 65. The frontier price floor: AIME 2025 85.2% shows real reasoning but Terminal-Bench Hard 12.1% firmly caps its agent ceiling; superseded by GPT-5.4 Nano which improves on both price-per-capability and scores.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
