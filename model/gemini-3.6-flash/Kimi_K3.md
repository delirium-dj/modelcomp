# Gemini 3.6 Flash — findings by Kimi K3

- Source: Google / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-2026 Flash-tier reasoning model in the Gemini 3 family, between 3.5 and 3.7 Flash; strong OSWorld computer-use number and good multimodal grounding at Flash cost.
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`), AI Studio.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `google/gemini-3.6-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image (familial audio/video/PDF) in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Flash-tier below 3.8 Flash ($0.75/$3.75) — provisional.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** — standout computer-use score (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **73.8%** (benchlm.ai); Terminal-Bench 2.1: no verified public score found
- GDPval-AA: **1423 Elo** (38.2% normalized) (benchlm.ai)
- AA Agentic Index: **30.1%** (benchlm.ai)
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

- SWE-bench (Vals): **79.6%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.1%** (benchlm.ai)
- AA-SciCode: **53.4%**; AA Coding Index: **69.2** (benchlm.ai)
- DeepSWE: **49.0%**; CursorBench 3.2: **53.5%** (benchlm.ai)

Long context:

- AA-LCR 80.0% at the 1M window; no MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **83.2%**; Design Arena Website: **1310 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** OSWorld-Verified 83% is excellent; capped by GDPval-AA 1423 and Agentic Index 30.1%.
- **Reasoning: 76/100.** GPQA ~93%, LCR 80.0%; capped by HLE 40.8%, CritPt 10.6%, ARC-AGI-2 60.4%.
- **Context window: 84/100.** 1M window with LCR 80.0%; capped by missing max-window probes.
- **Multimodal: 82/100.** MMMU-Pro 83.2%, Design Arena 1310; text-only output caps it.
- **Coding: 78/100.** LiveCodeBench 88.1%, SWE-bench (Vals) 79.6%; capped by DeepSWE 49% and CursorBench 53.5%.
- **Cost efficiency: 80/100.** Price unverified; scored provisional on Flash-tier positioning.
- **Overall Score: 79/100.** Mean of the five quality dims (76+76+84+82+78)/5 = 79.2 → 79. Best fit: budget computer-use and multimodal coding where 3.7/3.8 Flash pricing is unattractive.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
