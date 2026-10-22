# MAI-Thinking-1 — findings by GPT 6.1 Sol

- Source: Microsoft AI, MAI-Thinking-1.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Confidence: **provisional** — verified primary benchmarks and access/pricing, but no independently reproduced exact-model quality suite located.

## Model card

- **Name:** MAI-Thinking-1, distinct from MAI-1-Preview and MAI-Code-1/1.1-Flash.
- **Short description:** Microsoft's proprietary reasoning model for math, software engineering and general enterprise work; text-only, not a voice or financial-domain specialist.[1][2][3]
- **Provider / access / IDs:** Primary publisher and **Microsoft Foundry catalog confirm public preview**, catalog name **`MAI-Thinking-1`**, version **`2026-06-01`**, Chat Completions. Actual deployment name/endpoint is provisioned through Foundry; the local `microsoft/mai-thinking-1` label is not assumed to be a literal public gateway route. Publisher links Playground `mai-thinking-1-latest`. No exact Zen/OpenRouter/models.dev entry found in the live catalogs inspected; that does not invalidate native Foundry availability.[1][3][4]
- **Release / knowledge:** Foundry version June 1; Microsoft Foundry announcement originally **June 2**, updated **August 12**; current model announcement also August 12 and explicitly says public preview. These are version/announcement/availability milestones, not a single guessed release date. Exact primary knowledge cutoff unverified.[2][3][4]
- **Architecture / license:** **~1T total / 35B active sparse MoE**, trained from scratch without third-party distillation according to Microsoft. Closed weights, not an open-source or downloadable ~1T model. Publisher provenance claims are not independently audited here.[1][2][3]
- **Context / output:** Primary **256K** context; current Foundry quick facts **64,000 output tokens**. The published benchmark image separately specifies **256K total context for agentic coding and maximum 256K output for other listed evaluations**. Those evaluation budgets are not current API output entitlements; the old local 25K ceiling is not treated as the current serving contract.[2][3][5]
- **Modalities / controls:** **Text input/output only**. Function-call generation is supported, while execution/security boundaries are mediated by the integrating application; no model-owned external tool execution is implied. Exact arbitrary reasoning-effort controls are not inferred from “adaptive reasoning” marketing.[2][3]
- **Pricing (2026-10-22):** The Foundry model card's own **View pricing** link resolves to Microsoft's official Foundry announcement, which states **prices start at $2 input / $8 output per 1M tokens**. Region/deployment terms can differ. No exact cache tariff, verified free inference entitlement or request-time metering tested here. This primary rate source resolves the local metadata's “no public rate card” uncertainty.[3][4]

### Raw benchmarks found

**Original Microsoft post-trained benchmark image visually inspected**, correct MAI-Thinking-1 column; these are publisher results, not independent reproductions. Competitor values are copied from respective model cards, so the table is not a controlled common-harness cross-vendor experiment.[5]

- **AIME 2025 97.0%**, **AIME 2026 94.5%**, **HMMT February 2026 84.9%**, **GPQA Diamond 84.2%**.
- **LiveCodeBench v6 87.7%**, **SWE-bench Verified 73.5%**, **SWE-bench Pro 52.8%**, **Terminal-Bench 2.0 46.0%**. Verified/Pro and TB versions are kept separate.
- **Critical methodology**, recovered from the public Foundry catalog's benchmark description: simple **ReAct-style loop**; SWE uses bash plus string replacement; Terminal-Bench uses only bash and **ignores predefined timeouts** to remove infrastructure/speed confounds. Its 46% therefore does not promise an official timeout-constrained benchmark result or real-world latency.[3]
- Image footnote: **agentic coding uses 256K total context**, other listed evaluations **maximum 256K output**. Present Foundry max output is 64K; inference at a smaller budget may not reproduce these scores.[3][5]

**Other primary evidence / limits:**

- Microsoft describes a **1,276-task blind single-/multi-turn human comparison**, professional raters supplied by Surge, with preference over **Sonnet 4.6**. This is a Microsoft-designed, partner-rater study; no numerical win rate versus Opus is inferred from the prose.[2]
- Foundry lists **BFCL v3**, GraphWalks, MMLU-Pro, IFBench and additional quality evaluations, but no exact numeric table for them was verified in the inspected primary material. Secondary BenchLM's **GraphWalks BFS 128K 90% / MMLU-Pro 85% / IFBench 85%** remain secondary report-attributed values and are **not promoted to directly inspected primary measurements**.[3][6]
- No verified exact independent AA Intelligence Index, HLE, CritPt, GDPval, Tau banking, Claw, MCP-Atlas, pure perception, or full-window ≥98% retention found. Guessed exact AA/OpenRouter profile paths returned 404; the current native product is still verifiable.[1][3]
- Primary technical PDF links exist, but local download attempts returned 403; the large remote PDF response was not fully parsed. Numeric scoring relies on the accessible original benchmark image and Foundry methodology instead of claiming a complete PDF audit.

### Normalized scores (1–100)

- **Tool use: 60/100.** Primary TB2.0 46% and executable SWE tasks establish real agent interaction, but ignored timeouts, missing independent tool-domain coverage and harness dependence limit portable reliability.[3][5]
- **Reasoning: 78/100.** Primary GPQA 84.2% and AIME/HMMT support capable math/STEM reasoning; high evaluation budgets and absent independent hard-reasoning/knowledge measurements cap confidence.[2][5]
- **Context window: 76/100.** Verified 256K capacity band, without importing unverified retrieval accuracy or treating benchmark output budget as extra input capacity.[2][3]
- **Multimodal: 15/100.** Native catalog explicitly confirms text-only I/O; no capabilities transferred from Microsoft's image/voice models.[3]
- **Coding: 75/100.** Publisher SWE Verified 73.5%, Pro 52.8% and LCB-v6 87.7% support useful engineering, constrained by vendor-only evidence, budget mismatch and terminal-harness modifications.[3][5]
- **Cost efficiency: 78/100.** Verified starting $2/$8 pricing is moderate rather than an invented unknown price; reasoning output and deployment variability limit dollar efficiency. No free tier or cache discount invented.[4]
- **Overall Score: 61/100.** Half-up mean `(60 + 78 + 76 + 15 + 75) / 5 = 60.8`; cost excluded. Provisional fit: text-only reasoning/coding in Foundry, with explicit budget and harness validation.

### Fresh search trail and sources

- Bing RSS [`"MAI-Thinking-1" benchmark`](https://www.bing.com/search?format=rss&q=%22MAI-Thinking-1%22+benchmark): unrelated currency-rate pages.
- Google [`"MAI-Thinking-1" Microsoft benchmark`](https://www.google.com/search?q=%22MAI-Thinking-1%22+Microsoft+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"MAI-Thinking-1" benchmark`](https://duckduckgo.com/html/?q=%22MAI-Thinking-1%22+benchmark): real publisher/report leads, plus conflicting secondary dates/pricing. Native model card, its pricing redirect, original benchmark image and embedded public Foundry methodology were checked directly; no peer findings consulted.

[1]: https://microsoft.ai/models/mai-thinking-1/
[2]: https://microsoft.ai/news/introducing-mai-thinking-1/
[3]: https://ai.azure.com/catalog/models/MAI-Thinking-1
[4]: https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632
[5]: https://microsoft.ai/wp-content/uploads/2026/05/MAI-Thinking-1-metrics-.png
[6]: https://benchlm.ai/models/mai-thinking-1

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; original publisher image, public model card, native benchmarking methodology and official price announcement. Scores are provisional normalized interpretations, not vendor percentages or independently reproduced measurements.
