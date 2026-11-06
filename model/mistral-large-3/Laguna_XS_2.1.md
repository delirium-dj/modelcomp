# Mistral Large 3 — findings by Laguna XS 2.1

> Source: Mistral (`opencode/mistral-large-3`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's 675B-total / 41B-active Apache-2.0 open-weights MoE flagship (released 2025-12-02) with native vision (text+image in); predecessor to Mistral Large 4; 256K context; $0.50/$1.50 hosted.
- **Provider / access:** La Plateforme; 3 live providers; OpenRouter; self-host Apache-2.0 weights $0.
- **Release / knowledge:** December 2025 release; deprecated on Artificial Analysis (superseded by Large 4).
- **IDs:** `opencode/mistral-large-3`; `mistral/mistral-large-3`
- **Context window:** 256,000 total
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-11-06):** $0.50/$1.50 per 1M tokens; self-host $0 (Apache 2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~60%** (estimated)
- Tau3-Banking / Tau2-Bench: **~65%** (estimated)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: **N/A** (deprecation noted)

Coding:

- SWE-bench Verified: **~60%** (estimated)
- LiveCodeBench: no verified public score found

Long context:

- Native 256K window; no MRCR data surfaced independently

Multimodal:

- Image input supported; MMMU-estimated ~65-70%

### Normalized scores (1–100)

- **Tool use: 60/100.** Qwen 3.8 Flash rater baseline; ~60% Terminal-Bench estimated.
- **Reasoning: 62/100.** Based on single Qwen 3.8 Flash rater score; no independent GPQA/HLE data.
- **Context window: 78/100.** 256K places in 200K-500K tier (80-94 range).
- **Multimodal: 60/100.** Vision support; estimated from Qwen 3.8 Flash rater score.
- **Coding: 66/100.** Qwen 3.8 Flash rater baseline; ~60% estimated coding performance.
- **Cost efficiency: 82/100.** $0.50/$1.50 mid-tier pricing; Apache 2.0 self-host adds value.
- **Overall Score: 65/100.** Mean of (60 + 62 + 78 + 60 + 66) / 5 = 65.2.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Mistral docs, AA); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis Mistral Large 3](https://artificialanalysis.ai/models/mistral-large-3)
  - [Mistral AI Models](https://mistral.ai/news/)
- Future sources: add a new file next to this one, e.g. `Mistral_Large_3_V2.md`.

---

## Note

Deprecated on Artificial Analysis (superseded by Large 4). Intelligence Index reads N/A. Reasoning/tool/coding figures rest on provisional secondary evidence from single rater."