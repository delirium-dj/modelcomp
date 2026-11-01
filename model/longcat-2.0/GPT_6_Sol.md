# LongCat-2.0 — findings by GPT 6 Sol

- Source: Meituan LongCat (`meituan-longcat/LongCat-2.0`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0.
- **Short description:** Meituan's MIT-licensed, trillion-scale sparse text MoE with native long context, built for coding and search agents. This June final 2.0 release is distinct from both its early preview and API-only `LongCat-2.5-Preview`; its INT8 weights are a precision variant, not another trained model ([official card](https://huggingface.co/meituan-longcat/LongCat-2.0), [announcement](https://longcat.ai/blog/longcat-2.0/)).
- **Provider / access:** `meituan-longcat/LongCat-2.0` weights, self-hostable through SGLang; first-party hosted `LongCat-2.0` at `https://api.longcat.chat/openai/v1` (OpenAI-compatible Chat Completions), also `meituan/longcat-2.0` via OpenRouter `https://openrouter.ai/api/v1/chat/completions` ([LongCat pricing](https://longcat.ai/platform/docs/Pricing/LongCat-2.0.html), [OpenRouter route](https://openrouter.ai/meituan/longcat-2.0)). A reported promotional `:free` tier is not a separately trained checkpoint or guaranteed available today.
- **Release / knowledge:** Meituan **2026-06-30** final announcement; gateway publication date July 20 is the provider listing, not the initial model release. No verified fixed knowledge cutoff ([Meituan](https://longcat.ai/blog/longcat-2.0/), [OpenRouter](https://openrouter.ai/meituan/longcat-2.0)).
- **IDs:** Weights `meituan-longcat/LongCat-2.0` and quantized `meituan-longcat/LongCat-2.0-INT8`; first-party API `LongCat-2.0`; OpenRouter `meituan/longcat-2.0`.
- **Context window:** Vendor **native 1,048,576 tokens**, text-only; OpenRouter catalog currently lists **1,048,756** (likely catalogue typo, not new capacity) and **262,144 maximum output**. Another [OpenClaw provider config](https://docs.openclaw.ai/providers/longcat) uses **131,072 max output** for the direct integration; caps belong to the host/integration and share the context budget ([vendor card](https://huggingface.co/meituan-longcat/LongCat-2.0), [catalog](https://openrouter.ai/api/v1/models)).
- **Modalities:** Text in/text out with reasoning and native tool calls; no verified image/audio/video input or generation for **this** 2.0 checkpoint. Later 2.5 Preview has image understanding and must not be retroactively used here ([model card](https://huggingface.co/meituan-longcat/LongCat-2.0)).
- **Pricing (as of 2026-11-01):** First-party [price sheet](https://longcat.ai/platform/docs/Pricing/LongCat-2.0.html) publishes standard **$0.75/$2.95/$0.015** and explicitly **limited-time $0.30/$1.20/$0.006** input/output/cached input per million. OpenRouter's [live route](https://openrouter.ai/meituan/longcat-2.0) shows the latter discounted rates, which may expire. MIT weights incur no token tariff but local 1.6T-scale deployment is costly.
- **Architecture:** Vendor **1.6T total / ~48B active on average**, dynamic ~33–56B, LongCat Sparse Attention, n-gram embeddings and MTP; the HF automated ~1.8T file count need not match the vendor's architectural headline ([technical announcement](https://longcat.ai/blog/longcat-2.0/), [HF weights](https://huggingface.co/meituan-longcat/LongCat-2.0)).

### Raw benchmarks found

- **Agent/tool use:** Vendor, with Claude Code harness and up-to-6h task budget, [Terminal-Bench 2.1 **70.8%**](https://longcat.ai/blog/longcat-2.0/), plus in-house FORTE **73.2%**, BrowseComp **79.9%**, RWSearch **78.8%**. Independently [Artificial Analysis TB2.1 **50.2%**, τ³ Banking **13.2%**, AutomationBench-AA **4.5%**, Terminal-Bench **4.0 0%**](https://vascend.it/en/benchmark/longcat-2-0). TB2.1's 20.6-point gap warrants substantial harness/setting caution; TB4.0 is a different suite, not directly comparable to TB2.1.
- **Reasoning:** Vendor [GPQA Diamond **88.9%**, IMO-AnswerBench **81.8%**, IFEval **90.0%**](https://huggingface.co/meituan-longcat/LongCat-2.0); independent [AA GPQA **78%**, HLE no-tools **33.7%**, CritPt **2.6%**](https://www.tokensortowers.com/us/models/longcat-2-0). Ten-point GPQA gap is unverified under matched prompts/decoding; score the weaker independent measurement seriously.
- **Coding:** Vendor [SWE-bench Pro **59.5%**, multilingual **77.3%**, TB2.1 **70.8%**](https://huggingface.co/meituan-longcat/LongCat-2.0); independent [AA SciCode **36.3%**, TB2.1 **50.2%**](https://vascend.it/en/benchmark/longcat-2-0). No independently replicated SWE-Pro under the vendor's corrected-task Claude Code harness was located.
- **Long context:** Vendor states native 1M training. Independent [AA long-context reasoning **65%**](https://vascend.it/en/benchmark/longcat-2-0) measures a different suite; the vendor card does not publish enough in its primary evaluation table to establish full-cap 1M-token retrieval accuracy.
- **Multimodal:** No verified public exact-checkpoint image/audio/video benchmark; text-only capabilities apply.

### Normalized scores (1–100)

- **Tool use: 66/100.** Vendor TB2.1 70.8 vs independent 50.2, with weak independent banking/AutomationBench.
- **Reasoning: 70/100.** Independently GPQA 78/HLE 33.7, below vendor GPQA 88.9.
- **Context window: 85/100.** Native 1M and AA-LCR 65, without independent precise near-limit retrieval.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100.** Vendor SWE-Pro 59.5 but independent SciCode 36.3 and weaker TB2.1.
- **Cost efficiency: 79/100.** Attractive discounted API and MIT weights, subject to promotional expiry and large deployment footprint.
- **Overall Score: 60/100.** Half-up mean (66 + 70 + 85 + 15 + 66) / 5 = 60.4; long-context text coding specialist with large independent/vendor gaps.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh vendor, independent-evaluation and first-party-pricing searches; kept official 2.0 and later 2.5 distinct and highlighted provider/harness-dependent scores. Scores are normalized judgments.
- Reference URLs:
  - [Meituan LongCat-2.0 official model card, benchmark table and MIT license](https://huggingface.co/meituan-longcat/LongCat-2.0)
  - [Meituan technical release and evaluation settings](https://longcat.ai/blog/longcat-2.0/)
  - [LongCat direct API standard and limited-time tariff](https://longcat.ai/platform/docs/Pricing/LongCat-2.0.html)
  - [Artificial Analysis independent results, checkpoint-labeled digest](https://vascend.it/en/benchmark/longcat-2-0)
  - [Artificial Analysis independent historical index and reason/coding results](https://www.tokensortowers.com/us/models/longcat-2-0)
  - [OpenRouter exact paid route, terms and provider snapshot](https://openrouter.ai/meituan/longcat-2.0)
- Future sources: add a new file next to this one using the same headings.
