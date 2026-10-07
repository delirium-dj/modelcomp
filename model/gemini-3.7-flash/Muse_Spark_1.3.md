# Gemini 3.7 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.7 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: model-card absolutes added, scores recomputed 84 → 88); re-research pass 2026-10-07 adds Vals/AA/Datacurve/ARC-Prize third-party confirmations, scores recomputed 88 → 89
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (Google high-capability 3.7)
- **Short description:** Google's high-capability 3.7 Flash model.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.7-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-08-13 release (three weeks after 3.6 Flash; algorithmic refinement, thinking_level control); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.7-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.75/$3.75 per 1M intro through 2026-12-31, then $1.50/$7.50; free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card, vs 3.6 78.0%, Sonnet 5 80.4%, Terra 87.4%; corroborated by 85.77% AA high-effort and 77.53% Vals Terminus-2 — harness differs, all listed)
- Terminal-Bench 4.0: **13.64% AA / 12.12% Vals / 11.2% official leaderboard (high, mini-SWE-agent)** (new 2026-10-07 — fills prior gap; 4.0 is its own generation, not comparable with 2.x)
- Terminal-Bench 3.0: **14.9%** (vendor model card: 3.6 5.4%, Sonnet 5 14.6%, Terra 20.8% — new 2026-10-07)
- AutomationBench: **30.4%** (Google model card, vs 3.6 17.0%, Sonnet 5 10.7%, Terra 23.6%)
- GDP.pdf (expert PDF comprehension): **34.0%** (Google model card, vs 3.6 22.0%, Sonnet 5 28.0%)
- Harvey LAB-AA (legal): **90.7%** (Google model card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.94% Vals (rank 5/23) / 94.55% AA high-effort** (aievals.app + ai-model-timeline, same-harness lineage with 3.6 Flash 93.43 — fills prior gap)
- HLE-Verified: **53.6%** (Google model card, vs 3.6 51.2%, Sonnet 5 31.0%, Terra 51.1%); **47.9% HLE no-tools** (AA independent run — harness differs, both listed)
- CharXiv Reasoning (no tools): **84.5%** (Google model card, vs 3.6 85.2%, Sonnet 5 77.0%)
- ARC-AGI-2: **84.6% high-effort** (ARC Prize independent run — new 2026-10-07)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **56 AA Index (high)** (emergent/AA, ahead of 3.6 at 52); **39 AA Index** (aievals.app 41-model snapshot, rank 28/41 — lane/snapshot differs, both listed); **90.12% MMLU Pro, 88.96% MMMU Pro** (Vals — new 2026-10-07); **51.27% Vals Index** (rank 23/33 — new)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.80% SWE-bench Verified** (Vals, rank 17/23 — fills prior gap); **60.4% SWE-bench Pro** (vendor figure via 3.8 Flash API-docs comparison table — backfilled, no independent run)
- LiveCodeBench: **88.65%** (Vals — fills prior gap)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **70.39% Vibe v1.1** (Vals — fills prior gap); **0.00% ProgramBench, 57.66% Tax Agent Bench** (Vals — new)
- DeepSWE / Coding Index / other: **65.3% DeepSWE v1.1** (Google model card, vs 3.6 49.0%; 65.49% Datacurve public board — confirmed); **43.6% FrontierCode 1.1 Main** (model card, ahead of Sonnet 5 42.7% and Terra 41.3%); **1588 WebDev Arena Elo** (vs 3.6 1538)

Long context:

- **1M window verified; MRCR v2 97.0% (128k, 8-needle)** (Google model card, vs 3.6 91.8%, Sonnet 5 81.5%); **LVBench long-video 85.4%** (model card, vs 3.6 84.2%)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 85.8% plus AutomationBench 30.4% and GDP.pdf 34.0% lead the Flash tier; capped by weak TB4.0 (~11–14) and zero Tau3/GDPval/Claw-Eval numbers.
- **Reasoning: 89/100.** GPQA 93.9–94.6 (multi-harness confirmed) plus HLE-Verified 53.6%, ARC-AGI-2 84.6% and AA Index 56 lead the price tier; capped by zero CritPt absolute.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 87/100.** Broad text/image/audio/PDF input with LVBench 85.4%, MMMU-Pro 88.96% and CharXiv 84.5% measured strength; capped as outputs remain text.
- **Coding: 86/100.** SWE-Verified 80.8% plus LiveCode 88.65%, DeepSWE 65.5% (Datacurve-confirmed) and FrontierCode 43.6% (ahead of Sonnet 5/Terra); capped by SWE-Pro 60.4% and zero SciCode absolutes.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 89/100.** Mean of the five non-cost dims (84+89+100+87+86)/5 = 89.2 → 89; best-fit high-capability Flash pick — third-party boards now confirm the model-card profile.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (DeepMind 3.7 Flash model card + eval-methodology PDF, aievals.app aggregation, ai-model-timeline + themodelgap independent compilations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
