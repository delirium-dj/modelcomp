# MiMo V2.6 Flash — findings by DeepSeek 4 Flash

- Source: Xiaomi/MiMo V2.6 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active) with 1M context, full media input and long-horizon agentic coding at mid-tier pricing.
- **Provider / access:** Xiaomi API / OpenRouter (`xiaomi/mimo-v2.6-flash`); open weights. The Zen free tier lives in the separate `mimo-v2.6-free/` slug.
- **Release / knowledge:** September 2026 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `xiaomi/mimo-v2.6-flash` (no Free ID for this slug)
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/video/audio in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.14 in / $0.28 out per 1M (Xiaomi API; cached $0.0028).
- **Architecture:** open-weights 309B total / 15B active sparse MoE (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0 **28.80%**
- OSWorld-Verified **80.8%**; CyberGym **95.1%**; JobBench **61.2%**
- Toolathlon-Verified **73.6%**; AutomationBench **52.3%**; Agents' Last Exam **27.6%**; GDPval-AA **55.0%**
- ExploitGym **6.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **35.1%** (AA)
- AA-LCR **74.3%**; CritPt **12.0%**; AA Index **37.9%**
- AA-Omniscience Accuracy / Hallucination Rate: **27.0% / 54.4%** (negative Omniscience Index −12.7)
- GPQA: no verified public score found for this ID

Coding:

- DeepSWE: **67.9%**; AA-SciCode **51.3%**; ProgramBench **26.0%**; SWE-bench not separately reported

Long context:

- AA-LCR 74.3%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **73.1%**; text/image/video/audio input per provider metadata

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 87.6%, OSWorld-Verified 80.8% and CyberGym 95.1% are frontier; GDPval 55% and Agents' Last Exam 27.6% cap it.
- **Reasoning: 70/100.** AA Index 37.9 is decent, but HLE 35.1%, CritPt 12% and a negative Omniscience Index are weak for a 2026 model.
- **Context window: 95/100.** Full 1M input with AA-LCR 74.3%.
- **Multimodal: 88/100.** text/image/video/audio in with MMMU-Pro 73.1%; text-only output.
- **Coding: 78/100.** DeepSWE 67.9% is solid; SciCode 51.3% and ProgramBench 26% are modest, SWE-bench absent.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M is near the cheapest frontier-adjacent pricing.
- **Overall Score: 84/100.** Mean of (90 + 70 + 95 + 88 + 78) / 5 = 84.2 → 84. Best-fit: ultra-cheap omnimodal agentic coding and OS control.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Xiaomi, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
