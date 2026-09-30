# Mistral Medium 3.5 — findings by Kimi K3

- Source: Mistral AI / Mistral Medium 3.5 (`mistral-medium-3.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weights mid-size reasoning model (documented variant `mistral-medium-3-5-26-04`; benchleader dates release 2026-04-29, broader listings cover it from 2026-05-22) — dense 128B, fast (144 tok/s), mid/lower-tier across AA/Vals benches but strongest at instruction following and maths; agentic/coding-optimized per Mistral docs. 77.6% SWE-Bench reported in launch coverage.
- **Provider / access:** Mistral API (La Plateforme, `mistral-medium-3.5`); open weights; OpenRouter.
- **Release / knowledge:** Released 2026-04-29 (benchleader.com); knowledge cutoff not verified.
- **IDs:** `mistral/mistral-medium-3.5` (no Free-tier Zen ID verified).
- **Context window:** 262K tokens (benchleader.com).
- **Modalities:** text/image in (LMArena Vision 1222, MMMU-Pro 64.9% measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $1.50/M input, $7.50/M output via Mistral (benchleader.com).
- **Architecture:** open weights, dense 128B (OpenRouter catalog), Modified MIT license (Mistral docs; AA Openness Index 33.3).

### Raw benchmarks found (via benchleader.com aggregates of AA / Vals / LMArena)

Agent / tool use:

- τ²-Bench Telecom (AA): **94.2%** (#34); τ²-Bench Banking (AA): **15.1%** (benchleader)
- Terminal-Bench 2.1 (AA): **50.6%**; (Vals): **39.0%**; Terminal-Bench Hard: **33.3%**; TB 4.0 (AA): **0.0%** (benchleader)
- GDPval (AA): **12.4%**; Harvey LAB: **69.1%** (#19); EnterpriseOps-Gym: **33.7%** (benchleader)
- AA-Briefcase: **521 Elo**; Finance Agent v2 (Vals): **32.1%**; AutomationBench: **6.3%** (benchleader)
- LMArena Agent score: **−11.6** (#39) (benchleader)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **74.8%**; (Vals, medium effort): 34.9% (benchleader)
- HLE (AA): **13.8%**; CritPt: **0.0%**; Kagi LLM Benchmark: **41.4%** (benchleader)
- AA Intelligence Index: **14.2** (#265); Vals Index: **17.9**; Epoch Capabilities Index: **141.4** (#97) (benchleader)
- AA-Omniscience: **−36.8 index** — accuracy 24.7% / non-hallucination 18.4% (benchleader; weak grounding)
- MMLU-Pro (Vals): **75.3%** (#104); LMArena Hard Prompts: **1445** (#103) (benchleader)
- IFBench: **68.8%** (#77) (benchleader)

Coding:

- SWE-Bench: **77.6%** (aisotools launch review, 2026-05) — harness variant unstated, conflicts with the Vals 66.4% below; both recorded
- SWE-bench (Vals): **66.4%** (#69); Code Migration (Vals): **5.1%**; Vibe Code Bench v1.1: **2.9%** (benchleader)
- SciCode (AA): **40.2%**; LMArena Coding: **1479** (#95); LMArena WebDev: **1265** (#108) (benchleader)
- LiveCodeBench / SWE-bench Verified: no verified public score found

Long context:

- AA-LCR: **69.3%** (#195); MLCR: **1.7%** (benchleader) — weak multi-language long context.

Multimodal:

- MMMU-Pro: **64.9%**; LMArena Vision: **1222** (#69); Vals Multimodal Index: **34.8%** (benchleader)

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-Telecom 94.2% fine, Harvey LAB 69.1%; capped by GDPval 12.4%, TB 2.1 ~40–51%, LMArena Agent −11.6.
- **Reasoning: 52/100.** GPQA 74.8% (AA) acceptable; capped by HLE 13.8%, CritPt 0%, AA Index 14.2, poor Omniscience grounding.
- **Context window: 64/100.** 262K window, LCR 69.3%; capped by MLCR 1.7%.
- **Multimodal: 55/100.** Image in with MMMU-Pro 64.9%/LMArena Vision 1222; text-only output.
- **Coding: 55/100.** SWE-bench (Vals) 66.4% is the highlight; capped by Vibe Code 2.9%, Code Migration 5.1%, TB 4.0 0%.
- **Cost efficiency: 45/100.** $1.50/$7.50 per 1M is pricey for its measured capability (open weights soften it).
- **Overall Score: 56/100.** Mean of the five quality dims (55+52+64+55+55)/5 = 56.2 → 56. Best fit: Mistral-stack deployments needing EU hosting + weights access; outranked on quality-per-dollar by GLM 5.2 / Qwen3.8 Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchleader.com aggregate of Artificial Analysis / Vals / LMArena). Reverified 2026-09-29: architecture now verified (dense 128B, Modified MIT, per OpenRouter catalog + Mistral docs `mistral-medium-3-5-26-04`); pricing $1.50/$7.50 re-confirmed (benchlm Sept-2026 Mistral pricing page); added launch-coverage SWE-Bench 77.6% (conflicts with Vals 66.4% — recorded); scores unchanged.
- Future sources: add a new file next to this one using the same headings.
