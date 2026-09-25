# Gemini 2.5 Pro — findings by Kimi K3

- Source: Google / Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's previous-generation Pro model (Gemini 2.5 era), now mid-pack: still competent on SWE-bench-class coding and vision, but well behind Gemini 3.x on agentic and reasoning suites.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`), Vertex AI, AI Studio.
- **Release / knowledge:** 2025-era release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `google/gemini-2.5-pro` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image (familial audio/video/PDF) in; text out; reasoning: classified Non-Reasoning by benchlm.ai (thinking variants exist); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified current price found in my sources; legacy Pro-tier, typically discounted after Gemini 3.x — provisional.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **54.1%** (benchlm.ai)
- GDPval-AA: **616 Elo** (0.0% normalized — floor of cohort) (benchlm.ai)
- Gert Labs: **42.0%**; AA Agentic Index: **3.5%** (benchlm.ai)
- Terminal-Bench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.0–84.4%** (GPQA 83.0%; AA-GPQA-D 84.4%) (benchlm.ai)
- HLE: **18.8%**; AA-HLE: **22.5%** (benchlm.ai)
- AA-LCR: **69.0%**; CritPt: **2.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **16.1**; BenchLM overall **50.24/100, #73 of 507**
- AA-Omniscience Index: **−16.3%** — Accuracy **39.1%** / Hallucination Rate **90.9%** (benchlm.ai)
- FrontierMath v2 T1–3: **14.1%**, Tier 4: **4.2%**; AA-IFBench: **48.7%** (benchlm.ai)

Coding:

- SWE-bench Verified: **63.8%**; SWE-bench (Vals): **54.4%** (benchlm.ai)
- AA-SciCode: **46.3%**; AA Coding Index: **33.3** (benchlm.ai)
- Vibe Code Bench: **0.4%** (benchlm.ai)
- LiveCodeBench: no verified public score found

Long context:

- AA-LCR 69.0% at the 1M window (benchlm.ai); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **74.9%**; Design Arena Website: **1178 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 54.1% is usable; capped hard by GDPval-AA 616 Elo (cohort floor) and Agentic Index 3.5% — aged out for agentic work.
- **Reasoning: 58/100.** GPQA ~83–84% shows retained knowledge; capped by HLE ~19–22.5%, CritPt 2.6%, FrontierMath 14%, hallucination 90.9%.
- **Context window: 78/100.** 1M window with LCR 69.0% — the spec holds up better than the reasoning behind it.
- **Multimodal: 74/100.** MMMU-Pro 74.9% vision input; text-only output caps it.
- **Coding: 62/100.** SWE-bench Verified 63.8% still respectable; capped by Coding Index 33.3 and Vibe Code Bench 0.4%.
- **Cost efficiency: 70/100.** Price unverified; scored provisional as a discounted legacy Pro model.
- **Overall Score: 65/100.** Mean of the five quality dims (55+58+78+74+62)/5 = 65.4 → 65. Best fit: legacy/compat deployments pinned to the Gemini 2.5 API; new builds should default to 3.x Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
