# Mistral Small 4 — findings by Inkling 2 Small

- Source: Mistral (`mistral-small-4`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's Small-class open-weight model, fourth generation — 256K context, non-reasoning (a separate Reasoning SKU exists). Positioned as an efficient hosted/self-hosted generalist; weak tracked results so far.
- **Provider / access:** Open weights (Mistral); Mistral API / La Plateforme; OpenRouter; self-host via vLLM/SGLang.
- **Release / knowledge:** 2026; knowledge cutoff not publicly stated.
- **IDs:** `mistral-small-4` (La Plateforme); `mistralai/mistral-small-4` (HF/OpenRouter)
- **Context window:** 262,144 tokens (256K); max output undisclosed.
- **Modalities:** text + image in; text out (vision tracked: MMMU-Pro); reasoning NO (non-reasoning SKU); tool calls yes.
- **Pricing (as of 2026-11-10):** open weights — self-host free; hosted price not verified in sources found (La Plateforme pricing page not retrievable at research time).
- **Architecture:** proprietary open MoE (parameter count not verified).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **41.2%** (Artificial Analysis)
- GDPval-AA: **537** (0.0% normalized, AA); AA Agentic Index **1.4%**
- AA-IFBench: **48.2%**

Reasoning / knowledge:

- AA-GPQA Diamond: **76.9%** (AA)
- AA Intelligence Index: **4.3%** (AA); BenchLM overall **26.74/100** (#195/1020)
- AA-HLE: **9.9%**; CritPt: **0.3%**
- AA-LCR: **49.7%**
- AA-Omniscience: Index **-31.0**, Accuracy **21.4%**, Hallucination **66.6%**

Coding:

- AA-SciCode: **38.8%**; AA Coding Index: **26.6%** (Artificial Analysis)

Long context:

- AA-LCR: **49.7%** at 256K.

Multimodal:

- AA-MMMU-Pro: **56.8%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 38/100.** τ²-bench 41.2%, GDPval-AA 0.0% (AA) — weak end-to-end agentic capability.
- **Reasoning: 42/100.** GPQA 76.9% per-parameter is decent, but AA Index 4.3%, HLE 9.9%, CritPt 0.3% and 66.6% hallucination (AA) cap it.
- **Context window: 62/100.** 256K tokens; AA-LCR 49.7% — average at its tier.
- **Multimodal: 58/100.** Text+image in; MMMU-Pro 56.8%; no audio/video I/O.
- **Coding: 45/100.** AA-SciCode 38.8%, AA Coding Index 26.6% — weak.
- **Cost efficiency: 85/100.** Open weights — cheap self-hosting; hosted price unverified.
- **Overall Score: 49/100.** (38 + 42 + 62 + 58 + 45) / 5 = 49.0 → 49. Best fit: low-stakes high-volume text/image tasks on self-hosted infra; validate before any agentic use.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Artificial Analysis, BenchLM, Mistral docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Small 4 — BenchLM](https://benchlm.ai/models/mistral-small-4)
  - [Mistral Small 4 — Artificial Analysis](https://artificialanalysis.ai/models/mistral-small-4)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
