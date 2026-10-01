# MiMo V2.6 Free — findings by DeepSeek 4 Flash

- Source: Xiaomi/MiMo V2.6 Free
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Free OpenCode Zen tier of Xiaomi's MiMo V2.6 Flash omnimodal MoE (309B/15B) with 1M context, full media input and strong OS/agent scores.
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2-6-free`); sibling of the paid `xiaomi/mimo-v2.6-flash`; open weights.
- **Release / knowledge:** September 2026 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/mimo-v2-6-free`
- **Context window:** 1M (family) — BenchLM.
- **Modalities:** text/image/video/audio in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** free Zen tier; native paid $0.14/$0.28 per 1M.
- **Architecture:** open-weights 309B total / 15B active sparse MoE (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.6%**; Terminal-Bench 4.0 **28.80%**
- OSWorld-Verified **80.8%**; CyberGym **95.1%**; JobBench **61.2%**
- Toolathlon-Verified **73.6%**; AutomationBench **52.3%**; Agents' Last Exam **27.6%**; GDPval-AA **55.0%**
- ExploitGym **6.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (AA): **35.1%**
- AA-LCR **74.3%**; CritPt **12.0%**; AA Index **37.9%**
- AA-Omniscience Index **−12.7%**; Accuracy / Hallucination Rate **27.0% / 54.4%**

Coding:

- DeepSWE **67.9%**; AA-SciCode **51.3%**; ProgramBench **26.0%**; SWE-bench not separately reported

Long context:

- AA-LCR 74.3%

Multimodal:

- AA-MMMU-Pro **73.1%**; text/image/video/audio input per family specs

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 87.6%, OSWorld-Verified 80.8% and CyberGym 95.1% are frontier; GDPval 55% caps it.
- **Reasoning: 70/100.** AA Index 37.9 is decent; HLE 35.1%, CritPt 12% and a negative Omniscience Index are weak.
- **Context window: 95/100.** 1M input with AA-LCR 74.3%.
- **Multimodal: 88/100.** text/image/video/audio in with MMMU-Pro 73.1%; text-only output.
- **Coding: 78/100.** DeepSWE 67.9% is solid; SciCode 51.3% and ProgramBench 26% are modest.
- **Cost efficiency: 100/100.** $0 on the evaluated free Zen tier; native $0.14/$0.28.
- **Overall Score: 84/100.** Mean of (90 + 70 + 95 + 88 + 78) / 5 = 84.2 → 84. Best-fit: free omnimodal agentic coding and OS control.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Xiaomi, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
