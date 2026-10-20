# Qwen3.5 397B — findings by MiniMax M3.1 Flash

- Source: Alibaba (`Qwen/Qwen3.5-397B-A17B`, open weights)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B (A17B)
- **Short description:** Qwen3.5 系列的**首个开放权重旗舰**（2026-02-16）—— 397B 总参 / 17B 激活的稀疏 MoE，混合 **Gated DeltaNet + Gated Attention** 注意力，原生多模态（文本+图像+视频），**Apache-2.0** 许可，262,144 原生上下文可 YaRN 扩展到 1,010,000。它是 Qwen3.5 家族后续所有托管版（`qwen3.5-plus`）的底座，也是本数据集中"学术能力强、agent 能力弱"的一极。
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-397B-A17B`（Apache-2.0）；OpenRouter `qwen/qwen3.5-397b-a17b`（262,144 ctx，创建于 2026-02-15）；Model Studio `qwen3.5-397b-a17b`。
- **Release / knowledge:** released **2026-02-16**（AA "Qwen3.5 397B A17B (Reasoning) was released on February 16, 2026"）。Knowledge cutoff: **未公布**。
- **IDs:** `Qwen/Qwen3.5-397B-A17B`（HF）、`qwen/qwen3.5-397b-a17b`（OpenRouter）、`qwen3.5-397b-a17b`（Model Studio）。
- **Context window:** **262,144 原生**，可扩展至 **1,010,000**（YaRN `rope_type: yarn`）。Max output: OpenRouter 65,536。
- **Modalities:** 文本+图像 → 文本（AA: "supports text and image input"；卡片 demo 含视频输入）。201 种语言。
- **Reasoning controls:** 默认 thinking 模式；可用 `chat_template_kwargs: {"enable_thinking": false}` 关闭（Model Studio: `enable_thinking: false`）；**不支持 Qwen3 的 `/think` 软开关**。采样：thinking `temp 0.6, top_p 0.95, top_k 20`；instruct `temp 0.7, top_p 0.8, presence_penalty 1.5`。
- **Architecture:** 60 层（15 × (3× GatedDeltaNet→MoE + 1× GatedAttention→MoE)），hidden 4096，**512 专家（10 路由 + 1 共享）**，专家维度 1024，词表 248,320，MTP，含视觉编码器。
- **Pricing (as of 2026-10-19, per 1M tokens):** 阿里云 API **$0.60 in / $3.60 out**（cache 折扣未公布）；AA provider 报价：DigitalOcean 与 DeepInfra(FP8) 混合 $0.54、Parasail $0.67、阿里 $0.90；输出 DeepInfra $3.00 / DO $3.50 / 阿里 $3.60；输入 DeepInfra $0.45 / Parasail $0.50 / DO $0.55。OpenRouter **$0.39 / $2.34**。**无自托管 $/小时 公开数字**（卡片建议 TP8）。

### Raw benchmarks found

> 以下为主流均为**权重卡片自报**（OpenAI 风格），独立追踪器只有 AA 智能指数与 LMArena 一行。

Agent / tool use (card):

- TAU2-Bench **86.7%**；BFCL-V4 **72.9%**；MCP-Mark **46.1%**；BrowseComp **69.0**（多轮 78.6）；WideSearch 74.0；Tool Decathlon 38.3；MCP Atlas: 未列
- Terminal Bench 2 **52.5**；DeepPlanning 34.3；VITA-Bench 49.7

Reasoning / knowledge (card):

- MMLU-Pro **87.8**；MMLU-Redux 94.9；GPQA **88.4**；SuperGPQA 70.4；C-Eval 93.0；IFEval **92.6**；IFBench 76.5；MultiChallenge 67.6；AA-LCR 68.7；LongBench v2 63.2；MMMLU 88.5；MMLU-ProX 84.7；PolyMATH 73.3；NOVA-63 59.1；Global PIQA 89.8
- AIME26 **91.3**；HMMT Feb-25 **94.8** / Nov-25 92.7；IMOAnswerBench 80.9；HLE **28.7** / HLE-Verified 37.6 / 带工具 48.3
- FrontierMath: 未列

Coding (card):

- SWE-bench Verified **76.4**；SWE-bench Multilingual 69.3；Terminal Bench 2 52.5；LiveCodeBench v6 **83.6**；SecCodeBench 68.3

Vision (card): MMMU **85.0**；MMMU-Pro **79.0**；MathVision **88.6**；Mathvista(mini) **90.3**；OCRBench 82.0；We-Math 87.9；OSWorld-Verified **62.2**；ScreenSpot Pro 65.6；V\* 95.8/91.1；BabyVision 52.3/43.3；MMLongBench-Doc 61.5；CharXiv (RQ) 84.6/90.2

Independent:

- **Artificial Analysis (Reasoning):** Intelligence Index **18**（#64/121），55.2 t/s (#56/78)，TTFT 2.23s，**$0.47/task**，95M output tokens (#15/47)，262k ctx，6 providers；per-eval：TB 2.1 **51.31%**、TB 4.0 **0%**、TB-Hard 40.91%、τ² 95.61%、τ³ 13.40%、SciCode 44.79%、LCR 77.33%、HLE 28.96%、GPQA 89.29%、CritPt **1.71%**、APEX 15.34%、MMMU-Pro 77.28%、AutomationBench **6.89%**、ITBench 34.09%、GDPval **792.97 Elo**、Omniscience **-30.75** / accuracy **30.8%** / hallucination **88.95%**
- **LMArena (text):** rank **94**（81/109），**1442 ±3**，93,567 votes
- **BenchLM:** "Qwen3.5 397B by Alibaba scores 55.42/100, ranking #66 out of 956 AI models"（估计排名，仅 1 个数据源族，context 标 128K）
- **Vals AI: 无模型页**（sitemap 仅有 `alibaba_qwen3.5-flash`、`alibaba_qwen3.5-plus-thinking`）

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Evidence note:** every capability row except the AA index and the LMArena Elo is vendor-published on the HF model card; the AA index of 18 is measured and *contradicts* the card's marketing. Each line states which is which.

- **Tool use: 66/100.** TAU2-bench **86.7%**, BFCL-V4 72.9%, BrowseComp 69.0/78.6, WideSearch 74.0%, Terminal Bench 2 **52.5%** (card) / 51.31% (AA), DeepPlanning 34.3%, MCP-Mark 46.1%, Tool Decathlon 38.3%, APEX 15.34% (AA). Capped by the rubric's anchors (TB2.1 ~88%+ → 51–52%; τ3 ~50%+ → 13.40%; GDPval ~1750+ → 792.97 Elo), by AutomationBench at **6.89%** (AA), and by the absence of any Toolathlon, MCP-Atlas or Claw-Eval row.
- **Reasoning: 74/100.** AIME26 **91.3%**, HMMT Feb-25 94.8%, IMOAnswerBench 80.9%, MMLU-Pro 87.8%, MMLU-Redux 94.9%, GPQA 88.4%, IFEval 92.6%, IFBench 76.5%, MMLU-ProX 84.7%, plus an LMArena 1442 Elo (#94 of 109). Capped by the measured AA Intelligence Index of **18** ("below average in intelligence and particularly expensive when compared to other open weight models of similar size"), by HLE 28.7%, CritPt **1.71%**, MLCR-AA 0%, and the **negative Omniscience index (-30.75) with 88.95% hallucination at 30.8% accuracy**.
- **Context window: 88/100.** 262,144 native (extensible to 1,010,000 via YaRN), 65,536 max output — the rubric's 200K–500K band (65–84) raised by the extension path and the 1M hosted configuration. One point below because **no retrieval measurement exists** (no MRCR / RULER / GraphWalks row) and the card's own LongBench v2 sits at 63.2%.
- **Multimodal: 86/100.** Text + image (+ video demos) in, text out, with a genuinely strong published vision set: MMMU **85.0%**, MMMU-Pro 79.0%, Mathvista(mini) **90.3%**, MathVision 88.6%, V\* 95.8/91.1, OCRBench 82.0, We-Math 87.9, OSWorld-Verified 62.2%, MMLongBench-Doc 61.5%, CharXiv 84.6/90.2. The rubric's "+video/PDF = 75–90" band is met near its top; not 90+ because there is no audio input and every row is vendor-published.
- **Coding: 70/100.** LiveCodeBench v6 **83.6%**, SWE-bench Verified **76.4%**, SWE-bench Multilingual 69.3%, SecCodeBench 68.3%, Terminal Bench 2 **52.5%** (card) / 51.31% (AA), and **Terminal-Bench 4.0 at 0%** (AA). Capped by the absence of any DeepSWE, SWE-bench Pro, FrontierCode, FrontierSWE or CursorBench row, by the 0% Terminal-Bench 4.0, and by the AA Coding Index implied by an index of 18.
- **Cost efficiency: 86/100.** The evaluated route is the Alibaba API at **$0.60 in / $3.60 out** per 1M, with provider spreads down to $0.45/$3.00 (DeepInfra) and OpenRouter's $0.39/$2.34 — the rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $0.60/$3.60 at roughly 86, and Artificial Analysis measures **$0.47 per Index task** (#26 of 43). The Apache-2.0 weights can also be self-hosted (no published $/hour), and the model is concise (95M output tokens, #15/47). Deductions: no published cache-read price and no self-host cost figure.
- **Overall Score: 76.8/100.** (66 + 74 + 88 + 86 + 70) / 5 = 76.8 — best-fit: 一个**学术型多模态开放权重模型**（MMLU-Pro 87.8%、MMMU 85.0%、AIME26 91.3%、数学与文档理解强，$0.60/$3.60 可自托管）—— 但 **agent 与代码能力明显落后**（Terminal-Bench 4.0 0%、AutomationBench 6.9%、AA 指数仅 18、CritPt 1.7%、知识幻觉率 88.95%），适合推理/抽取/文档任务，不适合代理与编程。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **The AA index of 18 contradicts the card's marketing.** The card's academic numbers are excellent (MMLU-Pro 87.8, AIME26 91.3), but Artificial Analysis measures an index of **18 — "below average in intelligence"** with Terminal-Bench 4.0 at **0%** and AutomationBench at 6.89%. The measured index is used for the reasoning and coding caps; the card's numbers are used only where nothing else exists.
2. **Context — 262,144 (HF, AA, LMArena) vs 128K (BenchLM's spec sheet).** BenchLM's row is unsourced and wrong.
3. **Price — $0.60/$3.60 (Alibaba, AA) vs $0.39/$2.34 (OpenRouter, LMArena),** with four provider prices in between. The vendor list price anchors the cost score.
4. **AA index 18 (reasoning) vs 21.4 (the non-reasoning variant, via BenchLM).**
5. **LMArena rank 94 of 109 open-model text entries** — the only fully independent *ranking* signal available, and it agrees with AA that this model is mid-field.
6. **Qwen3.6-Plus blog values differ from the model card** (VITA-Bench 43.7 vs 49.7, DeepPlanning 37.6 vs 34.3, AIME26 93.3 vs 91.3, τ²-bench 83.9 vs 86.7) — the card is used for 3.5 and the blog's numbers are not mixed in.
7. **No swebench.com, ARC Prize, Epoch AI, Vals AI or tbench.ai row exists for this model** — the independent evidence base is one index and one arena Elo.

### Notes on identity

- `qwen-3.5-397b` is the **open-weights release**, distinct from `model/qwen-3.5-plus/` (the hosted build of the same weights) and from the smaller Qwen3.5 family members (27B, 35B-A3B, 122B-A10B, 9B, 4B, 2B, 0.8B, Omni Plus).
- The family announcement was "Qwen3.5: Towards Native Multimodal Agents" (2026-02-14) — "introducing the open-weight of the first model in the Qwen3.5 series, namely Qwen3.5-397B-A17B".
- The hosted `qwen3.5-plus` row in the dataset scores 79.2 and the open-weights row here 76.8: the same weights, different serving defaults (1M context and built-in tools on the hosted side), and the hosted side's numbers are also largely card-derived.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `Qwen/Qwen3.5-397B-A17B` Hugging Face model card (architecture, licence, context, the full vendor benchmark table), the Qwen3.5 family announcement, Alibaba Cloud Model Studio's model list and pricing, OpenRouter's API and LMArena entry, Artificial Analysis (model page with its per-evaluation payload), the BenchLM evidence ledger, and negative verification at Vals AI, swebench.com, ARC Prize, Epoch AI and tbench.ai. The conflict between the vendor card's academic profile and the measured AA index is stated explicitly in each affected score line. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_397B.md`, using the same headings.
