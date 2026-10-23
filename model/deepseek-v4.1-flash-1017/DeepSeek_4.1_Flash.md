# DeepSeek V4.1 Flash 1017 — findings by DeepSeek 4.1 Flash

- Source: DeepSeek/DeepSeek-V4.1-Flash-1017 (`deepseek-ai/DeepSeek-V4.1-Flash-1017`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** October 17 update to DeepSeek-V4.1-Flash: the same 1M-context open-weight Flash line, retuned for shorter outputs, faster task completion and substantial gains on reasoning, coding, agentic and visual benchmarks.
- **Provider / access:** DeepSeek API, Hugging Face weights (`deepseek-ai/DeepSeek-V4.1-Flash-1017`), DeepInfra, Fireworks and other OpenAI-compatible hosts.
- **Release / knowledge:** 2026-10-17; knowledge cutoff not disclosed in the sources found.
- **IDs:** `deepseek-v4.1-flash-1017`, `deepseek-ai/DeepSeek-V4.1-Flash-1017`; MIT weights per model card.
- **Context window:** 1,048,576 input; up to 384K output on Vals AI's harness (some hosts cap at 131K).
- **Modalities:** text and image input; text output; tool calling; structured outputs; video/file input not supported.
- **Pricing (as of 2026-10-23):** $0.30/$1.20 per 1M in/out list; DeepInfra promotional $0.20/$0.60 (51% off), cached $0.006.
- **Architecture:** Mixture-of-Experts with native vision, served in FP8; exact parameter count not published on the pages reviewed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **42.3%** (Claude Code harness); Automation-Bench v1.0.6: **60.5%**; Agents' Last Exam: **35.4%**
- Vals Index: **61.26% ± 1.05**, rank **#8 of 26**; Tax Agent Bench rank **#6 of 75** (Vals AI)
- Apex Bench v1.1: **72.1%** (DeepInfra model card)

Reasoning / knowledge:

- HLE without tools: **42.6%** (**44.0%** text-only subset) (DeepInfra / Vals)

Coding:

- DeepSWE v1.1: **77.0%** (Mini-SWE-V2 harness); NL2Repo-Bench: **68.2%**; ProgramBench: **29.1%** (DeepInfra)

Long context:

- 1,048,576-token window; no MRCR/RULER row published on the pages reviewed.

Multimodal (VL) evidence:

- Chartography (with tools): **83.0%**; BabyVision (with tools): **92.5%**; ZeroBench-main (with tools): **51.0%** (DeepInfra)

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 42.3%, Automation-Bench 60.5% and the #6 Tax Agent rank show a strong agent profile, though it trails Opus 5 on the same terminal harness (DeepInfra; Vals AI).
- **Reasoning: 74/100.** HLE 42.6% (44.0 text-only) and Vals Index 61.26 are excellent for a Flash tier (DeepInfra; Vals AI).
- **Context window: 95/100.** 1M input and up to 384K output are top-tier; no independent long-context retrieval score was found.
- **Multimodal: 60/100.** Native image input plus Chartography 83.0 and BabyVision 92.5 are strong, but video/file input is unsupported and ZeroBench 51.0 limits it (DeepInfra).
- **Coding: 77/100.** DeepSWE 77.0 and NL2Repo 68.2 beat the prior Flash and GLM-5.3; ProgramBench 29.1 is the weak spot (DeepInfra).
- **Cost efficiency: 98/100.** $0.30/$1.20 list, $0.20/$0.60 promotional and MIT weights make it one of the cheapest 1M-context agent models.
- **Overall Score: 76/100.** Mean of the five quality dims (72+74+95+60+77)/5 = 75.6 → 76. Best-fit: high-volume long-context coding agents and document/vision triage.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official model card via DeepInfra, Vals AI model page, DeepInfra/Fireworks pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
