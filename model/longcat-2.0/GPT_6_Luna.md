# LongCat 2.0 — findings by GPT-6 Luna

- Source: Meituan/LongCat-2.0
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's open-weight, text-only mixture-of-experts model, aimed at coding, long-horizon tasks, and agent workflows. Its released weights are MIT-licensed.
- **Provider / access:** Official weights: Hugging Face `meituan-longcat/LongCat-2.0` and ModelScope `meituan-longcat/LongCat-2.0`, deployable with vLLM/SGLang. Hosted API: LongCat API Platform model `LongCat-2.0` and OpenRouter `meituan/longcat-2.0`, both using chat-completions-compatible access. OpenCode Go currently documents `opencode-go/longcat-2.0`; no current OpenCode Zen route was verified.
- **Release / knowledge:** The official checkpoint's benchmark-chart filename is dated 2026-06-29; BenchmarkList lists the OpenRouter model release as 2026-07-20. No exact training-data cutoff was found.
- **IDs:** Official checkpoint `meituan-longcat/LongCat-2.0`; hosted LongCat API `LongCat-2.0`; OpenRouter `meituan/longcat-2.0`.
- **Context window:** 1,048,576 tokens on OpenRouter; its listed maximum completion is 262,144 tokens. Meituan says the model was trained on 1M-context data; no separate official API context spec for LongCat-2.0 was retrieved.
- **Modalities:** Text in and text out; no image/audio/video input or non-text output verified.
- **Pricing (as of 2026-11-01):** Meituan lists standard LongCat-2.0 API rates of $0.75/$2.95 per 1M uncached input/output tokens and a limited-time discounted rate of $0.30/$1.20, with cached input at $0.006. OpenRouter lists the same discounted rates. Open weights are MIT-licensed, but local inference has substantial hardware costs.
- **Architecture:** 1.6T total parameters, approximately 48B active per token, mixture-of-experts, LongCat Sparse Attention, and 135B N-gram Embedding parameters, per Meituan's model card.

### Raw benchmarks found

Meituan's official model card says its results are in-house under a unified harness unless a result is marked `*`; its table does not identify whether the reported runs used thinking or non-thinking mode. The chat template supports both modes, but the benchmark figures below are therefore labeled **mode unspecified**, not assigned to either mode.

**Official Meituan results (mode unspecified; reported in the official model card):**

- Coding/agent: Terminal-Bench 2.1 **70.8%**; SWE-bench Pro **59.5%**; SWE-bench Multilingual **77.3%**.
- Agentic/search: FORTE **73.2%**; BrowseComp **79.9%**; RWSearch **78.8%**.
- General/reasoning: IFEval **90.0%**; IMO-AnswerBench **81.8%**; GPQA Diamond **88.9%**.

**Independent leaderboard/catalog results (reported by BenchmarkList; harness/version is not fully specified on the profile):** HLE **33.7%**, SciCode **36.3%**, AA-LCR **65.0%**, and Tau3-Banking **13.2%**. BenchmarkList also lists Terminal-Bench 2.1 at 70.8%, matching Meituan's report; this is not counted as a second independent measurement. Its ObviousBench profile separates “None” (**68.8%**) and “Reasoning” (**95.8%**) settings, sampled 2026-10-29; these are reported separately and not blended into the vendor's mode-unspecified results.

No public 1M-context retrieval-accuracy result was verified. The 1M context score below is therefore based on the advertised window, not an assumption of accurate retrieval throughout it. No exact-model Claw-Eval score was found.

### Normalized scores (1–100)

- **Tool use: 80/100.** The official results include FORTE 73.2%, BrowseComp 79.9%, and RWSearch 78.8%; the independent Tau3-Banking result is lower at 13.2%, so agentic performance is strong but not uniformly frontier-level. [Meituan model card](https://github.com/meituan-longcat/LongCat-2.0); [BenchmarkList](https://benchmarklist.com/models/meituan-longcat-2.0/).
- **Reasoning: 82/100.** Official GPQA Diamond is 88.9% and IMO-AnswerBench 81.8%, while independent HLE is 33.7%; these support strong, but not top-tier across all difficult reasoning sets, performance. [Meituan model card](https://github.com/meituan-longcat/LongCat-2.0); [BenchmarkList](https://benchmarklist.com/models/meituan-longcat-2.0/).
- **Context window: 95/100.** OpenRouter lists 1,048,576 tokens and Meituan describes 1M-context training, placing the specified window in the ≥1M tier; no verified ≥512K retrieval-accuracy result supports a higher score. [OpenRouter model record](https://openrouter.ai/api/v1/models); [Meituan model card](https://github.com/meituan-longcat/LongCat-2.0).
- **Multimodal: 15/100.** The verified interface is text-in/text-out only. [OpenRouter model record](https://openrouter.ai/api/v1/models).
- **Coding: 76/100.** Terminal-Bench 2.1 is 70.8%, SWE-bench Pro 59.5%, and SWE-bench Multilingual 77.3%; SciCode is a more modest 36.3%. [Meituan model card](https://github.com/meituan-longcat/LongCat-2.0); [BenchmarkList](https://benchmarklist.com/models/meituan-longcat-2.0/).
- **Cost efficiency: 94/100.** The limited-time $0.30/$1.20 per 1M input/output API rate is inexpensive relative to frontier APIs, but is not free and the higher standard rate is $0.75/$2.95. [Meituan LongCat-2.0 pricing](https://longcat.ai/platform/docs/pricing/long-cat-2.0).
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions: (80 + 82 + 95 + 15 + 76) / 5 = 69.6 → 70. Cost efficiency is excluded from Overall per the scoring methodology. Best suited to text-only coding and agent tasks where its long context and open weights are useful; it is not a multimodal model.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Independent public-web research using three separate searches, Meituan's first-party model card and pricing documentation, and an independent benchmark catalog. Benchmark figures remain tied to their reported model, setup, and mode disclosure; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Meituan LongCat-2.0 model card and official benchmark table](https://github.com/meituan-longcat/LongCat-2.0)
  - [Meituan LongCat-2.0 pricing](https://longcat.ai/platform/docs/pricing/long-cat-2.0)
  - [LongCat API model-list endpoint documentation](https://longcat.ai/platform/docs/api/models)
  - [LongCat API model details endpoint documentation](https://longcat.ai/platform/docs/api/model)
  - [OpenRouter model record and provider access](https://openrouter.ai/meituan/longcat-2.0)
  - [BenchmarkList LongCat 2.0 results](https://benchmarklist.com/models/meituan-longcat-2.0/)
  - [Hugging Face checkpoint](https://huggingface.co/meituan-longcat/LongCat-2.0)

---
