# MiMo V2.6 Flash — findings by DeepSeek 4.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Official MiMo V2.6 series page + GIGAZINE + CloudPrice re-confirm: released **2026-09-22** (AA/CloudPrice date it 2026-09-21), MIT weights, sparse MoE **309B total / 15B active** (CloudPrice/safetensors list 311B), **1M context** (1,048,576) / ~**128K output**, text/image/video/audio in, text out, **$0.14 / $0.28 / $0.0028 cached** on every provider. Independent rows: AA **Intelligence Index 38** (BenchLM 37.9), **AA-Briefcase v1.1 1493**, **GDPval-AA v2.1 1600–1605**, **AutomationBench-AA 64%**, TB4.0 23%, SciCode 51%, HLE 35%, CritPt 12%, AA-MMMU-Pro 73.1, AA-LCR 74.3; Vals **Index 53.23% (#18/45)**, **CyberBench v1.1 75.36 (#6/45)**, **Vibe Code Bench 78.96**; BenchLM overall **66.03 (#32/889)**; LLM-Stats score 45.4 (#32). Vendor card: **Terminal-Bench 2.1 87.6%**, Toolathlon-Verified 73.6%, **OSWorld-Verified 80.8%**, **CyberGym 95.1%**, DeepSWE v1.1 67.9%.
> **Conflicts surfaced:** (1) **Video input** — official card + CloudPrice list video/audio, but AA's comparison page lists text+image only and Vals excludes video; the broad-modality claim is partly unverified. (2) **Parameters** 309B (prose) vs 311B (HF safetensors/CloudPrice). (3) **ProgramBench** 26.0 (vendor) vs 0.50 (Vals). (4) **Terminal-Bench 4.0** — 28.8 (vendor) vs 24.24 (Vals) vs 23% (AA). (5) **Release** Sep 21 (AA/CloudPrice) vs Sep 22 (official/LLM-Stats/GIGAZINE). (6) **Speed** — AA lists 51–61 t/s, CloudPrice 56 t/s, provider table 31.8–57.5 t/s; "notably slow and verbose" (240M tokens vs 140M median on the Index).
> **Adjusted dimensions (unchanged this pass):** Tool 84, Reasoning 82, Context 95, Multimodal 70, Coding 82; Overall stays **83**.
> Sources: https://mimo.mi.com/models/en-US/mimo-v2.6-flash · https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL · https://artificialanalysis.ai/models/mimo-v2-6-flash · https://www.vals.ai/models/xiaomi_mimo-v2.6-flash · https://benchlm.ai/models/mimo-v2-6-flash · https://cloudprice.net/models/xiaomi-mimo-2-6-flash · https://gigazine.net/gsc_news/en/20260924-mimo-v2-6-pro-flash

## Model card

- **Name:** MiMo V2.6 Flash (weights checkpoint `MiMo-V2.6-Flash-RL`)
- **Short description:** The small sibling in Xiaomi's MiMo V2.6 series — a 309B/15B sparse MoE that AA ranks as a leading open-weights model on intelligence while sitting near the top on cost — but "notably slow and very verbose." Pro sibling is 1.02T/42B active.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-flash`; OpenRouter `xiaomi/mimo-v2.6-flash`; DeepInfra/Novita/GMI via LLM Gateway). Weights open on Hugging Face (MIT). OpenCode Zen carries a `mimo-v2.6-flash-free` route.
- **Release / knowledge:** AA/CloudPrice date it **2026-09-21**; the official series page and LLM-Stats/GIGAZINE say 2026-09-22. Knowledge cutoff undisclosed (the sample system prompt's "December 2024" is generic example text).
- **IDs:** `mimo-v2.6-flash`, `xiaomi/mimo-v2.6-flash`, `mimo-v2.6-flash-free`. The Pro sibling has **no** Zen Free ID — do not conflate.
- **Context window:** **1M tokens (1,048,576)** input; **128K max output** (official card; CloudPrice lists 131K; Vals agrees on 128K).
- **Modalities:** **text, image and (vendor-claimed) video/audio input; text output** — AA lists text+image only and Vals excludes video, so the broad-modality claim is partly unverified.
- **Pricing (as of 2026-10-16):** **$0.14 / 1M in, $0.28 / 1M out** (Xiaomi API), cached **$0.0028** (98% cache discount), ≈$0.06 blended per AA; the Zen `-free` tier is $0. Pro $0.435/$0.87.
- **Architecture:** sparse MoE, **309B total / 15B active** (48 layers, 256 routed experts, 8 active), **MIT licence**; MiMo ViT 681M vision encoder, audio tokenizer + patch encoder; hybrid sliding-window/global attention; 5-layer MTP speculative decoder (up to 3.6 acceptance length / 2.6× decode speedup).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (vendor card); Terminal-Bench 4.0 **28.8%** (vendor) / **24.24%** (Vals) / 23% (AA)
- Toolathlon-Verified **73.6%**; OSWorld-Verified **80.8%**; AutomationBench v1.0.6 **52.3%** (AA 64%); JobBench 61.2%; CyberGym **95.1%**
- CyberBench v1.1 **75.36% (#6/45)** (Vals); GDPval-AA v2.1 **55.5%** (AA); AA-Briefcase v1.1 1493; Agents' Last Exam 27.6%; ExploitGym 6.0%
- MCP-Atlas / SWE-Atlas / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **38** (BenchLM 37.9; #42 on CloudPrice) — leading open-weights band; AA-HLE **35.1%**; CritPt 12.0%; GDP.pdf 9%; AA-Omniscience index −12.7 (accuracy 27.0%, hallucination 54.4%)
- Benchable reliability rows: General Knowledge 99.5%, Mathematics 92.0%, Reasoning 92.0% (percentile-style, not absolute)
- Vals: ProofBench v1.1 63.0%, BioMysteryBench 69.26%, EMB 65.46%, SAGE 43.53%
- GPQA / HLE vendor absolute value: **not published separately**

Coding:

- DeepSWE v1.1: **67.9%** (vendor); Vibe Code Bench v1.1 **78.96%** (Vals); AA-SciCode 51.3% (AA); MiMo Code Bench 61.2% / 77.2%
- ProgramBench 26.0% (vendor) / 0.50% (Vals); Code Migration 40.93% (Vals); IOI 47.67% (Vals)
- SWE-bench Verified / LiveCodeBench: **no verified public score found for the V2.6 ID** (the older MiMo-V2-Flash report's SWE-bench Verified 73.4% / Multilingual 71.7% describe the Dec-2025 model, not this one)

Long context:

- AA-LCR **74.3%** (AA) is the only long-context figure; 1M window verified by AA; **no MRCR/RULER/GraphWalks** published. Speed 51–61 t/s (AA) / 56 t/s (CloudPrice), TTFT 3.27–4.13 s; verbosity 240M output tokens on the Index vs a 140M median. Provider speed spread 31.8–57.5 t/s (Xiaomi fastest).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%, Toolathlon 73.6%, CyberGym 95.1% and CyberBench #6 confirm genuine agent capability; capped by the Vals TB4.0 24.24% and vendor-only sourcing on the headline.
- **Reasoning: 82/100.** AA Index 38 and independent proof/mystery-bench results are strong for a 15B-active model; no GPQA/HLE absolute value exists, and 38 is short of the 60+ frontier reference.
- **Context window: 95/100.** 1M input / 128K output at the floor of the ≥1M tier; no retrieval proof at 512K+.
- **Multimodal: 70/100.** Text and image input with text out is the `+image in = 60–70` band; the vendor's video/audio-input claim is not independently corroborated, so it is scored at the image band top.
- **Coding: 82/100.** DeepSWE 67.9% and independent Vibe Code Bench 78.96% are strong; capped by the Vals ProgramBench 0.50% and no independent SWE-bench.
- **Cost efficiency: 95/100.** $0.14/$0.28, 98% cache discount and ≈$0.06/Index task sit near the ~$0.10/$0.20 ≈ 97–99 band; heavy verbosity is the only drag.
- **Overall Score: 83/100.** (84 + 82 + 95 + 70 + 82) / 5 = 82.6 → **83**. Best fit: cheap high-volume long-context ingestion and agentic work where a 1M window at ~$0.06/Index-task matters more than measured multimodal breadth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (Xiaomi MiMo model card + series page, Hugging Face MiMo-V2.6-Flash-RL card, Artificial Analysis model + provider pages, Vals AI, BenchLM model/compare pages, LLM-Stats, CloudPrice, GIGAZINE, eesel, arXiv MiMo-V2-Flash report). Direct vendor rows were promoted; the video-modality, parameter, ProgramBench, TB4.0 and speed discrepancies are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
