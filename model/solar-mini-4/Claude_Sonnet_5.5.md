# Solar Mini 4 — findings by Claude Sonnet 5.5
- Source: Upstage (`solar-mini4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Solar Mini 4 (reasoning is optional and off by default per Upstage; Artificial Analysis evaluated the reasoning variant). No Free-tier variant verified.
- **Short description:** Upstage's compact, proprietary, text-only mixture-of-experts model for high-volume agent workloads (tool calling, structured output, retrieval), with Korean, English and Japanese support. Upstage positions it as the cheaper sibling of Solar Pro 4. Aliases: `solar-mini4` (rolling) and `solar-mini4-260922` (pinned snapshot).
- **Provider / access:** Upstage Console API `solar-mini4` (base_url `https://api.upstage.ai/v1`, OpenAI-compatible Chat Completions); OpenRouter `upstage/solar-mini4`; Solar Chat; on-premises (quantized model fits a single H100 80GB per Upstage blog). The Responses API is not verified. No OpenCode Zen listing verified in my searches.
- **Release / knowledge:** 2026-09-22 (Artificial Analysis; snapshot ID `-260922`; OpenRouter lists 2026-09-23). Knowledge cutoff: February 2026 (Artificial Analysis).
- **IDs:** `upstage/solar-mini4` (OpenRouter), `solar-mini4` and `solar-mini4-260922` (Upstage API). No Free ID verified on OpenCode Zen. One secondary blog (juliangoldie.com) claims free use inside Hermes Agent, which I could not verify with a primary source.
- **Context window:** Conflicting. Artificial Analysis and Upstage marketing say 1M. Upstage API docs say 512K, and OpenRouter lists 524,288 (524K) with max output about 131K. Scored on the verified 512K–524K API limit. The 1M claim is not confirmed by API docs.
- **Modalities:** Text in, text out. Reasoning yes (effort levels low/medium/high/xhigh/max enable it; none/minimal keep it off). Tool calling yes, structured outputs yes, prompt caching yes. No image, audio, video or PDF input (Artificial Analysis).
- **Pricing (as of 2026-10-09):** Standard $0.10 in / $0.40 out / $0.01 cached per 1M (Artificial Analysis; AlphaSignal). Launch promo of 50% off through 2026-10-22 gives $0.05 / $0.20 / $0.005 (OpenRouter, Upstage launch offer). Paid; no free tier verified. Privacy: OpenRouter notes that ZDR via BYOK requires a ZDR-enabled Upstage org.
- **Architecture:** Proprietary 35B-total / 3B-active MoE; weights not public (Artificial Analysis, Upstage).
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found** (Artificial Analysis reports Terminal-Bench 4.0 only, which is a different version: **1%**)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1072 Elo** (Artificial Analysis, v2.1 via AlphaSignal)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. Other agentic results from Artificial Analysis: AutomationBench-AA **22%**, AA-Briefcase **872 Elo**.

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found (HLE is in the Artificial Analysis Index, but I found no published value)
- LCR / MLCR: **83%** AA-LCR v1.1 (Artificial Analysis); MLCR no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **24 (v4.3.2) / #36 of 181 comparable models on the AA page** (a third-party aggregator, cloudprice.net, shows #129, so rank is inconsistent across sources); BenchLM no verified public score found
- Omniscience Accuracy / Hallucination Rate: **18% / 36%**. The 36% is derived from the reported 64% non-hallucination rate. The model abstains on about half of questions (AlphaSignal citing Artificial Analysis).

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **48%** (Artificial Analysis via AlphaSignal)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE no verified public score found. Aggregator lmmarketcap.com shows a coding composite of 40/100 (rank #255 of 448, its own methodology v3, not an official score).

Long context:
- AA-LCR v1.1 **83%** (matches MiniMax-M3 and GPT-6 Luna max per Artificial Analysis); input length used is not stated. No MRCR / RULER / GraphWalks reported.

### Normalized scores (1-100)
- **Tool use: 30/100.** GDPval-AA 1072 Elo is far below the ~1750+ frontier. Terminal-Bench 4.0 is 1% and AutomationBench-AA is 22%. There is no Tau3, TB2.1 or OSWorld evidence, and the TB 4.0 result is not mapped directly to TB2.1. Capped by near-zero terminal and weak agentic results.
- **Reasoning: 55/100.** AA Index 24 is well below the 60+ frontier, though it is the top of the 3B-active class. AA-LCR is a strong 83%. There are no GPQA, HLE or CritPt values. Omniscience accuracy is only 18%, and the good non-hallucination rate mostly reflects abstention. Capped by low index, no verified GPQA/HLE, and verbosity (370M tokens on the Index).
- **Context window: 87/100.** Tier mapping is 500K–1M (85–94), based on the verified 512K–524K API limit. It does not reach the 1M tier because 1M is only advertised and not confirmed by API docs. No ≥98% retrieval evidence at 512K+. AA-LCR 83% supports a score in the upper-middle of the tier.
- **Multimodal: 15/100.** Text in, text out only; no image, audio, video or PDF input.
- **Coding: 45/100.** SciCode 48% is near but below the 55%+ frontier. Terminal-Bench 4.0 is 1%, and there are no SWE-bench, LiveCodeBench or DeepSWE values. Capped by absent agentic-coding evidence.
- **Cost efficiency: 96/100.** At standard $0.10/$0.40 this sits just below the ~$0.10/$0.20 anchor (97–99); the promo $0.05/$0.20 would score about 98. Caveat: heavy reasoning verbosity makes real cost per task higher (Artificial Analysis: about $0.37 per Index task, 48% cache hit rate). Cost is not counted in Overall.
- **Overall Score: 46.4/100.** (30 + 55 + 87 + 15 + 45) / 5 = 46.4. Best fit: cheap long-context document analysis and retrieval-style work, especially in Korean, English and Japanese, plus bounded scientific-code generation. Avoid autonomous terminal and agentic coding, and keep a fallback for its frequent abstentions.
---
## Signature
- Provided by: **Claude Sonnet 5.5 (anthropic/claude-sonnet-5-5)** — 2026-10-09
- Method: Public internet research (Artificial Analysis model page, AlphaSignal's write-up of Artificial Analysis results, Upstage launch blog, OpenRouter/directory listings, third-party aggregators); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.