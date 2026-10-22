# GPT-5 Nano — findings by GPT 6.1 Sol

- Source: OpenAI, `gpt-5-nano-2025-08-07`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** GPT-5 Nano, original August 2025 checkpoint; not GPT-5.4 Nano or GPT-5.6 Luna.
- **Short description:** Small proprietary reasoning/image-input model positioned for summarization, classification and high-volume bounded tasks. Small/fast positioning does not imply low latency at high reasoning effort.[1]
- **Provider / access / IDs:** Native Chat Completions and Responses, alias `gpt-5-nano`, snapshot **`gpt-5-nano-2025-08-07`**; current Zen lists `gpt-5-nano`. Current gateway exposes OpenAI Standard/Flex and Azure routes with the exact snapshot, all status 0 at inspection. Catalog/uptime is not an authenticated inference test.[1][2][3]
- **Release / knowledge / lifecycle:** Released **2025-08-07**; native cutoff **2024-05-31**, while AA metadata says May 30. Native June 11 notice explicitly schedules **API shutdown December 11, 2026**, recommending **GPT-5.6 Luna**. It is currently deprecated, not already shut down; Azure lifecycle need not be identical.[1][4][5]
- **Context / output:** **400,000 combined**, with **272,000 maximum input /128,000 reasoning-plus-output**. Do not advertise 400K input-only. Azure gateway's larger output metadata is not substituted for the native contract.[1][2][6]
- **Modalities / controls:** **Text/image input, text output**; functions, structured outputs, caching and streaming. `minimal`, `low`, **medium default**, `high` effort at launch; high-effort benchmark results are not minimal/default latency measurements. Native audio/video/image output unsupported; frame-based video evaluation and externally invoked image-generation tools do not add those native output modalities.[1][6]
- **Architecture:** Closed weights; exact parameters/active count undisclosed. No base/mini architecture or benchmark figures transferred.
- **Pricing (2026-10-22):** Native/Standard gateway **$0.05 input /$0.40 output /$0.005 cached input per 1M**. Current OpenAI **Flex** gateway **$0.025/$0.20/$0.0025 cached**; service-tier tradeoffs apply. Azure standard currently **$0.05/$0.40/$0.01 cached**, Sweden **$0.055/$0.44/$0.011 cached**. No exact current free inference verified; generic free ChatGPT does not establish Nano access.[1][2]

### Raw benchmarks found

**Primary launch detailed tables — exact Nano/high column**, not the flagship figures in article prose:[6]

- **AIME 2025 85.2%**, **GPQA Diamond 71.2%**, **HLE 8.7% no tools**, **HMMT 2025 75.6%**, **FrontierMath 9.6% with Python only**. HLE version caveat is explicit; tools and competition dates remain separate.
- **SWE Verified 54.7%**, but **23/500 tasks omitted** for infrastructure reliability: result is not a full-500-task score. **Aider polyglot diff 48.4%**, SWE-Lancer IC outcome **$49K** on its own task-value metric, not 49% accuracy.
- **Tau2 airline 41.0% /retail 62.3% /telecom 35.5%**; not overall 96.7%, which belongs to flagship GPT-5. MultiChallenge **54.9% with o3-mini grader**, COLLIE **96.9%**, internal hard instruction-following **56.1%**.
- **MMMU 75.6%**, **MMMU-Pro 62.6% average across standard/vision sets**, **CharXiv 62.7% with Python enabled**; VideoMMMU **66.8% with max 256 frames**. Frame/tool recipes are not unsupported native video claims.
- **OpenAI MRCR two-needle 128K 43.2%, 256K 34.9%**; GraphWalks BFS <128K **64.0%**, parents **43.8%**; BrowseComp long-context **80.4% at 128K /68.4% at 256K**. Capacity and task-specific retention differ.
- **LongFact Concepts hallucination 1.0%, Objects 2.8%, FActScore 7.3%**, lower better, on those specific no-tools methods. Not universal factual error rates.

**AA independent selected high-effort record**, UUID `e18e5e6a-5a31-4c0b-b80b-ac401392f446`; Intelligence Index **12.9922, estimated**, incomplete current-index coverage:[5]

- **Tau2 36.5497%**, **GPQA 67.5758%**, **HLE 9.4995%**, **LCB 78.9418%**, **AIME 2025 83.6667%**, **LCR 45.0%**, **MMMU-Pro 60.9827%**, IFBench **67.5510%**.
- **CritPt 0.0%** is measured zero. TB2.1/TB4, banking, GDPval and SciCode are null, not zero or fabricated terminal results.
- Omniscience index **−28.6667**, accuracy **19.0833%**, hallucination rate **59.0113%**; different task/denominator from LongFact, so the rates are not contradictory or interchangeable.
- **141.338 output tokens/s**, but **85.3462 seconds to first chunk** on the high-reasoning setup. Fast decode is not necessarily fast first response or low end-to-end latency.

**Vals independent exact snapshot/high**, native OpenAI, maximum **128K output**; benchmark-specific settings may differ:[7]

- **GPQA 63.38% ±2.46**, **LCB 70.22% ±0.93**, **MMLU-Pro 76.07% ±0.41**, **MMMU-Pro 70.94% ±1.09**, SAGE **30.38% ±2.83**.
- Profile's **55.01 s** suite latency summary is not directly equivalent to AA first-chunk latency. Different evaluator/harness results remain separately attributed.

**Coverage limits:** No exact independent repository-agent, Claw/MCP score or ≥98% full-window retention verified. Optional native tools establish interface support, not measured autonomous-task success. Missing measures are not imported from GPT-5/mini or successors.

### Normalized scores (1–100)

- **Tool use: 36/100.** Independent Tau2 36.55% and modest primary telecom/airline show limited multi-step reliability despite broad API interfaces and good narrow instruction following.[5][6]
- **Reasoning: 61/100.** Independent GPQA ~63–68%, HLE ~9.5% and CritPt zero cap general hard reasoning, despite stronger competition-math results at high effort.[5][7]
- **Context window: 84/100.** Verified 400K combined capacity band, with input capped at 272K and measured retrieval substantially below perfect.[1][6]
- **Multimodal: 73/100.** Real image understanding with independent MMMU-Pro ~61–71%; text-only output, absent audio and bounded perception quality cap breadth.[1][5][7]
- **Coding: 59/100.** Primary partial-task SWE 54.7%, Aider 48.4% and independent LCB support bounded coding; incomplete modern repository/terminal-agent coverage constrains autonomy.[5][6][7]
- **Cost efficiency: 98/100.** Verified $0.05/$0.40 and cheaper Flex are excellent paid rates with caching; high reasoning latency/token consumption, tier constraints and no exact free access prevent 100.[1][2][5]
- **Overall Score: 63/100.** Half-up mean `(36 + 61 + 84 + 73 + 59) / 5 = 62.6`; cost excluded. Fit: bounded extraction/classification and modest multimodal tasks while the deprecated native snapshot remains available.

### Fresh search trail and sources

- Bing RSS [`"GPT-5 nano" benchmark`](https://www.bing.com/search?format=rss&q=%22GPT-5+nano%22+benchmark): generic GPT/ChatGPT results without exact benchmark evidence.
- Google [`"GPT-5 nano" OpenAI benchmark`](https://www.google.com/search?q=%22GPT-5+nano%22+OpenAI+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"GPT-5 nano" benchmark`](https://duckduckgo.com/html/?q=%22GPT-5+nano%22+benchmark): exact evaluator and native launch leads. Original Nano-column tables, current native specs/deprecation notice, exact independent records and serving rates checked; no peer findings consulted.

[1]: https://developers.openai.com/api/docs/models/gpt-5-nano
[2]: https://openrouter.ai/api/v1/models/openai/gpt-5-nano/endpoints
[3]: https://opencode.ai/zen/v1/models
[4]: https://developers.openai.com/api/docs/deprecations
[5]: https://artificialanalysis.ai/models/gpt-5-nano
[6]: https://openai.com/index/introducing-gpt-5-for-developers/
[7]: https://www.vals.ai/models/openai_gpt-5-nano-2025-08-07

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; exact native snapshot/specifications and benchmark column, independent AA/Vals records, live gateway and primary lifecycle notice. Normalized scores are interpretations, not official benchmark percentages.
