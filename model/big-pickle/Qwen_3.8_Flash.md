# Big Pickle (GLM‑4.6 stealth) — findings by Qwen 3.8 Flash

- Source: OpenCode Zen stealth `opencode/big-pickle` — community consensus identity: Z.AI GLM‑4.6 open weights (`zai-org/GLM-4.6`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (stealth; consensus identity GLM‑4.6)
- **Short description:** OpenCode Zen's **free stealth reasoning model** — community consensus points at Z.AI GLM‑4.6 weights. Roughly Sonnet‑class live coding at $0 during the promo (LiveCodeBench 81.0%). But the reasoning side is thin: **GPQA 63.2 AA / 74.5 Vals wide harness split, HLE 5.5%, CritPt 0.0%, Vibe Code Bench 3.1%, hallucination 67.6%** — this is not a frontier‑class model even if the coding slice looks great. Identity is unofficial; all scores below are measured GLM‑4.6 numbers, **provisional** for the stealth deployment.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (free promo); underlying GLM‑4.6 also via Z.AI API / open weights.
- **Release / knowledge:** stealth promo 2026; underlying GLM‑4.6 released ~2025; cutoff not independently verified.
- **IDs:** `opencode/big-pickle` (Free Zen ID); consensus base `zai/glm-4.6`.
- **Context window:** **200K total (160K in / 32K out)** per Zen listing; GLM‑4.6 native 200K (benchlm.ai) — consistent.
- **Modalities:** **Text in / text out.** Reasoning yes; tool calls; JSON.
- **Pricing (as of 2026‑10‑02):** Free Zen tier; paid GLM‑4.6 equivalent ~$0.60 / $2.20 per 1M. Cost excluded from Overall.
- **Architecture:** open‑weight GLM‑4.6 (Z.AI); parameter counts undisclosed here.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (benchlm.ai GLM‑4.6 scorecard + OpenCode Zen catalog; stealth ID not independently queryable). Cohort 56.6 sits above Kimi's 52 on Coding / Reasoning reputation; the Vibe Code 3.1% and CritPt 0.0% hard floors justify a discount.

Agent / tool use:

- τ²‑bench: **76.9%** (benchlm.ai)
- All other agentic rows (Terminal‑Bench / GDPval / MCP Atlas / Claw‑Eval): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (AA) / **74.5%** (Vals) — **wide harness split**, lane‑war signal
- HLE (AA‑HLE): **5.5%** — near‑floor
- AA‑LCR: **26.3%**; CritPt: **0.0%** — catastrophic floor
- AA Intelligence Index: **14.9**; BenchLM overall 39.8 / **#115 of 507**
- AA‑Omniscience Index: **−31.7** — accuracy 21.4% / **hallucination 67.6%**
- MMLU‑Pro (Vals): **82.2%**; FrontierMath v2: **3.8%** T1–3 / **2.1%** T4; AA‑IFBench: **36.7%**

Coding:

- LiveCodeBench (Vals): **81.0%** — genuinely strong; stealth coding reputation checks out
- **Vibe Code Bench: 3.1%** — catastrophic floor; whole‑project agentic coding does not work
- SWE‑bench Verified / SciCode: **no verified public score found**

Long context:

- 200K window; **AA‑LCR 26.3%** — poor usable retrieval even at 200K
- No MRCR / RULER rows

Multimodal:

- Text‑only (Zen listing) — floor.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's BenchLM evidence base drives scoring; the wide GPQA harness split and the CritPt 0.0% / Vibe 3.1% hard floors pull the discount.

- **Tool use: 60/100.** τ² 76.9% is one strong row but there's no TB / GDPval / MCP / Claw / τ³ coverage — the agentic profile is essentially unmeasured outside τ². Kimi 62; cohort 63.8 (both slight over‑credit for one row). −2 for the evidence vacuum beyond τ².
- **Reasoning: 52/100.** GPQA Vals 74.5 looks decent but the **AA‑Vals split of 11+ points** is a lane‑war signal; HLE 5.5% is near‑floor; **CritPt 0.0%** is a catastrophic hard floor; AA Index 14.9 and Omniscience hallucination 67.6% confirm mid‑low tier. Kimi 55; −3 for the GPQA harness split reducing confidence in the Vals figure. Cohort 60.6 reputation‑inflated.
- **Context window: 62/100.** 200K = v4 200K–500K band (65–84, 200K anchors 70), but **AA‑LCR 26.3% is severely depressed retrieval at that window** — the "usable depth" discount pushes it below the band floor. Kimi 60; cohort 66.6. 62 respects the hard 200K spec while discounting measured retrieval decay.
- **Multimodal: 12/100.** Text in / text out; no vision evidence. Kimi 15; cohort 25.4 (mild inflation). Scored 12 at strict text‑only floor.
- **Coding: 62/100.** LiveCodeBench 81.0% is a genuinely strong standalone signal for contest / live problems, but **Vibe Code Bench 3.1% is a catastrophic agentic‑coding floor** — the model cannot do real whole‑project work, which is what most 2026 coding deployments require. No SWE‑V / SciCode. Kimi 68 (too high given Vibe 3.1%); cohort 66.6 (same issue). −6 for the Vibe 3.1% hard cap.
- **Cost efficiency: 98/100.** $0 during Zen promo; even paid GLM‑4.6 equivalent ~$0.60 / $2.20 is cheap. Cost excluded from Overall.
- **Overall Score: 50/100.** Mean of Tool 60, Reasoning 52, Context 62, Multimodal 12, Coding 62 = 248/5 = 49.6 → **50**. Best fit: **free everyday live‑coding / chat on Zen while the promo lasts** — LiveCodeBench 81 at $0 is unbeatable value. Not for agentic coding (Vibe 3.1%), not for knowledge work (67.6% hallucination, CritPt 0%), not for long‑context retrieval (LCR 26.3%). Kimi 52; cohort 56.6 (both slightly over‑rate the reasoning profile). Identity remains unofficial.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` benchlm.ai GLM‑4.6 scorecard (stealth ID not independently queryable). Curated `meta.json` correctly flags 200K / text‑only / free. Flagged: (a) **GPQA AA 63.2 vs Vals 74.5 is a wide harness split** — lane war signal, discount the higher number; (b) **Vibe Code Bench 3.1% is a hard agentic‑coding floor** that LiveCodeBench 81 cannot rescue; (c) **CritPt 0.0%** and **hallucination 67.6%** together make this a wrong choice for knowledge work.
- Revisit trigger: when Zen discloses the stealth ID's canonical identity, or when the free promo ends.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
