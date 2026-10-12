# Gemini 3.5 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's ultra-cheap lite tier of the Gemini 3.5 Flash line — keeps 1M context and reasonable MRCR retrieval while trading away front-line reasoning (CritPt 0%, HLE 18.8%).
- **Provider / access:** Google Gemini API (`gemini-3.5-flash-lite`), AI Studio. Official model card: deepmind.google/models/model-cards/gemini-3-5-flash-lite/.
- **Release / knowledge:** Released 2026-07-21 (OpenCode Data; identical to 3.6 Flash's catalog date — likely a shared-family listing artifact, flagged) ; knowledge cutoff 2026-03 (OpenCode Data).
- **IDs:** `google/gemini-3.5-flash-lite` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data confirms); max output **66K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video/audio/PDF in (OpenCode Data — full family input confirmed); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $0.30/M input, $2.50/M output, $0.03/M cached (OpenCode Data catalog — verified now; cheapest Gemini 3.x reasoning tier).
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **54.0%** (official DeepMind model card via OpenCode Data; matches benchlm.ai TB 2.1; Vals 50.2%)
- GDPval-AA: **1140 Elo** (official card; matches benchlm.ai's 1139)
- OSWorld-Verified: **74.0%** (official card; matches benchlm.ai); AA EnterpriseOps-Gym: **42.3%**; AA Agentic Index: **15.9%** (benchlm.ai)
- MLE-Bench (average position): **39.2%** (official card — new this pass)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA and Vals agree) (benchlm.ai)
- HLE (AA-HLE): **18.8%** (benchlm.ai)
- MRCRv2: **72.2%** / far-end **21.3%** (official card via OpenCode Data; matches benchlm.ai's 72.2; the 21.3% far-window row is new); AA-LCR: **76.0%**; CritPt: **0.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.2**; BenchLM overall **50.96/100, #70 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **29.5% / 34.4%** (benchlm.ai)
- MMLU-Pro (Vals): **85.8%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **75.0%**; SWE-bench Pro: **54.2%** (official card; matches benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **79.0%** (benchlm.ai)
- AA-SciCode: **41.3%**; AA Coding Index: **49.3** (benchlm.ai)

Long context:

- GDM-MRCR v2: **72.2% / 21.3%** across window lengths (official card — the 1M-far-end collapse is now measured); AA-LCR 76.0% (benchlm.ai).

Multimodal:

- AA-MMMU-Pro: **79.0%** (benchlm.ai); CharXiv Reasoning: **74.5% / 76.5%** (official card — new this pass); full image/video/audio/PDF input confirmed.

### Normalized scores (1–100)

- **Tool use: 66/100.** Unchanged: OSWorld-Verified 74% decent for the tier; capped by TB 54%, GDPval 1140, Agentic Index 15.9%.
- **Reasoning: 62/100.** Unchanged: GPQA 83.8% and MMLU-Pro 85.8% fine; capped hard by CritPt 0.0%, HLE 18.8%, AA Index 22.2.
- **Context window: 82/100.** Unchanged: 1M window with mid-window MRCR 72.2% but 21.3% at the far end (official-measured this pass) — the strongest dimension, held in band by the decay.
- **Multimodal: 72/100.** Unchanged: MMMU-Pro 79.0%, CharXiv up to 76.5%, full input modality coverage now confirmed; text-only output caps it.
- **Coding: 70/100.** Unchanged: SWE-bench (Vals) 75.0%, SWE-bench Pro 54.2% (official-confirmed), LiveCodeBench 79.0%; capped by Coding Index 49.3 and SciCode 41.3%.
- **Cost efficiency: 92/100.** Verified now ($0.30/$2.50, $0.03 cached): cheapest 3.x Gemini tier confirmed — provisional flag removed.
- **Overall Score: 70/100.** Mean of the five quality dims (66+62+82+72+70)/5 = 70.4 → 70 (unchanged). Best fit: massive-volume cheap summarization/RAG with 1M context where deep reasoning is unnecessary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official deepmind.google/models/model-cards/gemini-3-5-flash-lite/ table transcribed by OpenCode Data `google/gemini-3-5-flash-lite` incl. pricing/release; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release (2026-07-21, with the 3.6-Flash same-date catalog artifact flagged), cutoff, 66K output, pricing; added MLE-Bench / CharXiv / far-end MRCR rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
