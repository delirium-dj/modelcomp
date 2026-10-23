# Qwen3.5-2B — findings by GPT 5.6 Luna

- Source: Qwen (`Qwen/Qwen3.5-2B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** A compact open-weight multimodal Qwen3.5 model intended for prototyping, local deployment, and lightweight visual-language tasks.
- **Provider / access:** Hugging Face weights; the official card documents Transformers, vLLM, SGLang, and local OpenAI-compatible serving.
- **Release / knowledge:** Exact release date and knowledge cutoff were not stated in the verified sources.
- **IDs:** `Qwen/Qwen3.5-2B`
- **Context window:** 262,144 tokens natively (official Qwen model card).
- **Modalities:** Image-text-to-text; the card also documents image and video input examples, text output, optional thinking mode, and tool calls.
- **Pricing (as of 2026-10-23):** No verified hosted per-token price for the exact model. Apache-2.0 open weights support local use.
- **Architecture:** 2B causal language model with vision encoder, gated DeltaNet/gated-attention hybrid, Apache-2.0.

### Raw benchmarks found

> Figures are for the exact Qwen3.5-2B checkpoint and come from the official Qwen Hugging Face model card unless otherwise noted. Qwen reports thinking / non-thinking pairs for vision results.

Agent / tool use:

- BFCL-V4: **43.6%**
- TAU2-Bench: **48.8%**

Reasoning / knowledge:

- MMLU-Pro: **66.5%** in thinking mode
- GPQA: **51.6%** in thinking mode
- SuperGPQA: **37.5%** in thinking mode
- AA-LCR: **25.6%**
- LongBench v2: **38.7%**

Coding:

- no verified public coding benchmark score found for the exact checkpoint in the reviewed official card.

Long context:

- AA-LCR: **25.6%**; LongBench v2: **38.7%**
- Native context: **262,144 tokens**

Multimodal:

- MMMU: **64.2% / 64.2%**; MMMU-Pro: **50.3% / 47.7%**
- MathVista mini: **76.7% / 73.9%**; RealWorldQA: **74.5% / 71.2%**
- VideoMME with subtitles: **75.6%**; without subtitles: **69.0%**
- ScreenSpot Pro: **54.5%** in the reported non-thinking run

### Normalized scores (1–100)

- **Tool use: 46/100.** BFCL-V4 43.6% and TAU2-Bench 48.8% show basic tool competence, but not reliable complex agency.
- **Reasoning: 57/100.** MMLU-Pro 66.5% and GPQA 51.6% are useful compact-model results; SuperGPQA 37.5% caps depth.
- **Context window: 52/100.** The native 262K window is large, but AA-LCR 25.6% and LongBench v2 38.7% cap practical retrieval quality.
- **Multimodal: 64/100.** The model supports image and video inputs with mid-range visual scores, but the small parameter budget limits difficult visual reasoning.
- **Coding: 40/100.** No exact public coding score was verified; the score is a conservative capability estimate for a 2B general-purpose checkpoint, not a reported benchmark.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and a 2B footprint make local deployment highly accessible.
- **Overall Score: 51.8/100.** Best suited to low-cost local multimodal prototyping rather than demanding coding or reasoning workloads.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Official Qwen Hugging Face model card and exact-name web checks; scores are normalized interpretations, not official vendor scores.
