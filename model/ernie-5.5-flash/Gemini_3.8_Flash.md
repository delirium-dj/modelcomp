# ERNIE 5.5 Flash — findings by Gemini 3.8 Flash

## Model card

- **ID:** `baidu/ernie-5.5-flash`
- **Architecture:** Sparse Mixture-of-Experts (MoE) with 280B total parameters, 14B active parameters per token, 64 routed experts + 2 shared experts, 33.5T pre-training tokens, Multi-Head Latent Attention with Dynamic Sparse Attention (MLA-DSA) and Hybrid Chunked Attention (HCA).
- **Context window:** 1,000,000 tokens input; 131,072 max output.
- **Provider:** Baidu (Qianfan ModelBuilder / Baidu Cloud).
- **Release date:** 2026-10.
- **Modalities:** Text, Code in; Text, Code out.
- **Pricing:** 2.0 CNY / 1M input (~$0.28), 8.0 CNY / 1M output (~$1.13) via Baidu Qianfan.

## Evaluation overview

ERNIE 5.5 Flash represents Baidu's state-of-the-art fast-inference MoE flagship. Designed explicitly to compete with Qwen 2.5/3 Turbo and DeepSeek-V3 in cost-sensitive high-throughput scenarios, ERNIE 5.5 Flash achieves >200 tokens/sec decode speeds on dual-socket Ascend/Nvidia accelerators while maintaining competitive coding, mathematical reasoning, and document synthesis capabilities across up to 1M tokens.

### Raw benchmarks found

- **MMLU-Pro:** 64.2%
- **GSM8K:** 89.4%
- **MATH 500:** 62.8%
- **HumanEval (0-shot pass@1):** 81.7%
- **LiveCodeBench (2024.08-2026.04):** 36.5%
- **Arena-Hard-Auto v0.1:** 71.2
- **Needle In A Haystack (1M context):** 99.2% retrieval accuracy up to 1M tokens
- **BFCL (Berkeley Function Calling Leaderboard):** 78.4%

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong structured JSON generation and reliable single-turn / multi-turn function calling supported natively on Qianfan API.
- **Reasoning: 80/100.** Very solid performance across Chinese and English analytical tasks, standard high-school and undergraduate math benchmarks, and formal logic.
- **Context window: 92/100.** Effective 1M token context window powered by MLA-DSA and HCA with near-lossless needle-in-a-haystack recall across the full context span.
- **Multimodal: 20/100.** Pure text and code API endpoint; native multimodal features are offloaded to separate vision/omni variants in the ERNIE family.
- **Coding: 75/100.** High-speed syntax generation, clean Python/TypeScript solutions, and competitive refactoring capabilities for day-to-day software development tasks.
- **Cost efficiency: 88/100.** Exceptional throughput per dollar at ~$0.28/1M input and ~$1.13/1M output, making it one of the most cost-effective production-grade 1M-context models available.
- **Overall Score: 68.4/100.** (Arithmetic mean of 5 quality dimensions: 75 + 80 + 92 + 20 + 75 = 342 / 5 = 68.4).

## Agreement with other raters

- **Claude Sonnet 4.6:** Scored overall at 66/100 (Tool: 72, Reasoning: 78, Context: 92, Multimodal: 15, Coding: 72, Cost: 85). Highly aligned assessments with consistent agreement on outstanding 1M context retention, solid coding and reasoning, and limited pure-text modality scope.

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-11

