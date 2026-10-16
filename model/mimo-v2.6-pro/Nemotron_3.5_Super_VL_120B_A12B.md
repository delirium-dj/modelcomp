# MiMo-V2.6-Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/mimo-v2-6-pro (Xiaomi MiMo-V2.6 technical report), Artificial Analysis (`artificialanalysis.ai/models/mimo-v2-6-pro`), llm-stats.com, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship open-weights omnimodal reasoning model (released 21/22 Sept 2026, MIT license) for long-horizon agent work — coding, computer use, office workflows, cybersecurity, research; 1.0T total / 42B active MoE parameters, 1M-token context, text/image/speech/video in, text out.
- **Provider / access:** Xiaomi API (`mimo-v2.6-pro`), OpenRouter (`xiaomi/mimo-v2.6-pro`), DeepInfra, Fireworks, Novita, Together; open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`). Sibling: MiMo-V2.6-Flash.
- **Release / knowledge:** Released 2026-09-21 (AA) / 2026-09-22 (llm-stats); MIT license permits commercial use.
- **IDs:** `mimo-v2.6-pro` (API); `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF weights). No Free ID confirmed (MIT open weights = self-host effectively free).
- **Context window:** 1M tokens (benchlm.ai, AA); up to 131,072 output tokens via current API (buildfastwithai). Verified on multiple sources.
- **Modalities:** Text, image, speech, and video in; text out; reasoning yes (extended thinking/deep thinking); tool use yes (tool calling, web search, structured output); JSON/structured output yes.
- **Pricing (as of 2026-10-16):** Input $0.435/M (DeepInfra low), $0.300/M cached, output $0.870/M; Fireworks/Moonshot/Novita/Together $3.00/$0.300/$15.00; AA lists $0.43/$0.87, cache discount 99%, cost per task $0.13.
- **Architecture:** Open-weights MoE, 1.0T total / 42B active parameters (per AA); 1.02T total / 42B active (per llm-stats/codersera); MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **76.9%** (Xiaomi technical report)
- OSWorld-Verified: **82%** (Xiaomi technical report)
- AutomationBench: **53.1%** (Xiaomi technical report); AA AutomationBench **58.6%**
- Agents' Last Exam: **31.6%** (Xiaomi technical report)
- Terminal-Bench 4.0: **34.90%** (Xiaomi technical report); AA **34.8%**
- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report)
- JobBench: **62.0%** (Xiaomi technical report)
- CyberGym: **94.0%** (Xiaomi technical report)
- ExploitGym: **17.8%** (Xiaomi technical report)
- GDPval-AA: **1673 Elo** (Xiaomi technical report); AA normalized **59.2%**
- AA Briefcase Elo: **1516** (Artificial Analysis)
- AA-AnalystAgent: **37.5%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.3%** (#1 of 119 open-weights models; median 19) (Xiaomi technical report / AA)
- AA-HLE: **49.4%** (Artificial Analysis)
- AA-Omniscience Index **8.4%**; Accuracy **34.8%**; Hallucination rate **40.6%** (AA)
- AA-LCR (long-context reasoning): **86.3%** (Artificial Analysis)
- CritPt: **26.6%** (Artificial Analysis)
- MLCR-AA: **18.3%** (Artificial Analysis)

Coding:

- DeepSWE: **71.9%** (Xiaomi technical report)
- ProgramBench: **26.5%** (Xiaomi technical report)
- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report)
- AA-SciCode: **60.9%** (Artificial Analysis)
- Bug Hunt Bench: **22.7 fixes** (public data)

Multimodal & grounded:

- Design Arena Website: **1309** (OpenRouter)
- Omnimodal input (text/image/speech/video); no MMMU-Pro/Chartography/LVBench numbers found for this exact model.

Long context:

- AA-LCR: **86.3%** (Artificial Analysis); MLCR-AA: **18.3%**; declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Strong Toolathlon (76.9), OSWorld (82), Terminal-Bench 2.1 (89.9), CyberGym (94.0), GDPval-AA (1673 Elo); capped by weak Agents' Last Exam (31.6), ExploitGym (17.8), Terminal-Bench 4.0 (34.9). Top-tier open-weights agent/computer-use model.
- **Reasoning: 72/100.** AA Intelligence Index 46 (#1 open-weights, well above median 19), AA-LCR 86.3%, AA-HLE 49.4%; capped by CritPt (26.6), MLCR-AA (18.3), AA-Omniscience accuracy (34.8%). Strongest open-weights reasoning but uneven on hardest problems.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 78/100.** Text + image + speech + video in, text out; no verified MMMU-Pro/Chartography/LVBench numbers found for this exact model; capped by text-only output.
- **Coding: 76/100.** DeepSWE 71.9%, Terminal-Bench 2.1 89.9%, AA-SciCode 60.9%; capped by ProgramBench (26.5), Bug Hunt Bench (22.7 fixes). Strong agentic coding, weaker benchmark-circuit coding.
- **Cost efficiency: 95/100.** MIT open weights (self-host ~$0) plus cheapest hosted pricing ($0.435/$0.87, 99% cache discount, $0.13/task); not counted toward Overall.
- **Overall Score: 79.6/100.** Half-up mean of (82 + 72 + 90 + 78 + 76) / 5 = 79.6 → 80. Best-fit recommendation: leading open-weights model for long-context agentic coding and computer use; outstanding value, verify on your own Terminal-Bench 4.0-class tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Xiaomi technical report + Artificial Analysis + llm-stats independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
