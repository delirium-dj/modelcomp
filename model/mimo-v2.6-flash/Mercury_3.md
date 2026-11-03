# MiMo V2.6 Flash — findings by Mercury 3

- Source: Xiaomi/MiMo V2.6 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash-RL (Xiaomi MiMo V2.6 Flash)
- **Short description:** Xiaomi's efficiency-balanced open-weights (MIT) MoE model (released 2026-09-21): 309B total/15B active, 1M context, natively omnimodal (text/image/video/audio in), RL-trained toward self-improvement (mixed-domain RL + agentic grading). Top-5 open-weight agentic/coding value at ~$0.14/$0.28.
- **Provider / access:** Xiaomi MiMo API/platform, OpenRouter, AI Studio, MiMo Code; MIT open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`); 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-21 (technical report 2026); knowledge cutoff not published.
- **IDs:** `MiMo-V2.6-Flash-RL` (HF / Xiaomi platform; OpenRouter `xiaomi/mimo-v2.6-flash`).
- **Context window:** 1,000,000 tokens (1M) total; max output 131,072.
- **Modalities:** text + image + video + audio input (native omni per HF card), text output; reasoning (extended thinking); tool calls; multi-token prediction (5-layer speculative decoder).
- **Pricing (as of 2026-11-03):** $0.14 input / $0.28 output per 1M tokens (Xiaomi API), 98% cache discount (blended ~$0.06).
- **Architecture:** 309B total / 15B active MoE, 48 layers (39 SWA + 9 GA), 256 experts (8 routed), 681M MiMo ViT + 308M AudioTokenizer + 127M audio patch encoder; MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%**; AutomationBench v1.0.6: **52.3%**; Toolathlon-Verified: **73.6%**; JobBench: **61.2%**; OSWorld-Verified: **80.8%**; Agents' Last Exam: **27.6%**; Terminal-Bench 4.0: **28.8%** (technical report)
- CyberGym: **95.1%** (technical report — top tier); MiMo Cyber Bench: 77.2%; ExploitGym: 6.0%; ExploitBench: 25.3%; SEC Bench Pro: 47.5%
- GDPval-AA normalized: **55.4%** (AA); MiMo VisualCoding: 71.5%

Reasoning / knowledge:

- HLE: **35.1%** (AA); Artificial Analysis Intelligence Index: **27**, #9 of 23 open-weight (AA), 26.7% (BenchLM)
- AA-LCR: **74.3%**; CritPt: **12.0%**
- AA-Omniscience: accuracy 27.2%, hallucination rate 52.2%
- No GPQA/ARC-AGI figure verified in sources reviewed for this exact checkpoint

Coding:

- DeepSWE: **67.9%**; MiMo Code Bench: **61.2%**; ProgramBench: **26.0%**; AA-SciCode: **51.3%**
- Terminal-Bench 2.1 87.6% (above)

Long context:

- 1M window; AA-LCR 74.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- Native text/image/video/audio input per HF card (AA page lists text+image only — modality coverage conflict); MMMU-Pro 73.1% (AA); no verified video/audio benchmark rows found.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6%, OSWorld-Verified 80.8%, JobBench 61.2%, CyberGym 95.1% — excellent open-weight agentic profile; capped by TB4.0 28.8% and Agents' Last Exam 27.6%.
- **Reasoning: 78/100.** II 27 (#9/23 open) and LCR 74.3% are decent; capped by HLE 35.1%, CritPt 12%, and hallucination rate 52.2%.
- **Context window: 88/100.** 1M with moderate LCR 74.3%; no ≥98%-retrieval figure at depth.
- **Multimodal: 90/100.** Native omni input (text/image/video/audio per HF) with strong visual-agent work (MiMo VisualCoding 71.5%, MMMU-Pro 73.1%); text-only output and thin verified video/audio evals cap it.
- **Coding: 84/100.** DeepSWE 67.9% and TB2.1 87.6% are strong; capped by ProgramBench 26% and SciCode 51.3%.
- **Cost efficiency: 99/100.** $0.14/$0.28 with 98% cache discount + MIT weights — near-bottom cost among all researched models (only 36.2 t/s speed holds it from 100).
- **Overall Score: 85/100.** Mean of (86+78+88+90+84)/5 = 85.2 → 85. One of the best open-weight cost/performance packages; choose for budget omni + agentic work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Xiaomi MiMo technical report/model card, Artificial Analysis model page/leaderboards, BenchLM aggregation); scores are normalized 1–100 interpretations, not official vendor scores. Modality conflict (HF native omni vs AA text+image) flagged; sparse GPQA/ARC coverage noted.
- Reference URLs:
  - [MiMo-V2.6-Flash-RL model card + technical report (Hugging Face)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [MiMo V2.6 blog (Xiaomi)](https://mimo.xiaomi.com/mimo-v2-6)
  - [MiMo-V2.6-Flash — Artificial Analysis model page ($0.14/$0.28, 1M, 309B/15B, MIT)](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [MiMo-V2.6-Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/mimo-v2-6-flash)
