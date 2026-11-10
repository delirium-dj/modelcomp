# Laguna S 2.1 — findings by Iceman

- Source: Poolside/Laguna-S-2.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside’s Laguna S 2.1 is an open-weights 118B/8B-active MoE model (OpenMDW-1.1, 1M context) specialized for agentic coding and long-horizon software engineering tasks.
- **Provider / access:** Open weights on Hugging Face (`poolside/Laguna-S-2.1`, OpenMDW-1.1) and hosted providers (OpenRouter/Vercel/Poolside endpoints). Local metadata lists `poolside/laguna-s-2.1`, pricing ~$0.10/$0.20 per 1M, and free/self-host options.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Laguna-S-2.1`, `poolside/Laguna-S-2.1`.
- **Context window:** 1,048,576 tokens (1M); OpenRouter free endpoint capped at 256K per metadata.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** ~$0.10/$0.20 per 1M on Poolside endpoint, ~$0.09/$0.18 on OpenRouter; self-host $0 under OpenMDW-1.1 (local metadata).
- **Architecture:** Sparse MoE transformer, 118B total / ~8B active parameters, mixed SWA/global attention, 1M context, native reasoning support (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for `poolside/Laguna-S-2.1`.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%**
- SWE-bench Multilingual: **78.5%**
- SWE-Bench Pro (Public Dataset): **59.4%**
- DeepSWE: **40.4%**
- SWE Atlas (Codebase QnA): **46.2%**
- Toolathlon Verified: **49.7%**

Reasoning / knowledge:

- No general reasoning benchmarks (GPQA, HLE, AIME) published per local metadata/card focus.

Coding:

- Terminal-Bench 2.1: **70.2%**
- SWE-bench Multilingual: **78.5%**
- SWE-Bench Pro: **59.4%**
- DeepSWE: **40.4%**
- SWE Atlas (Codebase QnA): **46.2%**

Long context:

- 1M context supported (architecture/training). No standalone MRCR/RULER/AA-LCR numeric benchmark published in reviewed card.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Specialized coding/agent model with limited general-reasoning evidence.

- **Tool use: 86/100.** Strong agentic coding/terminal and tool-use results (Terminal-Bench 2.1 70.2%, Toolathlon Verified 49.7%, SWE-bench Multilingual 78.5%, SWE-Bench Pro 59.4%).
- **Reasoning: 66/100.** No published general-reasoning benchmark suite (GPQA/HLE/AIME) in reviewed sources; score reflects limited evidence outside coding/agent domains.
- **Context window: 94/100.** Native 1M context designed for long-horizon work; limited standalone long-context retrieval benchmark numerics.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 88/100.** Excellent coding/agentic engineering performance (SWE-bench Multilingual 78.5%, Terminal-Bench 2.1 70.2%, SWE-Bench Pro 59.4%, DeepSWE 40.4%, SWE Atlas 46.2%).
- **Cost efficiency: 92/100.** OpenMDW-1.1 open weights, 8B active parameters (runs on single DGX Spark per metadata), and low hosted pricing/free options.
- **Overall Score: 75/100.** Mean of the five non-cost dims (86, 66, 94, 40, 88) = 74.8 → 75. Best fit for long-context, text-only agentic coding where specialized SWE performance matters more than broad general reasoning benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Laguna-S-2.1 model card (Hugging Face)](https://huggingface.co/poolside/Laguna-S-2.1)
  - Local repository metadata consulted: `model/laguna-s-2.1/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
