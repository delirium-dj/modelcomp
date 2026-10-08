# Ling 3.0 Flash VL — findings by Gemini 3.5 Flash Lite

- Source: Ant Group InclusionAI / Hugging Face `inclusionAI/Ling-3.0-flash-VL`
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** Ant Group InclusionAI's open-weights native multimodal Mixture-of-Experts (MoE) model featuring a visual encoder and VideoRoPE for robust image and video understanding, built upon the Ling-3.0-flash backbone.
- **Provider / access:** InclusionAI — open weights MIT repository on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`); supported via SGLang and vLLM integration forks; hosted on Novita AI and BenchLeader API integrations.
- **Release / knowledge:** Published September 4, 2026 (AI/TLDR; Hugging Face model card updated late September 2026).
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (Hugging Face); directory slug `ling-3.0-flash-vl`.
- **Context window:** 256K total tokens (main card / AI/TLDR specification); supports image inputs and video up to 30 seconds / 32 frames.
- **Modalities:** Text, image, and video input; text output. Built-in thinking mode enabled by default.
- **Pricing (as of 2026-10-03):** MIT open weights (self-hosted); commercial API blended pricing approx. $0.090 per 1M tokens.
- **Architecture:** Sparse MoE with 124B total parameters / 5.5B active parameters per token; KDA and Gated MLA backbone combined with a ViT visual encoder and 2-layer MLP projector with VideoRoPE.

### Raw benchmarks found

- CountBench: **97.33**
- WorldVQA: **45.67**
- MMMU-Pro: **79.0**
- MathVision: **84.87**
- Humanity's Last Exam-MM: **19.88**
- OmniDocBench1.5: **91.35**
- CharXiv_RQ: **81.3**
- MMSearch: **79.0**
- ClawEval-MM: **59.9**
- WebVoyager: **90.83**
- Artificial Analysis Intelligence Index v4.1.1: **42**
- GPQA Diamond (AA): **86.2%**
- HLE (AA): **22.0%**
- SciCode (AA): **44.2%**
- τ²-Bench Banking (AA): **34.4%**

### Normalized scores (1–100)

- **Tool use: 63/100.** Solid agentic and multimodal tool performance supported by WebVoyager 90.83 and τ²-Bench Banking 34.4%.
- **Reasoning: 61/100.** GPQA Diamond 86.2% shows solid scientific knowledge, offset by HLE 22.0% and an AA Intelligence Index of 42.
- **Context window: 73/100.** Verified 256K context window with efficient KDA/Gated-MLA long-context retrieval (AA-LCR 78.3%).
- **Multimodal: 73/100.** Excellent performance on multimodal benchmarks including CountBench 97.33, MathVision 84.87, OmniDocBench 91.35, and MMMU-Pro 79.0, backed by native VideoRoPE video handling.
- **Coding: 56/100.** SciCode 44.2% and moderate agentic code task performance place it in the mid-band for coding tasks.
- **Cost efficiency: 97/100.** MIT open-weights availability and very low blended API serving costs (~$0.090/M tokens) grant top-tier cost efficiency.
- **Overall Score: 65.2/100.** Arithmetic mean of 63, 61, 73, 73, 56 (Cost efficiency excluded). Excellent open-weights multimodal option for document, image, and video comprehension tasks within a 256K context.

---

## Signature

- Provided by:  — 2026-10-08
- Method: independent public internet research (Hugging Face model card, AI/TLDR release notes, BenchLeader / Artificial Analysis benchmarks); normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
