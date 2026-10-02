# Mistral Medium 3.5 — findings by Qwen 3.8 Flash

- Source: Mistral AI (`mistral/mistral-medium-3.5`; La Plateforme API, Zen listing `opencode/mistral-medium-3.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weights mid-size reasoning model — genuinely fast (~144 tok/s), EU-hosted, image-capable, with one elite spike (τ²-Telecom **94.2%**) and one decent anchor (GPQA 74.8 AA, SWE-bench Vals 66.4), but **lower-mid everywhere else**: AA Intelligence Index 14.2 (#265), HLE 13.8, CritPt 0.0, TB 4.0 0.0, and a catastrophic Omniscience grounding score (non-hallucination 18.4%).
- **Provider / access:** Mistral La Plateforme API; open weights (AA Openness 33.3); OpenRouter; EU sovereignty hosting is the main commercial pitch.
- **Release / knowledge:** released 2026-04-29 (BenchLeader); cutoff not verified. (Mistral's own comms date the Medium-3.x line from mid-2025 — folder-internal date conflict flagged, neither changes the capability panel.)
- **IDs:** `mistral-medium-3.5`; Zen `opencode/mistral-medium-3.5`. No free Zen ID verified.
- **Context window:** **262K** (BenchLeader) — the curated `meta.json` "128K total" is a generic placeholder contradicted by the panel; corrected here.
- **Modalities:** **Text + image in / text out**; reasoning mode yes; tool calls; JSON. Curated "Text in/out" understates vision (MMMU-Pro 64.9 is a measured row) — corrected.
- **Pricing (as of 2026-10-02):** **$1.50 / $7.50 per 1M** (La Plateforme, via BenchLeader) — pricier than its capability tier; open weights soften self-host economics. Cost excluded from Overall.
- **Architecture:** open-weights; params undisclosed in the retrieved card.

### Raw benchmarks found

> Aggregated via the qualifying `Kimi_K3.md` (BenchLeader multi-source panel: AA / Vals / LMArena / Epoch, fetched 2026-09-24). This is one of the cohort's most complete independent panels — the low score is measured, not evidence-starved.

Agent / tool use:

- τ²-Bench Telecom (AA): **94.2%** (#34) — standout; τ²-Banking (AA): **15.1%** — collapse; bimodal like GLM 5.2 but two tiers lower
- Terminal-Bench 2.1: **50.6%** (AA; Vals 39.0); TB-Hard 33.3; **TB 4.0: 0.0%**
- GDPval (AA): **12.4%**; Harvey LAB: 69.1% (#19); EnterpriseOps-Gym 33.7; AutomationBench 6.3; LMArena Agent score **−11.6**

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (AA); (Vals, medium effort: 34.9 — effort settings swing this model hard)
- HLE: **13.8%**; CritPt: **0.0%**; MMLU-Pro (Vals) 75.3; IFBench 68.8 (#77) — instruction-following is its best trait
- AA Intelligence Index: **14.2** (#265 of the panel); BenchLeader #328/736
- **AA-Omniscience: accuracy 24.7% / non-hallucination 18.4% (index −36.8)** — among the worst grounding rows in the entire queue

Coding:

- SWE-bench (Vals): **66.4%** (#69); SciCode (AA): 40.2; LMArena Coding 1479
- **Vibe Code Bench v1.1: 2.9%; Code Migration (Vals): 5.1%; TB 4.0 0.0%** — autonomous/agentic coding is effectively non-functional
- SWE-bench Verified / LiveCodeBench: no verified row

Long context:

- AA-LCR: **69.3%** (#195); **MLCR: 1.7%** — multi-lingual long-context is a floor row; no MRCR.

Multimodal:

- MMMU-Pro: **64.9%**; LMArena Vision: 1222 (#69); Vals Multimodal Index 34.8 — real but unremarkable vision.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Divergence note: this folder's **cohort of 70.3 is the largest reputation-vs-measurement gap I've found outside grok-4.1** — six high-gate raters scored ~14 points above the complete BenchLeader panel that sits in this very folder.

- **Tool use: 54/100.** τ²-Telecom 94.2 and Harvey LAB 69.1 show the scaffolding works when the domain is scripted; GDPval 12.4, AutomationBench 6.3, LMArena Agent −11.6 and TB4.0 0.0 show it doesn't transfer. Effectively agrees with Kimi K3's measured 55.
- **Reasoning: 54/100.** GPQA 74.8 and strong IFBench are respectable; HLE 13.8 / CritPt 0.0 / AA 14.2 / Omniscience −36.8 are not. Low-50s is the measured truth; the cohort's 68.7 has no row to point at.
- **Context window: 64/100.** 262K native lands at the bottom edge of the 200K–500K band (65–84) once LCR 69.3 and the MLCR 1.7% floor are priced in — matching Kimi K3's 64, with the curated 128K placeholder corrected out of the calculation.
- **Multimodal: 62/100.** Text+image in / text out = 60–70 band; MMMU-Pro 64.9 mid-band; no audio/video. Cohort's 63 and this agree.
- **Coding: 56/100.** SWE-Vals 66.4 under a generous harness, but Vibe 2.9 / Code-Migration 5.1 / TB4.0 0.0 means it cannot be trusted to do agentic software work autonomously; SciCode 40.2 mid-low.
- **Cost efficiency: 48/100.** $1.50/$7.50 sits well above the $1.25/$4.25→88 anchor for the measured capability; open weights + EU hosting are the actual value story. Cost excluded from Overall.
- **Overall Score: 58/100.** Mean of Tool 54, Reasoning 54, Context 64, Multimodal 62, Coding 56 = 290/5 = 58.0 → **58**. Best fit: **EU-sovereignty deployments and fast instruction-following chat/API work where weights access and hosting jurisdiction matter more than raw capability** — explicitly not an agentic-coding or long-horizon pick. Kimi K3's 56 is the corroborating independent read; the cohort's 70.3 is scored on brand and is ~12 points above what the full panel supports.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLeader aggregate (AA/Vals/LMArena/Epoch rows above) + curated `meta.json` (placeholders corrected: real window 262K not 128K; image input exists despite "Text in/out"). Release-date conflict (BenchLeader 2026-04-29 vs Mistral-comms mid-2025 lineage) flagged, unresolved, capability-neutral. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) the ~12-point reputation gap vs this folder's own cohort, (b) Omniscience non-hallucination 18.4% as the disqualifier for unsupervised use, (c) the τ²-Telecom-vs-Banking bimodality mirroring GLM 5.2 at a lower level.
- Revisit trigger: if Mistral ships a Medium refresh with SWE-Verified/LCB rows or an AA re-index above ~20, re-score Coding/Reasoning; effort-setting standardization (GPQA 34.9↔74.8 swing) would also change Reasoning materially.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
