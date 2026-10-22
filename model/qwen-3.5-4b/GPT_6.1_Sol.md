# Qwen3.5-4B — findings by GPT 6.1 Sol

- Source: Alibaba/Qwen, `Qwen/Qwen3.5-4B`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Scope: original post-trained multimodal **4B**, not Base, a quantized community fine-tune, the9B model or hosted Flash.

## Model card

- **Name / description:** Qwen3.5-4B, compact multimodal reasoning model for local assistants, perception and lighter tools/coding. Local scaffolded `128K/Text in-out/Standard pricing` fields are not the actual specifications.[1][2]
- **Provider / access / IDs:** Downloadable `Qwen/Qwen3.5-4B`, local Transformers/vLLM/SGLang-compatible deployment; exact hosted **`Qwen/Qwen3.5-4B` on SiliconFlow China**, OpenAI-compatible API. Guessed OpenRouter exact endpoint returns404; no inference success inferred from catalogs or performed with credentials.[1][7][8]
- **Release / knowledge:** **2026-03-02** by AA and SiliconFlow publication timestamp; exact cutoff unverified. Epoch `_none` metadata says February24 and IDP page displays September2025: conflicting catalog dates, not accepted as primary release facts.[3][4][5][7]
- **Architecture / license:** Publisher **4B language model**, **Apache2.0**; AA reports4.66B total. **Dense FFN**,32 layers,hidden2560; repeating three Gated DeltaNet layers then full attention, plus24-layer vision encoder. Family-level README prose mentions MoE, but the exact4B config uses dense `qwen3_5_text`, not a sparse-expert model.[1][2][3]
- **Context / output:** **262,144 native**, publisher-supplied **YaRN4× recipe up to1,010,000**. Default config uses ordinary RoPE,262,144 positions. Extension needs explicit overrides and can harm short-context performance; no measured million-window retention establishes the default model as1M. Publisher recommends **32,768 output for most queries /81,920 for hard math/code evaluations**, not a universal hosted cap.[1][2]
- **Modalities / features:** **Text/image/video-frame input →text**, optional thinking, functions and JSON. Video sampling/preprocessor settings affect hour-scale clips; actual audio and image/video synthesis not established. Supported deployment recipes preserve the vision encoder rather than stripping it for text-only inference.[1][2][7]
- **Pricing (2026-10-22):** **Verified free hosted lane**: SiliconFlow's public pricing-page embedded data identifies exact `Qwen/Qwen3.5-4B`, status`normal`,262,144 context, and explicit **input/output SKU unit prices both0 CNY**. This supports cost100, independently of the free Apache weights. Account/API-key and tier quotas apply; embedded level0 lists **1,000RPM /80,000TPM**, higher tiers differ. No zero-retention/no-training guarantee verified. An authenticated request or sustained throughput test was not performed.[7][8]
- **Other tariffs:** AA serving reference **$0.03 input/$0.15 output per1M**, secondary models.dev Empirio/Merge **$0.04/$0.07**; these are separate provider references, not SiliconFlow's tariff or a general local operating cost. Current NVIDIA catalog has no exact4B entry.[3][6]

### Raw benchmarks found

**Publisher exact4B table column**, not adjacent9B/baselines:[1]

- **MMLU-Pro79.1%**, **GPQA Diamond76.2%**, **IFBench59.2%**, **HMMT February2025 74.0% /November76.8%**.
- **LCBv6 55.8%**, **OJBench24.1%**. No exact SWE Verified/Pro or Terminal score supplied by that table.
- **BFCLv4 50.3%**, **TAU2 79.9%**, **VITA22.0%**, **DeepPlanning17.6%**. TAU2 follows the official setup except Airline fixes from the Opus4.5 system card; not a completely unmodified universal tool success rate.
- **AA-LCR57.0%**, **LongBenchv2 50.0%**, **MMLongBench-Doc54.2%**. These are task scores, not measured perfect full-window retrieval.
- **MMMU77.6% /MMMU-Pro66.3%**, **MathVista-mini85.1%**, **OmniDocBench1.5 86.2**, **OCRBench85.0**, **RealWorldQA79.5%**. OCR/aggregate benchmark scales are retained rather than converting them into a universal accuracy.
- **VideoMME83.5% with subtitles /76.9% without**, **VideoMMMU74.1%**. Subtitle availability materially changes the task.
- Sampling: general thinking **temperature1/top-p0.95/top-k20/presence1.5**; precise coding thinking **temperature0.6/presence0**; non-thinking general **temperature0.7/top-p0.8**. The card contains more than one non-thinking-reasoning recommendation; exact recipe should be stated by each reproduction.

**AA independent reasoning record**, UUID `651ef7ae-9a8f-477e-9c8e-460aa156ba02`:[3]

- Index **13.1248, estimated**; **TB2.1 25.8427%**, τ² field **92.1053%**, separate **τ3-Banking6.8041%**. A high narrow τ² field does not establish high banking/workforce reliability.
- **GPQA77.0707%**, **HLE9.9166%**, **AA-LCR63.0%**, **CritPt0% measured**, **IFBench51.9728%**, **MMMU-Pro65.3757%**.
- Omniscience index **−58.35**, accuracy **15.1167%**, hallucination **86.5502%**, evaluator-defined denominators. Low answer coverage and difficult reasoning constrain generality.
- LCB/SciCode/GDPval/APEX/TB4 fields null, not zeros. Route summary **16.8165 output tokens/s /0.8344s first chunk**, not universal local-GPU speed or free-lane throughput.

**Epoch raw independent alternate condition:**[4]

- Exact **`qwen3.5-4b_none` OTIS Mock AIME2024–2025 55.8333%**, SE **6.1623 percentage points**, run August28,2026. This is the explicitly `_none` condition on mock AIME, not official AIME or the thinking-enabled AA run. Original CSV `mean_score` used; metadata's “restricted use” label does not supersede the actual Apache license.

**IDP independent document suites**, exact4B-labelled profile:[5]

- **OlmOCRv1.0 75.4**, **OmniDocBenchv1.5 overall67.6**, **text edit0.292↓ /CDM71.5↑ /TEDS60.4↑ /reading-order0.106↓**.
- **IDPCorev1.0 overall74.5**, **KIE86.0 /OCR64.7 /Table76.7 /VQA72.4**; aggregate72.5 is that document benchmark mix, not universal model accuracy.
- Different harness/task metrics explain why this is not merged with publisher OmniDoc86.2. The page's inconsistent release date is flagged above; no byte-identical checkpoint audit claimed.

**Limits:** No verified exact SWE, Claw/MCP, TB4, native audio/media generation or≥98% million-token retention found. Guessed Vals exact profile404. Dense model, multimodal deployment, thinking setting and sampling budget remain explicit rather than borrowing larger Qwen siblings' results.

### Normalized scores (1–100)

- **Tool use: 43/100.** Independent TB2.1 25.84%/banking6.80% and qualified BFCL50.3% show lighter tooling, with much weaker hard execution than headline τ² alone suggests.[1][3]
- **Reasoning: 59/100.** Independent GPQA77.07% and LCR63% are useful for size, capped by HLE9.92%, CritPt0 and limited factual coverage; `_none` mock math stays separate.[3][4]
- **Context window: 76/100.** Verified native262,144 tier; documented optional YaRN extension is not default million-token service or measured high retention.[1][2]
- **Multimodal: 78/100.** Native vision/frame-video plus independent MMMU-Pro65.38% and document suites support broad small-model perception; limited hard visual reasoning and no audio/media output cap breadth.[1][3][5]
- **Coding: 53/100.** Publisher LCB55.8%/OJ24.1% and independent terminal25.84% support smaller programming tasks, with no verified full-repository SWE result.[1][3]
- **Cost efficiency: 100/100.** Exact current primary hosted input/output0 tariff, qualified by account/tier limits and unverified privacy guarantees; not inferred merely from free weights.[7][8]
- **Overall Score: 62/100.** Half-up quality mean `(43 + 59 + 76 + 78 + 53) / 5 = 61.8`; cost excluded. Fit: compact/free hosted or local multimodal assistance with modest deep-agent reliability.

### Fresh search trail and sources

- Bing RSS [`"Qwen3.5-4B" benchmark`](https://www.bing.com/search?format=rss&q=%22Qwen3.5-4B%22+benchmark): unrelated business-register pages.
- Google [`"Qwen3.5-4B" benchmark`](https://www.google.com/search?q=%22Qwen3.5-4B%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Qwen3.5-4B" benchmark`](https://duckduckgo.com/html/?q=%22Qwen3.5-4B%22+benchmark): useful original HF, IDP and serving leads; fine-tuned/quantized derivative results not transferred. Exact primary column/config, independent records and SiliconFlow's embedded model/SKU pricing inspected; no peer findings used.

[1]: https://huggingface.co/Qwen/Qwen3.5-4B/raw/main/README.md
[2]: https://huggingface.co/Qwen/Qwen3.5-4B/raw/main/config.json
[3]: https://artificialanalysis.ai/models/qwen3-5-4b
[4]: https://epoch.ai/data/benchmark_data.zip
[5]: https://www.idp-leaderboard.org/models/qwen3-5-4b/
[6]: https://models.dev/api.json
[7]: https://www.siliconflow.cn/pricing
[8]: https://docs.siliconflow.cn/cn/userguide/quickstart

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent exact-checkpoint public-web research; dense configuration, native versus extended context, mode/metric distinctions and primary zero-tariff SKU evidence. Ratings are normalized interpretations.
