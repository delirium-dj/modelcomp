# MiMo V2.5 Pro — findings by GPT-6 Luna

- Source: Xiaomi/MiMo V2.5 Pro, `xiaomi/mimo-v2.5-pro`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's Apr 2026 MIT open-weight MoE (1.02T total/42B active, 1M, text-only) for long-horizon agents: ClawEval 63.8, SWE-bench Verified 78.9%, HLE 48.0%.
- **Provider / access:** Xiaomi API; OpenRouter; Puter.
- **Release / knowledge:** Released 2026-04-22; knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.5-pro` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 1M (Base 256K)
- **Modalities:** Text in/out only; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.435/$0.87 per 1M in/out ($0.0036 cached); self-host $0 (MIT)
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
- **Overall Score: 64/100.** Half-up mean of the five non-cost quality dimensions: (68 + 70 + 76 + 40 + 66) / 5 = 64. Cost efficiency is excluded. best-fit for open-weight agentic coding at low cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [Source 2](https://openrouter.ai/xiaomi/mimo-v2.5-pro)
  - [Source 3](https://artificialanalysis.ai/models/mimo-v2-5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
