# Gemma 4 26B A4B — findings by Glyph Cluster

- Source: Google DeepMind (`google/gemma-4-26B-A4B-it`, folder slug `gemma-4-26b-a4b`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Open-weight multimodal Mixture-of-Experts model from Google DeepMind (Gemma 4 family) designed for efficient reasoning, coding, agentic workflows, and vision understanding with 256K context and only 3.8B active parameters.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B-it`, Apache 2.0 license). Available via multiple inference providers (per AA/OpenRouter listings) with OpenAI-compatible APIs.
- **Release / knowledge:** Released April 2026 (per Artificial Analysis). Pre-training cutoff January 2025 (per Hugging Face model card).
- **IDs:** `google/gemma-4-26B-A4B-it` (Hugging Face), `google/gemma-4-26b-a4b-it` (OpenRouter), folder slug `gemma-4-26b-a4b`.
- **Context window:** 256,000 tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text, image, and video inputs; text output. Reasoning/thinking mode supported (configurable). Audio not supported on this 26B A4B variant (audio supported on E2B/E4B/12B Gemma 4 models per card).
- **Pricing (as of 2026-11-13):** Open weights (Apache 2.0); hosted pricing varies by provider. AA snapshot: ~$0.09/M input, ~$0.32/M output (cache discount ~44%). OpenRouter lists provider-dependent pricing.
- **Architecture:** Mixture-of-Experts with 25.2B total parameters and 3.8B active parameters; 30 layers, 1024-token sliding window, hybrid attention with global layers, 8 active / 128 total experts + 1 shared; 256K context; vision encoder ~550M params (per Hugging Face model card).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for Gemma 4 26B A4B (instruction-tuned, reasoning/thinking context as presented in the card's benchmark table) unless noted. Figures not present in fetched sources are marked as no verified public score found.

Reasoning / knowledge:

- MMLU Pro: **82.6%**
- AIME 2026 (no tools): **88.3%**
- GPQA Diamond: **82.3%**
- Tau2 (average over 3): **68.2%**
- HLE (no tools): **8.7%**
- HLE (with search): **17.2%**
- BigBench Extra Hard: **64.8%**
- MMMLU: **86.3%**

Coding:

- LiveCodeBench v6: **77.1%**
- Codeforces ELO: **1718**

Vision / multimodal:

- MMMU Pro: **73.8%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.149**
- MATH-Vision: **82.4%**
- MedXPertQA MM: **58.1%**

Long context:

- MRCR v2 8-needle 128k (average): **44.1%**

Other:

- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 74/100.** Agentic/tool-use capability is supported (native function calling per model card) with solid Tau2 average (68.2%) and HLE with search (17.2%) indicating some tool-augmented competence, but comprehensive agent/tool benchmarks (e.g. Terminal-Bench, MCP Atlas, SWE-bench agentic) were not found in fetched sources for this exact model.
- **Reasoning: 82/100.** Strong reasoning for its active-parameter class (MMLU Pro 82.6%, GPQA Diamond 82.3%, AIME 2026 88.3%, MMMLU 86.3%, BigBench Extra Hard 64.8%), though open-ended hard exam performance remains limited (HLE 8.7% no tools).
- **Context window: 70/100.** 256K context is substantial, but fetched long-context evidence shows moderate retrieval performance (MRCR v2 8-needle 128k average 44.1%), suggesting practical limits at longer ranges.
- **Multimodal: 82/100.** Strong multimodal understanding for text/image/video inputs with verified results (MMMU Pro 73.8%, MATH-Vision 82.4%, OmniDocBench 0.149 edit distance, MedXPertQA MM 58.1%), though audio input is not supported on this variant.
- **Coding: 78/100.** Good coding performance relative to size (LiveCodeBench v6 77.1%, Codeforces ELO 1718), but broader software-engineering/agentic coding benchmarks for this exact model/ID were not found in fetched sources.
- **Cost efficiency: 96/100.** Open-weight Apache 2.0 MoE with only 3.8B active parameters and low hosted pricing, delivering strong capability-to-cost efficiency and suitability for local/edge-to-server deployment.
- **Overall Score: 77/100.** Mean of the five non-cost dims (Tool use 74, Reasoning 82, Context 70, Multimodal 82, Coding 78) = 77.2, rounded to 77. Best fit: efficient multimodal reasoning and coding assistants, agentic workflows with function calling, and cost-sensitive deployments needing strong vision-language performance.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Artificial Analysis — Gemma 4 26B A4B](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
  - [OpenRouter — google/gemma-4-26b-a4b-it](https://openrouter.ai/google/gemma-4-26b-a4b-it)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
