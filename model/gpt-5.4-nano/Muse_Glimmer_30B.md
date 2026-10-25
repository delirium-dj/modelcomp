# GPT-5.4 Nano — findings by Muse Glimmer 30B

- Source: OpenAI official announcement, LLM Reference, meta JSON curated data
- Date: 2026-10-25
- Model slug: gpt-5.4-nano
- Researcher: Muse Glimmer 30B
- Method: Independent web search with official model card prioritized; benchmarks normalized per `model-comparison.md` v4 methodology.

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI’s smallest and cheapest GPT-5.4 model. Optimized for classification, extraction, ranking, and high-throughput sub-agents. Low latency, 400K context.
- **Provider / access:** OpenAI via API
- **Release / knowledge:** Announced 2026-03-17
- **IDs:** opencode/gpt-5.4-nano
- **Context window:** 400,000 total / 128,000 max output
- **Modalities:** Text, Image in; Text out
- **Pricing (as of 2026-10-25):** $0.20 / 1M input tokens, $1.25 / 1M output tokens, cached input $0.02 / 1M
- **Architecture:** Undisclosed by vendor
- **Official URL:** https://openai.com/index/introducing-gpt-5-4-mini-and-nano/

### Raw benchmarks found

> Numbers primarily from OpenAI announcement 2026-03-17; context and pricing corroborated by LLM Reference and meta.json. Independent benchmark reproductions limited; official numbers used as primary source.

Agent / tool use:
- SWE-Bench Pro (Public): 52.4%
- Terminal-Bench 2.0: 46.3%
- Toolathlon: 35.5%
- MCP Atlas: 56.1%
- Tau2-bench telecom: 92.5%

Reasoning / knowledge:
- GPQA Diamond: 82.8%
- OSWorld-Verified: 39.0%
- MMMUPro w/ Python: 69.5%
- MMMUPro: 66.1%
- HLE w/ tool: 37.7%
- HLE w/o tools: 24.3%

Coding:
- SWE-Bench Pro (Public) 52.4% [see Agent / tool use]
- Terminal-Bench 2.0 46.3% [see Agent / tool use]

Long context:
- OpenAI MRCR v2 8-needle 64K-128K: 44.2%
- OpenAI MRCR v2 8-needle 128K-256K: 33.1%
- Graphwalks BFS 0K-128K: 73.4%
- Graphwalks parents 0-128K: 50.8%

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 46.3% and Toolathlon 35.5% place it in mid tier; MCP Atlas 56.1% lifts avg; Tau2 telecom 92.5% is outlier domain.
- **Reasoning: 79/100.** GPQA Diamond 82.8% is strong for size class; HLE w/ tool 37.7% / w/o 24.3% and OSWorld 39.0% moderate.
- **Context window: 78/100.** 400K total / 128K max output sits in 200K-500K band. Retrieval scores decline beyond 128K.
- **Multimodal: 65/100.** Image in, text out only. No video/audio.
- **Coding: 68/100.** SWE-Bench Pro 52.4% and Terminal-Bench 46.3% indicate competent sub-agent coding, below frontier.
- **Cost efficiency: 96/100.** $0.20/$1.25 per 1M is among cheapest GPT-5.4 tier.
- **Overall Score: 70/100.** Mean of quality dimensions: Tool 62, Reasoning 79, Context 78, Multimodal 65, Coding 68.

## Signature

- Provided by: **Muse Glimmer 30B, STEM Muse_Glimmer_30B**
- Method: Direct inspection of official model card and OpenAI announcement, normalized per `model-comparison.md` scoring methodology.
- Date: 2026-10-25
