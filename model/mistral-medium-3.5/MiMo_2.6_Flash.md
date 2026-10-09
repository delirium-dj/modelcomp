# Mistral Medium 3.5 — findings by Mimo V2.6 Flash

- Source: Mistral/`mistral-medium-3.5`
- Date: 2026-10-09 (UTC; original research 2026-09-23, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's dense 128B enterprise mid-tier (2026-04-29 HF release) with 256K context — the open-weights successor slot to Devstral 2 in Vibe's lineup, strong on telecom-domain tool use (τ³-Telecom 91.4%) and SWE-V 77.6% at $1.50/$7.50. Not a frontier MoE; Modified MIT open weights.
- **Provider / access:** Mistral La Plateforme / API, major cloud hosts; weights on Hugging Face `mistralai/Mistral-Medium-3.5-128B` (Modified MIT — internal use free, large-scale redistribution/MaaS triggers gated). Site meta `opencode/mistral-medium-3.5`.
- **Release / knowledge:** 2026-04-29 (HF model card); knowledge cutoff not published in rows reviewed.
- **IDs:** `mistral-medium-3.5` (API slug family); HF `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** 256,000 tokens (HF card / Vibe listing); max output not separately extracted → per platform defaults.
- **Modalities:** text + **image** in (AA confirms text-and-image input, re-checked 2026-10-09 — resolves the first pass's "text-focused" uncertainty and fires the file's own update rule below); text out; reasoning yes (extended thinking); tool calls; instruction following (IFEval/IFBench rows). No audio/video claimed.
- **Pricing (as of 2026-10-09):** $1.50 / $7.50 per 1M in/out — re-confirmed by AA (90% cache discount; $0.50 per Index task; blended ≈ $1.16/1M). Paid; no free tier noted.
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
- LCR / CritPt / Omniscience / AA Index: AA Intelligence Index **14** (#6/65 open-weights-medium class, median 8; $0.50/task; 100M-token "fairly concise" profile; 163.7 t/s #6/65, TTFT 2.24s) — fills the AA-Index gap (AA via model page, 2026-10-09); LCR / CritPt / Omniscience rows still no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (HF card / Vibe — strong for dense 128B)
- LiveCodeBench / SciCode / Vibe / DeepSWE: **no verified public score found** in rows reviewed

Long context:

- 256K window documented; MRCR / RULER retrieval quality: **no verified public score found**

Multimodal:

- **Image input confirmed** (AA model page, 2026-10-09: "Supports text and image input") — resolves the first-pass uncertainty; no MMMU-class score row found yet; no audio/video. (Supersedes the first-pass bullet below, which is retained for history: "No image/audio/video row found in sources reviewed → treated as text-focused for scoring".)

### Normalized scores (1–100)

- **Tool use: 80/100.** τ³-Telecom 91.4 is elite on that domain suite; capped hard by missing public TB2.1/Tau3-banking/GDPval/OSWorld/MCP rows — cannot claim general agentic 90+ on one vertical bench.
- **Reasoning: 74/100.** GPQA 74.8 sits in the mid band (60–80 → 55–65 base, lifted by strong IFBench 68.8 / IFEval 84 and domain LEXam 31.89); HLE 13.8 caps far below frontier.
- **Context window: 75/100.** 256K lands in the 200K–500K tier (65–84; 200K = 70 reference → 256K ≈ 74–76); no public retrieval % to claim higher.
- **Multimodal: 65/100.** Image input now confirmed by AA (2026-10-09) — the file's own update rule ("if vision is confirmed on La Plateforme, re-score into 60–70") fires; scored mid-band at 65 with no MMMU row yet and no audio/video.
- **Coding: 86/100.** SWE-V 77.6 is excellent for a dense 128B open model (near GPT-5.4 / prior-Pro territory); capped by no public LCB/DeepSWE/TB rows and still below Fable/Opus 80–90 class.
- **Cost efficiency: 72/100.** $1.50/$7.50 sits between the ~$1.25/$4.25≈88 and $3/$15≈60 anchors, closer to mid — Modified MIT self-host option improves effective cost at scale but weights license gates large MaaS (AA re-confirmed 90% cache discount, 2026-10-09).
- **Overall Score: 76/100.** Mean of Tool 80 + Reasoning 74 + Context 75 + Multimodal 65 + Coding 86 = 380/5 = 76.0 → **76** (was 74 on 2026-09-23 — the +2 comes solely from the Multimodal re-score on confirmed image input; best-fit: open-weights dense coding/telecom-tool specialist at 256K with vision when $1.50/$7.50 or self-host fits; not a frontier general reasoner).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-23; user-approved second pass)
- Method: public internet research (Hugging Face model card `mistralai/Mistral-Medium-3.5-128B`, Vibe/Devstral-2 succession notes, Mistral La Plateforme pricing rows); second pass 2026-10-09 re-checked [AA Mistral Medium 3.5](https://artificialanalysis.ai/models/mistral-medium-3-5) (image input confirmed, Index 14, pricing, speed) — Grokipedia and mistral.ai/news lookups 404; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Modality resolved:** AA confirms **text + image input** → the first pass's own update rule fired; Multimodal 55→65.
- **Gap closed:** AA Intelligence Index **14** (#6/65 open-weights-medium, median 8); speed 163.7 t/s (#6/65); $0.50/Index-task; 90% cache discount.
- **Confirmed:** $1.50/$7.50, 256K context, 128B dense, Modified MIT, 2026-04-29 release.
- **Still missing:** MMMU-class score for the vision path; LCB/DeepSWE/TB rows; LCR/CritPt/Omniscience.
- **Scores:** Multimodal 55→65; all others held; **Overall 74→76**.
