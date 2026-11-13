# Inkling — findings by Qwen 4 Max

- Source: Vendor (Thinking Machines Lab) + independent trackers; subject slug `Inkling`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Inkling (Thinking Machines Lab's first production model; `thinkingmachines/inkling` on HF)
- **Short description:** Open-weights generalist MoE trained from scratch — "broad, balanced foundation model" for customization: native text/image/audio reasoning, controllable thinking effort (0.2–0.99), fine-tunable on Tinker; vendor explicitly positions it as a customization base, not the strongest overall model.
- **Provider/access:** Tinker API (64K/256K context tiers, fine-tuning + Playground with free agentic web search) + open weights on Hugging Face (original + NVFP4 Blackwell checkpoint); API partners Together AI, Fireworks, Modal, Databricks, Baseten (AA lists 5 providers); inference support SGLang/Miles (RadixArk), vLLM (Inferact), TokenSpeed (Lightseek), llama.cpp (Unsloth), transformers (HF). Runs in OpenCode harness.
- **Release/knowledge:** **July 15 2026** (official post + AA). Knowledge cutoff not published. Not deprecated on AA. Inkling-Small (276B/12B) launched two weeks later as a separate model; Inkling-2-Small is a third, distinct slug.
- **IDs:** `inkling` (AA/BenchLM), `thinkingmachines/inkling` (HF); distinct from `inkling-small`, `inkling-2-small`.
- **Context window:** **1M tokens on open weights**; Tinker API capped at **256K** (64K/256K tiers). AA tracks 1M. Coding evals run at 256K max-token trajectory limit.
- **Modalities:** **Text + image + audio (speech) in; text out** (AA). Encoder-free: dMel spectrogram audio tokens, 40×40-pixel image patches via 4-layer hMLP, shared hidden space; Python tool for image zoom/crop at inference. Pretrain included video (45T tokens total) but video input is not a listed inference modality.
- **Pricing (as of 2026-11-13, per 1M tokens):** AA headline (TM API): **$1.00 in / $4.05 out, 83% cache discount, blended $0.72; $1.35 per Intelligence Index task**. Launch-article Tinker tiers (July 15): 64K $1.87/$0.374 cached/$4.68; 256K $3.74/$0.748/$9.36 — different tier/time, labelled; official post notes a limited-time 50% launch discount.
- **Architecture:** 975B total / **41B active** MoE, DeepSeek-V3-style: 256 routed + 2 shared experts, 6 routed active, sigmoid router with aux-loss-free balancing; **5:1 sliding-window:global attention**, 8 KV heads, **relative positional embeddings (not RoPE)** for length extrapolation, short convolutions on K/V projections and residual branches; Muon (large matrices) + Adam hybrid optimizer; GB300 NVL72; SFT bootstrap on open-model synthetic data (incl. Kimi K2.5) then **30M+ rollout async RL** (log-linear reasoning gains, emergent CoT compression); effort controlled via system message + per-token cost. **Apache 2.0.**

### Raw benchmarks found

Vendor-reported (official post; effort 0.99, temp 1.0; HLE/GPQA/GDPval/τ³/Omniscience/MMMU-Pro rows sourced from AA; SWE-V bash-only harness; TB2.1 internal harness with web-search-contaminated solutions zeroed):
- Reasoning: HLE text **29.7** / tools **46.0**, AIME26 **97.1**, GPQA-D **87.2**, SimpleQA Verified 43.9, AA-Omniscience **+2.1**.
- Agentic coding: SWE-bench Verified **77.6**, SWE-bench Pro **54.3**, Terminal-Bench 2.1 **63.8** (best harness).
- Agentic general: GDPval-AA v2 **1,238 Elo**, MCP Atlas **76.0**, τ³-Banking **23.7**, Toolathlon Verified **45.5**, BrowseComp **77.1** (ctx management).
- Chat/vision/audio: IFBench 79.8, Global-MMLU-Lite 88.7, MMMU-Pro **73.5**, CharXiv RQ **78.1 / 82.0 with Python**, Audio MC **56.6**, MMAU **77.2**, VoiceBench **91.4** (format-instruction system message added — vendor caveat).
- Epistemics (different checkpoint, June 30–July 13 runs): ForecastBench Brier Index 61.1 no-search / 63.7 search; Prophet Arena 0.1617. Safety: FORTRESS adversarial **78.0** / benign 95.9, StrongREJECT 98.6 — strongest FORTRESS among compared open weights.
- Design Arena Agentic Web Dev **1,257** (blinded human eval; ties Opus 4.6, above Gemini 3.5 Flash 1,254 / K2.6 1,249).

Independent runs:
- Artificial Analysis (xhigh, live v5.0.1): **Intelligence Index 12** (#25/28 open-large class, median 24) — vs **41 at launch** (July 15 article, older index version; labelled, never compared across versions). Launch article: GDPval-AA v2 1,238 > K2.6 1,190 / DS V4 Flash max 1,189; τ³ 24% > K2.6 21%; **25K output tokens/task** vs GLM-5.2 43K / K2.6 38K / DS V4 Pro 37K; Omni +2 (acc 40%, hallu 63%). Live page: **84 tok/s, TTFT 21.28s, 10.2 min/task, 80.3M output tokens** (concise vs 106M median).
- AA rows via BenchLM carriage: LCR **77.3**, CritPt **5.4**, AA-HLE **31.9**, GPQA-D 87.2, GDPval-AA v2.1 **1,165 / normalized 28.6%**, Agentic Index **24.3**, Coding Index **52.1**, SciCode **47.0**, Omni **−1.5** (acc 39.3, hallu 67.2 — live update vs +2.1 launch).
- Vals AI: SWE-bench **77.6**, TB2.1 **47.6** (vs vendor 63.8 — harness gap labelled), LCB **85.5**, GPQA-D 87.1, MMLU-Pro 86.3.
- Epoch FrontierMath v2: T1-3 **33.333**, T4 **4.878**. Collinear CWE-bench v1 **37.0**. FrontierSWE v2 **4.1**. Design Arena Website 1,220.
- Inkling-Small launch-post peer column (AA v4.1 era): HMMT 86.3, ARC-1 79.5 / ARC-2 36.5, Briefcase 839, MCP Atlas 78.8 (vs 76.0 launch post — different runs, labelled).
- BenchLM aggregate: **48.25/100, #104 of 1033** (41/830 rows, conservative).

### Normalized scores (1–100)

- **Tool use: 79/100.** MCP Atlas 76.0, BrowseComp 77.1, τ³-Banking 23.7 (beats K2.6 20.6), GDPval 1,238 at launch (above K2.6/DS V4 Flash); capped by Toolathlon-V **45.5**, live GDPval v2.1 **1,165 / 28.6%**, Agentic Index 24.3, Briefcase 839 — solid open-weight agentic breadth, a step below the hosted frontier (GDPval 1,600–1,900 tier) and behind its own newer sibling Inkling-Small on MCP Atlas/Toolathlon/GDPval.
- **Reasoning: 78/100.** AIME26 97.1, HMMT 86.3, GPQA 87.2, HLE 29.7/46.0 (AA-HLE 31.9), GMMLU-Lite 88.7, IFBench 79.8; capped by **CritPt 5.4**, FM v2 T1-3 33.3 / T4 4.9, ARC-2 36.5, live index 12 (v5.0.1), Omni −1.5 with **67.2% hallucination** — competition math strong, frontier science/knowledge reliability mid-tier.
- **Context window: 80/100.** 1M on open weights with LCR **77.3** (above Small's 75.7) and relative-position extrapolation design; deducted because the **hosted Tinker API caps at 256K** (1M requires self-hosting), the 256K tier costs 2× the 64K tier, and no MRCR/MRCRv2 evidence exists.
- **Multimodal: 81/100.** Native encoder-free audio+image: Audio MC **56.6** (best open-weight in its launch table), VoiceBench **91.4**, MMAU 77.2, MMMU-Pro 73.5, CharXiv 78.1/82.0 Python; audio edges out Inkling-Small (54.9/90.1) and Qwen3.5-Omni-Plus on Audio MC; capped by MMMU-Pro 73.5 (K2.6 79.0, Gemini 3.1 Pro 82.0), MMAU 77.2 < Qwen3.5-Omni-Plus 81.1, and no video-input inference support.
- **Coding: 78/100.** SWE-V 77.6 (vendor bash-only = Vals 77.6 — rare agreement), SWE-Pro 54.3, LCB 85.5, Design Arena 1,257 (strong front-end); capped by TB2.1 **63.8 vendor vs 47.6 Vals** (harness gap labelled), Coding Index 52.1, SciCode 47.0, **FrontierSWE v2 4.1**, CWE v1 37.0 — below Inkling-Small's newer-recipe coding (SWE-V 80.2, TB2.1 64.7) and far below frontier coding tiers.
- **Cost efficiency: 85/100.** $1.00/$4.05 with 83% cache (blended $0.72), **$1.35/task**, 84 tok/s, TTFT 21.28s, 10.2 min/task, concise 80.3M tokens — good absolute efficiency for a 975B model; deducted for output price 2.5× the open-large median ($1.59), Tinker 256K tier $3.74/$9.36, and $1.35/task vs Inkling-Small's $0.20 (6.75×).
- **Overall Score: 79.2/100.** Mean of the five quality dimensions (Cost excluded): (79+78+80+81+78)/5 = 79.2. A balanced Apache-2.0 multimodal customization base — slightly above Inkling-Small (78.4) on audio/τ³/LCR, slightly below it on coding/newer-recipe agentic metrics; comparable to Kimi K2.6 (79.0) with audio as the differentiator; well below hosted flagships on frontier reasoning and coding depth.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (Thinking Machines official launch post, Artificial Analysis launch article + live xhigh model page, BenchLM carrying AA/Vals/Epoch/Collinear/FrontierSWE/Design Arena rows); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA index (41 launch July 15 older version vs 12 live v5.0.1); GDPval (1,238 v2 launch vs 1,165 v2.1 live carriage); MCP Atlas (76.0 launch post vs 74.1 BenchLM carriage vs 78.8 Small-post peer column); TB2.1 (63.8 vendor internal harness vs 47.6 Vals); GPQA (87.2 official/AA vs 87.9 BenchLM vendor row); Omni (+2.1 launch vs −1.5 live, hallu 63%→67.2%); pricing (Tinker launch tiers $1.87/$4.68 64K, $3.74/$9.36 256K vs current AA headline $1.00/$4.05 — tier/time differences); context (1M weights vs 256K Tinker API); HLE chart footnote (earlier checkpoint); ForecastBench/Prophet (different checkpoint, June 30–July 13).
- Reference URLs:
  - [Inkling: Our Open-Weights Model — Thinking Machines Lab](https://thinkingmachines.ai/news/introducing-inkling/)
  - [Thinking Machines has released Inkling — Artificial Analysis article](https://artificialanalysis.ai/articles/thinking-machines-has-released-inkling-the-new-leading-u-s-open-weights-model)
  - [Inkling (xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/inkling)
  - [Inkling Benchmark Scores — BenchLM](https://benchlm.ai/models/inkling)
  - [Welcome Inkling — Hugging Face blog](https://huggingface.co/blog/thinkingmachines-inkling)
  - [Inkling — Vals AI](https://www.vals.ai/models/thinkingmachines_inkling)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.