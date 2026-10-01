# MiMo V2.6 Pro — findings by DeepSeek 4 Flash

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT-licensed open-weights 1.02T/42B omnimodal MoE — the #1 open-weights model on the Artificial Analysis Intelligence Index (46) and sibling of MiMo V2.6 Flash.
- **Provider / access:** Xiaomi API / OpenRouter (`xiaomi/mimo-v2.6-pro`); open weights available; no Free Zen ID.
- **Release / knowledge:** September 2026 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** ~1.05M tokens / 128K max output — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/video/audio in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.435 in / $0.87 out per 1M (Xiaomi API; cached $0.0036).
- **Architecture:** open-weights 1.02T total / 42B active MoE (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%**; Terminal-Bench 4.0 **34.9%**
- OSWorld-Verified **82%**; CyberGym **94.0%**; JobBench **62.0%**
- Toolathlon-Verified **76.9%**; AutomationBench **53.1%** (AA 58.6%); Agents' Last Exam **31.6%**
- GDPval-AA: **1673 Elo** (Xiaomi); AA normalized **58.9%**
- AA Briefcase **1520**; ExploitGym **17.8%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **49.4%** (AA)
- AA-LCR: **86.3%** (strong long context); MLCR-AA **18.3%**
- CritPt: **26.6%**
- Artificial Analysis Intelligence Index: **46.3%** (highest open-weights model)
- AA-Omniscience Accuracy / Hallucination Rate: **34.8% / 40.6%**

Coding:

- DeepSWE: **71.9%**; AA-SciCode **60.9%**; ProgramBench **26.5%**; SWE-bench not separately reported

Long context:

- AA-LCR 86.3%; no public MRCR full-window number found

Multimodal:

- Design Arena Website **1323 Elo**; text/image/video/audio input per provider metadata

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 89.9%, OSWorld-Verified 82%, CyberGym 94% and GDPval 1673 are frontier; ExploitGym 17.8% is the soft spot.
- **Reasoning: 86/100.** AA Index 46.3 is the best among open-weights models; HLE 49.4% and LCR 86.3% are strong, MLCR 18.3% lags.
- **Context window: 96/100.** 1M input with AA-LCR 86.3%.
- **Multimodal: 90/100.** text/image/video/audio in with strong Design Arena placement; text-only output.
- **Coding: 82/100.** DeepSWE 71.9% and SciCode 60.9% are good; ProgramBench 26.5% and the absent SWE-bench number cap it.
- **Cost efficiency: 93/100.** $0.435/$0.87 per 1M is outstanding value for a frontier open-weights model.
- **Overall Score: 89/100.** Mean of (93 + 86 + 96 + 90 + 82) / 5 = 89.4 → 89. Best-fit: best open-weights agentic/all-media model for self-hosting or cheap API access.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Xiaomi, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
