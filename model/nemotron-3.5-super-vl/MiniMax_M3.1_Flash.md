# Nemotron 3.5 Super VL — findings by MiniMax M3.1 Flash

- Source: NVIDIA (`nvidia/nemotron-3.5-super-vl-120b-a12b`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA 2026 年 10 月的**多模态 MoE**（120B 总 / **12B 激活**），Mamba-2-Transformer 混合架构 + C-RADIO 视觉编码器，原生 MTP 投机解码，从 Nemotron 3 Ultra 蒸馏而来，**OpenMDW-1.1 许可**（"This model is ready for commercial or non-commercial use"）。它同时拿下两个"最快"称号：AA 测得 **434.3 t/s（#1/28）** 与**开放权重 40–150B 档的智能指数第一（26，#1/67）**。
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` 与 `-NVFP4`（2026-10-12 创建，18,759 次下载）；NIM 容器 `nemotron-3.5-super-vl-120b-a12b`；NIM API id `nvidia/nemotron-3.5-super-vl-120b-a12b`；vLLM served name `nemotron-3.5-super-vl`；OpenRouter `nvidia/nemotron-3.5-super-vl`（canonical `-20261015`，另有 `:free`）。
- **Release / knowledge:** released **2026-10-15**（HF "Release Date … 10/15/2026"；NVIDIA 博客同日）。Knowledge cutoff: **未公布**（仅 "Foundation Data Collection Period: 2013 to December 2025"）。
- **IDs:** `nvidia/nemotron-3.5-super-vl-120b-a12b`（NIM API）、`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`（HF）、`nemotron-3.5-super-vl`（vLLM）、`nvidia/nemotron-3.5-super-vl`（OpenRouter）。
- **Context window:** 最高 **1M**；部署需 4×H100 或 2×GB200。Max output: models.dev 记 8,192，OpenRouter provider 记 235,929（未文档化）。
- **Modalities:** 文本、图像、**视频**（mp4 ≤2 分钟）→ 文本。
- **Reasoning controls:** "off, on (medium), and on" via `enable_thinking` / `medium_effort`；工具解析器 `qwen3_coder`、推理解析器 `nemotron_v3`。
- **Pricing (as of 2026-10-19, per 1M tokens):** AA 8 家 provider 中位数 **$0.225 in / $0.575 out**，cache 折扣 78%，blended 7:2:1 $0.1375，**$0.19/task**；OpenRouter $0.15/$0.50，cache read $0.02。**无第一方/NIM 公布价**，无 batch/flex/priority 档与限速数字。
- **Architecture:** 120B 总 / 12B 激活 MoE，Mamba-2-Transformer 混合，C-RADIO 视觉塔，每层 512 个路由专家，原生 MTP 投机解码。

### Raw benchmarks found

> NVIDIA 官方 BF16 模型卡数字标为 "vendor"（post-trained, NeMo Gym）；Artificial Analysis 与 BenchLM 为独立来源。

Agent / tool use (card):

- APEX **88.36%**；Hermes Bench **63.44%**（vs Nemotron 3 Ultra 56.33%）；LangChain Evals **87.05%**（vs 84.3%）；τ² retail/airline/telecom **69.24 / 76.50 / 73.19%**；τ³ banking **18.88%**；BrowseComp **78%**；WebVoyager **77.72%**；Terminal-Bench 2.1 **60.67%**；Terminal-Bench 4 **1**；AutomationBench-AA **32.44%**；GDPval-AA v2 **1211**；AA-Briefcase-Lite 1137/1252/40；DeepSWE **24.65%**
- SWE-bench Verified **71.10%**、Multilingual 67.72%、Pro **51.78%**；LiveCodeBench v6 **88.22%**；SciCode subtask 47.13%；AA-Coding Index 73.0 (via BenchLM)
- NVIDIA 博客："Nemotron 3.5 Super VL delivers over **600 TPS** on Artificial Analysis Intelligence Index agentic tasks on the Baseten endpoint"（100K-token 工作负载）

Reasoning / knowledge:

- GPQA-D **89.52%**；HLE 文本 31.79% / full 29.20%；MMLU-ProX **76.91%**；AA-Omniscience accuracy **26.20%**、hallucination 30.0%、index 4.03；CritPt **10.86%**；AA-LCR v1.1 68.62%；IFBench 70.86%；LMArena v3 proxy 52.67；WMT24++ 84.80%

Vision (card): V\* **85.60%**；OCR-Reasoning **65.08%**；OCRBench v2 EN **68.12%** / ZH 59.15%；CharXiv reasoning **80.82%**；Video-MME v2 32.85%；OSWorld-Verified 51.14%；MathVision 78.16%；BabyVision 29.60%；MMLongBench-Doc 62.82%；MRCR：未列

Independent:

- **Artificial Analysis:** Intelligence Index **26**（**#1 / 67**，开放权重 40–150B 档），**434.3 t/s (#1/28)**，TTFT 0.83s，$0.225/$0.575，78% cache 折扣，**$0.19/task**，170M output tokens (#9/13)；per-eval：TB 4.0 **0%**、TB-Science 0%、FrontierCode 25.52%、SciCode 47.80%、LCR 69.0%、HLE 30.72%、CritPt 10.57%、MMMU-Pro **null**、AutomationBench 14.82%、GDPval 1162.41、Omniscience -4.22 / accuracy 23.28% / hallucination 35.85%
- **BenchLM:** 49.38，**#102/226**；Agentic #63/130，Knowledge #75/186，Instruction-Following #74/148；行：TB 2.1 66.7%、BrowseComp 78%、τ³ 18.9%、τ² airline 76.5%、HLE 29.2% / 无工具 31.8%、GPQA-D 89.5%、CharXiv 80.8%、V\* 85.6%、MathVision 78.2%、MMLongBench-Doc 62.8%、IFBench 70.9%、APEX 88.4%、LiveCodeBench 88.2%
- **无 ARC Prize、tbench.ai 官方榜、官方 LMArena（仅 "v3 proxy"）、swebench.com 行**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** APEX **88.36%**, Hermes Bench 63.44%, LangChain Evals 87.05%, BrowseComp 78%, WebVoyager 77.72%, Terminal-Bench 2.1 60.67% (card) / 66.7% (via BenchLM), τ² airline 76.50%, GDPval-AA 1211, AutomationBench 32.44% (card) / 14.82% (AA). Capped by Terminal-Bench 4 at **1** and TB-Science 0, by τ³-banking 18.88% and AutomationBench in the 15–32% band, and by the absence of any Toolathlon, MCP-Atlas or Claw-Eval row.
- **Reasoning: 76/100.** GPQA-D 89.52%, MMLU-ProX 76.91%, HLE 29.20–31.79%, AA-LCR 68.62%, CritPt 10.86%, FrontierMath: 未列, plus an AA Intelligence Index of **26 — #1 in the 40–150B open-weight class**. Capped by HLE under 32%, CritPt under 11%, by the very low 26.20% Omniscience accuracy (hallucination 30.0% is comparatively good), and by the absence of any FrontierMath or ARC-AGI measurement.
- **Context window: 92/100.** 1M context (4×H100 / 2×GB200 deployment) with GraphWalks **89.71%** on the card — the best published long-context retrieval among the models in this batch alongside Grok 4.x. One point below because the max output is undocumented and inconsistent (8,192 in models.dev vs 235,929 at the provider), and because no MRCR ladder is published.
- **Multimodal: 88/100.** Text + image + **video** in, text out, with a deep vision suite: V\* **85.60%**, OCR-Reasoning 65.08%, OCRBench v2 68.12%/59.15%, CharXiv 80.82%, MMLongBench-Doc 62.82%, MathVision 78.16%, Video-MME v2 32.85%, OSWorld-Verified 51.14%, BabyVision 29.60% (weakest), and a C-RADIO vision tower. The rubric's "+video/PDF = 75–90" band is met near its top; not 90+ because there is no audio input and BabyVision at 29.60% shows the small-model ceiling in fine-grained perception.
- **Coding: 74/100.** SWE-bench Verified **71.10%** / Multilingual 67.72% / Pro 51.78%, LiveCodeBench v6 **88.22%**, Terminal-Bench 2.1 60.67%, SciCode 47.13%, FrontierCode 25.52%, DeepSWE **24.65%**. Capped by DeepSWE at 24.65% (far under the rubric's 74% anchor), by SWE-bench Pro 51.78%, by Terminal-Bench 4 at 1, and by the absence of FrontierCode-independent, CursorBench and LiveCodeBench-official rows.
- **Cost efficiency: 97/100.** The evaluated route is the **8-provider median $0.225 in / $0.575 out** with a 78% cache discount, blended **$0.1375/M**, and Artificial Analysis measures **$0.19 per Index task** (#4 of 8 in its class) — below the rubric's "~$0.60/$2.20 ≈ 92" anchor and among the cheapest per-task models in the dataset. OpenRouter serves it at $0.15/$0.50 with a $0.02 cache read, and a `:free` route exists. The only deduction is that **no first-party price is published** and the max-output figure is undocumented.
- **Overall Score: 80.4/100.** (72 + 76 + 92 + 88 + 74) / 5 = 80.4 — best-fit: **最快的开放权重多模态模型**（434.3 t/s、AA 开放权重 40–150B 档第一、120B/12B 激活、OpenMDW-1.1 可商用、$0.225/$0.575、GraphWalks 89.7%），在**视频/文档/OCR 感知**上有真实优势（Video-MME、OCRBench、V\*）；但代码与长程代理是短板（DeepSWE 24.7%、Terminal-Bench 4 = 1、SWEBench Pro 51.8%）。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 60.67% (NVIDIA card) vs 66.7% (BenchLM's citation of the same card).** A transcription conflict inside the same source; the card's 60.67% is used.
2. **Speed — 434.3 t/s (AA median) vs "over 600 TPS" (NVIDIA's Baseten endpoint).** The AA median is used; the Baseten figure is a single-endpoint agentic number, not a general decode rate.
3. **Price — $0.225/$0.575 (AA 8-provider median) vs $0.15/$0.50 (OpenRouter);** no first-party/NIM price exists at all.
4. **Modalities — AA says "supports text and image input" while the card and OpenRouter say "text, images, and video".** The card wins; AA evaluated the text+image configuration.
5. **Max output — 8,192 (models.dev) vs 235,929 (OpenRouter provider) vs undocumented.** The 8,192 figure is implausibly small for a 1M-context model, so the provider number is quoted and the contradiction flagged.
6. **AA per-eval numeric tables are not retrievable** (chart-rendered), and there is **no independent leaderboard row** — no ARC Prize, no tbench.ai, no official LMArena (only an "LMArena v3 proxy" on the card), no swebench.com — so the evidence base is NVIDIA's card plus AA's index.
7. **Knowledge cutoff is not published** — only a data-collection window ("2013 to December 2025").

### Notes on identity

- `nemotron-3.5-super-vl` is a distinct model from `nemotron-3.5-lightning` (the text-only 30B/A3B) and from `nemotron-3.5-bolt-74b-a9b`; it is the multimodal "Super VL" sibling distilled from **Nemotron 3 Ultra**.
- Its OpenMDW-1.1 licence ("ready for commercial or non-commercial use") is one of the few genuinely permissive licences among the 2026 open-weight models — compare GLM-5.3-Flash and Qwen3.8 (both commercial-with-conditions) and Inkling (Apache-2.0).
- The `:free` route on OpenRouter is a promotion; the paid route and the NIM deployment carry the numbers above.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — NVIDIA's BF16/NVFP4 model cards on Hugging Face (architecture, licence, the full benchmark table), the NVIDIA developer blog, the NIM model page, Artificial Analysis (model page with its per-evaluation payload and provider speed table), the BenchLM evidence ledger, OpenRouter and models.dev, and negative verification at ARC Prize, tbench.ai, LMArena, Epoch AI and swebench.com. Vendor-vs-independent conflicts — the Terminal-Bench transcription, the speed claims, the price sources and the max-output contradiction — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL.md`, using the same headings.
