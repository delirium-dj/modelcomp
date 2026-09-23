# DeepSeek V4.1 Flash — findings by GLM 5.2 Coding

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's open-weight fast-tier reasoning model (flash-reasoning variant, HF card `DeepSeek-V4.1-Flash`). Top use case: dirt-cheap agentic coding with a 1M window.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`); open weights on Hugging Face for self-hosting.
- **Release / knowledge:** Successor to DeepSeek V4 Flash 0731 (earlier sibling per BenchLM); exact date and cutoff not published in the records checked.
- **IDs:** `deepseek/deepseek-v4.1-flash`; no Free ID indicated on Zen in the sources checked (open weights are free to self-host).
- **Context window:** 1M tokens (BenchLM record + DeepSeek pricing table).
- **Modalities:** Text and image input (MMMU-Pro/BabyVision verified); text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $0.30 in / $1.20 out per 1M; cached input $0.006 (BenchLM DeepSeek pricing table) — among the cheapest 1M-window APIs tracked.
- **Architecture:** Open-weight MoE (HF card; size not stated in the records checked).

### Raw benchmarks found

> Verified via BenchLM model record (37 of 454 benchmarks covered, 2026-09-22; no composite score yet).

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (BenchLM; Vals harness 74.5%; TB3: 30%; TB4.0: 31.2%)
- Tau3-Banking: no verified public score found
- GDPval-AA: **1600 Elo** (BenchLM; normalized 55.0% — clears the 50% frontier ref)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- AA AutomationBench: **68.9%**; AutomationBench: **54.8%**; CyberGym: **88.1%**; HLE w/ tools: **63.9%**; AA Briefcase: **1432 Elo**; Agents' Last Exam: **31.8%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (GPQA-D, BenchLM)
- HLE: **36.8%** (BenchLM HLE; AA-HLE 39.2%)
- LCR / MLCR: **84.0%** (AA-LCR) / **22.8%** (MLCR-AA)
- CritPt: **14.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **39.5** (BenchLM)
- Omniscience Index: **-5.3%** with Accuracy **46.4%** / Hallucination Rate **96.5%** (BenchLM — weak knowledge floor); Apex math: **65.6%**

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **51.9%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **74.2%** DeepSWE; Codeforces Elo **3471**; NL2Repo 65.4%; ProgramBench 20.3% (BenchLM)

Long context:

- 1M window verified (BenchLM); no MRCR/RULER number published — AA-LCR 84.0% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 90.6%, GDPval 1600 (55.0% normalized), AutomationBench 68.9% and CyberGym 88.1% are upper-mid-frontier; capped by TB3/TB4.0 ~30% and missing Tau3/Toolathon.
- **Reasoning: 76/100.** GPQA 90.9%, AA-LCR 84.0% and Apex 65.6% are solid; capped by HLE 36.8%, Index 39.5, MLCR 22.8%, CritPt 14.3% and a negative Omniscience Index (-5.3%).
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 70/100.** Text + image input with decent grounding (MMMU-Pro 77.0%, BabyVision w/ Python 89.6%); no audio/video input, text-only output.
- **Coding: 84/100.** DeepSWE 74.2%, TB2.1 90.6% and Codeforces 3471 show elite cheap coding; capped by SciCode 51.9%, ProgramBench 20.3% and no SWE-V/LCB numbers.
- **Cost efficiency: 95/100.** $0.30/$1.20 with $0.006 cached is near-free for a 1M-window reasoning model, and open weights remove lock-in.
- **Overall Score: 82.4/100.** (82+76+100+70+84)/5 — the budget agent pick: near-frontier terminal agents at a quarter of Flash-tier prices.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + DeepSeek pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
