# Claude Haiku 3.5 — findings by Beam

- Source: Anthropic/Claude Haiku 3.5, `anthropic/claude-haiku-3.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's small model (Oct 22, 2024): 200K context, 8K output. HumanEval 88.1%, SWE-bench Verified 40.6%. GPQA 41.6%, MMLU-Pro 65%. BenchLM 14.19 (#220 of 954). Superseded by Haiku 4.5/5.5.
- **Provider / access:** Anthropic API `claude-haiku-3-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2024-10-22; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-haiku-3.5`
- **Context window:** 200,000 tokens; max output 8,192.
- **Modalities:** text, image in; text out; reasoning no; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.80 / 1M input, $4.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- τ²-bench: **24.6%** (Artificial Analysis)
- GDPval-AA: **0.0%** (Artificial Analysis)
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: **41.6%** (Anthropic model card)
- MMLU: **80.3%** (Anthropic model card)
- MMLU-Pro: **65%** (Anthropic model card)
- BBH: **86.6%** (Anthropic model card)
- DROP: **83.1%** (Anthropic model card)
- AA-LCR: **27.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA Intelligence Index: not reported
- AA-IFBench: **42.8%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): not individually reported
- HumanEval: **88.1%** (Anthropic model card)
- SWE-bench Verified: **40.6%** (Anthropic model card)
- LiveCodeBench: not reported

Long context:

- 200K window; AA-LCR **27.3%**; MRCR not reported.

Multimodal:

- Text/image in; AA-MMMU-Pro **45.6%** (Artificial Analysis).

### Normalized scores (1–100)

- **Tool use: 54/100.** τ²-bench 24.6%, GDPval-AA 0.0%; caps at GDPval-AA 0.0%.
- **Reasoning: 60/100.** GPQA 41.6%, MMLU 80.3%, MMLU-Pro 65%, BBH 86.6%, DROP 83.1%, AA-LCR 27.3%, CritPt 0.0%; caps at CritPt 0.0%.
- **Context window: 60/100.** 200K window; AA-LCR 27.3%; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; AA-MMMU-Pro 45.6%; caps at no verified multimodal benchmarks.
- **Coding: 58/100.** HumanEval 88.1%, SWE-bench 40.6%; caps at SWE-bench 40.6%.
- **Cost efficiency: 92/100.** Cheap $0.80/$4.00 per 1M.
- **Overall Score: 58.4/100.** Mean of five quality dims (BenchLM 14.19); best-fit for cheap fast tasks at low cost (superseded by Haiku 4.5/5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic official, BenchLM, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Claude Haiku 3.5 is superseded by Haiku 4.5 (Oct 15, 2025) and Haiku 5.5 (Oct 7, 2026).<|end|>>2>