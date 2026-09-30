# GPT-OSS 120B — findings by Muse Spark 1.3

- Source: OpenAI/GPT-OSS 120B, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B (open-weight reasoning model)
- **Short description:** OpenAI's flagship open-weight reasoning model under Apache 2.0; MoE design delivering near-o4-mini reasoning at low cost. Top use case is self-hosted or cheap-hosted agentic/coding and STEM reasoning. Not a variant of the GPT-5 proprietary line; sibling of the smaller GPT-OSS 20B.
- **Provider / access:** Open weights (`openai/gpt-oss-120b` on Hugging Face); served via third-party Chat Completions-compatible endpoints (e.g. DeepInfra `openai/gpt-oss-120b`, Fireworks, Groq, Bedrock). Harmony response format required. No verified OpenCode Zen `opencode/<id>` Free-tier mapping found as of 2026-09-24.
- **Release / knowledge:** 2025-08-05 release; knowledge cutoff undisclosed (training data undisclosed)
- **IDs:** `openai/gpt-oss-120b` (Hugging Face); no Free ID exists on Zen as far as verified — scored on cheapest verified hosted pricing, self-host $0 possible
- **Context window:** 128K total tokens (131,072 per DeepInfra API reference); sliding local attention window with learned sinks — verified via OpenAI model card (arXiv:2508.10925) and NVIDIA NIM card
- **Modalities:** Text in / text out only (trained on mostly-English text-only STEM/coding/knowledge data); adjustable reasoning effort (low/medium/high) with full chain-of-thought; native tool calls (function calling, browsing, exec-tool) and structured outputs; no image/audio/video input
- **Pricing (as of 2026-09-24):** Open weights (Apache 2.0, self-host marginal $0 on a single 80GB GPU via MXFP4); cheapest verified hosted routes ~$0.04 in / $0.18 out per 1M (Geodd) and ~$0.037 in / $0.17 out (DeepInfra); mid routes ~$0.15 in / $0.60 out (Fireworks, Bedrock, Groq)
- **Architecture:** ~117B total params MoE, ~5.1B active per token (top-4 of 128 experts), 36 layers, SwiGLU + grouped-query attention with RoPE; BF16 with MXFP4-quantized MoE weights; Apache 2.0 open weights

### Raw benchmarks found

Agent / tool use:

- Tau-Bench Retail (official model card, high reasoning): **67.8%** (OpenAI gpt-oss model card, Aug 2025; medium 62.0%, low 49.4%)
- Tau-Bench Airline (official model card, high reasoning): **49.2%** (OpenAI gpt-oss model card, Aug 2025)
- Tau2-Bench (τ²-bench, third-party harness): **65.8%** (BenchLM gpt-oss-120b page, Sep 2026)
- Terminal-Bench 2.1: **no verified public score found** (closest proxy, different harness: terminalBenchHard **23.5%**, BenchLM, Sep 2026, provisional)
- Tau3-Banking / Tau2-Bench (AA harness): **no verified public AA-Tau3 score found** (τ² 65.8% above is BenchLM harness, not AA)
- GDPval-AA: **803 Elo** (BenchLM gpt-oss-120b page, Sep 2026; companion GDPval-AA rate 15.1%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **80.1%** no-tools high reasoning (official OpenAI model card, Aug 2025; with-tools 80.9%; medium 73.1%, low 67.1%); third-party AA-GPQA Diamond **78.2%** (BenchLM, Sep 2026)
- HLE: **14.9%** no-tools high (official model card; with-tools 19.0%; medium 8.6%, low 5.2%); third-party AA-HLE **19.6%** (BenchLM, Sep 2026)
- LCR / MLCR: AA-LCR **51.0%** (BenchLM, Sep 2026); MRCR same-harness score no verified public score found
- CritPt: **1.1%** (BenchLM, Sep 2026)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **24.1%**; BenchLM overall **49.26/100, rank #137 of 411** (Sep 2026)
- Omniscience Accuracy / Hallucination Rate: **21.8% / 90.8%** (BenchLM AA-Omniscience, Sep 2026)
- AIME 2025 (math): **92.5%** no-tools high / **97.9%** with-tools (official model card); AA-AIME 2025 **93.4%** (BenchLM)
- MMLU: **90.0%** high (official model card); AA MMLU-Pro **80.8%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: Verified **62.4%** high reasoning (official model card; medium 52.6%, low 47.9%); SWE-Pro **no verified public score found**
- LiveCodeBench: **87.8%** (Artificial Analysis via BenchLM / pricepertoken leaderboard, Sep 2026)
- SciCode / AA-SciCode: **38.9%** (BenchLM, Sep 2026)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: AA Coding Index **30.4%** (BenchLM); Aider Polyglot **44.4%** high (official model card); Codeforces Elo **~2622** (official model-card figure, high); React Native Evals **71.6%** (BenchLM)

Long context:

- RULER (DeepInfra blog, 2026-04, vs-window table): **52.3 @256K / 46.7 @512K / 22.3 @1M** — retrieval collapses beyond the native 128K window; no verified 128K-in-window RULER figure found, so long-context retrieval beyond spec is weak

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau Retail 67.8% (high) plus Tau2 65.8% show strong function-calling for an open model; capped by terminalBenchHard 23.5% and GDPval Elo 803.
- **Reasoning: 72/100.** GPQA 80.1% plus elite AIME 92.5–97.9% and MMLU 90.0% show strong math/science; capped by HLE under 20% and CritPt 1.1%.
- **Context window: 55/100.** 128K native window sits mid-tier (100K–200K band); capped by RULER collapse beyond the window (52.3 @256K down to 22.3 @1M).
- **Multimodal: 15/100.** Text in/out only per OpenAI (text-only training data); no image, audio, video, or PDF input.
- **Coding: 70/100.** LiveCodeBench 87.8% is excellent and SWE-Verified 62.4% is solid for open weights; capped by SciCode 38.9% and no verified SWE-Pro score.
- **Cost efficiency: 98/100.** Apache 2.0 open weights self-hostable at marginal $0 on one 80GB GPU; cheapest verified hosted routes ~$0.04/$0.18 per 1M.
- **Overall Score: 56/100.** Mean of the five quality dims (68 + 72 + 55 + 15 + 70) / 5 = 56.0; best fit as a near-free self-hosted reasoning/coding workhorse where text-only and 128K suffice.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24 UTC
- Method: public internet research (OpenAI model card arXiv:2508.10925, Hugging Face, NVIDIA NIM/NGC, DeepInfra blog, BenchLM, Artificial Analysis via aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
