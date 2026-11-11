# ERNIE 5.5 Flash — Claude Sonnet 4.6 Research

ERNIE 5.5 Flash (Baidu, November 2026) is an efficient sparse Mixture-of-Experts (MoE) foundation model: 280B total parameters, 14B active per token, pre-trained from scratch on 33.5 trillion tokens. Architecture innovations include Heavily Compressed Attention (HCA) layers, Multi-head Latent Attention with sparse attention (MLA-DSA), and Manifold-Constrained Hyper-Connections (mHC) replacing standard residual connections. Context: 1,000,000 tokens natively via API (native training context 128K, extended to 1M via inference). Available via Baidu Qianfan and OpenRouter (`baidu/ernie-5.5-flash-preview`). Throughput: >200 tokens/second on optimised infrastructure. Pricing: ~$0.28/$1.13 per 1M in/out (Qianfan/OpenRouter; subject to promotional preview changes).

Benchmarks (verified — Baidu official evaluation, vendor-reported):
- MMLU (5-shot): 93.3 (vs DeepSeek-V4-Flash-Base 89.4, MiMo-V2.5 87.6)
- MMLU-Pro: 78.4 (vs DeepSeek-V4-Flash-Base 69.2, Hy3-preview-Base 66.9)
- MMLU-Redux: 94.1
- CMMLU (Chinese): 90.0
- LiveCodeBench: 40.1 (vs competing base checkpoints 31.9–33.5)
- HumanEval+: 82.3 (vs DeepSeek-V4-Flash-Base 69.5)
- MBPP+: 81.5
- GPQA (STEM reasoning): 60.2 (vs DeepSeek-V4-Flash 55.9)
- RepoQA (long-context code): 91.7
- LongBench-v2: 48.7

## Scores

- **Tool use: 72/100.** Full function/tool calling and structured output via standard API; agentic workflow support confirmed in Qianfan/OpenRouter integrations. No specific tau3-bench or agent-loop benchmark published; MMLU 93.3 and GPQA 60.2 indicate solid reasoning for tool decision-making. The 14B active parameter Flash architecture limits sustained deep multi-step chaining vs frontier flagships.
- **Reasoning: 78/100.** MMLU 93.3% (5-shot) is class-leading for a Flash-tier MoE at this price point. MMLU-Pro 78.4%, GPQA 60.2%, LongBench-v2 48.7%. All vendor-reported — applying standard discount for self-reported benchmarks, but the margins over competitors are substantial.
- **Context window: 92/100.** 1M token context via API. Tier: 1M = 92 points. Native training context is 128K (extended to 1M via inference architecture innovations HCA + MLA-DSA); practical quality at the extreme 1M boundary is not independently verified.
- **Multimodal: 15/100.** The base ERNIE-5.5-Flash release targets text and code. The broader ERNIE 5.5 Flash Preview rollout on Qianfan includes agentic multimodal capabilities (game dev, 3D modelling, video pre-visualisation pipelines), but no image/audio/video input is confirmed for the standard API endpoint at the time of research. Scoring at text-only baseline; upgrade to 60+ if multimodal input is confirmed in final release.
- **Coding: 72/100.** HumanEval+ 82.3%, MBPP+ 81.5%, LiveCodeBench 40.1%, RepoQA 91.7% — solid across code generation, fill-in-the-middle, and long-context code retrieval. LiveCodeBench 40.1 is below frontier coding leaders (>60) but competitive for a Flash-tier MoE. RepoQA 91.7 is especially strong.
- **Cost efficiency: 85/100.** ~$0.28/$1.13 per 1M in/out is affordable for a 280B-parameter 1M-context model at >200 tok/s. Flash-tier economics with frontier-adjacent MMLU scores is a strong value proposition. Promotional preview pricing may lower costs further.
- **Overall Score: 66/100.** Mean of Tool use (72) + Reasoning (78) + Context (92) + Multimodal (15) + Coding (72) = 329 / 5 = 65.8, rounded to 66. Best positioned for high-throughput text and code pipelines requiring 1M context at flash-tier cost; multimodal absence currently caps the overall score. If multimodal input is confirmed in production, re-evaluate Multimodal to ~62 and Overall to ~71.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
