# GLM 5.3 Free — findings by Laguna S 2.1

- Source: Z.ai / GLM 5.3 Free (`z-ai/glm-5.3-flash:free`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.ai's GLM 5.3 Free is the free-tier variant of the GLM 5.3 Flash model, a 1M-token context reasoning model optimized for cost-efficient performance. It shares the same base weights as GLM 5.3 Flash but is offered at no cost for basic usage tiers. Reasoning is mandatory. Flag: the exact model "glm-5.3-free" was not found on OpenRouter; this report uses `z-ai/glm-5.3-flash` data as the closest available match, as the Free tier likely shares the same model weights with a $0 price point.
- **Provider / access:** Available via Z.ai platform (free tier) and OpenRouter (`https://openrouter.ai/z-ai/glm-5.3-flash`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released August 2026. Knowledge cutoff not disclosed (null).
- **IDs:** `z-ai/glm-5.3-flash` (OpenRouter); `glm-5.3-flash:free` (Z.ai free tier)
- **Context window:** 1,048,576 tokens total (1M, verified via OpenRouter API and CloudPrice). Max output: 943,717 tokens.
- **Modalities:** text, image, and video input; text output. Reasoning is mandatory (isReasoning: mandatory, default effort: max). Function calling and JSON mode supported. Vision is supported.
- **Pricing (as of August 2026):** Free tier — $0/1M input and $0/1M output for basic usage. Paid tier at $0.15/1M input, $0.50/1M output via OpenRouter (varies by provider from $0.11/$0.35 to $0.188/$0.625). Cache read: $0.03/1M. [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3-flash), [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- **Architecture:** Proprietary. Parameters not disclosed (null). Sparse Mixture-of-Experts (MoE) architecture. Multimodal (text/image/video → text) pipeline.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Intelligence Index: **41.8** (rank #25/571, 95.8th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- Artificial Analysis Coding Index: **71.5** (rank #22/215, 90.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- OpenRouter Agentic Index: **50.9** [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3-flash)
- Terminal-Bench Hard: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- LCR / MLCR: no verified public score found
- IFEval: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- OpenRouter Design Arena (coding): **Elo 1287** (rank #17/55, 49.4% win rate) [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3-flash)
- OpenRouter Design Arena (website): **Elo 1277** (rank #25, 48.4% win rate) [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3-flash)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (rank #30/537, 94.6th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- HLE (Humanity's Last Exam): **39.9%** (rank #43/545, 92.3rd percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- LCR / MLCR: **80.0%** (rank #49/490, 90.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- SciCode: **51.6%** (rank #49/544, 91.2th percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- AA-Omniscience: no verified public score found
- AA-Omniscience Hallucination Rate: no verified public score found
- MMLU-Pro: no verified public score found

Coding:

- Artificial Analysis Coding Index: **71.5** (rank #22/215, 90.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- OpenRouter Coding Index: **71.5** [(source: OpenRouter API)](https://openrouter.ai/z-ai/glm-5.3-flash)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **51.6%** (rank #49/544, 91.2th percentile) [(source: CloudPrice)](https://cloudprice.net/models/zhipu-glm-5-3-flash)
- Vibe Code Bench: no verified public score found

Long context:

- Context window: 1,048,576 tokens (1M, verified via OpenRouter API and CloudPrice). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 60/100.** The AI index of 41.8 (lower is better, rank #25/571) is solid, and the coding index of 71.5 (lower is better, rank #22/215) is strong. However, no specific agentic benchmarks (Terminal-Bench, Tau2-Bench, GDPval, LCR, IFEval) are publicly available. Design Arena coding Elo 1287 (rank #17/55, 49.4% win rate) and website Elo 1277 (rank #25, 48.4% win rate) suggest average agentic performance. The agentic index of 50.9 (from OpenRouter) is moderate. Capped by lack of specific Terminal-Bench and Tau2-Bench scores.
- **Reasoning: 85/100.** GPQA Diamond at 91.2% (rank #30/537) exceeds the frontier threshold (90%+). HLE at 39.9% is just below the frontier threshold (40%+). LCR at 80.0% (rank #49/490) is solid but below the frontier threshold (95%+). SciCode at 51.6% (rank #49/544) is near the frontier threshold (55%). The AI index of 41.8 (lower is better, rank #25/571) supports strong reasoning efficiency. Capped by HLE just below 40%+ and LCR below 95%.
- **Context window: 100/100.** 1,048,576 tokens (1M) exceeds the 1M+ tier threshold (95-100). Max output of 943,717 tokens is among the largest output windows available.
- **Multimodal: 85/100.** Supports text, image, and video input with text output. Per model-comparison methodology, +video/PDF in = 75-90. While output is text-only (no audio/video output), the comprehensive input support (text+image+video) places this at the upper range of the multimodal scale. Capped by lack of audio input.
- **Coding: 77/100.** Coding Index of 71.5 (lower is better, rank #22/215) is strong, approaching but not reaching the frontier threshold (rank #1 for frontier). SciCode at 51.6% (rank #49/544) is near frontier (55%+). Design Arena coding Elo 1287 (rank #17/55) supports strong coding performance. No SWE-bench, LiveCodeBench, or DeepSWE data available. Capped by lack of SWE-bench scores and SciCode just below 55%+.
- **Cost efficiency: 100/100.** The Free tier provides $0/1M input and $0/1M output, which is the maximum cost efficiency score per model-comparison methodology ($0 = 100). Paid tier pricing ($0.15-$0.188/$0.50-$0.625) is also extremely low.
- **Overall Score: 81/100.** Mean of five quality dims: (60+85+100+85+77)/5 = 407/5 = 81.4 → 81. GLM 5.3 Free is a high-performance reasoning model with near-frontier GPQA (91.2%), strong HLE (39.9%), and excellent cost efficiency (free tier at $0/1M). Its 1M context, multimodal input support (text/image/video), and strong SciCode (51.6%) make it ideal for developer workflows. However, it lacks specific SWE-bench, Terminal-Bench, and LiveCodeBench scores, and the agentic Design Arena win rates are around 49%. Best suited for cost-free code assistance and general reasoning tasks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API, CloudPrice model page, and Unorouter.com. Verified benchmark scores include AI/Coding Indices, GPQA, HLE, LCR, SciCode, and Design Arena Elo ratings. The AI index (41.8) and coding index (71.5) are from Artificial Analysis composite scoring. Note: the exact model "glm-5.3-free" was not found on OpenRouter or AA; `z-ai/glm-5.3-flash` (and `glm-5.3-flash:free` on Z.ai platform) was used as the closest available match, with "Free" referring to the free-tier variant of the flash model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Free.md`, using the same headings.
