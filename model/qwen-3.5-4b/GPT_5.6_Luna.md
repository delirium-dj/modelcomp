# Qwen3.5-4B — findings by GPT 5.6 Luna

- Source: Qwen (`Qwen/Qwen3.5-4B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** A compact open-weight multimodal Qwen3.5 model for local deployment, reasoning, coding, and visual-agent workflows.
- **Provider / access:** Hugging Face weights; the official card documents Transformers, vLLM, SGLang, and Alibaba Cloud Model Studio-compatible APIs.
- **Release / knowledge:** Exact release date and knowledge cutoff were not stated in the verified sources.
- **IDs:** `Qwen/Qwen3.5-4B`; the card documents `Qwen3.5-4B` for DashScope-compatible API usage.
- **Context window:** 262,144 tokens native; extensible to 1,010,000 with YaRN.
- **Modalities:** Image-text-to-text with documented image and video inputs, text output, reasoning mode, tool calls, Qwen-Agent, and Qwen Code integration.
- **Pricing (as of 2026-10-23):** No verified hosted per-token price found for the exact model. Apache-2.0 open weights enable local deployment.
- **Architecture:** 4B dense causal language model with vision encoder, gated DeltaNet plus gated-attention hybrid, 32 layers, Apache-2.0.

### Raw benchmarks found

> Figures below are from Qwen's official Qwen3.5-4B model card and are for the exact checkpoint.

Agent / tool use:

- BFCL-V4: **50.3%** (official Qwen model card)
- TAU2-Bench: **79.9%** (official Qwen model card)
- VITA-Bench: **22.0%** (official Qwen model card)
- DeepPlanning: **17.6%** (official Qwen model card)

Reasoning / knowledge:

- MMLU-Pro: **79.1%** (official Qwen model card)
- GPQA Diamond: **76.2%** (official Qwen model card)
- SuperGPQA: **52.9%** (official Qwen model card)
- AA-LCR: **57.0%** (official Qwen model card)
- LongBench v2: **50.0%** (official Qwen model card)

Coding:

- LiveCodeBench v6: **55.8%** (official Qwen model card)
- OJBench: **24.1%** (official Qwen model card)

Long context:

- AA-LCR: **57.0%** and LongBench v2: **50.0%** (official Qwen model card)
- Native context: **262,144 tokens**; YaRN extension is documented but not treated as an independently measured score.

Multimodal:

- MMMU: **77.6%**; MMMU-Pro: **66.3%** (official Qwen model card)
- MathVista mini: **85.1%**; RealWorldQA: **79.5%** (official Qwen model card)
- VideoMME with subtitles / without subtitles: **83.5% / 76.9%** (official Qwen model card)
- OSWorld-Verified: **35.6%**; AndroidWorld: **58.6%** (official Qwen model card)

### Normalized scores (1–100)

- **Tool use: 68/100.** TAU2-Bench at 79.9% is useful, but BFCL-V4 at 50.3% and DeepPlanning at 17.6% cap reliability for complex agents.
- **Reasoning: 77/100.** MMLU-Pro 79.1% and GPQA Diamond 76.2% are solid for a 4B model; SuperGPQA 52.9% and long-context reasoning cap the score.
- **Context window: 72/100.** The 262K native window is strong for a compact model, but AA-LCR 57.0% and LongBench v2 50.0% show limited retrieval robustness.
- **Multimodal: 77/100.** Broad image and video support with MMMU 77.6%, MathVista 85.1%, and VideoMME 83.5% is valuable; OSWorld-Verified at 35.6% caps visual-agent performance.
- **Coding: 68/100.** LiveCodeBench v6 at 55.8% and OJBench at 24.1% indicate useful but limited coding depth.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and a 4B footprint make local deployment unusually accessible, although hardware cost was not quantified.
- **Overall Score: 72.4/100.** A strong compact multimodal local model for everyday visual and agent tasks, but not a substitute for frontier coding or deep reasoning models.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Independent checks of the official Qwen Hugging Face model card, Qwen's model organization, Qwen's model blog, and exact-name web search. Scores are normalized interpretations, not official vendor scores.
