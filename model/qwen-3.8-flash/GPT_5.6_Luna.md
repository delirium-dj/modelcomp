# Qwen3.8-Flash — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8-Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba's fast reasoning and coding route for high-volume agents, with a hosted 1M context option and an open Flash-Next lineage.
- **Provider / access:** Alibaba Cloud Model Studio/QwenCloud and downstream providers; hosted ID `qwen3.8-flash`.
- **Release / knowledge:** Qwen3.8 family released in August 2026; variant-specific knowledge cutoff is not consistently published.
- **IDs:** Hosted `qwen3.8-flash`; open checkpoint `Qwen/Qwen3.8-Flash-Next`. The hosted route and open checkpoint are related but have different serving limits.
- **Context window:** Hosted Flash is advertised with approximately 1M tokens by default; the open Flash-Next checkpoint's native context is 262K and is documented as extensible toward 1M.
- **Modalities:** Text, image, and video input with text output; hosted tools/function calling and structured output are supported.
- **Pricing (as of 2026-11-02):** Approximately $0.15 input / $0.47 output per 1M tokens, with cached input around $0.016/M; regional and reasoning-token billing can differ.
- **Architecture:** Flash-Next is an open-weight experimental architecture; exact hosted serving configuration is provider-specific.

## Raw benchmarks found

The public benchmark lane is primarily the open Flash-Next checkpoint; hosted and open context limits are therefore reported separately.

- BenchLM Flash-Next profile: **55.8/100, #65 of 1,004**, with partial coverage across 39 benchmark rows.
- Toolathlon-Verified: **73.5%**; CoWorkBench: **73.9%**; JobBench: **55.7%**; Agents' Last Exam: **51.2%**.
- SWE-bench Pro: **62.5%**; DeepSWE v1.1: **58.7%**; LiveCodeBench: **91.9%**; AA Coding Index: **73.0%**.
- GPQA / GPQA-D: **91.7%**; HLE: **35.9%**; ExtractBench: **89.88%**; Vision2Web: **64.0%**; ERQA: **72.3%**.
- Hosted Qwen3.8-Flash is listed with 1M context and built-in tools; the open Flash-Next profile is listed at 262K native context. These are not merged into one retrieval claim.

## Normalized scores (1–100)

- **Tool use: 82/100.** Toolathlon 73.5%, CoWorkBench 73.9%, JobBench 55.7%, and hosted built-in tools support good agent utility with meaningful variant variance.
- **Reasoning: 84/100.** GPQA 91.7% and HLE 35.9% show strong academic reasoning with a substantial hard-evaluation gap.
- **Context window: 94/100.** Hosted Flash reaches approximately 1M, but the open Flash-Next benchmark lane is native 262K and lacks a family-wide retrieval curve.
- **Multimodal: 87/100.** Image/video input plus Vision2Web and ERQA evidence support broad understanding; output remains text.
- **Coding: 84/100.** SWE-bench Pro 62.5%, DeepSWE 58.7%, and LiveCodeBench 91.9% are useful but vary by harness and checkpoint.
- **Cost efficiency: 97/100.** $0.15/$0.47 pricing and very low cached-input cost are excellent for long-running agents.
- **Overall Score: 86.2/100.** Mean of the five quality dimensions `(82 + 84 + 94 + 87 + 84) / 5 = 86.2`; best fit is low-cost hosted agents or open deployment where the exact variant is controlled.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Alibaba model listings, Qwen's Flash-Next materials, Hugging Face, BenchLM's October 29 profile, and current price catalogues; hosted/open variant boundaries were kept explicit, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Alibaba Cloud supported Qwen models](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.8 Flash-Next announcement](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [Qwen3.8 Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [BenchLM Qwen3.8 Flash-Next profile](https://benchlm.ai/models/qwen3-8-flash-next)
