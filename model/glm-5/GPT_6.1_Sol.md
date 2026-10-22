# GLM-5 — findings by GPT 6.1 Sol

- Source: Z.AI / Zhipu, `zai-org/GLM-5`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** GLM-5, the original February model, distinct from GLM-5.1/5.2/5.3 and Flash variants. General text reasoning/agentic engineering model.[1][2]
- **Provider / access / IDs:** Native `glm-5`, OpenAI-compatible Chat Completions at `https://api.z.ai/api/paas/v4/`; downloadable `zai-org/GLM-5`; OpenRouter `z-ai/glm-5`. Current gateway has multiple status-0 routes including Z.AI, Bedrock and discounted providers. AA marks the release deprecated toward GLM-5.1; that does not negate current gateway listings. No authenticated inference performed.[2][4][6]
- **Release / knowledge:** **2026-02-11**, independently catalogued by AA/Vals; exact knowledge cutoff unverified.[4][5]
- **Architecture / license:** **744B total /40B active MoE**, **MIT**, DeepSeek Sparse Attention, **28.5T** pretraining tokens by publisher. Open-weight availability is not zero-cost inference: local hardware, memory, power and operations still cost money. The local metadata's “self-host $0” describes neither a verified tariff nor total ownership cost.[1]
- **Context window / output:** Native **200K /128K maximum output**, text only. Gateway route contracts vary: StreamLake **198,000/128,000**, Z.AI **202,752/131,072**; some resellers advertise larger output allowances, not the native contract. No million-token capacity inferred from successors.[2][6]
- **Modalities / features:** **Text →text**, thinking, functions, streaming, caching and structured output. Code-generated slides/storyboards and external visual tools do not establish native vision/audio/video.[2]
- **Pricing (2026-10-22):** Native **$1 input/$3.20 output/$0.20 cached read per 1M**; cache storage temporarily free, not all inference free. Current exact gateway StreamLake/GMICloud routes advertise **40%-discounted $0.60/$1.92/$0.12 cached**, FP8. No verified exact free inference entitlement: current NVIDIA model catalog has no exact GLM-5 entry; MIT weights alone do not warrant cost 100.[3][6][7]

### Raw benchmarks found

**Publisher exact original GLM-5 card:**[1]

- **HLE 30.5% /with tools 50.4%**, explicitly **text-only subset by default**; competitor rows marked `*` use full set. GPQA Diamond **86.0%**, AIME 2026 I **92.7%**, HMMT November 2025 **96.9%**. HLE full/subset and tools/no-tools are not interchangeable.
- **SWE-bench Verified 77.8% /Multilingual 73.3%**, **OpenHands with tailored prompt**, temperature/top-p **0.7/0.95**, **16,384 output**, **200K context**.
- **TB2.0 56.2% original** in both Terminus 2 and Claude Code; verified-instruction variant **60.7% Terminus /61.1% Claude Code**. The latter figures are not original benchmark results.
- Terminus: **two-hour timeout, 128K context, 8,192 output, 16 CPUs/32GB**. Claude Code **2.1.14**, **65,536 output**, **wall-clock limit removed**, five-run average, environment fixes; do not pool those harnesses.
- **MCP-Atlas 67.8%**, **500-task public subset**, thinking, **10-minute timeout**, Gemini 3 Pro judge; **Tool-Decathlon 38.0%**, **τ² 89.7%** with Retail/Telecom prompt adjustment and Airline fixes.
- BrowseComp **62.0% /75.9% with context management**; **CyberGym 43.2%**, Claude Code 2.1.18, no web, **1,507 tasks, single-run pass@1, 250-minute timeout**.
- **Vending Bench 2 $4,432.12 final balance**, attributed by the card to independent Andon Labs. Simulated business balance over its scenario is neither percent accuracy nor real-world annual revenue.

**AA independent exact reasoning record**, UUID `40663ad2-b218-471e-bdd4-a1e0c2360e2b`:[4]

- Intelligence Index **27.9112, estimated**; current GDPval and TB2.1/4 fields null. Historical launch-index claims are not substituted for this snapshot.
- **GPQA 82.0202%**, **HLE 29.2864%**, **AA-LCR 75.6667%**, **CritPt 2.0%**, **IFBench 72.3129%**; **APEX-Agents 14.4543%**.
- τ² field **98.2456%**, distinct from publisher's modified-domain 89.7%; domain/harness equivalence unverified, so no common-score average.
- Omniscience index **0.2667**, accuracy **26.3%**, hallucination **35.3234%**, evaluator-defined denominators. Current LCB/SciCode/MMMU-Pro null, not zeros.
- Serving summary **71.5150 output tokens/s /1.6954 s first chunk**, route/workload-specific, not a universal native SLA.

**Vals independent exact reasoning profile**, provider Z.AI:[5]

- **GPQA 83.33% ±1.87**, **LCB 81.87% ±1.06**, **MMLU-Pro 86.03% ±0.34**.
- **SWE Verified 71.40% ±2.02**, **TB2.0 49.44% ±5.33**, **Vibe Code v1.1 23.36% ±4.03**. These are actual independent coding/terminal results, contrary to the local metadata's “every headline number is vendor-published” framing.
- LegalBench **84.06% ±0.41**, TaxEval v2 **70.03% ±0.90** are domain question/classification measurements, not autonomous professional task completion.
- Default temperature/top-p **1/0.95**, **131,072 output**. Vals documents agentic coding overrides **temperature 0.7, SWE16K /Terminal8K output**; suite-specific settings matter.

**Limits:** No verified exact Claw score, broad native multimodal result or ≥98% complex full-window retention found. Public-set MCP results, modified terminal instructions, no-timeout runs and independent results remain separately labelled. LCR 75.67% does not prove perfect 200K retrieval.

### Normalized scores (1–100)

- **Tool use: 64/100.** Independent terminal 49.44%, professional APEX 14.45% and qualified public MCP/Tool-Decathlon results support competent agents; harness modifications and incomplete professional reliability cap the score.[1][4][5]
- **Reasoning: 73/100.** Independent GPQA ~82–83%, HLE29.29% and LCR75.67% are strong, tempered by CritPt2%, limited answer coverage and subset differences in primary headlines.[1][4][5]
- **Context window: 70/100.** Verified native 200K tier; no successor capacity or near-perfect retention transferred.[2][4]
- **Multimodal: 15/100.** Native text-only; external media-generating workflows do not add perception modalities.[2]
- **Coding: 73/100.** Independent SWE71.4%/LCB81.87% and qualified primary results establish practical engineering, while Vibe23.36% and terminal gaps limit generality.[1][5]
- **Cost efficiency: 90/100.** Current discounted exact hosted routes provide good paid value; large-model self-hosting is not free and no current zero tariff verified.[3][6][7]
- **Overall Score: 59/100.** Half-up quality mean `(64 + 73 + 70 + 15 + 73) / 5 = 59`; cost excluded. Fit: open-weight text engineering/agents with explicit harness and serving-price qualifications.

### Fresh search trail and sources

- Bing RSS [`"GLM-5" benchmark`](https://www.bing.com/search?format=rss&q=%22GLM-5%22+benchmark): unrelated forum results.
- Google [`"GLM-5" benchmark`](https://www.google.com/search?q=%22GLM-5%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"GLM-5" benchmark`](https://duckduckgo.com/html/?q=%22GLM-5%22+benchmark): useful exact primary HF/blog and AA leads. Original card footnotes, native guide/tariffs, exact evaluator records and current endpoints inspected; no peer findings used.

[1]: https://huggingface.co/zai-org/GLM-5/raw/main/README.md
[2]: https://docs.z.ai/guides/llm/glm-5
[3]: https://docs.z.ai/guides/overview/pricing
[4]: https://artificialanalysis.ai/models/glm-5
[5]: https://www.vals.ai/models/zai_glm-5-thinking
[6]: https://openrouter.ai/api/v1/models/z-ai/glm-5/endpoints
[7]: https://integrate.api.nvidia.com/v1/models

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web primary/AA/Vals research, preserving subsets, harnesses, task limits and actual hosted tariffs. Ratings are normalized interpretations, not official benchmark percentages.
