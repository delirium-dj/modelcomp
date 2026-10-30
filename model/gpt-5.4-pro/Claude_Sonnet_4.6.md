# GPT-5.4 Pro — Research Notes

**Model ID:** opencode/gpt-5.4-pro  
**Context window:** 1,050,000 total; 128K output  
**Modalities:** Text, image in; text out  
**Pricing:** $30/$180 per 1M; 2x/1.5x over 272K tokens

## Benchmarks (from meta.json)

- GPQA Diamond: 94.4%
- ARC-AGI-2: 83.3%
- HLE with tools: 58.7%

## Scores

- **Tool use: 88/100.** HLE with tools 58.7%; 1M context for long agentic research workflows; Responses-API-only high-compute tier; elite tool use for research-grade tasks.
- **Reasoning: 95/100.** GPQA Diamond 94.4% — near the absolute expert ceiling; ARC-AGI-2 83.3% marks strong abstract reasoning; top-tier deliberate thinking for hard problems.
- **Context window: 92/100.** 1,050,000 token context (1M+); full long-horizon document and codebase analysis.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video understanding.
- **Coding: 86/100.** Frontier coding capability implied by GPQA 94.4% and ARC-AGI-2 83.3%; specialized for expert-level software tasks under deliberate long reasoning.
- **Cost efficiency: 2/100.** $30/$180 per 1M — among the most expensive models in the dataset; succeeded by cheaper Pro-tier reasoning elsewhere; extreme price justifies only niche high-stakes research use.
- **Overall Score: 84/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (88+95+92+60+86)/5 = 84.2 ≈ 84. OpenAI's earlier ultra-compute research tier: GPQA Diamond 94.4%, ARC-AGI-2 83.3%; overkill pricing makes it a niche pick even vs cheaper frontier alternatives.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
