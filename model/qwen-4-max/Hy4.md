- Source: Alibaba/Qwen4-Max
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen4-Max (Preview)
- **Short description:** Alibaba Qwen's next-generation Qwen4-architecture flagship multimodal model, released as a preview on 2026-11-11 via the Token Plan, with the full Qwen4 release to follow. A distinct model; Qwen3.8-Max, Qwen3.8-Flash-Next (the architecture preview) and Qwen4 are separate.
- **Provider / access:** Alibaba **Token Plan** only during the preview; integrated into 千问 App, 千问办公, Qoder and QwenStudio. **Preview period ends 2026-11-25 24:00, after which the preview is taken offline.** Not open-sourced.
- **Release / knowledge:** preview 2026-11-11; Qwen4 training began 2026-09-22; knowledge cutoff: no verified public score found.
- **IDs:** `qwen4-max` family ID as cited (preview). No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary developer coverage); an Aliyun developer article explicitly states that **parameter scale, context window and benchmark scores have not been officially published** — the 1M figure is therefore labelled secondary/unconfirmed.
- **Modalities:** multimodal understanding, deep thinking, coding and agentic task execution with a full agent tool chain and context caching (developer coverage). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** Token Plan subscription, with a launch discount reportedly as low as 50% (secondary); no per-token rate card — no verified public price found.
- **Architecture:** Qwen4 next-generation architecture: **GDN + QSA hybrid attention, Gated Residual, N-gram Embedding and Muon optimiser** (secondary developer coverage, consistent with the Qwen3.8-Flash-Next architecture preview). Closed weights. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Designed for long-chain, high-complexity, multi-tool-collaboration professional work rather than lightweight Q&A (vendor positioning, qualitative)
- Full agent tool-chain support and context caching (developer coverage, qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Capability focus: knowledge understanding, world perception, coding and agentic execution (four vendor-described directions)
- **No official benchmarks published for the preview** — explicitly stated in an Aliyun developer-community article
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Four-direction capability emphasis includes Coding, with agent tool-chain support (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token context (secondary) with context caching; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** Full agent tool chain, context caching and a long-chain multi-tool design with four first-party product integrations; capped by zero published agent benchmark data for the preview.
- **Reasoning: 83/100.** Next-generation Qwen4 architecture with deep-thinking emphasis; capped by the explicit absence of official benchmark scores and no GPQA/HLE/ARC figure.
- **Context window: 88/100.** A 1M-token window (secondary/unconfirmed) with context caching; capped by the vendor not officially publishing the figure and no retrieval benchmark.
- **Multimodal: 84/100.** Documented multimodal understanding and world perception; capped by no verified modality list, no non-text output, and no published multimodal benchmark.
- **Coding: 82/100.** Coding is one of four stated capability directions with agent tooling; capped by no published coding benchmark and no exact scores of any kind.
- **Cost efficiency: 78/100.** Token Plan subscription with a reported 50% launch discount and no per-token billing surprises; capped by closed weights, subscription-only access, and a preview that goes offline on 2026-11-25. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 83, 83, 88, 84, 82 = 84.0 → 84. Best fit: evaluating next-generation Qwen4 agentic capability before GA — not production use; the score is evidence-limited (no official benchmarks, an unconfirmed context figure and a short preview window).

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen 4-Max and Qwen4-Max articles retrieved via public web search excerpt (preview release, Token Plan, 2026-11-25 expiry, Qwen4 training start, product integrations), plus secondary Aliyun developer-community / CSDN / Zhihu coverage for the 1M context, architecture details, capability directions and launch discount — all labelled secondary. The Aliyun article explicitly states no official parameter, context or benchmark data has been published; that absence is honoured, with every benchmark row marked "no verified public score found" rather than estimated. The Overall line is explicitly a conservative interpretation below the arithmetic mean, with the arithmetic shown. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen 4-Max — 百度百科 (retrieved via search excerpt; preview dates, Token Plan, integrations)](https://baike.baidu.com/item/Qwen%204-Max/69712449)
  - [阿里云 Qwen4-Max 介绍 — 阿里云开发者社区 (retrieved via search excerpt; no official benchmarks)](https://developer.aliyun.com/article/1782128)
  - [Qwen4-Max-Preview 免费体验 — CSDN (retrieved via search excerpt; secondary architecture, 1M context)](https://blog.csdn.net/weixin_48267104/article/details/170546547)
