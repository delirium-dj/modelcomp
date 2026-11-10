# Gemma 4 31B — findings by Iceman

- Source: Google/Gemma 4 31B IT
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT (`gemma-4-31B-it`)
- **Short description:** Google DeepMind’s Gemma 4 31B is a dense open-weight instruction-tuned multimodal model (Apache 2.0) for reasoning, coding, agentic workflows, and image understanding.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-31B-it`, Apache 2.0) and hosted endpoints (e.g. NVIDIA NIM/build.nvidia.com per metadata). Local metadata lists `google/gemma-4-31b-it` and notes free open weights/free NIM tier.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (Gemma 4 release; pretraining cutoff January 2025 per card). Knowledge cutoff not otherwise specified.
- **IDs:** `gemma-4-31B-it`, `google/gemma-4-31B-it`.
- **Context window:** 256K tokens for medium Gemma 4 models per HF card; 31B is listed as a medium dense model (60 layers, 1024-token sliding window in dense table). Local metadata states 128K context (conflicting source note).
- **Modalities:** Text and image input; text output (HF card states text/image support for 31B dense; no audio). Local metadata states text in/out only (conflicting; HF card indicates image input supported).
- **Pricing (as of 2026-11-10):** Free open weights (Apache 2.0) for self-hosting; free prototyping endpoint available on NVIDIA NIM/build.nvidia.com (per local metadata/HF ecosystem).
- **Architecture:** Dense transformer, 30.7B parameters, 60 layers, hybrid local/global attention (1024-token sliding window, proportional RoPE), ~550M vision encoder parameters (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `google/gemma-4-31B-it` (instruction-tuned) unless noted.

Agent / tool use:

- Tau2 (average over 3): **76.9%**
- HLE with search: **26.5%**
- Function calling / agentic workflows supported (native function-calling noted in card); no additional standardized tool benchmark numerics extracted.

Reasoning / knowledge:

- MMLU Pro: **85.2%**
- GPQA Diamond: **84.3%**
- AIME 2026 (no tools): **89.2%**
- HLE no tools: **19.5%**
- BigBench Extra Hard: **74.4%**
- MMMLU: **88.4%**

Coding:

- LiveCodeBench v6: **80.0%**
- Codeforces ELO: **2150**

Long context:

- MRCR v2 8 needle 128k (average): **66.4%**
- 256K context supported for medium models per HF card.

Multimodal / vision:

- MMMU Pro: **76.9%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.131**
- MATH-Vision: **85.6%**
- MedXpertQA MM: **61.3%**
- Image input supported (variable aspect ratio/resolution); no audio for 31B.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 83/100.** Good agentic/tool-use signals (Tau2 average 76.9%, HLE with search 26.5%, native function calling support) indicate capable tool-assisted workflows, though broader agent benchmark coverage is limited.
- **Reasoning: 88/100.** Strong reasoning/knowledge/math performance (MMLU Pro 85.2%, GPQA Diamond 84.3%, AIME 2026 89.2%, BigBench Extra Hard 74.4%, MMMLU 88.4%).
- **Context window: 90/100.** 256K context for medium models per HF card and solid long-context retrieval (MRCR v2 8-needle 128k 66.4%) support substantial long-document workflows.
- **Multimodal: 88/100.** Strong vision understanding for an open dense model (MMMU Pro 76.9%, MATH-Vision 85.6%, OmniDocBench 0.131, MedXpertQA MM 61.3%), with image input support but no audio.
- **Coding: 87/100.** Strong coding results (LiveCodeBench v6 80.0%, Codeforces ELO 2150) indicate high practical coding capability.
- **Cost efficiency: 95/100.** Apache 2.0 open weights and free NIM/prototyping options make it highly cost-efficient for self-hosted or trial use.
- **Overall Score: 87/100.** Mean of the five non-cost dims (83, 88, 90, 88, 87) = 87.2 → 87. Best fit for open-weight multimodal reasoning/coding and agentic workflows on capable local/server hardware.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Gemma 4 31B IT model card (Hugging Face)](https://huggingface.co/google/gemma-4-31B-it)
  - Local repository metadata consulted: `model/gemma-4-31b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
