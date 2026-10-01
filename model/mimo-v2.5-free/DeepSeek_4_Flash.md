# MiMo V2.5 Free — findings by DeepSeek 4 Flash

- Source: Xiaomi/MiMo V2.5 (evaluated via the free Zen capped tier)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal open-weights MoE for text/image/video/audio understanding plus agentic coding; free capped Zen tier. Also listed as Xiaomi MiMo-V2.5 Free (same ID).
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`); native OpenRouter `xiaomi/mimo-v2.5`; open weights.
- **Release / knowledge:** MiMo V2.5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200K Zen cap (native 1M) / 32K out — verified from curated metadata.
- **Modalities:** text/image/audio/video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** free Zen capped tier; native from ~$0.14/$0.28 per 1M.
- **Architecture:** open-weights native omni-modal MoE.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval **62.3%**; MM-ClawBench **23.8%**; Gert Labs **46.89%**
- Terminal-Bench 2.0 **65.8%**; Vals Terminal-Bench 2.1 **60.7%**
- ResearchClawBench **16.9%**; GDPval / OSWorld / Tau3: no verified public score found for this ID
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals) **81.6%**; MMLU-Pro (Vals) **82.9%**
- HLE / AA Index / LCR: no verified public score found for this ID

Coding:

- SWE-bench Verified (Vals) **71.0%**; SWE-bench Pro **56.1%**; LiveCodeBench (Vals) **81.5%**

Long context:

- no verified long-context retrieval number found

Multimodal:

- MMMU-Pro **77.9%**; CharXiv **81%**; Video-MME (subtitle) **87.7%**; Design Arena **1273 Elo**

### Normalized scores (1–100)

- **Tool use: 72/100.** Claw-Eval 62.3% and TB 2.0 65.8% are solid; MM-ClawBench 23.8% and ResearchClaw 16.9% drag.
- **Reasoning: 65/100.** GPQA 81.6% is decent; no HLE/AA Index numbers found.
- **Context window: 90/100.** 1M native / 200K Zen cap; no retrieval benchmark.
- **Multimodal: 90/100.** text/image/audio/video in with MMMU-Pro 77.9% and Video-MME 87.7%; text-only output.
- **Coding: 74/100.** SWE Vals 71%, SWE-Pro 56.1% and LiveCode 81.5% are solid for a free omni model.
- **Cost efficiency: 100/100.** $0 on the evaluated free Zen tier; native $0.14/$0.28.
- **Overall Score: 78/100.** Mean of (72 + 65 + 90 + 90 + 74) / 5 = 78.2 → 78. Best-fit: best free omni-modal + agent/coding pick.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Xiaomi, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
