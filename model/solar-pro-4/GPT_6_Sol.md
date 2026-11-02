# Solar Pro 4 — findings by GPT 6 Sol

- Source: Upstage (`solar-pro4-260806` / `solar-pro4`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4.
- **Short description:** Upstage's proprietary agent-focused text model for document reasoning, coding and multi-step enterprise work in English, Korean and Japanese. Its API weights and benchmarks must not be merged with open-weight Solar Open 2 ([official model specification](https://console.upstage.ai/docs/models/solar-pro-4), [launch comparison](https://www.upstage.ai/blog/en/solar-pro-4)).
- **Provider / access:** Upstage OpenAI-compatible Chat Completions at `https://api.upstage.ai/v1`, model alias `solar-pro4`, pinned snapshot `solar-pro4-260806`; also OpenRouter `upstage/solar-pro4`. Upstage docs limit its Responses API to Solar Pro 4 and Solar Mini 4, so support is model-specific rather than a property of every Solar API ([Upstage API quickstart](https://console.upstage.ai/docs/capabilities/generate/chat), [model spec](https://console.upstage.ai/docs/models/solar-pro-4), [OpenRouter](https://openrouter.ai/upstage/solar-pro4)).
- **Release / knowledge:** Snapshot **2026-08-06** (Upstage model history); announcement August 11. Training-data cutoff **February 2026** ([Upstage specs](https://console.upstage.ai/docs/models/solar-pro-4), [announcement](https://www.upstage.ai/blog/en/solar-pro-4)).
- **IDs:** `solar-pro4-260806` version / `solar-pro4` alias; `upstage/solar-pro4` routed ID. No verified OpenCode Zen Free ID. Upstage Playground is free **to try**, not free API tokens ([specification](https://console.upstage.ai/docs/models/solar-pro-4)).
- **Context window:** **512K** per Upstage; **128K max output**. OpenRouter advertises **524,288** tokens, an exact power-of-two representation; an August Artificial Analysis article listed **384K/256K**, which conflicts with the current vendor specification and should not be silently equated with it ([vendor](https://console.upstage.ai/docs/models/solar-pro-4), [AA launch analysis](https://artificialanalysis.ai/articles/upstage-solar-pro-4)).
- **Modalities:** Text in/out, configurable reasoning, structured outputs and tool calls; image/PDF input is not native to this text model (an external parser could supply document text). No native audio/video ([vendor specs](https://console.upstage.ai/docs/models/solar-pro-4), [AA](https://artificialanalysis.ai/models/solar-pro4)).
- **Pricing (as of 2026-11-02):** Upstage list price **$0.30 input / $1.20 output / $0.06 cached input per million**. The launch 90%-off promotion ended September 10; do not treat old discounted OpenRouter listings as the Upstage list rate or free tier. Check provider-specific routing price before purchase; demo Playground is not an API tariff ([Upstage pricing](https://www.upstage.ai/pricing/api), [launch](https://www.upstage.ai/blog/en/solar-pro-4)).
- **Architecture:** Proprietary, undisclosed parameters and weight topology. Do not transfer Solar Open 2's 250B-A15B MoE specifications to this model ([vendor specs](https://console.upstage.ai/docs/models/solar-pro-4)).

### Raw benchmarks found

- **Agent / tool use:** Independent [Artificial Analysis launch measurements](https://artificialanalysis.ai/articles/upstage-solar-pro-4) Terminal-Bench **v2.1 ~57%**, τ³ Banking **~23%** and GDPval-AA **v2 1,277 Elo** (launch snapshot; current [BenchmarkList AA-sourced digest](https://benchmarklist.com/models/upstage-solar-pro4/) lists **57.3%**, **23.3%**, **1,272 Elo**, respectively). The Elo measure is not Upstage's **38.8** normalized GDPval-AA v2 comparison row ([Upstage comparison](https://www.upstage.ai/blog/en/solar-pro-4)). Separately, vendor in-house [MCP-Atlas **61.4%**, APEX-Agents **18.7%**, BrowseComp **49.2%**](https://www.upstage.ai/blog/en/solar-pro-4); don't present them as independent AA reruns.
- **Reasoning / knowledge:** Vendor [GPQA Diamond **89.0%**, MMLU-Pro **86.3%**, AIME 2026 **95.3%**](https://www.upstage.ai/blog/en/solar-pro-4); [BenchmarkList's AA-sourced digest](https://benchmarklist.com/models/upstage-solar-pro4/) gives GPQA **89.1%**, AA-HLE **29.8%**, CritPt **6.3%**. AA's [August Intelligence Index **42**](https://artificialanalysis.ai/articles/upstage-solar-pro-4) is an older benchmark-version snapshot, not interchangeable with its currently rendered v5 page reporting N/A ([model page](https://artificialanalysis.ai/models/solar-pro4)).
- **Coding:** Vendor in-house [SWE-bench Verified **70.6%** using OpenHands and LiveCodeBench **87.8%**](https://www.upstage.ai/blog/en/solar-pro-4). Independent AA-sourced [SciCode **48.0%** and Terminal-Bench v2.1 **57.3%**](https://benchmarklist.com/models/upstage-solar-pro4/); the latter is agentic coding, not a SWE-bench replication.
- **Long context:** AA-measured [AA-LCR **~71%**](https://artificialanalysis.ai/articles/upstage-solar-pro-4) across long document tasks; the [vendor](https://www.upstage.ai/blog/en/solar-pro-4) describes ~100K-token inputs for that evaluation. No exact-endpoint full-512K retrieval measure found; nominal window ≠ full-length accuracy.

### Normalized scores (1–100)

- **Tool use: 77/100.** Independent terminal and banking evidence plus vendor MCP/APEX, tempered by incomplete task success.
- **Reasoning: 82/100.** Strong GPQA/HLE/AA launch index, with the index version and vendor/AA distinctions retained.
- **Context window: 82/100.** 512K advertised, 71 AA-LCR at ~100K, not proof of reliable far-end retrieval.
- **Multimodal: 15/100.** Text only; parsed document workflows are not native visual input.
- **Coding: 79/100.** Strong vendor SWE/LiveCodeBench and independent SciCode/terminal, without independent SWE reproduction.
- **Cost efficiency: 76/100.** $0.30/$1.20 list is accessible for an agentic flagship, with potentially verbose reasoning and no perpetual free API.
- **Overall Score: 67/100.** Half-up mean (77 + 82 + 82 + 15 + 79) / 5 = 67; a practical text-first, hosted document/tool agent rather than a vision model.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three fresh official access/spec, independent evaluation and vendor-comparison searches; distinguish launch/current benchmark versions, vendor in-house and AA, routed versus first-party pricing. Scores are normalized interpretations.
- Reference URLs:
  - [Upstage pinned snapshot and official model specifications](https://console.upstage.ai/docs/models/solar-pro-4)
  - [Upstage launch benchmark comparison and tariffs](https://www.upstage.ai/blog/en/solar-pro-4)
  - [Artificial Analysis launch evaluation](https://artificialanalysis.ai/articles/upstage-solar-pro-4)
  - [BenchmarkList AA-sourced metric digest](https://benchmarklist.com/models/upstage-solar-pro4/)
  - [Upstage current API pricing](https://www.upstage.ai/pricing/api)
- Future sources: add a new file next to this one using the same headings.
