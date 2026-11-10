# Ling 2.6 1T — findings by Iceman

- Source: inclusionAI/Ling-2.6-1T
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** inclusionAI’s Ling-2.6-1T is an MIT-licensed 1.03T/63B-active instruct MoE (262K context) designed for complex multi-step tasks, coding, and agentic workflows with efficient hybrid attention.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-2.6-1T`, MIT license) and hosted providers. Local metadata lists `inclusionai/ling-2.6-1t`, pricing ~$0.30/$2.50 per 1M, and free/self-host options.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Ling-2.6-1T`, `inclusionAI/Ling-2.6-1T`.
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** ~$0.30/$2.50 per 1M in/out on hosted routes per local metadata; open weights free to self-host (MIT).
- **Architecture:** Sparse MoE transformer with MLA + Linear Attention hybrid, 1.03T total / 63B active parameters (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card/eval results for `inclusionAI/Ling-2.6-1T`.

Agent / tool use:

- SWE-bench Verified: **72.2%**
- Terminal-Bench 2.0: **40.45%**
- TAU2-Bench, BFCL-V4, Claw-Eval, PinchBench: strong/open-source SOTA positioning claimed in card text (not all numerics clearly extracted).

Reasoning / knowledge:

- AIME 2026: **87.4%**
- HLE: **8.7–10.1%** (per local metadata/context)
- MRCR long-context retrieval: **80.4% (16K), 68.4% (256K)** (per local metadata)

Coding:

- SWE-bench Verified: **72.2%**
- Terminal-Bench 2.0: **40.45%**

Long context:

- 262K context supported with hybrid attention; MRCR **80.4% (16K)** and **68.4% (256K)** reported in metadata/card context.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 80/100.** Strong SWE-bench Verified (72.2%) and agentic capability claims, but modest Terminal-Bench 2.0 (40.45%) and mixed tool-use evidence.
- **Reasoning: 78/100.** Good math reasoning (AIME 2026 87.4%) but weak HLE and high hallucination risk noted in metadata.
- **Context window: 86/100.** 262K context with measured MRCR retrieval performance (80.4% at 16K, 68.4% at 256K).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 82/100.** Strong SWE-bench Verified (72.2%) with moderate terminal performance (40.45%).
- **Cost efficiency: 78/100.** MIT open weights but very large model (1T/63B active) with higher hosted pricing and heavy serving requirements.
- **Overall Score: 73/100.** Mean of the five non-cost dims (80, 78, 86, 40, 82) = 73.2 → 73. Best fit for large-scale open-weight text coding/agent tasks with strong long-context retrieval, acknowledging reasoning/hallucination tradeoffs.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card/eval results; scores are normalized 1–100 interpretations from verified figures, not official vendor scores.
- Reference URLs:
  - [Ling-2.6-1T model card (Hugging Face)](https://huggingface.co/inclusionAI/Ling-2.6-1T)
  - Local repository metadata consulted: `model/ling-2.6.1t/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
