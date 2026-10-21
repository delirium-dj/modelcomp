# Ling 2.6 1T — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ling 2.6 1T), `inclusionAI/Ling-2.6-1T`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's April 2026 open-weight (MIT) instruct MoE at trillion scale — ~1.03T total / 63B active, 262K context, SWE-bench Verified 72.2%, LiveCodeBench v6 65.6% and MRCR 80.4%/68.4% at 16K/256K, at $0.30/$2.50 per 1M. It is the *instruct* half of the Ling/Ring pair — **Ring-2.6-1T** is the reasoning sibling built on the same base.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-1T` (MIT; `-base` variant, FP8/compressed quants), requesty and Zenmux at **$0.30/M in, $2.50/M out** (cache $0.06). **Not on OpenCode Zen** and no longer listed in OpenRouter's catalogue.
- **Release / knowledge:** **2026-04-29** (HF repo created); AA says "Released April 2026". Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-1T` (HF), `inclusionai/ling-2.6-1t` (models.dev/requesty).
- **Context window:** **262,144** tokens (`max_position_embeddings` 262144; AA "262k").
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.30/M in, $2.50/M out** (requesty, Zenmux, AA); the OpenRouter route that once existed is gone. Self-host $0 (MIT).
- **Architecture:** MoE, **1.03T total / 63B active** (safetensors 1,025,414,425,344), 80 layers, 256 routed experts (top-8), hidden 8192, vocab 157,184, hybrid MLA + linear attention.

### Raw benchmarks found

> All first-party numbers come from the arXiv "Ling and Ring 2.6 Technical Report" (Table 5) — the model has no Artificial Analysis or BenchLM profile beyond a composite index.

Coding:

- SWE-bench Verified: **72.20%** (report) · LiveCodeBench-v6: **65.58%** (report) · Terminal-Bench 2.0: **40.45%** (report) · PinchBench: **85.24%** (report) · DeepSWE / SciCode / SWE-bench Pro: no verified public score found for Ling 2.6 1T

Agent / tool use:

- Tau2-bench: **78.36%** (Mean@4 across Retail/Airline/Telecom) — the folder's "τ²-Telecom 89.8%" could not be verified: the paper publishes a single aggregate, and the "89.80" that does appear in it is Claude Opus 4.6's IMO-AnswerBench
- ClawEval: **51.00%** (report) · BFCL-v4: **70.64%** · ARCPrize: **50.94%** · AutomationBench / GDPval-AA / OSWorld: no verified public score found (AA's GDPval field is null)

Reasoning / knowledge:

- GPQA-Diamond: **76.17%** (report) / **75.15%** (AA) · HLE: **10.06%** (report) / **8.71%** (AA) · AIME 2026: **87.40%** · HMMT Nov 2025: **81.93%** · IMO-AnswerBench: **65.81%** · SimpleQA-Verified: **31.50%** · C-SimpleQA: **76.53%** · SuperGPQA: **58.32%** · bbeh: **52.37%**
- Artificial Analysis Intelligence Index: **17 (estimated)**, #14/46 — the model card claims "an Intelligence Index of 34" under an earlier AA methodology version; both figures are cited
- AA-LCR: **41.67%** · IFBench: **56.87%** · CritPt: **0.29%** · Omniscience Accuracy / Hallucination Rate: **21.9% / 92.8%** (AA) · AA speed: N/A (the report's own throughput table gives 186→297 tok/s BF16 and 155→341 tok/s FP8, batch-1)

Long context:

- MRCR (16K→256K): **80.37% / 68.43%** (report) · LongBenchV2: **48.31 / 49.30** (report)

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 78.4%, BFCL v4 70.6%, ClawEval 51.0% and PinchBench 85.2% are mid, capped by Terminal-Bench 2.0 40.5%, ARCPrize 50.9% and no GDPval-AA.
- **Reasoning: 58/100.** GPQA 75.2–76.2%, AIME 2026 87.4%, HMMT 81.9% and IMO-AnswerBench 65.8% are mid-band, capped by HLE 8.7–10.1%, SimpleQA-Verified 31.5%, LCR 41.7% and a 92.8% hallucination rate.
- **Context window: 74/100.** 262,144 tokens with **measured** MRCR 80.37% at 16K and 68.43% at 256K — real retrieval evidence puts it in the upper part of the 200K–500K tier.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 66/100.** SWE-bench Verified 72.2%, LiveCodeBench v6 65.6% and PinchBench 85.2% are mid-band, with no DeepSWE, SciCode or SWE-bench Pro rows.
- **Cost efficiency: 88/100.** $0.30/M in and $2.50/M out is a mid-frontier price band, and MIT weights are free to self-host — if you can host a trillion parameters.
- **Overall Score: 54/100.** Mean of the five quality dims = (55 + 58 + 74 + 15 + 66) / 5 = 53.6 → **54**. Best fit: instruction-following at 1T scale with real long-context retrieval — largely superseded by Ling 3.0 Flash and Ling 3.1 Flash.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (inclusionAI Hugging Face model card and config, arXiv Ling/Ring 2.6 technical report, Artificial Analysis, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash.md`, using the same headings.
