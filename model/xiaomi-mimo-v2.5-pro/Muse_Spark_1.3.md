# Xiaomi MiMo-V2.5-Pro — findings by Muse Spark 1.3 Contributor

- Source: Xiaomi/MiMo-V2.5-Pro, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: release firmed 04-27 + SWE-V 74.0 + SWE-Pro 57.2 + LiveCode 81.3 + ClawEval 64% + IFBench 80.0 added; Tool 82 → 84, Reasoning 78 → 80, Context 100 → 98, Coding 82 → 87, Overall 71 → 73)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (Xiaomi open-weight, MiMo V2.5 family Pro tier)
- **Short description:** Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence; text-focused Pro sibling of the omni base.
- **Provider / access:** Xiaomi via mimo.xiaomi.com + HF `XiaomiMiMo/MiMo-V2.5` family; Xiaomi platform + Sophon (`mimo-v2.5-pro`).
- **Release / knowledge:** 2026-04-27 release (Xiaomi; Base 256K / Pro 1M FP8 on HF — re-verified 2026-09-29); knowledge cutoff undisclosed
- **IDs:** `mimo-v2.5-pro` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M (Base 256K) — verified via Xiaomi family page + Sophon (1.1M listed)
- **Modalities:** text-only (Pro); reasoning yes; tool calls yes (1,000+ tool-call tasks)
- **Pricing (as of 2026-09-18):** Paid $0.435/$0.87 per 1M (cached $0.0036; $1.00/$3.00 alternate routes noted — re-verified 2026-09-29)
- **Architecture:** open-weights MoE, 1.02T total / 42B active (Xiaomi Pro page)

### Raw benchmarks found

Agent / tool use:

- Tau2: **94.2%** (Sophon Pro page)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- ClawEval: **64% Pass^3** @ ~70K tokens/trajectory (vendor page, 40–60% fewer tokens than Opus 4.6/3.1 Pro/GPT-5.4 — re-verified 2026-09-29)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (Sophon; AA-independent corroboration + 87.0 SWEN variant — re-verified 2026-09-29)
- HLE: **35.7%** (Sophon Pro page; 34.0 SWEN variant — re-verified 2026-09-29)
- IFBench: **80.0%** (SWEN — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **43 AA Index (Pro) vs 38 base** (AA comparison page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **74.0%** (ModelBeats #47 — re-verified 2026-09-29); SWE-Pro: **57.2%** (#24; Morph corroborates — re-verified 2026-09-29)
- LiveCodeBench: **81.3%** (ModelBeats #45 — re-verified 2026-09-29)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M coherence claimed (vendor); no independent MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2 94.2% plus ClawEval 64% (@70K tokens) with 1,000+ tool-call positioning; capped by missing TB/Tau3/GDPval harness numbers.
- **Reasoning: 80/100.** GPQA 86.6% (AA-corroborated) plus IFBench 80.0% and Index 43 show strong reasoning; capped by HLE mid-30s and no LCR/CritPt numbers.
- **Context window: 98/100.** 1M verified tier; capped with no retrieval-saturation proof.
- **Multimodal: 15/100.** Text-only Pro per vendor metadata and AA (Pro no image); 15 is the text-only floor.
- **Coding: 87/100.** SWE-V 74.0% plus SWE-Pro 57.2% and LiveCode 81.3% show strong Pro coding; capped by no DeepSWE/SciCode/Vibe numbers.
- **Cost efficiency: 85/100.** Paid $0.435/$0.87 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 73/100.** Mean of the five non-cost dims (84+80+98+15+87)/5 = 72.8 → 73; best-fit cheap paid long-context demanding-agent pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Xiaomi family pages, Hugging Face, Sophon, Artificial Analysis comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
