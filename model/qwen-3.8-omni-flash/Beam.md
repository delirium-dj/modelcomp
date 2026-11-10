# Qwen 3.8 Omni Flash — findings by Beam

> Source: Alibaba Cloud / Qwen Team (`qwen/qwen-3.8-omni-flash`). $0.15/$0.47 per 1M ($0.016 cached). 1M context, 131,072 max output. Multimodal in (text/image/audio/video), text out. Proprietary, API-only (no open weights).
> Date: 2026-11-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal model processing text, image, audio, and video streams in a 1M context window for high-throughput productivity and spatial audio reasoning. Released 2026-09-18.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.8-omni-flash`), Qianwen AI Platform. OpenAI-compatible Chat Completions + Responses API. Separate streaming sibling `qwen3.8-omni-flash-realtime` (WebSocket/WebRTC).
- **Release / knowledge:** Released 2026-09-18. Knowledge cutoff not separately published.
- **IDs:** `qwen/qwen-3.8-omni-flash` (Alibaba Model Studio). No open weights.
- **Context window:** 1,000,000 total; 131,072 max output; 991,808 max input (non-thinking), 983,616 (thinking). Verified via official Alibaba docs.
- **Modalities:** Text, image, audio, video in; text out. Function calling, thinking (adjustable reasoning effort), web search, context caching, multichannel/spatial audio.
- **Pricing (as of 2026-11-10):** $0.15/$0.47 per 1M (Singapore); cached input $0.016/1M. China (Beijing) $0.113/$0.382. No free tier (free quota in Singapore only).
- **Architecture:** Proprietary (no published parameter count); native end-to-end omnimodal.

### Raw benchmarks found

Source: Qwen official launch post (2026-09-18), aggregated by benchlm.ai (19 benchmark rows). Independent cross-checks: kompozy.io review, buildfastwithai.com review, greatcommissionbenchmark.ai, llm-stats.com.

Agent / tool use:
- CoWorkBench: **75.3%**
- AndroidWorld: **87.1%**
- WildClawBench-MM: **71.0**
- UniClawBench: **69.6**

Reasoning / knowledge:
- GPQA: **91%**
- GPQA Diamond: **91.0%**
- HLE: **36.5%**
- IFBench: **81.5%**

Coding:
- SWE-bench Pro: **63.3%**
- SWE Multilingual: **80.5%**
- NL2Repo: **48.9%**
- DeepSWE: **57.8%**
- LiveCodeBench v6: **92.6%**

Multimodal:
- Vision2Web: **62.9%**
- ERQA: **71.0%**
- LVBench: **76.9%**
- RealWorldQA: **87.7%**
- MathVision: **91.8%** (w/ Python: **96.2%**)
- CharXiv (w/o tools): **83.5%** (w/ tools: **91.4%**)
- OmniVideoBench (static): **63.4%** (Qwen Code: **67.8%**)
- StreamingBench: **80.8%**
- VoiceBench: **91.6%**
- AliMeeting DER/cpWER: **3.4 / 17.2**

Long context:
- 1M-token context window (verified). No separate MRCR/RULER curve published in this pass.

### Normalized scores (1–100)

- **Tool use: 78/100.** Anchor on CoWorkBench 75.3% and AndroidWorld 87.1% (strong agentic performance), WildClawBench-MM 71.0, UniClawBench 69.6. Caps: Qwen-run harnesses (Claude Code / OpenClaw) not independently reproducible; competitor runs use provider-specific media settings.
- **Reasoning: 82/100.** GPQA 91% / GPQA Diamond 91.0% is very strong; HLE 36.5% mid; IFBench 81.5%. Caps: HLE trails frontier (Claude Fable 5.x ~50+); no independent reproduction of GPQA row.
- **Context window: 90/100.** Native 1M tokens with 131,072 max output; verified via official docs. Caps: long-context retrieval (MRCR/RULER) not published.
- **Multimodal: 85/100.** Full omnimodal (text/image/audio/video) with strong RealWorldQA 87.7%, MathVision 91.8%, CharXiv 91.4%, VoiceBench 91.6%, StreamingBench 80.8%. Caps: text-only output; no image generation; Qwen-run harnesses.
- **Coding: 78/100.** LiveCodeBench v6 92.6% and SWE Multilingual 80.5% strong; SWE-bench Pro 63.3% mid; DeepSWE 57.8%, NL2Repo 48.9%. Caps: SWE-bench Pro trails frontier; Qwen-run evaluation.
- **Cost efficiency: 92/100.** $0.15/$0.47 per 1M (Singapore) / $0.113/$0.382 (Beijing) with $0.016 cached input — cheap for an omnimodal model. Caps: no free tier outside Singapore quota; API-only.
- **Overall Score: 83/100.** Mean of [Tool use 78 + Reasoning 82 + Context window 90 + Multimodal 85 + Coding 78] / 5 = 82.6. Best-fit: cost-efficient omnimodal agentic work (audio/video understanding, coding) at 1M context; strong on GPQA/LiveCodeBench; trails frontier on HLE and SWE-bench Pro.

---
## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: deep second-pass research (10+ independent sources): official Alibaba Cloud Model Studio docs (model page + pricing page), Qwen official launch blog, benchlm.ai aggregation (19 benchmark rows), kompozy.io review, buildfastwithai.com review, greatcommissionbenchmark.ai, llm-stats.com. Conflicting results (Qwen-run harnesses vs independent reviews) noted; benchmarks adopted from official launch post as primary source. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Model Studio — qwen3.8-omni-flash](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-omni-flash)
  - [Alibaba Cloud Model Studio — model pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)
  - [Qwen — Qwen3.8-Omni-Flash blog](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [benchlm.ai — Qwen3.8-Omni-Flash](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [kompozy.io — review](https://kompozy.io/reviews/qwen3-8-omni-flash)
  - [buildfastwithai.com — review](https://blog.buildfastwithai.com/qwen-3-8-omni-flash-review)
  - [greatcommissionbenchmark.ai — review](https://greatcommissionbenchmark.ai/insights/qwen3-8-omni-flash-review)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
