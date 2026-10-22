# MAI-Code-1-Flash — findings by GPT 6.1 Sol

- Source: Microsoft AI, original `mai-code-1-flash`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Confidence: **provisional, vendor-run quality and secondary serving specifications**.

## Model card

- **Identity / release:** Original **June2,2026**, article updatedJune8; not cheaper successor1.1. Proprietary, trained from scratch rather than distilling third-party models per publisher. Parameter count/cutoff not verified from primary text.[1]
- **Access:** Historical Copilot/VSCode `mai-code-1-flash-picker`. Current GitHub supported-model guide lists1.1, while secondary original entry is deprecated. Guessed OpenRouter, AA and Vals exact profiles404; a generic Azure catalog HTML shell is not proof of deployable access.[2][3]
- **Context / modalities:** Secondary exact record **256,000 combined/128K input/128K output**, text→text, reasoning/functions/structured output. Not independently confirmed native specifications. Visual code generation is not native visual input.[2]
- **Price:** Secondary historical Copilot record **$0.75 input/$4.50 output/$0.075 cached per1M**; no matching current primary token price card recovered. Subscription inclusion is not a free tariff. Cost below is provisional historical value, not a live purchase guarantee.[2]

### Raw benchmarks found

- Primary **SWE-Bench Pro51.2% vs Haiku4.5 35.2%**, measured inside Microsoft's **production Copilot harness**, not an independent common third-party agent.[1]
- Publisher says higher pass rates on all four SWE Verified/Pro/Multilingual/Terminal2 tests, with **up to60% fewer tokens on SWE Verified**. Other numeric chart coordinates were not audited and are not invented here.[1]
- Primary **186-question/34-category adversarial reasoning suite**, **85.8% adjusted accuracy**; Einstellung-trap categories remain **below50%**. This is an internal adjusted metric, not GPQA/HLE or universally reproducible academic accuracy.[1]
- IFBench margin+28.9 and AdvancedIF+14.5 are relative deltas, not absolute model scores. No independent exact broad reasoning/perception/retention or Claw/MCP results recovered.[1]

### Normalized scores (1–100)

- **Tool use: 59/100.** Vendor production-harness engineering supports agents; exact independent terminal/workforce coverage missing.[1]
- **Reasoning: 68/100.** Provisional internal adversarial-reasoning evidence, capped by adjusted scoring, weak trap subsets and no independent broad replication.[1]
- **Context window: 76/100.** Provisional~256K serving-catalog tier; no native retention claim.[2]
- **Multimodal: 15/100.** Exact serving record text-only; generated visual applications do not prove perception.[1][2]
- **Coding: 72/100.** SWE-Pro51.2% and real production-harness validation, with vendor-only and environment-specific confidence.[1]
- **Cost efficiency: 80/100.** Provisional historical paid-catalog value; no free or current first-party token tariff established.[2]
- **Overall Score: 58/100.** Provisional half-up mean `(59+68+76+15+72)/5=58`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22MAI-Code-1-Flash%22%20benchmark): mostly generic names, with Microsoft model lead.
- [Google](https://www.google.com/search?q=%22MAI-Code-1-Flash%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22MAI-Code-1-Flash%22%20model%20benchmark): human challenge, not bypassed. Primary original article and current catalog/lifecycle inspected; no peer findings or successor metrics transferred.

[1]: https://microsoft.ai/news/introducingmai-code-1-flash/
[2]: https://models.dev/api.json
[3]: https://docs.github.com/en/copilot/reference/ai-models/supported-models

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web primary research with explicit vendor-only/provisional serving scopes. Ratings are interpretations.
