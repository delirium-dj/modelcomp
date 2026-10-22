# Llama 3.2 11B Vision Instruct — findings by GPT 6.1 Sol

- Source: Meta, `meta-llama/Llama-3.2-11B-Vision-Instruct`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Identity: local exact ID resolves to **11B**, so90B results/prices are not blended into this report.

## Model card

- **Release / architecture:** AA **September25,2024**, cutoffDecember2023;11B open weights under **Llama3.2 Community License**, not Apache. Text/images→text; native audio/video not established.[1][2]
- **Access / context:** Primary Cloudflare `@cf/meta/llama-3.2-11b-vision-instruct` **128K**, API requires agreement to publisher terms. HF raw-card request401 is bounded access failure, not proof that the model does not exist. NVIDIA current catalog also lists exact11B vision ID.[1][4]
- **Price / free scope:** Cloudflare primary **$0.0485 input/$0.676 output per1M** above allocation; WorkersAI includes **10,000neurons/day at no charge**, resetting00:00UTC. This model is not among the listed paid-billing-only exceptions. Account/license acceptance and quotas apply; no authenticated calls or privacy guarantee asserted. Cost100 reflects this actual hosted allocation, not free local hardware.[1][3]

### Raw benchmarks found

- **AA independent exact11B**, UUID`5fb47ff6-a30e-4c2c-96f2-55e95a13390f`: estimated Index **5.4080**, **GPQA22.1212% /HLE5.53% /LCR12.6667% /CritPt0% measured /IFBench30.4082%**.[2]
- **τ²14.6199% /LCB11.0053% /AIME25 1.6667% /MMMU-Pro29.3064%**. Missing terminal/GDPval/SciCode fields are null, not zeros.[2]
- Omniscience accuracy10.6%/hallucination81.8792%, evaluator-defined denominators. AA$0.345/$0.345 serving reference is a different route, not Cloudflare's tariff.[2]
- Native visual input establishes capability, but not reliability across diagrams/documents. No exact verified broad repository/Claw/MCP or≥98%128K retrieval found. No90B quality figures, unverified metadata-only DocVQA numbers or textual1B/3B card results transferred.

### Normalized scores (1–100)

- **Tool use: 20/100.** Low measuredτ² and no robust independent execution coverage.[2]
- **Reasoning: 28/100.** Weak exact academic/math/context outcomes and limited knowledge coverage.[2]
- **Context window: 60/100.** Verified128K capacity; observed LCR is weak, not perfect retrieval.[1][2]
- **Multimodal: 57/100.** Real image input but MMMU-Pro29.31%, no native audio/video/media generation.[1][2]
- **Coding: 28/100.** Exact LCB11.01% and absent repository validation limit engineering confidence.[2]
- **Cost efficiency: 100/100.** Current primary WorkersAI free allocation with explicit quota/account/license boundaries.[1][3]
- **Overall Score: 39/100.** Half-up mean `(20+28+60+57+28)/5=38.6`; cost excluded. This is11B, not an averaged11B/90B family profile.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Llama%203.2%20Vision%20Instruct%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Llama%203.2%20Vision%20Instruct%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Llama%203.2%20Vision%20Instruct%22%20model%20benchmark): human challenge, not bypassed. Primary host and exact independent record inspected; no peer findings.

[1]: https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/
[2]: https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision
[3]: https://developers.cloudflare.com/workers-ai/platform/pricing/
[4]: https://integrate.api.nvidia.com/v1/models

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent exact-size public-web research; serving limits, measured quality and actual free allocation separated. Ratings are interpretations.
