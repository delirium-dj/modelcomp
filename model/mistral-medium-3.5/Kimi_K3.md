# Mistral Medium 3.5 — findings by Kimi K3

- Source: Mistral AI / Mistral Medium 3.5 (`mistral-medium-3.5`; HF `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; **128B parameter count and Modified MIT license now verified**, pricing/speed/context re-verified at Artificial Analysis)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weights 128B reasoning model (released April 29, 2026) — notably fast (167 tok/s, #5/26 in class) but mid/lower-tier quality: AA Intelligence Index 14; strongest at instruction following. Not deprecated at AA (verified this pass).
- **Provider / access:** Mistral API (La Plateforme) — **2 API providers** total (AA, 2026-10-13); open weights HF `mistralai/Mistral-Medium-3.5-128B`; OpenRouter.
- **Release / knowledge:** Released **2026-04-29** (confirmed by both benchleader and AA); knowledge cutoff not verified.
- **IDs:** `mistral/mistral-medium-3-5` (AA slug); `mistralai/Mistral-Medium-3.5-128B` (HF). Not on Zen (2026-10-13 listing).
- **Context window:** **256K tokens** (AA — refines first-pass 262K from benchleader; same tier).
- **Modalities:** text + image in → text out (AA specs — first pass consistent); reasoning yes (reasoning variant measured); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** $1.50/M input, $7.50/M output, **90% cache discount**, blended (7:2:1) ≈ **$1.16/M** (AA — re-verified); AA Intelligence Index run cost **$0.50/task**, 100M output tokens (concise for its class).
- **Architecture:** **128B total parameters** (AA technical specs — NEW: first pass said undisclosed); license **Modified MIT** (commercial use allowed with restrictions — first pass said open weights generically).

### Raw benchmarks found (first-pass benchleader aggregates re-annotated; AA current figures this pass)

Agent / tool use:

- τ²-Bench Telecom (AA): 94.2% (#34); τ²-Banking (AA): 15.1% (benchleader, first-pass aggregate)
- Terminal-Bench 2.1 (AA): 50.6%; (Vals): 39.0%; TB Hard: 33.3%; TB 4.0 (AA): 0.0% (benchleader, first-pass aggregate)
- GDPval (AA): 12.4%; Harvey LAB: 69.1% (#19); EnterpriseOps-Gym: 33.7%; AA-Briefcase: 521 Elo; Finance Agent v2: 32.1%; AutomationBench: 6.3%; LMArena Agent: −11.6 (#39) (benchleader, first-pass aggregate)
- Tau3 / Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond (AA): 74.8%; (Vals, medium): 34.9% (benchleader, first-pass aggregate)
- HLE (AA): 13.8%; CritPt: 0.0%; Kagi LLM Benchmark: 41.4% (benchleader, first-pass aggregate)
- **AA Intelligence Index: 14 (#6 of 65 in its open-weights size class)** — artificialanalysis.ai 2026-10-13 (first-pass benchleader said 14.2/#265 — consistent)
- Vals Index 17.9; Epoch Capabilities Index 141.4 (#97); AA-Omniscience −36.8 (accuracy 24.7% / non-hallucination 18.4%); MMLU-Pro (Vals): 75.3%; LMArena Hard Prompts: 1445; IFBench: 68.8% (#77) (benchleader, first-pass aggregate)

Coding:

- SWE-bench (Vals): 66.4% (#69); Code Migration: 5.1%; Vibe Code Bench v1.1: 2.9%; SciCode (AA): 40.2%; LMArena Coding: 1479 (#95); LMArena WebDev: 1265 (#108) (benchleader, first-pass aggregate)
- LiveCodeBench / SWE-bench Verified: no verified public score found (unchanged)

Long context:

- AA-LCR: 69.3% (#195); MLCR: 1.7% (benchleader, first-pass aggregate) — weak multilingual long context.

Multimodal:

- MMMU-Pro: 64.9%; LMArena Vision: 1222 (#69); Vals Multimodal Index: 34.8% (benchleader, first-pass aggregate)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 55/100.** Unchanged — τ²-Telecom 94.2% fine, Harvey LAB 69.1%; capped by GDPval 12.4%, TB 2.1 ~40–51%, LMArena Agent −11.6.
- **Reasoning: 52/100.** Unchanged — AA Index 14 (#6 of its open-weights class) confirms mid-tier; capped by HLE 13.8%, CritPt 0%, poor Omniscience grounding.
- **Context window: 64/100.** Unchanged — 256K window (AA-verified), LCR 69.3%; capped by MLCR 1.7%.
- **Multimodal: 55/100.** Unchanged — image in with MMMU-Pro 64.9%/LMArena Vision 1222; text-only output.
- **Coding: 55/100.** Unchanged — SWE-bench (Vals) 66.4% the highlight; capped by Vibe Code 2.9%, Code Migration 5.1%, TB 4.0 0%.
- **Cost efficiency: 45/100.** Unchanged — $1.50/$7.50 verified pricey for its measured capability even with 90% cache discount; open weights (Modified MIT) soften it.
- **Overall Score: 56/100.** Mean of the five quality dims (55+52+64+55+55)/5 = 56.2 → 56 (unchanged). Best fit: Mistral-stack deployments needing EU hosting + 128B weights access; outranked on quality-per-dollar by GLM 5.2 / Qwen3.8 Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (artificialanalysis.ai model page 2026-10-13 — 128B params, Modified MIT license, not deprecated, 256K context, 167 tok/s, $1.50/$7.50 with 90% cache discount, $0.50/task, Index 14 #6/65). First-pass benchleader.com rows retained as that aggregate snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
