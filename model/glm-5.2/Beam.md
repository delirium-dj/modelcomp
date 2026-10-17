# GLM 5.2 — findings by Beam

- Source: Z.AI/GLM 5.2, `zai-org/glm-5.2`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's flagship open-weight reasoning model (Jun 13, 2026): 320B total MoE, 1M context, BenchLM 60.49 (#53 of 954). #1 open-weight on Vals Index (65.02%, #5 overall).
- **Provider / access:** Z.AI API `glm-5.2`; OpenRouter.
- **Release / knowledge:** Released 2026-06-13; knowledge cutoff not stated.
- **IDs:** `zai-org/glm-5.2`
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $1.40 / 1M input, $4.40 / 1M output; paid.
- **Architecture:** MoE, 320B total / ? active, 1M context, MIT license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **57.4** (Supported · #35/128)
- Terminal-Bench 2.1: **81.0%** (Z.AI model card)
- MCP Atlas: **76.8%** (Z.AI model card)
- Toolathlon: **48.2%** (Z.AI model card)
- τ²-bench: **99.1%** (Artificial Analysis)
- HLE w/ tools: **54.7%** (Z.AI model card)
- Terminal-Bench 3.0: **4.6%** (Terminal-Bench 3.0 leaderboard)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **79.6** (Unranked · 2 rankable rows)
- GPQA: **91.2%** (Z.AI model card)
- GPQA Diamond (Vals): **85.61%** (Vals AI)
- MMLU Pro: **86.71%** (Vals AI)
- HLE: **40.5%** (Z.AI model card)
- AIME26: **99.2%** (Z.AI model card)
- HMMT Feb 2026: **92.5%** (Z.AI model card)
- AA Intelligence Index: **33.7%** (Artificial Analysis)
- CritPt: **20.9%** (Artificial Analysis)
- FrontierMath v2 (Tiers 1-3): **59.206%** (Epoch AI)
- FrontierMath v2 (Tier 4): **29.268%** (Epoch AI)
- AA-LCR: not reported
- AA-IFBench: **73.3%** (Artificial Analysis)
- MMAnswerBench: **91.0%** (Z.AI model card)

Coding:

- Coding public-lane (BenchLM): **53.7** (Supported · #33/150)
- SWE-bench Verified (Vals): **82.80%** (Vals AI)
- Vibe Code Bench v1.1: **63.96%** (Vals AI)
- LiveCodeBench (Vals): **69.50%** (Vals AI)
- Terminal-Bench 2.1 (Vals): **67.79%** (Vals AI)
- SWE-bench Pro: **62.1%** (BenchLM)
- NL2Repo: **48.9%** (BenchLM)
- ProgramBench: **0.50%** (Vals AI)
- SkillsBench: **45.08%** (Vals AI)
- Code Migration: **37.87%** (Vals AI)

Long context:

- 1M window; MRCR: not reported. AA-LCR: not reported.

Multimodal:

- Text-only (no image/video). Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #35/128 (57.4), Terminal-Bench 2.1 81.0%, MCP Atlas 76.8%, τ²-bench 99.1%, Toolathlon 48.2%, HLE w/ tools 54.7%; caps at Terminal-Bench 3.0 4.6%.
- **Reasoning: 76/100.** GPQA 91.2%, MMLU Pro 86.71%, AIME 99.2%, HMMT 92.5%, HLE 40.5%, FrontierMath 59.2%, CritPt 20.9%; caps at CritPt 20.9%.
- **Context window: 80/100.** 1M window; caps at no published MRCR/AA-LCR.
- **Multimodal: 40/100.** Text-only (no image/video).
- **Coding: 78/100.** SWE-bench 82.80%, Vibe Code 63.96%, LiveCodeBench 69.50%, Terminal-Bench 2.1 67.79%, coding lane #33/150 (53.7); caps at ProgramBench 0.50%.
- **Cost efficiency: 86/100.** $1.40/$4.40 per 1M.
- **Overall Score: 69.6/100.** Mean of five quality dims (BenchLM 60.49); best-fit for open-weight coding + reasoning at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Vals AI, Z.AI model card, CAISI NIST report, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.