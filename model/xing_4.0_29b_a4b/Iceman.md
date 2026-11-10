# Xing 4.0 29B A4B — findings by Iceman

- Source: XingChen-AGI/Xing4.0-29B-A4B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** XingChen-AGI’s Xing 4.0 29B A4B is an Apache-2.0 MoE agentic coding model (29B total / 4B active, 256K native, extensible to 512K) trained on Ascend NPUs with strong software-engineering benchmark results.
- **Provider / access:** Open weights on Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B`, Apache 2.0) and free hosted routes per metadata. Local metadata lists `XingChen-AGI/Xing4.0-29B-A4B`, `noFreeId`, and OpenRouter free route.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Xing4.0-29B-A4B`, `XingChen-AGI/Xing4.0-29B-A4B`.
- **Context window:** 262,144 tokens native (extensible to 512,000 via YaRN).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights (self-host $0); OpenRouter free route available (local metadata).
- **Architecture:** Sparse MoE transformer (mHC + MLA + MTP), 29B total / 4B active parameters, 256K native context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for `XingChen-AGI/Xing4.0-29B-A4B` (vendor-reported).

Agent / tool use:

- SWE-bench Verified: **75.00**
- Terminal-Bench 2.1: **57.50**
- SWE-bench Multilingual: **66.00**
- Tau3-Bench: **64.63**
- Claw-Eval: **76.55**
- DeepresearchBII: **60.80**

Reasoning / knowledge:

- AIME2026: **90.00**
- IFBench: **69.67**
- AA.LCR: **61.00**

Coding:

- SWE-bench Verified: **75.00**
- Terminal-Bench 2.1: **57.50**
- SWE-bench Multilingual: **66.00**

Long context:

- Native 256K (extensible to 512K) context. AA.LCR **61.00** reported; no MRCR/RULER figures extracted.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Vendor-reported benchmarks.

- **Tool use: 86/100.** Strong agentic/terminal and tool-use results (Terminal-Bench 2.1 57.50, Tau3-Bench 64.63, Claw-Eval 76.55, DeepresearchBII 60.80, SWE-bench Verified 75.00).
- **Reasoning: 82/100.** Strong math/reasoning and instruction-following signals (AIME2026 90.00, IFBench 69.67, AA.LCR 61.00), but no GPQA/HLE published.
- **Context window: 90/100.** 256K native context extensible to 512K with reported AA.LCR performance.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Strong coding/agentic software engineering (SWE-bench Verified 75.00, SWE-bench Multilingual 66.00, Terminal-Bench 2.1 57.50).
- **Cost efficiency: 96/100.** Apache 2.0 open weights, small active parameter count (4B), and free hosted/self-host options.
- **Overall Score: 77/100.** Mean of the five non-cost dims (86, 82, 90, 40, 86) = 76.8 → 77. Best fit for efficient open-weight agentic coding and long-context text workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from vendor-reported benchmark figures, not official vendor scores.
- Reference URLs:
  - [Xing4.0-29B-A4B model card (Hugging Face)](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  - Local repository metadata consulted: `model/xing_4.0_29b_a4b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
