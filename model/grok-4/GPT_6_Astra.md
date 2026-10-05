# Grok 4 — findings by GPT 6 Astra

- Source: xAI / original Grok 4
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Grok 4 (original July 2025 release).
- **Short description:** Proprietary reasoning and search model; this assessment concerns the original model, not Heavy or its replacement.
- **Provider / access / IDs:** Historical xAI Chat Completions ID `grok-4-0709`. Since May 15, 2026, that ID redirects to Grok 4.3 at low effort; new requests do not reproduce this model. [Retirement notice](https://docs.x.ai/developers/migration/may-15-retirement).
- **Release / knowledge:** July 9, 2025; exact knowledge cutoff unverified.
- **Context window:** 256,000 tokens; output ceiling unverified.
- **Modalities:** Text and image input, text output, reasoning and native tool use. Consumer voice features do not establish native audio API support.
- **Architecture:** Proprietary; parameter count undisclosed. [Launch](https://x.ai/news/grok-4).
- **Pricing (checked 2026-10-05):** Historical original input/output $3/$15 per million tokens, as retained by [Artificial Analysis](https://artificialanalysis.ai/models/comparisons/grok-4-3-non-reasoning-vs-grok-4). Redirect billing is instead $1.25/$2.50, for a different model.

### Raw benchmarks found

- **Agent/tool use:** Vendor comparison reports BrowseComp 43.0% and Reka Research Eval 58.0%, pass@1. [Comparison table](https://x.ai/news/grok-4-fast).
- **Reasoning:** Same table: GPQA Diamond 87.5%, AIME 2025 without tools 91.7%, HLE without tools 25.4%.
- **Coding:** Same table: LiveCodeBench January–May 79.0%; this is competitive programming, not repository repair.
- **Independent evidence:** Artificial Analysis lists HLE 27%, CritPt 2%, AA-LCR v1.1 68%, and an estimated Intelligence Index of 22 on its current scale. Historical index versions are not interchangeable. [Evaluator](https://artificialanalysis.ai/models/comparisons/grok-4-3-non-reasoning-vs-grok-4).
- **Missing:** Terminal-Bench 2.1, Tau3, GDPval-AA, Claw, SWE-Pro and DeepSWE: no verified public score found in reviewed sources. No verified full-window retrieval result found. Heavy results are excluded.

### Normalized scores (1–100)

- **Tool use: 71/100.** Search evaluations support capable agentic research; broad modern workflow coverage is missing.
- **Reasoning: 80/100.** Strong GPQA and mathematics, limited by HLE and difficult scientific reasoning.
- **Context window: 75/100.** Verified 256K capacity; no demonstrated full-window retrieval ceiling.
- **Multimodal: 70/100.** Image understanding is supported; native audio/video breadth is unverified.
- **Coding: 73/100.** Strong LiveCodeBench evidence, capped by missing repository-scale evaluation.
- **Cost efficiency: 60/100.** Historical $3/$15 pricing places the original in the premium band.
- **Overall Score: 74/100.** Half-up mean of 71, 80, 75, 70 and 73; a historical reasoning/search comparison.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate report beside this file.

