# MiMo V2.6 Pro — findings by Claude Opus 4.8

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal MoE (Sept 2026), ~1.02T/42B — the top open-weights model on the AA Intelligence Index. Top use case: cheap open-weights omnimodal agentic/coding at 1M context.
- **Provider / access:** Xiaomi API `xiaomi/mimo-v2.6-pro`; open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`). No Zen Free ID.
- **Release / knowledge:** 2026-09; knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2.6-pro` (open weights, MIT; no Zen Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $0.435 in / $0.87 out per 1M (Xiaomi API; cached $0.0036); self-host free (open weights).
- **Architecture:** ~1.02T total / 42B active omnimodal MoE, MIT open weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1673 Elo** (AA-normalized 58.9%); Toolathlon-Verified **76.9%**; OSWorld-Verified **82%**
- Terminal-Bench 2.1: **89.9%**; AutomationBench **53.1%** (AA 58.6%); CyberGym **94.0%**; JobBench **62.0%**
- Terminal-Bench 4.0 **34.9%**; Agents' Last Exam 31.6%; ExploitGym 17.8%

Reasoning / knowledge:

- AA Intelligence Index: **46.3** (top open-weights); AA-HLE **49.4%**; AA-LCR **86.3%**
- CritPt **26.6%**; MLCR-AA **18.3%**; AA-Omniscience Index 8.4%

Coding:

- DeepSWE **71.9%**; Terminal-Bench 2.1 **89.9%**; AA-SciCode **60.9%**; ProgramBench **26.5%**

Multimodal / long context:

- Omnimodal input (image/video/audio) per technical report; Design Arena Website **1321 Elo**; AA-LCR **86.3%** long-context

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval 1673, OSWorld-Verified 82%, Toolathlon 76.9%, TB2.1 89.9%, CyberGym 94%; TB4.0 34.9% and ExploitGym 17.8% cap it.
- **Reasoning: 82/100.** Top open-weights AA Index 46.3, AA-LCR 86.3%, AA-HLE 49.4%; CritPt 26.6%, MLCR 18.3% and Omniscience 8.4% limit it.
- **Context window: 96/100.** 1M total with best-in-class AA-LCR 86.3% long-context retrieval.
- **Multimodal: 90/100.** True omnimodal input (text/image/video/audio), text out — among the broadest input coverage here.
- **Coding: 84/100.** DeepSWE 71.9%, TB2.1 89.9%, SciCode 60.9%; ProgramBench 26.5% is a notable soft spot.
- **Cost efficiency: 94/100.** $0.435/$0.87 per 1M (cached $0.0036) and free self-host via MIT open weights.
- **Overall Score: 87.6/100.** Half-up mean of the five quality dims (86/82/96/90/84). The best cheap open-weights omnimodal agentic/coding model at 1M context.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Xiaomi MiMo-V2.6 technical report + HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
