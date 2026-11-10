# Gemma 4 12B Unified — findings by Iceman

- Source: Google DeepMind/Gemma 4 12B Unified
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind’s Gemma 4 12B Unified is an open-weight encoder-free multimodal model (11.95B) for local/consumer deployment, supporting text, image, and audio inputs with 256K context.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-12B`, Apache 2.0) and various hosts. Local metadata lists `google/gemma-4-12B` and `noFreeId`.
- **Release / knowledge:** Gemma 4 family release (HF card reviewed 2026-11-10). Pre-training cutoff January 2025 per HF card.
- **IDs:** `gemma-4-12B`, `Gemma 4 12B Unified`, `google/gemma-4-12B`.
- **Context window:** 256K tokens (262,144; local metadata/HF card).
- **Modalities:** Text, image, and audio input; text output (HF card). Encoder-free unified architecture processes raw image/audio directly.
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted pricing varies (local metadata cites ~ $0.10/$0.30 per 1M median, cheapest $0.05/$0.25).
- **Architecture:** Dense decoder-only transformer, 11.95B parameters, 48 layers, 1024 sliding window, 256K context, encoder-free multimodal (no separate vision/audio encoders; lightweight linear projections), hybrid attention with p-RoPE (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `google/gemma-4-12B` (instruction-tuned results table, Gemma 4 12B Unified column) unless noted.

Agent / tool use:

- Tau2 (average over 3): **69.0%**
- Native function-calling support highlighted; other standardized agent benchmarks (Terminal-Bench 2.1, GDPval-AA, Toolathon, MCP-Atlas): **no verified public score found** in reviewed card

Reasoning / knowledge:

- MMLU Pro: **77.2%**
- GPQA Diamond: **78.8%**
- AIME 2026 (no tools): **77.5%**
- BigBench Extra Hard: **53.0%**
- MMMLU: **83.4%**
- HLE no tools: **5.2%**

Coding:

- LiveCodeBench v6: **72.0%**
- Codeforces ELO: **1659**
- SWE-bench / SWE-Pro / Terminal-Bench: **no verified public score found** in reviewed card

Long context:

- MRCR v2 8 needle 128k (average): **43.4%**
- 256K context window documented.

Multimodal / vision:

- MMMU Pro: **69.1%**
- OmniDocBench 1.5 (avg edit distance, lower is better): **0.164**
- MATH-Vision: **79.7%**
- MedXPertQA MM: **48.7%**

Audio:

- CoVoST: **38.5*** (*excluding Chinese language per card)
- FLEURS (lower is better): **0.069*** (*excluding Chinese language per card)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 80/100.** Good function-calling/agentic potential (Tau2 69.0%, native function calling) for a local 12B model, with limited standardized agent benchmark coverage.
- **Reasoning: 82/100.** Strong reasoning for size (AIME 2026 77.5%, GPQA Diamond 78.8%, MMLU Pro 77.2%, MMMLU 83.4%, BBEH 53.0%).
- **Context window: 84/100.** 256K context is strong for local deployment; MRCR v2 8-needle 128k average 43.4% shows moderate retrieval performance.
- **Multimodal: 85/100.** Unified text+image+audio input capability is notable for 12B (MMMU Pro 69.1%, MATH-Vision 79.7%, OmniDocBench 0.164, CoVoST 38.5*, FLEURS 0.069*).
- **Coding: 81/100.** Solid coding performance (LiveCodeBench v6 72.0%, Codeforces ELO 1659) for consumer-hardware class; no SWE-bench/terminal coding benchmarks reported.
- **Cost efficiency: 94/100.** Apache 2.0 open weights, 12B size suitable for 16GB-class hardware (per metadata), and low hosted pricing make it very cost-efficient.
- **Overall Score: 82/100.** Mean of the five non-cost dims (80, 82, 84, 85, 81) = 82.4 → 82. Best fit for local/self-hosted unified multimodal (text/image/audio) assistants, coding, and function-calling agents on consumer hardware.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [gemma-4-12B model card (Hugging Face)](https://huggingface.co/google/gemma-4-12B)
  - Local repository metadata consulted: `model/gemma-4.12b-unified/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
