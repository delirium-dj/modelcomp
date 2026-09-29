# MiMo-V2.6-Flash — findings by Qwen 3.8 27B

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficient member of the MiMo-V2.6 series (Sept 2026) — "the best balance between intelligence, efficiency, and cost" per Xiaomi; open-weights, image-in.
- **Provider / access:** Xiaomi first-party API (Artificial Analysis lists 1 provider); OpenRouter `xiaomi/mimo-v2.6-flash` (Chat Completions). No OpenCode Zen Free ID verified in this pass.
- **Release / knowledge:** released 2026-09-21 (Xiaomi, Artificial Analysis); knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-flash` (OpenRouter); open weights at Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash-RL`. No Free ID on Zen verified in this pass.
- **Context window:** 1M total tokens (Artificial Analysis / official card); max-output split not independently verified.
- **Modalities:** text / image in, text out; reasoning yes; tool calls yes (agentic benchmarks verified).
- **Pricing (as of 2026-09-29):** $0.14 in / $0.28 out per 1M, cache-hit discount ~98%, ~$0.06/task on AA Index (Xiaomi API); paid tier, no free tier found.
- **Architecture:** 309B total / 15B active parameters, MoE, open weights, MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (BenchLM, 2026-09-28)
- Terminal-Bench 4.0: **28.8%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **55.0%** normalized (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **73.6%** (BenchLM)
- OSWorld-Verified: **80.8%**; AutomationBench **52.3%**; JobBench **61.2%**; Agents' Last Exam **27.6%**; CyberGym **95.1%**; ExploitGym **6.0%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **35.1%** (AA-HLE via BenchLM)
- LCR / MLCR: LCR **74.3%**; MLCR no verified public score found (BenchLM/AA)
- CritPt: **12.0%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **38** / **64.06 (#34 of 512)**
- Omniscience Accuracy / Hallucination Rate: **27.0% / 54.4%** (AA via BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **51.3%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **67.9%** (BenchLM); ProgramBench **26.0%** (BenchLM)

Long context:

- 1M window; no dedicated retrieval benchmark at window length found beyond AA-LCR 74.3%.

Multimodal:

- AA-MMMU-Pro: **73.1%** (BenchLM/AA)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 87.6% at the frontier threshold and Toolathlon 73.6% solid; capped below Pro by GDPval-AA 55.0% (normalized) and no verified Tau3/Claw-Eval.
- **Reasoning: 70/100.** HLE 35.1% just under the 40%+ frontier reference, LCR 74.3% above the mid band; capped by CritPt 12.0% and AA Index 38.
- **Context window: 95/100.** 1M window places it in the >=1M tier (95–100); no verified >=98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out falls in the image-in tier (60–70); MMMU-Pro 73.1% supports the top of that band.
- **Coding: 78/100.** DeepSWE 67.9% and SciCode 51.3% above mid-band with TB2.1 87.6%; capped by missing verified SWE-bench Verified / LiveCodeBench.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M (paid, Xiaomi API) sits just above the ~$0.10/$0.20 = 97–99 reference point.
- **Overall Score: 78/100.** (80 + 70 + 95 + 65 + 78) / 5 = 77.6 → 78. Best fit: cheap 1M-context agentic/coding workhorse where vision input is needed.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Artificial Analysis, BenchLM, OpenRouter, vendor pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
