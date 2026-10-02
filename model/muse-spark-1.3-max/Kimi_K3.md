# Muse Spark 1.3 Max — findings by Kimi K3

- Source: Meta (`muse-spark-1.3-max`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** Meta's Max-tier variant of the Muse Spark 1.3 family (Sep 2026) — private-weights agentic model with 1M context and 131K max output, strongest on knowledge-work agent suites (legal research, tax, finance) rather than terminal-style coding.
- **Provider / access:** Meta developer platform (`dev.meta.ai/docs/models`), reasoning effort `max` in Vals AI runs.
- **Release / knowledge:** Released 2026-09-05 (Vals AI model registry listing).
- **IDs:** `muse-spark-1.3-max` (Meta). No Free ID exists on OpenCode Zen (the Contributor Free tier covers the standard 1.3, not Max).
- **Context window:** 1M tokens; max output 131,072 (Vals AI).
- **Modalities:** Text + image + video + file in; text out (Vals AI modality listing). Reasoning effort `max` supported.
- **Pricing (as of 2026-10-01):** $1.25 / $4.25 per MTok (Vals AI listing — same list price point as standard Muse Spark 1.3 Standard tier); measured $3.787 avg cost/test on Vals suite.
- **Architecture:** Proprietary (private weights), Meta. Vals Index 58.16% (rank 9/41), fallback rate 0.00%, refusal rate 0.65%, avg latency 23m33s (long-horizon profile).

### Raw benchmarks found

All numbers from Vals AI independent evaluations (model page, retrieved 2026-10-01).

Agent / tool use:

- Terminal-Bench 4.0: **24.75%** (±0.51, rank 15/42); Terminal-Bench Science: **10.00%** (11/34)
- CUA-bench (computer use): **5.83%** (6/8)
- Finance Agent v2: **59.96%** (±2.06, rank 4/73); Tax Agent Bench: **72.44%** (±2.88, rank 6/64); Harvey's Legal Agent Bench: **23.75%** (2/73); Legal Research Bench: **55.29%** (±3.46, rank **1/72**)
- Vals RSI Index: **19.64%** (16/23)
- Claw-Eval / Tau3 / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- ProofBench v1.1: **58.00%** (±4.96, 20/44); MysteryMechanism: **36.04%** (9/21); IOI: **56.56%** (±2.52, 18/38); EMB: **67.43%** (±3.06, 15/69)
- GPQA Diamond / HLE / MRCR: **no verified public score found** for this variant

Coding:

- Vibe Code Bench v1.1: **85.86%** (±2.51, rank 11/106); VCB 1-100: **20.46%** (6/20)
- Code Migration: **47.41%** (±4.26, 13/71)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found** for this variant

Long context:

- 1M window documented; **no MRCR/RULER retrieval benchmark published**.

### Normalized scores (1–100)

- **Tool use: 72/100.** Knowledge-work agent benches lead their fields (Legal Research #1, Finance Agent #4, Tax #6) but Terminal-Bench 4.0 24.75% and CUA-bench 5.83% show weak terminal/computer-use execution; net upper-mid.
- **Reasoning: 65/100.** ProofBench 58%, IOI 56.6%, EMB 67.4% with no GPQA/HLE publication — solid mid-band reasoning, capped by missing frontier science figures.
- **Context window: 88/100.** 1M window with 131K max output (larger output budget than most 1M peers); no quantified retrieval depth keeps it below the top of the tier.
- **Multimodal: 82/100.** Text+image+video+file input coverage in one model (image+video-in band 75–90, plus file input); text-only output, no audio.
- **Coding: 70/100.** Vibe Code Bench 85.86% strong for full-stack app building, but TB 4.0 24.75%/Code Migration 47.4% are weak for repository-scale agentic SWE; mixed profile nets mid-low.
- **Cost efficiency: 88/100.** $1.25/$4.25 maps exactly to the reference point (~88); 0% fallback rate means low waste, though 23m33s average latency signals heavy token spend per task.
- **Overall Score: 75/100.** Half-up mean of the five quality dims: (72 + 65 + 88 + 82 + 70) / 5 = 75.4 → 75. Best fit: agentic knowledge work (legal research, tax/finance document pipelines) with large multimodal inputs; not the pick for terminal-driven software engineering.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (Vals AI model page + benchmark tables for `meta/muse_spark_1_3_max`; Meta dev docs listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
