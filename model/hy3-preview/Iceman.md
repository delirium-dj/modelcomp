# Hy3 Preview — findings by Iceman

- Source: Tencent/Hy3-preview
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3-preview
- **Short description:** Tencent’s Hy3-preview is an open-weight 295B/21B-active MoE model (256K context) focused on reasoning and agentic coding; it is the preview release later superseded by GA Hy3.
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy3-preview`, Tencent Hy Community License) and hosted endpoints (e.g. OpenRouter). Local metadata lists `tencent/hy3-preview`, `noFreeId`, and notes GA Hy3 supersedes it.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Hy3-preview`, `tencent/Hy3-preview`.
- **Context window:** 256,000 tokens (262,144 on some hosts); 64K–128K max output per local metadata.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Open weights (community license, self-host $0). Hosted ~$0.18/$0.60 per 1M in/out, $0.06 cached on OpenRouter per local metadata.
- **Architecture:** Sparse MoE transformer, 295B total / 21B active parameters, 256K context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table/snippets for `tencent/Hy3-preview`.

Agent / tool use:

- SWE-bench Verified: **74.4%**
- SWE-bench Multilingual: **73.1%**
- Terminal-Bench 2.0: **54.4%**
- SciCode: **35.3%**

Reasoning / knowledge:

- AIME 2026: **97.4%**
- HMMT 2026: **89.8%**
- GPQA Diamond: **89.6%**
- HLE: **47.2%** (29.0% in text-only/context noted on card; benchmark table row shows 47.2%)
- ArenaHard v2: **70.0%**

Coding:

- SWE-bench Verified: **74.4%**
- SWE-bench Multilingual: **73.1%**
- Terminal-Bench 2.0: **54.4%**
- SciCode: **35.3%**

Long context:

- 256K context supported. No standalone numeric long-context retrieval benchmark (MRCR/RULER/AA-LCR) extracted from reviewed card text.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Preview model; superseded by GA Hy3.

- **Tool use: 82/100.** Strong coding-agent results (SWE-bench Verified 74.4%, SWE-bench Multilingual 73.1%) with moderate terminal performance (Terminal-Bench 2.0 54.4%).
- **Reasoning: 88/100.** Excellent math/reasoning and strong science performance (AIME 2026 97.4%, HMMT 2026 89.8%, GPQA Diamond 89.6%, HLE 47.2%).
- **Context window: 84/100.** 256K context supported; limited standalone long-context benchmark evidence.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 84/100.** Strong software engineering benchmarks (SWE-bench Verified 74.4%, SWE-bench Multilingual 73.1%, SciCode 35.3%, Terminal-Bench 2.0 54.4%).
- **Cost efficiency: 88/100.** Open weights and low hosted pricing available, though community license is more restrictive than GA Hy3.
- **Overall Score: 76/100.** Mean of the five non-cost dims (82, 88, 84, 40, 84) = 75.6 → 76. Best fit as a strong open-weight preview for text reasoning and coding; GA Hy3 supersedes it.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Hy3-preview model card (Hugging Face)](https://huggingface.co/tencent/Hy3-preview)
  - Local repository metadata consulted: `model/hy3-preview/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
