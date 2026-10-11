# Gemini 2.5 Pro — findings by Kimi K3

- Source: Google / Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's previous-generation Pro model (Gemini 2.5 era), now mid-pack: still competent on SWE-bench-class coding and vision, but well behind Gemini 3.x on agentic and reasoning suites.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`), Vertex AI, AI Studio.
- **Release / knowledge:** Released 2025-06-17 (OpenCode Data, newly verified — first pass had "2025-era, date unverified"); knowledge cutoff listed 2025-01 (OpenCode Data).
- **IDs:** `google/gemini-2.5-pro` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data confirms); max output **66K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/audio/video/PDF in (OpenCode Data — full Gemini-family coverage confirmed); text out; tool calls; JSON mode. CONFLICT: benchlm.ai classified base model as non-reasoning while the catalog lists Reasoning: Yes (thinking variants; noted).
- **Pricing (as of 2026-10-11):** $1.25/M input, $10.00/M output, $0.13/M cached (OpenCode Data catalog — verified now; legacy Pro-tier price, not discounted post-3.x).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **54.1%** (benchlm.ai)
- GDPval-AA: **616 Elo** (0.0% normalized — floor of cohort) (benchlm.ai)
- Gert Labs: **42.0%**; AA Agentic Index: **3.5%** (benchlm.ai)
- Terminal-Bench Hard: **26.5%** success rate (openrouter.ai/google/gemini-2.5-pro/benchmarks via OpenCode Data — new this pass, fills the TB gap with a hard-harness row); Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.0–84.4%** (GPQA 83.0%; AA-GPQA-D 84.4%) (benchlm.ai)
- HLE: **18.8%**; AA-HLE: **22.5%** (benchlm.ai)
- AA-LCR: **69.0%**; CritPt: **2.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **16.1**; BenchLM overall **50.24/100, #73 of 507**
- AA-Omniscience Index: **−16.3%** — Accuracy **39.1%** / Hallucination Rate **90.9%** (benchlm.ai)
- FrontierMath v2 T1–3: **14.1%**, Tier 4: **4.2%**; AA-IFBench: **48.7%** (benchlm.ai)

Coding:

- SWE-bench Verified: **63.8%**; SWE-bench (Vals): **54.4%** (benchlm.ai)
- Aider Polyglot: **83.1%** (aider.chat leaderboards via OpenCode Data — new this pass; strong practical-edit signal)
- SciCode: **42.8%** (openrouter.ai benchmarks — new); AA-SciCode: **46.3%** (benchlm.ai, close); AA Coding Index: **32–33.3** (openrouter 32 / benchlm 33.3)
- Vibe Code Bench: **0.4%** (benchlm.ai)
- LiveCodeBench: no verified public score found

Long context:

- AA-LCR 69.0% at the 1M window (benchlm.ai); 66K output catalog-verified; no MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **74.9%**; Design Arena Website: **1178 Elo** (benchlm.ai); full input coverage incl. audio+video+PDF (OpenCode Data)

### Normalized scores (1–100)

- **Tool use: 55/100.** Unchanged: τ²-bench 54.1% usable; capped hard by GDPval-AA 616 Elo (cohort floor), Agentic Index 3.5%, TB-Hard 26.5%.
- **Reasoning: 58/100.** Unchanged: GPQA ~83–84% shows retained knowledge; capped by HLE ~19–22.5%, CritPt 2.6%, hallucination 90.9%.
- **Context window: 78/100.** Unchanged: 1M window / 66K output verified with LCR 69.0% — the spec holds up better than the reasoning behind it.
- **Multimodal: 74/100.** Unchanged: MMMU-Pro 74.9%; full-width input now confirmed (audio+video+PDF); text-only output caps it.
- **Coding: 62/100.** Unchanged: SWE-bench Verified 63.8% respectable + Aider Polyglot 83.1% (new, strong); capped by Coding Index ~33, SciCode ~43% and Vibe Code Bench 0.4%.
- **Cost efficiency: 70/100.** Verified now ($1.25/$10): legacy pricing that never got discounted — fine for continuity, poor versus current Flash models.
- **Overall Score: 65/100.** Mean of the five quality dims (55+58+78+74+62)/5 = 65.4 → 65 (unchanged). Best fit: legacy/compat deployments pinned to the Gemini 2.5 API; new builds should default to 3.x Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `google/gemini-2.5-pro` — verified release/cutoff/pricing/modalities; new independent rows from aider.chat and OpenRouter benchmark tables; benchlm.ai scorecard from first pass). Flagged the reasoning-mode classification conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
