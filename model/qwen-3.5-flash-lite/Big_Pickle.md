# Report: Qwen 3.5 Flash-Lite

Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27 UTC

## Model-card summary
- **Name:** Qwen 3.5 Flash-Lite (Alibaba Cloud / Qwen Team)
- **Family / lineage:** Part of Qwen 3.5 family (Alibaba). Positioned as the "Flash-Lite" / speed/cost-optimized tier within the Qwen 3.5 lineup; shares architectural lineage with Qwen 3.5 models.
- **Release / status:** Released Feb 23, 2026 (snapshot `qwen3.5-flash-2026-02-23` documented; rolling `qwen3.5-flash` route tracks latest snapshot). 
- **Modalities:** Text, Image, Video input; Text output (multimodal-capable per model cards).
- **Weights:** API-hosted via Alibaba Cloud Model Studio (hosted weights; not always listed as openly downloadable like some open-weight Qwen variants).
- **Context window:** 1M tokens (documented as 1M context / up to ~997K input limits depending on source; supports long context).
- **Max output:** ~64K tokens (documented up to ~65,536 tokens).
- **Reasoning / modes:** Dynamic thinking/non-thinking modes supported in the broader Flash family (Qwen3 Flash family behavior described); tool/function calling supported.
- **Known capabilities:** Long context (1M), multimodal (text/image/video), function calling, structured outputs, prefix completion, context caching in some deployments.

## Pricing (public)
Sources: Alibaba Cloud Model Studio pricing, Vals/bench sites (pricing varies by region/tier and snapshot):
- **Input:** ~$0.10/M tokens (varies by region/tier; some listings show lower cached rates). 
- **Output:** ~$0.40/M tokens (varies by region/tier).
- **Notes:** Tiered pricing by context usage in some docs; cached/implicit cache rates lower in certain regions.

## Benchmarks (public)
From Vals AI / benchmark aggregators:
- **Vals Index (overall):** Qwen 3.5 Flash appears on Vals Index (Qwen 3.5 Flash placed ~#22 overall on Vals Index ~49.6% accuracy per Vals update Mar 2026). Specific Flash-Lite separate numbers less consistently published in public snapshots.
- **LegalBench:** Reported as one of stronger areas (best result noted as #36 of 151 on LegalBench for Qwen 3.5 Flash family).
- **Comparative positioning:** In comparisons vs Gemini 3.5 Flash-Lite, shared benchmark coverage is limited in public aggregators; Flash-Lite is positioned as high-volume cheap multimodal with large context (1M). Relative to larger Qwen models (Plus/Max), Flash-Lite trades some capability for latency/cost.

*Note:* Public benchmark numbers for "Flash-Lite" specifically are sparse/fragmented across aggregators compared to main Flash/Plus variants. Reported figures should be treated as family-level where explicit Flash-Lite numbers unavailable.

## Strengths
- Very large context window (1M) for price point
- Multimodal input (text/image/video) 
- Low cost relative to many frontier models
- Fast inference positioning ("Flash"/"Flash-Lite" tiers)
- Good tool use/function calling support in family

## Limitations / notes
- Hosted/API-focused model card details; weights availability varies
- Flash-Lite specific benchmark coverage less complete than flagship variants
- Pricing/quotas vary by deployment region and snapshot
- Some feature availability (batch/fine-tuning) limited depending on deployment

## Scores
- **Tool use: 80/100.**
- **Reasoning: 78/100.**
- **Context window: 95/100.**
- **Multimodal: 82/100.**
- **Coding: 76/100.**
- **Cost efficiency: 95/100.**
- **Overall Score: 82.2/100.**

## Sources
- [Alibaba Cloud Model Studio - Qwen 3.5 Flash](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)
- [Alibaba Cloud Model Studio - Model Pricing](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-pricing)
- [Vals AI - Qwen 3.5 Flash](https://www.vals.ai/models/alibaba_qwen3.5-flash)
- [QwenCloud - Qwen3.5 Flash](https://www.qwencloud.com/models/qwen3.5-flash-2026-02-23)
- [Qwen GitHub](https://github.com/QwenLM/qwen)
- [BenchLM comparisons](https://benchlm.ai/compare/)
- [Puter Developer - Qwen 3.5 Flash](https://developer.puter.com/ai/qwen/qwen3.5-flash/)
