# MiMo-V2.6-Flash — findings by Qwen 4 Max

- Source: Xiaomi/mimo-v2.6-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (open checkpoint: MiMo-V2.6-Flash-RL)
- **Short description:** Xiaomi's September 2026 "efficiency-balanced checkpoint" of the MiMo-V2.6 series — built to **scale RL toward self-improvement**: one mixed RL run across coding/general agents/visual/cyber ("You Only RL Once"), fully async GRPO (1,568 prompts × 16 rollouts/step), Groupwise Reward Synthesis + Groupwise Advantage Redistribution (agentic grading that ranks passing trajectories), Aligned RL self-correction cold start, and MOPD2 multi-teacher on-policy distillation. Sibling of MiMo-V2.6-Pro (1.02T/42B); Flash is 309B/15B.
- **Provider / access:** **Open weights (MIT)** on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`) and ModelScope; Xiaomi MiMo Open Platform API, MiMo Studio, MiMo Code, MiMo Desktop, OpenRouter (`xiaomi/mimo-v2.6-flash`). SGLang/vLLM deployment recipes (temp 1.0, top_p 0.95). Informational use-restrictions notice (no military/malicious-cyber use) — does not amend MIT.
- **Release / knowledge:** Released 2026-09-21/22 with the V2.6 series (AA Sept 21; series blog Sept 22). Knowledge cutoff not stated in sources read.
- **IDs:** `mimo-v2.6-flash`; checkpoint `MiMo-V2.6-Flash-RL`; sibling `MiMo-V2.6-Pro-RL`; technical report `MiMo_V2_6_technical_report.pdf` (hosted in the Pro-RL repo).
- **Context window:** **1M tokens** (README/AA; OpenRouter lists 1,050,000 with 131,072 max completion — precision difference). Hybrid SWA/GA backbone (39 SWA + 9 GA layers, window 128) for long repositories/tool traces/multi-session runs. AA-LCR **74.3** (mid-pack); no MRCR row. **98% cache discount**.
- **Modalities:** Vendor: **native omnimodal — text, image, video, audio in** (README + HF tags; MiMo ViT 681M, AudioTokenizer 308M + 127M patch encoder). **AA's hosted API tracks text + image only** — access-path gap labelled. Text out. AA-MMMU-Pro 73.1, MiMo VisualCoding 71.5.
- **Pricing (as of 2026-11-12):** **$0.14 in / $0.28 out per 1M** (AA/OpenRouter; ~1/3 of Pro's $0.43/$0.87), **98% cache discount**; official CN card in CNY (cache hit ¥0.02/M). AA: **$0.13 per index task (#3/26 cost class)**, but **38 tok/s**, TTFT 36.73s, **58.4 min/task** (notably slow), 163M index tokens (very verbose).
- **Architecture:** Sparse MoE **309B total / 15B active**; 48 layers (39 SWA + 9 GA), hidden 4096, 256 routed experts (8 active, no shared expert), first block GA + dense FFN; 5-layer SWA MTP speculative decoder (DFlash-style, 7 tokens/forward); MiMo ViT 681M (24 SWA + 4 GA), audio 25Hz→6.25Hz patching.

### Raw benchmarks found

Vendor-reported (MiMo-V2.6 technical report / HF README, Flash column):

- Agent/tool: Toolathlon-Verified **73.6**, OSWorld-Verified **80.8**, AutomationBench v1.0.6 **52.3**, JobBench **61.2**, Agents' Last Exam **27.6**, TB4.0 **28.8**, TB2.1 **87.6**
- Coding: DeepSWE v1.1 **67.9**, ProgramBench **26.0**, MiMo Code Bench **61.2**
- Cyber: CyberGym **95.1** (above Pro's 94.0), MiMo Cyber Bench 77.2, ExploitGym **6.0**, ExploitBench 25.3, SEC Bench Pro 47.5
- Visual agent: MiMo VisualCoding **71.5**; GDPval-AA 2.1 not reported for Flash ("—" in vendor table)

Independent runs:

- AA (live, not deprecated): Intelligence Index **27** (#11/27 open-weights class; v5.0.1 methodology; BenchLM carries 26.7 — consistent snapshot); AA-HLE **35.1**, AA-Omniscience **−10.8** (accuracy 27.2, hallucination 52.2), AA-LCR **74.3**, CritPt **12.0**, GDPval-AA normalized **55.4%** (elite — above Sonnet 5's 48.2%), AA-SciCode 51.3, AA-MMMU-Pro 73.1; 38 tok/s, TTFT 36.73s, 58.4 min/task, 163M tokens
- BenchLM aggregate **55.14/100, #73 of 1026** (25/815 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-V 80.8, Toolathlon-V 73.6, AutomationBench 52.3, JobBench 61.2, GDPval normalized **55.4%**, CyberGym **95.1** (elite defensive cyber) — near-Pro agentic capability at 15B active; capped by ALE 27.6, ExploitGym 6.0, ExploitBench 25.3, TB4.0 28.8, and no BrowseComp/MCP Atlas rows.
- **Reasoning: 78/100.** AA-HLE 35.1 (decent for class), AA index 27 (≈ GLM-5.3-Flash's 28 on the same v5.0.1); capped by CritPt 12.0, Omniscience **−10.8** (52.2% hallucination — weak knowledge reliability), and no GPQA/MMLU/FrontierMath/vendor-HLE rows published.
- **Context window: 84/100.** 1M with hybrid SWA/GA efficiency, **98% cache discount**, trained for long tool traces/multi-session runs; deducted for AA-LCR 74.3 (mid-pack, below DS Flash's 84.0 and Sonnet 5's 82.0) and no MRCR/MLCR deep-retrieval evidence.
- **Multimodal: 80/100.** Native omni input claimed (text/image/video/audio — ViT + dual audio encoders), MiMo VisualCoding 71.5; capped by the hosted API exposing only text+image (AA), MMMU-Pro 73.1 (mid), and no CharXiv/Video-MME/audio benchmark rows.
- **Coding: 85/100.** DeepSWE **67.9** (near Pro's 71.9, well above Sonnet 5's 53.8), TB2.1 **87.6** (elite), MiMo Code Bench 61.2, SciCode 51.3, harness-transfer RL training; capped by TB4.0 28.8, ProgramBench 26.0, and no SWE-V/SWE-Pro/FrontierCode/CursorBench rows.
- **Cost efficiency: 95/100.** $0.14/$0.28 with 98% cache and **$0.13/task** (top-3 cheapest in its AA class), MIT open weights with consumer-grade 15B-active serving — exceptional; deducted for very slow delivery (38 tok/s, 58.4 min/task) and extreme verbosity (163M index tokens) that inflate real-world output bills and latency.
- **Overall Score: 82.6/100.** Mean of the five quality dims (86+78+84+80+85)/5 = 82.6. Best-fit: budget agentic coding and computer-use at scale, defensive cyber workflows (CyberGym 95.1), and self-hosted omni agents where MIT licensing and $0.13/task matter more than latency or knowledge reliability; pair with retrieval/verification for factual work (Omniscience −10.8). Pro remains the stronger sibling; Flash trades ~1 index point and some reasoning for ~3× lower token prices.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Xiaomi's official HF README fetched in full including the technical-report evaluation table, Artificial Analysis' live page, BenchLM profile, official mimo.mi.com rate card and OpenRouter listing via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: modalities — vendor native omni (text/image/video/audio) vs AA hosted API text+image only (access-path gap); AA index live 27 vs BenchLM 26.7 (consistent snapshots, same era); GDPval-AA — vendor table omits Flash ("—") vs AA normalized 55.4% (independent only); context 1M/128K (README/AA) vs 1,050,000/131,072 (OpenRouter) — precision difference; pricing $0.14/$0.28 (AA/OpenRouter USD) vs official CNY card (¥0.02 cache hit) — currency/region. Vendor table peer columns (e.g., GPT-5.6 Sol DeepSWE 73.0) differ from other cards (72.7 Google) — harness differences; only the Flash column is scored. Identity: MiMo-V2.6-Flash ≠ MiMo-V2.6-Pro ≠ MiMo-V2.5 ≠ MiMo-V2-Flash; RL is the post-trained open checkpoint suffix, not a separate model.
- Reference URLs:
  - [MiMo-V2.6-Flash-RL model card — Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [MiMo-V2.6 technical report — Xiaomi (PDF)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - [Introducing MiMo-V2.6 series — Xiaomi](https://mimo.xiaomi.com/mimo-v2-6)
  - [MiMo-V2.6-Flash — Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [MiMo-V2.6-Flash benchmark profile — BenchLM](https://benchlm.ai/models/mimo-v2-6-flash)
  - [MiMo-V2.6-Flash — OpenRouter](https://openrouter.ai/xiaomi/mimo-v2.6-flash)
  - [MiMo-V2.6-Flash official model page — Xiaomi MiMo](https://mimo.mi.com/models/en-US/mimo-v2.6-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.