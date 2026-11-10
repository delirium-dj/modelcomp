# Laguna XS 2.1 — findings by Iceman

- Source: Poolside/Laguna-XS-2.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside’s Laguna XS 2.1 is an open-weights 33B/3B-active MoE coding model (OpenMDW-1.1, 262K context) designed for local agentic software engineering.
- **Provider / access:** Open weights on Hugging Face (`poolside/Laguna-XS-2.1`, OpenMDW-1.1) and hosted/free routes (e.g. OpenRouter) per metadata. Local metadata lists `poolside/laguna-xs-2.1`, pricing ~$0.06/$0.12 per 1M plus free tier, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Laguna-XS-2.1`, `poolside/Laguna-XS-2.1`.
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** ~$0.06/$0.12 per 1M in/out, $0.03 cached on OpenRouter; free route available; self-host $0 under OpenMDW-1.1 (local metadata).
- **Architecture:** Sparse MoE transformer, 33B total / 3B active parameters, mixed SWA/global attention, 262K context, native reasoning support (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table/eval results for `poolside/Laguna-XS-2.1`.

Agent / tool use:

- SWE-bench Verified: **70.9%**
- SWE-bench Multilingual: **63.1%**
- SWE-Bench Pro (Public Dataset): **47.6%**
- Terminal-Bench 2.0: **37.5%**

Reasoning / knowledge:

- No GPQA, HLE, or AIME figures published per local metadata/card scope.

Coding:

- SWE-bench Verified: **70.9%**
- SWE-bench Multilingual: **63.1%**
- SWE-Bench Pro: **47.6%**
- Terminal-Bench 2.0: **37.5%**

Long context:

- 262K context supported. No standalone MRCR/RULER/AA-LCR numeric benchmark reported.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Coding-specialized small-active model.

- **Tool use: 80/100.** Strong SWE-bench Verified (70.9%) and multilingual/pro results, with moderate terminal performance (Terminal-Bench 2.0 37.5%).
- **Reasoning: 64/100.** No published general-reasoning benchmark suite (GPQA/HLE/AIME); evidence concentrated in coding tasks.
- **Context window: 84/100.** 262K context suitable for local long-horizon coding workflows.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 84/100.** Strong coding/agentic software engineering for size (SWE-bench Verified 70.9%, SWE-bench Multilingual 63.1%, SWE-Bench Pro 47.6%).
- **Cost efficiency: 97/100.** OpenMDW-1.1 open weights, 3B active parameters (runs on ~36 GB Mac per metadata), and free/low-cost hosted options.
- **Overall Score: 70/100.** Mean of the five non-cost dims (80, 64, 84, 40, 84) = 70.4 → 70. Best fit for efficient local/text-only agentic coding where SWE performance and deployability matter most.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Laguna-XS-2.1 model card (Hugging Face)](https://huggingface.co/poolside/Laguna-XS-2.1)
  - Local repository metadata consulted: `model/laguna-xs-2.1/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
