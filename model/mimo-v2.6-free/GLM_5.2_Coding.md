# MiMo V2.6 Free — findings by GLM 5.2 Coding

- Source: Xiaomi (`opencode/mimo-v2-6-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's MiMo V2.6 generation (open-weight Flash-RL variant per HF card `XiaomiMiMo/MiMo-V2.6-Flash-RL`) served on OpenCode Zen. Top use case: cheap/free terminal agents and security automation.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free`; open weights on Hugging Face (`MiMo-V2.6-Flash-RL`).
- **Release / knowledge:** MiMo-V2.6 generation, successor to MiMo-V2.5 (BenchLM family record); exact date and cutoff not published in the records checked.
- **IDs:** `opencode/mimo-v2-6-free` on Zen; open weights on HF for self-hosting.
- **Context window:** 1M native (BenchLM V2.6-Flash record); the Zen entry lists a 128K served window — scored on the served 128K cap.
- **Modalities:** Text in / text out (Zen entry surface; no multimodal benchmark evidence on BenchLM); reasoning model; tool calls.
- **Pricing (as of 2026-09-22):** Zen free-tier entry (folder/`-free` naming); meta lists "standard pricing" — treat as free-tier-with-limits, scored accordingly. Open weights allow self-hosting at cost.
- **Architecture:** Open weights (HF card `MiMo-V2.6-Flash-RL`); parameter count not stated in the records checked.

### Raw benchmarks found

> Verified via BenchLM MiMo-V2.6-Flash record (14 of 481 benchmarks covered, unranked composite, 2026-09-22); the Zen free SKU is not separately benchmarked.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (BenchLM — clears the 88% frontier ref within rounding)
- Terminal-Bench 4.0: **28.80%** (BenchLM)
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: no verified public score found
- Toolathlon-Verified: **73.6%** (BenchLM)
- OSWorld-Verified: **80.8%**; JobBench: **61.2%**; AutomationBench: **52.3%**; CyberGym: **95.1%**; ExploitGym: **6.0%**; Agents' Last Exam: **27.6%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **67.9%** DeepSWE; ProgramBench **26.0%** (BenchLM)

Long context:

- 1M native (BenchLM) vs 128K served on the Zen entry; no MRCR/RULER number published.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 87.6%, Toolathlon 73.6%, OSWorld-Verified 80.8% and CyberGym 95.1% are frontier-adjacent; capped by TB4.0 28.8%, ExploitGym 6.0% and no GDPval/Tau evidence.
- **Reasoning: 72/100.** Provisional: no public GPQA/HLE/Index numbers for V2.6; family baseline (V2.5: GPQA 81.6%) supports solid-but-not-frontier reasoning.
- **Context window: 65/100.** 128K served on the Zen entry despite 1M native — below the 200K mid tier.
- **Multimodal: 15/100.** Text-only in/out per the Zen entry; no multimodal benchmark evidence.
- **Coding: 80/100.** TB2.1 87.6% and DeepSWE 67.9% are strong; capped by ProgramBench 26.0% and no SWE-V/LCB numbers.
- **Cost efficiency: 95/100.** Free-tier Zen entry (with limits) plus open weights — near-zero cost either way.
- **Overall Score: 62.4/100.** (80+72+65+15+80)/5 — a free terminal-agent specialist: elite TB2.1/CyberGym for $0, dragged down by text-only I/O and a 128K served window.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + HF model card + Zen entry metadata) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
