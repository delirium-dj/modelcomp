# GLM-4.7-Flash — findings by GPT 6.1 Sol

- Source: Z.AI / Zhipu, `zai-org/GLM-4.7-Flash`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** GLM-4.7-Flash. Lightweight reasoning/coding MoE, distinct from full GLM-4.7, paid FlashX, and the separate GLM-4.6V-Flash vision model.[1][2]
- **Provider / access / IDs:** Native `glm-4.7-flash`, OpenAI-compatible Z.AI Chat Completions base `https://api.z.ai/api/paas/v4/`; downloadable `zai-org/GLM-4.7-Flash`; gateway `z-ai/glm-4.7-flash`. No exact Flash ID in the checked live Zen catalog; local `opencode/` naming does not establish current availability there. Catalog inspection, not authenticated inference.[2][5][6]
- **Release / knowledge:** **2026-01-19** by AA and dated gateway checkpoint `20260119`; exact cutoff unverified. AA marks the release deprecated toward GLM-5, but the publisher still lists a free tariff and gateway Cloudflare still has a status-0 route. Evaluator deprecation is not universal disappearance.[4][5]
- **Architecture / license:** Publisher **30B-A3B MoE**, MIT; AA refines total to **31.2B /3B active**. Exact config: 47 layers, 64 routed experts/top four plus shared expert; text causal LM, no vision encoder.[1][3][4]
- **Context window:** Native **200K total /128K maximum output**; config **202,752 positions**, `rope_scaling: null`. Local curated **1M** claim is unsupported by these primary sources. The healthy checked Cloudflare gateway route serves **131,072 context /117,964 output**; the 200K Novita row has status **−5**, so not treated as healthy merely because listed.[2][3][5]
- **Modalities / capabilities:** **Text →text**, optional thinking, tools, streaming, caching and structured output. Writing code that uses cameras or creates slides is not native image/video input/output. Preserve reasoning history for multi-turn agent tests as directed by the card.[1][2]
- **Pricing (2026-10-22):** Publisher pricing explicitly lists **Free input/output/cached input/storage** for exact GLM-4.7-Flash. Thus a verified native $0 lane supports cost 100, subject to account availability and provider limits; unlimited quota or a no-training/privacy guarantee was not established. Paid Cloudflare route **$0.0605 input/$0.40 output per 1M**. AA's **$0.07/$0.40/$0.01 cache** serving reference is not the native free tariff and not automatically a free Zen entitlement.[4][5][7]

### Raw benchmarks found

**Publisher exact Flash card**, not the larger GLM-4.7 chart:[1]

- **AIME 2025 91.6%**, **GPQA 75.2%**, **HLE 14.4%**, **LCB v6 64.0%**, **SWE-bench Verified 59.2%**, **τ²-Bench 79.5%**, **BrowseComp 42.8%**.
- Most tasks: temperature **1**, top-p **0.95**, max new tokens **131,072**. SWE/Terminal recipe: **0.7/1.0**, **16,384** output. τ² recipe: temperature **0**, **16,384** output, preserved thinking.
- Important qualification: τ² Retail/Telecom use an additional interaction-ending prompt; Airline uses domain fixes cited from the Opus 4.5 report. These are not an unmodified universal tool-reliability test. The card supplies Terminal settings but **no numeric Terminal result**; settings alone do not create a score.

**AA independent reasoning record**, UUID `2c4394a2-b443-470a-908e-5c4a271b780c`, exact slug `glm-4-7-flash`:[4]

- Intelligence Index **14.8720, estimated**; not a fully measured current index.
- **GPQA 58.0808%**, **HLE 7.5996%**, **AA-LCR 41.6667%**, **CritPt 0.2857%**, **IFBench 60.8163%**.
- τ² field **98.8304%**, substantially different from publisher 79.5%; underlying domain/prompt/checkpoint equivalence is not established, so neither averaged into one purported common score nor interpreted as general agent completion.
- Omniscience index **−62.6167**, accuracy **16.15%**, hallucination **93.9376%**, AA-defined denominators; lower factual reliability constrains the reasoning assessment.
- Exact AA Terminal-Bench 2.1/4.0, GDPval, LCB, SciCode and MMMU-Pro fields are **null, not measured zero**.
- AA serving summary **85.2795 output tokens/s /1.5080 s first chunk** is route/workload-specific, not a native free-service performance guarantee.

**Epoch independent raw benchmark CSVs**, runs started August 28–30, 2026:[8]

- `glm-4.7-flash`: **GPQA Diamond 60.5429%**, standard error **2.9348 percentage points**; **OTIS Mock AIME 2024–2025 58.3333%**, SE **6.5641 pp**.
- Separate `glm-4.7-flash_none`: **GPQA 45.1389%**, SE **2.1751 pp**; **OTIS 25.0%**, SE **4.9460 pp**. The `_none` condition is not merged with the unsuffixed run, and mock AIME is not official AIME 2025.
- Values come from `gpqa_diamond.csv` and `otis_mock_aime_2024_2025.csv` `mean_score`, not transformed capability-index inputs.

**Coverage limits:** No verified exact Claw/MCP, independent broad terminal/coding replication, native perception, or ≥98% complex retrieval at 200K found. Guessed Vals exact profile and separate Z.AI Flash guide return 404; the correct primary family page does contain an explicit Flash specification. Capacity alone does not establish retention quality.

### Normalized scores (1–100)

- **Tool use: 58/100.** Publisher τ²/BrowseComp and independent AA τ² establish useful tooling; modified domain setup, discrepant results and absent terminal/workforce coverage cap broader execution confidence.[1][4]
- **Reasoning: 57/100.** Independent GPQA ~58–61%, HLE 7.6% and weak LCR/knowledge temper the stronger primary academic claims; reasoning-enabled results stay separate from `_none`.[1][4][8]
- **Context window: 70/100.** Verified native 200K tier, not the unsupported local million-token claim; some current routes are smaller and no near-perfect full-window retrieval is verified.[2][3][5]
- **Multimodal: 15/100.** Native text-only; camera-app or presentation code generation does not establish visual/audio perception or media generation.[2][3]
- **Coding: 60/100.** Exact primary SWE Verified 59.2% and LCB v6 64% support practical small-model coding; independent broad engineering replication remains limited.[1]
- **Cost efficiency: 100/100.** Current primary exact-model free tariff; access/limits remain provider-specific and paid reseller tariffs are separately identified.[7]
- **Overall Score: 52/100.** Half-up quality mean `(58 + 57 + 70 + 15 + 60) / 5 = 52`; cost excluded. Fit: free lightweight text coding/tool experiments with modest independent reasoning and route-limit caveats.

### Fresh search trail and sources

- Bing RSS [`"GLM-4.7-Flash" benchmarks`](https://www.bing.com/search?format=rss&q=%22GLM-4.7-Flash%22+benchmarks): empty result feed.
- Google [`"GLM-4.7-Flash" benchmark`](https://www.google.com/search?q=%22GLM-4.7-Flash%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"GLM-4.7-Flash" model benchmark`](https://duckduckgo.com/html/?q=%22GLM-4.7-Flash%22+model+benchmark): useful primary HF and exact AA leads, plus secondary catalogs. Primary card/config, actual family guide, live pricing and raw independent data inspected; peer findings not used.

[1]: https://huggingface.co/zai-org/GLM-4.7-Flash/raw/main/README.md
[2]: https://docs.z.ai/guides/llm/glm-4.7
[3]: https://huggingface.co/zai-org/GLM-4.7-Flash/raw/main/config.json
[4]: https://artificialanalysis.ai/models/glm-4-7-flash
[5]: https://openrouter.ai/api/v1/models/z-ai/glm-4.7-flash/endpoints
[6]: https://opencode.ai/zen/v1/models
[7]: https://docs.z.ai/guides/overview/pricing
[8]: https://epoch.ai/data/benchmark_data.zip

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web primary/AA/Epoch research, benchmark-condition separation and current tariff/endpoint inspection. Normalized scores are interpretations, not reported benchmark percentages.
