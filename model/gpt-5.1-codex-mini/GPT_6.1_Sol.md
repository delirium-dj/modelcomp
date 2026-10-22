# GPT-5.1-Codex Mini — findings by GPT 6.1 Sol

- Source: OpenAI, `gpt-5.1-codex-mini`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / dates:** Smaller distinct Codex5.1 specialist, not Max or general GPT5Mini. AA **November13,2025**, cutoff **September30,2024**. Closed weights/undisclosed parameters.[1][2]
- **Access / lifecycle:** Native Responses-only, functions/structured output/reasoning, text/images→text. Native API retired **July23,2026**; current exact OpenRouter Azure route is status0 with400K/128K output. Catalog presence is not authenticated inference or a retirement reversal.[1][3][4]
- **Context:** **400K combined**, not simultaneous400K input plus128K output. No near-perfect retention proof.[1][2]
- **Price:** Recorded native$0.25 input/$2 output/**$0.025 cached** per1M; current Azure route same input/output but **$0.03 cached**, web-search surcharge separate. No verified free lane.[1][4]

### Raw benchmarks found

- **AA independent high**, UUID`fd4454ff-e703-46c0-a7f5-fa69af09486d`: estimated Index **20.3782**, **GPQA81.3131% /HLE18.4893% /AIME25 91.6667% /LCR66.6667% /CritPt0% measured /IFBench67.8912%**.[2]
- **τ²62.8655% /LCB83.5979% /MMMU-Pro69.0173%**; Terminal2.1/4, GDPval and SciCode null, not zeros. LCB does not establish full-repository correctness.[2]
- Omniscience accuracy23.2%/hallucination51.5842%, evaluator denominators;171.60output tokens/s and10.83s first chunk are scoped historical serving summaries, not current Azure SLA.[2]
- Guessed exact Vals profile404; no exact independently recovered SWE Verified, Vibe, Claw/MCP or perfect400K retrieval. Local Vibe22.2% is **not** accepted as Mini evidence merely because a similar Max score exists. No sibling benchmarks transferred.

### Normalized scores (1–100)

- **Tool use: 52/100.** Independentτ² plus functions support useful narrower tools; no broad independent terminal/workforce validation here.[1][2]
- **Reasoning: 67/100.** GPQA81%/HLE18.5%/LCR66.7%, capped by CritPtzero and limited factual answer coverage.[2]
- **Context window: 84/100.** Verified400K tier without retention guarantees.[1][4]
- **Multimodal: 77/100.** Native image input and independent MMMU-Pro69%; no native audio/video/output media.[1][2]
- **Coding: 70/100.** LCB83.6% supports programming, capped by absent exact independently recovered repository/terminal scores.[2]
- **Cost efficiency: 94/100.** Cheap current surviving Azure route and cache, with output/reasoning/tool costs and native retirement qualified.[1][4]
- **Overall Score: 70/100.** Half-up mean `(52+67+84+77+70)/5=70`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22GPT-5.1-Codex-Mini%22%20benchmark): generic OpenAI pages.
- [Google](https://www.google.com/search?q=%22GPT-5.1-Codex-Mini%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22GPT-5.1-Codex-Mini%22%20model%20benchmark): human challenge, not bypassed. Primary contract/lifecycle and exact AA/current route inspected; no peer findings.

[1]: https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini
[2]: https://artificialanalysis.ai/models/gpt-5-1-codex-mini
[3]: https://developers.openai.com/api/docs/deprecations
[4]: https://openrouter.ai/api/v1/models/openai/gpt-5.1-codex-mini/endpoints

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web exact-model research with historical/native and current gateway scopes separated. Ratings are interpretations.
