# Qwen3-Max — findings by GPT 6.1 Sol

- Source: Alibaba Qwen3-Max-Instruct, original `qwen3-max` release.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Scope: **historical original Instruct model**, not later Qwen3-Max-Thinking or a rolling successor.

## Model card

- **Name:** Qwen3-Max (Qwen3-Max-Instruct).
- **Identity:** Alibaba's launch article explicitly maps **Qwen3-Max-Instruct to API `qwen3-max`**. Its separate Thinking/Heavy section is an unreleased-at-that-launch variant using tools and parallel test-time compute. Those figures are not baseline Instruct measurements.[1]
- **Short description:** Proprietary large MoE text model for general assistance, coding and tool use. Original-model benchmarks remain useful historically even though current access is fragmented.
- **Provider / access:** Original OpenAI-compatible DashScope international endpoint `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`, ID `qwen3-max`.[1] Current Zen full catalog has no exact entry. OpenRouter still exposes metadata for `qwen/qwen3-max` but its endpoint array is **empty**. LLM Gateway advertises a NovitaAI route; that listing is not an authenticated successful request or proof of byte-identical historical weights.[2][3][4]
- **Release / knowledge:** AA dates original release **2025-09-23**, reseller September 24. Alibaba Cloud's October 28 article is a republication whose citation identifies September 2025. No exact knowledge cutoff verified.[1][4][5]
- **Context window:** AA and gateway metadata **262,144 total**, catalog **65,536 maximum output**; other routes differ. Alibaba's **1M-token training context** statement does not establish a deployed 1M inference window for this original checkpoint.[1][4][5][6]
- **Modalities / controls:** **Text in/out**; original AA record is **non-reasoning**, with function calls and JSON support on documented/reseller routes. Strict structured-schema enforcement is not established. A reseller's generic vision/reasoning description conflicts with its capability flags and the exact original model records, and is not used to add modalities.[2][4][5]
- **Architecture:** Publisher reports **over 1 trillion total parameters**, MoE, trained on **36 trillion tokens**; exact active count and cutoff undisclosed. Closed weights, not an Apache-licensed open checkpoint.[1]
- **Pricing (2026-10-22):** Native catalog's deprecated original listing records **$1.20/$6 per 1M input/output**; this is not independently verified currently callable native pricing. LLM Gateway's listed Novita route charges **$0.845/$3.38 through 32,768 tokens**, **$1.40/$5.64 through 131,072**, and **$2.11/$8.45 above that**. Other catalog routes list cheaper prices, with historical identity/availability unresolved. Deprecated iFlow zero-price metadata is not current free inference.[4][6]
- **Lifecycle:** AA marks the original deprecated toward `qwen3-max-thinking`; several native/reseller catalog records are deprecated. The current native model indexes inspected contain no `qwen3-max` text. A guessed dedicated page gives an HTML soft-404; none of these facts alone establishes a global exact shutdown date.[5][6][7]

### Raw benchmarks found

**Publisher launch results — original Instruct:**[1]

- **SWE-bench Verified: 69.6%**, explicitly stated for Qwen3-Max-Instruct. The local curated claim that no public SWE result was published is not supported by this primary source. Harness/repeats are not specified in the accessible prose, so treat it as a vendor result, not an independently reproduced score.
- **Tau2-Bench: 74.8%**, same original Instruct model, vendor-reported.
- The **100% AIME/HMMT** figures belong to **Thinking Heavy with tools and scaled parallel compute**; not transferred to this report's quality dimensions.

**Artificial Analysis independent exact original record** — UUID `7ae943a9-9310-4472-a834-c61f0ab68485`, slug `qwen3-max`, `isReasoning: false`:[5]

- **Intelligence Index 15.6098, estimated**, reflecting incomplete current-index coverage; not a complete measured index or percentage accuracy.
- **Tau2 74.2690%**. Banking, GDPval, Terminal-Bench 2.1 and 4.0 fields are **null**, not measured zeros.
- **GPQA Diamond 76.3636%**, **HLE 11.9092%**, **AIME 2025 80.6667%**, **CritPt 0.0%**. CritPt zero is a real recorded result, distinct from missing fields.
- **LiveCodeBench 76.7196%**; SciCode null. No independent ordinary SWE result verified in this AA record.
- **AA-LCR 50.0%**, IFBench **44.1497%**.
- **Omniscience index −43.55** on its −100…100 scale; accuracy **24.4167%**, hallucination rate **89.9228%**. Negative index is not negative accuracy, and the hallucination denominator is evaluator-defined.
- Runtime, task cost and current input/output prices are null in the selected payload; no latency or throughput is invented.

**Secondary limitations / absent measurements:** BenchLM reproduces some AA figures and lists Vibe Code Bench **3.51%**, but guessed exact Vals model URL returned 404 and the exact Vals run was not independently located; that secondary Vibe figure is not used as a verified measurement. BenchLM's 1M/reasoning metadata conflicts with the exact AA original record and is not imported.[5][8] No verified exact original-model MCP-Atlas, Claw, pure-perception score, or ≥98% long-window retention found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Independent Tau2 ~74.3% and vendor 74.8% establish real function-calling ability; missing terminal/banking/business-agent coverage and weak instruction following constrain generalization.[1][5]
- **Reasoning: 62/100.** GPQA 76.36% and non-reasoning AIME 80.67% support useful baseline reasoning, but HLE 11.91%, CritPt zero and knowledge reliability limit difficult-task confidence.[5]
- **Context window: 76/100.** Verified original 262K capacity band; LCR 50% prevents treating capacity as high retention, and training-time 1M is not deployed capacity.[1][5][6]
- **Multimodal: 15/100.** Original measured/served model is text-only; no later-family vision support is transferred.[2][5]
- **Coding: 65/100.** Vendor SWE Verified 69.6% and independent LCB 76.72% show useful original-generation coding; incomplete modern agentic/programming coverage limits breadth.[1][5]
- **Cost efficiency: 80/100.** Listed shorter-context reseller rates are moderate, but prices rise with context and historical-checkpoint availability is uncertain; no verified current free route.[4][6]
- **Overall Score: 55/100.** Half-up mean `(55 + 62 + 76 + 15 + 65) / 5 = 54.6`; cost excluded. Historical text-only coding/tool reference, not a recommendation to assume current native availability.

### Fresh search trail and sources

- Bing RSS [`"Qwen3-Max" benchmark`](https://www.bing.com/search?format=rss&q=%22Qwen3-Max%22+benchmark): unrelated Google product pages.
- Google [`"Qwen3-Max" Alibaba benchmark`](https://www.google.com/search?q=%22Qwen3-Max%22+Alibaba+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Qwen3-Max" benchmark thinking`](https://duckduckgo.com/html/?q=%22Qwen3-Max%22+benchmark+thinking): genuine original/Thinking publisher leads. Follow-up [`site:alibabacloud.com/blog "Qwen3-Max: Just Scale"`](https://duckduckgo.com/html/?q=site%3Aalibabacloud.com%2Fblog+%22Qwen3-Max%3A+Just+Scale%22) recovered readable Alibaba republication; original Qwen SPA returned only a shell. Direct catalogs and exact evaluator payload inspected.
- Distinct-name check: current `qwen-max` docs describe a **January 2025, 32K** snapshot, not original Qwen3-Max. That separate product's specs/tariff are not transferred.[9]

[1]: https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621
[2]: https://openrouter.ai/api/v1/models/qwen/qwen3-max/endpoints
[3]: https://opencode.ai/zen/v1/models
[4]: https://llmgateway.io/models/qwen3-max
[5]: https://artificialanalysis.ai/models/qwen3-max
[6]: https://models.dev/api.json
[7]: https://www.alibabacloud.com/help/en/model-studio/model-list-text-generation
[8]: https://benchlm.ai/models/qwen3-max
[9]: https://www.alibabacloud.com/help/en/model-studio/qwen-max

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; publisher Instruct/API identity bridge, exact original evaluator payload, and current route/price inspection. No peer findings consulted; normalized scores are interpretations, not official benchmark percentages.
