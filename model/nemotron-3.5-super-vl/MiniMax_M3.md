# Nemotron 3.5 Super VL — findings by MiniMax M3

> NVIDIA's open multimodal hybrid-MoE. Vision-language agentic specialist distilled from
> Nemotron 3 Ultra. 120B total / 12B active, native image/document/video in.

## Model card

- **Vendor:** NVIDIA (open weights; `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` on Hugging Face; build.nvidia.com NIM endpoint).
- **Released:** 2026-10-15 (NVIDIA developer blog by Chris Alexiuk & Chintan Patel).
- **Architecture:** 120B total / 12B active hybrid MoE (Mamba-Transformer backbone, in line with the Nemotron-3 family that introduced LatentMoE). Distilled from Nemotron 3 Ultra via multi-teacher on-policy distillation (MOPD); NVFP4 + QAD quantization; LiLiCorr speculative decoding; multi-token prediction; KV-cache reuse for agent turns. SkewReverse loss during distillation specifically targets coding accuracy.
- **Context:** 128K (per `meta.json`; the free-tier Nemotron 3 Super sibling ships 262K — the Super VL cut here is a more conservative 128K). Two-stage SFT pipeline merges text + visual + agent-trajectory data.
- **Modalities:** Text in/out (per `meta.json`'s scaffolded entry); the actual model is **text + image + document + video in, text out** — covers OCR, charts, tables, multipage PDFs, and video understanding. The "VL" suffix = vision-language.
- **Pricing:** Approx. $0.10 / $0.50 per 1M in / out (matches Nemotron 3 Super tier on DeepInfra/Requesty; OpenRouter-hosted). NVFP4 quantization makes a single-GPU deployment possible on DGX Spark 128GB.
- **Position:** Within NVIDIA's "system of models", Super VL sits below Nemotron 3 Ultra (frontier planning) and above Nemotron 3.5 Lightning Free (high-volume text). Targets specialized agent workloads — document intelligence, cybersecurity triage, receipt extraction, scientific experimentation, medical insurance claims — where post-training on enterprise data gives 30–44 % gains.

### Raw benchmarks found

- **Agent evals (NVIDIA partner harness, 2026-10)**
  - Hermes Bench: **63.44 %** (vs Nemotron 3 Ultra 56.33 %, +7.11 pp).
  - LangChain behavioral evals: **87.05 %** (vs Nemotron 3 Ultra 84.3 %, +2.75 pp).
- **Chart / vision reasoning**
  - CharXiv (chart reasoning): **80.8 %** (vs Nemotron 3 Nano Omni 63 %); with Python code interpretation: **84 %**.
  - OCRBench v2: top-tier open model (no precise % published, NVIDIA says "one of the top open models").
- **Coding**
  - SWE-bench: outperforms Nemotron 3 Super across multiple evaluation setups (NVIDIA blog, no absolute % published).
  - Terminal-Bench: same — outperforms Nemotron 3 Super (no absolute % published).
  - PlotlyDataAnalyticsBench: **30 / 43 ≈ 69.8 %** for $0.46 / run (Plotly blog, 2026-10) — close to Nemotron 3 Ultra at 1/15 the cost.
- **Indic benchmarks (specialty)**
  - MILU 1.5 / Indic GPQA / Indic AIME / Indic FrontierMath / Indic MBPP: post-trained Super VL **leads all five** over Sarvam-105B and Gemma-4-31B-It; largest lead on Indic FrontierMath. Driven by 10B extra Indic tokens (22-language Nemotron-pretraining-Indic-v1, developed with IIT Madras / AI4Bharat).
- **Multimodal breadth**
  - CharXiv 80.8 % + Python 84 %; OCRBench v2 top; native video understanding per the NVIDIA partner ecosystem.
- **Throughput / efficiency**
  - 600+ output TPS on Artificial Analysis Intelligence Index agentic tasks (Baseten endpoint).
  - 5× higher throughput vs comparable open models on a single GPU.
  - 4× faster task completion on 10,000-task B200 runs.
  - NVIDIA Dynamo: 8× more users served, 85 % lower first-token latency (KV-aware routing with session affinity, KV cache offload).

### Normalized scores (1–100)

- **Tool use: 76/100.** Outperforms Nemotron 3 Ultra on Hermes Bench + LangChain behavioral evals, but NVIDIA is the only source publishing absolute tool-use numbers and the post-training enterprise gains (15-44 %) are specialized, not general agent reliability. The 128K context also drags on long-tool-trajectory tasks compared to Nemotron 3 Super (262K).
- **Reasoning: 79/100.** NVIDIA positions Super VL as the "specialized mid-tier" reasoning model — explicitly below Nemotron 3 Ultra on planning, above Lightning on math. CharXiv 80.8 % and Hermes Bench 63.44 % are the strongest public numbers; no GPQA / AIME / HLE numbers published for this cut.
- **Context window: 92/100.** 128K is large but not extreme by 2026 standards. The Nemotron 3 Super sibling reaches 262K, and the frontier (GPT-6 Sol, Kimi K3, Qwen 3.8 1M) is 1M+ — so 128K is well above the median but below the long-context leaders. **Downgraded by the 128K vs 262K sibling inconsistency**.
- **Multimodal: 85/100.** Native vision-language is the core competence: image + document + video, with a two-stage SFT pipeline merging text + visual + agent-trajectory data. CharXiv 80.8 % (+ Python 84 %) and OCRBench v2 top-tier are concrete wins. The 22-language Indic stack and 40 open vision-language datasets are a real post-training asset.
- **Coding: 75/100.** "Outperforms Nemotron 3 Super on SWE-bench and Terminal-Bench across multiple evaluation setups" — no absolute % published. PlotlyDataAnalyticsBench 69.8 % at $0.46/run is the only number on the leaderboard. Coding is a competence, not the headline.
- **Cost efficiency: 93/100.** $0.10 / $0.50 per 1M (DeepInfra/Requesty); open weights with NVFP4 quantization enable a single-GPU 128GB deployment. NVIDIA partner quotes: 40× lower inference cost, 10× lower latency, 40 % higher accuracy vs the frontier models it replaced in those workflows. The most cost-attractive open-weight vision-language model in the Nemotron line.
- **Overall Score: 81/100.** Half-up mean of the 5 non-cost quality dims: (76 + 79 + 92 + 85 + 75) / 5 = 407 / 5 = 81.4 → **81**.

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
