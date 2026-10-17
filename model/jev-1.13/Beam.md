# Jev 1.13 — findings by Beam

- Source: TypeSafe AI/Jev 1.13, `jev-1.13`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's System One model (Sep 2026): non-generative decision model. Returns choice + probability from fixed options. 346,009 requests for under $10. 95-99% accuracy on IMDB, SST-2, HellaSwag, ARC. JevBench Score 75.3 (#2 of 18). $0.027 per 1,000 decisions.
- **Provider / access:** TypeSafe AI API `jev-1.13.0`.
- **Release / knowledge:** Released Sep 2026; knowledge cutoff not stated.
- **IDs:** `jev-1.13.0`
- **Context window:** Not published (batch budget).
- **Modalities:** text in; structured output (choice + probability). Non-generative.
- **Pricing (as of 2026-10-17):** $0.027 / 1,000 decisions; paid.
- **Architecture:** System One (non-generative). Returns choice + probability from fixed options. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic: not applicable (decision model, not agentic).

Reasoning / knowledge:

- Reasoning: JevBench 75.3 (#2 of 18). 95-99% on IMDB, SST-2, HellaSwag, ARC. 86.7% on Belebele (122 languages). Beats Qwen on 27 of 37 datasets. Beats Gemma on all 37.
- Medical: PubMedQA 78.4% (vs GPT-6 Sol 78.2%). MetaMedQA 74.8% (vs 82.7%). DiagnosisArena-MCQ 59.8% (vs 82.4%). NEJM 61.8% (vs 82.4%).
- Calibration: ECE 0.063 (best on MetaMedQA). AUROC 0.645 (DiagnosisArena).

Coding:

- Coding: not applicable (decision model).

Long context:

- Batch budget; chunks carry model cache. No published context window.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 40/100.** Not applicable (decision model, not agentic).
- **Reasoning: 70/100.** 95-99% on IMDB/SST-2/HellaSwag/ARC, 86.7% Belebele (122 langs), beats Qwen on 27/37 datasets, beats Gemma on all 37. PubMedQA 78.4%. Caps at DiagnosisArena 59.8%.
- **Context window: 50/100.** Batch budget; no published context window.
- **Multimodal: 40/100.** Text-only.
- **Coding: 40/100.** Not applicable (decision model).
- **Cost efficiency: 98/100.** Very cheap $0.027 / 1,000 decisions.
- **Overall Score: 48/100.** Mean of five quality dims (JevBench 75.3, but not comparable to standard LLM benchmarks). Best-fit for high-volume decision tasks at ultra-low cost. Non-generative (System One). Low-confidence for standard LLM comparison.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (JevBench, arXiv 2609.37647, JevBench.xyz, HuggingFace, GitHub); scores are normalized 1–100 interpretations, not official vendor scores. Jev is a non-generative System One model (not a standard LLM). Benchmarks are decision-task specific, not comparable to generative LLM benchmarks.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Jev 1.13 is a TypeSafe AI product. Non-generative. $0.027/1,000 decisions. JevBench Score 75.3 (#2 of 18).<|end|>>2>