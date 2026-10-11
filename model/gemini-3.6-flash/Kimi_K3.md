# Gemini 3.6 Flash — findings by Kimi K3

- Source: Google / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-2026 Flash-tier reasoning model in the Gemini 3 family, between 3.5 and 3.7 Flash; strong OSWorld computer-use number and good multimodal grounding at Flash cost.
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`), AI Studio. Official evals methodology: deepmind.google/models/evals-methodology/gemini-3-6-flash/.
- **Release / knowledge:** Released 2026-07-21 (OpenCode Data, newly verified); knowledge cutoff 2026-03 (OpenCode Data, new).
- **IDs:** `google/gemini-3.6-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **66K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video/audio/PDF in (OpenCode Data confirms familial coverage); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $0.75/M input, $3.75/M output, $0.07/M cached (OpenCode Data catalog — verified now; equals 3.8 Flash's list price, not below it as provisionally assumed).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** — standout computer-use score (official evals-methodology page via OpenCode Data; matches benchlm.ai)
- Terminal-Bench: **78.0%** (official page via OpenCode Data; benchlm.ai/Vals TB 2.1: 73.8%)
- GDPval-AA: **1421 Elo** (official page; benchlm.ai had 1423 — consistent); AA Agentic Index: **30.1%** (benchlm.ai)
- MLE-Bench (average position): **63.9%** (official page — new this pass)
- Tau2/Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA); 93.4% (Vals) (benchlm.ai)
- HLE (AA-HLE): **40.8%** (benchlm.ai)
- AA-LCR: **80.0%**; CritPt: **10.6%** (benchlm.ai)
- ARC-AGI-1: **91.2%**; ARC-AGI-2: **60.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **34.0**; BenchLM overall **64.58/100, #29 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **50.0% / 55.6%** (benchlm.ai)
- MMLU-Pro (Vals): **89.3%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **79.6%**; SWE-Bench Pro: **58.7%** resolve rate (official page — new this pass); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.1%** (benchlm.ai)
- AA-SciCode: **53.4%**; AA Coding Index: **69.2** (benchlm.ai)
- DeepSWE: **49.0%** (official page; matches benchlm.ai); CursorBench 3.2: **53.5%** (benchlm.ai)

Long context:

- GDM-MRCR v2: **91.8% / 54.0%** across window lengths (official evals-methodology page — new this pass; resolves my earlier "no MRCR rows" gap; decay at the far end noted); AA-LCR 80.0% at the 1M window (benchlm.ai).

Multimodal:

- AA-MMMU-Pro: **83.2%**; CharXiv Reasoning: **85.2% / 89.4%** (official page — new); Design Arena Website: **1310 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** Unchanged: OSWorld-Verified 83% excellent (official-confirmed); capped by GDPval-AA ~1421 and Agentic Index 30.1%.
- **Reasoning: 76/100.** Unchanged: GPQA ~93%, LCR 80.0%; capped by HLE 40.8%, CritPt 10.6%, ARC-AGI-2 60.4%.
- **Context window: 86/100.** Raised from 84: official GDM-MRCR (91.8%/54%) now shows measured retrieval that holds up far better than 3.5 Flash's 26.6% collapse at max window; still capped by the 54% far-end decay.
- **Multimodal: 82/100.** Unchanged: MMMU-Pro 83.2%, CharXiv up to 89.4% (official), Design Arena 1310; text-only output caps it.
- **Coding: 78/100.** Unchanged: LiveCodeBench 88.1%, SWE-bench Pro 58.7% (official, new), MLE-Bench 63.9%; capped by DeepSWE 49% and CursorBench 53.5%.
- **Cost efficiency: 80/100.** Verified price $0.75/$3.75 ($0.07 cached) equals 3.8 Flash's tier — the provisional estimate survived verification.
- **Overall Score: 80/100.** Mean of the five quality dims (76+76+86+82+78)/5 = 79.6 → 80 (raised from 79). Best fit: budget computer-use and multimodal coding where 3.7/3.8 Flash pricing is unattractive.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official deepmind.google evals-methodology page for Gemini 3.6 Flash transcribed by OpenCode Data `google/gemini-3-6-flash` incl. pricing/release facts; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release date (2026-07-21), cutoff (2026-03), pricing and 66K max output; added SWE-Bench Pro / MLE-Bench / CharXiv / GDM-MRCR official rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
