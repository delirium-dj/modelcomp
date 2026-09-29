# Gemini 3 Flash — findings by Kimi K3

- Source: Google / Gemini 3 Flash (`gemini-3-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's entry Flash model of the Gemini 3 generation — non-reasoning (per BenchLM classification), fast and cheap, with strong multilingual QA but weak frontier reasoning. Succeeded upward by 3.5/3.6/3.7/3.8 Flash, but still live and priced on OpenCode Zen as of 2026-09-28.
- **Provider / access:** Google Gemini API (`gemini-3-flash`), AI Studio; confirmed live on OpenCode Zen (`opencode/gemini-3-flash`, endpoint `zen/v1/models/gemini-3-flash`) — verified 2026-09-29.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `google/gemini-3-flash` (Gemini API); `gemini-3-flash` on OpenCode Zen (verified 2026-09-29).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured; Gemini-3 family supports more); text out; reasoning: no (non-reasoning per benchlm.ai); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.50/1M input, $3.00/1M output, cached read $0.05/1M (OpenCode Zen pricing table, updated 2026-09-28; standard Gemini Flash-tier pricing).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **43.3%** (benchlm.ai)
- Claw-Eval: **49.2%** (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **53.9%** (benchlm.ai); other harnesses: no verified public score found
- Gert Labs: **56.6%**; JobBench: **11.4%** (benchlm.ai)
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA); 87.9% (Vals) (benchlm.ai)
- HLE (AA-HLE): **15.0%** (benchlm.ai)
- AA-LCR: **55.3%**; CritPt: **1.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **17.9**; BenchLM overall **55.61/100, #52 of 507**
- AA-Omniscience Index: **−4.3%** — Accuracy **45.8%** / Hallucination Rate **92.4%** (benchlm.ai)
- MMLU-Pro (Vals): **88.6%**; AA Global-MMLU-Lite: **92.7%** (benchlm.ai)
- FrontierMath v2 T1–3: **35.6%**, Tier 4: **4.2%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **75.0%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **85.6%** (benchlm.ai)
- Vibe Code Bench: **20.2%** (benchlm.ai)
- SciCode / AA Coding Index: no verified public score found

Long context:

- AA-LCR 55.3% at the 1M window; no MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **78.6%**; Design Arena Website: **1207 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 62/100.** Claw-Eval 49.2% and TB 2.1 (Vals) 53.9% are usable; capped by τ²-bench 43.3% and JobBench 11.4%.
- **Reasoning: 60/100.** Decent static QA (GPQA 81–88%, MMLU-Pro 88.6%) but near-floor on hard reasoning (HLE 15%, CritPt 1.4%, AA Index 17.9) — non-reasoning profile.
- **Context window: 88/100.** 1M spec window (95–100 band) but with measured weak full-context retrieval (AA-LCR 55.3%), scored below the band floor.
- **Multimodal: 76/100.** MMMU-Pro 78.6% vision input; wider family modality support unverified for this ID; text-only output caps it.
- **Coding: 78/100.** LiveCodeBench 85.6% and SWE-bench (Vals) 75.0% are strong for the tier; capped hard by Vibe Code Bench 20.2%.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M ($0.05 cached) verified on Zen — the reference flash price point for the ≈92 band; excellent for cheap, fast workloads.
- **Overall Score: 73/100.** Mean of the five quality dims (62+60+88+76+78)/5 = 72.8 → 73. Best fit: cheap, fast multilingual chat/QA and lightweight coding where depth of reasoning is not required.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (OpenCode Zen pricing + deprecation docs updated 2026-09-28, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed model still live on Zen (not deprecated) at $0.50/$3 ($0.05 cached) — pricing drift fixed; Cost 85→92 per price band; Context 80→88 (1M band with weak-LCR cap); Overall 71→73.
- Future sources: add a new file next to this one using the same headings.
