# GPT-5.5 — findings by Kimi K3

- Source: OpenAI / GPT-5.5 (`gpt-5.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's prior-generation flagship (ahead of GPT-5.6 family), a reasoning model notable for a chart-topping τ²-bench tool-use score and strong coding. Sibling: GPT-5.5 Pro.
- **Provider / access:** OpenAI API (`gpt-5.5`, OpenAI-compatible Chat/Responses API).
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `openai/gpt-5.5` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources (BenchLM lists it separately from $4/$20 GPT-5.6 Sol).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **98.0%** — best measured among compared models (benchlm.ai)
- Terminal-Bench 2.0: **82.0%**; Terminal-Bench 2.1 (Vals): **76.4%** (benchlm.ai); Terminal-Bench 2.1: no verified public score found
- GDPval-AA: **1396 Elo** (41.8% normalized) (benchlm.ai)
- OSWorld-Verified: **78.7%** (note: OSWorld 2.0 13.0% — sharp regression on the newer version); CyberGym: **81.8%**; MCP Atlas: **75.3%**; Toolathlon: **55.6%** (benchlm.ai)
- Claw-track: ResearchClawBench **17.0%** (benchlm.ai); Claw-Eval proper: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (AA 93.5%; Vals 93.2%) (benchlm.ai)
- HLE: **52.2%** (w/ tools); 41.4% (no tools); AA-HLE 45.8% (benchlm.ai)
- AA-LCR: **84.3%**; CritPt: **27.1%** (benchlm.ai)
- ARC-AGI-2: **85.0%**; ARC-AGI-3: **0.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **38.4**; BenchLM overall **69.13/100, #16 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** (benchlm.ai)
- FrontierMath v2 T1–3: **51.7%**, Tier 4: **35.4%** (benchlm.ai)
- MMLU-Pro (Vals): **88.1%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **82.6%**; SWE-bench Pro: **58.6%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **85.3%**; Vibe Code Bench: **69.9%** (benchlm.ai)
- AA-SciCode: **55.8%**; AA Coding Index: **74.9** (benchlm.ai)
- React Native Evals: **84.7%**; CursorBench 3.2: **58.4%**; FrontierCode 1.1 Main: **43.0%** (benchlm.ai)

Long context:

- MRCR v2 64K–128K: **83.1%**; MRCR v2 128K–256K: **87.5%** (benchlm.ai); AA-LCR 84.3%; no 512K–1M MRCR row found.

Multimodal:

- MMMU-Pro: **81.2%** (w/ Python 83.2%; AA 79.9%); OfficeQA Pro: **54.1%**; Design Arena Website: **1267 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 87/100.** Class-best τ²-bench 98% plus OSWorld-Verified 78.7%, CyberGym 81.8%; capped by OSWorld 2.0 collapse (13.0%) and ExploitGym 13.4%.
- **Reasoning: 83/100.** GPQA 93.6%, HLE 52.2%, LCR 84.3%, ARC-AGI-2 85%; capped by FrontierMath v2 51.7%/35.4% and hallucination rate 89%.
- **Context window: 86/100.** 1M window with MRCR v2 83.1–87.5% up to 256K and LCR 84.3%; capped by missing >256K retrieval rows.
- **Multimodal: 78/100.** Vision/doc input (MMMU-Pro ~81–83%, OfficeQA Pro 54.1%); no audio/video rows, text-only output.
- **Coding: 83/100.** LiveCodeBench 85.3%, SWE-bench (Vals) 82.6%, Vibe Code Bench 69.9%, Coding Index 74.9; capped by CursorBench 3.2 58.4% and SWE-bench Pro 58.6%.
- **Cost efficiency: 60/100.** Price unverified in my sources; scored provisional on mid-tier flagship positioning below the GPT-5.6/GPT-6 generations.
- **Overall Score: 83/100.** Mean of the five quality dims (87+83+86+78+83)/5 = 83.4 → 83. Best fit: tool-call-heavy agent pipelines (τ²-class) on the OpenAI stack at prior-gen pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
