# Gemma 4 26B A4B — findings by GPT-6 Luna

- Source: Google DeepMind/Gemma 4 26B A4B IT
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's open-weight instruction model with a sparse MoE architecture, designed for efficient reasoning, coding, and visual understanding. A4B denotes approximately 4B active parameters rather than a separate product tier.
- **Provider / access:** Hugging Face and Kaggle weights (`google/gemma-4-26B-A4B-it`); deployable locally or through hosting providers.
- **Release / knowledge:** Gemma 4 released July 2026; exact knowledge cutoff not stated.
- **IDs:** `google/gemma-4-26B-A4B-it` (instruction-tuned checkpoint); base model `google/gemma-4-26B-A4B`.
- **Context window:** 256,000 tokens.
- **Modalities:** Text and image input, text output; video-frame understanding and function calling documented. Audio is not supported on 26B A4B (audio is listed for E2B, E4B, and 12B Unified).
- **Pricing (as of 2026-10-28):** Open weights; no canonical per-token API price. Self-hosted inference costs depend on hardware and quantization.
- **Architecture:** MoE, 25.2B total parameters / 3.8B active; 30 layers, 128 routed experts with 8 active plus 1 shared, 550M vision encoder. Technical report states Apache 2.0 licensing.

### Raw benchmarks found

Google's official model card reports instruction-tuned results; the technical report provides additional reasoning and long-context evaluations.

Agent / tool use:

- τ2-bench Retail: **85.5%** in Google DeepMind overview; model card's three-run average reports **68.2%** on its broader Tau2 setup (distinct evaluation configurations).
- Tau2 Airline: **76.0**; Tau2 Telecom: **43.0** (technical report).
- Terminal Bench Hard: **14** (technical report; benchmark is distinct from standard Terminal-Bench).

Reasoning / knowledge:

- GPQA Diamond: **82.3%**.
- AIME 2026, no tools: **88.3%**.
- MMLU Pro: **82.6%**; HLE no tools: **8.7%**.
- BigBench Extra Hard: **64.8%**.

Coding:

- LiveCodeBench v6: **77.1%**.
- Codeforces Elo: **1718**.
- SciCode: **40.0%**.

Long context:

- MRCR v2 8-needle at 128K: **44.1%**.
- RULER: **89.8** at 128K; **97.3** at 32K.
- GraphWalks F1: **72.6** below 128K.
- Context capacity is 256K; the longest verified retrieval results are reported at 128K, not at full capacity.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ2 Retail reaches 85.5%, while the distinct model-card Tau2 average is 68.2%; mixed configurations and modest Terminal Bench Hard cap the score.
- **Reasoning: 85/100.** GPQA 82.3% and AIME 88.3% are strong; HLE 8.7% indicates a material gap on difficult open-ended problems.
- **Context window: 75/100.** 256K capacity is useful, but MRCR at 128K is 44.1%; retrieval evidence does not support a top-tier score.
- **Multimodal: 80/100.** Image and video-frame understanding are documented with strong MMMU Pro 73.8%; no audio or multimodal output is available on this size.
- **Coding: 85/100.** LiveCodeBench 77.1% and Codeforces Elo 1718 are strong; SciCode 40 and lack of modern repository-agent benchmarks cap the score.
- **Cost efficiency: 100/100.** Open weights permit zero model-license cost; hardware and serving costs remain deployment-dependent.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions; efficient open-weight choice for math, coding, and vision, with caution on HLE and long-context retrieval.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; official model card and technical-report configurations are kept distinct where scores differ. Normalized scores are independent interpretations.
- Sources: [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4); [Google DeepMind Gemma 4 overview](https://deepmind.google/models/gemma/gemma-4/); [Gemma 4 technical report](https://arxiv.org/html/2607.02770); [Hugging Face instruction checkpoint](https://huggingface.co/google/gemma-4-26B-A4B-it).
