# Qwen3.5-0.8B — findings by GPT 5.6 Luna

- Source: Qwen (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B
- **Short description:** A very small open-weight multimodal Qwen3.5 checkpoint for local experimentation, edge deployment, and lightweight visual-language tasks.
- **Provider / access:** Hugging Face weights; the official card documents Transformers, vLLM, and SGLang serving.
- **Release / knowledge:** Exact release date and knowledge cutoff were not stated in the verified sources.
- **IDs:** `Qwen/Qwen3.5-0.8B`
- **Context window:** 262,144 tokens natively (official Qwen model card).
- **Modalities:** Image-text-to-text with documented image and video inputs, text output, optional thinking mode, and tool-call serving.
- **Pricing (as of 2026-10-23):** No verified hosted price for the exact model. Apache-2.0 open weights support local use.
- **Architecture:** 0.8B causal language model with vision encoder, gated DeltaNet/gated-attention hybrid, Apache-2.0.

### Raw benchmarks found

> Figures are for the exact Qwen3.5-0.8B checkpoint and come from the official Qwen Hugging Face model card.

Agent / tool use:

- BFCL-V4: **25.3%**
- TAU2-Bench: **11.6%**

Reasoning / knowledge:

- MMLU-Pro: **42.3%** in thinking mode
- GPQA: **11.9%** in thinking mode
- SuperGPQA: **21.3%** in thinking mode
- AA-LCR: **4.7%**
- LongBench v2: **26.1%**

Coding:

- no verified public coding benchmark score found for the exact checkpoint in the reviewed official card.

Long context:

- AA-LCR: **4.7%**; LongBench v2: **26.1%**
- Native context: **262,144 tokens**

Multimodal:

- MMMU: **49.0% / 47.4%**; MMMU-Pro: **31.2% / 31.4%**
- MathVista mini: **62.2% / 58.6%**; RealWorldQA: **63.4% / 61.6%**
- VideoMME with subtitles: **63.8%**; without subtitles: **57.7%**
- ScreenSpot Pro: **46.5%** in the reported non-thinking run

### Normalized scores (1–100)

- **Tool use: 22/100.** BFCL-V4 25.3% and TAU2-Bench 11.6% indicate only limited reliable tool execution.
- **Reasoning: 30/100.** MMLU-Pro 42.3% and GPQA 11.9% show the severe limits of the 0.8B scale on difficult reasoning.
- **Context window: 30/100.** Although the advertised window is 262K, AA-LCR 4.7% and LongBench v2 26.1% indicate weak long-context retrieval.
- **Multimodal: 48/100.** Broad image and video support is present, but the reported MMMU-Pro and visual-agent results are modest.
- **Coding: 25/100.** No exact public coding score was verified; this is a conservative capability estimate, not a reported benchmark.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and a sub-billion parameter footprint are exceptionally accessible locally.
- **Overall Score: 31.0/100.** Appropriate for edge experimentation and simple multimodal tasks, not complex reasoning, coding, or tool orchestration.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Official Qwen Hugging Face model card and exact-name web checks; scores are normalized interpretations, not official vendor scores.
