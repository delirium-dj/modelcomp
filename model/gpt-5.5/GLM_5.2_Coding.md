# GPT-5.5 — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's prior mainstream flagship (#15 of 505 on BenchLM), now two generations behind GPT-6. Top use case: proven general-purpose reasoning/agents with a Pro sibling for harder work.
- **Provider / access:** OpenAI API (`gpt-5.5`), Responses API; sibling GPT-5.5 Pro.
- **Release / knowledge:** Generation before GPT-5.6; exact date and cutoff not published in the records checked.
- **IDs:** `openai/gpt-5.5`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 1M tokens (BenchLM record + OpenAI pricing table).
- **Modalities:** Text and image input; text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $5.00 in / $30.00 out per 1M; cached input $0.50 (BenchLM OpenAI pricing table).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (62 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.0: **82.0%** (BenchLM; TB2.1 Vals 76.4%)
- Tau2-Bench: **98.0%** (τ²-bench, BenchLM — top of dataset)
- Tau3-Banking: no verified public score found
- GDPval-AA: **1396 Elo** (BenchLM; normalized 41.8%)
- Claw-Eval: no verified public score found
- Toolathlon: **55.6%**; MCP-Atlas: **75.3%** (BenchLM)
- BrowseComp: **84.4%**; OSWorld-Verified: **78.7%**; CyberGym: **81.8%**; AA ITBench: **45.8%**; AA Agentic Index: **37.3%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (GPQA-D; AA 93.5%; Vals 93.2%)
- HLE: **52.2%** (BenchLM HLE; HLE w/o tools 41.4%; AA-HLE 45.8%)
- LCR / MLCR: **84.3%** (AA-LCR) / no MLCR score found
- CritPt: **27.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **38.4** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** (BenchLM); MMLU-Pro (Vals): **88.1%**; ARC-AGI-2: **85%**; ARC-AGI-3: **0.4%**
- MRCR v2: **83.1%** (64K–128K) / **87.5%** (128K–256K); FrontierMath v2 T4: **35.4%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **82.6%** (SWE-bench Vals) / **58.6%** (SWE-bench Pro) (BenchLM)
- LiveCodeBench: **85.3%** (Vals harness, BenchLM)
- SciCode / AA-SciCode: **55.8%** (BenchLM)
- Vibe Code Bench: **69.85%** (BenchLM)
- DeepSWE / Coding Index / other: no DeepSWE score found; **74.9%** AA Coding Index (BenchLM); React Native Evals 84.7%; CursorBench 3.2 58.4%

Long context:

- 1M window verified with MRCR v2 83.1%/87.5% up to 256K (BenchLM); no 512K+/1M retrieval number published.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ² 98%, MCP-Atlas 75.3% and BrowseComp 84.4% are strong; capped by GDPval 1396, Agentic Index 37.3%, OSWorld 2.0 13.0% and ExploitGym 13.4%.
- **Reasoning: 82/100.** GPQA 93.6%, HLE 52.2% and AA-LCR 84.3% clear the refs; capped by Index 38.4, CritPt 27.1%, ARC-AGI-3 0.4% and FrontierMath T4 35.4%.
- **Context window: 100/100.** Verified 1M window with MRCR receipts to 256K = top tier (≥1M).
- **Multimodal: 72/100.** Text + image input (MMMU-Pro 81.2%, w/ Python 83.2%); no audio/video input, text-only output.
- **Coding: 80/100.** LiveCodeBench 85.3%, SWE Vals 82.6%, React Native 84.7% and Vibe 69.9%; capped by SWE Pro 58.6% and Coding Index 74.9%.
- **Cost efficiency: 52/100.** $5.00/$30.00 is well above the $2/$10 medians and now matched by better GPT-5.6 siblings for less.
- **Overall Score: 82/100.** (76+82+100+72+80)/5 — a dependable former flagship: still top-tier τ²-bench and long-context reasoning, but outpriced by its own successors.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + OpenAI pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
