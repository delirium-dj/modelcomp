# Gemini 3.1 Flash-Lite — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google 2026 年 3 月的**速度档 omni 模型** —— "Gemini 3.1 Flash-Lite is **based on Gemini 3 Pro**"，即 Flash-Lite 线用 Pro 的底座做轻量后训练。AA 测得 **366.2 t/s（#8/151）**、智能指数 **16**、价格 **$0.25 in / $1.50 out**（缓存 $0.025），上下文 1M。已被 Gemini 3.5 Flash-Lite（指数 22、454.3 t/s）取代。
- **Provider / access:** Gemini API `gemini-3.1-flash-lite`（GA，Vertex 记 "Launch stage: GA"）；预览 id `gemini-3.1-flash-lite-preview`（已关停）；`gemini-3.1-flash-lite-image`（Nano Banana 2 Lite，图像模型，另计）；OpenRouter `google/gemini-3.1-flash-lite`（GA 创建于 2026-05-06，预览 2026-03-03）+ `:batch`。**不在 OpenCode Zen**（Zen 收录的是 `gemini-3.5-flash-lite`）。
- **Release / knowledge:** 模型卡 "Published 3 March 2026"；Vertex 记 **GA 2026-05-07**，"Retirement date: May 7, 2027 or later"。Knowledge cutoff: **AA 记 2025-01-01**（Google 文档与模型卡未写）。
- **IDs:** `gemini-3.1-flash-lite`（GA）、`gemini-3.1-flash-lite-preview`（已关停）、`google/gemini-3.1-flash-lite`（OpenRouter）。
- **Context window:** **1,048,576** 输入；输出 **65,536**（模型卡措辞 "Text, with a 64K token output"）。
- **Modalities:** 输入 文本+图像+视频+音频+PDF → 输出 文本。
- **Thinking:** 档位 **minimal / low / medium / high**（"You can control how much reasoning the model performs"）。
- **Capabilities:** caching、code execution、function calling、structured outputs、thinking、URL context、file search、Maps/Search grounding 支持；**audio generation、image generation、computer use、Live API 不支持**。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$0.25**（文本/图像/视频；音频 **$0.50**）、输出 **$1.50**（含 thinking）、cache read **$0.025**（音频 $0.05）、cache 存储 $1.00/1M tokens·小时；**Batch & Flex** 输入 $0.125（音频 $0.25）、输出 $0.75、cache $0.0125、存储 $0.50；Search grounding 每月 5,000 次免费，之后 $14/1,000。OpenRouter：$0.25/$1.50，cache read $0.025、cache write $0.0833，batch $0.125/$0.75。
- **Rate limits:** 分层制；batch enqueued tokens 500,000,000（GA 与 preview）。
- **Architecture:** proprietary；"based on Gemini 3 Pro"。

### Raw benchmarks found

> Google 模型卡数字标为 "vendor"（"Gemini 3.1 Flash-Lite High"）；Artificial Analysis 为独立测量；Vals / BenchLM / tbench.ai / ARC / Epoch 均未找到该模型行。

Reasoning / knowledge (card):

- HLE（无工具）**16.0%**；GPQA Diamond **86.9%**；MMMU-Pro **76.8%**；CharXiv **73.2%**；Video-MMMU **84.8%**；SimpleQA Verified **43.3%**；FACTS **40.6%**；MMMLU **88.9%**；LiveCodeBench (1/1–5/1/2025) **72.0%**
- 安全对比 Gemini 2.5 Flash-Lite：Text-to-Text −1.18%、Multilingual −1.84%、Image-to-Text −21.7%、Tone +14.59%、Unjustified refusals −14.41%

Long context (card):

- MRCR v2 8-needle：128k 平均 **60.1%**、1M pointwise **12.3%**；输出速度 **363 t/s**

Independent (Artificial Analysis, 2026-03): Intelligence Index **16** (#73/173)，**366.2 t/s** (#8/151)，TTFT 4.71s，$0.25/$1.50，90% cache 折扣，**$0.06/task**，54M output tokens (#23/68)，1M ctx，cutoff Jan 1 2025；AA 页面注 "Google has launched a newer release, Gemini 3.5 Flash-Lite"。per-eval：TB 2.1 **31.09%**、TB 4.0 **0.51%**、TB-Hard 24.24%、τ² **31.29%**、τ³ 9.69%、SciCode 43.40%、LCR 74.33%、IFBench 77.21%、HLE **17.19%**、GPQA **82.22%**、CritPt **1.14%**、APEX 12.17%、MMMU-Pro 75.55%、AutomationBench **6.80%**、GDPval **430.83 Elo**、EnterpriseOps 28.02%、Omniscience **-16.42** / acc 36.27% / halluc **82.66%**、AnalystAgent 8.75%

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 60/100.** Terminal-Bench 2.1 **31.09%** (AA), τ²-bench **31.29%**, τ³-banking 9.69%, APEX-Agents 12.17%, AutomationBench **6.80%**, GDPval-AA **430.83 Elo**, AnalystAgent 8.75%. Capped by the rubric's anchors (TB2.1 ~88%+ → 31%; τ3 ~50%+ → 9.69%; GDPval ~1750+ → 430.83) and by the absence of any Toolathlon, MCP-Atlas, Claw-Eval or BrowseComp row — this is the weakest agentic profile of any Gemini Flash-Lite measured here.
- **Reasoning: 68/100.** GPQA Diamond 82.22–86.9%, MMMLU 88.9%, MMMU-Pro 75.55%, IFBench 77.21%, LiveCodeBench 72.0%, CharXiv 73.2%, Video-MMMU 84.8%. Capped by HLE at **16.0–17.19%**, CritPt **1.14%**, the AA Intelligence Index of **16**, and by the negative Omniscience index (-16.42) with an 82.66% hallucination rate.
- **Context window: 88/100.** 1,048,576 tokens with a 65,536 max output — the rubric's top tier on window size, with a published MRCR v2 **60.1% at 128k**. One point below because Google's own 1M figure is **12.3% pointwise** (the same collapse as every 2026 Gemini generation) and because no RULER/GraphWalks row exists.
- **Multimodal: 85/100.** Text + image + video + audio + PDF in, text out — the rubric's "+audio in = 90–100" band — with MMMU-Pro 75.55%, Video-MMMU 84.8%, CharXiv 73.2%, SimpleQA Verified 43.3%, FACTS 40.6%. Held at 85 because the vision evidence is entirely vendor-published and the model is explicitly a Flash-Lite tier: perception yes, reasoning and action no.
- **Coding: 64/100.** LiveCodeBench 72.0%, Terminal-Bench 2.1 31.09%, SciCode 43.40%, Terminal-Bench 4.0 **0.51%**, and **no SWE-bench, no DeepSWE, no FrontierCode, no CursorBench, no FrontierSWE row at all**. This is the lowest coding profile of the Gemini models in this dataset and the reason the score sits in the mid-60s despite a respectable LiveCodeBench.
- **Cost efficiency: 95/100.** The evaluated route is **$0.25 in / $0.025 cached / $1.50 out** per 1M, with **Batch & Flex at $0.125 / $0.75** and a $0.0125 cache read, 5,000 free grounding requests/month. The rubric's "~$0.60/$2.20 ≈ 92" band is beaten on the blended rate (AA: $0.06 per Index task, #25 of 66) and the Batch tier halves it again. The deduction is the 2× audio-input price and the fact that the model is deprecated, so the price may not survive.
- **Overall Score: 73.0/100.** (60 + 68 + 88 + 85 + 64) / 5 = 73.0 — best-fit: 2026 年 3 月的**感知优先速度档**（366.2 t/s、全模态输入、1M 上下文、$0.25/$1.50、Batch 减半）—— 适合高并发的文档/音视频理解与分类；但 agent 能力是全批最弱之一（Terminal-Bench 2.1 31.1%、AutomationBench 6.8%），且已被 Gemini 3.5 Flash-Lite（指数 22、454.3 t/s）在同价位全面超越。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **March 3, 2026 = preview/model-card date; May 7, 2026 = GA date** (Vertex "Launch stage: GA", "Release date: May 7, 2026"). Artificial Analysis labels the model "released March 2026" and **deprecated**, while Google lists it Stable with retirement "May 7, 2027 or later" — a status conflict, recorded as such.
2. **Output speed — 363 t/s (Google) vs 366.2 t/s (AA).** Consistent; AA's is used.
3. **"64K token output" (card) vs 65,536 (docs).** Unit wording only.
4. **The knowledge cutoff 2025-01-01 is AA-sourced** and is **not stated** on Google's docs page or the model card — it is flagged as unverified rather than asserted.
5. **No independent row exists anywhere** — no Vals AI, BenchLM, tbench.ai, ARC Prize, Epoch AI or swebench.com entry — so every capability number except the AA index is vendor-published.
6. **AA's per-eval tables are chart-rendered** and not extractable from the page HTML; the values quoted above are the AA payload values, and "AA-PersonalityBench: results are not available for Gemini 3.1 Flash-Lite".
7. **The "-image" id is a different product** (Nano Banana 2 Lite, an image model) and is not counted here.

### Notes on identity

- `gemini-3.1-flash-lite` is a distinct model from `gemini-3.5-flash-lite` (its successor) and from the `gemini-3.1-flash-lite-preview` (shut down) and `gemini-3.1-flash-lite-image` (image model).
- Its lineage note is the interesting part: Google states it is **"based on Gemini 3 Pro"** — the Flash-Lite tier inherits the Pro's foundation, which is why its multimodal ceiling (MMMU-Pro 76.8%, Video-MMMU 84.8%) sits well above its reasoning floor (HLE 16%, Terminal-Bench 2.1 31%).
- It is not on OpenCode Zen, so the 2026 dataset's usual gateway serves the later 3.5 Flash-Lite instead.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google's Gemini API model page and pricing page, the DeepMind Gemini 3.1 Flash-Lite model card (including its benchmark table, safety deltas and MRCR rows), Vertex AI's launch-stage/retirement fields, Artificial Analysis (model page with its per-evaluation payload), OpenRouter's API entry, and negative verification at Vals AI, BenchLM, tbench.ai, ARC Prize, Epoch AI, swebench.com and LMArena. The preview-vs-GA date and the AA-deprecated-vs-Google-Stable status conflict are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Flash_Lite_2.md`, using the same headings.
