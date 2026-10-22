# GPT-5.1-Codex-Max — findings by GPT 6.1 Sol

- Source: OpenAI, `gpt-5.1-codex-max`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Scope: historical original model; **provisional** reasoning/perception ratings where exact broad evaluations are missing.

## Model card

- **Identity / release:** Distinct long-running Codex model, launched **2025-11-19**; Vals/API record uses **December4**. These are product versus API dates, not evidence of two byte-identical checkpoints. Closed weights, undisclosed parameters; September30,2024 cutoff.[1][2][3]
- **Access:** Native Responses-only, text/images→text, reasoning/functions/structured output. Native API shut down **July23,2026**. Current OpenRouter `openai/gpt-5.1-codex-max` still has a status0 **Azure20251204** route; catalog inspection is not authenticated inference.[2][4][5]
- **Context:** **400K combined**, Azure272K maximum input/128K output. Compaction lets a task traverse multiple windows; it is not native million-token simultaneous memory or perfect retention.[1][2][5]
- **Pricing:** Current checked Azure route **$1.25 input/$10 output/$0.125 cached per1M**; web-search surcharge separately listed. No verified free entitlement. Recorded native prices match, but native retirement remains explicit.[2][5]

### Raw benchmarks found

- **Publisher appendix:** SWE Verified **77.9% on500 tasks**, **SWE-Lancer IC SWE79.9%**, **TB2.0 58.1%**. **xhigh, compaction enabled**; terminal uses CodexCLI in Harbor. Comparator plain Codex uses high, so not a pure checkpoint-only controlled comparison.[1]
- Publisher's medium-effort **30% fewer thinking tokens** is a particular SWE comparison, not30% cheaper for every workload. Observed>24-hour runs are examples, not independent reliability percentiles.[1]
- **Vals independent high effort**, verbositymedium,128K output: **LCB83.56% ±1.05**, **Vibev1.1 22.17% ±3.84**. Its retrospective notes3× slower SWE and10× slower Vibe are scoped comparisons; current ranks differ from launch.[3]
- No exact public GPQA/HLE/MMMU/retention result verified; guessed AA exact URL404. Reasoning rating below is explicitly an **engineering-reasoning proxy** supported by multi-step SWE/SWE-Lancer/terminal work. Native image support establishes modality, not a fabricated perception benchmark.

### Normalized scores (1–100)

- **Tool use: 68/100.** Verified terminal and professional engineering results, capped by harness/budget dependence and missing broader workforce coverage.[1][3]
- **Reasoning: 70/100.** Provisional engineering-reasoning proxy; exact academic generality remains unmeasured here.[1]
- **Context window: 84/100.** Verified400K tier; no compaction-as-extra-native-capacity claim.[2][5]
- **Multimodal: 67/100.** Provisional documented image-input capability, capped by absent exact perception replication and no native audio/video.[2][3]
- **Coding: 77/100.** Strong primary repository/professional work and independent LCB, tempered by independent Vibe22.17% and effort/latency costs.[1][3]
- **Cost efficiency: 77/100.** Current surviving paid Azure tariff/caching, expensive output and slow high-effort trajectories; native retired.[3][5]
- **Overall Score: 73/100.** Provisional half-up mean `(68+70+84+67+77)/5=73.2`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22GPT-5.1-Codex-Max%22%20benchmark): generic OpenAI pages.
- [Google](https://www.google.com/search?q=%22GPT-5.1-Codex-Max%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22GPT-5.1-Codex-Max%22%20model%20benchmark): human challenge, not bypassed. Primary appendix, contract/retirement and independent Vals/current route inspected; no peer findings used.

[1]: https://openai.com/index/gpt-5-1-codex-max/
[2]: https://developers.openai.com/api/docs/models/gpt-5.1-codex-max
[3]: https://www.vals.ai/models/openai_gpt-5.1-codex-max
[4]: https://developers.openai.com/api/docs/deprecations
[5]: https://openrouter.ai/api/v1/models/openai/gpt-5.1-codex-max/endpoints

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator research; explicit provisional engineering/perception proxies and separate native/gateway lifecycle. Ratings are normalized interpretations.
