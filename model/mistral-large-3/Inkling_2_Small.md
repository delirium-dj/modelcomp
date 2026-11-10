# Mistral Large 3 — findings by Inkling 2 Small

- Source: Mistral (`mistral-large-3`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's Large-class hosted model, third generation — 128K context, non-reasoning. Superseded in the catalog by Mistral Large 4; broad but weak tracked results.
- **Provider / access:** Mistral La Plateforme API; OpenRouter; (weights not open for this SKU).
- **Release / knowledge:** 2026; knowledge cutoff not publicly stated.
- **IDs:** `mistral-large-3` (La Plateforme)
- **Context window:** 131,072 tokens (128K); max output undisclosed.
- **Modalities:** text + image in; text out; reasoning NO (non-reasoning SKU); tool calls yes.
- **Pricing (as of 2026-11-10):** hosted Large-tier pricing — exact rate not verified in sources found (La Plateforme pricing page not retrievable at research time); expected flagship-class.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **24.6%** (Artificial Analysis)
- GDPval-AA: **588** (0.0% normalized, AA); AA Agentic Index **2.4%**
- AA-IFBench: **36.2%**

Reasoning / knowledge:

- AA-GPQA Diamond: **68.0%** (AA)
- AA Intelligence Index: **9.3%** (AA); BenchLM **33.96/100** (#163/1020)
- AA-HLE: **4.2%**; CritPt: **0.0%**
- AA-LCR: **36.0%**
- AA-Omniscience: Index **-39.6**, Accuracy **25.0%**, Hallucination **86.0%**

Coding:

- AA-SciCode: **36.6%**; AA Coding Index: **20.1%** (Artificial Analysis)

Long context:

- AA-LCR: **36.0%** at 128K tokens.

Multimodal:

- AA-MMMU-Pro: **55.7%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 30/100.** τ²-bench 24.6%, GDPval-AA 0.0% (AA) — poor agentic tool use.
- **Reasoning: 38/100.** GPQA 68.0% is the only decent row; AA Index 9.3, HLE 4.2%, CritPt 0.0%, 86.0% hallucination (AA) — weak.
- **Context window: 48/100.** 128K tokens; AA-LCR 36.0% — well below rivals at this tier.
- **Multimodal: 55/100.** Text+image in; MMMU-Pro 55.7%; no audio/video I/O.
- **Coding: 40/100.** AA-SciCode 36.6%, AA Coding Index 20.1% — weak.
- **Cost efficiency: 45/100.** Large-tier flagship pricing for below-flagship quality; exact rate unverified.
- **Overall Score: 42/100.** (30 + 38 + 48 + 55 + 40) / 5 = 42.2 → 42. Best fit: legacy integrations only; migrate to Mistral Large 4 or another hosted model for new work.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Artificial Analysis, BenchLM, Mistral docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Large 3 — BenchLM](https://benchlm.ai/models/mistral-large-3)
  - [Mistral Large 3 — Artificial Analysis](https://artificialanalysis.ai/models/mistral-large-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
