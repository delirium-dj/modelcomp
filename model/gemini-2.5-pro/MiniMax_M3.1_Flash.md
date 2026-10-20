# Gemini 2.5 Pro — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google 的 2025 年 2 月旗舰 —— "debuts at #1 on LMArena by a significant margin"、首个 "ships today with a 1 million token context window (**2 million coming soon**)" 的模型，也是"thinking 不可关闭"这一产品决定的起点（Google 的 thinking 文档把 `gemini-2.5-pro` 列为 thinking **On**，且**只有 low / medium / high 三档**）。它已不再是主力：Google 现在"limiting access to the 2.5 models to users who have actively used them in the past"。
- **Provider / access:** Gemini API `gemini-2.5-pro`（stable；预览 id `gemini-2.5-pro-preview-03-25` / `-preview-05-06` / `-preview-06-05` 已于 2025-12-02 关停），Batch 变体 `gemini-2.5-pro:batch`；OpenRouter `google/gemini-2.5-pro`（另有 `gemini-2-5-pro-03-25` 与 `gemini-2-5-pro-05-06` 快照页）；OpenCode Zen `opencode/gemini-2.5-pro`。
- **Release / knowledge:** 实验版 **2025-03-25**（launch blog）；GA **2025-06-17**（Google deprecations 页；AA 写 "June 5, 2025"；Wikipedia 记 3 月 25 日实验版）。Knowledge cutoff **2025 年 1 月**（OpenRouter `2025-01-31`；AA "Jan 1, 2025"）。
- **IDs:** `gemini-2.5-pro`（stable）、`gemini-2.5-pro-preview-03-25` / `-preview-05-06` / `-preview-06-05`（已关停）、`gemini-2.5-pro:batch`。
- **Context window:** **1,048,576**；max output **65,536**。
- **Modalities:** 输入 文本+图像+音频+视频+文件 → 输出 文本。
- **Reasoning controls:** **不可关闭 thinking**；档位 **low / medium / high**（OpenRouter 标 `reasoning.mandatory: true`）。与 Flash 不同，2.5 Pro 使用 thinking budget/level 体系。
- **Pricing (as of 2026-10-19, per 1M tokens, Paid tier):** 标准 **输入 $1.25**（>200k **$2.50**），**输出（含 thinking）$10.00**（>200k **$15.00**），**context caching $0.125**（>200k $0.25），cache storage **$4.50 / 1M tokens·hour**；**Batch 与 Flex 均为 $0.625 / $5.00**（>200k $1.25/$7.50）；**Priority $2.25 / $18.00**（>200k $4.50/$27.00），cache $0.225，storage $8.10/M·hr；Grounding Search $35/1,000 grounded prompts，Maps $25/1,000。
- **Rate limits:** batch-enqueued tokens —— Tier 1 **5,000,000**；Tier 2 **500,000,000**。
- **Deprecation:** `gemini-2.5-pro` **"No shutdown date announced"**，但"we are limiting access to the 2.5 models to users who have actively used them in the past"；三个 preview 快照均于 **2025-12-02 关停**。Google 推荐的替代品：**Gemini 3.5 Flash-Lite / 3.8 Flash**；其继任链为 Gemini 3 Pro Preview（2025-11-18 → 2026-03-09 关停）、Gemini 3.1 Pro Preview、**Gemini 4 Argon**（2026-10-13 GA）。Gemini 3 Deep Think "Based on the 2.5 Pro 'Deep Think' mode"。

### Raw benchmarks found

> 厂商 launch blog 数字标为 "vendor"；Artificial Analysis 与 BenchLM 为独立来源。Google 当年的 GA launch 表格 URL 已不可达，Per-eval 细项多为 AA 载荷。

Agent / tool use:

- Terminal-Bench 2.1 **28.46%** (AA)；Terminal-Bench 4.0 **0%** (AA)；Terminal-Bench-Hard 26.52% (AA)
- τ²-bench **54.09%** (AA)；τ³-banking **9.69%** (AA)；AutomationBench **2.17%** (AA)
- BrowseComp / MCP-Atlas / Toolathlon / τ-bench (vendor): **no verified public score found**
- Claw-Eval / APEX-Agents / Hermes / OSWorld (2.5 Pro row): **no verified public score found**
- **Vibe Code Bench v1.1: 0.40%** (via BenchLM) — 近乎为零

Reasoning / knowledge:

- GPQA Diamond **84.44%** (AA) / **86.4%** (vendor, launch blog)
- HLE **22.52%** (AA) / **21.6%** (vendor) / 18.8% (via BenchLM)
- AIME 2025 **87.67%** (AA) / **88.0%** (vendor); AIME 2024 92% (via BenchLM)
- MMMU-Pro **74.91%** (AA) / **86.7%** (vendor); LiveCodeBench **80.11%** (AA); SciCode 46.30% (AA); LCR 69.0% (AA); IFBench 48.71% (AA); CritPt **2.57%** (AA)
- Artificial Analysis Intelligence Index: **16**（**#175 / 217** — "among the least intelligent models"），116.3 t/s (#57/186)，TTFT 25.90s，**$0.33/task** (#16/114，AA 成本榜最便宜档之一)，55M output tokens (#44/116)；OpenRouter 内嵌快照：intelligence 16.1、coding 33.3、agentic 1.6
- Omniscience index **-16.35** / accuracy **39.05%** / hallucination **90.89%** (AA); GDPval-AA **455.95 Elo** (AA)
- FrontierMath v2: T1–3 **24.561%**，T4 **0.000%**（经 BenchLM 引用 Epoch AI）— Tier 4 为零
- 无 ARC-AGI / IFBench-independent 公布

Coding:

- SWE-bench Verified **63.8%**（vendor，launch blog）/ 63.8% (via BenchLM) / **54.4%**（Vals AI，mini-SWE-agent）
- LiveCodeBench 80.11% (AA)；SciCode 46.30% (AA)；Terminal-Bench 2.1 28.46%
- **无 SWE-bench Pro、无 DeepSWE、无 LiveCodeBench 官方榜行、无 FrontierCode、无 FrontierSWE**

Long context:

- **无 MRCR / RULER / GraphWalks 公布**；厂商当年只承诺 "2 million coming soon"（未交付）。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 55/100.** τ²-bench **54.09%**, GDPval-AA **455.95 Elo**, Terminal-Bench 2.1 **28.46%**, Terminal-Bench 4.0 **0%**, AutomationBench **2.17%**, τ³-banking 9.69%, Vibe Code Bench 0.40%, Terminal-Bench-Hard 26.52%. This is the weakest agentic profile of any model with real benchmark coverage in this dataset — the rubric's mid band is "TB2.1 45–60%, Tau3 10–25%, GDPval 900–1200 → 50–70", and 2.5 Pro sits **below even that** on two of the three anchors.
- **Reasoning: 68/100.** GPQA Diamond 84.44–86.4%, AIME 2025 87.67–88.0%, MMMU-Pro 74.91–86.7%, LiveCodeBench 80.11%, LCR 69.0%. Capped by the AA Intelligence Index of **16 (#175/217)**, by HLE at 21.6–22.52%, by CritPt **2.57%**, by FrontierMath v2 Tier 4 at **0.000%**, by the negative Omniscience index (-16.35, accuracy 39.05%, hallucination 90.89%), and by the absence of ARC-AGI data.
- **Context window: 93/100.** **1,048,576** tokens with a 65,536 max output — the rubric's top tier on size, with the output cap exactly at the 64k line. One point below because **no long-context retrieval measurement exists** and the promised 2M window never shipped.
- **Multimodal: 88/100.** Text + image + **audio** + video + file in with text out — the rubric's "+audio in = 90–100" band — with MMMU-Pro 74.91% (AA) / 86.7% (vendor) as the main measured row. Held at 88 because the audio support is rarely exercised in published evals and the vision evidence is mostly one number.
- **Coding: 65/100.** SWE-bench Verified 63.8% (vendor) / 54.4% (Vals), Terminal-Bench 2.1 28.46%, LiveCodeBench 80.11%, SciCode 46.30%. Capped by Terminal-Bench 4.0 at **0%**, by the absence of any DeepSWE or SWE-bench Pro number, and by the AA Coding Index of 33.3 — but SWE-bench Verified at 63.8% was, in early 2025, a leading result, which is why the score is not lower.
- **Cost efficiency: 78/100.** The evaluated route is Google's Paid tier at **$1.25 in / $10.00 out** per 1M with a **$0.125 cache read** (90% discount), a >200K tier at $2.50/$15.00, Batch/Flex at $0.625/$5.00 and Priority at $2.25/$18.00. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $1.25/$10 at roughly 78, and Artificial Analysis measures $0.33 per Index task (#16/114) — genuinely cheap per task. The deductions are the $10 output rate and the absence of a $0.50-style cache on the Flash line.
- **Overall Score: 73.8/100.** (55 + 68 + 93 + 88 + 65) / 5 = 73.8 — best-fit: the **2025-Q1 思考时代旗舰** — first 1M context, mandatory thinking, 5 modalities, 1M-window economics, and an LMArena-winning conversational profile — whose benchmark record today is dominated by the fact that the frontier moved: Terminal-Bench 4.0 0%, AutomationBench 2.2%, FrontierMath Tier 4 0.0%, and an AA index of 16 (#175). Its remaining value is a cheap, very long-context, thinking-always-on workhorse for document and video analysis.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Cache price — the widely quoted "$0.31" is wrong.** Google's published cache-read price is **$0.125** ($0.25 above 200K); OpenRouter lists cache read $0.125 and cache **write** $0.375. The report uses Google's number.
2. **Release date — four candidates:** experimental 2025-03-25 (blog), preview 03-25, GA **June 17, 2025** (Google deprecations page), AA's "June 5, 2025" (actually the 06-05 *preview*), Wikipedia's March 25. The GA date is used.
3. **SWE-bench Verified — 63.8% (Google) vs 54.4% (Vals AI).** A 9.4-point harness gap; both are listed and the lower one informs the cap.
4. **GPQA — 86.4% (Google) vs 84.44% (AA); HLE — 21.6% (Google) vs 22.52% (AA) vs 18.8% (BenchLM); MMMU-Pro — 86.7% (Google) vs 74.91% (AA).**
5. **AA index 16 vs OpenRouter's embedded 16.1** (same metric, rounding) and a Coding Index of 33.3 / Agentic Index of 1.6 — the agentic index of 1.6 is the sharpest signal of its agentic profile.
6. **Deprecation semantics.** Google does **not** deprecate `gemini-2.5-pro` ("No shutdown date announced", "not deprecated and will continue to be served until further notice"), but it gates access to 2.5 models by prior usage; Artificial Analysis marks it deprecated. Both statements are recorded — this is an access policy, not a shutdown.
7. **Google's June-2025 GA launch table is unreachable**, so most "vendor" per-eval numbers here come from the March 2025 experimental blog and are two-release-mates old; the GA-era DeepMind/Vertex/Wikipedia pages carry no numbers. That is a real gap in the evidence base and is why the reasoning and tool scores lean on Artificial Analysis.

### Notes on identity

- `gemini-2.5-pro` is a distinct model from `gemini-2.5-flash` / `-flash-lite` (which differ in thinking control: Flash supports a thinking *budget* and 1M context) and from the three preview snapshots (all shut down 2025-12-02).
- It is also the base of **Gemini 3 Deep Think** ("Based on the 2.5 Pro 'Deep Think' mode") — a useful lineage note, since the 2.5 Pro "Deep Think" mode was the first version of what became the 3.x thinking tiers.
- Google now points 2.5 users at **Gemini 3.5 Flash-Lite / 3.8 Flash**; the flagship successor is **Gemini 4 Argon** (2026-10-13), which is in this dataset at Overall 90.6.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google's Gemini API model page, pricing page, thinking documentation, deprecations table and the March-2025 launch blog; the DeepMind Gemini pages; Artificial Analysis (model page with its per-evaluation payload, plus the OpenRouter AA mirror); the BenchLM evidence ledger; OpenRouter and OpenCode Zen catalogs; and negative verification at the official Terminal-Bench board, swebench.com, LMArena, ARC Prize and Epoch AI. Vendor-vs-independent conflicts — the cache-price correction, the four release dates, and the SWE-bench/GPQA/HLE/MMMU spreads — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Pro.md`, using the same headings.
