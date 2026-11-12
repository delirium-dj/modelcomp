# LongCat-2.5-Preview — findings by GPT 6 Sol

- Source: Meituan LongCat (`LongCat-2.5-Preview`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview.
- **Short description:** Meituan's API-only preview for long-context, image-aware coding and tool use. This is a **distinct, named 2.5 preview route**, not the open-weight LongCat-2.0 checkpoint or an unannounced final LongCat 2.5 ([Meituan change log](https://longcat.chat/platform/docs/change-log)).
- **Provider / access:** First-party `LongCat-2.5-Preview` on Meituan's OpenAI-compatible `https://api.longcat.chat/openai/v1` and Anthropic-compatible `https://api.longcat.chat/anthropic/v1`; Responses also documented ([API overview](https://longcat.chat/platform/docs/api-docs), [retrieve-model example](https://longcat.ai/platform/docs/api/model)). Vercel Gateway calls it `meituan/longcat-2.5-preview`. An old `opencode/longcat-2.5-preview-free` tier was promotional and marked **deprecated** in the [models.dev record](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/longcat-2.5-preview-free.toml), not a separately trained model or guaranteed current free API.
- **Release / knowledge:** Announced **September 25, 2026** ([vendor change log](https://longcat.chat/platform/docs/change-log)); no verified knowledge cutoff.
- **IDs:** Vendor `LongCat-2.5-Preview`, gateway `meituan/longcat-2.5-preview`; no verified public 2.5 weight repo or general-availability `LongCat-2.5` checkpoint.
- **Context window:** Vendor's [parameter specification](https://longcat.chat/platform/docs/api/model-params): **1,048,576 combined input + output tokens**, **262,144 max generated tokens** at the direct API. [Vercel Gateway](https://vercel.com/ai-gateway/models/longcat-2.5-preview) advertises a **different hosted max output of 131,072**; it is a host cap, not a separate checkpoint. No verified near-cap retrieval measurement.
- **Modalities:** Vendor explicitly announces **image understanding** in addition to text input, and text output with native tool calling and a configurable `thinking` mode. Do **not** infer native video/audio from generic third-party multimodal descriptions: the exact first-party change log confirms image, not a video benchmark ([Meituan](https://longcat.chat/platform/docs/change-log)).
- **Pricing (as of 2026-11-01):** Direct Meituan [limited-time rate](https://longcat.chat/platform/docs/pricing/longcat-2.5): **$0.30 uncached input, $0.006 cached input and $1.20 output per million tokens**. A different gateway or OpenCode non-free route can charge more. A formerly free Zen tier is not equivalent to current paid API pricing, nor a permanent entitlement.
- **Architecture:** Meituan [launch statement](https://x.com/Meituan_LongCat/status/2103488918788411728) claims **1.6T total / ~48B active**; no 2.5 weights or architecture paper independently inspected. Do not borrow LongCat-2.0 benchmark numbers just because the parameter counts resemble it.

### Raw benchmarks found

- **Agent/coding, independent small suite:** [AI Coding Daily exact-preview evaluation **46.65/70 points**, rank 44 at the reported snapshot](https://aicodingdaily.com/model/longcat-2-5-preview) in OpenCode, with Laravel code quality **16.98/20**, React/TS **16.67/20**, bug finding **2.4/10** and four-project edge testing **10.6/20**. It is a **model + harness + rubric** aggregate, not a 66.6% SWE-bench pass rate. No validated preview-specific SWE-bench/Terminal-Bench 2.1 rate located.
- **Reasoning, independent hard-math evaluation:** [MathBench **144/400 full marks** across original short-answer and Lean problems, published composite **26.8/100** (rank 42/88)](https://mathbench.ai/en/models/longcat-2.5-preview), with thinking on. Its **26.8 is a weighted ability score**, not the raw 36% accuracy (144/400); on the hardest v1.5 subset it reports **2.6/28.3**. Benchmark conditions include long, tool-heavy attempts; not GPQA or HLE.
- **Tool use in math:** MathBench's separate **26.3 ability-axis score** for mathematical search/simulation and **24.7 long-horizon axis** come from its own weighted rubric ([MathBench](https://mathbench.ai/en/models/longcat-2.5-preview)); not a function-call schema accuracy measurement.
- **Context/vision:** 1M combined capacity and image parsing are vendor/provider capabilities, but **no independently verified near-1M retrieval or preview-specific public MMMU-Pro score** found. Do not transfer LongCat-2.0's reasoning, SWE or vision numbers to this preview.

### Normalized scores (1–100)

- **Tool use: 66/100.** Native tool mode and 46.65/70 coding-agent rubric, capped by sparse independent tool evidence.
- **Reasoning: 61/100.** MathBench 144/400 on a difficult original set; no exact-preview general science/knowledge evaluation.
- **Context window: 86/100.** 1M combined advertised and high direct output cap, but no near-limit retrieval verification.
- **Multimodal: 60/100.** Verified image input and text output; no verified exact-preview vision accuracy or native audio/video.
- **Coding: 65/100.** Independent web/code-project rubric with strong generated-code scores and weak bug-finding score; no SWE-bench replication.
- **Cost efficiency: 82/100.** Low promotional direct API tariff and deep cache discount, offset by impermanent rates and retired free access.
- **Overall Score: 68/100.** Half-up mean (66 + 61 + 86 + 60 + 65) / 5 = 67.6; measured preview with attractive API economics but limited standardized evidence.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh vendor-ID, independent-score and access/price searches; first-party preview specs compared with independent Coding Daily and MathBench tests. Older LongCat and deprecated free-tier data excluded from checkpoint scores. Scores are normalized judgments.
- Reference URLs:
  - [Meituan September 25 exact-preview change log](https://longcat.chat/platform/docs/change-log)
  - [Meituan exact-model parameters, combined context and output limit](https://longcat.chat/platform/docs/api/model-params)
  - [Meituan limited-time direct API price table](https://longcat.chat/platform/docs/pricing/longcat-2.5)
  - [AI Coding Daily independent preview coding evaluation](https://aicodingdaily.com/model/longcat-2-5-preview)
  - [MathBench independent exact-preview 400-problem results](https://mathbench.ai/en/models/longcat-2.5-preview)
  - [Vercel Gateway provider-specific output cap](https://vercel.com/ai-gateway/models/longcat-2.5-preview)
- Future sources: add a new file next to this one using the same headings.
