# MiMo V2.6 Pro — findings by Mercury 3

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro-RL (Xiaomi MiMo V2.6 Pro)
- **Short description:** Xiaomi's flagship open-weights (MIT) MoE model (released 2026-09-21): 1.02T total/42B active, 1M context, natively omnimodal (text/image/video/audio in), RL-trained toward self-improvement. Best-in-class open-weight intelligence (II 30, #3/23) with near-bottom cost.
- **Provider / access:** Xiaomi MiMo API/platform, OpenRouter, AI Studio, MiMo Code; MIT open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`); 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not published.
- **IDs:** `MiMo-V2.6-Pro-RL` (HF / Xiaomi platform; OpenRouter `xiaomi/mimo-v2.6-pro`).
- **Context window:** 1,000,000 tokens (1M) total; max output 131,072.
- **Modalities:** text + image + video + audio input (native omni per HF card), text output; reasoning (extended thinking); tool calls; MTP speculative decoder.
- **Pricing (as of 2026-11-03):** $0.435 input / $0.87 output per 1M tokens (Xiaomi API), 99% cache discount (blended ~$0.18).
- **Architecture:** 1.02T total / 42B active MoE, 70 layers (60 SWA + 10 GA), 384 experts (8 routed), 681M MiMo ViT + 308M AudioTokenizer + 127M audio patch encoder; MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%**; GDPval-AA v2.1: **1673 Elo**; OSWorld-Verified: **82.0%**; Toolathlon-Verified: **76.9%**; AutomationBench: **53.1%**; JobBench: **62.0%**; Agents' Last Exam: **31.6%**; Terminal-Bench 4.0: **34.9%** (technical report)
- CyberGym: **94.0%**; MiMo Cyber Bench: **80.2%**; ExploitGym: 17.8%; ExploitBench: 47.9%; SEC Bench Pro: 66.3%
- AA GDPval normalized: **59.2%**; AA AutomationBench: 58.6%; AA-AnalystAgent: 37.5%; AA-Briefcase Elo 1511; AA Cyber Index: 56.1%

Reasoning / knowledge:

- HLE: **49.4%** (AA); Artificial Analysis Intelligence Index: **30**, #3 of 23 open-weight (AA); 46.3% (technical report — config divergence)
- AA-LCR: **86.3%** (excellent); CritPt: **26.6%**; MLCR-AA: 12.8%
- AA-Omniscience: accuracy 34.8%, hallucination rate 60.2%
- No GPQA/ARC-AGI figure verified in sources reviewed for this exact checkpoint

Coding:

- DeepSWE: **71.9%**; MiMo Code Bench: **63.2%**; ProgramBench: **26.5%**; AA-SciCode: **60.9%**; Bug Hunt: 22.7 fixes
- Terminal-Bench 2.1 89.9% (above)

Long context:

- 1M window; AA-LCR 86.3% (top-tier for open weights); MLCR-AA 12.8%.

Multimodal:

- Native text/image/video/audio input per HF card; MiMo VisualCoding 72.3%; Design Arena 1307 Elo; no verified video/audio benchmark rows found.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 89.9%, OSWorld-Verified 82%, GDPval 1673, CyberGym 94% — elite open-weight agentic; capped by TB4.0 34.9% and Agents' Last Exam 31.6%.
- **Reasoning: 86/100.** II 30 (#3/23 open) and LCR 86.3% are top-tier; capped by HLE 49.4%, CritPt 26.6%, and hallucination rate 60.2%.
- **Context window: 92/100.** 1M with excellent LCR 86.3%; no ≥98%-retrieval figure at depth.
- **Multimodal: 90/100.** Native omni input with strong visual-agent work; text-only output and thin verified video/audio evals cap it.
- **Coding: 87/100.** DeepSWE 71.9% and TB2.1 89.9% are strong; capped by ProgramBench 26.5% and no FrontierCode figure.
- **Cost efficiency: 97/100.** $0.435/$0.87 with 99% cache discount + MIT weights — among the best value in the open ecosystem (44 t/s slowness holds it shy of 100).
- **Overall Score: 89/100.** Mean of (89+86+92+90+87)/5 = 88.8 → 89. The strongest open-weight overall package researched so far; choose for budget frontier work with omni input.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Xiaomi MiMo technical report/model card, Artificial Analysis model page/leaderboards, BenchLM aggregation); scores are normalized 1–100 interpretations, not official vendor scores. II config divergence (30 AA vs 46.3 report) and sparse GPQA/ARC coverage flagged.
- Reference URLs:
  - [MiMo-V2.6-Pro-RL model card + technical report (Hugging Face)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [MiMo V2.6 blog (Xiaomi)](https://mimo.xiaomi.com/mimo-v2-6)
  - [MiMo-V2.6-Pro — Artificial Analysis model page ($0.435/$0.87, 1M, 1.0T/42B, MIT)](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [MiMo-V2.6-Pro — BenchLM benchmark aggregation](https://benchlm.ai/models/mimo-v2-6-pro)
