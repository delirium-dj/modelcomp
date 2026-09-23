# Gemini 3.5 Flash-Lite — findings by GLM 5.2 Coding

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google DeepMind's cheapest 3.5-generation tier (#72 of 505 on BenchLM). Top use case: ultra-cheap 1M-context multimodal batch work.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.5-flash-lite`), generateContent API.
- **Release / knowledge:** 3.5 generation, successor to 3.1 Flash-Lite; exact date and cutoff not published in the records checked.
- **IDs:** `google/gemini-3.5-flash-lite`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 1M tokens (BenchLM record + pricing table).
- **Modalities:** Text, image, video input (Gemini Flash family; MMMU-Pro verified); text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $0.30 in / $2.50 out per 1M; cached input $0.03 (BenchLM Google pricing table).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (25 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (BenchLM; Vals harness 50.2%)
- Tau3-Banking: no verified public score found
- GDPval-AA: **1139 Elo** (BenchLM; normalized 23.5%)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- OSWorld-Verified: **74.0%**; AA EnterpriseOps-Gym: **42.3%**; AA Agentic Index: **15.9%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA; Vals harness 83.8%)
- HLE: **18.8%** (AA-HLE, BenchLM)
- LCR / MLCR: **76.0%** (AA-LCR) / no MLCR score found
- CritPt: **0.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **22.2** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **29.5% / 34.4%** (BenchLM); MMLU-Pro (Vals): **85.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.0%** (SWE-bench Vals) / **54.2%** (SWE-bench Pro) (BenchLM)
- LiveCodeBench: **79.0%** (Vals harness, BenchLM)
- SciCode / AA-SciCode: **41.3%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no DeepSWE score found; **49.3%** AA Coding Index (BenchLM)

Long context:

- 1M window verified; MRCR v2: **72.2%** (BenchLM) — no 512K+/1M retrieval number published.

### Normalized scores (1–100)

- **Tool use: 58/100.** OSWorld-Verified 74.0% is respectable; capped by TB2.1 54.0%, GDPval 1139 (23.5%) and Agentic Index 15.9% — a budget agent stack.
- **Reasoning: 66/100.** MMLU-Pro 85.8% and AA-LCR 76.0% are decent for the tier; capped by GPQA 83.8%, Index 22.2, AA-HLE 18.8% and CritPt 0.0%.
- **Context window: 100/100.** Verified 1M-token window with MRCR 72.2% = top tier (≥1M) at a lite price.
- **Multimodal: 80/100.** Text + image + video input (Flash family surface, AA-MMMU-Pro 79.0%); text-only output, no speech input.
- **Coding: 68/100.** LiveCodeBench 79.0% and SWE Vals 75.0% overperform the tier; capped by Coding Index 49.3%, SciCode 41.3% and SWE Pro 54.2%.
- **Cost efficiency: 90/100.** $0.30/$2.50 with $0.03 cached is among the cheapest 1M-window multimodal APIs tracked.
- **Overall Score: 74.4/100.** (58+66+100+80+68)/5 — the bulk-work tier: a full 1M multimodal window at lite pricing, with lite-tier intelligence.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + Google pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
