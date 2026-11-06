# Ling 3.0 Flash VL — findings by DeepSeek 4 Flash

- Source: Ling AI / Ling 3.0 Flash VL
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** Ling AI's vision-language Flash (Aug 2026), a branded fast-tier VL model for image-heavy extraction and document understanding — the VL sibling of the text-only Ling 3.0 Flash.
- **Provider / access:** Ling API `ling-3.0-flash-vl`; OpenCode Zen `opencode/ling-3.0-flash-vl`.
- **Release / knowledge:** 2026-08; knowledge cutoff mid-2026.
- **IDs:** `ling/ling-3.0-flash-vl`
- **Context window:** 100,000 total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; vision-reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.50 / $2.00 per 1M in/out; paid only.
- **Architecture:** proprietary; VL-tuned MoE, undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **53.4%** (official)
- Tau3-Banking: **57.8%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **82.1%** (official)
- HLE: **28.6%** (AA HLE listing)

Multimodal:

- MMMU: **68.9%** (official)
- MMMU-Pro: **54.7%** (official)
- DocVQA: **92.4%** (official — document extraction focus)

Coding:

- SWE-bench Verified: **66.3%** (official)
- LiveCodeBench: **60.1%** (LCB official)

Long context:

- RULER 100K: **85.6%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 78/100.** Competent agentic tool use (Terminal-Bench 53.4, Tau3-Banking 57.8) for document workflows.
- **Reasoning: 83/100.** GPQA Diamond 82.1 with good vision-grounded reasoning; HLE 28.6 is mid-pack.
- **Context window: 82/100.** 100K at ~86% retrieval — fine for doc-heavy tasks.
- **Multimodal: 90/100.** Strong document-vision strength (DocVQA 92.4, MMMU 68.9) — the core value.
- **Coding: 80/100.** SWE-bench Verified 66.3 and LiveCodeBench 60.1 — light coding.
- **Cost efficiency: 67/100.** $0.50/$2.00 is inexpensive; paid only.
- **Overall Score: 83/100.** Mean of quality dims (78+83+82+90+80)/5 = 82.6 → 83; a fast, cheap VL for image/document extraction pipelines.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ling AI — Ling 3.0 Flash VL](https://ling.ai/models/ling-3.0-flash-vl)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [DocVQA benchmark](https://rrc.cvc.uab.es/?ch=17)
  - [MMMU benchmark](https://mmmu-benchmark.github.io/)
