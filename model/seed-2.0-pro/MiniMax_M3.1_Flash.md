# Seed 2.0 Pro — findings by MiniMax M3.1 Flash

- Source: ByteDance Seed (`Doubao-Seed-2.0-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao-Seed-2.0-pro)
- **Short description:** 字节跳动 Seed 团队 Seed2.0 系列的**旗舰 Pro 档**，2026-02-14 随 Seed2.0（Pro / Lite / Mini + Code）发布 —— 当时 "ranks 6th on the LMSYS Chatbot Arena — Text Arena (Overall) leaderboard and 3rd on the Vision Arena leaderboard"，并在模型卡中宣称 "achieves a Pass@8 score of **73.02%**, significantly outperforming GPT-5.2 and Gemini-3-Pro"、五项赛事全拿金牌。**闭源 API 模型**（仅 Seed-OSS-36B 开权重），且 **AA / Vals AI / BenchLM 都没有它的条目** —— 因此本模型的公开证据几乎全部来自厂商自己的表格。
- **Provider / access:** 火山方舟 / Volcano Engine `Doubao-Seed-2.0-pro`（快照 `doubao-seed-2-0-pro-260215`；BytePlus 上另有 `seed-2-0-pro-260328`）；DeepInfra `ByteDance/Seed-2.0-pro`；Ofox / ZenMux `volcengine/doubao-seed-2.0-pro`；Requesty `seed-2.0-pro`。**OpenRouter 上没有这个模型**（只有 `bytedance-seed/seed-2.0-mini` / `seed-2.0-code` / `seed-2.0-lite` / `seed-2.1-turbo` / `seed-1.6(-flash)`）。
- **Release / knowledge:** 官方 blog "Seed 2.0 Official Launch" 标注 **2026-02-14**（hardAIs 记 2026-02-13）。Knowledge cutoff: **未公布**。
- **IDs:** `Doubao-Seed-2.0-pro`（Ark）、`doubao-seed-2-0-pro-260215`（models.dev / volcengine）、`seed-2-0-pro-260328`（BytePlus playground `modelId`）、`ByteDance/Seed-2.0-pro`（DeepInfra）。
- **Context window:** **256,000**；max output **128,000**（models.dev volcengine；各聚合器一致）。
- **Modalities:** 输入 文本+图像+视频 → 输出 文本（音频输入仅见于 4 月底的 Seed2.0 Lite 更新）。
- **Reasoning controls:** effort 档位 none / minimal / low / medium / high / xhigh / max；DeepInfra 注明"tiered quality–budget options of the vision input (low, high, xhigh)"。
- **Pricing (as of 2026-10-19, per 1M tokens):** 官方模型卡 Table 1 —— "Seed2.0 Pro **$0.47（¥3.41）$2.37（¥17.04）**"；models.dev $0.475 / $2.375 / cache read $0.095，并带 context 分档：32K（$0.712 / $3.562）、128K（$1.425 / $7.125）；DeepInfra $0.50 / $3.00 / $0.10；hardAIs 约 $0.45 / $2.25。限速：**无公开数值**。
- **Architecture:** 参数量与结构**未公布**（官方 Seed2.0 Model Card PDF 与站点均无披露）；闭源，Volcano Engine 专有条款。

### Raw benchmarks found

> 以下全部为**厂商表格**（`seed.bytedance.com/en/seed2` 的 "Seed2.0 Pro(0215)" 列，2026-02-15 快照）。**没有 AA、VALS AI 或 BENCHLM 的独立行** —— 这是本条目最重要的证据限制。

Agent / tool use (vendor):

- BrowseComp **77.3**；WideSearch **74.7**；MultiChallenge **68.3**；ResearchRubrics **50.7**；Tob-Agent **52.6**；FinSearchComp 70.2；GDPval **54.4**；Terminal Bench 2.0 **55.8**；OSWorld-Verified **78.0**；MobileWorld 56.4；DeepPlanning 41.5；SWE Multilingual 71.7
- 无 Toolathlon / MCP-Atlas / τ-bench / APEX-Agents / Claw-Eval 行

Reasoning / knowledge (vendor):

- GPQA Diamond **88.9**；SuperGPQA **68.7**；BeyondAIME **86.5**；FrontierSci-olympiad **74.0**；Superchem **51.6**；BABE **53.5**；CL-Bench 20.8；MathVision **88.8**；MMMLU 89.0；MMLU-Pro 88.5；MMLU-Redux 94.5；MMAnswerBench 83.8；HLE (no tool) **32.4**；HiPhO 74.1
- **Pass@8 73.02%**（模型卡，"significantly outperforming GPT-5.2 and Gemini-3-Pro"）
- LMSYS Chatbot Arena：**第 6**（Text Arena, Overall）、**第 3**（Vision Arena），截至 2026-02-16
- 无 FrontierMath / AIME / ARC-AGI / CritPt 行

Coding (vendor):

- SWE-Bench Pro **46.9**；NL2Repo-Bench **27.9**；PaperBench **53.8**；LiveCodeBench / DeepSWE / FrontierCode: **无行**

Vision (vendor, 极长清单):

- MMMU_Pro **78.2**；MMMU 86.0；MedXpertQA-MM **68.1**；BabyVision 60.6；SimpleVQA 71.4；WorldVQA 49.9；CharXiv-DQ **93.5** / CharXiv-RQ 80.5；ERQA 68.5；VLMBias 77.4；VideoMMMU **86.9**；MMVU 78.2；VideoMME **89.5** / VideoMMEv2 60.5；VideoSimpleQA 71.9 / VideoSimpleQA-v2 71.5；SciVideo 52.3；VideoReasonBench 77.8；VideoHolmes 67.4；Minerva 66.5；TVBench 75.0；TOMATO 59.9；EgoTempo 71.8；MotionBench 75.2；ContPhy 67.4；Morese-500 37.4；CGBench 65.0；LongVideoBench 80.3；LVBench 76.4；VideoEval-Pro 47.3；OVBench 69.2；ODVBench 72.5；LiveSports-3K 78.0；OVOBench 77.0；ViSpeak 78.5；CrossVid 61.0；OmniVideoBench 49.5；AVMeme 61.2；JointAVBench 62.3；WorldSense 57.0

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Confidence note:** every number below is vendor-published; no independent tracker has a row for this model. Each score therefore leans on the vendor table and is capped by the absence of independent confirmation.

- **Tool use: 72/100.** BrowseComp **77.3%**, WideSearch 74.7%, MultiChallenge 68.3%, ResearchRubrics 50.7%, Tob-Agent 52.6%, OSWorld-Verified **78.0%**, MobileWorld 56.4%, Terminal Bench 2.0 **55.8%**, GDPval 54.4%, DeepPlanning 41.5%. Capped by the rubric's anchors (TB2.1 ~88%+ → 55.8%; τ3 ~50%+ → not published; GDPval ~1750+ → not published), by the absence of any Toolathlon, MCP-Atlas, τ-bench, APEX-Agents or Claw-Eval row, and by the fact that the whole agentic column is vendor data.
- **Reasoning: 76/100.** GPQA Diamond **88.9%**, BeyondAIME **86.5%**, FrontierSci-olympiad 74.0%, MMMLU 89.0%, MMLU-Pro 88.5%, MMLU-Redux 94.5%, MathVision 88.8%, MMAnswerBench 83.8%, SuperGPQA 68.7%, Superchem 51.6%, BABE 53.5%, HLE **32.4%**, and a Pass@8 of **73.02%** (model card). Capped by HLE at 32.4%, by the absence of FrontierMath, AIME and ARC-AGI rows, and by the total lack of independent measurement — the LMSYS **6th (text) / 3rd (vision)** arena placement (Feb 16, 2026) is the only non-vendor signal and it is now seven months old.
- **Context window: 86/100.** **256,000** tokens with a 128,000 max output — the rubric's 200K–500K band (65–84), pushed slightly above it by a clean 128K output cap. Capped there because **no long-context retrieval measurement exists** and the context is a quarter of what the 2026 field offers.
- **Multimodal: 91/100.** The **strongest published vision suite in this dataset** — text + image + video in with text out, and roughly sixty video/document rows: VideoMME **89.5%**, CharXiv-DQ **93.5%**, MMMU 86.0%, MMMU-Pro 78.2%, OSWorld-Verified 78.0%, VideoMMMU 86.9%, LongVideoBench 80.3%, MLVU 78.2%, MedXpertQA-MM 68.1%, SimpleVQA 71.4%, EgoTempo 71.8%. The rubric's 90–100 band needs audio or non-text output for full credit, and Seed 2.0 Pro has no audio-in, so 91 is the ceiling it can reach.
- **Coding: 68/100.** SWE-Bench Pro **46.9%**, SWE Multilingual 71.7%, Terminal Bench 2.0 55.8%, NL2Repo-Bench 27.9%, PaperBench 53.8%. Capped by SWE-bench Pro at 46.9% (well under the rubric's 74% DeepSWE-class bar), by NL2Repo at 27.9%, and by the absence of any DeepSWE, LiveCodeBench, FrontierSWE or FrontierCode row.
- **Cost efficiency: 90/100.** The evaluated route is Volcano Ark / Model Studio at **$0.47 in / $2.37 out** per 1M (¥3.41 / ¥17.04) with a $0.095 cache read, plus context-length tiers (32K $0.712/$3.562, 128K $1.425/$7.125); DeepInfra $0.50/$3.00; hardAIs ~$0.45/$2.25. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $0.47/$2.37 above 88; the deductions are the 32K/128K tier multipliers and the absence of any published rate limit or Zen route.
- **Overall Score: 78.6/100.** (72 + 76 + 86 + 91 + 68) / 5 = 78.6 — best-fit: a **cheap, exceptionally strong video-and-document multimodal model** (the best vision table in this dataset, by a wide margin) with solid academic reasoning — but a mid-tier coding profile (SWE-bench Pro 46.9%), only a 256K window, and **no independent verification of any single number**.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **No independent data exists.** Artificial Analysis has **no page** for Seed 2.0 Pro (its ByteDance Seed creator page lists only Doubao Seed Code and Seed-OSS-36B-Instruct); Vals AI has no model page; BenchLM's sitemap has `seed-2-0-lite`, `seed-2-0-mini`, `seed-2-1-pro`, `seed-2-1-turbo` but **no `seed-2-0-pro`**. Every score here is vendor-published and labelled as such.
2. **Price spread $0.43–$0.63 in / $2.15–$3.79 out per 1M** across the official card, models.dev, DeepInfra and hardAIs. The official $0.47/$2.37 anchors the cost score.
3. **Release date — 2026-02-14 (official blog) vs 2026-02-13 (hardAIs).** The official date is used; the snapshot suffix `260215` matches the 02-15 build.
4. **Version-confusion risk.** "Seed 2.0 Pro" (Feb 2026) is easily confused with **Seed 2.1 Pro** (2026-06-24, also 256K context but with a 256K max output per BenchLM) and with "Dola-Seed-2.0-Preview". The Arena line in the vendor table is dated "as of Feb 16, 2026" and the Pass@8 claim compares against GPT-5.2 and Gemini-3-Pro — a March-2026-era comparison, so it is a snapshot of February, not a current position.
5. **Parameters, architecture and knowledge cutoff are not published** — three of the model card's usual fields are simply absent.
6. **The vendor's own framing is dated.** "Gold medals in all five contests" and "outperforming GPT-5.2 and Gemini-3-Pro" were true in February 2026; the June-2026 field (GPT-6 Astra, Claude Opus 5.5, Gemini 4 Argon) has moved well past these numbers.

### Notes on identity

- `seed-2.0-pro` is the **Pro tier of the Seed2.0 series** (Pro / Lite / Mini / Code) — a distinct model from `seed-2.1-pro` (June 2026), `seed-2.0-lite`, `seed-2.0-mini` and `seed-2.0-code`.
- It is **not** on OpenRouter and **not** in this dataset's Zen catalogue, so its only first-party route is Volcano Ark / BytePlus; there is no `opencode/seed-2.0-pro`.
- It is **not** `seed-oss-36b` — the only open-weights ByteDance model in this family.
- The 256K context and 128K output are the model's own numbers, not a hosted limitation.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — ByteDance Seed's official Seed2.0 page, launch blog and Model Card PDF, Volcano Engine / Model Studio and BytePlus model documentation, models.dev's `volcengine` and `bytedance` entries, DeepInfra and other aggregator listings, OpenRouter's full model list (confirming the absence), and negative verification at Artificial Analysis, Vals AI and BenchLM. Every number in this report is vendor-published and is labelled as such; the absence of independent trackers is stated in each score line. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Seed_2.0_Pro.md`, using the same headings.
