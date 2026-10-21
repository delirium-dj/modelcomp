# DeepSeek V4 Vision Exp — findings by Muse Glimmer 30B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek / DeepSeek V4 Vision Exp
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** Experimental native multimodal MoE for image-to-code/UI reasoning with 200K context. ZeroBench Pass@5 35.0% on vendor release and free OpenCode Zen tier for vision benchmarking.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-vision-exp`. Experimental vision variant of V4 Flash; API routes documented in DeepSeek Vision Guide.
- **Release / knowledge:** Announced 2026-08-21 as experimental vision-understanding model. Knowledge cutoff not published.
- **IDs:** `opencode/deepseek-v4-vision-exp`. Free OpenCode Zen tier available.
- **Context window:** 200K total per `meta.json`; vendor base V4 Flash is 1M context. Verified via meta.
- **Modalities:** Text, image, PDF in; text out. Vision encoder added to V4 Flash base; no image generation.
- **Pricing (as of 2026-10-20):** Free Zen tier available. Vendor pricing for base V4 Flash is peak/off-peak; vision variant inherits base tier per vendor notes.
- **Architecture:** MoE, ~284B total / 13B activated estimated for V4 Flash base with vision encoder added. Open weights status not published for Exp variant.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal Bench 2.1: **83.9%** (DeepSeek changelog, DeepSeek Harness minimal mode, max effort, top-p 0.95, temp 1.0) — Coreqm 2026-09-04
- DeepSWE: **59.3%** (vendor self-reported, V4-Flash-Vision-Exp vs V4-Flash-0731 54.4%) — EggStriker 2026-08-22
- ApexBench: **36.5** (vendor self-reported, up from 26.2 text-only) — EggStriker 2026-08-22

Reasoning / knowledge:

- Agents' Last Exam: **27.3** vs Opus 4.8 25.7 (vendor self-reported multimodal Agent eval) — EggStriker 2026-08-22
- ZeroBench Pass@5: **35.0** vs Opus 4.8 34.0 (vendor self-reported) — Coreqm 2026-09-04; EggStriker 2026-08-22

Coding:

- DeepSWE 59.3% above
- no verified public score found for SWE-bench Verified / LiveCodeBench / SciCode

Long context:

- no long-context retrieval reported for vision variant

Multimodal:

- Chartography: **64.3** vs Opus 4.8 65.0 (vendor self-reported) — Coreqm 2026-09-04; EggStriker 2026-08-22

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal Bench 2.1 83.9% is the strongest verified agent-tool signal; caps at high-80s due to experimental status and limited independent re-test.
- **Reasoning: 55/100.** Agents' Last Exam 27.3 is a multimodal Agent task with no direct GPQA/HLE equivalent; score reflects relative edge over Opus 4.8 but low absolute scale and lack of pure reasoning benchmarks.
- **Context window: 55/100.** Meta lists 200K; base V4 Flash supports 1M but vision variant is documented with 200K context. Mid-tier.
- **Multimodal: 62/100.** Chartography 64.3 and ZeroBench Pass@5 35.0 show usable image understanding and chart reading, slightly behind Opus 4.8 on chartography; experimental limits and self-reported origin cap score.
- **Coding: 59/100.** DeepSWE 59.3% vendor-reported; no independent SWE-bench Verified.
- **Cost efficiency: 100/100.** Free OpenCode Zen tier available.
- **Overall Score: 63/100.** Mean of five quality dims (84+55+55+62+59)/5 = 63. Best-fit recommendation: experimental UI-vision prototyping with free tier; not production-ready due to vendor self-reporting and limited verification.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
