# Mistral Medium 3.5 — findings by Mimo V2.6 Flash

- Source: Mistral/`mistral-medium-3.5`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's dense 128B enterprise mid-tier (2026-04-29 HF release) with 256K context — the open-weights successor slot to Devstral 2 in Vibe's lineup, strong on telecom-domain tool use (τ³-Telecom 91.4%) and SWE-V 77.6% at $1.50/$7.50. Not a frontier MoE; Modified MIT open weights.
- **Provider / access:** Mistral La Plateforme / API, major cloud hosts; weights on Hugging Face `mistralai/Mistral-Medium-3.5-128B` (Modified MIT — internal use free, large-scale redistribution/MaaS triggers gated). Site meta `opencode/mistral-medium-3.5`.
- **Release / knowledge:** 2026-04-29 (HF model card); knowledge cutoff not published in rows reviewed.
- **IDs:** `mistral-medium-3.5` (API slug family); HF `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** 256,000 tokens (HF card / Vibe listing); max output not separately extracted → per platform defaults.
- **Modalities:** text in (image support not claimed in rows reviewed → treat text-focused); text out; tool calls; instruction following (IFEval/IFBench rows).
- **Pricing (as of 2026-09-23):** $1.50 / $7.50 per 1M in/out (prior public price rows for Medium 3.5 tier — verify live La Plateforme rate card). Paid; no free tier noted.
- **Architecture:** dense 128B parameters (not MoE); Modified MIT open weights.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- τ³-Telecom: **91.4%** (HF card / Vibe listing — telecom-domain tool benchmark, top-of-class for this tier)
- Terminal-Bench / Tau3-Banking / GDPval / OSWorld / MCP Atlas: **no verified public score found** in rows reviewed
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (HF card)
- HLE: **13.8%** (HF card — mid-tier, far below frontier 40%+)
- IFEval: **84.0%**; IFBench: **68.8%** (HF card)
- LEXam-hard: **31.89** (HF card — legal exam hard split)
- LCR / CritPt / Omniscience / AA Index: **no verified public score found** in rows reviewed

Coding:

- SWE-bench Verified: **77.6%** (HF card / Vibe — strong for dense 128B)
- LiveCodeBench / SciCode / Vibe / DeepSWE: **no verified public score found** in rows reviewed

Long context:

- 256K window documented; MRCR / RULER retrieval quality: **no verified public score found**

Multimodal:

- No image/audio/video row found in sources reviewed → treated as text-focused for scoring; **no verified public score** for MMMU-class suites.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ³-Telecom 91.4 is elite on that domain suite; capped hard by missing public TB2.1/Tau3-banking/GDPval/OSWorld/MCP rows — cannot claim general agentic 90+ on one vertical bench.
- **Reasoning: 74/100.** GPQA 74.8 sits in the mid band (60–80 → 55–65 base, lifted by strong IFBench 68.8 / IFEval 84 and domain LEXam 31.89); HLE 13.8 caps far below frontier.
- **Context window: 75/100.** 256K lands in the 200K–500K tier (65–84; 200K = 70 reference → 256K ≈ 74–76); no public retrieval % to claim higher.
- **Multimodal: 55/100.** No confirmed image/audio/video input in rows reviewed and no MMMU row — scored conservatively above pure text-only 10–20 only if platform docs later confirm vision; currently **provisional low band pending modalities confirmation** (flagged, not invented as 60+). *Update rule: if vision is confirmed on La Plateforme, re-score into 60–70.*
- **Coding: 86/100.** SWE-V 77.6 is excellent for a dense 128B open model (near GPT-5.4 / prior-Pro territory); capped by no public LCB/DeepSWE/TB rows and still below Fable/Opus 80–90 class.
- **Cost efficiency: 72/100.** $1.50/$7.50 sits between the ~$1.25/$4.25≈88 and $3/$15≈60 anchors, closer to mid — Modified MIT self-host option improves effective cost at scale but weights license gates large MaaS.
- **Overall Score: 74/100.** Mean of Tool 80 + Reasoning 74 + Context 75 + Multimodal 55 + Coding 86 = 370/5 = 74.0 → **74** (best-fit: open-weights dense coding/telecom-tool specialist at 256K when $1.50/$7.50 or self-host fits; not a frontier general reasoner).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Hugging Face model card `mistralai/Mistral-Medium-3.5-128B`, Vibe/Devstral-2 succession notes, Mistral La Plateforme pricing rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
