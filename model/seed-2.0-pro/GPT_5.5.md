# Seed 2.0 Pro — findings by GPT 5.5

- Source: ByteDance/Seed 2.0 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance Seed 2.0 Pro is a frontier-style model aimed at real-world complex tasks, long-tail knowledge, instruction following, math, code, and long-context reliability.
- **Provider / access:** ByteDance Seed ecosystem; exact API route not verified in this pass.
- **Release / knowledge:** Seed2.0 model card appeared in 2026, with arXiv publication in July 2026.
- **IDs:** `bytedance/seed-2.0-pro`
- **Context window:** Model card reports long-context benchmarks at 128K and below-128K GraphWalks settings; exact max context was not verified in accessible snippet.
- **Modalities:** Model card includes visual reasoning (VisuLogic) and text benchmarks; exact API modalities not fully verified.
- **Pricing (as of 2026-10-05):** No verified public pricing found in accessible sources.
- **Architecture:** Proprietary ByteDance Seed model.

### Raw benchmarks found

Agent / tool use:

- Seed2.0 model card: describes Seed2.0 as targeting long-tail knowledge and complex instruction following for real-world tasks (`https://arxiv.org/abs/2607.00248`).
- Official model-card table: reports Seed2.0 Pro on MRCR v2 **54.0**, Graphwalks BFS **68.9**, Graphwalks Parents **97.6**, LongBench v2 **63.8**, and Frames **84.5** (`https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Official model-card table: MMLU-Pro **87.0**, HLE **32.4**, GPQA Diamond **88.9**, SuperGPQA **68.7**, ARC-AGI-2 **37.5**, ProcBench **96.6**.
- GPQA Diamond: **88.9%**
- HLE: **32.4%**
- MMLU-Pro: **87.0%**

Coding:

- Official model-card table: Codeforces **3020**, AetherCode **60.6**, LiveCodeBench v6 **87.8**.
- LiveCodeBench v6: **87.8**
- AetherCode: **60.6**
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Long context:

- MRCR v2 **54.0**, Graphwalks Parents **97.6**, LongBench v2 **63.8** from the official model card.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong instruction/long-context benchmarks imply good tool workflows, but direct agent benchmarks are missing.
- **Reasoning: 91/100.** GPQA 88.9, HLE 32.4, MMLU-Pro 87.0, and math/code rows support frontier-class reasoning.
- **Context window: 82/100.** Good long-context benchmark results, but max context was not verified as 1M-class.
- **Multimodal: 78/100.** VisuLogic and visual reasoning evidence support multimodal ability, exact API scope unclear.
- **Coding: 89/100.** LiveCodeBench v6 87.8 and Codeforces 3020 are strong.
- **Cost efficiency: 70/100.** Pricing not verified, so value is uncertain.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is complex reasoning, coding, and instruction-heavy workflows where ByteDance access is available.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
