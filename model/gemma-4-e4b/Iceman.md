# Gemma 4 E4B — findings by Iceman

- Source: Google/Gemma 4 E4B IT
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B IT
- **Short description:** Google’s Gemma 4 E4B is an Apache-2.0 on-device multimodal model (4.5B effective parameters, 128K context) supporting text/image/audio input with strong efficiency for local deployment.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-E4B-it`, Apache 2.0) and hosted providers. Local metadata lists `google/gemma-4-E4B` (folder `gemma-4-e4b`), pricing ~$0.02/$0.10 hosted, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `gemma-4-E4B-it`, `google/gemma-4-E4B-it`.
- **Context window:** 128,000 tokens.
- **Modalities:** Text, image, and audio input; text output (video as frames per card).
- **Pricing (as of 2026-11-10):** Hosted ~$0.02/$0.10 per 1M in/out; self-host $0 (Apache 2.0, Q4 GGUF ~4.59 GB) per local metadata.
- **Architecture:** Dense model with PLE, ~4.5B effective parameters (8B with embeddings), 128K context, multimodal encoders for vision/audio (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for Gemma 4 E4B (instruction-tuned) unless noted.

Agent / tool use:

- Tau2 (average over 3): **42.2%**
- Terminal-Bench 2.1: **1.87%** (per local metadata; not in main card table)
- Tool/function-calling capability supported; limited agentic benchmark coverage.

Reasoning / knowledge:

- MMLU Pro: **69.4%**
- GPQA Diamond: **58.6%**
- AIME 2026 no tools: **42.5%**
- BigBench Extra Hard: **33.1%**
- MMMLU: **76.6%**

Coding:

- LiveCodeBench v6: **52.0%**
- Codeforces ELO: **940**

Long context:

- MRCR v2 8 needle 128k (average): **25.4%**
- 128K context supported.

Multimodal:

- MMMU Pro: **52.6%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.181**
- MATH-Vision: **59.5%**
- MedXPertQA MM: **28.7%**
- Audio: CoVoST **35.54**, FLEURS (lower is better) **0.08**

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 58/100.** Limited agentic/tool-use performance (Tau2 42.2%, very weak Terminal-Bench 2.1 per metadata), suitable for light tool use rather than complex terminal agents.
- **Reasoning: 70/100.** Decent reasoning/knowledge for a 4.5B-effective edge model (MMLU Pro 69.4%, GPQA 58.6%, AIME 2026 42.5%, BigBench Extra Hard 33.1%).
- **Context window: 72/100.** 128K context supported but weak long-context retrieval in reported results (MRCR v2 128k 25.4%).
- **Multimodal: 74/100.** Strong on-device multimodal capability for size (image/audio input; MMMU Pro 52.6%, OmniDocBench 0.181, MATH-Vision 59.5%, ASR/AST support).
- **Coding: 68/100.** Moderate coding performance (LiveCodeBench v6 52.0%, Codeforces ELO 940) without strong agentic coding benchmarks.
- **Cost efficiency: 98/100.** Apache 2.0 open weights, very small deployable footprint, and extremely low hosted pricing.
- **Overall Score: 68/100.** Mean of the five non-cost dims (58, 70, 72, 74, 68) = 68.4 → 68. Best fit for efficient on-device/local multimodal perception and light assistant tasks rather than heavy agentic coding.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Gemma 4 E4B IT model card (Hugging Face)](https://huggingface.co/google/gemma-4-E4B-it)
  - Local repository metadata consulted: `model/gemma-4-e4b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
