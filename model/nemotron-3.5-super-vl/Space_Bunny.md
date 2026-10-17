# Nemotron 3.5 Super VL — findings by Space Bunny

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B-A12B
- **Short description:** NVIDIA's open-weight 120B-A12B mixture-of-experts vision-language reasoning model for always-on multimodal agents — document intelligence, web/PDF understanding, video, and tool-assisted multi-step work. Released 2026-10-15 with two edge siblings (Bolt 74B-A9B, Bolt E4B). It is the multimodal member of the Nemotron 3.5 Super family, not an alias of the text-only Nemotron 3.5 Super: it adds a C-RADIO/RADIO vision encoder, a vision-language connector, and a temporal video embedder on top of the shared Nemotron-H decoder.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` and the NVFP4 checkpoint; NVIDIA Build NIM endpoint `nemotron-3.5-super-vl-120b-a12b`; also Baseten, Together AI, Blackbox AI and ~8 API providers per Artificial Analysis. All third-party endpoints are OpenAI-compatible Chat Completions (`https://inference.baseten.co/v1`, temperature 1.0 / top_p 0.95 recommended, `chat_template_kwargs.enable_thinking` toggles reasoning). Not on OpenCode Zen.
- **Release / knowledge:** released 2026-10-15 on Build.NVIDIA.com and Hugging Face; trained on ~26T tokens (pretraining + continued pretraining), post-trained on ~3.8M samples plus RL across dozens of environments. Knowledge cutoff not published.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`, Build endpoint `nvidia/nemotron-3.5-super-vl-120b-a12b`. No Free tier ID.
- **Context window:** up to **1,000,000 tokens**, shared across prompt, visual inputs, conversation history, tool results and generated response (NIM model card; Artificial Analysis; Together; Baseten all confirm 1M).
- **Modalities:** text + image + video + document/PDF in, text out; no audio encoder (explicitly audio-free in the Megatron Bridge docs); reasoning toggled via chat template; tool calls supported; `max_tokens` 16,000 typical in hosted examples.
- **Pricing (as of 2026-10-17):** hosted pricing varies by provider — Artificial Analysis median across providers **$0.23 in / $0.57 out per 1M** (78% cache discount, $0.19 cache hit); Baseten $0.20 / $0.50 with $0.04 cache input; Blackbox AI $0.20 / $0.50. Paid, but among the cheapest frontier-adjacent options measured. Weights are free to download.
- **Architecture:** 120B total / 12B active MoE; Mamba-2 + attention hybrid ("Nemotron-H") with Multi-Token Prediction for speculative decoding, 512 routed experts per MoE layer; C-RADIO vision encoder + vision-language connector + separate temporal video embedder; NVFP4 quantization with quantization-aware distillation (99.62% median accuracy recovery vs BF16 across 36 benchmarks).

### Raw benchmarks found

Agent / tool use:

- Tau2-bench retail: **69.24%** (BF16) / **69.30%** (NVFP4); airline: **76.50%** / **75.75%**; telecom: **73.19%** / **73.19%** (NVIDIA NIM model card, NeMo Gym harness)
- **Tau3-Bench banking: 18.88%** (BF16) / **17.78%** (NVFP4) — a severe drop versus Tau2, the clearest weakness in the whole suite
- Terminal-Bench 2.1: **66.70%** (BF16) / **60.80%** (NVFP4); with parallel agent execution + self-verification the text-only Super line reaches **71.9%**
- BrowseComp: **78.0%** (BF16) / **77.5%** (NVFP4); the technical report cites a scaled 71.5% → 79.8% gain from parallel execution plus self-verification
- GDPval-AA v2: **1211** Elo (BF16) / **1206** (NVFP4)
- IFBench (prompt-level instruction following): **70.86%** / **71.50%**
- Benchmark-copying caveat: BenchLM's mirror reproduces these same NVIDIA-sourced numbers rather than re-running them, so they are vendor-reported, not independent.

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (BF16) / **89.90%** (NVFP4)
- HLE, text-only: **31.79%** / **31.44%**
- APEX shortlist: **88.36%** / **89.36%**
- MMLU-ProX: **76.91%** / **73.76%**
- AA-Omniscience accuracy / hallucination rate: **26.20% / 30.0%** (BF16), **25.86% / 27.7%** (NVFP4); AA-Omniscience index **4.03** / **5.3**
- CritPt: **10.9%** (BenchLM, vendor-sourced)
- Artificial Analysis Intelligence Index: **26 / #27 of 704 models, #1 of 67 in its open-weight size class** (class median 8)
- WMT24++ translation: **84.80** / **84.76**

Coding:

- SWE-bench Verified: **71.10%** (BF16) / **71.07%** (NVFP4)
- SWE-bench Pro: **51.78%** (BF16) / **51.30%** (NVFP4) — NVIDIA's headline claim: beats Nemotron 3 Ultra with ~4.6× fewer active parameters
- SWE-bench Multilingual: **67.72%** / **67.00%**
- LiveCodeBench v6: **88.22%** / **87.41%**
- SciCode (subtask): **47.13%** / **46.61%**
- DeepSWE: **24.6% → 34.5%** with parallel agent execution + self-verification (text-only Super line; VL figure not separately published)

Long context:

- AA-LCR v1.1: **68.62%** (BF16) / **67.69%** (NVFP4)
- GraphWalks: **89.71%** / **90.34%**
- Text-only Super lineage: RULER-1M was recovered from **33.5 → 81.0** by a final 9-billion-token 1M-context stage (RULER 256k **96.30**, 512k **95.67**, 1M **91.75** on the text-only checkpoint). These RULER numbers belong to Super 120B text-only and are **not** the VL checkpoint's scores.

Multimodal:

- V* (visual search): **85.60%** / **85.95%**
- MMLongBench-Doc: **62.82%** (both precisions)
- BabyVision: **29.60%** / **29.51%** — very weak
- BenchLM multimodal & grounded public-lane score: **51.8 (estimated, #73/184)**
- LMArena v3 proxy (conversation): **52.67** / **51.93**

Speed / efficiency (independent):

- Output speed **388.0 tokens/s**, **#1 of 283** on Artificial Analysis (class median 102); TTFT **0.75 s** (class median 1.75 s) — NVIDIA's "up to 5× faster than the next best in class" and "5× faster throughput on the AA Intelligence Index leaderboard" claims
- 4,856 output tokens/s/GPU on a single GB200; 2.34× / 1.90× the throughput of Qwen3.5-122B-A10B and Qwen3.8 Flash-Next
- EXO Labs independently placed Super VL on the accuracy-vs-task-time Pareto frontier versus open models fitting a single DGX Spark 128GB
- NVIDIA technical blog claims **4× faster task completion**; NVFP4 delivers 2.43× BF16 throughput

### Normalized scores (1–100)

- **Tool use: 82/100.** Consistently strong conversational tool use: Tau2 retail 69.2 / airline 76.5 / telecom 73.2, Terminal-Bench 2.1 66.7, BrowseComp 78.0, IFBench 70.9, and NVIDIA's evidence that Super continues through failures that stop smaller agents. Capped hard by **Tau3-Bench banking at 18.9%** — a 50+ point cliff from Tau2 on the harder agentic benchmark, which is the single most important reservation for production agent use, and by the fact that essentially every tool number here is vendor-run through NeMo Gym rather than independently reproduced.
- **Reasoning: 76/100.** Genuinely strong scientific reasoning — GPQA Diamond 89.5, APEX shortlist 88.4 — with an AA Intelligence Index of 26 that is #1 in its open-weight 40B–150B class yet only mid-pack globally (vs Claude Opus 5 at 51, Opus 4.7 at 41). Capped by HLE at only 31.8%, CritPt at 10.9%, and an AA-Omniscience hallucination rate near 30%.
- **Context window: 90/100.** A genuine 1,000,000-token window where prompt, images, history and tool results all share the budget — verified by NVIDIA, Artificial Analysis, Together and Baseten — with AA-LCR 68.6% and GraphWalks 89.7% at length. Held below the very top because the VL checkpoint's own long-context retrieval (68.6 LCR) trails the text-only Super's RULER-1M recovery story, and because the RULER numbers people quote for this model are the text-only checkpoint's, not its.
- **Multimodal: 78/100.** Real, broad visual coverage — text, image, document/PDF, video with a dedicated temporal embedder, strong OCR/table/chart focus, V* 85.6 — and it is the practical choice for agents that must read screenshots, scanned PDFs, and web pages in one pass. Held well below the leaders by **BabyVision at 29.6%** (a very weak grounded-perception score) and MMLongBench-Doc at 62.8%, with no audio path at all.
- **Coding: 84/100.** Above-average open-weight engineering: SWE-bench Verified 71.1%, SWE-bench Pro 51.8% (better than Nemotron 3 Ultra at a quarter of the active params), SWE Multilingual 67.7%, LiveCodeBench v6 88.2%, Terminal-Bench 2.1 66.7%, SciCode 47.1%. Not higher because the figures trail the frontier on every coding axis and the harness spread matters (NVIDIA's own text-only Super scores 59–60 on SWE-bench Verified under OpenHands/OpenCode versus 60.5 here, and DeepSWE without test-time scaling is only 10.4%).
- **Cost efficiency: 92/100.** Outstanding value: ~$0.23 in / $0.57 out per 1M with a 78% cache discount, at 388 tokens/s — the cost-per-task on the AA Intelligence Index is **$0.19**, and the weights are openly downloadable for on-prem deployment where inference cost approaches zero. Marked down only because hosted providers vary ($0.20–$0.23 in) and the model is verbose (170M output tokens on the AA Index, class median 100M), which inflates real spend.
- **Overall Score: 82/100.** Mean of the five non-cost dims (82 + 76 + 90 + 78 + 84) / 5 = 82.0. Best-fit recommendation: the pick for high-volume, private, million-token multimodal document/web/video agents where cost and self-hosting matter more than frontier reasoning — and a clear no for unattended banking-grade transactional agents until the Tau3-bench banking result (18.9%) is understood.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across the NVIDIA Build NIM model card for both BF16 and NVFP4 checkpoints, the Nemotron 3.5 Super and Lightning Technical Report (2026-10-14) and NVIDIA research landing page, the NVIDIA developer technical blog, NVIDIA Megatron Bridge and Nemotron evaluation docs, Artificial Analysis model page, Baseten / Together AI / Blackbox AI listings, the NeMo skills evaluation mirror, and BenchLM comparison pages. Conflicting figures (RULER numbers belonging to the text-only Super checkpoint; BenchLM reusing NVIDIA-sourced rows; BF16-vs-NVFP4 precision deltas of 1–6 points) were separated and attributed to the exact checkpoint and harness; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.