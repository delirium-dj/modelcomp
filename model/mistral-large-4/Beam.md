# Mistral Large 4 — findings by Beam

- Source: Mistral/Mistral Large 4, `mistralai/mistral-large-4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's open-weight MoE (Oct 6, 2026): 1.05T total / 49-52B active, 1M context. Text/image in. AA Intelligence Index 38.4. DeepSWE 61.7%/62%. HLE 35.0%. SciCode 54.2%. LCR 81.3%. Vals Index 48.66%. $1.36/$4.18 per 1M. Weights planned for Oct 27 release.
- **Provider / access:** Mistral API; OpenRouter; Puter.
- **Release / knowledge:** Released 2026-10-06 (public preview); weights planned for Oct 27, 2026. Knowledge cutoff not stated.
- **IDs:** `mistralai/mistral-large-4`
- **Context window:** 1,000,000 tokens; max output 1,000,000 (Puter).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (planned, Mistral license).
- **Pricing (as of 2026-10-17):** $1.36 / 1M input, $4.18 / 1M output; paid.
- **Architecture:** MoE, 1.05T total / 49-52B active, 1.6B vision encoder, 1M context. Trained on 3,800 Grace Blackwell GPUs in Europe.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- DeepSWE v1.1: **61.7%** / **62%** (Mistral official, VentureBeat)
- Terminal-Bench 4.0: **27.78%** (Vals AI)
- Cybench: **93%** (Mistral official, 40 exercises)
- Vulnerability reproduction/patching: **82%** (Mistral official)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- HLE: **35.0%** (Puter, Artificial Analysis)
- AA Intelligence Index: **38.4** (Artificial Analysis)
- AA-LCR: **81.3%** (Puter, Artificial Analysis)
- SciCode: **54.2%** (Puter, Artificial Analysis)
- GDP.pdf: **19%** (Artificial Analysis)
- Vals Index: **48.66%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): not individually reported
- DeepSWE v1.1: **61.7%** / **62%** (Mistral official)
- SciCode: **54.2%** (Artificial Analysis)
- Vibe Code Bench v1.1: **78.40%** (Vals AI)
- SWE-bench Multimodal: **33.13%** (Vals AI)
- IOI: **45.28%** (Vals AI)

Long context:

- 1M window; AA-LCR **81.3%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text/image in; no verified multimodal benchmarks from official sources. (Visual grounding: DIOR-RSVG 73% per Puter.)

### Normalized scores (1–100)

- **Tool use: 66/100.** DeepSWE 62%, Cybench 93%, vulnerability patching 82%, Terminal-Bench 4.0 27.78%; caps at Terminal-Bench 4.0 27.78%.
- **Reasoning: 70/100.** HLE 35.0%, AA Intelligence 38.4, AA-LCR 81.3%, SciCode 54.2%; caps at no published CritPt.
- **Context window: 80/100.** 1M window; AA-LCR 81.3%; caps at no published MRCR.
- **Multimodal: 64/100.** Text/image in; caps at no verified multimodal benchmarks (DIOR-RSVG 73%).
- **Coding: 68/100.** DeepSWE 62%, SciCode 54.2%, Vibe Code 78.40%, IOI 45.28%; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 84/100.** Mid $1.36/$4.18 per 1M.
- **Overall Score: 70/100.** Mean of five quality dims (AA Intelligence 38.4, Vals Index 48.66); best-fit for European open-weight at mid cost. AA Intelligence 38 (best from outside US/China).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Mistral official, Artificial Analysis, Vals AI, Puter, VentureBeat, ActuIA, Tom's Hardware); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Mistral Large 4 is a public preview (weights planned for Oct 27, 2026). 1T total / 49-52B active. AA Intelligence 38 (best from outside US/China). Supersedes Mistral Large 3.<|end|>>2>