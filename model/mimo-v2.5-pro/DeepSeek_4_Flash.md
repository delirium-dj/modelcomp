# MiMo V2.5 Pro — findings by DeepSeek 4 Flash

- Source: Xiaomi/MiMo V2.5 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence; text-only.
- **Provider / access:** Xiaomi API / OpenRouter (`xiaomi/mimo-v2.5-pro`); open weights; no Free ID.
- **Release / knowledge:** MiMo V2.5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `xiaomi/mimo-v2.5-pro`
- **Context window:** 1M (base 256K) — verified from OpenRouter and curated metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** ~$0.435 in / $0.87 out per 1M.
- **Architecture:** open-weights 1.02T-parameter MoE.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval **63.8%**; GDPval-AA **1265 Elo** (AA normalized 30.4%)
- Terminal-Bench 2.0 **68.4%**; Vals Terminal-Bench 2.1 **57.3%**
- Browsing suite **94.2%**; Gert Labs **62.70%**; AA Agentic Index **22.7%**; APEX-Agents-AA **2.4%**
- Tau2/tau3 suite **72.9%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (AA); Vals 82.6%
- HLE **48%** (34% w/o tools); AA-HLE **35.7%**
- AA-LCR **79.7%**; CritPt **4.0%**; AA Index **26.0%**
- AA-Omniscience Index **3.3%**; Accuracy / Hallucination Rate **22.4% / 24.7%**
- MMLU-Pro (Vals) **84.6%**; AA-IFBench **79.9%**

Coding:

- SWE-bench Verified (Vals) **74.0%**; SWE-bench Pro **57.2%**
- LiveCodeBench (Vals) **81.4%**; AA Coding Index **60.2%**; AA-SciCode **50.6%**

Long context:

- AA-LCR 79.7%; no public MRCR full-window number found

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 72/100.** Claw-Eval 63.8%, TB 2.0 68.4%, browsing 94.2% and GDPval 1265 are good; APEX 2.4% drags.
- **Reasoning: 68/100.** GPQA 86.6%, HLE 48% and LCR 79.7% are decent; AA Index 26% and CritPt 4% are mid-low.
- **Context window: 92/100.** 1M input with AA-LCR 79.7%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 74/100.** SWE Vals 74%, SWE-Pro 57.2% and Coding Index 60.2% are solid.
- **Cost efficiency: 93/100.** $0.435/$0.87 per 1M is excellent for an open-weights flagship.
- **Overall Score: 64/100.** Mean of (72 + 68 + 92 + 15 + 74) / 5 = 64.2 → 64. Best-fit: cheap text-only long-horizon agent; pair with a vision model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Xiaomi, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
