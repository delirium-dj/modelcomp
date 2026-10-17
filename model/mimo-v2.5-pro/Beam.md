# MiMo V2.5 Pro — findings by Beam

- Source: Xiaomi/MiMo V2.5 Pro, `xiaomi/mimo-v2.5-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship model (Apr 22, 2026): 1.02T MoE / 42B active, 1M context. BenchLM 52.95 (#88 of 954). AA Intelligence Index 26.0. Open weights (MIT).
- **Provider / access:** Xiaomi API; OpenRouter; Puter.
- **Release / knowledge:** Released 2026-04-22; knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.5-pro`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $0.43–$1.00 / 1M input, $0.87–$3.00 / 1M output; paid.
- **Architecture:** 1.02T total / 42B active, MoE (hybrid attention), 1M context, MIT.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **37.8** (Supported · #72/128)
- Claw-Eval: **63.8%** (Claw-Eval leaderboard)
- GDPval-AA: **1265** (Xiaomi) / **31.0%** (AA)
- τ³-bench: **72.9%** (Xiaomi)
- Terminal-Bench 2.0: **68.4%** (Xiaomi)
- τ²-bench: **94.2%** (Artificial Analysis)
- APEX-Agents-AA: **2.4%** (Artificial Analysis)
- Gert Labs: **62.70%** (Gert Labs)
- Terminal-Bench 2.1 (Vals): **57.3%** (Vals AI)
- AA Agentic Index: **22.7%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench AI)
- OSWorld: not reported for V2.5 Pro

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.6** (Unranked · 2 rankable rows)
- GPQA Diamond (Vals): **82.6%** (Vals AI)
- AA-GPQA Diamond: **86.6%** (Artificial Analysis)
- MMLU-Pro (Vals): **84.6%** (Vals AI)
- HLE: **48%** (Xiaomi) / **35.7%** (AA)
- HLE w/o tools: **34%** (Xiaomi)
- AA Intelligence Index: **26.0%** (Artificial Analysis)
- AA-HLE: **35.7%** (Artificial Analysis)
- AA-Omniscience Index: **3.3%** (Artificial Analysis)
- AA-Omniscience Accuracy: **22.4%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **24.7%** (Artificial Analysis)
- AA-LCR: **79.7%** (Artificial Analysis)
- CritPt: **4.0%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **43.2** (Supported · #57/150)
- SWE-bench Pro: **57.2%** (Xiaomi)
- Terminal-Bench 2.0: **68.4%** (Xiaomi)
- AA-SciCode: **50.6%** (Artificial Analysis)
- LiveCodeBench (Vals): **81.4%** (Vals AI)
- SWE-bench (Vals): **74.0%** (Vals AI)
- AA Coding Index: **60.2%** (Artificial Analysis)

Long context:

- 1M window; AA-LCR **79.7%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text-only (no image/video). Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic lane #72/128 (37.8), Terminal-Bench 2.0 68.4%, τ²-bench 94.2%, GDPval-AA 31.0%, APEX 2.4%, MazeBench 0%; caps at MazeBench 0%.
- **Reasoning: 70/100.** GPQA 86.6%, MMLU-Pro 84.6%, HLE 48%/35.7%, AA-LCR 79.7%, CritPt 4.0%; caps at CritPt 4.0%.
- **Context window: 76/100.** 1M window; AA-LCR 79.7%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-bench 74.0%, LiveCodeBench 81.4%, Terminal-Bench 2.0 68.4%, SWE-bench Pro 57.2%, AA Coding 60.2%, coding lane #57/150 (43.2); caps at SWE-bench Pro 57.2%.
- **Cost efficiency: 88/100.** $0.43–$1.00 / $0.87–$3.00 per 1M.
- **Overall Score: 64/100.** Mean of five quality dims (BenchLM 52.95); best-fit for open-weight agentic coding at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Xiaomi official, BenchLM, Vals AI, Artificial Analysis, Puter, Kilo Code); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>