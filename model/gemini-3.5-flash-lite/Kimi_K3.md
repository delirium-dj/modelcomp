# Gemini 3.5 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's ultra-cheap lite tier of the Gemini 3.5 Flash line — keeps 1M context and reasonable MRCR retrieval while trading away front-line reasoning (CritPt 0%, HLE 18.8%).
- **Provider / access:** Google Gemini API (`gemini-3.5-flash-lite`), AI Studio.
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `google/gemini-3.5-flash-lite` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Flash-Lite is Google's cheapest 3.x tier — provisional.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Vals 50.2%) (benchlm.ai)
- GDPval-AA: **1139 Elo** (23.5% normalized) (benchlm.ai)
- OSWorld-Verified: **74.0%**; AA EnterpriseOps-Gym: **42.3%**; AA Agentic Index: **15.9%** (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA and Vals agree) (benchlm.ai)
- HLE (AA-HLE): **18.8%** (benchlm.ai)
- MRCRv2: **72.2%**; AA-LCR: **76.0%**; CritPt: **0.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.2**; BenchLM overall **50.96/100, #70 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **29.5% / 34.4%** (benchlm.ai)
- MMLU-Pro (Vals): **85.8%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **75.0%**; SWE-bench Pro: **54.2%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **79.0%** (benchlm.ai)
- AA-SciCode: **41.3%**; AA Coding Index: **49.3** (benchlm.ai)

Long context:

- MRCRv2: **72.2%** across the 1M window; AA-LCR 76.0% (benchlm.ai) — respectable retrieval for the tier.

Multimodal:

- AA-MMMU-Pro: **79.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 66/100.** OSWorld-Verified 74% surprisingly decent; capped by TB 2.1 54%, GDPval 1139, Agentic Index 15.9%.
- **Reasoning: 62/100.** GPQA 83.8% and MMLU-Pro 85.8% fine; capped hard by CritPt 0.0%, HLE 18.8%, AA Index 22.2.
- **Context window: 82/100.** 1M window with MRCRv2 72.2% and LCR 76.0% — the strongest dimension of this lite model.
- **Multimodal: 72/100.** MMMU-Pro 79.0% image input; text-only output caps it.
- **Coding: 70/100.** SWE-bench (Vals) 75.0%, LiveCodeBench 79.0%; capped by Coding Index 49.3 and SciCode 41.3%.
- **Cost efficiency: 92/100.** Cheapest 3.x Gemini tier (provisional — exact price unverified).
- **Overall Score: 70/100.** Mean of the five quality dims (66+62+82+72+70)/5 = 70.4 → 70. Best fit: massive-volume cheap summarization/RAG with 1M context where deep reasoning is unnecessary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
