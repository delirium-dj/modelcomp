# MiMo-V2.6-Pro — findings by Qwen 4 Max

- Source: Xiaomi/mimo-v2.6-pro
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (HF checkpoint `MiMo-V2.6-Pro-RL`)
- **Short description:** Xiaomi's flagship open-weight "self-improvement" model (Sep 21–22, 2026) — a 1.02T-parameter sparse MoE (42B active) trained with one mixed RL run across coding/agents/vision/cyber ("You Only RL Once"), asynchronous GRPO at 1,568 prompts x 16 rollouts, Groupwise Reward Synthesis + Advantage Redistribution, and MOPD2 multi-teacher distillation. Launch claim: AA Intelligence Index 46.32, "strongest open-source model" ahead of Kimi K3 and Qwen3.8 Max (Sep snapshot). Native omnimodal input, MIT license, and a $0.26 AA cost/task — but very slow (35.9 min/task) and knowledge-reliability is poor (AA-Omniscience net **-4.5**).
- **Provider / access:** Xiaomi MiMo Open Platform API (`mimo-v2.6-pro`, plus an `ultraspeed` variant), AI Studio, MiMo Code, MiMo Desktop, OpenRouter ($0.3263/$0.6525 — below list); AA lists 4 API providers. Open weights: `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF/ModelScope), SGLang (tp16/dp2/ep2 nodes) and vLLM recipes; 42B active makes self-hosting far lighter than the 2.8T Kimi class.
- **Release / knowledge:** AA says 2026-09-21; llm-stats and the launch blog say 2026-09-22 (one-day discrepancy labelled). Knowledge cutoff not stated in the sources read. Same API pricing as the V2.5 series ("intelligence upgraded, price unchanged").
- **IDs:** `mimo-v2.6-pro` / `mimo-v2.6-pro-ultraspeed`; HF `XiaomiMiMo/MiMo-V2.6-Pro-RL`; sibling `MiMo-V2.6-Flash-RL`.
- **Context window:** 1M tokens (long repositories, tool traces, multi-session agent runs). AA-LCR 86.3% but MLCR-AA **12.8%** (medical multi-hop — very weak). No long-context surcharge documented; cache discount 99%.
- **Modalities:** **Native omnimodal input: text, image, video, audio** (HF card + AA agree; llm-stats lists only text+image — under-reported). Text out. MiMo ViT 681M (28 layers: 24 SWA + 4 full), AudioTokenizer 308M + 127M patch encoder (25 Hz → 6.25 Hz). Sampling: temp 1.0, top_p 0.95.
- **Pricing (as of 2026-11-11):** $0.43 in / $0.87 out per 1M (Xiaomi list; llm-stats $0.435/$0.87), cache hits ~$0.0036 (99% discount); OpenRouter $0.3263/$0.6525. AA blended $0.18/M; cost per Intelligence Index task **$0.26** — cheapest frontier-class run measured so far. Ultraspeed variant priced separately.
- **Architecture:** Sparse MoE **1.02T total / 42B activated**; 70 layers (60 sliding-window attention + 10 global attention; window 128), first block dense FFN + global attention, 384 routed experts (8 active, **no shared experts**), hidden 6144; 5-layer SWA MTP speculative decoder (DFlash-style, 7 tokens/pass). MIT license (use-restrictions notice is informational, not a license amendment).

### Raw benchmarks found

Vendor table (HF card / technical report; peers: MiMo-V2.6-Flash / V2.5-Pro / Opus 5 / GPT-5.6 Sol / Fable 5):

- Code agent: DeepSWE v1.1 **71.9** (Opus 5 74.0, Sol 73.0); ProgramBench 26.5 (Opus 37.0); in-house MiMo Code Bench 63.2
- General agent: Terminal-Bench 2.1 **89.9** (best in table; Opus 89.1, Sol 88.8); **TB4.0 34.9** (Opus 49.0, Sol 39.9, Fable 42.4); AutomationBench v1.0.6 **53.1** (best); Toolathlon-Verified 76.9 (Opus 80.6); GDPval-AA 2.1 **1,673 Elo** (Opus 1,708); Agents' Last Exam **31.6** (ties Opus 5); OSWorld-Verified 82.0 (Fable 86.0); JobBench 62.0
- Cyber: CyberGym **94.0**; in-house MiMo Cyber Bench 80.2; ExploitGym 17.8 (Sol 30.3); ExploitBench 47.9 (Sol 78.5); SEC Bench Pro 66.3 (Sol 79.1)
- Visual agent: in-house MiMo VisualCoding 72.3 (Sol 73.4)

Independent runs (AA page fetched Nov 11 + BenchLM's Nov 10 sourced profile):

- AA Intelligence Index: **30 on current v5.0.1** (#4/26 in its open-weights class, median 23) vs **46.32 at launch** (vendor claim, Sep 22, v4-era methodology) — different index versions, both labelled, never compared; BenchLM's 46.3 row cites the technical report, i.e. the launch snapshot
- AA agentic: GDPval-AA normalized 59.2%, AA-Briefcase **1,512**, AutomationBench-AA **58.6**, AA TB4.0 **34.8** (matches vendor 34.9), AA-AnalystAgent 37.5, MKA 37.3, GDP.pdf 19.2
- AA knowledge/reasoning: AA-HLE **49.4**, CritPt 26.6, **AA-Omniscience net -4.5** (accuracy 34.8%, hallucination rate **60.2%** — more incorrect than correct answers), STEMBench 2.17 (Ulam Oct 28 audit)
- AA long context: AA-LCR **86.3**, MLCR-AA **12.8**
- AA cyber: Cyber Index 56.1, CWE-Bench-AA 63.3, CyberGym-E2E-AA 78.6, DeepsecBench-AA 26.2
- AA performance/economics: **35.9 min/task** (median 12.9 — among the slowest), TTFT 25.74s, 56 tok/s, 131M output tokens on the index (median 99.3M — verbose), cost/task **$0.26**
- Other: AA-SciCode 60.9, Bug Hunt Bench 22.7 fixes, Design Arena Website 1,304 (OpenRouter); BenchLM aggregate **57.15/100, #60 of 1020** (39/812 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval-AA 1,673, Toolathlon 76.9, OSWorld-V 82.0, ALE 31.6 (ties Opus 5), AutomationBench 53.1/58.6 and TB2.1 89.9 are genuinely strong; capped by TB4.0 34.9/34.8 (Opus 49.0), AA-Briefcase 1,512 vs the 1,800+ leaders, GDP.pdf 19.2, and 35.9-minute task times that blunt real-world agent throughput.
- **Reasoning: 82/100.** AA-HLE 49.4 and CritPt 26.6 beat Kimi K3's independent runs, and the launch-era index (46.32) led open weights; capped hard by AA-Omniscience net **-4.5** with 60.2% hallucination — parametric knowledge is unreliable — plus STEMBench 2.17 and the current v5.0.1 index of 30.
- **Context window: 87/100.** 1M tokens with no surcharge, 99% cache discount, and AA-LCR 86.3; capped by MLCR-AA 12.8 (near-failure on medical multi-hop retrieval) and no published output-token ceiling.
- **Multimodal: 80/100.** Native text/image/video/audio input confirmed by both the HF card and AA — rare among open weights — with a 681M ViT and dedicated audio encoders; capped by the absence of any published MMMU/CharXiv/video-benchmark scores (only in-house VisualCoding 72.3 and Design Arena 1,304), so the omni claim is under-verified.
- **Coding: 84/100.** DeepSWE 71.9 (GPT-6.1 Sol-class), TB2.1 89.9 best-in-vendor-table, SciCode 60.9; capped by TB4.0 34.9, ProgramBench 26.5 vs Opus 37.0, and Bug Hunt 22.7 fixes — long-horizon/hard-repo coding trails the frontier.
- **Cost efficiency: 95/100.** $0.43/$0.87 with 99% cache discount, $0.26 AA cost/task (cheapest frontier-class measured), MIT weights, and only 42B active parameters to serve; OpenRouter undercuts list further. Deductions for extreme verbosity (131M index tokens) and 35.9 min/task — cheap per token, slow per answer; ultraspeed costs extra.
- **Overall Score: 83.6/100.** Mean of the five quality dims (85+82+87+80+84)/5 = 83.6. Best-fit: the budget open-weight omni-agent — MIT-licensed 1M-context multimodal automation at ~1/20th of Opus pricing, ideal for high-volume, low-stakes pipelines and self-hosting; the -4.5 Omniscience net score and 12.8 MLCR rule it out for knowledge-critical or medical/legal retrieval work without heavy verification scaffolding.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Xiaomi's full Hugging Face model card + technical-report benchmark table, Artificial Analysis' independent model page fetched live, BenchLM's sourced profile, llm-stats' rate card, and OpenRouter's listing via search snippet); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA Intelligence Index 46.32 (launch, Sep 22, vendor-cited v4-era) vs 30 (current v5.0.1, #4/26 open-weights class) — different versions, not comparable with each other or with K3.1 Pro's 55 (v4.3.2-era) / 46.5 (unstated); release date Sep 21 (AA) vs Sep 22 (llm-stats/blog); pricing $0.43/$0.87 (AA/list) vs $0.435/$0.87 (llm-stats) vs $0.3263/$0.6525 (OpenRouter); modalities text/image/video/audio (HF card + AA) vs text+image only (llm-stats — under-reported). Vendor peer columns (Opus 5 TB4.0 49.0, GPT-5.6 Sol TB4.0 39.9) are Xiaomi-run and differ from Anthropic's own Sol TB4.0 37.3 — separate harnesses, both retained. In-house benchmarks (MiMo Code Bench, MiMo Cyber Bench, MiMo VisualCoding) flagged as vendor-designed. mimo.xiaomi.com's launch page is a JS shell — its 46.32 claim was captured via search snippet and corroborated by the technical report citation in BenchLM. Identity: MiMo-V2.6-Pro ≠ V2.6-Flash ≠ V2.5-Pro; TB2.1 and TB4.0 are different benchmark versions.
- Reference URLs:
  - [MiMo-V2.6-Pro-RL model card — Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [MiMo-V2.6 technical report — Xiaomi (HF)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - [Introducing MiMo-V2.6 series — Xiaomi](https://mimo.xiaomi.com/mimo-v2-6)
  - [MiMo-V2.6-Pro Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [MiMo-V2.6-Pro benchmark profile — BenchLM](https://benchlm.ai/models/mimo-v2-6-pro)
  - [MiMo-V2.6-Pro Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/mimo-v2.6-pro)
  - [MiMo-V2.6-Pro — OpenRouter](https://openrouter.ai/xiaomi/mimo-v2.6-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.