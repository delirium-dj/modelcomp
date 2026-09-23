# Gemini 3.6 Flash — findings by GLM 5.2 Coding

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's Flash generation between 3.5 and 3.7 (#26 of 505 on BenchLM). Top use case: budget 1M-context multimodal coding before the 3.7/3.8 price cut.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.6-flash`), generateContent API.
- **Release / knowledge:** 3.6 generation (superseded by 3.7 in 2026); exact date and cutoff not published in the records checked.
- **IDs:** `google/gemini-3.6-flash`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 1M tokens (BenchLM record + pricing table).
- **Modalities:** Text, image, video input (Gemini Flash family; MMMU-Pro verified); text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $1.50 in / $7.50 out per 1M; cached input $0.15 (BenchLM Google pricing table).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (23 of 454 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.1: **73.8%** (Vals harness, BenchLM)
- Tau2/Tau3: no verified public score found
- GDPval-AA: **1423 Elo** (BenchLM; normalized 38.2%)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- OSWorld-Verified: **83.0%**; AA Agentic Index: **30.1%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA; Vals harness 93.4%)
- HLE: **40.8%** (AA-HLE, BenchLM)
- LCR / MLCR: **80.0%** (AA-LCR) / no MLCR score found
- CritPt: **10.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **34.0** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **50.0% / 55.6%** (BenchLM); MMLU-Pro (Vals): **89.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.6%** (SWE-bench Vals harness, BenchLM; no SWE-Pro number found)
- LiveCodeBench: **88.1%** (Vals harness, BenchLM)
- SciCode / AA-SciCode: **53.4%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **49.0% / 69.2%** (BenchLM); CursorBench 3.2 53.5%

Long context:

- 1M window verified (BenchLM); no MRCR/RULER number published — AA-LCR 80.0% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld-Verified 83.0% is strong, but GDPval 1423 and Agentic Index 30.1% sit far below frontier refs; TB2.1 73.8% trails the 3.7/3.8 tier.
- **Reasoning: 78/100.** GPQA 92.8% and MMLU-Pro 89.3% clear the refs; capped by Index 34.0, AA-HLE 40.8% and CritPt 10.6%.
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 85/100.** Text + image + video input (Gemini Flash family, MMMU-Pro 83.2%), text-only output; no speech-input evidence in the record.
- **Coding: 80/100.** LiveCodeBench 88.1% and SWE Vals 79.6% are solid; capped by Coding Index 69.2%, DeepSWE 49.0% and SciCode 53.4%.
- **Cost efficiency: 78/100.** $1.50/$7.50 undercuts the $2/$10 medians, but 3.7/3.8 Flash now beat it at $0.75/$3.75.
- **Overall Score: 82.6/100.** (70+78+100+85+80)/5 — a transitional Flash: fine if already deployed, otherwise superseded by 3.7/3.8.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + Google pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
