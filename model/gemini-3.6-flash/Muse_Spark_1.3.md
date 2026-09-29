# Gemini 3.6 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.6 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: model-card table added, scores recomputed 83 → 84); re-verified 2026-09-29 (UTC, user-signed-off re-research: cutoff Mar 2026 + intro pricing + AA Index 34 + HLE-Ver 51.2 + AutomationBench 17.0 + LVBench 84.2 + MRCR-128k 91.8 added; Tool 84 → 83, Reasoning 80 → 83, Context 93 → 96, Multimodal 85 → 86, Overall 84 → 86)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (Google advanced 3.6)
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.6-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-21 release (model card; based on 3.5 Flash); knowledge cutoff Mar 2026 (ai-tldr/Tabbit — re-verified 2026-09-29)
- **IDs:** `google/gemini-3.6-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 in / 65,536 out (1M) — verified via API docs (re-verified 2026-09-29)
- **Modalities:** text, image, audio, video, PDF in (model card); text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-29):** $1.50/$7.50 per 1M list (model card); intro $0.75/$3.75 through 2026-12-31; free tier via AI Studio/Zen
- **Architecture:** proprietary, based on Gemini 3.5 Flash (model card — re-verified 2026-09-29)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (model card, Terminus-2 harness; Vals lane 73.8%)
- OSWorld-Verified: **83.0%** (model card, vs 3.5 78.4%)
- MLE-Bench: **63.9%** (model card, vs 3.5 49.7%)
- GDPval-AA v2: **1421 Elo** (model card, vs 3.5 1349)
- AutomationBench: **17.0%** (3.7-card comparison column — re-verified 2026-09-29); Tau3-Banking / Tau2-Bench: **no verified public score found**
- Terminal-Bench 3.0: **5.4%** (3.7-card column — weak tail — re-verified 2026-09-29)
- Agent's Last Exam: **24.2%** (3.7-card column — re-verified 2026-09-29)
- OSWorld-2.0: **33.8%** (3.7-card column; different variant from Verified 83.0% — re-verified 2026-09-29)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE-Verified: **51.2%** (3.7 model-card comparison column; enterprise-guide variant 37.4% noted — re-verified 2026-09-29)
- CharXiv Reasoning: **85.2% no-tools / 89.4% with tools** (model card)
- LVBench (long video): **84.2%** (3.7-card comparison column — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **34** (HokAI/AA — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro (Public): **58.7%** (model card)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **49% DeepSWE v1.1** (model card, vs 3.5 37%); **53.5% cursorBench32** (BenchLM mirror)

Long context:

- **1M window verified; GDM-MRCR v2 8-needle 91.8% @128k avg / 54.0% @1M pointwise** (model card — re-verified 2026-09-29)

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 78.0% plus OSWorld-Verified 83.0%, MLE-Bench 63.9% and GDPval 1421 show strong workhorse orchestration; capped by AutomationBench 17.0%, TB3.0 5.4% tails and no Tau/Claw numbers.
- **Reasoning: 83/100.** HLE-Verified 51.2% plus CharXiv 85.2%/89.4% show solid reasoning; capped by no GPQA/LCR/CritPt numbers and Index 34 mid-band.
- **Context window: 96/100.** 1M tier (65K out) with MRCR 91.8% @128k / 54.0% @1M measured; capped below saturation peers.
- **Multimodal: 86/100.** Broad five-type input with LVBench 84.2% and CharXiv measured; capped as outputs remain text.
- **Coding: 80/100.** SWE-Pro 58.7% plus DeepSWE 49% and MLE-Bench 63.9% show solid workhorse coding; capped by zero SWE-Verified/LiveCode/SciCode numbers.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback (intro $0.75/$3.75 through 2026).
- **Overall Score: 86/100.** Mean of the five non-cost dims (83+83+96+86+80)/5 = 85.6 → 86; best-fit improved-reasoning free 3.6 Flash pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (curated metadata, AI Atlas related-model graph); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
