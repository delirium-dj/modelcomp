# Gemma 4 26B A4B - findings by GPT 5.6 Luna

- Source: Google (`google/gemma-4-26B-A4B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weight multimodal Gemma 4 mixture-of-experts model for reasoning, coding, vision, and agentic workflows.
- **Provider / access:** Hugging Face weights; the official card documents Transformers, vLLM, SGLang, and Docker Model Runner usage.
- **Release / knowledge:** The card cites the Gemma 4 Technical Report (arXiv:2607.02770); training-data cutoff is January 2025.
- **IDs:** `google/gemma-4-26B-A4B` and instruction-tuned `google/gemma-4-26B-A4B-it`
- **Context window:** 256K tokens.
- **Modalities:** Text and image input, text output, configurable thinking, native function calling, and multimodal document/chart/OCR capabilities.
- **Pricing (as of 2026-10-23):** No verified hosted per-token price found for the exact checkpoint. Apache-2.0 open weights support local deployment.
- **Architecture:** 25.2B total / 3.8B active MoE parameters, 128 experts plus one shared expert, Apache-2.0.

### Raw benchmarks found

> All figures are for Gemma 4 26B A4B instruction-tuned evaluation in Google's official Hugging Face model card.

Agent / tool use:

- Tau2 average over 3: **68.2%**
- HLE with search: **17.2%**

Reasoning / knowledge:

- MMLU Pro: **82.6%**
- GPQA Diamond: **82.3%**
- AIME 2026, no tools: **88.3%**
- HLE, no tools: **8.7%**
- BigBench Extra Hard: **64.8%**
- MMMLU: **86.3%**

Coding:

- LiveCodeBench v6: **77.1%**
- Codeforces Elo: **1718**

Long context:

- MRCR v2 8-needle 128K average: **44.1%**
- Maximum context: **256K tokens**

Multimodal:

- MMMU Pro: **73.8%**
- MATH-Vision: **82.4%**
- MedXpertQA MM: **58.1%**
- OmniDocBench 1.5 average edit distance: **0.149** (lower is better)

### Normalized scores (1-100)

- **Tool use: 72/100.** Tau2 68.2% is useful evidence for structured tool workflows, but no broad public terminal or tool-call suite was reported.
- **Reasoning: 80/100.** MMLU Pro 82.6%, GPQA 82.3%, and AIME 88.3% are strong; HLE without tools at 8.7% caps frontier reliability.
- **Context window: 72/100.** The 256K window is in the 200K-500K tier, while MRCR 44.1% shows retrieval quality is materially below the window limit.
- **Multimodal: 82/100.** Image understanding is well supported, with MMMU Pro 73.8%, MATH-Vision 82.4%, and document evaluation evidence; audio is not supported by this variant.
- **Coding: 78/100.** LiveCodeBench 77.1% and Codeforces Elo 1718 indicate strong general coding, without verified SWE-bench or terminal-agent results.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and local deployment make the model highly cost-efficient, although hardware cost was not quantified.
- **Overall Score: 77/100.** A strong open-weight reasoning, coding, and vision model for local or self-hosted agent systems.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: Official Google Gemma 4 Hugging Face model card and technical-report references; scores are normalized interpretations, not official vendor scores.
