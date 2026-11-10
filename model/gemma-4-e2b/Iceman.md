# Gemma 4 E2B — findings by Iceman

- Source: Google/Gemma 4 E2B IT
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B IT
- **Short description:** Google’s Gemma 4 E2B is an Apache-2.0 on-device multimodal model (2.3B effective parameters, 128K context) supporting text/image/audio input with a very small deployable footprint.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-E2B-it`, Apache 2.0) and hosted providers. Local metadata lists `google/gemma-4-E2B`, hosted pricing ~$0.04/$0.08 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `gemma-4-E2B-it`, `google/gemma-4-E2B-it`.
- **Context window:** 128,000 tokens.
- **Modalities:** Text, image, and audio input; video as frames; text output.
- **Pricing (as of 2026-11-10):** Hosted ~$0.04/$0.08 per 1M in/out; self-host $0 (Apache 2.0, Q4 GGUF ~3.3 GB) per local metadata.
- **Architecture:** Dense model with Per-Layer Embeddings (PLE), ~2.3B effective parameters (5.1B with embeddings), 128K context, multimodal encoders for vision/audio (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for Gemma 4 E2B (instruction-tuned).

Agent / tool use:

- Tau2 (average over 3): **24.5%**
- Terminal-Bench 2.1: **0.4%** (per local metadata)

Reasoning / knowledge:

- MMLU Pro: **60.0%**
- GPQA Diamond: **43.4%**
- AIME 2026 no tools: **37.5%**
- BigBench Extra Hard: **21.9%**
- HLE no tools: not reported for E2B (dash in table); local metadata cites HLE **4.8%**
- MMMLU: **67.4%**

Coding:

- LiveCodeBench v6: **44.0%**
- Codeforces ELO: **633**

Long context:

- MRCR v2 8 needle 128k (average): **19.1%**
- 128K context supported.

Multimodal:

- MMMU Pro: **44.2%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.290**
- MATH-Vision: **52.4%**
- MedXPertQA MM: **23.5%**
- Audio: CoVoST **33.47**, FLEURS (lower is better) **0.09**

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Very small edge model.

- **Tool use: 45/100.** Very weak agentic/tool-use performance (Tau2 24.5%, Terminal-Bench 2.1 0.4%); not suited for complex tool-using workflows.
- **Reasoning: 58/100.** Modest reasoning/knowledge for a 2.3B-effective edge model (MMLU Pro 60.0%, GPQA 43.4%, AIME 2026 37.5%, BigBench Extra Hard 21.9%).
- **Context window: 68/100.** 128K context supported but weak long-context retrieval (MRCR v2 128k 19.1%).
- **Multimodal: 72/100.** Notable on-device multimodal sensing (image/audio input; MMMU Pro 44.2%, OmniDocBench 0.290, MATH-Vision 52.4%, CoVoST 33.47) for its size.
- **Coding: 58/100.** Limited coding capability (LiveCodeBench v6 44.0%, Codeforces ELO 633) without strong agentic coding evidence.
- **Cost efficiency: 99/100.** Apache 2.0 open weights, extremely small deployable footprint (~3.3 GB Q4 GGUF), and low hosted pricing.
- **Overall Score: 60/100.** Mean of the five non-cost dims (45, 58, 68, 72, 58) = 60.2 → 60. Best fit for lightweight on-device/local multimodal perception and basic assistant tasks, not for reasoning-heavy or agentic coding work.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Gemma 4 E2B IT model card (Hugging Face)](https://huggingface.co/google/gemma-4-E2B-it)
  - Local repository metadata consulted: `model/gemma-4-e2b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
