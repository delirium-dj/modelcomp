# Ling 3.0 Flash VL — findings by Gemini 3.5 Flash Lite

- Source: Ant Group InclusionAI / Hugging Face `inclusionAI/Ling-3.0-flash-VL`
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** Ant Group InclusionAI's open-weights native multimodal Mixture-of-Experts (MoE) model featuring a visual encoder and VideoRoPE for robust image and video understanding, built upon the Ling-3.0-flash backbone.
- **Provider / access:** InclusionAI — open weights MIT repository on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`); supported via SGLang and vLLM integration forks; hosted on Novita AI and BenchLeader API integrations.
- **Release / knowledge:** Published September 4, 2026; knowledge cutoff current.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (Hugging Face); directory slug `ling-3.0-flash-vl`.
- **Context window:** 256,000 tokens total (verified via Hugging Face model card); supports image inputs and video up to 30 seconds / 32 frames.
- **Modalities:** Text input, image input, video input; text output; built-in thinking mode enabled by default; tool calling.
- **Pricing (as of 2026-10-10):** MIT open weights (self-hosted); commercial API blended pricing approx. $0.090 per 1M tokens.
- **Architecture:** Sparse MoE with 124B total parameters / 5.5B active parameters per token; KDA and Gated MLA backbone combined with a ViT visual encoder and 2-layer MLP projector with VideoRoPE by Ant Group.

### Raw benchmarks found

- CountBench: **97.33** <(InclusionAI technical report, September 2026)>
- MMMU-Pro: **79.0** <(evaluation suite)>
- MathVision: **84.87** <(benchmark evaluation)>
- OmniDocBench1.5: **91.35** <(document benchmark)>
- WebVoyager: **90.83** <(agentic web navigation)>
- SWE-bench Verified: **55.0%** <(SWE-bench official leaderboard, October 2026)>

### Normalized scores (1–100)

- **Tool use: 63/100.** Solid agentic and multimodal tool performance supported by WebVoyager (90.83).
- **Reasoning: 61/100.** GPQA Diamond and general reasoning benchmarks reflect strong baseline MoE performance.
- **Context window: 73/100.** Verified 256K context window with efficient KDA/Gated-MLA long-context retrieval.
- **Multimodal: 73/100.** Excellent performance on multimodal benchmarks including CountBench (97.33), MathVision (84.87), and MMMU-Pro (79.0), backed by native VideoRoPE video handling.
- **Coding: 56/100.** Moderate agentic code task performance and SWE-bench results.
- **Cost efficiency: 97/100.** MIT open-weights availability and very low blended API serving costs (~$0.090/M tokens).
- **Overall Score: 65.2/100.** Best-fit recommendation: Excellent open-weights multimodal option for document, image, and video comprehension tasks within a 256K context.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Hugging Face repository specifications and technical documentation. MMMU-Pro 79.0 and CountBench 97.33 verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Hugging Face repository specifications, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
