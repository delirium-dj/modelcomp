# GPT-5-Codex — findings by GPT 6.1 Sol

- Source: OpenAI, `gpt-5-codex`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Scope: **historical model quality**; native API retired July 23, 2026. Catalog entries do not override that shutdown.

## Model card

- **Name:** GPT-5-Codex. Proprietary GPT-5-derived specialist for agentic software engineering, not GPT-5.1/5.2/5.3-Codex, Codex Mini or the general GPT-5 checkpoint.[1][2]
- **Provider / access / IDs:** Native ID **`gpt-5-codex`**, historically **Responses API only**; no native Chat Completions. Only an updating unsuffixed snapshot is documented. Native deprecations table records actual **2026-07-23 shutdown**, successor `gpt-5.6-sol`. OpenRouter still returns a descriptive model object but **`endpoints: []`**. Zen still lists `gpt-5-codex` and a Responses endpoint, while its same guide explicitly marks it deprecated July 23. These are catalog observations, not an authenticated live inference test or byte-identical current-backend guarantee.[1][3][4][5]
- **Release / knowledge:** Codex product release **2025-09-15**, API availability **2025-09-23**; model card cutoff **2024-09-30**. AA uses the API date; this is not a conflicting second checkpoint.[1][2][6]
- **Context window:** Documented **400,000 combined**, maximum **272,000 input /128,000 output** including reasoning budget. Not 400K input plus output. Codex conversation compaction and observed long sessions are not a larger native window or perfect retention.[1][2]
- **Modalities / tools:** Text/image input, text output; reasoning tokens, functions, streaming, structured outputs, prompt caching and web search. Screenshots support visual engineering; browser/MCP/terminal orchestration is a product/harness capability, not native video/audio or image generation.[1][2]
- **Architecture:** Closed weights; parameter count, active size and detailed architecture unverified. Open-source Codex CLI does not make the model weights open.[2][7]
- **Pricing (checked 2026-10-22):** Surviving native model card quotes **$1.25 input/$10 output/$0.125 cached per 1M**; treat this as the recorded tariff after native shutdown. Zen guide quotes **$1.07/$8.50/$0.107 cached**, with **4.6% +$0.31** credit-purchase processing fees, but also explicitly lists deprecation. No exact free ID/tariff verified. Subscription-included Codex usage does not establish free inference for this retired checkpoint. Cost rating below is **provisional historical value**, not a current procurement guarantee.[1][3][5]

### Raw benchmarks found

**Primary release observations / methodology:**[2][7]

- OpenAI says its launch SWE-bench Verified methodology now includes **all 500 tasks**, unlike prior 477-task reporting. The retrieved article text does not expose a numeric exact Codex SWE/refactor chart value; this report does not import the local metadata's percentages as independent evidence.
- Employee-traffic **bottom 10% of turns by generated tokens uses 93.7% fewer tokens** than GPT-5; top decile uses about twice as long. This is a conditional traffic comparison, not 93.7% cheaper for every workload or a whole-suite speedup.
- Observed independent execution **over seven hours** is a publisher example, not a measured seven-hour reliability percentile/time horizon.
- Original seven-page system-card PDF inspected: **98% successfully ignored coding-focused prompt injection** in its specific suite. This is robustness on that suite, not general agent task success or a coding correctness score.

**AA independent exact high-effort record**, UUID `5d11e7a1-4f70-4e5a-9364-e193761d6757`, `gpt-5-codex`:[6]

- Intelligence Index **24.8819, estimated**; deprecated release points to GPT-5.1-Codex. The index is not a fully measured current frontier comparison.
- **GPQA Diamond 83.7374%**, **HLE 27.8499%**, **AIME 2025 98.6667%**, **CritPt 5.1429%**, **AA-LCR 71.6667%**, **IFBench 74.1497%**.
- **LiveCodeBench 84.0212%**, **MMMU-Pro 73.8150%**, τ² field **86.8421%**. Secondary source-display labels this AA τ² result **Telecom**, not an all-domain τ² average.[10]
- Omniscience index **−7.5333**, accuracy **38.7%**, hallucination **75.4214%**, evaluator-defined denominators.
- TB2.1/TB4, GDPval, SciCode and banking fields null; missing AA terminal fields do **not** imply no public terminal results elsewhere.
- AA route summary **163.8978 output tokens/s /9.4960 s first chunk**, historical workload-specific serving measurements, not a currently obtainable native SLA.

**Vals independent exact high-effort profile / archived benchmark:**[8][9]

- **LCB 84.72% ±1.03**, provider OpenAI, max output **128,000**, high reasoning. The model page's displayed 84.72% is this LCB result, not a broad Vals Index accuracy.
- **Terminal-Bench 1.0 58.75%**, **Terminus 2**, **$1.38/test**, **11m04s**. Methodology: **pass@1**, 80 tasks, **100-turn limit without global wall-clock timeout**; one `vim-terminal-task` executable-bit test removed. Hence not directly comparable to original timeout-enforced runs or TB2/4.
- September 24, 2025 profile update also reports **IOI v1 9.8%** and a qualitative first-place SWE result at that time. Historical rank claims are not current ranks or numeric SWE measurements.

**Epoch raw external records**, forwarding Terminal-Bench/WeirdML rather than independent Epoch reruns:[11]

- **TB2.0 Codex CLI 44.3258%**, SE **2.7054 pp**; **Terminus 2 43.4270%**, SE **2.8735 pp**; **Mini-SWE-Agent 41.3483%**, SE **2.7682 pp**. Each is a different harness. Rounded companion rows ~44.3/43.4/41.3 are duplicate source displays, not three extra experiments.
- **WeirdML 54.53%**, reported cost/run about **$1.0956**; unsuffixed and `_high` rows repeat the same underlying result and are not averaged as independent replications.
- The historical TB2 leaderboard URL currently renders a TB4 shell when fetched, so preserved raw external rows establish the values; no invented direct current-table verification.

**Evidence limits:** No verified exact TB2.1/4 score, Claw/MCP benchmark, broad native audio/video or near-perfect 400K retrieval found. Directly recovered independent terminal/LCB data supersede the local metadata's assertion that those public figures are absent. Historical aliases may have updated, so evaluation dates/harnesses remain part of each claim.

### Normalized scores (1–100)

- **Tool use: 65/100.** Independent TB2 ~41–44% across harnesses, qualified TB1 58.75% and Telecom tooling support real engineering agents; no general-workforce or modern terminal coverage establishes universal reliability.[6][9][11]
- **Reasoning: 73/100.** Exact independent GPQA 83.74%, HLE 27.85% and LCR 71.67% establish strong historical reasoning; modest CritPt/knowledge and specialist positioning cap breadth.[6]
- **Context window: 84/100.** Documented 400K combined tier with separate 272K input maximum; no near-perfect full-window retention or compaction-as-extra-capacity claim.[1][6]
- **Multimodal: 80/100.** Real image input plus independent MMMU-Pro 73.82% supports visual engineering; native audio/video/media output absent.[1][6]
- **Coding: 76/100.** Independent LCB ~84–85%, multi-harness terminal results and WeirdML 54.53% support capable repository work, with historical checkpoint and benchmark-version limitations.[6][8][9][11]
- **Cost efficiency: 77/100.** Provisional historical tariff/value assessment: cached input helps, $10 output/reasoning and current native retirement constrain value; a surviving catalog price is not proven live availability.[1][3][5]
- **Overall Score: 76/100.** Half-up quality mean `(65 + 73 + 84 + 80 + 76) / 5 = 75.6`; cost excluded. Historical coding-specialist profile, not a recommendation to depend on a retired native endpoint.

### Fresh search trail and sources

- Bing RSS [`"GPT-5-Codex" benchmark`](https://www.bing.com/search?format=rss&q=%22GPT-5-Codex%22+benchmark): generic ChatGPT/OpenAI pages, not useful exact measurements.
- Google [`"GPT-5-Codex" benchmark`](https://www.google.com/search?q=%22GPT-5-Codex%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"GPT-5-Codex" benchmark`](https://duckduckgo.com/html/?q=%22GPT-5-Codex%22+benchmark): useful evaluator, gateway and dated release leads. Primary retirement/contract, original PDF, exact AA/Vals and raw Epoch records inspected independently; peer reports not used.

[1]: https://developers.openai.com/api/docs/models/gpt-5-codex
[2]: https://openai.com/index/introducing-upgrades-to-codex/
[3]: https://developers.openai.com/api/docs/deprecations
[4]: https://openrouter.ai/api/v1/models/openai/gpt-5-codex/endpoints
[5]: https://opencode.ai/docs/zen/
[6]: https://artificialanalysis.ai/models/gpt-5-codex
[7]: https://cdn.openai.com/pdf/97cc5669-7a25-4e63-b15f-5fd5bdc4d149/gpt-5-codex-system-card.pdf
[8]: https://www.vals.ai/models/openai_gpt-5-codex
[9]: https://www.vals.ai/benchmarks/terminal-bench
[10]: https://www.benchleader.com/models/gpt-5-codex
[11]: https://epoch.ai/data/benchmark_data.zip

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web primary/AA/Vals research and raw external-table verification, separating historical quality, benchmark versions, modifying harnesses and actual shutdown. Scores are normalized interpretations.
