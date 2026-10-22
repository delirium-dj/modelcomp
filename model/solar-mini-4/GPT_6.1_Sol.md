# Solar Mini 4 — findings by GPT 6.1 Sol

- Source: Upstage, `solar-mini4-260922` /alias`solar-mini4`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / dates:** Proprietary **35B/3B-active** compact model, released **September22,2026**, training cutoff **February2026**. Not SolarPro4 or SolarOpen2; no downloadable weight license established.[1]
- **Contract:** Native **512K/128K output**, text→text, reasoning/functions/structured output. Current gateway confirms **524,288/131,072**. AA metadata says1,048,576, but rating uses the primary/current serving contract, not that conflicting field.[1][2][3]
- **Access / prices:** Exact current Upstage status0 route **$0.05 input/$0.20 output/$0.005 cached per1M**,50% promo; list **$0.10/$0.40/$0.01**. Primary banner says50%off **throughOctober22UTC**, not a guaranteed permanent price.[1][3]
- **Free distinction:** Native page explicitly offers exact-model **free browser Playground**, no API key required. Cost100 refers to that current free-to-try inference access; **API calls remain paid**, quotas/terms/browser availability apply. No authenticated API test or unlimited free API claim.[1]

### Raw benchmarks found

- **AA independent**, UUID`62ea3198-9866-4d9f-8406-a79ee78c7164`: measured Index **24.0522**, **TB4 1.0101%**, GDPval1082.08Elo, AutomationBench22.2524%partial.[2]
- **HLE25.7646% /LCR83.3333% /MLCR6.6667% /CritPt1.4286% /SciCode47.5694% /GDP.pdf5%all-pass**. Single-language LCR is not multilingual or near-perfect512K retrieval.[2]
- Omniscience accuracy18.4167%/hallucination35.8325%, evaluator denominators. GPQA/AIME/LCB/MMMU/TB2.1 null, notzero. Runtime128.96output tokens/s/1.797s first chunk is a specific serving summary, not guaranteed task latency.[2]
- No verified exact SWE, Claw/MCP, native perception or≥98% full-window retention found. SciCode provides coding evidence; weak modern terminal results cap engineering autonomy.

### Normalized scores (1–100)

- **Tool use: 43/100.** Some professional/automation utility, but TB4~1% materially limits agent reliability.[2]
- **Reasoning: 71/100.** HLE25.76%/LCR83.33%, capped by science/knowledge gaps and missing broader exact academic rows.[2]
- **Context window: 88/100.** Verified512K serving tier, not unconfirmed1M or perfect retention.[1][3]
- **Multimodal: 15/100.** Exact native text-only model.[1]
- **Coding: 58/100.** Independent SciCode47.57%, limited by absent repository validation and weak terminal execution.[2]
- **Cost efficiency: 100/100.** Current primary free browser Playground access; paid API tariff/promo explicitly separate.[1][3]
- **Overall Score: 55/100.** Half-up mean `(43+71+88+15+58)/5=55`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Solar%20Mini%204%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Solar%20Mini%204%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Solar%20Mini%204%22%20model%20benchmark): human challenge, not bypassed. Primary native/AA/current exact route inspected; hyphenated guessed route404 is not mistaken for actual`solar-mini4`.[1][3]

[1]: https://console.upstage.ai/docs/models/solar-mini-4
[2]: https://artificialanalysis.ai/models/solar-mini4
[3]: https://openrouter.ai/api/v1/models/upstage/solar-mini4/endpoints

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator public-web research, resolving actual alias/context and free-browser versus paid-API scopes. Ratings are interpretations.
