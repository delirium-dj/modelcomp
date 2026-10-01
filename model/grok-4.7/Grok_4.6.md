# Grok 4.7 — findings by Grok 4.6

- Source: xAI / SpaceXAI (`grok-4.7`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI’s September 2026 (AA: 2026-09-21) coding/knowledge-work flagship on a **new larger base** than Grok 4.6, same **$2/$6** list and 500K context. Trained for multi-hour tasks and the Grok Bot harness. Not Grok 4.6.
- **Provider / access:** Grok API `grok-4.7`; Cursor and Grok Build; fast variant at 2× price / 2× speed (x.ai news). Reasoning low–xhigh.
- **Release / knowledge:** September 2026 (AA model page 2026-09-21). Knowledge cutoff not verified on the AA card in this pass.
- **IDs:** `xai/grok-4.7`. No OpenCode Zen Free ID found.
- **Context window:** 500,000 tokens (AA / x.ai; unchanged vs 4.6). Cursor long-prompt billing noted above 256K (VentureBeat).
- **Modalities:** text and image in; text out (AA).
- **Pricing (as of 2026-10-01):** **$2 / $6** per 1M; cache **$0.50** (AA article; same as 4.6). Fast: $4/$12. Cursor: >256K standard $4/$12, Fast $6/$18 (VentureBeat). AA cost/task ~**$3.74** xhigh / **$2.73** high because of ~81k output tokens per Index task.
- **Architecture:** proprietary; new larger base vs 4.6 (x.ai).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~26%** at xhigh (VentureBeat citing AA; vs GPT-6 Astra xhigh 59.6%, Opus 5 max ~49%)
- GDPval-AA: **1695** Elo, +90 vs Grok 4.6 high (AA article)
- AA-Briefcase: **1657** Elo, +111 vs 4.6 high (AA article)
- AutomationBench-AA / Tau3 / Claw-Eval: no verified public numeric score found in this pass

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** at xhigh (AA model page / article; +2 vs 4.6 on the **v4.3** Index — not comparable to 4.6’s older Index 61)
- Harvey Legal Agent Benchmark / HealthBench Professional: vendor charts on x.ai (exact % not extracted as a clean independent table here)
- GPQA / HLE / CritPt / LCR: no verified public % found in this pass beyond Index membership

Coding:

- CursorBench 4.0: vendor “around **46%**” top score at ~$6/task (OfficeChai reading of x.ai chart); Fable 5.1 Max **51.8%** at ~$17/task
- DeepSWE v1.1: VentureBeat cites **71.0%** vs Grok 4.6 **65.2%** (xAI comparison); x.ai marks a high-effort asterisk on 4.7 DeepSWE
- Coding Agent Index: **56**, +9 vs 4.6, overtaking GPT-5.6 Sol (AA article)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 500K native. AA-LCR v1.1 is in Index v4.3.2; a standalone LCR % was not on the AA article snippet. MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1695 and Briefcase 1657 are near the ~1750+/frontier agent-knowledge band. Capped hard by TB 4.0 ~26% (far from 60%+ closed frontier) and missing Tau3.
- **Reasoning: 84/100.** Index 46 is in the same 2026 v4.3 cluster as MiMo-V2.6-Pro (46), below Sonnet 5.5’s 56. Capped by no public GPQA/HLE row in this pass.
- **Context window: 88/100.** 500K → 85–94; 100 needs 1M plus ~98% retrieval. Token verbosity is a cost issue, not a smaller window.
- **Multimodal: 65/100.** Image in, text out → 60–70.
- **Coding: 86/100.** DeepSWE 71% (vendor high-effort) sits just under 74%+; Coding Agent Index 56 is a clear gain vs 4.6. Capped by CursorBench ~46% and TB 4.0 26%.
- **Cost efficiency: 74/100.** List $2/$6 matches 4.6 (~78 before verbosity). AA $3.74/xhigh-task is worse than GPT-5.6 Sol Max ~$1.99 despite a cheaper sticker. Fast/Cursor surcharges. Not $0.
- **Overall Score: 81/100.** (84+84+88+65+86)/5 = 81.4 → 81 half-up. Best-fit: Grok coding/knowledge upgrade at the same $2/$6 sticker if you can absorb 2× token use vs 4.6; not the TB 4.0 leader.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page + Grok 4.7 article, VentureBeat, x.ai news, OfficeChai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
